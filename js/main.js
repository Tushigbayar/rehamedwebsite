// ╔══════════════════════════════════════════════════════════════╗
// ║  REHAMED WEBSITE — ҮНДСЭН JAVASCRIPT                          ║
// ║                                                                ║
// ║  ФАЙЛЫН БҮТЭЦ:                                                 ║
// ║   1. IMGS        — бүх зурагны URL нэг дор (солиход хялбар)    ║
// ║   2. staffMeta / staffData — ажилтны мэдээлэл                  ║
// ║   3. showPage    — хуудас хоорондын шилжилт                    ║
// ║   4. branches    — 3 салбарын дэлгэрэнгүй өгөгдөл              ║
// ║   5. showBranch / showStaff / showService / showNews           ║
// ║      — дэлгэрэнгүй хуудсуудын render функцууд                  ║
// ║   6. svcData     — эмчилгээ/үйлчилгээний өгөгдөл               ║
// ║   7. newsData    — мэдээний өгөгдөл                            ║
// ║   8. toggleMenu  — утасны hamburger цэс                        ║
// ║   9. filterNews  — мэдээ ангилалаар шүүх                       ║
// ║  10. Слайдер, scroll reveal, тоолуур зэрэг эффектүүд           ║
// ║  11. Хуудас ачаалагдах үеийн bootstrap (хамгийн доор)          ║
// ║                                                                ║
// ║  КОНТЕНТ ЗАСВАРЛАХ ЗААВАР:                                     ║
// ║   • Зураг солих  → IMGS обьект доторх URL-ыг солино            ║
// ║   • Ажилтан нэмэх → staffData-д мөр нэмнэ                      ║
// ║   • Мэдээ нэмэх  → newsData + newsOrder-т нэмнэ                ║
// ║   • Утас/хаяг    → branches обьектод бий                       ║
// ╚══════════════════════════════════════════════════════════════╝


// ─── 1. ЗУРАГНУУД: бүх Unsplash зурагны URL. Өөрийн зургаар солиж болно ───
const IMGS = {
  gvals_hero:'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=900&q=85',
  negdsen_hero:'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=85',
  clinic_hero:'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&q=85',
  rehab:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
  ct:'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=400&q=80',
  surgery:'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&q=80',
  lab:'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80',
  consult:'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80',
  chemo:'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&q=80',
  ward:'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&q=80',
  cardio:'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?w=400&q=80',
  doc_f1:'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
  doc_f2:'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
  doc_f3:'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
  doc_m1:'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80',
  doc_m2:'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
  doc_m3:'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80',
  doc_m4:'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&q=80',
};

const CLINIC_IMG = 'images/branch-rehamed.jpg';
const NOVAMED_IMG = 'images/branch-novamed.png';

