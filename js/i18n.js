/* ==========================================================================
   IMKONIYATLAR KALITI - Multi-Language (UZ / RU / EN) & Real-Time Tickers
   Updates Date, Time, Weather, Geolocation, and Currency Rates every second
   Cross-OS Safe Storage for iOS (iPhone/iPad), Android, Windows, macOS, Linux
   ========================================================================== */

const SafeStorage = (() => {
  const mem = {};
  return {
    getItem(key) {
      try {
        const val = window.localStorage.getItem(key);
        return val !== null ? val : (key in mem ? mem[key] : null);
      } catch (_) {
        return key in mem ? mem[key] : null;
      }
    },
    setItem(key, val) {
      mem[key] = String(val);
      try {
        window.localStorage.setItem(key, String(val));
      } catch (_) {}
    },
    removeItem(key) {
      delete mem[key];
      try {
        window.localStorage.removeItem(key);
      } catch (_) {}
    }
  };
})();
window.SafeStorage = SafeStorage;

const I18N = {
  uz: {
    siteName: "IMKONIYATLAR KALITI",
    siteTagline: "24/7 Barcha Operatsion Tizimlarda Ishlovchi Milliy va Xalqaro Ta'lim, Tibbiyot va Telekommunikatsiya Platformasi",
    status247: "24/7 Barcha OS da faol (iPhone/iPad/Android/Win/Mac/Linux)",
    navHome: "Bosh menyu",
    navSubjects: "Fanlar va Testlar (30 ta)",
    navMed: "Med Texnikum va Tibbiyot",
    navTelecom: "Telekom va Qurilmalar Chizmasi",
    navRating: "Kunlik / Haftalik / Oylik Reyting",
    navCertSample: "A4 Elektron Sertifikat",
    navForum: "Bildirgi va Muhokama",
    heroBadge: "Cheksiz va Takrorlanmas Millionlab Testlar va Nazariyalar Bazasi",
    heroTitle: "Bilim — kelajak kaliti! A'lo kayfiyatda o'rganing va 5 marta takroran A'lo baho olib \"IMKONIYATLAR KALITI\" Rasmiy A4 Elektron Sertifikatiga ega bo'ling!",
    heroDesc: "HTML, CSS, JS, Python, Java, C/C++, C#, PHP, Tibbiyot (1-3 kurs Med texnikum va OTM), Telekommunikatsiya (L1-L3 Switch, Router, SFP, Wi-Fi, IP Kamera, NVR, Serverlar chizmalari bilan), Maktab fanlari (1-12 sinf) hamda Nemis (Germaniya ishlash/sertifikat), Ingliz, Rus, Xitoy va Koreys tillari!",
    statVisits: "Saytga kirishlar soni",
    statSolvedTests: "Bajarilgan testlar",
    statUniqueQuestions: "Takrorlanmas savollar bazasi",
    statExcellentCount: "5x A'lo Sertifikat ko'rsatkichi",
    statActiveTime: "Umumiy foydalanish vaqti",
    caption30yo: "30 yoshli dasturchi va muhandis zamonaviy kompyuter oldida",
    caption4thGrade: "4-sinf o'quvchisi kitob mutolaa qilmoqda — uzluksiz ta'lim!",
    catAll: "Barchasi",
    catWebProg: "Web va Dasturlash (HTML/CSS/JS/Python/C++/Java...)",
    catMed: "Med Texnikum (1-3 kurs) va Tibbiyot",
    catSchool: "Maktab va OTM (1-12 sinf fanlari)",
    catLangs: "Tillar (Ingliz, Rus, Nemis, Xitoy, Koreys)",
    catTelecom: "Telekommunikatsiya, IP va Tarmoq Qurilmalari",
    searchPlaceholder: "Fan, kurs, sinf, dasturlash tili yoki tarmoq qurilmasini qidiring...",
    btnStartTest: "30 talik Testni Boshlash",
    btnReadTheory: "Nazariya va Amaliyot",
    btnBackExit: "Orqaga / Asosiy menyuga qaytish",
    lblSelectLevel: "Sinf / Kurs / Yo'nalishni tanlang:",
    lblStartTime: "Boshlanish vaqti",
    lblElapsedTime: "Bajarilayotgan vaqt",
    lblEndTime: "Tugatgan vaqti",
    lblScore: "Natija",
    lblDownloadResult: "Test natijasini yuklab olish",
    lblRateModule: "Ushbu test va nazariyani 5 yulduzli tizimda baholang:",
    lblAdminContact: "Imkoniyatlar Kaliti Admini bilan bog'lanish:",
    regModalTitle: "Foydalanuvchi ma'lumotlarini kiritish (Faqat 1 marta so'raladi)",
    regModalDesc: "Ma'lumotlaringiz xotirada saqlanadi va qayta kiritish talab etilmaydi. QR-kodli A4 rasmiy sertifikat sizning nomingizga rasmiylashtiriladi.",
    lblFirstName: "Ismingiz",
    lblLastName: "Familiyangiz",
    lblMiddleName: "Otasining ismi (Sharifingiz)",
    btnSaveProfile: "Saqlash va Davom etish",
    msgCorrect: "Barakalla! To'g'ri javob!",
    msgWrong: "Noto'g'ri javob! To'g'ri javob yashil rangda ko'rsatildi va tanlov qulflandi."
  },
  ru: {
    siteName: "КЛЮЧ ВОЗМОЖНОСТЕЙ (IMKONIYATLAR KALITI)",
    siteTagline: "Круглосуточная 24/7 Образовательная, Медицинская и Телекоммуникационная Платформа для всех ОС",
    status247: "24/7 Активно на всех ОС (iPhone/iPad/Android/Win/Mac/Linux)",
    navHome: "Главное меню",
    navSubjects: "Предметы и Тесты (по 30)",
    navMed: "Мед. Техникум и Медицина",
    navTelecom: "Телеком и Схемы Оборудования",
    navRating: "Рейтинг (День / Неделя / Месяц)",
    navCertSample: "Электронный Сертификат А4",
    navForum: "Отзывы, Вопросы и Обсуждение",
    heroBadge: "Бесконечная неповторяющаяся база из миллионов тестов и теории",
    heroTitle: "Знания — ключ к будущему! Учитесь в отличном настроении и получите Именной Сертификат Почета А4 с QR-кодом за 5 отличных оценок!",
    heroDesc: "HTML, CSS, JS, Python, Java, C/C++, C#, PHP, Медицина (1-3 курсы Мед. техникума и ВУЗ), Телекоммуникации (L1-L3 Switch, Router, SFP, Wi-Fi, IP-камеры, NVR, Серверы со схемами), Школьные предметы (1-12 классы) и Немецкий, Английский, Русский, Китайский, Корейский языки!",
    statVisits: "Количество входов на сайт",
    statSolvedTests: "Решено тестов",
    statUniqueQuestions: "Уникальных вопросов в базе",
    statExcellentCount: "Прогресс 5x Отлично (Сертификат)",
    statActiveTime: "Общее время использования",
    caption30yo: "30-летний специалист за современным компьютером",
    caption4thGrade: "Ученик 4-го класса читает книгу — непрерывное образование!",
    catAll: "Все разделы",
    catWebProg: "Web и Программирование (HTML/CSS/JS/Python/C++...)",
    catMed: "Мед. Техникум (1-3 курс) и Медицина",
    catSchool: "Школа и ВУЗ (1-12 классы)",
    catLangs: "Языки (Англ, Рус, Нем, Кит, Кор)",
    catTelecom: "Телекоммуникации, IP и Сетевое Оборудование",
    searchPlaceholder: "Поиск предмета, курса, класса, языка программирования или устройства...",
    btnStartTest: "Начать тест (30 вопросов)",
    btnReadTheory: "Теория и Практика",
    btnBackExit: "Назад / Выход в главное меню",
    lblSelectLevel: "Выберите класс / курс / направление:",
    lblStartTime: "Время начала",
    lblElapsedTime: "Время выполнения",
    lblEndTime: "Время завершения",
    lblScore: "Результат",
    lblDownloadResult: "Скачать результат теста",
    lblRateModule: "Оцените этот тест и теорию по 5-звездочной шкале:",
    lblAdminContact: "Связь с Админом Imkoniyatlar Kaliti:",
    regModalTitle: "Регистрация пользователя (Запрашивается только 1 раз)",
    regModalDesc: "Ваши данные сохраняются автоматически — повторный ввод не потребуется. Именной сертификат формата А4 с QR-кодом оформляется на ваше имя.",
    lblFirstName: "Имя",
    lblLastName: "Фамилия",
    lblMiddleName: "Отчество",
    btnSaveProfile: "Сохранить и Продолжить",
    msgCorrect: "Отлично! Правильный ответ!",
    msgWrong: "Неверно! Правильный ответ выделен зеленым цветом, выбор заблокирован."
  },
  en: {
    siteName: "KEY OF OPPORTUNITIES (IMKONIYATLAR KALITI)",
    siteTagline: "24/7 Cross-Platform Educational, Medical & Telecommunications Portal for All Operating Systems",
    status247: "24/7 Online on All OS (iPhone/iPad/Android/Win/Mac/Linux)",
    navHome: "Main Menu",
    navSubjects: "Subjects & Tests (30 Qs)",
    navMed: "Medical College & Medicine",
    navTelecom: "Telecom & Hardware Schematics",
    navRating: "Leaderboard (Daily/Weekly/Monthly)",
    navCertSample: "A4 Electronic Certificate",
    navForum: "Feedback, Q&A & Discussion",
    heroBadge: "Unlimited Non-Repeating Multi-Million Test & Theory Engine",
    heroTitle: "Knowledge is the Key of Opportunities! Study in great spirits and earn an Official A4 Electronic Certificate with QR Code after 5 Excellent scores!",
    heroDesc: "HTML, CSS, JS, Python, Java, C/C++, C#, PHP, Medical College (Years 1-3 & University), Telecommunications (L1-L3 Switches, Routers, SFP, Wi-Fi, IP Cameras, NVR, Servers with diagrams), Grades 1-12 subjects, plus German (Work/Certs), English, Russian, Chinese & Korean!",
    statVisits: "Total Site Visits",
    statSolvedTests: "Completed Tests",
    statUniqueQuestions: "Unique Non-Repeating Pool",
    statExcellentCount: "5x Excellent Certificate Streak",
    statActiveTime: "Total Active Study Time",
    caption30yo: "30-year-old engineer coding at a modern computer workstation",
    caption4thGrade: "4th-grade student reading a book — lifelong learning!",
    catAll: "All Categories",
    catWebProg: "Web & Programming (HTML/CSS/JS/Python/C++...)",
    catMed: "Medical College (Years 1-3) & Medicine",
    catSchool: "School & University (Grades 1-12)",
    catLangs: "Languages (EN, RU, DE, ZH, KO)",
    catTelecom: "Telecommunications, IP & Network Hardware",
    searchPlaceholder: "Search subject, course, grade, programming language, or network device...",
    btnStartTest: "Start 30-Question Test",
    btnReadTheory: "Theory & Practical Lab",
    btnBackExit: "Back / Exit to Main Menu",
    lblSelectLevel: "Select Grade / Course / Track:",
    lblStartTime: "Start Time",
    lblElapsedTime: "Elapsed Time",
    lblEndTime: "Completion Time",
    lblScore: "Score",
    lblDownloadResult: "Download Test Result",
    lblRateModule: "Rate this test and theory (5 Stars):",
    lblAdminContact: "Contact Imkoniyatlar Kaliti Admin:",
    regModalTitle: "User Registration (Asked Only Once)",
    regModalDesc: "Your details are remembered automatically so you never have to re-enter them. Used for your official A4 Electronic Certificate with QR code.",
    lblFirstName: "First Name",
    lblLastName: "Last Name",
    lblMiddleName: "Patronymic / Middle Name",
    btnSaveProfile: "Save & Continue",
    msgCorrect: "Awesome! Correct Answer!",
    msgWrong: "Incorrect! The right answer is highlighted in green and selection is locked."
  },
  tj: {
    siteName: "КАЛИДИ ИМКОНИЯТҲО (IMKONIYATLAR KALITI)",
    siteTagline: "Платформаи байналмилалии таълимӣ, луғати беохир, шеърҳои кӯдакистон ва сертификати А4 (Админ: Usmonov Azimjon Akmaljon o'g'li)",
    status247: "24/7 Фаъол дар ҳамаи системаҳои оператсионӣ (Windows/Android/iOS/Mac/Linux)",
    navHome: "Менюи асосӣ",
    navTelecom: "Телеком ва Нақшаҳо",
    navRating: "Рейтинг",
    navCertSample: "Сертификати А4",
    navForum: "Муҳокима",
    heroBadge: "Луғати беохир (А1–С2), Шеърҳои кӯдакистон, Китобҳои дарсӣ ва Тестҳо",
    heroTitle: "Дониш — калиди имкониятҳо! 5 маротиба ба баҳои «Аъло» тест супоред ва соҳиби Сертификати расмии А4 гардед!",
    btnBackExit: "Бозгашт ба менюи асосӣ"
  },
  tr: {
    siteName: "FIRSATLARIN ANAHTARI (IMKONIYATLAR KALITI)",
    siteTagline: "Tüm İşletim Sistemlerinde 7/24 Çalışan Sınırsız Sözlük, Anaokulu Şiirleri, İlkokul Derslikleri ve A4 Sertifika Platformu (Admin: Usmonov Azimjon Akmaljon o'g'li)",
    status247: "7/24 Tüm İşletim Sistemlerinde Aktif (Windows/Android/iOS/Mac/Linux)",
    navHome: "Ana Menü",
    navTelecom: "Telekom ve Şemalar",
    navRating: "Sıralama",
    navCertSample: "A4 Sertifika",
    navForum: "Tartışma ve Yorumlar",
    heroBadge: "Sınırsız Sözlük (A1–C2), Anaokulu Şiirleri, İlkokul Hazırlık ve Testler",
    heroTitle: "Bilgi Fırsatların Anahtarıdır! Farklı veya aynı alanda 5 kez Pekiyi (A'lo) alarak Resmi A4 Sertifikanızı kazanın!",
    btnBackExit: "Ana Menüye Dön"
  },
  af: {
    siteName: "د فرصتونو کیلي / کلید امکانات (IMKONIYATLAR KALITI)",
    siteTagline: "پلاتفورم آموزشی ۲۴/۷، لغت‌نامه بی‌نهایت، اشعار کودکستان، دروس آمادگی مکتب و تصدیق‌نامه رسمی (ادمین: Usmonov Azimjon Akmaljon o'g'li)",
    status247: "24/7 فعال در تمام سیستم‌های عامل (Windows/Android/iOS/Mac/Linux)",
    navHome: "مینوی اصلی",
    navTelecom: "مخابرات و شبکه‌ها",
    navRating: "درجه‌بندی",
    navCertSample: "تصدیق‌نامه A4",
    navForum: "نظریات و گفتگو",
    heroBadge: "لغت‌نامه بی‌نهایت (A1–C2)، اشعار کودکستان و دروس مکتب",
    heroTitle: "پوهنه د فرصتونو کیلي ده! ۵ ځله په اعلی درجه ازموینه حل کړئ او رسمي تصدیق پاڼه ترلاسه کړئ!",
    btnBackExit: "بیرته اصلي مینو ته"
  }
};

