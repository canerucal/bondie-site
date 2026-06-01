const APP_STORE_URL = "";
const DEFAULT_LANGUAGE = "en";
const LANGUAGE_STORAGE_KEY = "bondie.site.language";
const TALLY_MIN_HEIGHT = 720;
const TALLY_INITIAL_HEIGHT = String(TALLY_MIN_HEIGHT);
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

const cardImages = {
  en: {
    heroStory: "assets/images/hero-card-1-en.png",
    heroBenefit: "assets/images/hero-card-2-en.png",
    empathy: "assets/images/app-card-empathy-en.png",
    club: "assets/images/app-card-club-symbol-en.png",
    object: "assets/images/app-card-object-clue-en.png",
  },
  tr: {
    heroStory: "assets/images/hero-card-1.png",
    heroBenefit: "assets/images/hero-card-2.png",
    empathy: "assets/images/app-card-empathy.png",
    club: "assets/images/app-card-club-symbol.png",
    object: "assets/images/app-card-object-clue.png",
  },
  es: {
    heroStory: "assets/images/hero-card-1-es.png",
    heroBenefit: "assets/images/hero-card-2-es.png",
    empathy: "assets/images/app-card-empathy-es.png",
    club: "assets/images/app-card-club-symbol-es.png",
    object: "assets/images/app-card-object-clue-es.png",
  },
};

const tallyForms = {
  en: "https://tally.so/embed/Bz0QyR?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
  tr: "https://tally.so/embed/44zoY5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
  es: "https://tally.so/embed/xXvPA5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
};

