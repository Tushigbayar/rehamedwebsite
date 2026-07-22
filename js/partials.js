// ╔══════════════════════════════════════════════════════════════╗
// ║  НИЙТЛЭГ NAV + FOOTER — нэг л газраас удирдана                ║
// ║                                                                ║
// ║  Menu эсвэл footer засах бол ЭНЭ ФАЙЛЫГ л засна —              ║
// ║  бүх 9 хуудсанд автоматаар шинэчлэгдэнэ.                       ║
// ║                                                                ║
// ║  Ажиллах зарчим: хуудас бүрт байгаа <div id="site-nav"> болон  ║
// ║  <div id="site-footer"> хоосон заагч руу main.js доторх        ║
// ║  loadPartials() функц доорх HTML-ийг оруулдаг.                 ║
// ║  fetch() ашигладаггүй тул file:// протоколоор ч ажиллана.      ║
// ╚══════════════════════════════════════════════════════════════╝

// ── Цэсний HTML (partials/nav.html-тэй ижил байх ёстой) ──
window.NAV_HTML = `<!-- ═══════════════════════════════════════════════════════
     НИЙТЛЭГ ЦЭС (NAV) — БҮХ ХУУДАСНЫ ТОЛГОЙ ХЭСЭГ
     Энэ файлыг зассны дараа doc/README дагуу js/partials.js-ийг
     ДАХИН ҮҮСГЭХ шаардлагатай (эсвэл 2 файлыг зэрэг засна).
     Цэсний бүтэц:
       • Нүүр, Бидний тухай — шууд холбоос
       • Ажилтан / Салбарууд / Үйлчилгээнүүд — dropdown цэс
       • data-page атрибут = идэвхтэй хуудсыг тодруулахад ашиглана
═══════════════════════════════════════════════════════ -->
<nav class="nav">
  <a class="nav-logo" onclick="showPage('home')">
    <img src="images/logo.png" alt="Рехамед" id="logoImg" style="display:block"
         onerror="this.style.display='none';document.getElementById('logoFallback').style.display='flex'">
    <div id="logoFallback" style="display:none;align-items:center;gap:8px">
      <div style="width:36px;height:36px;background:var(--red);border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px;font-weight:700;font-family:'Playfair Display',serif">Р</div>
      <span style="font-family:'Playfair Display',serif;font-size:18px;font-weight:700;color:var(--navy)">Реха<span style="color:var(--red)">мед</span></span>
    </div>
  </a>
  <ul class="nav-menu" id="navMenu">
    <li><a onclick="showPage('home')" data-page="index.html">Нүүр</a></li>
    <li><a onclick="showPage('about')" data-page="about.html">Бидний тухай</a></li>
    <li id="ddAjiltan">
      <a>Ажилтан <span class="arr">▾</span></a>
      <ul class="dropdown">
        <li><a onclick="showStaff('management')"><i class="ti ti-crown"></i>Удирдлага</a></li>
        <li><a onclick="showStaff('surgery')"><i class="ti ti-stethoscope"></i>Мэс засалчид</a></li>
        <li><a onclick="showStaff('equipment')"><i class="ti ti-device-heart-monitor"></i>Тоног төхөөрөмж</a></li>
        <li class="dd-div"></li>
        <li><a onclick="showStaff('all')"><i class="ti ti-users"></i>Бүх ажилтан</a></li>
      </ul>
    </li>
    <li id="ddSalbar">
      <a>Салбарууд <span class="arr">▾</span></a>
      <ul class="dropdown">
        <li><a onclick="showBranch('gvals')"><i class="ti ti-building-hospital"></i>Рехамед нэгдсэн эмнэлэг</a></li>
        <li><a onclick="showBranch('negdsen')"><i class="ti ti-building-hospital"></i>Novamed — Гоо заслын эмнэлэг</a></li>
        <li><a onclick="showBranch('clinic')"><i class="ti ti-building-hospital"></i>Рехамед клиник</a></li>
      </ul>
    </li>
    <li id="ddUilchilgee">
      <a>Үйлчилгээнүүд <span class="arr">▾</span></a>
      <ul class="dropdown">
        <li><a onclick="showServiceByKey('rehab')"><i class="ti ti-wheelchair"></i>Амбулатори</a></li>
        <li><a onclick="showServiceByKey('ct')"><i class="ti ti-scan"></i>Дүрс оношилгоо</a></li>
        <li><a onclick="showServiceByKey('cardio')"><i class="ti ti-heartbeat"></i>Сэргээн засах эмчилгээ</a></li>
        <li><a onclick="showServiceByKey('neuro')"><i class="ti ti-brain"></i>Мэс засал эрчимт эмчилгээ</a></li>
        <li><a onclick="showServiceByKey('surgery')"><i class="ti ti-scalpel"></i>Хавдар, хими эмчилгээ, бай эмчилгээ</a></li>
        <li><a onclick="showServiceByKey('chemo')"><i class="ti ti-ribbon-health"></i>Урьдчилан сэргийлэх, эрт илрүүлэг</a></li>
        <li class="dd-div"></li>
        <li><a onclick="showServiceByKey('prev')"><i class="ti ti-shield-check"></i>Хэвтүүлэн эмчлэх</a></li>
        <li><a onclick="showServiceByKey('ward')"><i class="ti ti-bed"></i>Хоол үйлдвэрлэл шим тэжээл</a></li>
      </ul>
    </li>
    <li><a onclick="showPage('insurance')" data-page="insurance.html">Эрүүл мэндийн даатгал</a></li>
    <li><a onclick="showPage('news')" data-page="news.html">Мэдээлэл</a></li>
    <li><a onclick="showPage('contact')" data-page="contact.html">Холбоо барих</a></li>
  </ul>
  <div style="display:flex;align-items:center;gap:4px">
  <button class="theme-toggle" id="themeBtn" onclick="toggleTheme()" title="Өдөр/Шөнийн горим">
    <i class="ti ti-moon" id="themeIcon"></i>
  </button>
  <button class="hamburger" id="hamburger" onclick="toggleMenu()" aria-label="Цэс нээх">
    <span></span><span></span><span></span>
  </button>
  </div>
</nav>`;