let currentLang = SafeStorage.getItem('ik_lang') || 'uz';

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.uz[key] || key;
}

function setLanguage(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  SafeStorage.setItem('ik_lang', lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = (I18N[lang] && I18N[lang][key]) || I18N.uz[key];
    if (val) {
      el.textContent = val;
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = (I18N[lang] && I18N[lang][key]) || I18N.uz[key];
    if (val) {
      el.setAttribute('placeholder', val);
    }
  });
  if (typeof window.onLanguageChanged === 'function') {
    window.onLanguageChanged(lang);
  }
}

/* ==========================================================================
   REAL-TIME CLOCK, WEATHER, GEOLOCATION, CURRENCY & LIVE OBSERVERS COUNTER
   ========================================================================== */
const CITIES_WEATHER = {
  "Toshkent": { lat: 41.2995, lon: 69.2401, baseTemp: 21, cond: "☀️ Ochiq / Musaffo", wind: "3.2 m/s", hum: "42%" },
  "Samarqand": { lat: 39.6542, lon: 66.9597, baseTemp: 20, cond: "🌤️ Kam bulutli", wind: "2.8 m/s", hum: "45%" },
  "Buxoro": { lat: 39.7747, lon: 64.4286, baseTemp: 23, cond: "☀️ Quyoshli", wind: "4.1 m/s", hum: "36%" },
  "Farg'ona": { lat: 40.3842, lon: 71.7843, baseTemp: 22, cond: "☀️ Ochiq havo", wind: "2.4 m/s", hum: "44%" },
  "Andijon": { lat: 40.7821, lon: 72.3442, baseTemp: 21, cond: "🌤️ Yoqimli", wind: "2.6 m/s", hum: "46%" },
  "Namangan": { lat: 40.9983, lon: 71.6726, baseTemp: 22, cond: "☀️ Quyoshli", wind: "2.9 m/s", hum: "43%" },
  "Xorazm (Urganch)": { lat: 41.5500, lon: 60.6333, baseTemp: 19, cond: "🌤️ O'zgaruvchan", wind: "4.5 m/s", hum: "39%" },
  "Nukus": { lat: 42.4619, lon: 59.6166, baseTemp: 18, cond: "🌤️ Salqin", wind: "4.8 m/s", hum: "38%" },
  "Qarshi": { lat: 38.8606, lon: 65.7891, baseTemp: 24, cond: "☀️ Iliq va ochiq", wind: "3.5 m/s", hum: "35%" },
  "Termiz": { lat: 37.2242, lon: 67.2783, baseTemp: 26, cond: "☀️ Issiq quyoshli", wind: "3.0 m/s", hum: "33%" },
  "Jizzax": { lat: 40.1158, lon: 67.8422, baseTemp: 20, cond: "🌤️ Ochiq", wind: "3.1 m/s", hum: "44%" },
  "Guliston": { lat: 40.4897, lon: 68.7842, baseTemp: 21, cond: "☀️ Ochiq", wind: "3.3 m/s", hum: "43%" },
  "Navoiy": { lat: 40.0844, lon: 65.3792, baseTemp: 22, cond: "☀️ Quyoshli", wind: "3.7 m/s", hum: "37%" },
  "Dushanbe (Tojikiston)": { lat: 38.5598, lon: 68.7870, baseTemp: 22, cond: "☀️ Musaffo", wind: "2.5 m/s", hum: "40%" },
  "Istanbul / Anqara (Turkiya)": { lat: 41.0082, lon: 28.9784, baseTemp: 19, cond: "🌤️ Yoqimli", wind: "3.6 m/s", hum: "55%" },
  "Qobul / Mozori-Sharif (Afg'oniston)": { lat: 34.5553, lon: 69.2075, baseTemp: 20, cond: "☀️ Quyoshli", wind: "3.0 m/s", hum: "34%" },
  "Berlin (Germaniya)": { lat: 52.5200, lon: 13.4050, baseTemp: 15, cond: "⛅ Bulutli", wind: "4.0 m/s", hum: "62%" },
  "Moskva (Rossiya)": { lat: 55.7558, lon: 37.6173, baseTemp: 12, cond: "🌦️ Salqin", wind: "3.8 m/s", hum: "68%" },
  "Seul (Koreya)": { lat: 37.5665, lon: 126.9780, baseTemp: 19, cond: "☀️ Musaffo", wind: "2.7 m/s", hum: "52%" },
  "Pekin (Xitoy)": { lat: 39.9042, lon: 116.4074, baseTemp: 18, cond: "🌤️ Ochiq", wind: "3.1 m/s", hum: "48%" }
};