const translations = {
  en: {
    metaTitle: "Bondie | Screen-free activity ideas",
    metaDescription:
      "Bondie is a local-first iOS app with screen-free, age-aware, safe activity ideas for parents and caregivers.",
    ogDescription: "Calm, short, safe play ideas based on your child's age, energy, and setting.",
    "nav.aria": "Main navigation",
    "brand.aria": "Bondie home",
    "language.aria": "Language",
    "navToggle.aria": "Open menu",
    "nav.app": "App",
    "nav.privacy": "Privacy",
    "nav.terms": "Terms",
    "nav.safety": "Safety",
    "nav.support": "Support",
    "hero.eyebrow": "Tiny Moments, Big Bonds",
    "hero.lede":
      "Short, safe, connection-focused activity ideas based on your child's age, energy, and where you are.",
    "hero.galleryAria": "Bondie app card examples",
    "hero.cardOneAlt": "Story Chain activity card in the Bondie app",
    "hero.cardTwoAlt": "Story Chain benefit card in the Bondie app",
    "store.appTitle": "The App Store link will be enabled when published",
    "store.appLabel": "App Store link will be enabled when published",
    "store.appAlt": "Download on the App Store",
    "store.playLabel": "Google Play coming soon",
    "store.playAlt": "Get it on Google Play",
    "store.soon": "Coming soon",
    "app.eyebrow": "App",
    "app.title": "Ideas that reduce screen time and make shared time easier.",
    "app.lede":
      "Bondie gives parents activity ideas that do not require long preparation. Every suggestion is short, adaptable, and simple enough to fit into daily life.",
    "feature.oneTitle": "Suggestions that fit you",
    "feature.oneText": "Bondie suggests activities based on age, energy level, category, and your setting.",
    "feature.twoTitle": "Clear details on every card",
    "feature.twoText": "How to play, what you need, how long it takes, and what to watch for: all in one card.",
    "feature.threeTitle": "Discover, choose, save",
    "feature.threeText": "Discover new activities, add favorites, and find them again easily.",
    "feature.fourTitle": "Profile and language settings",
    "feature.fourText": "Child profile, avatars, and language preference are stored on your device.",
    "app.activityAria": "Bondie activity images",
    "app.empathyAlt": "Empathy Glasses activity card in the Bondie app",
    "app.clubAlt": "Secret Club Symbol activity card in the Bondie app",
    "app.objectAlt": "Object Clue activity card in the Bondie app",
    "common.updated": "Last updated: May 30, 2026",
    "privacy.eyebrow": "Privacy",
    "privacy.title": "Privacy Policy",
    "privacy.dataTitle": "What data does Bondie store?",
    "privacy.dataText":
      "Bondie stores parent name, child name, child age, avatars, activity preferences, favorites, completed activities, and language preference in app storage on the device. This information is entered by the parent in the app or created locally while using the app. Bondie uses it to personalize the experience, show age- and preference-aware activity suggestions, and remember favorites and completed activities.",
    "privacy.storageTitle": "Where is data kept?",
    "privacy.storageText":
      "Bondie does not use an external database for this profile and activity data. This data is not sent off the device; the Bondie team and third-party service providers cannot access this local data.",
    "privacy.thirdTitle": "Third-party sharing",
    "privacy.thirdText":
      "Bondie does not share in-app profile or activity data with third parties for advertising, tracking, analytics, or marketing. The app does not use this data to track users across different apps or websites.",
    "privacy.supportTitle": "Support form and contact data",
    "privacy.supportText":
      "When you use the support form, your name, email address, selected topic, and message are sent to us. This information is used only to answer your support request, review privacy or safety reports, and follow up on bug feedback.",
    "privacy.formTitle": "Form security and email delivery",
    "privacy.formText":
      "The support form is provided by Tally. Tally may process form submissions, apply security checks to reduce abuse, and forward your message to Bondie support. Tally may also provide privacy-friendly, anonymous form insights such as visits, source, device type, browser, and approximate location. Bondie does not use this information for advertising or tracking.",
    "privacy.retentionTitle": "Data retention and deletion",
    "privacy.retentionText":
      'Local app data is kept on the device while the user continues using the app. When the app is deleted, this data may be removed by the operating system. Bondie does not keep a separate server-side account or backup for this data. Your name, email address, selected topic, and message submitted through the support form may be processed by Tally and kept in the Bondie support mailbox so we can respond to your request. These records are used only for support, privacy, safety reports, or bug feedback follow-up. For privacy questions, deletion of support records, or help deleting local data, you can use the <a class="support-anchor" href="#support-form">support form</a>.',
    "privacy.notCollectTitle": "What does Bondie not collect?",
    "privacy.notCollectText":
      "The current app experience does not ask for a child's email address, phone number, precise location, photos, contacts, microphone, or camera. Bondie does not sell personal information.",
    "terms.eyebrow": "Terms",
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
    "terms.contactText":
      'For terms of use, app support, safety reports, or privacy requests, you can use the <a class="support-anchor" href="#support-form">support form</a>.',
    "safety.eyebrow": "Safety",
    "safety.title": "Safety Guide",
    "safety.updated": "A short adult check before every activity.",
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
    "support.eyebrow": "Support",
    "support.title": "Need help?",
    "support.lede":
      'Write to us about the app, privacy, safety, activity feedback, or bug reports. For direct email: <a href="mailto:hello.bondie.app@gmail.com">hello.bondie.app@gmail.com</a>.',
    "support.formTitle": "Bondie support form",
  },
  tr: {
    metaTitle: "Bondie | Ekransız aktivite fikirleri",
    metaDescription:
      "Bondie, ebeveynler ve bakım verenler için ekransız, yaşa uygun ve güvenli aktivite fikirleri sunan local-first iOS uygulamasıdır.",
    ogDescription:
      "Çocuğun yaşına, enerjisine ve bulunduğunuz ortama göre sakin, kısa ve güvenli oyun fikirleri.",
    "nav.aria": "Ana navigasyon",
    "brand.aria": "Bondie ana sayfa",
    "language.aria": "Dil",
    "navToggle.aria": "Menüyü aç",
    "nav.app": "Uygulama",
    "nav.privacy": "Gizlilik",
    "nav.terms": "Koşullar",
    "nav.safety": "Güvenlik",
    "nav.support": "Destek",
    "hero.eyebrow": "Küçük Anlar, Büyük Bağlar",
    "hero.lede":
      "Çocuğunuzun yaşına, enerjisine ve bulunduğunuz ortama göre kısa, güvenli ve bağ kurmaya odaklanan aktivite fikirleri.",
    "hero.galleryAria": "Bondie uygulama kart örnekleri",
    "hero.cardOneAlt": "Bondie uygulamasında Hikaye Zinciri aktivite kartı",
    "hero.cardTwoAlt": "Bondie uygulamasında Hikaye Zinciri fayda kartı",
    "store.appTitle": "App Store bağlantısı yayınlandığında aktif edilecek",
    "store.appLabel": "App Store bağlantısı yayınlandığında aktif edilecek",
    "store.appAlt": "App Store'dan indirin",
    "store.playLabel": "Google Play yakında",
    "store.playAlt": "Google Play'den alın",
    "store.soon": "Yakında",
    "app.eyebrow": "Uygulama",
    "app.title": "Ekranı azaltan, birlikte geçirilen zamanı kolaylaştıran fikirler.",
    "app.lede":
      "Bondie uzun hazırlık gerektirmeyen aktiviteleri ebeveynin kontrolünde sunar. Her öneri kısa, uyarlanabilir ve günlük hayatın içine girecek kadar basittir.",
    "feature.oneTitle": "Size uygun öneriler",
    "feature.oneText":
      "Bondie; yaş, enerji seviyesi, kategori ve bulunduğunuz ortama göre aktivite fikirleri sunar.",
    "feature.twoTitle": "Her kartta net bilgi",
    "feature.twoText":
      "Nasıl oynanır, ne gerekir, ne kadar sürer ve nelere dikkat edilmeli: hepsi tek kartta.",
    "feature.threeTitle": "Keşfet, seç, kaydet",
    "feature.threeText": "Yeni aktiviteleri keşfedin, sevdiklerinizi favorilere ekleyin ve tekrar kolayca bulun.",
    "feature.fourTitle": "Profil ve dil ayarları",
    "feature.fourText": "Çocuk profili, avatarlar ve dil tercihi cihazınızda saklanır.",
    "app.activityAria": "Bondie aktivite görselleri",
    "app.empathyAlt": "Bondie uygulamasında Empati Gözlüğü aktivite kartı",
    "app.clubAlt": "Bondie uygulamasında Gizli Kulüp Simgesi aktivite kartı",
    "app.objectAlt": "Bondie uygulamasında Nesne İpucu aktivite kartı",
    "common.updated": "Son güncelleme: 30 Mayıs 2026",
    "privacy.eyebrow": "Gizlilik",
    "privacy.title": "Gizlilik Politikası",
    "privacy.dataTitle": "Bondie hangi verileri saklar?",
    "privacy.dataText":
      "Bondie; ebeveyn adı, çocuk adı, çocuk yaşı, avatarlar, aktivite tercihleri, favoriler, tamamlanan aktiviteler ve dil tercihini cihazdaki uygulama depolamasında saklar. Bu bilgiler ebeveyn tarafından uygulama içinde girilir veya uygulama kullanımı sırasında cihazda oluşur. Bondie bu bilgileri deneyimi kişiselleştirmek, yaşa ve tercihlere uygun aktivite önerileri göstermek, favorileri ve tamamlanan aktiviteleri hatırlamak için kullanır.",
    "privacy.storageTitle": "Veriler nerede tutulur?",
    "privacy.storageText":
      "Bondie bu profil ve aktivite verileri için harici bir veritabanı kullanmaz. Bu veriler cihaz dışına gönderilmez; Bondie ekibi veya üçüncü taraf hizmet sağlayıcıları bu lokal verilere erişemez.",
    "privacy.thirdTitle": "Üçüncü taraflarla paylaşım",
    "privacy.thirdText":
      "Bondie uygulama içindeki profil ve aktivite verilerini reklam, izleme, analiz veya pazarlama amacıyla üçüncü taraflarla paylaşmaz. Uygulama bu verileri kullanarak kullanıcıyı farklı uygulamalar veya web siteleri arasında takip etmez.",
    "privacy.supportTitle": "Destek formu ve iletişim verileri",
    "privacy.supportText":
      "Destek formunu kullandığınızda adınız, e-posta adresiniz, seçtiğiniz konu ve mesajınız bize iletilir. Bu bilgiler yalnızca destek talebinizi yanıtlamak, gizlilik veya güvenlik bildirimlerini değerlendirmek ve hata geri bildirimlerini takip etmek için kullanılır.",
    "privacy.formTitle": "Form güvenliği ve e-posta gönderimi",
    "privacy.formText":
      "Destek formu Tally tarafından sağlanır. Tally form gönderimini işleyebilir, kötüye kullanımı azaltmak için güvenlik kontrolleri uygulayabilir ve mesajınızı Bondie destek adresine iletebilir. Tally ayrıca ziyaret sayısı, kaynak, cihaz tipi, tarayıcı ve yaklaşık konum gibi gizlilik dostu anonim form istatistikleri sağlayabilir. Bondie bu bilgileri reklam veya izleme amacıyla kullanmaz.",
    "privacy.retentionTitle": "Veri saklama ve silme",
    "privacy.retentionText":
      'Lokal uygulama verileri, kullanıcı uygulamayı kullanmaya devam ettiği sürece cihazda saklanır. Uygulama silindiğinde bu veriler işletim sistemi tarafından kaldırılabilir. Bondie bu veriler için sunucu tarafında ayrı bir hesap veya yedek tutmaz. Destek formuyla gönderilen adınız, e-posta adresiniz, seçtiğiniz konu ve mesajınız Tally üzerinden işlenebilir ve destek talebinizi yanıtlayabilmemiz için Bondie destek e-posta kutusunda tutulabilir. Bu kayıtlar yalnızca destek, gizlilik, güvenlik bildirimi veya hata geri bildirimi takibi için kullanılır. Gizlilik soruları, destek kayıtlarının silinmesi veya lokal verileri silme konusunda yardım için <a class="support-anchor" href="#support-form">destek formunu</a> kullanabilirsiniz.',
    "privacy.notCollectTitle": "Bondie neleri toplamaz?",
    "privacy.notCollectText":
      "Mevcut uygulama deneyimi çocuğun e-posta adresini, telefon numarasını, hassas konumunu, fotoğraflarını, kişilerini, mikrofonunu veya kamerasını istemez. Bondie kişisel bilgileri satmaz.",
    "terms.eyebrow": "Koşullar",
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
    "terms.contactText":
      'Kullanım koşulları, uygulama desteği, güvenlik bildirimi veya gizlilik talepleri için <a class="support-anchor" href="#support-form">destek formunu</a> kullanabilirsiniz.',
    "safety.eyebrow": "Güvenlik",
    "safety.title": "Güvenlik Rehberi",
    "safety.updated": "Her aktiviteden önce kısa bir yetişkin kontrolü.",
    "safety.oneTitle": "Yetişkin gözetimi",
    "safety.oneText": "Her aktivite sorumlu bir yetişkin tarafından seçilmeli, uyarlanmalı ve gözetilmelidir.",
    "safety.twoTitle": "Alan kontrolü",
    "safety.twoText": "Keskin nesneleri, kaygan yüzeyleri, kabloları ve takılma risklerini kaldırın.",
    "safety.threeTitle": "Malzeme kontrolü",
    "safety.threeText": "Yaşa uygun malzemeler kullanın; küçük parçalar, pil, mıknatıs ve alerjenleri kontrol edin.",
    "safety.fourTitle": "Yaş ve gelişim",
    "safety.fourText":
      "Önerileri çocuğun yaşı, gelişim seviyesi, ilgisi ve o günkü hazır oluşuna göre değerlendirin.",
    "safety.fiveTitle": "Uyarlayın ve durun",
    "safety.fiveText":
      "Çocuk yorgun, bunalmış, ilgisiz veya güvensiz görünürse aktiviteyi hemen durdurun.",
    "safety.sixTitle": "Sağlık ve acil durum",
    "safety.sixText":
      "Yaralanma, alerjik belirti veya sağlık riski oluşursa aktiviteyi bırakın ve uygun profesyonel yardım alın.",
    "support.eyebrow": "Destek",
    "support.title": "Yardıma mı ihtiyacınız var?",
    "support.lede":
      'Uygulama, gizlilik, güvenlik, aktivite geri bildirimi veya hata bildirimi için bize yazın. Doğrudan e-posta için <a href="mailto:hello.bondie.app@gmail.com">hello.bondie.app@gmail.com</a>.',
    "support.formTitle": "Bondie destek formu",
  },
  es: {
    metaTitle: "Bondie | Ideas de actividades sin pantallas",
    metaDescription:
      "Bondie es una app iOS local-first con ideas de actividades sin pantallas, seguras y adecuadas para la edad, para familias y cuidadores.",
    ogDescription:
      "Ideas de juego tranquilas, breves y seguras según la edad, energía y entorno de tu peque.",
    "nav.aria": "Navegación principal",
    "brand.aria": "Inicio de Bondie",
    "language.aria": "Idioma",
    "navToggle.aria": "Abrir menú",
    "nav.app": "App",
    "nav.privacy": "Privacidad",
    "nav.terms": "Términos",
    "nav.safety": "Seguridad",
    "nav.support": "Soporte",
    "hero.eyebrow": "Momentos pequeños, vínculos grandes",
    "hero.lede":
      "Ideas de actividades breves, seguras y centradas en conectar, según la edad, energía y lugar donde estén.",
    "hero.galleryAria": "Ejemplos de tarjetas de la app Bondie",
    "hero.cardOneAlt": "Tarjeta de actividad Cadena de historias en la app Bondie",
    "hero.cardTwoAlt": "Tarjeta de beneficios de Cadena de historias en la app Bondie",
    "store.appTitle": "El enlace de App Store se activará cuando esté publicado",
    "store.appLabel": "El enlace de App Store se activará cuando esté publicado",
    "store.appAlt": "Descárgalo en el App Store",
    "store.playLabel": "Google Play próximamente",
    "store.playAlt": "Disponible en Google Play",
    "store.soon": "Próximamente",
    "app.eyebrow": "App",
    "app.title": "Ideas que reducen pantallas y facilitan el tiempo compartido.",
    "app.lede":
      "Bondie ofrece a las familias ideas de actividades que no requieren mucha preparación. Cada sugerencia es breve, adaptable y lo bastante simple para entrar en la vida diaria.",
    "feature.oneTitle": "Sugerencias a tu medida",
    "feature.oneText":
      "Bondie sugiere actividades según la edad, nivel de energía, categoría y entorno.",
    "feature.twoTitle": "Información clara en cada tarjeta",
    "feature.twoText":
      "Cómo jugar, qué necesitas, cuánto dura y qué tener en cuenta: todo en una tarjeta.",
    "feature.threeTitle": "Descubre, elige, guarda",
    "feature.threeText": "Descubre nuevas actividades, marca favoritas y vuelve a encontrarlas fácilmente.",
    "feature.fourTitle": "Perfil e idioma",
    "feature.fourText": "El perfil infantil, los avatares y el idioma se guardan en tu dispositivo.",
    "app.activityAria": "Imágenes de actividades de Bondie",
    "app.empathyAlt": "Tarjeta de actividad Gafas de empatía en la app Bondie",
    "app.clubAlt": "Tarjeta de actividad Símbolo del club secreto en la app Bondie",
    "app.objectAlt": "Tarjeta de actividad Pista de objeto en la app Bondie",
    "common.updated": "Última actualización: 30 de mayo de 2026",
    "privacy.eyebrow": "Privacidad",
    "privacy.title": "Política de privacidad",
    "privacy.dataTitle": "¿Qué datos guarda Bondie?",
    "privacy.dataText":
      "Bondie guarda el nombre del adulto, nombre y edad del niño, avatares, preferencias de actividad, favoritos, actividades completadas y preferencia de idioma en el almacenamiento de la app en el dispositivo. Esta información la introduce el adulto en la app o se crea localmente durante el uso. Bondie la usa para personalizar la experiencia, mostrar sugerencias adecuadas a la edad y preferencias, y recordar favoritos y actividades completadas.",
    "privacy.storageTitle": "¿Dónde se guardan los datos?",
    "privacy.storageText":
      "Bondie no usa una base de datos externa para estos datos de perfil y actividad. Estos datos no salen del dispositivo; el equipo de Bondie y los proveedores externos no pueden acceder a estos datos locales.",
    "privacy.thirdTitle": "Compartir con terceros",
    "privacy.thirdText":
      "Bondie no comparte datos de perfil o actividad de la app con terceros para publicidad, seguimiento, analítica o marketing. La app no usa estos datos para seguir a usuarios entre distintas apps o sitios web.",
    "privacy.supportTitle": "Formulario de soporte y datos de contacto",
    "privacy.supportText":
      "Cuando usas el formulario de soporte, tu nombre, correo electrónico, tema seleccionado y mensaje se nos envían. Esta información se usa solo para responder tu solicitud, revisar informes de privacidad o seguridad y dar seguimiento a comentarios sobre errores.",
    "privacy.formTitle": "Seguridad del formulario y envío por correo",
    "privacy.formText":
      "El formulario de soporte lo proporciona Tally. Tally puede procesar los envíos, aplicar controles de seguridad para reducir abusos y reenviar tu mensaje al soporte de Bondie. Tally también puede proporcionar estadísticas anónimas y respetuosas con la privacidad, como visitas, fuente, tipo de dispositivo, navegador y ubicación aproximada. Bondie no usa esta información para publicidad ni seguimiento.",
    "privacy.retentionTitle": "Conservación y eliminación de datos",
    "privacy.retentionText":
      'Los datos locales de la app se conservan en el dispositivo mientras el usuario siga usando la app. Al eliminar la app, el sistema operativo puede eliminar estos datos. Bondie no mantiene una cuenta ni copia de seguridad separada en servidor para estos datos. Tu nombre, correo, tema seleccionado y mensaje enviados por el formulario de soporte pueden ser procesados por Tally y guardados en el buzón de soporte de Bondie para responder tu solicitud. Estos registros se usan solo para soporte, privacidad, informes de seguridad o seguimiento de errores. Para preguntas de privacidad, eliminar registros de soporte o recibir ayuda para borrar datos locales, puedes usar el <a class="support-anchor" href="#support-form">formulario de soporte</a>.',
    "privacy.notCollectTitle": "¿Qué no recopila Bondie?",
    "privacy.notCollectText":
      "La experiencia actual de la app no solicita correo electrónico, teléfono, ubicación precisa, fotos, contactos, micrófono ni cámara del niño. Bondie no vende información personal.",
    "terms.eyebrow": "Términos",
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
    "terms.contactText":
      'Para términos de uso, soporte de la app, informes de seguridad o solicitudes de privacidad, puedes usar el <a class="support-anchor" href="#support-form">formulario de soporte</a>.',
    "safety.eyebrow": "Seguridad",
    "safety.title": "Guía de seguridad",
    "safety.updated": "Una breve revisión adulta antes de cada actividad.",
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
    "support.eyebrow": "Soporte",
    "support.title": "¿Necesitas ayuda?",
    "support.lede":
      'Escríbenos sobre la app, privacidad, seguridad, comentarios de actividades o errores. Para correo directo: <a href="mailto:hello.bondie.app@gmail.com">hello.bondie.app@gmail.com</a>.',
    "support.formTitle": "Formulario de soporte de Bondie",
  },
};

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#nav-links");
const sectionLinks = document.querySelectorAll(".nav-link");
const appStoreLink = document.querySelector("#app-store-link");
const appStoreBadge = document.querySelector("#app-store-badge");
const googlePlayBadge = document.querySelector("#google-play-badge");
const languageOptions = document.querySelectorAll(".language-option");
let supportFormFrame = document.querySelector("#support-form iframe");

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
    return SUPPORTED_LANGUAGES.includes(storedLanguage) ? storedLanguage : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
};

