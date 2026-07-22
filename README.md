# Рехамед нэгдсэн эмнэлэг — Вэбсайт

Статик олон хуудастай вэбсайт. Server-side код шаардахгүй тул ямар ч hosting дээр ажиллана.

## 📁 Файлын бүтэц

```
rehamed-website/
├── index.html          Нүүр хуудас (слайдер, салбарууд, үйлчилгээ)
├── about.html          Бидний тухай (слайдшоу, MVV, түүх)
├── staff.html          Ажилтан        → ?type=management/surgery/equipment/all
├── news.html           Мэдээний жагсаалт
├── news-detail.html    Мэдээний дэлгэрэнгүй → ?id=n1...n6
├── insurance.html      Эрүүл мэндийн даатгал
├── contact.html        Холбоо барих
├── branch.html         Салбарын дэлгэрэнгүй → ?id=gvals/negdsen/clinic
├── service.html        Үйлчилгээний дэлгэрэнгүй → ?id=rehab/ct/...
├── css/style.css       Бүх загвар (өнгө солих бол :root хувьсагчид)
├── js/partials.js      ⭐ ЦЭС + FOOTER — нэг л энд засна
├── js/main.js          Бүх логик + өгөгдөл (доор дэлгэрэнгүй)
├── partials/           nav/footer-ийн эх хувь (лавлагаа)
└── images/             Лого, салбарын зураг, favicon
```

## ✏️ Контент засах хялбар заавар

| Юу засах | Хаана |
|---|---|
| Цэс, footer | `js/partials.js` (нэг файл → бүх хуудсанд шинэчлэгдэнэ) |
| Өнгөний схем | `css/style.css` доторх `:root { --red: ... }` |
| Салбарын хаяг, утас | `js/main.js` → `const branches = {` |
| Ажилтан нэмэх/засах | `js/main.js` → `const staffData = {` |
| Мэдээ нэмэх | `js/main.js` → `const newsData = {` + `newsOrder` жагсаалт |
| Үйлчилгээ засах | `js/main.js` → `const svcData = {` |
| Зураг солих | `js/main.js` → `const IMGS = {` (URL солино) |
| Лого солих | `images/logo.png` файлыг ижил нэрээр дарж хуулна |

## 🚀 Ажиллуулах

- **Локал:** `index.html` дээр double-click (fetch ашигладаггүй тул file:// дээр ч ажиллана)
- **Live Server:** VS Code → Open with Live Server
- **Hosting:** Хавтасны агуулгыг public_html руу upload, эсвэл Netlify Drop дээр чирж тавина

## ⚠️ Чухал дүрэм

`partials/nav.html`-ийг зассан бол `js/partials.js` доторх NAV_HTML-ийг мөн адил
шинэчлэх ёстой (сайт nav-ийг partials.js-ээс уншдаг, partials/ хавтас нь зөвхөн лавлагаа).
