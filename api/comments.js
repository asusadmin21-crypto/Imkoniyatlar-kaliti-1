// ============================================================================
// IMKONIYATLAR KALITI — Community Discussion & Comments Serverless API (Vercel)
// Real-time comments, replies and likes exchange across all users.
// ============================================================================

const globalComments = globalThis.__ikCommentsState || [
  {
    id: "POST-101",
    author: "Rustamov Abrorbek Jamshid o'g'li",
    role: "Talaba (Med Texnikum 2-kurs)",
    category: "🩺 Tibbiyot & Klinik amaliyot",
    content: "Assalomu alaykum! Imkoniyatlar Kaliti sayti orqali Anatomiya, Fiziologiya va Farmakologiyadan takrorlanmaydigan testlarni ishlab chiqdim. Shoshilinch tibbiy yordam va qon guruhlari bo'yicha amaliy savollar ayni klinik amaliyotga mos tuzilgan!",
    startTime: "14:10:05",
    elapsedTime: "00:12:40",
    endTime: "14:22:45",
    createdAt: "Bugun",
    likes: 14,
    replies: [
      {
        author: "Imkoniyatlar Kaliti Admini (asusadmin21@gmail.com)",
        isAdmin: true,
        text: "Va alaykum assalom, Abrorbek! Har bir fan bo'yicha 30 talik testlar endi 100% takrorlanmaydigan haqiqiy kasbiy savollar bilan to'ldirildi. Muvaffaqiyat tilaymiz!",
        time: "14:25:10"
      }
    ]
  },
  {
    id: "POST-102",
    author: "Ergashev Sardorbek Karim o'g'li",
    role: "Tarmoq & Dastur Muhandisi",
    category: "💻 Dasturlash & IT tajribalari",
    content: "HTML5, CSS3, JavaScript, Python va Telekom tarmoqlaridan testlarni yechdim. Savollar bir-biriga o'xshamaydi, ayniqsa Event Loop, CSS Flexbox/Grid va SFP+ optik modullar bo'yicha amaliy misollar juda zo'r tushuntirilgan!",
    startTime: "15:02:11",
    elapsedTime: "00:08:19",
    endTime: "15:10:30",
    createdAt: "Bugun",
    likes: 19,
    replies: [
      {
        author: "Dilshodbek Veb-Dasturchi",
        isAdmin: false,
        text: "Haqiqatan ham! Ranglar mavzusini o'zgartirish (Theme Customizer) qo'shilgani ham ko'zni charchatmaslik uchun ajoyib qulaylik bo'libdi.",
        time: "15:15:20"
      }
    ]
  },
  {
    id: "POST-103",
    author: "Nigora Karimova (O'qituvchi)",
    role: "Tilshunoslik & Maktab Pedagogi",
    category: "🌍 Chet tillari & Lug'at boyligi",
    content: "Tojik, Turk, Afg'on, Ingliz va Nemis tillari bo'yicha darsliklar va testlar boyitilibdi. Ayniqsa bog'cha she'rlari va maktabga tayyorgarlik bo'limi tarbiyachilar uchun ayni muddao!",
    startTime: "16:20:00",
    elapsedTime: "00:05:15",
    endTime: "16:25:15",
    createdAt: "Bugun",
    likes: 27,
    replies: []
  }
];
globalThis.__ikCommentsState = globalComments;

module.exports = function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "GET") {
    return res.status(200).json({ success: true, posts: globalComments });
  }

  if (req.method === "POST") {
    let body = {};
    if (req.body && typeof req.body === "object") {
      body = req.body;
    } else if (typeof req.body === "string" && req.body.trim()) {
      try {
        body = JSON.parse(req.body);
      } catch (_) {}
    }

    const action = body.action || "create";

    if (action === "create" && body.post) {
      globalComments.unshift(body.post);
      if (globalComments.length > 200) globalComments.pop();
      return res.status(200).json({ success: true, posts: globalComments });
    }

    if (action === "like" && body.postId) {
      const p = globalComments.find(post => post.id === body.postId);
      if (p) {
        p.likes = (p.likes || 0) + 1;
      }
      return res.status(200).json({ success: true, posts: globalComments });
    }

    if (action === "reply" && body.postId && body.reply) {
      const p = globalComments.find(post => post.id === body.postId);
      if (p) {
        p.replies = p.replies || [];
        p.replies.push(body.reply);
      }
      return res.status(200).json({ success: true, posts: globalComments });
    }
  }

  return res.status(200).json({ success: true, posts: globalComments });
};