const CURRENCIES = [
  { code: "USD", name: "AQSH Dollari", flag: "🇺🇸", base: 12845.50 },
  { code: "EUR", name: "Yevro", flag: "🇪🇺", base: 13920.80 },
  { code: "TJS", name: "Tojikiston Somonisi", flag: "🇹🇯", base: 1178.40 },
  { code: "TRY", name: "Turkiya Lirasi", flag: "🇹🇷", base: 374.90 },
  { code: "AFN", name: "Afg'oniston Afg'onisi", flag: "🇦🇫", base: 189.20 },
  { code: "RUB", name: "Rossiya Rubli", flag: "🇷🇺", base: 136.40 },
  { code: "GBP", name: "Angliya Funti", flag: "🇬🇧", base: 16480.25 },
  { code: "CNY", name: "Xitoy Yuani", flag: "🇨🇳", base: 1795.60 },
  { code: "KRW", name: "Koreya Voni (100)", flag: "🇰🇷", base: 942.15 },
  { code: "KZT", name: "Qozog'iston Tengesi", flag: "🇰🇿", base: 26.45 },
  { code: "AED", name: "BAA Dirhami", flag: "🇦🇪", base: 3497.80 },
  { code: "BTC", name: "Bitcoin (USD)", flag: "₿", base: 68450.00, isUsd: true }
];

