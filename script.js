const DEFAULT_LANGUAGE = "en";
const LANGUAGE_STORAGE_KEY = "bondie.site.language";
const SUPPORTED_LANGUAGES = ["en", "tr", "es"];
const LANGUAGE_SLUGS = { en: "eng", tr: "tr", es: "esp" };
const LANGUAGE_ALIASES = { en: "en", eng: "en", tr: "tr", es: "es", esp: "es" };

const storeBadges = {
  en: {
    appStore: "assets/badges/app-store-en.svg",
    googlePlay: "assets/badges/google-play-en.png",
  },
  tr: {
    appStore: "assets/badges/app-store-tr.svg",
    googlePlay: "assets/badges/google-play-tr.png",
  },
  es: {
    appStore: "assets/badges/app-store-es.svg",
    googlePlay: "assets/badges/google-play-es.png",
  },
};

const translations = {
  en: {
    metaTitle: "Bondie | Screen-free activity ideas",
    metaDescription:
      "Bondie is a local-first iOS app with screen-free, age-aware, safe activity ideas for parents and caregivers.",
    ogDescription: "Calm, short, safe play ideas based on your child's age, energy, and setting.",
    "nav.aria": "Main navigation",
    "brand.aria": "Bondie home",
    "nav.how": "How it works",
    "nav.faq": "FAQ",
    "hero.title": "Tiny moments, big <span class=\"accent\">bonds</span>",
    "hero.lede": "Short, screen-free games to play together with your child.",
    "today.eyebrow": "Card of the day",
    "today.title": "What shall we play today?",
    "today.text": "Coming up with a new idea at the end of the day is hard. Bondie suggests one card every day, so your energy goes into playing, not deciding.",
    "today.button": "Draw another card",
    "act.bubble.title": "Bubble Chase",
    "act.bubble.meta": "10 min · Ages 2–6 · Move",
    "act.bubble.blurb": "Chase bubbles gently and pop them with hands or feet.",
    "act.hunt.title": "Color Hunt",
    "act.hunt.meta": "10 min · Ages 2–7 · Think",
    "act.hunt.blurb": "Pick a color and find matching objects around you.",
    "card.title": "What's inside a card?",
    "card.lede": "Every game is a single card. Reading it takes less than a minute.",
    "card.name": "Box Adventure",
    "card.stepsTitle": "Steps",
    "card.step1": "Choose what the box will become.",
    "card.step2": "Decorate or arrange the box.",
    "card.step3": "Act out an adventure inside or around it.",
    "card.materials": "Materials: Cardboard box",
    "card.whyTitle": "Why it helps",
    "card.why1Label": "Imagination",
    "card.why1Text": "Invites the child to turn ordinary things into stories, characters, or new possibilities.",
    "card.why2Label": "Planning",
    "card.why2Text": "Supports early sequencing by asking what comes next.",
    "card.safetyTitle": "Safety note",
    "card.s1Title": "Three short steps",
    "card.s1Text": "How to play, what you need, how long it takes. Read it once, then put the phone away.",
    "card.s2Title": "Why it helps",
    "card.s2Text": "Each card tells you in a few sentences what the game gives your child.",
    "card.s3Title": "Safety note",
    "card.s3Text": "A short check of the space and materials before you start. Some games add warnings of their own.",
    "foryou.title": "A deck shuffled for you",
    "foryou.lede": "We ask only two things: their age and what they love. Bondie does the rest.",
    "foryou.ageTitle": "How old is your child?",
    "foryou.ageUnit": "years old",
    "foryou.ageDown": "Decrease age",
    "foryou.ageUp": "Increase age",
    "foryou.likesTitle": "What do they love?",
    "foryou.likesHint": "Pick as many as you like. Pick none and you get cards from all of them.",
    "foryou.readyKicker": "Your deck is ready",
    "explore.title": "Explore",
    "explore.text": "The whole catalog, freshly shuffled every time. Filter by age, energy, and place.",
    "explore.age": "Age",
    "explore.energy": "Energy",
    "explore.where": "Place",
    "fav.title": "Favorites",
    "fav.text": "Games you tap the heart on gather here: the small library you keep coming back to.",
    "trust.title": "Play with peace of mind",
    "trust.f1Title": "No account",
    "trust.f1Text": "No sign-up, email, or password. Download and play.",
    "trust.f2Title": "Your data stays on your device",
    "trust.f2Text": "Your profile, favorites, and preferences are stored only on your phone.",
    "trust.f3Title": "No ads, no tracking",
    "trust.f3Text": "Nothing is shared with anyone for advertising, tracking, or analytics.",
    "faq.title": "Questions, answered",
    "faq.lede": "What people ask most before their first card.",
    "faq.contactTitle": "Have another question?",
    "faq.contactText": "Write to us about the app, privacy, safety, or a game.",
    "faq.q1": "Is Bondie paid?",
    "faq.a1": "No. Bondie is completely free right now.",
    "faq.q2": "Does it need the internet?",
    "faq.a2": "No. The games come inside the app, so it works without a connection.",
    "faq.q3": "What ages is it for?",
    "faq.a3": "Ages 0 to 10. You enter your child's age once and fitting games come first.",
    "faq.q4": "Do I need an account?",
    "faq.a4": "No. There is no account; your profile and favorites are stored only on your phone.",
    "faq.q5": "Do the games need materials?",
    "faq.a5": "Most games use things you already have at home, or nothing at all. Each card lists what you need.",
    "faq.q6": "Is it on Android?",
    "faq.a6": "Not yet. Bondie is on iPhone for now; the Android version is coming soon.",
    "faq.q7": "Which languages can I use?",
    "faq.a7": "English, Turkish, and Spanish.",
    "close.title": "Draw a card tonight.",
    "fact.time": "Time",
    "fact.ages": "Ages",
    "fact.place": "Place",
    "card.blurb": "Turn a cardboard box into a rocket, boat, cave, car, or house.",
    "card.time": "15 min",
    "card.place": "Indoor",
    "card.s0Title": "At a glance",
    "card.s0Text": "Time, ages, and place sit right on the front. You know at once whether it fits.",
    "foryou.ageBody": "We'll pick games that fit their age.",
    "close.text": "The game ends; the bond stays.",
    "ready.calm.title": "Garden Water Helper",
    "ready.calm.blurb": "Help water one plant slowly and carefully.",
    "ready.calm.time": "10 min",
    "ready.calm.place": "Outdoor",
    "ready.create.title": "Nature Paint Brushes",
    "ready.create.blurb": "Use leaves, grass, or twigs as brushes to make textured art.",
    "ready.create.time": "10 min",
    "ready.create.place": "Outdoor",
    "ready.feel.title": "Peekaboo Smiles",
    "ready.feel.blurb": "Hide your face, then come back with a warm smile.",
    "ready.feel.time": "3 min",
    "ready.feel.place": "Anywhere",
    "ready.move.title": "Gravity Shift",
    "ready.move.blurb": "Pretend gravity has moved to a wall, corner, or chair and adjust your body to match.",
    "ready.move.time": "10 min",
    "ready.move.place": "Indoor",
    "ready.talk.title": "Consonant-Only Talk",
    "ready.talk.blurb": "Try speaking by dropping vowel sounds and letting the other person decode it.",
    "ready.talk.time": "10 min",
    "ready.talk.place": "Anywhere",
    "ready.think.title": "Map the Room",
    "ready.think.blurb": "Draw a simple map of the room and mark where things are.",
    "ready.think.time": "15 min",
    "ready.think.place": "Indoor",
    "nav.categories": "Categories",
    "act.ladder.title": "Bravery Ladder",
    "act.ladder.meta": "10 min · Ages 4–10 · Feel",
    "act.ladder.blurb": "Break a brave goal into tiny ladder steps that feel possible.",
    "cat.title": "Six categories, one deck",
    "cat.calm": "Calm",
    "cat.calmHint": "Slow down, listen",
    "cat.create": "Create",
    "cat.createHint": "Draw, build, imagine",
    "cat.feel": "Feel",
    "cat.feelHint": "Feel it, say it",
    "cat.move": "Move",
    "cat.moveHint": "Jump, run, balance",
    "cat.talk": "Talk",
    "cat.talkHint": "Ask, tell, listen",
    "cat.think": "Think",
    "cat.thinkHint": "Find, count, solve",
    "footer.madeBy": "Bondie is a Brocan app.",
    "footer.contact": "Contact",
    "language.aria": "Language",
    "navToggle.aria": "Open menu",
    "nav.privacy": "Privacy",
    "nav.terms": "Terms",
    "nav.safety": "Safety",
    "nav.support": "Support",
    "store.appLabel": "Download Bondie on the App Store",
    "store.playLabel": "Google Play coming soon",
    "store.soon": "Coming soon",
    "common.updated": "Last updated: November 20, 2026",
    "privacy.title": "Privacy Policy",
    "privacy.dataTitle": "What data does Bondie store?",
    "privacy.dataText":
      "Bondie stores parent name, child name, child age, avatars, activity preferences, favorites, recently viewed games, and language preference in app storage on the device. This information is entered by the parent in the app or created locally while using the app. Bondie uses it to personalize the experience, show age- and preference-aware activity suggestions, and remember favorites and the games you looked at recently.",
    "privacy.storageTitle": "Where is data kept?",
    "privacy.storageText":
      "Bondie does not use an external database for this profile and activity data. This data is not sent off the device; the Bondie team and third-party service providers cannot access this local data.",
    "privacy.thirdTitle": "Third-party sharing",
    "privacy.thirdText":
      "Bondie does not share in-app profile or activity data with third parties for advertising, tracking, analytics, or marketing. The app does not use this data to track users across different apps or websites.",
    "privacy.supportTitle": "Support and contact data",
    "privacy.supportText": "When you email us for support, your email address and message reach us. This information is used only to answer your request, review privacy or safety reports, and follow up on bug feedback.",
    "privacy.retentionTitle": "Data retention and deletion",
    "privacy.retentionText": "Local app data is kept on the device while the user continues using the app. When the app is deleted, this data may be removed by the operating system. Bondie does not keep a separate server-side account or backup for this data. Emails you send us are kept in our support mailbox so we can respond to your request. These records are used only for support, privacy, safety reports, or bug feedback follow-up. For privacy questions, deletion of support records, or help deleting local data, write to <a href=\"mailto:hello@brocan.co\">hello@brocan.co</a>.",
    "privacy.notCollectTitle": "What does Bondie not collect?",
    "privacy.notCollectText":
      "The current app experience does not ask for a child's email address, phone number, precise location, photos, contacts, microphone, or camera. Bondie does not sell personal information.",
    "terms.title": "Terms of Use",
    "terms.scopeTitle": "Scope of these terms",
    "terms.scopeText":
      "These terms apply when you use the Bondie app and the activity content provided by Bondie. By using the app, you agree to these terms and the Privacy Policy.",
    "terms.appleTitle": "Apple standard EULA",
    "terms.appleText":
      "When Bondie is downloaded through the App Store, Apple's standard end user license agreement applies to the licensed use of the app. These terms do not replace Apple's standard license agreement; they only provide additional notes about Bondie's use.",
    "terms.useTitle": "Use of the app",
    "terms.useText":
      "Bondie offers screen-free activity ideas for families. The app is designed for adults who choose, adapt, and supervise activities for children. Activities may not be suitable for every child, family, environment, or condition; users should assess suggestions based on their own situation.",
    "terms.adviceTitle": "Not professional advice",
    "terms.adviceText":
      "Bondie is not medical, therapeutic, educational, or childcare professional advice. For concerns about a child's health, development, behavior, or safety, consult a qualified professional.",
    "terms.parentTitle": "Parent responsibility",
    "terms.parentText":
      "Before starting an activity, the parent or caregiver is responsible for checking materials, space, weather, allergies, choking risks, and supervision. If an activity feels unsafe, stressful, or unsuitable, it should be stopped.",
    "terms.contentTitle": "Content changes",
    "terms.contentText":
      "Bondie may update, change, or remove activity content, categories, and features from time to time. The app is not guaranteed to be uninterrupted, error-free, or identical on every device.",
    "terms.contactTitle": "Contact",
    "terms.contactText": "For terms of use, app support, safety reports, or privacy requests, write to <a href=\"mailto:hello@brocan.co\">hello@brocan.co</a>.",
    "safety.updated": "A short adult check before every activity.",
    "safety.notesTitle": "Notes on each card",
    "safety.notesText": "Every game has a shield button. It opens the notes for that game: what is specific to it, and the reminders that apply. Read them before you start.",
    "safety.under3Title": "Children under 3",
    "safety.under3Text": "Young children put things in their mouths. Keep small objects, balloons, and anything that can come apart out of reach, and stay within arm's length.",
    "safety.waterTitle": "Water, food, and outdoors",
    "safety.waterText": "Never leave a child alone near water, even a shallow bowl. Check for allergies before games with food and cut food into small pieces. Outdoors, choose a spot away from traffic and watch the sun, heat, and cold.",
    "safety.oneTitle": "Adult supervision",
    "safety.oneText": "Every activity should be chosen, adapted, and supervised by a responsible adult.",
    "safety.twoTitle": "Space check",
    "safety.twoText": "Remove sharp objects, slippery surfaces, cables, and tripping risks.",
    "safety.threeTitle": "Material check",
    "safety.threeText": "Use age-appropriate materials; check small parts, batteries, magnets, and allergens.",
    "safety.fourTitle": "Age and development",
    "safety.fourText":
      "Assess suggestions based on the child's age, development, interests, and readiness that day.",
    "safety.fiveTitle": "Adapt and stop",
    "safety.fiveText": "If the child seems tired, overwhelmed, uninterested, or unsafe, stop the activity.",
    "safety.sixTitle": "Health and emergencies",
    "safety.sixText":
      "If injury, allergic symptoms, or health risks appear, stop the activity and seek appropriate professional help.",
    "sheet.close": "Close",
  },
  tr: {
    metaTitle: "Bondie | Ekransız aktivite fikirleri",
    metaDescription:
      "Bondie, ebeveynler ve bakım verenler için ekransız, yaşa uygun ve güvenli aktivite fikirleri sunan local-first iOS uygulamasıdır.",
    ogDescription:
      "Çocuğun yaşına, enerjisine ve bulunduğunuz ortama göre sakin, kısa ve güvenli oyun fikirleri.",
    "nav.aria": "Ana navigasyon",
    "brand.aria": "Bondie ana sayfa",
    "nav.how": "Nasıl çalışır",
    "nav.faq": "SSS",
    "hero.title": "Küçük anlar, büyük <span class=\"accent\">bağlar</span>",
    "hero.lede": "Çocuğunla birlikte oynayacağın kısa, ekransız oyunlar.",
    "today.eyebrow": "Günün kartı",
    "today.title": "Bugün ne oynasak?",
    "today.text": "Günün sonunda yeni bir fikir bulmak zor. Bondie her gün tek bir kart önerir; enerjin karar vermeye değil, oynamaya kalır.",
    "today.button": "Başka bir kart çek",
    "act.bubble.title": "Baloncuk Yakalama",
    "act.bubble.meta": "10 dk · 2–6 yaş · Hareket",
    "act.bubble.blurb": "Baloncukları nazikçe kovala, el ya da ayakla patlat.",
    "act.hunt.title": "Renk Avı",
    "act.hunt.meta": "10 dk · 2–7 yaş · Düşünme",
    "act.hunt.blurb": "Bir renk seç ve etrafında o renge uyan nesneleri bul.",
    "card.title": "Kartın içinde ne var?",
    "card.lede": "Her oyun tek bir kart. Okuması bir dakika sürmez.",
    "card.name": "Kutu Macerası",
    "card.stepsTitle": "Adımlar",
    "card.step1": "Kutunun neye dönüşeceğini seç.",
    "card.step2": "Kutuyu süsle veya düzenle.",
    "card.step3": "İçinde ya da etrafında bir macera canlandır.",
    "card.materials": "Malzemeler: Karton kutu",
    "card.whyTitle": "Neden faydalı",
    "card.why1Label": "Hayal Gücü",
    "card.why1Text": "Çocuğu sıradan şeyleri hikayelere, karakterlere veya yeni olasılıklara dönüştürmeye davet eder.",
    "card.why2Label": "Planlama",
    "card.why2Text": "Sırada ne var diye düşündürerek erken sıralama becerisini destekler.",
    "card.safetyTitle": "Güvenlik notu",
    "card.s1Title": "Üç kısa adım",
    "card.s1Text": "Nasıl oynanır, ne gerekir, ne kadar sürer. Bir kez oku, sonra telefonu kenara bırak.",
    "card.s2Title": "Neden faydalı",
    "card.s2Text": "Her kart, oyunun çocuğuna ne kattığını birkaç cümleyle söyler.",
    "card.s3Title": "Güvenlik notu",
    "card.s3Text": "Başlamadan önce alan ve malzeme için kısa bir kontrol. Bazı oyunlarda o oyuna özel uyarılar da çıkar.",
    "foryou.title": "Deste sana göre karışır",
    "foryou.lede": "Yalnızca iki şey soruyoruz: yaşı ve sevdikleri. Gerisini Bondie ayarlar.",
    "foryou.ageTitle": "Çocuğun kaç yaşında?",
    "foryou.ageUnit": "yaşında",
    "foryou.ageDown": "Yaşı azalt",
    "foryou.ageUp": "Yaşı artır",
    "foryou.likesTitle": "Neleri sever?",
    "foryou.likesHint": "İstediğin kadar seç. Hiçbirini seçmezsen hepsinden kart gelir.",
    "foryou.readyKicker": "Desten hazır",
    "explore.title": "Keşfet",
    "explore.text": "Tüm katalog, her seferinde taze karışır. Yaşa, enerjiye ve yere göre süz.",
    "explore.age": "Yaş",
    "explore.energy": "Enerji",
    "explore.where": "Yer",
    "fav.title": "Favoriler",
    "fav.text": "Kalbe dokunduğun oyunlar burada toplanır; sık döndüğün küçük kütüphanen.",
    "trust.title": "İçin rahat olsun",
    "trust.f1Title": "Hesap yok",
    "trust.f1Text": "Kayıt, e-posta ya da şifre istemez. İndir ve oyna.",
    "trust.f2Title": "Verilerin cihazında",
    "trust.f2Text": "Profilin, favorilerin ve tercihlerin yalnızca telefonunda saklanır.",
    "trust.f3Title": "Reklam ve izleme yok",
    "trust.f3Text": "Hiçbir veri reklam, izleme ya da analiz için kimseyle paylaşılmaz.",
    "faq.title": "Sık sorulanlar",
    "faq.lede": "İlk karttan önce en çok merak edilenler.",
    "faq.contactTitle": "Başka bir sorun mu var?",
    "faq.contactText": "Uygulama, gizlilik, güvenlik ya da bir oyun hakkında bize yaz.",
    "faq.q1": "Bondie ücretli mi?",
    "faq.a1": "Hayır. Bondie şu an tamamen ücretsiz.",
    "faq.q2": "İnternet gerekiyor mu?",
    "faq.a2": "Hayır. Oyunlar uygulamanın içinde gelir; internet olmadan da çalışır.",
    "faq.q3": "Hangi yaşlar için?",
    "faq.a3": "0–10 yaş arası. Çocuğunun yaşını bir kez girersin, uygun oyunlar öne gelir.",
    "faq.q4": "Hesap açmam gerekiyor mu?",
    "faq.a4": "Hayır. Hesap yok; profilin ve favorilerin yalnızca telefonunda saklanır.",
    "faq.q5": "Oyunlar için malzeme gerekir mi?",
    "faq.a5": "Çoğu oyun evdeki eşyalarla ya da hiç malzemesiz oynanır. Gerekenler her kartta yazar.",
    "faq.q6": "Android'de var mı?",
    "faq.a6": "Henüz yok. Bondie şimdilik iPhone'da; Android sürümü yakında.",
    "faq.q7": "Hangi dillerde kullanabilirim?",
    "faq.a7": "Türkçe, İngilizce ve İspanyolca.",
    "close.title": "Bu akşam bir kart çek.",
    "fact.time": "Süre",
    "fact.ages": "Yaş",
    "fact.place": "Yer",
    "card.blurb": "Bir karton kutuyu rokete, tekneye, mağaraya, arabaya ya da eve dönüştür.",
    "card.time": "15 dk",
    "card.place": "İç mekan",
    "card.s0Title": "Bir bakışta",
    "card.s0Text": "Süre, yaş ve yer kartın ön yüzünde yazar. Size uygun mu, hemen anlarsın.",
    "foryou.ageBody": "Oyunları yaşına göre seçeceğiz.",
    "close.text": "Oyun biter, aranızdaki bağ kalır.",
    "ready.calm.title": "Bahçe Sulama Yardımcısı",
    "ready.calm.blurb": "Bir bitkiyi birlikte, yavaş ve dikkatli sulayın.",
    "ready.calm.time": "10 dk",
    "ready.calm.place": "Dış mekan",
    "ready.create.title": "Doğadan Fırçalar",
    "ready.create.blurb": "Yaprak, çimen ya da ince dalları fırça gibi kullanıp dokulu resimler yap.",
    "ready.create.time": "10 dk",
    "ready.create.place": "Dış mekan",
    "ready.feel.title": "Ce-ee Gülümsemeleri",
    "ready.feel.blurb": "Yüzünü sakla, sonra sıcak bir gülümsemeyle geri gel.",
    "ready.feel.time": "3 dk",
    "ready.feel.place": "Her yer",
    "ready.move.title": "Yer Çekimi Değişti",
    "ready.move.blurb": "Yer çekimi duvara, köşeye ya da sandalyeye geçmiş gibi davran ve bedenini buna göre ayarla.",
    "ready.move.time": "10 dk",
    "ready.move.place": "İç mekan",
    "ready.talk.title": "Sesli Harf Yok",
    "ready.talk.blurb": "Sesli harfleri çıkararak konuşmayı dene, diğer kişi ne dediğini çözsün.",
    "ready.talk.time": "10 dk",
    "ready.talk.place": "Her yer",
    "ready.think.title": "Odanın Haritası",
    "ready.think.blurb": "Odanın basit bir haritasını çiz ve eşyaların yerini işaretle.",
    "ready.think.time": "15 dk",
    "ready.think.place": "İç mekan",
    "nav.categories": "Kategoriler",
    "act.ladder.title": "Cesaret Merdiveni",
    "act.ladder.meta": "10 dk · 4–10 yaş · Duygu",
    "act.ladder.blurb": "Cesaret isteyen bir hedefi, çıkılabilir küçük basamaklara ayır.",
    "cat.title": "Altı kategori, bir deste",
    "cat.calm": "Sakinlik",
    "cat.calmHint": "Yavaşla, dinle",
    "cat.create": "Yaratıcılık",
    "cat.createHint": "Çiz, kur, hayal et",
    "cat.feel": "Duygu",
    "cat.feelHint": "Hisset, anlat",
    "cat.move": "Hareket",
    "cat.moveHint": "Zıpla, koş, dengede dur",
    "cat.talk": "Konuşma",
    "cat.talkHint": "Sor, anlat, dinle",
    "cat.think": "Düşünme",
    "cat.thinkHint": "Bul, say, çöz",
    "footer.madeBy": "Bondie bir Brocan uygulamasıdır.",
    "footer.contact": "İletişim",
    "language.aria": "Dil",
    "navToggle.aria": "Menüyü aç",
    "nav.privacy": "Gizlilik",
    "nav.terms": "Koşullar",
    "nav.safety": "Güvenlik",
    "nav.support": "Destek",
    "store.appLabel": "Bondie'yi App Store'dan indir",
    "store.playLabel": "Google Play yakında",
    "store.soon": "Yakında",
    "common.updated": "Son güncelleme: 20 Kasım 2026",
    "privacy.title": "Gizlilik Politikası",
    "privacy.dataTitle": "Bondie hangi verileri saklar?",
    "privacy.dataText":
      "Bondie; ebeveyn adı, çocuk adı, çocuk yaşı, avatarlar, aktivite tercihleri, favoriler, son bakılan oyunlar ve dil tercihini cihazdaki uygulama depolamasında saklar. Bu bilgiler ebeveyn tarafından uygulama içinde girilir veya uygulama kullanımı sırasında cihazda oluşur. Bondie bu bilgileri deneyimi kişiselleştirmek, yaşa ve tercihlere uygun aktivite önerileri göstermek, favorileri ve son bakılan oyunları hatırlamak için kullanır.",
    "privacy.storageTitle": "Veriler nerede tutulur?",
    "privacy.storageText":
      "Bondie bu profil ve aktivite verileri için harici bir veritabanı kullanmaz. Bu veriler cihaz dışına gönderilmez; Bondie ekibi veya üçüncü taraf hizmet sağlayıcıları bu lokal verilere erişemez.",
    "privacy.thirdTitle": "Üçüncü taraflarla paylaşım",
    "privacy.thirdText":
      "Bondie uygulama içindeki profil ve aktivite verilerini reklam, izleme, analiz veya pazarlama amacıyla üçüncü taraflarla paylaşmaz. Uygulama bu verileri kullanarak kullanıcıyı farklı uygulamalar veya web siteleri arasında takip etmez.",
    "privacy.supportTitle": "Destek ve iletişim verileri",
    "privacy.supportText": "Destek için bize e-posta yazdığınızda e-posta adresiniz ve mesajınız bize ulaşır. Bu bilgiler yalnızca talebinizi yanıtlamak, gizlilik veya güvenlik bildirimlerini değerlendirmek ve hata geri bildirimlerini takip etmek için kullanılır.",
    "privacy.retentionTitle": "Veri saklama ve silme",
    "privacy.retentionText": "Lokal uygulama verileri, kullanıcı uygulamayı kullanmaya devam ettiği sürece cihazda saklanır. Uygulama silindiğinde bu veriler işletim sistemi tarafından kaldırılabilir. Bondie bu veriler için sunucu tarafında ayrı bir hesap veya yedek tutmaz. Bize gönderdiğiniz e-postalar, talebinizi yanıtlayabilmemiz için destek e-posta kutumuzda tutulur. Bu kayıtlar yalnızca destek, gizlilik, güvenlik bildirimi veya hata geri bildirimi takibi için kullanılır. Gizlilik soruları, destek kayıtlarının silinmesi veya lokal verileri silme konusunda yardım için <a href=\"mailto:hello@brocan.co\">hello@brocan.co</a> adresine yazabilirsiniz.",
    "privacy.notCollectTitle": "Bondie neleri toplamaz?",
    "privacy.notCollectText":
      "Mevcut uygulama deneyimi çocuğun e-posta adresini, telefon numarasını, hassas konumunu, fotoğraflarını, kişilerini, mikrofonunu veya kamerasını istemez. Bondie kişisel bilgileri satmaz.",
    "terms.title": "Kullanım Koşulları",
    "terms.scopeTitle": "Koşulların kapsamı",
    "terms.scopeText":
      "Bu koşullar Bondie uygulamasını ve Bondie tarafından sunulan aktivite içeriklerini kullanırken geçerlidir. Uygulamayı kullanarak bu koşulları ve Gizlilik Politikası'nı kabul etmiş sayılırsınız.",
    "terms.appleTitle": "Apple standart EULA",
    "terms.appleText":
      "Bondie App Store üzerinden indirildiğinde, uygulamanın lisanslı kullanımı için Apple'ın standart son kullanıcı lisans sözleşmesi geçerlidir. Bu koşullar, Apple'ın standart lisans sözleşmesini değiştirmez; yalnızca Bondie'nin kullanımına ilişkin ek açıklamalar sağlar.",
    "terms.useTitle": "Uygulamanın kullanımı",
    "terms.useText":
      "Bondie aileler için ekransız aktivite fikirleri sunar. Uygulama, aktiviteleri seçen, uyarlayan ve çocuğu gözeten yetişkinler için tasarlanmıştır. Aktiviteler her çocuk, aile, ortam veya koşul için uygun olmayabilir; kullanıcılar önerileri kendi durumlarına göre değerlendirmelidir.",
    "terms.adviceTitle": "Profesyonel tavsiye değildir",
    "terms.adviceText":
      "Bondie tıbbi, terapötik, eğitsel veya çocuk bakımına dair profesyonel tavsiye değildir. Çocuğun sağlığı, gelişimi, davranışı veya güvenliğiyle ilgili endişelerde yetkili bir uzmana danışılmalıdır.",
    "terms.parentTitle": "Ebeveyn sorumluluğu",
    "terms.parentText":
      "Aktiviteye başlamadan önce malzemeleri, alanı, hava durumunu, alerjileri, boğulma risklerini ve gözetimi kontrol etmek ebeveynin veya bakım verenin sorumluluğudur. Aktivite güvensiz, stresli veya uygunsuz hissettirirse durdurulmalıdır.",
    "terms.contentTitle": "İçerik değişiklikleri",
    "terms.contentText":
      "Bondie aktivite içeriklerini, kategori ve özelliklerini zaman zaman güncelleyebilir, değiştirebilir veya kaldırabilir. Uygulamanın kesintisiz, hatasız ya da her cihazda aynı şekilde çalışacağı garanti edilmez.",
    "terms.contactTitle": "İletişim",
    "terms.contactText": "Kullanım koşulları, uygulama desteği, güvenlik bildirimi veya gizlilik talepleri için <a href=\"mailto:hello@brocan.co\">hello@brocan.co</a> adresine yazabilirsiniz.",
    "safety.updated": "Her oyundan önce kısa bir yetişkin kontrolü.",
    "safety.notesTitle": "Karttaki notlar",
    "safety.notesText": "Her oyunda bir kalkan düğmesi vardır. O oyuna özel notları ve geçerli hatırlatmaları açar. Başlamadan önce oku.",
    "safety.under3Title": "3 yaş altı",
    "safety.under3Text": "Küçük çocuklar her şeyi ağzına götürür. Küçük nesneleri, balonları ve parçalanabilecek her şeyi uzak tut; çocuğun bir kol boyu yakınında kal.",
    "safety.waterTitle": "Su, yiyecek ve dışarısı",
    "safety.waterText": "Çocuğu suyun yanında, sığ bir kapta bile yalnız bırakma. Yiyecekli oyunlardan önce alerjileri kontrol et, yiyecekleri küçük parçalara böl. Dışarıda trafikten uzak bir yer seç; güneşe, sıcağa ve soğuğa dikkat et.",
    "safety.oneTitle": "Yetişkin gözetimi",
    "safety.oneText": "Her oyun sorumlu bir yetişkin tarafından seçilmeli, uyarlanmalı ve gözetilmelidir.",
    "safety.twoTitle": "Alan kontrolü",
    "safety.twoText": "Keskin nesneleri, kaygan yüzeyleri, kabloları ve takılma risklerini kaldır.",
    "safety.threeTitle": "Malzeme kontrolü",
    "safety.threeText": "Yaşa uygun malzemeler kullan; küçük parçalar, pil, mıknatıs ve alerjenleri kontrol et.",
    "safety.fourTitle": "Yaş ve gelişim",
    "safety.fourText":
      "Önerileri çocuğun yaşı, gelişim seviyesi, ilgisi ve o günkü hazır oluşuna göre değerlendir.",
    "safety.fiveTitle": "Uyarla ve dur",
    "safety.fiveText":
      "Çocuk yorgun, bunalmış, ilgisiz veya güvensiz görünürse oyunu hemen durdur.",
    "safety.sixTitle": "Sağlık ve acil durum",
    "safety.sixText":
      "Yaralanma, alerjik belirti veya sağlık riski oluşursa oyunu bırak ve uygun profesyonel yardım al.",
    "sheet.close": "Kapat",
  },
  es: {
    metaTitle: "Bondie | Ideas de actividades sin pantallas",
    metaDescription:
      "Bondie es una app iOS local-first con ideas de actividades sin pantallas, seguras y adecuadas para la edad, para familias y cuidadores.",
    ogDescription:
      "Ideas de juego tranquilas, breves y seguras según la edad, energía y entorno de tu peque.",
    "nav.aria": "Navegación principal",
    "brand.aria": "Inicio de Bondie",
    "nav.how": "Cómo funciona",
    "nav.faq": "Preguntas",
    "hero.title": "Pequeños momentos, grandes <span class=\"accent\">lazos</span>",
    "hero.lede": "Juegos cortos y sin pantallas para jugar con tu pequeño.",
    "today.eyebrow": "Tarjeta del día",
    "today.title": "¿A qué jugamos hoy?",
    "today.text": "Al final del día cuesta encontrar una idea nueva. Bondie te propone una sola carta cada día, para que tu energía vaya a jugar y no a decidir.",
    "today.button": "Sacar otra carta",
    "act.bubble.title": "Persigue Burbujas",
    "act.bubble.meta": "10 min · Edades 2–6 · Movimiento",
    "act.bubble.blurb": "Persigan burbujas suavemente y reviéntenlas con manos o pies.",
    "act.hunt.title": "Búsqueda de Colores",
    "act.hunt.meta": "10 min · Edades 2–7 · Pensamiento",
    "act.hunt.blurb": "Elijan un color y busquen objetos que coincidan a su alrededor.",
    "card.title": "¿Qué hay en una carta?",
    "card.lede": "Cada juego es una sola carta. Leerla lleva menos de un minuto.",
    "card.name": "Aventura con una caja",
    "card.stepsTitle": "Pasos",
    "card.step1": "Elijan en qué se convertirá la caja.",
    "card.step2": "Decoren o acomoden la caja.",
    "card.step3": "Representen una aventura dentro o alrededor de ella.",
    "card.materials": "Materiales: Caja de cartón",
    "card.whyTitle": "Por qué ayuda",
    "card.why1Label": "Imaginación",
    "card.why1Text": "Invita al niño a convertir cosas comunes en historias, personajes o nuevas posibilidades.",
    "card.why2Label": "Planificación",
    "card.why2Text": "Apoya la secuenciación temprana al preguntar qué viene después.",
    "card.safetyTitle": "Nota de seguridad",
    "card.s1Title": "Tres pasos cortos",
    "card.s1Text": "Cómo se juega, qué necesitas y cuánto dura. Léela una vez y deja el teléfono a un lado.",
    "card.s2Title": "Por qué ayuda",
    "card.s2Text": "Cada carta cuenta en pocas frases qué le aporta el juego a tu pequeño.",
    "card.s3Title": "Nota de seguridad",
    "card.s3Text": "Una revisión breve del espacio y los materiales antes de empezar. Algunos juegos añaden avisos propios.",
    "foryou.title": "Una baraja hecha para ti",
    "foryou.lede": "Solo preguntamos dos cosas: su edad y lo que le gusta. Bondie hace el resto.",
    "foryou.ageTitle": "¿Qué edad tiene tu pequeño?",
    "foryou.ageUnit": "años",
    "foryou.ageDown": "Bajar la edad",
    "foryou.ageUp": "Subir la edad",
    "foryou.likesTitle": "¿Qué le gusta?",
    "foryou.likesHint": "Elige las que quieras. Si no eliges ninguna, llegan cartas de todas.",
    "foryou.readyKicker": "Tu baraja está lista",
    "explore.title": "Explorar",
    "explore.text": "Todo el catálogo, barajado de nuevo cada vez. Filtra por edad, energía y lugar.",
    "explore.age": "Edad",
    "explore.energy": "Energía",
    "explore.where": "Lugar",
    "fav.title": "Favoritos",
    "fav.text": "Los juegos a los que les das corazón se reúnen aquí: la pequeña biblioteca a la que siempre vuelves.",
    "trust.title": "Juega con tranquilidad",
    "trust.f1Title": "Sin cuenta",
    "trust.f1Text": "Sin registro, correo ni contraseña. Descarga y juega.",
    "trust.f2Title": "Tus datos se quedan en tu dispositivo",
    "trust.f2Text": "Tu perfil, tus favoritos y tus preferencias se guardan solo en tu teléfono.",
    "trust.f3Title": "Sin anuncios ni seguimiento",
    "trust.f3Text": "No se comparte nada con nadie para publicidad, seguimiento o analítica.",
    "faq.title": "Preguntas frecuentes",
    "faq.lede": "Lo que más se pregunta antes de la primera carta.",
    "faq.contactTitle": "¿Tienes otra pregunta?",
    "faq.contactText": "Escríbenos sobre la app, la privacidad, la seguridad o un juego.",
    "faq.q1": "¿Bondie es de pago?",
    "faq.a1": "No. Por ahora Bondie es totalmente gratis.",
    "faq.q2": "¿Necesita internet?",
    "faq.a2": "No. Los juegos vienen dentro de la app, así que funciona sin conexión.",
    "faq.q3": "¿Para qué edades es?",
    "faq.a3": "De 0 a 10 años. Indicas la edad de tu pequeño una vez y primero aparecen los juegos que encajan.",
    "faq.q4": "¿Necesito una cuenta?",
    "faq.a4": "No. No hay cuenta; tu perfil y tus favoritos se guardan solo en tu teléfono.",
    "faq.q5": "¿Los juegos necesitan materiales?",
    "faq.a5": "La mayoría usa cosas que ya tienes en casa, o nada. Cada carta indica qué hace falta.",
    "faq.q6": "¿Está en Android?",
    "faq.a6": "Todavía no. Por ahora Bondie está en iPhone; la versión para Android llegará pronto.",
    "faq.q7": "¿En qué idiomas puedo usarla?",
    "faq.a7": "Español, inglés y turco.",
    "close.title": "Saca una carta esta noche.",
    "fact.time": "Tiempo",
    "fact.ages": "Edades",
    "fact.place": "Lugar",
    "card.blurb": "Conviertan una caja en cohete, barco, cueva, auto o casa.",
    "card.time": "15 min",
    "card.place": "Interior",
    "card.s0Title": "De un vistazo",
    "card.s0Text": "Tiempo, edades y lugar están en el frente. Sabes al instante si encaja.",
    "foryou.ageBody": "Elegiremos juegos para su edad.",
    "close.text": "El juego termina; el lazo queda.",
    "ready.calm.title": "Ayudante de riego",
    "ready.calm.blurb": "Ayuda a regar una planta despacio y con cuidado.",
    "ready.calm.time": "10 min",
    "ready.calm.place": "Exterior",
    "ready.create.title": "Pinceles de la naturaleza",
    "ready.create.blurb": "Usen hojas, pasto o ramitas como pinceles para crear arte con textura.",
    "ready.create.time": "10 min",
    "ready.create.place": "Exterior",
    "ready.feel.title": "Sonrisas De Cucú",
    "ready.feel.blurb": "Esconde tu cara y vuelve con una sonrisa cálida.",
    "ready.feel.time": "3 min",
    "ready.feel.place": "Donde sea",
    "ready.move.title": "Cambio de Gravedad",
    "ready.move.blurb": "Imaginen que la gravedad se movió a una pared, una esquina o una silla, y ajusten el cuerpo.",
    "ready.move.time": "10 min",
    "ready.move.place": "Interior",
    "ready.talk.title": "Hablar Solo con Consonantes",
    "ready.talk.blurb": "Intenten hablar quitando las vocales y dejen que la otra persona lo descifre.",
    "ready.talk.time": "10 min",
    "ready.talk.place": "Donde sea",
    "ready.think.title": "Mapa de la habitación",
    "ready.think.blurb": "Dibujen un mapa sencillo de la habitación y marquen dónde están las cosas.",
    "ready.think.time": "15 min",
    "ready.think.place": "Interior",
    "nav.categories": "Categorías",
    "act.ladder.title": "Escalera de Valentía",
    "act.ladder.meta": "10 min · Edades 4–10 · Emociones",
    "act.ladder.blurb": "Dividan una meta valiente en pasitos pequeños que se sientan posibles.",
    "cat.title": "Seis categorías, una baraja",
    "cat.calm": "Calma",
    "cat.calmHint": "Frena y escucha",
    "cat.create": "Creatividad",
    "cat.createHint": "Dibuja, construye, imagina",
    "cat.feel": "Emociones",
    "cat.feelHint": "Siente y cuéntalo",
    "cat.move": "Movimiento",
    "cat.moveHint": "Salta, corre, equilibra",
    "cat.talk": "Conversación",
    "cat.talkHint": "Pregunta, cuenta, escucha",
    "cat.think": "Pensamiento",
    "cat.thinkHint": "Busca, cuenta, resuelve",
    "footer.madeBy": "Bondie es una app de Brocan.",
    "footer.contact": "Contacto",
    "language.aria": "Idioma",
    "navToggle.aria": "Abrir menú",
    "nav.privacy": "Privacidad",
    "nav.terms": "Términos",
    "nav.safety": "Seguridad",
    "nav.support": "Soporte",
    "store.appLabel": "Descarga Bondie en el App Store",
    "store.playLabel": "Google Play próximamente",
    "store.soon": "Próximamente",
    "common.updated": "Última actualización: 20 de noviembre de 2026",
    "privacy.title": "Política de privacidad",
    "privacy.dataTitle": "¿Qué datos guarda Bondie?",
    "privacy.dataText":
      "Bondie guarda el nombre del adulto, nombre y edad del niño, avatares, preferencias de actividad, favoritos, juegos vistos recientemente y preferencia de idioma en el almacenamiento de la app en el dispositivo. Esta información la introduce el adulto en la app o se crea localmente durante el uso. Bondie la usa para personalizar la experiencia, mostrar sugerencias adecuadas a la edad y preferencias, y recordar favoritos y los juegos vistos recientemente.",
    "privacy.storageTitle": "¿Dónde se guardan los datos?",
    "privacy.storageText":
      "Bondie no usa una base de datos externa para estos datos de perfil y actividad. Estos datos no salen del dispositivo; el equipo de Bondie y los proveedores externos no pueden acceder a estos datos locales.",
    "privacy.thirdTitle": "Compartir con terceros",
    "privacy.thirdText":
      "Bondie no comparte datos de perfil o actividad de la app con terceros para publicidad, seguimiento, analítica o marketing. La app no usa estos datos para seguir a usuarios entre distintas apps o sitios web.",
    "privacy.supportTitle": "Soporte y datos de contacto",
    "privacy.supportText": "Cuando nos escribes por correo para pedir soporte, recibimos tu dirección de correo y tu mensaje. Esta información se usa solo para responder tu solicitud, revisar informes de privacidad o seguridad y dar seguimiento a comentarios sobre errores.",
    "privacy.retentionTitle": "Conservación y eliminación de datos",
    "privacy.retentionText": "Los datos locales de la app se conservan en el dispositivo mientras el usuario siga usando la app. Al eliminar la app, el sistema operativo puede eliminar estos datos. Bondie no mantiene una cuenta ni copia de seguridad separada en servidor para estos datos. Los correos que nos envías se guardan en nuestro buzón de soporte para responder tu solicitud. Estos registros se usan solo para soporte, privacidad, informes de seguridad o seguimiento de errores. Para preguntas de privacidad, eliminar registros de soporte o recibir ayuda para borrar datos locales, escribe a <a href=\"mailto:hello@brocan.co\">hello@brocan.co</a>.",
    "privacy.notCollectTitle": "¿Qué no recopila Bondie?",
    "privacy.notCollectText":
      "La experiencia actual de la app no solicita correo electrónico, teléfono, ubicación precisa, fotos, contactos, micrófono ni cámara del niño. Bondie no vende información personal.",
    "terms.title": "Términos de uso",
    "terms.scopeTitle": "Alcance de estos términos",
    "terms.scopeText":
      "Estos términos se aplican cuando usas la app Bondie y los contenidos de actividades ofrecidos por Bondie. Al usar la app, aceptas estos términos y la Política de privacidad.",
    "terms.appleTitle": "EULA estándar de Apple",
    "terms.appleText":
      "Cuando Bondie se descarga desde App Store, se aplica el contrato estándar de licencia de usuario final de Apple al uso licenciado de la app. Estos términos no reemplazan la licencia estándar de Apple; solo añaden notas sobre el uso de Bondie.",
    "terms.useTitle": "Uso de la app",
    "terms.useText":
      "Bondie ofrece ideas de actividades sin pantallas para familias. La app está diseñada para adultos que eligen, adaptan y supervisan actividades para niños. Las actividades pueden no ser adecuadas para todos los niños, familias, entornos o condiciones; los usuarios deben valorar las sugerencias según su situación.",
    "terms.adviceTitle": "No es asesoramiento profesional",
    "terms.adviceText":
      "Bondie no es asesoramiento médico, terapéutico, educativo ni profesional de cuidado infantil. Ante dudas sobre salud, desarrollo, comportamiento o seguridad de un niño, consulta a un profesional cualificado.",
    "terms.parentTitle": "Responsabilidad del adulto",
    "terms.parentText":
      "Antes de empezar una actividad, el adulto responsable debe revisar materiales, espacio, clima, alergias, riesgos de atragantamiento y supervisión. Si una actividad parece insegura, estresante o inadecuada, debe detenerse.",
    "terms.contentTitle": "Cambios de contenido",
    "terms.contentText":
      "Bondie puede actualizar, cambiar o retirar contenidos, categorías y funciones de actividades ocasionalmente. No se garantiza que la app sea ininterrumpida, libre de errores o idéntica en todos los dispositivos.",
    "terms.contactTitle": "Contacto",
    "terms.contactText": "Para términos de uso, soporte de la app, informes de seguridad o solicitudes de privacidad, escribe a <a href=\"mailto:hello@brocan.co\">hello@brocan.co</a>.",
    "safety.updated": "Una breve revisión adulta antes de cada actividad.",
    "safety.notesTitle": "Notas en cada tarjeta",
    "safety.notesText": "Cada juego tiene un botón con un escudo. Abre las notas de ese juego: lo que le es propio y los recordatorios que se aplican. Léelas antes de empezar.",
    "safety.under3Title": "Menores de 3 años",
    "safety.under3Text": "Los niños pequeños se llevan todo a la boca. Mantén lejos los objetos pequeños, los globos y todo lo que pueda desarmarse, y quédate al alcance de la mano.",
    "safety.waterTitle": "Agua, comida y exterior",
    "safety.waterText": "Nunca dejes a un niño solo cerca del agua, ni siquiera de un recipiente poco profundo. Revisa las alergias antes de los juegos con comida y corta los alimentos en trozos pequeños. Al aire libre, elige un lugar lejos del tráfico y cuida el sol, el calor y el frío.",
    "safety.oneTitle": "Supervisión adulta",
    "safety.oneText": "Cada actividad debe ser elegida, adaptada y supervisada por un adulto responsable.",
    "safety.twoTitle": "Revisión del espacio",
    "safety.twoText": "Retira objetos afilados, superficies resbaladizas, cables y riesgos de tropiezo.",
    "safety.threeTitle": "Revisión de materiales",
    "safety.threeText":
      "Usa materiales adecuados para la edad; revisa piezas pequeñas, pilas, imanes y alérgenos.",
    "safety.fourTitle": "Edad y desarrollo",
    "safety.fourText":
      "Valora las sugerencias según la edad, desarrollo, intereses y disposición del niño ese día.",
    "safety.fiveTitle": "Adapta y detén",
    "safety.fiveText":
      "Si el niño parece cansado, saturado, desinteresado o inseguro, detén la actividad.",
    "safety.sixTitle": "Salud y emergencias",
    "safety.sixText":
      "Si aparece una lesión, síntoma alérgico o riesgo de salud, detén la actividad y busca ayuda profesional adecuada.",
    "sheet.close": "Cerrar",
  },
};

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#nav-links");
const sectionLinks = document.querySelectorAll(".nav-link");
const appStoreBadges = document.querySelectorAll(".app-store-badge");
const googlePlayBadges = document.querySelectorAll(".google-play-badge");
const languageOptions = document.querySelectorAll(".language-option");

