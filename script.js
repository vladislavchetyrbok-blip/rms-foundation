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
let currentGalleryPage = window.currentGalleryPage || 1;
const GALLERY_PER_PAGE = 6;

function renderGallery() {
  const container = document.getElementById('galleryContainer');
  const pagContainer = document.getElementById('galleryPagination');
  if (!container) return;

  const list = FoundationStore.getGallery();
  if (!list || list.length === 0) {
    container.innerHTML = '<p style="color: #ccc; text-align: center; grid-column: 1/-1;">Хроніка фотозвітів оновлюється...</p>';
    if (pagContainer) pagContainer.innerHTML = '';
    return;
  }

  const totalPages = Math.ceil(list.length / GALLERY_PER_PAGE);
  if (currentGalleryPage > totalPages) currentGalleryPage = totalPages || 1;

  const startIdx = (currentGalleryPage - 1) * GALLERY_PER_PAGE;
  const currentItems = list.slice(startIdx, startIdx + GALLERY_PER_PAGE);

  container.innerHTML = currentItems.map(item => `
    <div class="gallery-card" style="background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.3); transition: 0.3s;">
      <div style="background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; min-height: 220px; max-height: 450px; overflow: hidden; position: relative;">
        <img src="${item.image || 'work_medical_aid.jpg'}" alt="${item.title || 'Фотозвіт'}" style="width: 100%; height: auto; max-height: 450px; object-fit: ${item.imageFit || 'contain'}; object-position: ${item.imagePos || 'center center'}; transition: transform 0.5s;">
        ${item.category ? `<span style="position: absolute; top: 12px; right: 12px; background: rgba(0,0,0,0.75); backdrop-filter: blur(4px); color: #fff; font-size: 0.8rem; font-weight: 600; padding: 4px 12px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.2);">${item.category}</span>` : ''}
      </div>
      ${(item.title || item.desc) ? `
      <div style="padding: 18px;">
        ${item.title ? `<h3 style="font-size: 1.15rem; font-family: var(--font-heading); margin-bottom: ${item.desc ? '8px' : '0'}; color: #fff;">${item.title}</h3>` : ''}
        ${item.desc ? `<p style="color: var(--text-muted); font-size: 0.9rem; line-height: 1.5;">${item.desc}</p>` : ''}
      </div>
      ` : ''}
    </div>
  `).join('');

  if (pagContainer) {
    if (list.length <= GALLERY_PER_PAGE) {
      pagContainer.innerHTML = `
        <a href="gallery.html" class="btn" style="background: linear-gradient(135deg, #f59e0b, #d97706); color: #fff; padding: 14px 28px; border-radius: 16px; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 10px; box-shadow: 0 4px 20px rgba(245,158,11,0.35);">
          📂 Відкрити повний архів фотозвітів (всі фото на окремій сторінці) ➔
        </a>
      `;
    } else {
      pagContainer.innerHTML = `
        <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 16px; width: 100%;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <button onclick="changeGalleryPage(-1)" class="btn" style="padding: 10px 18px; border-radius: 12px; background: ${currentGalleryPage <= 1 ? 'rgba(255,255,255,0.05)' : 'rgba(30,96,242,0.25)'}; color: ${currentGalleryPage <= 1 ? '#666' : '#fff'}; border: 1px solid var(--border-color); cursor: ${currentGalleryPage <= 1 ? 'default' : 'pointer'}; font-weight: 600;" ${currentGalleryPage <= 1 ? 'disabled' : ''}>⬅️ Попередні 6 фото</button>
            <span style="color: #fff; font-weight: 600; font-size: 1rem; padding: 0 8px;">Сторінка ${currentGalleryPage} з ${totalPages}</span>
            <button onclick="changeGalleryPage(1)" class="btn" style="padding: 10px 18px; border-radius: 12px; background: ${currentGalleryPage >= totalPages ? 'rgba(255,255,255,0.05)' : 'rgba(30,96,242,0.25)'}; color: ${currentGalleryPage >= totalPages ? '#666' : '#fff'}; border: 1px solid var(--border-color); cursor: ${currentGalleryPage >= totalPages ? 'default' : 'pointer'}; font-weight: 600;" ${currentGalleryPage >= totalPages ? 'disabled' : ''}>Наступні 6 фото ➡️</button>
          </div>
          <a href="gallery.html" class="btn" style="background: linear-gradient(135deg, #f59e0b, #d97706); color: #fff; padding: 12px 24px; border-radius: 14px; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 15px rgba(245,158,11,0.3);">
            📂 Відкрити весь архів на окремій сторінці (${list.length} фото) ➔
          </a>
        </div>
      `;
    }
  }
}

function changeGalleryPage(dir) {
  window.currentGalleryPage = (window.currentGalleryPage || 1) + dir;
  renderGallery();
  const sec = document.getElementById('gallery');
  if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
  if (method === 'Monobank') {
    window.open('https://send.monobank.ua/jar/6iL3oH5Vde', '_blank');
    closeModal();
    showToast('⏳ Перехід на офіційну Банку Monobank...');
    return;
  }
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