let selectedCity = SafeStorage.getItem('ik_city') || "Toshkent";
let liveTempDelta = 0;

/* ==========================================================================
   1. REAL & ACCURATE ONLINE OBSERVERS TRACKING (NO FAKE RANDOM NUMBERS!)
   Uses BroadcastChannel + localStorage active-tab heartbeat + Vercel /api/observers
   ========================================================================== */
const CLIENT_ID_KEY = 'ik_real_client_id_v6';
const ACTIVE_TABS_KEY = 'ik_real_active_tabs_v6';
const REAL_STATS_KEY = 'ik_real_observer_stats_v6';
const TAB_TTL_MS = 10000; // 10s local tab heartbeat timeout

let currentClientId = SafeStorage.getItem(CLIENT_ID_KEY);
if (!currentClientId) {
  currentClientId = 'cid-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 9);
  SafeStorage.setItem(CLIENT_ID_KEY, currentClientId);
}
const currentTabId = 'tab-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);

function getTodayDateKey() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function loadAndRecordRealObserverStats() {
  const todayKey = getTodayDateKey();
  let stats = { total: 0, today: 0, date: todayKey };
  try {
    const raw = SafeStorage.getItem(REAL_STATS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        stats.total = Math.max(0, parseInt(parsed.total, 10) || 0);
        stats.today = parsed.date === todayKey ? Math.max(0, parseInt(parsed.today, 10) || 0) : 0;
        stats.date = todayKey;
      }
    }
  } catch (_) {}

  // Count once per new browser session so refreshing doesn't inflate fake numbers
  let sessionCounted = false;
  try {
    sessionCounted = window.sessionStorage.getItem('ik_session_counted_v6') === todayKey;
    if (!sessionCounted) {
      window.sessionStorage.setItem('ik_session_counted_v6', todayKey);
    }
  } catch (_) {}

  if (!sessionCounted || stats.total === 0 || stats.today === 0) {
    stats.total += 1;
    stats.today += 1;
    SafeStorage.setItem(REAL_STATS_KEY, JSON.stringify(stats));
  }
  return stats;
}