// ── Footer-ийн HTML (partials/footer.html-тэй ижил байх ёстой) ──
window.FOOTER_HTML = `<!-- ═══════════════════════════════════════════════════════
     НИЙТЛЭГ FOOTER — БҮХ ХУУДАСНЫ ХӨЛ ХЭСЭГ
     Лого, тухай текст, сошиал холбоос, салбарууд, туслах цэс.
     Зассны дараа js/partials.js-ийг дахин үүсгэнэ.
═══════════════════════════════════════════════════════ -->
<footer class="footer">
  <div class="footer-top">
    <div>
      <a href="index.html" style="display:inline-block;margin-bottom:.9rem;background:#fff;padding:10px 16px;border-radius:10px">
        <img src="images/logo.png" alt="Рехамед нэгдсэн эмнэлэг" style="height:36px;width:auto;display:block">
      </a>
      <p class="footer-about">Эрүүл мэндийн дэвшилтэт технологи, чадварлаг хамт олон бүхий нэгдсэн эмнэлгийн тусламж үйлчилгээг үзүүлж байна. ДЭМБ-ын баталгаажсан анхны цогц лаборатори.</p>
      <div class="social-row">
        <a class="soc-btn" href="https://www.facebook.com/RehamedHospital/" target="_blank"><i class="ti ti-brand-facebook"></i></a>
        <a class="soc-btn" href="#"><i class="ti ti-brand-instagram"></i></a>
        <a class="soc-btn" href="#"><i class="ti ti-brand-youtube"></i></a>
        <a class="soc-btn" href="#"><i class="ti ti-brand-x"></i></a>
      </div>
    </div>
    <div>
      <div class="footer-col-title">Салбарууд</div>
      <ul class="footer-links">
        <li><a href="branch.html?id=gvals">Рехамед нэгдсэн эмнэлэг</a></li>
        <li><a href="branch.html?id=negdsen">Novamed эмнэлэг</a></li>
        <li><a href="branch.html?id=clinic">Рехамед клиник</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Холбоо барих</div>
      <ul class="footer-links">
        <li><a>📍 БЗД 7-р хороо, Зүүн 4 зам</a></li>
        <li><a>📞 7575-0400</a></li>
        <li><a href="https://rehamed.mn" target="_blank">🌐 rehamed.mn</a></li>
      </ul>
      <div style="margin-top:.9rem;font-size:12px;color:#3a4a74;line-height:1.8">Даваа–Баасан 08:30–17:00<br>Бямба 09:00–14:00</div>
    </div>
  </div>
  <div class="footer-bottom">
    <span class="footer-copy">© 2024 Рехамед нэгдсэн эмнэлэг. Бүх эрх хуулиар хамгаалагдсан.</span>
  </div>
</footer>`;