const getDictionary = (language) => translations[language] ?? translations[DEFAULT_LANGUAGE];

const getPathLanguage = () => {
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  return LANGUAGE_ALIASES[pathParts.at(-1)] ?? "";
};

const getQueryLanguage = () => {
  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  return LANGUAGE_ALIASES[queryLanguage] ?? "";
};

const getStoredLanguage = () => {
  try {
    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return SUPPORTED_LANGUAGES.includes(storedLanguage) ? storedLanguage : "";
  } catch {
    return "";
  }
};

// The visitor's own choice wins; on a first visit the browser's language decides.
const getBrowserLanguage = () =>
  (navigator.languages ?? [navigator.language])
    .map((language) => LANGUAGE_ALIASES[String(language).slice(0, 2).toLowerCase()])
    .find(Boolean) ?? "";

const getInitialLanguage = () =>
  getPathLanguage() || getQueryLanguage() || getStoredLanguage() || getBrowserLanguage() || DEFAULT_LANGUAGE;

const getLocalizedPath = (language) => {
  const slug = LANGUAGE_SLUGS[language] ?? LANGUAGE_SLUGS[DEFAULT_LANGUAGE];
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  const lastPart = pathParts.at(-1);

  if (LANGUAGE_ALIASES[lastPart] || lastPart === "index.html") {
    pathParts.pop();
  }

  const basePath = pathParts.length ? `/${pathParts.join("/")}` : "";
  return `${basePath}/${slug}${window.location.hash}`;
};