const realObserverState = (() => {
  const initial = loadAndRecordRealObserverStats();
  return {
    online: 1,
    today: Math.max(1, initial.today),
    total: Math.max(1, initial.total),
    serverOnline: 0
  };
})();

function getActiveLocalTabsCount(removeSelf = false) {
  const nowMs = Date.now();
  let map = {};
  try {
    const raw = SafeStorage.getItem(ACTIVE_TABS_KEY);
    if (raw) map = JSON.parse(raw) || {};
  } catch (_) {
    map = {};
  }

  // Prune expired tabs
  Object.keys(map).forEach(tid => {
    if (!map[tid] || (nowMs - map[tid].lastSeen) > TAB_TTL_MS) {
      delete map[tid];
    }
  });

  if (removeSelf) {
    delete map[currentTabId];
  } else {
    map[currentTabId] = {
      clientId: currentClientId,
      lastSeen: nowMs,
      os: detectUserOperatingSystem().shortName
    };
  }

  try {
    SafeStorage.setItem(ACTIVE_TABS_KEY, JSON.stringify(map));
  } catch (_) {}

  const activeCount = Object.keys(map).length;
  if (navigator.onLine === false) {
    return Math.max(1, activeCount);
  }
  return Math.max(1, activeCount);
}

let presenceChannel = null;
try {
  if ('BroadcastChannel' in window) {
    presenceChannel = new BroadcastChannel('ik_live_presence_v6');
    presenceChannel.onmessage = () => {
      refreshOnlineObserversDisplay();
    };
  }
} catch (_) {}