const getInitialLanguage = () => getPathLanguage() || getQueryLanguage() || getStoredLanguage();

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

const loadTallyEmbeds = () => {
  window.Tally?.loadEmbeds?.();
};

window.BondieLoadTallyEmbeds = loadTallyEmbeds;

const stabilizeTallyFrameHeight = (frame) => {
  if (!frame) return;

  const currentHeight = Number.parseInt(frame.style.height || frame.getAttribute("height") || "0", 10);
  if (!currentHeight || currentHeight < TALLY_MIN_HEIGHT) {
    frame.style.height = `${TALLY_MIN_HEIGHT}px`;
  }

  frame.setAttribute("height", String(Math.max(currentHeight || 0, TALLY_MIN_HEIGHT)));
};

const updateSupportForm = (language) => {
  if (!supportFormFrame) return;

  const formUrl = tallyForms[language] ?? tallyForms[DEFAULT_LANGUAGE];
  if (supportFormFrame.dataset.tallySrc !== formUrl || supportFormFrame.getAttribute("src") !== formUrl) {
    supportFormFrame.dataset.tallySrc = formUrl;
    supportFormFrame.src = formUrl;
    supportFormFrame.removeAttribute("style");
  }

  supportFormFrame.setAttribute("height", TALLY_INITIAL_HEIGHT);
  stabilizeTallyFrameHeight(supportFormFrame);
};