const updateLanguageUrl = (language, { replace = false } = {}) => {
  if (!window.history?.pushState) return;

  const localizedPath = getLocalizedPath(language);
  const currentPath = `${window.location.pathname}${window.location.hash}`;
  if (localizedPath === currentPath && !window.location.search) return;

  const method = replace ? "replaceState" : "pushState";
  window.history[method](null, "", localizedPath);
};

const setMetaContent = (selector, value) => {
  document.querySelector(selector)?.setAttribute("content", value);
};

const applyLanguage = (language, { updateUrl = false, replaceUrl = false } = {}) => {
  const dictionary = getDictionary(language);
  const activeLanguage = translations[language] ? language : DEFAULT_LANGUAGE;

  document.documentElement.lang = activeLanguage;
  document.title = dictionary.metaTitle;
  setMetaContent('meta[name="description"]', dictionary.metaDescription);
  setMetaContent('meta[property="og:title"]', dictionary.metaTitle);
  setMetaContent('meta[property="og:description"]', dictionary.ogDescription);

  appStoreBadges.forEach((badge) => {
    badge.src = storeBadges[activeLanguage].appStore;
  });

  googlePlayBadges.forEach((badge) => {
    badge.src = storeBadges[activeLanguage].googlePlay;
  });

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = dictionary[element.dataset.i18nHtml];
    if (value) element.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attribute, key] = pair.split(":").map((value) => value.trim());
      if (!attribute || !key || !dictionary[key]) return;
      element.setAttribute(attribute, dictionary[key]);
    });
  });

  languageOptions.forEach((button) => {
    const isActive = button.dataset.lang === activeLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, activeLanguage);
  } catch {
    // Language still applies for this page view when storage is unavailable.
  }

  if (updateUrl) updateLanguageUrl(activeLanguage, { replace: replaceUrl });

  document.documentElement.classList.remove("i18n-pending");
  updateSheetTitle();
};

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks?.classList.toggle("is-open") ?? false;
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

sectionLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks?.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

languageOptions.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang, { updateUrl: true });
    navLinks?.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const observedSections = [...sectionLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

// The active link is the last section whose top has passed the upper part of the viewport.
// Privacy and Terms sit side by side on wide screens; the first of a row wins.
const updateActiveLink = () => {
  const line = window.innerHeight * 0.4;
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  let active = null;
  let activeTop = -Infinity;

  observedSections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top <= line && top > activeTop + 1) {
      active = section;
      activeTop = top;
    }
  });

  if (atBottom) active = observedSections.at(-1) ?? active;

  sectionLinks.forEach((link) => {
    link.classList.toggle("is-active", Boolean(active) && link.getAttribute("href") === `#${active.id}`);
  });
};

window.addEventListener("scroll", updateActiveLink, { passive: true });
window.addEventListener("resize", updateActiveLink);
updateActiveLink();


// Privacy and Terms open in a panel docked to the right edge (a bottom sheet on phones).
// #privacy and #terms are real URLs: the App Store listing links to them.
const sheet = document.querySelector("#sheet");
const sheetPanel = sheet?.querySelector(".sheet-panel");
const sheetBody = sheet?.querySelector(".sheet-body");
const sheetTitle = sheet?.querySelector(".sheet-title");
const sheetDocs = [...(sheet?.querySelectorAll(".sheet-doc") ?? [])];
let sheetReturnFocus = null;
let sheetScrollY = 0;