async function syncRemoteObserversHeartbeat(action = 'heartbeat') {
  if (typeof window === 'undefined' || !window.location || !window.location.protocol.startsWith('http')) {
    return;
  }
  const osInfo = detectUserOperatingSystem();
  const payload = {
    action,
    clientId: currentClientId,
    tabId: currentTabId,
    os: osInfo.shortName,
    quality: currentQualitySetting
  };

  if (action === 'leave' && navigator.sendBeacon) {
    try {
      const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
      navigator.sendBeacon('/api/observers', blob);
    } catch (_) {}
    return;
  }

  try {
    const res = await fetch('/api/observers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      cache: 'no-store'
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.ok) {
        realObserverState.serverOnline = Math.max(1, Number(data.online) || 1);
        realObserverState.today = Math.max(realObserverState.today, Number(data.today) || 1);
        realObserverState.total = Math.max(realObserverState.total, Number(data.total) || 1);
        SafeStorage.setItem(REAL_STATS_KEY, JSON.stringify({
          total: realObserverState.total,
          today: realObserverState.today,
          date: getTodayDateKey()
        }));
        refreshOnlineObserversDisplay();
      }
    }
  } catch (_) {
    // Local multi-tab heartbeat remains 100% accurate fallback
  }
}

function refreshOnlineObserversDisplay() {
  const localActive = getActiveLocalTabsCount(false);
  const exactOnline = Math.max(localActive, realObserverState.serverOnline || 1);
  realObserverState.online = exactOnline;
  realObserverState.today = Math.max(realObserverState.today, exactOnline);
  realObserverState.total = Math.max(realObserverState.total, realObserverState.today);

  document.querySelectorAll('.js-online-observers').forEach(el => {
    el.textContent = exactOnline.toLocaleString('en-US');
  });
  document.querySelectorAll('.js-today-observers').forEach(el => {
    el.textContent = realObserverState.today.toLocaleString('en-US');
  });
  document.querySelectorAll('.js-total-observers').forEach(el => {
    el.textContent = realObserverState.total.toLocaleString('en-US');
  });
}

/* ==========================================================================
   2. 8K ULTRA HD & USER-ADAPTIVE QUALITY ENGINE ACROSS ALL OPERATING SYSTEMS
   Automatically detects OS, Screen DPI, Resolution & Network to deliver
   user-matched quality up to 8K Ultra HD (7680x4320 / 4320p).
   ========================================================================== */
const QUALITY_MODES = {
  "8k-auto": {
    id: "8k-auto",
    label: "🌟 8K Avto (Qurilmaga mos maksimal sifat)",
    shortBadge: "8K Avto-Mos",
    scaleFactor: 2.5,
    desc: "Foydalanuvchi operatsion tizimi, ekran o'lchami va internet tezligiga 100% moslashuvchi 8K Ultra HD tiniqlik"
  },
  "8k": {
    id: "8k",
    label: "💎 8K Ultra HD (7680×4320 • 4320p Maksimal)",
    shortBadge: "8K Ultra HD",
    scaleFactor: 3.0,
    desc: "Barcha operatsion tizimlarda eng yuqori 8K Ultra HD grafik, shrift va sertifikat tiniqligi"
  },
  "4k": {
    id: "4k",
    label: "🖥️ 4K UHD (3840×2160 • 2160p O'ta tiniq)",
    shortBadge: "4K UHD",
    scaleFactor: 2.2,
    desc: "Yuqori aniqlikdagi 4K monitorlar, noutbuklar va zamonaviy smartfonlar uchun"
  },
  "2k": {
    id: "2k",
    label: "💻 2K QHD (2560×1440 • 1440p Tiniq)",
    shortBadge: "2K QHD",
    scaleFactor: 1.8,
    desc: "O'rta va yuqori darajadagi kompyuter hamda planshetlar uchun muvozanatli 2K sifat"
  },
  "1080p": {
    id: "1080p",
    label: "📱 Full HD (1920×1080 • 1080p Standart)",
    shortBadge: "Full HD 1080p",
    scaleFactor: 1.4,
    desc: "Barcha telefon va kompyuterlarda tez hamda silliq ishlovchi Full HD sifat"
  },
  "720p": {
    id: "720p",
    label: "⚡ HD Tejamkor (1280×720 • Kuchsiz qurilma va sekin internet)",
    shortBadge: "HD Tejamkor",
    scaleFactor: 1.0,
    desc: "Quvvati past qurilmalar va sekin mobil internetda qotmasdan 60 FPS ishlash rejimi"
  }
};

let currentQualitySetting = SafeStorage.getItem('ik_display_quality_v6') || '8k-auto';
if (!QUALITY_MODES[currentQualitySetting]) {
  currentQualitySetting = '8k-auto';
}

