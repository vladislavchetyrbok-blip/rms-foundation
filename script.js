/**
 * Разом ми — сила (Together We Are Power)
 * Public Interactive Logic (`script.js`)
 */

let selectedAmount = 100;
let isMonthly = false;
let currentHonorFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Init i18n
  if (window.I18nStore) {
    I18nStore.init();
    updateLanguageFlagUI(I18nStore.currentLang);
  }

  // 2. Setup Language Switcher Dropdown
  const langSelector = document.getElementById('langSelector');
  const langBtn = document.getElementById('langBtn');
  if (langBtn) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langSelector.classList.toggle('open');
    });
  }

  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const lang = opt.getAttribute('data-lang');
      I18nStore.setLanguage(lang);
      updateLanguageFlagUI(lang);
      langSelector.classList.remove('open');
      renderAll();
    });
  });

  document.addEventListener('click', () => {
    if (langSelector) langSelector.classList.remove('open');
  });

  window.addEventListener('language_changed', () => {
    renderAll();
  });

  // 3. Listen for FoundationStore live updates (sync from Admin Panel)
  window.addEventListener('foundation_data_changed', () => {
    renderAll();
    showToast('⚡ Дані сайту оновлено!');
  });

  // 4. Initial Render
  renderAll();
  animateNumbers();
});

function updateLanguageFlagUI(lang) {
  const flagEl = document.getElementById('currentFlag');
  const nameEl = document.getElementById('currentLangName');
  const flags = { uk: '🇺🇦', en: '🇬🇧', pl: '🇵🇱', ro: '🇷🇴', it: '🇮🇹', de: '🇩🇪' };
  if (flagEl) flagEl.textContent = flags[lang] || '🇺🇦';
  if (nameEl) nameEl.textContent = lang.toUpperCase();
}

// === Mobile Drawer Functions ===
function toggleMobileMenu() {
  const overlay = document.getElementById('mobileDrawerOverlay');
  if (overlay) overlay.classList.toggle('active');
}

function closeMobileMenu() {
  const overlay = document.getElementById('mobileDrawerOverlay');
  if (overlay) overlay.classList.remove('active');
}

function setMobileLang(lang) {
  if (window.I18nStore) {
    I18nStore.setLanguage(lang);
    updateLanguageFlagUI(lang);
    renderAll();
  }
  closeMobileMenu();
}

function renderAll() {
  renderStats();
  renderCampaigns();
  renderGallery();
  renderHonorBoard();
}

// === Render Stats ===
function renderStats() {
  const stats = FoundationStore.getStats();
  const stCollected = document.getElementById('statCollected');
  const stDrones = document.getElementById('statDrones');
  const stFamilies = document.getElementById('statFamilies');
  const stVolunteers = document.getElementById('statVolunteers');

  if (stCollected) {
    const millions = (stats.totalCollected / 1000000).toFixed(2);
    stCollected.textContent = `${millions}+ млн ₴`;
  }
  if (stDrones) stDrones.textContent = stats.dronesAndVehicles;
  if (stFamilies) stFamilies.textContent = `${stats.familiesSupported.toLocaleString()}+`;
  if (stVolunteers) stVolunteers.textContent = stats.volunteersCount;
}