const getSheetDoc = (hash) => sheetDocs.find((doc) => `#${doc.id}` === hash) ?? null;

const updateSheetTitle = () => {
  const doc = sheetDocs.find((item) => !item.hidden);
  if (!doc || !sheetTitle) return;
  sheetTitle.textContent = getDictionary(document.documentElement.lang)[doc.dataset.titleKey] ?? "";
};

const openSheet = (doc) => {
  if (!sheet || !doc) return;
  sheetDocs.forEach((item) => {
    item.hidden = item !== doc;
  });
  updateSheetTitle();
  sheetBody.scrollTop = 0;
  if (!sheet.hidden) return;

  sheetReturnFocus = document.activeElement;
  sheetScrollY = window.scrollY;
  window.history.scrollRestoration = "manual";
  sheet.hidden = false;
  sheet.classList.remove("is-out");
  sheet.classList.add("is-in");
  document.documentElement.classList.add("sheet-open");
  sheet.querySelector(".sheet-close")?.focus({ preventScroll: true });
};

const closeSheet = () => {
  if (!sheet || sheet.hidden || sheet.classList.contains("is-out")) return;

  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    sheet.hidden = true;
    sheet.classList.remove("is-out");
    document.documentElement.classList.remove("sheet-open");
    sheetReturnFocus?.focus?.({ preventScroll: true });
  };

  // Going back to the previous URL must not move the page behind the panel.
  window.scrollTo({ top: sheetScrollY, behavior: "instant" });

  sheet.classList.replace("is-in", "is-out");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) finish();
  else {
    sheetPanel.addEventListener("animationend", finish, { once: true });
    // The animation does not run in a background tab; never leave the panel stuck open.
    window.setTimeout(finish, 400);
  }
};