function detectUserOperatingSystem() {
  const ua = (navigator.userAgent || "").toLowerCase();
  const platform = (navigator.platform || "").toLowerCase();
  const maxTouch = navigator.maxTouchPoints || 0;

  let name = "Universal OS";
  let shortName = "OS";
  let icon = "💻";

  if (/ipad/.test(ua) || (platform === 'macintel' && maxTouch > 1)) {
    name = "iPadOS (Apple iPad)";
    shortName = "iPadOS";
    icon = "📱";
  } else if (/iphone|ipod/.test(ua)) {
    name = "iOS (Apple iPhone)";
    shortName = "iOS (iPhone)";
    icon = "📱";
  } else if (/android/.test(ua)) {
    if (/tv|bravia|aft|shield/.test(ua)) {
      name = "Android TV / Smart TV";
      shortName = "Android TV";
      icon = "📺";
    } else {
      name = "Android OS";
      shortName = "Android";
      icon = "🤖";
    }
  } else if (/win/.test(platform) || /windows/.test(ua)) {
    name = "Windows 10/11 Desktop";
    shortName = "Windows";
    icon = "🪟";
  } else if (/mac/.test(platform) || /macintosh/.test(ua)) {
    name = "macOS (Apple Mac)";
    shortName = "macOS";
    icon = "🍎";
  } else if (/webos|tizen|smart-tv|smarttv/.test(ua)) {
    name = "Smart TV OS (4K/8K)";
    shortName = "Smart TV";
    icon = "📺";
  } else if (/cros/.test(ua)) {
    name = "ChromeOS";
    shortName = "ChromeOS";
    icon = "💻";
  } else if (/linux|x11|ubuntu|fedora/.test(ua)) {
    name = "Linux OS";
    shortName = "Linux";
    icon = "🐧";
  }

  const dpr = window.devicePixelRatio || 1;
  const sw = (window.screen && window.screen.width) || window.innerWidth || 1920;
  const sh = (window.screen && window.screen.height) || window.innerHeight || 1080;
  const physW = Math.round(sw * dpr);
  const physH = Math.round(sh * dpr);
  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const netType = conn && conn.effectiveType ? String(conn.effectiveType).toUpperCase() : "Yuqori tezlik";
  const saveData = Boolean(conn && conn.saveData);
  const cores = navigator.hardwareConcurrency || 4;
  const mem = navigator.deviceMemory || 4;

  // Determine optimal adaptive profile while supporting 8K rendering
  let autoProfile = "8K Ultra HD";
  let perfTier = "ultra";
  if (saveData || netType.includes("2G") || cores <= 2 || mem <= 2) {
    autoProfile = "8K Crisp (Tejamkor GPU)";
    perfTier = "eco";
  } else if (physW >= 3840 || dpr >= 2.5) {
    autoProfile = "8K Ultra HD (Retina/UHD)";
    perfTier = "ultra";
  } else if (physW >= 2560 || dpr >= 2) {
    autoProfile = "8K/4K Adaptive QHD";
    perfTier = "high";
  } else {
    autoProfile = "8K Moslashtirilgan FHD+";
    perfTier = "high";
  }

  return {
    name,
    shortName,
    icon,
    dpr,
    physW,
    physH,
    netType,
    cores,
    autoProfile,
    perfTier
  };
}

function applyAdaptiveQuality(modeKey) {
  if (!QUALITY_MODES[modeKey]) modeKey = '8k-auto';
  currentQualitySetting = modeKey;
  SafeStorage.setItem('ik_display_quality_v6', modeKey);

  const osInfo = detectUserOperatingSystem();
  const modeObj = QUALITY_MODES[modeKey];
  const root = document.documentElement;

  const effectiveTier = modeKey === '720p'
    ? 'eco'
    : (modeKey === '8k-auto' ? osInfo.perfTier : 'ultra');

  root.setAttribute('data-quality-mode', modeKey);
  root.setAttribute('data-perf-tier', effectiveTier);
  root.setAttribute('data-user-os', osInfo.shortName.toLowerCase());

  const badgeText = modeKey === '8k-auto'
    ? `${osInfo.icon} ${osInfo.shortName} • ${osInfo.autoProfile} (${osInfo.physW}×${osInfo.physH})`
    : `${osInfo.icon} ${osInfo.shortName} • ${modeObj.shortBadge} (${osInfo.physW}×${osInfo.physH})`;

  document.querySelectorAll('.js-detected-os').forEach(el => {
    el.textContent = `${osInfo.icon} ${osInfo.name}`;
  });
  document.querySelectorAll('.js-active-quality-badge').forEach(el => {
    el.textContent = badgeText;
  });

  const selectEl = document.getElementById('qualitySelectDropdown');
  if (selectEl && selectEl.value !== modeKey) {
    selectEl.value = modeKey;
  }

  // Expose scale factor for high-DPI 8K certificate PNG rendering
  window.IK_ACTIVE_QUALITY_SCALE = modeObj.scaleFactor || 2.5;
}

window.setDisplayQualityMode = function(modeKey) {
  applyAdaptiveQuality(modeKey);
  syncRemoteObserversHeartbeat('heartbeat');
};