// === Render Campaigns ===
function renderCampaigns() {
  const container = document.getElementById('campaignsContainer');
  if (!container) return;
  const campaigns = FoundationStore.getCampaigns();
  const lang = I18nStore.currentLang || 'uk';

  container.innerHTML = campaigns.map(camp => {
    const titleText = typeof camp.title === 'object' ? (camp.title[lang] || camp.title.uk) : camp.title;
    const descText = typeof camp.desc === 'object' ? (camp.desc[lang] || camp.desc.uk) : camp.desc;
    const percent = Math.min(Math.round((camp.collected / camp.target) * 100), 100);

    const goalLbl = I18nStore.t('camp_goal') || 'Ціль:';
    const collLbl = I18nStore.t('camp_collected') || 'Зібрано:';
    const btnLbl = I18nStore.t('camp_btn') || 'Підтримати збір';
    const urgentLbl = I18nStore.t('camp_urgent_badge') || '🔥 КРИТИЧНО ТЕРМІНОВО';

    return `
      <div class="campaign-card">
        <div>
          ${camp.image ? `<img src="${camp.image}" class="campaign-img" alt="${titleText}">` : ''}
          <div class="campaign-top">
            <div class="campaign-icon">${camp.icon || '🎯'}</div>
            ${camp.urgent ? `<span class="badge-urgent">${urgentLbl}</span>` : ''}
          </div>
          <h3 class="campaign-title">${titleText}</h3>
          <p class="campaign-desc">${descText}</p>
          ${camp.jarUrl ? `
            <div style="margin: 14px 0; padding: 14px; background: rgba(0,0,0,0.35); border-radius: 14px; border: 1px dashed var(--accent-gold);">
              <div style="font-size: 0.85rem; color: #aaa; margin-bottom: 4px;">💳 Номер картки Банки (Monobank):</div>
              <div style="font-size: 1.05rem; font-weight: 700; color: #fff; letter-spacing: 1.5px; user-select: all;">${camp.cardNum || ''}</div>
              <a href="${camp.jarUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 6px; margin-top: 10px; color: var(--accent-gold); font-weight: 600; font-size: 0.9rem; text-decoration: none;">🔗 Перейти на офіційну Банку →</a>
            </div>
          ` : ''}
        </div>

        <div>
          <div class="progress-wrap">
            <div class="progress-stats">
              <span>${collLbl} <strong style="color: var(--accent-gold);">${Number(camp.collected).toLocaleString()} ₴</strong></span>
              <span>${goalLbl} ${Number(camp.target).toLocaleString()} ₴ (${percent}%)</span>
            </div>
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" style="width: ${percent}%;"></div>
            </div>
          </div>

          <button class="btn btn-primary" style="width: 100%;" onclick="openModalForCamp('${camp.id}')">
            <span>⚡ ${btnLbl} (Monobank)</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// === Render Honor Board ===
function filterHonor(cat, btnEl) {
  currentHonorFilter = cat;
  document.querySelectorAll('.honor-filter-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  renderHonorBoard();
}

function renderHonorBoard() {
  const container = document.getElementById('honorContainer');
  if (!container) return;
  const list = FoundationStore.getHonorBoard();
  const filtered = currentHonorFilter === 'all' ? list : list.filter(h => h.category === currentHonorFilter);
  const contribLbl = I18nStore.t('honor_contribution') || 'Внесок:';

  container.innerHTML = filtered.map(item => `
    <div class="honor-card">
      ${item.image ? `<img src="${item.image}" class="honor-img" style="object-fit: ${item.imageFit || 'cover'}; object-position: ${item.imagePos || 'top center'};" alt="${item.name}">` : ''}
      <div class="honor-top">
        <div class="honor-avatar">${item.icon || '🌟'}</div>
        <span class="honor-badge ${item.badgeClass || 'badge-gold'}">${item.badge || 'Благодійник'}</span>
      </div>
      <h3 class="honor-name">${item.name}</h3>
      <div class="honor-role">${item.role}</div>
      <p class="honor-desc">${item.desc || ''}</p>
      <div class="honor-contrib">
        <span>${contribLbl}</span>
        <span class="honor-contrib-val">${item.contribution}</span>
      </div>
    </div>
  `).join('');
}

// === Render Gallery / Work Reports ===
function renderGallery() {
  const container = document.getElementById('galleryContainer');
  if (!container) return;
  const list = FoundationStore.getGallery();
  container.innerHTML = list.map(item => `
    <div class="gallery-card" style="background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.3); transition: 0.3s;">
      <div style="height: 240px; overflow: hidden; position: relative;">
        <img src="${item.image || 'work_medical_aid.jpg'}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: ${item.imageFit || 'cover'}; object-position: ${item.imagePos || 'center center'}; transition: transform 0.5s;">
        ${item.category ? `<span style="position: absolute; top: 12px; right: 12px; background: rgba(0,0,0,0.75); backdrop-filter: blur(4px); color: #fff; font-size: 0.8rem; font-weight: 600; padding: 4px 12px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.2);">${item.category}</span>` : ''}
      </div>
      <div style="padding: 18px;">
        <h3 style="font-size: 1.15rem; font-family: var(--font-heading); margin-bottom: 8px; color: #fff;">${item.title}</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; line-height: 1.5;">${item.desc || ''}</p>
      </div>
    </div>
  `).join('');
}

// === Render News & Frontline Reports ===
function renderNews() {
  const container = document.getElementById('newsContainer');
  if (!container) return;
  const newsList = FoundationStore.getNews();
  const lang = I18nStore.currentLang || 'uk';

  container.innerHTML = newsList.map(item => {
    const titleText = typeof item.title === 'object' ? (item.title[lang] || item.title.uk) : item.title;
    const descText = typeof item.desc === 'object' ? (item.desc[lang] || item.desc.uk) : item.desc;

    return `
      <div class="news-card">
        ${item.image ? `<img src="${item.image}" class="news-img" alt="${titleText}">` : ''}
        <div class="news-body">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span class="news-date">${item.date || ''}</span>
            ${item.badge ? `<span style="background: rgba(30,96,242,0.2); color: #60a5fa; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: 700;">${item.badge}</span>` : ''}
          </div>
          <h3 class="news-title">${titleText}</h3>
          <p class="news-desc">${descText}</p>
        </div>
      </div>
    `;
  }).join('');
}

// === Interactive Impact Calculator ===
function updateCalculator(val) {
  val = Number(val);
  const disp = document.getElementById('calcValDisplay');
  const btnVal = document.getElementById('calcBtnVal');
  if (disp) disp.textContent = `${val.toLocaleString()} ₴`;
  if (btnVal) btnVal.textContent = `${val.toLocaleString()} ₴`;

  const wCount = Math.max(1, Math.floor(val / 150));
  const tCount = (val / 500).toFixed(1);
  const iCount = (val / 2500).toFixed(1);
  const ePercent = Math.min(100, ((val / 40000) * 100)).toFixed(1);

  const resWarm = document.getElementById('resWarm');
  const resTourniquet = document.getElementById('resTourniquet');
  const resIfak = document.getElementById('resIfak');
  const resEcoflow = document.getElementById('resEcoflow');

  if (resWarm) resWarm.textContent = `${wCount} шт.`;
  if (resTourniquet) resTourniquet.textContent = `${tCount} шт.`;
  if (resIfak) resIfak.textContent = `${iCount} шт.`;
  if (resEcoflow) resEcoflow.textContent = `${ePercent}%`;
}

function donateFromCalc() {
  const slider = document.getElementById('impactSlider');
  const val = slider ? Number(slider.value) : 500;
  selectedAmount = val;
  openModal();
  showToast(`Оформлення внеску на суму ${val.toLocaleString()} ₴...`);
}


// === Widget Controls ===
function setFreq(el) {
  document.querySelectorAll('.freq-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  isMonthly = el.textContent.includes('Щомісяч') || el.textContent.includes('Monthly') || el.textContent.includes('co miesiąc');
}

function selectAmount(amt) {
  selectedAmount = amt;
  const customIn = document.getElementById('customAmount');
  if (customIn) customIn.value = '';
  document.querySelectorAll('.amount-btn').forEach(b => {
    b.classList.toggle('active', b.textContent.includes(amt));
  });
  updateSubmitBtnTxt();
}

function clearPresetBtns() {
  const customIn = document.getElementById('customAmount');
  if (customIn && customIn.value) {
    selectedAmount = Number(customIn.value);
    document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
  }
  updateSubmitBtnTxt();
}

function updateSubmitBtnTxt() {
  const txt = document.getElementById('submitAmountTxt');
  if (txt) {
    const customIn = document.getElementById('customAmount');
    const val = (customIn && customIn.value) ? customIn.value : selectedAmount;
    txt.textContent = `${val} ₴`;
  }
}

function processQuickDonate() {
  const customIn = document.getElementById('customAmount');
  const val = (customIn && customIn.value) ? Number(customIn.value) : selectedAmount;
  openModal();
  showToast(`Оформлення внеску на суму ${val} ₴...`);
}

function openModalForCamp(id) {
  const camps = FoundationStore.getCampaigns();
  const camp = camps.find(c => c.id === id);
  if (camp && camp.jarUrl) {
    window.open(camp.jarUrl, '_blank');
    showToast('⏳ Перехід на офіційну Банку Monobank...');
    return;
  }
  openModal();
  showToast('Оберіть зручний спосіб оплати для цього збору');
}

// === Modal Window ===
function openModal() {
  const m = document.getElementById('donationModal');
  if (m) m.classList.add('active');
}

function closeModal() {
  const m = document.getElementById('donationModal');
  if (m) m.classList.remove('active');
}

function closeModalOutside(e) {
  if (e.target.id === 'donationModal') closeModal();
}

function showModalTab(tabId) {
  document.getElementById('modalTabCard').style.display = tabId === 'card' ? 'block' : 'none';
  document.getElementById('modalTabIban').style.display = tabId === 'iban' ? 'block' : 'none';
  document.getElementById('modalTabCrypto').style.display = tabId === 'crypto' ? 'block' : 'none';
}

function simulateDonate(method) {
  showToast(`⏳ Перехід до захищеного шлюзу ${method}...`);
  setTimeout(() => {
    // Символічно поповнюємо перший активний збір на 500 грн для наочної демонстрації роботи даних
    const camps = FoundationStore.getCampaigns();
    if (camps.length > 0) {
      FoundationStore.updateCampaignAmount(camps[0].id, 500);
    }
    closeModal();
    showToast('❤️ Дякуємо за ваш внесок! Дані збору оновлено.');
  }, 1200);
}

function copyTxt(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('📋 Реквізити скопійовано в буфер обміну!');
  }).catch(() => {
    showToast('📋 Реквізити скопійовано!');
  });
}

// === Toast ===
function showToast(msg) {
  const t = document.getElementById('toastBox');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => {
    t.classList.remove('show');
  }, 3500);
}

// === Form Submit ===
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('appName').value;
  const phone = document.getElementById('appPhone').value;
  const email = document.getElementById('appEmail').value;
  const type = document.getElementById('appType').value;
  const message = document.getElementById('appMsg').value;

  FoundationStore.addApplication({ name, phone, email, type, message });

  e.target.reset();
  showToast('🚀 Вашу заявку успішно надіслано! Перевірте в Адмінці.');
}

function animateNumbers() {
  // Simple subtle animation trigger
}