// Closing goes back when the panel was opened from a link on this page, so Back also closes it.
// If the URL underneath carries a section hash (#categories), going back would make the browser
// scroll to that section again; then the panel's own entry is rewritten instead.
const dismissSheet = () => {
  if (window.history.state?.sheet && !window.history.state.overHash) {
    window.history.back();
    return;
  }

  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  closeSheet();
};

// In-page links: Privacy and Terms open the panel; section links scroll without touching the URL.
document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;

  const hash = link.getAttribute("href");
  const doc = getSheetDoc(hash);
  if (doc) {
    event.preventDefault();
    window.history.pushState({ sheet: doc.id, overHash: Boolean(window.location.hash) }, "", `#${doc.id}`);
    openSheet(doc);
    return;
  }

  const section = hash.length > 1 ? document.querySelector(hash) : null;
  if (!section) return;
  event.preventDefault();
  section.scrollIntoView();
});

window.addEventListener("popstate", () => {
  const doc = getSheetDoc(window.location.hash);
  if (doc) openSheet(doc);
  else closeSheet();
});

sheet?.querySelector(".sheet-close")?.addEventListener("click", dismissSheet);
sheet?.querySelector(".sheet-scrim")?.addEventListener("click", dismissSheet);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && sheet && !sheet.hidden) dismissSheet();
});