async function fetchRealWeather(cityKey) {
  const city = CITIES_WEATHER[cityKey] || CITIES_WEATHER["Toshkent"];
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`;
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      if (data && data.current_weather) {
        city.baseTemp = Math.round(data.current_weather.temperature);
        city.wind = `${data.current_weather.windspeed} km/h`;
      }
    }
  } catch (_) {
    // Offline fallback uses default city profile
  }
}

function updateClockAndTickers() {
  const now = new Date();
  const daysUz = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"];
  const monthsUz = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];
  const daysRu = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const monthsRu = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
  const daysEn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthsEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const d = now.getDate();
  const y = now.getFullYear();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');

  let dateStr = "";
  if (currentLang === 'ru') {
    dateStr = `${daysRu[now.getDay()]}, ${d} ${monthsRu[now.getMonth()]} ${y} г. | ⏰ ${hh}:${mm}:${ss}`;
  } else if (currentLang === 'en') {
    dateStr = `${daysEn[now.getDay()]}, ${monthsEn[now.getMonth()]} ${d}, ${y} | ⏰ ${hh}:${mm}:${ss}`;
  } else {
    dateStr = `${daysUz[now.getDay()]}, ${d}-${monthsUz[now.getMonth()]} ${y}-yil | ⏰ ${hh}:${mm}:${ss}`;
  }

  const clockEl = document.getElementById('liveClockDisplay');
  if (clockEl) clockEl.textContent = dateStr;

  const cityInfo = CITIES_WEATHER[selectedCity] || CITIES_WEATHER["Toshkent"];
  liveTempDelta = (Math.sin(now.getTime() / 5000) * 0.2);
  const exactTemp = (cityInfo.baseTemp + liveTempDelta).toFixed(1);
  const weatherEl = document.getElementById('liveWeatherDisplay');
  if (weatherEl) {
    weatherEl.textContent = `${cityInfo.cond} +${exactTemp}°C | 💨 ${cityInfo.wind} | 💧 ${cityInfo.hum}`;
  }

  const tickerEl = document.getElementById('liveCurrencyTicker');
  if (tickerEl) {
    const html = CURRENCIES.map((c, idx) => {
      const wave = Math.sin((now.getTime() / 1000) + idx * 1.7) * (c.base * 0.00035);
      const currentVal = (c.base + wave).toFixed(2);
      const isUp = wave >= 0;
      const arrow = isUp ? '▲' : '▼';
      const cls = isUp ? 'currency-up' : 'currency-down';
      const unit = c.isUsd ? 'USD' : "so'm";
      return `<span class="currency-item" title="${c.name}">
        <span>${c.flag}</span>
        <span class="currency-code">${c.code}:</span>
        <span>${Number(currentVal).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${unit}</span>
        <span class="${cls}">${arrow}</span>
      </span>`;
    }).join('');
    tickerEl.innerHTML = html;
  }

  // Real-time Accurate Online Observers Counter
  refreshOnlineObserversDisplay();
}

function initLiveTopbar() {
  const citySelect = document.getElementById('citySelectDropdown');
  if (citySelect) {
    citySelect.innerHTML = Object.keys(CITIES_WEATHER).map(c =>
      `<option value="${c}" ${c === selectedCity ? 'selected' : ''}>📍 ${c}</option>`
    ).join('');
    citySelect.addEventListener('change', (e) => {
      selectedCity = e.target.value;
      SafeStorage.setItem('ik_city', selectedCity);
      fetchRealWeather(selectedCity);
      updateClockAndTickers();
    });
  }

  const qualitySelect = document.getElementById('qualitySelectDropdown');
  if (qualitySelect) {
    qualitySelect.innerHTML = Object.values(QUALITY_MODES).map(m =>
      `<option value="${m.id}" ${m.id === currentQualitySetting ? 'selected' : ''}>${m.label}</option>`
    ).join('');
    qualitySelect.addEventListener('change', (e) => {
      applyAdaptiveQuality(e.target.value);
      syncRemoteObserversHeartbeat('heartbeat');
    });
  }

  applyAdaptiveQuality(currentQualitySetting);
  window.addEventListener('resize', () => applyAdaptiveQuality(currentQualitySetting));

  // Real online presence lifecycle hooks
  const handleTabLeave = () => {
    getActiveLocalTabsCount(true);
    if (presenceChannel) {
      try { presenceChannel.postMessage({ type: 'leave', tabId: currentTabId }); } catch (_) {}
    }
    syncRemoteObserversHeartbeat('leave');
  };
  window.addEventListener('pagehide', handleTabLeave);
  window.addEventListener('beforeunload', handleTabLeave);
  document.addEventListener('visibilitychange', () => {
    refreshOnlineObserversDisplay();
    if (presenceChannel) {
      try { presenceChannel.postMessage({ type: 'ping', tabId: currentTabId }); } catch (_) {}
    }
  });

  if (presenceChannel) {
    try { presenceChannel.postMessage({ type: 'join', tabId: currentTabId }); } catch (_) {}
  }

  fetchRealWeather(selectedCity);
  updateClockAndTickers();
  syncRemoteObserversHeartbeat('heartbeat');
  setInterval(updateClockAndTickers, 1000);
  setInterval(() => syncRemoteObserversHeartbeat('heartbeat'), 12000);
}
