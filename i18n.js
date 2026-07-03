/**
 * Разом ми — сила (Together We Are Power)
 * Multi-Language Localization System (6 Languages)
 * UK (Ukrainian), EN (English), PL (Polish), RO (Romanian), IT (Italian), DE (German)
 */

const TRANSLATIONS = {
  uk: {
    nav_about: 'Про нас',
    nav_calc: 'Калькулятор донату',
    nav_campaigns: 'Активні збори',
    nav_news: 'Звіти з фронту',
    nav_honor: 'Дошка пошани',
    nav_focus: 'Напрямки',
    nav_contact: 'Контакти',
    btn_support: 'Підтримати фонд ❤️',
    
    hero_badge: '⚡ Офіційний благодійний фонд допомоги',
    hero_title: 'Разом ми об’єднуємо серця заради перемоги та життя',
    hero_subtitle: 'Надаємо термінову гуманітарну, медичну та технічну допомогу Захисникам України, пораненим героям та постраждалим родинам у зоні бойових дій.',
    hero_cta_don: 'Зробити внесок',
    hero_cta_join: 'Стати волонтером',
    
    widget_title: 'Швидкий внесок на термінові збори',
    widget_freq_once: 'Одноразово',
    widget_freq_monthly: 'Щомісячна підтримка',
    widget_custom_placeholder: 'Інша сума...',
    widget_btn_donate: 'Підтримати зараз',
    widget_secure: '🔒 Офіційні реквізити, 100% прозорість',

    stats_collected: 'Зібрано на допомогу',
    stats_drones: 'Передано техніки та авто',
    stats_families: 'Підтримано родин ВПО',
    stats_volunteers: 'Активних волонтерів',

    calc_title: '🧮 Калькулятор впливу вашого внеску',
    calc_subtitle: 'Потягніть повзунок, щоб побачити, у що саме конвертується ваш донат на передовій та в лікарнях.',
    calc_label: 'Ваша сума внеску:',
    calc_res_warm: 'Хімічні грілки / опікові набори для бійців',
    calc_res_tourniquet: 'Турнікети CAT 7-ї генерації для зупинки кровотеч',
    calc_res_ifak: 'Професійні тактичні аптечки NATO IFAK',
    calc_res_ecoflow: 'Внесок у мобільну зарядну станцію / дрон',

    camp_title: 'Термінові активні збори',
    camp_subtitle: 'Кожна гривня, євро чи долар рятують життя просто зараз. Приєднуйтесь до закриття найкритичніших потреб.',
    camp_urgent_badge: '🔥 КРИТИЧНО ТЕРМІНОВО',
    camp_goal: 'Ціль:',
    camp_collected: 'Зібрано:',
    camp_btn: 'Підтримати збір',

    news_title: '📢 Новини та звіти з передової',
    news_subtitle: 'Реальні історії врятованих життів та звіти про передане обладнання нашим підрозділам.',

    honor_title: '🌟 Дошка пошани фонду',
    honor_subtitle: 'Ми безмежно вдячні кожному меценату, корпоративному донору та невтомному волонтеру.',
    honor_filter_all: 'Всі герої',
    honor_filter_corporate: 'Меценати та бізнес',
    honor_filter_donor: 'Благодійники',
    honor_filter_volunteer: 'Волонтери-координатори',
    honor_contribution: 'Внесок:',

    focus_title: 'Ключові напрямки допомоги',
    focus_subtitle: 'Ми працюємо системно та точково там, де допомога потрібна найсильніше.',
    focus_mil_title: '🛡️ Підтримка Захисників',
    focus_mil_desc: 'Закупівля безпілотників, тепловізорів, систем зв\'язку, пікапів та засобів індивідуального захисту.',
    focus_med_title: '🏥 Тактична медицина та госпіталі',
    focus_med_desc: 'Укомплектування аптечок за стандартами NATO, постачання обладнання та генераторів у прифронтові лікарні.',
    focus_hum_title: '📦 Гуманітарна допомога родинам',
    focus_hum_desc: 'Продуктові набори, засоби гігієни, одяг, обігрівачі та психологічна підтримка для вимушених переселенців.',
    focus_rehab_title: '🦾 Реабілітація та протезування',
    focus_rehab_desc: 'Організація лікування, виготовлення біонічних протезів та психоемоційне відновлення ветеранів.',

    trans_title: '100% прозорість та звітність',
    trans_subtitle: 'Ми публікуємо щомісячні фінансові звіти, акти прийому-передачі, фото та відеофіксацію кожної закупівлі.',
    trans_rep_1_title: 'Фінансовий звіт за II квартал 2026',
    trans_rep_1_size: 'PDF, 4.2 MB • Опубліковано 1 липня',
    trans_rep_2_title: 'Звіт про передачу аеророзвідці (30 дронів)',
    trans_rep_2_size: 'PDF + Фотозвіт, 12.8 MB',
    trans_btn_dl: 'Завантажити звіт 📄',

    form_title: 'Приєднатися до команди або стати партнером',
    form_subtitle: 'Заповніть коротку форму, і наш координатор зв\'яжеться з вами найближчим часом.',
    form_name: 'Ваше ім’я або назва компанії',
    form_phone: 'Контактний телефон',
    form_email: 'Електронна пошта',
    form_role: 'Як ви хочете долучитися?',
    form_role_vol: 'Стати волонтером (транспорт, руки, логістика)',
    form_role_part: 'Корпоративне партнерство / Гуманітарний вантаж',
    form_role_info: 'Інформаційна підтримка / Медіа',
    form_msg: 'Коротке повідомлення або коментар',
    form_submit: 'Надіслати заявку 🚀',

    modal_title: 'Зробити благодійний внесок',
    modal_subtitle: 'Оберіть зручний для вас спосіб фінансової підтримки фонду «Разом ми — сила»',
    modal_tab_card: '💳 Картка / Apple Pay / Google Pay',
    modal_tab_iban: '🏦 Офіційні реквізити IBAN',
    modal_tab_crypto: '🪙 Crypto (USDT / BTC)',
    modal_card_info: 'Натисніть кнопку нижче для переходу до захищеного шлюзу або банки:',
    modal_btn_monobank: '🐈 Поповнити Банку Monobank',
    modal_btn_privat: '🟢 Оплатити через Приват24 / LiqPay',
    modal_iban_info: 'Офіційні рахунки БФ «Разом ми — сила» (ЄДРПОУ 44859201):',
    modal_copy_btn: 'Скопіювати',

    footer_desc: 'Благодійний фонд «Разом ми — сила». Офіційно зареєстрована неприбуткова організація. Разом до Перемоги!',
    footer_rights: '© 2026 БФ «Разом ми — сила». Всі права захищено.',
    footer_admin_link: '🔑 Вхід для адміністратора'
  },

  en: {
    nav_about: 'About Us',
    nav_calc: 'Impact Calculator',
    nav_campaigns: 'Active Fundraisers',
    nav_news: 'Frontline Reports',
    nav_honor: 'Honor Board',
    nav_focus: 'Our Focus',
    nav_contact: 'Contacts',
    btn_support: 'Support Us ❤️',
    
    hero_badge: '⚡ Official Charitable Foundation',
    hero_title: 'Together we unite hearts for victory and life',
    hero_subtitle: 'Providing urgent humanitarian, medical, and tactical assistance to defenders of Ukraine, wounded heroes, and affected families.',
    hero_cta_don: 'Make a Donation',
    hero_cta_join: 'Become a Volunteer',
    
    widget_title: 'Quick Donation for Urgent Needs',
    widget_freq_once: 'One-time',
    widget_freq_monthly: 'Monthly Support',
    widget_custom_placeholder: 'Custom amount...',
    widget_btn_donate: 'Donate Now',
    widget_secure: '🔒 Official accounts, 100% transparency',

    stats_collected: 'Total Funds Raised',
    stats_drones: 'Vehicles & Drones Delivered',
    stats_families: 'Refugee Families Supported',
    stats_volunteers: 'Active Volunteers',

    calc_title: '🧮 Donation Impact Calculator',
    calc_subtitle: 'Drag the slider to see exactly what your donation achieves on the frontline and in hospitals.',
    calc_label: 'Your donation amount:',
    calc_res_warm: 'Chemical hand warmers / emergency burn supplies',
    calc_res_tourniquet: 'CAT Gen7 Tourniquets to stop critical bleeding',
    calc_res_ifak: 'Professional NATO IFAK tactical medical kits',
    calc_res_ecoflow: 'Share towards EcoFlow power station / recon drone',

    camp_title: 'Urgent Active Campaigns',
    camp_subtitle: 'Every euro, dollar, or hryvnia saves lives right now. Join us in fulfilling critical frontline needs.',
    camp_urgent_badge: '🔥 CRITICALLY URGENT',
    camp_goal: 'Goal:',
    camp_collected: 'Raised:',
    camp_btn: 'Support Campaign',

    news_title: '📢 Frontline News & Reports',
    news_subtitle: 'Real stories of saved lives and photo proof of equipment delivered to frontline units.',

    honor_title: '🌟 Foundation Honor Board',
    honor_subtitle: 'We are deeply grateful to every benefactor, corporate sponsor, and tireless volunteer.',
    honor_filter_all: 'All Heroes',
    honor_filter_corporate: 'Corporate Sponsors',
    honor_filter_donor: 'Major Donors',
    honor_filter_volunteer: 'Volunteer Leaders',
    honor_contribution: 'Contribution:',

    focus_title: 'Key Areas of Assistance',
    focus_subtitle: 'We operate systematically and directly where help is needed most urgently.',
    focus_mil_title: '🛡️ Defender Support',
    focus_mil_desc: 'Purchasing reconnaissance drones, thermal imaging, secure radios, 4x4 trucks, and protective gear.',
    focus_med_title: '🏥 Tactical Medicine & Hospitals',
    focus_med_desc: 'NATO-standard IFAK kits, surgical equipment, and heavy generators for frontline field hospitals.',
    focus_hum_title: '📦 Humanitarian Aid for Families',
    focus_hum_desc: 'Food packs, hygiene supplies, winter clothing, heaters, and shelter support for IDPs.',
    focus_rehab_title: '🦾 Rehabilitation & Prosthetics',
    focus_rehab_desc: 'Medical recovery, custom advanced bionic prosthetics, and mental health support for returning veterans.',

    trans_title: '100% Transparency & Reporting',
    trans_subtitle: 'We publish comprehensive monthly financial statements, official acceptance acts, and photo/video evidence.',
    trans_rep_1_title: 'Q2 2026 Financial Report',
    trans_rep_1_size: 'PDF, 4.2 MB • Published July 1',
    trans_rep_2_title: 'Reconnaissance Unit Delivery Report (30 Drones)',
    trans_rep_2_size: 'PDF + Photo album, 12.8 MB',
    trans_btn_dl: 'Download Report 📄',

    form_title: 'Join the Team or Become a Partner',
    form_subtitle: 'Fill out this short application and our coordinator will get in touch shortly.',
    form_name: 'Your Name or Company Name',
    form_phone: 'Phone Number',
    form_email: 'Email Address',
    form_role: 'How would you like to help?',
    form_role_vol: 'Volunteer (logistics, driving, hands-on aid)',
    form_role_part: 'Corporate Partnership / Humanitarian Cargo',
    form_role_info: 'Media / Information Support',
    form_msg: 'Short message or comment',
    form_submit: 'Submit Application 🚀',

    modal_title: 'Make a Charitable Contribution',
    modal_subtitle: 'Choose your preferred way to financially support "Together We Are Power"',
    modal_tab_card: '💳 Card / Apple Pay / Google Pay',
    modal_tab_iban: '🏦 Official IBAN Accounts',
    modal_tab_crypto: '🪙 Crypto (USDT / BTC)',
    modal_card_info: 'Click below to proceed to our secure payment gateways:',
    modal_btn_monobank: '🐈 Monobank Jar Donation',
    modal_btn_privat: '🟢 Pay via Privat24 / LiqPay',
    modal_iban_info: 'Official accounts of "Together We Are Power" Foundation:',
    modal_copy_btn: 'Copy',

    footer_desc: 'Charitable Foundation "Together We Are Power". Officially registered non-profit organization.',
    footer_rights: '© 2026 Foundation "Together We Are Power". All rights reserved.',
    footer_admin_link: '🔑 Admin Login'
  },

  pl: {
    nav_about: 'O nas',
    nav_calc: 'Kalkulator wpływu',
    nav_campaigns: 'Aktywne zbiórki',
    nav_news: 'Raporty z frontu',
    nav_honor: 'Tablica honorowa',
    nav_focus: 'Kierunki pomocy',
    nav_contact: 'Kontakt',
    btn_support: 'Wesprzyj fundację ❤️',
    
    hero_badge: '⚡ Oficjalna Fundacja Charytatywna',
    hero_title: 'Razem łączymy serca dla zwycięstwa i życia',
    hero_subtitle: 'Zapewniamy pilną pomoc humanitarną, medyczną i techniczną dla Obrońców Ukrainy, rannych bohaterów oraz poszkodowanych rodzin.',
    hero_cta_don: 'Przekaż darowiznę',
    hero_cta_join: 'Zostań wolontariuszem',
    
    widget_title: 'Szybka darowizna na pilne potrzeby',
    widget_freq_once: 'Jednorazowo',
    widget_freq_monthly: 'Wsparcie co miesiąc',
    widget_custom_placeholder: 'Inna kwota...',
    widget_btn_donate: 'Wpłać teraz',
    widget_secure: '🔒 Oficjalne konta, 100% przejrzystości',

    stats_collected: 'Zebrane środki',
    stats_drones: 'Przekazane pojazdy i drony',
    stats_families: 'Wsparte rodziny uchodźców',
    stats_volunteers: 'Aktywnych wolontariuszy',

    calc_title: '🧮 Kalkulator Wpływu Darowizny',
    calc_subtitle: 'Przesuń suwak, aby zobaczyć, na co dokładnie przełoży się Twoja darowizna.',
    calc_label: 'Kwota darowizny:',
    calc_res_warm: 'Chemiczne ogrzewacze / zestawy oparzeniowe',
    calc_res_tourniquet: 'Stazy taktyczne CAT Gen7 do tamowania krwotoków',
    calc_res_ifak: 'Profesjonalne apteczki taktyczne standardu NATO IFAK',
    calc_res_ecoflow: 'Wkład w stację zasilania EcoFlow lub drona',

    camp_title: 'Pilne aktywne zbiórki',
    camp_subtitle: 'Każda złotówka, euro czy hrywna ratuje życie w tej chwili. Dołącz do realizacji najpilniejszych potrzeb.',
    camp_urgent_badge: '🔥 KRYTYCZNIE PILNE',
    camp_goal: 'Cel:',
    camp_collected: 'Zebrano:',
    camp_btn: 'Wesprzyj zbiórkę',

    news_title: '📢 Wiadomości i raporty z frontu',
    news_subtitle: 'Prawdziwe historie uratowanych istnień i dowody dostarczenia sprzętu na linię frontu.',

    honor_title: '🌟 Tablica Honorowa Fundacji',
    honor_subtitle: 'Jesteśmy głęboko wdzięczni każdemu darczyńcy, sponsorowi korporacyjnemu oraz wolontariuszowi.',
    honor_filter_all: 'Wszyscy bohaterowie',
    honor_filter_corporate: 'Sponsorzy firmowi',
    honor_filter_donor: 'Darczyńcy',
    honor_filter_volunteer: 'Liderzy wolontariatu',
    honor_contribution: 'Wkład:',

    focus_title: 'Kluczowe kierunki działań',
    focus_subtitle: 'Działamy systemowo i precyzyjnie tam, gdzie pomoc jest najbardziej potrzebna.',
    focus_mil_title: '🛡️ Wsparcie Obrońców',
    focus_mil_desc: 'Zakup dronów rozpoznawczych, termowizji, systemów łączności, samochodów terenowych 4x4 oraz sprzętu ochronnego.',
    focus_med_title: '🏥 Medycyna taktyczna i szpitale',
    focus_med_desc: 'Apteczki standardu NATO, sprzęt chirurgiczny oraz generatory dla przyfrontowych szpitali polowych.',
    focus_hum_title: '📦 Pomoc humanitarna dla rodzin',
    focus_hum_desc: 'Pakiety żywnościowe, środki higieniczne, odzież zimowa, grzejniki i wsparcie dla uchodźców wewnętrznych.',
    focus_rehab_title: '🦾 Rehabilitacja i protezowanie',
    focus_rehab_desc: 'Leczenie, nowoczesne protezy bioniczne oraz wsparcie psychologiczne dla weteranów.',

    trans_title: '100% Przejrzystości i Raportowania',
    trans_subtitle: 'Publikujemy szczegółowe miesięczne raporty finansowe, oficjalne akty przekazania oraz dokumentację foto/wideo.',
    trans_rep_1_title: 'Raport finansowy za II kwartał 2026',
    trans_rep_1_size: 'PDF, 4.2 MB • Opublikowano 1 lipca',
    trans_rep_2_title: 'Raport z przekazania dronów (30 szt.)',
    trans_rep_2_size: 'PDF + Album foto, 12.8 MB',
    trans_btn_dl: 'Pobierz raport 📄',

    form_title: 'Dołącz do zespołu lub zostań partnerem',
    form_subtitle: 'Wypełnij krótki formularz, a nasz koordynator skontaktuje się z Tobą wkrótce.',
    form_name: 'Twoje imię lub nazwa firmy',
    form_phone: 'Numer telefonu',
    form_email: 'Adres e-mail',
    form_role: 'Jak chcesz pomóc?',
    form_role_vol: 'Wolontariat (transport, logistyka, pomoc bezpośrednia)',
    form_role_part: 'Partnerstwo biznesowe / Ładunki humanitarne',
    form_role_info: 'Wsparcie medialne i informacyjne',
    form_msg: 'Krótka wiadomość lub komentarz',
    form_submit: 'Wyślij zgłoszenie 🚀',

    modal_title: 'Przekaż darowiznę charytatywną',
    modal_subtitle: 'Wybierz dogodny sposób finansowego wsparcia fundacji „Razem Jesteśmy Siłą”',
    modal_tab_card: '💳 Karta / Apple Pay / Google Pay',
    modal_tab_iban: '🏦 Oficjalne konta IBAN',
    modal_tab_crypto: '🪙 Krypto (USDT / BTC)',
    modal_card_info: 'Kliknij poniżej, aby przejść do bezpiecznych systemów płatności:',
    modal_btn_monobank: '🐈 Wpłata do skarbonki Monobank',
    modal_btn_privat: '🟢 Zapłać przez Privat24 / LiqPay',
    modal_iban_info: 'Oficjalne konta bankowe Fundacji:',
    modal_copy_btn: 'Kopiuj',

    footer_desc: 'Fundacja Charytatywna „Razem Jesteśmy Siłą”. Oficjalnie zarejestrowana organizacja non-profit.',
    footer_rights: '© 2026 Fundacja „Razem Jesteśmy Siłą”. Wszelkie prawa zastrzeżone.',
    footer_admin_link: '🔑 Logowanie dla administratora'
  },

  ro: {
    nav_about: 'Despre noi',
    nav_calc: 'Calculator impact',
    nav_campaigns: 'Campanii active',
    nav_news: 'Rapoarte de front',
    nav_honor: 'Panou de onoare',
    nav_focus: 'Direcții de ajutor',
    nav_contact: 'Contacte',
    btn_support: 'Susține fundația ❤️',
    
    hero_badge: '⚡ Fundație Caritabilă Oficială',
    hero_title: 'Împreună unim inimile pentru victorie și viață',
    hero_subtitle: 'Oferim asistență umanitară, medicală și tehnică urgentă apărătorilor Ucrainei, eroilor răniți și familiilor afectate.',
    hero_cta_don: 'Fă o donație',
    hero_cta_join: 'Devino voluntar',
    
    widget_title: 'Donație rapidă pentru nevoi urgente',
    widget_freq_once: 'O singură dată',
    widget_freq_monthly: 'Sprijin lunar',
    widget_custom_placeholder: 'Altă sumă...',
    widget_btn_donate: 'Donează acum',
    widget_secure: '🔒 Conturi oficiale, 100% transparență',

    stats_collected: 'Fonduri colectate',
    stats_drones: 'Vehicule și drone livrate',
    stats_families: 'Familii sprijinite',
    stats_volunteers: 'Voluntari activi',

    calc_title: '🧮 Calculatorul Impactului Donației',
    calc_subtitle: 'Glisează cursorul pentru a vedea exact în ce se transformă contribuția ta.',
    calc_label: 'Suma donației tale:',
    calc_res_warm: 'Încălzitoare corporale / truse pentru arsuri',
    calc_res_tourniquet: 'Garouri CAT Gen7 pentru oprirea hemoragiilor grave',
    calc_res_ifak: 'Truse medicale tactice complete NATO IFAK',
    calc_res_ecoflow: 'Contribuție la o stație EcoFlow sau dronă de recunoaștere',

    camp_title: 'Campanii active urgente',
    camp_subtitle: 'Fiecare euro, leu sau hrivnă salvează vieți chiar acum. Alătură-te pentru acoperirea nevoilor critice.',
    camp_urgent_badge: '🔥 CRITIC DE URGENT',
    camp_goal: 'Obiectiv:',
    camp_collected: 'Colectat:',
    camp_btn: 'Susține campania',

    news_title: '📢 Știri și rapoarte de pe linia frontului',
    news_subtitle: 'Povești reale ale vieților salvate și dovezi foto ale echipamentelor livrate.',

    honor_title: '🌟 Panoul de Onoare al Fundației',
    honor_subtitle: 'Suntem profund recunoscători fiecărui sponsor, partener corporativ și voluntar.',
    honor_filter_all: 'Toți eroii',
    honor_filter_corporate: 'Parteneri corporativi',
    honor_filter_donor: 'Donatori importanți',
    honor_filter_volunteer: 'Lideri voluntari',
    honor_contribution: 'Contribuție:',

    focus_title: 'Domenii cheie de asistență',
    focus_subtitle: 'Acționăm sistematic și rapid acolo unde ajutorul este cel mai necesar.',
    focus_mil_title: '🛡️ Sprijin pentru apărători',
    focus_mil_desc: 'Achiziția de drone de recunoaștere, camere cu termoviziune, sisteme de comunicații și vehicule 4x4.',
    focus_med_title: '🏥 Medicină tactică și spitale',
    focus_med_desc: 'Truse IFAK conform standardelor NATO, echipament chirurgical și generatoare pentru spitalele de front.',
    focus_hum_title: '📦 Ajutor umanitar pentru familii',
    focus_hum_desc: 'Pachete alimentare, produse de igienă, îmbrăcăminte de iarnă și sprijin pentru refugiații interni.',
    focus_rehab_title: '🦾 Reabilitare și proteze',
    focus_rehab_desc: 'Tratament medical, proteze bionice moderne și suport psihologic pentru veterani.',

    trans_title: '100% Transparență și Raportare',
    trans_subtitle: 'Publicăm rapoarte financiare lunare detaliate, acte oficiale de predare-primire și dovezi foto/video.',
    trans_rep_1_title: 'Raport financiar T2 2026',
    trans_rep_1_size: 'PDF, 4.2 MB • Publicat la 1 iulie',
    trans_rep_2_title: 'Raport predare unitate recunoaștere (30 drone)',
    trans_rep_2_size: 'PDF + Album foto, 12.8 MB',
    trans_btn_dl: 'Descarcă raportul 📄',

    form_title: 'Alătură-te echipei sau devino partener',
    form_subtitle: 'Completează acest scurt formular și coordonatorul nostru te va contacta în curând.',
    form_name: 'Numele tău sau al companiei',
    form_phone: 'Număr de telefon',
    form_email: 'Adresă de e-mail',
    form_role: 'Cum dorești să ajuți?',
    form_role_vol: 'Voluntar (logistică, transport, ajutor direct)',
    form_role_part: 'Parteneriat corporativ / Transport umanitar',
    form_role_info: 'Suport media și informațional',
    form_msg: 'Scurt mesaj sau comentariu',
    form_submit: 'Trimite cererea 🚀',

    modal_title: 'Fă o contribuție caritabilă',
    modal_subtitle: 'Alege modalitatea convenabilă de a susține financiar fundația „Împreună Suntem Putere”',
    modal_tab_card: '💳 Card / Apple Pay / Google Pay',
    modal_tab_iban: '🏦 Conturi oficiale IBAN',
    modal_tab_crypto: '🪙 Crypto (USDT / BTC)',
    modal_card_info: 'Fă clic mai jos pentru a trece la sistemele noastre sigure de plată:',
    modal_btn_monobank: '🐈 Donație Monobank Jar',
    modal_btn_privat: '🟢 Plătește prin Privat24 / LiqPay',
    modal_iban_info: 'Conturi bancare oficiale ale Fundației:',
    modal_copy_btn: 'Copiază',

    footer_desc: 'Fundația Caritabilă „Împreună Suntem Putere”. Organizație non-profit înregistrată oficial.',
    footer_rights: '© 2026 Fundația „Împreună Suntem Putere”. Toate drepturile rezervate.',
    footer_admin_link: '🔑 Autentificare administrator'
  },

  it: {
    nav_about: 'Chi siamo',
    nav_calc: 'Calcolatore impatto',
    nav_campaigns: 'Raccolte attive',
    nav_news: 'Notizie dal fronte',
    nav_honor: 'Albo d\'onore',
    nav_focus: 'Aree di intervento',
    nav_contact: 'Contatti',
    btn_support: 'Sostienici ❤️',
    
    hero_badge: '⚡ Fondazione di Beneficenza Ufficiale',
    hero_title: 'Insieme uniamo i cuori per la vittoria e la vita',
    hero_subtitle: 'Forniamo assistenza umanitaria, medica e tecnica urgente ai difensori dell\'Ucraina, agli eroi feriti e alle famiglie colpite.',
    hero_cta_don: 'Fai una donazione',
    hero_cta_join: 'Diventa volontario',
    
    widget_title: 'Donazione rapida per urgenze',
    widget_freq_once: 'Una tantum',
    widget_freq_monthly: 'Sostegno mensile',
    widget_custom_placeholder: 'Altro importo...',
    widget_btn_donate: 'Dona ora',
    widget_secure: '🔒 Conti ufficiali, trasparenza 100%',

    stats_collected: 'Fondi totali raccolti',
    stats_drones: 'Veicoli e droni consegnati',
    stats_families: 'Famiglie di rifugiati sostenute',
    stats_volunteers: 'Volontari attivi',

    calc_title: '🧮 Calcolatore di Impatto della Donazione',
    calc_subtitle: 'Trascina il cursore per vedere esattamente cosa acquista la tua donazione per salvare vite umane.',
    calc_label: 'Importo della donazione:',
    calc_res_warm: 'Scaldamani chimici / forniture per ustioni',
    calc_res_tourniquet: 'Lacci emostatici tattici CAT Gen7',
    calc_res_ifak: 'Kit medici tattici professionali NATO IFAK',
    calc_res_ecoflow: 'Quota per una stazione di energia EcoFlow / drone',

    camp_title: 'Raccolte fondi urgenti',
    camp_subtitle: 'Ogni euro o grivna salva vite proprio adesso. Unisciti a noi per soddisfare le esigenze critiche sul campo.',
    camp_urgent_badge: '🔥 CRITICO ED URGENTE',
    camp_goal: 'Obiettivo:',
    camp_collected: 'Raccolti:',
    camp_btn: 'Sostieni la raccolta',

    news_title: '📢 Notizie e resoconti dal fronte',
    news_subtitle: 'Storie reali di vite salvate e prove fotografiche delle forniture consegnate.',

    honor_title: '🌟 Albo d\'Onore della Fondazione',
    honor_subtitle: 'Siamo profondamente grati a ogni benefattore, partner aziendale e volontario instancabile.',
    honor_filter_all: 'Tutti gli eroi',
    honor_filter_corporate: 'Partner aziendali',
    honor_filter_donor: 'Grandi donatori',
    honor_filter_volunteer: 'Leader di volontariato',
    honor_contribution: 'Contributo:',

    focus_title: 'Aree chiave di assistenza',
    focus_subtitle: 'Operiamo in modo sistematico e diretto dove l\'aiuto è più urgentemente necessario.',
    focus_mil_title: '🛡️ Supporto ai Difensori',
    focus_mil_desc: 'Acquisto di droni da ricognizione, termocamere, radio di comunicazione sicure, fuoristrada 4x4 e protezioni.',
    focus_med_title: '🏥 Medicina Tattica e Ospedali',
    focus_med_desc: 'Kit IFAK standard NATO, apparecchiature chirurgiche e generatori per gli ospedali da campo in prima linea.',
    focus_hum_title: '📦 Aiuti umanitari per le famiglie',
    focus_hum_desc: 'Pacchi alimentari, prodotti per l\'igiene, abbigliamento invernale, stufe e supporto per gli sfollati interni.',
    focus_rehab_title: '🦾 Riabilitazione e Protesi',
    focus_rehab_desc: 'Cure mediche, protesi bioniche su misura ad alta tecnologia e supporto psicologico per i veterani.',

    trans_title: '100% Trasparenza e Reportistica',
    trans_subtitle: 'Pubblichiamo rendiconti finanziari mensili dettagliati, atti ufficiali di consegna e prove fotografiche/video.',
    trans_rep_1_title: 'Rapporto Finanziario Q2 2026',
    trans_rep_1_size: 'PDF, 4.2 MB • Pubblicato il 1 luglio',
    trans_rep_2_title: 'Rapporto consegna droni da ricognizione (30 unità)',
    trans_rep_2_size: 'PDF + Album foto, 12.8 MB',
    trans_btn_dl: 'Scarica rapporto 📄',

    form_title: 'Unisciti al team o diventa partner',
    form_subtitle: 'Compila questo breve modulo e il nostro coordinatore ti contatterà al più presto.',
    form_name: 'Il tuo nome o nome dell\'azienda',
    form_phone: 'Numero di telefono',
    form_email: 'Indirizzo e-mail',
    form_role: 'Come vorresti aiutare?',
    form_role_vol: 'Volontariato (logistica, trasporti, aiuto sul campo)',
    form_role_part: 'Partnership aziendale / Carico umanitario',
    form_role_info: 'Supporto media e informazione',
    form_msg: 'Breve messaggio o commento',
    form_submit: 'Invia candidatura 🚀',

    modal_title: 'Fai una donazione di beneficenza',
    modal_subtitle: 'Scegli il modo che preferisci per sostenere finanziariamente la fondazione "Insieme Siamo Forza"',
    modal_tab_card: '💳 Carta / Apple Pay / Google Pay',
    modal_tab_iban: '🏦 Conti IBAN Ufficiali',
    modal_tab_crypto: '🪙 Criptovalute (USDT / BTC)',
    modal_card_info: 'Clicca qui sotto per procedere verso i nostri gateway di pagamento sicuri:',
    modal_btn_monobank: '🐈 Donazione su Monobank Jar',
    modal_btn_privat: '🟢 Paga tramite Privat24 / LiqPay',
    modal_iban_info: 'Conti bancari ufficiali della Fondazione:',
    modal_copy_btn: 'Copia',

    footer_desc: 'Fondazione di Beneficenza "Insieme Siamo Forza". Organizzazione non profit ufficialmente registrata.',
    footer_rights: '© 2026 Fondazione "Insieme Siamo Forza". Tutti i diritti riservati.',
    footer_admin_link: '🔑 Accesso Amministratore'
  },

  de: {
    nav_about: 'Über uns',
    nav_calc: 'Wirkungs-Rechner',
    nav_campaigns: 'Aktive Spenden',
    nav_news: 'Frontberichte',
    nav_honor: 'Ehrentafel',
    nav_focus: 'Schwerpunkte',
    nav_contact: 'Kontakt',
    btn_support: 'Unterstützen ❤️',
    
    hero_badge: '⚡ Offizielle Wohltätigkeitsstiftung',
    hero_title: 'Gemeinsam vereinen wir Herzen für Sieg und Leben',
    hero_subtitle: 'Wir leisten dringende humanitäre, medizinische und technische Hilfe für die Verteidiger der Ukraine, verwundete Helden und betroffene Familien.',
    hero_cta_don: 'Jetzt spenden',
    hero_cta_join: 'Freiwilliger werden',
    
    widget_title: 'Schnellspende für dringende Notfälle',
    widget_freq_once: 'Einmalig',
    widget_freq_monthly: 'Monatliche Hilfe',
    widget_custom_placeholder: 'Anderer Betrag...',
    widget_btn_donate: 'Spenden',
    widget_secure: '🔒 Offizielle Konten, 100% Transparenz',

    stats_collected: 'Gesammelte Mittel',
    stats_drones: 'Gelieferte Fahrzeuge und Drohnen',
    stats_families: 'Unterstützte Flüchtlingsfamilien',
    stats_volunteers: 'Aktive Freiwillige',

    calc_title: '🧮 Spendenwirkungs-Rechner',
    calc_subtitle: 'Schieben Sie den Regler, um genau zu sehen, was Ihre Spende an der Front und in Lazaretten bewirkt.',
    calc_label: 'Ihr Spendenbetrag:',
    calc_res_warm: 'Chemische Handwärmer / Erste-Hilfe-Brandwundensets',
    calc_res_tourniquet: 'CAT Gen7 Tourniquets zum Stoppen kritischer Blutungen',
    calc_res_ifak: 'Professionelle NATO IFAK Erste-Hilfe-Ausrüstungen',
    calc_res_ecoflow: 'Beitrag zu EcoFlow Kraftwerk oder Aufklärungsdrohne',

    camp_title: 'Dringende aktive Spendenaktionen',
    camp_subtitle: 'Jeder Euro oder jede Hrywnja rettet genau jetzt Leben. Helfen Sie uns bei der Deckung kritischer Bedürfnisse.',
    camp_urgent_badge: '🔥 KRITISCH & DRINGEND',
    camp_goal: 'Ziel:',
    camp_collected: 'Gesammelt:',
    camp_btn: 'Kampagne unterstützen',

    news_title: '📢 Berichte & Neuigkeiten von der Front',
    news_subtitle: 'Echte Geschichten geretteter Leben und Fotobeweise gelieferter Ausrüstung an unsere Einheiten.',

    honor_title: '🌟 Ehrentafel der Stiftung',
    honor_subtitle: 'Wir sind jedem Wohltäter, Unternehmenspartner und unermüdlichen Freiwilligen zutiefst dankbar.',
    honor_filter_all: 'Alle Helden',
    honor_filter_corporate: 'Unternehmenspartner',
    honor_filter_donor: 'Großspender',
    honor_filter_volunteer: 'Freiwilligen-Leiter',
    honor_contribution: 'Beitrag:',

    focus_title: 'Kernbereiche der Hilfe',
    focus_subtitle: 'Wir arbeiten systematisch und direkt dort, wo Hilfe am dringendsten benötigt wird.',
    focus_mil_title: '🛡️ Unterstützung der Verteidiger',
    focus_mil_desc: 'Anschaffung von Aufklärungsdrohnen, Wärmebildkameras, sicheren Funkgeräten, Geländewagen und Schutzausrüstung.',
    focus_med_title: '🏥 Taktische Medizin & Krankenhäuser',
    focus_med_desc: 'NATO-Standard IFAK-Kits, chirurgische Ausrüstung und Generatoren für Feldlazarette an der Front.',
    focus_hum_title: '📦 Humanitäre Hilfe für Familien',
    focus_hum_desc: 'Lebensmittelpakete, Hygieneartikel, Winterkleidung, Heizgeräte und Unterstützung für Binnenvertriebene.',
    focus_rehab_title: '🦾 Rehabilitation und Prothetik',
    focus_rehab_desc: 'Medizinische Betreuung, maßgeschneiderte bionische Hightech-Prothesen und psychologische Hilfe für Veteranen.',

    trans_title: '100% Transparenz und Berichte',
    trans_subtitle: 'Wir veröffentlichen detaillierte monatliche Finanzberichte, offizielle Übergabeurkunden sowie Foto-/Videobeweise.',
    trans_rep_1_title: 'Finanzbericht Q2 2026',
    trans_rep_1_size: 'PDF, 4.2 MB • Veröffentlicht am 1. Juli',
    trans_rep_2_title: 'Übergabebericht Aufklärungsdrohnen (30 Stk.)',
    trans_rep_2_size: 'PDF + Fotoalbum, 12.8 MB',
    trans_btn_dl: 'Bericht herunterladen 📄',

    form_title: 'Werden Sie Teil des Teams oder Partner',
    form_subtitle: 'Füllen Sie dieses kurze Formular aus und unser Koordinator wird sich in Kürze bei Ihnen melden.',
    form_name: 'Ihr Name oder Firmenname',
    form_phone: 'Telefonnummer',
    form_email: 'E-Mail-Adresse',
    form_role: 'Wie möchten Sie helfen?',
    form_role_vol: 'Freiwilligenarbeit (Logistik, Transport, direkte Hilfe)',
    form_role_part: 'Unternehmenspartnerschaft / Humanitäre Fracht',
    form_role_info: 'Medien- und Informationsunterstützung',
    form_msg: 'Kurze Nachricht oder Kommentar',
    form_submit: 'Bewerbung absenden 🚀',

    modal_title: 'Wohltätige Spende tätigen',
    modal_subtitle: 'Wählen Sie Ihren bevorzugten Weg zur finanziellen Unterstützung der Stiftung „Gemeinsam Sind Wir Kraft“',
    modal_tab_card: '💳 Karte / Apple Pay / Google Pay',
    modal_tab_iban: '🏦 Offizielle IBAN-Konten',
    modal_tab_crypto: '🪙 Krypto (USDT / BTC)',
    modal_card_info: 'Klicken Sie unten, um zu unseren sicheren Zahlungsportalen zu gelangen:',
    modal_btn_monobank: '🐈 Spende in die Monobank-Dose',
    modal_btn_privat: '🟢 Bezahlen über Privat24 / LiqPay',
    modal_iban_info: 'Offizielle Bankkonten der Stiftung:',
    modal_copy_btn: 'Kopieren',

    footer_desc: 'Wohltätigkeitsstiftung „Gemeinsam Sind Wir Kraft“. Offiziell registrierte gemeinnützige Organisation.',
    footer_rights: '© 2026 Stiftung „Gemeinsam Sind Wir Kraft“. Alle Rechte vorbehalten.',
    footer_admin_link: '🔑 Admin-Login'
  }
};

window.I18nStore = {
  currentLang: localStorage.getItem('rms_lang') || 'uk',

  init() {
    this.setLanguage(this.currentLang);
  },

  setLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = 'uk';
    this.currentLang = lang;
    localStorage.setItem('rms_lang', lang);
    document.documentElement.lang = lang;
    this.applyTranslations();
    window.dispatchEvent(new CustomEvent('language_changed', { detail: lang }));
  },

  t(key) {
    const dict = TRANSLATIONS[this.currentLang] || TRANSLATIONS['uk'];
    return dict[key] || key;
  },

  applyTranslations() {
    const dict = TRANSLATIONS[this.currentLang] || TRANSLATIONS['uk'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });
  }
};