// ─── 4. САЛБАРУУД: нэр, хаяг, утас, зураг, үйлчилгээ, газрын зураг ───
const branches = {
  gvals:{name:'Рехамед нэгдсэн эмнэлэг',badge:'Үндсэн салбар',badgeColor:'var(--red)',heroImg:CLINIC_IMG,addr:'БЗД, 7-р хороо, Зүүн 4 зам, Энхтайвны өргөн чөлөө 61А, Улаанбаатар',phone:'7575-0400',hours:'Даваа–Баасан 08:30–17:00 | Бямба 09:00–14:00',desc:'Рехамед нэгдсэн эмнэлэг нь ДЭМБ-аар баталгаажсан, хэвтэн эмчлэх тасаг, мэс заслын нэгдсэн тасаг, сэргээн засах, дүрс оношилгоо зэрэг иж бүрэн тусламж үйлчилгээтэй Монголын тэргүүлэх эмнэлэг юм.',services:['Хэвтэн эмчлэх тасаг','Мэс заслын нэгдсэн тасаг','Эрчимт тусламжийн тасаг','Зүрх судасны эмчилгээ','Мэдрэлийн эмчилгээ','Дүрс оношилгоо','Лабораторийн шинжилгээ','Сэргээн засах эмчилгээ'],treatments:['ward','surgery','cardio','neuro','ct'],mapUrl:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.5!2d106.9057!3d47.9184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96924!2s0x1!2sRehamed!5e0!3m2!1smn!2smn!4v1&q=Rehamed+Hospital+Ulaanbaatar'},
  negdsen:{name:'Novamed — Арьс, Гоо Заслын эмнэлэг',badge:'Гоо засал',badgeColor:'#b8860b',heroImg:NOVAMED_IMG,addr:'Улаанбаатар хот, утас: 7000-2455',phone:'7000-2455',hours:'Даваа–Баасан 09:00–18:00 | Бямба 09:00–15:00',desc:'Novamed Aesthetic & Surgery Clinic — арьс, гоо заслын болон пластик мэс заслын мэргэшсэн эмнэлэг. Орчин үеийн тоног төхөөрөмж, мэргэжлийн эмч нарын багтай.',services:['Арьсны эмчилгээ','Гоо заслын мэс засал','Лазер эмчилгээ','Үс суулгалт','Ботокс, Филлер','Дерматологи','Анти-эйдж эмчилгээ','Биеийн өнгө засал'],treatments:['prev','rehab','ct','cardio'],mapUrl:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.5!2d106.9120!3d47.9175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96924!2s0x2!2sNovamed!5e0!3m2!1smn!2smn!4v1&q=Novamed+Clinic+Ulaanbaatar'},
  clinic:{name:'Рехамед клиник',badge:'Клиник',badgeColor:'var(--orange)',heroImg:IMGS.clinic_hero,addr:'Улаанбаатар хот, дэлгэрэнгүй байршлыг холбоо барих хэсгээс авна уу',phone:'7575-0400',hours:'Даваа–Баасан 08:30–17:00 | Бямба 09:00–14:00',desc:'Рехамед клиник нь амбулаторийн үзлэг зөвлөгөө, урьдчилан сэргийлэх үзлэгийн багц болон өдрийн эмчилгээнд чиглэсэн хүртээмжтэй салбар юм.',services:['Амбулатори үзлэг','Урьдчилан сэргийлэх','Эрт илрүүлгийн багц','Зөвлөгөө, чиглүүлэх','Шинжилгээ авах','Тарилга эмчилгээ','Өдрийн эмчилгээ','Гэр бүлийн эмчийн үзлэг'],treatments:['prev','ct','rehab','cardio'],mapUrl:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.5!2d106.9200!3d47.9150!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96924!2s0x3!2sRehamed+Clinic!5e0!3m2!1smn!2smn!4v1&q=Rehamed+Clinic+Ulaanbaatar'}
};

const staffData = {
  management:[
    {name:'Б. Уламбаяр',role:'Хэвтэн эмчлэх тасгийн эрхлэгч',degree:'Клиникийн профессор · АУ-ны доктор\n"Хөдөлмөрийн Гавьяаны Улаан Тугийн Одон" шагналт',dept:'Удирдлага',img:IMGS.doc_m1},
    {name:'Д. Батзаяа',role:'Эмнэлгийн тусламж захирал',degree:'АУ-ны доктор · Мэс зөвлөх\nМэс заслын нэгдсэн тасгийн эрхлэгч',dept:'Удирдлага',img:IMGS.doc_f1},
    {name:'Н. Баярмаа',role:'Гүйцэтгэх захирал',degree:'Эрүүл мэндийн менежмент · MBA\nЭмнэлгийн стратеги, хөгжлийн алба',dept:'Удирдлага',img:IMGS.doc_f2},
    {name:'Г. Мөнхбат',role:'Эрдэм шинжилгээний захирал',degree:'АУ-ны доктор · Профессор\nДотор эмчилгээ, оношлогоо',dept:'Удирдлага',img:IMGS.doc_m2}
  ],
  surgery:[
    {name:'З. Болд',role:'Мэс заслын тасгийн эрхлэгч',degree:'АУ-ны доктор · Мэс зөвлөх\n15+ жилийн туршлага',dept:'Мэс засал',img:IMGS.doc_m3},
    {name:'Н. Цэрэнлхам',role:'Сэргээн засахын эмч',degree:'МУЭмч · Физик эмчилгээ\nСэргээн засах, дурангийн мэс засал',dept:'Мэс засал',img:IMGS.doc_f3},
    {name:'О. Ганбаяр',role:'Мэс засалч',degree:'АУ-ны дэд доктор\nДурангийн хагалгаа, яаралтай тусламж',dept:'Мэс засал',img:IMGS.doc_m4},
    {name:'Х. Сарнай',role:'Мэдрэлийн эмч',degree:'МУЭмч · Мэдрэл судлаач\nЭпидурал, блок хийх мэс засал',dept:'Мэс засал',img:IMGS.doc_f1}
  ],
  equipment:[
    {name:'Д. Оюунбаяр',role:'Тоног төхөөрөмжийн алба дарга',degree:'Биомедицины инженер\nCT, MRI тоног төхөөрөмжийн хариуцлага',dept:'Тоног төхөөрөмж',img:IMGS.doc_m1},
    {name:'Б. Энхтуяа',role:'Дүрс оношилгооны их эмч',degree:'АУ-ны дэд доктор\nCT, ЭХО, рентген оношилгоо',dept:'Тоног төхөөрөмж',img:IMGS.doc_f2},
    {name:'Т. Ариунтуяа',role:'Лабораторийн эрхлэгч',degree:'Хими-биологийн эрдэмтэн\nДЭМБ-ын баталгаажсан лаборатори',dept:'Тоног төхөөрөмж',img:IMGS.doc_f3},
    {name:'М. Дорж',role:'IT болон дижитал эрүүл мэнд',degree:'Мэдээллийн технологи инженер\nЭмнэлгийн систем, PACS',dept:'Тоног төхөөрөмж',img:IMGS.doc_m2}
  ],
  all:[]
};
staffData.all=[...staffData.management,...staffData.surgery,...staffData.equipment];

// ─── 2. АЖИЛТНЫ АНГИЛАЛ: staff.html?type=... параметртэй тохирно ───
const staffMeta={
  management:{title:'Удирдлага',desc:'Рехамед нэгдсэн эмнэлгийн удирдах зөвлөл болон гүйцэтгэх захирлуудын баг'},
  surgery:{title:'Мэс засалчид',desc:'Мэс заслын нэгдсэн тасгийн мэргэжилтэн эмч нар'},
  equipment:{title:'Тоног төхөөрөмж',desc:'Орчин үеийн тоног төхөөрөмж, дүрс оношилгооны алба'},
  all:{title:'Бүх ажилтан',desc:'Рехамед нэгдсэн эмнэлгийн нийт ажилтнууд'}
};

// ─── 3. ХУУДАС ШИЛЖИЛТ: id → файлын нэр болгож шилжинэ ───
function showPage(id){
  const map={home:'index.html'};
  window.location.href = map[id] || (id+'.html');
}

function showBranch(key){
  closeMobileMenu();

  const container=document.getElementById('branch-content');
  if(!container){ window.location.href='branch.html?id='+key; return; }
  const b=branches[key];
  container.innerHTML=`
    <div class="page-hero">
      <div class="page-hero-orb"></div>
      <div class="breadcrumb" onclick="showPage('home')">Нүүр › <span>Салбарууд</span> › ${b.name}</div>
      <h2>${b.name}</h2><p>${b.desc}</p>
    </div>
    <section class="sec">
      <button class="back-btn" onclick="showPage('home')"><i class="ti ti-arrow-left"></i>Буцах</button>
      <div class="branch-detail-grid">
        <div>
          <div class="branch-detail-hero">
            <img src="${b.heroImg}" alt="${b.name}" loading="lazy">
            <div class="branch-detail-overlay"></div>
            <div class="branch-detail-content">
              <div style="display:inline-block;background:${b.badgeColor};color:#fff;font-size:11px;font-weight:600;padding:4px 12px;border-radius:20px;margin-bottom:10px">${b.badge}</div>
              <h3>${b.name}</h3><p>${b.addr}</p>
            </div>
          </div>
          <div class="branch-info-section">
            <div class="branch-info-title">Эмчилгээ үйлчилгээний чиглэлүүд</div>
            <div class="branch-svc-list">${b.services.map(s=>`<div class="branch-svc-item"><i class="ti ti-circle-check"></i>${s}</div>`).join('')}</div>
          </div>
          <div class="branch-info-section">
            <div class="branch-info-title">Энэ салбарын эмчилгээнүүд</div>
            <div class="branch-treat-grid">${(b.treatments||[]).map(k=>{const t=svcData[k];return t?`<div class="branch-treat-card" data-key="${k}" onclick="showService(this)">
              <div class="branch-treat-img"><img src="${t.img}" alt="${t.name}" loading="lazy"><div class="branch-treat-overlay"></div></div>
              <div class="branch-treat-body"><div class="branch-treat-name">${t.name}</div><div class="branch-treat-desc">${t.desc}</div><span class="branch-treat-link">Дэлгэрэнгүй <i class="ti ti-arrow-right"></i></span></div>
            </div>`:''}).join('')}</div>
          </div>
        </div>
        <div>
          <div class="branch-info-card">
            <div style="font-family:'Playfair Display',serif;font-size:17px;font-weight:600;color:var(--navy);margin-bottom:1rem">Холбоо барих</div>
            <div class="info-row"><i class="ti ti-map-pin"></i><div><span class="info-row-label">Хаяг</span><span class="info-row-val">${b.addr}</span></div></div>
            <div class="info-row"><i class="ti ti-phone"></i><div><span class="info-row-label">Утас</span><span class="info-row-val">${b.phone}</span></div></div>
            <div class="info-row"><i class="ti ti-clock"></i><div><span class="info-row-label">Цагийн хуваарь</span><span class="info-row-val">${b.hours}</span></div></div>
            <div class="info-row"><i class="ti ti-world"></i><div><span class="info-row-label">Вэбсайт</span><span class="info-row-val" style="color:var(--blue)">rehamed.mn</span></div></div>
          </div>
          <div class="map-wrap" style="margin-top:1rem">
            <iframe class="map-frame" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"
              src="${b.mapUrl}">
            </iframe>
          </div>
          <div style="margin-top:1rem;background:var(--bg2);border-radius:12px;padding:1.2rem">
            <div style="font-size:12px;font-weight:600;color:var(--navy);margin-bottom:8px">Шуурхай холбоо</div>
            <div style="display:flex;gap:8px">
              <a href="tel:75750400" style="flex:1;text-align:center;padding:10px;background:#fff;border:1px solid var(--border);border-radius:8px;font-size:12.5px;color:var(--navy);text-decoration:none;font-weight:500"><i class="ti ti-phone" style="display:block;font-size:20px;color:var(--red);margin-bottom:4px"></i>Утасдах</a>
              <a href="https://maps.google.com/?q=Rehamed+Hospital+Ulaanbaatar" target="_blank" style="flex:1;text-align:center;padding:10px;background:#fff;border:1px solid var(--border);border-radius:8px;font-size:12.5px;color:var(--navy);text-decoration:none;font-weight:500"><i class="ti ti-map" style="display:block;font-size:20px;color:var(--blue);margin-bottom:4px"></i>Газрын зураг</a>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  closeDD(); window.scrollTo({top:0,behavior:'smooth'});
}

function showStaff(type){
  closeMobileMenu();

  const grid=document.getElementById('staff-grid');
  if(!grid){ window.location.href='staff.html?type='+type; return; }
  const m=staffMeta[type],d=staffData[type];
  document.getElementById('staff-bc').textContent=m.title;
  document.getElementById('staff-title').textContent=m.title;
  document.getElementById('staff-desc').textContent=m.desc;
  grid.innerHTML=d.map(s=>`
    <div class="staff-card">
      <div class="staff-photo"><img src="${s.img}" alt="${s.name}" loading="lazy"></div>
      <div class="staff-body">
        <div class="staff-name">${s.name}</div>
        <div class="staff-role">${s.role}</div>
        <div class="staff-degree">${s.degree.replace(/\n/g,'<br>')}</div>
        <span class="staff-badge">${s.dept}</span>
      </div>
    </div>`).join('');
  closeDD(); window.scrollTo({top:0,behavior:'smooth'});
}


// ── SLIDESHOW ──
let slideIdx=0,slideTimer;
function initSlides(){
  const slides=document.querySelectorAll('#aboutSlideshow .slide');
  const dotsEl=document.getElementById('slideDots');
  if(!dotsEl) return;
  dotsEl.innerHTML='';
  slides.forEach((_,i)=>{
    const d=document.createElement('div');
    d.className='slide-dot'+(i===0?' active':'');
    d.onclick=()=>goSlide(i);
    dotsEl.appendChild(d);
  });
  clearInterval(slideTimer);
  slideTimer=setInterval(()=>slideMove(1),5000);
}
function goSlide(n){
  const slides=document.querySelectorAll('#aboutSlideshow .slide');
  const dots=document.querySelectorAll('.slide-dot');
  if(!slides.length) return;
  slides[slideIdx].classList.remove('active');
  if(dots[slideIdx]) dots[slideIdx].classList.remove('active');
  slideIdx=(n+slides.length)%slides.length;
  slides[slideIdx].classList.add('active');
  if(dots[slideIdx]) dots[slideIdx].classList.add('active');
}
function slideMove(dir){goSlide(slideIdx+dir)}

// ── SERVICE DATA ──
const svcData={
  rehab:{
    name:'Сэргээн засах эмчилгээ',
    desc:'Үе мөч, нурууны гэмтэл, мэдрэлийн өвчний дараах сэргэлт',
    img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85',
    about:'Сэргээн засах эмчилгээ нь гэмтэл, мэс заслын дараах сэргэлтийг хурдасгах, хөдөлгөөний чадварыг нөхөн сэргээхэд чиглэнэ. Биеийн тамирын эмч, физик эмчилгээний мэргэжилтнүүдийн багаар хувь хүн бүрт тохирсон сэргэлтийн хөтөлбөр боловсруулдаг.',
    steps:['Эхний үзлэг — эмч таны байдлыг үнэлж, сэргэлтийн зорилтыг тодорхойлно','Хувийн хөтөлбөр — тан д зориулсан дасгал, эмчилгээний хуваарь гаргана','Эмчилгээний явц — долоо хоног бүр дэвшлийг хянаж, хөтөлбөрийг тохируулна','Гэрийн даалгавар — гэртээ хийх дасгалуудыг заана','Хяналтын үзлэг — сэргэлтийг баталгаажуулна'],
    warn:'Сэргээн засах эмчилгээнд хамрагдахаас өмнө эмчийн заалтгүйгээр ямар нэгэн дасгал хийхгүй байна уу. Хэт шуурхай хөдөлгөөн хийх нь гэмтлийг улам хүндрүүлж болзошгүй.',
    tips:['Дасгалыг тогтмол хийх — өдөр бүр жаахан хийх нь их багц хийхээс дээр','Хоол тэжээл — уураг ихтэй хоол идэх нь булчингийн сэргэлтийг дэмжинэ','Нойр — хангалттай унтах нь биеийн сэргэлтийн гол хэрэгсэл'],
    related:[{key:'neuro',name:'Мэдрэлийн эмчилгээ',img:'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=100&q=60'},{key:'prev',name:'Урьдчилан сэргийлэх',img:'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=100&q=60'},{key:'surgery',name:'Мэс засал',img:'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=100&q=60'}]
  },
  ct:{
    name:'Дүрс оношилгоо',
    desc:'CT, MRI, ЭХО, рентген болон лабораторийн иж бүрэн шинжилгээ',
    img:'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=900&q=85',
    about:'Дүрс оношилгоо нь өвчний шалтгааныг нарийн тодорхойлох, эмчилгээний явцыг хянахад зайлшгүй шаардлагатай. Рехамед нэгдсэн эмнэлэг нь ДЭМБ-аар баталгаажсан орчин үеийн тоног төхөөрөмжтэй. CT, MRI, ЭХО, рентген, мамографи болон лабораторийн шинжилгээг нэг дороос авах боломжтой.',
    steps:['Эмчийн заалт авах — үзлэг хийлгэж, шинжилгээний хуудас авна','Бүртгэл — лавлах тасагт бүртгүүлнэ','Бэлтгэл — зарим шинжилгээнд өлсгөлөн ирэх шаардлагатай','Шинжилгээ — 15-60 минут','Үр дүн — 1-24 цагийн дотор гарна'],
    warn:'CT болон рентген шинжилгээ нь цацраг туяа ашигладаг тул жирэмсэн эмэгтэйчүүд заавал эмчдээ мэдэгдэж зөвлөгөө авах хэрэгтэй.',
    tips:['ЭХО шинжилгээнд бүтэн давсагтай ирнэ','MRI шинжилгээнд металл зүйл авч орохгүй байна','Шинжилгээний өмнөх хоолны дэглэмийг лавлагаанаас асууна уу'],
    related:[{key:'cardio',name:'Зүрх судасны',img:'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?w=100&q=60'},{key:'neuro',name:'Мэдрэлийн эмчилгээ',img:'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=100&q=60'},{key:'prev',name:'Урьдчилан сэргийлэх',img:'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=100&q=60'}]
  },
  cardio:{
    name:'Зүрх судасны эмчилгээ',
    desc:'ЭКГ, зүрхний эхо, стрессийн тест болон зүрх судасны иж бүрэн оношилгоо',
    img:'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?w=900&q=85',
    about:'Зүрх судасны өвчин нь Монгол улсад нас баралтын тэргүүлэх шалтгаануудын нэг. Рехамед нэгдсэн эмнэлэгт зүрх судасны иж бүрэн шинжилгээ, эмчилгээний тасаг ажиллаж байна. ЭКГ, Holter мониторинг, зүрхний эхо, стрессийн тест зэрэг оношилгооны аргуудыг ашигладаг.',
    steps:['Эхний үзлэг — зүрхний хэм, цусны даралт хэмжинэ','ЭКГ шинжилгээ — зүрхний цахилгаан идэвхийг бүртгэнэ','Эхо оношилгоо — зүрхний хавхлага, ханын хөдөлгөөнийг харна','Холтер мониторинг — 24-48 цаг зүрхийг хянана','Эмчилгээний хөтөлбөр — оношид тохирсон эмчилгээ зохино'],
    warn:'Цээжний өвдөлт, амьсгаадалт, зүрхний дэлдэлт мэдэрвэл яаралтай тусламж дуудна уу. Эдгээр шинж тэмдэг нь зүрхний шигдээсийн анхны илрэл байж болно.',
    tips:['Давсны хэрэглээг хязгаарла','Жин хэвийн байлга — тарган байх нь зүрхэнд ачаалал нэмдэг','Утаа татахгүй байх','Тогтмол хөдөлгөөн хий — өдөрт 30 минут алхах'],
    related:[{key:'ct',name:'Дүрс оношилгоо',img:'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=100&q=60'},{key:'prev',name:'Урьдчилан сэргийлэх',img:'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=100&q=60'},{key:'ward',name:'Хэвтэн эмчлэх',img:'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=100&q=60'}]
  },
  neuro:{
    name:'Мэдрэлийн эмчилгээ',
    desc:'Тархи, нурууны мэдрэл, эпилепси, нойргүйдэл, толгой эргэлт',
    img:'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=900&q=85',
    about:'Мэдрэлийн өвчнүүд нь нийтийн дунд өргөн тархсан бөгөөд эрт илрүүлэх нь эдгэрэлтэд шийдвэрлэх үүрэгтэй. Рехамед нэгдсэн эмнэлэгт мэдрэлийн эмч нар тархины болон нурууны мэдрэлийн өвчнийг оношилж, эмчилдэг.',
    steps:['Мэдрэлийн үзлэг — хариу урвал, мэдрэхүйн шинжилгээ хийнэ','EEG болон EMG — тархины болон булчингийн цахилгаан идэвхийг хэмжинэ','MRI/CT оношилгоо — тархи, нурууны зураг авна','Оношилгоо тогтоох — тухайн өвчний мөн чанарыг тодруулна','Эмчилгээний хөтөлбөр зохино'],
    warn:'Гэнэтийн хүчтэй толгой өвдөлт, нэг талдаа сулрах, ярих бэрхшээл гарвал яаралтай эмчид хандана уу — эдгээр нь тархины цус харвалтын шинж байж болно.',
    tips:['Нойрны дэглэм барих','Стрессийг удирдах — медитаци, амралт чухал','Дэлгэц харах цагаа хязгаарла','Архи болон тамхинаас татгалза'],
    related:[{key:'rehab',name:'Сэргээн засах',img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&q=60'},{key:'ct',name:'Дүрс оношилгоо',img:'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=100&q=60'},{key:'ward',name:'Хэвтэн эмчлэх',img:'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=100&q=60'}]
  },
  prev:{
    name:'Урьдчилан сэргийлэх үзлэг',
    desc:'Эрт илрүүлэг, эрүүл мэндийн иж бүрэн үзлэгийн багцууд',
    img:'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=85',
    about:'Өвчнийг эмчлэхээс урьдчилан сэргийлэх нь хамгийн хялбар бөгөөд хэмнэлттэй арга. Рехамед нэгдсэн эмнэлэг нь насны ангиллаар ялгасан иж бүрэн үзлэгийн багцуудыг санал болгодог. Жилд нэгэнтээ иж бүрэн шинжилгээ өгч, эрүүл мэнддээ хяналт тавь.',
    steps:['Багц сонгох — нас, хүйсийн онцлогт тохирсон багц сонгоно','Цаг захиалах — нэг дороос бүх шинжилгээ хийнэ','Шинжилгээ өгөх — цус, шээс, дүрс оношилгоо','Эмчийн үзлэг — үр дүнг эмч тайлбарлана','Зөвлөмж авах — эрүүл мэндээ хадгалах зөвлөгөө авна'],
    warn:'Үзлэгийн үр дүнд бага зэргийн хэвийн бус утга гарвал цочирдолгүй — эмч нь нэмэлт шинжилгээ эсвэл зөвлөгөөгөөр дэмжих болно.',
    tips:['Жилд нэгэнтээ иж бүрэн үзлэг хийлгэ','40-с дээш насны хүмүүс колоноскопи хийлгэхийг зөвлөдөг','Эмэгтэйчүүд жилд нэгэнтээ мамографи хийлгэ'],
    related:[{key:'cardio',name:'Зүрх судасны',img:'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?w=100&q=60'},{key:'ct',name:'Дүрс оношилгоо',img:'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=100&q=60'},{key:'rehab',name:'Сэргээн засах',img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&q=60'}]
  },
  surgery:{
    name:'Мэс засал',
    desc:'Дурангийн болон нээлттэй мэс заслын нэгдсэн тасаг',
    img:'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=900&q=85',
    about:'Рехамед нэгдсэн эмнэлгийн мэс заслын нэгдсэн тасаг нь дурангийн болон нээлттэй мэс заслын орчин үеийн тоног төхөөрөмжтэй. Туршлагатай мэс засалчдын баг нь ходоод гэдэсний, хэвлийн хөндийн, ясны болон бусад мэс заслыг гүйцэтгэдэг.',
    steps:['Мэс заслын зааварчилгаа — эмч мэс заслын зайлшгүй байдлыг тайлбарлана','Бэлтгэл шинжилгээ — цус, зүрх, уушгины шинжилгээ хийнэ','Мэдээ алдуулах консультаци — мэдээ мэдрэлийн эмч зөвлөгөө өгнө','Мэс засал хийгдэнэ — 1-4 цаг','Сэргэлтийн тасаг — мэс заслын дараах хяналт'],
    warn:'Мэс заслаас өмнө зааврын дагуу хоол идэхгүй байна уу. Цусыг шингэлдэг эм уудаг бол мэс засалчдаа заавал мэдэгдэх хэрэгтэй.',
    tips:['Мэс заслаас өмнөх 8 цагт хоол идэхгүй байна','Тамхи татдаг бол мэс заслаас 2 долоо хоногийн өмнө зогсоо','Мэс заслын дараа даалгаврын дагуу нүүр угааж, шарх чийглэхгүй байна'],
    related:[{key:'rehab',name:'Сэргээн засах',img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&q=60'},{key:'ward',name:'Хэвтэн эмчлэх',img:'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=100&q=60'},{key:'neuro',name:'Мэдрэлийн эмчилгээ',img:'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=100&q=60'}]
  },
  chemo:{
    name:'Хавдрын эмчилгээ',
    desc:'Хими эмчилгээ, бай эмчилгээ болон онкологийн цогц тусламж',
    img:'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=900&q=85',
    about:'Хавдрын эмчилгээний тасаг нь хими эмчилгээ, бай эмчилгээ, дэмжих тусламжийг нэгтгэн үзүүлдэг. Онколог, сэтгэл зүйч, сувилагч, шим тэжээлийн эмч нарын олон мэргэжлийн баг өвчтөн бүрийн хажууд байна.',
    steps:['Онкологийн консультаци — хавдрын төрөл, үе шатыг тодорхойлно','Эмчилгээний хөтөлбөр зохиох — хими болон бай эмчилгээний тунг тогтооно','Хими эмчилгээ — 3-6 цикл хийгдэнэ','Хяналтын шинжилгээ — хариу урвалыг тогтмол шалгана','Дэмжих тусламж — сэтгэл зүй, шим тэжээлийн дэмжлэг'],
    warn:'Хими эмчилгээний үед дархлаа суларч, халдвар авах эрсдэл нэмэгддэг. Хүйтэн хоол, хүмүүний эргэн тойронд байхдаа болгоомжтой байж, гар угааж байна уу.',
    tips:['Хими эмчилгээний өдөр бүтэн хоолтой ир','Их шингэн уу — ус, сул цай, шөл','Толгойн үс унах нь түр зуурынх — эмчилгээ дуусахад дахин ургана','Сэтгэл зүйн дэмжлэг авах — нэн чухал'],
    related:[{key:'ct',name:'Дүрс оношилгоо',img:'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=100&q=60'},{key:'ward',name:'Хэвтэн эмчлэх',img:'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=100&q=60'},{key:'surgery',name:'Мэс засал',img:'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=100&q=60'}]
  },
  ward:{
    name:'Хэвтэн эмчлэх',
    desc:'Өдрийн болон хэвтэх тасаг, 24 цагийн мэргэжилтний хяналт',
    img:'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=900&q=85',
    about:'Рехамед нэгдсэн эмнэлгийн хэвтэн эмчлэх тасаг нь тав тухтай, орчин үеийн тоног төхөөрөмжтэй өрөөнүүдтэй. 24 цагийн эмч, сувилагчийн хяналтын дор нарийн мэргэжлийн эмчилгээ хийгдэнэ.',
    steps:['Хэвтэн эмчлэх заалт авах — эмчийн удирдамжаар','Бүртгэл хийх — лавлах тасгаар дамжиж тасагт байрлана','Өдөр бүрийн үзлэг — эмч, сувилагч тогтмол хяна','Эмчилгээний явц — заалтын дагуу эм, процедур хийгдэнэ','Гарах зөвшөөрөл — эдгэрлийг баталгаажуулсны дараа'],
    warn:'Хэвтэн эмчлэх хугацаанд зөвшөөрөлгүйгээр тасгаас гарах, өөрсдийн эм уух нь эмчилгээний явцад сөргөөр нөлөөлнө.',
    tips:['Гэрийн эм, нэмэлт тэжээлийн жагсаалтаа авчирна','Эмчилгээний явцад асуулт гарвал сувилагчаас асуу','Зочлох цагийг мэдэж авна — тасаг бүрд өөр байна'],
    related:[{key:'surgery',name:'Мэс засал',img:'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=100&q=60'},{key:'rehab',name:'Сэргээн засах',img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&q=60'},{key:'chemo',name:'Хавдрын эмчилгээ',img:'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=100&q=60'}]
  }
};

function showService(el){
  closeMobileMenu();

  const key=el.getAttribute('data-key');
  const container=document.getElementById('svc-content');
  if(!container){ window.location.href='service.html?id='+key; return; }
  const s=svcData[key];
  if(!s) return;
  container.innerHTML=`
    <div class="page-hero">
      <div class="page-hero-orb"></div>
      <div class="breadcrumb" onclick="showPage('home')">Нүүр › <span>Үйлчилгээ</span> › ${s.name}</div>
      <h2>${s.name}</h2><p>${s.desc}</p>
    </div>
    <section class="sec">
      <button class="back-btn" onclick="showPage('home')"><i class="ti ti-arrow-left"></i>Буцах</button>
      <div class="svc-detail-grid">
        <div>
          <div class="svc-detail-hero">
            <img src="${s.img}" alt="${s.name}" loading="lazy">
            <div class="svc-detail-overlay"></div>
            <div class="svc-detail-content">
              <h3>${s.name}</h3>
              <p>${s.desc}</p>
            </div>
          </div>
          <div class="svc-info-block">
            <div class="svc-info-block-title"><i class="ti ti-info-circle"></i>Эмчилгээний тухай</div>
            <p style="font-size:13.5px;color:var(--text2);line-height:1.78;font-weight:300">${s.about}</p>
          </div>
          <div class="svc-info-block">
            <div class="svc-info-block-title"><i class="ti ti-list-check"></i>Эмчилгээний явц</div>
            <ul class="svc-step-list">
              ${s.steps.map((st,i)=>`<li class="svc-step"><div class="svc-step-num">${i+1}</div><div class="svc-step-text">${st}</div></li>`).join('')}
            </ul>
          </div>
          <div class="svc-warn">
            <div class="svc-warn-title"><i class="ti ti-alert-triangle"></i>Анхааруулга</div>
            <div class="svc-warn-text">${s.warn}</div>
          </div>
          <div class="svc-info-block">
            <div class="svc-info-block-title"><i class="ti ti-bulb"></i>Зөвлөмж ба санамж</div>
            <ul style="list-style:none;display:flex;flex-direction:column;gap:8px">
              ${s.tips.map(t=>`<li style="display:flex;align-items:flex-start;gap:9px;font-size:13px;color:var(--text2);font-weight:300;line-height:1.55"><i class="ti ti-star" style="color:var(--orange);font-size:14px;margin-top:2px;flex-shrink:0"></i>${t}</li>`).join('')}
            </ul>
          </div>
        </div>
        <div>
          <div class="svc-sidebar-card">
            <div class="svc-sidebar-title">Холбоо барих</div>
            <div class="info-row"><i class="ti ti-phone" style="color:var(--red)"></i><div><span class="info-row-label">Утас</span><span class="info-row-val">7575-0400</span></div></div>
            <div class="info-row"><i class="ti ti-clock" style="color:var(--red)"></i><div><span class="info-row-label">Ажиллах цаг</span><span class="info-row-val">Даваа–Баасан 08:30–17:00</span></div></div>
            <div class="info-row" style="border:none"><i class="ti ti-map-pin" style="color:var(--red)"></i><div><span class="info-row-label">Байршил</span><span class="info-row-val">БЗД, 7-р хороо</span></div></div>
          </div>
          <div class="svc-sidebar-card">
            <div class="svc-sidebar-title">Холбогдох үйлчилгээ</div>
            <div class="svc-related">
              ${s.related.map(r=>`<div class="svc-related-item" data-key="${r.key}" onclick="showService(this)">
                <div class="svc-related-img"><img src="${r.img}" alt="${r.name}" loading="lazy"></div>
                <div><div class="svc-related-name">${r.name}</div><div class="svc-related-desc">Дэлгэрэнгүй →</div></div>
              </div>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>`;
  closeDD(); window.scrollTo({top:0,behavior:'smooth'});
}


// ── NEWS DATA ──
const newsData={
  n1:{cat:'Шагнал, амжилт',title:'ДЭМБ-ын гадаад хөтөлбөрийн үнэлгээгээр 2018 онд дахин баталгаажлаа',date:'2024.11.05',views:'1,240',img:'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=85',
    lead:'Монголын анхны цогц лаборатори болох Рехамед нэгдсэн эмнэлэг Дэлхийн эрүүл мэндийн байгууллагын гадаад үнэлгээгээр 2018 онд дахин баталгаажсан түүхэн үйл явдал.',
    body:['Рехамед нэгдсэн эмнэлгийн лаборатори нь 2015 онд анх удаа ДЭМБ-ын чанарын стандартад нийцсэнээ баталгаажуулсан бөгөөд 2018 онд энэхүү баталгаажилтаа амжилттай хадгалж үлдсэн юм.','Энэхүү үнэлгээ нь лабораторийн шинжилгээний нарийвчлал, тоног төхөөрөмжийн чанар, ажилтнуудын мэргэжлийн ур чадварыг олон улсын түвшинд хүлээн зөвшөөрсний илрэл болсон.','<h3>Юу гэсэн үг вэ?</h3>','Энэхүү баталгаажилт нь манай эмнэлэгт хийгдэх лабораторийн шинжилгээний хариу нь олон улсын стандартад нийцсэн, найдвартай болохыг илтгэнэ. Үүний үр дүнд өвчтөн та илүү нарийвчилсан, итгэлтэй оношилгоо авах боломжтой болсон.'],
    tags:['ДЭМБ','Лаборатори','Чанарын баталгаа']},
  n2:{cat:'Мэдээлэл',title:'Чихрийн шижин өвчнөөс урьдчилан сэргийлэх арга зүй',date:'2025.11.16',views:'3,480',img:'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=85',
    lead:'Монгол улсад тархалт өндөртэй халдварт бус өвчний нэг болох чихрийн шижин өвчнөөс хэрхэн урьдчилан сэргийлэх вэ?',
    body:['Чихрийн шижин өвчин нь цусан дахь сахарын хэмжээ хэвийн хэмжээнээс байнга өндөр байх эмгэг юм. Хоёр дахь хэлбэрийн чихрийн шижин нь зөв амьдралын хэв маягаар ихээхэн хэмжээгээр сэргийлэх боломжтой.','<h3>Урьдчилан сэргийлэх гол арга замууд</h3>','Эрүүл хооллолт, тогтмол хөдөлгөөн, жин хяналт, тамхинаас татгалзах нь чихрийн шижингээс урьдчилан сэргийлэх үндсэн арга юм.'],
    tags:['Чихрийн шижин','Урьдчилан сэргийлэх','Эрүүл амьдрал'],
    list:['Сахар, чихэрлэг ундааны хэрэглээг хязгаарлах','Өдөрт дор хаяж 30 минут хөдөлгөөн хийх','Хүнсний ногоо, эслэг ихтэй хоол идэх','Жилд нэгэнтээ цусан дахь сахараа шалгуулах','Хэт жин, таргалалтаас сэргийлэх']},
  n3:{cat:'Подкаст',title:'Стресс яагаад үүсдэг вэ? Сэтгэцийн эмч Н. Оюу-Эрдэнэ тайлбарлав',date:'2024.08.09',views:'2,100',img:'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=1200&q=85',
    lead:'Ээлжит подкастын зочноор Рехамед нэгдсэн эмнэлгийн сэтгэцийн эмч Н. Оюу-Эрдэнэ оролцож, стрессийн талаар дэлгэрэнгүй ярилцлаа.',
    body:['Стресс нь хүний бие махбодын байгалийн хариу урвал боловч удаан хугацаагаар үргэлжилбэл эрүүл мэндэд ноцтой нөлөө үзүүлдэг.','<h3>Стрессийг хэрхэн удирдах вэ?</h3>','Тогтмол хөдөлгөөн, хангалттай нойр, амьсгалын дасгал, ойр дотны хүмүүстэйгээ харилцах нь стрессийг бууруулахад тусална. Шаардлагатай бол мэргэжлийн сэтгэл зүйчид хандах нь зүйтэй.'],
    tags:['Сэтгэл зүй','Стресс','Подкаст']},
  n4:{cat:'Эмчилгээ',title:'Хавдрын эмчилгээний цогц тусламж үйлчилгээ ба түүний үр дүн',date:'2024.07.20',views:'1,870',img:'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&q=85',
    lead:'Хавдрын хими эмчилгээний эмч З. Төгөлдөр, Сэргээн засахын эмч Н. Цэрэнлхам нар хавдрын цогц эмчилгээний талаар ярилцлаа.',
    body:['Хавдрын эмчилгээ нь зөвхөн хими эмчилгээгээр хязгаарлагдахгүй. Орчин үед олон мэргэжлийн багийн оролцоотой цогц арга барил үр дүнгээ өгч байна.','<h3>Цогц эмчилгээний давуу тал</h3>','Онколог, мэс засалч, сэргээн засахын эмч, сэтгэл зүйч, шим тэжээлийн эмч нарын хамтын ажиллагаа нь өвчтөний эдгэрэлтийн магадлалыг нэмэгдүүлдэг.'],
    tags:['Хавдар','Хими эмчилгээ','Цогц тусламж']},
  n5:{cat:'Зөвлөгөө',title:'Зүрхний өвчнөөс урьдчилан сэргийлэх 5 чухал зөвлөгөө',date:'2024.06.15',views:'4,200',img:'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?w=1200&q=85',
    lead:'Зүрх судасны өвчин нь Монголд нас баралтын тэргүүлэх шалтгаан. Гэвч ихэнхдээ урьдчилан сэргийлэх боломжтой.',
    body:['Зүрх судасны эрүүл мэндээ хамгаалах нь өдөр тутмын зуршлаас эхэлдэг. Доорх 5 зөвлөгөөг баримталснаар зүрхний өвчний эрсдэлийг ихээхэн бууруулна.'],
    tags:['Зүрх','Урьдчилан сэргийлэх','Эрүүл зүрх'],
    list:['Давсны хэрэглээг өдөрт 5 граммаас хэтрүүлэхгүй байх','Өдөрт 30 минут дунд зэргийн эрчимтэй хөдөлгөөн хийх','Тамхинаас бүрэн татгалзах','Стрессийг удирдаж, хангалттай амрах','Жилд нэгэнтээ зүрхний үзлэгт хамрагдах']},
  n6:{cat:'Сэргээн засах',title:'Нурууны өвдөлтийг эмийн бус аргаар эмчлэх боломж',date:'2024.05.10',views:'2,950',img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85',
    lead:'Гүний осцилляцийн эмчилгээ нь бүх төрлийн үрэвсэл, өвдөлт намдаахад өндөр үр дүн үзүүлж байна.',
    body:['Нурууны өвдөлт нь орчин үеийн хүний түгээмэл асуудлуудын нэг болоод байна. Эмийн бус сэргээн засах эмчилгээ нь олон тохиолдолд үр дүнтэй шийдэл болж чадна.','<h3>Эмчилгээний аргууд</h3>','Физик эмчилгээ, гүний осцилляци, гар эмчилгээ, тусгай дасгал хөдөлгөөн зэрэг нь нурууны өвдөлтийг эмийн оролцоогүйгээр намдаахад тусалдаг.'],
    tags:['Нуруу','Сэргээн засах','Физик эмчилгээ']}
};
const newsOrder=['n1','n2','n3','n4','n5','n6'];

function showNews(el){
  closeMobileMenu();

  const key=el.getAttribute('data-key');
  const container0=document.getElementById('newsdetail-content');
  if(!container0){ window.location.href='news-detail.html?id='+key; return; }
  const n=newsData[key];
  if(!n) return;
  const recent=newsOrder.filter(k=>k!==key).slice(0,4).map(k=>{
    const r=newsData[k];
    return `<div class="news-recent-item" data-key="${k}" onclick="showNews(this)">
      <div class="news-recent-img"><img src="${r.img}" alt="" loading="lazy"></div>
      <div><div class="news-recent-title">${r.title.length>52?r.title.slice(0,52)+'...':r.title}</div><div class="news-recent-date">${r.date}</div></div>
    </div>`;
  }).join('');
  const bodyHtml=(n.body||[]).map(p=>p.startsWith('<h3>')?p:`<p>${p}</p>`).join('');
  const listHtml=n.list?`<ul>${n.list.map(li=>`<li>${li}</li>`).join('')}</ul>`:'';
  const tagsHtml=(n.tags||[]).map(t=>`<span class="tag tag-b">${t}</span>`).join(' ');
  container0.innerHTML=`
    <div class="page-hero" style="padding-bottom:2rem">
      <div class="page-hero-orb"></div>
      <div class="breadcrumb" onclick="showPage('news')">Нүүр › <span>Мэдээлэл</span> › ${n.cat}</div>
    </div>
    <section class="sec" style="padding-top:1.5rem">
      <button class="back-btn" onclick="showPage('news')"><i class="ti ti-arrow-left"></i>Бүх мэдээ</button>
      <div class="news-detail-hero">
        <img src="${n.img}" alt="${n.title}" loading="lazy">
        <div class="news-detail-overlay"></div>
        <div class="news-detail-meta">
          <span class="news-detail-cat">${n.cat}</span>
          <h2>${n.title}</h2>
          <div class="news-detail-info">
            <span><i class="ti ti-calendar"></i>${n.date}</span>
            <span><i class="ti ti-eye"></i>${n.views} үзсэн</span>
          </div>
        </div>
      </div>
      <div class="news-detail-grid">
        <div>
          <div class="news-article">
            <p class="lead">${n.lead}</p>
            ${bodyHtml}
            ${listHtml}
            <div style="margin-top:1.5rem;display:flex;gap:6px;flex-wrap:wrap">${tagsHtml}</div>
          </div>
        </div>
        <div>
          <div class="news-side-card">
            <div class="news-side-title">Сүүлийн мэдээ</div>
            <div class="news-recent">${recent}</div>
          </div>
          <div class="news-side-card">
            <div class="news-side-title">Хуваалцах</div>
            <div class="news-share">
              <a href="#" title="Facebook"><i class="ti ti-brand-facebook"></i></a>
              <a href="#" title="Twitter"><i class="ti ti-brand-x"></i></a>
              <a href="#" title="Холбоос хуулах"><i class="ti ti-link"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  closeDD(); window.scrollTo({top:0,behavior:'smooth'});
}

function showNewsByKey(key){
  const fake={getAttribute:()=>key};
  showNews(fake);
}

function showServiceByKey(key){
  const fake={getAttribute:()=>key};
  showService(fake);
}


// ── HAMBURGER MENU (CSS-driven, class toggle only) ──
function toggleMenu(){
  var menu = document.getElementById('navMenu');
  var ham  = document.getElementById('hamburger');
  if(!menu) return;
  var isOpen = menu.classList.contains('open');
  menu.classList.toggle('open', !isOpen);
  ham && ham.classList.toggle('open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
  if(isOpen) closeDD();
}

function closeMobileMenu(){
  var menu = document.getElementById('navMenu');
  var ham  = document.getElementById('hamburger');
  if(menu) menu.classList.remove('open');
  if(ham)  ham.classList.remove('open');
  document.body.classList.remove('menu-open');
}

window.addEventListener('resize', function(){
  if(window.innerWidth > 768){ closeMobileMenu(); closeDD(); }
});

// Close mobile menu on outside click (dropdown clicks use stopPropagation so they're unaffected)
document.addEventListener('click', function(e){
  var menu = document.getElementById('navMenu');
  var ham  = document.getElementById('hamburger');
  if(!menu || !ham) return;
  if(menu.classList.contains('open') &&
     !menu.contains(e.target) &&
     !ham.contains(e.target)){
    closeMobileMenu();
  }
});

// Close mobile menu on Escape key
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape') closeMobileMenu();
});


// ── NEWS FILTER ──
function filterNews(cat, btn){
  // update active state on filter buttons & chips
  document.querySelectorAll('.news-filter-btn, .news-cat-chip').forEach(b=>{
    b.classList.toggle('active', b.textContent.trim() === (btn ? btn.textContent.trim() : ''));
  });
  const allKeys = ['n1','n2','n3','n4','n5','n6'];
  const nd = newsData;
  let filtered = cat === 'all' ? allKeys : allKeys.filter(k=>nd[k].cat===cat);
  if(!filtered.length) filtered = allKeys;

  // update featured
  const feat = document.getElementById('newsFeatured');
  if(feat){
    const fk = filtered[0];
    const fn = nd[fk];
    feat.setAttribute('data-key', fk);
    // ЗАСВАР: newsData img нь аль хэдийн ?w=...&q=... query-тэй тул
    // давхар "?" залгаж URL эвдэхгүйн тулд шууд ашиглана
    feat.querySelector('.news-featured-img img').src = fn.img;
    feat.querySelector('.news-featured-cat').textContent = fn.cat;
    feat.querySelector('.news-featured-title').textContent = fn.title;
    feat.querySelector('.news-featured-excerpt').textContent = fn.lead;
  }

  // update list
  const list = document.getElementById('newsListEl');
  if(list){
    const rest = filtered.slice(1);
    if(!rest.length){ list.innerHTML = ''; return; }
    list.innerHTML = rest.map(k=>{
      const n = nd[k];
      return `<div class="news-hcard" data-key="${k}" onclick="showNews(this)">
        <div class="news-hcard-img"><img src="${n.img}" alt="" loading="lazy"><div class="news-hcard-overlay"></div></div>
        <div class="news-hcard-body">
          <div>
            <div class="news-hcard-cat">${n.cat}</div>
            <div class="news-hcard-title">${n.title}</div>
          </div>
          <div class="news-hcard-meta"><span><i class="ti ti-calendar"></i>${n.date}</span><span><i class="ti ti-eye"></i>${n.views}</span></div>
        </div>
      </div>`;
    }).join('');
  }
}


// ── HOME HERO SLIDER ──
(function(){
  let hIdx = 0, hTimer, hProg;
  const DELAY = 5000;

  function hInit(){
    const slider = document.getElementById('homeSlider');
    if(!slider) return;
    const slides = slider.querySelectorAll('.home-slide');
    const dotsEl = document.getElementById('homeSliderDots');
    const prog   = document.getElementById('homeSliderProgress');
    if(!dotsEl) return;

    // Build dots
    dotsEl.innerHTML = '';
    slides.forEach((_,i)=>{
      const d = document.createElement('button');
      d.className = 'home-slider-dot' + (i===0?' active':'');
      d.onclick = ()=>{ hGo(i); };
      dotsEl.appendChild(d);
    });

    hStartProgress();
    hTimer = setInterval(()=>hMove(1), DELAY);
  }

  function hGo(n){
    const slider = document.getElementById('homeSlider');
    if(!slider) return;
    const slides = slider.querySelectorAll('.home-slide');
    const dots   = slider.querySelectorAll('.home-slider-dot');
    const counter= document.getElementById('homeSliderCounter');

    slides[hIdx].classList.remove('active');
    if(dots[hIdx]) dots[hIdx].classList.remove('active');
    hIdx = (n + slides.length) % slides.length;
    slides[hIdx].classList.add('active');
    if(dots[hIdx]) dots[hIdx].classList.add('active');
    if(counter) counter.innerHTML = '<span>0'+(hIdx+1)+'</span> / 0'+slides.length;

    clearInterval(hTimer);
    hStartProgress();
    hTimer = setInterval(()=>hMove(1), DELAY);
  }

  function hMove(dir){ hGo(hIdx + dir); }
  window.homeSlideMove = hMove;

  function hStartProgress(){
    const prog = document.getElementById('homeSliderProgress');
    if(!prog) return;
    prog.style.transition = 'none';
    prog.style.width = '0%';
    clearTimeout(hProg);
    hProg = setTimeout(()=>{
      prog.style.transition = 'width '+DELAY+'ms linear';
      prog.style.width = '100%';
    }, 30);
  }

  // Init after DOM
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', hInit);
  } else {
    hInit();
  }
})();


// ═══════════════════════════════════════════════════
// SCROLL REVEAL + PARALLAX ENGINE
// ═══════════════════════════════════════════════════
(function(){
  var revealed = new WeakSet();

  // ── Reveal observer ──
  var ro = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting && !revealed.has(e.target)){
        revealed.add(e.target);
        // 'revealed' class нэмэгдэхэд CSS transition автоматаар ажиллана
        e.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  // ── Stats counter ──
  var statsObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add('counted');
        animateCounter(e.target.querySelector('.stat-n'));
        statsObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  // Статистикийн тоог 0-с эхлэн өсгөж харуулна.
  // ЗАСВАР: "50,000+" мэт таслалтай тоог зөв форматлана
  // (өмнө нь "50000,+" гэж эвдэрч харуулдаг байсан)
  function animateCounter(el){
    if(!el) return;
    var text = el.textContent;
    var num  = parseInt(text.replace(/[^0-9]/g,''), 10);
    if(isNaN(num)) return;
    var hasComma = text.indexOf(',') > -1;               // мянгатын таслалтай эсэх
    var suffix   = (text.match(/[^\d,]+$/) || [''])[0]; // зөвхөн төгсгөлийн тэмдэг: +, % г.м
    var dur = 1400, step = 16;
    var inc = num / (dur / step);
    var cur = 0;
    var t = setInterval(function(){
      cur += inc;
      if(cur >= num){ cur = num; clearInterval(t); }
      var v = Math.floor(cur);
      el.textContent = (hasComma ? v.toLocaleString('en-US') : v) + suffix;
    }, step);
  }

  // ── Parallax on scroll (branch images) ──
  // Салбарын картын зурагт scroll-parallax эффект өгнө
  function applyParallax(){
    var imgs = document.querySelectorAll('.branch-img-wrap img');
    imgs.forEach(function(img){
      var card = img.closest('.branch-card');
      if(!card) return; // ЗАСВАР: карт олдохгүй бол алгасна (TypeError сэргийлэлт)
      var rect = card.getBoundingClientRect();
      var center = rect.top + rect.height/2;
      var vhCenter = window.innerHeight/2;
      var offset = (center - vhCenter) * 0.06;
      // clamp
      offset = Math.max(-14, Math.min(14, offset));
      img.style.transform = 'scale(1.12) translateY('+offset+'px)';
    });
  }

  // ── Section label / title reveal ──
  function initReveal(){
    // Branch cards
    document.querySelectorAll('.branch-card').forEach(function(c){
      c.classList.add('reveal-ready');
      ro.observe(c);
    });
    // Sec reveal elements
    document.querySelectorAll('.sec-reveal').forEach(function(el){
      ro.observe(el);
    });
    // Stats
    document.querySelectorAll('.stat').forEach(function(el){
      statsObserver.observe(el);
    });
  }

  // ЗАСВАР: хуучин SPA үеийн showPage override устгагдсан —
  // одоо хуудас бүр тусдаа URL тул навигаци хийхэд бүх зүйл шинээр ачаалагдана.

  // Scroll handler
  var ticking = false;
  window.addEventListener('scroll', function(){
    if(!ticking){
      requestAnimationFrame(function(){
        applyParallax();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive:true });

  // Init
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }
})();

function closeDD(){document.querySelectorAll('.nav-menu>li').forEach(l=>l.classList.remove('open'))}

function initNavDropdowns(){
  ['ddAjiltan','ddSalbar','ddUilchilgee'].forEach(id=>{
    const el=document.getElementById(id);
    if(!el) return;
    el.addEventListener('click',e=>{e.stopPropagation();const was=el.classList.contains('open');closeDD();if(!was)el.classList.add('open')});
  });
  document.addEventListener('click',closeDD);
}

// ─── ӨДӨР/ШӨНИЙН ГОРИМ: localStorage-д хадгална ───
function toggleTheme(){
  const html=document.documentElement;
  const isDark=html.getAttribute('data-theme')==='dark';
  html.setAttribute('data-theme',isDark?'light':'dark');
  const ic=document.getElementById('themeIcon');
  if(ic) ic.className=isDark?'ti ti-moon':'ti ti-sun';
  localStorage.setItem('rh-theme',isDark?'light':'dark');
}
function applySavedTheme(){
  const saved=localStorage.getItem('rh-theme');
  if(saved==='dark'){
    document.documentElement.setAttribute('data-theme','dark');
    const ic=document.getElementById('themeIcon');
    if(ic) ic.className='ti ti-sun';
  }
}

// ── LOAD SHARED NAV + FOOTER (partials.js-ээс, fetch шаардлагагүй) ──
// ─── NAV+FOOTER ОРУУЛАЛТ: partials.js-ийн HTML-ийг заагч div-үүдэд тавина ───
function loadPartials(){
  const navHolder = document.getElementById('site-nav');
  const footHolder = document.getElementById('site-footer');
  if(navHolder && window.NAV_HTML)  navHolder.innerHTML  = window.NAV_HTML;
  if(footHolder && window.FOOTER_HTML) footHolder.innerHTML = window.FOOTER_HTML;
  initNavDropdowns();
  applySavedTheme();
  highlightActiveNav();
  return Promise.resolve();
}

function highlightActiveNav(){
  let current = window.location.pathname.split('/').pop();
  if(!current) current = 'index.html';
  document.querySelectorAll('.nav-menu>li>a[data-page]').forEach(a=>{
    a.classList.toggle('active', a.getAttribute('data-page') === current);
  });
}

// ЗАСВАР: хуучин давхар IntersectionObserver устгагдсан —
// картуудыг scroll reveal engine (доорх IIFE) дангаараа удирдана.

// ── MULTI-PAGE QUERY PARAM BOOTSTRAP ──
(function(){
  // Хуудас ачаалагдахад URL-ийн query параметрээс (?id=..., ?type=...)
  // тохирох контентыг автоматаар render хийнэ.
  function boot(){
    var params = new URLSearchParams(window.location.search);
    // branch.html — салбарын дэлгэрэнгүй
    if(document.getElementById('branch-content')){
      showBranch(params.get('id') || 'gvals');
    }
    // service.html — эмчилгээний дэлгэрэнгүй
    if(document.getElementById('svc-content')){
      showServiceByKey(params.get('id') || 'rehab');
    }
    // staff.html — ажилтны жагсаалт (?type=management/surgery/equipment/all)
    if(document.getElementById('staff-grid')){
      showStaff(params.get('type') || 'management');
    }
    // news-detail.html — мэдээний дэлгэрэнгүй
    if(document.getElementById('newsdetail-content')){
      showNewsByKey(params.get('id') || 'n1');
    }
    // about.html — слайдшоу эхлүүлэх (ЗАСВАР: өмнө нь хэзээ ч дуудагдахгүй байсан)
    if(document.getElementById('aboutSlideshow')){
      initSlides();
    }
  }
  function bootAll(){
    loadPartials();
    boot();
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', bootAll);
  } else {
    bootAll();
  }
})();