openSheet(getSheetDoc(window.location.hash));

// The hero games, copied once so the phone strip can loop without a seam (hidden on wider screens).
const heroStage = document.querySelector(".hero-stage");
heroStage?.querySelectorAll("img").forEach((img) => {
  const clone = img.cloneNode();
  clone.classList.add("stage-clone");
  heroStage.append(clone);
});

// Scrolling down, the nav narrows to the logo and the download button; scrolling up it opens again.
const siteHeader = document.querySelector("#site-header");
let lastScrollY = window.scrollY;

window.addEventListener(
  "scroll",
  () => {
    const y = window.scrollY;
    if (Math.abs(y - lastScrollY) < 6) return;
    const compact = y > lastScrollY && y > 120;
    siteHeader?.classList.toggle("is-compact", compact);
    if (compact) {
      navLinks?.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
    }
    lastScrollY = y;
  },
  { passive: true },
);

// Sections ease in the first time they are scrolled to.
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px" },
  );
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

// Card of the day: drawing brings the next card of the small deck to the top.
const dayCards = [...document.querySelectorAll("#day-deck .day-card")];
let dayIndex = 0;

const showDayCard = (index) => {
  dayCards.forEach((card, cardIndex) => {
    card.classList.toggle("is-active", cardIndex === index);
    card.classList.toggle("is-next", cardIndex === (index + 1) % dayCards.length);
    card.setAttribute("aria-hidden", String(cardIndex !== index));
  });
};