const applyLanguage = (language, { updateUrl = false, replaceUrl = false } = {}) => {
  const dictionary = getDictionary(language);
  const activeLanguage = translations[language] ? language : DEFAULT_LANGUAGE;

  document.documentElement.lang = activeLanguage;
  document.title = dictionary.metaTitle;
  setMetaContent('meta[name="description"]', dictionary.metaDescription);
  setMetaContent('meta[property="og:title"]', dictionary.metaTitle);
  setMetaContent('meta[property="og:description"]', dictionary.ogDescription);

  if (appStoreBadge) {
    appStoreBadge.src = storeBadges[activeLanguage].appStore;
    appStoreBadge.alt = dictionary["store.appAlt"];
  }

  if (googlePlayBadge) {
    googlePlayBadge.src = storeBadges[activeLanguage].googlePlay;
    googlePlayBadge.alt = dictionary["store.playAlt"];
  }

  document.querySelectorAll("[data-card-image]").forEach((image) => {
    const src = cardImages[activeLanguage]?.[image.dataset.cardImage];
    if (src) image.src = src;
  });

  updateSupportForm(activeLanguage);

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
};

if (APP_STORE_URL && appStoreLink) {
  appStoreLink.href = APP_STORE_URL;
  appStoreLink.classList.remove("app-store-link-disabled");
  appStoreLink.removeAttribute("aria-disabled");
}

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

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      sectionLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-42% 0px -52% 0px" },
);

observedSections.forEach((section) => observer.observe(section));

applyLanguage(getInitialLanguage(), { updateUrl: true, replaceUrl: true });
window.addEventListener("load", () => {
  loadTallyEmbeds();
  stabilizeTallyFrameHeight(supportFormFrame);
});
