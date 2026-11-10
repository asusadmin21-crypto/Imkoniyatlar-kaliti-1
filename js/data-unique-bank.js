/* ==========================================================================
   IMKONIYATLAR KALITI — 100% Non-Repeating, Zero-Similar Question & Theory Bank
   Covers ALL 43 Subjects with 30+ Distinct Topics & Comprehensive Theories
   Author: Usmonov Azimjon Akmaljon o'g'li
   ========================================================================== */

const SUBJECT_DEEP_THEORY_BANK = {
  "html5": [
    {
      "badge": "1-MODUL • HUJJAT ARXITEKTURASI",
      "title": "HTML5 Semantik Tuzilishi va DOM Daraxti (Document Object Model)",
      "body": "HTML5 zamonaviy veb-ilovalar poydevori bo'lib, brauzer HTML matnini baytlardan tokenlarga, tokenlarni tugunlarga (Nodes) va yakunda DOM daraxtiga aylantiradi. Semantik teglar (<header>, <nav>, <main>, <article>, <section>, <aside>, <footer>) qidiruv tizimi robotlari (Googlebot) va ko'zi ojizlar uchun ekran o'quvchi dasturlar (NVDA, VoiceOver) sahifa tuzilishini aniq tushunishini ta'minlaydi.",
      "code": "<!DOCTYPE html>\n<html lang=\"uz\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Semantik Hujjat</title>\n</head>\n<body>\n  <header><nav aria-label=\"Asosiy menyu\">...</nav></header>\n  <main>\n    <article><h1>Maqola sarlavhasi</h1><p>Asosiy matn...</p></article>\n    <aside>Qo'shimcha ma'lumot</aside>\n  </main>\n  <footer>&copy; 2026 Imkoniyatlar Kaliti</footer>\n</body>\n</html>",
      "practice": "Amaliy topshiriq: Sahifada faqat bitta <main> va bitta <h1> bo'lishini tekshiring; <section> teglarida doimo sarlavha (<h2>–<h6>) ishlating."
    },
    {
      "badge": "2-MODUL • FORMALAR VA VALIDATSIYA",
      "title": "HTML5 Interaktiv Formalar va Constraint Validation API",
      "body": "JavaScript ishlatmasdan turib ham HTML5 ichki validatsiya mexanizmlari orqali foydalanuvchi kiritgan ma'lumotlarni tekshirish mumkin. Buning uchun input turlari (email, tel, url, number, date, range, color, search) hamda required, minlength, maxlength, min, max, step va RegExp pattern atributlari qo'llaniladi.",
      "code": "<form id=\"orderForm\" action=\"/submit\" method=\"POST\">\n  <label for=\"phoneInput\">Telefon raqamingiz:</label>\n  <input id=\"phoneInput\" name=\"phone\" type=\"tel\"\n         pattern=\"^\\+998[0-9]{9}$\" required\n         placeholder=\"+998901234567\" autocomplete=\"tel\">\n  <datalist id=\"cities\">\n    <option value=\"Toshkent\"><option value=\"Samarqand\"><option value=\"Buxoro\">\n  </datalist>\n  <input list=\"cities\" name=\"city\" placeholder=\"Shaharni tanlang\">\n  <button type=\"submit\">Tasdiqlash</button>\n</form>",
      "practice": "Amaliy topshiriq: Har bir <input> elementini <label for='id'> orqali bog'lang — bu mobil ekranda bosish maydonini kengaytiradi."
    },
    {
      "badge": "3-MODUL • MULTIMEDIA VA GRAFIKA",
      "title": "Moslashuvchan Rasmlar (<picture>, srcset), Audio/Video va SVG/Canvas",
      "body": "Retina va 4K/8K ekranlarda rasm sifatini yo'qotmaslik hamda mobil internetda trafikni tejash uchun <picture> tegi va srcset / sizes atributlari ishlatiladi. Vektorli chizmalar uchun <svg> (masshtablanganda xiralashmaydi), dinamik 2D/WebGL o'yin va grafiklar uchun <canvas> qo'llaniladi.",
      "code": "<picture>\n  <source media=\"(min-width: 1024px)\" srcset=\"banner-desktop.webp\" type=\"image/webp\">\n  <source media=\"(min-width: 600px)\" srcset=\"banner-tablet.webp\" type=\"image/webp\">\n  <img src=\"banner-mobile.jpg\" alt=\"Ta'lim platformasi banneri\" loading=\"lazy\" width=\"800\" height=\"450\">\n</picture>",
      "practice": "Amaliy topshiriq: Sahifa pastidagi rasmlarga loading='lazy' va aniq width/height berib, CLS (Cumulative Layout Shift) siljishini 0 ga tushiring."
    },
    {
      "badge": "4-MODUL • SEO, OPEN GRAPH VA ACCESSIBILITY (A11Y)",
      "title": "Meta Teglar, Open Graph Protokoli va WAI-ARIA Standartlari",
      "body": "Ijtimoiy tarmoqlarda (Telegram, WhatsApp, Facebook, LinkedIn) havola ulashilganda chiroyli rasm va sarlavha chiqishi uchun og:title, og:description, og:image meta teglari yoziladi. ARIA atributlari (role, aria-expanded, aria-live, aria-hidden, tabindex) dinamik vidjetlarni barcha foydalanuvchilar uchun qulay qiladi.",
      "code": "<meta property=\"og:title\" content=\"Imkoniyatlar Kaliti\">\n<meta property=\"og:image\" content=\"https://example.com/preview.png\">\n<button aria-expanded=\"false\" aria-controls=\"menuPanel\">Menyuni ochish</button>",
      "practice": "Amaliy topshiriq: Klaviatura orqali (Tab tugmasi bilan) barcha interaktiv elementlarga o'tish mumkinligini sinab ko'ring."
    },
    {
      "badge": "5-MODUL • UNUMDORLIK VA WEB STORAGE",
      "title": "Skriptlarni Yuklash (async vs defer) va Resource Hints (preload/preconnect)",
      "body": "Oddiy <script> tegi HTML parsing jarayonini to'xtatib qo'yadi. 'defer' atributi skriptni fonda yuklab, DOM to'liq qurilgach tartib bilan ishga tushiradi. 'async' esa yuklanishi bilanoq darhol ishga tushiradi (mustaqil analitika skriptlari uchun).",
      "code": "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preload\" href=\"/fonts/inter.woff2\" as=\"font\" type=\"font/woff2\" crossorigin>\n<script src=\"/js/vendor.js\" defer></script>\n<script src=\"/js/app.js\" defer></script>",
      "practice": "Amaliy topshiriq: Asosiy JS fayllarni <head> ichida defer atributi bilan chaqirib, First Contentful Paint (FCP) tezligini oshiring."
    }
  ],
  "css3": [
    {
      "badge": "1-MODUL • BOX MODEL VA SPECIFICITY",
      "title": "CSS Box Model, Cascade Qonuni va Selektorlar Ustuvorligi",
      "body": "Har bir HTML element to'rtburchak quti (Content -> Padding -> Border -> Margin) shaklida chiziladi. box-sizing: border-box berilganda padding va border belgilangan width ichiga kiradi. Specificity hisobi: Inline style (1,0,0,0) > #ID (0,1,0,0) > .class / [attr] / :hover (0,0,1,0) > element va ::pseudo-element (0,0,0,1).",
      "code": "*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.card > .title:not(.disabled) {\n  font-weight: 800;\n}",
      "practice": "Amaliy topshiriq: !important ishlatmasdan, BEM (.block__element--modifier) metodologiyasi orqali toza selektorlar yozing."
    },
    {
      "badge": "2-MODUL • FLEXBOX VA CSS GRID",
      "title": "Bir va Ikki O'lchovli Zamonaviy Maketlash (Flexbox & Grid Architecture)",
      "body": "Flexbox bir o'q bo'ylab (qator yoki ustun) elementlarni tekislash va bo'sh joyni taqsimlash (flex-grow, flex-shrink, flex-basis, justify-content, align-items) uchun ideal. CSS Grid esa bir vaqtda ham qatorlar, ham ustunlarni (grid-template-columns, grid-template-areas, minmax, auto-fit) boshqaradi.",
      "code": ".dashboard-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));\n  gap: 1.25rem;\n  align-items: stretch;\n}",
      "practice": "Amaliy topshiriq: Media query yozmasdan repeat(auto-fit, minmax(280px, 1fr)) yordamida moslashuvchan kartalar to'rini yarating."
    },
    {
      "badge": "3-MODUL • CUSTOM PROPERTIES VA RANG TIZIMLARI",
      "title": "CSS O'zgaruvchilari (--var), calc(), clamp() va Dinamik Mavzular",
      "body": "CSS Custom Properties (:root da e'lon qilinadigan --o'zgaruvchilar) JavaScript orqali real vaqtda sayt rangini (Dark/Light/Emerald/Gold) o'zgartirish imkonini beradi. clamp(min, preferred, max) funksiyasi shrift o'lchamini ekran kengligiga qarab silliq moslashtiradi.",
      "code": ":root {\n  --bg-main: #070d19;\n  --accent-color: #3b82f6;\n}\nh1 {\n  font-size: clamp(1.5rem, 2.5vw + 1rem, 3rem);\n  color: var(--accent-color);\n}",
      "practice": "Amaliy topshiriq: document.documentElement.style.setProperty('--accent-color', '#10b981') orqali jonli rang almashishini sinab ko'ring."
    },
    {
      "badge": "4-MODUL • ANIMATSIYA VA GPU TEZLASHTIRISH",
      "title": "Transitions, @keyframes va Hardware Acceleration (transform & opacity)",
      "body": "60–120 FPS silliq animatsiya olish uchun faqat Composite bosqichida ishlovchi transform (translate, scale, rotate) va opacity xossalarini animatsiya qilish kerak. width, height, top, left xossalarini animatsiya qilish Layout Reflow chaqirib, protsessorni qiynaydi.",
      "code": "@keyframes floatUp {\n  0% { opacity: 0; transform: translate3d(0, 16px, 0); }\n  100% { opacity: 1; transform: translate3d(0, 0, 0); }\n}\n.modal-card {\n  animation: floatUp 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}",
      "practice": "Amaliy topshiriq: Foydalanuvchi sozlamalarini hurmat qilish uchun @media (prefers-reduced-motion: reduce) qoidasini qo'shing."
    }
  ],
  "javascript": [
    {
      "badge": "1-MODUL • ASOSIY MEXANIZMLAR",
      "title": "JavaScript Dvigateli: Call Stack, Event Loop va Microtask Queue",
      "body": "V8 dvigateli JavaScript kodini sinxron bajaradi. Barcha asinxron operatsiyalar (Promise, setTimeout, fetch) Event Loop orqali boshqariladi. Promise mikro-topshiriqlar navbatida (Microtask Queue) turib, setTimeout makro-topshiriqlaridan oldin bajariladi.",
      "code": "console.log('1 - Sinxron');\nsetTimeout(() => console.log('2 - Macrotask (Timeout)'), 0);\nPromise.resolve().then(() => console.log('3 - Microtask (Promise)'));\nconsole.log('4 - Sinxron yakun');\n// Chiqish tartibi: 1 -> 4 -> 3 -> 2",
      "practice": "Amaliy topshiriq: Konsolga 1, 4, 3, 2 chiqish ketma-ketligini o'rganing va async/await ning Promise bilan qanday sinxronlashtirilishini sinab ko'ring."
    },
    {
      "badge": "2-MODUL • XOTIRA VA CLOSURE",
      "title": "Leksik Muhit (Lexical Scope), Closure va Garbage Collection",
      "body": "Closure — ichki funksiya o'zining tashqi o'rab turgan leksik muhitidagi o'zgaruvchilarni eslab qolish xususiyatidir. Bu ma'lumotlarni inkapsulyatsiya qilish (private data) va Factory funksiyalar yaratishda muhimdir.",
      "code": "function createCounter(initial = 0) {\n  let count = initial; // Xususiy o'zgaruvchi\n  return {\n    increment: () => ++count,\n    decrement: () => --count,\n    get: () => count\n  };\n}\nconst c = createCounter(5);\nconsole.log(c.increment()); // 6\nconsole.log(c.get()); // 6",
      "practice": "Amaliy topshiriq: createCounter yordamida har bir chaqiriqda yangi mustaqil xotira maydoni ajratilishini tekshiring."
    },
    {
      "badge": "3-MODUL • ASINXRON DASTURLASH",
      "title": "Promise, Async/Await va Xatoliklarni Tutish (Error Handling)",
      "body": "Veb ilovalarda serverdan ma'lumot olishda qotib qolmaslik (non-blocking) uchun Promise va uning syntactic sugar ko'rinishi async/await qo'llaniladi. try/catch bloklari tarmoq xatoliklarini to'g'ri boshqarish imkonini beradi.",
      "code": "async function fetchUserData(userId) {\n  try {\n    const res = await fetch(`https://api.example.com/users/${userId}`);\n    if (!res.ok) throw new Error(`Server xatosi: ${res.status}`);\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.error('So'rovda xatolik:', err.message);\n    return null;\n  }\n}",
      "practice": "Amaliy topshiriq: Promise.all va Promise.allSettled yordamida bir vaqtning o'zida bir nechta so'rovlarni parallel yuklashni amalga oshiring."
    }
  ],
  "python": [
    {
      "badge": "1-MODUL • PYTHON FUNDAMENTALLARI",
      "title": "Python Xotira Modeli, Mutability va List Comprehension",
      "body": "Python barcha obyektlarni havola (reference) orqali boshqaradi. O'zgaruvchan (mutable: list, dict, set) va o'zgarmas (immutable: int, str, tuple) tiplar xotirada turlicha saqlanadi. List comprehension kodni ixcham va tez bajarilishini ta'minlaydi.",
      "code": "# List comprehension orqali juft sonlar kvadratlarini olish\nnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\neven_squares = [x**2 for x in numbers if x % 2 == 0]\nprint(even_squares) # [4, 16, 36, 64, 100]",
      "practice": "Amaliy topshiriq: 1 dan 100 gacha bo'lgan toq sonlarni dictionary comprehension orqali {son: son**2} shakliga keltiring."
    },
    {
      "badge": "2-MODUL • DEKORATORLAR VA GENERATORLAR",
      "title": "Funksional Dasturlash: Generatorlar (yield) va Dekoratorlar",
      "body": "Generatorlar butun ma'lumotlar to'plamini birdaniga xotiraga yuklamasdan (lazy evaluation), elementlarni navbati bilan ishlab chiqaradi. Dekoratorlar esa mavjud funksiya kodini o'zgartirmasdan uning atrofida qo'shimcha xatti-harakatlar (log yuritish, autentifikatsiya, kesh) qo'shadi.",
      "code": "import time\n\ndef timer_decorator(func):\n    def wrapper(*args, **kwargs):\n        t0 = time.time()\n        result = func(*args, **kwargs)\n        print(f\"{func.__name__} bajarildi: {time.time()-t0:.4f} s\")\n        return result\n    return wrapper\n\n@timer_decorator\ndef compute_data():\n    return sum(x*x for x in range(1_000_000))",
      "practice": "Amaliy topshiriq: Fibonachchi sonlarini cheksiz ishlab chiqaruvchi xotirani tejovchi generator (yield) funksiya tuzing."
    }
  ],
  "biologiya": [
    {
      "badge": "1-MODUL • SITOLOGIYA VA MOLEKULYAR BIOLOGIYA",
      "title": "Hujayra Biomembranalari, Hujayra Sikli va DNK Replikatsiyasi",
      "body": "Barcha tiriklik hujayradan boshlanadi. Plazmatik membrana ikki qavat fosfolipidlar va ularda suzuvchi oqsillardan iborat (suyuq-mozaik model). DNK replikatsiyasi semikonservativ yo'l bilan boradi: har bir yangi qo'sh spiraldagi bitta zanjir ona DNKdan, ikkinchisi yangi sintezlangan zanjirdan tashkil topadi.",
      "code": "Chargaff qoidasi:\nA + G = T + S (Purinlar = Pirimidinlar)\nMisol: Agar DNKda A = 30% bo'lsa, T = 30%, G = 20%, S = 20% bo'ladi.",
      "practice": "Amaliy topshiriq: 1200 ta nukleotiddan iborat DNK bo'lagida 360 ta timin bo'lsa, undagi guanin va sitozin nukleotidlari sonini hisoblang."
    },
    {
      "badge": "2-MODUL • GENETIKA VA IRSIYAT",
      "title": "Mendel Qonunlari, Xromosoma Nazariyasi va Gen Muhandisligi",
      "body": "Gregor Mendel monoduragay va diduragay chatishtirish orqali irsiyatning diskret qonuniyatlarini kashf etdi. Genlar xromosomalarda chiziqli joylashgan bo'lib, krossingover jarayonida gomologik xromosomalar qismlari almashinishi genetik xilma-xillikni ta'minlaydi.",
      "code": "Monoduragay chatishtirish (F2 ajralish):\nGenotip bo'yicha: 1 AA : 2 Aa : 1 aa (1:2:1)\nFenotip bo'yicha: 3 sariq : 1 yashil (3:1)",
      "practice": "Amaliy topshiriq: Pennet katagi yordamida ikkita geterozigotali (AaBb x AaBb) organizm chatishtirilganda fenotipik ajralish nisbatini (9:3:3:1) keltirib chiqaring."
    }
  ],
  "kimyo": [
    {
      "badge": "1-MODUL • ATOM TUZILISHI VA DAVRIY QONUN",
      "title": "Kvant Mexanikasi Asoslari, Elektron Konfiguratsiyalar va Valentlik",
      "body": "Elektronlar atomda orbital deb ataluvchi fazoviy bulutlarda harakatlanadi. Pauli prinsipi bo'yicha bitta orbitalda qarama-qarshi spinli ko'pi bilan 2 ta elektron joylashishi mumkin. Gund qoidasi esa elektronlarning avval bittadan joylashishini talab qiladi.",
      "code": "Elektron konfiguratsiyalar:\n1) Vodorod (H): 1s¹\n2) Uglerod (C): 1s² 2s² 2p²\n3) Temir (Fe): [Ar] 3d⁶ 4s²",
      "practice": "Amaliy topshiriq: Xlor (Cl, Z=17) va Kalsiy (Ca, Z=20) atomlarining to'liq elektron konfiguratsiyasini yozib chiqing."
    },
    {
      "badge": "2-MODUL • KIMYOVIY MUVOZANAT VA KINETIKA",
      "title": "Le-Shatelye Prinsipi, Reaksiya Tezligi va Eritmalar pH qiymati",
      "body": "Kimyoviy muvozanat dinamik xarakterga ega. Tashqi omillar (harorat, bosim, konsentratsiya) o'zgartirilganda muvozanat shu ta'sirni kamaytiradigan tomonga siljiydi. pH qiymati esa eritmada vodorod ionlari aktivligini ko'rsatadi: pH = -lg[H+].",
      "code": "Le-Shatelye amaliyoti:\nN2(g) + 3H2(g) <=> 2NH3(g) + Q (ekzotermik)\n- Bosim oshirilsa: gaz hajmi kam tomonga (o'ngga, NH3 hosil bo'lishiga) siljiydi.\n- Harorat tushirilsa: issiqlik ajralishi tomoniga (o'ngga) siljiydi.",
      "practice": "Amaliy topshiriq: 0.01 M li xlorid kislota (HCl) eritmasining pH qiymatini hisoblang ([H+] = 10^-2 M => pH = 2)."
    }
  ],
  "fizika": [
    {
      "badge": "1-MODUL • MEXANIKA VA SAQLANISH QONUNLARI",
      "title": "Klassik Nyuton Dinamikasi, Energiya va Impulsning Saqlanishi",
      "body": "Yopiq mexanik tizimda tashqi kuchlar bo'lmaganda jami impuls va to'la mexanik energiya doimiy saqlanadi. Noelastik to'qnashuvlarda kinetik energiyaning bir qismi deformatsiya va issiqlik energiyasiga aylanadi.",
      "code": "Impulsning saqlanish qonuni:\nm1 · v1 + m2 · v2 = (m1 + m2) · V (noelastik to'qnashuv)\nMisol: m1 = 2 kg (v1 = 4 m/s), m2 = 2 kg (v2 = 0)\nV = (2 · 4 + 0) / (2 + 2) = 2 m/s",
      "practice": "Amaliy topshiriq: 5 metr balandlikdan erkin tushayotgan 1 kg massali jismning yerga urilish lahzasidagi tezligini (v = √(2gh)) hisoblang."
    },
    {
      "badge": "2-MODUL • ELEKTROMAGNETIZM VA ZANJIRLAR",
      "title": "Om Qonunlari, Kirxgof Qoidalari va Elektromagnit Induksiya",
      "body": "Elektr zanjirlarida o'tkazgichlarning ketma-ket va parallel ulanishida ekvivalent qarshilik turlicha hisoblanadi. Faradeyning elektromagnit induksiya qonuni o'zgaruvchan magnit oqimi o'tkazgich konturida elektr yurituvchi kuch (EYuK) hosil qilishini ifodalaydi.",
      "code": "Ketma-ket ulanish: R_umum = R1 + R2 + ... + Rn\nParallel ulanish: 1/R_umum = 1/R1 + 1/R2\nMisol: Ikkita 6 Om li qarshilik parallel ulanganda:\nR_umum = (6 · 6) / (6 + 6) = 3 Om bo'ladi.",
      "practice": "Amaliy topshiriq: 12 V kuchlanishli manbaga ulangan 4 Om va 8 Om ketma-ket qarshiliklar bo'ylab o'tuvchi tok kuchi va kuchlanish tushuvlarini hisoblang."
    }
  ],
  "matematika": [
    {
      "badge": "1-MODUL • ALGEBRAIK IFODALAR VA TENGLAMALAR",
      "title": "Qisqa Ko'paytirish Ayniyatlari, Kvadrat Tenglamalar va Viyet Teoremasi",
      "body": "Algebra sonli va harfli ifodalar bilan ishlashning umumiy qonuniyatlarini o'rgatadi. Viyet teoremasi kvadrat tenglama ildizlari va uning koeffitsiyentlari orasidagi qat'iy bog'liqlikni ifodalaydi.",
      "code": "x² - 7x + 12 = 0 tenglamada:\nx1 + x2 = 7\nx1 · x2 = 12\nIldizlari: x1 = 3, x2 = 4",
      "practice": "Amaliy topshiriq: 2x² - 5x + 2 = 0 tenglamani diskriminant (D = b² - 4ac) orqali yeching va ildizlarini tekshiring."
    },
    {
      "badge": "2-MODUL • MATEMATIK ANALIZ ASOSLARI",
      "title": "Funksiya Hosilasi, Ekstremum Nuqtalar va Aniq Integral",
      "body": "Hosila funksiya o'zgarish tezligini ko'rsatadi. Hosila nolga teng bo'lgan nuqtalarda (kritik nuqtalar) funksiya o'zining maksimum yoki minimum qiymatlariga erishadi. Integral esa egri chiziqli trapetsiyaning yuzini aniq hisoblab beradi.",
      "code": "f(x) = x³ - 3x\nf'(x) = 3x² - 3 = 0 => x² = 1 => x = ±1\nx = -1 da lokal maksimum, x = 1 da lokal minimum erishiladi.",
      "practice": "Amaliy topshiriq: f(x) = x² funksiyaning [0, 3] oraliqdagi aniq integralini hisoblab, yuzani aniqlang."
    }
  ],
  "ona-tili": [
    {
      "badge": "1-MODUL • FONETIKA VA GRAFIKA",
      "title": "O'zbek Tili Tovushlar Tizimi, Singarmonizm va Bo'g'in Qonuniyatlari",
      "body": "O'zbek adabiy tili fonetikasi 6 ta unli va 23 ta undosh tovushdan iborat. Singarmonizm (unlilar uyg'unligi) tarixan turkiy tillarga xos bo'lib, zamonaviy adabiy tilda asosan leksik va orfoepik me'yorlar shaklida namoyon bo'ladi.",
      "code": "Bo'g'in turlari:\n1) Ochiq bo'g'in: unli bilan tugaydi (o-na, bo-la)\n2) Yopiq bo'g'in: undosh bilan tugaydi (mak-tab, kitob)\nQoida: So'zdagi unlilar soni = bo'g'inlar soni.",
      "practice": "Amaliy topshiriq: Berilgan matndan ochiq va yopiq bo'g'inli so'zlarni ajratib, urg'u o'rnini belgilang."
    },
    {
      "badge": "2-MODUL • MORFOLOGIYA VA SO'Z YASALISHI",
      "title": "Mustaqil So'z Turkumlarining Grammatik Kategoriyalari",
      "body": "Ot, sifat, son, olmosh, fe'l va ravish mustaqil so'z turkumlaridir. Fe'llar zamon, shaxs-son, mayl va nisbat shakllari bilan eng boy va murakkab grammatik tizimni hosil qiladi.",
      "code": "Fe'l nisbatlari yasalishi:\n- Bosh: yozdi\n- O'zlik: yuvindi (-in)\n- Majhul: yozildi (-il)\n- Birgalik: kulishdi (-ish)\n- Orttirma: yozdirdi (-dir)",
      "practice": "Amaliy topshiriq: 5 ta mustaqil fe'lni 5 xil nisbat qo'shimchasi bilan turlab, ularning gapdagi vazifasini tahlil qiling."
    }
  ],
  "ingliz-tili": [
    {
      "badge": "1-MODULE • ADVANCED GRAMMAR ARCHITECTURE",
      "title": "The English Verb Aspect System: Perfective vs Continuous Dynamics",
      "body": "English verb tenses are governed by Time (Past, Present, Future) and Aspect (Simple, Continuous, Perfect, Perfect Continuous). Mastery of time anchors, stative verb restrictions, and aspectual contrast is vital for C1/C2 fluency and IELTS/CEFR academic excellence.",
      "code": "// Contrast Example:\n1. 'I have lived in Tashkent for 5 years.' (Present Perfect — still living there)\n2. 'I lived in Tashkent for 5 years.' (Past Simple — completed period, no longer there)\n3. 'I had been studying before the exam started.' (Past Perfect Continuous)",
      "practice": "Practical task: Write 4 sentences contrasting Present Perfect and Past Simple using accurate time markers ('since', 'for', 'ago', 'in 2020')."
    },
    {
      "badge": "2-MODULE • COMPLEX SYNTAX & INVERSION",
      "title": "Conditionals, Mixed Conditionals and Negative Inversion",
      "body": "Advanced English employs structural inversion for rhetorical emphasis and precision. Negative adverbials at the front of a sentence trigger auxiliary-subject inversion.",
      "code": "// Negative Inversion Formula:\nNegative Adverbial + Auxiliary Verb + Subject + Main Verb\n\nExample 1: 'Never have I witnessed such profound dedication.'\nExample 2: 'Hardly had we arrived when the keynote speech began.'",
      "practice": "Practical task: Rewrite three standard sentences into inverted forms using 'Seldom', 'Under no circumstances', and 'No sooner... than'."
    }
  ],
  "java": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Java (JVM, OOP, Collections, Multithreading & Spring) Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Java (JVM, OOP, Collections, Multithreading & Spring) fani bo'yicha nazariy asoslar: JDK/JRE/JVM arxitekturasi, Garbage Collection, Generics, Stream API, Concurrency va Enterprise ilovalar.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nJava dasturining baytkodini (.class) barcha operatsion tizimlarda mashina kodiga o'girib ishga tushiruvchi virtual mashina qaysi?\n-> To'g'ri javob: JVM (Java Virtual Machine)\nIzoh: JVM 'Write Once, Run Anywhere' tamoyili asosida baytkodni bajaradi.",
      "practice": "Amaliy topshiriq: Java (JVM, OOP, Collections, Multithreading & Spring) bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Java (JVM, OOP, Collections, Multithreading & Spring) Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nJava-da primitiv tiplar (int, double, boolean) va obyekt havolalari (References) xotiraning qaysi qismida saqlanadi?\n-> To'g'ri yechim: Lokal primitivlar va havolalar Stack-da, yaratilgan obyektlarning o'zi (new ...) esa Heap xotirada saqlanadi\nIzoh: JVM xotira modelida barcha obyektlar Heap-da joylashadi va Garbage Collector tomonidan tozalanadi.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Java (JVM, OOP, Collections, Multithreading & Spring) Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nJava-da String, StringBuilder va StringBuffer orasidagi eng muhim farq nima?\n-> Standartga muvofiq yechim: String o'zgarmas (immutable); StringBuilder o'zgaruvchan va tez (single-thread); StringBuffer esa thread-safe (synchronized)\nIzoh: Ko'p marta matn qo'shishda (loop ichida) StringBuilder ishlatish xotirani tejaydi.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "c-cpp": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "C va C++ (Tizimli Dasturlash, Ko'rsatkichlar va STL) Asosiy Qonuniyatlari va Tushunchalari",
      "body": "C va C++ (Tizimli Dasturlash, Ko'rsatkichlar va STL) fani bo'yicha nazariy asoslar: Pointers, References, RAII, Smart Pointers (unique_ptr, shared_ptr), STL (vector, map, set), xotira boshqaruvi.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nC va C++ da o'zgaruvchining xotiradagi manzilini oluvchi va ko'rsatkich (pointer) manzilidagi qiymatni o'quvchi (dereference) operatorlar qaysi?\n-> To'g'ri javob: & (manzilni olish) va * (manzil bo'yicha qiymatga murojaat qilish)\nIzoh: int x = 10; int* p = &x; bu yerda &x — manzil, *p esa 10 qiymatini beradi.",
      "practice": "Amaliy topshiriq: C va C++ (Tizimli Dasturlash, Ko'rsatkichlar va STL) bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "C va C++ (Tizimli Dasturlash, Ko'rsatkichlar va STL) Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nC++ da ko'rsatkich (pointer) va havola (reference: int& ref = x) orasidagi eng muhim farq nima?\n-> To'g'ri yechim: Reference e'lon qilinganda albatta initsializatsiya qilinishi shart, NULL bo'la olmaydi va keyin boshqa obyektga qayta bog'lanmaydi\nIzoh: Reference mavjud o'zgaruvchining xavfsiz taxallusi (alias) hisoblanadi.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "C va C++ (Tizimli Dasturlash, Ko'rsatkichlar va STL) Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nZamonaviy C++ (C++11/14/17/20) da dinamik ajratilgan obyektga YAGONA egalik qiluvchi va blokdan chiqqanda avtomatik o'chiruvchi aqlli ko'rsatkich qaysi?\n-> Standartga muvofiq yechim: std::unique_ptr<T> (std::make_unique<T>())\nIzoh: std::unique_ptr nusxalanmaydi (faqat std::move qilinadi) va qo'shimcha xotira sarfisiz RAII ni ta'minlaydi.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "csharp": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "C# (C Sharp) & .NET Platformasi Asosiy Qonuniyatlari va Tushunchalari",
      "body": "C# (C Sharp) & .NET Platformasi fani bo'yicha nazariy asoslar: CLR, .NET 8, LINQ, Async/Await Task, Entity Framework, ASP.NET Core Web API va Unity GameDev asoslari.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nC# va .NET platformasida Value Types (struct, int, bool) va Reference Types (class, string, array) orasidagi asosiy farq nima?\n-> To'g'ri javob: Value Types qiymatni bevosita saqlaydi (ko'pincha Stack-da), Reference Types esa Heap-dagi obyektga havolani saqlaydi\nIzoh: struct va primitivlar Value Type bo'lib, uzatilganda qiymati nusxalanadi.",
      "practice": "Amaliy topshiriq: C# (C Sharp) & .NET Platformasi bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "C# (C Sharp) & .NET Platformasi Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nC# da ma'lumotlar kolleksiyalari va SQL bazalariga yagona sintaksisda so'rov yozish texnologiyasi nima deb ataladi?\n-> To'g'ri yechim: LINQ (Language Integrated Query)\nIzoh: LINQ (.Where(), .Select(), .OrderBy(), .FirstOrDefault()) C# tiliga integratsiyalashgan so'rovlar tizimidir.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "C# (C Sharp) & .NET Platformasi Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nLINQ-da FirstOrDefault() va SingleOrDefault() metodlari orasidagi muhim farq nimada?\n-> Standartga muvofiq yechim: FirstOrDefault() birinchi topilgan elementni oladi; SingleOrDefault() esa shartga mos element 1 tadan ko'p bo'lsa InvalidOperationException beradi\nIzoh: Yagona unikal yozuvni (masalan, ID bo'yicha) tekshirib olishda SingleOrDefault() ishlatiladi.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "php": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "PHP 8+ & Backend Web Dasturlash (PDO, MVC, Laravel) Asosiy Qonuniyatlari va Tushunchalari",
      "body": "PHP 8+ & Backend Web Dasturlash (PDO, MVC, Laravel) fani bo'yicha nazariy asoslar: PHP 8 JIT, OOP, Composer, PDO SQL Injection himoyasi, REST API, Session/JWT va Laravel arxitekturasi.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nPHP-da MySQL/PostgreSQL bazasiga so'rov yuborishda SQL Injection hujumlaridan 100% himoyalanishning oltin standarti qaysi?\n-> To'g'ri javob: PDO Prepared Statements ($stmt = $pdo->prepare('SELECT * FROM users WHERE id = :id'))\nIzoh: Prepared Statements SQL so'rov strukturasi bilan foydalanuvchi ma'lumotini alohida-alohida uzatadi.",
      "practice": "Amaliy topshiriq: PHP 8+ & Backend Web Dasturlash (PDO, MVC, Laravel) bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "PHP 8+ & Backend Web Dasturlash (PDO, MVC, Laravel) Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nFoydalanuvchi parollarini ma'lumotlar bazasida xavfsiz xeshlab saqlash va tekshirish uchun PHP-ning qaysi standart funksiyalari ishlatiladi?\n-> To'g'ri yechim: password_hash($pass, PASSWORD_DEFAULT) va password_verify($pass, $hash)\nIzoh: password_hash() avtomatik tuz (salt) bilan Bcrypt/Argon2 algoritmidan foydalanadi.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "PHP 8+ & Backend Web Dasturlash (PDO, MVC, Laravel) Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nPHP-da include, require, include_once va require_once orasidagi asosiy farq nima?\n-> Standartga muvofiq yechim: require fayl topilmasa Fatal Error (E_COMPILE_ERROR) berib skriptni to'xtatadi; include esa Warning berib davom etadi\nIzoh: Muhim konfiguratsiya va klasslar uchun doim require_once yoki Composer autoloader ishlatiladi.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "med-texnikum-courses": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Med Texnikum 1, 2, 3-kurslar Majmuasi (Barcha Yo'nalishlar) Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Med Texnikum 1, 2, 3-kurslar Majmuasi (Barcha Yo'nalishlar) fani bo'yicha nazariy asoslar: Med texnikum va tibbiyot kollejlarining 1, 2 va 3-kurs talabalari uchun barcha mutaxassislik fanlari, amaliy manipulyatsiyalar va klinik standartlar.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nMed texnikum manipulyatsiya standartiga ko'ra: teri ichiga (i/d), teri ostiga (s/c) va muskul orasiga (i/m) inyeksiya qilish burchaklari necha gradus?\n-> To'g'ri javob: Teri ichiga 10-15°, teri ostiga 45°, muskul orasiga 90°\nIzoh: Shprits ignasi qavat chuqurligiga qarab: i/d — 15°, s/c — 45°, i/m — 90° burchakda kiritiladi.",
      "practice": "Amaliy topshiriq: Med Texnikum 1, 2, 3-kurslar Majmuasi (Barcha Yo'nalishlar) bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Med Texnikum 1, 2, 3-kurslar Majmuasi (Barcha Yo'nalishlar) Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nKattalarda bazaviy o'pka-yurak reanimatsiyasini (BLS) o'tkazishda ko'krak qafasini bosish va sun'iy nafas berish nisbati qanday?\n-> To'g'ri yechim: 30 marta bosish : 2 marta sun'iy nafas (100–120 marta/daq, chuqurlik 5–6 sm)\nIzoh: Xalqaro ERC/AHA protokoliga ko'ra 30:2 nisbatda bajariladi.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Med Texnikum 1, 2, 3-kurslar Majmuasi (Barcha Yo'nalishlar) Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nAnafilaktik shok rivojlanganda birinchi qator shoshilinch tanlov dori vositasi sifatida qaysi preparat muskul orasiga yuboriladi?\n-> Standartga muvofiq yechim: Epinefrin (Adrenalin) 0.18% — 0.3–0.5 ml sonning old-tashqi yuzasiga muskul orasiga\nIzoh: Adrenalin alfa va beta adrenoretseptorlarni qo'zg'atib, qon bosimini ko'taradi va bronxospazmni yechadi.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "anatomiya": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Anatomiya (Odam Anatomiyasi — Nazariy va Amaliy) Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Anatomiya (Odam Anatomiyasi — Nazariy va Amaliy) fani bo'yicha nazariy asoslar: Osteologiya (suyaklar), Miologiya (muskullar), Splanxnologiya (ichki a'zolar), Angiologiya va Markaziy/Periferik asab tizimi.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nVoyaga yetgan inson skeleti jami nechta suyakdan tashkil topgan va umurtqa pog'onasida nechta umurtqa bor?\n-> To'g'ri javob: Skeletda 206 ta suyak; umurtqa pog'onasida 33–34 ta umurtqa (7 bo'yin, 12 ko'krak, 5 bel, 5 dumg'aza, 4–5 dum)\nIzoh: 7 ta bo'yin, 12 ta ko'krak, 5 ta bel, 5 ta o'zaro bitishgan dumg'aza va 4-5 ta dum umurtqasi mavjud.",
      "practice": "Amaliy topshiriq: Anatomiya (Odam Anatomiyasi — Nazariy va Amaliy) bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Anatomiya (Odam Anatomiyasi — Nazariy va Amaliy) Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\n1- va 2-bo'yin umurtqalarining lotincha va anatomik nomlari qanday?\n-> To'g'ri yechim: 1-bo'yin umurtqasi — Atlant (Atlas, tanasi yo'q), 2-bo'yin umurtqasi — Epistrofey / Axis (tishsimon o'simtasi bor)\nIzoh: Atlant kalla suyagini ko'tarib turadi, Axis tishsimon o'simtasi esa boshning ikki yonga burilishini ta'minlaydi.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Anatomiya (Odam Anatomiyasi — Nazariy va Amaliy) Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nInson tanasidagi eng uzun va eng baquvvat naysimon suyak qaysi?\n-> Standartga muvofiq yechim: Son suyagi (Os femoris / Femur)\nIzoh: Son suyagi tana bo'yining ~27% ini tashkil etuvchi eng yirik naysimon suyakdir.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "fiziologiya": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Fiziologiya (Normal Fiziologiya — Nazariy va Amaliy) Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Fiziologiya (Normal Fiziologiya — Nazariy va Amaliy) fani bo'yicha nazariy asoslar: Gomeostaz, qon fiziologiyasi, yurak sikli, nafas olish biomexanikasi, buyrak filtratsiyasi va oliy nerv faoliyati.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nOrganizm ichki muhiti ko'rsatkichlarining (pH, harorat, osmotik bosim, glyukoza) nisbiy doimiyligini saqlash xususiyati nima deb ataladi?\n-> To'g'ri javob: Gomeostaz (Homeostasis)\nIzoh: Gomeostaz tushunchasini 1929-yilda Uolter Kennon fanga kiritgan.",
      "practice": "Amaliy topshiriq: Fiziologiya (Normal Fiziologiya — Nazariy va Amaliy) bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Fiziologiya (Normal Fiziologiya — Nazariy va Amaliy) Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nSog'lom inson arterial qonining vodorod ko'rsatkichi (pH) me'yorda qancha bo'ladi?\n-> To'g'ri yechim: pH = 7.36 – 7.42 (kuchsiz ishqoriy muhit)\nIzoh: pH 7.35 dan pasayishi atsidoz, 7.45 dan oshishi alkaloz deyiladi.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Fiziologiya (Normal Fiziologiya — Nazariy va Amaliy) Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nQon plazmasining osmotik bosimiga teng bo'lgan 'fiziologik eritma' (Natriy xlorid NaCl) necha foizli bo'ladi?\n-> Standartga muvofiq yechim: 0.9% li NaCl eritmasi (izotonik eritma)\nIzoh: 0.9% NaCl eritmasida eritrotsitlar bujmaymaydi ham (plazmoliz), yorilib ham ketmaydi (gemoliz).",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "gistologiya": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Gistologiya, Sitologiya va Embriologiya Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Gistologiya, Sitologiya va Embriologiya fani bo'yicha nazariy asoslar: Epiteliy, biriktiruvchi, muskul va nerv to'qimalari mikroskopik tuzilishi hamda a'zolarning gistologik qavatlari.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nInson va hayvonlar organizmi nechta asosiy to'qima guruhidan tashkil topgan?\n-> To'g'ri javob: 4 ta asosiy to'qima turi: 1) Epiteliy, 2) Ichki muhit (biriktiruvchi, qon, tog'ay, suyak), 3) Muskul, 4) Nerv to'qimasi\nIzoh: Gistologiyada barcha a'zolar 4 ta fundamental to'qima guruhining birikmasidan hosil bo'ladi.",
      "practice": "Amaliy topshiriq: Gistologiya, Sitologiya va Embriologiya bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Gistologiya, Sitologiya va Embriologiya Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nHujayraning 'energetik stansiyasi' hisoblanib, o'z shaxsiy halqasimon DNKsiga, ribosomalariga va kristalariga ega bo'lgan ikki membranali organoid qaysi?\n-> To'g'ri yechim: Mitoxondriya (ATF sintezlaydi)\nIzoh: Mitoxondriya yarim avtonom organoid bo'lib, oksidlovchi fosforlanish orqali ATF ishlab chiqaradi.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Gistologiya, Sitologiya va Embriologiya Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nHujayrada oqsil sintezi (translyatsiya) jarayonini amalga oshiruvchi membranasiz organoid va undan oqsillarni tashuvchi tizim qaysi?\n-> Standartga muvofiq yechim: Ribosomalar va Donador (granulyar) endoplazmatik to'r\nIzoh: Donador EPT yuzasidagi ribosomalar eksport qilinuvchi va membrana oqsillarini sintezlaydi.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "biokimyo": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Biokimyo (Tibbiy va Klinik Biokimyo) Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Biokimyo (Tibbiy va Klinik Biokimyo) fani bo'yicha nazariy asoslar: Fermentlar (Enzimologiya), vitaminlar, glikoliz, Krebs sikli, oqsil/yog'/uglevod almashinuvi va qon biokimyoviy tahlili.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nSog'lom inson qon plazmasida nahorga (och qoringa) glyukoza miqdorining kapillyar va venoz qondagi biokimyoviy me'yori qancha?\n-> To'g'ri javob: 3.3 – 5.5 mmol/l (venoz plazmada 6.1 mmol/l gacha)\nIzoh: Nahorga venoz plazmada glyukoza ≥ 7.0 mmol/l bo'lishi Qandli diabet tashxis mezonidir.",
      "practice": "Amaliy topshiriq: Biokimyo (Tibbiy va Klinik Biokimyo) bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Biokimyo (Tibbiy va Klinik Biokimyo) Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nOxirgi 2–3 oy davomida qondagi o'rtacha glyukoza darajasini ko'rsatuvchi 'oltin standart' laboratoriya ko'rsatkichi qaysi?\n-> To'g'ri yechim: Glikirlangan gemoglobin — HbA1c (me'yorda < 5.7%, diabetda ≥ 6.5%)\nIzoh: Eritrotsit 120 kun yashagani sababli HbA1c so'nggi 3 oylik glikemiya profilini aniq ko'rsatadi.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Biokimyo (Tibbiy va Klinik Biokimyo) Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nQon zardobida umumiy oqsilning (Total Protein) biokimyoviy me'yori qancha va uning asosiy fraksiyalari qaysilar?\n-> Standartga muvofiq yechim: 65 – 85 g/l (Albuminlar ~55-65% va Globulinlar: α1, α2, β, γ)\nIzoh: Albuminlar jigarda sintezlanadi, onkotik bosimni saqlaydi va bilirubin, yog' kislotalari hamda dorilarni tashiydi.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "mikrobiologiya": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Mikrobiologiya, Virusologiya va Immunologiya Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Mikrobiologiya, Virusologiya va Immunologiya fani bo'yicha nazariy asoslar: Gram-musbat va Gram-manfiy bakteriyalar, viruslar, sterilizatsiya (avtoklavlash), antibiotikogramma va immunitet.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nGram usulida bo'yalganda qalin peptidoglikan devorga ega Gram-musbat (+) va yupqa devorli Gram-manfiy (-) bakteriyalar qanday rangga bo'yaladi?\n-> To'g'ri javob: Gram-musbat (+) — binafsha-ko'k rangga (gensianvioletni ushlab qoladi); Gram-manfiy (-) — pushti-qizil rangga (fuksin bilan)\nIzoh: Stafilokokk va Streptokokklar Gram (+), Ichak tayoqchasi (E. coli), Salmonella va Gonokokklar Gram (-) bakteriyalardir.",
      "practice": "Amaliy topshiriq: Mikrobiologiya, Virusologiya va Immunologiya bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Mikrobiologiya, Virusologiya va Immunologiya Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nBakteriyalar morfologik shakliga ko'ra qaysi 4 ta asosiy guruhga bo'linadi?\n-> To'g'ri yechim: 1) Kokklar (sharsimon), 2) Batsillalar / Tayoqchasimonlar, 3) Vibrionlar (vergulsimon), 4) Spirillalar va Spiroxetalar (buramasimon)\nIzoh: Uzum shingiliga o'xshash kokklar — Stafilokokk, zanjirsimon — Streptokokk, juft — Diplokokk deyiladi.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Mikrobiologiya, Virusologiya va Immunologiya Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nSil tayoqchasi (Mycobacterium tuberculosis — Kox tayoqchasi) kislotaga chidamli mumsimon qobiqqa ega bo'lgani uchun qaysi maxsus usulda bo'yaladi?\n-> Standartga muvofiq yechim: Sil-Nilsen (Ziehl-Neelsen) usulida (kislotaga chidamli tayoqchalar ko'k fonda yoqutdek qizil rangga bo'yaladi)\nIzoh: Mikobakteriyalar va moxov (lepra) qo'zg'atuvchisi Sil-Nilsen usulida qizil rangda aniqlanadi.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "patologiya": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Patologiya (Patologik Anatomiya va Patologik Fiziologiya) Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Patologiya (Patologik Anatomiya va Patologik Fiziologiya) fani bo'yicha nazariy asoslar: Yallig'lanishning 5 belgisi, distrofiyalar, nekroz, apoptoz, tromboz, emboliya, gipoksiya va o'sma jarayonlari.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nYallig'lanishning Sels va Galen tomonidan ta'riflangan 5 ta klassik mahalliy belgisi qaysi qatorda to'g'ri berilgan?\n-> To'g'ri javob: Rubor (qizarish), Tumor (shish), Calor (mahalliy harorat oshishi), Dolor (og'riq), Functio laesa (funksiya buzilishi)\nIzoh: Ushbu 5 ta belgi o'tkir mahalliy yallig'lanishning universal klinik ko'rinishidir.",
      "practice": "Amaliy topshiriq: Patologiya (Patologik Anatomiya va Patologik Fiziologiya) bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Patologiya (Patologik Anatomiya va Patologik Fiziologiya) Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nYallig'lanish jarayonining ketma-ket rivojlanuvchi 3 ta patogenetik bosqichi (fazasi) qaysilar?\n-> To'g'ri yechim: 1) Alteratsiya (to'qima shikastlanishi), 2) Ekssudatsiya (qon tomir reaksiyasi va suyuqlik chiqishi), 3) Proliferatsiya (hujayralar ko'payib bitishi)\nIzoh: Alteratsiya boshlab beradi, ekssudatsiya o'choqni chegaralaydi, proliferatsiya esa nuqsonni tiklaydi.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Patologiya (Patologik Anatomiya va Patologik Fiziologiya) Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nNekroz va Apoptoz (hujayra o'limining 2 turi) orasidagi eng asosiy farq nimada?\n-> Standartga muvofiq yechim: Nekroz — patologik omil ta'sirida hujayra shishib yorilishi va yallig'lanish chaqirishi; Apoptoz — genetik dasturlashtirilgan, yallig'lanishsiz fiziologik hujayra o'limi\nIzoh: Apoptozda kaspaza fermentlari faollashib, hujayra apoptotik tanachalarga bo'linadi va fagotsitlar tomonidan yallig'lanishsiz yutiladi.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "farmakologiya": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Farmakologiya va Klinik Reseptura Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Farmakologiya va Klinik Reseptura fani bo'yicha nazariy asoslar: Farmakokinetika, farmakodinamika, antibiotiklar, analgetiklar, antigipertenziv vositalar, antidotlar va shoshilinch preparatlar.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nDori vositasining yuborilgan joyidan umumiy qon oqimiga o'zgarmagan holda yetib borgan ulushi (%) farmakokinetikada nima deb ataladi?\n-> To'g'ri javob: Biokiraolishlik (Bioavailability) — vena ichiga (i/v) yuborilganda 100% ga teng\nIzoh: Ichish (per os) orqali qabul qilingan dorilar jigardan birlamchi o'tish effekti tufayli 100% dan kam biokiraolishlikka ega bo'ladi.",
      "practice": "Amaliy topshiriq: Farmakologiya va Klinik Reseptura bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Farmakologiya va Klinik Reseptura Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nMorfin, Fentanil va Tramadol kabi opioid analgetiklarning nafas markazini susaytirishi bilan kechuvchi zaharlanishida spetsifik antidot (antagonist) qaysi?\n-> To'g'ri yechim: Nalokson (opioid retseptorlarning sof raqobatli antagonisti)\nIzoh: Nalokson vena ichiga yuborilganda 1–2 daqiqada opioid komasi va nafas to'xtashini bartaraf etadi.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Farmakologiya va Klinik Reseptura Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nFosfororganik birikmalar (FOB — xlorofos, karbofos, dixlofos) yoki muskarin bilan zaharlanganda birinchi qator spetsifik antidot sifatida qaysi M-xolinoblokator yuboriladi?\n-> Standartga muvofiq yechim: Atropin sulfat 0.1% eritmasi (va reaktivator sifatida Dipiroksim / Alloksim)\nIzoh: FOB atsetilxolinesterazani bloklaydi; Atropin esa M-xolinoretseptorlarni bloklab bronxoreya, bradikardiya va miozni yo'qotadi.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "ichki-kasalliklar": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Ichki Kasalliklar (Terapiya, Kardiologiya, Pulmonologiya) Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Ichki Kasalliklar (Terapiya, Kardiologiya, Pulmonologiya) fani bo'yicha nazariy asoslar: Gipertoniya, Yurak ishemik kasalligi (Stenokardiya, Miokard infarkti), Pnevmoniya, Bronxial astma, Gastrit, Qandli diabet.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nStenokardiya xuruji va O'tkir miokard infarkti og'rig'ining Nitroglitseringa javobi hamda davomiyligi bo'yicha asosiy klinik farqi nimada?\n-> To'g'ri javob: Stenokardiya og'rig'i 1–15 daqiqa davom etib Nitroglitserindan 2–5 daqiqada qoladi; Miokard infarktida og'riq >20–30 daqiqa davom etadi va Nitroglitserindan qolmaydi\nIzoh: Miokard infarktida EKGda ST-segment elevatsiyasi, patologik Q tishcha va qonda Troponin I/T ning oshishi kuzatiladi.",
      "practice": "Amaliy topshiriq: Ichki Kasalliklar (Terapiya, Kardiologiya, Pulmonologiya) bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Ichki Kasalliklar (Terapiya, Kardiologiya, Pulmonologiya) Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nO'pka auskultatsiyasida eshitiladigan 'Krepitatsiya' (quloq oldida soch tolalarini ishqalagandek g'ijirlash) qaysi kasallikka xos va qachon eshitiladi?\n-> To'g'ri yechim: Krupoz (bo'lakli) pnevmoniya va alveolitga xos bo'lib, faqat nafas olishning eng cho'qqisida (alveolalar yozilayotganda) eshitiladi\nIzoh: Mayda pufakchali nam xirillashlar ham nafas olishda, ham chiqarishda eshitiladi va yo'talganda o'zgaradi; krepitatsiya esa yo'talganda o'zgarmaydi.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Ichki Kasalliklar (Terapiya, Kardiologiya, Pulmonologiya) Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nGipertoniya kasalligi (Arterial gipertenziya) tashxisi qo'yish uchun tinch holatda o'lchangan arterial qon bosimi qaysi ko'rsatkichga teng yoki undan yuqori bo'lishi kerak?\n-> Standartga muvofiq yechim: Sistolik AB ≥ 140 mm sim. ust. va/yoki Diastolik AB ≥ 90 mm sim. ust.\nIzoh: 1-daraja AG: 140–159 / 90–99; 2-daraja AG: 160–179 / 100–109; 3-daraja AG: ≥ 180 / ≥ 110 mm sim. ust.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "jarrohlik": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Jarrohlik (Umumiy va Xususiy Xirurgiya, Reanimatsiya) Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Jarrohlik (Umumiy va Xususiy Xirurgiya, Reanimatsiya) fani bo'yicha nazariy asoslar: Aseptika va antiseptika, qon ketish turlari va jgut qo'yish, qon guruhlari (AB0/Rh), desmurgiya, o'tkir qorin sindromi.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nAseptika va Antiseptika tushunchalarining bir-biridan asosiy farqi nimada?\n-> To'g'ri javob: Aseptika — jarohatga mikroblar tushishining oldini olish (sterillash, qo'l yuvish — profilaktika); Antiseptika — jarohatga tushib bo'lgan mikroblarni yo'qotish (mexanik, kimyoviy, biologik, fizik usullar — davolash)\nIzoh: Antiseptika asoschisi — J. Lister (karbol kislota), Aseptika asoschilaridan biri — E. Bergmann va K. Shimmelbush.",
      "practice": "Amaliy topshiriq: Jarrohlik (Umumiy va Xususiy Xirurgiya, Reanimatsiya) bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Jarrohlik (Umumiy va Xususiy Xirurgiya, Reanimatsiya) Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nO'tkir appenditsitda og'riqning dastlab epigastriy (to'sh osti) yoki kindik atrofida boshlanib, 2–4 soatdan keyin o'ng yonbosh sohasiga ko'chishi qaysi simptom deb ataladi?\n-> To'g'ri yechim: Koxer-Volkovich simptomi (og'riq migratsiyasi)\nIzoh: O'ng yonbosh sohasini bosib qo'lni tez olganda og'riq kuchayishi — Shchetkin-Blyumberg (peritonit) simptomidir.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Jarrohlik (Umumiy va Xususiy Xirurgiya, Reanimatsiya) Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nO'tkir appenditsit diagnostikasida Rovzing, Sitkovskiy va Obraztsov simptomlari qanday tekshiriladi?\n-> Standartga muvofiq yechim: Rovzing — chap yonboshni turtib bosganda yo'g'on ichak gazlari siljib o'ng yonboshda og'riq berishi; Sitkovskiy — bemor chap yonboshiga yotganda o'ng yonboshda tortuvchi og'riq; Obraztsov — o'ng oyoqni tekis ko'targanda og'riq\nIzoh: O'tkir appenditsit tasdiqlanganda yagona to'g'ri taktika — shoshilinch Appendektomiya operatsiyasidir.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "pediatriya": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Pediatriya (Bolalar Kasalliklari va Neonatologiya) Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Pediatriya (Bolalar Kasalliklari va Neonatologiya) fani bo'yicha nazariy asoslar: Chaqaloqlarni Apgar shkalasi bo'yicha baholash, Milliy emlash kalendari, raxit, anemiyalar va bolalar infeksiyalari.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nYangi tug'ilgan chaqaloqning holatini tug'ruqning 1- va 5-daqiqalarida baholash uchun qo'llaniladigan 'Apgar shkalasi' qaysi 5 ta belgini (0, 1, 2 balldan, jami 10 ball) o'z ichiga oladi?\n-> To'g'ri javob: A — Appearance (teri rangi), P — Pulse (yurak urishi), G — Grimace (reflekslar), A — Activity (mushak tonusi), R — Respiration (nafas olish); 8–10 ball — sog'lom chaqaloq\nIzoh: Apgar bo'yicha 4–7 ball — o'rta og'irlikdagi asfiksiya, 0–3 ball — og'ir asfiksiya hisoblanadi.",
      "practice": "Amaliy topshiriq: Pediatriya (Bolalar Kasalliklari va Neonatologiya) bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Pediatriya (Bolalar Kasalliklari va Neonatologiya) Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nYangi tug'ilgan muddatiga yetgan sog'lom chaqaloqning o'rtacha tana vazni, bo'yi hamda 1 yoshga to'lganda vazni va bo'yi qanday o'zgaradi?\n-> To'g'ri yechim: Tug'ilganda: vazni 3000–3500 g, bo'yi 50–52 sm; 1 yoshda: vazni ~3 barobar oshib 10–10.5 kg bo'ladi, bo'yi ~25 sm o'sib 75 sm ga yetadi\nIzoh: Chaqaloq vazni 4–5 oyligida 2 barobar, 1 yoshida 3 barobar ortadi.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Pediatriya (Bolalar Kasalliklari va Neonatologiya) Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nBolalarda Katta liqildoq (peshona va tepa suyaklari orasidagi rombsimon liqildoq) me'yorda necha oyligida bitadi (yopiladi)?\n-> Standartga muvofiq yechim: 12–18 oyligida (1–1.5 yoshda)\nIzoh: Raxit va gidrotsefaliyada katta liqildoq kech yopiladi, mikrotsefaliyada esa juda erta yopiladi.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "ona-tili-adabiyot": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Ona tili va Adabiyot (1–12-sinflar + Texnikum va OTM) Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Ona tili va Adabiyot (1–12-sinflar + Texnikum va OTM) fani bo'yicha nazariy asoslar: Mumtoz adabiyot (Alisher Navoiy, Bobur, Mashrab), Jadid adabiyoti (Qodiriy, Cho'lpon, Fitrat), Jahon adabiyoti va aruz vazni.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nO'zbek mumtoz adabiyotining sultoni va g'azal mulkining shohi kim?\n-> To'g'ri javob: Alisher Navoiy (1441-1501)\nIzoh: Navoiy o'zbek adabiy tilini jahon miqyosiga ko'targan buyuk mutafakkir va shoirdir.",
      "practice": "Amaliy topshiriq: Ona tili va Adabiyot (1–12-sinflar + Texnikum va OTM) bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Ona tili va Adabiyot (1–12-sinflar + Texnikum va OTM) Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nAlisher Navoiy turkiy tilda yaratgan besh buyuk dostondan iborat durdona asar nima?\n-> To'g'ri yechim: 'Xamsa' (Hayrat ul-abror, Farhod va Shirin, Layli va Majnun, Sab'ai sayyor, Saddi Iskandariy)\nIzoh: Navoiy turkiy tilda birinchi bo'lib to'liq 'Xamsa' yaratgan daho ijodkordir.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Ona tili va Adabiyot (1–12-sinflar + Texnikum va OTM) Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nNavoiy turkiy tilning forsiy tildan kam emasligini, balki boyroq va ifodali ekanligini isbotlagan ilmiy asari qaysi?\n-> Standartga muvofiq yechim: 'Muhokamat ul-lug'atayn' (Ikki til muhokamasi)\nIzoh: Ushbu asarda Navoiy turkiy tilning leksik va grammatik imkoniyatlarini ilmiy qiyoslagan.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "algebra-geometriya": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Algebra va Geometriya (1–12-sinflar + Kollej va OTM) Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Algebra va Geometriya (1–12-sinflar + Kollej va OTM) fani bo'yicha nazariy asoslar: Kvadrat tenglamalar, funksiyalar, logarifmlar, trigonometriya, hosila va integral, planimetriya va stereometriya.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nChiziqli funksiya y = kx + b grafigida k koeffitsiyenti nimani ifodalaydi?\n-> To'g'ri javob: To'g'ri chiziqning burchak koeffitsiyenti (qiya burchagi)\nIzoh: k > 0 bo'lsa burchak o'tkir (funksiya o'suvchi), k < 0 bo'lsa o'tmas (kamayuvchi) bo'ladi.",
      "practice": "Amaliy topshiriq: Algebra va Geometriya (1–12-sinflar + Kollej va OTM) bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Algebra va Geometriya (1–12-sinflar + Kollej va OTM) Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nParabola y = ax² + bx + c uchining abssissasi (x0) qaysi formula bilan topiladi?\n-> To'g'ri yechim: x0 = -b / (2a)\nIzoh: Parabola simmetriya o'qi x = -b/(2a) to'g'ri chizig'idir.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Algebra va Geometriya (1–12-sinflar + Kollej va OTM) Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nSinuslar teoremasi ixtiyoriy uchburchak uchun qanday yoziladi?\n-> Standartga muvofiq yechim: a / sinα = b / sinβ = c / sinγ = 2R\nIzoh: Uchburchak tomonlarining qarshisidagi burchaklar sinusiga nisbati teng va tashqi chizilgan aylana diametriga teng.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "geografiya": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Geografiya (1–12-sinflar + Texnikum, Kollej va OTM) Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Geografiya (1–12-sinflar + Texnikum, Kollej va OTM) fani bo'yicha nazariy asoslar: Tabiiy geografiya, O'zbekiston va Jahon iqtisodiy-ijtimoiy geografiyasi, kartografiya, iqlim mintaqalari va demografiya.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nYer yuzasidagi eng katta materik qaysi?\n-> To'g'ri javob: Yevrosiyo\nIzoh: Yevrosiyo materigi Yer quruqligining uchdan bir qismidan ko'prog'ini egallaydi.",
      "practice": "Amaliy topshiriq: Geografiya (1–12-sinflar + Texnikum, Kollej va OTM) bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Geografiya (1–12-sinflar + Texnikum, Kollej va OTM) Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nDunyo okeanidagi eng chuqur botiq qaysi va uning chuqurligi qancha?\n-> To'g'ri yechim: Mariana botig'i (taxminan 11,022 metr)\nIzoh: Mariana botig'i Tinch okeanida joylashgan bo'lib, eng chuqur nuqtasi Challenjer tubsizligidir.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Geografiya (1–12-sinflar + Texnikum, Kollej va OTM) Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nYerning eng markaziy qatlami nima deb ataladi?\n-> Standartga muvofiq yechim: Yadro (tashqi suyuq va ichki qattiq yadro)\nIzoh: Yer yadrosi asosan temir va nikel qotishmasidan tashkil topgan.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "informatika": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Informatika va Axborot Texnologiyalari (1–12-sinflar + OTM) Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Informatika va Axborot Texnologiyalari (1–12-sinflar + OTM) fani bo'yicha nazariy asoslar: Sanoq sistemalari (2, 8, 10, 16-lik), Mantiqiy amallar, Kompyuter arxitekturasi, MS Excel formulalari, Algoritmlar va Tarmoqlar.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nAxborotning eng kichik o'lchov birligi nima?\n-> To'g'ri javob: Bit (0 yoki 1)\nIzoh: Bit ikkilik sanoq tizimidagi bitta xonani (0 yoki 1) ifodalaydi.",
      "practice": "Amaliy topshiriq: Informatika va Axborot Texnologiyalari (1–12-sinflar + OTM) bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Informatika va Axborot Texnologiyalari (1–12-sinflar + OTM) Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\n1 Bayt necha bitga teng?\n-> To'g'ri yechim: 8 bit\nIzoh: Bitta belgi (char) odatda xotirada 1 bayt (8 bit) joy egallaydi.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Informatika va Axborot Texnologiyalari (1–12-sinflar + OTM) Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nO'nlik sanoq tizimidagi 13 soni ikkilik (binary) sanoq tizimida qanday yoziladi?\n-> Standartga muvofiq yechim: 1101₂ (8 + 4 + 0 + 1 = 13)\nIzoh: 13 = 8 + 4 + 1 = 2³ + 2² + 2⁰ => 1101₂.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "rus-tili": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Rus Tili (Boshlang'ich va Yuqori 1–12-sinflar, Med Texnikum & OTM) Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Rus Tili (Boshlang'ich va Yuqori 1–12-sinflar, Med Texnikum & OTM) fani bo'yicha nazariy asoslar: Rus tili grammatikasi (6 padej, rod, vid glagola), so'zlashuv amaliyoti hamda shifokor va hamshiralar uchun tibbiy terminologiya.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nВ русском языке сколько гласных звуков и сколько гласных букв?\n-> To'g'ri javob: 6 гласных звуков ([а], [о], [у], [ы], [и], [э]) и 10 гласных букв\nIzoh: Буквы е, ё, ю, я обозначают два звука или указывают на мягкость согласного.",
      "practice": "Amaliy topshiriq: Rus Tili (Boshlang'ich va Yuqori 1–12-sinflar, Med Texnikum & OTM) bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Rus Tili (Boshlang'ich va Yuqori 1–12-sinflar, Med Texnikum & OTM) Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nКакой падеж отвечает на вопросы 'Кого? Чего?' и выражает принадлежность или отсутствие?\n-> To'g'ri yechim: Родительный падеж (Genitive)\nIzoh: Родительный падеж указывает на отсутствие (нет книги), часть целого или владельца.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Rus Tili (Boshlang'ich va Yuqori 1–12-sinflar, Med Texnikum & OTM) Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nК какому спряжению относится глагол-исключение 'брить'?\n-> Standartga muvofiq yechim: К 1-му спряжению (бреет, бреют)\nIzoh: Глаголы на -ить 'брить' и 'стелить' являются исключениями и относятся к 1-му спряжению.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "nemis-tili": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Nemis Tili (1–12-sinflar, Germaniyada Ishlash va A1–C2 Sertifikat) Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Nemis Tili (1–12-sinflar, Germaniyada Ishlash va A1–C2 Sertifikat) fani bo'yicha nazariy asoslar: Grammatika (Kasus: Nominativ, Akkusativ, Dativ, Genitiv; Nebensatz), Goethe/Telc/ÖSD imtihon namunalari va Germaniyada tibbiyot/muhandislikda ishlash leksikasi.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nWie viele grammatische Fälle (Kasus) gibt es in der deutschen Sprache?\n-> To'g'ri javob: 4 Fälle (Nominativ, Akkusativ, Dativ, Genitiv)\nIzoh: Das Deutsche unterscheidet vier Fälle zur Kennzeichnung der Satzglieder.",
      "practice": "Amaliy topshiriq: Nemis Tili (1–12-sinflar, Germaniyada Ishlash va A1–C2 Sertifikat) bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Nemis Tili (1–12-sinflar, Germaniyada Ishlash va A1–C2 Sertifikat) Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nWelcher bestimmte Artikel gehört zum maskulinen Substantiv im Nominativ?\n-> To'g'ri yechim: der (z.B. der Tisch, der Mann)\nIzoh: Maskulin: der, Feminin: die, Neutral: das im Nominativ Singular.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Nemis Tili (1–12-sinflar, Germaniyada Ishlash va A1–C2 Sertifikat) Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nWelche Endung hat der bestimmte Artikel im Akkusativ Maskulin?\n-> Standartga muvofiq yechim: den (z.B. 'Ich sehe den Hund.')\nIzoh: Nur der maskuline Artikel ändert sich im Akkusativ von 'der' zu 'den'.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "xitoy-tili": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Xitoy Tili (Boshlang'ich va Yuqori, HSK 1–6 va Amaliy Muloqot) Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Xitoy Tili (Boshlang'ich va Yuqori, HSK 1–6 va Amaliy Muloqot) fani bo'yicha nazariy asoslar: Pinyin transkripsiyasi, 4 ta ohang (ton), ieroglif chiziqlari tartibi, HSK 1–6 lug'at boyligi va biznes/texnik Xitoy tili.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nXitoy tili (Putongxua) da nechta asosiy ohang (ton) mavjud?\n-> To'g'ri javob: 4 ta asosiy ohang va 1 ta neytral ohang\nIzoh: 1-tekis, 2-ko'tariluvchi, 3-tushib-ko'tariluvchi, 4-keskin tushuvchi va neytral ohang.",
      "practice": "Amaliy topshiriq: Xitoy Tili (Boshlang'ich va Yuqori, HSK 1–6 va Amaliy Muloqot) bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Xitoy Tili (Boshlang'ich va Yuqori, HSK 1–6 va Amaliy Muloqot) Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nXitoy iyerogliflarini lotin harflari bilan fonetik ifodalash tizimi nima deb ataladi?\n-> To'g'ri yechim: Pinyin (拼音 — Hànyǔ Pīnyīn)\nIzoh: Pinyin 1958-yilda qabul qilingan xalqaro standart fonetik transkripsiyadir.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Xitoy Tili (Boshlang'ich va Yuqori, HSK 1–6 va Amaliy Muloqot) Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nXitoy tilida 'Salom' qanday aytiladi?\n-> Standartga muvofiq yechim: Nǐ hǎo (你好)\nIzoh: Nǐ (sen) + hǎo (yaxshi) birikmasi eng keng tarqalgan salomlashuvdir.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "koreys-tili": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Koreys Tili (Hangul, TOPIK I & II hamda EPS-TOPIK Koreyada Ishlash) Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Koreys Tili (Hangul, TOPIK I & II hamda EPS-TOPIK Koreyada Ishlash) fani bo'yicha nazariy asoslar: Hangul alifbosi (14 undosh, 10 unli), hurmat shakllari (-습니다 / -아요/어요), kelishik qo'shimchalari va TOPIK/EPS-TOPIK testlari.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nKoreys alifbosi nima deb ataladi va uni 1443-yilda kim yaratgan?\n-> To'g'ri javob: Hangul (한글) — Buyuk Qirol Sejong tomonidan yaratilgan\nIzoh: Qirol Sejong xalqning savodli bo'lishi uchun ilmiy asoslangan mukammal Hangul alifbosini kashf qilgan.",
      "practice": "Amaliy topshiriq: Koreys Tili (Hangul, TOPIK I & II hamda EPS-TOPIK Koreyada Ishlash) bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Koreys Tili (Hangul, TOPIK I & II hamda EPS-TOPIK Koreyada Ishlash) Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nHangul alifbosida nechta asosiy unli va undosh harf bor?\n-> To'g'ri yechim: 10 ta asosiy unli va 14 ta asosiy undosh (jami 24 ta asosiy harf)\nIzoh: Qo'shaloq unli va undoshlar bilan birga jami 40 ta fonetik harf hosil bo'ladi.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Koreys Tili (Hangul, TOPIK I & II hamda EPS-TOPIK Koreyada Ishlash) Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nKoreys tilida eng keng tarqalgan muloyim rasmiy salomlashuv qaysi?\n-> Standartga muvofiq yechim: Annyeonghaseyo (안녕하세요)\nIzoh: Kundalik hayotda eng ko'p qo'llanuvchi ehtiromli salomlashuv iborasi.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "tojik-tili": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Tojik Tili (Тоҷикӣ — Boshlang'ich A1 dan C2 Oxirigacha Cheksiz Lug'at va Grammatika) Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Tojik Tili (Тоҷикӣ — Boshlang'ich A1 dan C2 Oxirigacha Cheksiz Lug'at va Grammatika) fani bo'yicha nazariy asoslar: Tojik alifbosi (а, б, в, ғ, ӣ, қ, ӯ, ҳ, ҷ), izofat (-и) qoidasi, fe'l zamonlari, boshlang'ichdan oxirigacha cheksiz lug'at va muloqot testlari.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nДар забони тоҷикӣ пайванди байни исм ва сифат ё ду исм чӣ ном дорад?\n-> To'g'ri javob: Изофа (бо ҳарфи -и талаффуз мешавад, масалан: китоби хуб)\nIzoh: Изофа дар забонҳои эронӣ воситаи асосии пайвасти муайянкунанда ба муайяншаванда мебошад.",
      "practice": "Amaliy topshiriq: Tojik Tili (Тоҷикӣ — Boshlang'ich A1 dan C2 Oxirigacha Cheksiz Lug'at va Grammatika) bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Tojik Tili (Тоҷикӣ — Boshlang'ich A1 dan C2 Oxirigacha Cheksiz Lug'at va Grammatika) Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nЗамони ҳозираи феъл дар забони тоҷикӣ бо кадом пасвандҳо ва пешвандҳо сохта мешавад?\n-> To'g'ri yechim: Пешванди ме- + асоси замони ҳозира + бандакҳои шахсӣ (мехонам, меравӣ)\nIzoh: Пешванди 'ме-' нишонаи асосии давомдорӣ ва замони ҳозира мебошад.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Tojik Tili (Тоҷикӣ — Boshlang'ich A1 dan C2 Oxirigacha Cheksiz Lug'at va Grammatika) Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nҶонишинҳои шахсӣ дар забони тоҷикӣ кадомҳоянд?\n-> Standartga muvofiq yechim: Ман, ту, ӯ (вай), мо, шумо, онҳо\nIzoh: Шаш ҷонишини шахсӣ барои ифодаи мутакаллим, мухотаб ва ғоиб хизмат мекунанд.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "turk-tili": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Turk Tili (Türkçe — Boshlang'ich A1 dan C2 Oxirigacha Lug'at va TÖMER Sertifikat) Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Turk Tili (Türkçe — Boshlang'ich A1 dan C2 Oxirigacha Lug'at va TÖMER Sertifikat) fani bo'yicha nazariy asoslar: Turk alifbosi (29 harf: ç, ğ, ı, и, ö, ş, ü), unlilar garmoniyasi (Büyük/Küçük Ünlü Uyumu), kelishiklar, TÖMER testlari va cheksiz lug'at.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nTürkçe dilbilgisinde 'Büyük Ünlü Uyumu' (Kalınlık-İncelik Uyumu) kuralı nedir?\n-> To'g'ri javob: Kelimenin ilk hecesi kalın ünlü (a, ı, o, u) ise diğer heceler kalın; ince (e, i, ö, ü) ise ince ünlülerle devam eder\nIzoh: Türkçenin en temel ses uyumu kuralıdır (ev-ler, araba-lar).",
      "practice": "Amaliy topshiriq: Turk Tili (Türkçe — Boshlang'ich A1 dan C2 Oxirigacha Lug'at va TÖMER Sertifikat) bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Turk Tili (Türkçe — Boshlang'ich A1 dan C2 Oxirigacha Lug'at va TÖMER Sertifikat) Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nTürkçede şimdiki zaman kipi hangi ek ile yapılır?\n-> To'g'ri yechim: -yor eki (örnek: gidiyorum, okuyor)\nIzoh: -yor eki şu anda gerçekleşmekte olan eylemleri bildirir.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Turk Tili (Türkçe — Boshlang'ich A1 dan C2 Oxirigacha Lug'at va TÖMER Sertifikat) Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nGelecek zaman kipi eki hangisidir?\n-> Standartga muvofiq yechim: -acak / -ecek (örnek: geleceğim, yapacak)\nIzoh: Gelecekte yapılacak işleri belirtmek için -acak/-ecek kullanılır.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "afgon-tili": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Afg'on Tili (Dari va Pushtu — دری / پښتو — Boshlang'ich A1 dan C2 Oxirigacha) Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Afg'on Tili (Dari va Pushtu — دری / پښتو — Boshlang'ich A1 dan C2 Oxirigacha) fani bo'yicha nazariy asoslar: Afg'onistonning ikki rasmiy tili — Dari (دری) va Pushtu (پښتو) bo'yicha boshlang'ichdan mukammal darajagacha lug'at, talaffuz, grammatika va testlar.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nAfg'oniston Islom Amirligi / Respublikasida qaysi ikki til rasmiy davlat tillari hisoblanadi?\n-> To'g'ri javob: Pushtu (پښتو) va Dariy / Forsiy Kobuliy (دری)\nIzoh: Afg'oniston konstitutsiyasiga ko'ra Pushtu va Dariy teng huquqli rasmiy tillardir.",
      "practice": "Amaliy topshiriq: Afg'on Tili (Dari va Pushtu — دری / پښتو — Boshlang'ich A1 dan C2 Oxirigacha) bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Afg'on Tili (Dari va Pushtu — دری / پښتو — Boshlang'ich A1 dan C2 Oxirigacha) Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nPushtu tili qaysi til oilasining qaysi tarmog'iga mansub?\n-> To'g'ri yechim: Hind-Yevropa oilasining Sharqiy Eroniy tillar guruhiga\nIzoh: Pushtu tili qadimiy sharqiy eroniy xususiyatlarni saqlab qolgan boy tildir.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Afg'on Tili (Dari va Pushtu — دری / پښتو — Boshlang'ich A1 dan C2 Oxirigacha) Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nDariy tili qaysi til guruhiga kiradi?\n-> Standartga muvofiq yechim: Hind-Yevropa oilasining Janubi-g'arbiy Eroniy tillariga (Klassik fors tili bilan qardosh)\nIzoh: Dariy klassik fors tili adabiy an'analarining to'g'ridan-to'g'ri davomchisidir.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "arab-tili": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Arab Tili (العربية — Alifbo, Tajvid, Nahv-Sarf va A1–C2 Muloqot Darsligi) Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Arab Tili (العربية — Alifbo, Tajvid, Nahv-Sarf va A1–C2 Muloqot Darsligi) fani bo'yicha nazariy asoslar: Arab alifbosi (28 ta harfning 4 xil ko'rinishi), harakatlar, tanvin, tashdid, Nahv va Sarf grammatikasi, A1 dan C2 gacha lug'at va darsliklar.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nArab tili alifbosida nechta harf mavjud va ular qaysi tomondan yoziladi?\n-> To'g'ri javob: 28 ta harf, o'ngdan chapga qarab yoziladi\nIzoh: Arab yozuvi xattotlik an'analariga ko'ra o'ngdan chapga qarab bitiladi.",
      "practice": "Amaliy topshiriq: Arab Tili (العربية — Alifbo, Tajvid, Nahv-Sarf va A1–C2 Muloqot Darsligi) bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Arab Tili (العربية — Alifbo, Tajvid, Nahv-Sarf va A1–C2 Muloqot Darsligi) Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nArab tilida qisqa unlilarni ifodalovchi belgilar nima deb ataladi?\n-> To'g'ri yechim: Harakatlar (Fatha - a, Kasra - i, Damma - u)\nIzoh: Harakatlar harf ustida yoki ostida qo'yiladigan yordamchi fonetik belgilar.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Arab Tili (العربية — Alifbo, Tajvid, Nahv-Sarf va A1–C2 Muloqot Darsligi) Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nArab tilida so'z turkumlari (أقسام الكلام) nechta guruhga bo'linadi?\n-> Standartga muvofiq yechim: 3 ta: Ism (اسم), Fe'l (فعل) va Harf/Yuklama (حرف)\nIzoh: Klassik arab tili grammatikasida barcha so'zlar ushbu 3 turga bo'linadi.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "fransuz-tili": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Fransuz Tili (Français — Boshlang'ich A1 dan C2 DELF/DALF Darslik va Lug'at) Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Fransuz Tili (Français — Boshlang'ich A1 dan C2 DELF/DALF Darslik va Lug'at) fani bo'yicha nazariy asoslar: Fransuz tili fonetikasi, artikllar (le, la, les, un, une, des), fe'l tuslanishlari (être, avoir, aller), DELF/DALF darsliklari va cheksiz lug'at.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nQuel est l'article défini masculin singulier en français?\n-> To'g'ri javob: le (l' devant une voyelle, ex: le livre, l'arbre)\nIzoh: En français, 'le' est le masculin, 'la' le féminin et 'les' le pluriel.",
      "practice": "Amaliy topshiriq: Fransuz Tili (Français — Boshlang'ich A1 dan C2 DELF/DALF Darslik va Lug'at) bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Fransuz Tili (Français — Boshlang'ich A1 dan C2 DELF/DALF Darslik va Lug'at) Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nComment conjugue-t-on le verbe 'être' (to be) à la première personne du singulier au présent?\n-> To'g'ri yechim: Je suis\nIzoh: Être: je suis, tu es, il est, nous sommes, vous êtes, ils sont.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Fransuz Tili (Français — Boshlang'ich A1 dan C2 DELF/DALF Darslik va Lug'at) Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nQuel auxiliaire utilise-t-on pour former le Passé Composé des verbes de mouvement?\n-> Standartga muvofiq yechim: L'auxiliaire 'être' (ex: 'Il est venu', 'Elle est allée')\nIzoh: Les verbes de la 'maison d'être' (aller, venir, naître, mourir...) se conjuguent avec être.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "ispan-tili": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Ispan Tili (Español — Boshlang'ich A1 dan C2 DELE Darslik va Muloqot) Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Ispan Tili (Español — Boshlang'ich A1 dan C2 DELE Darslik va Muloqot) fani bo'yicha nazariy asoslar: Dunyo bo'ylab 500 milliondan ortiq inson so'zlashuvchi Ispan tili: Ser/Estar farqi, artikllar (el, la, los, las), zamonlar va cheksiz lug'at.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\n¿Cuál es la diferencia fundamental entre los verbos 'ser' y 'estar' en español?\n-> To'g'ri javob: 'Ser' se usa para características permanentes/identidad; 'estar' para estados temporales/ubicación\nIzoh: 'Soy profesor' (identidad/profesión) vs 'Estoy cansado' (estado temporal de salud).",
      "practice": "Amaliy topshiriq: Ispan Tili (Español — Boshlang'ich A1 dan C2 DELE Darslik va Muloqot) bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Ispan Tili (Español — Boshlang'ich A1 dan C2 DELE Darslik va Muloqot) Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\n¿Qué artículo determinado se usa con sustantivos femeninos que empiezan por 'a' tónica en singular?\n-> To'g'ri yechim: el (ejemplo: el agua clara, el águila)\nIzoh: Para evitar la cacofonía se usa 'el agua', pero en plural vuelve a ser 'las aguas'.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Ispan Tili (Español — Boshlang'ich A1 dan C2 DELE Darslik va Muloqot) Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\n¿Cuándo se utiliza la preposición 'por' en lugar de 'para'?\n-> Standartga muvofiq yechim: Para causa, motivo, medio o duración (ej: 'gracias por venir', 'por la mañana')\nIzoh: 'Por' indica la causa o el medio; 'para' indica el fin, meta o destinatario.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "yapon-tili": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Yapon Tili (日本語 — Hiragana, Katakana, Kanji va JLPT N5–N1 Darslik) Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Yapon Tili (日本語 — Hiragana, Katakana, Kanji va JLPT N5–N1 Darslik) fani bo'yicha nazariy asoslar: Yapon yozuv tizimi (Hiragana, Katakana, Kanji), Desu/Masu xushmuomalalik shakli, ko'makchilar (wa, ga, wo, ni, de) va JLPT N5–N1 darsliklari.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nYapon tilida nechta asosiy yozuv tizimi birgalikda ishlatiladi?\n-> To'g'ri javob: 3 ta tizim: Hiragana, Katakana va Kanji (iyerogliflar)\nIzoh: Yapon tili bir vaqtning o'zida ikkita bo'g'inli alifbo va xitoy iyerogliflaridan foydalanadi.",
      "practice": "Amaliy topshiriq: Yapon Tili (日本語 — Hiragana, Katakana, Kanji va JLPT N5–N1 Darslik) bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Yapon Tili (日本語 — Hiragana, Katakana, Kanji va JLPT N5–N1 Darslik) Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nSof yaponcha so'zlar va grammatik qo'shimchalarni yozish uchun qaysi bo'g'inli alifbo ishlatiladi?\n-> To'g'ri yechim: Hiragana (ひらがな — 46 ta asosiy belgi)\nIzoh: Hiragana egri, yumshoq chiziqli yapon grammatik yozuvidir.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Yapon Tili (日本語 — Hiragana, Katakana, Kanji va JLPT N5–N1 Darslik) Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nXorijiy tillardan kirib kelgan o'zlashma so'zlar va chet el ismlari qaysi alifboda yoziladi?\n-> Standartga muvofiq yechim: Katakana (カタカナ — masalan: コーヒー / kōhī - qahva)\nIzoh: Katakana to'g'ri va o'tkir burchakli belgilar bo'lib, o'zlashma so'zlar uchun maxsus qo'llanadi.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "bogcha-sherlari": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Bog'cha Bolalari va Tarbiyachi-O'qituvchilar Uchun Tugamaydigan She'rlar va Metodika Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Bog'cha Bolalari va Tarbiyachi-O'qituvchilar Uchun Tugamaydigan She'rlar va Metodika fani bo'yicha nazariy asoslar: Bog'cha tarbiyachilari bolajonlarga o'rgatishi uchun Vatan, Ona, Alifbe, Sanash, Fasllar, Tozalik va Odob haqida tugamaydigan she'rlar va metodik testlar.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nBolalar uchun yozilgan mashhur she'r: 'Qo'limda bor qalamim, yozay desa ... ?'\n-> To'g'ri javob: Alifbo\nIzoh: Bolalarni o'qish va yozishga undovchi mashhur bog'cha she'ridan parcha.",
      "practice": "Amaliy topshiriq: Bog'cha Bolalari va Tarbiyachi-O'qituvchilar Uchun Tugamaydigan She'rlar va Metodika bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Bog'cha Bolalari va Tarbiyachi-O'qituvchilar Uchun Tugamaydigan She'rlar va Metodika Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\n'Oppoq qor, oppoq qor, Yoqqanida quvonch bor...' satrlari qaysi fasl haqidagi she'rdan olingan?\n-> To'g'ri yechim: Qish fasli haqida\nIzoh: Qishda qor yog'ishi bolajonlar uchun eng quvonchli bayram va o'yin faslidir.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Bog'cha Bolalari va Tarbiyachi-O'qituvchilar Uchun Tugamaydigan She'rlar va Metodika Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nBog'chada bolalar barmoqlarini sanashda ishlatiladigan 'Bosh barmoq, Ko'rsatkich...' o'yini nima deb ataladi?\n-> Standartga muvofiq yechim: Barmoq o'yinlari (motorika mashqlari)\nIzoh: Barmoq o'yinlari bolalarning mayda motorikasini va nutqini tez o'stiradi.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "maktabga-tayyorgarlik": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Boshlang'ich Maktabga Tayyorgarlik Darsliklari (Alifbe, Sanash, Mantiq, Atrof-olam) Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Boshlang'ich Maktabga Tayyorgarlik Darsliklari (Alifbe, Sanash, Mantiq, Atrof-olam) fani bo'yicha nazariy asoslar: Bolalarni 1-sinfga va boshlang'ich maktabga a'lo darajada tayyorlovchi eng zo'r kompleks darsliklar, mantiqiy mashqlar va 30 talik sinov testlari.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nMaktabga boradigan bola bilishi kerak bo'lgan asosiy geometrik shakllar qaysilar?\n-> To'g'ri javob: Doira, Kvadrat, Uchburchak va To'g'ri to'rtburchak\nIzoh: Ushbu 4 ta asosiy shakl atrof-muhitdagi buyumlarni tanishda poydevordir.",
      "practice": "Amaliy topshiriq: Boshlang'ich Maktabga Tayyorgarlik Darsliklari (Alifbe, Sanash, Mantiq, Atrof-olam) bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Boshlang'ich Maktabga Tayyorgarlik Darsliklari (Alifbe, Sanash, Mantiq, Atrof-olam) Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nSvetoforning qaysi chirog'i yonganda piyodalar yo'ldan o'tishi mumkin?\n-> To'g'ri yechim: Yashil chiroq yonganda\nIzoh: Qizil — to'xta, Sariq — tayyorlan, Yashil — yo'ldan xavfsiz o't.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Boshlang'ich Maktabga Tayyorgarlik Darsliklari (Alifbe, Sanash, Mantiq, Atrof-olam) Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nKuz faslining qaysi oyida maktablarda ilk qo'ng'iroq chalinadi va yangi o'quv yili boshlanadi?\n-> Standartga muvofiq yechim: Sentabr oyida (1-sentabr / Bilimlar kuni)\nIzoh: Sentabr oyi maktab o'quvchilari uchun yangi dars yili boshlanish davridir.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ],
  "telecom-networks": [
    {
      "badge": "1-MODUL • FUNDAMENTAL NAZARIYA",
      "title": "Telekommunikatsiya, IP Manzillash, Switch/Router/SFP/CCTV/Serverlar Asosiy Qonuniyatlari va Tushunchalari",
      "body": "Telekommunikatsiya, IP Manzillash, Switch/Router/SFP/CCTV/Serverlar fani bo'yicha nazariy asoslar: Barcha telekommunikatsiya qurilmalari, IP tarmoqlar, portlar, protokollar, OSI modeli va ulanish sxemalari bo'yicha nazariy-amaliy testlar.. Mazkur soha zamonaviy ta'lim, ilmiy izlanishlar va amaliy kasbiy ko'nikmalarning poydevori hisoblanadi.",
      "code": "// Asosiy nazariy qoida va tamoyil:\nOSI etalon modelining 1, 2 va 3-pog'onalari (pastdan yuqoriga) qaysi qatorda to'g'ri ko'rsatilgan?\n-> To'g'ri javob: L1: Fizik (Physical), L2: Kanal (Data Link), L3: Tarmoq (Network)\nIzoh: OSI modelida L1 — bit/kabel/SFP, L2 — Frame/MAC/VLAN (Switch), L3 — Paket/IP (Router/L3 Switch).",
      "practice": "Amaliy topshiriq: Telekommunikatsiya, IP Manzillash, Switch/Router/SFP/CCTV/Serverlar bo'yicha asosiy atamalar va ularning ma'nolarini konspekt qilib chiqing."
    },
    {
      "badge": "2-MODUL • AMALIY TAHLIL VA QO'LLANISH",
      "title": "Telekommunikatsiya, IP Manzillash, Switch/Router/SFP/CCTV/Serverlar Amaliyotda Masalalar va Ko'nikmalar",
      "body": "Nazariyani amaliyotga tatbiq etish usullari va ko'p uchraydigan holatlar tahlili. Har bir vazifada tizimli yondashuv va aniqlik talab etiladi.",
      "code": "// Amaliy vazifa namunasi:\nL2 Switch va L3 Switch orasidagi eng asosiy arxitekturaviy farq nimada?\n-> To'g'ri yechim: L2 Switch MAC-manzillar jadvali bo'yicha kommutatsiya qiladi, L3 Switch esa qo'shimcha ravishda IP paketlarni apparat (ASIC) darajasida VLANlararo marshrutlaydi\nIzoh: L3 Switch ichida ASIC mikrosxemasi orqali Inter-VLAN Routing va OSPF kabi L3 funksiyalar ishlaydi.",
      "practice": "Amaliy topshiriq: Berilgan namunaviy masalani mustaqil yechib, xulosa qiling."
    },
    {
      "badge": "3-MODUL • ILG'OR TAJRIBA VA LABORATORIYA",
      "title": "Telekommunikatsiya, IP Manzillash, Switch/Router/SFP/CCTV/Serverlar Bo'yicha Ekspert Darajasi va Xalqaro Standartlar",
      "body": "Chuqurlashtirilgan tahlil, xalqaro testlar (sertifikatlar) va kasbiy amaliyotda uchraydigan murakkab holatlar hamda ularni bartaraf etish usullari.",
      "code": "// Murakkab vaziyat tahlili:\nIP kameralar, IP telefonlar va Wi-Fi nuqtalarni bitta UTP Cat5e/Cat6 kabeli orqali ham tarmoq, ham 48V elektr quvvati bilan ta'minlovchi standart qaysi?\n-> Standartga muvofiq yechim: IEEE 802.3af (PoE 15.4W) va IEEE 802.3at (PoE+ 30W)\nIzoh: Power over Ethernet (802.3af/at/bt) alohida elektr kabeli tortmasdan qurilmani ishga tushiradi.",
      "practice": "Amaliy topshiriq: Sohadagi eng muhim 3 ta muammoli vaziyatni va ularning yechim modellarini yozib chiqing."
    }
  ]
};

const DISTINCT_30_QUESTIONS_BY_SUBJECT = {
  "html5": [
    {
      "c": "h1",
      "q": "HTML5 hujjatining standart rejimda (Standards Mode) ishlashini bildiruvchi eng birinchi qator qaysi?",
      "a": "<!DOCTYPE html>",
      "w": [
        "<html version='5.0'>",
        "<!DOCTYPE HTML PUBLIC>",
        "<meta charset='html5'>"
      ],
      "e": "<!DOCTYPE html> deklaratsiyasi brauzerga hujjat HTML5 standartida ekanini bildiradi."
    },
    {
      "c": "h2",
      "q": "Sahifaning faqat o'ziga xos asosiy (takrorlanmaydigan) kontentini o'rab turuvchi semantik HTML5 tegi qaysi?",
      "a": "<main>",
      "w": [
        "<header>",
        "<aside>",
        "<nav>"
      ],
      "e": "<main> tegi sahifada faqat bir marta ishlatiladi va asosiy mazmunni ifodalaydi."
    },
    {
      "c": "h3",
      "q": "<img> tegida rasm yuklanmay qolganda yoki ko'zi ojizlar uchun Screen Reader o'qiganda qaysi atribut matni ko'rsatiladi?",
      "a": "alt",
      "w": [
        "title",
        "srcset",
        "figcaption"
      ],
      "e": "alt (alternative text) atributi accessibility va SEO uchun majburiy atributdir."
    },
    {
      "c": "h4",
      "q": "<a> giperhavolasini yangi brauzer oynasida (tabda) xavfsiz ochish uchun qaysi atributlar juftligi ishlatiladi?",
      "a": "target=\"_blank\" rel=\"noopener noreferrer\"",
      "w": [
        "target=\"_new\" rel=\"external\"",
        "href=\"_blank\" open=\"tab\"",
        "window=\"new\" target=\"_self\""
      ],
      "e": "target='_blank' yangi oynada ochadi, rel='noopener noreferrer' esa window.opener xavfsizlik zaifligini yopadi."
    },
    {
      "c": "h5",
      "q": "Pikselga asoslangan 2D/3D grafikalarni JavaScript yordamida dinamik chizish uchun qaysi HTML5 tegi qo'llaniladi?",
      "a": "<canvas>",
      "w": [
        "<figure>",
        "<picture>",
        "<embed>"
      ],
      "e": "<canvas> elementi JavaScript getContext('2d' yoki 'webgl') orqali rastrli grafikani chizadi."
    },
    {
      "c": "h6",
      "q": "HTML5 formasida foydalanuvchi maydonni to'ldirmasdan yuborishini (Submit) bloklovchi atribut qaysi?",
      "a": "required",
      "w": [
        "mandatory",
        "validate",
        "checked"
      ],
      "e": "required atributi forma maydoni bo'sh qoldirilishiga yo'l qo'ymaydi."
    },
    {
      "c": "h7",
      "q": "Saytning mobil telefon va planshetlarda ekran o'lchamiga moslashuvchan (Responsive) ko'rinishini qaysi meta teg ta'minlaydi?",
      "a": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
      "w": [
        "<meta name=\"mobile\" content=\"responsive\">",
        "<meta http-equiv=\"screen\" content=\"auto\">",
        "<link rel=\"responsive\" href=\"mobile.css\">"
      ],
      "e": "viewport meta tegi mobil brauzerlarda sahifa masshtabini qurilma kengligiga tenglashtiradi."
    },
    {
      "c": "h8",
      "q": "<input> maydoniga avto-to'ldirish (autocomplete) variantlari ro'yxatini bog'lash uchun qaysi HTML5 tegi ishlatiladi?",
      "a": "<datalist>",
      "w": [
        "<optgroup>",
        "<fieldset>",
        "<output>"
      ],
      "e": "<datalist> tegi <input list='...'> bilan bog'lanib, qidiruv takliflarini chiqaradi."
    },
    {
      "c": "h9",
      "q": "<script> tegini HTML tahlili (parsing) tugagandan so'ng, DOMContentLoaded hodisasidan oldin tartib bilan bajarish atributi qaysi?",
      "a": "defer",
      "w": [
        "async",
        "preload",
        "lazy"
      ],
      "e": "defer atributi skriptni fonda yuklab, DOM to'liq qurilgach ketma-ketlikni buzmay ishga tushiradi."
    },
    {
      "c": "h10",
      "q": "HTML jadvalida ustun sarlavhalari qatorini mantiqiy guruhlovchi teg qaysi?",
      "a": "<thead>",
      "w": [
        "<tbody>",
        "<tfoot>",
        "<caption>"
      ],
      "e": "<thead> jadvalning bosh qismini (<th> hujayralarini) guruhlaydi."
    },
    {
      "c": "h11",
      "q": "Ekran o'lchamiga va WebP/AVIF formatlariga qarab turli rasm manbalarini tanlab yuklash imkonini beruvchi HTML5 konteyner tegi qaysi?",
      "a": "<picture> (ichida <source> va <img> bilan)",
      "w": [
        "<gallery>",
        "<frameset>",
        "<object>"
      ],
      "e": "<picture> tegi media shartlari va rasm formatlariga ko'ra eng mos rasmni yuklaydi."
    },
    {
      "c": "h12",
      "q": "Sahifaning pastki qismidagi rasmlarni foydalanuvchi o'sha joyga yaqinlashgandagina yuklash (Lazy Loading) uchun <img> ga qaysi atribut beriladi?",
      "a": "loading=\"lazy\"",
      "w": [
        "defer=\"true\"",
        "fetch=\"onscroll\"",
        "async=\"image\""
      ],
      "e": "loading='lazy' atributi dastlabki sahifa yuklanishini tezlashtiradi va trafikni tejaydi."
    },
    {
      "c": "h13",
      "q": "JavaScript ishlatmasdan bosilganda ochilib-yopiladigan (akkordeon / spoiler) vidjet yaratuvchi HTML5 teglar juftligi qaysi?",
      "a": "<details> va <summary>",
      "w": [
        "<dialog> va <menu>",
        "<fieldset> va <legend>",
        "<figure> va <figcaption>"
      ],
      "e": "<details> ichida <summary> sarlavha vazifasini bajaradi va bosilganda kontentni ochib-yopadi."
    },
    {
      "c": "h14",
      "q": "Forma ichidagi o'zaro bog'liq maydonlarni bitta ramkaga guruhlash va unga sarlavha berish uchun qaysi teglar ishlatiladi?",
      "a": "<fieldset> va <legend>",
      "w": [
        "<section> va <header>",
        "<optgroup> va <option>",
        "<formgroup> va <label>"
      ],
      "e": "<fieldset> forma qismini guruhlaydi, <legend> esa unga nom beradi."
    },
    {
      "c": "h15",
      "q": "Foydalanuvchi ixtiyoriy matnni to'g'ridan-to'g'ri brauzerda tahrirlashi mumkin bo'lishi uchun HTML elementga qaysi global atribut beriladi?",
      "a": "contenteditable=\"true\"",
      "w": [
        "editable=\"yes\"",
        "writable=\"true\"",
        "inputmode=\"text\""
      ],
      "e": "contenteditable='true' atributi har qanday div yoki p elementini boy matn muharririga aylantiradi."
    },
    {
      "c": "h16",
      "q": "HTML elementida maxsus foydalanuvchi ma'lumotlarini saqlash va JS-da element.dataset orqali o'qish uchun atribut qanday boshlanishi shart?",
      "a": "data-* (masalan, data-user-id=\"42\")",
      "w": [
        "meta-*",
        "prop-*",
        "var-*"
      ],
      "e": "data-* atributlari standart HTML5 xususiy ma'lumot atributlari bo'lib, DOM dataset obyektida saqlanadi."
    },
    {
      "c": "h17",
      "q": "Vazifaning bajarilish darajasini (masalan, fayl yuklanishi 75%) vizual ko'rsatuvchi maxsus HTML5 tegi qaysi?",
      "a": "<progress value=\"75\" max=\"100\">",
      "w": [
        "<range value=\"75\">",
        "<status percent=\"75\">",
        "<gauge val=\"75\">"
      ],
      "e": "<progress> tegi jarayonning tugallanish foizini ifodalaydi."
    },
    {
      "c": "h18",
      "q": "HTML jadvalida bitta katakchani gorizontaliga 3 ta ustun o'rniga birlashtirish uchun qaysi atribut yoziladi?",
      "a": "colspan=\"3\"",
      "w": [
        "rowspan=\"3\"",
        "merge-cols=\"3\"",
        "span=\"3\""
      ],
      "e": "colspan ustunlarni gorizontal birlashtiradi, rowspan esa qatorlarni vertikal birlashtiradi."
    },
    {
      "c": "h19",
      "q": "Qidiruv natijalarida yoki matn ichida muhim kalit so'zni sariq fon bilan ajratib ko'rsatuvchi semantik HTML5 tegi qaysi?",
      "a": "<mark>",
      "w": [
        "<highlight>",
        "<u>",
        "<cite>"
      ],
      "e": "<mark> tegi foydalanuvchi e'tiborini tortish kerak bo'lgan belgilangan matn qismini ifodalaydi."
    },
    {
      "c": "h20",
      "q": "Sana va vaqtni ham inson o'qiy oladigan, ham qidiruv tizimlari (mashina) tushunadigan ISO-8601 formatda belgilovchi teg va atribut qaysi?",
      "a": "<time datetime=\"2026-11-09T18:00\">",
      "w": [
        "<date iso=\"2026-11-09\">",
        "<clock time=\"18:00\">",
        "<span calendar=\"2026\">"
      ],
      "e": "<time datetime='...'> tegi sanalarni semantik jihatdan aniq belgilash uchun xizmat qiladi."
    },
    {
      "c": "h21",
      "q": "<video> tegida foydalanuvchi play tugmasini bosmasdan oldin ko'rinib turadigan muqova (oblojka) rasmini belgilovchi atribut qaysi?",
      "a": "poster=\"cover.jpg\"",
      "w": [
        "thumbnail=\"cover.jpg\"",
        "preview=\"cover.jpg\"",
        "splash=\"cover.jpg\""
      ],
      "e": "poster atributi video yuklanguncha yoki boshlanguncha ko'rsatiladigan rasm manzilini belgilaydi."
    },
    {
      "c": "h22",
      "q": "Boshqa sayt sahifasini joriy sahifa ichiga xavfsiz cheklovlar (qumdon) bilan joylashtirish uchun <iframe> ga qaysi atribut qo'shiladi?",
      "a": "sandbox",
      "w": [
        "secure",
        "firewall",
        "isolated"
      ],
      "e": "sandbox atributi iframe ichidagi skriptlar, formalar va popuplarni qat'iy cheklaydi."
    },
    {
      "c": "h23",
      "q": "Kimyoviy formulalardagi pastki indeks (H₂O) va matematik darajalardagi yuqori indeks (x²) qaysi HTML teglari bilan yoziladi?",
      "a": "<sub> (pastki indeks) va <sup> (yuqori indeks)",
      "w": [
        "<low> va <high>",
        "<down> va <up>",
        "<small> va <big>"
      ],
      "e": "<sub> (subscript) pastki indeksni, <sup> (superscript) yuqori daraja indeksini hosil qiladi."
    },
    {
      "c": "h24",
      "q": "Rasm, diagramma yoki kod blokini uning izohli sarlavhasi bilan bitta semantik birlikka birlashtiruvchi teglar qaysi?",
      "a": "<figure> va <figcaption>",
      "w": [
        "<picture> va <caption>",
        "<box> va <title>",
        "<media> va <label>"
      ],
      "e": "<figure> media elementni o'raydi, <figcaption> esa unga izoh beradi."
    },
    {
      "c": "h25",
      "q": "Saytda asosiy shrift yoki muhim rasm faylini brauzer eng birinchi navbatda yuklab olishini buyuruvchi <link> qiymati qaysi?",
      "a": "rel=\"preload\" as=\"font\"",
      "w": [
        "rel=\"prefetch-last\"",
        "rel=\"lazy\"",
        "rel=\"defer\""
      ],
      "e": "rel='preload' joriy sahifa uchun zarur bo'lgan resursni yuqori ustuvorlik bilan erta yuklaydi."
    },
    {
      "c": "h26",
      "q": "Sahifa yuklanguncha ekranda ko'rinmaydigan, ammo JavaScript orqali klonlab ko'paytirish uchun saqlanadigan HTML shablon tegi qaysi?",
      "a": "<template>",
      "w": [
        "<blueprint>",
        "<Ghost>",
        "<prototype>"
      ],
      "e": "<template> ichidagi DOM elementlar sahifa yuklanganda render qilinmaydi, faqat JS orqali faollashtiriladi."
    },
    {
      "c": "h27",
      "q": "Modal oynalarni native (brauzerning o'zida) showModal() metodi va ::backdrop psevdo-elementi bilan ochuvchi HTML5 tegi qaysi?",
      "a": "<dialog>",
      "w": [
        "<popup>",
        "<modal>",
        "<overlay>"
      ],
      "e": "<dialog> tegi zamonaviy HTML5 da tayyor modal va dialog oynalar yaratish standartidir."
    },
    {
      "c": "h28",
      "q": "Foydalanuvchiga fayl yuklash (<input type='file'>) maydonida faqat PDF va PNG fayllarni tanlashga ruxsat beruvchi atribut qaysi?",
      "a": "accept=\".pdf, .png, image/png\"",
      "w": [
        "allow=\"pdf,png\"",
        "filter=\"*.pdf\"",
        "format=\"pdf|png\""
      ],
      "e": "accept atributi fayl tanlash oynasida ruxsat etilgan MIME turlari yoki kengaytmalarni cheklaydi."
    },
    {
      "c": "h29",
      "q": "Qisqartma so'zlarning (masalan, JSST, BMT, HTML) ustiga sichqoncha olib borilganda to'liq yoyilmasini ko'rsatuvchi semantik teg qaysi?",
      "a": "<abbr title=\"Jahon Sog'liqni Saqlash Tashkiloti\">JSST</abbr>",
      "w": [
        "<short info=\"...\">",
        "<acronym text=\"...\">",
        "<dfn value=\"...\">"
      ],
      "e": "<abbr> tegi title atributi bilan birga qisqartmaning to'liq ma'nosini bildiradi."
    },
    {
      "c": "h30",
      "q": "Ko'zi ojiz foydalanuvchilar uchun sahifada JavaScript orqali dinamik yangilangan xabarni Screen Reader ovoz chiqarib o'qishini qaysi ARIA atributi ta'minlaydi?",
      "a": "aria-live=\"polite\" (yoki \"assertive\")",
      "w": [
        "aria-voice=\"on\"",
        "role=\"speaker\"",
        "data-speak=\"true\""
      ],
      "e": "aria-live atributi DOM o'zgarganda yordamchi texnologiyalarga yangi matnni o'qib eshittirishni buyuradi."
    },
    {
      "c": "h31",
      "q": "Ma'lum bir oraliqdagi skalyar o'lchovni (masalan, diskdagi band joy yoki batareya quvvati) darajalar bilan ko'rsatuvchi HTML5 tegi qaysi?",
      "a": "<meter min=\"0\" max=\"100\" low=\"25\" high=\"85\" value=\"60\">",
      "w": [
        "<progress>",
        "<slider>",
        "<scale>"
      ],
      "e": "<meter> ma'lum chegaradagi o'lchovni (low, high, optimum) ko'rsatish uchun ishlatiladi."
    },
    {
      "c": "h32",
      "q": "Mobil klaviaturada faqat raqamli klaviatura chiqishini (lekin input type='text' qolishini) ta'minlovchi zamonaviy HTML atributi qaysi?",
      "a": "inputmode=\"numeric\"",
      "w": [
        "keyboard=\"numbers\"",
        "numpad=\"true\"",
        "type=\"keypad\""
      ],
      "e": "inputmode='numeric' smartfonlarda qulay raqamli klaviaturani ochadi."
    }
  ],
  "css3": [
    {
      "c": "c1",
      "q": "Elementning padding va border o'lchamlarini belgilangan width va height ichiga kiritish uchun qaysi CSS xossasi yoziladi?",
      "a": "box-sizing: border-box;",
      "w": [
        "box-sizing: content-box;",
        "display: inline-block;",
        "overflow: hidden;"
      ],
      "e": "box-sizing: border-box elementning umumiy kengligi padding hisobiga kengayib ketmasligini ta'minlaydi."
    },
    {
      "c": "c2",
      "q": "Flexbox konteynerida ichki elementni ham gorizontal, ham vertikal markazga joylashtirish kombinatsiyasi qaysi?",
      "a": "display: flex; justify-content: center; align-items: center;",
      "w": [
        "display: flex; text-align: center; vertical-align: middle;",
        "display: block; margin: auto; float: center;",
        "position: relative; top: 50%; left: 50%;"
      ],
      "e": "justify-content asosiy o'q bo'yicha, align-items esa kesishuvchi o'q bo'yicha markazlaydi."
    },
    {
      "c": "c3",
      "q": "CSS selektorlarining ustuvorlik (Specificity) darajasi yuqoridan pastga qarab to'g'ri joylashtirilgan qatorni toping:",
      "a": "Inline style > #id > .class > tag (element)",
      "w": [
        ".class > #id > tag > Inline style",
        "#id > Inline style > tag > .class",
        "tag > .class > #id > Inline style"
      ],
      "e": "Inline style (1000), ID (100), Class/Attribute/Pseudo-class (10), Element tegi (1) ballga ega."
    },
    {
      "c": "c4",
      "q": "CSS Grid tizimida bo'sh joyning teng ulushlarini ifodalovchi maxsus o'lchov birligi qaysi?",
      "a": "fr (fraction)",
      "w": [
        "rem",
        "vh",
        "ch"
      ],
      "e": "1fr bo'sh qolgan Grid konteyner maydonining 1 ulushini bildiradi."
    },
    {
      "c": "c5",
      "q": ":root blokida e'lon qilingan --primary-color o'zgaruvchisini CSS xossasida chaqirish sintaksisi qanday?",
      "a": "color: var(--primary-color);",
      "w": [
        "color: $primary-color;",
        "color: env(--primary-color);",
        "color: prop(primary-color);"
      ],
      "e": "CSS Custom Properties var(--nomi) funksiyasi orqali chaqiriladi."
    },
    {
      "c": "c6",
      "q": "z-index xossasi ishlashi uchun elementning position qiymati qanday bo'lmasligi kerak?",
      "a": "static",
      "w": [
        "relative",
        "absolute",
        "fixed"
      ],
      "e": "z-index faqat position qiymati static dan farqli yoki flex/grid item bo'lganda ishlaydi."
    },
    {
      "c": "c7",
      "q": "Ekran kengligi 768 pikseldan kichik yoki teng bo'lgan qurilmalar uchun yoziladigan to'g'ri Media Query qaysi?",
      "a": "@media (max-width: 768px) { ... }",
      "w": [
        "@screen (width <= 768px) { ... }",
        "@responsive max-width(768px) { ... }",
        "@viewport (min-device: 768px) { ... }"
      ],
      "e": "@media (max-width: 768px) ekran 768px va undan kichik bo'lganda uslublarni qo'llaydi."
    },
    {
      "c": "c8",
      "q": "Shaffof element orqasidagi fonni xiralashtirib 'Glassmorphism' (oyna effekti) hosil qiluvchi CSS xossasi qaysi?",
      "a": "backdrop-filter: blur(12px);",
      "w": [
        "filter: opacity(12px);",
        "background-blur: 12px;",
        "box-shadow: blur(12px);"
      ],
      "e": "backdrop-filter element ortidagi qatlamga grafik filtr (blur) qo'llaydi."
    },
    {
      "c": "c9",
      "q": "'rem' va 'em' o'lchov birliklari orasidagi asosiy farq nimada?",
      "a": "rem — ildiz (<html>) shrift o'lchamiga nisbatan, em — joriy yoki ota element shrift o'lchamiga nisbatan hisoblanadi",
      "w": [
        "rem faqat margin uchun, em faqat font-size uchun ishlatiladi",
        "Ikkalasi ham ekran pikseliga teng",
        "em faqat mobil qurilmalarda ishlaydi"
      ],
      "e": "root em (rem) doim <html> font-size qiymatiga tayanganligi sababli global masshtablash uchun juda qulay."
    },
    {
      "c": "c10",
      "q": "Element sahifani pastga aylantirganda (scroll) ma'lum bir chegaragacha oddiy oqimda yurib, so'ngra ekran tepasiga yopishib qolishi uchun qaysi position beriladi?",
      "a": "position: sticky; top: 0;",
      "w": [
        "position: fixed-relative;",
        "position: float;",
        "position: static; top: 0;"
      ],
      "e": "position: sticky elementni scroll vaqtida ko'rsatilgan top/bottom chegarada ushlab qoladi."
    },
    {
      "c": "c11",
      "q": "Shrift o'lchamini minimal 1rem, ekran kengligiga mos 2.5vw va maksimal 2.2rem oralig'ida silliq o'zgaruvchi qiladigan CSS funksiyasi qaysi?",
      "a": "font-size: clamp(1rem, 2.5vw, 2.2rem);",
      "w": [
        "font-size: range(1rem, 2.5vw, 2.2rem);",
        "font-size: fluid(1rem, 2.2rem);",
        "font-size: minmax(1rem, 2.2rem);"
      ],
      "e": "clamp(min, ideal, max) funksiyasi media querylarsiz Fluid Typography yaratadi."
    },
    {
      "c": "c12",
      "q": "Rasm yoki videoni o'z konteyneri ichiga nisbatlarini (proporsiyasini) buzmasdan to'liq to'ldirib joylashtiruvchi xossa qaysi?",
      "a": "object-fit: cover;",
      "w": [
        "background-size: stretch;",
        "image-fit: fill-box;",
        "aspect-fit: crop;"
      ],
      "e": "object-fit: cover <img> va <video> elementlarini proporsiyani saqlagan holda konteynerga moslaydi."
    },
    {
      "c": "c13",
      "q": "Elementni sichqoncha bosishlariga (click/hover) umuman javob bermaydigan va o'zidan orqadagi elementga bosishni o'tkazib yuboradigan xossa qaysi?",
      "a": "pointer-events: none;",
      "w": [
        "cursor: default;",
        "user-select: none;",
        "touch-action: auto;"
      ],
      "e": "pointer-events: none elementni kursor va sensorli bosishlar uchun shaffof qiladi."
    },
    {
      "c": "c14",
      "q": "Bitta qatorga sig'magan uzun matn oxiriga avtomatik uch nuqta (...) qo'yish uchun qaysi 3 ta CSS xossasi birga yoziladi?",
      "a": "white-space: nowrap; overflow: hidden; text-overflow: ellipsis;",
      "w": [
        "word-break: ellipsis; display: flex;",
        "text-wrap: dots; overflow: clip;",
        "line-clamp: 1; float: left;"
      ],
      "e": "Matnni bir qatorda ushlash (nowrap), ortiqchasini yashirish (overflow: hidden) va '...' qo'yish (text-overflow: ellipsis) birgalikda ishlaydi."
    },
    {
      "c": "c15",
      "q": "Video yoki karta konteynerining kengligi va balandligi nisbatini doimo 16:9 saqlash uchun qaysi zamonaviy CSS xossasi ishlatiladi?",
      "a": "aspect-ratio: 16 / 9;",
      "w": [
        "ratio: 16x9;",
        "proportion: 1.77;",
        "size-ratio: 16-9;"
      ],
      "e": "aspect-ratio xossasi elementning kenglik va balandlik proporsiyasini avtomatik ushlab turadi."
    },
    {
      "c": "c16",
      "q": "Ulashgan ikkita vertikal blokning margin-bottom: 30px va margin-top: 20px qiymatlari yig'indisi 50px emas, balki 30px bo'lib qolishi hodisasi nima deyiladi?",
      "a": "Margin Collapsing (Chekinishlarning ustma-ust tushishi)",
      "w": [
        "Box Shrinkage",
        "Padding Overflow",
        "Flex Compression"
      ],
      "e": "Blok elementlarning qo'shni vertikal marginlari birlashib, ulardan kattasi olinadi (Margin Collapse)."
    },
    {
      "c": "c17",
      "q": "Qaysi CSS psevdo-sinfi (pseudo-class) ichida <input:checked> mavjud bo'lgan ota <label> yoki <div class='card'> elementini tanlash imkonini beradi?",
      "a": ":has(input:checked)",
      "w": [
        ":contains(input:checked)",
        ":parent(input:checked)",
        ":within(input:checked)"
      ],
      "e": ":has() — zamonaviy CSS-dagi 'ota selektor' (relational pseudo-class) bo'lib, ichki holatga qarab ota elementni stilizatsiya qiladi."
    },
    {
      "c": "c18",
      "q": "GPU (videokarta) yordamida 60 FPS silliq animatsiya olish uchun Layout/Reflow chaqirmaydigan qaysi ikkita xossani animatsiya qilish tavsiya etiladi?",
      "a": "transform va opacity",
      "w": [
        "width va height",
        "top va left",
        "margin va padding"
      ],
      "e": "transform va opacity faqat Compositor oqimida GPU tomonidan qayta ishlanadi."
    },
    {
      "c": "c19",
      "q": "Jadval qatorlarini zebra uslubida (faqat juft qatorlarni) boshqa rangga bo'yash uchun qaysi psevdo-sinf ishlatiladi?",
      "a": "tr:nth-child(even) (yoki 2n)",
      "w": [
        "tr:every-second",
        "tr:even-row",
        "tr::nth(2)"
      ],
      "e": ":nth-child(even) yoki :nth-child(2n) barcha juft tartibdagi elementlarni tanlaydi."
    },
    {
      "c": "c20",
      "q": "Matn harflarining o'zini chiroyli gradient rangga bo'yash uchun background: linear-gradient(...) bilan birga qaysi xossalar ishlatiladi?",
      "a": "-webkit-background-clip: text; color: transparent;",
      "w": [
        "text-gradient: linear;",
        "font-color: gradient;",
        "clip-path: text-box;"
      ],
      "e": "background-clip: text orqa fon gradientini faqat harflar shakli bo'yicha qirqib ko'rsatadi."
    },
    {
      "c": "c21",
      "q": "Foydalanuvchi operatsion tizimida Tungi rejim (Dark Mode) yoqilganini CSS-da avtomatik aniqlovchi media so'rov qaysi?",
      "a": "@media (prefers-color-scheme: dark)",
      "w": [
        "@media (theme-mode: night)",
        "@media (os-color: black)",
        "@media (screen-light: low)"
      ],
      "e": "prefers-color-scheme: dark foydalanuvchi tizimidagi tungi mavzu sozlamasini aniqlaydi."
    },
    {
      "c": "c22",
      "q": "Sahifadagi ichki #bo'lim havolalariga bosilganda sakrab emas, silliq (ravon) siljib borishni qaysi CSS xossasi ta'minlaydi?",
      "a": "html { scroll-behavior: smooth; }",
      "w": [
        "body { transition: scroll 1s; }",
        "window { smooth-scroll: true; }",
        "a { scroll-mode: ease; }"
      ],
      "e": "scroll-behavior: smooth sahifa ichidagi navigatsiya siljishini ravon qiladi."
    },
    {
      "c": "c23",
      "q": "Flexbox-da elementlar bitta qatorga sig'maganda keyingi qatorga tushishini ta'minlovchi xossa qaysi?",
      "a": "flex-wrap: wrap;",
      "w": [
        "flex-flow: break;",
        "flex-direction: multiline;",
        "align-content: break-word;"
      ],
      "e": "Standart holatda flex-wrap: nowrap bo'ladi; wrap berilsa elementlar yangi qatorga tushadi."
    },
    {
      "c": "c24",
      "q": "::before va ::after psevdo-elementlari ekranda ko'rinishi uchun ularning qaysi xossasi majburiy ravishda yozilishi shart?",
      "a": "content: \"\"; (hatto bo'sh satr bo'lsa ham)",
      "w": [
        "display: visible;",
        "pseudo: active;",
        "render: true;"
      ],
      "e": "content xossasi ko'rsatilmasa, ::before va ::after DOM-da umuman chizilmaydi."
    },
    {
      "c": "c25",
      "q": "Kenglikni hisoblashda foiz va pikselni birlashtirib (masalan, 100% dan 80 pikselni ayirib) yozish imkonini beruvchi CSS funksiyasi qaysi?",
      "a": "width: calc(100% - 80px);",
      "w": [
        "width: math(100% - 80px);",
        "width: sub(100%, 80px);",
        "width: eval('100% - 80px');"
      ],
      "e": "calc() turli o'lchov birliklari ustida arifmetik amallar bajaradi."
    },
    {
      "c": "c26",
      "q": "Shaffof PNG yoki SVG logotipning to'rtburchak qutisiga emas, aynan rasmning shakl konturiga soya beruvchi filtr qaysi?",
      "a": "filter: drop-shadow(0 8px 16px rgba(0,0,0,0.5));",
      "w": [
        "box-shadow: 0 8px 16px #000;",
        "text-shadow: 0 8px 16px #000;",
        "outline-shadow: 8px;"
      ],
      "e": "box-shadow to'rtburchak ramkaga soya bersa, filter: drop-shadow() shaffof rasmning haqiqiy konturiga soya tushiradi."
    },
    {
      "c": "c27",
      "q": "Checkbox va radio tugmalarining asosiy rangini bir qator kod bilan sayt rangiga moslashtiruvchi zamonaviy CSS xossasi qaysi?",
      "a": "accent-color: #10b981;",
      "w": [
        "control-color: #10b981;",
        "input-fill: #10b981;",
        "check-tint: #10b981;"
      ],
      "e": "accent-color xossasi native checkbox, radio va range elementlarining urg'u rangini o'zgartiradi."
    },
    {
      "c": "c28",
      "q": "CSS Grid-da elementni 1-ustundan boshlab oxirgi ustungacha (butun qator bo'ylab) cho'zish uchun qaysi qoida yoziladi?",
      "a": "grid-column: 1 / -1;",
      "w": [
        "grid-row: 0 / 100%;",
        "column-span: full;",
        "flex: 100%;"
      ],
      "e": "grid-column: 1 / -1 birinchi chiziqdan eng oxirgi (-1) chiziqqacha barcha ustunlarni egallaydi."
    },
    {
      "c": "c29",
      "q": "Mobil brauzerlarda manzil satri (address bar) chiqib-yopilganda 100vh muammosini hal qiluvchi dinamik viewport balandlik birligi qaysi?",
      "a": "100dvh (dynamic viewport height)",
      "w": [
        "100pxh",
        "100rem",
        "100ch"
      ],
      "e": "dvh (dynamic viewport height) mobil brauzer paneli holatiga qarab real balandlikka moslashadi."
    },
    {
      "c": "c30",
      "q": "Foydalanuvchi tugma yoki bannerdagi matnni sichqoncha bilan ko'k qilib belgilab (select) olmasligi uchun qaysi xossa beriladi?",
      "a": "user-select: none;",
      "w": [
        "text-Copy: false;",
        "selection: disabled;",
        "pointer-select: off;"
      ],
      "e": "user-select: none UI tugmalarida matn tasodifan belgilanib ketishining oldini oladi."
    },
    {
      "c": "c31",
      "q": "CSS @keyframes animatsiyasi tugagach, element dastlabki holatiga qaytib ketmasdan oxirgi (100%) kadrda qolishi uchun nima yoziladi?",
      "a": "animation-fill-mode: forwards;",
      "w": [
        "animation-state: paused;",
        "animation-loop: stop;",
        "animation-end: stay;"
      ],
      "e": "forwards qiymati animatsiya yakunidagi CSS xossalarini saqlab qoladi."
    },
    {
      "c": "c32",
      "q": "Elementni ekrandan yashirib, lekin uning sahifadagi egallagan joyini bo'sh qoldiruvchi xossa qaysi?",
      "a": "visibility: hidden; (display: none esa joyni ham olib tashlaydi)",
      "w": [
        "display: none;",
        "position: absolute;",
        "z-index: 0;"
      ],
      "e": "visibility: hidden elementni ko'rinmas qiladi, ammo Layout-dagi o'lchamini saqlab qoladi."
    }
  ],
  "javascript": [
    {
      "c": "js1",
      "q": "JavaScript-da ikki qiymatni ham qiymati, ham ma'lumot tipi (type conversion qilmasdan) bo'yicha qat'iy solishtiruvchi operator qaysi?",
      "a": "===",
      "w": [
        "==",
        "=",
        "=>"
      ],
      "e": "=== (Strict Equality) tipni o'zgartirmasdan solishtiradi (masalan, 5 === '5' -> false)."
    },
    {
      "c": "js2",
      "q": "Qaysi kalit so'z bilan e'lon qilingan o'zgaruvchi blok ko'rinish doirasiga (Block Scope) ega va qayta qiymat tayinlab bo'lmaydi?",
      "a": "const",
      "w": [
        "var",
        "let",
        "static"
      ],
      "e": "var blok ichida amal qiladi va uning bog'lamasini qayta tayinlab bo'lmaydi."
    },
    {
      "c": "js3",
      "q": "Massivning har bir elementi ustida amal bajarib, asl massiv uzunligiga teng YANGI massiv qaytaruvchi metod qaysi?",
      "a": "Array.prototype.map()",
      "w": [
        "Array.prototype.forEach()",
        "Array.prototype.pop()",
        "Array.prototype.some()"
      ],
      "e": ".map() har bir elementni transformatsiya qilib yangi massiv qaytaradi."
    },
    {
      "c": "js4",
      "q": "Bir nechta Promise-larni parallel ishga tushirib, ularning barchasi muvaffaqiyatli tugaganda natijalar massivini qaytaruvchi metod qaysi?",
      "a": "Promise.all()",
      "w": [
        "Promise.race()",
        "Promise.any()",
        "Promise.reject()"
      ],
      "e": "Promise.all([p1, p2]) barcha promiselar bajarilganda natijalarni massivda qaytaradi."
    },
    {
      "c": "js5",
      "q": "JavaScript obyektini localStorage xotirasiga saqlashdan oldin uni matn (JSON satr) ko'rinishiga o'tkazuvchi metod qaysi?",
      "a": "JSON.stringify(obj)",
      "w": [
        "JSON.parse(obj)",
        "Object.toString(obj)",
        "Storage.encode(obj)"
      ],
      "e": "localStorage faqat string saqlaydi, shu sababli JSON.stringify() ishlatiladi."
    },
    {
      "c": "js6",
      "q": "Forma yuborilganda (submit) sahifaning avtomatik yangilanib ketishini to'xtatuvchi metod qaysi?",
      "a": "event.preventDefault()",
      "w": [
        "event.stopPropagation()",
        "window.stop()",
        "form.cancel()"
      ],
      "e": "event.preventDefault() brauzerning standart hodisa harakatini bekor qiladi."
    },
    {
      "c": "js7",
      "q": "Ichki funksiyaning tashqi funksiya o'zgaruvchilarini tashqi funksiya tugagandan keyin ham xotirada saqlab qolish xususiyati nima deyiladi?",
      "a": "Closure (Yopilish)",
      "w": [
        "Hoisting",
        "Prototypal Inheritance",
        "Currying"
      ],
      "e": "Closure leksik muhitni (Lexical Environment) xotirada saqlab qoladi."
    },
    {
      "c": "js8",
      "q": "Faqat chap tomondagi qiymat null yoki undefined bo'lgandagina o'ng tomondagi standart qiymatni qaytaruvchi (0 va '' ni saqlab qoluvchi) operator qaysi?",
      "a": "?? (Nullish Coalescing Operator)",
      "w": [
        "|| (Logical OR)",
        "&& (Logical AND)",
        "?: (Ternary)"
      ],
      "e": "0 ?? 10 natijasi 0 chiqadi, chunki ?? faqat null va undefined ni almashtiradi."
    },
    {
      "c": "js9",
      "q": "Chuqur joylashgan obyekt xossasiga murojaat qilishda oraliq xossa undefined bo'lsa, TypeError bermasdan undefined qaytaruvchi operator qaysi?",
      "a": "?. (Optional Chaining, masalan user?.address?.city)",
      "w": [
        "!!. (Double Bang)",
        ":: (Bind Operator)",
        "-> (Arrow Pointer)"
      ],
      "e": "Optional chaining (?.) mavjud bo'lmagan obyektdan xossa o'qishda xatolikning oldini oladi."
    },
    {
      "c": "js10",
      "q": "Massiv ichidan takroriy (dublikat) qiymatlarni bir qator kod bilan olib tashlash uchun qaysi ES6 ma'lumot tuzilmasi ishlatiladi?",
      "a": "[...new Set(array)]",
      "w": [
        "new WeakMap(array)",
        "Array.unique(array)",
        "Object.freeze(array)"
      ],
      "e": "Set kolleksiyasi faqat noyob (takrorlanmas) qiymatlarni saqlaydi."
    },
    {
      "c": "js11",
      "q": "Event Loop-da sinxron kod tugagach, setTimeout(..., 0) va Promise.resolve().then(...) dan qaysi biri birinchi bajariladi?",
      "a": "Promise.then() birinchi bajariladi (chunki u Microtask Queue-da joylashadi)",
      "w": [
        "setTimeout(..., 0) birinchi bajariladi",
        "Ikkalasi bir vaqtda parallel bajariladi",
        "Hech qaysisi bajarilmaydi"
      ],
      "e": "Microtask Queue (Promise) har doim keyingi Macrotask (setTimeout) dan oldin to'liq tozalanadi."
    },
    {
      "c": "js12",
      "q": "Massivning barcha elementlarini yagona qiymatga (masalan, jami yig'indiga yoki obyektga) jamlovchi metod qaysi?",
      "a": "array.reduce((acc, item) => acc + item, 0)",
      "w": [
        "array.filter()",
        "array.slice()",
        "array.find()"
      ],
      "e": "reduce() akkumulyator yordamida massivni yagona yakuniy qiymatga keltiradi."
    },
    {
      "c": "js13",
      "q": "typeof null ifodasining natijasi JavaScript-da nima chiqadi?",
      "a": "\"object\" (tilning ilk versiyasidan qolgan tarixiy xususiyat)",
      "w": [
        "\"null\"",
        "\"undefined\"",
        "\"NaN\""
      ],
      "e": "JavaScript-da typeof null === 'object' qaytadi; null ekanini tekshirish uchun val === null ishlatiladi."
    },
    {
      "c": "js14",
      "q": "Oddiy funksiya (function) va Strelkali funksiya (Arrow Function =>) orasidagi 'this' konteksti bo'yicha asosiy farq nima?",
      "a": "Arrow function o'zining shaxsiy 'this'iga ega emas, u tashqi leksik muhitning 'this' qiymatini oladi",
      "w": [
        "Arrow function faqat class konstruktori bo'la oladi",
        "Oddiy funksiyada return ishlatib bo'lmaydi",
        "Arrow function-da parametr berib bo'lmaydi"
      ],
      "e": "Arrow funksiyalar leksik 'this'ni meros oladi va new operatori bilan chaqirilmaydi."
    },
    {
      "c": "js15",
      "q": "Obyektni muzlatib, unga yangi xossa qo'shish, o'chirish va mavjud birinchi qavat xossalarini o'zgartirishni taqiqlovchi metod qaysi?",
      "a": "Object.freeze(obj)",
      "w": [
        "Object.keys(obj)",
        "Object.assign(obj)",
        "Object.values(obj)"
      ],
      "e": "Object.freeze() obyektni o'zgarmas (shallow immutable) holatga o'tkazadi."
    },
    {
      "c": "js16",
      "q": "DOM-da 1000 ta <li> elementiga alohida click hodisasi ulash o'rniga, ota <ul> ga bitta click ulab event.target orqali boshqarish usuli nima deyiladi?",
      "a": "Event Delegation (Hodisalarni delegatsiyalash)",
      "w": [
        "Event Capturing",
        "DOM Polling",
        "Mutation Observing"
      ],
      "e": "Event Bubbling xususiyatiga tayangan Event Delegation xotira sarfini keskin kamaytiradi."
    },
    {
      "c": "js17",
      "q": "Asl massivni o'zgartirmasdan (mutate qilmasdan), uning 1-indeksidan 4-indeksigacha (4 kirmaydi) nusxasini oluvchi metod qaysi?",
      "a": "array.slice(1, 4)",
      "w": [
        "array.splice(1, 4)",
        "array.shift()",
        "array.reverse()"
      ],
      "e": "slice() asl massivga tegmasdan yangi qism-massiv qaytaradi; splice() esa asl massivni kesib o'zgartiradi."
    },
    {
      "c": "js18",
      "q": "Qidiruv maydonida foydalanuvchi harf yozishdan to'xtaganidan 300ms o'tgachgina serverga so'rov yuborish texnikasi nima deyiladi?",
      "a": "Debouncing (Debounce)",
      "w": [
        "Hoisting",
        "Currying",
        "Memoization"
      ],
      "e": "Debounce ketma-ket tez chaqiruvlarni bitta yakuniy chaqiruvga birlashtiradi."
    },
    {
      "c": "js19",
      "q": "Obyektni ichidagi barcha ichki (nested) obyektlar va Date/Map/Set bilan birga chuqur nusxalovchi (Deep Clone) zamonaviy standart funksiya qaysi?",
      "a": "structuredClone(obj)",
      "w": [
        "Object.assign({}, obj)",
        "{ ...obj }",
        "obj.clone()"
      ],
      "e": "structuredClone() global funksiyasi obyektning to'liq chuqur nusxasini yaratadi."
    },
    {
      "c": "js20",
      "q": "let va var o'zgaruvchilari blok boshidan to e'lon qilingan qatorgacha bo'lgan murojaat qilib bo'lmaydigan hudud nima deb ataladi?",
      "a": "TDZ (Temporal Dead Zone — Vaqtinchalik o'lik hudud)",
      "w": [
        "Garbage Zone",
        "Shadow DOM",
        "Strict Zone"
      ],
      "e": "let/var e'lon qilinguncha TDZ-da bo'ladi va ularga erta murojaat ReferenceError beradi."
    },
    {
      "c": "js21",
      "q": "Qiymatning haqiqatan ham NaN (Not-a-Number) ekanligini tip konvertatsiyasisiz aniq tekshiruvchi metod qaysi?",
      "a": "Number.isNaN(val)",
      "w": [
        "val == NaN",
        "val === NaN",
        "typeof val === 'nan'"
      ],
      "e": "NaN === NaN doim false beradi, shu sababli Number.isNaN() ishlatiladi."
    },
    {
      "c": "js22",
      "q": "Brauzerda element ekranga (viewport-ga) kirib kelganini kuzatib, rasm yuklash yoki animatsiya boshlash uchun qaysi Web API ishlatiladi?",
      "a": "IntersectionObserver",
      "w": [
        "ResizeObserver",
        "AudioContext",
        "Geolocation"
      ],
      "e": "IntersectionObserver scroll hodisasini qiynamasdan element ko'rinishini asinxron kuzatadi."
    },
    {
      "c": "js23",
      "q": "Funksiyaning ichida 'yield' kalit so'zi orqali bajarilishni to'xtatib turish va davom ettirish imkonini beruvchi funksiya turi qaysi?",
      "a": "Generator Function (function* gen() { ... })",
      "w": [
        "Constructor Function",
        "IIFE Function",
        "Callback Function"
      ],
      "e": "function* generatorlari iterator qaytaradi va next() chaqirilganda yield nuqtasigacha ishlaydi."
    },
    {
      "c": "js24",
      "q": "Obyektning barcha [kalit, qiymat] juftliklarini ikki o'lchovli massiv ko'rinishida qaytaruvchi metod qaysi?",
      "a": "Object.entries(obj)",
      "w": [
        "Object.keys(obj)",
        "Object.fromEntries(obj)",
        "Object.getPrototypeOf(obj)"
      ],
      "e": "Object.entries({a: 1, b: 2}) -> [['a', 1], ['b', 2]] massivini qaytaradi."
    },
    {
      "c": "js25",
      "q": "fetch() API orqali yuborilgan tarmoq so'rovini foydalanuvchi boshqa bo'limga o'tganda bekor qilish (abort) uchun qaysi obyekt ishlatiladi?",
      "a": "AbortController (va controller.signal)",
      "w": [
        "CancelToken",
        "StopRequest",
        "FetchTerminator"
      ],
      "e": "var ctrl = new AbortController(); fetch(url, { signal: ctrl.signal }); ctrl.abort(); so'rovni to'xtatadi."
    },
    {
      "c": "js26",
      "q": "localStorage va sessionStorage orasidagi ma'lumot saqlash muddati bo'yicha asosiy farq nima?",
      "a": "localStorage brauzer yopilsa ham doimiy saqlanadi; sessionStorage esa joriy oyna (tab) yopilishi bilan o'chib ketadi",
      "w": [
        "sessionStorage serverda saqlanadi",
        "localStorage faqat 4 bayt saqlaydi",
        "Ikkalasi ham har 1 daqiqada o'chadi"
      ],
      "e": "sessionStorage faqat bitta tab sessiyasi davomida yashaydi."
    },
    {
      "c": "js27",
      "q": "Massiv ichida shartga mos keladigan BIRINCHI elementning o'zini (massiv emas!) qaytaruvchi metod qaysi?",
      "a": "array.find(fn)",
      "w": [
        "array.filter(fn)",
        "array.every(fn)",
        "array.includes(fn)"
      ],
      "e": "find() shartni qanoatlantirgan ilk elementni, topilmasa undefined qaytaradi."
    },
    {
      "c": "js28",
      "q": "ES6 Modules tizimida bitta fayldan asosiy eksportni (default export) eksport qilish sintaksisi qanday?",
      "a": "export default MyComponent;",
      "w": [
        "module.exports = MyComponent;",
        "include default MyComponent;",
        "public export MyComponent;"
      ],
      "e": "ES Modules standartida export default va named export (export var ...) ishlatiladi."
    },
    {
      "c": "js29",
      "q": "String ichiga o'zgaruvchi va ifodalarni ${...} ko'rinishida joylashtirish (Template Literals) uchun qanday qo'shtirnoq ishlatiladi?",
      "a": "Backtick (`Salom ${ism}`)",
      "w": [
        "Oddiy qo'shtirnoq (\"Salom ${ism}\")",
        "Bittalik tirnoq ('Salom ${ism}')",
        "Kvadrat qavs ([Salom ${ism}])"
      ],
      "e": "Template literals faqat teskari apostrof (`backtick`) belgisi bilan ishlaydi."
    },
    {
      "c": "js30",
      "q": "Massivning eng oxirgi elementini manfiy indeks yordamida oson o'qish uchun qaysi zamonaviy metod ishlatiladi?",
      "a": "array.at(-1)",
      "w": [
        "array.get(-1)",
        "array.last()",
        "array[-1]"
      ],
      "e": "ES2022 da qo'shilgan .at(-1) metodi array[array.length - 1] o'rniga qisqa yechim beradi."
    },
    {
      "c": "js31",
      "q": "Funksiyani aniq bir obyekt kontekstiga ('this' ga) bog'lab, parametrlarini massiv ko'rinishida berib darhol chaqiruvchi metod qaysi?",
      "a": "fn.apply(contextObj, [arg1, arg2])",
      "w": [
        "fn.bind(contextObj)",
        "fn.call(contextObj, [arg1])",
        "fn.link(contextObj)"
      ],
      "e": "apply() argumentlarni massivda qabul qilib darhol chaqiradi; call() vergul bilan qabul qiladi; bind() yangi funksiya qaytaradi."
    },
    {
      "c": "js32",
      "q": "Obyektda o'zining xususiy (meros olinmagan) xossasi borligini tekshiruvchi zamonaviy ES2022 statik metodi qaysi?",
      "a": "Object.hasOwn(obj, 'propName')",
      "w": [
        "Object.exists(obj, 'propName')",
        "obj.contains('propName')",
        "Object.in(obj, 'propName')"
      ],
      "e": "Object.hasOwn(obj, key) eski obj.hasOwnProperty(key) ning xavfsiz o'rinbosaridir."
    }
  ],
  "python": [
    {
      "c": "py1",
      "q": "Python-da o'zgarmas (immutable) tartiblangan kolleksiya turi qaysi?",
      "a": "tuple (kortej, masalan: (10, 20, 30))",
      "w": [
        "list ([10, 20, 30])",
        "dict ({'a': 1})",
        "set ({10, 20})"
      ],
      "e": "Tuple yaratilgandan so'ng uning elementlarini o'zgartirib bo'lmaydi va u dict kaliti bo'la oladi."
    },
    {
      "c": "py2",
      "q": "[x**2 for x in range(5) if x % 2 == 0] List Comprehension ifodasining natijasi nima?",
      "a": "[0, 4, 16]",
      "w": [
        "[1, 9, 25]",
        "[0, 2, 4]",
        "[0, 1, 4, 9, 16]"
      ],
      "e": "range(5) ichidagi juft sonlar 0, 2, 4 bo'lib, ularning kvadrati [0, 4, 16] ga teng."
    },
    {
      "c": "py3",
      "q": "Python funksiyasida nomlanmagan ixtiyoriy sonli pozitsion argumentlarni tuple sifatida qabul qiluvchi parametr qanday yoziladi?",
      "a": "*args",
      "w": [
        "**kwargs",
        "&args",
        "...args"
      ],
      "e": "*args pozitsion argumentlarni tuplega, **kwargs esa kalit=qiymat argumentlarni dictga yig'adi."
    },
    {
      "c": "py4",
      "q": "Fayl yoki ma'lumotlar bazasi ulanishini ish tugagach (hatto xatolik yuz bersa ham) avtomatik yopuvchi kontekst menejeri operatori qaysi?",
      "a": "with open('data.txt', 'r') as f:",
      "w": [
        "using open('data.txt') as f:",
        "try open('data.txt') -> f:",
        "auto close('data.txt') as f:"
      ],
      "e": "with operatori __enter__() va __exit__() metodlari orqali resursni kafolatli yopadi."
    },
    {
      "c": "py5",
      "q": "Python klassida yangi obyekt yaratilayotganda uni initsializatsiya qiluvchi konstruktor (dunder) metodi qaysi?",
      "a": "def __init__(self, ...):",
      "w": [
        "def __construct__(self):",
        "def init(this):",
        "def __main__(self):"
      ],
      "e": "__init__ metodi obyekt atributlarini boshlang'ich qiymatlar bilan to'ldiradi."
    },
    {
      "c": "py6",
      "q": "Boshqa funksiyaning kodini o'zgartirmasdan unga qo'shimcha funksionallik (masalan, log yozish yoki vaqtni o'lchash) qo'shuvchi @belgili tuzilma nima?",
      "a": "Decorator (Dekorator)",
      "w": [
        "Generator",
        "Iterator",
        "Metaclass"
      ],
      "e": "Dekorator funksiyani qabul qilib, o'ralgan (wrapper) yangi funksiya qaytaradi."
    },
    {
      "c": "py7",
      "q": "Lug'atdan (dict) kalit bo'yicha qiymat o'qishda, agar kalit topilmasa KeyError bermasdan standart qiymat qaytaruvchi metod qaysi?",
      "a": "user_dict.get('age', 18)",
      "w": [
        "user_dict['age']",
        "user_dict.find('age', 18)",
        "user_dict.fetch('age')"
      ],
      "e": "dict.get(key, default) kalit mavjud bo'lmaganda xatolik o'rniga default qiymatni qaytaradi."
    },
    {
      "c": "py8",
      "q": "Katta hajmli ketma-ketlikni xotiraga to'liq yuklamasdan, elementlarni bitta-bitta 'yield' orqali uzatuvchi funksiya nima deyiladi?",
      "a": "Generator funksiya",
      "w": [
        "Lambda funksiya",
        "Rekursiv funksiya",
        "Statik funksiya"
      ],
      "e": "yield kalit so'zi funksiyani Lazy Evaluation asosida ishlovchi generatorga aylantiradi."
    },
    {
      "c": "py9",
      "q": "Python-da nums = [10, 20, 30, 40, 50] ro'yxatini teskari tartibda nusxalovchi slicing ifodasi qaysi?",
      "a": "nums[::-1]",
      "w": [
        "nums[0:-1]",
        "nums[-1:0]",
        "nums[::2]"
      ],
      "e": "nums[::-1] qadam -1 bo'lgani uchun ro'yxatni oxiridan boshiga qarab qaytaradi."
    },
    {
      "c": "py10",
      "q": "Python-da 'is' va '==' operatorlari orasidagi farq nimada?",
      "a": "'==' obyektlarning qiymatlari tengligini, 'is' esa ularning xotiradagi aynan bitta manzilga (id) tegishli ekanini tekshiradi",
      "w": [
        "Ikkalasi 100% bir xil",
        "'is' faqat sonlar uchun, '==' faqat matnlar uchun",
        "'==' xotira manzilini tekshiradi"
      ],
      "e": "id(a) == id(b) bo'lganda 'a is b' True beradi (masalan, if x is None:)."
    },
    {
      "c": "py11",
      "q": "Ro'yxatni aylanib chiqishda bir vaqtning o'zida ham element indeksini, ham uning qiymatini olish uchun qaysi ichki funksiya ishlatiladi?",
      "a": "for idx, val in enumerate(items):",
      "w": [
        "for idx, val in zip(items):",
        "for idx, val in range(items):",
        "for idx, val in items.index():"
      ],
      "e": "enumerate() har bir qadamda (indeks, qiymat) juftligini beradi."
    },
    {
      "c": "py12",
      "q": "Har bir Python loyihasi uchun kutubxonalarni global tizimdan ajratilgan holda o'rnatish muhiti nima deb ataladi?",
      "a": "Virtual Environment (python -m venv venv)",
      "w": [
        "Docker Container",
        "Global Pip Cache",
        "Bytecode Sandbox"
      ],
      "e": "venv modul yordamida loyihaga xos izolatsiyalangan Python muhiti yaratiladi."
    },
    {
      "c": "py13",
      "q": "Bir qatorli anonim funksiyani e'lon qilish uchun Python-da qaysi kalit so'z ishlatiladi?",
      "a": "lambda (masalan: lambda a, b: a + b)",
      "w": [
        "def_inline",
        "func",
        "arrow"
      ],
      "e": "lambda kalit so'zi qisqa anonim funksiya yaratadi (ko'pincha sort, map, filter ichida)."
    },
    {
      "c": "py14",
      "q": "Xatoliklarni tutib qolish blokida xatolik yuz бермасагина (try muvaffaqiyatli tugasa) ishlaydigan qism qaysi?",
      "a": "else: bloki (try ... except ... else ... finally)",
      "w": [
        "catch: bloki",
        "success: bloki",
        "default: bloki"
      ],
      "e": "Python-da try/except tuzilmasidagi else bloki faqat istisno (exception) chiqmaganda bajariladi."
    },
    {
      "c": "py15",
      "q": "CPython interpretatorida bir vaqtda faqat bitta oqimga (thread) Python baytkodini bajarishga ruxsat beruvchi mexanizm nima?",
      "a": "GIL (Global Interpreter Lock)",
      "w": [
        "JIT Compiler",
        "Garbage Collector",
        "Asyncio Loop"
      ],
      "e": "GIL xotira boshqaruvini xavfsiz qilish uchun CPython-da oqimlarni sinxronlaydi."
    },
    {
      "c": "py16",
      "q": "Ikkita ro'yxat elementlarini mos ravishda juftlab birlashtiruvchi funksiya qaysi (masalan, names va scores)?",
      "a": "zip(names, scores)",
      "w": [
        "join(names, scores)",
        "merge(names, scores)",
        "pair(names, scores)"
      ],
      "e": "zip() bir nechta iterable obyektlarning mos indeksdagi elementlarini kortejlarga juftlaydi."
    },
    {
      "c": "py17",
      "q": "Python fayli bevosita ishga tushirilganda (import qilinmasdan) asosiy kodni bajarish sharti qanday yoziladi?",
      "a": "if __name__ == '__main__':",
      "w": [
        "if __file__ == '__root__':",
        "if main() == True:",
        "if __init__ == '__start__':"
      ],
      "e": "Fayl to'g'ridan-to'g'ri ishga tushirilganda __name__ o'zgaruvchisi '__main__' ga teng bo'ladi."
    },
    {
      "c": "py18",
      "q": "Ro'yxat oxiriga bitta element qo'shish uchun .append(x) ishlatilsa, boshqa ro'yxatning barcha elementlarini yoyib qo'shish uchun qaysi metod ishlatiladi?",
      "a": "list.extend(other_list)",
      "w": [
        "list.insert_all(other_list)",
        "list.push(other_list)",
        "list.concat(other_list)"
      ],
      "e": "extend() iterable ichidagi barcha elementlarni ro'yxat oxiriga alohida-alohida qo'shadi."
    },
    {
      "c": "py19",
      "q": "Satrlar ro'yxatini (['Imkoniyatlar', 'Kaliti']) bo'sh joy bilan bitta satrga birlashtiruvchi eng samarali metod qaysi?",
      "a": "\" \".join(words)",
      "w": [
        "words.join(\" \")",
        "str.concat(words)",
        "words.implode(\" \")"
      ],
      "e": "Python-da join() string metodi bo'lib, O(n) xotira samaradorligi bilan satrlarni birlashtiradi."
    },
    {
      "c": "py20",
      "q": "Python 3.7+ da ma'lumot saqlovchi klasslar uchun __init__, __repr__ va __eq__ metodlarini avtomatik yaratib beruvchi standart dekorator qaysi?",
      "a": "@dataclass (from dataclasses import dataclass)",
      "w": [
        "@autostruct",
        "@modelclass",
        "@entity"
      ],
      "e": "@dataclass dekoratori boilerplate kod yozmasdan toza ma'lumot klasslarini yaratadi."
    },
    {
      "c": "py21",
      "q": "O'zgaruvchi tipini tekshirishda merosxo'rlikni (inheritance) ham hisobga oluvchi eng to'g'ri funksiya qaysi?",
      "a": "isinstance(obj, (int, float))",
      "w": [
        "typeof(obj) == 'int'",
        "obj.is_type(int)",
        "check_type(obj, int)"
      ],
      "e": "isinstance() obyekt ko'rsatilgan klass yoki uning vorisi ekanligini tekshiradi."
    },
    {
      "c": "py22",
      "q": "Funksiyada standart argument sifatida def add_item(x, items=[]): yozish qanday xatolikka olib keladi?",
      "a": "Mutable Default Argument xatosi: ro'yxat faqat bir marta yaratilib, keyingi chaqiruvlarda eski elementlarni saqlab qolaveradi",
      "w": [
        "Sintaktik xato beradi",
        "Har safar ro'yxatni o'chirib yuboradi",
        "Hech qanday farqi yo'q"
      ],
      "e": "Standart argument sifatida items=None berib, funksiya ichida if items is None: items = [] qilish kerak."
    },
    {
      "c": "py23",
      "q": "To'plamlar (set) ustida A & B va A | B amallari nimani bajaradi?",
      "a": "A & B — kesishma (ikkisida ham borlar), A | B — birlashma (jami noyob elementlar)",
      "w": [
        "A & B — ayirma, A | B — ko'paytma",
        "Xatolik beradi",
        "Ikkalasi ham ro'yxatni saralaydi"
      ],
      "e": "Python set obyektlarida & (intersection), | (union), - (difference), ^ (symmetric difference) ishlaydi."
    },
    {
      "c": "py24",
      "q": "Asinxron funksiyani e'lon qilish va uning ichida boshqa korutinani kutish uchun qaysi kalit so'zlar juftligi ishlatiladi?",
      "a": "async def va await",
      "w": [
        "thread def va yield",
        "parallel def va wait",
        "future def va sync"
      ],
      "e": "asyncio kutubxonasida korutinalar async def bilan e'lon qilinib, await bilan kutiladi."
    },
    {
      "c": "py25",
      "q": "Klass ichida obyektga (self) ham, klassga (cls) ham bog'liq bo'lmagan yordamchi metod qaysi dekorator bilan belgilanadi?",
      "a": "@staticmethod",
      "w": [
        "@classmethod",
        "@property",
        "@abstract"
      ],
      "e": "@staticmethod self yoki cls parametrini qabul qilmaydigan mustaqil metod yaratadi."
    },
    {
      "c": "py26",
      "q": "Klass atributini metod kabi hisoblab, ammo tashqaridan oddiy xossa kabi (obj.full_name) o'qish imkonini beruvchi dekorator qaysi?",
      "a": "@property",
      "w": [
        "@getter",
        "@attribute",
        "@computed"
      ],
      "e": "@property dekoratori metodni inkapsulyatsiyalangan xossaga aylantiradi."
    },
    {
      "c": "py27",
      "q": "Ro'yxatdagi elementlarning nechtadan takrorlanganini eng tez sanab lug'at qaytaruvchi standart kutubxona klassi qaysi?",
      "a": "collections.Counter",
      "w": [
        "itertools.count",
        "math.fsum",
        "sys.getsizeof"
      ],
      "e": "from collections import Counter; Counter(['a','b','a']) -> Counter({'a': 2, 'b': 1})."
    },
    {
      "c": "py28",
      "q": "Python 3.8+ da ifoda ichida o'zgaruvchiga qiymat berish va shu qiymatni darhol qaytarish operatori (Walrus operator) qaysi?",
      "a": ":= (masalan: if (n := len(data)) > 10:)",
      "w": [
        "=>",
        "<=>",
        "::="
      ],
      "e": ":= (Assignment Expression) o'zgaruvchiga qiymat tayinlab, uni shart ichida ishlatishga yordam beradi."
    },
    {
      "c": "py29",
      "q": "Ro'yxatni joyida (in-place) saralovchi list.sort() va yangi saralangan ro'yxat qaytaruvchi sorted(iterable) farqi nima?",
      "a": "list.sort() asl ro'yxatni o'zgartiradi va None qaytaradi; sorted() esa asl obyektni o'zgartirmay yangi list qaytaradi",
      "w": [
        "sorted() faqat matnlar uchun ishlaydi",
        "list.sort() yangi ro'yxat qaytaradi",
        "Ikkalasi bir xil"
      ],
      "e": "sorted() har qanday iterable qabul qiladi va yangi ro'yxat qaytaradi."
    },
    {
      "c": "py30",
      "q": "Sonni 17 // 5 va 17 % 5 amallari bilan hisoblaganda natijalar nechaga teng bo'ladi?",
      "a": "17 // 5 = 3 (butunli bo'lish), 17 % 5 = 2 (qoldiq)",
      "w": [
        "17 // 5 = 3.4, 17 % 5 = 0",
        "17 // 5 = 4, 17 % 5 = 3",
        "17 // 5 = 2, 17 % 5 = 5"
      ],
      "e": "// operatori bo'linmaning butun qismini (3), % esa qoldig'ini (2) qaytaradi."
    }
  ],
  "java": [
    {
      "c": "jv1",
      "q": "Java dasturining baytkodini (.class) barcha operatsion tizimlarda mashina kodiga o'girib ishga tushiruvchi virtual mashina qaysi?",
      "a": "JVM (Java Virtual Machine)",
      "w": [
        "CLR (.NET Runtime)",
        "V8 Engine",
        "Zend Engine"
      ],
      "e": "JVM 'Write Once, Run Anywhere' tamoyili asosida baytkodni bajaradi."
    },
    {
      "c": "jv2",
      "q": "Java-da primitiv tiplar (int, double, boolean) va obyekt havolalari (References) xotiraning qaysi qismida saqlanadi?",
      "a": "Lokal primitivlar va havolalar Stack-da, yaratilgan obyektlarning o'zi (new ...) esa Heap xotirada saqlanadi",
      "w": [
        "Barchasi faqat BIOS ROM-da saqlanadi",
        "Obyektlar Stack-da, primitivlar Heap-da",
        "Faqat protsessor L1 keshida"
      ],
      "e": "JVM xotira modelida barcha obyektlar Heap-da joylashadi va Garbage Collector tomonidan tozalanadi."
    },
    {
      "c": "jv3",
      "q": "Java-da String, StringBuilder va StringBuffer orasidagi eng muhim farq nima?",
      "a": "String o'zgarmas (immutable); StringBuilder o'zgaruvchan va tez (single-thread); StringBuffer esa thread-safe (synchronized)",
      "w": [
        "String o'zgaruvchan, StringBuilder o'zgarmas",
        "Uchalasi ham xotirada bir xil ishlaydi",
        "StringBuffer faqat sonlar uchun"
      ],
      "e": "Ko'p marta matn qo'shishda (loop ichida) StringBuilder ishlatish xotirani tejaydi."
    },
    {
      "c": "jv4",
      "q": "Java klassida metod nomlari bir xil bo'lib, parametrlar soni yoki tipi bilan farqlanishi nima deyiladi?",
      "a": "Method Overloading (Kompilyatsiya vaqtidagi polimorfizm)",
      "w": [
        "Method Overriding",
        "Encapsulation",
        "Serialization"
      ],
      "e": "Overloading bitta klass ichida turli parametrli bir xil nomdagi metodlar yozishdir."
    },
    {
      "c": "jv5",
      "q": "Voris (subclass) klassda ota klassning metodini aynan bir xil signatura bilan qayta yozishda qaysi annotatsiya qo'yiladi?",
      "a": "@Override",
      "w": [
        "@Overload",
        "@SuperMethod",
        "@Virtual"
      ],
      "e": "@Override kompilyatorga metod ota klassdan qayta aniqlanayotganini tekshirishni buyuradi."
    },
    {
      "c": "jv6",
      "q": "Java-da 'final' kalit so'zi klass, metod va o'zgaruvchi oldidan kelganda nimani bildiradi?",
      "a": "final o'zgaruvchi o'zgarmas konstanta; final metod override qilinmaydi; final klassdan meros (extends) olib bo'lmaydi",
      "w": [
        "Obyektni xotiradan o'chiradi",
        "Faqat interfeys yaratadi",
        "Xatoliklarni yopadi"
      ],
      "e": "Masalan, java.lang.String klassi final hisoblanadi va undan voris olib bo'lmaydi."
    },
    {
      "c": "jv7",
      "q": "ArrayList va LinkedList kolleksiyalarining ichki tuzilishi va tezligi bo'yicha farqi qanday?",
      "a": "ArrayList dinamik massivga asoslangan (indeks bo'yicha o'qish O(1)); LinkedList ikki tomonlama bog'langan ro'yxat (boshiga/o'rtasiga qo'shish tez)",
      "w": [
        "LinkedList indeks bo'yicha O(1) da o'qiydi",
        "ArrayList faqat 10 ta element oladi",
        "Ikkalasi ham Hash jadvalda ishlaydi"
      ],
      "e": "Ko'p o'qish uchun ArrayList, tez-tez boshidan/o'rtasidan o'chirib-qo'shish uchun LinkedList tanlanadi."
    },
    {
      "c": "jv8",
      "q": "HashMap kolleksiyasida kalit (Key) sifatida ishlatiladigan klassda qaysi ikkita metod to'g'ri override qilingan bo'lishi shart?",
      "a": "equals() va hashCode()",
      "w": [
        "toString() va clone()",
        "compareTo() va finalize()",
        "wait() va notify()"
      ],
      "e": "HashMap kalitni bucket-ga joylashtirishda hashCode() va to'qnashuvda equals() metodidan foydalanadi."
    },
    {
      "c": "jv9",
      "q": "Java 8+ da faqat BITTA abstrakt metodga ega bo'lgan va Lambda ifodalar bilan ishlatiladigan interfeys nima deb ataladi?",
      "a": "Functional Interface (@FunctionalInterface, masalan Runnable, Predicate, Function)",
      "w": [
        "Marker Interface",
        "Abstract Class",
        "Sealed Class"
      ],
      "e": "@FunctionalInterface faqat bitta abstrakt metodga ruxsat beradi va lambda (->) bilan ishlaydi."
    },
    {
      "c": "jv10",
      "q": "NullPointerException xatoligining oldini olish uchun qiymat bo'lishi yoki bo'lmasligi mumkin bo'lgan obyektni o'rovchi Java 8 klassi qaysi?",
      "a": "Optional<T> (Optional.ofNullable(...))",
      "w": [
        "Nullable<T>",
        "Maybe<T>",
        "SafeRef<T>"
      ],
      "e": "Optional.ofNullable(val).orElse(defaultVal) null tekshiruvlarini xavfsiz bajaradi."
    },
    {
      "c": "jv11",
      "q": "Java-da Checked Exception (masalan, IOException, SQLException) va Unchecked Exception (RuntimeException) farqi nima?",
      "a": "Checked Exception-larni kompilyatsiya vaqtida try-catch ga olish yoki throws bilan e'lon qilish majburiy",
      "w": [
        "Unchecked Exception-lar kompilyatsiya qilinmaydi",
        "Checked Exception faqat xotira to'lganda chiqadi",
        "Farqi yo'q"
      ],
      "e": "RuntimeException (NullPointerException, IndexOutOfBoundsException) unchecked hisoblanadi."
    },
    {
      "c": "jv12",
      "q": "Fayl yoki DB ulanishini try blokidan chiqqanda avtomatik close() qiluvchi Java 7+ sintaksisi nima deb ataladi?",
      "a": "try-with-resources: try (BufferedReader br = new BufferedReader(...)) { ... }",
      "w": [
        "try-finally-delete",
        "using-block",
        "auto-close-try"
      ],
      "e": "AutoCloseable interfeysini implement qilgan har qanday resurs try(...) ichida avtomatik yopiladi."
    },
    {
      "c": "jv13",
      "q": "Ko'p oqimli (Multithreading) dasturda bir vaqtda faqat bitta oqim metodga kirishini ta'minlovchi kalit so'z qaysi?",
      "a": "synchronized",
      "w": [
        "transient",
        "native",
        "strictfp"
      ],
      "e": "synchronized blok yoki metod monitor qulfi (lock) orqali Race Condition-ning oldini oladi."
    },
    {
      "c": "jv14",
      "q": "O'zgaruvchi qiymati CPU keshidan emas, doimo asosiy xotiradan (Main Memory) barcha oqimlar uchun bir xil o'qilishini qaysi kalit so'z kafolatlaydi?",
      "a": "volatile",
      "w": [
        "static",
        "abstract",
        "protected"
      ],
      "e": "volatile kalit so'zi oqimlararo o'zgaruvchi ko'rinuvchanligini (visibility) ta'minlaydi."
    },
    {
      "c": "jv15",
      "q": "Java obyektini baytlar oqimiga aylantirib faylga yoki tarmoqqa uzatish (Serialization) paytida qaysi kalit so'z bilan belgilangan maydon saqlanmaydi?",
      "a": "transient (masalan: private transient String password;)",
      "w": [
        "volatile",
        "hidden",
        "ignore"
      ],
      "e": "transient maydonlar serializatsiya jarayonida o'tkazib yuboriladi."
    },
    {
      "c": "jv16",
      "q": "Java Stream API-da filter(), map(), sorted() kabi oraliq (intermediate) operatsiyalar qachon haqiqatan bajariladi?",
      "a": "Faqat yakuniy (terminal) operatsiya (masalan: collect(), count(), forEach(), reduce()) chaqirilgandagina (Lazy Evaluation)",
      "w": [
        "Yozilgan zahoti darhol",
        "Kompilyatsiya paytida",
        "Garbage Collector ishlaganda"
      ],
      "e": "Stream pipeline terminal operatsiya chaqirilmaguncha hech qanday hisoblash bajarmaydi."
    },
    {
      "c": "jv17",
      "q": "Java-da 'abstract class' va 'interface' orasidagi asosiy farqlardan biri qaysi?",
      "a": "Klass faqat bitta abstract class-dan meros (extends) oladi, lekin bir nechta interface-ni (implements) amalga oshira oladi",
      "w": [
        "Interface ichida metod yozib bo'lmaydi",
        "Abstract class-da konstruktor bo'lmaydi",
        "Interface-dan new bilan obyekt yaratiladi"
      ],
      "e": "Java ko'p karra klass merosxo'rligini qo'llamaydi, ammo bir nechta interfeysni implement qilish mumkin."
    },
    {
      "c": "jv18",
      "q": "Integer a = 100; Integer b = 100; da (a == b) true chiqib, Integer x = 200; Integer y = 200; da (x == y) false chiqishining sababi nima?",
      "a": "Java Integer Cache (-128 dan +127 gacha bo'lgan Integer obyektlarini keshlaydi)",
      "w": [
        "Kompilyator xatosi",
        "200 juft son bo'lgani uchun",
        "Stack overflow sababli"
      ],
      "e": "Integer.valueOf() -128..127 oralig'idagi qiymatlarni bitta kesh obyektidan qaytaradi; obyektlarni solishtirishda .equals() ishlatish shart."
    },
    {
      "c": "jv19",
      "q": "Java 16+ da ma'lumot tashuvchi o'zgarmas (immutable) klasslarni bir qatorda e'lon qilish uchun qaysi kalit so'z qo'shildi?",
      "a": "record (masalan: public record User(Long id, String name) {})",
      "w": [
        "struct",
        "tuple",
        "dataclass"
      ],
      "e": "record avtomatik ravishda final maydonlar, konstruktor, getterlar, equals, hashCode va toString yaratadi."
    },
    {
      "c": "jv20",
      "q": "Spring Boot freymvorkida klassni REST API kontrolleri sifatida belgilab, javoblarni avtomatik JSON formatga o'giruvchi annotatsiya qaysi?",
      "a": "@RestController (@Controller + @ResponseBody)",
      "w": [
        "@ServiceComponent",
        "@EntityTable",
        "@RepositoryBean"
      ],
      "e": "@RestController barcha handler metodlar qaytaruvchi obyektlarni JSON/XML ko'rinishida HTTP body-ga yozadi."
    },
    {
      "c": "jv21",
      "q": "Java-da 'package-private' (hech qanday public/protected/private yozilmagan) a'zolar qayerga ko'rinadi?",
      "a": "Faqat o'zi joylashgan paket (package) ichidagi klasslargagina ko'rinadi",
      "w": [
        "Butun loyihadagi barcha klasslarga",
        "Faqat o'z klassi ichiga",
        "Faqat boshqa paketdagi voris klasslarga"
      ],
      "e": "Default (package-private) modifikatori ko'rinish doirasini joriy paket bilan cheklaydi."
    },
    {
      "c": "jv22",
      "q": "Java Collection ierarxiyasida elementlarni takrorlanmas va avtomatik o'sish tartibida (Red-Black Tree asosida) saqlovchi to'plam qaysi?",
      "a": "TreeSet",
      "w": [
        "HashSet",
        "ArrayList",
        "ArrayDeque"
      ],
      "e": "TreeSet NavigableSet interfeysini amalga oshiradi va elementlarni O(log n) vaqtda saralangan holda saqlaydi."
    },
    {
      "c": "jv23",
      "q": "Klass yuklanganda (obyekt yaratilmasdan oldin) faqat bir marta ishga tushadigan initsializatsiya bloki qanday yoziladi?",
      "a": "static { ... }",
      "w": [
        "init { ... }",
        "constructor { ... }",
        "first { ... }"
      ],
      "e": "Statik blok ClassLoader klassni xotiraga yuklagan paytda bir marta bajariladi."
    },
    {
      "c": "jv24",
      "q": "Generics-da <? extends Number> (Upper Bounded Wildcard) nimani anglatadi?",
      "a": "Number yoki uning har qanday voris klassini (Integer, Double, Long va h.k.) qabul qiladi",
      "w": [
        "Faqat Object klassini qabul qiladi",
        "Faqat String qabul qiladi",
        "Yangi Number obyekti yaratadi"
      ],
      "e": "<? extends T> o'qish (producer) uchun yuqori chegarani belgilaydi (PECS qoidasi: Producer Extends, Consumer Super)."
    },
    {
      "c": "jv25",
      "q": "Obyektlarning tabiiy saralanish tartibini klassning o'zida belgilash uchun qaysi interfeys va metod implement qilinadi?",
      "a": "Comparable<T> interfeysi va compareTo(T o) metodi",
      "w": [
        "Comparator<T> va equals()",
        "Cloneable va clone()",
        "Iterable va iterator()"
      ],
      "e": "Comparable klassning o'ziga natural ordering beradi; Comparator esa tashqi saralash qoidasini yozish uchun ishlatiladi."
    },
    {
      "c": "jv26",
      "q": "Java 21 da millionlab yengil (lightweight) oqimlarni OS oqimlarini band qilmasdan yaratish imkonini bergan texnologiya nima?",
      "a": "Virtual Threads (Project Loom — Thread.ofVirtual().start(...))",
      "w": [
        "Green Processes",
        "Web Workers",
        "Coroutines"
      ],
      "e": "Virtual Threads JVM tomonidan boshqarilib, bloklanuvchi I/O operatsiyalarda yuqori masshtablanish beradi."
    },
    {
      "c": "jv27",
      "q": "Klass konstruktori ichidan aynan shu klassning boshqa konstruktorini chaqirish va ota klass konstruktorini chaqirish qanday yoziladi?",
      "a": "Shu klass konstruktori: this(...); Ota klass konstruktori: super(...); (birinchi qatorda)",
      "w": [
        "self(...) va parent(...)",
        "init(...) va base(...)",
        "new(...) va extends(...)"
      ],
      "e": "this() yoki super() chaqiruvi konstruktorning birinchi operatori bo'lishi shart."
    },
    {
      "c": "jv28",
      "q": "JDBC orqali SQL so'rov yuborishda SQL Injection hujumidan himoyalanish va so'rovni oldindan kompilyatsiya qilish uchun qaysi interfeys ishlatiladi?",
      "a": "PreparedStatement (connection.prepareStatement(\"SELECT * FROM users WHERE id = ?\"))",
      "w": [
        "Statement",
        "RawQuery",
        "SqlRunner"
      ],
      "e": "PreparedStatement '?' parametrlarini xavfsiz bog'lab, SQL Injection-ni bloklaydi."
    },
    {
      "c": "jv29",
      "q": "Java-da xotirada hech qanday havola (reference) qolmagan obyektlarni avtomatik tozalovchi tizim nima?",
      "a": "Garbage Collector (GC: G1GC, ZGC, Shenandoah)",
      "w": [
        "Memory Defragmenter",
        "Stack Cleaner",
        "Pointer Eraser"
      ],
      "e": "Garbage Collector Reachability Analysis orqali yetib bo'lmaydigan obyektlarni Heap-dan o'chiradi."
    },
    {
      "c": "jv30",
      "q": "Java 17+ da qaysi klasslar meros olishi mumkinligini qat'iy ro'yxat (`permits`) bilan cheklovchi klass turi qaysi?",
      "a": "sealed class (masalan: public sealed class Shape permits Circle, Square)",
      "w": [
        "private class",
        "locked class",
        "restricted class"
      ],
      "e": "sealed klasslar ierarxiyani qat'iy nazorat qilish va pattern matching uchun kiritilgan."
    }
  ],
  "c-cpp": [
    {
      "c": "cpp1",
      "q": "C va C++ da o'zgaruvchining xotiradagi manzilini oluvchi va ko'rsatkich (pointer) manzilidagi qiymatni o'quvchi (dereference) operatorlar qaysi?",
      "a": "& (manzilni olish) va * (manzil bo'yicha qiymatga murojaat qilish)",
      "w": [
        "@ va #",
        "$ va %",
        "-> va ::"
      ],
      "e": "int x = 10; int* p = &x; bu yerda &x — manzil, *p esa 10 qiymatini beradi."
    },
    {
      "c": "cpp2",
      "q": "C++ da ko'rsatkich (pointer) va havola (reference: int& ref = x) orasidagi eng muhim farq nima?",
      "a": "Reference e'lon qilinganda albatta initsializatsiya qilinishi shart, NULL bo'la olmaydi va keyin boshqa obyektga qayta bog'lanmaydi",
      "w": [
        "Pointer-ni o'zgartirib bo'lmaydi",
        "Reference faqat Heap xotirada ishlaydi",
        "Farqi yo'q"
      ],
      "e": "Reference mavjud o'zgaruvchining xavfsiz taxallusi (alias) hisoblanadi."
    },
    {
      "c": "cpp3",
      "q": "Zamonaviy C++ (C++11/14/17/20) da dinamik ajratilgan obyektga YAGONA egalik qiluvchi va blokdan chiqqanda avtomatik o'chiruvchi aqlli ko'rsatkich qaysi?",
      "a": "std::unique_ptr<T> (std::make_unique<T>())",
      "w": [
        "std::shared_ptr<T>",
        "std::auto_ptr<T>",
        "void*"
      ],
      "e": "std::unique_ptr nusxalanmaydi (faqat std::move qilinadi) va qo'shimcha xotira sarfisiz RAII ni ta'minlaydi."
    },
    {
      "c": "cpp4",
      "q": "C++ da bir nechta obyekt bitta dinamik resursga birgalikda egalik qilganda havolalar sonini (Reference Counting) sanab turuvchi aqlli ko'rsatkich qaysi?",
      "a": "std::shared_ptr<T>",
      "w": [
        "std::unique_ptr<T>",
        "std::raw_ptr<T>",
        "int*"
      ],
      "e": "Oxirgi shared_ptr yo'q qilinganda obyekt xotiradan avtomatik o'chiriladi."
    },
    {
      "c": "cpp5",
      "q": "C++ da ota klass ko'rsatkichi (Base* p = new Derived()) orqali delete p; qilinganda voris klass destruktori ham chaqirilishi uchun ota destruktor qanday bo'lishi shart?",
      "a": "virtual (~Base() virtual bo'lishi shart)",
      "w": [
        "static",
        "inline",
        "friend"
      ],
      "e": "Virtual destruktor bo'lmasa, faqat Base destruktori chaqirilib, Derived resurslari xotirada qolib ketadi (Memory Leak)."
    },
    {
      "c": "cpp6",
      "q": "C++ STL-da std::vector<T> konteynerida elementlar xotirada qanday joylashadi va push_back() amortizatsiyalangan murakkabligi qanday?",
      "a": "Xotirada uzluksiz (contiguous) ketma-ketlikda joylashadi; push_back() O(1) amortizatsiyalangan vaqt oladi",
      "w": [
        "Daraxt shaklida tarqoq joylashadi",
        "Faqat Stack-da 8 bayt joy oladi",
        "push_back() har doim O(n²) vaqt oladi"
      ],
      "e": "std::vector uzluksiz massiv bo'lgani uchun CPU keshiga juda mos (cache-friendly)."
    },
    {
      "c": "cpp7",
      "q": "C++ da new[] operatori bilan ajratilgan massiv (int* arr = new int[100];) xotirasini to'g'ri bo'shatish qanday yoziladi?",
      "a": "delete[] arr;",
      "w": [
        "delete arr;",
        "free(arr);",
        "arr.clear();"
      ],
      "e": "new[] bilan olingan massivni oddiy delete bilan o'chirish Undefined Behavior keltirib chiqaradi; delete[] shart."
    },
    {
      "c": "cpp8",
      "q": "C++ da ota klassda tana qismiga ega bo'lmagan va klassni abstrakt qiladigan 'sof virtual funksiya' (Pure Virtual Function) qanday e'lon qilinadi?",
      "a": "virtual void draw() = 0;",
      "w": [
        "abstract void draw();",
        "virtual void draw() = nullptr;",
        "pure void draw();"
      ],
      "e": "Kamida bitta '= 0' sof virtual funksiyasi bor klass Abstract Class hisoblanadi."
    },
    {
      "c": "cpp9",
      "q": "C++ STL-da std::map va std::unordered_map orasidagi ichki tuzilish va qidiruv tezligi farqi nima?",
      "a": "std::map Red-Black Tree asosida kalitlarni saralab saqlaydi (O(log n)); std::unordered_map Hash jadval asosida ishlaydi (o'rtacha O(1))",
      "w": [
        "std::map O(1), unordered_map O(n²)",
        "Ikkalasi ham saralab saqlaydi",
        "std::map faqat int saqlaydi"
      ],
      "e": "Saralash kerak bo'lmasa, tezlik uchun std::unordered_map afzal."
    },
    {
      "c": "cpp10",
      "q": "Funksiyaga katta obyektni (masalan, std::string yoki std::vector) nusxalamasdan va o'zgartirib yubormasdan eng samarali uzatish usuli qaysi?",
      "a": "Konstant havola orqali: void process(var std::string& text)",
      "w": [
        "Qiymat orqali: void process(std::string text)",
        "Global o'zgaruvchi orqali",
        "void* orqali"
      ],
      "e": "var T& obyektni xotirada nusxalamaydi (0 byte copy overhead) va funksiya ichida o'zgarishdan himoyalaydi."
    },
    {
      "c": "cpp11",
      "q": "C++11 da kiritilgan 'nullptr' kalit so'zining eski C-dagi NULL (0) makrosidan ustunligi nimada?",
      "a": "nullptr aniq ko'rsatkich tipiga (std::nullptr_t) ega bo'lib, int qabul qiluvchi overloaded funksiyalar bilan adashib ketmaydi",
      "w": [
        "nullptr kamroq bayt joy oladi",
        "NULL faqat Linuxda ishlaydi",
        "Farqi yo'q"
      ],
      "e": "func(int) va func(char*) bo'lganda func(NULL) int ni chaqirib yuborardi, func(nullptr) esa aniq char* ni tanlaydi."
    },
    {
      "c": "cpp12",
      "q": "Resursni obyekt konstruktorida egallab, destruktorida avtomatik bo'shatishga asoslangan C++ dasturlash paradigmasi nima deb ataladi?",
      "a": "RAII (Resource Acquisition Is Initialization)",
      "w": [
        "FIFO",
        "SIMD",
        "RTTI"
      ],
      "e": "RAII C++ da xotira, fayl va mutex qulflarini istisnolar (exceptions) paytida ham xavfsiz yopishning asosidir."
    },
    {
      "c": "cpp13",
      "q": "C++ da xususiy (private) maydonlarga klass tashqarisidagi aniq bir funksiyaga murojaat huquqini beruvchi kalit so'z qaysi?",
      "a": "friend",
      "w": [
        "trusted",
        "ally",
        "extern"
      ],
      "e": "friend funksiya yoki klass inkapsulyatsiyani chetlab o'tib private a'zolarni o'qiy oladi (masalan, operator<< uchun)."
    },
    {
      "c": "cpp14",
      "q": "C++11 Move Semantics-da vaqtinchalik obyekt resurslarini nusxalamasdan 'ko'chirib olish' uchun qaysi funksiya va rvalue havola ishlatiladi?",
      "a": "std::move(obj) va T&& (rvalue reference)",
      "w": [
        "std::copy(obj) va T&",
        "std::swap(obj) va T*",
        "std::forward_list"
      ],
      "e": "Move konstruktori (ClassName(ClassName&& other) noexcept) xotira ko'rsatkichini ko'chirib, chuqur nusxalashning oldini oladi."
    },
    {
      "c": "cpp15",
      "q": "Ifodaning qiymatini dastur ishga tushmasdan oldin — aynan kompilyatsiya vaqtida (Compile-Time) hisoblashni buyuruvchi C++ kalit so'zi qaysi?",
      "a": "constexpr (va C++20 da consteval)",
      "w": [
        "register",
        "volatile",
        "mutable"
      ],
      "e": "constexpr funksiya va o'zgaruvchilar kompilyatsiya bosqichidayoq hisoblab qo'yiladi."
    },
    {
      "c": "cpp16",
      "q": "C++ da 'struct' va 'class' orasidagi yagona texnik farq nimadan iborat?",
      "a": "struct-da a'zolar va merosxo'rlik standart bo'yicha public, class-da esa private bo'ladi",
      "w": [
        "struct-da metod va konstruktor yozib bo'lmaydi",
        "struct faqat C tilida bor",
        "struct-dan meros olib bo'lmaydi"
      ],
      "e": "C++ da struct ham to'laqonli klass bo'lib, faqat default access modifier public hisoblanadi."
    },
    {
      "c": "cpp17",
      "q": "Polimorfik klass ierarxiyasida ota ko'rsatkichni voris ko'rsatkichga (Downcasting) xavfsiz tekshirib o'tkazuvchi C++ operatori qaysi?",
      "a": "dynamic_cast<Derived*>(basePtr)",
      "w": [
        "reinterpret_cast<Derived*>(basePtr)",
        "const_cast<Derived*>(basePtr)",
        "c_style_cast"
      ],
      "e": "dynamic_cast RTTI yordamida tipni tekshiradi; mos kelmasa nullptr qaytaradi."
    },
    {
      "c": "cpp18",
      "q": "C tilida sizeof(char) ifodasining qiymati har doim nechaga teng?",
      "a": "1 bayt (1 byte)",
      "w": [
        "2 bayt",
        "4 bayt",
        "8 bayt"
      ],
      "e": "C/C++ standartiga ko'ra sizeof(char) ta'rif bo'yicha doimo 1 ga teng."
    },
    {
      "c": "cpp19",
      "q": "C++ Lambda ifodasida `[&](int x) { return x + total; }` yozuvidagi `[&]` (Capture clause) nimani bildiradi?",
      "a": "Tashqi ko'rinish doirasidagi barcha o'zgaruvchilarni havola (by reference) orqali ushlab olishni",
      "w": [
        "Faqat qiymat bo'yicha (by value) nusxalashni",
        "Hech qanday o'zgaruvchini olmaslikni",
        "Yangi oqim yaratishni"
      ],
      "e": "[=] qiymat bo'yicha nusxalaydi, [&] esa havola (reference) bo'yicha ushlaydi."
    },
    {
      "c": "cpp20",
      "q": "Bir xil funksiya yoki klass kodini turli ma'lumot tiplari (int, double, string) uchun umumlashtirib yozish mexanizmi C++ da nima deyiladi?",
      "a": "Templates (Shablonlar: template <typename T>)",
      "w": [
        "Macros (#define)",
        "Reflections",
        "Delegates"
      ],
      "e": "C++ shablonlari (Templates) kompilyatsiya vaqtida har bir tip uchun optimal mashina kodi generatsiya qiladi."
    },
    {
      "c": "cpp21",
      "q": "Ikkita std::shared_ptr bir-biriga ishora qilganda yuzaga keladigan xotira sizib chiqishi (Circular Dependency) muammosini qaysi aqlli ko'rsatkich hal qiladi?",
      "a": "std::weak_ptr<T>",
      "w": [
        "std::unique_ptr<T>",
        "std::scoped_ptr<T>",
        "void*"
      ],
      "e": "std::weak_ptr reference count-ni oshirmaydi va halqasimon bog'lanishni uzadi."
    },
    {
      "c": "cpp22",
      "q": "C++ da funksiyaning hech qanday istisno (exception) chiqarmasligini kompilyatorga bildiruvchi va std::vector optimizatsiyasini yoquvchi kalit so'z qaysi?",
      "a": "noexcept",
      "w": [
        "nothrow",
        "safe",
        "final"
      ],
      "e": "noexcept bilan belgilangan move-konstruktorlar vector kengayganda elementlarni xavfsiz ko'chirish imkonini beradi."
    },
    {
      "c": "cpp23",
      "q": "Header (.h / .hpp) fayllarning bitta kompilyatsiya birligida bir necha marta qayta qo'shilib qolishining oldini oluvchi direktiva qaysi?",
      "a": "#pragma once (yoki #ifndef / #define / #endif header guards)",
      "w": [
        "#include <once>",
        "#import unique",
        "#undef all"
      ],
      "e": "#pragma once kompilyatorga ushbu sarlavha faylini faqat bir marta ulashni buyuradi."
    },
    {
      "c": "cpp24",
      "q": "std::vector<int> v; da v.size() va v.capacity() metodlari orasidagi farq nima?",
      "a": "size() — hozirgi mavjud elementlar soni; capacity() — qayta xotira ajratmasdan sig'dirish mumkin bo'lgan jami zahira joy",
      "w": [
        "Ikkalasi doim teng",
        "capacity() baytlar sonini qaytaradi",
        "size() maksimal chegarani qaytaradi"
      ],
      "e": "v.reserve(1000) orqali capacity oldindan oshirilsa, qayta-qayta reallokatsiya bo'lmaydi."
    },
    {
      "c": "cpp25",
      "q": "Ko'p oqimli C++ dasturda mutex-ni blok boshida qulflab, blokdan chiqqanda avtomatik ochuvchi RAII o'ram klassi qaysi?",
      "a": "std::lock_guard<std::mutex> (yoki C++17 std::scoped_lock)",
      "w": [
        "std::thread_lock",
        "std::atomic_flag",
        "std::future"
      ],
      "e": "std::lock_guard konstruktorda mtx.lock(), destruktorda mtx.unlock() chaqirib deadlock xavfini kamaytiradi."
    },
    {
      "c": "cpp26",
      "q": "Bir parametrli klass konstruktori tasodifiy ravishda yashirin tip konvertatsiyasi (implicit conversion) bo'lib ketmasligi uchun qaysi kalit so'z qo'yiladi?",
      "a": "explicit",
      "w": [
        "strict",
        "direct",
        "manual"
      ],
      "e": "explicit konstruktor faqat ochiq-oydin chaqirilgandagina ishlaydi."
    },
    {
      "c": "cpp27",
      "q": "Klassning 'const' metodlari ichida ham o'zgartirilishiga ruxsat beriladigan (masalan, mutex yoki kesh hisoblagichi) maydon qaysi kalit so'z bilan e'lon qilinadi?",
      "a": "mutable",
      "w": [
        "volatile",
        "register",
        "extern"
      ],
      "e": "mutable maydonlar hatto var obyekt metodlari ichida ham o'zgartirilishi mumkin."
    },
    {
      "c": "cpp28",
      "q": "O'zgaruvchi tipini unga berilayotgan boshlang'ich qiymatga qarab kompilyatorning o'zi avtomatik aniqlashi uchun qaysi kalit so'z ishlatiladi?",
      "a": "auto",
      "w": [
        "var",
        "let",
        "dynamic"
      ],
      "e": "C++11 dan boshlab auto kalit so'zi kompilyatsiya vaqtida aniq tipni chiqarib oladi (Type Deduction)."
    },
    {
      "c": "cpp29",
      "q": "C++17 da std::string nusxasini yaratmasdan, mavjud matn xotirasiga faqat o'qish uchun yengil (pointer + length) ko'rinish beruvchi klass qaysi?",
      "a": "std::string_view",
      "w": [
        "std::stringstream",
        "std::char_traits",
        "std::wstring"
      ],
      "e": "std::string_view Heap-dan xotira ajratmasdan qism-satrlar bilan O(1) da ishlash imkonini beradi."
    },
    {
      "c": "cpp30",
      "q": "Polimorfik klasslarda virtual funksiyalar qaysi yashirin mexanizm yordamida ish vaqtida (Runtime) topib chaqiriladi?",
      "a": "vtable (Virtual metodlar jadvali) va vptr (Virtual jadval ko'rsatkichi)",
      "w": [
        "Hash Map jadvali",
        "Preprosessor makrosi",
        "BIOS Interrupt jadvali"
      ],
      "e": "Har bir polimorfik klass uchun kompilyator vtable yaratadi va obyekt ichidagi vptr orqali to'g'ri metodni chaqiradi."
    }
  ],
  "csharp": [
    {
      "c": "cs1",
      "q": "C# va .NET platformasida Value Types (struct, int, bool) va Reference Types (class, string, array) orasidagi asosiy farq nima?",
      "a": "Value Types qiymatni bevosita saqlaydi (ko'pincha Stack-da), Reference Types esa Heap-dagi obyektga havolani saqlaydi",
      "w": [
        "Value Types faqat faylda saqlanadi",
        "Reference Types-da metod bo'lmaydi",
        "struct-dan meros olish mumkin"
      ],
      "e": "struct va primitivlar Value Type bo'lib, uzatilganda qiymati nusxalanadi."
    },
    {
      "c": "cs2",
      "q": "C# da ma'lumotlar kolleksiyalari va SQL bazalariga yagona sintaksisda so'rov yozish texnologiyasi nima deb ataladi?",
      "a": "LINQ (Language Integrated Query)",
      "w": [
        "ADO.NET Raw",
        "WinForms",
        "ActiveX"
      ],
      "e": "LINQ (.Where(), .Select(), .OrderBy(), .FirstOrDefault()) C# tiliga integratsiyalashgan so'rovlar tizimidir."
    },
    {
      "c": "cs3",
      "q": "LINQ-da FirstOrDefault() va SingleOrDefault() metodlari orasidagi muhim farq nimada?",
      "a": "FirstOrDefault() birinchi topilgan elementni oladi; SingleOrDefault() esa shartga mos element 1 tadan ko'p bo'lsa InvalidOperationException beradi",
      "w": [
        "SingleOrDefault() har doim oxirgi elementni oladi",
        "Ikkalasi 100% bir xil",
        "FirstOrDefault() xotirani o'chiradi"
      ],
      "e": "Yagona unikal yozuvni (masalan, ID bo'yicha) tekshirib olishda SingleOrDefault() ishlatiladi."
    },
    {
      "c": "cs4",
      "q": "C# da 'ref' va 'out' parametr modifikatorlari orasidagi farq nima?",
      "a": "ref uzatishdan oldin o'zgaruvchi qiymatga ega bo'lishi shart; out parametriga esa chaqirilgan metod ichida chiqishdan oldin qiymat berilishi shart",
      "w": [
        "out faqat string uchun ishlaydi",
        "ref faqat global o'zgaruvchilar uchun",
        "Farqi yo'q"
      ],
      "e": "int.TryParse(str, out int result) metodida out parametri natijani qaytarish uchun ishlatiladi."
    },
    {
      "c": "cs5",
      "q": "C# da Value Type qiymatni Object tipiga o'tkazish va qaytarib olish jarayoni nima deb ataladi?",
      "a": "Boxing (Heap-ga o'rash) va Unboxing (qayta chiqarib olish)",
      "w": [
        "Casting va Parsing",
        "Marshalling va Unmarshalling",
        "Folding va Unfolding"
      ],
      "e": "Boxing Heap-dan yangi obyekt ajratgani sababli Generics (List<int>) ishlatib boxing-dan qochish tavsiya etiladi."
    },
    {
      "c": "cs6",
      "q": "C# da asinxron metodni e'lon qilishda async kalit so'zi bilan birga odatda qaysi qaytarish tipi (Return Type) ishlatiladi?",
      "a": "Task yoki Task<T> (yoki ValueTask<T>)",
      "w": [
        "Thread<T>",
        "Coroutine<T>",
        "Promise<T>"
      ],
      "e": "async Task<T> metodlari await operatori bilan bloklanmaydigan asinxron kod yozish imkonini beradi."
    },
    {
      "c": "cs7",
      "q": "C# klassida xususiy maydonni (field) o'qish va yozishni nazorat qiluvchi get va set blokli a'zo nima deyiladi?",
      "a": "Property (Xossa: public string Name { get; set; })",
      "w": [
        "Indexer",
        "Delegate",
        "Event"
      ],
      "e": "Auto-implemented properties inkapsulyatsiyani qisqa va toza yozish imkonini beradi."
    },
    {
      "c": "cs8",
      "q": "IDisposable interfeysini amalga oshirgan obyektlarni (SqlConnection, FileStream) blok yakunida avtomatik Dispose() qiluvchi operator qaysi?",
      "a": "using (var stream = new FileStream(...)) { ... } (yoki using var stream = ...;)",
      "w": [
        "dispose (var s = ...)",
        "finally (var s = ...)",
        "clean (var s = ...)"
      ],
      "e": "using operatori kompilyator tomonidan try { ... } finally { stream?.Dispose(); } blokiga aylantiriladi."
    },
    {
      "c": "cs9",
      "q": "C# da metodlarga xavfsiz tipdagi ko'rsatkich (type-safe function pointer) vazifasini bajaruvchi tip nima?",
      "a": "delegate (va tayyor Action<T>, Func<T, TResult>, Predicate<T> delegatlari)",
      "w": [
        "interface",
        "enum",
        "namespace"
      ],
      "e": "Func<int, int, int> qiymat qaytaruvchi delegat, Action<string> esa void qaytaruvchi delegatdir."
    },
    {
      "c": "cs10",
      "q": "C# da 'const' va 'readonly' maydonlar orasidagi asosiy farq nima?",
      "a": "var kompilyatsiya vaqtida aniq bo'lishi shart; readonly esa ish vaqtida (konstruktor ichida) ham qiymat olishi mumkin",
      "w": [
        "readonly-ni har qanday metodda o'zgartirsa bo'ladi",
        "var faqat konstruktorda beriladi",
        "Farqi yo'q"
      ],
      "e": "Dependency Injection (DI) orqali kiruvchi servislar konstruktorda readonly maydonlarga saqlanadi."
    },
    {
      "c": "cs11",
      "q": "Mavjud klassning asl kodini o'zgartirmasdan va undan meros olmasdan unga yangi metod qo'shish imkonini beruvchi C# xususiyati nima?",
      "a": "Extension Methods (statik klassda 'this' kalit so'zi bilan birinchi parametr)",
      "w": [
        "Partial Methods",
        "Virtual Methods",
        "Shadow Methods"
      ],
      "e": "LINQ metodlarining barchasi IEnumerable<T> uchun yozilgan Extension Method-lardir."
    },
    {
      "c": "cs12",
      "q": "ASP.NET Core-da Dependency Injection (DI) konteynerida servislarning 3 ta asosiy yashash muddati (Lifetime) qaysilar?",
      "a": "Transient (har safar yangi), Scoped (har bir HTTP so'rov uchun bitta), Singleton (butun dastur davomida bitta)",
      "w": [
        "Local, Global, Static",
        "Short, Medium, Long",
        "Request, Session, Cookie"
      ],
      "e": "DbContext odatda Scoped sifatida ro'yxatdan o'tkaziladi (AddScoped<AppDbContext>())."
    },
    {
      "c": "cs13",
      "q": "C# 9+ da 'init' aksessori (public string Id { get; init; }) nima vazifani bajaradi?",
      "a": "Xossaga faqat obyekt yaratilayotgan vaqtda (konstruktor yoki Object Initializer-da) qiymat berishga ruxsat berib, keyin uni o'zgarmas qiladi",
      "w": [
        "Xossani bazadan avtomatik o'qiydi",
        "Har safar o'qilganda 0 ga tenglaydi",
        "Faqat static klasslarda ishlaydi"
      ],
      "e": "init aksessori immutable (o'zgarmas) modellar yaratishni juda qulaylashtiradi."
    },
    {
      "c": "cs14",
      "q": "LINQ so'rovlari (masalan, var query = list.Where(x => x > 5);) qachon haqiqatan bajariladi (Deferred Execution)?",
      "a": "Faqat foreach orqali aylanganda yoki .ToList(), .ToArray(), .Count() chaqirilganda",
      "w": [
        "Where yozilgan qatorning o'zidayoq",
        "Dastur kompilyatsiya bo'layotganda",
        "Garbage Collector ishlaganda"
      ],
      "e": "Deferred Execution tufayli so'rovni bir necha qismga bo'lib yig'ish va oxirida bitta SQL so'rov sifatida yuborish mumkin."
    },
    {
      "c": "cs15",
      "q": "Entity Framework Core (EF Core) da ma'lumotlar bazasidan faqat o'qish (Read-Only) uchun ma'lumot olayotganda tezlikni oshiruvchi metod qaysi?",
      "a": ".AsNoTracking()",
      "w": [
        ".IgnoreChanges()",
        ".ReadOnlyMode()",
        ".FastFetch()"
      ],
      "e": "AsNoTracking() EF Core Change Tracker-ga obyektni kuzatmaslikni aytadi va xotira hamda CPU sarfini kamaytiradi."
    },
    {
      "c": "cs16",
      "q": "C# da 'string' va 'StringBuilder' orasidagi farq nima?",
      "a": "string o'zgarmas (har bir += yangi obyekt yaratadi); StringBuilder esa xotirada bitta buferni o'zgartirib ishlaydi",
      "w": [
        "string tezroq o'zgaradi",
        "StringBuilder faqat C++ da bor",
        "Ikkalasi bir xil"
      ],
      "e": "Sikl (loop) ichida ko'p matn birlashtirilganda System.Text.StringBuilder ishlatiladi."
    },
    {
      "c": "cs17",
      "q": "C# da bitta klass kodini bir nechta .cs fayllarga bo'lib yozish uchun qaysi kalit so'z ishlatiladi?",
      "a": "partial class",
      "w": [
        "split class",
        "shared class",
        "modular class"
      ],
      "e": "Kompilyator barcha partial class qismlarini bitta yaxlit klassga birlashtiradi."
    },
    {
      "c": "cs18",
      "q": "C# da 'sealed' kalit so'zi klass oldidan yozilsa nimani bildiradi?",
      "a": "Ushbu klassdan boshqa hech qaysi klass meros (inheritance) ola olmaydi",
      "w": [
        "Klassdan obyekt yaratib bo'lmaydi",
        "Klass faqat interfeys bo'ladi",
        "Klass xotiradan o'chmaydi"
      ],
      "e": "sealed klasslar merosxo'rlikni yopadi va JIT kompilyatorga virtual chaqiruvlarni optimallashtirish imkonini beradi."
    },
    {
      "c": "cs19",
      "q": "Value Type o'zgaruvchiga (masalan, int yoki DateTime) null qiymat ham berish mumkin bo'lishi uchun u qanday e'lon qilinadi?",
      "a": "int? yoki Nullable<int> (masalan: DateTime? birthDate = null;)",
      "w": [
        "null int",
        "optional int",
        "ref int"
      ],
      "e": "Nullable<T> (T?) strukturasi HasValue va Value xossalariga ega."
    },
    {
      "c": "cs20",
      "q": ".NET-da C# kodi kompilyatsiya qilinganda dastlab qanday oraliq tilga o'giriladi?",
      "a": "CIL / MSIL (Common Intermediate Language)",
      "w": [
        "JVM Bytecode",
        "WebAssembly",
        "Python PVM"
      ],
      "e": "Roslyn kompilyatori C# kodini CIL-ga o'giradi, CLR ichidagi JIT kompilyator esa uni mashina kodiga aylantiradi."
    },
    {
      "c": "cs21",
      "q": "ASP.NET Core ilovasida HTTP so'rov va javob oqimini ketma-ket qayta ishlovchi quvur (pipeline) komponentlari nima deb ataladi?",
      "a": "Middleware (app.UseRouting(), app.UseAuthentication(), app.UseAuthorization())",
      "w": [
        "Triggers",
        "Applets",
        "Shaders"
      ],
      "e": "Middleware komponentlari HTTP kontekstni zanjir bo'ylab tekshiradi va keyingi qatlamga uzatadi."
    },
    {
      "c": "cs22",
      "q": "C# da 'is' va 'as' operatorlari qanday vazifani bajaradi?",
      "a": "'is' tip mosligini tekshiradi (va Pattern Matching qiladi); 'as' esa tipga o'tkazadi, o'xshamasa Exception bermay null qaytaradi",
      "w": [
        "Ikkalasi ham arifmetik amal",
        "'as' faqat int uchun ishlaydi",
        "'is' obyektni o'chiradi"
      ],
      "e": "if (obj is Student s) { ... } zamonaviy C# Pattern Matching sintaksisidir."
    },
    {
      "c": "cs23",
      "q": "EF Core-da 'IEnumerable<T>' va 'IQueryable<T>' orasidagi eng muhim farq nima?",
      "a": "IQueryable<T> filtrni SQL so'roviga aylantirib bazaning o'zida bajaradi; IEnumerable<T> esa ma'lumotni xotiraga tortib kelib keyin filtrlaydi",
      "w": [
        "IEnumerable bazada ishlaydi",
        "IQueryable faqat massivlar uchun",
        "Farqi yo'q"
      ],
      "e": "Katta jadvallarni filtrlashda doimo IQueryable<T> ishlatib, bazada filtrlash shart."
    },
    {
      "c": "cs24",
      "q": "C# da 'internal' ko'rinish modifikatori bilan belgilangan klass qayerga ko'rinadi?",
      "a": "Faqat o'zi joylashgan Assembly (.dll yoki .exe loyiha) ichidagina ko'rinadi",
      "w": [
        "Faqat o'z fayli ichida",
        "Barcha tashqi kutubxonalarga",
        "Faqat voris klasslarga"
      ],
      "e": "C# da top-level klasslar uchun standart modifikator internal hisoblanadi."
    },
    {
      "c": "cs25",
      "q": "C# 9+ da 'record' tipi oddiy 'class' dan eng avvalo qaysi xususiyati bilan farq qiladi?",
      "a": "Qiymat bo'yicha tenglik (Value-based equality: barcha maydonlari bir xil bo'lsa r1 == r2 true beradi) va 'with' ifodasi",
      "w": [
        "record faqat Stack-da yashaydi",
        "record-da xossa bo'lmaydi",
        "record-dan meros olib bo'lmaydi"
      ],
      "e": "record DTO va o'zgarmas (immutable) ma'lumot modellari uchun maxsus yaratilgan."
    },
    {
      "c": "cs26",
      "q": "C# da xotirani ajratmasdan massiv yoki satrning bir qismiga yuqori tezlikda murojaat qilish imkonini beruvchi Stack-only struktura qaysi?",
      "a": "Span<T> va ReadOnlySpan<T>",
      "w": [
        "ArrayList",
        "LinkedList<T>",
        "ObservableCollection<T>"
      ],
      "e": "Span<T> qo'shimcha Heap allokatsiyasisiz xotira kesimlari bilan ishlash imkonini beradi."
    },
    {
      "c": "cs27",
      "q": "Ko'p oqimli muhitda Dictionary<TKey, TValue> ga bir vaqtda xavfsiz yozish va o'qish uchun System.Collections.Concurrent dagi qaysi klass ishlatiladi?",
      "a": "ConcurrentDictionary<TKey, TValue>",
      "w": [
        "Hashtable",
        "SortedList",
        "KeyedCollection"
      ],
      "e": "ConcurrentDictionary oqimlararo xavfsiz (thread-safe) atomar operatsiyalarni (TryAdd, GetOrAdd) taqdim etadi."
    },
    {
      "c": "cs28",
      "q": "C# da istisno (Exception) ni qayta uloqtirishda Call Stack (xatolik izi) yo'qolib qolmasligi uchun catch blokida qanday yozish kerak?",
      "a": "throw; (throw ex; EMAS!)",
      "w": [
        "throw ex;",
        "raise ex;",
        "return ex;"
      ],
      "e": "throw; asl stack trace-ni saqlab qoladi; throw ex; esa stack trace-ni joriy qatordan qayta boshlab yuboradi."
    },
    {
      "c": "cs29",
      "q": "C# da o'zgaruvchining yoki xossaning nomini qattiq satr (\"UserId\") sifatida yozmasdan, refactoring-ga chidamli tarzda olish operatori qaysi?",
      "a": "nameof(user.UserId)",
      "w": [
        "typeof(user.UserId)",
        "sizeof(UserId)",
        "stringof(UserId)"
      ],
      "e": "nameof() kompilyatsiya vaqtida identifikator nomini satr sifatida qaytaradi."
    },
    {
      "c": "cs30",
      "q": ".NET Garbage Collector-da Heap xotira obyektlar yashash davomiyligiga qarab nechta avlodga (Generations) bo'linadi?",
      "a": "3 ta avlodga: Generation 0 (qisqa umrli), Generation 1 (bufer), Generation 2 (uzoq umrli) + LOH",
      "w": [
        "Faqat 1 ta umumiy qismga",
        "10 ta avlodga",
        "Stack va Queue ga"
      ],
      "e": "Gen 0 eng tez-tez tozalanadi, uzoq yashagan obyektlar Gen 1 va Gen 2 ga o'tkaziladi."
    }
  ],
  "php": [
    {
      "c": "php1",
      "q": "PHP-da MySQL/PostgreSQL bazasiga so'rov yuborishda SQL Injection hujumlaridan 100% himoyalanishning oltin standarti qaysi?",
      "a": "PDO Prepared Statements ($stmt = $pdo->prepare('SELECT * FROM users WHERE id = :id'))",
      "w": [
        "addslashes($_GET['id'])",
        "mysql_query(\"SELECT * FROM users WHERE id = $id\")",
        "htmlspecialchars($sql)"
      ],
      "e": "Prepared Statements SQL so'rov strukturasi bilan foydalanuvchi ma'lumotini alohida-alohida uzatadi."
    },
    {
      "c": "php2",
      "q": "Foydalanuvchi parollarini ma'lumotlar bazasida xavfsiz xeshlab saqlash va tekshirish uchun PHP-ning qaysi standart funksiyalari ishlatiladi?",
      "a": "password_hash($pass, PASSWORD_DEFAULT) va password_verify($pass, $hash)",
      "w": [
        "md5($pass) va sha1($pass)",
        "base64_encode($pass)",
        "crypt_simple($pass)"
      ],
      "e": "password_hash() avtomatik tuz (salt) bilan Bcrypt/Argon2 algoritmidan foydalanadi."
    },
    {
      "c": "php3",
      "q": "PHP-da include, require, include_once va require_once orasidagi asosiy farq nima?",
      "a": "require fayl topilmasa Fatal Error (E_COMPILE_ERROR) berib skriptni to'xtatadi; include esa Warning berib davom etadi",
      "w": [
        "include skriptni to'xtatadi",
        "require faqat HTML fayllar uchun",
        "Farqi yo'q"
      ],
      "e": "Muhim konfiguratsiya va klasslar uchun doim require_once yoki Composer autoloader ishlatiladi."
    },
    {
      "c": "php4",
      "q": "PHP loyihalarida kutubxonalarni (paketlar) boshqarish va PSR-4 standartida klasslarni avtomatik yuklash (autoloading) vositasi qaysi?",
      "a": "Composer (composer.json va vendor/autoload.php)",
      "w": [
        "NPM",
        "Pip",
        "Maven"
      ],
      "e": "Composer PHP ekotizimining standart paket menejeri hisoblanadi."
    },
    {
      "c": "php5",
      "q": "PHP faylining eng birinchi qatorida `declare(strict_types=1);` yozish nimani o'zgartiradi?",
      "a": "Funksiya parametrlariga va qaytarish tiplariga noto'g'ri tip uzatilganda yashirin konvertatsiya qilmasdan TypeError chiqaradi",
      "w": [
        "O'zgaruvchilardagi $ belgisini olib tashlaydi",
        "Faqat OOP kodga ruxsat beradi",
        "Keshni tozalaydi"
      ],
      "e": "strict_types=1 qat'iy tip tekshiruvini yoqib, kutilmagan tip xatolarining oldini oladi."
    },
    {
      "c": "php6",
      "q": "PHP 8.0 da kiritilgan `match ($status) { ... }` ifodasi eski `switch ($status)` operatoridan qaysi jihatlari bilan ustun?",
      "a": "match qat'iy (===) solishtiradi, break talab qilmaydi va bevosita qiymat qaytaradi",
      "w": [
        "match faqat matnlar bilan ishlaydi",
        "match ichida default bo'lmaydi",
        "switch === bilan solishtiradi"
      ],
      "e": "match ifodasi fall-through xatolarini bartaraf etadi va === qat'iy tenglikda ishlaydi."
    },
    {
      "c": "php7",
      "q": "PHP-da XSS (Cross-Site Scripting) hujumidan himoyalanish uchun foydalanuvchi kiritgan matnni HTML sahifaga chiqarishdan oldin qaysi funksiya bilan tozalanadi?",
      "a": "htmlspecialchars($text, ENT_QUOTES, 'UTF-8')",
      "w": [
        "strip_slashes($text)",
        "trim($text)",
        "urlencode($text)"
      ],
      "e": "htmlspecialchars() <, >, \", ', & belgilarini xavfsiz HTML entitylarga (&lt;, &gt;) aylantiradi."
    },
    {
      "c": "php8",
      "q": "PHP OOP-da bitta klass faqat bitta ota klassdan meros (extends) olganda, bir nechta klasslar orasida metodlarni qayta ishlatish mexanizmi nima?",
      "a": "Trait (trait LoggerTrait { ... } -> use LoggerTrait;)",
      "w": [
        "Multiple Extends",
        "Struct",
        "Mixin Class"
      ],
      "e": "Trait gorizontal kod qayta ishlatilishini (code reuse) ta'minlaydi."
    },
    {
      "c": "php9",
      "q": "PHP-da `self::` va `static::` (Late Static Binding) orasidagi farq nimada?",
      "a": "`self::` metod e'lon qilingan joriy klassga, `static::` esa ish vaqtida metod chaqirilgan voris (child) klassga murojaat qiladi",
      "w": [
        "Ikkalasi bir xil",
        "static:: faqat o'zgaruvchilar uchun",
        "self:: faqat interfeyslarda ishlaydi"
      ],
      "e": "Late Static Binding (`static::`) merosxo'rlikda voris klassning qayta aniqlangan statik metod/xossasini oladi."
    },
    {
      "c": "php10",
      "q": "PHP-da foydalanuvchi sessiyasini (`$_SESSION`) ishlatishdan oldin qaysi funksiya chaqirilishi shart?",
      "a": "session_start()",
      "w": [
        "session_init()",
        "start_cookie()",
        "open_session()"
      ],
      "e": "session_start() sessiya identifikatorini yaratadi yoki mavjud sessiya ma'lumotlarini yuklaydi."
    },
    {
      "c": "php11",
      "q": "PHP 8.0 Constructor Property Promotion xususiyati qanday yoziladi?",
      "a": "public function __construct(private string $name, public int $age = 18) {}",
      "w": [
        "function init($name, $age)",
        "constructor($this->name)",
        "new Property($name)"
      ],
      "e": "Konstruktor parametrida public/protected/private ko'rsatilsa, PHP maydonni avtomatik e'lon qiladi va qiymat beradi."
    },
    {
      "c": "php12",
      "q": "Massivning har bir elementiga anonim funksiya qo'llab yangi massiv qaytaruvchi va massivni shart bo'yicha saralovchi PHP funksiyalari qaysi?",
      "a": "array_map($fn, $arr) va array_filter($arr, $fn)",
      "w": [
        "array_walk() va array_pop()",
        "explode() va implode()",
        "in_array() va array_search()"
      ],
      "e": "array_map transformatsiya qiladi, array_filter esa shartga mos elementlarni qoldiradi."
    },
    {
      "c": "php13",
      "q": "PHP-da JSON satrni assotsiativ massivga (associative array) aylantirish uchun json_decode() funksiyasiga qanday parametr beriladi?",
      "a": "json_decode($jsonString, true)",
      "w": [
        "json_decode($jsonString, false)",
        "json_parse($jsonString)",
        "json_encode($jsonString)"
      ],
      "e": "Ikkinchi parametr true berilsa stdClass obyekti o'rniga assotsiativ massiv qaytadi."
    },
    {
      "c": "php14",
      "q": "PHP-da mavjud bo'lmagan obyekt metodiga murojaat qilinganda avtomatik ishga tushuvchi 'sehrli metod' (Magic Method) qaysi?",
      "a": "__call($name, $arguments)",
      "w": [
        "__get($name)",
        "__invoke()",
        "__toString()"
      ],
      "e": "__call() dinamik metod chaqiruvlarini tutib oladi (masalan, Laravel Eloquent-da keng qo'llaniladi)."
    },
    {
      "c": "php15",
      "q": "Foydalanuvchi tomonidan serverga yuklangan fayllar haqidagi ma'lumot (tmp_name, name, size, error) qaysi superglobal massivda bo'ladi?",
      "a": "$_FILES (va xavfsiz ko'chirish uchun move_uploaded_file() ishlatiladi)",
      "w": [
        "$_POST['files']",
        "$_SERVER['UPLOAD']",
        "$_ENV['FILE']"
      ],
      "e": "Yuklangan faylni vaqtinchalik papkadan saqlash joyiga o'tkazishda move_uploaded_file() tekshirib ko'chiradi."
    },
    {
      "c": "php16",
      "q": "Laravel freymvorkida N+1 SQL so'rov muammosini hal qilish uchun bog'langan modellarni oldindan bitta so'rovda yuklash (Eager Loading) metodi qaysi?",
      "a": "User::with('posts')->get()",
      "w": [
        "User::all()->loadLater()",
        "User::joinAll()",
        "User::lazy('posts')"
      ],
      "e": "with() metodi bog'langan jadvalni IN (...) so'rovi bilan atigi 2 ta SQL so'rovda yuklab oladi."
    },
    {
      "c": "php17",
      "q": "PHP 7.4+ da qisqa bir qatorli strelkali funksiya (`fn($x) => $x * $factor`) oddiy `function($x) use ($factor)` dan nimasi bilan farq qiladi?",
      "a": "fn() tashqi o'zgaruvchilarni ($factor) 'use' yozmasdan avtomatik ravishda qiymat bo'yicha (by-value) ko'ra oladi",
      "w": [
        "fn() ichida parametr bo'lmaydi",
        "fn() faqat klass ichida ishlaydi",
        "Farqi yo'q"
      ],
      "e": "Arrow functions (fn) tashqi scope o'zgaruvchilarini avtomatik capture qiladi."
    },
    {
      "c": "php18",
      "q": "PHP skriptlarining har safar qayta-qayta tahlil qilinmasdan, kompilyatsiya qilingan baytkodini operativ xotirada (RAM) saqlovchi standart kengaytma qaysi?",
      "a": "OPcache ( va PHP 8 JIT — Just-In-Time Compiler)",
      "w": [
        "Memcached",
        "cURL",
        "GD Library"
      ],
      "e": "OPcache PHP baytkodini xotirada keshlab, server javob tezligini bir necha barobar oshiradi."
    },
    {
      "c": "php19",
      "q": "PHP-da `isset($x)` va `empty($x)` funksiyalari orasidagi farq nima?",
      "a": "isset() o'zgaruvchi mavjud va null emasligini tekshiradi ('0' va false da ham true beradi); empty() esa '', 0, '0', null, false, [] larning barchasida true beradi",
      "w": [
        "Ikkalasi bir xil",
        "isset(null) true qaytaradi",
        "empty(0) false qaytaradi"
      ],
      "e": "0 soni yoki '0' satri kiritilganda empty() uni bo'sh deb hisoblaydi, isset() esa mavjud deb qabul qiladi."
    },
    {
      "c": "php20",
      "q": "PHP 8.1+ da cheklangan o'zgarmas qiymatlar to'plamini (masalan, Status::Active, Status::Pending) yaratish uchun qaysi tuzilma qo'shildi?",
      "a": "enum (Backed yoki Pure Enum: enum Status: string { case Active = 'active'; })",
      "w": [
        "var array",
        "tuple",
        "record"
      ],
      "e": "PHP 8.1 Enum-lari metodlar va interfeyslarni ham qo'llab-quvvatlaydi."
    },
    {
      "c": "php21",
      "q": "Web-formalarda foydalanuvchi nomidan boshqa sayt orqali soxta so'rov yuborish hujumi (CSRF) dan himoyalanish uchun nima ishlatiladi?",
      "a": "CSRF Token (har bir sessiya/forma uchun maxfiy tasodifiy token yaratib, POST so'rovda tekshirish)",
      "w": [
        "Faqat GET so'rov ishlatish",
        "IP manzilni ekranga chiqarish",
        "CSS-da formani yashirish"
      ],
      "e": "CSRF token so'rov aynan sizning saytingizdagi formadan yuborilganini tasdiqlaydi."
    },
    {
      "c": "php22",
      "q": "PHP-da obyektga funksiya kabi `$obj()` ko'rinishida murojaat qilinganda qaysi magic metod ishga tushadi?",
      "a": "__invoke()",
      "w": [
        "__call()",
        "__construct()",
        "__clone()"
      ],
      "e": "__invoke() metodi obyektni Callable (chaqiriluvchi funksiya) sifatida ishlatish imkonini beradi."
    },
    {
      "c": "php23",
      "q": "Assotsiativ massivda `'key' => null` element mavjud bo'lganda `isset($arr['key'])` va `array_key_exists('key', $arr)` nima qaytaradi?",
      "a": "isset() — false qaytaradi; array_key_exists() esa true qaytaradi (chunki kalitning o'zi massivda bor)",
      "w": [
        "Ikkalasi ham true qaytaradi",
        "Ikkalasi ham false qaytaradi",
        "Xatolik beradi"
      ],
      "e": "Qiymati null bo'lgan kalit borligini aniqlash uchun array_key_exists() ishlatiladi."
    },
    {
      "c": "php24",
      "q": "PHP 8.1+ da butun klass yoki xossani initsializatsiyadan so'ng umuman o'zgartirib bo'lmaydigan qilish uchun qaysi kalit so'z qo'shildi?",
      "a": "readonly (masalan: public readonly string $id; yoki readonly class DTO)",
      "w": [
        "immutable",
        "frozen",
        "locked"
      ],
      "e": "readonly xossalar faqat bir marta qiymat oladi va tashqaridan o'zgartirilmaydi."
    },
    {
      "c": "php25",
      "q": "Katta hajmli CSV faylni (masalan, 2 GB) xotirani (memory_limit) to'ldirib qo'ymasdan qator-ba-qator o'qib qayta ishlash uchun PHP-da nima ishlatiladi?",
      "a": "Generator (`yield` kalit so'zi bilan)",
      "w": [
        "file_get_contents() bilan barchasini massivga olish",
        "file() funksiyasi",
        "json_encode()"
      ],
      "e": "Generator xotirada bir vaqtda faqat bitta qatorni ushlab turadi."
    },
    {
      "c": "php26",
      "q": "PHP-da HTTP javob sarlavhasini (masalan, `header('Location: /login')` yoki `header('Content-Type: application/json')`) qachon yuborish shart?",
      "a": "Brauzerga har qanday HTML yoki echo/bo'sh joy chiqarilishidan OLDIN",
      "w": [
        "Sahifa eng oxirida </html> dan keyin",
        "Faqat fayl yopilgandan keyin",
        "Istalgan joyda"
      ],
      "e": "Output boshlangandan keyin header() chaqirilsa 'Headers already sent' xatosi yuz beradi."
    },
    {
      "c": "php27",
      "q": "PHP-da ikki qiymatni solishtirib -1 (kichik), 0 (teng) yoki 1 (katta) qaytaruvchi 'Spaceship operator' (Fazoviy kema operatori) qaysi?",
      "a": "<=> (masalan: usort($arr, fn($a, $b) => $a['score'] <=> $b['score']))",
      "w": [
        "<==>",
        "===!",
        "??="
      ],
      "e": "<=> operatori saralash funksiyalarini (usort) juda qisqa yozishga yordam beradi."
    },
    {
      "c": "php28",
      "q": "PHP 8.0 da funksiya parametriga bir nechta ruxsat etilgan tiplarni (masalan, int yoki float) ko'rsatish sintaksisi (Union Types) qanday?",
      "a": "function calculate(int|float $price): int|float",
      "w": [
        "function calculate(int or float $price)",
        "function calculate([int, float] $price)",
        "function calculate(number $price)"
      ],
      "e": "Union Types (T1|T2) parametr yoki natija bir nechta aniq tiplardan biri bo'lishini belgilaydi."
    },
    {
      "c": "php29",
      "q": "Laravel-da ma'lumotlar bazasi jadvallari strukturasini kod orqali versiyalab yaratish va o'zgartirish mexanizmi nima deb ataladi?",
      "a": "Migrations (php artisan make:migration / php artisan migrate)",
      "w": [
        "Seeders",
        "Middlewares",
        "Observers"
      ],
      "e": "Migratsiyalar jamoaviy ishda baza sxemasini Git orqali sinxron boshqarish imkonini beradi."
    },
    {
      "c": "php30",
      "q": "PHP-da `$a ??= 'default';` (Null Coalescing Assignment) operatori nimani anglatadi?",
      "a": "Agar $a o'zgaruvchisi mavjud bo'lmasa yoki null bo'lsa, unga 'default' qiymatini tayinlaydi",
      "w": [
        "$a ni har doim null ga tenglaydi",
        "$a va 'default' ni solishtiradi",
        "Sintaktik xato"
      ],
      "e": "$a ??= 'val' ifodasi $a = $a ?? 'val' ning qisqartirilgan shaklidir."
    }
  ],
  "telecom-networks": [
    {
      "c": "tc1",
      "q": "OSI etalon modelining 1, 2 va 3-pog'onalari (pastdan yuqoriga) qaysi qatorda to'g'ri ko'rsatilgan?",
      "a": "L1: Fizik (Physical), L2: Kanal (Data Link), L3: Tarmoq (Network)",
      "w": [
        "L1: Tarmoq, L2: Transport, L3: Seans",
        "L1: Ilova, L2: Taqdimot, L3: Fizik",
        "L1: Kanal, L2: IP, L3: TCP"
      ],
      "e": "OSI modelida L1 — bit/kabel/SFP, L2 — Frame/MAC/VLAN (Switch), L3 — Paket/IP (Router/L3 Switch)."
    },
    {
      "c": "tc2",
      "q": "L2 Switch va L3 Switch orasidagi eng asosiy arxitekturaviy farq nimada?",
      "a": "L2 Switch MAC-manzillar jadvali bo'yicha kommutatsiya qiladi, L3 Switch esa qo'shimcha ravishda IP paketlarni apparat (ASIC) darajasida VLANlararo marshrutlaydi",
      "w": [
        "L2 Switch faqat optik kabelda ishlaydi, L3 Switch faqat Wi-Fi da ishlaydi",
        "L2 Switchda RJ-45 port bo'lmaydi",
        "L3 Switchda MAC manzil ishlatilmaydi"
      ],
      "e": "L3 Switch ichida ASIC mikrosxemasi orqali Inter-VLAN Routing va OSPF kabi L3 funksiyalar ishlaydi."
    },
    {
      "c": "tc3",
      "q": "IP kameralar, IP telefonlar va Wi-Fi nuqtalarni bitta UTP Cat5e/Cat6 kabeli orqali ham tarmoq, ham 48V elektr quvvati bilan ta'minlovchi standart qaysi?",
      "a": "IEEE 802.3af (PoE 15.4W) va IEEE 802.3at (PoE+ 30W)",
      "w": [
        "IEEE 802.11ax",
        "IEEE 802.1Q",
        "RS-485 Modbus"
      ],
      "e": "Power over Ethernet (802.3af/at/bt) alohida elektr kabeli tortmasdan qurilmani ishga tushiradi."
    },
    {
      "c": "tc4",
      "q": "Standart SFP va SFP+ optik transiver modullarining ma'lumot uzatish tezligi qanday?",
      "a": "SFP — 1 Gbps gacha, SFP+ — 10 Gbps gacha (QSFP28 esa 100 Gbps)",
      "w": [
        "SFP — 10 Mbps, SFP+ — 100 Mbps",
        "Ikkalasi ham faqat 100 Mbps",
        "SFP faqat koaksial kabel uchun"
      ],
      "e": "SFP 1 Gigabit Ethernet uchun, SFP+ esa 10 Gigabit Ethernet uplinklari uchun mo'ljallangan."
    },
    {
      "c": "tc5",
      "q": "Uzoq masofalarga (2 km dan 120 km gacha) 1310nm / 1550nm to'lqin uzunligida signal uzatuvchi sariq rangli optik tola turi qaysi?",
      "a": "Single-Mode (Bir modali OS2, 9/125 mkm)",
      "w": [
        "Multi-Mode (Ko'p modali OM3, 50/125 mkm)",
        "UTP Cat5e mis kabel",
        "RG-6 Koaksial kabel"
      ],
      "e": "Single-Mode optik tola (9/125 µm) dispersiyasi juda past bo'lgani uchun shaharlararo va magistrallarda ishlatiladi."
    },
    {
      "c": "tc6",
      "q": "Har xil brenddagi IP kameralarni (masalan, Hikvision, Dahua, Axis) NVR videoregistratoriga ulash va video oqimni olish uchun qaysi xalqaro protokollar ishlatiladi?",
      "a": "ONVIF va RTSP (Real-Time Streaming Protocol, 554-port)",
      "w": [
        "SMTP va POP3",
        "FTP va Telnet",
        "BGP va EIGRP"
      ],
      "e": "ONVIF qurilmalar mosligini, RTSP esa real vaqtda video oqimini uzatishni ta'minlaydi."
    },
    {
      "c": "tc7",
      "q": "IEEE 802.11ax (2.4/5/6 GHz, OFDMA) va IEEE 802.11be (320 MHz, MLO) standartlari qaysi Wi-Fi avlodlariga mos keladi?",
      "a": "802.11ax — Wi-Fi 6 / 6E, 802.11be — Wi-Fi 7",
      "w": [
        "802.11ax — Wi-Fi 2, 802.11be — Wi-Fi 3",
        "802.11ax — Bluetooth 5, 802.11be — ZigBee",
        "Ikkalasi ham Wi-Fi 4"
      ],
      "e": "Wi-Fi Alliance nomlanishiga ko'ra: 802.11n = Wi-Fi 4, 802.11ac = Wi-Fi 5, 802.11ax = Wi-Fi 6/6E, 802.11be = Wi-Fi 7."
    },
    {
      "c": "tc8",
      "q": "Standart Gigabit Ethernet (1000BASE-T) Cat6 LAN kabelida RJ-45 konnektoridagi nechta sim tolasidan foydalaniladi?",
      "a": "Barcha 8 ta tola (4 juftlik: 1-2, 3-6, 4-5, 7-8)",
      "w": [
        "Faqat 2 ta tola",
        "Faqat 4 ta tola (1, 2, 3, 6)",
        "Faqat 1 ta markaziy mis sim"
      ],
      "e": "100BASE-TX da 4 ta sim yetarli bo'lsa, 1000BASE-T (Gigabit) va PoE uchun barcha 8 ta sim ishlatiladi."
    },
    {
      "c": "tc9",
      "q": "IP telefon orqasidagi 2 ta RJ-45 port (LAN va PC) bitta tarmoq kabeli orqali qanday qilib ham telefonni, ham kompyuterni alohida tarmoqda ishlatadi?",
      "a": "802.1Q VLAN Tagging orqali: ovoz paketi Voice VLAN da, kompyuter trafigi esa Data/Access VLAN da uzatiladi",
      "w": [
        "Kompyuter internetini o'chirib qo'yadi",
        "Faqat analog impuls orqali",
        "Wi-Fi ni o'chirib Bluetooth yoqadi"
      ],
      "e": "Switch portida Voice VLAN sozlanganda, IP telefon o'zining ichki mini-switchi orqali PC trafigini ajratib beradi."
    },
    {
      "c": "tc10",
      "q": "Zamonaviy kompyuterga Windows 11 yoki Ubuntu Linux operatsion tizimini UEFI rejimida o'rnatish uchun SSD/NVMe disk qaysi bo'limlar jadvalida bo'lishi shart?",
      "a": "GPT (GUID Partition Table)",
      "w": [
        "FAT16",
        "MBR (Legacy BIOS)",
        "EXT2"
      ],
      "e": "UEFI yuklanishi va 2 TB dan katta disklarni to'liq ko'rish uchun GPT talab etiladi."
    },
    {
      "c": "tc11",
      "q": "192.168.10.0/24 IPv4 tarmog'ida subnet maskasi qanday yoziladi va nechta foydali host (qurilma) manzili mavjud?",
      "a": "Maska: 255.255.255.0 — jami 254 ta foydali host (192.168.10.1 dan 192.168.10.254 gacha)",
      "w": [
        "Maska: 255.0.0.0 — 10 ta host",
        "Maska: 255.255.255.252 — 2 ta host",
        "Maska: 255.255.0.0 — 100 ta host"
      ],
      "e": "/24 maskada 8 bit host uchun qoladi: 2^8 - 2 = 254 ta foydali manzil (.0 tarmoq, .255 broadcast)."
    },
    {
      "c": "tc12",
      "q": "Ikkita Router orasida 'Point-to-Point' (nuqtadan-nuqtaga) ulanish uchun IP manzillarni isrof qilmaydigan eng optimal subnet prefiksi qaysi?",
      "a": "/30 (255.255.255.252 — aynan 2 ta foydali IP manzil beradi)",
      "w": [
        "/8 (16 million IP)",
        "/16 (65 ming IP)",
        "/24 (254 ta IP)"
      ],
      "e": "/30 tarmoqda 2^2 - 2 = 2 ta foydali IP bo'lib, ikkita router interfeysi uchun ideal hisoblanadi."
    },
    {
      "c": "tc13",
      "q": "L2 Switchlar orasida zaxira kabellar ulanganda yuzaga keladigan halqasimon bo'ronning (Broadcast Storm / Loop) oldini oluvchi protokol qaysi?",
      "a": "STP / RSTP (Spanning Tree Protocol — IEEE 802.1D / 802.1w)",
      "w": [
        "DHCP",
        "FTP",
        "NTP"
      ],
      "e": "STP halqa hosil qilgan ortiqcha portni mantiqan bloklab, asosiy liniya uzilsagina uni avtomatik yoqadi."
    },
    {
      "c": "tc14",
      "q": "Ikkita Switch orasidagi o'tkazuvchanlikni oshirish va zaxiralash uchun 2 yoki 4 ta fizik portni bitta mantiqiy kanalga birlashtiruvchi protokol nima?",
      "a": "LACP (Link Aggregation Control Protocol — IEEE 802.3ad / EtherChannel)",
      "w": [
        "NAT",
        "ICMP",
        "ARP"
      ],
      "e": "LACP bir nechta fizik portlarni yagona yuqori tezlikdagi mantiqiy kanalga birlashtiradi."
    },
    {
      "c": "tc15",
      "q": "Ichki lokal tarmoqdagi xususiy IP manzillarni (masalan, 192.168.1.x) provayder bergan bitta tashqi (Public) IP manzil orqali Internetga chiqaruvchi texnologiya nima?",
      "a": "NAT / PAT (Network Address Translation / Port Address Translation)",
      "w": [
        "VLAN",
        "DNS",
        "SNMP"
      ],
      "e": "Routerdagi NAT/PAT (Masquerade) ichki IP manzillarni port raqamlari orqali bitta Public IP ga bog'laydi."
    },
    {
      "c": "tc16",
      "q": "Tarmoqqa yangi ulangan kompyuter yoki smartfonga IP manzil, Subnet Mask, Gateway va DNS ni avtomatik berishda DHCP qaysi 4 bosqichda ishlaydi?",
      "a": "DORA: Discover -> Offer -> Request -> Acknowledge",
      "w": [
        "SYN -> SYN-ACK -> ACK",
        "GET -> POST -> PUT -> DELETE",
        "PING -> PONG -> TRACE"
      ],
      "e": "DHCP mijozi Discover yuboradi, server Offer qiladi, mijoz Request so'raydi va server ACK bilan tasdiqlaydi."
    },
    {
      "c": "tc17",
      "q": "Ma'lum bir IP manzilga (masalan, 192.168.1.1) mos keluvchi fizik MAC manzilni lokal tarmoqda aniqlab beruvchi protokol qaysi?",
      "a": "ARP (Address Resolution Protocol)",
      "w": [
        "DNS",
        "BGP",
        "IMAP"
      ],
      "e": "ARP so'rovi Broadcast orqali yuborilib, kerakli IP egasining MAC manzilini aniqlaydi."
    },
    {
      "c": "tc18",
      "q": "GPON (Gigabit Passive Optical Network) texnologiyasida provayder stansiyasidagi markaziy qurilma va abonent uyidagi qurilma nima deb ataladi?",
      "a": "Provayderda: OLT (Optical Line Terminal), Abonentda: ONT / ONU (Optical Network Terminal)",
      "w": [
        "Provayderda: NVR, Abonentda: DVR",
        "Provayderda: Hub, Abonentda: Repeater",
        "Provayderda: FXS, Abonentda: FXO"
      ],
      "e": "OLT optik signalni passiv splitterlar (1:32 yoki 1:64) orqali abonentlardagi ONT/ONU modellariga tarqatadi."
    },
    {
      "c": "tc19",
      "q": "Bitta optik tola (1 core) orqali bir vaqtning o'zida ham uzatish (TX 1310nm), ham qabul qilish (RX 1550nm) imkonini beruvchi SFP modul turi qaysi?",
      "a": "BiDi SFP (Bi-Directional WDM SFP, juft bo'lib ishlaydi: A-tomon 1310/1550, B-tomon 1550/1310)",
      "w": [
        "RJ-45 Copper SFP",
        "Coaxial BNC Modul",
        "VGA Transceiver"
      ],
      "e": "BiDi WDM texnologiyasi tolalar sonini 2 barobar tejab, bitta tola orqali dupleks aloqa o'rnatadi."
    },
    {
      "c": "tc20",
      "q": "NVR videoregistratorlariga oddiy kompyuter HDD-si emas, balki maxsus 'Surveillance HDD' (WD Purple / Seagate SkyHawk) o'rnatilishining sababi nima?",
      "a": "24/7 uzluksiz yozish rejimiga, yuqori haroratga va bir vaqtda 32–64 ta kamera oqimini kadr yo'qotmasdan (AllFrame/ImagePerfect) yozishga mo'ljallangan",
      "w": [
        "Rangi chiroyli bo'lgani uchun",
        "Faqat 1 soat ishlagani uchun",
        "SATA porti bo'lmagani uchun"
      ],
      "e": "Surveillance disklar 24/7 rejimda 90% yozish va 10% o'qish yuklamasiga moslashtirilgan."
    },
    {
      "c": "tc21",
      "q": "UTP Cat5e/Cat6 mis LAN kabeli orqali standart Ethernet (1000BASE-T) signalini kuchaytirgichsiz (Switch/Repeatersiz) uzatishning maksimal standart masofasi qancha?",
      "a": "100 metr (90m magistral + 10m patch-kord)",
      "w": [
        "1000 metr",
        "15 metr",
        "50 kilometr"
      ],
      "e": "TIA/EIA-568 standartiga ko'ra mis o'rama juftlik kabelining maksimal segment uzunligi 100 metrdir."
    },
    {
      "c": "tc22",
      "q": "Korxona ichida dinamik marshrutlash uchun eng qisqa yo'lni Dijkstra algoritmi asosida hisoblovchi Link-State (ochiq standart) protokoli qaysi?",
      "a": "OSPF (Open Shortest Path First)",
      "w": [
        "RIPv1",
        "Telnet",
        "POP3"
      ],
      "e": "OSPF yirik korporativ tarmoqlarda tez konvergensiya beruvchi eng mashhur IGP marshrutlash protokolidir."
    },
    {
      "c": "tc23",
      "q": "Internet provayderlar (ISP) va global avtonom tizimlar (AS — Autonomous Systems) orasida marshrut almashuvchi yagona global protokol qaysi?",
      "a": "BGP (Border Gateway Protocol, TCP 179-port)",
      "w": [
        "DHCP",
        "ARP",
        "IGMP"
      ],
      "e": "BGP butun jahon Internet tarmog'ini bog'lab turuvchi Path-Vector marshrutlash protokolidir."
    },
    {
      "c": "tc24",
      "q": "SIM-kartali 4G LTE / 5G NR routerlarda binoning ichida signal past bo'lganda tashqariga o'rnatiladigan 2 ta antennali texnologiya va ulagich turi nima?",
      "a": "MIMO (Multiple-Input Multiple-Output) antenna — SMA / TS9 ulagichlari bilan",
      "w": [
        "HDMI ulagichi",
        "SATA kabeli",
        "VGA porti"
      ],
      "e": "2x2 yoki 4x4 MIMO tashqi yo'naltirilgan antennalar LTE/5G signal tezligi va barqarorligini keskin oshiradi."
    },
    {
      "c": "tc25",
      "q": "IP Telefoniya (VoIP) tizimida chaqiruvni o'rnatish (signalizatsiya) va ovoz oqimini real vaqtda uzatish uchun qaysi protokollar juftligi ishlatiladi?",
      "a": "SIP (Session Initiation Protocol, 5060-port) va RTP (Real-time Transport Protocol)",
      "w": [
        "HTTP va FTP",
        "SMTP va IMAP",
        "SSH va RDP"
      ],
      "e": "SIP qo'ng'iroqni boshqaradi (ulash/uzish), RTP esa kodlangan ovoz paketlarini (G.711/G.729/Opus) tashiydi."
    },
    {
      "c": "tc26",
      "q": "Server xonalarida (Data Center) bir nechta HDD/SSD disklarni birlashtirib, bitta disk kuyganda ham ma'lumot yo'qolmasligini ta'minlovchi texnologiya nima?",
      "a": "RAID massivlari (RAID 1 — ko'zgulash, RAID 5 / RAID 6 / RAID 10)",
      "w": [
        "RAID 0 (Stripe — zaxirasiz)",
        "FAT32 formatlash",
        "Defragmentatsiya"
      ],
      "e": "RAID 1, 5, 6, 10 disk ishdan chiqqanda server to'xtamasdan ishlashini (Fault Tolerance) ta'minlaydi."
    },
    {
      "c": "tc27",
      "q": "TCP va UDP transport (L4) protokollari orasidagi asosiy farq nima?",
      "a": "TCP ulanish o'rnatib (3-way handshake) paketlar yetib borishini kafolatlaydi; UDP esa tasdiqsiz, kechikishsiz (jonli video/ovoz/DNS uchun) tez uzatadi",
      "w": [
        "UDP sekinroq va kafolatli",
        "TCP video qo'ng'iroqlar uchun, UDP fayl yuklash uchun",
        "Farqi yo'q"
      ],
      "e": "Web/Fayl/Email uchun TCP, VoIP/RTSP/Online o'yinlar uchun UDP ishlatiladi."
    },
    {
      "c": "tc28",
      "q": "Tarmoqda ikki nuqta orasidagi aloqa borligini va kechikish vaqtini (ms) tekshiruvchi `ping` buyrug'i qaysi L3 protokoli asosida ishlaydi?",
      "a": "ICMP (Internet Control Message Protocol — Echo Request va Echo Reply)",
      "w": [
        "SNMP",
        "SMTP",
        "TFTP"
      ],
      "e": "ping utilitasi ICMP Echo Request yuborib, ICMP Echo Reply qaytish vaqtini (RTT) o'lchaydi."
    },
    {
      "c": "tc29",
      "q": "Optik tolali liniyada uzilish joyini (nechanchi metrda tola singanini) va payvandlash (svarka) so'nishini (dB) aniqlovchi maxsus asbob nima?",
      "a": "OTDR (Optical Time-Domain Reflectometer — Optik reflektometr)",
      "w": [
        "Multimetr",
        "Tonometr",
        "Ossillograf"
      ],
      "e": "OTDR optik impuls yuborib, qaytgan yorug'lik asosida tola uzunligi va uzilish nuqtasini aniqlaydi."
    },
    {
      "c": "tc30",
      "q": "IPv6 manzili necha bitdan iborat va u qanday formatda yoziladi?",
      "a": "128 bitdan iborat — 16-lik (hexadecimal) sanoq sistemasida ikki nuqta bilan ajratilgan 8 ta guruh (masalan, 2001:0db8:85a3::8a2e:0370:7334)",
      "w": [
        "32 bitdan iborat (4 ta oktet)",
        "48 bitdan iborat (MAC manzil)",
        "64 bitdan iborat (2-likda)"
      ],
      "e": "IPv4 32-bit bo'lsa, IPv6 128-bitli manzil makoniga ega."
    },
    {
      "c": "tc31",
      "q": "Kompyuterning anakartida (Motherboard) eng yuqori tezlikdagi NVMe SSD disklar va zamonaviy videokartalar qaysi shina interfeysiga ulanadi?",
      "a": "PCI Express (PCIe 4.0 / 5.0 va M.2 NVMe slot)",
      "w": [
        "IDE Parallel ATA",
        "PS/2 port",
        "LPT port"
      ],
      "e": "M.2 NVMe SSD-lar PCIe 4.0/5.0 liniyalari orqali 7000–14000 MB/s gacha tezlik beradi."
    },
    {
      "c": "tc32",
      "q": "Masofadagi ikkita ofis tarmog'ini ochiq Internet ustidan shifrlangan himoyalangan tunnel orqali birlashtiruvchi texnologiya nima?",
      "a": "Site-to-Site VPN (IPSec / WireGuard / OpenVPN)",
      "w": [
        "Ochiq Telnet",
        "Oddiy Hub",
        "Anonim FTP"
      ],
      "e": "IPSec va WireGuard VPN tunnellari paketlarni kuchli kriptografiya bilan shifrlab uzatadi."
    }
  ],
  "med-texnikum-courses": [
    {
      "c": "mt1",
      "q": "Med texnikum manipulyatsiya standartiga ko'ra: teri ichiga (i/d), teri ostiga (s/c) va muskul orasiga (i/m) inyeksiya qilish burchaklari necha gradus?",
      "a": "Teri ichiga 10-15°, teri ostiga 45°, muskul orasiga 90°",
      "w": [
        "Barchasi 30° burchak ostida",
        "Teri ichiga 90°, muskul orasiga 15°",
        "Teri ostiga 90°, vena ichiga 90°"
      ],
      "e": "Shprits ignasi qavat chuqurligiga qarab: i/d — 15°, s/c — 45°, i/m — 90° burchakda kiritiladi."
    },
    {
      "c": "mt2",
      "q": "Kattalarda bazaviy o'pka-yurak reanimatsiyasini (BLS) o'tkazishda ko'krak qafasini bosish va sun'iy nafas berish nisbati qanday?",
      "a": "30 marta bosish : 2 marta sun'iy nafas (100–120 marta/daq, chuqurlik 5–6 sm)",
      "w": [
        "5 marta bosish : 1 marta nafas",
        "15 marta bosish : 5 marta nafas",
        "60 marta bosish : 10 marta nafas"
      ],
      "e": "Xalqaro ERC/AHA protokoliga ko'ra 30:2 nisbatda bajariladi."
    },
    {
      "c": "mt3",
      "q": "Anafilaktik shok rivojlanganda birinchi qator shoshilinch tanlov dori vositasi sifatida qaysi preparat muskul orasiga yuboriladi?",
      "a": "Epinefrin (Adrenalin) 0.18% — 0.3–0.5 ml sonning old-tashqi yuzasiga muskul orasiga",
      "w": [
        "Paratsetamol tabletkasi",
        "Faollashtirilgan ko'mir",
        "Ko'z tomchisi"
      ],
      "e": "Adrenalin alfa va beta adrenoretseptorlarni qo'zg'atib, qon bosimini ko'taradi va bronxospazmni yechadi."
    },
    {
      "c": "mt4",
      "q": "Dumbaning qaysi kvadrantiga muskul orasiga (i/m) inyeksiya qilish qat'iyan qoida bo'yicha tanlanadi va nima uchun?",
      "a": "Yuqori-tashqi kvadrantiga — quymich nervini (n. ischiadicus) va yirik qon tomirlarni shikastlamaslik uchun",
      "w": [
        "Pastki-ichki kvadrantiga",
        "Markaziy nuqtasiga",
        "Pastki-tashqi kvadrantiga"
      ],
      "e": "Yuqori-tashqi kvadrantda yirik nerv tutamlari o'tmaydi."
    },
    {
      "c": "mt5",
      "q": "Avtoklavda bug' bosimi ostida jarrohlik asboblari va bog'lov materiallarini sterilizatsiya qilishning standart asosiy rejimi qanday?",
      "a": "2.0 atm bosimda 132°C da 20 daqiqa (rezina buyumlar uchun 1.1 atm, 120°C da 45 daqiqa)",
      "w": [
        "0.5 atm bosimda 60°C da 5 daqiqa",
        "10 atm bosimda 300°C da 1 daqiqa",
        "Xona haroratida 10 daqiqa"
      ],
      "e": "132°C va 2 atm bosimda bakteriyalarning vegetativ va spora shakllari to'liq nobud bo'ladi."
    },
    {
      "c": "mt6",
      "q": "Quruq issiq havo shkafida (Suxojar) metall va shisha tibbiy asboblarni sterilizatsiya qilish rejimi necha gradus va necha daqiqa?",
      "a": "180°C haroratda 60 daqiqa (yoki 160°C da 150 daqiqa)",
      "w": [
        "80°C da 10 daqiqa",
        "100°C da 15 daqiqa",
        "40°C da 30 daqiqa"
      ],
      "e": "Quruq issiqlik shkafida 180°C da 60 daqiqa standart rejim hisoblanadi."
    },
    {
      "c": "mt7",
      "q": "Tibbiyot muassasalarida chiqindilar xavflilik darajasiga ko'ra nechta sinfga bo'linadi va 'B' sinf (sariq paket/konteyner) qanday chiqindi?",
      "a": "5 sinfga (A, B, V, G, D); 'B' sinf — epidemiologik xavfli (qon va biologik suyuqlik tekkan) tibbiy chiqindilar",
      "w": [
        "Faqat qog'oz chiqindilar",
        "Radioaktiv chiqindilar",
        "Oshxona chiqindilari"
      ],
      "e": "A (oq) — xavfsiz, B (sariq) — xavfli infeksion, V (qizil) — o'ta xavfli, G (qora) — toksikologik, D — radioaktiv."
    },
    {
      "c": "mt8",
      "q": "Antibiotiklarga (masalan, Penitsillin / Seftriakson) shaxsiy sezuvchanlikni aniqlash uchun sinama (proba) terining qaysi qavatiga va qancha miqdorda qilinadi?",
      "a": "Bilakning ichki yuzasiga teri ichiga (i/d) 0.1 ml (10-15° burchakda 'limon po'stlog'i' hosil qilib), 20 daqiqadan so'ng baholanadi",
      "w": [
        "Muskul orasiga 5 ml",
        "Vena ichiga 10 ml",
        "Og'iz orqali 50 ml"
      ],
      "e": "Teri ichi sinamasi 20 daqiqa kuzatiladi; qizarish va shish >10 mm bo'lsa sinama musbat hisoblanadi."
    },
    {
      "c": "mt9",
      "q": "Arterial qon bosimini Korotkov usulida sfigmomanometr (tonometr) manjetasi bilan o'lchaganda manjeta yelkaning qayeriga taqiladi?",
      "a": "Tirsak bukilmasidan 2–2.5 sm yuqoriga, yurak sathida (orasiga 1 barmoq sig'adigan zichlikda)",
      "w": [
        "Bilak bo'g'imining ustiga",
        "Tirsak bo'g'imining aynan ustiga",
        "Kaft qismiga"
      ],
      "e": "Tonometr manjetasi yelka arteriyasi proyeksiyasiga, tirsak chuqurchasidan 2 sm yuqoriga o'rnatiladi."
    },
    {
      "c": "mt10",
      "q": "Yotoq yaralarining (Prolejni / Decubitus) oldini olish uchun og'ir yotgan bemorning tana holati har necha soatda o'zgartirib turilishi shart?",
      "a": "Har 2 soatda tana holatini o'zgartirish, choyshab burmalarini tekislash va teriga kamfora spirti bilan ishlov berish",
      "w": [
        "Haftada 1 marta",
        "Oyida 1 marta",
        "Umuman qimirlatmaslik kerak"
      ],
      "e": "Har 2 soatda pozitsiyani o'zgartirish to'qimalar ishemiyasi va nekrozining oldini oladi."
    },
    {
      "c": "mt11",
      "q": "Tibbiy etika va deontologiyada tibbiyot xodimining ehtiyotsiz so'zi yoki xatti-harakati tufayli bemorda paydo bo'ladigan ruhiy-somatik buzilish nima deyiladi?",
      "a": "Yatrogeniya (Yatrogen kasallik)",
      "w": [
        "Simulyatsiya",
        "Aggravatsiya",
        "Gomeostaz"
      ],
      "e": "Yatrogeniya — tibbiyot xodimining nojo'ya so'zi yoki harakati oqibatida kelib chiqadigan patologik holat."
    },
    {
      "c": "mt12",
      "q": "Vena ichiga (i/v) inyeksiya yoki tomchilab (kapelnitsa) dori yuborishdan oldin shprits va sistemadan havo pufakchalarini chiqarib tashlash nima uchun hayotiy muhim?",
      "a": "Havo emboliyasi (qon tomirlarining havo pufagi bilan tiqilib qolishi) oldini olish uchun",
      "w": [
        "Shprits rangi o'zgarmasligi uchun",
        "Igna qiyshaymasligi uchun",
        "Dori sovib qolmasligi uchun"
      ],
      "e": "Vena tomiriga havo kirishi o'pka arteriyasi havo emboliyasiga olib kelishi mumkin."
    },
    {
      "c": "mt13",
      "q": "Bemorning tana harorati 39.5°C ga ko'tarilganda haroratning turlari bo'yicha bu ko'rsatkich qaysi darajaga kiradi?",
      "a": "Piretik (yuqori) isitma (39.0°C – 40.9°C)",
      "w": [
        "Subfebril isitma (37.1–38.0°C)",
        "Febril (o'rtacha) isitma (38.1–39.0°C)",
        "Giperpiretik isitma (>41.0°C)"
      ],
      "e": "Isitma darajalari: 37–38°C subfebril, 38–39°C febril, 39–41°C piretik, 41°C dan yuqori giperpiretik."
    },
    {
      "c": "mt14",
      "q": "Oshqozonni yuvish (zondlash) muolajasida bemorning og'zidan oshqozonigacha kiritiladigan zond uzunligi qanday o'lchanadi?",
      "a": "Bemorning kurak tishlaridan kindikkacha bo'lgan masofaga kaft kengligi (10 sm) qo'shiladi",
      "w": [
        "Faqat peshonadan burungacha",
        "Bemorning bo'yi 2 ga ko'paytiriladi",
        "Har doim 15 sm"
      ],
      "e": "Kurak tishlardan kindikkacha + 10 sm (yoki bo'y uzunligidan 100 sm ayriladi) oshqozon tubigacha yetadi."
    },
    {
      "c": "mt15",
      "q": "Kattalarda tozalovchi huqna (klizma) qo'yish uchun Esmarx krujkasiga qancha hajmda va necha gradusli suv quyiladi?",
      "a": "1–1.5 litr hajmda, 20–25°C (xona haroratidagi) qaynatib ilitilgan suv, bemor chap yonboshga yotqiziladi",
      "w": [
        "10 litr muzdek suv",
        "50 ml qaynoq suv",
        "Faqat tik turgan holatda"
      ],
      "e": "Sigmasimon ichak chap tomonda joylashgani uchun bemor chap yonboshga yotqizilib, oyoqlari qoringa bukiladi."
    },
    {
      "c": "mt16",
      "q": "Insulin preparatlari qanday burchak ostida, tananing qaysi qismiga va qaysi qavatga yuboriladi?",
      "a": "Teri ostiga (s/c) 45° yoki 90° (qisqa ignada) — qorin old devori, yelka tashqi yuzasi yoki son old yuzasiga",
      "w": [
        "Teri ichiga 10° burchakda kaftga",
        "Orqa miya kanaliga",
        "Bo'g'im ichiga"
      ],
      "e": "Insulin teri osti yog' qavatiga yuboriladi; lipodistrofiya bo'lmasligi uchun inyeksiya joylari almashtirib turiladi."
    },
    {
      "c": "mt17",
      "q": "Kalsiy xlorid (CaCl₂ 10%) eritmasi vena ichiga yuborilayotganda tasodifan teri ostiga chiqib ketsa qanday og'ir asorat beradi va nima qilinadi?",
      "a": "To'qimalar nekrozi (kuyishi) yuzaga keladi; darhol to'xtatib, o'sha joyga 0.25–0.5% Novokain va 25% Magniy sulfat yuboriladi",
      "w": [
        "Hech qanday zarar qilmaydi",
        "Issiq grelka qo'yiladi",
        "Yod surtiladi"
      ],
      "e": "10% li Kalsiy xlorid faqat vena ichiga yuboriladi; teri ostiga tushsa kuchli nekroz chaqiradi."
    },
    {
      "c": "mt18",
      "q": "Katta yoshli sog'lom odamda tinch holatda 1 daqiqada nafas olish harakatlari soni (NOHS / ChDD) me'yorda nechta bo'ladi?",
      "a": "16–20 marta/daqiqa (20 dan ko'p bo'lsa — taxipnoe, 12 dan kam bo'lsa — bradipnoe)",
      "w": [
        "40–60 marta/daqiqa",
        "4–6 marta/daqiqa",
        "100 marta/daqiqa"
      ],
      "e": "Kattalarda normada nafas soni 16-20/min, yangi tug'ilgan chaqaloqlarda 40-60/min."
    },
    {
      "c": "mt19",
      "q": "Sterilizatsiyadan oldin asboblarda yashirin qon qoldiqlari qolgan-qolmaganligini tekshirish uchun qaysi laboratoriya sinamasi qo'yiladi?",
      "a": "Azopiram sinamasi (qon qoldig'i bo'lsa 1 daqiqa ichida binafsha-pushti rangga kiradi)",
      "w": [
        "Fenolftalein sinamasi (yuvish vositasi qoldig'iga)",
        "Mantu sinamasi",
        "Vasserman reaksiyasi"
      ],
      "e": "Azopiram sinamasi yashirin qonni, Fenolftalein sinamasi esa sintetik yuvish vositasi (ishqor) qoldig'ini aniqlaydi."
    },
    {
      "c": "mt20",
      "q": "Stenokardiya xurujida (ko'krak ortida siquvchi og'riq) birinchi yordam sifatida til ostiga (sublingval) qaysi preparat qo'yiladi?",
      "a": "Nitroglitserin (0.5 mg tabletka yoki sprey — koronar tomirlarni kengaytiradi)",
      "w": [
        "Analgin muskul orasiga",
        "Amoksitsillin",
        "Kalsiy glyukonat"
      ],
      "e": "Sublingval Nitroglitserin 1–2 daqiqada til osti venalari orqali umumiy qon oqimiga so'rilib, yurak toj tomirlarini kengaytiradi."
    },
    {
      "c": "mt21",
      "q": "Gipertonik krizda (arterial bosim keskin ko'tarilganda) birinchi tibbiy yordam sifatida til ostiga qaysi antigipertenziv dori beriladi?",
      "a": "Kaptopril (25 mg) yoki Moksonidin (0.2–0.4 mg)",
      "w": [
        "Kofein",
        "Adrenalin",
        "Kordiamin"
      ],
      "e": "Kaptopril AAF ingibitori sifatida 15-30 daqiqada arterial bosimni xavfsiz va bosqichma-bosqich tushiradi."
    },
    {
      "c": "mt22",
      "q": "Zimnitskiy sinamasi bo'yicha buyraklarning konsentratsiyalash funksiyasini tekshirish uchun siydik qanday yig'iladi?",
      "a": "1 sutka (24 soat) davomida har 3 soatda alohida-alohida 8 ta idishga (jami 8 porsiya) yig'iladi",
      "w": [
        "Faqat ertalabki o'rta porsiya 1 ta idishga",
        "3 kun davomida 1 ta bankaga",
        "1 daqiqa ichida"
      ],
      "e": "Zimnitskiy sinamasida sutkalik, kunduzgi va tungi diurez hamda solishtirma og'irlik (1010–1025) baholanadi."
    },
    {
      "c": "mt23",
      "q": "Nechiporenko sinamasi bo'yicha 1 ml o'rta porsiya siydikda me'yorda nechta leykotsit va eritrotsit bo'lishi mumkin?",
      "a": "Leykotsitlar — 2000 tagacha, Eritrotsitlar — 1000 tagacha, Silindrlar — 20 tagacha",
      "w": [
        "Leykotsitlar — 1 millionta",
        "Umuman bo'lmasligi shart",
        "Eritrotsitlar — 50 mingta"
      ],
      "e": "1 ml siydikdagi shaklli elementlarni aniq sanash Nechiporenko usuli bilan amalga oshiriladi."
    },
    {
      "c": "mt24",
      "q": "O'tkir qorin sindromida (masalan, o'tkir appenditsit gumon qilinganda) shifokor ko'rigigacha qaysi amallarni bajarish QAT'IYAN MAN ETILADI?",
      "a": "Og'riq qoldiruvchi dorilar berish, qoringa issiq grelka qo'yish, surgi dorilar va tozalovchi klizma qilish",
      "w": [
        "Bemorni tinch yotqizish",
        "Qorin o'ng pastki sohasiga muzli xaltacha qo'yish",
        "Tez yordam chaqirish"
      ],
      "e": "Analgetik klinik manzarani yashirib yuboradi, issiq grelka va klizma esa appendiks yorilishiga (peritonitga) sabab bo'ladi."
    },
    {
      "c": "mt25",
      "q": "Burundan qon ketganda (Epistaksis) to'g'ri birinchi tibbiy yordam qanday ko'rsatiladi?",
      "a": "Bemorni o'tqazib, boshini BIR OZ OLDINGA egish, burun qanotlarini 5–10 daqiqa barmoq bilan bosish va qansharga muz qo'yish",
      "w": [
        "Boshni orqaga keskin tashlab chalqancha yotqizish",
        "Issiq choy ichirish",
        "Burunni qattiq qoqish"
      ],
      "e": "Boshni orqaga tashlash qonning halqum orqali nafas yo'llariga va oshqozonga ketib qolishiga sabab bo'ladi."
    },
    {
      "c": "mt26",
      "q": "Qandli diabet bilan og'rigan bemorda insulin dozasi oshib ketishi yoki ovqat yemay qo'yish oqibatida sovuq ter bosishi, titroq va hushdan ketish qaysi holat?",
      "a": "Gipoglikemik koma (qonda qand miqdorining <3.0 mmol/l dan tushib ketishi) — shirin choy yoki 40% Glyukoza v/i yuboriladi",
      "w": [
        "Giperglikemik ketoatsidotik koma",
        "Uremik koma",
        "Jigar komasi"
      ],
      "e": "Gipoglikemiya daqiqalar ichida o'tkir boshlanadi, bemor terisi nam bo'ladi; darhol uglevod/glyukoza beriladi."
    },
    {
      "c": "mt27",
      "q": "Biologik o'limning dastlabki va yakuniy ishonchli belgilaridan 'Beloglazov simptomi' (Mushuk ko'zi simptomi) nimani anglatadi?",
      "a": "Ko'z olmasini ikki yonidan barmoq bilan sekin siqqanda qorachiqning vertikal oval (mushuk ko'zi) shaklini olishi",
      "w": [
        "Qorachiqning yorug'likka torayishi",
        "Ko'z yoshlanishi",
        "Qovoqlar pirpirashi"
      ],
      "e": "Beloglazov simptomi, shox pardaning xiralashishi, murda dog'lari va qotishi biologik o'lim belgilaridir."
    },
    {
      "c": "mt28",
      "q": "Tibbiy lotin tilida resept yozishda 'Recipe:' (Ol), 'Misce. Da. Signa:' (Aralashtir. Ber. Belgila) va 'Cito!' so'zlari nimani anglatadi?",
      "a": "Rp.: — Ol; M.D.S.: — Aralashtir, ber, belgila; Cito! — Tezda (shoshilinch tayyorlansin)!",
      "w": [
        "Faqat kechqurun ichilsin",
        "Retseptsiz berilmasin",
        "Tashqi qo'llash uchun"
      ],
      "e": "Shoshilinch vaziyatlarda resept tepasiga 'Cito!' (Tezda) yoki 'Statim!' (Darhol) deb yoziladi."
    },
    {
      "c": "mt29",
      "q": "JSST (WHO) standarti bo'yicha tibbiyot xodimlari qo'llarni gigiyenik zararsizlantirishda nechta asosiy harakat (bosqich) bajaradilar?",
      "a": "6 ta standart harakat bosqichi (har bir harakat kamida 5 martadan takrorlanib, 30–60 soniya davomida)",
      "w": [
        "Faqat 1 ta harakat",
        "15 ta harakat",
        "Qo'lni faqat quruq artish"
      ],
      "e": "Evropa EN-1500 va JSST standartiga ko'ra kaft, kaft orqasi, barmoq orasi, barmoq uchi, bosh barmoq va kaft markazi — 6 bosqichda yuviladi."
    },
    {
      "c": "mt30",
      "q": "Tana vazni indeksi (BVI / BMI — Ketle indeksi) qaysi formula bo'yicha hisoblanadi va normada nechaga teng?",
      "a": "BMI = Vazn (kg) / Bo'y² (m²) — me'yorda 18.5 dan 24.9 kg/m² gacha",
      "w": [
        "BMI = Bo'y (sm) - 50",
        "BMI = Vazn × Bo'y",
        "BMI = Yosh + Vazn"
      ],
      "e": "Masalan, vazni 70 kg, bo'yi 1.75 m bo'lsa: 70 / (1.75 × 1.75) = 22.86 kg/m² (normal vazn)."
    }
  ],
  "anatomiya": [
    {
      "c": "an1",
      "q": "Voyaga yetgan inson skeleti jami nechta suyakdan tashkil topgan va umurtqa pog'onasida nechta umurtqa bor?",
      "a": "Skeletda 206 ta suyak; umurtqa pog'onasida 33–34 ta umurtqa (7 bo'yin, 12 ko'krak, 5 bel, 5 dumg'aza, 4–5 dum)",
      "w": [
        "120 ta suyak va 20 ta umurtqa",
        "350 ta suyak va 50 ta umurtqa",
        "150 ta suyak va 15 ta umurtqa"
      ],
      "e": "7 ta bo'yin, 12 ta ko'krak, 5 ta bel, 5 ta o'zaro bitishgan dumg'aza va 4-5 ta dum umurtqasi mavjud."
    },
    {
      "c": "an2",
      "q": "1- va 2-bo'yin umurtqalarining lotincha va anatomik nomlari qanday?",
      "a": "1-bo'yin umurtqasi — Atlant (Atlas, tanasi yo'q), 2-bo'yin umurtqasi — Epistrofey / Axis (tishsimon o'simtasi bor)",
      "w": [
        "Femur va Tibia",
        "Radius va Ulna",
        "Sternum va Clavicula"
      ],
      "e": "Atlant kalla suyagini ko'tarib turadi, Axis tishsimon o'simtasi esa boshning ikki yonga burilishini ta'minlaydi."
    },
    {
      "c": "an3",
      "q": "Inson tanasidagi eng uzun va eng baquvvat naysimon suyak qaysi?",
      "a": "Son suyagi (Os femoris / Femur)",
      "w": [
        "Bilak suyagi (Radius)",
        "O'mrov suyagi (Clavicula)",
        "To'sh suyagi (Sternum)"
      ],
      "e": "Son suyagi tana bo'yining ~27% ini tashkil etuvchi eng yirik naysimon suyakdir."
    },
    {
      "c": "an4",
      "q": "Inson organizmidagi eng kichik suyakchalar qayerda joylashgan va ularning nomlari nima?",
      "a": "O'rta quloq bo'shlig'ida: Bolg'acha (Malleus), Sandoncha (Incus) va Uzangicha (Stapes)",
      "w": [
        "Burun bo'shlig'ida",
        "Qo'l barmoqlari uchida",
        "Tovon sohasida"
      ],
      "e": "Uzangicha (Stapes) uzunligi atigi ~3 mm bo'lib, odam tanasidagi eng kichik suyakdir."
    },
    {
      "c": "an5",
      "q": "Katta qon aylanish doirasi yurakning qaysi bo'limidan boshlanib, qaysi bo'limida tugaydi?",
      "a": "Chap qorinchadan Aorta bilan boshlanib, o'ng bo'lmachada yuqori va pastki kovak venalar bilan tugaydi",
      "w": [
        "O'ng qorinchadan boshlanib, chap bo'lmachada tugaydi",
        "Chap bo'lmachadan boshlanib, o'ng qorinchada tugaydi",
        "Faqat o'pkada aylanadi"
      ],
      "e": "Kichik (o'pka) qon aylanish doirasi esa o'ng qorinchadan o'pka poyasi bilan boshlanib, chap bo'lmachada tugaydi."
    },
    {
      "c": "an6",
      "q": "Yurakning chap bo'lmachasi bilan chap qorinchasi orasida hamda o'ng bo'lmachasi bilan o'ng qorinchasi orasida qaysi klapanlar joylashgan?",
      "a": "Chapda — ikki tavaqali (Mitral) klapan; O'ngda — uch tavaqali (Trikuspidal) klapan",
      "w": [
        "Chapda — uch tavaqali, O'ngda — ikki tavaqali",
        "Ikkalasida ham yarim oysimon klapan",
        "Klapan bo'lmaydi"
      ],
      "e": "Chap atrioventrikulyar teshikda Mitral (2 tavaqali), o'ngda esa Trikuspidal (3 tavaqali) klapan joylashgan."
    },
    {
      "c": "an7",
      "q": "Yurakning o'zini arterial qon bilan ta'minlovchi toj (koronar) arteriyalari qayerdan boshlanadi?",
      "a": "Yuqoriga ko'tariluvchi aortaning boshlang'ich kengaygan qismidan (Aorta piyozchasidan, yarim oysimon klapanlardan yuqoridan)",
      "w": [
        "Yuqori kovak venadan",
        "O'pka arteriyasidan",
        "Uyqu arteriyasidan"
      ],
      "e": "O'ng va chap toj arteriyalar (aa. coronariae) bevosita aorta piyozchasidan chiqadi."
    },
    {
      "c": "an8",
      "q": "Yurak avtomatiyasining asosiy (1-tartibli) ritm yurituvchisi (peysmekeri) qaysi tugun hisoblanadi?",
      "a": "Sinus-bo'lmacha (Sinoatrial — Kis-Flyak) tuguni (o'ng bo'lmacha devorida joylashgan)",
      "w": [
        "Atrioventrikulyar (Ashoff-Tavara) tuguni",
        "Gis tutami",
        "Purkinye tolalari"
      ],
      "e": "Sinoatrial tugun daqiqasiga 60-80 ta impuls ishlab chiqarib, yurakning normal sinus ritmini boshqaradi."
    },
    {
      "c": "an9",
      "q": "O'ng o'pka va chap o'pka nechta bo'lakdan (lobus) tashkil topgan?",
      "a": "O'ng o'pka — 3 bo'lakdan (yuqori, o'rta, pastki), Chap o'pka — 2 bo'lakdan (yuqori va pastki)",
      "w": [
        "Ikkalasi ham 4 tadan bo'lak",
        "O'ng o'pka 2 ta, chap o'pka 3 ta",
        "Ikkalasi ham 1 bo'lakdan"
      ],
      "e": "Chap tomonda yurak joylashgani (yurak o'ymasi borligi) sababli chap o'pka 2 bo'lakdan iborat."
    },
    {
      "c": "an10",
      "q": "Ingichka ichak ketma-ket keluvchi qaysi 3 ta bo'limdan iborat?",
      "a": "1) O'n ikki barmoqli ichak (Duodenum), 2) Och ichak (Jejunum), 3) Yonbosh ichak (Ileum)",
      "w": [
        "Ko'richak, Chambar ichak, To'g'ri ichak",
        "Qizilo'ngach, Oshqozon, Duodenum",
        "Sigmasimon, Ko'ndalang va Yuqoriga ko'tariluvchi ichak"
      ],
      "e": "Duodenum, Jejunum va Ileum ingichka ichakning 3 qismidir; ko'richak va chambar ichak yo'g'on ichakka kiradi."
    },
    {
      "c": "an11",
      "q": "Inson organizmidagi eng katta bez qaysi va uning chiqaruv yo'li qayerga ochiladi?",
      "a": "Jigar (Hepar, ~1.5 kg) — umumiy o't yo'li (ductus choledochus) o'n ikki barmoqli ichakning katta so'rg'ichiga (Fater so'rg'ichiga) ochiladi",
      "w": [
        "Taloq — oshqozonga ochiladi",
        "Qalqonsimon bez — traxeyaga ochiladi",
        "Buyrak — qovuqqa ochiladi"
      ],
      "e": "Umumiy o't yo'li va me'da osti bezi yo'li 12 barmoqli ichakning tushuvchi qismiga ochiladi."
    },
    {
      "c": "an12",
      "q": "Bosh miyadan jami necha juft bosh miya nervlari (Nervi craniales) chiqadi va X juft nerv qanday nomlanadi?",
      "a": "12 juft bosh miya nervlari; X juft — Adashgan nerv (Nervus vagus)",
      "w": [
        "31 juft; X juft — Ko'ruv nervi",
        "10 juft; X juft — Hidlov nervi",
        "24 juft; X juft — Yuz nervi"
      ],
      "e": "12 juft bosh miya nervlari mavjud bo'lib, X juft (n. vagus) parasimpatik innervatsiyaning asosiy nervidir."
    },
    {
      "c": "an13",
      "q": "Orqa miyadan (Medulla spinalis) jami necha juft orqa miya nervlari chiqadi?",
      "a": "31 juft (8 bo'yin, 12 ko'krak, 5 bel, 5 dumg'aza, 1 dum)",
      "w": [
        "12 juft",
        "20 juft",
        "45 juft"
      ],
      "e": "31 juft orqa miya segmentlaridan oldingi (harakat) va orqa (sezgi) ildizchalar qo'shilib 31 juft aralash nerv hosil qiladi."
    },
    {
      "c": "an14",
      "q": "Kalla suyagining miya qismiga kiruvchi TOQ (juft bo'lmagan) suyaklar qaysilar?",
      "a": "Peshona (os frontale), Ensa (os occipitale), Ponasiwon (os sphenoidale) va G'alvirsmon (os ethmoidale) suyaklar",
      "w": [
        "Tepa (os parietale) va Chakka (os temporale) suyaklar",
        "Yuqori jag' va Yonoq suyaklari",
        "Burun va Ko'z yosh suyaklari"
      ],
      "e": "Tepa va chakka suyaklari juft, qolgan 4 tasi (peshona, ensa, ponasimon, g'alvirsimon) toq suyaklardir."
    },
    {
      "c": "an15",
      "q": "Ko'krak qafasida jami necha juft qovurg'a bo'lib, ularning nechtasi chin, soxta va yetim (erkin) qovurg'alardir?",
      "a": "12 juft qovurg'a: 1–7 juftlar chin (to'sh suyagiga birikadi), 8–10 juftlar soxta, 11–12 juftlar erkin (yetim) qovurg'alar",
      "w": [
        "10 juft qovurg'a, barchasi chin",
        "14 juft qovurg'a",
        "8 juft qovurg'a"
      ],
      "e": "1-7 juft qovurg'alar o'z tog'ayi bilan bevosita to'sh suyagiga birikadi."
    },
    {
      "c": "an16",
      "q": "Ko'krak qafasi bo'shlig'ini qorin bo'shlig'idan ajratib turuvchi gumbazsimon asosiy nafas olish muskuli nima?",
      "a": "Diafragma (Diaphragma / Phrenicus)",
      "w": [
        "Deltasimon muskul",
        "Tikuvchi muskul",
        "Kambalasimon muskul"
      ],
      "e": "Diafragma qisqarganda uning gumbazi pastga tushib, ko'krak qafasi hajmini kengaytiradi va nafas olinadi."
    },
    {
      "c": "an17",
      "q": "Inson tanasidagi eng uzun muskul qaysi?",
      "a": "Tikuvchi muskul (Musculus sartorius — sonda joylashgan)",
      "w": [
        "Uzangi muskuli",
        "Chaynov muskuli",
        "Ko'zning to'g'ri muskuli"
      ],
      "e": "m. sartorius yonbosh suyagining oldingi yuqori o'simtasidan katta boldir suyagigacha cho'zilgan eng uzun muskuldir."
    },
    {
      "c": "an18",
      "q": "Buyrakning anatomik va funksional birligi nima deb ataladi va u qaysi qismlardan iborat?",
      "a": "Nefron — Buyrak tanachasi (Shumlyanskiy-Boumen kapsulasi va Malpigi koptokchasi) hamda kanalchalar tizimi (proksimal, Genle qovuzlog'i, distal)",
      "w": [
        "Alveola va bronxiola",
        "Sinaps va akson",
        "Gepatotsit va o't kapillyari"
      ],
      "e": "Har bir buyrakda ~1 million nefron bo'lib, siydik hosil bo'lishining filtratsiya va reabsorbsiya bosqichlarini bajaradi."
    },
    {
      "c": "an19",
      "q": "Bosh miyaning harakatlar muvozanatini (koordinatsiyasini) va muskul tonusini boshqaruvchi qismi qaysi?",
      "a": "Miyacha (Cerebellum)",
      "w": [
        "Gipotalamus",
        "Uzunchoq miya",
        "Qadoqsimon tana"
      ],
      "e": "Miyacha shikastlanganda ataksiya (harakat muvozanati buzilishi) va asinergiya kelib chiqadi."
    },
    {
      "c": "an20",
      "q": "Nafas olish va yurak-qon tomir markazlari, shuningdek yo'talish, aksirish va yutinish reflekslari bosh miyaning qaysi bo'limida joylashgan?",
      "a": "Uzunchoq miyada (Medulla oblongata)",
      "w": [
        "Po'stloqning tepa bo'lagida",
        "Epifizda",
        "Hidlov piyozchasida"
      ],
      "e": "Uzunchoq miya hayotiy muhim nafas va vazomotor markazlarni saqlagani uchun uning shikastlanishi hayot uchun xavflidir."
    },
    {
      "c": "an21",
      "q": "Ichki sekretsiya bezlarining 'dirijyori' hisoblanuvchi Gipofiz bezi kalla suyagining qaysi chuqurchasida joylashgan?",
      "a": "Ponasimon suyakning 'Turk egari' (Sella turcica) chuqurchasida",
      "w": [
        "Peshona bo'shlig'ida",
        "Pastki jag' burchagida",
        "Ensa teshigida"
      ],
      "e": "Gipofiz (Hypophysis) ponasimon suyakning turk egari chuqurchasida joylashib, gipotalamus bilan bog'langan."
    },
    {
      "c": "an22",
      "q": "Ham tashqi sekretsiya (pankreatik shira), ham ichki sekretsiya (Langergans orolchalarida insulin va glyukagon) vazifasini bajaruvchi aralash bez qaysi?",
      "a": "Me'da osti bezi (Pancreas)",
      "w": [
        "Qalqonsimon bez (Glandula thyroidea)",
        "Qalqon oldi bezi",
        "Buyrak usti bezi"
      ],
      "e": "Me'da osti bezi ekzokrin qismi ovqat hazm qilish fermentlarini, endokrin beta-hujayralari esa insulin ishlab chiqaradi."
    },
    {
      "c": "an23",
      "q": "Ko'z olmasining uchta qavati (tashqaridan ichkariga) qaysi qatorda to'g'ri berilgan?",
      "a": "1) Fibroz qavat (sklera va shox parda), 2) Tomirli qavat (rangdor parda, kipriksimon tana, xorioidea), 3) To'r parda (Retina — fotoretseptorlar)",
      "w": [
        "To'r parda -> Sklera -> Tomirli qavat",
        "Faqat shox parda va gavhar",
        "Plevara va perikard"
      ],
      "e": "Yorug'likni qabul qiluvchi kolbacha va tayoqchalar ichki to'r pardada (Retina) joylashgan."
    },
    {
      "c": "an24",
      "q": "Yelka bo'g'imi va son-chanoq bo'g'imi harakat o'qlari soniga va shakliga ko'ra qanday bo'g'im turiga kiradi?",
      "a": "Ko'p o'qli, sharsimon (kosasimon) bo'g'imlar",
      "w": [
        "Bir o'qli g'altaksimon bo'g'im",
        "Harakatsiz chok (sinartroz)",
        "Ikki o'qli egarsimon bo'g'im"
      ],
      "e": "Sharsimon bo'g'imlar (art. humeri, art. coxae) uchta o'q atrofida erkin harakatlanadi."
    },
    {
      "c": "an25",
      "q": "Oldingi yelka va bilak sohasida inyeksiya va venapunksiya uchun eng ko'p ishlatiladigan tirsak chuqurchasidagi yuza vena qaysi?",
      "a": "Tirsakning o'rta venasi (Vena mediana cubiti)",
      "w": [
        "Darvoza venasi (Vena portae)",
        "Toq vena (Vena azygos)",
        "Bo'yinturuq venasi"
      ],
      "e": "v. mediana cubiti teri ostida yuzaki joylashgan va kam siljiydigan bo'lgani uchun venapunksiyada asosiy tomirdir."
    },
    {
      "c": "an26",
      "q": "Qorin bo'shlig'idagi toq a'zolardan (oshqozon, ichaklar, taloq, me'da osti bezi) venoz qonni yig'ib jigarga olib kiruvchi yirik vena qaysi?",
      "a": "Darvoza venasi (Vena portae hepatis)",
      "w": [
        "Yuqori kovak vena",
        "O'pka venasi",
        "Son venasi"
      ],
      "e": "Darvoza venasi hazm a'zolaridan so'rilgan moddalarni zararsizlantirish uchun jigarga olib boradi."
    },
    {
      "c": "an27",
      "q": "Halqumni (Pharynx) o'rta quloq bo'shlig'i bilan tutashtirib, nog'ora pardaning ikki tomonidagi havo bosimini tenglashtiruvchi nay nima?",
      "a": "Yevstaxiy nayi (Eshituv nayi — Tuba auditiva)",
      "w": [
        "Traxeya",
        "Qizilo'ngach",
        "Siydik nayi"
      ],
      "e": "Yutinish va esnash paytida Yevstaxiy nayi ochilib, o'rta quloqdagi bosim atmosfera bosimi bilan tenglashadi."
    },
    {
      "c": "an28",
      "q": "Erkaklar va ayollar siydik chiqarish kanalining (Urethra) anatomik uzunligi me'yorda qancha?",
      "a": "Erkaklarda 18–22 sm (3 qismdan iborat), Ayollarda 3–4 sm (keng va qisqa)",
      "w": [
        "Erkaklarda 3 sm, Ayollarda 20 sm",
        "Ikkalasida ham 50 sm",
        "Ikkalasida ham 1 sm"
      ],
      "e": "Uretra uzunligi kateterizatsiya muolajasini bajarishda muhim anatomik ko'rsatkichdir."
    },
    {
      "c": "an29",
      "q": "Bosh miya yarim sharlari po'stlog'ida nutqni harakatlantiruvchi (so'zlash) va nutqni tushunish (eshitish) markazlari qanday nomlanadi?",
      "a": "So'zlash (motor) markazi — Broka markazi (peshona bo'lagida), Tushunish (sensor) markazi — Vernike markazi (chakka bo'lagida)",
      "w": [
        "Gis va Purkinye markazlari",
        "Malpigi va Boumen markazlari",
        "Sels va Galen markazlari"
      ],
      "e": "Broka markazi shikastlansa motor afaziya, Vernike markazi shikastlansa sensor afaziya kelib chiqadi."
    },
    {
      "c": "an30",
      "q": "Organizmda limfani to'qimalardan yig'ib, venoz qon tizimiga quyuvchi eng yirik limfa tomiri qaysi?",
      "a": "Ko'krak limfa yo'li (Ductus thoracicus — chap venoz burchakka quyiladi)",
      "w": [
        "Aorta ravog'i",
        "Uyqu arteriyasi",
        "O'pka poyasi"
      ],
      "e": "Ko'krak limfa yo'li tananing 3/4 qismidan limfani yig'ib, chap ichki bo'yinturuq va o'mrov osti venalari qo'shilgan joyga quyadi."
    }
  ],
  "fiziologiya": [
    {
      "c": "fz1",
      "q": "Organizm ichki muhiti ko'rsatkichlarining (pH, harorat, osmotik bosim, glyukoza) nisbiy doimiyligini saqlash xususiyati nima deb ataladi?",
      "a": "Gomeostaz (Homeostasis)",
      "w": [
        "Gemoliz",
        "Fagotsitoz",
        "Avtomatiya"
      ],
      "e": "Gomeostaz tushunchasini 1929-yilda Uolter Kennon fanga kiritgan."
    },
    {
      "c": "fz2",
      "q": "Sog'lom inson arterial qonining vodorod ko'rsatkichi (pH) me'yorda qancha bo'ladi?",
      "a": "pH = 7.36 – 7.42 (kuchsiz ishqoriy muhit)",
      "w": [
        "pH = 1.5 – 2.0 (kuchli kislotali)",
        "pH = 9.5 – 10.0",
        "pH = 5.0"
      ],
      "e": "pH 7.35 dan pasayishi atsidoz, 7.45 dan oshishi alkaloz deyiladi."
    },
    {
      "c": "fz3",
      "q": "Qon plazmasining osmotik bosimiga teng bo'lgan 'fiziologik eritma' (Natriy xlorid NaCl) necha foizli bo'ladi?",
      "a": "0.9% li NaCl eritmasi (izotonik eritma)",
      "w": [
        "10% li NaCl (gipertonik)",
        "0.1% li NaCl (gipotonik)",
        "40% li NaCl"
      ],
      "e": "0.9% NaCl eritmasida eritrotsitlar bujmaymaydi ham (plazmoliz), yorilib ham ketmaydi (gemoliz)."
    },
    {
      "c": "fz4",
      "q": "Yurakning 75 zarba/min chastotada bir marta to'liq qisqarib-bo'shashish sikli (Yurak sikli) necha soniya davom etadi va qanday taqsimlanadi?",
      "a": "0.8 soniya: Bo'lmachalar sistolasi 0.1 s, Qorinchalar sistolasi 0.3 s, Umumiy pauza (diastola) 0.4 s",
      "w": [
        "2.0 soniya",
        "5.0 soniya",
        "0.1 soniya"
      ],
      "e": "Yurak sutka davomida tinimsiz ishlashining sababi — har 0.8 s siklning yarmi (0.4 s) umumiy dam olish (diastola) ekanligidir."
    },
    {
      "c": "fz5",
      "q": "Tinch holatda yurak qorinchasining bir marta qisqarganda aortaga haydaydigan qon hajmi (Sistolik hajm) va Daqiqalik qon hajmi (DQH) qancha?",
      "a": "Sistolik (zarb) hajmi: 65–70 ml; Daqiqalik qon hajmi (DQH): 4.5–5.0 litr/daq",
      "w": [
        "Sistolik hajmi: 5 litr; DQH: 100 litr",
        "Sistolik hajmi: 5 ml; DQH: 200 ml",
        "Sistolik hajmi: 500 ml"
      ],
      "e": "DQH = Sistolik hajm (70 ml) × Yurak urish soni (70/min) ≈ 4.9–5.0 litr/min."
    },
    {
      "c": "fz6",
      "q": "Elektrokardiogrammada (EKG) P tishcha, QRS kompleksi va T tishcha nimani aks ettiradi?",
      "a": "P tishcha — bo'lmachalar qo'zg'alishi (depolyarizatsiyasi); QRS — qorinchalar depolyarizatsiyasi; T — qorinchalar repolyarizatsiyasi (tiklanishi)",
      "w": [
        "P — o'pka nafasi, QRS — jigar ishi",
        "Barchasi faqat bo'lmachalar ishini",
        "T tishcha — bo'lmachalar qisqarishini"
      ],
      "e": "EKG yurak miokardidagi bioelektrik potentsiallarning tarqalishini yozib oladi."
    },
    {
      "c": "fz7",
      "q": "O'pka tiriklik sig'imi (O'TS / ЖЕЛ) qaysi 3 ta nafas hajmining yig'indisiga teng va spirometrda o'lchanadi?",
      "a": "Nafas olish hajmi (~500 ml) + Qo'shimcha (rezerv) nafas olish hajmi (~1500–2000 ml) + Qo'shimcha nafas chiqarish hajmi (~1500 ml) = 3.5–4.5 L",
      "w": [
        "Faqat qoldiq havo hajmi",
        "Oshqozon hajmi + Qon hajmi",
        "Faqat 100 ml"
      ],
      "e": "Chuqur nafas olib, maksimal nafas chiqarilganda chiqqan havo hajmi O'TS (3500-4500 ml) deyiladi."
    },
    {
      "c": "fz8",
      "q": "Qonda kislorod (O₂) qaysi birikma ko'rinishida tashiladi va gemoglobinning eritrotsitdagi o'rtacha umri qancha?",
      "a": "Oksigemoglobin (HbO₂) ko'rinishida; eritrotsitlarning o'rtacha yashash muddati 120 kun",
      "w": [
        "Karboksygemoglobin (is gazi bilan); umri 2 kun",
        "Faqat plazmada erigan holda; umri 5 yil",
        "Leykotsit ichida"
      ],
      "e": "Eritrotsitlar qizil ilikda hosil bo'lib, ~120 kun yashaydi va taloq hamda jigarda parchalanadi."
    },
    {
      "c": "fz9",
      "q": "Qon plazmasidagi oqsillar ( ayniqsa albuminlar) yaratadigan va suvni qon tomir o'zanida ushlab turuvchi bosim nima deb ataladi?",
      "a": "Onkotik bosim (25–30 mm sim. ust. yoki 0.03–0.04 atm)",
      "w": [
        "Arterial sistolik bosim",
        "Atmosfera bosimi",
        "Plevra ichi bosimi"
      ],
      "e": "Qonda oqsil (albumin) kamaysa onkotik bosim tushib, suv to'qimalarga chiqadi va shish (edema) paydo bo'ladi."
    },
    {
      "c": "fz10",
      "q": "Hujayra tinchlik potentsiali va harakat potentsiali (nerv impulsi) paydo bo'lishida qaysi ionlarning membrana orqali harakati hal qiluvchi rol o'ynaydi?",
      "a": "Tinchlikda K⁺ (kaliy) ichkarida ko'p; Qo'zg'alish (depolyarizatsiya) da Na⁺ (natriy) kanallari ochilib hujayra ichiga otilib kiradi",
      "w": [
        "Faqat Temir (Fe) va Mis (Cu)",
        "Faqat Oltin va Kumush",
        "Ionlar qatnashmaydi"
      ],
      "e": "Na⁺/K⁺-ATFaza nasosi 3 ta Na⁺ ni tashqariga chiqarib, 2 ta K⁺ ni hujayra ichiga kiritadi."
    },
    {
      "c": "fz11",
      "q": "Oshqozon shirasining kislotali muhitini (pH = 1.5–2.0) ta'minlovchi modda nima va u qaysi fermentni faollashtiradi?",
      "a": "Xlorid kislota (HCl) — pepsinogen profermentini faol Pepsin (oqsillarni parchalovchi) fermentiga aylantiradi",
      "w": [
        "Sulfat kislota — amilazani faollashtiradi",
        "Ishqor — insulinni faollashtiradi",
        "Suv — lipazani faollashtiradi"
      ],
      "e": "HCl shuningdek ovqat bilan tushgan mikroblarni o'ldiradi (bakteritsid ta'sir) va oqsillarni bo'ktiradi."
    },
    {
      "c": "fz12",
      "q": "Me'da osti bezi (pankreas) shirasida oqsillar, yog'lar va uglevodlarni parchalovchi qaysi asosiy fermentlar bor?",
      "a": "Oqsillar uchun — Tripsin va Ximotripsin; Yog'lar uchun — Lipaza; Uglevodlar uchun — Alfa-amilaza",
      "w": [
        "Faqat Pepsin",
        "Faqat Lizotsim",
        "Faqat Renin"
      ],
      "e": "Tripsinogen 12 barmoqli ichakda enterokinaza ta'sirida faol tripsinga aylanadi."
    },
    {
      "c": "fz13",
      "q": "Buyrak koptokchalarida 1 daqiqada filtrlanadigan birlamchi siydik tezligi (Glomerulyar Filtratsiya Tezligi — GFT / СКФ) me'yorda qancha?",
      "a": "90–120 ml/daqiqa (sutkasiga 150–180 litr birlamchi siydik)",
      "w": [
        "1 ml/daqiqa",
        "1000 ml/daqiqa",
        "0 ml/daqiqa"
      ],
      "e": "Kanalchalarda 150–180 L birlamchi siydikning 99% i qayta so'rilib (reabsorbsiya), 1.5 L ikkilamchi siydik qoladi."
    },
    {
      "c": "fz14",
      "q": "Qonda glyukoza miqdori oshganda uni hujayralarga kiritib qandni tushiruvchi va qand kamayganda glikogenni parchalab qandni ko'taruvchi gormonlar juftligi qaysi?",
      "a": "Qandni tushiruvchi — Insulin (beta-hujayralar); Qandni ko'taruvchi — Glyukagon (alfa-hujayralar) va Adrenalin",
      "w": [
        "Tiroksin va Kalsitonin",
        "Oksitotsin va Prolaktin",
        "Melatonin va Serotonin"
      ],
      "e": "Insulin va glyukagon me'da osti bezi Langergans orolchalarida ishlab chiqarilib, glikemiyani (3.3–5.5 mmol/l) boshqaradi."
    },
    {
      "c": "fz15",
      "q": "Qalqonsimon bez ishlab chiqaradigan Tiroksin (T4) va Triyodtironin (T3) gormonlari sintezi uchun qaysi mikroelement zarur?",
      "a": "Yod (I)",
      "w": [
        "Ftor (F)",
        "Qo'rg'oshin (Pb)",
        "Simob (Hg)"
      ],
      "e": "Yod tanqisligida endemik buqoq va bolalarda kretinizm, kattalarda miksedema rivojlanadi."
    },
    {
      "c": "fz16",
      "q": "Gipofizning orqa bo'lagidan (neyrogipofiz) ajralib, buyrak kanalchalarida suvning qayta so'rilishini kuchaytiruvchi gormon qaysi?",
      "a": "Vazopressin (Antidiuretik gormon — ADG)",
      "w": [
        "Somatotropin",
        "Tireotropin",
        "Kortizol"
      ],
      "e": "ADG yetishmovchiligida 'qandsiz diabet' (sutkasiga 10–20 litr siydik ajralishi) kelib chiqadi."
    },
    {
      "c": "fz17",
      "q": "Simpatik asab tizimi qo'zg'alganda ('Kurash yoki qoch' reaksiyasi) yurak urishi, bronxlar va ko'z qorachig'ida qanday o'zgarish bo'ladi?",
      "a": "Yurak urishi tezlashadi va kuchayadi, bronxlar kengayadi, ko'z qorachig'i kengayadi (midriaz), hazm sekinlashadi",
      "w": [
        "Yurak urishi sekinlashadi, bronxlar torayadi",
        "Ko'z qorachig'i nuqtadek torayadi",
        "Uyqu keladi"
      ],
      "e": "Parasimpatik (vagus) tizim esa aksincha yurakni sekinlashtiradi, qorachiqni toraytiradi va hazm shiralari ajralishini kuchaytiradi."
    },
    {
      "c": "fz18",
      "q": "Reflektor yoy (Refleks yoyi) ketma-ket keluvchi nechta bo'g'indan tashkil topgan?",
      "a": "5 ta bo'g'indan: 1) Retseptor -> 2) Sezuvchi (afferent) neyron -> 3) Asab markazi (MNS) -> 4) Harakatlantiruvchi (efferent) neyron -> 5) Ishchi a'zo (effektor)",
      "w": [
        "Faqat 2 ta qismdan",
        "10 ta qismdan",
        "Markazsiz ishlaydi"
      ],
      "e": "Har qanday refleks retseptorning ta'sirlanishidan boshlanib, ishchi a'zoning javob reaksiyasi bilan yakunlanadi."
    },
    {
      "c": "fz19",
      "q": "I.P. Pavlov ta'limotiga ko'ra faqat insonga xos bo'lgan 'Ikkinchi signal sistemasi' nimaga asoslangan?",
      "a": "So'z, nutq va yozuvga (mavhum tafakkurga); birinchi signal sistemasi esa ko'rish, eshitish, hidlash kabi bevosita sezgilardir",
      "w": [
        "Faqat hid bilishga",
        "Faqat shartsiz reflekslarga",
        "Tana haroratiga"
      ],
      "e": "So'z — 'signallarning signali' bo'lib, ikkinchi signal sistemasining asosini tashkil etadi."
    },
    {
      "c": "fz20",
      "q": "Qon ivish jarayonida (Gemokoagulyatsiya) eruvchan Fibrinogen oqsilini erimaydigan Fibrin tolasiga aylantiruvchi ferment va zarur ion qaysi?",
      "a": "Trombin fermenti va Kalsiy (Ca²⁺ — IV omil) ionlari",
      "w": [
        "Geparin va Natriy",
        "Amilaza va Xlor",
        "Insulin va Kaliy"
      ],
      "e": "Protrombin Ca²⁺ va tromboplastin ishtirokida Trombinga, fibrinogen esa trombin ta'sirida Fibringa aylanadi."
    },
    {
      "c": "fz21",
      "q": "Ko'zning uzoq va yaqindagi buyumlarni aniq ko'rish uchun gavhar (billur) egriligini o'zgartirish qobiliyati nima deb ataladi?",
      "a": "Akkomodatsiya",
      "w": [
        "Astigmatizm",
        "Daltonizm",
        "Gemorragiya"
      ],
      "e": "Kipriksimon muskul qisqarib-bo'shashishi natijasida gavhar qavariqligi o'zgaradi (Akkomodatsiya)."
    },
    {
      "c": "fz22",
      "q": "Ko'z to'r pardasidagi 'Tayoqchalar' (Rods) va 'Kolbachalar' (Cones) fotoretseptorlari qanday ko'rishga javob beradi?",
      "a": "Tayoqchalar — g'ira-shira (tungi, oq-qora) ko'rishga (rodopsin pigmenti); Kolbachalar — kunduzgi o'tkir va rangli (RGB) ko'rishga (yodopsin)",
      "w": [
        "Tayoqchalar rangli, kolbachalar oq-qora",
        "Ikkalasi ham tovushni eshitadi",
        "Faqat qorong'ida ishlaydi"
      ],
      "e": "A vitamini yetishmaganda rodopsin sintezi buzilib, 'shabko'rlik' (gemeralopiya) kelib chiqadi."
    },
    {
      "c": "fz23",
      "q": "Plevra bo'shlig'idagi bosim tinch nafas olish va chiqarishda atmosfera bosimiga nisbatan qanday bo'ladi?",
      "a": "Manfiy (atmosfera bosimidan 4–9 mm sim. ust. ga past) — bu o'pkaning doimo kerilgan holda turishini ta'minlaydi",
      "w": [
        "Atmosfera bosimidan 2 barobar yuqori",
        "Nolga teng",
        "+120 mm sim. ust."
      ],
      "e": "Plevra bo'shlig'iga havo kirib manfiy bosim yo'qolsa (pnevmotoraks), o'pka puchayib qoladi."
    },
    {
      "c": "fz24",
      "q": "Inson qulog'i me'yorda necha Gers (Hz) chastota oralig'idagi tovush to'lqinlarini eshitadi?",
      "a": "16–20 Hz dan 20 000 Hz (20 kHz) gacha (16 Hz dan past — infratovush, 20 kHz dan yuqori — ultratovush)",
      "w": [
        "1 Hz dan 5 Hz gacha",
        "100 000 Hz dan 1 MHz gacha",
        "Faqat 100 Hz"
      ],
      "e": "Eshitish retseptorlari (Kortiyev a'zosi) ichki quloq chig'anog'ida joylashgan."
    },
    {
      "c": "fz25",
      "q": "Sog'lom katta odamning 1 litr qonida eritrotsitlar, leykotsitlar va trombotsitlar soni me'yorda qancha?",
      "a": "Eritrotsitlar: 4.0–5.0 × 10¹²/l; Leykotsitlar: 4.0–9.0 × 10⁹/l; Trombotsitlar: 180–320 × 10⁹/l",
      "w": [
        "Eritrotsitlar: 100 ta; Leykotsitlar: 10 million",
        "Barchasi 1 × 10³/l",
        "Trombotsitlar: 10 ta"
      ],
      "e": "Gemoglobin normasi erkaklarda 130–160 g/l, ayollarda 120–140 g/l ni tashkil etadi."
    },
    {
      "c": "fz26",
      "q": "Nerv tolasi uchidan (akson terminalidan) qo'zg'alishning keyingi neyron yoki muskul hujayrasiga uzatilish joyi va kimyoviy vositachisi nima?",
      "a": "Sinaps — kimyoviy mediatorlar (Atsetilxolin, Noradrenalin, Dofamin, Serotonin, GAMK) orqali",
      "w": [
        "Desmosoma",
        "sentriola",
        "Lizosoma"
      ],
      "e": "Nerv-muskul sinapsida asosiy qo'zg'atuvchi mediator Atsetilxolin hisoblanadi."
    },
    {
      "c": "fz27",
      "q": "Muskul qisqarishi mexanizmida (Xaksli sirpanuvchi ipchalar nazariyasi) qaysi ikkita kontraktil oqsil va qaysi ion bevosita qatnashadi?",
      "a": "Aktin va Miozin oqsillari hamda sarkoplazmatik retikulumdan ajraluvchi Kalsiy (Ca²⁺) ionlari va ATF",
      "w": [
        "Albumin va Globulin",
        "Kollagen va Elastin",
        "Insulin va Pepsin"
      ],
      "e": "Ca²⁺ ionlari troponin bilan bog'lanib, miozin boshchalarining aktin ipchalari bo'ylab sirpanishini boshlab beradi."
    },
    {
      "c": "fz28",
      "q": "Tana haroratini boshqaruvchi (Termoregulyatsiya) oliy vegetativ markaz bosh miyaning qaysi qismida joylashgan?",
      "a": "Gipotalamusda (oldingi qismi — issiqlikni chiqarish, orqa qismi — issiqlik hosil qilish markazi)",
      "w": [
        "Miyachada",
        "Orqa miya dumg'aza qismida",
        "Ko'ruv bo'rtig'ida"
      ],
      "e": "Gipotalamus tana haroratini 36.6°C (qo'ltiq ostida) atrofida doimiy ushlab turadi."
    },
    {
      "c": "fz29",
      "q": "Rh-manfiy (Rezus-manfiy) onada Rh-musbat (Rezus-musbat) homila rivojlanganda qayta homiladorlikda yuzaga kelishi mumkin bo'lgan immunologik ziddiyat nima?",
      "a": "Rezus-konflikt (Chaqaloqlar gemolitik kasalligi)",
      "w": [
        "Gemofiliya",
        "Daltonizm",
        "Raxit"
      ],
      "e": "Oldini olish uchun birinchi tug'ruqdan keyin 72 soat ichida anti-rezus immunoglobulin (anti-D) yuboriladi."
    },
    {
      "c": "fz30",
      "q": "Uyquning fiziologik tuzilishida 'Sekin uyqu' (NREM) va 'Tez uyqu' (REM — paradoksal uyqu, ko'z olmalari tez harakatlanishi) qanday almashinadi?",
      "a": "Tungi uyqu davomida 90–100 daqiqalik 4–5 ta sikl bo'lib, REM fazasida yorqin tushlar ko'riladi va axborot qayta ishlanadi",
      "w": [
        "Butun tun faqat 5 daqiqa davom etadi",
        "Miya uyquda to'liq o'chadi",
        "REM fazasi bo'lmaydi"
      ],
      "e": "Sog'lom uyqu (7–8 soat) davomida Somatotrop (o'sish) gormoni va Melatonin faol ajraladi."
    }
  ],
  "gistologiya": [
    {
      "c": "gs1",
      "q": "Inson va hayvonlar organizmi nechta asosiy to'qima guruhidan tashkil topgan?",
      "a": "4 ta asosiy to'qima turi: 1) Epiteliy, 2) Ichki muhit (biriktiruvchi, qon, tog'ay, suyak), 3) Muskul, 4) Nerv to'qimasi",
      "w": [
        "2 ta to'qima turi",
        "10 ta to'qima turi",
        "Faqat suyak va qon"
      ],
      "e": "Gistologiyada barcha a'zolar 4 ta fundamental to'qima guruhining birikmasidan hosil bo'ladi."
    },
    {
      "c": "gs2",
      "q": "Hujayraning 'energetik stansiyasi' hisoblanib, o'z shaxsiy halqasimon DNKsiga, ribosomalariga va kristalariga ega bo'lgan ikki membranali organoid qaysi?",
      "a": "Mitoxondriya (ATF sintezlaydi)",
      "w": [
        "Lizosoma",
        "Sentrosoma",
        "Peroksisoma"
      ],
      "e": "Mitoxondriya yarim avtonom organoid bo'lib, oksidlovchi fosforlanish orqali ATF ishlab chiqaradi."
    },
    {
      "c": "gs3",
      "q": "Hujayrada oqsil sintezi (translyatsiya) jarayonini amalga oshiruvchi membranasiz organoid va undan oqsillarni tashuvchi tizim qaysi?",
      "a": "Ribosomalar va Donador (granulyar) endoplazmatik to'r",
      "w": [
        "Golji majmuasi va silliq EPT",
        "Lizosoma va vakuola",
        "Mikronaychalar"
      ],
      "e": "Donador EPT yuzasidagi ribosomalar eksport qilinuvchi va membrana oqsillarini sintezlaydi."
    },
    {
      "c": "gs4",
      "q": "Hujayra ichidagi eskirgan organoidlarni va fagotsitoz orqali tushgan yot zarrachalarni ~60 xil gidrolitik ferment (pH ~5.0) yordamida parchalovchi organoid qaysi?",
      "a": "Lizosoma",
      "w": [
        "Ribosoma",
        "Sentriola",
        "Yadrocha"
      ],
      "e": "Lizosomalar Golji majmuasida shakllanib, hujayra ichi hazm qilish (autofagiya va geterofagiya) vazifasini bajaradi."
    },
    {
      "c": "gs5",
      "q": "Sintezlangan oqsillar va lipidlarni kimyoviy modifikatsiyalash, saralash, qadoqlash va sekret pufakchalariga o'rash vazifasini qaysi organoid bajaradi?",
      "a": "Golji majmuasi (Diktiosoma)",
      "w": [
        "Mitoxondriya",
        "Xromosoma",
        "Miofibrilla"
      ],
      "e": "Golji apparati (sis-, medial- va trans-bo'limlari) hujayraning 'saralash va qadoqlash fabrikasi' hisoblanadi."
    },
    {
      "c": "gs6",
      "q": "Yadrocha (Nucleolus) ning hujayradagi eng asosiy vazifasi nima?",
      "a": "Ribosomal RNK (rRNK) sintezlash va ribosoma katta hamda kichik subbirliklarini yig'ish",
      "w": [
        "Lipid sintezlash",
        "ATF ishlab chiqarish",
        "Hujayrani harakatlantirish"
      ],
      "e": "Faol oqsil sintezlovchi hujayralarda yadrocha yirik va aniq ko'rinadi."
    },
    {
      "c": "gs7",
      "q": "Epiteliy to'qimasining biriktiruvchi to'qimadan farq qiluvchi eng muhim 3 ta gistologik xususiyati qaysi?",
      "a": "1) Hujayralar zich (plast bo'lib) joylashadi, 2) Bazal membranada yotadi, 3) Qon tomirlari bo'lmaydi (diffuziya orqali oziqlanadi)",
      "w": [
        "Hujayralar oraliq moddasi juda ko'p",
        "Bazal membranasi yo'q",
        "Qon tomirlariga juda boy"
      ],
      "e": "Epiteliy yuqori regeneratsiya qobiliyatiga ega va qutblilik (apikal hamda bazal qutb) xususiyatini namoyon etadi."
    },
    {
      "c": "gs8",
      "q": "Teri epidermisi qanday epiteliy turi bilan qoplangan va uning nechta qavati bor?",
      "a": "Ko'p qavatli yassi muguzlanuvchi epiteliy — 5 qavatdan iborat (bazal, tikanli, donador, yaltiroq, muguz qavat)",
      "w": [
        "Bir qavatli silindrik epiteliy",
        "O'zgaruvchan epiteliy",
        "Kiprikli epiteliy"
      ],
      "e": "Kaft va tovon terisida epidermisning barcha 5 ta qavati yaqqol rivojlangan."
    },
    {
      "c": "gs9",
      "q": "Siydik pufagi (qovuq) va siydik yo'llari devori a'zo cho'zilganda shakli o'zgaruvchi qaysi maxsus epiteliy bilan qoplangan?",
      "a": "O'zgaruvchan (Tranzitor) epiteliy — Uroteliy",
      "w": [
        "Bir qavatli yassi mezoteliy",
        "Ko'p qatorli kiprikli epiteliy",
        "Muguzlanuvchi epiteliy"
      ],
      "e": "Uroteliy qovuq to'lganda yassilashib cho'ziladi va siydikning to'qimaga o'tib ketishiga yo'l qo'ymaydi."
    },
    {
      "c": "gs10",
      "q": "Traxeya va yirik bronxlarning shilliq qavati chang zarrachalarini tutib qolib tashqariga haydovchi qaysi epiteliy bilan qoplangan?",
      "a": "Bir qavatli ko'p qatorli kiprikli (hilpillovchi) epiteliy (qadahsimon shilliq hujayralar bilan)",
      "w": [
        "Ko'p qavatli muguzlanuvchi epiteliy",
        "Kubsimon epiteliy",
        "Endoteliy"
      ],
      "e": "Mukotsiliar klirens mexanizmi kipriklarning halqum tomon tebranishi orqali nafas yo'llarini tozalaydi."
    },
    {
      "c": "gs11",
      "q": "Tashqi sekretsiya (ekzokrin) bezlari sekret ajratish mexanizmiga ko'ra qaysi 3 turga bo'linadi?",
      "a": "Merokrin (hujayra buzilmaydi — so'lak bezi), Apokrin (hujayra uchi uziladi — sut bezi), Golokrin (hujayra butunlay parchalanadi — yog' bezi)",
      "w": [
        "Endokrin, Parakrin, Autokrin",
        "Silliq, Targ'il, Yurak",
        "Gialin, Elastik, Kollagen"
      ],
      "e": "Teri yog' bezlari (gl. sebaceae) golokrin tipda sekret ajratadi."
    },
    {
      "c": "gs12",
      "q": "Yumshoq (siyrak) tolali biriktiruvchi to'qimada kollagen, elastin va glikozaminoglikanlarni (oraliq moddani) sintezlovchi asosiy hujayra qaysi?",
      "a": "Fibroblast (yetilgan shakli — fibrotsit)",
      "w": [
        "Eritrotsit",
        "Neyron",
        "Miozit"
      ],
      "e": "Fibroblastlar jarohat bitishida va chandiqlanishda kollagen tolalarni faol ishlab chiqaradi."
    },
    {
      "c": "gs13",
      "q": "Biriktiruvchi to'qimada Gistamin (allergik yallig'lanish mediatori) va Geparin (antikoagulyant) tutuvchi donador hujayralar qanday ataladi?",
      "a": "Semiz hujayralar (Labrotsitlar / Mast cells / To'qima bazofillari)",
      "w": [
        "Adipotsitlar",
        "Osteotsitlar",
        "Xondrotsitlar"
      ],
      "e": "Labrotsitlar degranulyatsiyaga uchraganda gistamin ajralib, kapillyarlar o'tkazuvchanligini oshiradi."
    },
    {
      "c": "gs14",
      "q": "B-limfotsitlar antigen bilan uchrashgach qaysi hujayraga aylanib, immunoglobulinlar (antitelolar) sintezlaydi?",
      "a": "Plazmatik hujayraga (Plazmotsit — yadrosi 'g'ildirak kegayi' ko'rinishida)",
      "w": [
        "Trombotsitga",
        "Eozinofilga",
        "Xondroblastga"
      ],
      "e": "Plazmotsitlar gumoral immunitetning asosiy antitelolar ishlab chiqaruvchi hujayralaridir."
    },
    {
      "c": "gs15",
      "q": "Tog'ay to'qimasining (Cartilago) oraliq modda tuzilishiga ko'ra 3 ta turi qaysilar?",
      "a": "1) Gialin (shishasimon — bo'g'im yuzalari, traxeya), 2) Elastik (quloq suprasi, hiqildoq usti), 3) Tolali (fibroz — umurtqalararo disklar)",
      "w": [
        "Qattiq, Yumshoq, Suyuq",
        "Sariq, Qizil, Oq",
        "Silliq va Ko'ndalang"
      ],
      "e": "Tog'ay to'qimasida qon tomirlar bo'lmaydi, u tog'ay usti pardasi (perixondriy) orqali diffuz oziqlanadi."
    },
    {
      "c": "gs16",
      "q": "G'ovak va zich plastinkasimon suyak to'qimasining strukturaviy birligi (Gavers tizimi) nima deb ataladi va qaysi hujayra suyakni yemiradi (rezorbsiyalaydi)?",
      "a": "Strukturaviy birligi — Osteon; Suyakni hosil qiluvchi — Osteoblast, yemiruvchi ko'p yadroli hujayra — Osteoklast",
      "w": [
        "Nefron va Xondrotsit",
        "Alveola va Pnevmotsit",
        "Sarkomer va Mioblast"
      ],
      "e": "Osteoblastlar suyak matriksini yaratadi, osteoklastlar esa eski suyak to'qimasini qayta qurishda rezorbsiya qiladi."
    },
    {
      "c": "gs17",
      "q": "Ko'ndalang-targ'il skelet muskul tolasining ikkita Z-chiziq (telofaza) orasida joylashgan qisqaruvchi strukturaviy birligi nima?",
      "a": "Sarkomer (I-disk va A-diskdan iborat)",
      "w": [
        "Osteon",
        "Sinaps",
        "Akson"
      ],
      "e": "Muskul qisqarganda aktin ipchalari miozin orasiga kirib, sarkomer uzunligi qisqaradi (I-disk torayadi, A-disk o'zgarmaydi)."
    },
    {
      "c": "gs18",
      "q": "Yurak muskul to'qimasi (Miokard) skelet muskulidan qaysi gistologik tuzilmalari bilan farq qiladi?",
      "a": "Hujayralar (kardiomiotsitlar) markaziy 1-2 yadroli bo'lib, bir-biri bilan 'Kiritma disklar' (nexuses / desmosomalar) orqali tarmoqlanib bog'langan",
      "w": [
        "Yadrosi umuman yo'q",
        "Faqat silliq miozitlardan iborat",
        "Kiritma disklari yo'q"
      ],
      "e": "Kiritma disklar qo'zg'alish impulsini barcha kardiomiotsitlarga sinxron o'tkazishni ta'minlaydi."
    },
    {
      "c": "gs19",
      "q": "Nerv hujayrasining (Neyron) impulslarni qabul qiluvchi shoxlangan o'simtalari va impulsni uzatuvchi bitta uzun o'simtasi nima deb ataladi?",
      "a": "Qabul qiluvchi — Dendritlar; Uzatuvchi uzun o'simta — Akson (Neyrit)",
      "w": [
        "Silia va Flagella",
        "Villi va Mikrovilli",
        "Miofibrilla va Tonofibrilla"
      ],
      "e": "Neyron tanasi va dendritlarida bazofil 'Nissl tigroid moddasi' (donador EPT) joylashgan."
    },
    {
      "c": "gs20",
      "q": "Markaziy asab tizimida (bosh va orqa miya) hamda Periferik asab tizimida nerv tolalarining mielin pardasini qaysi neyrogliya hujayralari hosil qiladi?",
      "a": "Markaziy asab tizimida — Oligodendrotsitlar; Periferik nervlarda — Shvann hujayralari (Neyrolemmotsitlar)",
      "w": [
        "Eritrotsitlar va Trombotsitlar",
        "Gepatotsitlar va Enterotsitlar",
        "Osteoblastlar"
      ],
      "e": "Mielinli tolalarda Ranvye bo'g'imlari bo'ylab impuls sakrab (saltator) juda tez (120 m/s gacha) tarqaladi."
    },
    {
      "c": "gs21",
      "q": "Bosh miya kapillyarlari va neyronlar orasida joylashib, Gemato-ensefalik baryer (GEB) hosil qilishda qatnashuvchi yulduzsimon gliya hujayralari qaysi?",
      "a": "Astrotsitlar",
      "w": [
        "Ependimotsitlar",
        "Xondrotsitlar",
        "Adipotsitlar"
      ],
      "e": "Astrotsit oyoqchalari kapillyarlarni o'rab olib, miyani toksinlardan himoyalovchi baryer hosil qiladi."
    },
    {
      "c": "gs22",
      "q": "Embriologiyada urug'langan tuxum hujayra (Zigota) maydalanishi natijasida hosil bo'lgan Blastula va Gastrula bosqichlarida qaysi 3 ta homila varaqasi shakllanadi?",
      "a": "Ektoderma (tashqi — asab tizimi, epidermis), Endoderma (ichki — hazm va nafas epiteliysi) va Mezoderma (o'rta — suyak, muskul, qon, buyrak)",
      "w": [
        "Epidermis, Derma, Gipoderma",
        "Intima, Media, Adventitsiya",
        "Endokard, Miokard, Epikard"
      ],
      "e": "Nerv naychasi va teri epidermisi ektodermadan, tayanch-harakat va yurak-qon tomir tizimi mezodermadan rivojlanadi."
    },
    {
      "c": "gs23",
      "q": "Arteriya va vena qon tomirlari devori ichkaridan tashqariga qarab qaysi 3 ta qavatdan (tunica) iborat?",
      "a": "1) Tunica intima (ichki endoteliy), 2) Tunica media (o'rta silliq muskul va elastik qavat), 3) Tunica adventitia (tashqi biriktiruvchi to'qima)",
      "w": [
        "Shilliq, Muskul va Seroz",
        "Epidermis va Derma",
        "Korteks va Medulla"
      ],
      "e": "Aorta — elastik tipdagi arteriya, o'rta va kichik arteriyalar esa muskul tipdagi arteriyalar hisoblanadi."
    },
    {
      "c": "gs24",
      "q": "Jigarning klassik morfofunksional birligi (Jigar bo'lakchasi) markazidan qaysi tomir o'tadi va uning devoridagi makrofag hujayralar nima deb ataladi?",
      "a": "Markaziy vena (v. centralis); sinusoid kapillyarlar devoridagi yulduzsimon makrofaglar — Kupfer hujayralari",
      "w": [
        "Aorta; Osteoklastlar",
        "O'pka arteriyasi; Alveolotsitlar",
        "Siydik nayi; Podotsitlar"
      ],
      "e": "Jigar triadasini bo'lakchalararo arteriya, vena va o't yo'lchasi tashkil etadi."
    },
    {
      "c": "gs25",
      "q": "O'pka alveolalari devorida gazlar almashinuvini ta'minlovchi I tip alvelotsitlar va alveolalar yopishib qolishidan saqlovchi 'Surfaktant' ishlab chiqaruvchi II tip hujayralar nisbati qanday?",
      "a": "I tip (yassi respirator) alveolotsitlar — aero-gematik baryer; II tip (katta sekretor) alveolotsitlar — fosfolipidli Surfaktant sintezlaydi",
      "w": [
        "Ikkalasi ham faqat shilliq ishlab chiqaradi",
        "Surfaktant bronxlarda ishlab chiqariladi",
        "Alveolada hujayra bo'lmaydi"
      ],
      "e": "Surfaktant alveolalarning sirt tarangligini pasaytirib, nafas chiqarganda puchayib qolishidan (atelektazdan) saqlaydi."
    },
    {
      "c": "gs26",
      "q": "Oshqozon tubi (fundal) bezlarida Xlorid kislota (HCl) va Kaslning ichki omilini (B12 vitamini so'rilishi uchun) qaysi hujayralar ishlab chiqaradi?",
      "a": "Pariyetal (qoplovchi / oksintik) hujayralar; Pepsinogenni esa Asosiy (bosh) hujayralar ishlab chiqaradi",
      "w": [
        "Qadahsimon hujayralar",
        "Panet hujayralari",
        "Gepatotsitlar"
      ],
      "e": "Pariyetal hujayralar shikastlansa axloridriya va B12-tanqislik anemiyasi rivojlanadi."
    },
    {
      "c": "gs27",
      "q": "T-limfotsitlarning antigen-mustaqil takomillashuvi (differensiatsiyasi) qaysi markaziy immun a'zoda kechadi?",
      "a": "Ayrisimon bezda — Timus (Thymus); B-limfotsitlarniki esa Qizil suyak ko'migida",
      "w": [
        "Taloqda",
        "Bodomsмон bezda",
        "Appendiksda"
      ],
      "e": "Qizil suyak ko'migi va Timus — markaziy immun a'zolar; taloq va limfa tugunlari — periferik immun a'zolardir."
    },
    {
      "c": "gs28",
      "q": "Buyrak koptokchalarida filtratsion baryer tarkibiga kiruvchi va 'oyoqchalar' (sitopodiyalar) hosil qiluvchi visseral varaq hujayralari nima deb ataladi?",
      "a": "Podotsitlar",
      "w": [
        "Yuxtaglomerulyar hujayralar",
        "Makula densa",
        "Mezangial hujayralar"
      ],
      "e": "Filtratsion baryer: 1) Fenestratsiyalangan endoteliy, 2) Uch qavatli bazal membrana, 3) Podotsitlar tirqishli diafragmasi."
    },
    {
      "c": "gs29",
      "q": "Gistologik preparatlarni tayyorlashda eng ko'p qo'llaniladigan 'Gemotoksilin va Eozin' (H&E) bo'yog'ida yadro va sitoplazma qanday rangga bo'yaladi?",
      "a": "Yadro (bazofil tuzilmalar: DNK/RNK) Gemotoksilin bilan ko'k-binafsha rangga; Sitoplazma (oksifil oqsillar) Eozin bilan pushti-qizil rangga bo'yaladi",
      "w": [
        "Yadro yashil, sitoplazma sariq",
        "Barchasi qora rangga",
        "Faqat yog'lar bo'yaladi"
      ],
      "e": "Gemotoksilin asosli bo'yoq bo'lib kislotali (bazofil) yadroni, Eozin kislotali bo'yoq bo'lib ishqoriy (oksifil) sitoplazmani bo'yaydi."
    },
    {
      "c": "gs30",
      "q": "Qalqonsimon bez follikulalari devoridagi tireotsitlar T3/T4 gormonlarini sintezlasa, parafolikulyar 'K-hujayralar' (C-hujayralar) qonda kalsiyni kamaytiruvchi qaysi gormonni ajratadi?",
      "a": "Kalsitonin (Tireokalsitonin — suyaklarda kalsiy to'planishini kuchaytirib, qondagi Ca²⁺ ni tushiradi)",
      "w": [
        "Paratgormon",
        "Aldosteron",
        "Glukagon"
      ],
      "e": "Kalsitonin va qalqon oldi bezining Paratgormoni qondagi Ca²⁺ muvozanatini qarama-qarshi yo'nalishda boshqaradi."
    }
  ],
  "biokimyo": [
    {
      "c": "bk1",
      "q": "Sog'lom inson qon plazmasida nahorga (och qoringa) glyukoza miqdorining kapillyar va venoz qondagi biokimyoviy me'yori qancha?",
      "a": "3.3 – 5.5 mmol/l (venoz plazmada 6.1 mmol/l gacha)",
      "w": [
        "10.0 – 15.0 mmol/l",
        "0.5 – 1.0 mmol/l",
        "20.0 – 25.0 mmol/l"
      ],
      "e": "Nahorga venoz plazmada glyukoza ≥ 7.0 mmol/l bo'lishi Qandli diabet tashxis mezonidir."
    },
    {
      "c": "bk2",
      "q": "Oxirgi 2–3 oy davomida qondagi o'rtacha glyukoza darajasini ko'rsatuvchi 'oltin standart' laboratoriya ko'rsatkichi qaysi?",
      "a": "Glikirlangan gemoglobin — HbA1c (me'yorda < 5.7%, diabetda ≥ 6.5%)",
      "w": [
        "Umumiy bilirubin",
        "Mochevina",
        "Xolesterin"
      ],
      "e": "Eritrotsit 120 kun yashagani sababli HbA1c so'nggi 3 oylik glikemiya profilini aniq ko'rsatadi."
    },
    {
      "c": "bk3",
      "q": "Qon zardobida umumiy oqsilning (Total Protein) biokimyoviy me'yori qancha va uning asosiy fraksiyalari qaysilar?",
      "a": "65 – 85 g/l (Albuminlar ~55-65% va Globulinlar: α1, α2, β, γ)",
      "w": [
        "5 – 10 g/l",
        "200 – 300 g/l",
        "1 – 2 g/l"
      ],
      "e": "Albuminlar jigarda sintezlanadi, onkotik bosimni saqlaydi va bilirubin, yog' kislotalari hamda dorilarni tashiydi."
    },
    {
      "c": "bk4",
      "q": "Jigar parenximasi (gepatotsitlar) va yurak miokardi shikastlanganda qonda keskin oshuvchi aminotransferaza fermentlari qaysilar?",
      "a": "ALT (Alaninaminotransferaza — asosan jigarda) va AST (Aspartataminotransferaza — miokard va jigarda)",
      "w": [
        "Pepsin va Tripsin",
        "Lizotsim va Ptialin",
        "Renin va Eritropoetin"
      ],
      "e": "O'tkir virusli gepatitda ALT ko'proq oshsa, miokard infarktida AST (De Ritis koeffitsienti AST/ALT > 1.33) oshadi."
    },
    {
      "c": "bk5",
      "q": "Gemoglobin parchalanishidan hosil bo'luvchi Umumiy Bilirubinning qon zardobidagi me'yori qancha va u qaysi fraksiyalardan iborat?",
      "a": "3.4 – 20.5 mkmol/l: Bilvosita (erkin, konyugatsiyalanmagan — 75%) va Bevosita (bog'langan, glyukuronid — 25%)",
      "w": [
        "100 – 200 mkmol/l",
        "0 mkmol/l",
        "500 mkmol/l"
      ],
      "e": "Bilirubin > 34–40 mkmol/l dan oshganda teri va skleralar sarg'ayishi (Sariqlik / Ikterus) ko'zga ko'rinadi."
    },
    {
      "c": "bk6",
      "q": "Hujayra sitoplazmasida 1 molekula glyukozaning kislorodsiz (anaerob) va kislorodli (aerob) glikolizda parchalanishidan sof nechta ATF hosil bo'ladi?",
      "a": "Anaerob glikolizda (sut kislotagacha) — sof 2 molekula ATF; To'liq aerob oksidlanishda (CO₂ va H₂O gacha) — 30–32 (yoki 36–38) molekula ATF",
      "w": [
        "Anaerobda 100 ta ATF",
        "Ikkalasida ham 0 ta ATF",
        "Faqat 1 ta ATF"
      ],
      "e": "Anaerob glikolizda 4 ta ATF hosil bo'lib, 2 tasi sarflangani uchun sof foyda 2 molekula ATF va 2 molekula Laktatdir."
    },
    {
      "c": "bk7",
      "q": "Mitoxondriya matriksida kechuvchi 'Krebs sikli' (Limon kislota sikli / Uch karbon kislotalar sikli) qaysi moddaning oksalatsetat bilan birikishidan boshlanadi?",
      "a": "Atsetil-KoA (Acetyl-CoA) + Oksalatsetat (4C) -> Sitrat (Limon kislota, 6C)",
      "w": [
        "Mochevina + Suv",
        "Xolesterin + Safro",
        "Kreatinin + Ammoniy"
      ],
      "e": "Krebs siklining bir aylanishida 3 ta NADH, 1 ta FADH₂, 1 ta GTF (ATF) va 2 molekula CO₂ hosil bo'ladi."
    },
    {
      "c": "bk8",
      "q": "Oqsillar almashinuvining zaharli mahsuloti bo'lgan Ammiak (NH₃) qaysi a'zoda va qaysi sikl orqali zararsiz Mochevinaga (Karbamid) aylantiriladi?",
      "a": "Jigarda — Ornitin sikli (Krebs-Genselayts sikli) orqali Mochevina sintezlanadi (qonda me'yori 2.5–8.3 mmol/l)",
      "w": [
        "O'pkada — glikoliz orqali",
        "Taloqda — gemoliz orqali",
        "Oshqozonda"
      ],
      "e": "Jigar yetishmovchiligida mochevina sintezi pasayib qonda ammiak oshadi; buyrak yetishmovchiligida (uremiya) esa mochevina va kreatinin oshadi."
    },
    {
      "c": "bk9",
      "q": "Buyrak koptokchalari filtratsiyasini eng aniq baholovchi va muskul kreativ fosfatidan hosil bo'luvchi biokimyoviy ko'rsatkich qaysi?",
      "a": "Kreatinin (me'yori: ayollarda 44–80 mkmol/l, erkaklarda 62–106 mkmol/l)",
      "w": [
        "Amilaza",
        "Lipaza",
        "Bilirubin"
      ],
      "e": "Kreatinin kanalchalarda qayta so'rilmagani sababli buyrak filtratsiyasi (GFT) ning eng ishonchli markeridir."
    },
    {
      "c": "bk10",
      "q": "Yog'da erydigan 4 ta vitamin qaysi qatorda to'liq va to'g'ri ko'rsatilgan?",
      "a": "A (Retinol), D (Kalsiferol), E (Tokoferol) va K (Filloxinon / Vikasol) vitaminlari — 'KEDA'",
      "w": [
        "B1, B6, B12 va C vitaminlari",
        "C, PP, Folat kislota",
        "Barcha vitaminlar suvda eriydi"
      ],
      "e": "A, D, E, K vitaminlari yog'da eriydi va o't kislotalari ishtirokida ingichka ichakda so'riladi."
    },
    {
      "c": "bk11",
      "q": "Vitamin C (Askorbin kislota) tanqisligida kollagen sintezi buzilib, milklar qonashi va nuqtali qon quyilishlar bilan kechuvchi kasallik nima?",
      "a": "Singa (Skorbut)",
      "w": [
        "Beri-beri (B1 tanqisligi)",
        "Pellagra (PP / B3 tanqisligi)",
        "Raxit (D tanqisligi)"
      ],
      "e": "Askorbin kislota prolin va lizinning gidroksillanishida (kollagen pishib yetilishida) kofaktor bo'lib xizmat qiladi."
    },
    {
      "c": "bk12",
      "q": "Vitamin B12 (Sianokobalamin) va Folat kislota (B9) tanqisligida DNK sintezi buzilib qanday anemiya rivojlanadi?",
      "a": "Megaloblastik (Pernitsioz / Addison-Birmer) giperxrom anemiya",
      "w": [
        "Temir tanqisligi mikrositar anemiyasi",
        "O'roqsimon hujayrali anemiya",
        "Gemofiliya A"
      ],
      "e": "B12 vitamini me'da pariyetal hujayralari ajratuvchi Kaslning ichki omili yordamida yonbosh ichakda so'riladi."
    },
    {
      "c": "bk13",
      "q": "Qon tomirlari devoriga xolesterin tiqilib ateroskleroz rivojlanishiga sabab bo'luvchi ('yomon') va tomirlarni xolesterindan tozalovchi ('yaxshi') lipoproteinlar qaysilar?",
      "a": "'Yomon' (aterogen) — PZLP / ZPLP (LDL — past zichlikdagi lipoproteinlar); 'Yaxshi' (antiaterogen) — YuZLP (HDL — yuqori zichlikdagi)",
      "w": [
        "YuZLP ateroskleroz chaqiradi",
        "Xilomikronlar tomirni tozalaydi",
        "Farqi yo'q"
      ],
      "e": "Umumiy xolesterin me'yori < 5.2 mmol/l; YuZLP (HDL) xolesterinni to'qimalardan jigarga qaytarib olib ketadi."
    },
    {
      "c": "bk14",
      "q": "O'tkir miokard infarktini dastlabki 3–4 soat ichida 99% aniqlik bilan tasdiqlovchi eng spetsifik kardio-biokimyoviy markerlar qaysilar?",
      "a": "Kardiospetsifik Troponin I va Troponin T hamda Kreatinkinaza-MB (KK-MB) izofermenti",
      "w": [
        "Ishqoriy fosfataza va GGT",
        "Siydik kislotasi",
        "Alfa-amilaza"
      ],
      "e": "Troponin I/T faqat yurak miokardi nekrozga uchraganda qonga chiqadi va 7–14 kungacha yuqori saqlanadi."
    },
    {
      "c": "bk15",
      "q": "O'tkir pankreatitda (me'da osti bezi yallig'lanishida) qon va siydikda (diastaza) 5–10 barobar keskin oshuvchi ferment qaysi?",
      "a": "Alfa-amilaza va Pankreatik lipaza",
      "w": [
        "Kislotali fosfataza",
        "Xolinesteraza",
        "Pepsin"
      ],
      "e": "Me'da osti bezi hujayralari yemirilganda amilaza va lipaza qonga o'tib, kuchli belbog'simon og'riq bilan kechadi."
    },
    {
      "c": "bk16",
      "q": "Purin asoslari (Adenin va Guanin) parchalanishining yakuniy mahsuloti nima va u qonda ko'payib bo'g'imlarda tuz bo'lib cho'ksa qaysi kasallik kelib chiqadi?",
      "a": "Siydik kislotasi (Uric acid) — oshib ketsa Podagra (Gout) kasalligi va urat toshlari kelib chiqadi",
      "w": [
        "Mochevina — qandli diabet",
        "Sut kislotasi — raxit",
        "O't kislotasi — gastrit"
      ],
      "e": "Ksantinoksidaza fermenti gipoksantin va ksantinni siydik kislotasiga aylantiradi (Podagrada Allopurinol beriladi)."
    },
    {
      "c": "bk17",
      "q": "Fermentlarning (Enzimlarning) xalqaro tasnifi bo'yicha barcha fermentlar bajaradigan reaksiyasiga qarab nechta sinfga bo'linadi?",
      "a": "6 ta (zamonaviy tasnifda 7 ta: +Translokazalar) sinfga: Oksidoreduktazalar, Transferazalar, Gidrolazalar, Liazalar, Izomerazalar, Ligazalar",
      "w": [
        "Faqat 2 ta sinfga",
        "20 ta sinfga",
        "Fermentlar sinflanmaydi"
      ],
      "e": "Har bir ferment 4 xonali KF (EC) kodiga ega (masalan, 1 — Oksidoreduktazalar, 3 — Gidrolazalar)."
    },
    {
      "c": "bk18",
      "q": "Oqsil molekulasining fazoviy tuzilishida Birlamchi, Ikkilamchi, Uchinlamchi va To'rtlamchi strukturalar qanday bog'lar bilan tutib turiladi?",
      "a": "Birlamchi — peptid bog'lar; Ikkilamchi (α-spiral, β-qatlam) — vodorod bog'lar; Uchinlamchi — disulfid (-S-S-), ion va gidrofob bog'lar",
      "w": [
        "Birlamchi — faqat vodorod bog'i",
        "Barchasi glikozid bog'i",
        "Fosfoefir bog'i"
      ],
      "e": "Oqsil denaturatsiyasida uchinlamchi va ikkilamchi struktura buziladi, ammo birlamchi peptid zanjiri saqlanib qoladi."
    },
    {
      "c": "bk19",
      "q": "Organizmda Glyukozaning zaxira polisaxarid shakli nima va u qaysi ikkita a'zoda eng ko'p to'planadi?",
      "a": "Glikogen ('hayvon kraxmali') — Jigarda (qondagi qandni saqlash uchun) va Skelet muskullarida (muskul ishi energiyasi uchun)",
      "w": [
        "Kletchatka (Selluloza) — taloqda",
        "Xitin — suyakda",
        "Inulin — buyrakda"
      ],
      "e": "Glikogen sintezi glikogenez (Insulin faollashtiradi), parchalanishi glikogenoliz (Glyukagon va Adrenalin faollashtiradi) deyiladi."
    },
    {
      "c": "bk20",
      "q": "Ochlikda yoki qandli diabetda yog' kislotalarining haddan tashqari β-oksidlanishi natijasida jigarda hosil bo'luvchi 3 ta 'Keton tanachalari' qaysilar?",
      "a": "Atsetosirka kislota (Atsetoatsetat), β-oksiyog' kislota (β-gidroksibutirat) va Atseton",
      "w": [
        "Sut kislota, Olma kislota, Limon kislota",
        "Glyukoza, Fruktoza, Galaktoza",
        "Alanin, Glitsin, Valin"
      ],
      "e": "Keton tanachalari qonda ko'paysa ketonemiya, siydikda chiqsa ketonuriya va og'ir ketoatsidoz rivojlanadi."
    },
    {
      "c": "bk21",
      "q": "Inson organizmida sintezlanmaydigan va albatta ovqat tarkibida olinishi shart bo'lgan 'Almashinmaydigan aminokislotalar' nechta?",
      "a": "8 ta (bolalarda Arginin va Gistidin bilan 10 ta): Valin, Leysin, Izoleysin, Lizin, Metionin, Treonin, Fenilalanin, Triptofan",
      "w": [
        "Barcha 20 ta aminokislota",
        "Faqat 1 ta — Glitsin",
        "30 ta aminokislota"
      ],
      "e": "Barcha almashinmaydigan aminokislotalarni tutuvchi oqsillar (go'sht, tuxum, sut, baliq) to'laqonli oqsillar deyiladi."
    },
    {
      "c": "bk22",
      "q": "O'tkir yallig'lanish va bakterial infeksiyalarda jigarda sintezlanib, qonda 10–100 barobar tez oshuvchi o'tkir faza oqsili qaysi?",
      "a": "C-reaktiv oqsil (CRP / СРБ — me'yorda < 5 mg/l) va Prokalsitonin",
      "w": [
        "Albumin",
        "Transferrin",
        "Miozin"
      ],
      "e": "C-reaktiv oqsil bakterial yallig'lanish va to'qima nekrozining eng sezgir ko'rsatkichidir."
    },
    {
      "c": "bk23",
      "q": "Temir (Fe) mikroelementini qonda tashuvchi oqsil va to'qimalarda (jigar, ko'mik) temir zaxirasini ko'rsatuvchi asosiy oqsil qaysi?",
      "a": "Tashuvchi oqsil — Transferrin; Temir zaxirasi ko'rsatkichi — Ferritin",
      "w": [
        "Seruloplazmin va Gaploglobin",
        "Fibrinogen va Protrombin",
        "Kollagen va Keratin"
      ],
      "e": "Temir tanqisligi anemiyasini eng erta bosqichda aniqlash uchun qondagi Ferritin miqdori tekshiriladi."
    },
    {
      "c": "bk24",
      "q": "Vitamin K (Filloxinon) jigarda qon ivishining qaysi omillari sintezida bevosita kofaktor sifatida qatnashadi?",
      "a": "II (Protrombin), VII (Prokonvertin), IX (Kristmas omili) va X (Styuart-Prauer omili) omillari",
      "w": [
        "Faqat eritrotsitlar",
        "Faqat trombotsitlar",
        "Insulin sintezi"
      ],
      "e": "Varfarin kabi bilvosita antikoagulyantlar K vitaminining antagonistlari sifatida ushbu omillar sintezini bloklaydi."
    },
    {
      "c": "bk25",
      "q": "Fenilketonuriya irsiy kasalligi qaysi aminokislotani Tirozinga aylantiruvchi 'Fenilalanin-4-gidroksilaza' fermentining tug'ma yetishmovchiligidan kelib chiqadi?",
      "a": "Fenilalanin aminokislotasi (chaqaloqlarda tug'ruqxonada neonatal skrining orqali aniqlanadi)",
      "w": [
        "Glitsin",
        "Glutamin",
        "Alanin"
      ],
      "e": "Erta aniqlanib fenilalaninsiz maxsus parhez tayinlansa, bolada aqliy zaiflikning to'liq oldi olinadi."
    },
    {
      "c": "bk26",
      "q": "O't yo'llari tiqilib qolganda (Mexanik sariqlik / Xolestaz) qonda Bevosita bilirubin bilan birga qaysi 2 ta xolestaz fermenti keskin oshadi?",
      "a": "Ishqoriy fosfataza (ЩФ / ALP) va Gamma-glutamiltransferaza (GGTP / GGT)",
      "w": [
        "Pepsin va Renin",
        "Kreatinkinaza va Troponin",
        "Lizotsim"
      ],
      "e": "IF (ALP) va GGTP o't yo'llari epiteliysida joylashgan bo'lib, xolestazning asosiy biokimyoviy markerlaridir."
    },
    {
      "c": "bk27",
      "q": "Pentozofosfat yo'li (glyukoza oksidlanishining muqobil yo'li) hujayrani qaysi ikkita muhim mahsulot bilan ta'minlaydi?",
      "a": "1) Ribozo-5-fosfat (DNK va RNK nukleotidlari sintezi uchun) va 2) NADPH (yog' kislotalari sintezi hamda eritrotsitlarni oksidlovchi stressdan himoyalash uchun)",
      "w": [
        "Faqat sut kislota va spirt",
        "Mochevina va kreatinin",
        "Kollagen va elastin"
      ],
      "e": "Glyukoza-6-fosfatdegidrogenaza (G6PD) tanqisligida NADPH yetishmay, ba'zi dorilar qabul qilinganda eritrotsitlar gemolizga uchraydi."
    },
    {
      "c": "bk28",
      "q": "Nodir uglevod bo'lmagan birikmalardan (aminokislotalar, laktat, glitserin) jigar va buyrak po'stlog'ida yangi glyukoza sintezlanishi nima deb ataladi?",
      "a": "Glyukoneogenez (Kortizol va Glyukagon tomonidan faollashtiriladi)",
      "w": [
        "Glikoliz",
        "Glikogenoliz",
        "Lipoliz"
      ],
      "e": "Uzoq ochlikda glyukoneogenez bosh miya va eritrotsitlarni glyukoza bilan uzluksiz ta'minlaydi."
    },
    {
      "c": "bk29",
      "q": "Qon ivish tizimini baholashda Koagulogrammadagi Xalqaro Normallashtirilgan Nisbat (XNN / МНО / INR) me'yorda nechaga teng?",
      "a": "0.85 – 1.15 (Protrombin indeksi PTI esa 80–100%, Fibrinogen 2–4 g/l)",
      "w": [
        "10.0 – 20.0",
        "0.01",
        "50.0"
      ],
      "e": "Varfarin qabul qilayotgan bemorlarda INR ko'rsatkichi trombozning oldini olish uchun 2.0–3.0 oralig'ida ushlab turiladi."
    },
    {
      "c": "bk30",
      "q": "Kaliy (K⁺) va Natriy (Na⁺) elektrolitlarining qon plazmasidagi fiziologik va biokimyoviy me'yori qancha?",
      "a": "Kaliy (K⁺): 3.5 – 5.1 mmol/l; Natriy (Na⁺): 135 – 145 mmol/l",
      "w": [
        "Kaliy: 140 mmol/l, Natriy: 4 mmol/l",
        "Ikkalasi ham 50 mmol/l",
        "Kaliy: 0.1 mmol/l"
      ],
      "e": "Giperkaliyemiya (> 6.0–6.5 mmol/l) yurak ritmining xavfli buzilishi va yurak to'xtashiga olib kelishi mumkin."
    }
  ],
  "mikrobiologiya": [
    {
      "c": "mk1",
      "q": "Gram usulida bo'yalganda qalin peptidoglikan devorga ega Gram-musbat (+) va yupqa devorli Gram-manfiy (-) bakteriyalar qanday rangga bo'yaladi?",
      "a": "Gram-musbat (+) — binafsha-ko'k rangga (gensianvioletni ushlab qoladi); Gram-manfiy (-) — pushti-qizil rangga (fuksin bilan)",
      "w": [
        "Gram (+) yashil, Gram (-) sariq",
        "Ikkalasi ham qora rangga",
        "Gram (+) qizil, Gram (-) ko'k"
      ],
      "e": "Stafilokokk va Streptokokklar Gram (+), Ichak tayoqchasi (E. coli), Salmonella va Gonokokklar Gram (-) bakteriyalardir."
    },
    {
      "c": "mk2",
      "q": "Bakteriyalar morfologik shakliga ko'ra qaysi 4 ta asosiy guruhga bo'linadi?",
      "a": "1) Kokklar (sharsimon), 2) Batsillalar / Tayoqchasimonlar, 3) Vibrionlar (vergulsimon), 4) Spirillalar va Spiroxetalar (buramasimon)",
      "w": [
        "Faqat viruslar va zamburug'lar",
        "Kvadrat va uchburchak",
        "Hujayrasiz shakllar"
      ],
      "e": "Uzum shingiliga o'xshash kokklar — Stafilokokk, zanjirsimon — Streptokokk, juft — Diplokokk deyiladi."
    },
    {
      "c": "mk3",
      "q": "Sil tayoqchasi (Mycobacterium tuberculosis — Kox tayoqchasi) kislotaga chidamli mumsimon qobiqqa ega bo'lgani uchun qaysi maxsus usulda bo'yaladi?",
      "a": "Sil-Nilsen (Ziehl-Neelsen) usulida (kislotaga chidamli tayoqchalar ko'k fonda yoqutdek qizil rangga bo'yaladi)",
      "w": [
        "Oddiy metilen ko'ki bilan",
        "Lyugol eritmasi bilan",
        " Kumushlash usulida"
      ],
      "e": "Mikobakteriyalar va moxov (lepra) qo'zg'atuvchisi Sil-Nilsen usulida qizil rangda aniqlanadi."
    },
    {
      "c": "mk4",
      "q": "Noqulay tashqi muhit sharoitida (qurish, qaynatish) o'zini himoyalash uchun endospora (spora) hosil qiluvchi 2 ta asosiy patogen bakteriya avlodini toping:",
      "a": "Bacillus (kuydirgi — B. anthracis) va Clostridium (qoqshol — C. tetani, botulizm — C. botulinum, gazli gangrena)",
      "w": [
        "Staphylococcus va Streptococcus",
        "Escherichia va Salmonella",
        "Neisseria va Treponema"
      ],
      "e": "Sporalar oddiy qaynatishda (100°C) o'lmaydi, faqat avtoklavda (132°C, 2 atm) yoki suxojarda (180°C) yo'qotiladi."
    },
    {
      "c": "mk5",
      "q": "Bakteriyalar ishlab chiqaradigan Ekzotoksinlar va Endotoksinlar orasidagi asosiy farq nimada?",
      "a": "Ekzotoksinlar — tirik bakteriya tashqariga ajratadigan kuchli zaharli oqsillar (anatoksinga aylantirsa bo'ladi); Endotoksinlar — Gram (-) bakteriya o'lganda ajraladigan lipopolisaxarid (LPS)",
      "w": [
        "Endotoksinlar faqat viruslarda bo'ladi",
        "Ekzotoksinlar issiqqa chidamli lipidlar",
        "Farqi yo'q"
      ],
      "e": "Qoqshol, difteriya va botulizm ekzotoksinlaridan formalin va issiqlik ta'sirida zararsiz vaksina — Anatoksin olinadi."
    },
    {
      "c": "mk6",
      "q": "Faqat bakteriya hujayralarini zararlaydigan va ularni eritib yuboradigan (lizis qiladigan) maxsus viruslar nima deb ataladi?",
      "a": "Bakteriofaglar (Faglar)",
      "w": [
        "Prionlar",
        "Viroidlar",
        "Rikketsiyalar"
      ],
      "e": "Bakteriofaglar dizenteriya, salmonellyoz va yiringli infeksiyalarni davolash hamda profilaktikasida qo'llaniladi."
    },
    {
      "c": "mk7",
      "q": "Hujayra devori butunlay bo'lmaydigan, uch qavatli sitoplazmatik membrana bilan o'ralgan eng mayda polimorf bakteriyalar qaysi?",
      "a": "Mikoplazmalar (Mycoplasma pneumoniae) — hujayra devori yo'qligi sababli Penitsillin va beta-laktam antibiotiklar ularga ta'sir qilmaydi",
      "w": [
        "Stafilokokklar",
        "Klodtridiyalar",
        "Aktinomitsetlar"
      ],
      "e": "Mikoplazmalarga hujayra ichida oqsil sintezini bloklovchi makrolidlar (Azitromitsin) va tetratsiklinlar ta'sir qiladi."
    },
    {
      "c": "mk8",
      "q": "Inson qon zardobida mavjud bo'lgan 5 ta Immunoglobulin (Antitelo) sinflari qaysilar va qaysi biri yo'ldosh (platsenta) orqali onadan homilaga o'tadi?",
      "a": "IgG, IgM, IgA, IgE, IgD — shundan faqat IgG yo'ldosh orqali o'tib chaqaloqni dastlabki 6 oyda himoya qiladi",
      "w": [
        "Faqat IgM yo'ldoshdan o'tadi",
        "IgE ona sutida bo'ladi",
        "Faqat 2 ta sinf bor"
      ],
      "e": "IgM — o'tkir birlamchi infeksiya ko'rsatkichi; IgG — surunkali/o'tkazilgan infeksiya va uzoq muddatli immunitet; sekretor IgA — shilliq qavatlar himoyachisi; IgE — allergiya va gelmintozda oshadi."
    },
    {
      "c": "mk9",
      "q": "OITS (SPID) qo'zg'atuvchisi bo'lgan Odam Immunotanqisligi Virusi (OIV / HIV) qaysi viruslar oilasiga kiradi va qaysi hujayralarni nishonga oladi?",
      "a": "Retroviruslar oilasiga (RNK-saqlovchi, teskari transkriptaza fermenti bor) — CD4+ T-xelper limfotsitlar va makrofaglarni zararlaydi",
      "w": [
        "Adenoviruslar — eritrotsitlarni",
        "Gerpesviruslar — suyak hujayralarini",
        "Bakteriyalar oilasiga"
      ],
      "e": "OIV teskari transkriptaza (revertaza) yordamida o'z RNKsini DNKga aylantirib, T-xelper genomiga birikadi."
    },
    {
      "c": "mk10",
      "q": "Oshqozon va 12 barmoqli ichak yara kasalligi hamda surunkali gastritning 80–90% holatlarda infeksion sababchisi bo'lgan spiral bakteriya qaysi?",
      "a": "Helicobacter pylori (Ureaza fermenti yordamida mochevinani ammiakka parchalab, me'da kislotasidan o'zini himoyalaydi)",
      "w": [
        "Vibrio cholerae",
        "Corynebacterium diphtheriae",
        "Bordetella pertussis"
      ],
      "e": "B. Marshall va R. Uorren H. pylori ning gastrit va yara kasalligidagi rolini isbotlab Nobel mukofotini olganlar."
    },
    {
      "c": "mk11",
      "q": "Vabo (Xolera) kasalligini qo'zg'atuvchi Vibrio cholerae bakteriyasi o'sishi uchun qanday ozuqa muhitini (pH) yoqtiradi?",
      "a": "Ishqoriy muhitni (pH 8.5 – 9.0, 1% li ishqoriy peptonli suv) — shu sababli oshqozonning kislotali shirasida ko'p qismi halok bo'ladi",
      "w": [
        "Kuchli kislotali muhitni (pH 1.0)",
        "Faqat qattiq suyak muhitini",
        "Qorong'i vakuumni"
      ],
      "e": "Vabo vibrioni ingichka ichakda xolerogen ekzotoksin ajratib, 'guruch qaynatmasiga' o'xshash profuz ich ketish va suvsizlanish chaqiradi."
    },
    {
      "c": "mk12",
      "q": "Konserva mahsulotlari, dudlangan baliq va kolbasalarda kislorodsiz (anaerob) sharoitda ko'payib, eng kuchli neyrotoksin ishlab chiqaruvchi bakteriya qaysi?",
      "a": "Clostridium botulinum (Botulizm qo'zg'atuvchisi — juft ko'rish, yutinish va nafas falajini keltirib chiqaradi)",
      "w": [
        "Salmonella typhi",
        "Shigella dysenteriae",
        "Brucella melitensis"
      ],
      "e": "Shishgan (bombajli) konserva bankalarini iste'mol qilish botulizm bilan zaharlanishning asosiy sababidir."
    },
    {
      "c": "mk13",
      "q": "Alexander Fleming tomonidan 1928-yilda kashf etilgan birinchi tabiiy antibiotik Penitsillin qaysi mikroorganizmdan olingan va bakteriyaning nimasini buzadi?",
      "a": "Penicillium notatum mog'or zamburug'idan — bakteriya hujayra devori (peptidoglikan) sintezini bloklaydi",
      "w": [
        "Viruslardan — DNK ni eritadi",
        "Suv o'tlaridan — kapsulani o'stiradi",
        "Qon plazmasidan"
      ],
      "e": "Beta-laktam antibiotiklar (penitsillinlar, sefalosporinlar, karbapenemlar) bakteriya hujayra devori sintezini buzib bakteritsid ta'sir ko'rsatadi."
    },
    {
      "c": "mk14",
      "q": "Polimeraza zanjir reaksiyasi (PZR / ПЦР / PCR) diagnostika usulining asosiy mohiyati nima?",
      "a": "Patogenning (virus yoki bakteriyaning) juda oz miqdordagi DNK/RNK uchastkasini Taq-polimeraza fermenti yordamida millionlab marta ko'paytirib (amplifikatsiya qilib) aniqlash",
      "w": [
        "Bakteriyani oddiy lupa bilan ko'rish",
        "Qon bosimini o'lchash",
        "Siydik rangini tekshirish"
      ],
      "e": "PZR (PCR) COVID-19, Gepatit B/C, OIV va tug'ma infeksiyalarni eng erta va 100% aniq topuvchi molekulyar-genetik usuldir."
    },
    {
      "c": "mk15",
      "q": "Immunoferment tahlili (IFT / ИФА / ELISA) laboratoriya diagnostikasida nimani aniqlash uchun qo'llaniladi?",
      "a": "Qon zardobida aniq bir qo'zg'atuvchiga qarshi hosil bo'lgan spetsifik Antitelolar (IgM, IgG) yoki patogen Antigenlarini 'Antigen-Antitelo' reaksiyasi orqali aniqlash",
      "w": [
        "Qondagi temir miqdorini",
        "O'pka hajmini",
        "Yurak klapanlarini"
      ],
      "e": "IFA ferment bilan nishonlangan kon'yugat yordamida rang o'zgarishi optik zichligini fotometrda o'lchaydi."
    },
    {
      "c": "mk16",
      "q": "Faol (aktiv) sun'iy immunitet va Passiv sun'iy immunitet orasidagi farq nima?",
      "a": "Faol sun'iy immunitet — Vaksina (yoki anatoksin) yuborilganda organizmning o'zi antitelolar ishlab chiqaradi; Passiv sun'iy immunitet — tayyor Zardob (immunoglobulin) yuboriladi",
      "w": [
        "Vaksina passiv, zardob faol",
        "Ikkalasi ham 1 soat ishlaydi",
        "Faol immunitetda dori berilmaydi"
      ],
      "e": "Vaksina uzoq muddatli profilaktika uchun, tayyor davolovchi Zardob (masalan, qoqsholga, quturishga, ilon zahriga qarshi) shoshilinch yordam uchun yuboriladi."
    },
    {
      "c": "mk17",
      "q": "Sifilis (Zaxm) kasalligining qo'zg'atuvchisi qaysi mikroorganizm hisoblanadi?",
      "a": "Oqish treponema — Treponema pallidum (Spirochaetaceae oilasi, 8–12 ta bir tekis buramali spiroxeta)",
      "w": [
        "Neisseria gonorrhoeae",
        "Chlamydia trachomatis",
        "Trichomonas vaginalis"
      ],
      "e": "Sifilis serodiagnostikasida Vasserman (RW), RPR va IFA/RIBT reaksiyalari qo'llaniladi."
    },
    {
      "c": "mk18",
      "q": "Virusli Gepatitlarning qaysi turlari 'iflos qo'l', suv va oziq-ovqat (fekal-oral mexanizm) orqali, qaysilari esa qon va parenteral yo'l bilan yuqadi?",
      "a": "Fekal-oral (suv/ovqat) orqali: Gepatit A va E; Parenteral (qon, tibbiy asboblar, jinsiy) orqali: Gepatit B, C va D",
      "w": [
        "Barchasi faqat havo orqali",
        "Gepatit B suv orqali, Gepatit A qon orqali",
        "Chivin chaqishi orqali"
      ],
      "e": "Gepatit D (Delta-virus) defektli virus bo'lib, faqat Gepatit B virusi (HBsAg) bor organizmdagina ko'paya oladi."
    },
    {
      "c": "mk19",
      "q": "Quturish (Rabies / Gidrofobiya) kasalligini chaqiruvchi neyrotrop virus odamga qanday yuqadi va bosh miya neyronlarida qanday kiritmalar hosil qiladi?",
      "a": "Quturgan hayvonlar (it, tulki, bo'ri, mushuk) tishlaganda so'lak orqali yuqadi; Ammon shoxi neyronlarida 'Babesh-Negri tanachalari' hosil qiladi",
      "w": [
        "Meva-sabzavot orqali",
        "Chivin orqali",
        "Suvda cho'milganda"
      ],
      "e": "Klinik belgilar (suvdan qo'rqish) boshlangach quturish 100% o'lim bilan tugaydi; tishlagan zahoti antirabik vaksina (KOKAV) va immunoglobulin qilish hayotni saqlab qoladi!"
    },
    {
      "c": "mk20",
      "q": "Bakteriya hujayrasida asosiy xromosomadan tashqari sitoplazmada joylashgan va antibiotiklarga chidamlilik (rezistentlik — R-gen) genlarini tashuvchi kichik halqasimon DNK nima?",
      "a": "Plazmida",
      "w": [
        "Ribosoma",
        "Mezosoma",
        "Flagella"
      ],
      "e": "Bakteriyalar kon'yugatsiya paytida R-plazmidalarni bir-biriga uzatib, antibiotiklarga chidamlilikni tarqatadi."
    },
    {
      "c": "mk21",
      "q": "Kasalxona ichi yiringli-septik infeksiyalarining (furunkul, abssess, osteomiyelit, sepsis) eng ko'p uchraydigan, oltin pigment va plazmokoagulaza hosil qiluvchi qo'zg'atuvchisi qaysi?",
      "a": "Staphylococcus aureus (Tilla rang stafilokokk, shu jumladan metitsillinga chidamli MRSA shtammi)",
      "w": [
        "Lactobacillus acidophilus",
        "Bifidobacterium",
        "Saccharomyces"
      ],
      "e": "S. aureus lesitinaza, plazmokoagulaza va gemolizin fermentlari bilan yuqori patogenlik namoyon etadi."
    },
    {
      "c": "mk22",
      "q": "Angina (tonzillit), skarlatina, saramas (roja) hamda ulardan keyin rivojlanuvchi Revmatizm va O'tkir glomerulonefritga qaysi bakteriya sabab bo'ladi?",
      "a": "Beta-gemolitik streptokokk A guruhi (Streptococcus pyogenes)",
      "w": [
        "Escherichia coli",
        "Bacillus subtilis",
        "Vibrio cholerae"
      ],
      "e": "Streptokokkning M-oqsili yurak klapanlari va buyrak koptokchalari to'qimasi bilan o'xshash bo'lgani uchun autoimmun revmatizm keltirib chiqaradi."
    },
    {
      "c": "mk23",
      "q": "Bakteriyalarning antibiotiklarga sezuvchanligini aniqlash (Antibiotikogramma) uchun Petri kosachasidagi ozuqa muhitiga antibiotikli qog'oz disklar qo'yish usuli nima deb ataladi?",
      "a": "Disk-diffuziya usuli (Kirbi-Bauer usuli — disk atrofidagi bakteriya o'smagan zona diametri millimetrda o'lchanadi)",
      "w": [
        "Gram usuli",
        "Zimnitskiy usuli",
        "Apgar usuli"
      ],
      "e": "O'sishdan to'xtash zonasi qancha keng bo'lsa, bakteriya o'sha antibiotikka shuncha sezgir (S — Sensitive) hisoblanadi."
    },
    {
      "c": "mk24",
      "q": "Tarkibida na DNK, na RNK (nuklein kislota) bo'lmaydigan, faqat patologik bukilgan infeksion oqsil zarrachalaridan iborat qo'zg'atuvchilar nima deb ataladi?",
      "a": "Prionlar (Kreytsfeldt-Yakob kasalligi, 'quturgan sigir' gubkasimon ensefalopatiyasini chaqiradi)",
      "w": [
        "Bakteriofaglar",
        "Rikketsiyalar",
        "Xlamidiyalar"
      ],
      "e": "Stenli Pruziner prionlarni (Proteinaceous infectious particles) kashf etgani uchun Nobel mukofotiga sazovor bo'lgan."
    },
    {
      "c": "mk25",
      "q": "Odamlarda Kandidoz (molochnitsa — og'iz va shilliq qavatlarning oq karashli zamburug'li zararlanishi) ni qaysi achitqisimon zamburug' chaqiradi?",
      "a": "Candida albicans (ko'pincha uzoq vaqt keng spektrli antibiotik qabul qilganda disbakterioz fonida faollashadi)",
      "w": [
        "Penicillium",
        "Mucor",
        "Amanita"
      ],
      "e": "Kandidozni davolashda flukonazol, nistatin va klotrimazol kabi antifungol (zamburug'ga qarshi) vositalar beriladi."
    },
    {
      "c": "mk26",
      "q": "Bezgak (Malyariya) kasalligining qo'zg'atuvchisi qaysi sodda hayvon (Protozoa) va uni odamga qaysi hasharot yuqtiradi?",
      "a": "Qo'zg'atuvchisi — Bezgak plazmodiysi (Plasmodium vivax, P. falciparum); Tashuvchisi — Anopheles (bezgak chivini) urg'ochisi",
      "w": [
        "Leyshmaniya — iskabtopar orqali",
        "Tripanosoma — setse pashshasi orqali",
        "Toksoplazma — mushuk orqali"
      ],
      "e": "Plazmodiyning jinssiz ko'payishi (shizogoniya) odam jigarida va eritrotsitlarida, jinsiy ko'payishi (sporogoniya) Anopheles chivini tanasida kechadi."
    },
    {
      "c": "mk27",
      "q": "Ichak tayoqchasi (Escherichia coli) sanitariya-mikrobiologiyasida suv va oziq-ovqat mahsulotlarining nima bilan ifloslanganini ko'rsatuvchi indikator hisoblanadi?",
      "a": "Fekal ifloslanishning asosiy sanitar-ko'rsatkich mikroorganizmi (Koli-indeks va Koli-titr)",
      "w": [
        "Radiatsiya darajasi",
        "Kislorod miqdori",
        "Tuz miqdori"
      ],
      "e": "1 litr ichimlik suvida nechta E. coli borligi Koli-indeks (me'yorda ≤ 3) deb ataladi."
    },
    {
      "c": "mk28",
      "q": "Hujayraviy va gumoral tug'ma immunitet asoschilaridan biri, Fagotsitoz hodisasini kashf etgan olim kim?",
      "a": "I.I. Mechnikov (gumoral immunitet nazariyasini esa P. Erlix asoslagan, 1908-yil Nobel mukofoti)",
      "w": [
        "R. Kox",
        "L. Paster",
        "E. Jenner"
      ],
      "e": "Makrofaglar va neytrofillar yot mikroblarni qamrab olib hazm qilishi Fagotsitoz deyiladi."
    },
    {
      "c": "mk29",
      "q": "Difteriya (Bo'g'ma) kasalligida tomoq va bodomcha bezlarda qonaydigan qalin kulrang-oq pardalar (krup) hosil qiluvchi bakteriya va unga qarshi vaksina qaysi?",
      "a": "Corynebacterium diphtheriae (Leffler tayoqchasi) — AKDS (Adsorbsiyalangan ko'kyo'tal-difteriya-qoqshol) vaksinasi bilan emlanadi",
      "w": [
        "Bordetella pertussis",
        "Neisseria meningitidis",
        "Haemophilus influenzae"
      ],
      "e": "AKDS vaksinasi bolalarni bir vaqtning o'zida Ko'kyo'tal, Difteriya va Qoqsholdan himoya qiladi."
    },
    {
      "c": "mk30",
      "q": "Virus bilan zararlangan hujayralar tomonidan ishlab chiqarilib, qo'shni sog'lom hujayralarni virus ko'payishidan himoya qiluvchi nospetsifik oqsil nima?",
      "a": "Interferon (IFN-α, IFN-β, IFN-γ)",
      "w": [
        "Albumin",
        "Fibrinogen",
        "Miozin"
      ],
      "e": "Interferonlar virus RNK/DNK translyatsiyasini bloklovchi hujayra ichi fermentlarini faollashtiradi."
    }
  ],
  "patologiya": [
    {
      "c": "pt1",
      "q": "Yallig'lanishning Sels va Galen tomonidan ta'riflangan 5 ta klassik mahalliy belgisi qaysi qatorda to'g'ri berilgan?",
      "a": "Rubor (qizarish), Tumor (shish), Calor (mahalliy harorat oshishi), Dolor (og'riq), Functio laesa (funksiya buzilishi)",
      "w": [
        "Isitma, yo'tal, aksirish, uyqusizlik, chanqash",
        "Gipertoniya, taxikardiya, aritmiya",
        "Anemiya, leykopeniya, tromboz"
      ],
      "e": "Ushbu 5 ta belgi o'tkir mahalliy yallig'lanishning universal klinik ko'rinishidir."
    },
    {
      "c": "pt2",
      "q": "Yallig'lanish jarayonining ketma-ket rivojlanuvchi 3 ta patogenetik bosqichi (fazasi) qaysilar?",
      "a": "1) Alteratsiya (to'qima shikastlanishi), 2) Ekssudatsiya (qon tomir reaksiyasi va suyuqlik chiqishi), 3) Proliferatsiya (hujayralar ko'payib bitishi)",
      "w": [
        "Nekroz -> Apoptoz -> Atrofiya",
        "Ishemiya -> Infarkt -> Gangrena",
        "Tromboz -> Emboliya -> Staz"
      ],
      "e": "Alteratsiya boshlab beradi, ekssudatsiya o'choqni chegaralaydi, proliferatsiya esa nuqsonni tiklaydi."
    },
    {
      "c": "pt3",
      "q": "Nekroz va Apoptoz (hujayra o'limining 2 turi) orasidagi eng asosiy farq nimada?",
      "a": "Nekroz — patologik omil ta'sirida hujayra shishib yorilishi va yallig'lanish chaqirishi; Apoptoz — genetik dasturlashtirilgan, yallig'lanishsiz fiziologik hujayra o'limi",
      "w": [
        "Apoptozda kuchli yiringlash bo'ladi",
        "Nekroz sog'lom yangilanishdir",
        "Farqi yo'q"
      ],
      "e": "Apoptozda kaspaza fermentlari faollashib, hujayra apoptotik tanachalarga bo'linadi va fagotsitlar tomonidan yallig'lanishsiz yutiladi."
    },
    {
      "c": "pt4",
      "q": "Tirik organizmda qon tomirlari bo'shlig'ida yoki yurak kameralarida qonning quyulib laxtalanishi nima deb ataladi va Virxov triadasiga nimalar kiradi?",
      "a": "Tromboz — Virxov triadasi: 1) Tomir devori (endoteliy) shikastlanishi, 2) Qon oqimi sekinlashishi/uyurmasi, 3) Qon ivuvchanligi oshishi (giperkoagulyatsiya)",
      "w": [
        "Emboliya",
        "Gemoliz",
        "Plazmorragiya"
      ],
      "e": "Rudolf Virxov ta'riflagan ushbu 3 omil tromb hosil bo'lishining asosiy mexanizmidir."
    },
    {
      "c": "pt5",
      "q": "Oyoqning chuqur venalarida hosil bo'lgan tromb uzilib, o'ng yurak orqali o'pka arteriyasi poyasini berkitib qo'yishi qanday xavfli asorat hisoblanadi?",
      "a": "O'ATE (O'pka arteriyasi tromboemboliyasi / ТЭЛА)",
      "w": [
        "Bosh miya insulti",
        "Qorin bo'shlig'i istisqosi",
        "Bronxial astma"
      ],
      "e": "O'ATE to'satdan nafas qisishi, sianoz, ko'krakda og'riq va o'tkir o'ng qorincha yetishmovchiligiga olib keladi."
    },
    {
      "c": "pt6",
      "q": "Arteriya qon tomirining spazmi, tromb yoki embol bilan yopilishi oqibatida a'zoga arterial qon kelishining kamayishi va to'qimaning qonsizlanib oqarib nekrozga uchrashi nima?",
      "a": "Kamayishi — Ishemiya; Ishemiya oqibatidagi o'ткир nekroz o'chog'i — Infarkt (masalan, miokard infarkti, bosh miya ishemik infarkti)",
      "w": [
        "Venoz dimlanish",
        "Arterial giperemiya",
        "Limfostaz"
      ],
      "e": "Infarkt — qon aylanishi to'xtashi natijasida yuzaga kelgan angionekrozdir."
    },
    {
      "c": "pt7",
      "q": "Tashqi muhit bilan tutashuvchi a'zolarda (oyoq barmoqlari, o'pka, ichak) to'qima nekrozga uchrab, temir sulfid hisobiga qorayib ketishi nima deb ataladi?",
      "a": "Gangrena (Quruq, Nam va Gazli gangrena turlari bor)",
      "w": [
        "Kazeoz nekroz",
        "Mumsimon (Senker) nekroz",
        "Fibrinoid nekroz"
      ],
      "e": "Qandli diabet va obliteratsiyalovchi aterosklerozda oyoq panjasida ko'pincha quruq yoki nam gangrena uchraydi."
    },
    {
      "c": "pt8",
      "q": "Sil (Tuberkulyoz) kasalligida o'pka va limfa tugunlarida hosil bo'ladigan suzmasimon (tvorogsimon) quruq nekroz turi qanday nomlanadi?",
      "a": "Kazeoz nekroz (Suzmasimon nekroz)",
      "w": [
        "Kolikvatsion (ho'l) nekroz",
        "Yog'li nekroz",
        "Gialinoz"
      ],
      "e": "Sil granulyomasi markazida kazeoz nekroz, atrofida epitelioid, limfoid va ko'p yadroli Pirogov-Langxans hujayralari bo'ladi."
    },
    {
      "c": "pt9",
      "q": "Bosh miya to'qimasida ishemik insultdan keyin suv va lipidlar ko'pligi sababli rivojlanadigan 'yumshash va erish' (suyuqlanish) nekrozi qaysi turga kiradi?",
      "a": "Kollikvatsion (ho'l) nekroz (yakunda kista hosil bo'lishi bilan bitadi)",
      "w": [
        "Koagulyatsion (quruq) nekroz",
        "Kazeoz nekroz",
        "Sekvestr"
      ],
      "e": "Miya to'qimasida kollikvatsion nekroz, miokard va buyrakda esa koagulyatsion (quruq) nekroz kuzatiladi."
    },
    {
      "c": "pt10",
      "q": "A'zo yoki to'qima hajmining hujayralar soni ko'payishi hisobiga kattalashishi va har bir hujayra hajmining kattalashishi hisobiga o'sishi nima deyiladi?",
      "a": "Hujayra hajmi kattalashishi — Gipertrofiya (masalan, miokard va skelet muskuli); Hujayralar soni ko'payishi — Giperplaziya",
      "w": [
        "Atrofiya va Distrofiya",
        "Metaplaziya va Displaziya",
        "Aplaziya va Ageneziya"
      ],
      "e": "Yurak kardiomiotsitlari bo'linmagani sababli yuklama oshganda Gipertrofiyaga uchraydi."
    },
    {
      "c": "pt11",
      "q": "Bir xil to'qima doirasida hujayra turining boshqa turga aylanishi (masalan, chekuvchilarda bronxlarning kiprikli epiteliysi ko'p qavatli yassi epiteliyga aylanishi) nima?",
      "a": "Metaplaziya (surunkali ta'sirlanishga moslashuv bo'lib, davom etsa displaziya va o'smaga o'tishi mumkin)",
      "w": [
        "Regeneratsiya",
        "Organizatsiya",
        "Inkapsulyatsiya"
      ],
      "e": "Barrett qizilo'ngachi va chekuvchilar bronxidagi yassi hujayrali metaplaziya rak oldi holati hisoblanadi."
    },
    {
      "c": "pt12",
      "q": "Yaxshi sifatli (Benign) o'sma va Yomon sifatli (Malign / Saraton) o'sma orasidagi eng asosiy patomorfologik farqlar nima?",
      "a": "Yaxshi sifatli o'sma kapsulali, sekin kengayib (ekspansiv) o'sadi va metastaz bermaydi; Yomon sifatli o'sma hujayraviy atipiyaga ega, to'qimani yemirib (invaziv) o'sadi va Metastaz beradi",
      "w": [
        "Yaxshi sifatli o'sma metastaz beradi",
        "Yomon sifatli o'sma faqat terida bo'ladi",
        "Farqi yo'q"
      ],
      "e": "Epitelial yomon sifatli o'sma — Karsinoma (Rak), mezenximal (suyak/muskul/biriktiruvchi) yomon sifatli o'sma — Sarkoma deyiladi."
    },
    {
      "c": "pt13",
      "q": "To'qimalarda kislorod yetishmasligi (Gipoksiya) kelib chiqish mexanizmiga ko'ra qaysi 5 ta asosiy turga bo'linadi?",
      "a": "1) Ekzogen (tog' kasalligi), 2) Respirator (o'pka), 3) Sirkulyator (yurak-qon tomir), 4) Gemik (anemiya, is gazi bilan zaharlanish), 5) To'qima (sianidlar bilan nafas fermentlari bloklanishi)",
      "w": [
        "Faqat 1 ta turi bor",
        "Issiq va sovuq gipoksiya",
        "Oq va qora gipoksiya"
      ],
      "e": "Is gazi (CO) gemoglobin bilan kislorodga nisbatan 250–300 barobar kuchli birikib, karboksigemoglobin va Gemik gipoksiya chaqiradi."
    },
    {
      "c": "pt14",
      "q": "To'qima bo'shliqlarida (masalan, qorin bo'shlig'ida — Assit, plevra bo'shlig'ida — Gidrotoraks) yallig'lanishsiz to'planadigan oqsilga kam (<2%) tiniq suyuqlik va yallig'lanishda to'planadigan oqsilga boy (>3%) loyqa suyuqlik nima deb ataladi?",
      "a": "Yallig'lanishsiz dimlanish suyuqligi — Transsudat; Yallig'lanish suyuqligi — Ekssudat (seroz, fibrinoz, yiringli, gemorragik)",
      "w": [
        "Transsudatda yiring ko'p bo'ladi",
        "Ikkalasi ham limfa",
        "Ekssudatda oqsil bo'lmaydi"
      ],
      "e": "Rivalta sinamasi yordamida ekssudat (musbat — oq bulutcha) transsudatdan (manfiy) ajratiladi."
    },
    {
      "c": "pt15",
      "q": "To'qima ichida erib hosil bo'lgan chegaralangan yiringli bo'shliq (kapsulali chipqon) va yiringning mushaklararo/teri osti kletchatkasiga chegarasiz yoyilib ketishi nima deb ataladi?",
      "a": "Chegaralangan yiringli bo'shliq — Abssess; Chegarasiz yoyilgan yiringli yallig'lanish — Flegmona (Tabiiy bo'shliqda yiring to'planishi esa — Empiyema)",
      "w": [
        "Flegmona kapsulali bo'ladi",
        "Abssessda yiring bo'lmaydi",
        "Ikkalasi ham kista"
      ],
      "e": "Abssess piogen membrana bilan o'ralgan bo'ladi, flegmona esa to'qimalar bo'ylab tez tarqaladi."
    },
    {
      "c": "pt16",
      "q": "Jigar hujayralarida (gepatotsitlarda) triglitseridlar (yog' tomchilari) ning me'yordan ortiq to'planib qolishi patanatomiyada qanday ataladi?",
      "a": "Jigarning yog'li distrofiyasi (Steatoz / 'G'oz jigari')",
      "w": [
        "Jigar amiloidozi",
        "Gemoxromatoz",
        "Glikogenoz"
      ],
      "e": "Yog'li gepatoz metabolik sindrom, qandli diabet va toksik zararlanishlarda ko'p uchraydi."
    },
    {
      "c": "pt17",
      "q": "Surunkali yallig'lanish va autoimmun kasalliklarda to'qima oraliq moddasida patologik fibrillyar oqsil-polisaxarid majmuasining to'planishi (Kongo-rot bo'yog'i bilan qizil bo'yaluvchi) nima?",
      "a": "Amiloidoz (buyrak, taloq, jigarni zararlab, buyrak yetishmovchiligiga olib keladi)",
      "w": [
        "Kalsinoz",
        "Gemosideroz",
        "Melanoz"
      ],
      "e": "Taloqda amiloid follikulalarda to'plansa 'sago taloq', pulpa bo'ylab tekis to'plansa 'yog'li (salniy) taloq' deyiladi."
    },
    {
      "c": "pt18",
      "q": "Isitma (Febris) patogenezida bakterial endotoksinlar ta'sirida leykotsitlar va makrofaglar ajratadigan hamda gipotalamus termoregulyatsiya nuqtasini ko'taruvchi 'Ikkilamchi (endogen) pirogenlar' qaysilar?",
      "a": "Interleykin-1 (IL-1), Interleykin-6 (IL-6) va O'sma nekrozi omili (TNF-α) — ular gipotalamusda Prostaglandin E2 sintezini oshiradi",
      "w": [
        "Insulin va Glyukagon",
        "Adrenalin va Tiroksin",
        "Albumin va Globulin"
      ],
      "e": "Paratsetamol va Ibuprofen siklooksigenaza (SOG) ni bloklab, Prostaglandin E2 sintezini kamaytirish orqali isitmani tushiradi."
    },
    {
      "c": "pt19",
      "q": "Allergik reaksiyalarning Gell va Kumbs tasnifi bo'yicha I tip (Darhol rivojlanuvchi — Anafilaktik tip: anafilaktik shok, eshakemi, pollinoz, atopik astma) qaysi immunoglobulin va mediator ishtirokida kechadi?",
      "a": "IgE (reaginlar) semiz hujayralar yuzasiga birikib, allergen qayta tushganda Gistamin, Serotonin va Leykotriyenlar otilib chiqadi",
      "w": [
        "IgM va Komplement",
        "Faqat T-killerlar (IV tip)",
        "IgA"
      ],
      "e": "IV tip (Kechikib rivojlanuvchi — tuberkulin Mantu sinamasi, kontakt dermatit) antitelolarsiz, T-limfotsitlar ishtirokida 24–72 soatda rivojlanadi."
    },
    {
      "c": "pt20",
      "q": "Jigarda normal bo'lakchali tuzilishning buzilishi, gepatotsitlar nekrozi o'rniga biriktiruvchi (fibroz) to'qima o'sib ketishi va 'soxta bo'lakchalar' (regenerator tugunlar) hosil bo'lishi qaysi kasallik?",
      "a": "Jigar sirrozi (asorati: Portal gipertenziya, assit, qizilo'ngach venalari varikozi va jigar ensefalopatiyasi)",
      "w": [
        "O'tkir xolesistit",
        "Jigar kistasi",
        "O't-tosh kasalligi"
      ],
      "e": "Portal gipertenziyada qorin old devori venalari kengayib 'Meduza boshi' (Caput Medusae) simptomini beradi."
    },
    {
      "c": "pt21",
      "q": "Yirik va o'rta kalibrli elastik hamda muskul-elastik arteriyalarning (aorta, koronar, miya arteriyalari) intimasida xolesterin va lipid pilakchalari (ateromalar) to'planib torayishi nima?",
      "a": "Ateroskleroz (bosqichlari: yog' dog'lari -> fibroz pilakchalar -> asoratlangan pilakcha: yaralanish, tromboz, kalsinoz)",
      "w": [
        "Flebit va Varikoz",
        "Limfadenit",
        "Kapillyarotoksikoz"
      ],
      "e": "Koronar arteriyalar aterosklerozi Yurak Ishemik Kasalligi (YIK) va miokard infarktining 95% holatlarda asosiy sababchisidir."
    },
    {
      "c": "pt22",
      "q": "Yiringli eksudatning asosiy hujayraviy tarkibini qaysi qon hujayralari (parchalangan va tirik leykotsitlar) tashkil etadi?",
      "a": "Neytrofil leykotsitlar ('yiring tanachalari')",
      "w": [
        "Eritrotsitlar",
        "Trombotsitlar",
        "Bazofillar"
      ],
      "e": "Allergik va parazitar yallig'lanishda Eozinofillar, surunkali virusli va sil yallig'lanishida esa Limfotsitlar va Makrofaglar ustunlik qiladi."
    },
    {
      "c": "pt23",
      "q": "Difteritik fibrinoz yallig'lanish va Krupoz fibrinoz yallig'lanish orasidagi farq nima?",
      "a": "Krupozda fibrinli parda bir qavatli epiteliy ustida yuza joylashib oson ko'chadi (traxeya, bronxlar); Difteritikda ko'p qavatli epiteliyga chuqur singib, ko'chirilganda yarali qonash qoladi (bodomcha bez, yo'g'on ichak)",
      "w": [
        "Krupozda parda bo'lmaydi",
        "Difteritik faqat terida bo'ladi",
        "Ikkalasi bir xil"
      ],
      "e": "Tomoq difteriyasida bodomcha bezlarda difteritik parda, hiqildoq va traxeyada esa krupoz parda (chin krup) hosil bo'ladi."
    },
    {
      "c": "pt24",
      "q": "Shok holatining barcha turlarida (gipovolemik, kardiogen, anafilaktik, septik, travmatik) patogenezning eng asosiy bo'g'ini nima?",
      "a": "Hayotiy muhim a'zolarda mikrosirkulyatsiyaning (kapillyar qon aylanishining) o'tkir va keskin buzilishi hamda to'qimalar gipoksiyasi",
      "w": [
        "Faqat arterial bosimning oshishi",
        "Tana haroratining 42°C ga chiqishi",
        "Gemoglobin oshishi"
      ],
      "e": "Shokning erektil (qo'zg'alish) fazasi tezda torpid (tormozlanish va qon bosimi tushishi) fazasiga o'tadi."
    },
    {
      "c": "pt25",
      "q": "Katta suyaklar (son, chanoq) singanda yoki teri osti yog' kletchatkasi ezilganda o'pka va miya kapillyarlariga yog' tomchilari tiqilib qolishi nima deyiladi?",
      "a": "Yog' emboliyasi (Sudan III bo'yog'i bilan mikroskopda aniqlanadi)",
      "w": [
        "Havo emboliyasi",
        "Bakterial emboliya",
        "Tromboemboliya"
      ],
      "e": "O'pka kapillyarlarining 2/3 qismi yog' tomchilari bilan yopilsa o'tkir nafas yetishmovchiligi yuzaga keladi."
    },
    {
      "c": "pt26",
      "q": "Suv-osmotik muvozanat buzilishida organizmning suvsizlanishi (Degidratatsiya / Eksikoz) osmolyarlikka ko'ra qaysi 3 turga bo'linadi?",
      "a": "Izotonik (qon yo'qotish, diareya), Gipertonik (suv ichmaslik, ko'p terlash — hujayra ichi suvsizlanishi) va Gipotonik (tuzlarni ko'p yo'qotish)",
      "w": [
        "Issiq va sovuq",
        "Kunduzgi va tungi",
        "Quruq va nam"
      ],
      "e": "Gipertonik degidratatsiyada hujayralardan suv chiqib ketib, kuchli chanqash va asab tizimi buzilishi kuzatiladi."
    },
    {
      "c": "pt27",
      "q": "Qon yaratuvchi suyak ko'migida yetilmagan blast hujayralarning nazoratsiz o'sib ketishi bilan kechuvchi gemoblastoz (qon o'smasi) nima deb ataladi?",
      "a": "Leykoz (O'tkir leykozda suyak ko'migida >20% blast hujayralar va 'leykemik o'pirilish' bo'ladi; Surunkali leykozda yetilayotgan hujayralar ko'payadi)",
      "w": [
        "Leykotsitoz (reaktiv oshish)",
        "Anemiya",
        "Trombotsitopeniya"
      ],
      "e": "Leykotsitoz — infeksiyaga vaqtinchalik himoya reaksiyasi; Leykoz esa suyak ko'migining klonal yomon sifatli o'smasidir."
    },
    {
      "c": "pt28",
      "q": "Kalsiy tuzlarining oldin nekrozga uchragan yoki sklerozlangan to'qimalarga (qonda Ca²⁺ normada bo'lsa ham) o'tirib qolishi nima deb ataladi?",
      "a": "Distrofik ohaklanish / Kalsinoz (masalan, eski sil o'chog'i — Gon o'chog'ida va aterosklerotik pilakchada)",
      "w": [
        "Metastatik ohaklanish (giperkalsiyemiyada)",
        "Osteoporoz",
        "Raxit"
      ],
      "e": "Qonda Ca²⁺ oshib sog'lom to'qimalarga cho'kishi — metastatik kalsinoz; o'lgan to'qimaga cho'kishi — distrofik kalsinozdir."
    },
    {
      "c": "pt29",
      "q": "Jarohatning bitishi (Reparativ regeneratsiya) chetlari tekis va toza jarrohlik kesmasida qanday kechadi?",
      "a": "Birlamchi tortilish (Per primam intentionem) bilan — yiringlashsiz, 7–10 kunda yupqa chiziqli chandiq hosil qilib bitadi",
      "w": [
        "Ikkilamchi tortilish bilan (granulyatsion to'qima va yiring orqali)",
        "Bitmaydi",
        "Nekroz bilan"
      ],
      "e": "Yiringli, chetlari uzoq va ezilgan yaralar esa granulyatsion to'qima to'lib, ikkilamchi tortilish bilan bitadi."
    },
    {
      "c": "pt30",
      "q": "Og'ir infeksiyalar, kuyish, sepsis va akusherlik asoratlarida qon tomirlar ichida avval koagulyatsiya (mikrotromblar) kuchayib, so'ngra ivish omillari tugab kuchli qon ketish bilan kechuvchi sindrom nima?",
      "a": "DTIQ sindromi (Disseminirlangan tomir ichi qon ivishi / ДВС-синдром / DIC)",
      "w": [
        "Gemofiliya",
        "Shatalash",
        "Leykopeniya"
      ],
      "e": "DTIQ (ДВС) sindromi 1-bosqichda giperkoagulyatsiya va mikrotromboz, 2-3 bosqichda esa iste'mol koagulopatiyasi va to'xtatib bo'lmaydigan qon ketish beradi."
    }
  ],
  "farmakologiya": [
    {
      "c": "fm1",
      "q": "Dori vositasining yuborilgan joyidan umumiy qon oqimiga o'zgarmagan holda yetib borgan ulushi (%) farmakokinetikada nima deb ataladi?",
      "a": "Biokiraolishlik (Bioavailability) — vena ichiga (i/v) yuborilganda 100% ga teng",
      "w": [
        "Yarim chiqarilish davri (T1/2)",
        "Klirens",
        "Kumulyatsiya"
      ],
      "e": "Ichish (per os) orqali qabul qilingan dorilar jigardan birlamchi o'tish effekti tufayli 100% dan kam biokiraolishlikka ega bo'ladi."
    },
    {
      "c": "fm2",
      "q": "Morfin, Fentanil va Tramadol kabi opioid analgetiklarning nafas markazini susaytirishi bilan kechuvchi zaharlanishida spetsifik antidot (antagonist) qaysi?",
      "a": "Nalokson (opioid retseptorlarning sof raqobatli antagonisti)",
      "w": [
        "Atropin sulfat",
        "Atsetilsistein",
        "Protamin sulfat"
      ],
      "e": "Nalokson vena ichiga yuborilganda 1–2 daqiqada opioid komasi va nafas to'xtashini bartaraf etadi."
    },
    {
      "c": "fm3",
      "q": "Fosfororganik birikmalar (FOB — xlorofos, karbofos, dixlofos) yoki muskarin bilan zaharlanganda birinchi qator spetsifik antidot sifatida qaysi M-xolinoblokator yuboriladi?",
      "a": "Atropin sulfat 0.1% eritmasi (va reaktivator sifatida Dipiroksim / Alloksim)",
      "w": [
        "Prozerin (Neostigmin)",
        "Pilokarpin",
        "Adrenalin"
      ],
      "e": "FOB atsetilxolinesterazani bloklaydi; Atropin esa M-xolinoretseptorlarni bloklab bronxoreya, bradikardiya va miozni yo'qotadi."
    },
    {
      "c": "fm4",
      "q": "Paratsetamol (Atsetaminofen) yuqori dozada qabul qilinib jigar nekrozi xavfi tug'ilganda qaysi spetsifik antidot (glutation donori) beriladi?",
      "a": "Atsetilsistein (N-atsetilsistein / ASS)",
      "w": [
        "Vikasol",
        "Unitiol",
        "Metilen ko'ki"
      ],
      "e": "Atsetilsistein jigarda glutation zaxirasini to'ldirib, paratsetamolning zaharli metabolitini zararsizlantiradi."
    },
    {
      "c": "fm5",
      "q": "To'g'ridan-to'g'ri ta'sir etuvchi antikoagulyant Geparin dozasi oshib ketib qon ketish boshlanganda uning spetsifik antagonisti sifatida nima yuboriladi?",
      "a": "Protamin sulfat (1 mg protamin sulfat 100 TB geparinni neytrallaydi)",
      "w": [
        "Varfarin",
        "Aspirin",
        "Klopidogrel"
      ],
      "e": "Bilvosita antikoagulyant Varfarin dozasi oshganda esa K vitamini (Fitomenadion / Vikasol) beriladi."
    },
    {
      "c": "fm6",
      "q": "Gipertoniya va surunkali yurak yetishmovchiligini davolashda qo'llaniladigan Enalapril, Lisinopril, Kaptopril va Perindopril qaysi farmakologik guruhga kiradi va qanday xos nojo'ya ta'siri bor?",
      "a": "AAF (Angiotenzinga aylantiruvchi ferment) ingibitorlari — bradikinin to'planishi hisobiga 'quruq yo'tal' chaqirishi mumkin",
      "w": [
        "Beta-adrenoblokatorlar",
        "Kaltsiy kanallari blokatorlari",
        "Diuretiklar"
      ],
      "e": "Quruq yo'tal paydo bo'lganda AAF ingibitori Sartanganlar (Lozartan, Valsartan — ARA II) ga almashtiriladi."
    },
    {
      "c": "fm7",
      "q": "Bisoprolol, Metoprolol va Karvedilol (Beta-adrenoblokatorlar) qaysi hamroh kasalligi bor bemorlarda bronxospazm xavfi tufayli ehtiyotkorlik yoki qarshi ko'rsatma hisoblanadi?",
      "a": "Bronxial astma va og'ir SO'OK (β2-retseptorlar bloklansa bronxlar torayadi) hamda AV-blokada va bradikardiyada",
      "w": [
        "Taxikardiyada",
        "Stenokardiyada",
        "Gipertoniyada"
      ],
      "e": "Kardioselektiv β1-blokatorlar (Bisoprolol, Nebivolol) yurakka tanlab ta'sir qiladi."
    },
    {
      "c": "fm8",
      "q": "Bronxial astma xurujini darhol (3–5 daqiqada) to'xtatish uchun cho'ntak ingalyatori ko'rinishida ishlatiladigan qisqa ta'sirli β2-adrenomimetik qaysi?",
      "a": "Salbutamol (Ventolin) yoki Fenoterol (Berotek)",
      "w": [
        "Propranolol (Anaprilin)",
        "Enalapril",
        "Bisoprolol"
      ],
      "e": "Salbutamol bronxlar silliq mushaklaridagi β2-adrenoretseptorlarni qo'zg'atib, bronxlarni tez kengaytiradi."
    },
    {
      "c": "fm9",
      "q": "Oshqozon va 12 barmoqli ichak yara kasalligida me'da pariyetal hujayralaridagi H⁺/K⁺-ATFaza (proton pompasi) ni bloklab xlorid kislota sekretsiyasini eng kuchli tormozlovchi dorilar qaysi?",
      "a": "Proton pompasi ingibitorlari (PPI): Omeprazol, Pantoprazol, Ezomeprazol, Rabeprazol",
      "w": [
        "Antatsidlar (Almagel)",
        "Surgi dorilar (Bisakodil)",
        "O't haydovchilar (Alloxol)"
      ],
      "e": "PPI guruhi dorilari kislota ishlab chiqarilishining yakuniy bosqichini 24 soat davomida bloklaydi."
    },
    {
      "c": "fm10",
      "q": "Nosteroid yallig'lanishga qarshi vositalar (NYaQV: Diklofenak, Ibuprofen, Ketorolak, Indometatsin) uzoq vaqt och qoringa ichilganda qanday asosiy asorat beradi?",
      "a": "Gastroduodenal ulserogen ta'sir — oshqozon shilliq qavatini himoyalovchi Prostaglandin E2 sintezini bloklab, eroziv gastrit va me'da yarasini chaqiradi",
      "w": [
        "Quloq eshitmasligi",
        "Tish qorayishi",
        "Soch o'sishi"
      ],
      "e": "Selektiv SOG-2 ingibitorlari (Selekoksib, Meloksikam, Nimesulid) oshqozonga kamroq zarar yetkazadi."
    },
    {
      "c": "fm11",
      "q": "Yurak ishemik kasalligi va infarkt profilaktikasida trombotsitlar yopishishini (agregatsiyasini) bloklash uchun Aspirin (Atsetilsalitsil kislota) qanday dozada buyuriladi?",
      "a": "Kichik antiagregant dozada: kuniga 1 marta 75–100 mg (Trombo ASS, KardioMagnil)",
      "w": [
        "Kuniga 3000 mg",
        "Faqat tomchi ko'rinishida",
        "Kuniga 5 gramm"
      ],
      "e": "75–100 mg dozada Aspirin trombotsitlardagi Tromboksan A2 sintezini qaytarilmas bloklaydi."
    },
    {
      "c": "fm12",
      "q": "O'pka shishi va o'tkir yurak yetishmovchiligida vena ichiga yuborilganda 5–15 daqiqada kuchli siydik haydovchi (Genle qovuzlog'i diuretigi) preparat qaysi?",
      "a": "Furosemid (Laziks) yoki Torasemid — lekin organizmdan Kaliy (K⁺) va Magniyni chiqarib yuboradi",
      "w": [
        "Spironolakton (Veroshpiron)",
        "Gidroxlorotiazid",
        "Mannitol"
      ],
      "e": "Spironolakton va Eplerenon esa aldosteron antagonistlari bo'lib, 'Kaliy tejovchi diuretiklar' hisoblanadi."
    },
    {
      "c": "fm13",
      "q": "Aminoglikozidlar guruhi antibiotiklari (Gentamitsin, Amikatsin, Streptomitsin) ning eng xavfli 2 ta spetsifik nojo'ya ta'siri nima?",
      "a": "Ototoksiklik (VIII juft eshituv nervini zararlab karlik chaqirishi) va Nefrotoksiklik (buyrakni zararlashi)",
      "w": [
        "Tish emali sarg'ayishi",
        "Yuz qizarishi",
        "Uyquchanlik"
      ],
      "e": "Shu sababli aminoglikozidlarni kuchli diuretiklar (Furosemid) bilan birga qo'llash ototoksiklikni keskin kuchaytiradi."
    },
    {
      "c": "fm14",
      "q": "8 yoshgacha bo'lgan bolalarga va homilador ayollarga suyak va tish to'qimasida kalsiy bilan xelat hosil qilib tish emalini sariq-jigarrang qilib qo'yuvchi qaysi antibiotiklar guruhi man etiladi?",
      "a": "Tetratsiklinlar (Tetratsiklin, Doksisiklin)",
      "w": [
        "Penitsillinlar (Amoksitsillin)",
        "Makrolidlar (Azitromitsin)",
        "Sefalosporinlar"
      ],
      "e": "Tetratsiklinlar Ca²⁺ bilan bog'lanib o'sayotgan suyak va tish emalida to'planadi."
    },
    {
      "c": "fm15",
      "q": "2-tip Qandli diabetni davolashda insulin sezgirligini oshiruvchi va gipoglikemiya chaqirmaydigan birinchi qator tanlov dori vositasi qaysi?",
      "a": "Metformin (Siofor, Glyukofaj — Biguanidlar guruhi)",
      "w": [
        "Prednizolon",
        "Adrenalin",
        "Furosemid"
      ],
      "e": "Metformin jigarda glyukoneogenezni tormozlaydi va periferik to'qimalarning insulinga sezgirligini oshiradi."
    },
    {
      "c": "fm16",
      "q": "Allergik rinit va eshakemini davolashda uyquchanlik chaqirmaydigan (gemato-ensefalik baryerdan o'tmaydigan) 2- va 3-avlod H1-gistaminoblokatorlar qaysilar?",
      "a": "Loratadin, Setirizin (Zodak), Dezloratadin,feksofenadin, Levosetirizin",
      "w": [
        "Dimedrol va Suprastin (1-avlod — kuchli uyqu chaqiradi)",
        "Analgin va Paratsetamol",
        "Omeprazol"
      ],
      "e": "1-avlod antigistaminlar (Dimedrol, Suprastin, Tavegil) MNS ni tormozlab uyquchanlik beradi, 2-3 avlod esa bermaydi."
    },
    {
      "c": "fm17",
      "q": "Buyrak usti bezi po'stlog'i gormonlarining sintetik analoglari bo'lgan Glyukokortikoidlar (Prednizolon, Deksametazon, Gidrokortizon) qanday 3 ta asosiy ta'sirga ega?",
      "a": "Kuchli Yallig'lanishga qarshi, Allergiyaga qarshi (antiallergik/shokka qarshi) va Immunodepressiv ta'sir",
      "w": [
        "Qon bosimini tushiruvchi va qandni kamaytiruvchi",
        "Antibakterial va virusga qarshi",
        "Qon ivishini kamaytiruvchi"
      ],
      "e": "Glyukokortikoidlar fosfolipaza A2 fermentini bloklab, ham prostaglandinlar, ham leykotriyenlar sintezini to'xtatadi."
    },
    {
      "c": "fm18",
      "q": "Ateroskleroz va giperxolesterinemiyada jigarda xolesterin sintezini (GMG-KoA-reduktaza fermentini) bloklovchi asosiy dorilar guruhi qaysi?",
      "a": "Statinlar (Atorvastatin, Rozuvastatin, Simvastatin — kechqurun qabul qilinadi)",
      "w": [
        "Nitratlar",
        "Glikozidlar",
        "Antatsidlar"
      ],
      "e": "Xolesterin sintezi jigarda asosan tunda faol kechgani uchun Statinlar kechki ovqatdan keyin buyuriladi."
    },
    {
      "c": "fm19",
      "q": "Sil (Tuberkulyoz) kasalligini davolashda qo'llaniladigan I qator asosiy (bazaviy) kimyopreparatlar qaysi qatorda berilgan?",
      "a": "Izoniazid, Rifampitsin, Pirazinamid, Etambutol va Streptomitsin (HRZES)",
      "w": [
        "Penitsillin, Ampitsillin, Biseptol",
        "Metronidazol, Flukonazol",
        "Atsiklovir, Interferon"
      ],
      "e": "Izoniazid qabul qilganda periferik neyropatiya oldini olish uchun Vitamin B6 (Piridoksin) birga beriladi."
    },
    {
      "c": "fm20",
      "q": "Yurak glikozidlari (Digoksin, Strofantin, Korglikon) surunkali yurak yetishmovchiligida miokardga qanday ta'sir ko'rsatadi?",
      "a": "Musbat inotrop ta'sir (qisqarish kuchini oshiradi) va Manfiy xronotrop ta'sir (yurak urish sonini sekinlashtirib, diastolani uzaytiradi)",
      "w": [
        "Yurak urishini 200 taga chiqaradi",
        "Qisqarish kuchini pasaytiradi",
        "Faqat o'pkaga ta'sir qiladi"
      ],
      "e": "Yurak glikozidlari kumulyatsiya (to'planish) xususiyatiga ega bo'lgani uchun dozasi qat'iy nazorat qilinadi."
    },
    {
      "c": "fm21",
      "q": "Balg'amni suyultirib (disulfid bog'larni uzib), uning bronxlardan ko'chib chiqishini osonlashtiruvchi mukolitik preparatlar qaysilar?",
      "a": "Ambroksol (Lasolvan), Bromgeksin, Atsetilsistein (ASS), Karbotsistein",
      "w": [
        "Kodein va Tusupreks (yo'tal markazini tormozlovchilar)",
        "Enalapril",
        "Loperamid"
      ],
      "e": "Quruq azoblovchi yo'talda yo'talga qarshi vositalar, balg'amli yo'talda esa mukolitik va balg'am ko'chiruvchilar beriladi."
    },
    {
      "c": "fm22",
      "q": "Oddiy Gerpes virusi (Herpes simplex) va Suvchechak / O'rab oluvchi temiratki (Varicella-Zoster) viruslariga qarshi tanlab ta'sir qiluvchi preparat qaysi?",
      "a": "Atsiklovir (Zoviraks) va Valatsiklovir",
      "w": [
        "Amoksitsillin",
        "Metronidazol",
        "Ketokonazol"
      ],
      "e": "Atsiklovir faqat virus timidinkinazasi bor zararlangan hujayra ichida faollashib, virus DNK sintezini to'xtatadi."
    },
    {
      "c": "fm23",
      "q": "Anaerob bakteriyalar (Bacteroides, Clostridium) hamda sodda hayvonlar (Lyambliya, Trixomonada, Amyoba) va H. pylori ga qarshi keng qo'llaniladigan preparat qaysi?",
      "a": "Metronidazol (Trixopol)",
      "w": [
        "Streptomitsin",
        "Nistatin",
        "Gentamitsin"
      ],
      "e": "Metronidazol qabul qilish vaqtida spirtli ichimlik ichish qat'iyan man etiladi (disulfiramga o'xshash og'ir zaharlanish beradi)."
    },
    {
      "c": "fm24",
      "q": "Mahalliy og'riqsizlantiruvchi (Anestetik) vositalar — Lidokain, Artikain (Ultrakain), Bupivakain va Novokain nerv tolasida qaysi kanallarni bloklaydi?",
      "a": "Potentsialga bog'liq Natriy (Na⁺) kanallarini bloklab, harakat potentsiali (og'riq impulsi) hosil bo'lishi va o'tkazilishini to'xtatadi",
      "w": [
        "Kalsiy kanallarini ochadi",
        "Temir ionlarini bog'laydi",
        "Faqat bosh miyani uxlatadi"
      ],
      "e": "Lidokain mahalliy anestetik bo'lish bilan birga IB sinf antiaritmik (qorincha aritmiyalarida) vosita hamdir."
    },
    {
      "c": "fm25",
      "q": "Anestetik eritmasiga (masalan, Lidokain yoki Artikainga) 1:100 000 nisbatda Adrenalin (Epinefrin) qo'shilishining maqsadi nima?",
      "a": "Inyeksiya joyidagi kapillyarlarni toraytirib, anestetikning qonga so'rilishini sekinlashtirish, og'riqsizlantirish vaqtini uzaytirish va zaharliligini kamaytirish",
      "w": [
        "Qon ketishini kuchaytirish",
        "Anestetikni tez tarqatib yuborish",
        "Bemorning uyqusini keltirish"
      ],
      "e": "Biroq barmoqlar, burun uchi va quloq suprasini og'riqsizlantirishda ishemiya bo'lmasligi uchun Adrenalin qo'shilmaydi."
    },
    {
      "c": "fm26",
      "q": "Homiladorlikda dori vositalarining homila rivojlanishiga zarar yetkazib, tug'ma nuqsonlar (mayibliklar) keltirib chiqarish xususiyati nima deb ataladi?",
      "a": "Teratogen ta'sir (eng xavfli davr — homiladorlikning 1-uch oyligi / organogenez davri, 3–10 haftalar)",
      "w": [
        "Kanserogen ta'sir",
        "Tolerantlik",
        "Taxifilaksiya"
      ],
      "e": "1960-yillardagi 'Talidomid fojiasi'dan so'ng barcha dorilar teratogenlikka qat'iy sinovdan o'tkaziladi."
    },
    {
      "c": "fm27",
      "q": "O'tkir ich ketishda (Diareyada) organizmning suvsizlanishi va tuz yo'qotishini (degidratatsiyani) tiklash uchun birinchi navbatda qaysi oral regidratatsion tuz eritmasi ichiriladi?",
      "a": "Regidron (Oralit — tarkibida NaCl, KCl, Natriy sitrat va Glyukoza bor)",
      "w": [
        "Furosemid",
        "Magniy sulfat ichishga",
        "Senna damlamasi"
      ],
      "e": "Regidron tarkibidagi glyukoza ichakda natriy va suvning birgalikda tez so'rilishini (kotransport) ta'minlaydi."
    },
    {
      "c": "fm28",
      "q": "Magniy sulfat (MgSO₄ — 'Magneziya') 25% li eritmasi parenteral (v/i yoki m/o) yuborilganda va ichishga (per os) kukun holida berilganda qanday farqli ta'sir ko'rsatadi?",
      "a": "Parenteral (v/i, m/o) yuborilganda — qon bosimini tushiradi, talvasaga qarshi va tinchlantiruvchi; Ichishga (per os) berilganda esa ichakdan so'rilmay — tuzli Surgi va O't haydovchi ta'sir qiladi",
      "w": [
        "Ikkalasida ham qon bosimini oshiradi",
        "Ichishga berilganda uxlatadi",
        "Farqi yo'q"
      ],
      "e": "Dori yuborish yo'liga qarab butunlay boshqa ta'sir ko'rsatishiga klassik misol — Magniy sulfatdir."
    },
    {
      "c": "fm29",
      "q": "Temir tanqisligi anemiyasini davolashda temir preparatlari (Sorbifer, Maltofer, Totema) ning ichakda so'rilishini qaysi modda kuchaytiradi va qaysi mahsulotlar kamaytiradi?",
      "a": "So'rilishini kuchaytiradi: Askorbin kislota (Vitamin C) va kislotali muhit; Kamaytiradi: Choy (tanin), qahva, sut (kalsiy) va antatsidlar",
      "w": [
        "Sut va choy so'rilishini kuchaytiradi",
        "Vitamin C temirni parchalaydi",
        "Faqat yog'li ovqat bilan ichiladi"
      ],
      "e": "Ikki valentli temir (Fe²⁺) eng yaxshi so'riladi, Vitamin C esa Fe³⁺ ni Fe²⁺ ga qaytarib saqlab turadi."
    },
    {
      "c": "fm30",
      "q": "Tutqanoq (Epilepsiya) xurujiga va og'ir talvasa holatiga (Status epilepticus) barham berish uchun birinchi qator shoshilinch vena ichiga yuboriladigan trankvilizator qaysi?",
      "a": "Diazepam (Sibazon / Relanium — GAMK-A retseptorlarini faollashtirib, MNS qo'zg'alishini tormozlaydi)",
      "w": [
        "Kofein",
        "Piratsetam",
        "Strinin"
      ],
      "e": "Diazepam kuchli antikonvulsant (talvasaga qarshi), anksiolitik va miorelaksant ta'sirga ega."
    }
  ],
  "ichki-kasalliklar": [
    {
      "c": "ik1",
      "q": "Stenokardiya xuruji va O'tkir miokard infarkti og'rig'ining Nitroglitseringa javobi hamda davomiyligi bo'yicha asosiy klinik farqi nimada?",
      "a": "Stenokardiya og'rig'i 1–15 daqiqa davom etib Nitroglitserindan 2–5 daqiqada qoladi; Miokard infarktida og'riq >20–30 daqiqa davom etadi va Nitroglitserindan qolmaydi",
      "w": [
        "Miokard infarktida og'riq 1 daqiqada o'tib ketadi",
        "Stenokardiyada EKGda nekroz tishchasi bo'ladi",
        "Farqi yo'q"
      ],
      "e": "Miokard infarktida EKGda ST-segment elevatsiyasi, patologik Q tishcha va qonda Troponin I/T ning oshishi kuzatiladi."
    },
    {
      "c": "ik2",
      "q": "O'pka auskultatsiyasida eshitiladigan 'Krepitatsiya' (quloq oldida soch tolalarini ishqalagandek g'ijirlash) qaysi kasallikka xos va qachon eshitiladi?",
      "a": "Krupoz (bo'lakli) pnevmoniya va alveolitga xos bo'lib, faqat nafas olishning eng cho'qqisida (alveolalar yozilayotganda) eshitiladi",
      "w": [
        "Faqat nafas chiqarishda bronxitda",
        "Yo'talganda yo'qolib ketadi",
        "Plevritda eshitiladi"
      ],
      "e": "Mayda pufakchali nam xirillashlar ham nafas olishda, ham chiqarishda eshitiladi va yo'talganda o'zgaradi; krepitatsiya esa yo'talganda o'zgarmaydi."
    },
    {
      "c": "ik3",
      "q": "Gipertoniya kasalligi (Arterial gipertenziya) tashxisi qo'yish uchun tinch holatda o'lchangan arterial qon bosimi qaysi ko'rsatkichga teng yoki undan yuqori bo'lishi kerak?",
      "a": "Sistolik AB ≥ 140 mm sim. ust. va/yoki Diastolik AB ≥ 90 mm sim. ust.",
      "w": [
        "110/70 mm sim. ust.",
        "90/60 mm sim. ust.",
        "120/80 mm sim. ust."
      ],
      "e": "1-daraja AG: 140–159 / 90–99; 2-daraja AG: 160–179 / 100–109; 3-daraja AG: ≥ 180 / ≥ 110 mm sim. ust."
    },
    {
      "c": "ik4",
      "q": "Bronxial astma xurujida bemor nafas chiqarishni osonlashtirish uchun qanday majburiy holatni ('Ortopnoe') egallaydi va qanday xirillashlar eshitiladi?",
      "a": "Qo'llari bilan stul yoki karavot chetiga tayanib o'tiradi; nafas chiqarish (ekspirator) uzaygan bo'lib, masofadan eshitiluvchi hushtaksimon quruq xirillashlar bo'ladi",
      "w": [
        "Chalqa yotib oladi",
        "Faqat nafas olish qiyinlashadi",
        "Xirillash bo'lmaydi"
      ],
      "e": "Bronxial astmada balg'am tahlilida Sharko-Leyden kristallari, Kurshman spirallari va ko'p eozinofillar topiladi."
    },
    {
      "c": "ik5",
      "q": "Oshqozon yara kasalligi va 12 barmoqli ichak yara kasalligida og'riqning ovqatlanish bilan bog'liqligi qanday farqlanadi?",
      "a": "Oshqozon yarasida — ovqatdan 30–60 daqiqa o'tib 'erta og'riq' bo'ladi; 12 barmoqli ichak yarasida — ovqatdan 2–3 soat o'tib va tunda 'kechki / och qoringa og'riq' bo'ladi (ovqat yesa qoladi)",
      "w": [
        "Ikkalasida ham faqat suv ichganda og'riydi",
        "12 barmoq ichakda erta og'riq bo'ladi",
        "Og'riq bo'lmaydi"
      ],
      "e": "12 barmoqli ichak yarasida me'da shirasi ovqat bilan neytrallanganda og'riq vaqtincha to'xtaydi ('Moyning uchlik ritmi')."
    },
    {
      "c": "ik6",
      "q": "O'tkir revmatik isitma (Revmatizm) ko'pincha A guruh beta-gemolitik streptokokkli anginadan 2–3 hafta o'tib rivojlanadi va 'Yurakning shilliq qavatini yalab, bo'g'imlarni tishlaydi' iborasi nimani anglatadi?",
      "a": "Bo'g'imlardagi poliartrit og'ir kechsa-da izsiz tuzaladi, ammo yurak klapanlaridagi endokardit (revmatik kardit) umrbod yurak nuqsonini (porokni) qoldiradi",
      "w": [
        "Bo'g'imlar yiringlab ketadi, yurak zararlanmaydi",
        "Tishlar tushib ketadi",
        "O'pka zararlanadi"
      ],
      "e": "Kisel-Jons katta mezonlari: Kardit, Poliartrit, Xoreya, Halqasimon eritema va Revmatik tugunchalar."
    },
    {
      "c": "ik7",
      "q": "Surunkali chap qorincha yurak yetishmovchiligi va O'ng qorincha yurak yetishmovchiligining asosiy dimlanish belgilari qanday farqlanadi?",
      "a": "Chap qorincha yetishmovchiligida kichik qon aylanish doirasida dimlanish (hansirash, yurak astmasi, o'pka shishi); O'ng qorincha yetishmovchiligida katta doirada dimlanish (oyoqlarda shish, gepatomegaliya, bo'yin venalari bo'rtishi, assit)",
      "w": [
        "Chap qorinchada oyoq shishadi",
        "O'ng qorinchada o'pka shishi bo'ladi",
        "Farqi yo'q"
      ],
      "e": "Har ikki qorincha yetishmovchiligi qo'shilganda Total (dimlangan) yurak yetishmovchiligi yuzaga keladi."
    },
    {
      "c": "ik8",
      "q": "O'tkir glomerulonefritning klassik klinik triadasi qaysi 3 ta sindromdan iborat?",
      "a": "1) Shish sindromi (ertalab yuz va qovoqlarda shish), 2) Arterial gipertenziya, 3) Siydik sindromi (makrogematuriya — 'go'sht yuvindisi' rangli siydik va proteinuriya)",
      "w": [
        "Isitma, yo'tal va qorin og'rig'i",
        "Sariqlik, qichishish va assit",
        "Poliuriya, polidipsiya va polifagiya"
      ],
      "e": "Nefrotik sindromda esa massiv proteinuriya (>3.5 g/sutka), gipoalbuminemiya, giperlipidemiya va tarqoq shishlar (anasarka) bo'ladi."
    },
    {
      "c": "ik9",
      "q": "Buyrak jomi va kosachalarining bakterial yallig'lanishi bo'lgan O'tkir piyelonefritda qanday klinik belgilar va siydik o'zgarishi kuzatiladi?",
      "a": "Yuqori isitma (39°C, qaltirash bilan), bel sohasida og'riq (Pasternatskiy simptomi musbat), dizuriya hamda siydikda Leykotsituriya (piuriya) va Bakteriuriya",
      "w": [
        "Isitmasiz kechadi, siydik toza bo'ladi",
        "Faqat gematuriya va shish",
        "Qon bosimi tushib ketadi"
      ],
      "e": "Nechiporenko sinamasida 1 ml siydikda leykotsitlar > 2000 tadan ko'p bo'lishi piyelonefritga xos."
    },
    {
      "c": "ik10",
      "q": "1-tip Qandli diabet va 2-tip Qandli diabet orasidagi patogenetik va klinik farq nimada?",
      "a": "1-tip — yoshlarda oshqozon osti bezi beta-hujayralari yemirilishi tufayli mutlaq insulin tanqisligi (umrbod insulin oladi); 2-tip — kattalarda va semizlikda to'qimalarning insulinga chidamliligi (insulinorezistentlik)",
      "w": [
        "1-tipda insulin ko'p bo'ladi",
        "2-tip faqat chaqaloqlarda bo'ladi",
        "Ikkalasi bir xil"
      ],
      "e": "Qandli diabetning klassik uchligi: Poliuriya (ko'p siyish), Polidipsiya (ko'p chanqash) va Polifagiya."
    },
    {
      "c": "ik11",
      "q": "Qalqonsimon bez gormonlari (T3, T4) haddan tashqari ko'p ishlab chiqariladigan Diffuz toksik buqoq (Bazedov / Greyvs kasalligi — Tireotoksikoz) ning 'Merzeburg triadasi' qaysi?",
      "a": "1) Buqoq (bo'yin oldida bez kattalashishi), 2) Ekzoftalm (ko'z olmasining chaqchayib oldinga bo'rtishi), 3) Doimiy Taxikardiya (va ozib ketish, qo'l qaltirashi)",
      "w": [
        "Semirish, uyquchanlik, bradikardiya (bu Miksedema / Gipotireoz)",
        "Yo'tal, aksirish, tumov",
        "Sariqlik, qorin dam bo'lishi"
      ],
      "e": "Gipotireozda (Miksedemada) aksincha moddalar almashinuvi sekinlashib, shish, bradikardiya, sovqotish va uyquchanlik bo'ladi."
    },
    {
      "c": "ik12",
      "q": "Temir tanqisligi anemiyasida (kamqonlikda) bemorlarda umumiy anemiya belgilaridan tashqari qanday xos 'Sideropenik sindrom' kuzatiladi?",
      "a": "Ta'm va hid bilishning buzilishi (bo'r, kesak, xom go'sht yeyish istagi — Pica chlorotica; benzin, atseton hidini yoqtirish), tirnoqlar mo'rtlashib qoshiqsimon bo'lishi (koyloniqiya), soch to'kilishi",
      "w": [
        "Yuz qizarishi va qon bosimi oshishi",
        "Taloqning 10 barobar kattalashishi",
        "Sariqlik"
      ],
      "e": "Temir tanqisligi anemiyasi — gipoxrom (rang ko'rsatkichi < 0.85), mikrotsitar anemiya bo'lib, qonda zardob temiri va Ferritin past bo'ladi."
    },
    {
      "c": "ik13",
      "q": "Vitamin B12 (Sianokobalamin) va folat kislota tanqisligi anemiyasida (Addison-Birmer kasalligi) qanday 3 ta tizim zararlanishi triada hosil qiladi?",
      "a": "1) Giperxrom megaloblastik anemiya, 2) Gastroenterologik sindrom ('loklangan' qizil silliq til — Gunter glossiti), 3) Nevrologik sindrom (funikulyar miyeloz — oyoqlar uvishishi)",
      "w": [
        "Bo'r yeyish va koyloniqiya",
        "O'pka yallig'lanishi",
        "Buyrak toshi"
      ],
      "e": "Oshqozon pariyetal hujayralari Kaslning ichki omilini ishlab chiqarmasa, B12 vitamini ichakdan so'rilmaydi."
    },
    {
      "c": "ik14",
      "q": "Jigar sirrozida Portal gipertenziya (darvoza venasida bosim oshishi) sindromining 3 ta eng xavfli klinik belgisi qaysilar?",
      "a": "1) Qizilo'ngach va me'da venalarining varikoz kengayishi (qon ketish xavfi), 2) Assit (qorin bo'shlig'ida erkin suyuqlik to'planishi), 3) Splenomegaliya (taloq kattalashishi) va 'Meduza boshi'",
      "w": [
        "Yo'tal va balg'am",
        "Bo'g'imlar shishi",
        "Tez-tez siyish"
      ],
      "e": "Qizilo'ngach varikoz venalaridan qon ketganda 'qahva quyqasi' yoki alvon qon qusish va qora axlat (melena) kuzatiladi."
    },
    {
      "c": "ik15",
      "q": "Surunkali xolesistit va o't-tosh kasalligida o'ng qovurg'a osti sohasini tekshirishda aniqlanadigan Ker, Ortner va Myussi-Georgiyevskiy (frenikus) simptomlari nimani bildiradi?",
      "a": "Ker — nafas olganda o't pufagi nuqtasida og'riq; Ortner — o'ng qovurg'a ravog'iga qo'l qirrasi bilan urilganda og'riq; Myussi — o'ng to'sh-o'mrov-so'rg'ichsimon muskul oyoqchalari orasini bosganda og'riq",
      "w": [
        "Appenditsit belgilari",
        "Buyrak sanchig'i belgilari",
        "Meningit belgilari"
      ],
      "e": "O't sanchig'ida og'riq o'ng qovurg'a ostidan o'ng kurak, o'ng yelka va o'ng bo'yin sohasiga uzatiladi (irradiatsiya beradi)."
    },
    {
      "c": "ik16",
      "q": "O'tkir va surunkali pankreatit xurujida qorin og'rig'ining xarakteri qanday bo'ladi va qaysi ferment oshadi?",
      "a": "To'satdan yog'li/qovurilgan ovqatdan so'ng epigastriy va chap qovurg'a ostida boshlanib, belni halqa kabi o'rab oluvchi ('belbog'simon') kuchli og'riq, to'xtovsiz qusish hamda qon/siydikda Alfa-amilaza (diastaza) va Lipaza oshishi",
      "w": [
        "O'ng yonboshda og'riq",
        "Qusgandan keyin yengillashuvchi og'riq",
        "Faqat bosh og'rig'i"
      ],
      "e": "O'tkir pankreatitda dastlabki 2–3 kunda 'Sovuq, Ochlik va Tinchlik' (Xolod, Golod i Pokoy) qoidasi hamda antiferment terapiya qo'llaniladi."
    },
    {
      "c": "ik17",
      "q": "Plevra bo'shlig'iga ko'p miqdorda suyuqlik (ekssudat) to'plangan Ekssudativ plevritda o'pka perkussiyasi va auskultatsiyasida nima aniqlanadi?",
      "a": "Suyuqlik ustida — mutlaq bo'g'iq (son tovushidek) perkutor tovush, vezikulyar nafas va ovoz dirillashining keskin susayishi yoki eshitilmasligi",
      "w": [
        "Quticha tovushi va kuchli nafas",
        "Timpanik tovush",
        "Krepitatsiya"
      ],
      "e": "Quruq (fibrinoz) plevritda esa nafas olganda ko'krakda sanchuvchi og'riq va qor g'archillashiga o'xshash 'plevra ishqalanish shovqini' eshitiladi."
    },
    {
      "c": "ik18",
      "q": "Chekuvchilarda ko'p uchraydigan Surunkali Obstruktiv O'pka Kasalligi (SO'OK / ХОБЛ) va o'pka emfizemasida ko'krak qafasi shakli hamda perkutor tovush qanday o'zgaradi?",
      "a": "Ko'krak qafasi 'bochkasimon' (emfizematoz) shaklga kiradi, perkussiyada o'pka ustida 'quticha tovushi' (banderol tovushi) eshitiladi",
      "w": [
        "Yassi ko'krak va bo'g'iq tovush",
        "Voronkasimon ko'krak",
        "O'zgarmaydi"
      ],
      "e": "Spirometriyada Tiffno indeksi (JFJ1 / O'TS < 70%) ning bronxolitikdan keyin ham past qolishi SO'OK ning oltin diagnostik mezonidir."
    },
    {
      "c": "ik19",
      "q": "Yurak bo'lmachalari hilpillashi (Mertsatel aritmiya / Fibrillyatsiya predserdiy) da EKG va pulsda qanday xos belgilar aniqlanadi?",
      "a": "EKGda P tishcha yo'qolib o'rniga f-to'lqinlar tushadi, R-R oraliqlar mutlaqo notekis (aritmik) bo'ladi; klinikada 'Puls taqchilligi' (defitsiti: yurak urishi soni bilak pulsidan ko'p) aniqlanadi",
      "w": [
        "P tishcha baland va puls tekis",
        "Yurak urishi 40 ta",
        "O'zgarmaydi"
      ],
      "e": "Mertsatel aritmiyada chap bo'lmacha quloqchasida tromb hosil bo'lib, kardioembolik ishemik insult xavfini oshiradi."
    },
    {
      "c": "ik20",
      "q": "Anafilaktik shok (dori inyeksiyasi yoki ari chaqishidan keyin) rivojlanganda birinchi soniyalarda hayotni saqlab qolish uchun qilinadigan 1-raqamli dori vositasi qaysi?",
      "a": "Adrenalin (Epinefrin) 0.1% — 0.3–0.5 ml mushak orasiga (son old-tashqi yuzasiga) yoki suyultirib vena ichiga + Prednizolon / Deksametazon",
      "w": [
        "Paratsetamol tabletkasi",
        "Faqat validol til ostiga",
        "Ko'mir tabletkasi"
      ],
      "e": "Adrenalin α1-retseptorlarni qo'zg'atib tushib ketgan qon bosimini ko'taradi, β2-retseptorlar orqali esa bronxospazmni ochadi."
    },
    {
      "c": "ik21",
      "q": "Bo'g'imlarning autoimmun eroziv-destruktiv yallig'lanishi bo'lgan Revmatoid artritning eng xos klinik belgisi nima?",
      "a": "Qo'l va oyoq mayda bo'g'imlarining (barmoqlarning) simmetrik zararlanishi, ertalabki >1 soat davom etuvchi 'bo'g'imlar qotib qolishi' (karaxtlik) va keyinchalik barmoqlarning 'morj panjasi' shaklida qiyshayishi",
      "w": [
        "Faqat tizza bo'g'imi 2 kunda tuzaladi",
        "O'ng oyoq bosh barmog'ining kechasi qizarishi (bu Podagra)",
        "Bo'g'imlar og'rimaydi"
      ],
      "e": "Revmatoid artrit tashxisida qonda Revmatoid omil (RF) va A-SSp (АЦЦП) antitelolari hamda rentgenda bo'g'im yorig'i torayishi va uzulalar ko'riladi."
    },
    {
      "c": "ik22",
      "q": "Purin almashinuvi buzilib, qonda siydik kislotasi (mochevina emas, aynan Urat kislota) oshishi va urat kristallarining bo'g'imlarga (ayniqsa oyoq 1-barmog'iga) cho'kishi qaysi kasallik?",
      "a": "Podagra (Nikris kasalligi — kechasi oyoq bosh barmog'ining o'tkir qizarib shishishi va 'tofus' tugunchalari)",
      "w": [
        "Osteoartroz",
        "Revmatizm",
        "Osteoporoz"
      ],
      "e": "Podagra xurujida Kolxitsin va NYaQV beriladi, xurujlararo davrda esa siydik kislota sintezini bloklovchi Allopurinol yoki Febuksostat buyuriladi."
    },
    {
      "c": "ik23",
      "q": "Qandli diabetda qonda qand miqdori keskin tushib ketganda (< 3.0 mmol/l) rivojlanadigan Gipoglikemik koma va qand oshib ketganda (> 20–30 mmol/l) rivojlanadigan Giperglikemik (Ketoatsidotik) koma qanday farqlanadi?",
      "a": "Gipoglikemik koma — daqiqalar ichida to'satdan rivojlanadi, teri sovuq terga botgan (nam), tremori bor, og'izdan atseton hidi kelmaydi (40% glyukoza v/i qilinsa darhol hushiga keladi); Ketoatsidotik koma — kunlar davomida sekin rivojlanadi, teri quruq, Kussmaul shovqinli nafasi va og'izdan chirigan olma (atseton) hidi keladi",
      "w": [
        "Gipoglikemik komada insulin qilinadi",
        "Ketoatsidozda 40% shakar quyiladi",
        "Farqi yo'q"
      ],
      "e": "Shubhali holatda bemorga avval 20–40 ml 40% li Glyukoza vena ichiga yuboriladi: gipoglikemiyada bemor ko'zini ochadi!"
    },
    {
      "c": "ik24",
      "q": "O'pka sili (Tuberkulyoz) ga shubha qilinganda birlamchi skrining uchun qaysi 3 ta tekshiruv majburiy o'tkaziladi?",
      "a": "1) Ko'krak qafasi rentgenografiyasi / Raqamli flyuorografiya, 2) Balg'amni Kox tayoqchasiga (Sil-Nilsen va GeneXpert PZR) tekshirish, 3) Diaskintest / Mantu sinamasi",
      "w": [
        "Faqat EKG va UZI",
        "Siydik tahlili",
        "Gastroskopiya"
      ],
      "e": "2–3 haftadan ortiq davom etayotgan yo'tal, kechki subfebril isitma (37.2–37.5°C), tungi terlash va ozish silga tekshirish uchun mutlaq ko'rsatmadir."
    },
    {
      "c": "ik25",
      "q": "Sariqlik (Ikterus) sindromi kelib chiqish mexanizmiga ko'ra qaysi 3 turga bo'linadi?",
      "a": "1) Jigar usti (Gemolitik — eritrotsitlar ko'p parchalanishi, konyugirlanmagan bilirubin oshadi), 2) Jigar (Parenximatoz — gepatit, sirroz), 3) Jigar osti (Mexanik / Obstruktiv — o't yo'li tosh bilan berkilishi, axlat oqarib ketadi, siydik pivo rangida)",
      "w": [
        "Oq, sariq va qizil",
        "Yozgi va qishki",
        "Faqat 1 turi bor"
      ],
      "e": "Mexanik sariqlikda o't ichakka tushmagani sababli axlatda sterkobilin yo'qolib, axlat kulrang-oq ('axolik') bo'lib qoladi va teri kuchli qichishadi."
    },
    {
      "c": "ik26",
      "q": "Yurak auskultatsiyasida Mitral klapan (chap bo'lmacha-qorincha klapani) tovushlari eng yaxshi eshitiladigan 1-nuqta qayerda joylashgan?",
      "a": "Yurak cho'qqisida (5-qovurg'alararo oraliqda, chap o'rta o'mrov chizig'idan 1–1.5 sm ichkarida)",
      "w": [
        "To'sh suyagining o'ng qirrasida 2-qovurg'alararo oraliqda (bu Aorta klapani)",
        "Xanjarsimon o'simta asosida (bu Uch tabaqali klapan)",
        "O'ng kurak ostida"
      ],
      "e": "2-nuqta (o'ng 2-q/o) — Aorta klapani; 3-nuqta (chap 2-q/o) — O'pka arteriyasi klapani; 4-nuqta (xanjarsimon o'simta asosi) — Trikuspidal klapan; 5-nuqta — Botkin-Erb nuqtasi."
    },
    {
      "c": "ik27",
      "q": "O'tkir Koronar Sindrom (O'KS / Miokard infarkti) bilan kelgan bemorga tez tibbiy yordam bosqichida qo'llaniladigan 'MONA' protokoli qaysi dorilarni o'z ichiga oladi?",
      "a": "M — Morfin (kuchli og'riqni qoldirish), O — Oxygen (kislorod, SpO2 < 90% bo'lsa), N — Nitroglitserin (til ostiga/sprey, agar AB > 90 bo'lsa), A — Aspirin (250–300 mg chaynab ichish) + Klopidogrel va Geparin",
      "w": [
        "M — Magneziya, O — Omeprazol, N — Noshpa, A — Analgin",
        "Faqat vitaminlar",
        "Antibiotiklar"
      ],
      "e": "Aspirin va Klopidogrel (qo'sh antiagregant terapiya) koronar tromb o'sishini to'xtatib, o'lim xavfini keskin kamaytiradi."
    },
    {
      "c": "ik28",
      "q": "Kattalarda normal nafas olish soni (ChDD) va yurak qisqarishlari soni (ChSS / Puls) tinch holatda 1 daqiqada nechtaga teng?",
      "a": "Nafas olish soni (ChDD): 16–20 marta/daq (20 dan oshsa — Taxipnoe, 12 dan kamaysa — Bradipnoe); Yurak urishi (Puls): 60–90 zarba/daq",
      "w": [
        "Nafas 40–50 ta, puls 120 ta",
        "Nafas 5 ta, puls 30 ta",
        "Nafas 60 ta, puls 60 ta"
      ],
      "e": "Tana harorati 1°C ga ko'tarilganda yurak urishi soni o'rtacha 8–10 zarbaga oshadi."
    },
    {
      "c": "ik29",
      "q": "Buyrakning funksional holatini va Surunkali Buyrak Kasalligi (SBK / ХБП) bosqichini baholashda qondagi qaysi modda va qaysi asosiy ko'rsatkich hisoblanadi?",
      "a": "Qon zardobidagi Kreatinin (normada 60–115 mkmol/l) va Mochevina hamda ular asosida hisoblanadigan Koptokchalar Filtratsiyasi Tezligi (KFT / СКФ, normada > 90 ml/daq)",
      "w": [
        "Qondagi Bilirubin va ALT",
        "Qondagi Amilaza",
        "Qondagi Gemoglobin"
      ],
      "e": "KFT (СКФ) < 15 ml/daq ga tushishi SBKning 5-terminal bosqichi (uremiya) bo'lib, Gemodializ ('sun'iy buyrak') yoki buyrak transplantatsiyasini talab etadi."
    },
    {
      "c": "ik30",
      "q": "O'tkir leykemiya (O'tkir leykoz) ning klinik ko'rinishida suyak ko'migining blast hujayralar bilan to'lib ketishi oqibatida rivojlanadigan 4 ta asosiy klinik sindrom qaysilar?",
      "a": "1) Anemik sindrom (holsizlik, oqarish), 2) Gemorragik sindrom (trombotsitopeniya tufayli milk va burundan qonash, ko'karishlar), 3) Infeksion-yallig'lanish sindromi (nekrotik angina, isitma), 4) Giperplastik sindrom (limfa tugunlari, jigar, taloq kattalashishi va suyaklar qaqshab og'rishi)",
      "w": [
        "Faqat yo'tal va tumov",
        "Qon bosimi oshishi va semirish",
        "Ich qotishi"
      ],
      "e": "Qon tahlilida blast hujayralar va oraliq shakllar yo'qligi ('leykemik o'pirilish' — hiatus leukemicus) o'tkir leykozning patognomonik belgisidir."
    }
  ],
  "jarrohlik": [
    {
      "c": "jr1",
      "q": "Aseptika va Antiseptika tushunchalarining bir-biridan asosiy farqi nimada?",
      "a": "Aseptika — jarohatga mikroblar tushishining oldini olish (sterillash, qo'l yuvish — profilaktika); Antiseptika — jarohatga tushib bo'lgan mikroblarni yo'qotish (mexanik, kimyoviy, biologik, fizik usullar — davolash)",
      "w": [
        "Aseptika dori quyish, antiseptika qaynatish",
        "Ikkalasi bir xil",
        "Aseptika faqat terapiyada ishlatiladi"
      ],
      "e": "Antiseptika asoschisi — J. Lister (karbol kislota), Aseptika asoschilaridan biri — E. Bergmann va K. Shimmelbush."
    },
    {
      "c": "jr2",
      "q": "O'tkir appenditsitda og'riqning dastlab epigastriy (to'sh osti) yoki kindik atrofida boshlanib, 2–4 soatdan keyin o'ng yonbosh sohasiga ko'chishi qaysi simptom deb ataladi?",
      "a": "Koxer-Volkovich simptomi (og'riq migratsiyasi)",
      "w": [
        "Ortner simptomi",
        "Pasternatskiy simptomi",
        "Kerning simptomi"
      ],
      "e": "O'ng yonbosh sohasini bosib qo'lni tez olganda og'riq kuchayishi — Shchetkin-Blyumberg (peritonit) simptomidir."
    },
    {
      "c": "jr3",
      "q": "O'tkir appenditsit diagnostikasida Rovzing, Sitkovskiy va Obraztsov simptomlari qanday tekshiriladi?",
      "a": "Rovzing — chap yonboshni turtib bosganda yo'g'on ichak gazlari siljib o'ng yonboshda og'riq berishi; Sitkovskiy — bemor chap yonboshiga yotganda o'ng yonboshda tortuvchi og'riq; Obraztsov — o'ng oyoqni tekis ko'targanda og'riq",
      "w": [
        "Bo'yinni egish",
        "O'ng qovurg'a ravog'iga urish",
        "To'piqni bosish"
      ],
      "e": "O'tkir appenditsit tasdiqlanganda yagona to'g'ri taktika — shoshilinch Appendektomiya operatsiyasidir."
    },
    {
      "c": "jr4",
      "q": "Arterial qon ketish va Venoz qon ketish bir-biridan qanday klinik belgilar bilan farqlanadi va jgut (turniket) qanday qo'yiladi?",
      "a": "Arterial — och qizil (alvon) qon pulsatsiya bilan favvora bo'lib otiladi, jgut jarohatdan YUQORIGA qo'yiladi; Venoz — to'q olcha rangli qon bir tekis oqadi, bosib turuvchi bog'lam qo'yiladi",
      "w": [
        "Venozda favvora bo'lib otiladi",
        "Arterialda jgut pastga qo'yiladi",
        "Farqi yo'q"
      ],
      "e": "Jgut qo'yilgan aniq vaqt qog'ozga yozib qistiriladi (yozda maksimal 1 soat, qishda 30 daqiqa; har 30 daqiqada 2 daqiqa bo'shatiladi)."
    },
    {
      "c": "jr5",
      "q": "Me'da yoki 12 barmoqli ichak yarasining teshilishi (Perforatsiya) da rivojlanadigan klassik klinik triada (Mondor triadasi) qaysi?",
      "a": "1) Epigastriyda to'satdan 'xanjardek' keskin og'riq, 2) Qorin old devori mushaklarining 'taxtadek' qattiq taranglashishi, 3) Yara anamnezi (rentgenda diafragma ostida 'o'roqsimon' erkin gaz ko'rinadi)",
      "w": [
        "Asta-sekin boshlanuvchi og'riq va yumshoq qorin",
        "Faqat ich ketishi",
        "Yo'tal va isitma"
      ],
      "e": "Teshilgan yara difuz peritonitga olib kelgani uchun shoshilinch jarrohlik amaliyoti (yarani tikish) talab etiladi."
    },
    {
      "c": "jr6",
      "q": "Oshqozon-ichak traktining yuqori qismidan (qizilo'ngach, me'da, 12 barmoq ichakdan) qon ketishining 2 ta eng xos tashqi belgisi nima?",
      "a": "1) 'Qahva quyqasi' rangida qon qusish (Gematemezis — gemoglobin me'da HCl kislotasi bilan xlorid gematinga aylanadi), 2) Qora smolasimon axlat (Melena)",
      "w": [
        "Ko'pikli pushti balg'am (bu o'pkadan qon ketish)",
        "Qizil siydik",
        "Burun qonashi"
      ],
      "e": "O'pkadan qon ketganda (Gemoptizis) qon yo'tal bilan chiqadi, alvon rangli, ko'pikli va ishqoriy reaksiyali bo'ladi."
    },
    {
      "c": "jr7",
      "q": "Qorin churrasi (Grija / Hernia) ning qisilib qolishi (Ushchemlenie griji) da Birinchi yordam ko'rsatishda qaysi harakat QAT'IYAN MAN ETILADI?",
      "a": "Qisilgan churrani qo'l bilan zo'rlab qorin bo'shlig'iga to'g'rilash (vpravlenie), og'riq qoldiruvchi berish va issiq grelka qo'yish qat'iyan man etiladi!",
      "w": [
        "Shifoxonaga yotqizish",
        "Jarrohni chaqirish",
        "Qon bosimini o'lchash"
      ],
      "e": "Qisilgan churrani qo'l bilan itarish nekrozga uchragan ichak qovuzlog'ining qorin ichida yorilib, o'limga olib keluvchi axlatli peritonit chaqirishiga sabab bo'ladi."
    },
    {
      "c": "jr8",
      "q": "Kuyishlar (Combustio) chuqurligi bo'yicha 4 darajaga bo'linadi; qaysi darajada tiniq sarg'ish suyuqlikli pufaklar (bullalar) hosil bo'ladi va Kuyish maydoni qaysi 2 usulda hisoblanadi?",
      "a": "II darajada (va III-A da) pufaklar hosil bo'ladi; Kuyish maydoni Uollesning 'To'qqizliklar qoidasi' (bosh 9%, qo'l 9%, oyoq 18%, gavda oldi 18%, orqasi 18%, oraliq 1%) va 'Kaft qoidasi' (bemor kafti = 1%) bilan o'lchanadi",
      "w": [
        "I darajada suyak ko'mirga aylanadi",
        "Kaft = 10%",
        "O'lchanmaydi"
      ],
      "e": "I, II va III-A darajali kuyishlar 'yuza kuyishlar' (o'zi epitelizatsiya bo'ladi), III-B va IV darajali kuyishlar 'chuqur kuyishlar' (teri ko'chirib o'tkazish kerak) deyiladi."
    },
    {
      "c": "jr9",
      "q": "O'tkir ichak tutilishi (Ileus) ning asosiy klinik belgilari va rentgenologik 'Kloyber kosachalari' nimani anglatadi?",
      "a": "To'lg'oqsimon qorin og'rig'i, to'xtovsiz qusish, yel va axlat chiqmasligi, qorin asimmetrik dam bo'lishi; Rentgenda 'Kloyber kosachalari' — ichak qovuzloqlarida pastda suyuqlik sathi va tepasida gumbazsimon gaz to'planishi",
      "w": [
        "Diafragma ostida o'roqsimon gaz",
        "O'pkada soya",
        "Buyrakda tosh"
      ],
      "e": "Ichak tutilishi mexanik (strangulyatsion — buralib qolish, obturatsion — o'sma bilan yopilish, invaginatsiya) va dinamik (paralitik, spastik) turlarga bo'linadi."
    },
    {
      "c": "jr10",
      "q": "Suyak sinishining (Fractura) faqat sinishga xos bo'lgan 'Mutlaq (absolyut) belgilari' qaysilar?",
      "a": "1) Suyak bo'laklarining g'ayritabiiy (patologik) harakatchanligi, 2) Krepitatsiya (suyak bo'laklari ishqalanish ovozi), 3) Oyoq-qo'l o'qining deformatsiyasi va kaltalashishi, 4) Ochiq sinishda jarohatdan suyak ko'rinishi",
      "w": [
        "Faqat shish va ko'karish (bular nisbiy belgilar)",
        "Isitma chiqishi",
        "Teri qizarishi"
      ],
      "e": "Transport immobilizatsiyasida (Kramer yoki Diterixs shinasi) singan suyakdan yuqoridagi va pastdagi 2 ta qo'shni bo'g'im (son va yelka singanda 3 ta bo'g'im) harakatsizlantiriladi."
    },
    {
      "c": "jr11",
      "q": "Plevra bo'shlig'iga havo to'planishi — Pnevmotoraksning eng xavfli turi qaysi va unda nima sodir bo'ladi?",
      "a": "Klapanli (taranglashgan) pnevmotoraks — havo har nafas olganda plevra bo'shlig'iga kiradi, lekin chiqib keta olmaydi; o'pka butunlay puchayadi va ko'ks oralig'i a'zolari sog'lom tomonga siljiydi",
      "w": [
        "Yopiq pnevmotoraks",
        "Gidrotoraks",
        "Bronxit"
      ],
      "e": "Klapanli pnevmotoraksda shoshilinch ravishda 2-qovurg'alararo oraliqda o'rta o'mrov chizig'i bo'ylab yo'g'on igna bilan dekompressiya (plevral punksiya) qilinadi."
    },
    {
      "c": "jr12",
      "q": "Qon guruhlarini (AB0 tizimi) va Rezus-omilni (Rh) aniqlash hamda qon quyishda (Gemotransfuziya) qaysi 3 ta sinama majburiy bajariladi?",
      "a": "1) Donor va retsipiyent qon guruhi hamda Rh-omilini qayta aniqlash, 2) Individual moslik sinamasi (sovuq va 46°C issiq/jelatinli), 3) Biologik sinama (3 marta 10–15 ml dan quyib 3 daqiqa kuzatish)",
      "w": [
        "Faqat rangiga qarash",
        "Sinamasiz quyish",
        "Faqat pulsni o'lchash"
      ],
      "e": "O(I) guruh eritrotsitlarida A va B antigenlari yo'q (α, β aglyutininlar bor), AB(IV) guruhda esa A va B antigenlar bor (aglyutininlar yo'q); hozirda faqat bir xil guruh va Rh qon quyiladi."
    },
    {
      "c": "jr13",
      "q": "Barmoq to'qimalarining o'tkir yiringli yallig'lanishi nima deb ataladi va uning qanday turlari bor?",
      "a": "Panaritsey (do'lanacha / kuydirgi emas, barmoq yiringlashi) — teri, tirnoq oldi (paronixiya), tirnoq osti, teri osti, pay (tendovaginit), bo'g'im va suyak panaritseyi",
      "w": [
        "Furunkul",
        "Karbunkul",
        "Gidradenit"
      ],
      "e": "'Birinchi uyqusiz tun' qoidasi: barmoqda lo'qillovchi og'riq tufayli bemor kechasi uxlay olmasa, panaritsey yiringlagan bo'lib, uni jarrohlik yo'li bilan ochish shart."
    },
    {
      "c": "jr14",
      "q": "Soch follikulasi va yog' bezining bitta nekrotik o'zakli o'tkir yiringli yallig'lanishi hamda bir nechta follikulalarning qo'shilib ketgan ko'p o'zakli yiringli-nekrotik yallig'lanishi nima?",
      "a": "Bitta o'zakli — Furunkul (chipqon); Bir nechta qo'shilgan o'zakli — Karbunkul; Qo'ltiq osti apokrin ter bezlarining yiringlashi esa — Gidradenit ('it emchak')",
      "w": [
        "Abssess va Flegmona",
        "Lipoma va Ateroma",
        "Sarasmas"
      ],
      "e": "Yuqori lab va burun-lab uchburchagidagi ('o'lim uchburchagi') furunkulni siqish qat'iyan man etiladi — infektsiya ko'z venasi orqali miya kavernoz sinusiga o'tib tromboz beradi!"
    },
    {
      "c": "jr15",
      "q": "Qoqshol (Tetanus — Clostridium tetani) va Gazli gangrena (Clostridium perfringens) qanday jarohatlarda rivojlanadi va Qoqsholning birinchi klinik belgisi nima?",
      "a": "Tuproq bilan ifloslangan, chuqur, ezilgan, kislorod kirmaydigan (anaerob) jarohatlarda; Qoqsholning klassik triada boshlanishi: 1) Trizm (chaynov mushaklari spazmi — og'iz ochilmasligi), 2) Sardonicus kulgisi, 3) Disfagiya va Opistotonus (yoy kabi egilish)",
      "w": [
        "Toza operatsion jarohatda",
        "Isitmasiz yo'tal",
        "Teri qichishishi"
      ],
      "e": "Har qanday jarohat va kuyishda Qoqsholga qarshi shoshilinch profilaktika (AS-anatoksin va PSChI / PSS zardobi) o'tkaziladi."
    },
    {
      "c": "jr16",
      "q": "Jarrohlik asboblarini (skalpel, qisqichlar) va bog'lov materiallarini 100% barcha mikrob hamda sporalardan tozalash (Sterillash) avtoklavda va quruq issiq shkafda (suxojarda) qanday rejimda bajariladi?",
      "a": "Avtoklavda (bosim ostidagi bug'): 2 atm bosimda 132°C da 20 daqiqa (yoki 1.1 atm, 120°C da 45 daq); Quruq issiq shkafda (Suxojar): 180°C da 60 daqiqa",
      "w": [
        "40°C iliq suvda 5 daqiqa",
        "80°C da 10 daqiqa",
        "Muzlatkichda"
      ],
      "e": "Sterillikni nazorat qilish uchun indikator lentalar va kimyoviy/biologik testlar avtoklav biksi ichiga solinadi."
    },
    {
      "c": "jr17",
      "q": "Jarohatga (tashqi ochiq yaraga) birlamchi xirurgik ishlov berish (BXIB / ПХО) qachon o'tkaziladi va uning bosqichlari nima?",
      "a": "Jarohat olingandan keyingi dastlabki 24–36 soat ichida (yiringlamasdan oldin): 1) Yarani kesib kengaytirish va taftish qilish, 2) Yot jismlar va o'lik to'qimalarni kesib olish, 3) Gemostaz (qonni to'xtatish), 4) Chok qo'yish (va drenajlash)",
      "w": [
        "1 oydan keyin",
        "Faqat yod surtish",
        "Yiringlagan yarani mahkam tikib qo'yish"
      ],
      "e": "Tishlangan (it tishlagan), o'qotar va yiringlab bo'lgan yaralarga birlamchi berk chok QO'YILMAYDI!"
    },
    {
      "c": "jr18",
      "q": "Bosh miya chayqalishi (Commotio cerebri), Bosh miya lat yeyishi (Contusio) va Bosh miya ezilishi (Compressio — gematoma) qanday farqlanadi?",
      "a": "Chayqalishda — qisqa muddatli (soniya–daqiqalar) hushdan ketish, retrograd amneziya, qusish bo'ladi, o'choqli falajlik bo'lmaydi; Lat yeyish va Gematoma ezilishida — uzoq hushdan ketish, o'choqli nevrologik belgilar (gemiparez, anizokoriya — bir ko'z qorachig'i kengayishi) va 'yorug' oraliq' kuzatiladi",
      "w": [
        "Chayqalishda suyak sinadi",
        "Gematomada hech qanday belgi bo'lmaydi",
        "Farqi yo'q"
      ],
      "e": "Epidural va subdural gematomada bemor hushiga kelib ('yorug' oraliq'), so'ngra gematoma kattalashishi bilan qaytadan komaga tushadi."
    },
    {
      "c": "jr19",
      "q": "Oyoq-qo'llarning uzoq vaqt (4–8 soatdan ortiq) og'ir vayronalar yoki beton ostida qisilib qolishi va bo'shatilgandan keyin mioglobin buyrak kanalchalarini berkitib o'tkir buyrak yetishmovchiligi berishi qaysi sindrom?",
      "a": "Uzoq muddatli ezilish sindromi (Krash-sindrom / Pozitsion siqilish sindromi)",
      "w": [
        "Varikoz sindromi",
        "Reyno kasalligi",
        "Podagra"
      ],
      "e": "Ezilgan oyoqni vayрона ostidan chiqarishdan OLDIN zaharli mioglobin qonga otilib ketmasligi uchun yuqorisidan jgut qo'yiladi."
    },
    {
      "c": "jr20",
      "q": "Ko'richakning chuvalchangsimon o'simtasi (Appendiks) odatda o'ng yonbosh sohasida joylashadi; jarrohlikda uni topish uchun qaysi 2 ta topografik nuqta qo'llaniladi?",
      "a": "Mak-Burney nuqtasi (kindik va o'ng oldingi yuqori yonbosh o'simtasini tutashtiruvchi chiziqning tashqi va o'rta uchdan bir qismi chegarasi) hamda Lans nuqtasi",
      "w": [
        "Ker nuqtasi",
        "Botkin nuqtasi",
        "Erba nuqtasi"
      ],
      "e": "Mak-Burney nuqtasi bo'ylab Volkovich-Dyakonov qiya kesmasi bajariladi."
    },
    {
      "c": "jr21",
      "q": "O'tkir xolesistit va o't-tosh kasalligini jarrohlik yo'li bilan davolashda bugungi kundagi 'Oltin standart' kam invaziv operatsiya qaysi?",
      "a": "Laparoskopik xolesistektomiya (qorinni katta kesmasdan, 3–4 ta kichik teshikcha — troakar orqali videokamera nazoratida o't pufagini olib tashlash)",
      "w": [
        "Oshqozon rezeksiyasi",
        "Splenektomiya",
        "Nefrektomiya"
      ],
      "e": "Laparoskopik operatsiyadan keyin bemor 1–2 kunda oyoqqa turadi va katta chandiq qolmaydi."
    },
    {
      "c": "jr22",
      "q": "Oyoq yuzaki venalarining varikoz kengayishi va chuqur venalar o'tkazuvchanligini tekshirish uchun qaysi sinamalar (Troyanov-Trendelenburg, Delbe-Pertess) o'tkaziladi?",
      "a": "Troyanov-Trendelenburg — katta teri osti venasi klapanlari yetishmovchiligini tekshiradi; Delbe-Pertess (marsh sinamasi) — chuqur venalar o'tkazuvchanligini tekshiradi",
      "w": [
        "Pasternatskiy sinamasi",
        "Zimnitskiy sinamasi",
        "Mantu sinamasi"
      ],
      "e": "Oyoq chuqur venalari trombozida (flebotrombozda) oyoq butunlay shishib ko'karadi va boldirni bosganda og'riq (Xomans va Mozes simptomlari) bo'ladi."
    },
    {
      "c": "jr23",
      "q": "Obliteratsiyalovchi endarteriit va oyoq arteriyalari aterosklerozining eng xos erta klinik belgisi ('Vitrinachi simptomi') nima?",
      "a": "O'zgaruvchan (intermittirlovchi) oqsoqlik — bemor 100–200 metr yurganda boldir mushaklarida kuchli ishemik og'riq paydo bo'lib to'xtab dam olishga majbur bo'lishi, oyoq panjasi sovushi va poyabzal usti arteriyasida puls yo'qolishi",
      "w": [
        "Yurganda og'riqning yo'qolishi",
        "Oyoq qizib ketishi",
        "Vena bo'rtib chiqishi"
      ],
      "e": "Oyoq arteriyalari okklyuziyasida UZI-dopplerografiya (UZDG) va angiografiya qilinib, tomirni stentlash yoki shuntlash bajariladi."
    },
    {
      "c": "jr24",
      "q": "Qorin pardasining (Peritoneum) o'tkir yiringli yallig'lanishi — Peritonitning 3 ta klinik bosqichi va eng asosiy mahalliy belgisi nima?",
      "a": "Bosqichlari: 1) Reaktiv (dastlabki 24 soat), 2) Toksik (24–72 soat), 3) Terminal (>72 soat, Gippokrat yuzi); Asosiy belgisi: Qorin devori mushaklarining himoya taranglashishi va Shchetkin-Blyumberg simptomi musbatligi",
      "w": [
        "Qorin yumshoq va og'riqsiz",
        "Faqat bosh og'rig'i",
        "Isitma 35°C"
      ],
      "e": "Tarqoq yiringli peritonitda o'rta laparotomiya qilinib, infeksiya manbai bartaraf etiladi va qorin bo'shlig'i sanatsiya qilinib drenajlanadi."
    },
    {
      "c": "jr25",
      "q": "Gemotoraks (plevra bo'shlig'iga qon to'planishi) da plevral punksiya qilinganda olingan qon ivib qoladimi yoki ivimaydimi (Ruvilua-Greguar sinamasi)?",
      "a": "Agar probirkadagi qon ivisa — plevra bo'shlig'iga qon ketish HALI DAVOM ETMOQDA (torakotomiya kerak); agar ivimasa — qon ketish to'xtagan (plevra qonni defibrinlab ulgurgan)",
      "w": [
        "Ivisa qon to'xtagan",
        "Qon hech qachon ivimaydi",
        "Suv qo'shiladi"
      ],
      "e": "Gemotoraksda plevral punksiya 7–8-qovurg'alararo oraliqda orqa qo'ltiq osti yoki kurak chizig'ida qovurg'aning YUQORI qirrasidan qilinadi (pastki qirrada qon tomir va nerv o'tadi!)."
    },
    {
      "c": "jr26",
      "q": "To'g'ri ichakning distal qismi venoz chigallari kengayishi (Gemorroy / Bavosil), Orqa chiqaruv kanali yorig'i va To'g'ri ichak atrofi kletchatkasi yiringlashi (Paraproktit) qaysi bo'limda davolanadi?",
      "a": "Koloproktologiya (Proktologiya) bo'limida",
      "w": [
        "Pulmonologiya bo'limida",
        "Kardiologiya bo'limida",
        "Oftalmologiya bo'limida"
      ],
      "e": "Gemorroyning asosiy belgilari — defekatsiya paytida tugunlar tushishi va oxirida alvon qon tomchilashi; Paraproktitda esa kuchli lo'qillovchi og'riq va yuqori isitma bo'ladi."
    },
    {
      "c": "jr27",
      "q": "Desmurgiya (Bog'lamlar haqidagi ta'limot) da boshning tepa qismi jarohatlanganda qaysi bog'lam va yelka bo'g'imi shikastlanganda qaysi bog'lam qo'yiladi?",
      "a": "Boshga — 'Gippokrat qalpog'i' yoki 'Chepets' bog'lami; Yelka bo'g'imiga — 'Boshoqsimon' (Kolosovidnaya) bog'lam yoki Dezo bog'lami",
      "w": [
        "Boshga Dezo bog'lami",
        "Ko'krakka ko'z bog'lami",
        "Oyoqqa salla bog'lam"
      ],
      "e": "O'mrov suyagi singanda yoki yelka chiqqanda qo'lni gavdaga mahkamlash uchun Dezo bog'lami yoki Delbe halqalari qo'yiladi."
    },
    {
      "c": "jr28",
      "q": "Yiringli yaralarni mahalliy davolashning 1-fazasida (Gidratatsiya — yiring va shish ko'p fazada) va 2-fazasida (Degidratatsiya — toza granulyatsiya va bitish fazasida) qanday vositalar qo'llaniladi?",
      "a": "1-fazada (yiringli fazada): Gipertonik eritma (10% NaCl — yiringni tortib oladi), proteolitik fermentlar va suvda eruvchan malhamlar (Levomekol); 2-fazada (toza fazada): To'qima bitishini tezlatuvchi malhamlar (Solikoseril, Aktovegin, Oblepixa moyi)",
      "w": [
        "1-fazada yog'li vazelin surtiladi (yiringni qamab qo'yadi!)",
        "2-fazada 10% tuz quyiladi",
        "Farqi yo'q"
      ],
      "e": "Yiringli yara ustiga vazelinli yog'li malham (masalan, oddiy Vishnevskiy) qo'yilsa, yiring chiqishi to'sib qo'yilib, flegmonaga aylanishi mumkin."
    },
    {
      "c": "jr29",
      "q": "Buyrak-tosh kasalligida (Urolitiaz) tosh siydik nayiga tushib qolganda rivojlanadigan 'Buyrak sanchig'i' (Pochechnaya kolika) ning xos irradiatsiyasi (og'riq uzatilishi) qayerga beradi?",
      "a": "Bel sohasidan siydik nayi bo'ylab pastga — chov sohasiga, qov ustiga, jinsiy a'zolarga va sonning ichki yuzasiga uzatiladi hamda tez-tez achishib siyish va gematuriya bilan kechadi",
      "w": [
        "Chap qo'l va kurakka (bu Stenokardiya)",
        "O'ng yelka va bo'yinga (bu O't sanchig'i)",
        "Faqat boshga"
      ],
      "e": "Buyrak sanchig'ini o'tkir appenditsitdan farqlashda og'riqning chovga uzatilishi, bemorning tinmay bezovtalanib joy topa olmasligi va siydikda eritrotsitlar bo'lishi yordam beradi."
    },
    {
      "c": "jr30",
      "q": "Klinik o'lim (yurak va nafas to'xtagan dastlabki 3–5 daqiqa) holatida Kattalarda Yurak-o'pka reanimatsiyasi (YO'R / СЛР) o'tkazishda ko'krak qafasini bosish va sun'iy nafas berish nisbati hamda chuqurligi qanday?",
      "a": "30 marta ko'krak qafasini bosish : 2 marta sun'iy nafas berish (30:2), tezligi 100–120 marta/daqiqa, chuqurligi 5–6 sm",
      "w": [
        "5 marta bosish : 5 marta nafas",
        "Chuqurligi 1 sm, tezligi 20 marta/daq",
        "100:1"
      ],
      "e": "Biologik o'lim belgilari (ko'z shox pardasi qurishi, 'mushuk ko'zi' — Beloglazov simptomi, murda dog'lari va qotishi) paydo bo'lganda reanimatsiya o'tkazilmaydi."
    }
  ],
  "pediatriya": [
    {
      "c": "pd1",
      "q": "Yangi tug'ilgan chaqaloqning holatini tug'ruqning 1- va 5-daqiqalarida baholash uchun qo'llaniladigan 'Apgar shkalasi' qaysi 5 ta belgini (0, 1, 2 balldan, jami 10 ball) o'z ichiga oladi?",
      "a": "A — Appearance (teri rangi), P — Pulse (yurak urishi), G — Grimace (reflekslar), A — Activity (mushak tonusi), R — Respiration (nafas olish); 8–10 ball — sog'lom chaqaloq",
      "w": [
        "Bo'yi, vazni, bosh aylanasi, tishlari, sochi",
        "Qon bosimi, harorat, siydik",
        "Faqat yig'lashi"
      ],
      "e": "Apgar bo'yicha 4–7 ball — o'rta og'irlikdagi asfiksiya, 0–3 ball — og'ir asfiksiya hisoblanadi."
    },
    {
      "c": "pd2",
      "q": "Yangi tug'ilgan muddatiga yetgan sog'lom chaqaloqning o'rtacha tana vazni, bo'yi hamda 1 yoshga to'lganda vazni va bo'yi qanday o'zgaradi?",
      "a": "Tug'ilganda: vazni 3000–3500 g, bo'yi 50–52 sm; 1 yoshda: vazni ~3 barobar oshib 10–10.5 kg bo'ladi, bo'yi ~25 sm o'sib 75 sm ga yetadi",
      "w": [
        "Tug'ilganda 10 kg, 1 yoshda 30 kg",
        "Tug'ilganda 1 kg, bo'yi 20 sm",
        "O'zgarmaydi"
      ],
      "e": "Chaqaloq vazni 4–5 oyligida 2 barobar, 1 yoshida 3 barobar ortadi."
    },
    {
      "c": "pd3",
      "q": "Bolalarda Katta liqildoq (peshona va tepa suyaklari orasidagi rombsimon liqildoq) me'yorda necha oyligida bitadi (yopiladi)?",
      "a": "12–18 oyligida (1–1.5 yoshda)",
      "w": [
        "Tug'ilgan kuni",
        "7 yoshda",
        "14 yoshda"
      ],
      "e": "Raxit va gidrotsefaliyada katta liqildoq kech yopiladi, mikrotsefaliyada esa juda erta yopiladi."
    },
    {
      "c": "pd4",
      "q": "Emizikli bolalarda D vitamini yetishmasligi oqibatida kalsiy-fosfor almashinuvi va suyak hosil bo'lishi buzilishi bilan kechuvchi kasallik nima va uning dastlabki belgilari qanday?",
      "a": "Raxit — dastlabki (1–3 oylikda) asab belgilari: ko'p terlash (ayniqsa emayotganda va uxlaganda), ensa sochlarining to'kilishi ('taqir ensa'), cho'chish, siydikdan ammiak hidi kelishi; avj olgan davrda: kraniotabes, 'raxitik tasbehlar', X- yoki O-simon oyoqlar",
      "w": [
        "Skorbut (Singa)",
        "Beri-beri",
        "Pellagra"
      ],
      "e": "Raxit profilaktikasi uchun sog'lom bolalarga 1 oyligidan boshlab kuniga 500–1000 XB Akvadetrim (Vitamin D3) beriladi."
    },
    {
      "c": "pd5",
      "q": "Bolada sut tishlari necha oyligidan chiqa boshlaydi, 1 yoshda nechta bo'ladi va N.P. Gundobin bo'yicha sut tishlari sonini hisoblash formulasi qanday?",
      "a": "6–8 oyligida pastki markaziy kurak tishlardan boshlanadi; 1 yoshda 8 ta tish bo'ladi; Formula: N = n - 4 (bu yerda n — bolaning oylik yoshi); jami sut tishlari 20 ta",
      "w": [
        "1 oyligida 32 ta tish",
        "3 yoshda chiqa boshlaydi",
        "Formula: N = n + 10"
      ],
      "e": "2 yoshga borib barcha 20 ta sut tishi chiqib bo'ladi; doimiy tishlar 6–7 yoshdan chiqa boshlaydi."
    },
    {
      "c": "pd6",
      "q": "Yangi tug'ilgan chaqaloqlarda hayotining 2–3-kunida paydo bo'lib, 10–14-kunga borib o'z-o'zidan yo'qoladigan 'Fiziologik sariqlik' va 1-sutkada paydo bo'ladigan 'Chaqaloqlar gemolitik kasalligi' (Patologik sariqlik) qanday farqlanadi?",
      "a": "Fiziologik sariqlik — 3-kuni chiqadi, chaqaloq ahvoli yaxshi, jigar/taloq kattalashmagan; Gemolitik kasallik (ona Rh-manfiy, bola Rh-musbat bo'lganda) — tug'ilgan zahoti yoki 1-sutkada chiqadi, bilirubin keskin oshib bosh miya yadrolarini zararlaydi ('Yadroviy sariqlik')",
      "w": [
        "Ikkalasi ham 1 yoshda chiqadi",
        "Fiziologik sariqlikda qon almashtiriladi",
        "Farqi yo'q"
      ],
      "e": "Giperbilirubinemiyani davolashda Fototerapiya (ko'k nurli lampa — bilirubinni suvda eruvchan lumirubinga aylantiradi) qo'llaniladi."
    },
    {
      "c": "pd7",
      "q": "Qizamiq (Kor / Measles) kasalligida teriga toshma toshishidan 1–2 kun oldin lunj shilliq qavatida (og'iz ichida) paydo bo'ladigan patognomonik (100% xos) belgi nima va toshma qanday tartibda toshadi?",
      "a": "Filatov-Koplik dog'lari (og'iz shilliq qavatida manniy yormasiga o'xshash oqimtir nuqtalar); Makulopapulyoz toshma Yuqoridan Pastga qarab 3 kunda bosqichma-bosqich toshadi: 1-kun yuz va quloq orqasi -> 2-kun tana -> 3-kun qo'l-oyoqlar",
      "w": [
        "Toshma oyoqdan boshlanadi",
        "Suvli pufakchalar (bu Suvchechak)",
        "Og'izda o'zgarish bo'lmaydi"
      ],
      "e": "Qizilcha (Krasnuxa) da esa toshma bir kunda butun tanaga toshadi va ensa hamda bo'yin orqa limfa tugunlari kattalashadi."
    },
    {
      "c": "pd8",
      "q": "Suvchechak (Vetryanaya ospa — Varicella-Zoster virusi) toshmasining boshqa bolalar infeksiyalaridan eng asosiy farqi nimada?",
      "a": "Toshma boshning sochli qismida ham bo'ladi va to'lqinsimon toshgani uchun terining bir joyida bir vaqtning o'zida dog' -> papula -> tiniq pufakcha (vezikula) -> qaloq (soxta polimorfizm) ko'rinadi hamda qichishadi",
      "w": [
        "Boshning sochli qismiga toshmaydi",
        "Faqat kaft va tovonda bo'ladi",
        "Pufakcha bo'lmaydi"
      ],
      "e": "Suvchechak pufakchalarini yashil dori (brilliant yashili) yoki kalamin bilan ishlov beriladi; bolalarga suvchechakda Aspirin berish Rey sindromi xavfi tufayli man etiladi!"
    },
    {
      "c": "pd9",
      "q": "Skarlatina (Qizilcha emas — A guruh beta-gemolitik streptokokk chaqiruvchi kasallik) ning klassik klinik belgilari qaysilar?",
      "a": "1) 'Alangali halqum' (o'tkir angina) va 'Malinasimon til', 2) Qizargan teri fonida mayda nuqtali toshma, 3) Filatov uchburchagi (qizargan yuzda burun-lab uchburchagining oqish qolishi), 4) 2-haftada kaft va tovon terisining plastinkasimon ko'chishi",
      "w": [
        "Yo'tal va tumov",
        "Suvli pufakchalar",
        "Quloq oldi shishi"
      ],
      "e": "Skarlatina streptokokkli infeksiya bo'lgani uchun Penitsillin / Amoksitsillin kursini 10 kun to'liq olish shart (revmatizm va nefrit oldini olish uchun)."
    },
    {
      "c": "pd10",
      "q": "Ko'kyo'tal (Koklyush — Bordetella pertussis) kasalligining spazmatik davridagi xurujli yo'tal qanday kechadi?",
      "a": "Ketma-ket 5–10 ta yo'tal turtkilaridan so'ng tovush yorig'i torayishi tufayli hushtaksimon shovqinli nafas olish ('Repryuz' — xo'roz qichqirig'iga o'xshash), yuz ko'karishi va xuruj oxirida yopishqoq shishasimon balg'am tushishi yoki qusish",
      "w": [
        "Yengil bir martalik yo'tal",
        "Faqat aksirish",
        "Isitma 41°C"
      ],
      "e": "Ko'kyo'tal 1 yoshgacha bo'lgan chaqaloqlarda nafas to'xtab qolishi (Apnoe) bilan juda xavfli kechadi."
    },
    {
      "c": "pd11",
      "q": "Epidemik parotit ('Tepki' / Svinka) virusi bolalarda birinchi navbatda qaysi bezlarni zararlaydi va o'g'il bolalarda qanday xavfli asorat qoldirishi mumkin?",
      "a": "Quloq oldi so'lak bezlarini (quloq oldi va osti shishib og'riydi, xamirdek konsistensiyali bo'ladi); o'smir o'g'il bolalarda Orxit (moyak yallig'lanishi va bepushtlik), pankreatit hamda seroz meningit asoratini berishi mumkin",
      "w": [
        "Faqat qalqonsimon bezni",
        "Jigarni",
        "Buyrakni"
      ],
      "e": "O'zbekiston Milliy emlash kalendariga ko'ra bolalar 1 yoshda va 6 yoshda KPK (Qizamiq - Parotit - Qizilcha) vaksinasi bilan emlanadi."
    },
    {
      "c": "pd12",
      "q": "O'zbekiston Respublikasi Milliy profilaktik emlash kalendariga ko'ra tug'ruqxonada chaqaloqqa dastlabki 24 soatda va 3–5-kunida qaysi 2 ta vaksina qilinadi?",
      "a": "Dastlabki 24 soatda: VGV-1 (Virusli Gepatit B ga qarshi); 2–5-kunida: BSJ-1 (Sil kasalligiga qarshi — chap yelka tashqi yuzasiga teri ichiga)",
      "w": [
        "Qizamiq va Gripp",
        "Poliomiyelit va OPV",
        "Emlanmaydi"
      ],
      "e": "2, 3, 4 oyligida esa Pentavalent vaksina (AKDS + Gepatit B + XIB), Poliomiyelit (OPV/IPV), Pnevmokokk va Rotavirusga qarshi emlanadi."
    },
    {
      "c": "pd13",
      "q": "1–3 yoshli bolalarda tunda to'satdan 'it hurishiga o'xshash' dag'al yo'tal, ovoz bo'g'ilishi va shovqinli nafas olish (inspirator stridor) bilan boshlanuvchi O'tkir stenozlovchi laringotraxeit ('Soxta krup') da shoshilinch yordam nima?",
      "a": "Bolani tinchlantirish, toza nam havo, Nebulayzer orqali Pulmikort (Budesonid suspenziyasi) ingalyatsiyasi yoki Deksametazon inyeksiyasi",
      "w": [
        "Kuchli antibiotik tabletkasi",
        "Quruq issiq xona",
        "Oshqozonni yuvish"
      ],
      "e": "Chin krup — Difteriyada bo'lib, ovoz butunlay yo'qoladi (afoniya) va parda bilan berkiladi; Soxta krup — paragripp/O'RVI da ovoz boylamlari osti shishi tufayli yuzaga keladi."
    },
    {
      "c": "pd14",
      "q": "JSST (VOZ) tavsiyasiga ko'ra chaqaloqni necha oyligigacha FAQAT ko'krak suti bilan (qo'shimcha suvsiz va ovqatsiz — eksklyuziv) emizish va necha oydan qo'shimcha ovqat (prikorm) boshlash kerak?",
      "a": "6 oyligigacha faqat ona suti bilan emizish; 6 oyligidan boshlab ko'krak sutini davom ettirgan holda (2 yoshgacha) sabzavot pyuresi va bo'tqalar ko'rinishida qo'shimcha ovqat kiritish",
      "w": [
        "1 oyligidan go'sht berish",
        "3 oyligidan sigir suti berish",
        "1 yoshgacha faqat suv berish"
      ],
      "e": "Ona sutining dastlabki kunlardagi 'Og'iz suti' (Molozivo) sekretor IgA antitelolariga, oqsil va vitaminlarga nihoyatda boy tabiiy vaksinadir."
    },
    {
      "c": "pd15",
      "q": "Tug'ma yurak nuqsonlari (TYuN) ichida eng ko'p uchraydigan 'Oq tipdagi' (sianozsiz, chapdan o'ngga qon otiluvchi) nuqsonlar va 'Ko'k tipdagi' (erta sianoz beruvchi) nuqson qaysi?",
      "a": "Oq tipdagi: Qorinchalararo to'siq nuqsoni (QATN / ДМЖП), Bo'lmachalararo to'siq nuqsoni (BATN), Ochiq arterial (ulug'vor) yo'l (OAY); Ko'k tipdagi: Fallo tetradasi",
      "w": [
        "Fallo tetradasi oq tipga kiradi",
        "TYuN da shovqin bo'lmaydi",
        "Faqat kattalarda uchraydi"
      ],
      "e": "Fallo tetradasi 4 ta nuqsondan iborat: 1) O'pka arteriyasi stenozi, 2) Qorinchalararo to'siq nuqsoni, 3) Aortaning o'ngga siljishi (dekstrapozitsiyasi), 4) O'ng qorincha gipertrofiyasi."
    },
    {
      "c": "pd16",
      "q": "Bolalarda tana harorati > 38.5°C ga ko'tarilganda (isitmalaganda) ruxsat etilgan va eng xavfsiz 2 ta antipiretik (isitma tushiruvchi) dori vositasi va ularning bir martalik dozasi qanday?",
      "a": "1) Paratsetamol (10–15 mg/kg bir martalik dozada), 2) Ibuprofen (5–10 mg/kg bir martalik dozada); Bolalarga Aspirin (Rey sindromi) va Analgin (agranulotsitoz) berish tavsiya etilmaydi!",
      "w": [
        "Aspirin 500 mg va Analgin",
        "Nimesulid va Diklofenak",
        "Antibiotik"
      ],
      "e": "'Oq isitma'da (bola qo'l-oyoqlari muzdek, terisi oqargan — tomir spazmi) isitma tushiruvchi bilan birga spazmolitik (No-shpa / Papaverin) va qo'l-oyoqlarni isitish qo'llaniladi."
    },
    {
      "c": "pd17",
      "q": "Erta yoshdagi bolalarda (6 oylikdan 5 yoshgacha) yuqori tana harorati fonida rivojlanadigan 'Febril talvasalar' (sudorogi) da shoshilinch yordam algoritmi qanday?",
      "a": "Bolani tekis yuzaga yonboshlatib yotqizish (qusindi va til ketib qolmasligi uchun), og'ziga qoshiq yoki barmoq TIQMASLIK, kiyimini bo'shatish, toza havo, haroratni tushirish va talvasa 5 daqiqadan oshsa Diazepam (Sibazon) 0.5% — 0.1 ml/kg yuborish",
      "w": [
        "Og'zini temir qoshiq bilan ochish",
        "Sovuq suvga solish",
        "Oyoqqa turg'izish"
      ],
      "e": "Tipik febril talvasalar < 15 daqiqa davom etadi va 5–6 yoshdan keyin asab tizimi yetilishi bilan o'tib ketadi."
    },
    {
      "c": "pd18",
      "q": "Bolalarda o'tkir ichak infeksiyasi (masalan, Rotavirusli gastroenterit) da suvsizlanish (Degidratatsiya) darajasini aniqlovchi asosiy klinik belgilar nima?",
      "a": "Chanqash yoki suv icha olmaslik, ko'z yoshsiz yig'lash, ko'z olmalari va katta liqildoqning ichkariga botishi, teri burmasining sekin (2 soniyadan uzoq) tekislanishi va peshob kamayishi (oliguriya)",
      "w": [
        "Qon bosimi oshishi",
        "Teri qizarishi",
        "Ko'p terlash"
      ],
      "e": "JSST 'A' va 'B' rejasiga ko'ra bolaga har ich ketgandan keyin 50–100 ml dan Regidron (past osmolyarli ORS) qoshiqlab ichiriladi va Rux (Sink) preparati 10–14 kun beriladi."
    },
    {
      "c": "pd19",
      "q": "Chaqaloqlarda va 1 yoshgacha bo'lgan bolalarda nafas olish soni (ChDD) va yurak urishi soni (ChSS) kattalarnikidan qanday farq qiladi?",
      "a": "Yangi tug'ilgan chaqaloqda: Nafas soni 40–60 marta/daq, Yurak urishi 120–160 zarba/daq; 1 yoshli bolada: Nafas soni 30–35 marta/daq, Yurak urishi 110–120 zarba/daq (bola ulg'aygan sari nafas va puls sekinlashib, qon bosimi oshib boradi)",
      "w": [
        "Chaqaloqda puls 60 ta, nafas 16 ta",
        "Chaqaloqda qon bosimi 140/90",
        "Kattalar bilan bir xil"
      ],
      "e": "JSST mezoniga ko'ra pnevmoniyada taxipnoe: 2 oylikkacha ≥ 60 ta/daq, 2–12 oylikda ≥ 50 ta/daq, 1–5 yoshda ≥ 40 ta/daq."
    },
    {
      "c": "pd20",
      "q": "Gelmintozlar (Gijja kasalliklari) ichida bolalarda eng ko'p uchraydigan va kechasi orqa chiqaruv teshigi atrofida kuchli qichishish chaqiruvchi gijja qaysi hamda u qanday aniqlanadi?",
      "a": "Ostritsa (Enterobioz — Enterobius vermicularis); oddiy axlat tahlilida emas, balki ertalab yuvinmasdan oldin perianal burmalardan yopishqoq lenta (skotch) yoki surtma olish orqali aniqlanadi",
      "w": [
        "Exinokokk",
        "Qoramol tasmasimon chuvalchangi",
        "Jigar qurti"
      ],
      "e": "Enterobioz va Askaridozni davolashda Albendazol yoki Pirantel / Mebendazol buyuriladi hamda barcha oila a'zolari va ichki kiyimlar dazmollanib davolanadi."
    },
    {
      "c": "pd21",
      "q": "Yangi tug'ilgan chaqaloqda tug'ma son bo'g'imi chiqishi (Displaziya tazobedrennogo sustava) ni erta aniqlash uchun qaysi klinik belgilar tekshiriladi?",
      "a": "Marks-Ortolani ('ertma' / shchelchok) simptomi, sonlarni ikki tomonga kerishning cheklanishi, son va dumba teri burmalarining asimmetriyasi hamda oyoq kaltalashishi (UZI va rentgen bilan tasdiqlanadi)",
      "w": [
        "Qo'l barmoqlari uzunligi",
        "Bosh aylanasi",
        "Tish chiqishi"
      ],
      "e": "Erta aniqlanganda keng yo'rgaklash, Frejk yostiqchasi yoki Pavlik uzengilari bilan operatsiyasiz 100% tuzatiladi."
    },
    {
      "c": "pd22",
      "q": "Chaqaloqlarda kindik qoldig'i nechanchi kuni tushadi va kindik yarasi yiringlab, kindik atrofi terisi qizarib shishishi qanday xavfli kasallik hisoblanadi?",
      "a": "Kindik qoldig'i 4–10-kuni quriydi va tushadi; kindik va uning atrofidagi to'qimalarning bakterial yallig'lanishi — Omfalit (kindik sepsisi xavfi bor!)",
      "w": [
        "1 oyda tushadi",
        "Raxit",
        "Diatez"
      ],
      "e": "Hozirgi zamonaviy neonatologiyada kindik qoldig'iga bog'lam boylanmaydi, 'quruq va toza parvarish' usulida ochiq qoldiriladi."
    },
    {
      "c": "pd23",
      "q": "1 yoshgacha bo'lgan bolalarda surunkali ovqatlanish buzilishi oqibatida tana vaznining yosh me'yoridan 10%, 20% yoki >30% ga kamayib ketishi (ozib ketish) nima deb ataladi?",
      "a": "Gipotrofiya (Oqsil-energetik yetishmovchilik: I daraja — vazn tanqisligi 11–20%, II daraja — 21–30%, III daraja / Marazm — >30% tanqislik)",
      "w": [
        "Paratrofiya (ortiqcha vazn)",
        "Gigantizm",
        "Akromegaliya"
      ],
      "e": "Vaznning me'yordan ortiqcha bo'lishi Paratrofiya, ham bo'y, ham vaznning past bo'lishi Gipostatura deyiladi."
    },
    {
      "c": "pd24",
      "q": "Meningokokk infeksiyasi (Neisseria meningitidis) va Meningitda bolada qanday meningial simptomlar hamda terida qanday xavfli toshma paydo bo'ladi?",
      "a": "Kuchli bosh og'rig'i, 'favvora' bo'lib qusish, yuqori isitma, ensa mushaklari rigidligi (iyak ko'krakka tegmasligi), Kerning va Brudzinskiy simptomlari; Meningokokksemiyada esa dumba va oyoqlarda 'yulduzchasimon' gemorragik-nekrotik toshma (shisha bosganda yo'qolmaydi!)",
      "w": [
        "Qichishuvchi suvli pufakcha",
        "Burun bitishi",
        "Bo'yin yumshoq"
      ],
      "e": "Stakan (shisha) sinamasi: teriga shisha stakan bosilganda oddiy allergik/qizamiq toshmasi oqarib yo'qoladi, meningokokkli gemorragik toshma esa YO'QOLMAYDI — bu daqiqalar ichida reanimatsiya talab qiluvchi holat!"
    },
    {
      "c": "pd25",
      "q": "2 yoshgacha bo'lgan bolalarda Respirator-sinsitial virus (RSV) chaqiradigan va mayda bronxiolalarning tiqilib qolishi, hushtaksimon nafas hamda hansirash bilan kechuvchi kasallik qaysi?",
      "a": "O'tkir bronxiolit",
      "w": [
        "Surunkali bronxit",
        "Sil",
        "Gastrit"
      ],
      "e": "O'tkir bronxiolit 3–6 oylik bolalarda ko'p uchrab, namlangan kislorod va gipertonik (3% NaCl) ingalyatsiya bilan davolanadi."
    },
    {
      "c": "pd26",
      "q": "Tug'ma gipotireoz (qalqonsimon bez gormonlari tug'ma tanqisligi) chaqaloqlarda erta aniqlanmasa, jismoniy va aqliy rivojlanishdan og'ir orqada qolish ('Kretinizm') ga olib keladi. Uni erta topish uchun tug'ruqxonada nima qilinadi?",
      "a": "Neonatal skrining: chaqaloq hayotining 3–5-kunida tovonidan filtr qog'ozga qon olinib, TTG (Tireotrop gormon) miqdori tekshiriladi",
      "w": [
        "1 yoshda rentgen qilinadi",
        "Siydik tekshiriladi",
        "Tekshirilmaydi"
      ],
      "e": "Tug'ruqxonada chaqaloqlar Tovon qoni orqali Tug'ma gipotireoz va Fenilketonuriyaga ommaviy neonatal skriningdan o'tkaziladi."
    },
    {
      "c": "pd27",
      "q": "Hayotining dastlabki 2–4 haftasida (asosan o'g'il chaqaloqlarda) oshqozon chiqish qismi mushaklarining tug'ma qalinlashishi tufayli har emizgandan keyin o'tsiz sutni 'favvora bo'lib qusish' va ozib ketish qaysi jarrohlik kasalligi?",
      "a": "Tug'ma pilorostenoz (palpatsiyada 'zaytun mevasi' simptomi va qorinda 'qum soati' peristaltikasi; davosi — Fredet-Ramstedt piloromiotomiya operatsiyasi)",
      "w": [
        "Pilorospazm (bunda ozgina qusib vazn qo'shadi)",
        "Appenditsit",
        "Stomatit"
      ],
      "e": "Pilorostenozda qusindi tarkibida o't (safro) bo'lmaydi, chunki to'siq 12 barmoqli ichakdan yuqorida joylashgan."
    },
    {
      "c": "pd28",
      "q": "5–9 oylik to'la (sog'lom) emizikli bolalarda qo'shimcha ovqat noto'g'ri kiritilganda ingichka ichakning yo'g'on ichak ichiga kirib qolishi (teleskop kabi) bilan kechuvchi o'tkir ichak tutilishi turi nima?",
      "a": "Ichak invaginatsiyasi (bola to'satdan oyoqlarini qorniga tortib chinqirib yig'laydi, qusadi va orqa chiqaruv teshigidan 'malina jelesi' ko'rinishida qonli shilliq keladi)",
      "w": [
        "Gemorroy",
        "Gastrit",
        "Kolit"
      ],
      "e": "Dastlabki 12 soat ichida aniqlansa, yo'g'on ichakka havo yuborib (pnevmoirrigoskopiya) operatsiyasiz to'g'rilash (dezinvaginatsiya) mumkin."
    },
    {
      "c": "pd29",
      "q": "Bolalarda Gemorragik vaskulit (Shenleyn-Genox kasalligi — mayda kapillyarlarning immun-kompleksli aseptik yallig'lanishi) ning 4 ta asosiy klinik sindromi qaysilar?",
      "a": "1) Teri sindromi (oyoqlar va dumbada simmetrik palpatsiyalanuvchi purpura toshmasi), 2) Bo'g'im sindromi (tizza va to'piq og'rig'i), 3) Abdominal sindrom (qorin sanchig'i), 4) Buyrak sindromi (gematuriyali nefrit)",
      "w": [
        "Yo'tal va tumov",
        "Sariqlik va jigar kattalashishi",
        "Bosh aylanishi"
      ],
      "e": "Trombotsitopenik purpuradan (Verlgof kasalligidan) farqi: Gemorragik vaskulitda qonda trombotsitlar soni NORMADA bo'ladi va toshma qat'iy simmetrik joylashadi."
    },
    {
      "c": "pd30",
      "q": "Yangi tug'ilgan chaqaloqlarda tug'ruqdan keyingi 3–5-kunda tana vaznining 5–8% gacha kamayishi va 10–14-kunga kelib qayta tiklanishi nima deb ataladi?",
      "a": "Tana vaznining fiziologik kamayishi (suv bug'lanishi va mekoniy — dastlabki axlat chiqishi hisobiga normal holat)",
      "w": [
        "Og'ir distrofiya",
        "Sepsis",
        "Tug'ma nuqson"
      ],
      "e": "Agar vazn yo'qotish 10% dan oshib ketsa, bu patologik suvsizlanish (eksikoz) va tranzitor isitma belgisi hisoblanadi."
    }
  ],
  "biologiya": [
    {
      "c": "bio1",
      "q": "Tirik organizmlarning eng kichik tuzilish va funksional birligi nima deb ataladi?",
      "a": "Hujayra (Cell)",
      "w": [
        "To'qima",
        "Organ",
        "Molekula"
      ],
      "e": "Barcha tirik organizmlar (viruslardan tashqari) hujayraviy tuzilishga ega."
    },
    {
      "c": "bio2",
      "q": "O'simlik hujayrasida fotosintez jarayoni kechadigan maxsus organoid qaysi?",
      "a": "Xloroplast",
      "w": [
        "Mitoxondriya",
        "Ribosoma",
        "Lizosoma"
      ],
      "e": "Xloroplastlar ichidagi xlorofill pigmenti quyosh nuri yordamida organik modda sintezlaydi."
    },
    {
      "c": "bio3",
      "q": "Hujayraning energetik stansiyasi hisoblangan va ATF sintezlanadigan organoid qaysi?",
      "a": "Mitoxondriya",
      "w": [
        "Endoplazmatik to'r",
        "Goldji majmuasi",
        "Vakuola"
      ],
      "e": "Mitoxondriyalarda hujayraviy nafas olish va oksidlanish orqali ATF ishlab chiqariladi."
    },
    {
      "c": "bio4",
      "q": "Genetik axborotni saqlovchi va avloddan-avlodga uzatuvchi ikki zanjirli polimer nima?",
      "a": "DNK (Dezoksiribonuklein kislota)",
      "w": [
        "ATF",
        "Gemoglobin",
        "Xolesterin"
      ],
      "e": "DNK qo'sh spirali nukleotidlar (A, T, G, S) ketma-ketligi orqali irsiy kodni saqlaydi."
    },
    {
      "c": "bio5",
      "q": "DNK zanjiridagi komplementarlik qoidasiga ko'ra Adenin (A) qaysi nukleotid bilan vodorod bog'i hosil qiladi?",
      "a": "Timin (T)",
      "w": [
        "Sitozin (S)",
        "Guanin (G)",
        "Uratsil (U)"
      ],
      "e": "DNKda A doim T bilan 2 ta, G esa S bilan 3 ta vodorod bog'i hosil qiladi (Chargaff qoidasi)."
    },
    {
      "c": "bio6",
      "q": "Oqsil biosintezini amalga oshiruvchi universal hujayra organoidi qaysi?",
      "a": "Ribosoma",
      "w": [
        "Sentrosoma",
        "Lizosoma",
        "Peroksisoma"
      ],
      "e": "Ribosomalar axborot-RNK ko'rsatmasi bo'yicha aminokislotalardan polipeptid zanjir tuzadi."
    },
    {
      "c": "bio7",
      "q": "Somatik (tana) hujayralarining xromosoma soni o'zgarmagan holda ikkiga bo'linish jarayoni nima deyiladi?",
      "a": "Mitoz",
      "w": [
        "Meyoz",
        "Amitoz",
        "Shizogoniya"
      ],
      "e": "Mitoz natijasida ona hujayradan unga genetik jihatdan aynan o'xshash 2 ta diploid qiz hujayra hosil bo'ladi."
    },
    {
      "c": "bio8",
      "q": "Jinsiy hujayralar (gametalar) hosil bo'lishida xromosoma sonini 2 baravar kamaytiruvchi (reduksion) bo'linish nima?",
      "a": "Meyoz",
      "w": [
        "Mitoz",
        "Endomitoz",
        "Karyokinez"
      ],
      "e": "Meyoz natijasida 4 ta gaploid (n) xromosomali gameta vujudga keladi."
    },
    {
      "c": "bio9",
      "q": "Gregor Mendel o'tkazgan tajribalarda no'xat o'simligining birinchi avlod duragaylarida namoyon bo'lgan belgi nima deb ataladi?",
      "a": "Dominant belgi",
      "w": [
        "Retsessiv belgi",
        "Poligen belgi",
        "Kodominate"
      ],
      "e": "Bir xillik qonuniga ko'ra, F1 avlodda faqat ustun (dominant) belgi yuzaga chiqadi."
    },
    {
      "c": "bio10",
      "q": "Odam tana hujayralarida jami nechta xromosoma mavjud?",
      "a": "46 ta (23 juft)",
      "w": [
        "48 ta (24 juft)",
        "44 ta (22 juft)",
        "23 ta toq"
      ],
      "e": "Odamda 22 juft autosoma va 1 juft jinsiy xromosomalar (jami 46 ta) mavjud."
    },
    {
      "c": "bio11",
      "q": "Qonning qizil tanachalari (eritrotsitlar) tarkibidagi kislorod tashuvchi temir tutgan murakkab oqsil qaysi?",
      "a": "Gemoglobin",
      "w": [
        "Mioglobin",
        "Fibrinogen",
        "Insulin"
      ],
      "e": "Gemoglobin o'pkada kislorod bilan birikib oksigemoglobin hosil qiladi va to'qimalarga yetkazadi."
    },
    {
      "c": "bio12",
      "q": "Evolutsiya nazariyasining asoschisi va 'Turlarning kelib chiqishi' asari muallifi kim?",
      "a": "Charlz Darvin",
      "w": [
        "Jan Batist Lamark",
        "Karl Linney",
        "Gregor Mendel"
      ],
      "e": "Charlz Darvin tabiiy tanlanish asosidagi tabiiy-tarixiy evolutsiya ta'limotini yaratgan."
    },
    {
      "c": "bio13",
      "q": "Zamburug'lar hujayra qobig'ida o'simliklardagi selluloza o'rnida qaysi polisaxarid uchraydi?",
      "a": "Xitin",
      "w": [
        "Glikogen",
        "Kraxmal",
        "Pektin"
      ],
      "e": "Xitin zamburug'lar qobig'ida hamda bo'g'imoyoqlilarning tashqi skeletida mustahkamlik beradi."
    },
    {
      "c": "bio14",
      "q": "Odam yuragining necha kamerali ekanligi to'g'ri ko'rsatilgan qatorni toping?",
      "a": "4 kamerali (2 bo'lmacha, 2 qorincha)",
      "w": [
        "3 kamerali (2 bo'lmacha, 1 qorincha)",
        "2 kamerali (1 bo'lmacha, 1 qorincha)",
        "5 kamerali"
      ],
      "e": "Sutemizuvchilar va qushlarda yurak to'liq to'rt kamerali bo'lib, arterial va venoz qon aralashmaydi."
    },
    {
      "c": "bio15",
      "q": "Nerv to'qimasining asosiy qo'zg'aluvchan funksional hujayrasi nima?",
      "a": "Neyron",
      "w": [
        "Neyrogliya",
        "Akson",
        "Sinaps"
      ],
      "e": "Neyron tana, qisqa dendritlar va uzun aksondan iborat bo'lib, impulslarni o'tkazadi."
    },
    {
      "c": "bio16",
      "q": "Fotosintezning yorug'lik bosqichida suv molekulasining yorug'lik ta'sirida parchalanishi hodisasi nima deyiladi?",
      "a": "Suv fotolizi",
      "w": [
        "Glikoliz",
        "Gidroliz",
        "Krebs sikli"
      ],
      "e": "Suv fotolizi natijasida kislorod erkin gaz sifatida atmosferaga ajraladi."
    },
    {
      "c": "bio17",
      "q": "Odamda ovqat hazm qilish tizimidagi eng yirik bez qaysi?",
      "a": "Jigar",
      "w": [
        "Oshqozon osti bezi",
        "Qalqonsimon bez",
        "So'lak bezi"
      ],
      "e": "Jigar o't suyuqligi (safro) ishlab chiqaradi, detoksikatsiya va moddalar almashinuvida bosh o'rinda turadi."
    },
    {
      "c": "bio18",
      "q": "Bakteriofag nima?",
      "a": "Bakteriya hujayrasini zararlaydigan virus",
      "w": [
        "Foydali ichak bakteriyasi",
        "Zaharli mog'or zamburug'i",
        "Bir hujayrali xivchinli"
      ],
      "e": "Bakteriofaglar bakteriya ichiga o'z DNK/RNKsini kiritib, uni parchalab yuboradi."
    },
    {
      "c": "bio19",
      "q": "Qon plazmasidagi ivish jarayonida ishtirok etuvchi eruvchan oqsil qaysi?",
      "a": "Fibrinogen",
      "w": [
        "Albumin",
        "Globulin",
        "Pepsin"
      ],
      "e": "Qon tomir jarohatlanganda fibrinogen erimaydigan fibrin tolalarga aylanib, tromb hosil qiladi."
    },
    {
      "c": "bio20",
      "q": "Bir tur doirasidagi organizmlarning yashash muhitiga moslashish (adaptatsiya) hodisasi nima?",
      "a": "Idioadaptatsiya",
      "w": [
        "Aromorfoz",
        "Degeneratsiya",
        "Divergensiya"
      ],
      "e": "Idioadaptatsiya umumiy tashkiliy darajani ko'tarmasdan muayyan muhitga moslashishdir."
    },
    {
      "c": "bio21",
      "q": "Hujayra ichidagi eskirgan tuzilmalar va begona zarrachalarni parchalovchi gidrolitik fermentlar saqlovchi organoid?",
      "a": "Lizosoma",
      "w": [
        "Ribosoma",
        "Peroksisoma",
        "Sentrosoma"
      ],
      "e": "Lizosomalar autofagiya va fagositozda hazm qilish vazifasini bajaradi."
    },
    {
      "c": "bio22",
      "q": "O'simlik ildizida suv va unda erigan mineral tuzlarning so'rilishi qaysi zonada amalga oshadi?",
      "a": "So'ruvchi zona (ildiz tukchalari bor zona)",
      "w": [
        "Bo'linish zonasi",
        "O'sish zonasi",
        "Ildiz qinchasi"
      ],
      "e": "Ildiz tukchalari yuzani yuzlab marta oshirib osmotik yo'l bilan suvni shimib oladi."
    },
    {
      "c": "bio23",
      "q": "Qondagi qand (glyukoza) miqdorini pasaytiruvchi gormon qaysi bezdan ajraladi?",
      "a": "Oshqozon osti bezining Langergans orolchalari (Insulin)",
      "w": [
        "Qalqonsimon bez",
        "Buyrak usti bezi",
        "Gipofiz"
      ],
      "e": "Insulin glyukozaning hujayralarga kirishi va glikogen holida jigarda to'planishini ta'minlaydi."
    },
    {
      "c": "bio24",
      "q": "Tirik tabiatdagi oziq zanjirining birinchi bo'g'inini tashkil etuvchi organizmlar guruhi qaysi?",
      "a": "Produtsentlar (avtotroflar)",
      "w": [
        "Konsumentlar",
        "Redutsentlar",
        "Parazitlar"
      ],
      "e": "Produtsentlar (yashil o'simliklar) anorganik moddalardan birlamchi organik modda yaratadi."
    },
    {
      "c": "bio25",
      "q": "Odam tanasida kalsiy va fosfor almashinuvini hamda suyaklarning to'g'ri o'sishini ta'minlovchi vitamin qaysi?",
      "a": "D vitamini (Kalsiferol)",
      "w": [
        "C vitamini",
        "A vitamini",
        "B12 vitamini"
      ],
      "e": "D vitamini yetishmovchiligida bolalarda raxit kasalligi kelib chiqadi."
    },
    {
      "c": "bio26",
      "q": "Qaysi qon guruhi universal donor hisoblanadi (AB0 tizimida)?",
      "a": "I guruh: 0 (Rh-)",
      "w": [
        "IV guruh (AB)",
        "II guruh (A)",
        "III guruh (B)"
      ],
      "e": "I guruh eritrotsitlarida A va B agglyutinogenlar bo'lmagani sababli aglyutinatsiya bermaydi."
    },
    {
      "c": "bio27",
      "q": "DNK zanjiridan axborotning i-RNKga ko'chirilishi jarayoni nima deb ataladi?",
      "a": "Transkripsiya",
      "w": [
        "Translyatsiya",
        "Replikatsiya",
        "Modifikatsiya"
      ],
      "e": "Yadroda DNK qolipi asosida i-RNK sintezlanishi transkripsiya deyiladi."
    },
    {
      "c": "bio28",
      "q": "i-RNK dagi axborot asosida oqsil zanjirining ribosomada yig'ilishi nima deyiladi?",
      "a": "Translyatsiya",
      "w": [
        "Transkripsiya",
        "Replikatsiya",
        "Inversiya"
      ],
      "e": "Translyatsiya polipeptid zanjirining t-RNK va ribosomalar ishtirokida sintezidir."
    },
    {
      "c": "bio29",
      "q": "Gomeostaz tushunchasi nimani anglatadi?",
      "a": "Ichki muhit doimiyligining nisbiy saqlanishi",
      "w": [
        "Tana haroratining keskin ko'tarilishi",
        "Genlarning tasodifiy o'zgarishi",
        "Hujayraning halok bo'lishi"
      ],
      "e": "Gomeostaz barcha tirik organizmlarning barqaror faoliyat ko'rsatish shartidir."
    },
    {
      "c": "bio30",
      "q": "Barg og'izchalari (stomata) o'simlik hayotida qanday asosiy vazifalarni bajaradi?",
      "a": "Gazlar almashinuvi va transpiratsiya (suv bug'latish)",
      "w": [
        "Faqat mineral tuzlarni saqlash",
        "Ildizni mustahkamlash",
        "Urug' tarqatish"
      ],
      "e": "Og'izchalar CO2 yutilishi, O2 ajralishi va tana haroratini boshqaruvchi suv bug'lanishini nazorat qiladi."
    },
    {
      "c": "bio31",
      "q": "Xromosomaning muayyan qismidagi nukleotidlar ketma-ketligining o'zgarishi natijasida yuzaga keladigan irsiy o'zgaruvchanlik nima?",
      "a": "Mutatsiya",
      "w": [
        "Modifikatsiya",
        "Kombinativ",
        "Fenotipik"
      ],
      "e": "Mutatsiyalar irsiy materialning to'satdan va barqaror o'zgarishidir."
    },
    {
      "c": "bio32",
      "q": "Odamda eng uzun quvursimon suyak qaysi?",
      "a": "Son suyagi (Femur)",
      "w": [
        "Boldir suyagi",
        "Yelka suyagi",
        "Qovurg'a"
      ],
      "e": "Son suyagi tanadagi eng yirik va mustahkam suyak hisoblanadi."
    }
  ],
  "kimyo": [
    {
      "c": "ch1",
      "q": "Davriy sistemada elementlarning kimyoviy xossalari nimaga qarab davriy ravishda takrorlanadi?",
      "a": "Yadro zaryadi (atom raqami) ortib borishiga qarab",
      "w": [
        "Atom massasi kamayishiga qarab",
        "Neytronlar soniga qarab",
        "Valentligiga qarab"
      ],
      "e": "Mendeleyev davriy qonunining zamonaviy ta'rifi atom yadrosi zaryadiga asoslanadi."
    },
    {
      "c": "ch2",
      "q": "Qarama-qarshi zaryadlangan ionlar orasidagi elektrostatik tortishish hisobiga hosil bo'ladigan bog'lanish turi qaysi?",
      "a": "Ionli bog'lanish",
      "w": [
        "Kovalent qutbsiz",
        "Kovalent qutbli",
        "Metall bog'lanish"
      ],
      "e": "Elektromanfiyligi keskin farq qiluvchi metall va metallmas atomlari o'rtasida ionli bog' vujudga keladi (masalan, NaCl)."
    },
    {
      "c": "ch3",
      "q": "Umumiy elektron juftlarining teng ulushda taqsimlanishi hisobiga bir xil metallmaslar o'rtasida hosil bo'lgan bog'?",
      "a": "Kovalent qutbsiz bog'lanish",
      "w": [
        "Kovalent qutbli",
        "Ionli",
        "Vodorodli"
      ],
      "e": "Bir xil elektromanfiylikka ega atomlar orasida elektron jufti markazda bo'ladi (masalan, H2, O2, N2)."
    },
    {
      "c": "ch4",
      "q": "Suv molekulasida (H2O) kislorod atomining gibridlanish turi qanday?",
      "a": "sp3 gibridlanish (burchakli tuzilish, 104.5°)",
      "w": [
        "sp gibridlanish",
        "sp2 gibridlanish",
        "dsp2 gibridlanish"
      ],
      "e": "Suvda kislorod 2 ta bog'lovchi va 2 ta bo'linmagan elektron juftiga ega bo'lib, sp3 gibridlangan."
    },
    {
      "c": "ch5",
      "q": "1 mol har qanday ideal gaz normal sharoitda (0°C va 1 atm) qancha hajm egallaydi?",
      "a": "22.4 litr (molyar hajm Vm)",
      "w": [
        "24.5 litr",
        "11.2 litr",
        "44.8 litr"
      ],
      "e": "Avogadro qonuniga ko'ra, normal sharoitda 1 mol gaz 22.4 litr hajmni egallaydi."
    },
    {
      "c": "ch6",
      "q": "Avogadro doimiysining (Na) son qiymati qaysi qatorda to'g'ri ko'rsatilgan?",
      "a": "6.02 × 10²³ dona/mol",
      "w": [
        "3.14 × 10²² dona/mol",
        "9.81 × 10²⁴ dona/mol",
        "1.66 × 10⁻²⁴ dona/mol"
      ],
      "e": "1 mol moddadagi zarrachalar soni 6.02 × 10²³ ga teng."
    },
    {
      "c": "ch7",
      "q": "Eritmada vodorod ionlari konsentratsiyasi manfiy logarifmi pH = 3 bo'lsa, bu eritma qanday muhitga ega?",
      "a": "Kislotali muhit (pH < 7)",
      "w": [
        "Neytral muhit (pH = 7)",
        "Ishqoriy muhit (pH > 7)",
        "Kuchli ishqoriy muhit"
      ],
      "e": "pH 7 dan kichik bo'lsa kislotali, 7 ga teng bo'lsa neytral, 7 dan katta bo'lsa ishqoriy bo'ladi."
    },
    {
      "c": "ch8",
      "q": "Reaksiya tezligini o'zi sarflanmagan holda oshiruvchi modda nima deyiladi?",
      "a": "Katalizator",
      "w": [
        "Ingibitor",
        "Indikator",
        "Erituvchi"
      ],
      "e": "Katalizator reaksiyaning aktivlanish energiyasini pasaytirib, uning borishini tezlashtiradi."
    },
    {
      "c": "ch9",
      "q": "Elektron bergan atom qanday jarayonga uchraydi va qanday xossani namoyon qiladi?",
      "a": "Oksidlanadi va qaytaruvchi bo'ladi",
      "w": [
        "Qaytariladi va oksidlovchi bo'ladi",
        "Neytrallanadi",
        "Disproporsiyalanadi"
      ],
      "e": "Elektron berish — oksidlanish, elektron beruvchi modda esa qaytaruvchidir."
    },
    {
      "c": "ch10",
      "q": "Organik moddalar sinfida to'yingan uglevodorodlar (alkanlar) ning umumiy formulasi qaysi?",
      "a": "CnH2n+2",
      "w": [
        "CnH2n",
        "CnH2n-2",
        "CnH2n-6"
      ],
      "e": "Alkanlar (metan, etan, propan...) uchun umumiy formula CnH2n+2 hisoblanadi."
    },
    {
      "c": "ch11",
      "q": "Benzol molekulasida (C6H6) uglerod atomlari qaysi gibrid holatida bo'ladi va halqa qanday shaklda?",
      "a": "sp2 gibridlanish, tekis oltiburchak halqa",
      "w": [
        "sp3 gibridlanish, fazoviy kub",
        "sp gibridlanish, chiziqli",
        "Gibridlanmagan"
      ],
      "e": "Benzolda 6 ta p-elektron delokallashgan umumiy aromatik pi-tizimni hosil qiladi."
    },
    {
      "c": "ch12",
      "q": "Kaliy permanganat (KMnO4) molekulasida marganes (Mn) elementining oksidlanish darajasi nechaga teng?",
      "a": "+7",
      "w": [
        "+2",
        "+4",
        "+6"
      ],
      "e": "K (+1) + Mn (x) + 4×O (-2) = 0 => 1 + x - 8 = 0 => x = +7."
    },
    {
      "c": "ch13",
      "q": "Lakmus qog'ozi o'yuvchi natriy (NaOH) eritmasiga solinganda qanday rangga kiradi?",
      "a": "Ko'k rangga",
      "w": [
        "Qizil rangga",
        "Sariq rangga",
        "Rangsizlanadi"
      ],
      "e": "Lakmus kislotali muhitda qizil, ishqoriy muhitda ko'k rang beradi."
    },
    {
      "c": "ch14",
      "q": "Suvning doimiy qattiqligini keltirib chiqaruvchi ionlar qaysilar?",
      "a": "Kalsiy (Ca²⁺) va magniy (Mg²⁺) sulfatlari hamda xloridlari",
      "w": [
        "Natriy va kaliy gidrokarbonatlari",
        "Faqat temir ionlari",
        "Faqat nitrat ionlari"
      ],
      "e": "Doimiy qattiqlik qaynatilganda yo'qolmaydigan CaSO4, MgCl2 tuzlari hisobiga bo'ladi."
    },
    {
      "c": "ch15",
      "q": "Alyuminiy gidroksid Al(OH)3 ham kislotalar, ham ishqorlar bilan reaksiyaga kirishadi. Bu qanday xossa?",
      "a": "Amfoterlik xossasi",
      "w": [
        "Kislotali xossa",
        "Asosli xossa",
        "Qaytaruvchilik"
      ],
      "e": "Kislota bilan ham, ishqor bilan ham ta'sirlasha oluvchi birikmalar amfoter deyiladi."
    },
    {
      "c": "ch16",
      "q": "Glyukoza (C6H12O6) spirtli bijg'iganda qanday mahsulotlar hosil bo'ladi?",
      "a": "Etil spirti (C2H5OH) va karbonat angidrid (CO2)",
      "w": [
        "Sirka kislota va suv",
        "Sut kislotasi",
        "Metan va vodorod"
      ],
      "e": "C6H12O6 -> 2C2H5OH + 2CO2 reaksiyasi spirtli achish tenglamasidir."
    },
    {
      "c": "ch17",
      "q": "Oltin (Au) va platina (Pt) kabi asil metallarni erituvchi 'Zar suvi' (Tsar vodka) qanday kislotalar aralashmasi?",
      "a": "1 hajm konsentrlangan HNO3 va 3 hajm konsentrlangan HCl",
      "w": [
        "H2SO4 va HF",
        "H3PO4 va CH3COOH",
        "Faqat toza HNO3"
      ],
      "e": "Zar suvida hosil bo'ladigan erkin xlor va nitrozilxlorid oltinni eruvchan kompleksga aylantiradi."
    },
    {
      "c": "ch18",
      "q": "Ammiak (NH3) gazining laboratoriyada va sanoatda sintez qilinishida Le-Shatelye prinsipi bo'yicha bosim qanday o'zgartiriladi?",
      "a": "Bosim oshiriladi (chunki hajm 4 hajmdan 2 hajmga kamayadi)",
      "w": [
        "Bosim pasaytiriladi",
        "Bosim o'zgarmas saqlanadi",
        "Vakuum hosil qilinadi"
      ],
      "e": "N2 + 3H2 <=> 2NH3 reaksiyasida bosim oshirilishi muvozanatni mahsulot tomonga siljitadi."
    },
    {
      "c": "ch19",
      "q": "Qaysi gaz havoga nisbatan yengil bo'lib, uning molyar massasi 16 g/mol ga teng?",
      "a": "Metan (CH4)",
      "w": [
        "Kislorod (O2)",
        "Uglerod (IV)-oksidi (CO2)",
        "Oltingugurt (IV)-oksidi (SO2)"
      ],
      "e": "Havo molyar massasi ~29 g/mol bo'lib, metan (16 g/mol) havoga nisbatan yengil."
    },
    {
      "c": "ch20",
      "q": "Oqsil molekulalarida aminokislotalar qanday bog' orqali o'zaro birikadi?",
      "a": "Peptid bog'i (-CO-NH-)",
      "w": [
        "Glikozid bog'i",
        "Efir bog'i",
        "Fosfodiefir bog'i"
      ],
      "e": "Bir aminokislotaning karboksil guruhi va ikkinchisining aminoguruhi o'rtasida suv ajralib peptid bog' hosil bo'ladi."
    },
    {
      "c": "ch21",
      "q": "Ozon molekulasining formulasi va uning atmosferadagi ahamiyati qanday?",
      "a": "O3 — quyoshning zararli ultrabinafsha nurlarini tutib qoladi",
      "w": [
        "O2 — nafas olishni ta'minlaydi",
        "O4 — issiqxona effektini kamaytiradi",
        "CO — havoni tozalaydi"
      ],
      "e": "Stratosferadagi ozon qatlami Yerdagi barcha tirik mavjudotlarni qattiq UB nurlardan himoya qiladi."
    },
    {
      "c": "ch22",
      "q": "Molyarlik (CM) konsentratsiyasining o'lchov birligi nima?",
      "a": "mol/litr",
      "w": [
        "g/mol",
        "mol/kg",
        "foiz (%)"
      ],
      "e": "Molyar konsentratsiya 1 litr eritmada erigan modda miqdorini (mol) bildiradi."
    },
    {
      "c": "ch23",
      "q": "Vodorod peroksid (H2O2) parchalanishida qaysi modda laboratoriyada keng ishlatiladigan katalizator hisoblanadi?",
      "a": "Marganes (IV) oksidi (MnO2)",
      "w": [
        "Natriy xlorid",
        "Ohaktosh",
        "Kaliy gidroksid"
      ],
      "e": "2H2O2 (MnO2 ishtirokida) -> 2H2O + O2 shiddat bilan kislorod ajratadi."
    },
    {
      "c": "ch24",
      "q": "Kumush oyna reaksiyasi qaysi funksional guruhni aniqlash uchun sifat reaksiyasi hisoblanadi?",
      "a": "Aldegid guruhi (-CHO)",
      "w": [
        "Spirt gidroksili (-OH)",
        "Karboksil guruhi (-COOH)",
        "Oddiy efir bog'i"
      ],
      "e": "Aldegidlar kumush oksidining ammiakli eritmasi [Ag(NH3)2]OH bilan erkin kumush cho'kmasi hosil qiladi."
    },
    {
      "c": "ch25",
      "q": "Termit aralashmasi (alyumotermiya) nimalardan iborat va temir yo'l relslarini payvandlashda ishlatiladi?",
      "a": "Alyuminiy kukuni va temir kuyindisi (Fe3O4)",
      "w": [
        "Mis va rux kukuni",
        "Uglerod va magniy",
        "Kremniy va qo'rg'oshin"
      ],
      "e": "Alyuminiy temirni uning oksididan kuchli issiqlik (3000°C) ajratib qaytaradi."
    },
    {
      "c": "ch26",
      "q": "Sirka kislotaning kimyoviy formulasi qaysi?",
      "a": "CH3COOH",
      "w": [
        "HCOOH",
        "C2H5COOH",
        "C3H7COOH"
      ],
      "e": "Etankislota (sirka kislotasi) formulasi CH3COOH bo'lib, oziq-ovqat va sanoatda ishlatiladi."
    },
    {
      "c": "ch27",
      "q": "Elektr tokini o'tkazadigan eritma yoki suyuqlanma nima deb ataladi?",
      "a": "Elektrolit",
      "w": [
        "Noelektrolit",
        "Izolyator",
        "Dielektrik"
      ],
      "e": "Ionlarga dissotsiatsiyalanadigan tuzlar, kislotalar va ishqorlar elektrolitlardir."
    },
    {
      "c": "ch28",
      "q": "Qaysi metall xona haroratida (20°C) suyuq holatda bo'ladi?",
      "a": "Simob (Hg)",
      "w": [
        "Qo'rg'oshin (Pb)",
        "Qalay (Sn)",
        "Galliy (Ga faqat 30°C da)"
      ],
      "e": "Simob xona haroratida erish nuqtasi -38.8°C bo'lgan yagona suyuq metalldir."
    },
    {
      "c": "ch29",
      "q": "Fenolftalein indikatori ishqoriy muhitda qanday rangga o'zgaradi?",
      "a": "To'q malina (binafsha-pushti) rangga",
      "w": [
        "Sariq rangga",
        "Ko'k rangga",
        "Rangsiz holatda qoladi"
      ],
      "e": "Fenolftalein kislota va neytral muhitda rangsiz, ishqorda malina rang beradi."
    },
    {
      "c": "ch30",
      "q": "Izotoplar bir-biridan nima bilan farq qiladi?",
      "a": "Neytronlar soni va atom massasi bilan (protonlar soni bir xil)",
      "w": [
        "Protonlar soni bilan",
        "Elektronlar soni bilan",
        "Yadro zaryadi bilan"
      ],
      "e": "Protonlar soni bir xil, ammo neytronlar soni har xil bo'lgan ayni element atomlari izotoplardir."
    },
    {
      "c": "ch31",
      "q": "Plastmassalar va polimerlar hosil bo'lishida monomerlarning qo'shilish reaksiyasi nima deyiladi?",
      "a": "Polimerlanish reaksiyasi",
      "w": [
        "Polikondensatlanish",
        "Izomerlanish",
        "Gidratlanish"
      ],
      "e": "Monometrlarning qo'sh bog'lari uzilishi hisobiga yuqori molekulyar birikma hosil bo'lishi polimerlanishdir."
    },
    {
      "c": "ch32",
      "q": "Atmosfera havosining asosiy qismini (~78%) qaysi gaz tashkil qiladi?",
      "a": "Azot (N2)",
      "w": [
        "Kislorod (O2)",
        "Argon (Ar)",
        "Karbonat angidrid (CO2)"
      ],
      "e": "Havo hajm jihatdan 78% azot, 21% kislorod, 0.93% argon va boshqa gazlardan iborat."
    }
  ],
  "fizika": [
    {
      "c": "ph1",
      "q": "Nyutonning ikkinchi qonuni formulasining to'g'ri ko'rinishi qaysi?",
      "a": "F = m · a",
      "w": [
        "F = m / a",
        "F = m · v²",
        "F = m · g · h"
      ],
      "e": "Jismga ta'sir qiluvchi kuch uning massasi va olgan tezlanishining ko'paytmasiga teng."
    },
    {
      "c": "ph2",
      "q": "Xalqaro birliklar sistemasida (SI) bosimning o'lchov birligi nima?",
      "a": "Paskal (Pa = N/m²)",
      "w": [
        "Nyuton (N)",
        "Joul (J)",
        "Vatt (W)"
      ],
      "e": "1 Paskal — 1 kvadrat metr yuzaga perpendikulyar ta'sir qiluvchi 1 Nyuton kuch hosil qilgan bosimdir."
    },
    {
      "c": "ph3",
      "q": "Kinetik energiyaning hisoblash formulasi qaysi?",
      "a": "Ek = (m · v²) / 2",
      "w": [
        "Ep = m · g · h",
        "Ek = m · v",
        "Ek = F · s"
      ],
      "e": "Harakatdagi jismning kinetik energiyasi uning massasi va tezligi kvadratining yarmiga teng."
    },
    {
      "c": "ph4",
      "q": "Zanjir qismi uchun Om qonuni qanday ifodalanadi?",
      "a": "I = U / R",
      "w": [
        "I = U · R",
        "I = R / U",
        "U = I / R"
      ],
      "e": "Tok kuchi kuchlanishga to'g'ri, qarshilikka teskari mutanosibdir."
    },
    {
      "c": "ph5",
      "q": "Yorug'likning vakuumdagi tarqalish tezligi taxminan qanchaga teng?",
      "a": "300,000 km/s (3 × 10⁸ m/s)",
      "w": [
        "150,000 km/s",
        "340 m/s",
        "1,000,000 km/s"
      ],
      "e": "Vakuumdagi yorug'lik tezligi koinotdagi eng yuqori fundamental tezlik chegarasidir."
    },
    {
      "c": "ph6",
      "q": "Yorug'likning to'siqlarni aylanib o'tishi va to'g'ri chiziqli tarqalishdan chetga chiqishi hodisasi nima?",
      "a": "Diffraksiya",
      "w": [
        "Interferensiya",
        "Dispersiya",
        "Polyarizatsiya"
      ],
      "e": "Diffraksiya to'lqin tabiatli barcha jarayonlarga, jumladan yorug'likka xosdir."
    },
    {
      "c": "ph7",
      "q": "Oq yorug'lik nurining shisha prizmadan o'tganda rang-barang spektrga ajralishi qanday fizik hodisa?",
      "a": "Dispersiya",
      "w": [
        "Interferensiya",
        "Sinish",
        "Qaytish"
      ],
      "e": "Dispersiya muhitning sindirish ko'rsatkichi yorug'lik to'lqin uzunligiga (chastotasiga) bog'liqligidir."
    },
    {
      "c": "ph8",
      "q": "Termodinamikaning birinchi qonuni formulasi qaysi?",
      "a": "Q = ΔU + A",
      "w": [
        "Q = c · m · ΔT",
        "ΔU = Q + A",
        "A = F · s · cosα"
      ],
      "e": "Tizimga berilgan issiqlik miqdori uning ichki energiyasini oshirishga va tashqi kuchlarga qarshi ish bajarishga sarflanadi."
    },
    {
      "c": "ph9",
      "q": "Arximed qonuniga ko'ra suyuqlikka botirilgan jismga ta'sir qiluvchi ko'tarish kuchi nimaga teng?",
      "a": "Jism tomonidan siqib chiqarilgan suyuqlik og'irligiga (Fa = ρ · g · V)",
      "w": [
        "Jismning o'z og'irligiga",
        "Idishdagi jami suyuqlik massasiga",
        "Atmosfera bosimiga"
      ],
      "e": "Ko'tarish kuchi suyuqlik zichligi, erkin tushish tezlanishi va botgan hajm ko'paytmasiga teng."
    },
    {
      "c": "ph10",
      "q": "Erkin tushish tezlanishining (g) Yer yuzasidagi o'rtacha qiymati qancha?",
      "a": "9.8 m/s² (taxminan 10 m/s²)",
      "w": [
        "6.67 × 10⁻¹¹ m/s²",
        "3.14 m/s²",
        "1.6 × 10⁻¹⁹ m/s²"
      ],
      "e": "Yerning tortishish kuchi ta'sirida barcha jismlar vakuumda bir xil 9.8 m/s² tezlanish bilan tushadi."
    },
    {
      "c": "ph11",
      "q": "Joul-Lens qonuni bo'yicha o'tkazgichdan tok o'tganda ajralib chiqadigan issiqlik miqdori qanday topiladi?",
      "a": "Q = I² · R · t",
      "w": [
        "Q = I · R / t",
        "Q = U · I / t",
        "Q = R · t / I"
      ],
      "e": "Ajraladigan issiqlik tok kuchi kvadrati, qarshilik va vaqt ko'paytmasiga to'g'ri mutanosib."
    },
    {
      "c": "ph12",
      "q": "Guk qonuniga ko'ra elastik jismning deformatsiyalanishida yuzaga keladigan elastiklik kuchi qanday ifodalanadi?",
      "a": "F = -k · x",
      "w": [
        "F = m · g",
        "F = k / x",
        "F = k · x²"
      ],
      "e": "Elastiklik kuchi cho'zilish (siljish x) kattaligiga to'g'ri mutanosib bo'lib, unga qarama-qarshi yo'nalgan."
    },
    {
      "c": "ph13",
      "q": "Transformatorning ishlash prinsipi qaysi fizik hodisaga asoslangan?",
      "a": "Elektromagnit induksiya hodisasi",
      "w": [
        "Termoelektron emissiya",
        "Fotoeffekt hodisasi",
        "Pyezoeffekt"
      ],
      "e": "Faradey kashf etgan elektromagnit induksiya qonuni bo'yicha birlamchi g'altak magnit maydoni ikkilamchi g'altakda EYuK hosil qiladi."
    },
    {
      "c": "ph14",
      "q": "Fotoeffekt qonunlarini ilmiy tushuntirib bergani uchun Albert Eynshteyn Nobel mukofotiga sazovor bo'lgan. Uning fotoeffekt tenglamasi qaysi?",
      "a": "h · ν = Achiq + (m · v²) / 2",
      "w": [
        "E = m · c²",
        "λ = h / p",
        "F = G · (m1·m2)/r²"
      ],
      "e": "Foton energiyasi (hν) elektronning metaldan chiqish ishi va unga kinetik energiya berishga sarflanadi."
    },
    {
      "c": "ph15",
      "q": "Elektr sig'imining (C) SI sistemasidagi birligi nima?",
      "a": "Farad (F)",
      "w": [
        "Genri (H)",
        "Veber (Wb)",
        "Tesla (T)"
      ],
      "e": "1 Farad — 1 Kulon zaryad berilganda potensiali 1 Voltga oshadigan o'tkazgich sig'imidir."
    },
    {
      "c": "ph16",
      "q": "Magnit maydonining kuch xarakteristikasi bo'lgan magnit induksiyasi vektori (B) qanday birlikda o'lchanadi?",
      "a": "Tesla (T)",
      "w": [
        "Veber (Wb)",
        "Amper (A)",
        "Erg"
      ],
      "e": "Magnit maydoni induksiyasi Nikola Tesla sharafiga Tesla (T) birligida ifodalanadi."
    },
    {
      "c": "ph17",
      "q": "Kogerent to'lqinlarning fazoda qo'shilishi natijasida kuchayish va susayish manzarasi hosil bo'lishi nima?",
      "a": "Interferensiya",
      "w": [
        "Dispersiya",
        "Polyarlanish",
        "Refraksiya"
      ],
      "e": "Interferensiya kogerent (chastotasi va fazalar farqi doimiy) to'lqinlarning ustma-ust tushishidir."
    },
    {
      "c": "ph18",
      "q": "Ideal gaz holat tenglamasi (Mendeleyev-Klapeyron tenglamasi) qaysi?",
      "a": "P · V = (m / M) · R · T",
      "w": [
        "P / T = const",
        "P · V = const",
        "V / T = const"
      ],
      "e": "Bosim, hajm, modda miqdori va universal gaz doimiysi (R=8.31 J/mol·K) harorat bilan bog'lanadi."
    },
    {
      "c": "ph19",
      "q": "Izoxorik jarayonda gazning qaysi parametri o'zgarmas saqlanadi?",
      "a": "Hajm (V = const)",
      "w": [
        "Bosim (P = const)",
        "Harorat (T = const)",
        "Zichlik"
      ],
      "e": "Hajm o'zgarmas bo'lganda Sharl qonuni (P/T = const) amal qiladi."
    },
    {
      "c": "ph20",
      "q": "Tovush to'lqinlari havoda qanday to'lqin turiga kiradi?",
      "a": "Bo'ylama mexanik to'lqinlar",
      "w": [
        "Ko'ndalang elektromagnit to'lqinlar",
        "Gravitatsion to'lqinlar",
        "Statsionar to'lqinlar"
      ],
      "e": "Havoda tovush zarralarning harakat yo'nalishi bo'ylab siqilishi va siyraklanishi orqali tarqaladi."
    },
    {
      "c": "ph21",
      "q": "Absolyut nol harorat Selsiy shkalasida necha darajaga to'g'ri keladi?",
      "a": "-273.15 °C (0 Kelvin)",
      "w": [
        "-100 °C",
        "-459 °C",
        "0 °C"
      ],
      "e": "0 Kelvin modda zarralarining barcha issiqlik harakati to'xtaydigan eng past nazariy haroratdir."
    },
    {
      "c": "ph22",
      "q": "Kulon qonuniga ko'ra ikkita nuqtaviy zaryad orasidagi o'zaro ta'sir kuchi qanday bog'langan?",
      "a": "F = k · (|q1 · q2|) / r²",
      "w": [
        "F = k · (q1 + q2) / r",
        "F = k · q / r³",
        "F = q · E"
      ],
      "e": "Zaryadlar ko'paytmasiga to'g'ri, ular orasidagi masofaning kvadratiga teskari mutanosib."
    },
    {
      "c": "ph23",
      "q": "Moddaning bir agregat holatdan boshqasiga o'tishida harorat o'zgarmay qolishi nimani bildiradi?",
      "a": "Faza o'tishi yuz berayotganini (issiqlik panjara tuzilishini o'zgartirishga sarflanadi)",
      "w": [
        "Termometr nosozligini",
        "Issiqlik sig'imi cheksizligini",
        "Jism soviyotganini"
      ],
      "e": "Erish yoki qaynash davrida berilgan energiya haroratni oshirmasdan bog'larni uzishga ketadi."
    },
    {
      "c": "ph24",
      "q": "Ko'zoynak yasashda ishlatiladigan linzaning optik kuchi (D) qanday birlikda o'lchanadi?",
      "a": "Dioptriya (dptr = 1/m)",
      "w": [
        "Metr",
        "Lyuks",
        "Lumen"
      ],
      "e": "Optik kuch linzaning fokus masofasiga teskari miqdordir (D = 1/F)."
    },
    {
      "c": "ph25",
      "q": "Radioaktiv parchalanishda qaysi nurlanish geliy yadrolari (2 proton, 2 neytron) oqimidan iborat?",
      "a": "Alfa (α) nurlanish",
      "w": [
        "Beta (β) nurlanish",
        "Gamma (γ) nurlanish",
        "Rentgen nurlanishi"
      ],
      "e": "Alfa zarracha He²⁺ yadrosi bo'lib, zaryadi +2e, massasi 4 a.m.b ga teng."
    },
    {
      "c": "ph26",
      "q": "Gidravlik pressning ishlash prinsipi qaysi qonunga asoslanadi?",
      "a": "Paskal qonuni (bosim barcha yo'nalishda bir xil uzatiladi)",
      "w": [
        "Bernulli qonuni",
        "Toriçelli formulasi",
        "Guk qonuni"
      ],
      "e": "Suyuqlikka berilgan bosim o'zgarishsiz hamma tomonga teng yetkaziladi."
    },
    {
      "c": "ph27",
      "q": "Yorug'lik to'liq ichki qaytishi hodisasi qayerda amaliyotda keng qo'llaniladi?",
      "a": "Optik tolali aloqa kabellarida (Fiber-optic internet)",
      "w": [
        "Oddiy ko'zgularda",
        "Quyosh batareyalarida",
        "Lazerli printerlarda"
      ],
      "e": "Nur tola ichida to'liq ichki qaytib energiyasini deyarli yo'qotmay uzoq masofaga yetib boradi."
    },
    {
      "c": "ph28",
      "q": "Eynshteynning mashhur massa va energiya ekvivalentligi formulasi qaysi?",
      "a": "E = m · c²",
      "w": [
        "E = h · ν",
        "p = m · v",
        "E = k · x² / 2"
      ],
      "e": "Har qanday massaga ega jism E = mc² miqdoridagi ulkan yashirin energiyaga egadir."
    },
    {
      "c": "ph29",
      "q": "Erkin tebranishlar amplitudasining vaqt o'tishi bilan kamayib borishi qanday tebranish deyiladi?",
      "a": "So'nuvchi tebranishlar",
      "w": [
        "Majburiy tebranishlar",
        "Avtotebranishlar",
        "Garmonik tebranishlar"
      ],
      "e": "Ishqalanish va qarshilik kuchlari ta'sirida mexanik energiya issiqlikka aylanib tebranish so'nadi."
    },
    {
      "c": "ph30",
      "q": "Qora tuynukning tortishish kuchidan yorug'lik ham qochib qutula olmaydigan chegarasi nima deb ataladi?",
      "a": "Hodisalar gorizonti (Event Horizon)",
      "w": [
        "Shvarschild radiusi",
        "Singulyarlik",
        "Akkretsiya diski"
      ],
      "e": "Hodisalar gorizonti ichidan hech qanday signal yoki materiya tashqariga chiqa olmaydi."
    },
    {
      "c": "ph31",
      "q": "Elektr dvigatelining ishlashi qaysi kuchga asoslanadi?",
      "a": "Amper kuchi (magnit maydonining tokli o'tkazgichga ta'siri)",
      "w": [
        "Lorens kuchi",
        "Kulon kuchi",
        "Markazdan qochma kuch"
      ],
      "e": "Magnit maydonida joylashgan tokli ramkaga Amper kuchlari momenti aylanma harakat beradi."
    },
    {
      "c": "ph32",
      "q": "Magnit maydonida harakatlanayotgan zaryadlangan zarrachaga ta'sir qiluvchi kuch nima?",
      "a": "Lorens kuchi (Fl = q · v · B · sinα)",
      "w": [
        "Amper kuchi",
        "Og'irlik kuchi",
        "Koriolis kuchi"
      ],
      "e": "Lorens kuchi harakatdagi zaryadning trayektoriyasini egrilantiradi."
    }
  ],
  "matematika": [
    {
      "c": "m1",
      "q": "Natural sonlar to'plami qaysi lotin harfi bilan belgilanadi?",
      "a": "N",
      "w": [
        "Z",
        "Q",
        "R"
      ],
      "e": "Sanoqda ishlatiladigan 1, 2, 3... sonlari natural sonlar (N) to'plamidir."
    },
    {
      "c": "m2",
      "q": "Tub son deb qanday songa aytiladi?",
      "a": "Faqat 1 ga va o'ziga bo'linadigan 1 dan katta son",
      "w": [
        "Barcha toq sonlar",
        "Faqat juft sonlar",
        "3 ga karrali sonlar"
      ],
      "e": "Eng kichik va yagona juft tub son 2 dir; 1 tub ham, murakkab ham emas."
    },
    {
      "c": "m3",
      "q": "Sonning 25 foizi uning qanday qismiga teng?",
      "a": "To'rtdan bir (1/4) qismiga",
      "w": [
        "Yarim (1/2) qismiga",
        "Beshdan bir (1/5) qismiga",
        "O'ndan bir (1/10) qismiga"
      ],
      "e": "25% = 25/100 = 1/4."
    },
    {
      "c": "m4",
      "q": "a² - b² qisqa ko'paytirish formulasi qanday yoyiladi?",
      "a": "(a - b)(a + b)",
      "w": [
        "(a - b)²",
        "(a + b)²",
        "a² - 2ab + b²"
      ],
      "e": "Kvadratlar ayirmasi formulasi: a² - b² = (a - b)(a + b)."
    },
    {
      "c": "m5",
      "q": "To'g'ri burchakli uchburchak gipotenuzasi c, katetlari a va b bo'lsa, Pifagor teoremasi qanday yoziladi?",
      "a": "c² = a² + b²",
      "w": [
        "c = a + b",
        "c² = a² - b²",
        "c² = 2ab"
      ],
      "e": "Gipotenuza kvadrati katetlar kvadratlari yig'indisiga teng."
    },
    {
      "c": "m6",
      "q": "Kvadrat tenglama ax² + bx + c = 0 diskriminanti (D) qanday hisoblanadi?",
      "a": "D = b² - 4ac",
      "w": [
        "D = b² + 4ac",
        "D = 2b - ac",
        "D = b - 4ac"
      ],
      "e": "D > 0 bo'lsa 2 ta, D = 0 bo'lsa 1 ta (karrali), D < 0 bo'lsa haqiqiy ildiz yo'q."
    },
    {
      "c": "m7",
      "q": "Arifmetik progressiyaning n-hadi formulasi qaysi?",
      "a": "an = a1 + (n - 1)d",
      "w": [
        "an = a1 · q^(n-1)",
        "an = a1 + nd",
        "an = (a1 + an)/2"
      ],
      "e": "an hadini topish uchun birinchi hadga (n-1) ta ayirma (d) qo'shiladi."
    },
    {
      "c": "m8",
      "q": "Geometrik progressiyaning n-hadi formulasi qaysi?",
      "a": "bn = b1 · q^(n - 1)",
      "w": [
        "bn = b1 + (n-1)q",
        "bn = b1 · n · q",
        "bn = b1 / q^n"
      ],
      "e": "bn hadini topish uchun birinchi had maxraj (q) ning (n-1)-darajasiga ko'paytiriladi."
    },
    {
      "c": "m9",
      "q": "Asosiy trigonometrik ayniyat qaysi?",
      "a": "sin²α + cos²α = 1",
      "w": [
        "sinα + cosα = 1",
        "tgα · ctgα = 0",
        "cos²α - sin²α = 1"
      ],
      "e": "Birlik aylanada ixtiyoriy burchak uchun sin²α + cos²α har doim 1 ga teng."
    },
    {
      "c": "m10",
      "q": "Aylananing uzunligi formulasi qaysi?",
      "a": "C = 2πR (yoki C = πD)",
      "w": [
        "S = πR²",
        "C = πR²",
        "C = 4πR"
      ],
      "e": "Aylana uzunligi 2πR ga, doira yuzi esa πR² ga teng."
    },
    {
      "c": "m11",
      "q": "logₐ(b) ifodasida logarifm asosi a uchun qanday shart bajarilishi shart?",
      "a": "a > 0 va a ≠ 1",
      "w": [
        "a > 0 va a = 1 bo'lishi mumkin",
        "a ixtiyoriy haqiqiy son",
        "a faqat butun son"
      ],
      "e": "Logarifm asosi noldan katta va 1 ga teng bo'lmasligi qat'iy talab etiladi."
    },
    {
      "c": "m12",
      "q": "Funksiyaning hosilasi f'(x) geometrik jihatdan nimani ifodalaydi?",
      "a": "Grafikka o'tkazilgan urinmaning burchak koeffitsiyentini (k = tgα)",
      "w": [
        "Funksiyaning eng katta qiymatini",
        "Egri chiziq ostidagi yuzani",
        "Koordinata boshidan masofani"
      ],
      "e": "f'(x0) urinmaning Ox o'qi musbat yo'nalishi bilan hosil qilgan burchagi tangensidir."
    },
    {
      "c": "m13",
      "q": "(xⁿ)' darajali funksiyaning hosilasi nimaga teng?",
      "a": "n · x^(n - 1)",
      "w": [
        "x^(n+1) / (n+1)",
        "n · x^n",
        "x^(n-1)"
      ],
      "e": "Daraja oldinga koeffitsiyent bo'lib tushadi va daraja ko'rsatkichi 1 ga kamayadi."
    },
    {
      "c": "m14",
      "q": "Aniqmas integral ∫ x dx nimaga teng?",
      "a": "(x² / 2) + C",
      "w": [
        "x² + C",
        "1 + C",
        "2x + C"
      ],
      "e": "Daraja 1 ga oshadi va yangi darajaga bo'linadi, erkin o'zgarmas C qo'shiladi."
    },
    {
      "c": "m15",
      "q": "Teng tomonli uchburchakning barcha ichki burchaklari necha gradusdan iborat?",
      "a": "60° dan",
      "w": [
        "90° dan",
        "45° dan",
        "120° dan"
      ],
      "e": "Uchburchak ichki burchaklari yig'indisi 180° bo'lib, 180° / 3 = 60°."
    },
    {
      "c": "m16",
      "q": "Rombning diagonallari o'zaro qanday kesishadi?",
      "a": "To'g'ri burchak (90°) ostida va kesishish nuqtasida teng ikkiga bo'linadi",
      "w": [
        "45° burchak ostida",
        "Faqat parallel bo'ladi",
        "Ixtiyoriy burchak ostida"
      ],
      "e": "Romb diagonallari perpendikulyar bo'lib, burchak bissektrisasi hamdir."
    },
    {
      "c": "m17",
      "q": "Trapetsiyaning yuzi qanday formula bilan topiladi?",
      "a": "S = ((a + b) / 2) · h",
      "w": [
        "S = a · b · h",
        "S = (a + b) · h",
        "S = a · h / 2"
      ],
      "e": "Trapetsiya yuzi asoslari yig'indisining yarmi (o'rta chiziq) va balandlik ko'paytmasiga teng."
    },
    {
      "c": "m18",
      "q": "Ehtimollar nazariyasida hodisaning ehtimolligi P(A) qaysi oraliqda bo'ladi?",
      "a": "0 ≤ P(A) ≤ 1",
      "w": [
        "-1 ≤ P(A) ≤ 1",
        "0 < P(A) < 100",
        "P(A) ≥ 1"
      ],
      "e": "Mumkin bo'lmagan hodisa ehtimoli 0, muqarrar hodisa ehtimoli 1 ga teng."
    },
    {
      "c": "m19",
      "q": "O'yin suyagi (zarik) tashlanganda 6 tushishi ehtimolligi qancha?",
      "a": "1/6",
      "w": [
        "1/2",
        "1/3",
        "1/12"
      ],
      "e": "Jami teng imkoniyatli natijalar 6 ta, qulay natija 1 ta, demak P = 1/6."
    },
    {
      "c": "m20",
      "q": "To'g'ri burchakli koordinatalar sistemasida ikki nuqta A(x1, y1) va B(x2, y2) orasidagi masofa qanday topiladi?",
      "a": "d = √((x2 - x1)² + (y2 - y1)²)",
      "w": [
        "d = (x2 - x1) + (y2 - y1)",
        "d = √(x2² + y2²)",
        "d = |x2 - x1| / |y2 - y1|"
      ],
      "e": "Bu formula tekislikda Pifagor teoremasining bevosita koordinataviy ko'rinishidir."
    },
    {
      "c": "m21",
      "q": "Vektorlar a(x1, y1) va b(x2, y2) ning skalyar ko'paytmasi formulasi qaysi?",
      "a": "a · b = x1·x2 + y1·y2",
      "w": [
        "a · b = x1·y2 - x2·y1",
        "a · b = (x1+x2) · (y1+y2)",
        "a · b = √(x1² + y1²)"
      ],
      "e": "Skalyar ko'paytma mos koordinatalar ko'paytmalarining yig'indisiga teng."
    },
    {
      "c": "m22",
      "q": "Ikkita vektor perpendikulyar bo'lishi uchun ularning skalyar ko'paytmasi nimaga teng bo'lishi kerak?",
      "a": "0 ga teng bo'lishi kerak",
      "w": [
        "1 ga teng",
        "-1 ga teng",
        "Cheksizlikka"
      ],
      "e": "cos(90°) = 0 bo'lgani sababli perpendikulyar vektorlar skalyar ko'paytmasi nolga teng."
    },
    {
      "c": "m23",
      "q": "Shar hajmining formulasi qaysi?",
      "a": "V = (4/3) · π · R³",
      "w": [
        "V = 4 · π · R²",
        "V = (1/3) · π · R² · h",
        "V = 2 · π · R³"
      ],
      "e": "Shar hajmi (4/3)πR³, sirtining yuzi esa 4πR² ga teng."
    },
    {
      "c": "m24",
      "q": "Silindrning to'la sirti yuzi formulasi qaysi?",
      "a": "S = 2πR(R + h)",
      "w": [
        "S = πR²h",
        "S = 2πRh",
        "S = 4πR²"
      ],
      "e": "To'la sirt 2 ta asos yuzi (2πR²) va yon sirt yuzi (2πRh) yig'indisidan iborat."
    },
    {
      "c": "m25",
      "q": "sin(2α) ikkilangan burchak sinusi qanday yoziladi?",
      "a": "2 · sinα · cosα",
      "w": [
        "cos²α - sin²α",
        "2sinα",
        "sin²α - cos²α"
      ],
      "e": "Ikkilangan burchak sinusi: sin(2α) = 2sinα·cosα."
    },
    {
      "c": "m26",
      "q": "Kombinatorikada n elementdan k tadan o'rinlashtirishlar soni C(n, k) qanday hisoblanadi?",
      "a": "n! / (k! · (n - k)!)",
      "w": [
        "n! / (n - k)!",
        "n! · k!",
        "(n - k)! / k!"
      ],
      "e": "Tartib ahamiyatsiz bo'lganda guruhlashlar soni kombinatsiya formulasidan topiladi."
    },
    {
      "c": "m27",
      "q": "e soni (Eyler soni) ning taqribiy qiymati qancha va u nimaning asosi?",
      "a": "2.718... (Natural logarifm ln asosi)",
      "w": [
        "3.141...",
        "1.414...",
        "0.577..."
      ],
      "e": "e soni matematik analizda ajoyib limit lim (1 + 1/n)^n asosi hisoblanadi."
    },
    {
      "c": "m28",
      "q": "Kvadrat tenglamada Viyet teoremasiga ko'ra keltirilgan x² + px + q = 0 tenglama ildizlari yig'indisi nimaga teng?",
      "a": "-p ga teng",
      "w": [
        "p ga teng",
        "q ga teng",
        "-q ga teng"
      ],
      "e": "Ildizlar yig'indisi x1 + x2 = -p, ko'paytmasi esa x1 · x2 = q bo'ladi."
    },
    {
      "c": "m29",
      "q": "Muntazam ko'pburchakning ichki burchaklari yig'indisi formulasi qaysi?",
      "a": "S = 180° · (n - 2)",
      "w": [
        "S = 360° · n",
        "S = 180° · n",
        "S = 90° · (n - 2)"
      ],
      "e": "n burchakli ko'pburchak (n-2) ta uchburchakka ajraladi, har biri 180°."
    },
    {
      "c": "m30",
      "q": "Cheksiz kamayuvchi geometrik progressiya yig'indisi (|q| < 1) qanday topiladi?",
      "a": "S = b1 / (1 - q)",
      "w": [
        "S = b1 · (1 - q)",
        "S = b1 / (q - 1)",
        "S = b1 / q"
      ],
      "e": "Maxraji birdan kichik bo'lgan cheksiz qatorda hadlar yig'indisi S = b1 / (1 - q)."
    },
    {
      "c": "m31",
      "q": "Uchburchak yuzi uchun Geron formulasi nimaga asoslanadi?",
      "a": "Uchala tomon uzunligi va yarim perimetrga: S = √(p(p-a)(p-b)(p-c))",
      "w": [
        "Faqat bitta tomon va burchakka",
        "Faqat ichki chizilgan aylanaga",
        "Katetlarga"
      ],
      "e": "Balandlik ma'lum bo'lmaganda tomonlar orqali yuzani hisoblashda Geron formulasi qo'llaniladi."
    },
    {
      "c": "m32",
      "q": "Ixtiyoriy uchburchak uchun Kosinuslar teoremasi qanday yoziladi?",
      "a": "c² = a² + b² - 2ab · cosγ",
      "w": [
        "c² = a² + b² + 2ab · cosγ",
        "c = a · cosγ + b · sinγ",
        "c² = a² + b² - ab"
      ],
      "e": "Uchinchi tomon kvadrati qolgan ikki tomon kvadratlari yig'indisidan ular va orasidagi burchak kosinusi ikkilangan ko'paytmasining ayirmasiga teng."
    }
  ],
  "algebra-geometriya": [
    {
      "c": "ag1",
      "q": "Chiziqli funksiya y = kx + b grafigida k koeffitsiyenti nimani ifodalaydi?",
      "a": "To'g'ri chiziqning burchak koeffitsiyenti (qiya burchagi)",
      "w": [
        "Oy o'qini kesib o'tish nuqtasi",
        "Grafikning egriligini",
        "Funksiya aniqlanish sohasini"
      ],
      "e": "k > 0 bo'lsa burchak o'tkir (funksiya o'suvchi), k < 0 bo'lsa o'tmas (kamayuvchi) bo'ladi."
    },
    {
      "c": "ag2",
      "q": "Parabola y = ax² + bx + c uchining abssissasi (x0) qaysi formula bilan topiladi?",
      "a": "x0 = -b / (2a)",
      "w": [
        "x0 = b / (2a)",
        "x0 = -b / a",
        "x0 = -D / (4a)"
      ],
      "e": "Parabola simmetriya o'qi x = -b/(2a) to'g'ri chizig'idir."
    },
    {
      "c": "ag3",
      "q": "Sinuslar teoremasi ixtiyoriy uchburchak uchun qanday yoziladi?",
      "a": "a / sinα = b / sinβ = c / sinγ = 2R",
      "w": [
        "a · sinα = b · sinβ",
        "a / cosα = b / cosβ",
        "a² / sinα = 2R"
      ],
      "e": "Uchburchak tomonlarining qarshisidagi burchaklar sinusiga nisbati teng va tashqi chizilgan aylana diametriga teng."
    },
    {
      "c": "ag4",
      "q": "Ikki to'g'ri chiziq parallel bo'lishining zaruriy va yetarli sharti qanday (y = k1·x + b1 va y = k2·x + b2)?",
      "a": "k1 = k2 va b1 ≠ b2",
      "w": [
        "k1 · k2 = -1",
        "k1 + k2 = 0",
        "b1 = b2"
      ],
      "e": "Burchak koeffitsiyentlari teng va siljishlari har xil bo'lsa, to'g'ri chiziqlar parallel bo'ladi."
    },
    {
      "c": "ag5",
      "q": "Ikki to'g'ri chiziq o'zaro perpendikulyar bo'lishi sharti qaysi?",
      "a": "k1 · k2 = -1",
      "w": [
        "k1 = k2",
        "k1 + k2 = 1",
        "k1 · k2 = 1"
      ],
      "e": "Perpendikulyar to'g'ri chiziqlarning burchak koeffitsiyentlari ko'paytmasi -1 ga teng."
    },
    {
      "c": "ag6",
      "q": "Markazi (a, b) nuqtada va radiusi R bo'lgan aylana tenglamasi qaysi?",
      "a": "(x - a)² + (y - b)² = R²",
      "w": [
        "(x + a)² + (y + b)² = R",
        "x² + y² = R",
        "(x - a) + (y - b) = R²"
      ],
      "e": "Tekislikda markazdan R masofada joylashgan barcha nuqtalar geometrik o'rni."
    },
    {
      "c": "ag7",
      "q": "Uchburchakning medianalari kesishish nuqtasida qanday nisbatda bo'linadi?",
      "a": "Uchidan boshlab hisoblaganda 2:1 nisbatda",
      "w": [
        "1:1 (teng ikkiga)",
        "3:1 nisbatda",
        "1:2 nisbatda"
      ],
      "e": "Medianalar kesishish nuqtasi uchburchakning og'irlik markazi (sentroidi) deyiladi."
    },
    {
      "c": "ag8",
      "q": "Uchburchakning o'rta chizig'i qanday xossaga ega?",
      "a": "Uchinchi tomonga parallel va uning yarmiga teng",
      "w": [
        "Burchakni teng ikkiga bo'ladi",
        "Uchinchi tomonga perpendikulyar",
        "Tomon uzunligiga teng"
      ],
      "e": "Uchburchak ikki tomoni o'rtasini tutashtiruvchi kesma asosining yarmiga teng."
    },
    {
      "c": "ag9",
      "q": "Prizmaning hajmi qanday formula bilan hisoblanadi?",
      "a": "V = S_asos · h",
      "w": [
        "V = (1/3) · S_asos · h",
        "V = 2 · S_asos · h",
        "V = S_asos² · h"
      ],
      "e": "Ixtiyoriy to'g'ri prizma hajmi asos yuzi va balandlik ko'paytmasiga teng."
    },
    {
      "c": "ag10",
      "q": "Piramidaning hajmi qanday formula bilan topiladi?",
      "a": "V = (1/3) · S_asos · h",
      "w": [
        "V = S_asos · h",
        "V = (1/2) · S_asos · h",
        "V = (2/3) · S_asos · h"
      ],
      "e": "Piramida va konus hajmi mos prizma va silindr hajmining uchdan biriga teng."
    },
    {
      "c": "ag11",
      "q": "Konusning to'la sirti yuzi formulasi qaysi?",
      "a": "S = πR(R + l)",
      "w": [
        "S = πR²h",
        "S = 2πRl",
        "S = (1/3)πR²h"
      ],
      "e": "Asos yuzi (πR²) va yon sirti (πRl, bu yerda l — yasovchi) yig'indisidan iborat."
    },
    {
      "c": "ag12",
      "q": "Aylana yoyining uzunligi formulasi qaysi (burchak radianda berilganda)?",
      "a": "L = R · α",
      "w": [
        "L = R² · α",
        "L = 2πR / α",
        "L = R / α"
      ],
      "e": "Yoy uzunligi radius va radian o'lchovidagi markaziy burchak ko'paytmasiga teng."
    },
    {
      "c": "ag13",
      "q": "Aylanaga tashqi chizilgan to'rtburchakning qarama-qarshi tomonlari qanday xossaga ega?",
      "a": "Qarama-qarshi tomonlari uzunliklari yig'indisi teng (a + c = b + d)",
      "w": [
        "Qarama-qarshi tomonlari teng",
        "Diagonallari teng",
        "Burchaklari 90° bo'ladi"
      ],
      "e": "Aylanaga to'rtburchak tashqi chizilishi uchun a + c = b + d bo'lishi zarur va yetarli."
    },
    {
      "c": "ag14",
      "q": "Aylanaga ichki chizilgan to'rtburchakning qarama-qarshi burchaklari yig'indisi necha gradusga teng?",
      "a": "180° ga teng",
      "w": [
        "360° ga",
        "90° ga",
        "270° ga"
      ],
      "e": "Ichki chizilgan to'rtburchakda qarama-qarshi burchaklar yig'indisi doim 180° bo'ladi."
    },
    {
      "c": "ag15",
      "q": "Uchburchak bissektrisasi qarshisidagi tomonni qanday bo'ladi?",
      "a": "Qolgan ikki tomonga mutanosib bo'laklarga ajratadi (a1/a2 = b/c)",
      "w": [
        "Teng ikkiga bo'ladi",
        "Ixtiyoriy nisbatda",
        "Perpendikulyar bo'ladi"
      ],
      "e": "Bissektrisa xossasiga ko'ra ichki burchak bissektrisasi qarama-qarshi tomonni yondosh tomonlarga proporsional bo'ladi."
    },
    {
      "c": "ag16",
      "q": "Fazoda ikkita to'g'ri chiziq bir tekislikda yotmasa va kesishmasa, ular nima deb ataladi?",
      "a": "Ayg'ash (ayqash) to'g'ri chiziqlar",
      "w": [
        "Parallel to'g'ri chiziqlar",
        "Ustma-ust tushuvchi",
        "Perpendikulyar"
      ],
      "e": "Ayqash to'g'ri chiziqlar orqali yagona tekislik o'tkazib bo'lmaydi."
    },
    {
      "c": "ag17",
      "q": "Muntazam ko'pyoqlar (Platon jismlari) jami nechta mavjud?",
      "a": "Faqat 5 ta (tetraedr, geksaedr/kub, oktaedr, dodekaedr, ikosaedr)",
      "w": [
        "6 ta",
        "4 ta",
        "Cheksiz ko'p"
      ],
      "e": "Yevklid geometriyasida barcha yoqlari teng muntazam ko'pburchak bo'lgan atigi 5 ta jism bor."
    },
    {
      "c": "ag18",
      "q": "Eylerning ko'pyoqlar uchun teoremasi (Uchlar U, Qirralar Q, Yoqlar Y) qanday bog'langan?",
      "a": "U - Q + Y = 2",
      "w": [
        "U + Q - Y = 2",
        "U + Q + Y = 0",
        "U · Y = Q"
      ],
      "e": "Ixtiyoriy qavariq ko'pyoq uchun uchlar va yoqlar yig'indisi qirralar sonidan 2 taga ko'p."
    },
    {
      "c": "ag19",
      "q": "Uch perpendikulyar haqidagi teorema nimani ta'kidlaydi?",
      "a": "Tekislikdagi to'g'ri chiziq og'maga perpendikulyar bo'lsa, uning proyeksiyasiga ham perpendikulyar bo'ladi",
      "w": [
        "Uchala chiziq o'zaro parallel bo'ladi",
        "Og'ma proyeksiyadan uzun bo'ladi",
        "Tekislik nolga aylanadi"
      ],
      "e": "Stereometriyaning poydevor teoremalaridan biri burchaklarni hisoblashda qo'llaniladi."
    },
    {
      "c": "ag20",
      "q": "tg(α + β) qo'shish formulasi qaysi?",
      "a": "(tgα + tgβ) / (1 - tgα · tgβ)",
      "w": [
        "(tgα - tgβ) / (1 + tgα · tgβ)",
        "tgα + tgβ",
        "tgα · tgβ"
      ],
      "e": "Tangenslar yig'indisi formulasi burchaklar yig'indisi trigonometrik qiymatini beradi."
    },
    {
      "c": "ag21",
      "q": "cos(2α) ikkilangan burchak kosinusi qaysi formulaga teng?",
      "a": "cos²α - sin²α",
      "w": [
        "2cosα",
        "sin²α - cos²α",
        "1 + 2sinα"
      ],
      "e": "Shuningdek 2cos²α - 1 yoki 1 - 2sin²α ko'rinishida ham yoziladi."
    },
    {
      "c": "ag22",
      "q": "Uchburchakka ichki chizilgan aylana radiusi (r) va yuzi (S) qanday bog'langan?",
      "a": "S = p · r (bu yerda p — yarim perimetr)",
      "w": [
        "S = 2p · r",
        "r = S · p",
        "S = π · r²"
      ],
      "e": "Ichki aylana radiusi r = S / p formulasi bilan topiladi."
    },
    {
      "c": "ag23",
      "q": "Uchburchakka tashqi chizilgan aylana radiusi (R) va yuzi (S) qanday bog'langan?",
      "a": "S = (a · b · c) / (4R)",
      "w": [
        "S = 4R / (abc)",
        "R = abc · S",
        "S = 2R · (a+b+c)"
      ],
      "e": "Tashqi aylana radiusi R = (abc) / (4S) formulasi orqali hisoblanadi."
    },
    {
      "c": "ag24",
      "q": "Vektorning uzunligi (moduli) a(x, y, z) uch o'lchovli fazoda qanday topiladi?",
      "a": "|a| = √(x² + y² + z²)",
      "w": [
        "|a| = x + y + z",
        "|a| = x² + y² + z²",
        "|a| = √(x·y·z)"
      ],
      "e": "Fazodagi vektor uzunligi koordinatalari kvadratlari yig'indisining kvadrat ildiziga teng."
    },
    {
      "c": "ag25",
      "q": "Muntazam oltiburchakning yuzi tomoni 'a' orqali qanday ifodalanadi?",
      "a": "S = (3√3 / 2) · a²",
      "w": [
        "S = 6 · a²",
        "S = 3√3 · a",
        "S = √3 · a²"
      ],
      "e": "Muntazam oltiburchak 6 ta teng tomonli uchburchakdan tashkil topgan."
    },
    {
      "c": "ag26",
      "q": "Logarifmik tenglama log₂(x - 3) = 4 bo'lsa, x nimaga teng?",
      "a": "19 (chunki 2⁴ = 16, x - 3 = 16 => x = 19)",
      "w": [
        "11",
        "8",
        "35"
      ],
      "e": "Asosning darajasi: x - 3 = 2⁴ = 16, bundan x = 16 + 3 = 19."
    },
    {
      "c": "ag27",
      "q": "Ko'rsatkichli tenglama 3^(x+2) = 81 bo'lsa, x nechaga teng?",
      "a": "2 (chunki 81 = 3⁴, x + 2 = 4 => x = 2)",
      "w": [
        "4",
        "1",
        "3"
      ],
      "e": "3 ning 4-darajasi 81 bo'lgani uchun x + 2 = 4, x = 2."
    },
    {
      "c": "ag28",
      "q": "Cheksiz davriy o'nli kasr 0.(3) oddiy kasr ko'rinishida nimaga teng?",
      "a": "1/3 (3/9)",
      "w": [
        "3/10",
        "1/4",
        "3/100"
      ],
      "e": "0.(3) = 3/9 = 1/3 kasriga aynan teng."
    },
    {
      "c": "ag29",
      "q": "Funksiyaning juftlik sharti qaysi?",
      "a": "f(-x) = f(x) (grafik Oy o'qiga nisbatan simmetrik)",
      "w": [
        "f(-x) = -f(x)",
        "f(x) = -f(x)",
        "f(x + T) = f(x)"
      ],
      "e": "Argument ishorasi o'zgarganda qiymati saqlansa funksiya juft bo'ladi (masalan, y = x², y = cos x)."
    },
    {
      "c": "ag30",
      "q": "Funksiyaning toqlik sharti qaysi?",
      "a": "f(-x) = -f(x) (grafik koordinata boshiga nisbatan simmetrik)",
      "w": [
        "f(-x) = f(x)",
        "f(x) > 0",
        "f(x) = 0"
      ],
      "e": "Toq funksiyalarda minus ishorasi tashqariga chiqadi (masalan, y = x³, y = sin x)."
    },
    {
      "c": "ag31",
      "q": "Kesmaning o'rtasi koordinatalari A(x1, y1) va B(x2, y2) nuqtalar uchun qanday topiladi?",
      "a": "x = (x1 + x2)/2, y = (y1 + y2)/2",
      "w": [
        "x = x1 - x2, y = y1 - y2",
        "x = x1·x2, y = y1·y2",
        "x = √(x1·x2)"
      ],
      "e": "O'rta nuqta koordinatalari mos uchlar koordinatalarining o'rta arifmetigidir."
    },
    {
      "c": "ag32",
      "q": "Qavariq to'rtburchakning ichki burchaklari yig'indisi necha gradus?",
      "a": "360°",
      "w": [
        "180°",
        "540°",
        "720°"
      ],
      "e": "Har qanday qavariq to'rtburchak 2 ta uchburchakka ajraladi: 2 × 180° = 360°."
    }
  ],
  "geografiya": [
    {
      "c": "g1",
      "q": "Yer yuzasidagi eng katta materik qaysi?",
      "a": "Yevrosiyo",
      "w": [
        "Afrika",
        "Shimoliy Amerika",
        "Antarktida"
      ],
      "e": "Yevrosiyo materigi Yer quruqligining uchdan bir qismidan ko'prog'ini egallaydi."
    },
    {
      "c": "g2",
      "q": "Dunyo okeanidagi eng chuqur botiq qaysi va uning chuqurligi qancha?",
      "a": "Mariana botig'i (taxminan 11,022 metr)",
      "w": [
        "Yava botig'i",
        "Puerto-Riko botig'i",
        "Filippin botig'i"
      ],
      "e": "Mariana botig'i Tinch okeanida joylashgan bo'lib, eng chuqur nuqtasi Challenjer tubsizligidir."
    },
    {
      "c": "g3",
      "q": "Yerning eng markaziy qatlami nima deb ataladi?",
      "a": "Yadro (tashqi suyuq va ichki qattiq yadro)",
      "w": [
        "Mantiya",
        "Litosfera",
        "Yer po'sti"
      ],
      "e": "Yer yadrosi asosan temir va nikel qotishmasidan tashkil topgan."
    },
    {
      "c": "g4",
      "q": "O'zbekiston Respublikasi bilan chegaradosh davlatlar soni nechta?",
      "a": "5 ta (Qozog'iston, Qirg'iziston, Tojikiston, Turkmaniston, Afg'oniston)",
      "w": [
        "4 ta",
        "6 ta",
        "3 ta"
      ],
      "e": "O'zbekiston Markaziy Osiyodagi barcha 4 ta qardosh davlat hamda Afg'oniston bilan chegaradosh."
    },
    {
      "c": "g5",
      "q": "Yer yuzida sutka (kun va tun) ning almashinishiga nima sabab bo'ladi?",
      "a": "Yerning o'z o'qi atrofida g'arbdan sharqqa aylanishi",
      "w": [
        "Yerning Quyosh atrofida aylanishi",
        "Oyning tortishish kuchi",
        "Quyosh faolligi"
      ],
      "e": "Yer o'z o'qi atrofida taxminan 24 soatda to'liq bir marta aylanadi."
    },
    {
      "c": "g6",
      "q": "Yil fasllarining almashinishiga nima sabab bo'ladi?",
      "a": "Yer o'qining orbital tekislikka 66.5° qiyalikda bo'lib Quyosh atrofida aylanishi",
      "w": [
        "Yerning Quyoshga yaqinlashib uzoqlashishi",
        "Ozon qatlami qalinlashishi",
        "Okean oqimlari"
      ],
      "e": "Qiyalik sababli yil davomida Quyosh nurlarining tushish burchagi o'zgaradi."
    },
    {
      "c": "g7",
      "q": "Dunyoning eng baland cho'qqisi qaysi va qaysi tog' tizmasida joylashgan?",
      "a": "Jomolungma / Everest (8,848 metr, Himoloy tog'lari)",
      "w": [
        "K2 (Chogori)",
        "Monblan",
        "Elbrus"
      ],
      "e": "Everest cho'qqisi Nepal va Xitoy (Tibet) chegarasida joylashgan."
    },
    {
      "c": "g8",
      "q": "Yer yuzidagi eng uzun daryo qaysi?",
      "a": "Nil daryosi (Afrika, 6,650 km)",
      "w": [
        "Amazonka",
        "Yanszi",
        "Missisipi"
      ],
      "e": "Nil daryosi Viktoriya ko'lidan O'rta dengizgacha oqib boradi."
    },
    {
      "c": "g9",
      "q": "Suv hajmi va havzasi maydoni bo'yicha dunyodagi eng sersuv daryo qaysi?",
      "a": "Amazonka daryosi (Janubiy Amerika)",
      "w": [
        "Nil",
        "Kongo",
        "Parana"
      ],
      "e": "Amazonka dunyodagi daryo oqimi suvining beshdan bir qismini okeanga quyadi."
    },
    {
      "c": "g10",
      "q": "O'zbekiston hududidagi eng yirik tabiiy ko'l (qoldiq ko'l) qaysi?",
      "a": "Orol dengizi (havzasi)",
      "w": [
        "Aydarko'l",
        "Chorvoq suv ombori",
        "Tuzkon"
      ],
      "e": "Orol dengizi antropogen omillar sababli qurigan, ammo tarixan eng yirik qoldiq ko'ldir."
    },
    {
      "c": "g11",
      "q": "Dunyoning eng katta maydonga ega oroli qaysi?",
      "a": "Grenlandiya (Daniya tarkibida)",
      "w": [
        "Madagaskar",
        "Kalimantan (Borneo)",
        "Yangi Gvineya"
      ],
      "e": "Grenlandiya maydoni 2.16 million km² bo'lib, dunyoning eng ulkan orolidir."
    },
    {
      "c": "g12",
      "q": "Atmosferaning Yer yuzasiga bevosita tutashgan, barcha ob-havo hodisalari kechadigan eng quyi qatlami nima?",
      "a": "Troposfera",
      "w": [
        "Stratosfera",
        "Mezosfera",
        "Termosfera"
      ],
      "e": "Troposferada atmosfera massasining 80%i to'plangan va barcha bulutlar shu yerda hosil bo'ladi."
    },
    {
      "c": "g13",
      "q": "Ekvatordan qutblarga qarab iqlim va tabiiy zonalarning qonuniy o'zgarishi nima deb ataladi?",
      "a": "Kenglik zonalligi",
      "w": [
        "Balandlik mintaqalanishi",
        "Azonallik",
        "Geologik sikl"
      ],
      "e": "Kenglik zonalligi quyosh issiqligining ekvatordan qutbga kamayib borishiga bog'liq."
    },
    {
      "c": "g14",
      "q": "Tog'larda etakdan cho'qqiga qarab landshaft va haroratning o'zgarishi nima?",
      "a": "Balandlik mintaqalanishi",
      "w": [
        "Kenglik zonalligi",
        "Gidrologik sikl",
        "Siklon hodisasi"
      ],
      "e": "Har 100 metr balandlikka ko'tarilganda havo harorati o'rtacha 0.6°C ga pasayadi."
    },
    {
      "c": "g15",
      "q": "O'zbekistonning eng yirik cho'li qaysi?",
      "a": "Qizilqum cho'li",
      "w": [
        "Qoraqum",
        "Sahroi Kabir",
        "Gobi"
      ],
      "e": "Qizilqum Amudaryo va Sirdaryo daryolari oralig'ida ulkan maydonni egallaydi."
    },
    {
      "c": "g16",
      "q": "Faqat bir tomonga o'zgaruvchan mavsumiy shamollar (yozda okeandan quruqlikka, qishda quruqlikdan okeanga) nima deyiladi?",
      "a": "Musson shamollari",
      "w": [
        "Passatlar",
        "Brizlar",
        "Sirokko"
      ],
      "e": "Mussonlar materik va okeanning turlicha qizishi natijasida yuzaga keladi (Janubiy Osiyo)."
    },
    {
      "c": "g17",
      "q": "Yer shari nechta soat mintaqasiga (Time Zones) bo'lingan?",
      "a": "24 ta (har biri 15° meridian)",
      "w": [
        "12 ta",
        "36 ta",
        "18 ta"
      ],
      "e": "360° / 24 soat = 15°, har bir soat mintaqasi 15 graduslik kenglikni egallaydi."
    },
    {
      "c": "g18",
      "q": "Dunyoning eng yirik ichki berk (oqmas) ko'li qaysi?",
      "a": "Kaspiy dengizi",
      "w": [
        "Baykal ko'li",
        "Viktoriya ko'li",
        "Yuqori ko'l"
      ],
      "e": "Kaspiy maydoni jihatidan dengiz deb ataladi, ammo jahon okeani bilan to'g'ridan-to'g'ri bog'lanmagan."
    },
    {
      "c": "g19",
      "q": "Dunyodagi eng chuqur va eng katta chuchuk suv zaxirasiga ega ko'l qaysi?",
      "a": "Baykal ko'li (Rossiya, chuqurligi 1,642 m)",
      "w": [
        "Kaspiy dengizi",
        "Tanganika ko'li",
        "Michigan"
      ],
      "e": "Baykal ko'li jahondagi barcha suyuq chuchuk suv zaxirasining taxminan 20%ini saqlaydi."
    },
    {
      "c": "g20",
      "q": "Yer yuzida maydoni jihatidan eng katta davlat qaysi?",
      "a": "Rossiya Federatsiyasi (17.1 mln km²)",
      "w": [
        "Kanada",
        "Xitoy",
        "AQSH"
      ],
      "e": "Rossiya sharqiy Yevropa va shimoliy Osiyo bo'ylab ulkan maydonga cho'zilgan."
    },
    {
      "c": "g21",
      "q": "Aholisi soni bo'yicha dunyoda eng oldingi o'rinda turuvchi davlat qaysi?",
      "a": "Hindiston (1.43+ milliard kishi)",
      "w": [
        "Xitoy",
        "AQSH",
        "Indoneziya"
      ],
      "e": "Demografik hisobotlarga ko'ra Hindiston aholi soni bo'yicha dunyoda 1-o'ringa ko'tarilgan."
    },
    {
      "c": "g22",
      "q": "O'zbekiston qaysi dengiz orqali jahon okeaniga to'g'ridan-to'g'ri chiqish yo'liga ega bo'lmagan qanday davlat hisoblanadi?",
      "a": "Double-landlocked (ikkita davlat orqali jahon okeaniga chiquvchi)",
      "w": [
        "Orol davlati",
        "Sohilbo'yi davlati",
        "Yarim orol davlati"
      ],
      "e": "Dunyoda atigi 2 ta bunday davlat bor: O'zbekiston va Lixtenshteyn."
    },
    {
      "c": "g23",
      "q": "Qoraqalpog'iston Respublikasining ma'muriy markazi qaysi shahar?",
      "a": "Nukus shahri",
      "w": [
        "Urganch",
        "Xiva",
        "Qo'ng'irot"
      ],
      "e": "Nukus shahri Qoraqalpog'iston poytaxti va mashhur Savitskiy muzeyi joylashgan maskandir."
    },
    {
      "c": "g24",
      "q": "Dunyoning eng baland sharsharasi qaysi?",
      "a": "Anxel sharsharasi (Venesuela, 979 metr)",
      "w": [
        "Niagara sharsharasi",
        "Viktoriya sharsharasi",
        "Iguasu"
      ],
      "e": "Anxel sharsharasi Auyantepui platosidan pastga erkin qulaydi."
    },
    {
      "c": "g25",
      "q": "Litosfera plitalarining o'zaro to'qnashishi natijasida qanday relyef shakli hosil bo'ladi?",
      "a": "Baland burmali tog' tizmalari (orogenez)",
      "w": [
        "Rift vodiylari",
        "Cho'llar",
        "Atollar"
      ],
      "e": "Hindiston plitasining Yevrosiyo bilan to'qnashuvi Himoloy tog'larini vujudga keltirgan."
    },
    {
      "c": "g26",
      "q": "Geografik xaritada masshtab 1:100,000 bo'lsa, xaritadagi 1 sm joyda qancha masofaga teng?",
      "a": "1 kilometrga (100,000 sm = 1,000 m = 1 km)",
      "w": [
        "100 metrga",
        "10 kilometrga",
        "500 metrga"
      ],
      "e": "100,000 santimetr 1,000 metrga yoki to'g'ri 1 kilometrga to'g'ri keladi."
    },
    {
      "c": "g27",
      "q": "O'zbekistonning poytaxti Toshkent shahri qaysi daryo vodiysida joylashgan?",
      "a": "Chirchiq daryosi vodiysi",
      "w": [
        "Zarafshon daryosi",
        "Qashqadaryo",
        "Surxondaryo"
      ],
      "e": "Toshkent shahri Chirchiq daryosining o'ng sohilidagi qulay vohada joylashgan."
    },
    {
      "c": "g28",
      "q": "Dunyoning eng issiq va eng yirik qumli cho'li qaysi?",
      "a": "Sahroi Kabir (Sahara, Shimoliy Afrika)",
      "w": [
        "Kalahari",
        "Namib",
        "Atakama"
      ],
      "e": "Sahroi Kabir Shimoliy Afrikaning deyarli butun qismini egallab, 9 million km² dan ortiq maydonga ega."
    },
    {
      "c": "g29",
      "q": "Dunyoning eng qurg'oqchil (yuz yillab yomg'ir yog'magan) cho'li qaysi?",
      "a": "Atakama cho'li (Janubiy Amerika, Chili)",
      "w": [
        "Qizilqum",
        "Gobi",
        "Tar cho'li"
      ],
      "e": "Atakama cho'lida Peruan sovuq oqimi tufayli mutlaq qurg'oqchilik hukm suradi."
    },
    {
      "c": "g30",
      "q": "Atlantika okeani va Tinch okeanini birlashtiruvchi mashhur sun'iy kanal qaysi?",
      "a": "Panama kanali",
      "w": [
        "Suvaysh kanali",
        "Kil kanali",
        "Korinf kanali"
      ],
      "e": "Panama kanali Janubiy va Shimoliy Amerika oralig'idagi bo'yinda qazilgan."
    },
    {
      "c": "g31",
      "q": "O'rta dengiz va Qizil dengizni tutashtiruvchi muhim xalqaro dengiz yo'li qaysi?",
      "a": "Suvaysh kanali (Misr)",
      "w": [
        "Gibraltar bo'g'ozi",
        "Bosfor bo'g'ozi",
        "Bab-al-Mandeb"
      ],
      "e": "Suvaysh kanali Yevropa va Osiyo orasidagi dengiz yo'lini minglab kilometrga qisqartirdi."
    },
    {
      "c": "g32",
      "q": "O'zbekistonda gaz va neft konlariga eng boy viloyatlar qaysilar?",
      "a": "Buxoro, Qashqadaryo va Surxondaryo viloyatlari",
      "w": [
        "Samarqand va Jizzax",
        "Sirdaryo va Toshkent",
        "Andijon va Namangan"
      ],
      "e": "Gazli, Muborak, Sho'rtan va Kandim kabi ulkan gaz konlari Buxoro va Qashqadaryoda joylashgan."
    }
  ],
  "informatika": [
    {
      "c": "inf1",
      "q": "Axborotning eng kichik o'lchov birligi nima?",
      "a": "Bit (0 yoki 1)",
      "w": [
        "Bayt",
        "Kilobayt",
        "Gigabayt"
      ],
      "e": "Bit ikkilik sanoq tizimidagi bitta xonani (0 yoki 1) ifodalaydi."
    },
    {
      "c": "inf2",
      "q": "1 Bayt necha bitga teng?",
      "a": "8 bit",
      "w": [
        "10 bit",
        "1024 bit",
        "4 bit"
      ],
      "e": "Bitta belgi (char) odatda xotirada 1 bayt (8 bit) joy egallaydi."
    },
    {
      "c": "inf3",
      "q": "O'nlik sanoq tizimidagi 13 soni ikkilik (binary) sanoq tizimida qanday yoziladi?",
      "a": "1101₂ (8 + 4 + 0 + 1 = 13)",
      "w": [
        "1011₂",
        "1110₂",
        "1001₂"
      ],
      "e": "13 = 8 + 4 + 1 = 2³ + 2² + 2⁰ => 1101₂."
    },
    {
      "c": "inf4",
      "q": "Kompyuterning miyasi hisoblangan va barcha hisoblash amallarini bajaruvchi asosiy qurilma nima?",
      "a": "Protsessor (CPU — Central Processing Unit)",
      "w": [
        "Tezkor xotira (RAM)",
        "Qattiq disk (SSD)",
        "Ona plata"
      ],
      "e": "Markaziy protsessor arifmetik-mantiqiy amallarni bajaradi va tizimni boshqaradi."
    },
    {
      "c": "inf5",
      "q": "Kompyuter o'chirilganda undagi barcha ma'lumotlar o'chib ketadigan vaqtinchalik xotira qaysi?",
      "a": "Tezkor xotira (RAM — Random Access Memory)",
      "w": [
        "ROM (Doimiy xotira)",
        "Qattiq disk (HDD)",
        "Flesh-xotira"
      ],
      "e": "RAM o'zgaruvchan (volatile) xotira bo'lib, energiya uzilganda ma'lumot saqlanmaydi."
    },
    {
      "c": "inf6",
      "q": "Kompyuter yoqilganda eng birinchi bo'lib apparat ta'minotini tekshiruvchi (POST) dastur nima?",
      "a": "BIOS / UEFI",
      "w": [
        "Operatsion tizim",
        "Antivirus",
        "Drayver"
      ],
      "e": "BIOS (Basic Input/Output System) ona platadagi mikrosxemada saqlanadi."
    },
    {
      "c": "inf7",
      "q": "Algoritmning asosiy xossalaridan biri bo'lgan 'Diskretlik' nimani anglatadi?",
      "a": "Algoritmning chekli, alohida-alohida oddiy qadamlarga bo'linganligi",
      "w": [
        "Natijaning tushunarliligi",
        "Har doim to'g'ri ishlashi",
        "Cheksiz davom etishi"
      ],
      "e": "Diskretlik har bir qadam mustaqil va aniq ajratilgan bo'lishini bildiradi."
    },
    {
      "c": "inf8",
      "q": "Global Internet tarmog'ida kompyuterlarga beriladigan noyob 32-bitli raqamli manzil nima?",
      "a": "IPv4 manzili (masalan: 192.168.1.1)",
      "w": [
        "MAC manzili",
        "DNS nomi",
        "Port raqami"
      ],
      "e": "IPv4 manzili to'rtta 8-bitli oktetdan (0-255) iborat bo'lib, nuqta bilan ajratiladi."
    },
    {
      "c": "inf9",
      "q": "Tarmoq domen nomlarini (masalan, google.com) tegishli IP-manzillarga aylantirib beruvchi xizmat qaysi?",
      "a": "DNS (Domain Name System)",
      "w": [
        "DHCP",
        "FTP",
        "HTTP"
      ],
      "e": "DNS inson o'qiy oladigan domen nomlarini mashina tushunadigan IP-manzilga tarjima qiladi."
    },
    {
      "c": "inf10",
      "q": "Brauzer va server o'rtasida shifrlangan va xavfsiz ma'lumot uzatuvchi protokol qaysi?",
      "a": "HTTPS (Port 443, SSL/TLS)",
      "w": [
        "HTTP (Port 80)",
        "Telnet",
        "FTP"
      ],
      "e": "HTTPS ma'lumotlarni kriptografik shifrlab uzatadi, xakerlar tutib olishining oldini oladi."
    },
    {
      "c": "inf11",
      "q": "Fayl tizimida kataloglar iyerarxiyasining eng yuqori bo'g'ini nima deb ataladi?",
      "a": "Ildiz papka (Root directory: '/' yoki 'C:\\')",
      "w": [
        "Ishchi stol",
        "Foydalanuvchi papkasi",
        "Savat"
      ],
      "e": "Ildiz katalog barcha qolgan ichki papka va fayllarning boshlanish nuqtasidir."
    },
    {
      "c": "inf12",
      "q": "Dasturlashda ma'lumotlar tuzilmasi bo'lgan 'Stack' (Stek) qaysi tamoyil asosida ishlaydi?",
      "a": "LIFO (Last In, First Out — Oxirgi kirgan, birinchi chiqadi)",
      "w": [
        "FIFO (First In, First Out)",
        "Tasodifiy tartibda",
        "Saralangan tartibda"
      ],
      "e": "Stek tarelka taxlamiga o'xshaydi: eng oxirgi qo'yilgan tarelka birinchi olinadi."
    },
    {
      "c": "inf13",
      "q": "Navbat (Queue) ma'lumotlar tuzilmasi qaysi tamoyilga asoslanadi?",
      "a": "FIFO (First In, First Out — Birinchi kelgan, birinchi ketadi)",
      "w": [
        "LIFO",
        "FILO",
        "Prioritetsiz"
      ],
      "e": "Oddiy do'kon navbati kabi birinchi kirgan element birinchi bo'lib qayta ishlanadi."
    },
    {
      "c": "inf14",
      "q": "Algoritmning vaqt bo'yicha murakkabligini ifodalovchi asimptotik belgi nima?",
      "a": "Big-O belgisi (O(1), O(n), O(n²), O(log n))",
      "w": [
        "ASCII kodi",
        "Bitreyt",
        "Piksel"
      ],
      "e": "Big-O kiritilayotgan ma'lumotlar hajmi oshganda algoritm bajarilish vaqti qanday o'sishini ko'rsatadi."
    },
    {
      "c": "inf15",
      "q": "Saralangan massivda elementni O(log n) vaqtda topuvchi samarali qidiruv algoritmi qaysi?",
      "a": "Ikkilik qidiruv (Binary Search)",
      "w": [
        "Chiziqli qidiruv (Linear Search)",
        "Bubble Search",
        "Brute-force"
      ],
      "e": "Binary Search har bir qadamda qidiruv sohasini teng ikkiga qisqartirib boradi."
    },
    {
      "c": "inf16",
      "q": "Foydalanuvchi va operatsion tizim o'rtasidagi matnli buyruqlar satri interfeysi nima deb ataladi?",
      "a": "CLI (Command Line Interface — Masalan Terminal / PowerShell)",
      "w": [
        "GUI (Grafik interfeys)",
        "API",
        "IDE"
      ],
      "e": "CLI orqali buyruqlar matn shaklida terilib tezkor bajariladi."
    },
    {
      "c": "inf17",
      "q": "Matnli fayllardagi belgilarni standartlashtiruvchi 1 baytli klassik kodlash jadvali nima?",
      "a": "ASCII jadvali (128 ta asosiy belgi)",
      "w": [
        "UTF-8",
        "Unicode",
        "Base64"
      ],
      "e": "ASCII 0 dan 127 gacha bo'lgan ingliz alifbosi, raqamlar va boshqaruv belgilarini kodlaydi."
    },
    {
      "c": "inf18",
      "q": "Zamonaviy jahondagi barcha xalqlar tillari va emojilarni qamrab olgan universal kodlash tizimi qaysi?",
      "a": "Unicode (UTF-8, UTF-16)",
      "w": [
        "ASCII",
        "ANSI",
        "KOI-8"
      ],
      "e": "UTF-8 har bir belgiga 1 dan 4 baytgacha joy ajratib dunyo tillarini ifodalaydi."
    },
    {
      "c": "inf19",
      "q": "Elektron jadvallarda (Excel) kataklar kesishmasidagi manzil qanday yoziladi?",
      "a": "Ustun harfi va Qator raqami (masalan: B4, C12)",
      "w": [
        "Qator va ustun: 4B",
        "Faqat qator: 12",
        "Faqat rang"
      ],
      "e": "Ustunlar lotin harflari (A, B, C...), qatorlar esa arab raqamlari (1, 2, 3...) bilan belgilanadi."
    },
    {
      "c": "inf20",
      "q": "Zararli dasturlarni (virus, troyan, shifrlagich) aniqlash va zararsizlantirish dasturi nima deyiladi?",
      "a": "Antivirus dasturi",
      "w": [
        "Fayrvoll (Brandmauer)",
        "Brauzer",
        "Drayver"
      ],
      "e": "Antivirus dasturlari virus imzolari bazasi va evristik tahlil orqali kompyuterni himoya qiladi."
    },
    {
      "c": "inf21",
      "q": "Kompyuter tarmog'ida kiruvchi va chiquvchi trafikni xavfsizlik qoidalari bo'yicha filtrlovchi devor nima?",
      "a": "Fayrvoll (Firewall / Brandmauer)",
      "w": [
        "Router",
        "Kabel",
        "Kesh"
      ],
      "e": "Firewall ruxsatsiz ulanishlarni bloklab, tarmoq xavfsizligini ta'minlaydi."
    },
    {
      "c": "inf22",
      "q": "Relatsion ma'lumotlar bazasida jadvalning har bir yozuvini (qatorini) bir qiymatli aniqlovchi kalit nima?",
      "a": "Birlamchi kalit (Primary Key)",
      "w": [
        "Tashqi kalit (Foreign Key)",
        "Indeks",
        "Trigger"
      ],
      "e": "Primary Key takrorlanmaydigan (unique) va NULL bo'lmagan ustun hisoblanadi."
    },
    {
      "c": "inf23",
      "q": "SQL tilida ma'lumotlar bazasidan ma'lumotlarni tanlab o'qib olish buyrug'i qaysi?",
      "a": "SELECT",
      "w": [
        "INSERT",
        "UPDATE",
        "DELETE"
      ],
      "e": "SELECT ustunlar FROM jadval WHERE shart sintaksisi orqali ma'lumotlar olinadi."
    },
    {
      "c": "inf24",
      "q": "Operatsion tizim yadrosi (Kernel) ning asosiy vazifasi nima?",
      "a": "Uskuna (protsessor, xotira, qurilmalar) va dasturlar o'rtasida vositachilik qilish",
      "w": [
        "Faqat chiroyli rasm chizish",
        "Internet tezligini oshirish",
        "Kompyuterni zaryadlash"
      ],
      "e": "Yadro xotirani boshqaradi, jarayonlarni rejalashtiradi va drayverlar orqali uskunani ishlatadi."
    },
    {
      "c": "inf25",
      "q": "Ochiq kodli (Open Source) mashhur operatsion tizim yadrosi kim tomonidan yaratilgan?",
      "a": "Linus Torvalds (Linux yadrosi, 1991-yil)",
      "w": [
        "Bill Geyts",
        "Stiv Jobs",
        "Dennis Ritchi"
      ],
      "e": "Linus Torvalds Linux yadrosini yaratgan bo'lib, u bugungi kunda serverlar, Android va bulutli tizimlarda ishlaydi."
    },
    {
      "c": "inf26",
      "q": "Bulutli hisoblash (Cloud Computing) tushunchasi nimani anglatadi?",
      "a": "Hisoblash quvvati, serverlar va xotiradan internet orqali xizmat sifatida foydalanish",
      "w": [
        "Faqat ob-havoni kuzatish",
        "Lokal kompyuterni sovutish",
        "Optik tola tortish"
      ],
      "e": "AWS, Google Cloud, Azure orqali jismoniy server sotib olmasdan dasturlar yurgaziladi."
    },
    {
      "c": "inf27",
      "q": "Kiberxavfsizlikda soxta sayt yoki xat orqali foydalanuvchining login va parolini o'g'irlash hujumi nima deyiladi?",
      "a": "Fishing (Phishing)",
      "w": [
        "DDoS",
        "Brute Force",
        "SQL Injection"
      ],
      "e": "Fishing ijtimoiy muhandislik usuli bo'lib, foydalanuvchini aldamchi havolaga kiritishga urinadi."
    },
    {
      "c": "inf28",
      "q": "Raqamli elektron imzo (EDS / DS) nimani kafolatlaydi?",
      "a": "Hujjatning yaxlitligi, o'zgarmaganligi va muallifning haqiqiyligini",
      "w": [
        "Fayl hajmini qisqartirishni",
        "Internet tezligini",
        "Matn shriftini"
      ],
      "e": "Asimmetrik kriptografiya (ochiq va yopiq kalit) orqali elektron hujjat tasdiqlanadi."
    },
    {
      "c": "inf29",
      "q": "Ikkita to'plamning umumiy elementlarini topish amali nima deyiladi?",
      "a": "Kesishtirish (Intersection — ∩)",
      "w": [
        "Birlashtirish (Union — ∪)",
        "Ayirish",
        "Simmetrik ayirma"
      ],
      "e": "A va B to'plamlar kesishmasi ikkala to'plamda ham mavjud bo'lgan elementlardan iborat."
    },
    {
      "c": "inf30",
      "q": "Kompyuter grafikasida tasvirning piksellardan tashkil topgan turi nima deb ataladi?",
      "a": "Rastrli grafika (JPEG, PNG, GIF)",
      "w": [
        "Vektorli grafika (SVG)",
        "Fraktal grafika",
        "Uch o'lchamli qobiq"
      ],
      "e": "Rastrli tasvir masshtablanganda (kattalashtirilganda) sifati buziladi va piksellar ko'rinadi."
    },
    {
      "c": "inf31",
      "q": "Matematik formulalar va geometrik shakllarga asoslangan, masshtablanganda sifati zarracha ham buzilmaydigan grafika turi?",
      "a": "Vektorli grafika (SVG, AI, CDR)",
      "w": [
        "Rastrli grafika",
        "Pikselli grafika",
        "Animatsion gif"
      ],
      "e": "Vektorli grafika koordinatalar va egri chiziq formulalari yordamida har qanday o'lchamda tiniq chiziladi."
    },
    {
      "c": "inf32",
      "q": "Axborot xavfsizligida 'CIA Triadasi' qanday uchta asosiy ustunni o'z ichiga oladi?",
      "a": "Maxfiylik (Confidentiality), Yaxlitlik (Integrity), Foydalanish imkoniyati (Availability)",
      "w": [
        "Tezlik, Xotira, Narx",
        "Login, Parol, Kod",
        "Protsessor, Ekran, Tarmoq"
      ],
      "e": "Axborot tizimlari xavfsizligi doimo Maxfiylik, Yaxlitlik va Mavjudlik prinsiplari asosida baholanadi."
    }
  ],
  "ona-tili": [
    {
      "c": "ot1",
      "q": "Nutq tovushlarini va ularning talaffuz xususiyatlarini o'rganuvchi tilshunoslik bo'limi nima?",
      "a": "Fonetika",
      "w": [
        "Leksikologiya",
        "Morfologiya",
        "Sintaksis"
      ],
      "e": "Fonetika unli va undosh tovushlar, bo'g'in, urg'u va ohangni o'rganadi."
    },
    {
      "c": "ot2",
      "q": "O'zbek tilida nechta unli tovush va nechta unli harf bor (lotin yozuvida)?",
      "a": "6 ta unli tovush (a, o, i, u, o', e) va 6 ta unli harf",
      "w": [
        "10 ta unli harf",
        "8 ta unli tovush",
        "5 ta unli tovush"
      ],
      "e": "O'zbek tilida a, o, i, u, o', e — jami 6 ta unli fonema mavjud."
    },
    {
      "c": "ot3",
      "q": "So'zning lug'aviy ma'nosi va lug'at boyligini o'rganuvchi tilshunoslik sohasi qaysi?",
      "a": "Leksikologiya",
      "w": [
        "Fonetika",
        "Grafika",
        "Punktuatsiya"
      ],
      "e": "Leksikologiya tildagi so'zlar zaxirasi, ma'no turlari (sinonim, antonim, omonim) ni tadqiq etadi."
    },
    {
      "c": "ot4",
      "q": "Shakli (talaffuzi va yozilishi) bir xil, ammo ma'nolari mutlaqo boshqa-boshqa bo'lgan so'zlar nima deyiladi?",
      "a": "Omonimlar (masalan: olma - meva / olma - harakat)",
      "w": [
        "Sinonimlar",
        "Antonimlar",
        "Paronimlar"
      ],
      "e": "Omonimlar o'rtasida ma'no yaqinligi bo'lmaydi, faqat shakliy moslik bo'ladi."
    },
    {
      "c": "ot5",
      "q": "Talaffuzi va yozilishi bir-biriga yaqin, ammo ma'nosi butunlay farq qiladigan so'zlar juftligi nima?",
      "a": "Paronimlar (masalan: asr - davr / asil - toza)",
      "w": [
        "Omonimlar",
        "Sinonimlar",
        "Ibora"
      ],
      "e": "Paronimlar nutqda noo'rin qo'llanilsa uslubiy g'alizlik vujudga keladi."
    },
    {
      "c": "ot6",
      "q": "So'z turkumlarini va so'zlarning shakl o'zgarishini o'rganuvchi grammatika bo'limi qaysi?",
      "a": "Morfologiya",
      "w": [
        "Sintaksis",
        "Orfoepiya",
        "Frazeologiya"
      ],
      "e": "Morfologiya mustaqil, yordamchi va alohida olingan so'z turkumlarini o'rganadi."
    },
    {
      "c": "ot7",
      "q": "O'zbek tilida jami nechta mustaqil so'z turkumi mavjud?",
      "a": "6 ta (Ot, Sifat, Son, Olmosh, Fe'l, Ravish)",
      "w": [
        "8 ta",
        "5 ta",
        "10 ta"
      ],
      "e": "Mustaqil so'z turkumlari gap bo'lagi bo'la oladi va mustaqil leksik ma'noga ega."
    },
    {
      "c": "ot8",
      "q": "Qaratqich kelishigining qo'shimchasi qaysi va u qaysi so'roqlarga javob bo'ladi?",
      "a": "-ning (Kimning? Nimaning?)",
      "w": [
        "-ni (Kimni? Nimani?)",
        "-ga (Kimga? Nimaga?)",
        "-da (Kimda? Nimada?)"
      ],
      "e": "Qaratqich kelishigi qaratuvchi va qaralmish munosabatini ifodalaydi."
    },
    {
      "c": "ot9",
      "q": "Fe'lning nisbatlari nechta turga bo'linadi?",
      "a": "5 ta (Bosh, O'zlik, Majhul, Birgalik, Orttirma)",
      "w": [
        "4 ta",
        "3 ta",
        "6 ta"
      ],
      "e": "Harakatning bajaruvchiga munosabatiga ko'ra fe'l 5 ta nisbat shakliga ega."
    },
    {
      "c": "ot10",
      "q": "'Kitob o'qildi' gapidagi 'o'qildi' fe'li qaysi nisbatda qo'llangan?",
      "a": "Majhul nisbat (-il qo'shimchasi, ega harakat obyektidir)",
      "w": [
        "Bosh nisbat",
        "O'zlik nisbati",
        "Birgalik nisbati"
      ],
      "e": "Harakat mantiqiy bajaruvchisi noma'lum bo'lib, obyekt ega o'rniga chiqqanda majhul nisbat bo'ladi."
    },
    {
      "c": "ot11",
      "q": "So'z birikmasi va gap tuzilishini o'rganuvchi soha nima deyiladi?",
      "a": "Sintaksis",
      "w": [
        "Morfologiya",
        "Fonetika",
        "Etimologiya"
      ],
      "e": "Sintaksis so'zlarning gapda birikishi va gap turlarini o'rganuvchi grammatika bo'limidir."
    },
    {
      "c": "ot12",
      "q": "Gapning bosh bo'laklari qaysilar?",
      "a": "Ega va Kesim",
      "w": [
        "Hol va To'ldiruvchi",
        "Aniqlash va Kesim",
        "Ega va Aniqlash"
      ],
      "e": "Ega va kesim gapning grammatik asosini (markazini) hosil qiladi."
    },
    {
      "c": "ot13",
      "q": "Qo'shma gapning qanday asosiy turlari mavjud?",
      "a": "Bog'langan, Ergashgan va Bog'lovchisiz qo'shma gaplar",
      "w": [
        "Faqat sodda va murakkab",
        "Faqat bir bosh bo'lakli",
        "Yoyiq va yig'iq"
      ],
      "e": "Qo'shma gaplar qismlarining bog'lanish usuliga ko'ra uchta asosiy guruhga bo'linadi."
    },
    {
      "c": "ot14",
      "q": "Tinish belgilarining to'g'ri qo'yilish qoidalarini o'rganuvchi bo'lim nima?",
      "a": "Punktuatsiya",
      "w": [
        "Orfografiya",
        "Orfoepiya",
        "Grafika"
      ],
      "e": "Punktuatsiya nuqta, vergul, tire, ikki nuqta kabi tinish belgilarini tartibga soladi."
    },
    {
      "c": "ot15",
      "q": "So'zlarning to'g'ri yozilish qoidalari majmui nima deb ataladi?",
      "a": "Orfografiya (Imlo qoidalari)",
      "w": [
        "Orfoepiya",
        "Leksikografiya",
        "Dialektologiya"
      ],
      "e": "Orfografiya adabiy tilda so'zlarning bir xil yozilish me'yorlarini belgilaydi."
    },
    {
      "c": "ot16",
      "q": "So'zlarning to'g'ri talaffuz qilinish me'yorlarini o'rgatuvchi bo'lim nima?",
      "a": "Orfoepiya",
      "w": [
        "Orfografiya",
        "Stylistika",
        "Morfologiya"
      ],
      "e": "Orfoepiya adabiy talaffuz qonuniyatlarini ta'minlaydi."
    },
    {
      "c": "ot17",
      "q": "Ko'chma ma'noli turg'un birikmalar (frazeologizmlar) ning xususiyati nima?",
      "a": "Yaxlit holda bitta ma'noni bildiradi va bitta gap bo'lagi bo'ladi (masalan: ko'kka ko'tarmoq — maqtamoq)",
      "w": [
        "Har bir so'zi alohida tahlil qilinadi",
        "Doim qismlarga ajraladi",
        "Faqat so'z yasovchi bo'ladi"
      ],
      "e": "Frazeologik iboralar turg'un bo'lib, qismlari lug'aviy yaxlitlikka egadir."
    },
    {
      "c": "ot18",
      "q": "'Ko'z ochib yumguncha' iborasining ma'nosi qaysi so'zga teng?",
      "a": "Juda tez, bir zumda",
      "w": [
        "Sekin-asta",
        "Uxlab qolmoq",
        "Ko'rmay qolmoq"
      ],
      "e": "Bu ibora vaqtning juda qisqa lahzasini obrazli ifodalaydi."
    },
    {
      "c": "ot19",
      "q": "O'zbek tilida so'z urg'usi asosan qaysi bo'g'inga tushadi?",
      "a": "Oxirgi bo'g'inga",
      "w": [
        "Birinchi bo'g'inga",
        "O'rtadagi bo'g'inga",
        "Urg'u erkin tushmaydi"
      ],
      "e": "O'zbek tilida aksariyat so'zlarda urg'u oxirgi bo'g'inga tushadi (istisnolar: modal so'zlar, ravishlar)."
    },
    {
      "c": "ot20",
      "q": "Urg'u olmaydigan qo'shimchalar qatorini toping?",
      "a": "-mi (so'roq yuklamasi), -da, -gina, -ku, -chi",
      "w": [
        "-lar (ko'plik)",
        "-roq (qiyosiy)",
        "-chi (kasb-kor)"
      ],
      "e": "Yuklamalar va ayrim qo'shimchalar urg'uni o'ziga olmay, oldingi bo'g'inga o'tkazadi."
    },
    {
      "c": "ot21",
      "q": "Teng bog'lovchilar qaysi qatorda to'g'ri ko'rsatilgan?",
      "a": "va, ham, ammo, lekin, biroq, yoki, yo",
      "w": [
        "chunki, toki, agarda, garchi",
        "uchun, sari, qadar",
        "go'yo, xuddi"
      ],
      "e": "Teng bog'lovchilar uyushiq bo'laklarni va bog'langan qo'shma gap qismlarini bog'laydi."
    },
    {
      "c": "ot22",
      "q": "Ergashtiruvchi bog'lovchilar qaysilar?",
      "a": "chunki, shuning uchun, agar, garchi, toki, go'yoki",
      "w": [
        "va, ham, biroq",
        "bilan, uchun, orqali",
        "na... na, yo... yo"
      ],
      "e": "Ergashtiruvchi bog'lovchilar ergash gapni bosh gapga grammatik jihatdan tobe qiladi."
    },
    {
      "c": "ot23",
      "q": "O'zbek tilida nechta kelishik mavjud?",
      "a": "6 ta (Bosh, Qaratqich, Tushum, Jo'nalish, O'rin-payt, Chiqish)",
      "w": [
        "5 ta",
        "7 ta",
        "4 ta"
      ],
      "e": "6 ta kelishik ot va otlashgan so'zlarning gapdagi boshqa so'zlar bilan aloqasini bildiradi."
    },
    {
      "c": "ot24",
      "q": "Chiqish kelishigi qo'shimchasi va so'rog'i qaysi?",
      "a": "-dan (Kimdan? Nimadan? Qayerdan?)",
      "w": [
        "-da (Kimda? Qayerda?)",
        "-ga (Kimga?)",
        "-ni (Kimni?)"
      ],
      "e": "Chiqish kelishigi harakatning boshlanish manbasini yoki joyini ko'rsatadi."
    },
    {
      "c": "ot25",
      "q": "Tub va yasalma so'zlar orasidagi asosiy farq nima?",
      "a": "Tub so'zda so'z yasovchi qo'shimcha bo'lmaydi, yasalma so'z esa yangi ma'noli so'z hosil qiladi",
      "w": [
        "Tub so'z faqat bir harfli bo'ladi",
        "Yasalma so'z doim fe'l bo'ladi",
        "Farqi yo'q"
      ],
      "e": "So'z yasovchi qo'shimchalar orqali tilda yangi leksik birliklar yasaladi (masalan: gul -> gulchi)."
    },
    {
      "c": "ot26",
      "q": "Sifat darajalari nechta turga bo'linadi?",
      "a": "4 ta (Oddiy, Qiyosiy, Orttirma, Kuchsizlantirma)",
      "w": [
        "3 ta",
        "2 ta",
        "5 ta"
      ],
      "e": "Sifat belgi-xususiyatning me'yordan ortiqligi yoki kamligini 4 daraja orqali ifodalaydi."
    },
    {
      "c": "ot27",
      "q": "'Eng chiroyli', 'juda baland' sifatlari qaysi darajaga kiradi?",
      "a": "Orttirma daraja",
      "w": [
        "Oddiy daraja",
        "Qiyosiy daraja",
        "Kuchsizlantirma"
      ],
      "e": "Belgining me'yordan ancha yuqoriligini bildiruvchi 'eng', 'juda', 'nihoyatda' orttirma daraja hosil qiladi."
    },
    {
      "c": "ot28",
      "q": "O'zbek adabiy tilining asosiy tayanch lahjasi qaysi?",
      "a": "Toshkent va Farg'ona shaharlararo qarluq lahjasi",
      "w": [
        "O'g'uz lahjasi",
        "Qipchoq lahjasi",
        "Turkman lahjasi"
      ],
      "e": "Zamonaviy o'zbek adabiy tili qarluq (janubiy-sharqiy) dialektlari negizida shakllangan."
    },
    {
      "c": "ot29",
      "q": "Sintaksisda ikkinchi darajali bo'laklar qaysilar?",
      "a": "To'ldiruvchi, Aniqlash, Hol",
      "w": [
        "Ega va Kesim",
        "Faqat To'ldiruvchi",
        "Undalma va Kiritma"
      ],
      "e": "Ikkinchi darajali bo'laklar bosh bo'laklarni yoki o'zaro bir-birini izohlab keladi."
    },
    {
      "c": "ot30",
      "q": "Gapda tinglovchining diqqatini jalb qilish uchun aytilgan so'z nima deyiladi?",
      "a": "Undalma (masalan: Bolalar, dars boshlandi!)",
      "w": [
        "Kiritma so'z",
        "Yuklama",
        "Undov"
      ],
      "e": "Undalma gap bo'lagi bo'la olmaydi va yozuvda vergul bilan ajratiladi."
    },
    {
      "c": "ot31",
      "q": "So'zlovchining o'z fikriga munosabatini (ishonch, gumon, quvonch) bildiruvchi birlik nima?",
      "a": "Kiritma so'z / gap (masalan: Shak-shubhasiz, albatta, ehtimol)",
      "w": [
        "Undalma",
        "Taqlid so'z",
        "Sifatdosh"
      ],
      "e": "Kiritma so'zlar modallik munosabatlarini ifodalaydi va tinish belgilari bilan ajratiladi."
    },
    {
      "c": "ot32",
      "q": "'O'zbekiston Respublikasining Davlat tili haqida'gi Qonun qachon qabul qilingan?",
      "a": "1989-yil 21-oktabrda",
      "w": [
        "1991-yil 1-sentabrda",
        "1992-yil 8-dekabrda",
        "1993-yil 2-iyulda"
      ],
      "e": "1989-yil 21-oktabrda o'zbek tiliga davlat tili maqomi berilgan tarixiy qonun qabul qilingan."
    }
  ],
  "ona-tili-adabiyot": [
    {
      "c": "ota1",
      "q": "O'zbek mumtoz adabiyotining sultoni va g'azal mulkining shohi kim?",
      "a": "Alisher Navoiy (1441-1501)",
      "w": [
        "Zahiriddin Muhammad Bobur",
        "Lutfiy",
        "Atoiy"
      ],
      "e": "Navoiy o'zbek adabiy tilini jahon miqyosiga ko'targan buyuk mutafakkir va shoirdir."
    },
    {
      "c": "ota2",
      "q": "Alisher Navoiy turkiy tilda yaratgan besh buyuk dostondan iborat durdona asar nima?",
      "a": "'Xamsa' (Hayrat ul-abror, Farhod va Shirin, Layli va Majnun, Sab'ai sayyor, Saddi Iskandariy)",
      "w": [
        "Xazoyin ul-maoniy",
        "Muhokamat ul-lug'atayn",
        "Majolis un-nafois"
      ],
      "e": "Navoiy turkiy tilda birinchi bo'lib to'liq 'Xamsa' yaratgan daho ijodkordir."
    },
    {
      "c": "ota3",
      "q": "Navoiy turkiy tilning forsiy tildan kam emasligini, balki boyroq va ifodali ekanligini isbotlagan ilmiy asari qaysi?",
      "a": "'Muhokamat ul-lug'atayn' (Ikki til muhokamasi)",
      "w": [
        "Mezon ul-avzon",
        "Tarixi muluki Ajam",
        "Munshoat"
      ],
      "e": "Ushbu asarda Navoiy turkiy tilning leksik va grammatik imkoniyatlarini ilmiy qiyoslagan."
    },
    {
      "c": "ota4",
      "q": "Zahiriddin Muhammad Boburning jahonga mashhur tarixiy-memuar asari qaysi?",
      "a": "'Boburnoma' (Vaqoe)",
      "w": [
        "Mubayyin",
        "Xatti Boburiy",
        "Aruz risolasi"
      ],
      "e": "Boburnoma nafaqat tarixiy voqealar, balki jo'g'rofiya, tabiat va etnografiyaning betakror ensiklopediyasidir."
    },
    {
      "c": "ota5",
      "q": "O'zbek adabiyotida birinchi roman janriga asos solgan adib va uning ilk romani qaysi?",
      "a": "Abdulla Qodiriy — 'O'tkan kunlar' (1922-1926)",
      "w": [
        "Cho'lpon — 'Kecha va kunduz'",
        "Oybek — 'Qutlug' qon'",
        "G'afur G'ulom — 'Shum bola'"
      ],
      "e": "Abdulla Qodiriy 'O'tkan kunlar' bilan o'zbek realistik romanchiligiga poydevor qo'ydi."
    },
    {
      "c": "ota6",
      "q": "'O'tkan kunlar' romanining bosh qahramonlari kimlar?",
      "a": "Otabek va Kumushbibi",
      "w": [
        "Mirzo Anvar va Ra'no",
        "Qoradala va Zebi",
        "Yormat va Gulnor"
      ],
      "e": "Otabek va Kumushbibining sof sevgisi hamda fojiali taqdiri roman markazida turadi."
    },
    {
      "c": "ota7",
      "q": "Jadid adabiyotining yorqin vakili, 'Go'zal', 'Binafsha' she'rlari va 'Kecha va kunduz' romani muallifi kim?",
      "a": "Abdulhamid Sulaymon o'g'li Cho'lpon",
      "w": [
        "Fitrat",
        "Hamza",
        "Avloniy"
      ],
      "e": "Cho'lpon milliy uyg'onish, erk va ozodlik g'oyalarini yuksak mahorat bilan kuylagan."
    },
    {
      "c": "ota8",
      "q": "Alpomish dostonida Barchinoy qo'ygan to'rtta asosiy shartdan biri qaysi?",
      "a": "Ming qadamdan tanga otish (yoydan otish sharti)",
      "w": [
        "Dengizda suzish",
        "Shaxmat o'ynash",
        "She'r to'qish"
      ],
      "e": "Barchinoy shartlari: poyga, kamondan otish, kurash va yoy tortish bo'lgan."
    },
    {
      "c": "ota9",
      "q": "O'zbek xalq qahramonlik eposi hisoblangan eng qadimgi doston qaysi?",
      "a": "'Alpomish' dostoni (Fozil Yo'ldosh o'g'li varianti)",
      "w": [
        "Go'ro'g'li",
        "Ravshan",
        "Kuntug'mish"
      ],
      "e": "Alpomish xalqimizning botirligi, mardligi va or-nomusini ulug'lovchi boqiy doston."
    },
    {
      "c": "ota10",
      "q": "Mumtoz she'riyatda har bir baytning ikkinchi misrasi qofiyalanib keluvchi lirik janr nima?",
      "a": "G'azal (a-a, b-a, v-a, g-a...)",
      "w": [
        "Ruboiy",
        "Qit'a",
        "Tuyuq"
      ],
      "e": "G'azal odatda 7 baytdan 15 baytgacha bo'lib, oxirgi baytda shoir taxallusi keltiriladi."
    },
    {
      "c": "ota11",
      "q": "To'rt misradan iborat bo'lib, a-a-b-a tartibida qofiyalanuvchi falsafiy she'riy janr nima?",
      "a": "Ruboiy (Umar Xayyom, Bobur)",
      "w": [
        "G'azal",
        "Fard",
        "Masnaviy"
      ],
      "e": "Ruboiyda chuqur falsafiy ma'no ixcham to'rt satrda yorqin ochib beriladi."
    },
    {
      "c": "ota12",
      "q": "Aruz vaznida she'rning o'lchovi nimaga asoslanadi?",
      "a": "Cho'ziq va qisqa hijolarning muayyan tartibda takrorlanishiga",
      "w": [
        "Faqat bo'g'inlar sonining tengligiga",
        "Urg'uli bo'g'inlarga",
        "Faqat qofiyaga"
      ],
      "e": "Aruz arab, fors va turkiy mumtoz she'riyatining ruknlarga asoslangan vaznidir."
    },
    {
      "c": "ota13",
      "q": "Barmoq vaznining asosiy mezoni nima?",
      "a": "Har bir misradagi bo'g'inlar sonining tengligi va turoqlanishi",
      "w": [
        "Hijo uzun-qisqaligi",
        "Faqat bosh qofiya",
        "Lotin harflari soni"
      ],
      "e": "Barmoq tizimi turkiy xalqlarning qadimiy tabiiy xalq og'zaki ijodi vaznidir."
    },
    {
      "c": "ota14",
      "q": "She'riyatda jonsiz narsalarga insoniy xususiyatlar berilishi qanday badiiy san'at deyiladi?",
      "a": "Tashxis (Jonlantirish)",
      "w": [
        "Tazod",
        "Talmeh",
        "Mubolag'a"
      ],
      "e": "Tashxis orqali tabiat hodisalari, bulut, shamol yoki gullar insondek his qiladi."
    },
    {
      "c": "ota15",
      "q": "She'rda ma'nosi bir-biriga qarama-qarshi so'zlarning qo'llanishi qaysi adabiy san'at?",
      "a": "Tazod (Ziddiyat san'ati)",
      "w": [
        "Tashbeh",
        "Kitoyat",
        "Istiora"
      ],
      "e": "Kechayu kunduz, do'stu dushman kabi qarama-qarshiliklar orqali ta'sirchanlik oshadi."
    },
    {
      "c": "ota16",
      "q": "Tarixiy shaxs, voqea yoki mashhur afsonaga ishora qilish san'ati nima?",
      "a": "Talmeh san'ati (masalan: Majnun, Iso, Farhod tilga olinishi)",
      "w": [
        "Husni ta'lil",
        "Irsoli masal",
        "Iyhom"
      ],
      "e": "Talmeh o'quvchi xotirasidagi ma'lum madaniy-tarixiy voqeani jonlantiradi."
    },
    {
      "c": "ota17",
      "q": "G'afur G'ulomning qaysi mashhur qissasi o'zbek bolalari hayotini yumor va realizm bilan tasvirlaydi?",
      "a": "'Shum bola'",
      "w": [
        "Yodgor",
        "Netay",
        "Tirik qo'shiqlar"
      ],
      "e": "Qoravoyning qiziqarli sarguzashtlari orqali o'sha davr xalq hayoti aks ettirilgan."
    },
    {
      "c": "ota18",
      "q": "O'tkir Hoshimovning qaysi asari ona mehrining buyukligi va farzandlik burchi haqida eng ta'sirchan doston hisoblanadi?",
      "a": "'Dunyoning ishlari'",
      "w": [
        "Ikki eshik orasi",
        "Bahor qaytmaydi",
        "Nur borki, soya bor"
      ],
      "e": "'Dunyoning ishlari' asari onaga qo'yilgan yuksak adabiy haykaldir."
    },
    {
      "c": "ota19",
      "q": "O'zbekiston Qahramoni, xalq shoiri Erkin Vohidov qaysi mashhur she'riy asari bilan millat sha'nini kuylagan?",
      "a": "'O'zbegim' qasidasi",
      "w": [
        "Ruhlar isyoni",
        "Nido",
        "Tong nafasi"
      ],
      "e": "'O'zbegim' qasidasida xalqimizning ming yillik shonli tarixi va ma'naviyati madh etilgan."
    },
    {
      "c": "ota20",
      "q": "O'zbekiston Qahramoni Abdulla Oripov O'zbekiston Respublikasi Davlat Madhiyasidan tashqari qaysi durdona she'rlari bilan mashhur?",
      "a": "'O'zbekiston', 'Genetika', 'Munojotni tinglab'",
      "w": [
        "Alvido, bolalik",
        "Chinor",
        "Kuz ertagi"
      ],
      "e": "Abdulla Oripov o'zbek milliy she'riyatida yangi falsafiy va ijtimoiy bosqichni boshlab bergan."
    },
    {
      "c": "ota21",
      "q": "Said Ahmadning front ortidagi ayollar matonatini ko'rsatuvchi mashhur trilogiyasi qaysi?",
      "a": "'Ufq' trilogiyasi ('Qirq besh kun', 'Hijron kunlarida', 'Ufq bo'sag'asida')",
      "w": [
        "Kelinlar qo'zg'oloni",
        "Qorako'z Majnun",
        "Jimjitlik"
      ],
      "e": "'Ufq' o'zbek xalqining Ikkinchi jahon urushi yillaridagi chekkan zahmatlari va matonati dramasidir."
    },
    {
      "c": "ota22",
      "q": "Dante Aligyerining 'Ilohiy komediya' asarini o'zbek tiliga yuksak mahorat bilan tarjima qilgan shoir kim?",
      "a": "Abdulla Oripov",
      "w": [
        "Erkin Vohidov",
        "Cho'lpon",
        "Oybek"
      ],
      "e": "Abdulla Oripov Dantening murakkab dostonini o'zbek kitobxoniga tuhfa etgan."
    },
    {
      "c": "ota23",
      "q": "Iogann Volfgang Gyotening 'Faust' tragediyasini o'zbekchaga o'girgan adib kim?",
      "a": "Erkin Vohidov",
      "w": [
        "Abdulla Qahhor",
        "Mirtemir",
        "Zulfiya"
      ],
      "e": "Erkin Vohidov nemis mumtoz durdonasini teran mahorat bilan tarjima qilgan."
    },
    {
      "c": "ota24",
      "q": "O'zbek hikoyanavisligining Chexovi deb atalgan va 'Bemor', 'Anor', 'Dahshat' hikoyalari muallifi kim?",
      "a": "Abdulla Qahhor",
      "w": [
        "Oybek",
        "Pirimqul Qodirov",
        "Asqad Muxtor"
      ],
      "e": "Abdulla Qahhor so'zni tejab ishlatish, ixcham va nihoyatda o'tkir syujet yaratish ustasidir."
    },
    {
      "c": "ota25",
      "q": "Boburiylar sulolasi haqida 'Yulduzli tunlar' va 'Avlodlar dovoni' tarixiy romanlarini yozgan adib kim?",
      "a": "Pirimqul Qodirov",
      "w": [
        "Mirkarim Osim",
        "Odil Yoqubov",
        "Tohir Malik"
      ],
      "e": "Pirimqul Qodirov Bobur Mirzo va Humoyun, Akbarshohlar hayotini chuqur haqqoniylik bilan gavdalantirgan."
    },
    {
      "c": "ota26",
      "q": "Ulug'bek xazinasini himoya qilgan Ali Qushchi fojiasini tasvirlagan 'Ulug'bek xazinasi' romani muallifi kim?",
      "a": "Odil Yoqubov",
      "w": [
        "Pirimqul Qodirov",
        "Omon Muxtor",
        "Shukur Xolmirzayev"
      ],
      "e": "Odil Yoqubov olimlar va mutaassiblik o'rtasidagi to'qnashuvni buyuk mahorat bilan ochib bergan."
    },
    {
      "c": "ota27",
      "q": "Zulfiyaxonim qaysi shoirning rafiqasi bo'lib, uning vafotidan so'ng 'Hijron kunlarida', 'Bahor keldi seni so'roqlab' she'rlarini yozgan?",
      "a": "Hamid Olimjon",
      "w": [
        "Usmon Nosir",
        "Botu",
        "G'ayratiy"
      ],
      "e": "Zulfiya va Hamid Olimjon o'zbek adabiyotining eng yorqin va vafodor ijodiy juftligi bo'lgan."
    },
    {
      "c": "ota28",
      "q": "'Yurak, sensan mening sozim...' satrlari bilan boshlanuvchi 'Yurak' she'ri muallifi bo'lgan yonib yashagan shoir kim?",
      "a": "Usmon Nosir",
      "w": [
        "Cho'lpon",
        "Oybek",
        "Mirtemir"
      ],
      "e": "Usmon Nosir 20 yoshlarida o'zbek lirik she'riyatida yorqin chaqmoqdek porlagan shoirdir."
    },
    {
      "c": "ota29",
      "q": "Tohir Malik qaysi mashhur qissasi orqali jinoyat olami qurbonlari va giyohvandlik fojiasini ko'rsatgan?",
      "a": "'Shaytanat' asari",
      "w": [
        "Alvido, bolalik",
        "So'nggi o'q",
        "Murdalar gapirmaydilar"
      ],
      "e": "'Shaytanat' romani o'zbek detektiv va sotsial adabiyotining eng ko'p o'qilgan asarlaridan biridir."
    },
    {
      "c": "ota30",
      "q": "Qoraqalpoq adabiyotining asoschisi, 'Dugona', 'Xalq uchun' asarlari muallifi buyuk alloma shoir kim?",
      "a": "Berdaq (Berdimurod Qarg'aboy o'g'li)",
      "w": [
        "Ajiniyoz",
        "Kunchxo'ja",
        "Ibroyim Yusupov"
      ],
      "e": "Berdaq qoraqalpoq xalqining dardi, orzu-umidlari va erkparvarlik g'oyalarini kuylagan."
    },
    {
      "c": "ota31",
      "q": "Xorazm adabiy muhitida Feruz (Muhammad Rahimxon II) homiyligida tuzilgan shoirlar tazkirasi nima?",
      "a": "'Majmuat ush-shuaro'",
      "w": [
        "Majolis un-nafois",
        "Haft iqlim",
        "Riyoz ud-davla"
      ],
      "e": "Feruz saroyida adabiyot, musiqa va xattotlik gullab-yashnagan."
    },
    {
      "c": "ota32",
      "q": "'Qutadg'u bilig' (Saodatga eltuvchi bilim) dostoni muallifi kim va asar nechanchi yilda yozilgan?",
      "a": "Yusuf Xos Hojib (1069-yil)",
      "w": [
        "Mahmud Qoshg'ariy",
        "Ahmad Yassaviy",
        "Ahmad Yugnakiy"
      ],
      "e": "'Qutadg'u bilig' turkiy xalqlarning ilk yozma axloqiy-ta'limiy va davlatchilik qomusi hisoblanadi."
    }
  ],
  "ingliz-tili": [
    {
      "c": "eng1",
      "q": "Which English verb tense is used for habitual actions, general truths, and permanent situations?",
      "a": "Present Simple (e.g., 'The sun rises in the east.')",
      "w": [
        "Present Continuous",
        "Present Perfect",
        "Past Simple"
      ],
      "e": "Present Simple expresses facts, habits, and daily routines with base verb or -s/-es."
    },
    {
      "c": "eng2",
      "q": "Which sentence correctly demonstrates the Present Perfect Continuous tense?",
      "a": "She has been studying English for four hours.",
      "w": [
        "She is studying English since morning.",
        "She had study English.",
        "She was been studying English."
      ],
      "e": "Present Perfect Continuous uses 'have/has been + verb-ing' to show actions continuing up to now."
    },
    {
      "c": "eng3",
      "q": "Choose the correct Second Conditional sentence (unreal present/future condition):",
      "a": "If I won a million dollars, I would travel the world.",
      "w": [
        "If I will win, I travel.",
        "If I win, I would travel.",
        "If I had won, I would travel."
      ],
      "e": "Second Conditional formula: If + Past Simple, would + base verb."
    },
    {
      "c": "eng4",
      "q": "Which sentence uses the Third Conditional correctly (regrets about the past)?",
      "a": "If you had informed me earlier, I would have helped you.",
      "w": [
        "If you informed me, I helped you.",
        "If you had informed, I will help.",
        "If you inform, I would have help."
      ],
      "e": "Third Conditional: If + Past Perfect (had + V3), would have + V3."
    },
    {
      "c": "eng5",
      "q": "Convert to Passive Voice: 'Alexander Fleming discovered penicillin in 1928.'",
      "a": "Penicillin was discovered by Alexander Fleming in 1928.",
      "w": [
        "Penicillin has been discovered.",
        "Penicillin is discovered.",
        "Penicillin was being discovered."
      ],
      "e": "Past Simple passive requires 'was/were + Past Participle (V3)'."
    },
    {
      "c": "eng6",
      "q": "What is the meaning of the phrasal verb 'call off'?",
      "a": "To cancel an event or meeting",
      "w": [
        "To postpone or delay",
        "To phone someone",
        "To shout loudly"
      ],
      "e": "'Call off' means to decide that an organized event will not happen (e.g., 'They called off the match due to rain')."
    },
    {
      "c": "eng7",
      "q": "What does the idiom 'break the ice' mean in communication?",
      "a": "To make people feel more relaxed and comfortable in a social setting",
      "w": [
        "To damage property",
        "To become very angry",
        "To go ice-skating"
      ],
      "e": "'Break the ice' means initiating friendly conversation to relieve tension."
    },
    {
      "c": "eng8",
      "q": "Select the sentence with the correct Gerund / Infinitive usage after the verb 'admit':",
      "a": "He admitted making a serious mistake.",
      "w": [
        "He admitted to make a mistake.",
        "He admitted make mistake.",
        "He admitted for making."
      ],
      "e": "The verb 'admit' is followed by a gerund (verb + -ing)."
    },
    {
      "c": "eng9",
      "q": "Choose the correct sentence with an Inversion (formal emphasis after negative adverbials):",
      "a": "Hardly had the bell rung when the students entered the hall.",
      "w": [
        "Hardly the bell had rung when...",
        "Hardly did the bell rang when...",
        "Hardly had rung the bell..."
      ],
      "e": "Negative adverbials like 'Hardly', 'No sooner', 'Scarcely' trigger auxiliary-subject inversion."
    },
    {
      "c": "eng10",
      "q": "What is the difference between 'few' and 'a few' with countable nouns?",
      "a": "'Few' means almost none (negative sense), while 'a few' means some/several (positive sense)",
      "w": [
        "They mean exactly the same",
        "'A few' means none at all",
        "'Few' is only used with water"
      ],
      "e": "'I have few friends' (lonely) vs 'I have a few friends' (happy to have some)."
    },
    {
      "c": "eng11",
      "q": "Which relative pronoun should be used for a person who is the object of a formal clause?",
      "a": "Whom",
      "w": [
        "Which",
        "Whose",
        "Where"
      ],
      "e": "'Whom' is the objective case pronoun for persons in formal grammar."
    },
    {
      "c": "eng12",
      "q": "What is the correct prefix to make the antonym of the adjective 'responsible'?",
      "a": "ir- (irresponsible)",
      "w": [
        "un-",
        "im-",
        "in-"
      ],
      "e": "Words starting with 'r' usually take the negative prefix 'ir-' (irregular, irrelevant)."
    },
    {
      "c": "eng13",
      "q": "Choose the sentence with correct subject-verb agreement:",
      "a": "Neither the teacher nor the students were present in the laboratory.",
      "w": [
        "Neither the teacher nor the students was present.",
        "Every students are here.",
        "Each of the books are good."
      ],
      "e": "With 'neither... nor', the verb agrees with the closer subject ('students' -> were)."
    },
    {
      "c": "eng14",
      "q": "What is the synonym of the academic word 'ubiquitous'?",
      "a": "Omnipresent / Found everywhere",
      "w": [
        "Extremely rare",
        "Dangerous",
        "Temporary"
      ],
      "e": "'Ubiquitous' means present, appearing, or found everywhere (e.g., 'Smartphones are ubiquitous')."
    },
    {
      "c": "eng15",
      "q": "Which modal verb indicates 100% logical certainty in the past?",
      "a": "Must have + V3 (e.g., 'He must have left his keys at home.')",
      "w": [
        "Could have + V3",
        "Should have + V3",
        "Might have + V3"
      ],
      "e": "'Must have + V3' expresses a strong logical deduction about a past event."
    },
    {
      "c": "eng16",
      "q": "What does the phrasal verb 'put up with' mean?",
      "a": "To tolerate or endure an unpleasant situation",
      "w": [
        "To build a wall",
        "To stay in a hotel",
        "To raise prices"
      ],
      "e": "'I cannot put up with this noise any longer' means I cannot tolerate it."
    },
    {
      "c": "eng17",
      "q": "Identify the correct reported speech: 'Where do you live?' she asked me.",
      "a": "She asked me where I lived.",
      "w": [
        "She asked me where did I live.",
        "She asked me where do I live.",
        "She asked me if I lived."
      ],
      "e": "In reported wh-questions, word order becomes affirmative statement order (Subject + Verb)."
    },
    {
      "c": "eng18",
      "q": "Which preposition correctly collocates with 'keen'?",
      "a": "on ('He is very keen on modern technologies.')",
      "w": [
        "in",
        "at",
        "about"
      ],
      "e": "The adjective 'keen' always takes the preposition 'on'."
    },
    {
      "c": "eng19",
      "q": "What is the comparative form of the irregular adjective 'bad'?",
      "a": "Worse (Superlative: Worst)",
      "w": [
        "Badder",
        "More bad",
        "Baddest"
      ],
      "e": "Bad -> Worse -> Worst is the irregular gradation sequence."
    },
    {
      "c": "eng20",
      "q": "Choose the correct sentence demonstrating the Subjunctive mood in English:",
      "a": "The doctor recommended that he take a complete week of rest.",
      "w": [
        "The doctor recommended that he takes rest.",
        "The doctor recommended him taking.",
        "The doctor recommended that he took."
      ],
      "e": "Mandative subjunctive uses the bare infinitive ('take', not 'takes') in 'that' clauses."
    },
    {
      "c": "eng21",
      "q": "What does the idiom 'bite the bullet' mean?",
      "a": "To face a difficult or unpleasant situation with courage",
      "w": [
        "To eat very fast",
        "To go hunting",
        "To commit a crime"
      ],
      "e": "'Bite the bullet' comes from soldiers enduring surgery without anesthesia."
    },
    {
      "c": "eng22",
      "q": "Which article is used before names of mountain ranges and rivers?",
      "a": "The definite article 'The' (e.g., The Alps, The Thames, The Nile)",
      "w": [
        "No article (Zero article)",
        "A",
        "An"
      ],
      "e": "Plural mountain chains and all rivers take the definite article 'the'."
    },
    {
      "c": "eng23",
      "q": "What is the meaning of the phrasal verb 'bring about'?",
      "a": "To cause something to happen or result in change",
      "w": [
        "To carry items",
        "To educate a child",
        "To visit someone"
      ],
      "e": "'The new reform brought about dramatic improvements in education.'"
    },
    {
      "c": "eng24",
      "q": "Which connective expresses strong concession or contrast?",
      "a": "Notwithstanding / Nevertheless",
      "w": [
        "Furthermore",
        "Consequently",
        "In addition"
      ],
      "e": "'Notwithstanding' and 'nevertheless' introduce contrasting or conceding ideas."
    },
    {
      "c": "eng25",
      "q": "Identify the sentence with a Split Infinitive (often avoided in strict traditional style):",
      "a": "To boldly go where no one has gone before.",
      "w": [
        "To go boldly into the room.",
        "Going boldly forward.",
        "Boldly to go."
      ],
      "e": "Placing an adverb between 'to' and the verb ('to boldly go') is a split infinitive."
    },
    {
      "c": "eng26",
      "q": "What is the antonym of the word 'diligent'?",
      "a": "Indolent / Lazy / Slothful",
      "w": [
        "Hardworking",
        "Clever",
        "Attentive"
      ],
      "e": "'Diligent' means hardworking and careful; its opposite is lazy or indolent."
    },
    {
      "c": "eng27",
      "q": "Choose the correct tag question: 'You rarely visit the library, _______?'",
      "a": "do you?",
      "w": [
        "don't you?",
        "did you?",
        "aren't you?"
      ],
      "e": "'Rarely' has a negative meaning, so the tag question must be affirmative ('do you?')."
    },
    {
      "c": "eng28",
      "q": "Which word is a homophone of 'bare'?",
      "a": "bear",
      "w": [
        "beer",
        "buyer",
        "bore"
      ],
      "e": "'Bare' and 'bear' have identical pronunciation /bɛər/ but different spelling and meaning."
    },
    {
      "c": "eng29",
      "q": "What part of speech is the word 'fast' in: 'He ran fast'?",
      "a": "Adverb",
      "w": [
        "Adjective",
        "Noun",
        "Conjunction"
      ],
      "e": "'Fast' modifies the action verb 'ran', so it functions as an adverb of manner."
    },
    {
      "c": "eng30",
      "q": "What does the Latin abbreviation 'e.g.' stand for?",
      "a": "Exempli gratia (For example)",
      "w": [
        "Et cetera",
        "Id est (That is)",
        "Nota bene"
      ],
      "e": "'e.g.' (exempli gratia) is used to introduce illustrative examples."
    },
    {
      "c": "eng31",
      "q": "Select the sentence with a correct non-defining relative clause (with commas):",
      "a": "My brother, who lives in London, is an aerospace engineer.",
      "w": [
        "My brother who lives in London is an engineer.",
        "My brother that lives in London is...",
        "My brother which lives in London..."
      ],
      "e": "Non-defining clauses add extra information and must be enclosed in commas; 'that' cannot be used."
    },
    {
      "c": "eng32",
      "q": "What is the CEFR C1 vocabulary word meaning 'to make something less severe'?",
      "a": "Mitigate (or Alleviate)",
      "w": [
        "Exacerbate",
        "Prolong",
        "Obliterate"
      ],
      "e": "'Mitigate' means making pain, risk, or a problem milder or less intense."
    }
  ],
  "rus-tili": [
    {
      "c": "ru1",
      "q": "В русском языке сколько гласных звуков и сколько гласных букв?",
      "a": "6 гласных звуков ([а], [о], [у], [ы], [и], [э]) и 10 гласных букв",
      "w": [
        "10 звуков и 10 букв",
        "6 звуков и 6 букв",
        "8 звуков и 10 букв"
      ],
      "e": "Буквы е, ё, ю, я обозначают два звука или указывают на мягкость согласного."
    },
    {
      "c": "ru2",
      "q": "Какой падеж отвечает на вопросы 'Кого? Чего?' и выражает принадлежность или отсутствие?",
      "a": "Родительный падеж (Genitive)",
      "w": [
        "Винительный падеж",
        "Дательный падеж",
        "Творительный падеж"
      ],
      "e": "Родительный падеж указывает на отсутствие (нет книги), часть целого или владельца."
    },
    {
      "c": "ru3",
      "q": "К какому спряжению относится глагол-исключение 'брить'?",
      "a": "К 1-му спряжению (бреет, бреют)",
      "w": [
        "Ко 2-му спряжению",
        "Разноспрягаемый",
        "Неспрягаемый"
      ],
      "e": "Глаголы на -ить 'брить' и 'стелить' являются исключениями и относятся к 1-му спряжению."
    },
    {
      "c": "ru4",
      "q": "Какие 11 глаголов относятся ко 2-му спряжению как исключения?",
      "a": "Гнать, дышать, держать, обидеть, слышать, видеть, ненавидеть, зависеть, терпеть, смотреть, вертеть",
      "w": [
        "Брить, стелить",
        "Читать, писать, петь",
        "Ждать, звать, брать"
      ],
      "e": "Эти 11 глаголов на -ать и -еть спрягаются по 2-му спряжению (гонит, дышит, видит)."
    },
    {
      "c": "ru5",
      "q": "Что обозначает деепричастие в русском языке?",
      "a": "Добавочное действие при основном действии (отвечает на вопросы 'Что делая? Что сделав?')",
      "w": [
        "Признак предмета по действию",
        "Самостоятельное главное действие",
        "Количество предметов"
      ],
      "e": "Деепричастие объединяет свойства глагола и наречия (например: читая, прочитав)."
    },
    {
      "c": "ru6",
      "q": "В каком слове пишется удвоенная 'НН'?",
      "a": "Деревянный (слово-исключение)",
      "w": [
        "Кожаный",
        "Песчаный",
        "Глиняный"
      ],
      "e": "Слова стеклянный, оловянный, деревянный являются исключениями с суффиксом -янн-."
    },
    {
      "c": "ru7",
      "q": "Какое окончание имеет существительное 1-го склонения в предложном падеже (о книге)?",
      "a": "-е",
      "w": [
        "-и",
        "-у",
        "-ом"
      ],
      "e": "Существительные 1-го склонения в предложном падеже оканчиваются на -е."
    },
    {
      "c": "ru8",
      "q": "Какое наклонение выражает пожелание, просьбу или совет ('Прочитай!', 'Будьте добры!')?",
      "a": "Повелительное наклонение (Императив)",
      "w": [
        "Изъявительное наклонение",
        "Условное наклонение",
        "Неопределенная форма"
      ],
      "e": "Повелительное наклонение выражает побуждение к действию."
    },
    {
      "c": "ru9",
      "q": "Укажите предложение с разделительным мягким знаком (Ь):",
      "a": "На ветках сидели воробьи.",
      "w": [
        "Шёл сильный дождь.",
        "Мальчик читал книгу.",
        "Огонь горел ярко."
      ],
      "e": "Разделительный 'ь' пишется в корне или после корня перед гласными е, ё, ю, я, и."
    },
    {
      "c": "ru10",
      "q": "Какое слово является синонимом к прилагательному 'колоссальный'?",
      "a": "Громадный, гигантский, огромный",
      "w": [
        "Крошечный",
        "Опасный",
        "Случайный"
      ],
      "e": "'Колоссальный' означает выдающийся по величине или масштабу."
    },
    {
      "c": "ru11",
      "q": "Какой разряд местоимений представляют слова 'себя', 'собой'?",
      "a": "Возвратное местоимение",
      "w": [
        "Личное местоимение",
        "Притяжательное",
        "Указательное"
      ],
      "e": "'Себя' указывает на направленность действия на само действующее лицо."
    },
    {
      "c": "ru12",
      "q": "Укажите страдательное причастие прошедшего времени:",
      "a": "Прочитанная (книга)",
      "w": [
        "Читающий",
        "Прочитавший",
        "Читаемый"
      ],
      "e": "Страдательные причастия имеют суффиксы -нн-, -енн-, -т- (решённый, сшитый)."
    },
    {
      "c": "ru13",
      "q": "Какое значение имеет фразеологизм 'бить баклуши'?",
      "a": "Бездельничать, тратить время попусту",
      "w": [
        "Много работать",
        "Колоть дрова",
        "Играть на музыкальном инструменте"
      ],
      "e": "Выражение возникло от легкой работы раскалывания чурок для деревянных ложек."
    },
    {
      "c": "ru14",
      "q": "В каких случаях в приставках пре- и при- пишется буква 'И'?",
      "a": "Приближение, присоединение, неполнота действия, близость",
      "w": [
        "Высшая степень качества (=очень)",
        "Близость к приставке пере-",
        "Всегда перед глухими"
      ],
      "e": "При- обозначает приближение (приехать), неполноту (приоткрыть), близость (приморский)."
    },
    {
      "c": "ru15",
      "q": "Какое существительное относится к среднему роду?",
      "a": "Повидло (оно)",
      "w": [
        "Тюль (он)",
        "Шампунь (он)",
        "Мозоль (она)"
      ],
      "e": "Слово 'повидло' среднего рода; 'тюль' и 'шампунь' — мужского, 'мозоль' — женского."
    },
    {
      "c": "ru16",
      "q": "Как называется неизменяемая самостоятельная часть речи, обозначающая признак действия?",
      "a": "Наречие (быстро, весело, утром)",
      "w": [
        "Прилагательное",
        "Предлог",
        "Междометие"
      ],
      "e": "Наречия не склоняются и не спрягаются, в предложении чаще всего являются обстоятельствами."
    },
    {
      "c": "ru17",
      "q": "Укажите правильное ударение в слове 'звонит':",
      "a": "ЗвонИт (на второй слог)",
      "w": [
        "ЗвОнит",
        "ЗвонИть только в инфинитиве",
        "Оба варианта верны"
      ],
      "e": "В литературной норме русского языка строго: звонИт, звонЯт, созвонИмся."
    },
    {
      "c": "ru18",
      "q": "Какая часть слова служит для образования новых однокоренных слов?",
      "a": "Суффикс и приставка",
      "w": [
        "Окончание",
        "Основа",
        "Интерфикс"
      ],
      "e": "Приставки и суффиксы образуют новые слова, а окончания — формы одного слова."
    },
    {
      "c": "ru19",
      "q": "Какое числительное является собирательным?",
      "a": "Трое (мальчиков)",
      "w": [
        "Три",
        "Третий",
        "Тридцать"
      ],
      "e": "Собирательные числительные (двое, трое, семеро) обозначают количество как единое целое."
    },
    {
      "c": "ru20",
      "q": "Что выражает междометие в русском языке?",
      "a": "Чувства, эмоции и побуждения, не называя их (Ах! Ой! Ура!)",
      "w": [
        "Предметы",
        "Действия",
        "Связь слов"
      ],
      "e": "Междометия не относятся ни к самостоятельным, ни к служебным частям речи."
    },
    {
      "c": "ru21",
      "q": "В каком предложении союз 'ЧТОБЫ' пишется слитно?",
      "a": "Я пришел, чтобы обсудить важный проект.",
      "w": [
        "Что бы такое почитать вечером?",
        "Что бы ни случилось, сохраняй спокойствие.",
        "Что бы мне надеть?"
      ],
      "e": "Подчинительный союз цели 'чтобы' пишется слитно, а местоимение с частицей 'что бы' — раздельно."
    },
    {
      "c": "ru22",
      "q": "Какое слово является антонимом к слову 'лаконичный'?",
      "a": "Многословный / Пространный",
      "w": [
        "Краткий",
        "Точный",
        "Вежливый"
      ],
      "e": "'Лаконичный' означает предельно краткий; антоним — многословный."
    },
    {
      "c": "ru23",
      "q": "Как называется предложение, в котором грамматическая основа состоит из одного главного члена — сказуемого, а подлежащее невозможно?",
      "a": "Безличное предложение (например: 'Смеркается.', 'Мне не спится.')",
      "w": [
        "Определенно-личное",
        "Неопределенно-личное",
        "Назывное"
      ],
      "e": "В безличных предложениях действие мыслится независимо от производителя."
    },
    {
      "c": "ru24",
      "q": "Укажите разносклоняемые существительные на -мя:",
      "a": "Время, имя, знамя, племя, бремя, семя, стремя, пламя, темя, вымя + путь",
      "w": [
        "Земля, вода, стена",
        "Дом, стол, окно",
        "Мать, дочь"
      ],
      "e": "Эти 10 существительных на -мя и слово 'путь' имеют особенности падежных окончаний."
    },
    {
      "c": "ru25",
      "q": "Какой знак препинания ставится между подлежащим и сказуемым, выраженными существительными в именительном падеже?",
      "a": "Тире (например: 'Книга — источник знаний.')",
      "w": [
        "Запятая",
        "Двоеточие",
        "Точка с запятой"
      ],
      "e": "Если подлежащее и сказуемое — существительные в Им. падеже, ставится тире."
    },
    {
      "c": "ru26",
      "q": "Какой корень с чередованием зависит от ударения?",
      "a": "гар- / гор- (под ударением А: загАр, без ударения О: загорЕлый)",
      "w": [
        "лаг- / лож-",
        "раст- / рос-",
        "бер- / бир-"
      ],
      "e": "В корнях гар/гор, клан/клон, твар/твор правописание гласной определяется ударением."
    },
    {
      "c": "ru27",
      "q": "Какое значение имеет фразеологизм 'сесть в калошу'?",
      "a": "Оказаться в неловком, глупом положении",
      "w": [
        "Купить новую обувь",
        "Быстро бегать",
        "Уехать в деревню"
      ],
      "e": "'Сесть в лужу / в калошу' — потерпеть конфуз или неудачу."
    },
    {
      "c": "ru28",
      "q": "В каком слове ударение падает на первый слог?",
      "a": "Торты (тОрты)",
      "w": [
        "Каталог",
        "Договор",
        "Жалюзи"
      ],
      "e": "Литературная норма: тОрты, шарфы, банты — ударение остается на корне."
    },
    {
      "c": "ru29",
      "q": "Какое наклонение образуется с помощью частицы 'бы' ('сделал бы')?",
      "a": "Условное (сослагательное) наклонение",
      "w": [
        "Изъявительное",
        "Повелительное",
        "Инфинитив"
      ],
      "e": "Условное наклонение выражает действие, возможное при определенных условиях."
    },
    {
      "c": "ru30",
      "q": "Укажите верное согласование с несклоняемым словом 'кофе':",
      "a": "Горячий черный кофе (мужской род)",
      "w": [
        "Горячее кофе",
        "Горячая кофе",
        "Белые кофе"
      ],
      "e": "Слово 'кофе' в строгом литературном стиле относится к мужскому роду."
    },
    {
      "c": "ru31",
      "q": "Что изучает орфоэпия?",
      "a": "Нормы правильного литературного произношения и ударения",
      "w": [
        "Правила письма",
        "Строение предложений",
        "Происхождение слов"
      ],
      "e": "Орфоэпия регулирует единообразие устной речи."
    },
    {
      "c": "ru32",
      "q": "Какой падеж отвечает на вопросы 'Кем? Чем?'?",
      "a": "Творительный падеж (Instrumental)",
      "w": [
        "Дательный",
        "Винительный",
        "Предложный"
      ],
      "e": "Творительный падеж указывает на орудие действия или совместность."
    }
  ],
  "nemis-tili": [
    {
      "c": "de1",
      "q": "Wie viele grammatische Fälle (Kasus) gibt es in der deutschen Sprache?",
      "a": "4 Fälle (Nominativ, Akkusativ, Dativ, Genitiv)",
      "w": [
        "6 Fälle",
        "3 Fälle",
        "5 Fälle"
      ],
      "e": "Das Deutsche unterscheidet vier Fälle zur Kennzeichnung der Satzglieder."
    },
    {
      "c": "de2",
      "q": "Welcher bestimmte Artikel gehört zum maskulinen Substantiv im Nominativ?",
      "a": "der (z.B. der Tisch, der Mann)",
      "w": [
        "die",
        "das",
        "den"
      ],
      "e": "Maskulin: der, Feminin: die, Neutral: das im Nominativ Singular."
    },
    {
      "c": "de3",
      "q": "Welche Endung hat der bestimmte Artikel im Akkusativ Maskulin?",
      "a": "den (z.B. 'Ich sehe den Hund.')",
      "w": [
        "dem",
        "des",
        "der"
      ],
      "e": "Nur der maskuline Artikel ändert sich im Akkusativ von 'der' zu 'den'."
    },
    {
      "c": "de4",
      "q": "Welche Präpositionen fordern immer den Dativ?",
      "a": "aus, bei, mit, nach, seit, von, zu",
      "w": [
        "durch, für, gegen, ohne, um",
        "an, auf, hinter, in",
        "während, trotz, wegen"
      ],
      "e": "Diese Präpositionen stehen immer und ausnahmslos mit dem Dativ."
    },
    {
      "c": "de5",
      "q": "Welche Präpositionen verlangen immer den Akkusativ?",
      "a": "bis, durch, für, gegen, ohne, um",
      "w": [
        "aus, bei, mit",
        "während, wegen",
        "seit, zu"
      ],
      "e": "Merksatz: 'Durch, für, gegen, ohne, um, bis' fordern stets den Akkusativ."
    },
    {
      "c": "de6",
      "q": "Wo steht das konjugierte Verb in einem deutschen Hauptsatz (Aussagesatz)?",
      "a": "An der zweiten Position (Position 2)",
      "w": [
        "Am Satzende",
        "An Position 1",
        "Immer an Position 3"
      ],
      "e": "Im deutschen Hauptsatz steht das finite Verb immer an zweiter Stelle (Verbzweitstellung)."
    },
    {
      "c": "de7",
      "q": "Wo steht das konjugierte Verb in einem Nebensatz (z.B. mit 'weil', 'dass', 'ob')?",
      "a": "Am Satzende (Letzte Position)",
      "w": [
        "An Position 2",
        "An Position 1",
        "Direkt nach dem Subjekt"
      ],
      "e": "Subjunktionen schicken das konjugierte Verb ans absolute Satzende."
    },
    {
      "c": "de8",
      "q": "Wie bildet man das Perfekt im Deutschen?",
      "a": "Hilfsverb 'haben' oder 'sein' + Partizip II am Satzende",
      "w": [
        "Nur Hilfsverb 'werden'",
        "Infinitiv + -te",
        "Modalverb + Partizip I"
      ],
      "e": "'Ich habe ein Buch gelesen' oder 'Er ist nach Berlin gefahren'."
    },
    {
      "c": "de9",
      "q": "Wann benutzt man das Hilfsverb 'sein' im Perfekt?",
      "a": "Bei Verben der Ortsveränderung, Zustandsänderung sowie 'sein' und 'bleiben'",
      "w": [
        "Bei allen transitiven Verben",
        "Bei reflexiven Verben",
        "Nur bei Modalverben"
      ],
      "e": "Bewegungsverben (gehen, fahren, fliegen) bilden das Perfekt mit 'sein'."
    },
    {
      "c": "de10",
      "q": "Welcher Konjunktiv drückt Höflichkeit, Wünsche und irreale Bedingungen aus?",
      "a": "Konjunktiv II (z.B. 'Ich hätte gern', 'Wenn ich reich wäre, würde ich reisen')",
      "w": [
        "Konjunktiv I",
        "Imperativ",
        "Indikativ Präteritum"
      ],
      "e": "Konjunktiv II wird für hypothetische Situationen und Wünsche verwendet."
    },
    {
      "c": "de11",
      "q": "Welches Modalverb drückt eine strenge Pflicht oder Notwendigkeit aus?",
      "a": "müssen ('Du musst die Hausaufgaben machen.')",
      "w": [
        "dürfen",
        "können",
        "mögen"
      ],
      "e": "'Müssen' drückt Zwang und Notwendigkeit aus; 'dürfen' bedeutet Erlaubnis."
    },
    {
      "c": "de12",
      "q": "Wie lautet die Höflichkeitsform für die Anrede im Deutschen?",
      "a": "Sie (immer großgeschrieben, Verb im Plural)",
      "w": [
        "du",
        "ihr",
        "man"
      ],
      "e": "'Sie' wird mit Fremden und im formellen Kontext stets großgeschrieben."
    },
    {
      "c": "de13",
      "q": "Welche Wechselpräpositionen können sowohl Dativ (Wo?) als auch Akkusativ (Wohin?) verlangen?",
      "a": "an, auf, hinter, in, neben, über, unter, vor, zwischen",
      "w": [
        "aus, bei, mit",
        "für, ohne, um",
        "trotz, wegen"
      ],
      "e": "Dativ antwortet auf 'Wo?', Akkusativ auf 'Wohin?' (z.B. 'Er legt das Buch auf den Tisch' vs 'Es liegt auf dem Tisch')."
    },
    {
      "c": "de14",
      "q": "Wie lautet das Präteritum des unregelmäßigen Verbs 'gehen'?",
      "a": "ging (Partizip II: gegangen)",
      "w": [
        "gehte",
        "gang",
        "gehtete"
      ],
      "e": "gehen - ging - gegangen ist die unregelmäßige Stammformenreihe."
    },
    {
      "c": "de15",
      "q": "Was bedeutet das deutsche Sprichwort 'Übung macht den Meister'?",
      "a": "Durch kontinuierliches Training erlangt man Meisterschaft und Können",
      "w": [
        "Meister brauchen keine Übung",
        "Sport ist ungesund",
        "Wer lernt, verliert"
      ],
      "e": "Es ermutigt Lernende, dass Beharrlichkeit zum Erfolg führt."
    },
    {
      "c": "de16",
      "q": "Welche Konjunktion leitet einen Kausalsatz (Begründung) mit Verb an zweiter Stelle ein?",
      "a": "denn ('Er bleibt zu Hause, denn er ist krank.')",
      "w": [
        "weil",
        "da",
        "obwohl"
      ],
      "e": "'Denn' ist eine nebenordnende Konjunktion und ändert die Satzstellung nicht."
    },
    {
      "c": "de17",
      "q": "Wie heißt das Gegenteil des Adjektivs 'schwierig'?",
      "a": "einfach / leicht",
      "w": [
        "kompliziert",
        "hart",
        "schwer"
      ],
      "e": "'Einfach' oder 'leicht' ist das Antonym von 'schwierig'."
    },
    {
      "c": "de18",
      "q": "Wie lautet der Plural von 'das Buch'?",
      "a": "die Bücher",
      "w": [
        "die Buchs",
        "die Buchen",
        "die Büchern"
      ],
      "e": "Das Substantiv 'Buch' bildet den Plural mit Umlaut und Endung -er."
    },
    {
      "c": "de19",
      "q": "Was drückt die Konstruktion 'um ... zu + Infinitiv' aus?",
      "a": "Eine Absicht oder ein Ziel (Finalsatz, antwortet auf 'Wozu?')",
      "w": [
        "Eine Zeitangabe",
        "Einen Widerspruch",
        "Eine Bedingung"
      ],
      "e": "'Ich lerne Deutsch, um in Deutschland zu studieren.'"
    },
    {
      "c": "de20",
      "q": "Wie lautet die Steigerung von 'gut'?",
      "a": "gut - besser - am besten",
      "w": [
        "gut - guter - am gutesten",
        "gut - mehr gut - meist gut",
        "gut - schön - herrlich"
      ],
      "e": "'Gut' gehört zu den unregelmäßig gesteigerten Adjektiven im Deutschen."
    },
    {
      "c": "de21",
      "q": "Welches Genus hat das Wort 'Mädchen' und warum?",
      "a": "Neutrum (das Mädchen), weil alle Diminutive auf -chen neutral sind",
      "w": [
        "Feminin (die Mädchen)",
        "Maskulin (der Mädchen)",
        "Plural"
      ],
      "e": "Verkleinerungssuffixe wie -chen und -lein machen jedes Wort sächlich (das)."
    },
    {
      "c": "de22",
      "q": "Was bedeutet die Redewendung 'Ich drücke dir die Daumen'?",
      "a": "Ich wünsche dir viel Glück und Erfolg!",
      "w": [
        "Ich bin wütend auf dich",
        "Ich schlage dich",
        "Ich habe Schmerzen"
      ],
      "e": "Es ist die deutsche Geste und Formulierung für Glückwünsche."
    },
    {
      "c": "de23",
      "q": "Wie bildet man das Passiv im Präsens?",
      "a": "Hilfsverb 'werden' + Partizip II ('Das Haus wird gebaut.')",
      "w": [
        "sein + Partizip II",
        "haben + Partizip II",
        "würde + Infinitiv"
      ],
      "e": "Das Vorgangspassiv wird mit Formen von 'werden' und dem Partizip II gebildet."
    },
    {
      "c": "de24",
      "q": "Wie sagt man 'auf Wiedersehen' auf informelle Art?",
      "a": "Tschüss! / Bis bald!",
      "w": [
        "Guten Morgen",
        "Sehr geehrte Damen und Herren",
        "Mahzeit"
      ],
      "e": "'Tschüss' ist der gängigste informelle Abschiedsgruß."
    },
    {
      "c": "de25",
      "q": "Welche Präposition steht mit Monaten und Jahreszeiten?",
      "a": "im (in dem: im Juli, im Sommer)",
      "w": [
        "am",
        "um",
        "an"
      ],
      "e": "Monate und Jahreszeiten verlangen die temporale Präposition 'im'."
    },
    {
      "c": "de26",
      "q": "Welche Präposition verwendet man mit Wochentagen und Tageszeiten?",
      "a": "am (an dem: am Montag, am Morgen)",
      "w": [
        "im",
        "um",
        "in"
      ],
      "e": "Wochentage und Tageszeiten stehen mit 'am' (Ausnahme: in der Nacht)."
    },
    {
      "c": "de27",
      "q": "Welche Präposition steht bei genauen Uhrzeiten?",
      "a": "um ('Der Zug fährt um 14:30 Uhr ab.')",
      "w": [
        "am",
        "im",
        "nach"
      ],
      "e": "Präzise Uhrzeiten fordern immer 'um'."
    },
    {
      "c": "de28",
      "q": "Wie lautet das Reflexivpronomen für 'er/sie/es/sie' im Dativ und Akkusativ?",
      "a": "sich (z.B. 'Er freut sich.')",
      "w": [
        "ihn",
        "ihm",
        "ihr"
      ],
      "e": "Das Reflexivpronomen der 3. Person ist immer 'sich'."
    },
    {
      "c": "de29",
      "q": "Was ist ein trennbares Verb im Deutschen?",
      "a": "Ein Verb mit abtrennbarem Präfix (z.B. aufstehen: 'Er steht um 7 Uhr auf')",
      "w": [
        "Ein unvollständiges Verb",
        "Ein Verb ohne Subjekt",
        "Ein Hilfsverb"
      ],
      "e": "Präfixe wie ab-, an-, auf-, aus-, ein-, mit- trennen sich im Präsens-Hauptsatz ab."
    },
    {
      "c": "de30",
      "q": "Welche Präfixe sind untrennbar und trennen sich niemals ab?",
      "a": "be-, ge-, ent-, emp-, er-, miss-, ver-, zer-",
      "w": [
        "auf-, aus-, ein-",
        "mit-, vor-, zu-",
        "nach-, bei-"
      ],
      "e": "Untrennbare Verben bilden ihr Partizip II auch ohne -ge- (z.B. verstehen - verstanden)."
    },
    {
      "c": "de31",
      "q": "Welche Frage leitet den Genitiv ein?",
      "a": "Wessen? ('Wessen Auto ist das?')",
      "w": [
        "Wer?",
        "Wen?",
        "Wem?"
      ],
      "e": "'Wessen' erfragt den Besitz oder die Zugehörigkeit im Genitiv."
    },
    {
      "c": "de32",
      "q": "Was bedeutet das Substantiv 'die Sehenswürdigkeit'?",
      "a": "Ein bedeutender, sehenswerter Ort oder Bauwerk für Touristen",
      "w": [
        "Eine Brille",
        "Die Sehkraft der Augen",
        "Ein Reiseführer"
      ],
      "e": "Sehenswürdigkeiten sind touristische Attraktionen (Brandenburger Tor, Kölner Dom etc.)."
    }
  ],
  "turk-tili": [
    {
      "c": "tr1",
      "q": "Türkçe dilbilgisinde 'Büyük Ünlü Uyumu' (Kalınlık-İncelik Uyumu) kuralı nedir?",
      "a": "Kelimenin ilk hecesi kalın ünlü (a, ı, o, u) ise diğer heceler kalın; ince (e, i, ö, ü) ise ince ünlülerle devam eder",
      "w": [
        "Tüm kelimelerin sessizle bitmesi",
        "Yalnızca yabancı kelimelerde aranması",
        "Fiillerin her zaman -yor eki alması"
      ],
      "e": "Türkçenin en temel ses uyumu kuralıdır (ev-ler, araba-lar)."
    },
    {
      "c": "tr2",
      "q": "Türkçede şimdiki zaman kipi hangi ek ile yapılır?",
      "a": "-yor eki (örnek: gidiyorum, okuyor)",
      "w": [
        "-di eki",
        "-ecek eki",
        "-ir eki"
      ],
      "e": "-yor eki şu anda gerçekleşmekte olan eylemleri bildirir."
    },
    {
      "c": "tr3",
      "q": "Gelecek zaman kipi eki hangisidir?",
      "a": "-acak / -ecek (örnek: geleceğim, yapacak)",
      "w": [
        "-mış",
        "-di",
        "-iyor"
      ],
      "e": "Gelecekte yapılacak işleri belirtmek için -acak/-ecek kullanılır."
    },
    {
      "c": "tr4",
      "q": "Görülen (bilinen) geçmiş zaman eki hangisidir?",
      "a": "-dı, -di, -du, -dü / -tı, -ti, -tu, -tü",
      "w": [
        "-mış, -miş",
        "-yor",
        "-ar, -er"
      ],
      "e": "Konuşanın bizzat tanık olduğu geçmiş zaman eylemleri -di ile ifade edilir."
    },
    {
      "c": "tr5",
      "q": "Duyulan (öğrenilen) geçmiş zaman eki hangisidir?",
      "a": "-mış, -miş, -muş, -müş (örnek: gelmiş, duymuş)",
      "w": [
        "-di",
        "-ecek",
        "-iyor"
      ],
      "e": "Başkalarından duyulan veya sonradan fark edilen eylemler -miş ile gösterilir."
    },
    {
      "c": "tr6",
      "q": "Türkçede sert sessizlerin yumuşaması kuralı (p, ç, t, k değişimi) ne zaman gerçekleşir?",
      "a": "Kelime ünlü ile başlayan bir ek aldığında (kitap -> kitabı, ağaç -> ağacı)",
      "w": [
        "Sessiz harfle başlayan ek geldiğinde",
        "Her zaman",
        "Yalnızca çoğul ekinde"
      ],
      "e": "P->B, Ç->C, T->D, K->Ğ/G şeklinde sedalanma meydana gelir."
    },
    {
      "c": "tr7",
      "q": "Türkçede bulunma durumu (Lokatif) eki hangisidir?",
      "a": "-da / -de / -ta / -te (Nerede? Kimde?)",
      "w": [
        "-dan / -den",
        "-a / -e",
        "-ı / -i"
      ],
      "e": "Eylemin veya nesnenin nerede bulunduğunu gösterir (evde, okulda, sokakta)."
    },
    {
      "c": "tr8",
      "q": "Ayrılma (çıkma) durumu (Ablatif) eki hangisidir?",
      "a": "-dan / -den / -tan / -ten (Nereden? Kimden?)",
      "w": [
        "-da / -de",
        "-e / -a",
        "-in / -ın"
      ],
      "e": "Bir yerden ayrılmayı veya başlangıç noktasını bildirir (evden, İstanbul'dan)."
    },
    {
      "c": "tr9",
      "q": "Türkçede soru eki hangisidir ve nasıl yazılır?",
      "a": "mı / mi / mu / mü — her zaman kelimeden ayrı yazılır",
      "w": [
        "Bitişik yazılır",
        "Sadece cümle başında olur",
        "Ek değil bağlaçtır"
      ],
      "e": "Soru eki kendinden önceki kelimeden ayrı, üzerine gelen kişi ekleriyle bitişik yazılır (Geldin mi?)."
    },
    {
      "c": "tr10",
      "q": "'Gözden düşmek' deyimi ne anlama gelir?",
      "a": "Değerini ve sevgisini yitirmek, itibarsızlaşmak",
      "w": [
        "Gözü bozulmak",
        "Gözlüğü düşürmek",
        "Ağlamak"
      ],
      "e": "Daha önce değer verilen birinin önemini kaybetmesi durumunda kullanılır."
    },
    {
      "c": "tr11",
      "q": "Türkçede çoğul eki hangisidir?",
      "a": "-lar / -ler",
      "w": [
        "-ler / -lik",
        "-sız / -siz",
        "-cı / -ci"
      ],
      "e": "Kalın ünlülerden sonra -lar, ince ünlülerden sonra -ler çoğul eki getirilir."
    },
    {
      "c": "tr12",
      "q": "Geniş zaman kipi (Aorist) eki hangisidir?",
      "a": "-r / -ar / -er / -ır / -ir (örnek: her gün çalışır)",
      "w": [
        "-yor",
        "-di",
        "-meli"
      ],
      "e": "Her zaman yapılan alışkanlıkları ve genel doğruları bildirir."
    },
    {
      "c": "tr13",
      "q": "Gereklilik kipi hangi ek ile yapılır?",
      "a": "-malı / -meli (örnek: gitmeliyim, okumalısın)",
      "w": [
        "-se / -sa",
        "-e / -a",
        "-sin"
      ],
      "e": "Bir işin yapılmasının zorunlu veya tavsiye olduğunu gösterir."
    },
    {
      "c": "tr14",
      "q": "Dilek-şart kipi eki hangisidir?",
      "a": "-se / -sa (örnek: gelse, baksak)",
      "w": [
        "-meli",
        "-di",
        "-iyor"
      ],
      "e": "Dilek, istek veya koşul anlamı katar."
    },
    {
      "c": "tr15",
      "q": "Yeterlilik fiili (kurallı birleşik fiil) hangi yardımcı fiille kurulur?",
      "a": "-ebilmek / -abilmek (örnek: yapabilirim, konuşabiliyor)",
      "w": [
        "-ivermek",
        "-ekalmak",
        "-eyazmak"
      ],
      "e": "Güç yetirme, yapabilme veya olasılık bildirir."
    },
    {
      "c": "tr16",
      "q": "Tezlik fiili hangi ek ile yapılır?",
      "a": "-ivermek (örnek: geliver, yapıverdi)",
      "w": [
        "-edurmak",
        "-ebilmek",
        "-eyazmak"
      ],
      "e": "Eylemin çabucak, birdenbire yapıldığını gösterir."
    },
    {
      "c": "tr17",
      "q": "Türkçede ad durum eklerinden belirtme durumu (Akkuzatif) eki hangisidir?",
      "a": "-ı / -i / -u / -ü (Kimi? Neyi?)",
      "w": [
        "-e / -a",
        "-de / -da",
        "-in"
      ],
      "e": "Belirli bir nesneyi göstermede kullanılır (kitabı okudum, kapıyı aç)."
    },
    {
      "c": "tr18",
      "q": "Türkçede yönelme durumu (Datif) eki hangisidir?",
      "a": "-e / -a (Nereye? Kime?)",
      "w": [
        "-de / -da",
        "-den / -dan",
        "-i"
      ],
      "e": "Yönelinen hedefi veya kişiyi gösterir (eve gidiyorum, okula)."
    },
    {
      "c": "tr19",
      "q": "'Ateş püskürmek' deyiminin anlamı nedir?",
      "a": "Çok öfkelenmek, aşırı derecede kızmak",
      "w": [
        "Yangın çıkarmak",
        "Yemek pişirmek",
        "Üşümek"
      ],
      "e": "Büyük bir hiddet ve öfkeyle sert konuşan kişiler için söylenir."
    },
    {
      "c": "tr20",
      "q": "Olumsuzluk eki fiillerde hangisidir?",
      "a": "-ma / -me (örnek: gelmedi, yapmıyor)",
      "w": [
        "-sız / -siz",
        "değil",
        "-maz"
      ],
      "e": "Fiil kök veya gövdelerine gelerek eylemin gerçekleşmediğini bildirir."
    },
    {
      "c": "tr21",
      "q": "İsim cümlelerinde olumsuzluk hangi kelimeyle yapılır?",
      "a": "değil (örnek: 'O öğretmen değil.')",
      "w": [
        "yok",
        "-me",
        "hiç"
      ],
      "e": "Ek fiilin olumsuzu 'değil' sözcüğü ile sağlanır."
    },
    {
      "c": "tr22",
      "q": "İyelik ekleri (sahiplik ekleri) 1. tekil şahıs için hangisidir?",
      "a": "-(ı)m / -(i)m (örnek: kitabım, evim)",
      "w": [
        "-ın / -in",
        "-ı / -i",
        "-miz"
      ],
      "e": "Nesnenin bana ait olduğunu belirtir."
    },
    {
      "c": "tr23",
      "q": "'Taş atmak' yerine kinayeli söz söylemek anlamındaki deyim hangisidir?",
      "a": "Laf çarpmak / Taş atmak",
      "w": [
        "Kulak kabartmak",
        "Göz yummak",
        "El çekmek"
      ],
      "e": "Birine üstü kapalı ve iğneleyici sözler söylemektir."
    },
    {
      "c": "tr24",
      "q": "Türkçe kelimelerin kökünde hangi harfler genellikle bulunmaz?",
      "a": "j, f, h (özellikle 'j' harfi öz Türkçe kelimelerde yoktur)",
      "w": [
        "a, e, i",
        "k, l, m",
        "t, s, r"
      ],
      "e": "J harfi barındıran kelimeler (jüri, jandarma) yabancı kökenlidir."
    },
    {
      "c": "tr25",
      "q": "Emir kipinde 2. tekil şahsın (Sen) eki nedir?",
      "a": "Eki yoktur, fiil kök halindedir (örnek: Gel! Oku! Yaz!)",
      "w": [
        "-sin",
        "-iniz",
        "-elim"
      ],
      "e": "Sen zamirine yönelik emirde yalın kök kullanılır."
    },
    {
      "c": "tr26",
      "q": "Kişi zamirleri Türkçede kaç tanedir?",
      "a": "6 tane (ben, sen, o, biz, siz, onlar)",
      "w": [
        "4 tane",
        "8 tane",
        "5 tane"
      ],
      "e": "Türkçede 3 tekil ve 3 çoğul şahıs zamiri bulunur."
    },
    {
      "c": "tr27",
      "q": "İşaret zamirleri hangileridir?",
      "a": "Bu, şu, o (yakın, biraz uzak ve uzak için)",
      "w": [
        "Ben, sen, o",
        "Kim, ne",
        "Kendi"
      ],
      "e": "Mesafe algısına göre bu (en yakın), şu (orta/işaret edilen) ve o kullanılır."
    },
    {
      "c": "tr28",
      "q": "Dönüşlülük zamiri hangisidir?",
      "a": "Kendi (kendim, kendin, kendisi)",
      "w": [
        "Birbiri",
        "Hepsi",
        "Kimse"
      ],
      "e": "'Kendi' özneyi pekiştirmek veya eylemin kendine döndüğünü anlatmak için kullanılır."
    },
    {
      "c": "tr29",
      "q": "'Etekleri zil çalmak' deyimi neyi ifade eder?",
      "a": "Çok sevinmek, aşırı derecede mutlu olmak",
      "w": [
        "Dans etmek",
        "Korkmak",
        "Üzülmek"
      ],
      "e": "Büyük bir sevinç ve heyecan duyulduğunda söylenir."
    },
    {
      "c": "tr30",
      "q": "Sıfat tamlamasında sıfat ile isim nerede durur?",
      "a": "Sıfat her zaman isimden önce gelir (örnek: güzel ev, kırmızı elma)",
      "w": [
        "İsimden sonra gelir",
        "Fark etmez",
        "Fiilden sonra gelir"
      ],
      "e": "Türkçe kural olarak niteleyici sözcük (sıfat) nitelenenden önce gelir."
    },
    {
      "c": "tr31",
      "q": "İkilemeler nasıl yazılır?",
      "a": "Ayrı yazılır ve aralarına virgül konmaz (örnek: yavaş yavaş, eğri büğrü)",
      "w": [
        "Tire ile birleştirilir",
        "Bitişik yazılır",
        "Noktalı virgülle ayrılır"
      ],
      "e": "Türk Dil Kurumu kuralına göre ikilemeler arasına noktalama işareti konulmaz."
    },
    {
      "c": "tr32",
      "q": "Türkçede 'de/da' bağlacı nasıl yazılır?",
      "a": "Kelimeden ayrı yazılır ve asla 'te/ta' biçiminde yazılmaz",
      "w": [
        "Bitişik yazılır",
        "Her zaman kesme işaretiyle ayrılır",
        "Yalnızca cümle başında olur"
      ],
      "e": "Bağlaç olan de/da cümleden çıkarıldığında anlam tamamen bozulmaz ve her zaman ayrı yazılır."
    }
  ],
  "tojik-tili": [
    {
      "c": "tj1",
      "q": "Дар забони тоҷикӣ пайванди байни исм ва сифат ё ду исм чӣ ном дорад?",
      "a": "Изофа (бо ҳарфи -и талаффуз мешавад, масалан: китоби хуб)",
      "w": [
        "Падеж",
        "Суффикс",
        "Артикл"
      ],
      "e": "Изофа дар забонҳои эронӣ воситаи асосии пайвасти муайянкунанда ба муайяншаванда мебошад."
    },
    {
      "c": "tj2",
      "q": "Замони ҳозираи феъл дар забони тоҷикӣ бо кадом пасвандҳо ва пешвандҳо сохта мешавад?",
      "a": "Пешванди ме- + асоси замони ҳозира + бандакҳои шахсӣ (мехонам, меравӣ)",
      "w": [
        "Танҳо феъли ёвар",
        "Пасванди -да",
        "Танҳо реша"
      ],
      "e": "Пешванди 'ме-' нишонаи асосии давомдорӣ ва замони ҳозира мебошад."
    },
    {
      "c": "tj3",
      "q": "Ҷонишинҳои шахсӣ дар забони тоҷикӣ кадомҳоянд?",
      "a": "Ман, ту, ӯ (вай), мо, шумо, онҳо",
      "w": [
        "Ин, он, ҳамин",
        "Худ, хеш",
        "Кас, касе"
      ],
      "e": "Шаш ҷонишини шахсӣ барои ифодаи мутакаллим, мухотаб ва ғоиб хизмат мекунанд."
    },
    {
      "c": "tj4",
      "q": "Барои ифодаи ҷамъбандӣ дар забони адабии тоҷикӣ кадом пасвандҳо истифода мешаванд?",
      "a": "-ҳо (барои ҳамаи исмҳо) ва -он / -гон / -ён (барои ҷондорон)",
      "w": [
        "-лар",
        "-s / -es",
        "-ҳо танҳо барои одамон"
      ],
      "e": "Барои мисол: дарахтҳо, мардон, паррандагон, донишҷӯён."
    },
    {
      "c": "tj5",
      "q": "Замони гузаштаи нақлӣ чӣ тавр сохта мешавад?",
      "a": "Сифати феълии гузашта (-а) + бандакҳои хабарӣ (рафтаам, хондаӣ, омадааст)",
      "w": [
        "Танҳо реша + ме-",
        "Хоҳам рафт",
        "Мерафтам"
      ],
      "e": "Гузаштаи нақлӣ воқеаеро ифода мекунад, ки гӯянда шоҳиди бевоситаи он набудааст."
    },
    {
      "c": "tj6",
      "q": "Пасванди -ро дар забони тоҷикӣ кадом вазифаро иҷро мекунад?",
      "a": "Аломати пуркунандаи бевосита (падежи винительный, масалан: 'китобро хондам')",
      "w": [
        "Аломати савол",
        "Аломати ҷамъ",
        "Аломати сифат"
      ],
      "e": "Пасванди -ро муайянии пуркунандаро дар ҷумла нишон медиҳад."
    },
    {
      "c": "tj7",
      "q": "Пешояндҳои содаи аслӣ дар забони тоҷикӣ кадомҳоянд?",
      "a": "Ба, бо, бе, дар, аз, барои, то",
      "w": [
        "Ман, ту, вай",
        "Ин, он",
        "Ва, аммо, лекин"
      ],
      "e": "Пешояндҳо муносибати байни калимаҳоро дар ибора ва ҷумла танзим мекунанд."
    },
    {
      "c": "tj8",
      "q": "Шакли инкории феълҳо чӣ гуна сохта мешавад?",
      "a": "Бо пешванди на- ё ма- (нарафт, нахон, нарав)",
      "w": [
        "Бо калимаи 'нест'",
        "Бо пасванди -сиз",
        "Тағйир намеёбад"
      ],
      "e": "Пешванди на- барои хабар ва ма- барои сиғаи амр истифода мешавад."
    },
    {
      "c": "tj9",
      "q": "Феъли ояндаи муайян бо кадом ёридиҳанда сохта мешавад?",
      "a": "Бо ёрии феъли 'хостан' (хоҳам рафт, хоҳӣ хонд)",
      "w": [
        "Меравам",
        "Рафта истодаам",
        "Рафта будам"
      ],
      "e": "Хоҳам, хоҳӣ, хоҳад + асоси гузашта замони ояндаи муайянро месозад."
    },
    {
      "c": "tj10",
      "q": "Калимаи 'донишманд' аз рӯи сохт кадом навъи калима аст?",
      "a": "Сохта (калимаи сода + пасванди исмсози -манд)",
      "w": [
        "Сода",
        "Мураккаб",
        "Таркибӣ"
      ],
      "e": "Пасванди -манд соҳибиятро нишон медиҳад (донишманд, ҳунарманд)."
    },
    {
      "c": "tj11",
      "q": "Зарфҳои замон дар забони тоҷикӣ кадомҳоянд?",
      "a": "Дирӯз, имрӯз, пагоҳ, ҳоло, ҳамеша, ҳанӯз",
      "w": [
        "Ин ҷо, он ҷо, боло",
        "Зебо, хуб, оҳиста",
        "Якум, дуюм"
      ],
      "e": "Зарфи замон вақти иҷрои амалро нишон медиҳад."
    },
    {
      "c": "tj12",
      "q": "Муродифи (синоними) калимаи 'зебо' кадом аст?",
      "a": "Хушрӯй, қашанғ, барно, дилкаш",
      "w": [
        "Зишт",
        "Бузург",
        "Оҳиста"
      ],
      "e": "Ин калимаҳо дорои маънои наздик буда, ҳусну назокатро ифода мекунанд."
    },
    {
      "c": "tj13",
      "q": "Антоними калимаи 'дӯст' кадом аст?",
      "a": "Душман",
      "w": [
        "Рафиқ",
        "Ошно",
        "Ҳамсоя"
      ],
      "e": "Дӯст ва душман маънои муқобил доранд."
    },
    {
      "c": "tj14",
      "q": "Шоири бузург ва асосгузори адабиёти классикии тоҷику форс кист?",
      "a": "Абӯабдуллоҳ Рӯдакӣ (устоди шоирон)",
      "w": [
        "Фирдавсӣ",
        "Саъдӣ",
        "Ҳофиз"
      ],
      "e": "Рӯдакӣ дар асри X асоси шеъри оламгири форсӣ-тоҷикиро гузоштааст."
    },
    {
      "c": "tj15",
      "q": "Ҳамосаи миллии 'Шоҳнома' аз ҷониби кадом шоири бузург навишта шудааст?",
      "a": "Абулқосим Фирдавсӣ",
      "w": [
        "Низомӣ Ганҷавӣ",
        "Ҷомӣ",
        "Умар Хайём"
      ],
      "e": "Фирдавсӣ дар тӯли 30 сол таъриху корномаҳои миллиро дар 60 ҳазор байт абадӣ гардонд."
    },
    {
      "c": "tj16",
      "q": "Маънои ибораи рехтаи (фразеологизми) 'дил бастан' чист?",
      "a": "Ошиқ шудан, меҳр мондан ба касе ё чизе",
      "w": [
        "Бемор шудан",
        "Тарсидан",
        "Гурехтан"
      ],
      "e": "Дил бастан маънои дӯст доштан ва дилбастагӣ пайдо карданро дорад."
    },
    {
      "c": "tj17",
      "q": "Дар ҷумла мубтадо ва хабар кадом вазифаро иҷро мекунанд?",
      "a": "Сараъзоҳои ҷумла (асоси грамматикӣ)",
      "w": [
        "Аъзоҳои пайрав",
        "Хитоб",
        "Нидо"
      ],
      "e": "Мубтадо ва хабар рукнҳои асосии ҷумла мебошанд."
    },
    {
      "c": "tj18",
      "q": "Дараҷаҳои сифат дар забони тоҷикӣ чанданд?",
      "a": "3 дараҷа: Оддӣ, Олӣ (-тар), Қиёсӣ/Аъло (-тарин)",
      "w": [
        "2 дараҷа",
        "4 дараҷа",
        "5 дараҷа"
      ],
      "e": "Масалан: калон — калонтар — калонтарин."
    },
    {
      "c": "tj19",
      "q": "Шумораҳои тартибӣ бо кадом пасванд сохта мешаванд?",
      "a": "-ум ва -умин (якум, дуюм, сеюмин)",
      "w": [
        "-то",
        "-бора",
        "-гон"
      ],
      "e": "Шумораи тартибӣ мавқеъ ва навбати ашёро дар саф нишон медиҳад."
    },
    {
      "c": "tj20",
      "q": "Сиғаи амри феъл барои шахси дуюми танҳо (ту) чӣ гуна аст?",
      "a": "Асоси замони ҳозира (масалан: бирав!, бихон!)",
      "w": [
        "Рафтед",
        "Мехонад",
        "Хондааст"
      ],
      "e": "Пешванди би- метавонад дар сиғаи амр истифода шавад."
    },
    {
      "c": "tj21",
      "q": "Пайвандакҳои пайиҳам кадомҳоянд?",
      "a": "Ва, ҳам, ҳам... ҳам, на... на",
      "w": [
        "Аммо, вале, лекин",
        "Чунки, зеро",
        "Агар, гарчанде"
      ],
      "e": "Ин пайвандакҳо ҷумлаҳо ва аъзоҳои чидаро бо ҳам мепайванданд."
    },
    {
      "c": "tj22",
      "q": "Пайвандакҳои хилофӣ кадомҳоянд?",
      "a": "Аммо, вале, лекин, балки",
      "w": [
        "Ва, ҳам",
        "Ё, ё ин ки",
        "Зеро"
      ],
      "e": "Мафҳумҳои зидду хилофро дар ҷумла ифода мекунанд."
    },
    {
      "c": "tj23",
      "q": "Китоби 'Гулистон' ва 'Бӯстон' асари кадом шоири бузург аст?",
      "a": "Саъдии Шерозӣ",
      "w": [
        "Ҳофиз",
        "Ҷалолиддини Румӣ",
        "Бедил"
      ],
      "e": "Шайх Саъдӣ устоди беназири панде навиштан ва насри олоста мебошад."
    },
    {
      "c": "tj24",
      "q": "Ғазалиёти лирикии безавол бо номи 'Девон' ба қалами кадом шоир тааллуқ дорад?",
      "a": "Ҳофизи Шерозӣ (Лисонулғайб)",
      "w": [
        "Хайём",
        "Аттор",
        "Соиб"
      ],
      "e": "Ҳофиз қуллаи баланди ғазалсароии адабиёти Шарқ ба шумор меравад."
    },
    {
      "c": "tj25",
      "q": "Маснавии Маънавӣ асари безаволи кист?",
      "a": "Мавлоно Ҷалолуддини Балхии Румӣ",
      "w": [
        "Саноӣ",
        "Ҷомӣ",
        "Аттор"
      ],
      "e": "Ин асар ҳамчун қомуси ирфон ва ҳикмати орифона шинохта шудааст."
    },
    {
      "c": "tj26",
      "q": "Пасванди -гар ва -гор кадом маъноро месозанд?",
      "a": "Исми шахс ва касбу ҳунар (коргар, омӯзгор, соҳибкор)",
      "w": [
        "Макон",
        "Замон",
        "Сифат"
      ],
      "e": "Шахси иҷрокунандаи амал ё касбро месозад."
    },
    {
      "c": "tj27",
      "q": "Калимаи 'гулзор' аз кадом реша ва пасванд сохта шудааст?",
      "a": "Решаи 'гул' + пасванди маконсози '-зор'",
      "w": [
        "Гул + бор",
        "Гул + ман",
        "Сода аст"
      ],
      "e": "Пасванди -зор ҷои фаровонии ашёро нишон медиҳад (лолазор, сабзазор)."
    },
    {
      "c": "tj28",
      "q": "Ифодаи салом ва ҳолпурсӣ дар забони тоҷикӣ чист?",
      "a": "Ассалому алайкум! Аҳволатон чӣ тавр? Саломатиатон хуб аст?",
      "w": [
        "Хайр",
        "Ташаккур",
        "Лутфан"
      ],
      "e": "Одоби муоширати миллии тоҷикон бо чунин ҷумлаҳо оғоз меёбад."
    },
    {
      "c": "tj29",
      "q": "Ҳарфи 'Ҷ' дар алифбои тоҷикӣ кадом овозро ифода мекунад?",
      "a": "Овози ҷарангдори [j] (мисли 'ҷон', 'ҷавон')",
      "w": [
        "Овози [sh]",
        "Овози [ch]",
        "Овози [z]"
      ],
      "e": "Дар алифбои тоҷикии кириллӣ ҳарфи Ҷ ҷойгоҳи махсус дорад."
    },
    {
      "c": "tj30",
      "q": "Калимаи 'Тоҷикистон' аз рӯи маънои пасванд чист?",
      "a": "Сарзамини тоҷикон (-истон маънои макон ва кишвар дорад)",
      "w": [
        "Шаҳр",
        "Кӯҳсор",
        "Қалъа"
      ],
      "e": "Пасванди -истон дар номи кишварҳо сермаҳсул аст (Ӯзбекистон, Қазоқистон)."
    },
    {
      "c": "tj31",
      "q": "Сардафтари адабиёти нави тоҷик ва Қаҳрамони Тоҷикистон кист?",
      "a": "Садриддин Айнӣ (муаллифи 'Ёддоштҳо' ва 'Марги судхӯр')",
      "w": [
        "Мирзо Турсунзода",
        "Лоиқ Шералӣ",
        "Бозор Собир"
      ],
      "e": "Устод Айнӣ поягузори насру адабиёти навини асри XX ба шумор меравад."
    },
    {
      "c": "tj32",
      "q": "Шоири маҳбуби миллати тоҷик, муаллифи шеъри 'Модар' кист?",
      "a": "Лоиқ Шералӣ",
      "w": [
        "Турсунзода",
        "Гулрухсор",
        "Фарzona"
      ],
      "e": "Лоиқ Шералӣ бо шеърҳои самимии худ дар васфи модар ва забон шуҳрат дорад."
    }
  ],
  "arab-tili": [
    {
      "c": "ar1",
      "q": "Arab tili alifbosida nechta harf mavjud va ular qaysi tomondan yoziladi?",
      "a": "28 ta harf, o'ngdan chapga qarab yoziladi",
      "w": [
        "26 ta harf, chapdan o'ngga",
        "32 ta harf, o'ngdan chapga",
        "30 ta harf"
      ],
      "e": "Arab yozuvi xattotlik an'analariga ko'ra o'ngdan chapga qarab bitiladi."
    },
    {
      "c": "ar2",
      "q": "Arab tilida qisqa unlilarni ifodalovchi belgilar nima deb ataladi?",
      "a": "Harakatlar (Fatha - a, Kasra - i, Damma - u)",
      "w": [
        "Tanvin",
        "Tashdid",
        "Sukunt"
      ],
      "e": "Harakatlar harf ustida yoki ostida qo'yiladigan yordamchi fonetik belgilar."
    },
    {
      "c": "ar3",
      "q": "Arab tilida so'z turkumlari (أقسام الكلام) nechta guruhga bo'linadi?",
      "a": "3 ta: Ism (اسم), Fe'l (فعل) va Harf/Yuklama (حرف)",
      "w": [
        "6 ta",
        "4 ta",
        "8 ta"
      ],
      "e": "Klassik arab tili grammatikasida barcha so'zlar ushbu 3 turga bo'linadi."
    },
    {
      "c": "ar4",
      "q": "Harf ustidagi to'lqinsimon yoki qosh shaklidagi harfni ikkilantiruvchi belgi nima?",
      "a": "Tashdid (shadda — ّ)",
      "w": [
        "Sukun (ْ)",
        "Hamza (ء)",
        "Madda (آ)"
      ],
      "e": "Tashdid undosh tovushning ikkitaligini (geminatsiyasini) bildiradi."
    },
    {
      "c": "ar5",
      "q": "So'z oxiridagi noaniqlikni bildiruvchi ikki karra harakat nima deyiladi?",
      "a": "Tanvin (Tanvin fatha, tanvin damma, tanvin kasra: -un, -an, -in)",
      "w": [
        "Idg'om",
        "Iqlab",
        "Ixfo"
      ],
      "e": "Tanvin faqat ismlarga xos bo'lib, noaniq holat belgisi hisoblanadi."
    },
    {
      "c": "ar6",
      "q": "Aniqlik artikli (ال - al) qo'shilganda qaysi harflarda 'l' o'qilmay keyingi harf ikkilanadi?",
      "a": "Shamsiy harflar (14 ta: ت, ث, د, ذ, ر, ز, س, ش, ص, ض, ط, ظ, ل, ن)",
      "w": [
        "Qamariy harflar",
        "Cho'ziq unlilar",
        "Halqum harflari"
      ],
      "e": "Shamsiy harflarda l harfi assimilyatsiyaga uchrab tashdidlanadi (ash-shams)."
    },
    {
      "c": "ar7",
      "q": "Arab tilida son kategoriyasi nechta shaklga ega?",
      "a": "3 ta: Birlik (Mufrad), Ikkilik (Musanno) va Ko'plik (Jam')",
      "w": [
        "2 ta (Birlik va Ko'plik)",
        "4 ta",
        "Faqat birlik"
      ],
      "e": "Arab tili o'ziga xos ikkilik (musanno: -ani, -ayni) soniga ega."
    },
    {
      "c": "ar8",
      "q": "Ko'plikning sinuvchi ko'pligi (جمع التكسير) nima?",
      "a": "So'zning ichki tuzilishi va qolipi o'zgarishi orqali yasaladigan ko'plik (masalan: كتاب -> كتب)",
      "w": [
        "Faqat oxiriga qo'shimcha qo'shiladigan",
        "Noto'g'ri ko'plik",
        "Qo'shilmaydigan"
      ],
      "e": "Sinuvchi ko'plik arab tili lug'at boyligining eng serqirra xususiyatidir."
    },
    {
      "c": "ar9",
      "q": "Arab tilida fe'llarning asosiy o'zagi necha o'zak harfdan iborat bo'ladi?",
      "a": "Odatda 3 ta o'zak undoshdan (Sulasiy mujarrad: ف-ع-ل)",
      "w": [
        "4 ta",
        "2 ta",
        "5 ta"
      ],
      "e": "Uch o'zakli tizim arab morfologiyasining poydevori hisoblanadi."
    },
    {
      "c": "ar10",
      "q": "Arab tilida kelishik (إعراب) nechta holatga ega?",
      "a": "3 ta: Raf' (Bosh, -u), Nasb (Tushum, -a), Jarr (Qaratqich, -i)",
      "w": [
        "6 ta",
        "4 ta",
        "2 ta"
      ],
      "e": "Ismlar uch xil erob holatida bo'ladi: marfu', mansub, majrur."
    },
    {
      "c": "ar11",
      "q": "Arab tilida 'Kitob' so'zining ikkilik shakli qanday bo'ladi?",
      "a": "Kitobani (كتابان) yoki Kitobayni (كتابين)",
      "w": [
        "Kutub",
        "Kitobat",
        "Kutubun"
      ],
      "e": "Ikkilik shakl oxiriga -ani (raf' holatida) yoki -ayni (nasb/jarr) qo'shib yasaladi."
    },
    {
      "c": "ar12",
      "q": "Izofa (الإضافة) birikmasi nima?",
      "a": "Ikki ismning qaratqich munosabatida birikishi (Mudof va Mudofun ilayh: masalan kitobu Zaydin)",
      "w": [
        "Sifat va ot birikmasi",
        "Fe'l va ravish",
        "Sodda gap"
      ],
      "e": "Mudof aniqlik artikli va tanvin olmaydi, mudofun ilayh esa jarr holatida bo'ladi."
    },
    {
      "c": "ar13",
      "q": "Arab tilida jins kategoriyasi nechta?",
      "a": "2 ta: Muzakkar (Erkak jinsi) va Muannas (Ayol jinsi)",
      "w": [
        "3 ta (Neytral ham bor)",
        "1 ta",
        "Jins kategoriyasi yo'q"
      ],
      "e": "Ayol jinsi ko'pincha so'z oxiridagi 'To marbuta' (ة) bilan belgilanadi."
    },
    {
      "c": "ar14",
      "q": "O'tgan zamon fe'li (الفعل الماضي) ning uchinchi shaxs birlik muzakkar shakli qanday?",
      "a": "Fa'ala (فَعَلَ - u bajardi)",
      "w": [
        "Yaf'alu",
        "If'al",
        "Foil"
      ],
      "e": "Fa'ala arab lug'atlarida barcha fe'llarning boshlang'ich qomusi hisoblanadi."
    },
    {
      "c": "ar15",
      "q": "Hozirgi-kelasi zamon fe'li nima deyiladi?",
      "a": "Fe'lul Muzore' (الفعل المضارع — yaf'alu)",
      "w": [
        "Fe'lul Moziy",
        "Fe'lul Amr",
        "Masdar"
      ],
      "e": "Muzore' fe'li oldiga 'sa-' yoki 'sawfa' qo'shilsa sof kelasi zamonga aylanadi."
    },
    {
      "c": "ar16",
      "q": "Buyruq fe'li (فعل الأمر) qanday ataladi?",
      "a": "Amr fe'li (masalan: إقرأ - Iqro' / O'qi!)",
      "w": [
        "Nahy fe'li",
        "Moziy",
        "Mubtado"
      ],
      "e": "Amr buyruq, talab yoki iltimosni ifodalaydi."
    },
    {
      "c": "ar17",
      "q": "Arab tilida gapning asosiy ikki turi qaysilar?",
      "a": "Jumla ismiyya (Ism bilan boshlanuvchi) va Jumla fe'liyya (Fe'l bilan boshlanuvchi)",
      "w": [
        "Sodda va qo'shma",
        "Ergashgan va bog'langan",
        "So'roq va undov"
      ],
      "e": "Ism bilan boshlangan gap Mubtado va Xabardan, fe'l bilan boshlangan gap Fe'l, Foil va Maf'uldan iborat bo'ladi."
    },
    {
      "c": "ar18",
      "q": "Halqum (tomoq) harflari nechta?",
      "a": "6 ta: Hamza (ء), Haa (هـ), Ayn (ع), Haa (ح), G'oyn (غ), Xoo (خ)",
      "w": [
        "4 ta",
        "8 ta",
        "2 ta"
      ],
      "e": "Tajvid va fonetikada bu harflar tomoqning turli chuqurliklaridan talaffuz qilinadi."
    },
    {
      "c": "ar19",
      "q": "Arab tilida 'Men talabaman' jumlasi qanday aytiladi?",
      "a": "Ana tolibun (أنا طالبٌ)",
      "w": [
        "Anta tolibun",
        "Huwa tolibun",
        "Nahnu tullabun"
      ],
      "e": "'Ana' — men, 'tolibun' — talaba (mubtado va xabar)."
    },
    {
      "c": "ar20",
      "q": "'Shukran jazilan' (شكراً جزيلاً) iborasining ma'nosi nima?",
      "a": "Katta rahmat / Tashakkur!",
      "w": [
        "Salom",
        "Xayr",
        "Kechirasiz"
      ],
      "e": "Minnatdorchilik bildirishning eng mashhur iborasi."
    },
    {
      "c": "ar21",
      "q": "Kishilik olmoshlarida 1-shaxs ko'pligi (Biz) qaysi olmosh?",
      "a": "Nahnu (نحن)",
      "w": [
        "Hum",
        "Antum",
        "Hunna"
      ],
      "e": "'Nahnu' ham erkak, ham ayollar jamoasi uchun 'Biz' ma'nosida ishlatiladi."
    },
    {
      "c": "ar22",
      "q": "Arab tilida fe'ldan yasalgan harakat nomi (infinitiv/otlashgan shakl) nima deyiladi?",
      "a": "Masdar (المصدر)",
      "w": [
        "Ismi foil",
        "Ismi maf'ul",
        "Sifat"
      ],
      "e": "Masdar zamon va shaxsga bog'lanmagan sof ish-harakat tushunchasidir (masalan: qiroat, kitobat)."
    },
    {
      "c": "ar23",
      "q": "Ish-harakatni bajaruvchi shaxsni bildiruvchi ism nima?",
      "a": "Ismi Foil (اسم الفاعل - masalan: katib / yozuvchi)",
      "w": [
        "Ismi maf'ul",
        "Ismi zamon",
        "Ismi makon"
      ],
      "e": "Ismi foil fe'l subyektini sifatlaydi."
    },
    {
      "c": "ar24",
      "q": "Harakat obyektini (bajarilgan narsani) bildiruvchi ism nima?",
      "a": "Ismi Maf'ul (اسم المفعول - masalan: maktub / yozilgan)",
      "w": [
        "Ismi foil",
        "Ismi ola",
        "Masdar"
      ],
      "e": "Ismi maf'ul passiv ta'sir ostidagi narsani bildiradi."
    },
    {
      "c": "ar25",
      "q": "Qur'oni Karim qaysi tilda nozil qilingan?",
      "a": "Klassik fusha arab tilida (العربية الفصحى)",
      "w": [
        "Suriyalik lahjasida",
        "Misr lahjasida",
        "Qadimgi oromiy"
      ],
      "e": "Fusha adabiy tili butun arab dunyosining yagona oliy adabiy standartidir."
    },
    {
      "c": "ar26",
      "q": "Arab tilida 'Yo'q' so'zi qanday aytiladi?",
      "a": "Laa (لا)",
      "w": [
        "Na'am",
        "Ayna",
        "Kayfa"
      ],
      "e": "'Laa' inkor so'zi bo'lib, 'Na'am' esa 'Ha' demakdir."
    },
    {
      "c": "ar27",
      "q": "So'roq olmoshlaridan 'Qayerda?' so'zi arab tilida qaysi?",
      "a": "Ayna? (أين؟)",
      "w": [
        "Mata?",
        "Man?",
        "Maza?"
      ],
      "e": "'Ayna' makonni, 'Mata' vaqtni, 'Man' shaxsni so'raydi."
    },
    {
      "c": "ar28",
      "q": "Arab tilida 'Assalomu alaykum' salomlashuvining ma'nosi nima?",
      "a": "Sizga tinchlik-omonlik bo'lsin!",
      "w": [
        "Xayrli tong",
        "Kuningiz yaxshi o'tsin",
        "Xush kelibsiz"
      ],
      "e": "Sharq va islom dunyosining eng ezgu an'anaviy salomi."
    },
    {
      "c": "ar29",
      "q": "Arab tilida 'Sabahul xoyr' (صباح الخير) nimani bildiradi?",
      "a": "Xayrli tong!",
      "w": [
        "Xayrli oqshom",
        "Xayrli tun",
        "Rahmat"
      ],
      "e": "Tonggi salomlashuv bo'lib, unga 'Sabahun nur' deb javob qaytariladi."
    },
    {
      "c": "ar30",
      "q": "Arab tilida ko'makchi / predloglar (حروف الجر) ismlarni qaysi holatga keltiradi?",
      "a": "Jarr holatiga (Majrur — kasrali qiladi, masalan: fi-l-bayti)",
      "w": [
        "Raf' holatiga",
        "Nasb holatiga",
        "Sukunli qiladi"
      ],
      "e": "Min, ila, 'an, 'ala, fi, bi, li, ka kabi jarr harflari ismni kasra bilan tugatadi."
    },
    {
      "c": "ar31",
      "q": "Boshlang'ich arab xattotligining geometrik va qadimiy uslubi qaysi?",
      "a": "Kufiy xati (الخط الكوفي)",
      "w": [
        "Nasx",
        "Suls",
        "Ruq'a"
      ],
      "e": "Kufiy xati to'g'ri burchakli, monumental va qadimiy me'moriy yozuv turi hisoblanadi."
    },
    {
      "c": "ar32",
      "q": "Zamonaviy matbaa va kitoblarda eng keng qo'llaniladigan ravon xat turi qaysi?",
      "a": "Nasx xati (خط النسخ)",
      "w": [
        "Kufiy",
        "Devoniy",
        "Ta'liq"
      ],
      "e": "Nasx yozilishi va o'qilishi eng qulay bo'lgan asosiy matbaa shriftidir."
    }
  ],
  "fransuz-tili": [
    {
      "c": "fr1",
      "q": "Quel est l'article défini masculin singulier en français?",
      "a": "le (l' devant une voyelle, ex: le livre, l'arbre)",
      "w": [
        "la",
        "les",
        "un"
      ],
      "e": "En français, 'le' est le masculin, 'la' le féminin et 'les' le pluriel."
    },
    {
      "c": "fr2",
      "q": "Comment conjugue-t-on le verbe 'être' (to be) à la première personne du singulier au présent?",
      "a": "Je suis",
      "w": [
        "J'ai",
        "Je vais",
        "Je fais"
      ],
      "e": "Être: je suis, tu es, il est, nous sommes, vous êtes, ils sont."
    },
    {
      "c": "fr3",
      "q": "Quel auxiliaire utilise-t-on pour former le Passé Composé des verbes de mouvement?",
      "a": "L'auxiliaire 'être' (ex: 'Il est venu', 'Elle est allée')",
      "w": [
        "L'auxiliaire 'avoir'",
        "Le verbe 'faire'",
        "Le verbe 'aller'"
      ],
      "e": "Les verbes de la 'maison d'être' (aller, venir, naître, mourir...) se conjuguent avec être."
    },
    {
      "c": "fr4",
      "q": "Quelle est la règle d'accord du participe passé avec l'auxiliaire 'être'?",
      "a": "Il s'accorde en genre et en nombre avec le sujet (ex: 'Elle est partie')",
      "w": [
        "Il ne s'accorde jamais",
        "Il s'accorde avec le complément d'objet",
        "Il prend toujours un 's'"
      ],
      "e": "Avec 'être', le participe passé prend 'e' au féminin et 's' au pluriel."
    },
    {
      "c": "fr5",
      "q": "Comment exprime-t-on la négation standard en français?",
      "a": "ne + verbe + pas (ex: 'Je ne sais pas.')",
      "w": [
        "pas + verbe",
        "non + verbe",
        "ne seulement"
      ],
      "e": "La négation bipartite classique encadre le verbe conjugué."
    },
    {
      "c": "fr6",
      "q": "Quel temps verbal exprime une action habituelle ou une description dans le passé?",
      "a": "L'Imparfait (ex: 'Quand j'étais petit, je jouais souvent au parc.')",
      "w": [
        "Le Passé Composé",
        "Le Plus-que-parfait",
        "Le Futur Simple"
      ],
      "e": "L'imparfait sert au décor, à la durée non délimitée et aux habitudes du passé."
    },
    {
      "c": "fr7",
      "q": "Quel mode verbal exprime le doute, le souhait, l'obligation après 'il faut que'?",
      "a": "Le Subjonctif (ex: 'Il faut que tu fasses tes devoirs.')",
      "w": [
        "L'Indicatif",
        "L'Impératif",
        "Le Conditionnel"
      ],
      "e": "Le subjonctif s'emploie après des verbes de volonté, de sentiment ou d'obligation."
    },
    {
      "c": "fr8",
      "q": "Comment dit-on 'S'il vous plaît' de manière informelle (à un ami)?",
      "a": "S'il te plaît",
      "w": [
        "Merci beaucoup",
        "De rien",
        "Au revoir"
      ],
      "e": "'S'il te plaît' utilise le tutoiement pour les proches."
    },
    {
      "c": "fr9",
      "q": "Quel pronom remplace un lieu ou un complément introduit par 'à'?",
      "a": "y (ex: 'Tu vas à Paris? — Oui, j'y vais.')",
      "w": [
        "en",
        "le",
        "lui"
      ],
      "e": "Le pronom adverbial 'y' remplace les compléments de lieu ou 'à + chose'."
    },
    {
      "c": "fr10",
      "q": "Quel pronom remplace une quantité ou un complément introduit par 'de'?",
      "a": "en (ex: 'Tu veux du café? — Oui, j'en veux un peu.')",
      "w": [
        "y",
        "le",
        "les"
      ],
      "e": "'En' exprime la quantité ou remplace une structure prépositionnelle avec 'de'."
    },
    {
      "c": "fr11",
      "q": "Comment forme-t-on le Futur Simple en français?",
      "a": "Infinitif du verbe + terminaisons: -ai, -as, -a, -ons, -ez, -ont",
      "w": [
        "Aller + infinitif",
        "Être + participe",
        "Avoir + infinitif"
      ],
      "e": "Par exemple: parler -> je parlerai, nous parlerons."
    },
    {
      "c": "fr12",
      "q": "Quelle est la différence entre 'savoir' et 'connaître'?",
      "a": "'Savoir' s'utilise pour des faits ou actions (verbes), 'connaître' pour des personnes ou lieux (noms)",
      "w": [
        "Ils sont exactement identiques",
        "'Connaître' s'utilise avec un verbe",
        "'Savoir' ne s'emploie qu'au passé"
      ],
      "e": "On dit: 'Je sais nager', 'Je sais que...' mais 'Je connais cet auteur', 'Je connais Paris'."
    },
    {
      "c": "fr13",
      "q": "Quel adjectif démonstratif emploie-t-on devant un mot masculin commençant par une voyelle?",
      "a": "cet (ex: cet homme, cet arbre)",
      "w": [
        "ce",
        "cette",
        "ces"
      ],
      "e": "'Cet' permet d'éviter le hiatus phonétique devant voyelle ou h muet."
    },
    {
      "c": "fr14",
      "q": "Quelle est la forme du pluriel pour les mots se terminant par '-al' (ex: le cheval)?",
      "a": "-aux (ex: les chevaux)",
      "w": [
        "-als",
        "-ales",
        "-auxs"
      ],
      "e": "La majorité des mots en -al forment leur pluriel en -aux (cheval -> chevaux, journal -> journaux)."
    },
    {
      "c": "fr15",
      "q": "Que signifie le proverbe français 'Qui vivra verra'?",
      "a": "L'avenir nous apportera les réponses avec le temps",
      "w": [
        "Il faut vivre vite",
        "La vue est importante",
        "Qui dort ne mange pas"
      ],
      "e": "Ce proverbe invite à la patience face aux incertitudes du futur."
    },
    {
      "c": "fr16",
      "q": "Quel est le participe passé du verbe irrégulier 'prendre'?",
      "a": "pris",
      "w": [
        "prendu",
        "prené",
        "prié"
      ],
      "e": "Prendre donne le participe passé 'pris' (ex: 'J'ai pris le train.')."
    },
    {
      "c": "fr17",
      "q": "Comment s'appelle l'accent sur la lettre 'ç' dans le mot 'français'?",
      "a": "La cédille",
      "w": [
        "L'accent aigu",
        "L'accent grave",
        "L'accent circonflexe"
      ],
      "e": "La cédille permet de prononcer le 'c' comme un 's' devant les voyelles a, o, u."
    },
    {
      "c": "fr18",
      "q": "Quelle est la formule polie pour répondre à un remerciement?",
      "a": "Je vous en prie / De rien",
      "w": [
        "Enchanté",
        "Bonne journée",
        "Pardon"
      ],
      "e": "'Je vous en prie' est la formule formelle et élégante de politesse."
    },
    {
      "c": "fr19",
      "q": "Quel pronom relatif sujet remplace une personne ou une chose sans préposition?",
      "a": "qui (ex: 'L'homme qui parle est mon professeur.')",
      "w": [
        "que",
        "dont",
        "où"
      ],
      "e": "'Qui' est le pronom relatif qui assume la fonction de sujet du verbe suivant."
    },
    {
      "c": "fr20",
      "q": "Quel pronom relatif complément d'objet direct (COD) utilise-t-on?",
      "a": "que (qu' devant voyelle: 'Le film que j'ai vu')",
      "w": [
        "qui",
        "dont",
        "où"
      ],
      "e": "'Que' remplace le complément d'objet direct dans la proposition relative."
    },
    {
      "c": "fr21",
      "q": "Quel pronom relatif remplace un complément introduit par 'de'?",
      "a": "dont (ex: 'Le livre dont je te parle')",
      "w": [
        "que",
        "qui",
        "auquel"
      ],
      "e": "'Dont' exprime la provenance, la possession ou l'objet d'un verbe avec 'de' (parler de)."
    },
    {
      "c": "fr22",
      "q": "Quel temps exprime une hypothèse soumise à une condition au passé (Conditionnel Passé)?",
      "a": "Avoir/Être au conditionnel présent + participe passé (ex: 'J'aurais aimé')",
      "w": [
        "Imparfait + infinitif",
        "Futur antérieur",
        "Subjonctif plus-que-parfait"
      ],
      "e": "Le conditionnel passé sert souvent à exprimer un regret ou un reproche."
    },
    {
      "c": "fr23",
      "q": "Que signifie l'expression 'Coup de foudre'?",
      "a": "Tomber instantanément et passionnément amoureux de quelqu'un",
      "w": [
        "Être frappé par un orage",
        "Avoir un accident",
        "Avoir une illumination scientifique"
      ],
      "e": "Métaphore pour une passion amoureuse subite et irrésistible."
    },
    {
      "c": "fr24",
      "q": "Comment forme-t-on le féminin de l'adjectif 'beau' devant une consonne?",
      "a": "belle (au masculin devant voyelle: bel)",
      "w": [
        "beauté",
        "beauesse",
        "bealle"
      ],
      "e": "Beau -> bel (devant voyelle: un bel appartement) -> belle (au féminin)."
    },
    {
      "c": "fr25",
      "q": "Quel est le féminin de 'nouveau'?",
      "a": "nouvelle (masculin devant voyelle: nouvel)",
      "w": [
        "nouvele",
        "nouveauté",
        "nouveller"
      ],
      "e": "Nouveau -> nouvel ami -> nouvelle voiture."
    },
    {
      "c": "fr26",
      "q": "Que désigne un 'faux-ami' en linguistique française?",
      "a": "Un mot ressemblant à un mot d'une autre langue mais ayant un sens différent",
      "w": [
        "Une personne hypocrite",
        "Un synonyme parfait",
        "Un proverbe ancien"
      ],
      "e": "Par exemple, 'actuellement' en français signifie 'en ce moment', et non pas 'actually' (en réalité) en anglais."
    },
    {
      "c": "fr27",
      "q": "Comment dit-on 'bonne nuit' en français?",
      "a": "Bonne nuit !",
      "w": [
        "Bonsoir !",
        "Bonne après-midi !",
        "Bonjour !"
      ],
      "e": "'Bonne nuit' se dit juste avant de se coucher pour dormir."
    },
    {
      "c": "fr28",
      "q": "Quel nombre représente 'quatre-vingt-dix' en français de France?",
      "a": "90 (4 × 20 + 10)",
      "w": [
        "80",
        "70",
        "99"
      ],
      "e": "Le système vicésimal traditionnel français compte 80 (quatre-vingts) et 90 (quatre-vingt-dix)."
    },
    {
      "c": "fr29",
      "q": "Comment dit-on 70 en français standard?",
      "a": "soixante-dix (60 + 10)",
      "w": [
        "septante",
        "cinquante-vingt",
        "soixante"
      ],
      "e": "En France standard on dit soixante-dix (septante en Suisse et Belgique)."
    },
    {
      "c": "fr30",
      "q": "Quel verbe signifie 'faire plaisir' et s'utilise avec le pronom COI (ex: 'Ça me plaît')?",
      "a": "plaire",
      "w": [
        "aimer",
        "préférer",
        "désirer"
      ],
      "e": "'Plaire à quelqu'un' fonctionne comme 'to please someone'."
    },
    {
      "c": "fr31",
      "q": "Que fête la France lors de sa fête nationale le 14 juillet?",
      "a": "La prise de la Bastille (1789) et la fête de la Fédération (1790)",
      "w": [
        "La fin de la Première Guerre mondiale",
        "Le sacre de Napoléon",
        "La victoire de la Coupe du Monde"
      ],
      "e": "Le 14 juillet commémore la Révolution et l'unité de la nation républicaine."
    },
    {
      "c": "fr32",
      "q": "Quel mot français désigne l'art culinaire raffiné?",
      "a": "La gastronomie",
      "w": [
        "La cantine",
        "Le festin",
        "La brasserie"
      ],
      "e": "Le repas gastronomique des Français est classé au patrimoine mondial de l'UNESCO."
    }
  ],
  "ispan-tili": [
    {
      "c": "es1",
      "q": "¿Cuál es la diferencia fundamental entre los verbos 'ser' y 'estar' en español?",
      "a": "'Ser' se usa para características permanentes/identidad; 'estar' para estados temporales/ubicación",
      "w": [
        "Son sinónimos intercambiables",
        "'Estar' es solo para personas",
        "'Ser' solo se usa en pasado"
      ],
      "e": "'Soy profesor' (identidad/profesión) vs 'Estoy cansado' (estado temporal de salud)."
    },
    {
      "c": "es2",
      "q": "¿Qué artículo determinado se usa con sustantivos femeninos que empiezan por 'a' tónica en singular?",
      "a": "el (ejemplo: el agua clara, el águila)",
      "w": [
        "la",
        "los",
        "las"
      ],
      "e": "Para evitar la cacofonía se usa 'el agua', pero en plural vuelve a ser 'las aguas'."
    },
    {
      "c": "es3",
      "q": "¿Cuándo se utiliza la preposición 'por' en lugar de 'para'?",
      "a": "Para causa, motivo, medio o duración (ej: 'gracias por venir', 'por la mañana')",
      "w": [
        "Para destino final",
        "Para fecha límite",
        "Para el destinatario"
      ],
      "e": "'Por' indica la causa o el medio; 'para' indica el fin, meta o destinatario."
    },
    {
      "c": "es4",
      "q": "¿Cómo se conjuga el verbo 'ir' en la primera persona del Pretérito Indefinido?",
      "a": "fui (ejemplo: 'Ayer fui al cine')",
      "w": [
        "iba",
        "iré",
        "vaya"
      ],
      "e": "El verbo 'ir' comparte sus formas en pretérito indefinido con el verbo 'ser' (fui, fuiste, fue...)."
    },
    {
      "c": "es5",
      "q": "¿Qué modo verbal expresa deseos, hipótesis, dudas y emociones en español?",
      "a": "El Subjuntivo (ej: 'Quiero que vengas')",
      "w": [
        "El Indicativo",
        "El Imperativo",
        "El Infinitivo"
      ],
      "e": "El subjuntivo es indispensable tras expresiones como 'ojalá', 'espero que', 'dudo que'."
    },
    {
      "c": "es6",
      "q": "¿Cuál es el pronombre de segunda persona del plural usado en España frente a América Latina?",
      "a": "Vosotros/as (en España; en América Latina se usa 'ustedes')",
      "w": [
        "Nosotros",
        "Ellos",
        "Tú"
      ],
      "e": "En España 'vosotros' es informal; en casi toda América Latina 'ustedes' sirve para ambos registros."
    },
    {
      "c": "es7",
      "q": "¿Cómo se forma el Gerundio de los verbos regulares terminados en -ar?",
      "a": "-ando (ejemplo: hablar -> hablando)",
      "w": [
        "-iendo",
        "-ado",
        "-ante"
      ],
      "e": "Cantar -> cantando; para -er e -ir la terminación es -iendo (comer -> comiendo)."
    },
    {
      "c": "es8",
      "q": "¿Qué tiempo verbal se utiliza para acciones habituales o descriptivas en el pasado?",
      "a": "Pretérito Imperfecto (ej: 'Cuando era niño, jugaba en la calle')",
      "w": [
        "Pretérito Indefinido",
        "Pretérito Perfecto",
        "Pluscuamperfecto"
      ],
      "e": "El imperfecto expresa acciones continuadas o sin inicio ni fin preciso en el pasado."
    },
    {
      "c": "es9",
      "q": "¿Qué significa el modismo español 'costar un ojo de la cara'?",
      "a": "Ser extremadamente caro o costar mucho dinero",
      "w": [
        "Tener un dolor físico",
        "Tener problemas de visión",
        "Comprar gafas"
      ],
      "e": "Se aplica a objetos o servicios de precio excesivamente elevado."
    },
    {
      "c": "es10",
      "q": "¿Qué letra del alfabeto español es completamente muda salvo en préstamos extranjeros?",
      "a": "La letra 'h' (hache)",
      "w": [
        "La letra 'c'",
        "La letra 'u'",
        "La letra 'g'"
      ],
      "e": "La 'h' no tiene sonido en español (hola, hotel, hijo)."
    },
    {
      "c": "es11",
      "q": "¿Cómo se dice '¡Qué tengas buen provecho!' al empezar a comer?",
      "a": "¡Buen provecho! / ¡Que aproveche!",
      "w": [
        "¡Salud!",
        "¡Felicidades!",
        "¡Hasta luego!"
      ],
      "e": "Fórmula de cortesía deseada a los comensales antes de iniciar la comida."
    },
    {
      "c": "es12",
      "q": "¿Cuál es el participio irregular del verbo 'abrir'?",
      "a": "abierto",
      "w": [
        "abrido",
        "aberto",
        "abriendose"
      ],
      "e": "Abrir tiene participio irregular: 'abierto' (ej: 'La puerta está abierta')."
    },
    {
      "c": "es13",
      "q": "¿Cuál es el participio irregular del verbo 'escribir'?",
      "a": "escrito",
      "w": [
        "escribido",
        "escripto",
        "escritado"
      ],
      "e": "'Escribir' forma el participio en 'escrito'."
    },
    {
      "c": "es14",
      "q": "¿Qué signo de puntuación es característico del español al inicio de preguntas y exclamaciones?",
      "a": "Signos invertidos de apertura (¿ y ¡)",
      "w": [
        "Solo signos de cierre",
        "Paréntesis",
        "Corchetes"
      ],
      "e": "El español es la única lengua que coloca ¿ y ¡ al comenzar la cláusula interrogativa o exclamativa."
    },
    {
      "c": "es15",
      "q": "¿Cuál es la regla de acentuación para las palabras agudas (acento en la última sílaba)?",
      "a": "Llevan tilde si terminan en vocal, en 'n' o en 's' (ej: camión, sofá, compás)",
      "w": [
        "Siempre llevan tilde",
        "Nunca llevan tilde",
        "Solo si terminan en consonante"
      ],
      "e": "Las agudas marcan tilde ortográfica cuando terminan en -n, -s o vocal."
    },
    {
      "c": "es16",
      "q": "¿Qué significa el refrán 'A quien madruga, Dios le ayuda'?",
      "a": "El esfuerzo temprano y la diligencia traen buenos resultados",
      "w": [
        "Dormir mucho es saludable",
        "No hay que levantarse antes de tiempo",
        "Dios ayuda a todos"
      ],
      "e": "Premia la laboriosidad y levantarse temprano para emprender las tareas."
    },
    {
      "c": "es17",
      "q": "¿Cómo se llama la tilde diacrítica que distingue palabras con la misma forma pero distinto significado?",
      "a": "Tilde diacrítica (ej: 'tú' pronombre vs 'tu' posesivo)",
      "w": [
        "Tilde prosódica",
        "Tilde enfática",
        "Tilde métrica"
      ],
      "e": "Distingue homófonos monosílabos como él/el, sí/si, dé/de, té/te."
    },
    {
      "c": "es18",
      "q": "¿Cómo se expresa una acción futura inmediata en español de uso coloquial?",
      "a": "ir a + infinitivo (ej: 'Voy a estudiar ahora mismo')",
      "w": [
        "haber de + participio",
        "querer + gerundio",
        "estar por + nombre"
      ],
      "e": "La perífrasis 'ir a + infinitivo' es la forma más común en el habla diaria para el futuro."
    },
    {
      "c": "es19",
      "q": "¿Qué significa el modismo 'estar en las nubes'?",
      "a": "Estar distraído, soñando despierto o sin prestar atención",
      "w": [
        "Volar en avión",
        "Tener calor",
        "Ser un astronauta"
      ],
      "e": "Describe a alguien que no se concentra en la realidad inmediata."
    },
    {
      "c": "es20",
      "q": "¿Cuál es el opuesto del adjetivo 'ancho'?",
      "a": "estrecho",
      "w": [
        "largo",
        "alto",
        "pesado"
      ],
      "e": "'Ancho' (wide) tiene por antónimo 'estrecho' (narrow)."
    },
    {
      "c": "es21",
      "q": "¿Cómo se conjuga el verbo 'hacer' en la primera persona singular del Presente de Indicativo?",
      "a": "Hago",
      "w": [
        "Haco",
        "Hazo",
        "Haceré"
      ],
      "e": "Hacer es irregular en la 1ª persona: yo hago, tú haces, él hace."
    },
    {
      "c": "es22",
      "q": "¿Cuál es el autor más insigne de la literatura en español, creador de 'Don Quijote de la Mancha'?",
      "a": "Miguel de Cervantes Saavedra (1547-1616)",
      "w": [
        "Federico García Lorca",
        "Gabriel García Márquez",
        "Jorge Luis Borges"
      ],
      "e": "Cervantes publicó 'Don Quijote' en 1605, cumbre de la novela universal."
    },
    {
      "c": "es23",
      "q": "¿Qué premio Nobel colombiano escribió la obra cumbre del Realismo Mágico 'Cien años de soledad'?",
      "a": "Gabriel García Márquez",
      "w": [
        "Mario Vargas Llosa",
        "Octavio Paz",
        "Pablo Neruda"
      ],
      "e": "'Cien años de soledad' inmortalizó al mítico pueblo de Macondo."
    },
    {
      "c": "es24",
      "q": "¿Qué es el 'voseo' utilizado en países como Argentina, Uruguay y Paraguay?",
      "a": "El uso del pronombre 'vos' en lugar de 'tú' con formas verbales propias (ej: 'vos tenés')",
      "w": [
        "Hablar en voz alta",
        "Hablar con tono poético",
        "No usar verbos"
      ],
      "e": "El voseo rioplatense y centroamericano es una norma culta en sus respectivas regiones."
    },
    {
      "c": "es25",
      "q": "¿Cómo se dice 'Hasta mañana' para despedirse?",
      "a": "Hasta mañana",
      "w": [
        "Buenos días",
        "Por favor",
        "Mucho gusto"
      ],
      "e": "Despedida habitual cuando volveremos a ver a la persona al día siguiente."
    },
    {
      "c": "es26",
      "q": "¿Qué palabra expresa sorpresa o admiración frecuente en el habla de España?",
      "a": "¡Olé! / ¡Madre mía! / ¡Caramba!",
      "w": [
        "Adiós",
        "Sí",
        "Quizá"
      ],
      "e": "Expresiones coloquiales muy extendidas de asombro o entusiasmo."
    },
    {
      "c": "es27",
      "q": "¿Qué significa 'tomar el pelo' a alguien?",
      "a": "Burlar, engañar en broma o tomar el pelo a alguien",
      "w": [
        "Cortar el cabello en la peluquería",
        "Peinar a una persona",
        "Pelearse a golpes"
      ],
      "e": "'No me tomes el pelo' significa 'no me estés engañando o gastando bromas'."
    },
    {
      "c": "es28",
      "q": "¿Cuál es la capital de España y dónde se sitúa?",
      "a": "Madrid, en el centro geográfico de la península ibérica",
      "w": [
        "Barcelona",
        "Sevilla",
        "Valencia"
      ],
      "e": "Madrid es la capital política y mayor centro cultural del país."
    },
    {
      "c": "es29",
      "q": "¿Cómo se llama el baile y género musical tradicional del sur de España (Andalucía)?",
      "a": "El Flamenco",
      "w": [
        "El Tango",
        "La Salsa",
        "El Merengue"
      ],
      "e": "El cante, toque y baile flamenco son patrimonio inmaterial de la humanidad."
    },
    {
      "c": "es30",
      "q": "¿Qué pronombre de objeto indirecto corresponde a 'a ellos / a ellas'?",
      "a": "les (o 'se' si precede a lo/la/los/las)",
      "w": [
        "los",
        "las",
        "le"
      ],
      "e": "'Les' se transforma en 'se' cuando se combina con un pronombre de objeto directo ('se lo doy')."
    },
    {
      "c": "es31",
      "q": "¿Cómo se dice 'gracias' de manera muy agradecida?",
      "a": "¡Muchas gracias! / ¡Muchísimas gracias!",
      "w": [
        "De nada",
        "Lo siento",
        "Disculpe"
      ],
      "e": "Manera enfática de expresar agradecimiento sincero."
    },
    {
      "c": "es32",
      "q": "¿Cuántos países tienen el español como idioma oficial en el mundo?",
      "a": "21 países (más de 500 millones de hispanohablantes)",
      "w": [
        "10 países",
        "5 países",
        "50 países"
      ],
      "e": "El español es la segunda lengua materna más hablada del mundo tras el chino mandarín."
    }
  ],
  "xitoy-tili": [
    {
      "c": "zh1",
      "q": "Xitoy tili (Putongxua) da nechta asosiy ohang (ton) mavjud?",
      "a": "4 ta asosiy ohang va 1 ta neytral ohang",
      "w": [
        "3 ta ohang",
        "6 ta ohang",
        "2 ta ohang"
      ],
      "e": "1-tekis, 2-ko'tariluvchi, 3-tushib-ko'tariluvchi, 4-keskin tushuvchi va neytral ohang."
    },
    {
      "c": "zh2",
      "q": "Xitoy iyerogliflarini lotin harflari bilan fonetik ifodalash tizimi nima deb ataladi?",
      "a": "Pinyin (拼音 — Hànyǔ Pīnyīn)",
      "w": [
        "Hiragana",
        "Hangul",
        "Katagana"
      ],
      "e": "Pinyin 1958-yilda qabul qilingan xalqaro standart fonetik transkripsiyadir."
    },
    {
      "c": "zh3",
      "q": "Xitoy tilida 'Salom' qanday aytiladi?",
      "a": "Nǐ hǎo (你好)",
      "w": [
        "Xièxie",
        "Zàijiàn",
        "Duìbuqǐ"
      ],
      "e": "Nǐ (sen) + hǎo (yaxshi) birikmasi eng keng tarqalgan salomlashuvdir."
    },
    {
      "c": "zh4",
      "q": "Xitoy tilida 'Rahmat / Tashakkur' qanday aytiladi?",
      "a": "Xièxie (谢谢)",
      "w": [
        "Bú kèqi",
        "Qǐng",
        "Méi guānxi"
      ],
      "e": "Xièxie minnatdorchilik bildirishning asosiy so'zidir."
    },
    {
      "c": "zh5",
      "q": "Xitoy tilida 'Xayr / Ko'rishguncha' iborasi qaysi?",
      "a": "Zàijiàn (再见 — tom ma'noda 'Yana ko'rishamiz')",
      "w": [
        "Nǐ hǎo",
        "Wǎn'ān",
        "Zǎoshang hǎo"
      ],
      "e": "Zài (yana) + jiàn (ko'rmoq)."
    },
    {
      "c": "zh6",
      "q": "Xitoy tilida gapning asosiy so'z tartibi qanday?",
      "a": "SVO (Ega + Kesim + To'ldiruvchi: masalan Wǒ chī fàn)",
      "w": [
        "SOV (O'zbek tilidagi kabi)",
        "VSO",
        "OVS"
      ],
      "e": "Putongxuada gap tartibi ingliz tiliga o'xshash SVO qolipida quriladi."
    },
    {
      "c": "zh7",
      "q": "Xitoy tilida umumiy so'roq gapi yasash uchun gap oxiriga qaysi yuklama qo'yiladi?",
      "a": "ma (吗 — masalan: Nǐ hǎo ma?)",
      "w": [
        "ne (呢)",
        "ba (吧)",
        "le (了)"
      ],
      "e": "Gap oxiriga 'ma' qo'yish orqali tasdiq gapi so'roq gapga aylanadi."
    },
    {
      "c": "zh8",
      "q": "Harakatning tugallanganligini yoki holat o'zgarganini bildiruvchi grammatik zarracha qaysi?",
      "a": "le (了 — masalan: Wǒ chī le / Men ovqatlandim)",
      "w": [
        "de (的)",
        "zhe (着)",
        "guo (过)"
      ],
      "e": "'le' fe'ldan keyin yoki gap oxirida perfektlik va o'zgarishni ko'rsatadi."
    },
    {
      "c": "zh9",
      "q": "Egalik va sifatlovchi munosabatini ifodalovchi 'de' (的) zarrachasi qanday qo'llanadi?",
      "a": "Ega + 的 + Ot (masalan: Wǒ de shū / Mening kitobim)",
      "w": [
        "Ot + 的 + Ega",
        "Faqat fe'llar oldidan",
        "Faqat raqamlar bilan"
      ],
      "e": "'de' o'zbek tilidagi qaratqich kelishigi (-ning) vazifasini bajaradi."
    },
    {
      "c": "zh10",
      "q": "Xitoy tilida inkor qaysi so'zlar bilan yasaladi?",
      "a": "bù (不 — hozirgi/kelasi va sifatlar uchun) va méi (没 — 'yǒu' bilan va o'tgan zamonda)",
      "w": [
        "Faqat bù",
        "Faqat méi",
        "Inkor qo'shimchasi yo'q"
      ],
      "e": "'Bù' odatiy inkor, 'Méiyǒu' esa yo'qlik va o'tgan zamon inkoridir."
    },
    {
      "c": "zh11",
      "q": "Xitoy tilida '1, 2, 3' sonlari pinyin va iyeroglifda qanday?",
      "a": "yī (一), èr (二), sān (三)",
      "w": [
        "sì, wǔ, liù",
        "qī, bā, jiǔ",
        "shí, líng"
      ],
      "e": "Yī, èr, sān — bir, ikki, uch demakdir."
    },
    {
      "c": "zh12",
      "q": "Sonlar va otlar o'rtasida ishlatiladigan universal hisob so'zi (klassifikator) qaysi?",
      "a": "gè (个 / 個 — masalan: yí gè rén / bir kishi)",
      "w": [
        "běn (本)",
        "zhī (只)",
        "tiáo (条)"
      ],
      "e": "'gè' eng ko'p qo'llanuvchi universal o'lchov/hisob so'zidir."
    },
    {
      "c": "zh13",
      "q": "Kitoblar, jurnallar va daftarlar uchun maxsus hisob so'zi qaysi?",
      "a": "běn (本 — masalan: sān běn shū / uchta kitob)",
      "w": [
        "gè",
        "zhāng",
        "bǎ"
      ],
      "e": "'Běn' muqovali nashrlar uchun ixtisoslashgan klassifikatordir."
    },
    {
      "c": "zh14",
      "q": "Xitoy tilida 'Men o'zbekistonlikman' qanday aytiladi?",
      "a": "Wǒ shì Wūzībiékěsǐtǎn rén (我是乌兹别克斯坦人)",
      "w": [
        "Wǒ ài Wūzībiékěsǐtǎn",
        "Wǒ zài Wūzībiékěsǐtǎn",
        "Wǒ qù Wūzībiékěsǐtǎn"
      ],
      "e": "'Shì' (bo'lmoq / -dir) va 'rén' (odam/fuqaro) bilan yasaladi."
    },
    {
      "c": "zh15",
      "q": "Xitoy tili leksikasida 'Kechirasiz / Uzr' iborasi qaysi?",
      "a": "Duìbuqǐ (对不起)",
      "w": [
        "Méi guānxi",
        "Xièxie",
        "Bú yòng"
      ],
      "e": "'Duìbuqǐ'ga javoban 'Méi guānxi' (Zarari yo'q / Hechqisi yo'q) deyiladi."
    },
    {
      "c": "zh16",
      "q": "Iyerogliflarning asosiy tarkibiy qismlari va lug'at qidirish kalitlari nima deyiladi?",
      "a": "Radikallar (Bùshǒu — 部首, jami 214 ta Kangxi radikali)",
      "w": [
        "Pinyin",
        "Ohanglar",
        "Bo'g'inlar"
      ],
      "e": "Radikallar iyeroglifning ma'noviy yoki fonetik guruhini bildiradi (suv, olov, daraxt...)."
    },
    {
      "c": "zh17",
      "q": "Xitoy tilida 'Xitoy tili' qanday nomlanadi?",
      "a": "Hànyǔ (汉语) yoki Zhōngwén (中文)",
      "w": [
        "Pǔtōnghuà faqat",
        "Guóyǔ",
        "Běijīnghuà"
      ],
      "e": "Hànyǔ — Xan xalqi tili, Zhōngwén — Xitoy yozuvi va adabiy tili demakdir."
    },
    {
      "c": "zh18",
      "q": "Xitoy Xalq Respublikasining poytaxti qaysi shahar?",
      "a": "Běijīng (北京 — Shimoliy poytaxt)",
      "w": [
        "Shànghǎi",
        "Guǎngzhōu",
        "Xī'ān"
      ],
      "e": "Běi (shimol) + jīng (poytaxt)."
    },
    {
      "c": "zh19",
      "q": "Xitoy tilida 'Choy ichmoq' iborasi qanday aytiladi?",
      "a": "Hē chá (喝茶)",
      "w": [
        "Chī chá",
        "Mǎi chá",
        "Kàn chá"
      ],
      "e": "'Hē' — ichmoq, 'chá' — choy."
    },
    {
      "c": "zh20",
      "q": "'Wǒ ài nǐ' (我爱你) jumlasining ma'nosi nima?",
      "a": "Men seni sevaman",
      "w": [
        "Men seni bilaman",
        "Men seni ko'ryapman",
        "Men seni kutaman"
      ],
      "e": "Butun dunyoda mashhur mehr-muhabbat izhori."
    },
    {
      "c": "zh21",
      "q": "Xitoy tilida haftaning kunlari qanday yasaladi?",
      "a": "Xīngqī (星期) + raqam (masalan: Xīngqīyī — Dushanba, Xīngqī'èr — Seshanba)",
      "w": [
        "Faqat maxsus nomlar bilan",
        "Oylar nomi bilan",
        "Sayyoralar nomi bilan"
      ],
      "e": "Xīngqī 1 dan 6 gacha sonlar qo'shiladi; Yakshanba esa Xīngqītiān yoki Xīngqīrì deyiladi."
    },
    {
      "c": "zh22",
      "q": "Xitoy tilida o'tgan zamonda muayyan tajriba o'tkazilganini ('bajarib ko'rganman') ifodalovchi zarracha qaysi?",
      "a": "guo (过 — masalan: Wǒ qù guo Zhōngguó / Men Xitoyga borganman)",
      "w": [
        "le",
        "zhe",
        "de"
      ],
      "e": "'Guo' fe'ldan keyin hayotiy tajriba yoki hodisa ro'y berganligini ko'rsatadi."
    },
    {
      "c": "zh23",
      "q": "Xitoy tilida 'Katta' va 'Kichik' sifatlari qaysilar?",
      "a": "Dà (大) va Xiǎo (小)",
      "w": [
        "Duō va Shǎo",
        "Gāo va Dī",
        "Cháng va Duǎn"
      ],
      "e": "Dà — katta, Xiǎo — kichik antonim juftligidir."
    },
    {
      "c": "zh24",
      "q": "Xitoy tilida 'Ota-ona' qanday ataladi?",
      "a": "Fùmǔ (父母) yoki Bàba Māma (爸爸妈妈)",
      "w": [
        "Gēge Jiějie",
        "Dìdi Mèimei",
        "Yéye Nǎinai"
      ],
      "e": "Bàba (ota) va Māma (ona)."
    },
    {
      "c": "zh25",
      "q": "Xitoy milliy pul birligi nima deb ataladi?",
      "a": "Yuán (元) yoki Rénmínbì (人民币 — RMB)",
      "w": [
        "Iyen",
        "Von",
        "Dollar"
      ],
      "e": "Renminbi xalq puli bo'lib, asosiy hisob birligi yuandir."
    },
    {
      "c": "zh26",
      "q": "Xitoy tilida HSK (Hànyǔ Shuǐpíng Kǎoshì) nima?",
      "a": "Xitoy tilini bilish darajasini aniqlovchi rasmiy xalqaro standart test",
      "w": [
        "Universitet diplomi",
        "Xattotlik tanlovi",
        "Lug'at kitobi"
      ],
      "e": "HSK xorijliklar uchun xitoy tili darajasini (1-darajadan 6/9-darajagacha) baholaydi."
    },
    {
      "c": "zh27",
      "q": "Xitoy an'anaviy Yangi yili (Bahor bayrami) qanday ataladi?",
      "a": "Chūnjié (春节)",
      "w": [
        "Zhōngqiūjié",
        "Duānwǔjié",
        "Qīngmíngjié"
      ],
      "e": "Oy taqvimi bo'yicha nishonlanadigan eng muhim milliy oilaviy bayram."
    },
    {
      "c": "zh28",
      "q": "Xitoy yozuvining ikkita asosiy varianti qaysilar?",
      "a": "Soddalashtirilgan (Jiǎntǐzì) va An'anaviy (Fántǐzì)",
      "w": [
        "Faqat lotincha",
        "Faqat fonetik",
        "Qadimgi va Yangi"
      ],
      "e": "Materik Xitoyda soddalashtirilgan, Tayvan va Gonkongda an'anaviy iyerogliflar qo'llaniladi."
    },
    {
      "c": "zh29",
      "q": "Xitoy tilida 'Qimmat' so'zi qanday aytiladi?",
      "a": "Guì (贵 — masalan: Tài guì le! / Juda qimmat!)",
      "w": [
        "Piányi (Arzon)",
        "Hǎo",
        "Kuài"
      ],
      "e": "Bozor va do'konda savdolashishda eng ko'p ishlatiladigan so'z."
    },
    {
      "c": "zh30",
      "q": "Xitoy tilida 'Bu nima?' savoli qanday beriladi?",
      "a": "Zhè shì shénme? (这是什么？)",
      "w": [
        "Nà shì shéi?",
        "Nǐ qù nǎr?",
        "Jǐ diǎn le?"
      ],
      "e": "Zhè (bu) + shì (bo'lmoq) + shénme (nima)."
    },
    {
      "c": "zh31",
      "q": "Xitoy madaniyatida 'To'rt buyuk ixtiro' qaysilar hisoblanadi?",
      "a": "Qog'oz, Kompas, Porox va Bosmaxona (Kitob bosish)",
      "w": [
        "Ipak, Choy, Chinni, Temir",
        "Teleskop, Soat, Telefon, Po'lat",
        "Qalam, Siyoh, Gilam, Shisha"
      ],
      "e": "Bu to'rt kashfiyot insoniyat taraqqiyotiga beqiyos turtki bergan."
    },
    {
      "c": "zh32",
      "q": "Xitoy Konfutsiy ta'limotining asosiy asari qaysi?",
      "a": "'Lun Yuy' (论语 — Hikmatlar to'plami)",
      "w": [
        "Daodejing",
        "I Szin",
        "Shitszin"
      ],
      "e": "Konfutsiy va uning shogirdlari suhbatlari jamlangan axloqiy-falsafiy qomus."
    }
  ],
  "koreys-tili": [
    {
      "c": "ko1",
      "q": "Koreys alifbosi nima deb ataladi va uni 1443-yilda kim yaratgan?",
      "a": "Hangul (한글) — Buyuk Qirol Sejong tomonidan yaratilgan",
      "w": [
        "Kanji",
        "Hanja",
        "Pinyin"
      ],
      "e": "Qirol Sejong xalqning savodli bo'lishi uchun ilmiy asoslangan mukammal Hangul alifbosini kashf qilgan."
    },
    {
      "c": "ko2",
      "q": "Hangul alifbosida nechta asosiy unli va undosh harf bor?",
      "a": "10 ta asosiy unli va 14 ta asosiy undosh (jami 24 ta asosiy harf)",
      "w": [
        "33 ta",
        "26 ta",
        "40 ta"
      ],
      "e": "Qo'shaloq unli va undoshlar bilan birga jami 40 ta fonetik harf hosil bo'ladi."
    },
    {
      "c": "ko3",
      "q": "Koreys tilida eng keng tarqalgan muloyim rasmiy salomlashuv qaysi?",
      "a": "Annyeonghaseyo (안녕하세요)",
      "w": [
        "Gamsahamnida",
        "Annyeonghigyeseyo",
        "Joesonghamnida"
      ],
      "e": "Kundalik hayotda eng ko'p qo'llanuvchi ehtiromli salomlashuv iborasi."
    },
    {
      "c": "ko4",
      "q": "Koreys tilida 'Rahmat / Minnatdorman' rasmiy ravishda qanday aytiladi?",
      "a": "Gamsahamnida (감사합니다) yoki Gomawoyo (고마워요)",
      "w": [
        "Cheonmaneyo",
        "Silryehamnida",
        "Mianhamnida"
      ],
      "e": "Katta yoshdagilar va rasmiy muloqotda 'Gamsahamnida' ishlatiladi."
    },
    {
      "c": "ko5",
      "q": "Koreys tilida ketayotgan odam qolayotgan odamga xayrlashganda nima deydi?",
      "a": "Annyeonghi gyeseyo (안녕히 계세요 — Yaxshi o'tiring/qoling)",
      "w": [
        "Annyeonghi gaseyo (Yaxshi boring)",
        "Jal jayo",
        "Tto bwayo"
      ],
      "e": "Qolayotgan kishiga 'gyeseyo', ketayotgan kishiga esa 'gaseyo' deyiladi."
    },
    {
      "c": "ko6",
      "q": "Koreys tilida gapdagi so'z tartibi qanday?",
      "a": "SOV (Ega + To'ldiruvchi + Fe'l oxirida: masalan 'Naneun bapeul meogeoyo')",
      "w": [
        "SVO",
        "VSO",
        "OVS"
      ],
      "e": "Koreys tili agglyutinativ til bo'lib, fe'l har doim gapning eng oxirida keladi."
    },
    {
      "c": "ko7",
      "q": "Mavzu/Ega qo'shimchalari (Topic markers) qaysilar?",
      "a": "-eun / -neun (은 / 는: undoshdan keyin -eun, unlidan keyin -neun)",
      "w": [
        "-i / -ga",
        "-eul / -reul",
        "-eseo"
      ],
      "e": "Gap mavzusini va qiyoslashni ajratib ko'rsatish uchun -eun/-neun qo'llanadi."
    },
    {
      "c": "ko8",
      "q": "Grammatik ega qo'shimchalari (Subject markers) qaysilar?",
      "a": "-i / -ga (이 / 가: undoshdan keyin -i, unlidan keyin -ga)",
      "w": [
        "-eun / -neun",
        "-eul / -reul",
        "-ro"
      ],
      "e": "Birlamchi harakat bajaruvchisini ko'rsatuvchi qo'shimchadir."
    },
    {
      "c": "ko9",
      "q": "Vositasiz to'ldiruvchi (Object marker) qo'shimchasi qaysi?",
      "a": "-eul / -reul (을 / 를 — masalan: chaekeul ilk-eoyo / kitobni o'qiyman)",
      "w": [
        "-e / -eseo",
        "-wa / -gwa",
        "-kaji"
      ],
      "e": "O'zbek tilidagi tushum kelishigi (-ni) vazifasini bajaradi."
    },
    {
      "c": "ko10",
      "q": "Bo'g'in pastida keladigan yakuniy undosh tovush nima deb ataladi?",
      "a": "Batchim (받침)",
      "w": [
        "Choseong",
        "Jungseong",
        "Jongseong"
      ],
      "e": "Batchim bo'g'inning pastki qismidagi undosh bo'lib, keyingi tovushlar bilan fonetik o'zgaradi."
    },
    {
      "c": "ko11",
      "q": "Koreys tilida noaniqlik va hurmat darajalaridan norasmiy muloyim shakl qanday tugaydi?",
      "a": "-ayo / -eoyo (아요 / 어요)",
      "w": [
        "-sumnida / -b nida",
        "-ra",
        "-ja"
      ],
      "e": "Kundalik madaniy muloqotning eng faol zamonaviy shaklidir."
    },
    {
      "c": "ko12",
      "q": "Rasmiy ehtiromli fe'l yakuni (Formal polite) qaysi?",
      "a": "-b nida / -seumnida (ㅂ니다 / 습니다)",
      "w": [
        "-ayo / -eoyo",
        "-ji mayo",
        "-go sip-eoyo"
      ],
      "e": "Televideniye, yangiliklar, harbiy soha va rasmiy nutqlarda qo'llaniladi."
    },
    {
      "c": "ko13",
      "q": "Koreys tilida 'O'zbekiston' qanday yoziladi va talaffuz qilinadi?",
      "a": "Ujeubekiseutan (우즈베키스탄)",
      "w": [
        "Hanguk",
        "Miguk",
        "Jungguk"
      ],
      "e": "Davlat nomi fonetik moslashtirilgan holda yoziladi."
    },
    {
      "c": "ko14",
      "q": "Koreys tilida ikkita sanoq tizimi mavjud: ular qaysilar?",
      "a": "Tub koreyscha sonlar (hana, dul, set...) va Xitoy-koreys (Sino-Korean: il, i, sam...)",
      "w": [
        "Faqat arabcha va lotincha",
        "Faqat Rim raqamlari",
        "Bitta tizim"
      ],
      "e": "Soatni aytganda soat uchun tub koreyscha, daqiqa uchun sino-koreyscha sonlar ishlatiladi."
    },
    {
      "c": "ko15",
      "q": "Koreys tilida 'Men suv ichaman' gapi qanday yoziladi?",
      "a": "Jeoneun muleul masyeoyo (저는 물을 마셔요)",
      "w": [
        "Jeoneun bap meogeoyo",
        "Mul mwayo",
        "Jal jayo"
      ],
      "e": "Jeo (men, kamtarin) + neun + mul (suv) + eul + masyeoyo (ichaman)."
    },
    {
      "c": "ko16",
      "q": "Koreys tilida joy va vaqtga nisbatan yo'nalish qo'shimchasi (-ga, -da) qaysi?",
      "a": "-e (에 — masalan: hakgyoe gayo / maktabga boraman)",
      "w": [
        "-eseo",
        "-buteo",
        "-hante"
      ],
      "e": "Harakatsiz makonda bo'lish va borish manzilini bildiradi."
    },
    {
      "c": "ko17",
      "q": "Harakat sodir bo'layotgan joyni (harakat makonini) bildiruvchi qo'shimcha qaysi?",
      "a": "-eseo (에서 — masalan: doseo-gwan-eseo gongbuhayo / kutubxonada o'qiyman)",
      "w": [
        "-e",
        "-kkaji",
        "-ro"
      ],
      "e": "Aktiv ish-harakat ro'y berayotgan joy uchun qo'llaniladi."
    },
    {
      "c": "ko18",
      "q": "Koreys tilida xohish-istakni ('qilmoqchiman / xohlayman') bildiruvchi grammatik konstruksiya qaysi?",
      "a": "-go sip-eoyo (-고 싶어요 — masalan: gago sip-eoyo / borgim kelyapti)",
      "w": [
        "-l su isseoyo",
        "-ji mayo",
        "-ya dwaeyo"
      ],
      "e": "Fe'l o'zagiga '-go sip-eoyo' qo'shilib istak ifodalanadi."
    },
    {
      "c": "ko19",
      "q": "Qobiliyat va imkoniyatni ('qila olaman') bildiruvchi shakl qaysi?",
      "a": "-(eu)l su isseoyo (-(으)ㄹ 수 있어요)",
      "w": [
        "-(eu)l su eopseoyo",
        "-go isseoyo",
        "-ki ttaemune"
      ],
      "e": "Aksincha 'qila olmayman' bo'lsa '-(eu)l su eopseoyo' bo'ladi."
    },
    {
      "c": "ko20",
      "q": "Davom etayotgan harakatni (Continuous: '-yapman') bildiruvchi grammatika qaysi?",
      "a": "-go isseoyo (-고 있어요 — masalan: jigeum bab meokgo isseoyo)",
      "w": [
        "-ass-eoyo",
        "-gess-eoyo",
        "-myeon"
      ],
      "e": "Hozirgi vaqtda ayni paytda davom etayotgan harakatni ko'rsatadi."
    },
    {
      "c": "ko21",
      "q": "Koreys tilida 'Kechirasiz / Uzr' iborasi qaysi?",
      "a": "Joesonghamnida (죄송합니다) yoki Mianhaeyo (미안해요)",
      "w": [
        "Gomawoyo",
        "Gwaenchanhayo",
        "Cheonmaneyo"
      ],
      "e": "Rasmiy va samimiy kechirim so'rash iborasi."
    },
    {
      "c": "ko22",
      "q": "Koreys tilida 'Hechqisi yo'q / Hammasi joyida' javobi qanday?",
      "a": "Gwaenchanhayo (괜찮아요)",
      "w": [
        "Silryehamnida",
        "Anieyo",
        "Eopseoyo"
      ],
      "e": "Kechirim yoki xavotirga javoban ishlatiladi."
    },
    {
      "c": "ko23",
      "q": "Koreya Respublikasining poytaxti qaysi shahar?",
      "a": "Seul (Seoul — 서울)",
      "w": [
        "Busan",
        "Incheon",
        "Daegu"
      ],
      "e": "Seul Hangang daryosi sohilida joylashgan zamonaviy megapolisdir."
    },
    {
      "c": "ko24",
      "q": "Koreys xalqining an'anaviy libosi nima deb ataladi?",
      "a": "Hanbok (한복)",
      "w": [
        "Kimono",
        "Yukata",
        "Sari"
      ],
      "e": "To'ylar, Chuseok va Seollal kabi milliy bayramlarda kiyiladi."
    },
    {
      "c": "ko25",
      "q": "Koreys milliy taomi hisoblangan achchiq achitilgan karam nima?",
      "a": "Kimchi (김치)",
      "w": [
        "Bibimbap",
        "Bulgogi",
        "Kimbap"
      ],
      "e": "Kimchi koreys oshxonasining ramzi va dunyoga mashhur foydali taomidir."
    },
    {
      "c": "ko26",
      "q": "Koreys tili xalqaro imtihoni nima deb ataladi?",
      "a": "TOPIK (Test of Proficiency in Korean — 한국어능력시험)",
      "w": [
        "IELTS",
        "JLPT",
        "HSK"
      ],
      "e": "TOPIK I (1-2 daraja) va TOPIK II (3-6 daraja) bosqichlaridan iborat."
    },
    {
      "c": "ko27",
      "q": "Koreys tilida 'Ha' va 'Yo'q' so'zlari qanday?",
      "a": "Ne (네 / 예) — Ha, Aniyo (아니요) — Yo'q",
      "w": [
        "Ung / Ani",
        "Geulsse-yo",
        "Maja-yo"
      ],
      "e": "'Ne' madaniy 'ha', 'Aniyo' esa 'yo'q' degani."
    },
    {
      "c": "ko28",
      "q": "Koreys tilida 'Bu qancha turadi?' savoli qanday beriladi?",
      "a": "Igeo eolmayeyo? (이거 얼마예요?)",
      "w": [
        "Igeo mwoyeyo?",
        "Eodiye isseoyo?",
        "Eonjeyeyo?"
      ],
      "e": "Igeo (bu) + eolma (qancha) + yeyo (ekan)."
    },
    {
      "c": "ko29",
      "q": "Koreys tilida shart mayli ('agar ...-sa') qaysi qo'shimcha bilan yasaladi?",
      "a": "-(eu)myeon (-(으)면 — masalan: sigani isseumyeon / vaqtim bo'lsa)",
      "w": [
        "-jiman",
        "-nikka",
        "-neunde"
      ],
      "e": "Shart va faraz bildirish uchun fe'l o'zagiga qo'shiladi."
    },
    {
      "c": "ko30",
      "q": "Qarama-qarshilikni ('...-lekin / biroq') bildiruvchi bog'lovchi qo'shimcha qaysi?",
      "a": "-jiman (-지만 — masalan: bappujiman / band bo'lsam ham)",
      "w": [
        "-goseo",
        "-myeonseo",
        "-dorok"
      ],
      "e": "Oldingi va keyingi gap mazmunini qarama-qarshi bog'laydi."
    },
    {
      "c": "ko31",
      "q": "Koreya an'anaviy Hosil bayrami (Minnetdorchilik kuni) qanday ataladi?",
      "a": "Chuseok (추석)",
      "w": [
        "Seollal",
        "Dano",
        "Samiljeol"
      ],
      "e": "Kuzgi to'lin oy vaqtida nishonlanadigan eng ulug' milliy bayram."
    },
    {
      "c": "ko32",
      "q": "Koreys pul birligi nima deb ataladi?",
      "a": "Von (KRW — ₩ / 원)",
      "w": [
        "Yen",
        "Yuan",
        "Som"
      ],
      "e": "Koreya Respublikasining rasmiy valyutasi Vondir."
    }
  ],
  "yapon-tili": [
    {
      "c": "ja1",
      "q": "Yapon tilida nechta asosiy yozuv tizimi birgalikda ishlatiladi?",
      "a": "3 ta tizim: Hiragana, Katakana va Kanji (iyerogliflar)",
      "w": [
        "Faqat 1 ta",
        "Faqat lotincha",
        "2 ta"
      ],
      "e": "Yapon tili bir vaqtning o'zida ikkita bo'g'inli alifbo va xitoy iyerogliflaridan foydalanadi."
    },
    {
      "c": "ja2",
      "q": "Sof yaponcha so'zlar va grammatik qo'shimchalarni yozish uchun qaysi bo'g'inli alifbo ishlatiladi?",
      "a": "Hiragana (ひらがな — 46 ta asosiy belgi)",
      "w": [
        "Katakana",
        "Romaji",
        "Hanja"
      ],
      "e": "Hiragana egri, yumshoq chiziqli yapon grammatik yozuvidir."
    },
    {
      "c": "ja3",
      "q": "Xorijiy tillardan kirib kelgan o'zlashma so'zlar va chet el ismlari qaysi alifboda yoziladi?",
      "a": "Katakana (カタカナ — masalan: コーヒー / kōhī - qahva)",
      "w": [
        "Hiragana",
        "Kanji",
        "Furigana"
      ],
      "e": "Katakana to'g'ri va o'tkir burchakli belgilar bo'lib, o'zlashma so'zlar uchun maxsus qo'llanadi."
    },
    {
      "c": "ja4",
      "q": "Yapon tilida eng mashhur kundalik salomlashuv (kunduzi) qaysi?",
      "a": "Konnichiwa (こんにちは)",
      "w": [
        "Ohayō gozaimasu",
        "Konbanwa",
        "Sayōnara"
      ],
      "e": "'Konnichiwa' tushdan keyingi odatiy salomlashuv iborasidir."
    },
    {
      "c": "ja5",
      "q": "Ertalab aytiladigan rasmiy salomlashuv (Xayrli tong) qaysi?",
      "a": "Ohayō gozaimasu (おはようございます)",
      "w": [
        "Konnichiwa",
        "Oyasuminasai",
        "Arigatō"
      ],
      "e": "Ertalabki muloyim salomlashuv shaklidir."
    },
    {
      "c": "ja6",
      "q": "Yapon tilida 'Katta rahmat' muloyim shaklda qanday aytiladi?",
      "a": "Arigatō gozaimasu (ありがとうございます)",
      "w": [
        "Dōitashimashite",
        "Sumimasen",
        "Gomen nasai"
      ],
      "e": "Minnatdorchilik bildirishning to'liq rasmiy shaklidir."
    },
    {
      "c": "ja7",
      "q": "Yapon tilida mavzu ko'rsatuvchi zarracha (Topic particle) qaysi belgi bilan yoziladi?",
      "a": "ha (talaffuzi 'wa' — は: masalan Watashi wa gakusei desu)",
      "w": [
        "ga (が)",
        "o (を)",
        "ni (に)"
      ],
      "e": "Bu zarracha 'ha' harfi bilan yoziladi, ammo 'wa' deb talaffuz qilinadi."
    },
    {
      "c": "ja8",
      "q": "To'g'ridan-to'g'ri to'ldiruvchi (Object particle) zarrachasi qaysi?",
      "a": "o (talaffuzi 'o' — を: masalan Hon o yomimasu / Kitob o'qiyman)",
      "w": [
        "wa",
        "de",
        "to"
      ],
      "e": "Faqat grammatik obyekt zarrachasi sifatida ishlatiladigan maxsus belgi."
    },
    {
      "c": "ja9",
      "q": "Gap oxiriga qo'yilib so'roq ma'nosini yasovchi zarracha qaysi?",
      "a": "ka (か — masalan: Genki desu ka?)",
      "w": [
        "ne (ね)",
        "yo (よ)",
        "mo (も)"
      ],
      "e": "Yapon tilida so'roq belgisi (?) o'rniga gap oxiriga 'ka' qo'shiladi."
    },
    {
      "c": "ja10",
      "q": "Harakatning sodir bo'lish o'rni yoki vositasini ('orqali / -da') bildiruvchi zarracha qaysi?",
      "a": "de (で — masalan: basu de ikimasu / avtobusda boraman)",
      "w": [
        "ni",
        "e",
        "kara"
      ],
      "e": "Transport vositasi, asbob yoki harakat joyini ifodalaydi."
    },
    {
      "c": "ja11",
      "q": "Vaqt yoki yo'nalish maqsadini bildiruvchi zarracha qaysi?",
      "a": "ni (に — masalan: 7-ji ni okimasu / soat 7 da turaman)",
      "w": [
        "de",
        "o",
        "wa"
      ],
      "e": "Aniq vaqt va kirish manzilini bildiradi."
    },
    {
      "c": "ja12",
      "q": "Yapon tilida fe'llarning muloyim hozirgi/kelasi zamon shakli qanday yakunlanadi?",
      "a": "-masu (〜ます — masalan: tabemasu / yeyman)",
      "w": [
        "-mashita",
        "-masen",
        "-te kudasai"
      ],
      "e": "Rasmiy muloyim nutqda barcha fe'llar '-masu' bilan tugaydi."
    },
    {
      "c": "ja13",
      "q": "O'tgan zamonning muloyim shakli qaysi?",
      "a": "-mashita (〜ました — masalan: tabemashita / yedim)",
      "w": [
        "-masu",
        "-masen deshita",
        "-nai"
      ],
      "e": "'-masu' shaklining o'tgan zamon ehtiromli ko'rinishidir."
    },
    {
      "c": "ja14",
      "q": "Inkorning muloyim hozirgi zamon shakli qanday?",
      "a": "-masen (〜ません — masalan: ikimasen / bormayman)",
      "w": [
        "-mashita",
        "-tai desu",
        "-mashou"
      ],
      "e": "'-masu' o'rniga '-masen' qo'yilib inkor yasaladi."
    },
    {
      "c": "ja15",
      "q": "Fe'lning buyruq va iltimos shakli ('...-ingiz, iltimos') qanday qo'shimcha bilan yasaladi?",
      "a": "-te kudasai (〜てください — masalan: kite kudasai / keling, iltimos)",
      "w": [
        "-te mo ii",
        "-cha dame",
        "-ba ii"
      ],
      "e": "Fe'lning 'te-shakli' (Te-form) + kudasai iltimos ifodalaydi."
    },
    {
      "c": "ja16",
      "q": "Iltimos qilganda yoki chaqirganda ishlatiladigan 'Kechirasiz / Uzr' so'zi qaysi?",
      "a": "Sumimasen (すみません)",
      "w": [
        "Gomen nasai",
        "Arigatō",
        "Hai"
      ],
      "e": "Restoranda ofitsiantni chaqirish, yo'l so'rash yoki uzr uchun ishlatiladi."
    },
    {
      "c": "ja17",
      "q": "Yapon tilida 'Xayr / Alvido' (uzoq muddatga ketganda) iborasi qaysi?",
      "a": "Sayōnara (さようなら)",
      "w": [
        "Mata ne",
        "Jaa ne",
        "Konnichiwa"
      ],
      "e": "Rasmiy va uzoq vaqt ko'rishmaslik ma'nosidagi xayrlashuvdir."
    },
    {
      "c": "ja18",
      "q": "Yapon tili xalqaro bilim darajasini baholash imtihoni nima deb ataladi?",
      "a": "JLPT (Japanese-Language Proficiency Test — 日本語能力試験: N5 dan N1 gacha)",
      "w": [
        "TOEFL",
        "HSK",
        "TOPIK"
      ],
      "e": "N5 eng boshlang'ich daraja, N1 esa eng yuqori professional darajadir."
    },
    {
      "c": "ja19",
      "q": "Yapon tilida 'Ha' va 'Yo'q' so'zlari qanday?",
      "a": "Hai (はい) — Ha, Iie (いいえ) — Yo'q",
      "w": [
        "Un / Uun",
        "Sō desu",
        "Chigaimasu"
      ],
      "e": "'Hai' tasdiq, 'Iie' esa inkor so'zidir."
    },
    {
      "c": "ja20",
      "q": "Yapon poytaxti Tokio (Tokyo) shahrining yaponcha yozilishi qanday ma'noni anglatadi?",
      "a": "Tōkyō (東京 — Sharqiy poytaxt)",
      "w": [
        "G'arbiy poytaxt",
        "Markaziy shahar",
        "Qadimiy voha"
      ],
      "e": "Tō (sharq) + kyō (poytaxt)."
    },
    {
      "c": "ja21",
      "q": "Yapon milliy kiyimi qanday ataladi?",
      "a": "Kimono (着物 — so'zma-so'z: kiyiladigan buyum)",
      "w": [
        "Yukata",
        "Obi",
        "Hakama"
      ],
      "e": "An'anaviy yapon ipak libosi hisoblanadi."
    },
    {
      "c": "ja22",
      "q": "Yapon xalqining eng muqaddas ramzi hisoblangan vulqon tog' qaysi?",
      "a": "Fuji tog'i (Fujisan — 3,776 metr)",
      "w": [
        "Asama",
        "Aso",
        "Ontake"
      ],
      "e": "Fujisan Yaponiyaning eng baland va go'zal cho'qqisidir."
    },
    {
      "c": "ja23",
      "q": "Yapon tilida kishilar ismiga qo'shiladigan umumiy ehtirom qo'shimchasi nima?",
      "a": "-san (〜さん — masalan: Tanaka-san)",
      "w": [
        "-kun",
        "-chan",
        "-sama"
      ],
      "e": "-san o'zbek tilidagi 'janob', 'xonim' yoki 'aka/opa' o'rnida hurmat bildiradi."
    },
    {
      "c": "ja24",
      "q": "O'qituvchilar, shifokorlar va ustozlarga qaratilgan ehtiromli unvon nima?",
      "a": "Sensei (先生)",
      "w": [
        "Senpai",
        "Kōhai",
        "Shachō"
      ],
      "e": "O'zidan oldin tug'ilgan, bilim va tajriba beruvchi ustoz demakdir."
    },
    {
      "c": "ja25",
      "q": "Yapon tilida 'Men o'qiyman' qanday aytiladi?",
      "a": "Watashi wa benkyō shimasu (私は勉強します)",
      "w": [
        "Watashi wa nemasu",
        "Watashi wa ikimasu",
        "Watashi wa kimasu"
      ],
      "e": "Watashi (men) + wa + benkyō (o'qish) + shimasu (qilmoq)."
    },
    {
      "c": "ja26",
      "q": "Yapon tilida sifatlar nechta asosiy guruhga bo'linadi?",
      "a": "2 guruh: i-sifatlar (い-adjectives) va na-sifatlar (な-adjectives)",
      "w": [
        "3 guruh",
        "1 guruh",
        "Faqat fe'l shakli bor"
      ],
      "e": "i-sifatlar zamon bo'yicha o'zgaradi (oishii -> oishikatta)."
    },
    {
      "c": "ja27",
      "q": "Yaponiyaning pul birligi nima deb ataladi?",
      "a": "Yen (¥ / 円 — En)",
      "w": [
        "Yuan",
        "Von",
        "Rupiya"
      ],
      "e": "Yaponiyaning yagona milliy valyutasidir."
    },
    {
      "c": "ja28",
      "q": "Ovqatdan oldin 'Yoqimli ishtaha / Kamtarlik bilan qabul qilaman' ma'nosidagi ibora qaysi?",
      "a": "Itadakimasu (いただきます)",
      "w": [
        "Gochisōsama deshita",
        "Kampai",
        "Oishii"
      ],
      "e": "Ovqatni tayyorlaganlarga va ne'matga chuqur minnatdorchilik bildirish an'anasi."
    },
    {
      "c": "ja29",
      "q": "Ovqatlanib bo'lgach aytiladigan 'Mazali ziyofat uchun rahmat' iborasi qaysi?",
      "a": "Gochisōsama deshita (ごちそうさまでした)",
      "w": [
        "Itadakimasu",
        "Arigatō",
        "Oyasumi"
      ],
      "e": "Taom tanovul qilib bo'lingach mezbonga bildiriladigan ehtirom."
    },
    {
      "c": "ja30",
      "q": "Yapon tilida 'Bir, ikki, uch' sanoq sonlari qanday aytiladi?",
      "a": "Ichi, ni, san (一, 二, 三)",
      "w": [
        "Shi, go, roku",
        "Nana, hachi, kyū",
        "Jū"
      ],
      "e": "Ichi (1), ni (2), san (3) asosiy sanoq sonlaridir."
    },
    {
      "c": "ja31",
      "q": "Yaponiyada bahorda gilos guli (Sakura) ochilishini tomosha qilish an'anasi nima deyiladi?",
      "a": "Hanami (花見 — Gul tomoshasi)",
      "w": [
        "Momijigari",
        "Matsuri",
        "Kabuki"
      ],
      "e": "Oilaviy va do'stlar bilan parklarda gullagan daraxtlar ostida o'tirish odati."
    },
    {
      "c": "ja32",
      "q": "Yapon an'anaviy 17 bo'g'inli (5-7-5) falsafiy lirik she'riy janr qaysi?",
      "a": "Hokku / Xayku (Haiku — Matsuo Bashō)",
      "w": [
        "Tanka",
        "Renga",
        "G'azal"
      ],
      "e": "Xayku tabiatning bir lahzalik go'zalligi va chuqur falsafasini 17 bo'g'inda aks ettiradi."
    }
  ],
  "afgon-tili": [
    {
      "c": "af1",
      "q": "Afg'oniston Islom Amirligi / Respublikasida qaysi ikki til rasmiy davlat tillari hisoblanadi?",
      "a": "Pushtu (پښتو) va Dariy / Forsiy Kobuliy (دری)",
      "w": [
        "Faqat arab tili",
        "Faqat urdu tili",
        "Turkman va tojik tili"
      ],
      "e": "Afg'oniston konstitutsiyasiga ko'ra Pushtu va Dariy teng huquqli rasmiy tillardir."
    },
    {
      "c": "af2",
      "q": "Pushtu tili qaysi til oilasining qaysi tarmog'iga mansub?",
      "a": "Hind-Yevropa oilasining Sharqiy Eroniy tillar guruhiga",
      "w": [
        "Turkiy tillar guruhiga",
        "Somiy tillariga",
        "Urol tillariga"
      ],
      "e": "Pushtu tili qadimiy sharqiy eroniy xususiyatlarni saqlab qolgan boy tildir."
    },
    {
      "c": "af3",
      "q": "Dariy tili qaysi til guruhiga kiradi?",
      "a": "Hind-Yevropa oilasining Janubi-g'arbiy Eroniy tillariga (Klassik fors tili bilan qardosh)",
      "w": [
        "Slavyan tillariga",
        "Sino-Tibet",
        "Kavkaz"
      ],
      "e": "Dariy klassik fors tili adabiy an'analarining to'g'ridan-to'g'ri davomchisidir."
    },
    {
      "c": "af4",
      "q": "Pushtu alifbosida nechta harf mavjud?",
      "a": "44 ta harf (arab-fors alifbosiga xos bo'lmagan maxsus 8 ta tovush harfi bilan)",
      "w": [
        "28 ta",
        "32 ta",
        "26 ta"
      ],
      "e": "Pushtuda retrofleks (til uchi orqaga bukiladigan) tovushlar: ټ, ډ, ړ, ڼ va boshqalar bor."
    },
    {
      "c": "af5",
      "q": "Pushtu tilida 'Salom' qanday aytiladi?",
      "a": "Salām / Səlam āleykum (سلام علیکم) yoki Xoş āmadēd",
      "w": [
        "Poxēr",
        "Manana",
        "Wror"
      ],
      "e": "Salomlashuvda 'Salom' va 'Sitoray mashe' (Charchamang) keng qo'llanadi."
    },
    {
      "c": "af6",
      "q": "Pushtu tilida minnatdorchilik (Rahmat) qanday aytiladi?",
      "a": "Manana (مننه) yoki Dera manana (Katta rahmat)",
      "w": [
        "Lutfan",
        "Baxşana",
        "Hēts gāp nasta"
      ],
      "e": "'Manana' pushtucha sof minnatdorchilik so'zidir."
    },
    {
      "c": "af7",
      "q": "Dariy tilida 'Rahmat' qanday aytiladi?",
      "a": "Tashakkur (تشکر) yoki Tashakkur ziād",
      "w": [
        "Manana",
        "Qurbān",
        "Salāmat"
      ],
      "e": "Dariy tilida 'Tashakkur' eng keng tarqalgan tashakkur so'zidir."
    },
    {
      "c": "af8",
      "q": "Pushtu tilida 'Xush kelibsiz' qanday aytiladi?",
      "a": "Pə xeyr rāğle (په خیر راغلې)",
      "w": [
        "Xodāy pāmān",
        "Jor bāşē",
        "Wror"
      ],
      "e": "Mehmonga va kelgan kishiga pushtucha samimiy ehtirom."
    },
    {
      "c": "af9",
      "q": "Pushtu tilida 'Xayr / Xudo panohida bo'ling' qanday deyiladi?",
      "a": "Xudāy pāmān (خدای پامان)",
      "w": [
        "Pə mānā",
        "Rāza",
        "Dera xə"
      ],
      "e": "'Xudo sizni o'z panohida asrasin' ma'nosidagi an'anaviy xayrlashuv."
    },
    {
      "c": "af10",
      "q": "Pushtu tilida gapdagi so'z tartibi qanday?",
      "a": "SOV (Ega + To'ldiruvchi + Fe'l oxirida)",
      "w": [
        "SVO",
        "VSO",
        "OVS"
      ],
      "e": "Pushtu tilida barcha sintaktik tuzilmalarda fe'l gap oxirida keladi."
    },
    {
      "c": "af11",
      "q": "Pushtu tilida jins kategoriyasi bormi?",
      "a": "Ha, ikkita jins mavjud: Muzakkar (Erkak) va Muannas (Ayol jinsi)",
      "w": [
        "Yo'q, mutlaqo yo'q",
        "3 ta jins bor",
        "Faqat kishilarda"
      ],
      "e": "Otlar, sifatlar, sonlar va fe'llar erkak va ayol jinsiga ko'ra turlanadi."
    },
    {
      "c": "af12",
      "q": "Pushtuda ayol jinsidagi otlar ko'pincha qaysi harf bilan tugaydi?",
      "a": "Yā-ye ta'nīs (ه yoki ۍ bilan: masalan 'xəza' - ayol)",
      "w": [
        "Wāw bilan",
        "Jim bilan",
        "Faqat nūn"
      ],
      "e": "Yumshoq 'ha' yoki xos 'ya' ayol jinsi belgisidir."
    },
    {
      "c": "af13",
      "q": "Pushtu tilida 'Do'st' qanday aytiladi?",
      "a": "Malgaray (ملګری) yoki Dost",
      "w": [
        "Dushman",
        "Wror",
        "Aşnā"
      ],
      "e": "'Malgaray' pushtucha sof o'rtoq, hamroh, do'st demakdir."
    },
    {
      "c": "af14",
      "q": "Pushtu tilida 'Birodar / Aka-uka' qanday aytiladi?",
      "a": "Wror (ورور — ko'pligi: wrūna)",
      "w": [
        "Xor (Opa-singil)",
        "Plār (Ota)",
        "Mōr (Ona)"
      ],
      "e": "'Wror' birodar, qardosh ma'nosini bildiradi."
    },
    {
      "c": "af15",
      "q": "Pushtu tilida 'Ona' so'zi qanday ataladi?",
      "a": "Mōr (مور)",
      "w": [
        "Plār",
        "Lūr",
        "Zoy"
      ],
      "e": "Mōr — ona, Plār — ota, Zoy — o'g'il, Lūr — qiz."
    },
    {
      "c": "af16",
      "q": "Pushtuda 'Ha' va 'Yo'q' so'zlari qanday?",
      "a": "Wo (هو) — Ha, Na (نه) — Yo'q",
      "w": [
        "Bale / Xeyr",
        "Ji / Nahin",
        "Aha / Yo'q"
      ],
      "e": "'Wo' tasdiq, 'Na' esa inkor so'zidir."
    },
    {
      "c": "af17",
      "q": "Pushtu tilida 'Yaxshi' sifati qanday aytiladi?",
      "a": "Xə (ښه — xəy / yaxshi)",
      "w": [
        "Xarāb",
        "Bad",
        "Lōy"
      ],
      "e": "'Xə' juda keng qo'llanuvchi so'z bo'lib, 'yaxshi, xo'p' demakdir."
    },
    {
      "c": "af18",
      "q": "Pushtuda o'tgan zamon o'timli fe'llarida qanday grammatik hodisa ro'y beradi?",
      "a": "Ergativ konstruksiya (fe'l ega bilan emas, obyekt bilan moslashadi)",
      "w": [
        "Nominativ konstruksiya",
        "Moslashuv yo'qoladi",
        "Faqat kelasi zamon bo'ladi"
      ],
      "e": "Pushtu tili o'tgan zamonda qadimiy ergativ tuzilishini saqlagan."
    },
    {
      "c": "af19",
      "q": "Afg'onistonning poytaxti qaysi shahar?",
      "a": "Kobul (Kabul — کابل)",
      "w": [
        "Qandahor",
        "Hirot",
        "Mozori Sharif"
      ],
      "e": "Kobul mamlakatning siyosiy, iqtisodiy va madaniy markazidir."
    },
    {
      "c": "af20",
      "q": "Mozori Sharif shahrida joylashgan mashhur tarixiy ziyoratgoh qaysi?",
      "a": "Moviy masjid (Hazrati Ali maqbarasi majmuasi)",
      "w": [
        "Shohi Zinda",
        "Toj Mahal",
        "Hirot qal'asi"
      ],
      "e": "Moviy koshinli betakror me'moriy yodgorlik Navro'zda qizil lola sayli markazidir."
    },
    {
      "c": "af21",
      "q": "Hirot adabiy muhitida Alisher Navoiy va Abdurahmon Jomiy davrida qaysi sulola hukmronlik qilgan?",
      "a": "Temuriylar sulolasi (Sulton Husayn Boyqaro davri)",
      "w": [
        "Boburiylar",
        "G'aznaviylar",
        "Somoniylar"
      ],
      "e": "Hirot XV asrda butun Sharqning ilm-fan, san'at va adabiyot poytaxti bo'lgan."
    },
    {
      "c": "af22",
      "q": "Pushtu xalqining faxriy shoiri va milliy qahramoni kim?",
      "a": "Xushholxon Xattak (خوشحال خان خټک — 1613-1689)",
      "w": [
        "Rahmon Bobo",
        "Ahmadshoh Durroniy",
        "Hamid Momand"
      ],
      "e": "Xushholxon jangchi shoir bo'lib, pushtu adabiyotini yuksak cho'qqiga ko'targan."
    },
    {
      "c": "af23",
      "q": "Pushtuning eng mashhur so'fiyona lirik shoiri kim?",
      "a": "Rahmon Bobo (Abdurrahmon Mohmand)",
      "w": [
        "Xushholxon",
        "Pir Roshon",
        "Gulxon"
      ],
      "e": "Rahmon Bobo she'rlari har bir afg'on xonadonida sevib o'qiladi."
    },
    {
      "c": "af24",
      "q": "Pushtunwali (پښتونوالی) nima?",
      "a": "Pushtunlarning asriy an'anaviy axloq, or-nomus, mehmondo'stlik va adolat kodeksi",
      "w": [
        "Darslik kitobi",
        "Qonunlar to'plami",
        "Harbiy unvon"
      ],
      "e": "Melmastia (mehmondo'stlik), Badal (adolat) va Nang (nomus) uning ustunlaridir."
    },
    {
      "c": "af25",
      "q": "Pushtunwalidagi 'Melmastia' nimani anglatadi?",
      "a": "Boshpana so'ragan har qanday insonga beg'araz mehmondo'stlik ko'rsatish",
      "w": [
        "Qasos olish",
        "Savdo qilish",
        "She'r o'qish"
      ],
      "e": "Dushman bo'lsa ham eshikka kelgan mehmonga to'liq omonlik berish burchidir."
    },
    {
      "c": "af26",
      "q": "Pushtu xalq an'anaviy ikki misrali xalq qo'shig'i/she'ri janri nima deyiladi?",
      "a": "Landaey (لنډۍ — 9 va 13 bo'g'inli betakror lirik janr)",
      "w": [
        "Ruboiy",
        "Qasida",
        "Doston"
      ],
      "e": "Landaey xalqning dardi, sevgisi va erki ifodalangan folklor durdonasidir."
    },
    {
      "c": "af27",
      "q": "Afg'on milliy doira raqsi va bayramlardagi jamoaviy jangovar raqsi nima deyiladi?",
      "a": "Attan (اتڼ)",
      "w": [
        "Lazgi",
        "Lezginka",
        "Karsilama"
      ],
      "e": "Attan nog'ora jo'rligida barcha qatnashuvchilar birgalikda aylanib tushadigan milliy raqs."
    },
    {
      "c": "af28",
      "q": "Afg'oniston milliy pul birligi nima deb ataladi?",
      "a": "Afg'oniy (AFN — افغانۍ)",
      "w": [
        "Rupiya",
        "Dinar",
        "Tuman"
      ],
      "e": "Afg'oniston Markaziy banki tomonidan muomalaga chiqarilgan milliy valyuta."
    },
    {
      "c": "af29",
      "q": "Dariy tilida 'Non' va 'Suv' qanday aytiladi?",
      "a": "Nān (نان) va Āb (آب)",
      "w": [
        "Gōsht va Shīr",
        "Chāy va Qand",
        "Rōghan va Birinj"
      ],
      "e": "Kundalik dasturxonning birlamchi ne'matlari."
    },
    {
      "c": "af30",
      "q": "Pushtu tilida 'Kitob' va 'Qalam' qanday ataladi?",
      "a": "Kitāb (کتاب) va Qalam (قلم)",
      "w": [
        "Daftar va Rang",
        "Xat va Qog'oz",
        "Maktab va Dars"
      ],
      "e": "Arabiy o'zlashma bo'lib, pushtuda keng faol ishlatiladi."
    },
    {
      "c": "af31",
      "q": "Afg'onistonning dunyoga mashhur an'anaviy mevalari va quruq mevalari qaysilar?",
      "a": "Qandahor anorlari, mayiz (kishmish), pista va bodom",
      "w": [
        "Banan va apelsin",
        "Kivi va ananas",
        "Mango"
      ],
      "e": "Afg'on anori va kishmishi shirinligi va sifati bo'yicha mintaqada mashhur."
    },
    {
      "c": "af32",
      "q": "Afg'on milliy taomi hisoblangan mashhur palov qanday nomlanadi?",
      "a": "Qobili palov (Qābuli palaw — mayiz, sabzi va dumba go'shti bilan)",
      "w": [
        "Manti",
        "Bo'rak",
        "Shashlik"
      ],
      "e": "Qobili palov o'ziga xos shirin mayiz va sabzili xushbo'y afg'on taomidir."
    }
  ],
  "bogcha-sherlari": [
    {
      "c": "bs1",
      "q": "Bolalar uchun yozilgan mashhur she'r: 'Qo'limda bor qalamim, yozay desa ... ?'",
      "a": "Alifbo",
      "w": [
        "Daftar",
        "Kitob",
        "Rasm"
      ],
      "e": "Bolalarni o'qish va yozishga undovchi mashhur bog'cha she'ridan parcha."
    },
    {
      "c": "bs2",
      "q": "'Oppoq qor, oppoq qor, Yoqqanida quvonch bor...' satrlari qaysi fasl haqidagi she'rdan olingan?",
      "a": "Qish fasli haqida",
      "w": [
        "Bahor fasli",
        "Yoz fasli",
        "Kuz fasli"
      ],
      "e": "Qishda qor yog'ishi bolajonlar uchun eng quvonchli bayram va o'yin faslidir."
    },
    {
      "c": "bs3",
      "q": "Bog'chada bolalar barmoqlarini sanashda ishlatiladigan 'Bosh barmoq, Ko'rsatkich...' o'yini nima deb ataladi?",
      "a": "Barmoq o'yinlari (motorika mashqlari)",
      "w": [
        "Ko'z yumdi o'yini",
        "Bekinmachoq",
        "Arqon sakrash"
      ],
      "e": "Barmoq o'yinlari bolalarning mayda motorikasini va nutqini tez o'stiradi."
    },
    {
      "c": "bs4",
      "q": "'Bo'g'irsoq' ertagida Bo'g'irsoq pechkadan tushib qayerga qochib ketadi?",
      "a": "O'rmonga / Yo'lakka qarab",
      "w": [
        "Daryoga",
        "Maktabga",
        "Bog'chaga"
      ],
      "e": "Bo'g'irsoq dumalab yo'l bo'ylab o'rmonga ketadi va hayvonlarni uchratadi."
    },
    {
      "c": "bs5",
      "q": "Bo'g'irsoqni oxiri qaysi ayyor hayvon aldab yeb qo'yadi?",
      "a": "Tulki",
      "w": [
        "Bo'ri",
        "Ayiq",
        "Quyon"
      ],
      "e": "Tulki Bo'g'irsoqning burniga chiqib qo'shiq aytishini so'rab, uni yeb qo'yadi."
    },
    {
      "c": "bs6",
      "q": "Mashhur bolalar shoiri Quddus Muhammadiy qaysi she'rlari bilan tanilgan?",
      "a": "'Bahor keldi', 'Qanotli do'stlar', 'Tabiat alifbosi'",
      "w": [
        "O'tkan kunlar",
        "Boburnoma",
        "Xamsa"
      ],
      "e": "Quddus Muhammadiy o'zbek bolalar adabiyotining zabardast ustozidir."
    },
    {
      "c": "bs7",
      "q": "Bolalar sevib aytadigan sanama: 'Bir, ikki, uch — Bizda bordir ... ?'",
      "a": "Kuch!",
      "w": [
        "Non",
        "Daftar",
        "Suv"
      ],
      "e": "Sport va badantarbiya mashg'ulotlarida aytiladigan qiziqarli sanama."
    },
    {
      "c": "bs8",
      "q": "'Chittigul' xalq bolalar o'yinida bolalar qanday harakat qiladilar?",
      "a": "Qo'llarini bir-birining tizzasiga urib, qofiyali qo'shiq aytadilar",
      "w": [
        "Faqat yuguradilar",
        "To'p tepishadi",
        "Qog'oz qirqishadi"
      ],
      "e": "'Chitti-chitti chittigul, chittigulning tagi kul...' ritmik folklor o'yini."
    },
    {
      "c": "bs9",
      "q": "'Shoshma, shoshma, kapalak, Gulga qo'ngin, jon halak...' she'rida bolalar nimani kuzatadilar?",
      "a": "Chiroyli rang-barang kapalakni",
      "w": [
        "Qaldirg'ochni",
        "Asalarini",
        "Chumolini"
      ],
      "e": "Kapalak haqidagi sevimli lirik bolalar she'ridir."
    },
    {
      "c": "bs10",
      "q": "Zafar Diyor bolalar uchun qanday mavzularda she'rlar yozgan?",
      "a": "Ona Vatan, tabiat, mehnatsevarlik va maktabga intilish",
      "w": [
        "Faqat tarixiy janglar",
        "Kosmik fizika",
        "Detektiv sarguzasht"
      ],
      "e": "Zafar Diyor bolalar ruhiyatini nozik his qilgan shoir bo'lgan."
    },
    {
      "c": "bs11",
      "q": "'Zumrad va Qimmat' ertagida mehnatkash va odobli qiz kim?",
      "a": "Zumrad",
      "w": [
        "Qimmat",
        "O'gay ona",
        "Yalmog'iz"
      ],
      "e": "Zumrad kamtar, mehnatsevar va oqko'ngil bo'lgani uchun qizil sandiq bilan mukofotlanadi."
    },
    {
      "c": "bs12",
      "q": "'Quyosh chiqdi olamga, Nur taraldi bolamga...' she'ri kunning qaysi vaqtida aytiladi?",
      "a": "Ertalab uyqudan turganda / Tonggi badantarbiyada",
      "w": [
        "Kechasi uxlashdan oldin",
        "Tushlikda",
        "Qorong'uda"
      ],
      "e": "Bolalarni ertalab yaxshi kayfiyatda uyg'otish va quvnoq bo'lishi uchun aytiladi."
    },
    {
      "c": "bs13",
      "q": "Ertak aytishdan oldin boshlanadigan an'anaviy so'zlar qaysi?",
      "a": "'Bor ekan-u, yo'q ekan, och ekan-u, to'q ekan...'",
      "w": [
        "Kelinglar bolalar",
        "Bugun darsimiz",
        "Ertak tugadi"
      ],
      "e": "Ertaklar doimo sehrli kirish so'zlari (avvalambor) bilan boshlanadi."
    },
    {
      "c": "bs14",
      "q": "Bolalarga gigiyena va tozalikni o'rgatuvchi 'Moydodir' (Chukovskiy) ertagida kim qahramon?",
      "a": "Sehrli gapiruvchi Toshtog'ora (Moydodir)",
      "w": [
        "Sho'rva qozon",
        "Qalamdon",
        "Choynak"
      ],
      "e": "Moydodir yuvinmagan kir bolani toza bo'lishga o'rgatadi."
    },
    {
      "c": "bs15",
      "q": "Bahor elchisi hisoblangan qaysi qush haqida bolalar quvonib she'r aytadilar?",
      "a": "Qaldirg'och",
      "w": [
        "Qarg'a",
        "Boyqush",
        "Zag'izg'on"
      ],
      "e": "Qaldirg'och bahorda uchib kelib, xonadonlar peshtoqiga in quradi."
    },
    {
      "c": "bs16",
      "q": "'Chumoli va Ninachi' ertak-masalida qaysi jonivor butun yoz bo'yi kuylab, qishga tayyorgarlik ko'rmaydi?",
      "a": "Ninachi",
      "w": [
        "Chumoli",
        "Asalari",
        "O'rgimchak"
      ],
      "e": "Ninachi erinchoqlik qilgani uchun qishda qiyinchilikda qoladi."
    },
    {
      "c": "bs17",
      "q": "'Olmaxon, jon olmaxon, Daraxtlarda chopma qon...' she'rida olmaxon qishga nima g'amlaydi?",
      "a": "Yong'oq, qo'ziqorin va pista",
      "w": [
        "Muzqaymoq",
        "Baliq",
        "Sabzi"
      ],
      "e": "Olmaxonlar daraxt kovaklariga yong'oq va urug'lar to'playdilar."
    },
    {
      "c": "bs18",
      "q": "'G'ozlar, g'ozlar! — G'a-g'a-g'a! — Yegingiz keldimi? — Ha, ha, ha!' dialogi qanday o'yin?",
      "a": "Bog'cha bolalarining quvnoq harakatli quvlashmachoq o'yini",
      "w": [
        "Stol tennisi",
        "Suzish",
        "Shaxmat"
      ],
      "e": "G'ozlar va bo'ri o'yini chaqqonlik va epchillikni tarbiyalaydi."
    },
    {
      "c": "bs19",
      "q": "Bolalar uchun yozilgan 'Alla' qo'shig'ining asosiy vazifasi nima?",
      "a": "Go'dakni onaning shirin ovozi va mehri bilan tinchlantirib uxlatish",
      "w": [
        "Bolani cho'chitish",
        "Tez yugurtirish",
        "Ovqat pishirish"
      ],
      "e": "Alla ona mehrining eng sof va sehrli musiqiy ifodasidir."
    },
    {
      "c": "bs20",
      "q": "Bog'chada bayramlarda bolalar boshiga kiyadigan milliy bosh kiyim qaysi?",
      "a": "Do'ppi (Chust do'ppisi, iroqi do'ppi)",
      "w": [
        "Shlyapa",
        "Kepka",
        "Dubulg'a"
      ],
      "e": "Do'ppi xalqimizning milliy iftixori va go'zal an'anasidir."
    },
    {
      "c": "bs21",
      "q": "'Yashil archa, mo'l archa, Bezanibsan bolacha...' she'ri qaysi bayramda aytiladi?",
      "a": "Yangi yil bayramida",
      "w": [
        "Navro'z bayramida",
        "Mustaqillik kunida",
        "Hosil bayramida"
      ],
      "e": "Qorboz va Qorqiz kutib olinadigan Yangi yil archasi atrofida aytiladi."
    },
    {
      "c": "bs22",
      "q": "Navro'z bayramida bahor ne'mati sifatida bolalar va kattalar tayyorlaydigan shirin taom nima?",
      "a": "Sumalak",
      "w": [
        "Muzqaymoq",
        "Tort",
        "Shokolad"
      ],
      "e": "Undirilgan bug'doy maysasidan qozonda 24 soat qaynatiladigan milliy ne'mat."
    },
    {
      "c": "bs23",
      "q": "'Boychechak' qo'shig'i qachon aytiladi?",
      "a": "Erta bahorda qor tagidan ilk boychechaklar unib chiqqanda",
      "w": [
        "Qattiq qishda",
        "Kuz oxirida",
        "Yozning jaziramasida"
      ],
      "e": "Bolalar boychechak terib, xonadonlarga bahor suyunchisini ulashadilar."
    },
    {
      "c": "bs24",
      "q": "'Oq terakmi, ko'k terak?' xalq o'yinida bolalar nima qiladilar?",
      "a": "Ikki safga bo'linib, qo'l ushlashib bir-birlarining zanjirini uzishga intiladilar",
      "w": [
        "Daraxt ekadilar",
        "Rasm chizadilar",
        "Kitob o'qiydilar"
      ],
      "e": "Epchillik, birdamlik va jismoniy chaqqonlikni oshiruvchi jamoaviy xalq o'yini."
    },
    {
      "c": "bs25",
      "q": "'Koptogim, dumaloq, Sakraydi qarang...' she'rida koptok qanday tasvirlanadi?",
      "a": "Qizil, sariq, chaqqon va sakrovchi",
      "w": [
        "Og'ir va toshdek",
        "Suvda cho'kadigan",
        "Yirtiq"
      ],
      "e": "Jismoniy faollikni sevadigan bolalar uchun jo'shqin she'r."
    },
    {
      "c": "bs26",
      "q": "Bog'chada bolalarga o'rgatiladigan asosiy odob qoidalaridan biri qaysi?",
      "a": "Kattalarga salom berish va 'rahmat', 'iltimos' so'zlarini aytish",
      "w": [
        "Baqirib gapirish",
        "O'yinchoqlarni sindirish",
        "Tartibsizlik qilish"
      ],
      "e": "Salomlashish va muloyimlik bolalikdan odat tusiga kirishi lozim."
    },
    {
      "c": "bs27",
      "q": "Anvar Obidjon qanday asarlari bilan bolalarning sevimli shoiriga aylangan?",
      "a": "Qiziqarli, kulgili she'rlar, ertaklar va 'Meshpolvon' sarguzashtlari",
      "w": [
        "Qadimgi lug'atlar",
        "Ilmiy maqolalar",
        "Og'ir dramalar"
      ],
      "e": "O'zbekiston xalq shoiri Anvar Obidjon o'tkir yumor va bolalar tabiati bilimdonidir."
    },
    {
      "c": "bs28",
      "q": "'Sholg'om' ertagida sholg'omni yerdan sug'urib olishda eng oxirgi yordamga kim keladi?",
      "a": "Kichkina sichqoncha",
      "w": [
        "Kuchukcha",
        "Mushukcha",
        "Nabira qiz"
      ],
      "e": "Barchalari birgalashib, sichqoncha qo'shilgach ulkan sholg'omni sug'urib oladilar (birdamlik ibrati)."
    },
    {
      "c": "bs29",
      "q": "'Quyonvoy, quyonvoy, Quloqlaring nega uzun?' she'rida quyon nima deb javob beradi?",
      "a": "'Sharpa kelsa uzoqdan, Darrov eshitish uchun!'",
      "w": [
        "'Chiroyli ko'rinish uchun'",
        "'Muzlab qolmaslik uchun'",
        "'Uxlash uchun'"
      ],
      "e": "Jonivorlarning tabiiy xususiyatlarini bolalarga tushuntiruvchi quvnoq she'r."
    },
    {
      "c": "bs30",
      "q": "'Oltin tarvuz' ertagida oqko'ngil kambag'al dehqon qaysi qushning singan qanotini davolaydi?",
      "a": "Laylakning",
      "w": [
        "Qaldirg'ochning",
        "Burgutning",
        "Kabutarning"
      ],
      "e": "Laylak shifo topgach, yaxshilik evaziga dehqonga oltin urug'li tarvuz urug'ini tuhfa qiladi."
    },
    {
      "c": "bs31",
      "q": "'Mitti pahlavon' deb bolalar erinchoq bo'lmaslik uchun kimni aytadilar?",
      "a": "Ertalab o'rnini yig'ib, tishini yuvadigan va o'yinchoqlarini tartibga soladigan bolani",
      "w": [
        "Faqat televizor ko'radigan bolani",
        "Yig'loqi bolani",
        "Koptoq tepib yurgan bolani"
      ],
      "e": "Mustaqillik va tartib-intizomga undovchi ibratli ibora."
    },
    {
      "c": "bs32",
      "q": "'Bog'chamizda quvonch mo'l, Keling do'stlar, bering qo'l...' she'ri nimani targ'ib qiladi?",
      "a": "Do'stlik, mehr-oqibat va birgalikda shodlanishni",
      "w": [
        "Urushishni",
        "Yakka qolishni",
        "Arazlashni"
      ],
      "e": "Bog'cha jamoasida ahil bo'lib o'sish hissini mustahkamlaydi."
    }
  ],
  "maktabga-tayyorgarlik": [
    {
      "c": "mt1",
      "q": "Maktabga boradigan bola bilishi kerak bo'lgan asosiy geometrik shakllar qaysilar?",
      "a": "Doira, Kvadrat, Uchburchak va To'g'ri to'rtburchak",
      "w": [
        "Silindr va konus",
        "Integral egri chizig'i",
        "Paraboloit"
      ],
      "e": "Ushbu 4 ta asosiy shakl atrof-muhitdagi buyumlarni tanishda poydevordir."
    },
    {
      "c": "mt2",
      "q": "Svetoforning qaysi chirog'i yonganda piyodalar yo'ldan o'tishi mumkin?",
      "a": "Yashil chiroq yonganda",
      "w": [
        "Qizil chiroq yonganda",
        "Sariq chiroq yonganda",
        "Hech qaysi yonmaganda"
      ],
      "e": "Qizil — to'xta, Sariq — tayyorlan, Yashil — yo'ldan xavfsiz o't."
    },
    {
      "c": "mt3",
      "q": "Kuz faslining qaysi oyida maktablarda ilk qo'ng'iroq chalinadi va yangi o'quv yili boshlanadi?",
      "a": "Sentabr oyida (1-sentabr / Bilimlar kuni)",
      "w": [
        "Oktabrda",
        "Noyabrda",
        "Avgustda"
      ],
      "e": "Sentabr oyi maktab o'quvchilari uchun yangi dars yili boshlanish davridir."
    },
    {
      "c": "mt4",
      "q": "O'ng va chap tomonni to'g'ri farqlash: qaysi qo'l bilan odatda qalam ushlab yoziladi?",
      "a": "O'ng qo'l bilan (chapaqay bolalar chap qo'l bilan)",
      "w": [
        "Ikkala qo'l bilan bir vaqtda",
        "Oyoq bilan",
        "Faqat barmoqsiz"
      ],
      "e": "Fazoviy mo'ljal olish va yo'nalishlarni to'g'ri ajratish maktabga tayyorgarlikning muhim shartidir."
    },
    {
      "c": "mt5",
      "q": "Bir haftada nechta kun bor va ularning to'g'ri tartibi qanday?",
      "a": "7 kun: Dushanba, Seshanba, Chorshanba, Payshanba, Juma, Shanba, Yakshanba",
      "w": [
        "5 kun",
        "6 kun",
        "10 kun"
      ],
      "e": "Hafta kunlarini tartibi bilan bilish vaqtni rejalashtirishga o'rgatadi."
    },
    {
      "c": "mt6",
      "q": "Yil fasllari nechta va ular qanday ketma-ketlikda keladi?",
      "a": "4 fasl: Bahor -> Yoz -> Kuz -> Qish",
      "w": [
        "3 fasl",
        "2 fasl",
        "5 fasl"
      ],
      "e": "Tabiatdagi har bir fasl uch oydan, jami 12 oydan iborat."
    },
    {
      "c": "mt7",
      "q": "Tovush va harf orasidagi asosiy farq nimada?",
      "a": "Tovushni quloq bilan eshitamiz va aytamiz, harfni esa ko'z bilan ko'ramiz va yozamiz",
      "w": [
        "Ular bir xil narsa",
        "Harf faqat baland aytiladi",
        "Tovush faqat kitobda bo'ladi"
      ],
      "e": "Tovush nutqning eshitiladigan birligi, harf esa uning grafik belgisidir."
    },
    {
      "c": "mt8",
      "q": "Partada to'g'ri o'tirish qoidasi: qalam tutganda bel qanday tutilishi kerak?",
      "a": "Qadni tik tutish, ko'krakni stolga tiramaslik va ko'zdan daftargacha 30 sm masofa saqlash",
      "w": [
        "Bukchayib yotib olish",
        "Stol tagiga kirib o'tirish",
        "Boshni daftarga tekkizish"
      ],
      "e": "To'g'ri qaddi-qomat va ko'rish qobiliyatini asrash uchun partada to'g'ri o'tirish shart."
    },
    {
      "c": "mt9",
      "q": "Maktab sumkasiga solinadigan o'quv qurollari qatorini toping?",
      "a": "Daftar, kitob, ruchka, qalam, o'chirg'ich, chizg'ich",
      "w": [
        "O'yinchoq mashina, to'p, qoshiq",
        "Yostiq, ko'rpa, piyola",
        "Muzqaymoq, non"
      ],
      "e": "O'quvchi sumkasida faqat dars uchun zaruriy qurollar bo'lishi kerak."
    },
    {
      "c": "mt10",
      "q": "10 gacha to'g'ri va teskari sanash: 7 dan keyin qaysi son, 5 dan oldin qaysi son keladi?",
      "a": "7 dan keyin 8 keladi; 5 dan oldin 4 keladi",
      "w": [
        "7 dan keyin 6; 5 dan oldin 6",
        "7 dan keyin 9; 5 dan oldin 3",
        "7 dan keyin 10"
      ],
      "e": "Sonlarning natural qatordagi o'rnini bilish boshlang'ich arifmetika asosidir."
    },
    {
      "c": "mt11",
      "q": "Qaysi qatorda ortiqcha so'z bor: 'Olma, Nok, Shaftoli, Sabzi, Uzum'?",
      "a": "Sabzi (chunki u sabzavot, qolganlari esa mevalar)",
      "w": [
        "Olma",
        "Uzum",
        "Nok"
      ],
      "e": "Mantiqiy guruhlashda mevalar va sabzavotlarni ajratish qobiliyati."
    },
    {
      "c": "mt12",
      "q": "Qaysi qatorda ortiqcha hayvon bor: 'Sigir, Qo'y, Echki, Bo'ri, Ot'?",
      "a": "Bo'ri (chunki u yovvoyi hayvon, qolganlari esa uy hayvonlari)",
      "w": [
        "Sigir",
        "Ot",
        "Qo'y"
      ],
      "e": "Uy hayvonlari inson qaramog'ida yashaydi, yovvoyi hayvonlar tabiatda erkin yashaydi."
    },
    {
      "c": "mt13",
      "q": "Katta va kichik, uzun va qisqa tushunchalari qanday o'lchanadi?",
      "a": "Buyumlarni bir-biriga solishtirish va qiyoslash orqali",
      "w": [
        "Faqat rangiga qarab",
        "Nomiga qarab",
        "Og'irligiga qaramay"
      ],
      "e": "Qiyoslash tushunchalari bolaning mantiqiy fikrlashini charxlaydi."
    },
    {
      "c": "mt14",
      "q": "Qaychi bilan xavfsiz ishlash qoidasi qaysi?",
      "a": "Qaychini yopiq holda va halqasi bilan oldinga uzatish, faqat kattalar nazoratida qirqish",
      "w": [
        "Qaychini yugurib o'ynash",
        "Uchli tomonini boshqalarga qaratish",
        "O'rtoqlarga otish"
      ],
      "e": "O'quv mashg'ulotlarida texnika xavfsizligiga qat'iy rioya etish zarur."
    },
    {
      "c": "mt15",
      "q": "So'zni bo'g'inlarga ajratish: 'Ka-pa-lak' so'zida nechta bo'g'in bor?",
      "a": "3 ta bo'g'in (chunki 3 ta unli bor: a, a, a)",
      "w": [
        "2 ta bo'g'in",
        "4 ta bo'g'in",
        "1 ta bo'g'in"
      ],
      "e": "So'zda nechta unli tovush bo'lsa, shuncha bo'g'in bo'ladi."
    },
    {
      "c": "mt16",
      "q": "O'zbekiston Respublikasining davlat ramzlari qaysilar?",
      "a": "Davlat Bayrog'i, Davlat Gerbi va Davlat Madhiyasi",
      "w": [
        "Faqat darsliklar",
        "Faqat xaritalar",
        "Faqat pullar"
      ],
      "e": "Har bir o'quvchi o'z vatanining muqaddas davlat ramzlarini bilishi va hurmat qilishi shart."
    },
    {
      "c": "mt17",
      "q": "O'zbekiston Respublikasi Bayrog'ida qanday ranglar bor?",
      "a": "Moviy, oq, yashil ranglar va ikkita qizil hoshiya chiziq (yarim oy va 12 yulduz)",
      "w": [
        "Qizil, sariq, qora",
        "Faqat oq va ko'k",
        "Binafsha va to'q sariq"
      ],
      "e": "Moviy — osmon va musaffolik, oq — tinchlik va poklik, yashil — yangilanish va tabiat ramzi."
    },
    {
      "c": "mt18",
      "q": "Kun tartibi nima uchun kerak?",
      "a": "Vaqtni to'g'ri taqsimlash, o'z vaqtida dars qilish, dam olish va sog'lom o'sish uchun",
      "w": [
        "Faqat uxlash uchun",
        "Televizor ko'rish uchun",
        "Vaqtni behuda o'tkazish uchun"
      ],
      "e": "Rejali kun tartibi bolada intizom va muvaffaqiyat garovidir."
    },
    {
      "c": "mt19",
      "q": "Kitobni qanday asrash va varaqlash kerak?",
      "a": "Toza qo'l bilan, burchaklarini buklamasdan va sahifalariga chizmasdan xatcho'p ishlatish",
      "w": [
        "Varaqlarini yirtish",
        "Ovqat yeb turib o'qish",
        "Kitob ustiga rasm chizish"
      ],
      "e": "Kitob bilim manbai bo'lib, unga doimo ehtirom bilan munosabatda bo'lish kerak."
    },
    {
      "c": "mt20",
      "q": "Nonushtaning bola sog'lig'i uchun qanday ahamiyati bor?",
      "a": "Ertalab miyaga va tanaga kun bo'yi yaxshi o'qish uchun quvvat beradi",
      "w": [
        "Ahamiyati yo'q",
        "Faqat kechasi ovqatlanish kerak",
        "Charchatib qo'yadi"
      ],
      "e": "Sut, bo'tqa, meva va nonli to'yimli nonushta diqqatni jamlashga yordam beradi."
    },
    {
      "c": "mt21",
      "q": "Boshqotirma: 'Qishda oppoq, yozda kulrang, sakrab-sakrab chopadi...' bu qaysi hayvon?",
      "a": "Quyonvoy",
      "w": [
        "Ayiq",
        "Bo'ri",
        "Tulki"
      ],
      "e": "Quyon yirtqichlardan himoyalanish uchun qishda junini oq rangga o'zgartiradi."
    },
    {
      "c": "mt22",
      "q": "Topishmoq: 'Uyma-uy yuradi, lekin o'zi qimirlamaydi...' bu nima?",
      "a": "Yo'l / Ko'cha",
      "w": [
        "Avtobus",
        "Poyezd",
        "Samolyot"
      ],
      "e": "Xalq topishmoqlari bolalarning zehni va tasavvurini o'stiradi."
    },
    {
      "c": "mt23",
      "q": "Maktabda dars boshlanganini va tugaganini nima bildiradi?",
      "a": "Maktab qo'ng'irog'i (zang)",
      "w": [
        "Telefon signali",
        "Musiqa",
        "Daraxt barglari"
      ],
      "e": "Qo'ng'iroq chalinganda o'quvchilar sinfga kirib joylariga o'tiradilar."
    },
    {
      "c": "mt24",
      "q": "O'qituvchiga savol berish yoki javob aytish uchun nima qilish kerak?",
      "a": "Qo'lni ko'tarib, ruxsat so'rab o'rnidan turib odob bilan gapirish",
      "w": [
        "Baqirib javobni aytish",
        "Partani taqillatish",
        "Yonidagi bolaga pichirlash"
      ],
      "e": "Sinfda tartib saqlash barcha o'quvchilar yaxshi tushunishi uchun muhimdir."
    },
    {
      "c": "mt25",
      "q": "Tabiatdagi suv aylanishi: yomg'ir qayerdan yog'adi?",
      "a": "Quyosh ta'sirida bug'lanib osmonga ko'tarilgan bulutlardan",
      "w": [
        "Daraxt shoxlaridan",
        "Faqat tog'lardan",
        "Yer tagidan"
      ],
      "e": "Suv bug'lanadi, bulutga aylanadi va yana yomg'ir bo'lib Yerga tushadi."
    },
    {
      "c": "mt26",
      "q": "Qushlarga qishda qanday g'amxo'rlik qilish mumkin?",
      "a": "Daraxtlarga donxona (yemdon) yasab osish va don sepib turish",
      "w": [
        "Ularni quvlash",
        "Tosh otish",
        "Inlarini buzish"
      ],
      "e": "Qishda qushlarga mehr ko'rsatish insoniy ezgu fazilatdir."
    },
    {
      "c": "mt27",
      "q": "Rasm chizganda asosiy ranglar (birlamchi ranglar) qaysilar?",
      "a": "Qizil, Sariq va Ko'k ranglar",
      "w": [
        "Qora va oq",
        "Faqat yashil",
        "Pushti va kulrang"
      ],
      "e": "Qizil, sariq va ko'k ranglarni aralashtirib boshqa barcha ranglarni hosil qilish mumkin."
    },
    {
      "c": "mt28",
      "q": "Sariq va Ko'k ranglar aralashmasidan qaysi yangi rang hosil bo'ladi?",
      "a": "Yashil rang",
      "w": [
        "Binafsha rang",
        "To'q qizil",
        "Qora"
      ],
      "e": "Sariq + Ko'k = Yashil (ranglar sehrini o'rganish amaliyoti)."
    },
    {
      "c": "mt29",
      "q": "Qizil va Sariq ranglar aralashmasidan qaysi rang paydo bo'ladi?",
      "a": "Zarg'aldoq (Apelsin / To'q sariq) rang",
      "w": [
        "Ko'k",
        "Jigarrang",
        "Kulrang"
      ],
      "e": "Qizil + Sariq = Zarg'aldoq rang hosil qiladi."
    },
    {
      "c": "mt30",
      "q": "Tejamkorlik odobi: xonadan chiqayotganda nima qilish kerak?",
      "a": "Chiroqni o'chirish va jo'mrakdagi suvni mahkam yopish",
      "w": [
        "Chiroqni yoqiq qoldirish",
        "Suvni oqizib ketish",
        "Eshikni ochiq tashlash"
      ],
      "e": "Elektr va suvni asrash oilaviy va umumiy tabiat boyliklarini qadrlashdir."
    },
    {
      "c": "mt31",
      "q": "Kasal bo'lmaslik uchun nima qilish kerak?",
      "a": "Qo'llarni sovunlab yuvish, toza havoda sayr qilish, sport bilan shug'ullanish va vitaminlar yeyish",
      "w": [
        "Kirlangan qo'llar bilan ovqatlanish",
        "Kechgacha telefonda o'yin o'ynash",
        "Yuvinmaslik"
      ],
      "e": "Sog'lom turmush tarzi o'qishda a'lochi bo'lishning asosiy kafolatidir."
    },
    {
      "c": "mt32",
      "q": "Maktab o'quvchisining eng asosiy vazifasi nima?",
      "a": "Yaxshi o'qish, yangi bilimlarni qunt bilan egallash va ota-onasi hamda ustozlarini xursand qilish",
      "w": [
        "Faqat uxlash",
        "O'rtoqlari bilan urushish",
        "Dars qoldirish"
      ],
      "e": "Ilm olish orqali bola kelajakda orzu qilgan kasb egasi va yetuk inson bo'lib yetishadi."
    }
  ]
};

// Expose globally to window
if (typeof window !== 'undefined') {
  window.SUBJECT_DEEP_THEORY_BANK = SUBJECT_DEEP_THEORY_BANK;
  window.DISTINCT_30_QUESTIONS_BY_SUBJECT = DISTINCT_30_QUESTIONS_BY_SUBJECT;
}
if (typeof module !== 'undefined') {
  module.exports = { SUBJECT_DEEP_THEORY_BANK, DISTINCT_30_QUESTIONS_BY_SUBJECT };
}