document.querySelector("#draw-card")?.addEventListener("click", () => {
  dayIndex = (dayIndex + 1) % dayCards.length;
  showDayCard(dayIndex);
});

if (dayCards.length) showDayCard(dayIndex);

// Inside a card: the text block nearest the middle of the screen picks the card's face.
const cardScene = document.querySelector("#card-scene");
const sceneSteps = [...document.querySelectorAll(".scene-step")];

const updateCardScene = () => {
  if (!cardScene || !sceneSteps.length) return;

  const middle = window.innerHeight / 2;
  let nearest = sceneSteps[0];
  let nearestDistance = Infinity;

  sceneSteps.forEach((step) => {
    const box = step.getBoundingClientRect();
    const distance = Math.abs(box.top + box.height / 2 - middle);
    if (distance < nearestDistance) {
      nearest = step;
      nearestDistance = distance;
    }
  });

  cardScene.dataset.face = nearest.dataset.face;
  sceneSteps.forEach((step) => step.classList.toggle("is-active", step === nearest));
};

window.addEventListener("scroll", updateCardScene, { passive: true });
window.addEventListener("resize", updateCardScene);
updateCardScene();

// For you: the app's two setup cards. The age stepper counts; the first interest picked decides
// which game is shown as the first card of the deck.
const AGE_MIN = 0;
const AGE_MAX = 10;
const ageValue = document.querySelector("#age-value");
const interestRows = [...document.querySelectorAll("#interest-rows .interest-row")];
const readyPosters = [...document.querySelectorAll("#ready-stack .ready-poster")];
let age = 4;

const changeAge = (step) => {
  age = Math.min(AGE_MAX, Math.max(AGE_MIN, age + step));
  if (ageValue) ageValue.textContent = age >= AGE_MAX ? `${AGE_MAX}+` : String(age);
};

const updateReadyPoster = () => {
  const picked = interestRows.find((row) => row.getAttribute("aria-pressed") === "true") ?? interestRows[0];
  readyPosters.forEach((poster) => {
    poster.hidden = poster.dataset.cat !== picked?.dataset.cat;
  });
};

document.querySelector("#age-down")?.addEventListener("click", () => changeAge(-1));
document.querySelector("#age-up")?.addEventListener("click", () => changeAge(1));

interestRows.forEach((row) => {
  row.addEventListener("click", () => {
    row.setAttribute("aria-pressed", String(row.getAttribute("aria-pressed") !== "true"));
    updateReadyPoster();
  });
});

updateReadyPoster();

applyLanguage(getInitialLanguage(), { updateUrl: true, replaceUrl: true });
