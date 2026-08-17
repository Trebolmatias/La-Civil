/* ===== Maqueta Funcionarios BNA — lógica compartida ===== */
(function () {
  // ---------- icon sprite ----------
  var SPRITE = '<svg class="svgdefs" aria-hidden="true">' +
    '<symbol id="ic-edu" viewBox="0 0 24 24"><path d="M2 8.5 12 4l10 4.5-10 4.5z"/><path d="M6 10.8V15c0 1.4 2.7 2.6 6 2.6s6-1.2 6-2.6v-4.2"/><path d="M22 8.5v5.5"/></symbol>' +
    '<symbol id="ic-plane" viewBox="0 0 24 24"><path d="M4 7.5V5.2a1.2 1.2 0 0 1 2-.9l3 2.6 4.5-1.5a2 2 0 0 1 2.4 2.7L14 12l6 5.3a1 1 0 0 1-.9 1.7l-3.4-.8-2 2.6a.9.9 0 0 1-1.6-.5V17l-5 1.3-1 2a.7.7 0 0 1-1.3-.1L3 17.5"/></symbol>' +
    '<symbol id="ic-legal" viewBox="0 0 24 24"><path d="M12 3v18M7 21h10M5 7h14M9 4.5 5 7M15 4.5 19 7"/><path d="M5 7 2.6 12.5a2.8 2.8 0 0 0 4.8 0z"/><path d="M19 7l-2.4 5.5a2.8 2.8 0 0 0 4.8 0z"/></symbol>' +
    '<symbol id="ic-social" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3.5 19.5c0-3 2.7-5 5.5-5s5.5 2 5.5 5"/><path d="M16.5 6.2a2.8 2.8 0 0 1 0 5.4"/><path d="M18 14.7c1.9.6 3 2.3 3 4.8"/></symbol>' +
    '<symbol id="ic-building" viewBox="0 0 24 24"><path d="M3 21V9l7-4v16M10 9l8 3v9M3 21h18"/><path d="M13.5 13.5h1M13.5 16.5h1M6 12h1M6 15h1M6 18h1"/></symbol>' +
    '<symbol id="ic-home" viewBox="0 0 24 24"><path d="M3.5 11 12 4l8.5 7M5.5 9.8V20h13V9.8M10 20v-5.5h4V20"/></symbol>' +
    '<symbol id="ic-gift" viewBox="0 0 24 24"><path d="M4 9.5h16v3.5H4z"/><path d="M5.5 13v7.5h13V13M12 9.5v11"/><path d="M12 9.5S9.5 9.5 8 8.4C6.8 7.5 7 5.5 8.5 5.5S12 8 12 9.5zM12 9.5s2.5 0 4-1.1C17.2 7.5 17 5.5 15.5 5.5S12 8 12 9.5z"/></symbol>' +
    '<symbol id="ic-spark" viewBox="0 0 24 24"><path d="M12 3c.6 4.5 2.5 6.4 7 7-4.5.6-6.4 2.5-7 7-.6-4.5-2.5-6.4-7-7 4.5-.6 6.4-2.5 7-7z"/></symbol>' +
    '<symbol id="ic-bed" viewBox="0 0 24 24"><path d="M3 6v13M3 13h18v6M21 19v-5a3 3 0 0 0-3-3h-6v3.5"/><circle cx="7" cy="10" r="1.6"/></symbol>' +
    '<symbol id="ic-bank" viewBox="0 0 24 24"><path d="M3 9.5 12 4l9 5.5M4.5 9.5V19M9 9.5V19M15 9.5V19M19.5 9.5V19M3 21h18"/></symbol>' +
    '<symbol id="ic-mega" viewBox="0 0 24 24"><path d="M3 10v4a1 1 0 0 0 1 1h3l7 4V5l-7 4H4a1 1 0 0 0-1 1z"/><path d="M17.5 9a4 4 0 0 1 0 6"/></symbol>' +
    '<symbol id="ic-tag" viewBox="0 0 24 24"><path d="M3 12.5V4h8.5L21 13.5 13.5 21 3 12.5z"/><circle cx="7.5" cy="7.5" r="1.3"/></symbol>' +
    '<symbol id="ic-leaf" viewBox="0 0 24 24"><path d="M4 20c0-8 6-14 16-14 0 10-6 15-14 15M4 20c2-5 5-8 10-10"/></symbol>' +
    '<symbol id="ic-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></symbol>' +
    '<symbol id="ic-arrow" viewBox="0 0 24 24"><path d="M4 12h15M13 6l6 6-6 6"/></symbol>' +
    '<symbol id="ic-cal" viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M3.5 9.5h17M8 3.5v3M16 3.5v3"/></symbol>' +
    '<symbol id="ic-menu" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></symbol>' +
    '<symbol id="ic-close" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></symbol>' +
    '</svg>';
  document.body.insertAdjacentHTML('afterbegin', SPRITE);

  // ---------- categories data ----------
  var CATS = {
    institucional: { sc: 'inst', name: 'Institucional', icon: 'ic-bank', title: 'Novedades de la Asociación', desc: 'Comunicaciones, actividades y vida institucional de la Asociación.' },
    beneficios:    { sc: 'ben',  name: 'Beneficios',    icon: 'ic-tag',  title: 'Nuevos convenios y descuentos', desc: 'Todo lo nuevo que suma valor a tu membresía: convenios, descuentos y coberturas.' },
    turismo:       { sc: 'tur',  name: 'Turismo',       icon: 'ic-plane',title: 'Destinos y hoteles para disfrutar', desc: 'Hoteles adheridos, promociones y propuestas para vos y tu familia.' },
    oportunidades: { sc: 'opo',  name: 'Oportunidades', icon: 'ic-spark',title: 'Becas, cursos y sorteos', desc: 'Becas, capacitaciones y sorteos exclusivos para socios.' },
    comunicados:   { sc: 'com',  name: 'Comunicados',   icon: 'ic-mega', title: 'Información oficial a socios', desc: 'Avisos y comunicaciones formales de la Asociación.' }
  };
  var ORDER = ['institucional', 'beneficios', 'turismo', 'oportunidades', 'comunicados'];

  // sample content (title, date dd/mm/yyyy, img filename, excerpt)
  var POSTS = {
    institucional: [
      ['Convocatoria a Asamblea General Ordinaria 2026', '28/07/2026', 'convocatoria.jpg', 'Se convoca a los señores socios a la Asamblea General Ordinaria a realizarse en la sede central.'],
      ['Reunión con autoridades del Banco de la Nación', '15/07/2026', 'institucional-2.jpg', 'La Comisión Directiva mantuvo un encuentro por temas de interés para el personal.'],
      ['Renovación de la Comisión Directiva', '02/07/2026', '', 'Conocé a los integrantes que conducirán la Asociación en el próximo período.'],
      ['Nueva sede de atención en el interior', '20/06/2026', 'institucional-4.jpg', 'Ampliamos la presencia federal para estar más cerca de cada socio.'],
      ['Balance del ejercicio 2025', '05/06/2026', 'institucional-5.jpg', 'Presentamos los resultados y la gestión del último período.'],
      ['40 años acompañando a la familia del Banco', '20/05/2026', 'institucional-6.jpg', 'Un repaso por la historia de la Asociación desde 1986.']
    ],
    beneficios: [
      ['Nuevo convenio con farmacias en todo el país', '24/07/2026', 'beneficios-farmacias.png', 'Descuentos en medicamentos y perfumería para socios y familiares directos.'],
      ['Ampliamos los descuentos en TECLAB', '18/07/2026', 'beneficios-2.jpg', 'Más beneficios en tecnicaturas online para vos y tu familia.'],
      ['Nueva cobertura para familiares directos', '10/07/2026', 'beneficios-3.jpg', 'Sumamos prestaciones pensadas para acompañar a los tuyos.'],
      ['Descuentos en ópticas adheridas', '28/06/2026', 'beneficios-4.jpg', 'Beneficios en anteojos y lentes de contacto presentando el carnet.'],
      ['Convenio con gimnasios y clubes', '14/06/2026', 'beneficios-5.jpg', 'Cuidá tu bienestar con tarifas preferenciales.'],
      ['Beneficios en librerías y tecnología', '01/06/2026', 'beneficios-6.jpg', 'Descuentos para el inicio de clases y equipamiento.']
    ],
    turismo: [
      ['Nuevos hoteles adheridos en Bariloche', '22/07/2026', 'turismo/bariloche.png', 'Sumamos alojamientos con descuento en uno de los destinos más elegidos.'],
      ['Alojamiento en Salta y el norte', '08/06/2026', 'turismo/salta1.jpeg', 'Nuevos convenios en el noroeste argentino.'],
      ['Descuentos en hoteles de Cataratas del Iguazú', '04/07/2026', 'turismo/misiones.jpeg', 'Conocé una de las maravillas naturales con beneficios para socios.'],
      ['Escapadas a Mendoza y la ruta del vino', '22/06/2026', 'turismo/Mendoza.jpg', 'Propuestas para disfrutar del oeste argentino.'],
      ['Promo temporada baja en la Costa Atlántica', '12/07/2026', 'turismo/costa.jpg', 'Aprovechá tarifas especiales fuera de temporada.'],
      ['Departamento de socios en CABA', '25/05/2026', 'turismo/caba.jpg', 'Estadías temporarias en la Ciudad de Buenos Aires.']
    ],
    oportunidades: [
      ['Becas a la Excelencia 2026: inscripción abierta', '20/07/2026', 'oportunidades-1.jpg', 'Una oportunidad educativa para los hijos de nuestros socios. Aplicá online.'],
      ['Curso de idiomas con 40% off para socios', '14/07/2026', 'oportunidades-idiomas.png', 'Formación en idiomas con condiciones preferenciales.'],
      ['Sorteo del mes: una escapada para dos', '06/07/2026', 'oportunidades-3.jpg', 'Participá y ganá una experiencia para disfrutar en pareja.'],
      ['Convenios universitarios: nueva convocatoria', '24/06/2026', 'convenios-universitarios.png', 'Descuentos en carreras de grado y tecnicaturas.'],
      ['Taller gratuito de finanzas personales', '10/06/2026', 'oportunidades-5.jpg', 'Herramientas para organizar tu economía familiar.'],
      ['Sorteo de órdenes de compra', '28/05/2026', 'oportunidades-6.jpg', 'Otro beneficio exclusivo para socios al día.']
    ],
    comunicados: [
      ['Actualización de la cuota societaria — vigencia agosto 2026', '01/08/2026', '', ''],
      ['Nuevo horario de atención en la sede central', '19/07/2026', '', ''],
      ['Aviso de seguridad: nunca solicitamos claves ni datos personales', '08/07/2026', '', ''],
      ['Cronograma de pagos de subsidios', '24/06/2026', '', ''],
      ['Modificación en el reglamento de bonos', '10/06/2026', '', ''],
      ['Feriado: la sede permanecerá cerrada', '28/05/2026', '', '']
    ]
  };

  function icon(id, cls) { return '<svg class="ic ' + (cls || '') + '"><use href="#' + id + '"/></svg>'; }
  function imgTag(file, alt) {
    if (!file) return '';
    return '<img src="img/' + file + '" alt="' + (alt || '') + '" loading="lazy" onerror="this.remove()">';
  }

  // ---------- shared behaviors ----------
  var root = document.documentElement;
  var themeBtn = document.getElementById('themeBtn');
  if (themeBtn) themeBtn.addEventListener('click', function () {
    var c = root.getAttribute('data-theme');
    if (!c) c = matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
    root.setAttribute('data-theme', c === 'dark' ? 'light' : 'dark');
  });
  var nav = document.getElementById('nav');
  if (nav) addEventListener('scroll', function () { nav.classList.toggle('scrolled', scrollY > 10); }, { passive: true });

  // mobile menu toggle
  var menuBtn = document.getElementById('menuBtn');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () { nav.classList.toggle('nav-open'); });
    nav.querySelectorAll('.navlinks a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('nav-open'); });
    });
  }

  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: .12 });
  function observeReveals() { document.querySelectorAll('.reveal:not(.in)').forEach(function (el) { io.observe(el); }); }

  // fallback for static <img> that don't load
  document.querySelectorAll('img[data-fallback]').forEach(function (im) { im.addEventListener('error', function () { im.remove(); }); });

  // ---------- carousel (home) ----------
  var slides = document.getElementById('slides');
  if (slides) {
    var n = slides.children.length, i = 0, timer, dots = document.getElementById('dots');
    for (var d = 0; d < n; d++) { var b = document.createElement('button'); b.dataset.i = d; dots.appendChild(b); }
    function go(x) { i = (x + n) % n; slides.style.transform = 'translateX(-' + (i * 100) + '%)'; Array.prototype.forEach.call(dots.children, function (el, k) { el.classList.toggle('on', k === i); }); }
    function nextS() { go(i + 1); }
    function reset() { clearInterval(timer); if (!matchMedia('(prefers-reduced-motion:reduce)').matches) timer = setInterval(nextS, 6000); }
    document.getElementById('next').onclick = function () { nextS(); reset(); };
    document.getElementById('prev').onclick = function () { go(i - 1); reset(); };
    dots.onclick = function (e) { if (e.target.dataset.i) { go(+e.target.dataset.i); reset(); } };
    var car = document.getElementById('carousel');
    car.addEventListener('mouseenter', function () { clearInterval(timer); });
    car.addEventListener('mouseleave', reset);
    go(0); reset();
  }

  // ---------- catalog filter (home) ----------
  var filters = document.getElementById('filters');
  if (filters) {
    var cards = document.querySelectorAll('#catGrid .bcard');
    filters.addEventListener('click', function (e) {
      var b = e.target.closest('.filter'); if (!b) return;
      filters.querySelectorAll('.filter').forEach(function (f) { f.classList.remove('active'); });
      b.classList.add('active');
      var f = b.dataset.f;
      cards.forEach(function (c) { c.style.display = (f === 'all' || c.dataset.c === f) ? '' : 'none'; });
    });
  }

  // ---------- category page render ----------
  var catRoot = document.getElementById('catpage');
  if (catRoot) {
    var slug = document.body.dataset.cat || new URLSearchParams(location.search).get('cat');
    if (!CATS[slug]) slug = 'institucional';
    var C = CATS[slug], posts = POSTS[slug];
    document.body.classList.add('t-' + C.sc);
    document.title = C.name + ' — la Civil';

    // subhero
    document.getElementById('sh-crumb').innerHTML = '<a href="index.html">Inicio</a> › <span>' + C.name + '</span>';
    document.getElementById('sh-chip').innerHTML = icon(C.icon) + ' ' + C.name;
    document.getElementById('sh-title').textContent = C.title;
    document.getElementById('sh-desc').textContent = C.desc;

    var main = document.getElementById('cat-main');
    if (slug === 'comunicados') {
      // list format (formal)
      var html = '<div class="com reveal">';
      posts.forEach(function (p) {
        html += '<a href="#"><span class="d">' + p[1] + '</span><span class="t">' + p[0] + '</span><span class="chev">' + icon('ic-arrow', 'ic-sm') + '</span></a>';
      });
      html += '</div>';
      main.innerHTML = html;
    } else {
      var f = posts[0];
      var featured = '<article class="feat-post reveal">' +
        '<div class="ph">' + icon(C.icon, 'wm') + imgTag(f[2], f[0]) + '</div>' +
        '<div class="fp-body"><span class="tag">' + C.name + '</span>' +
        '<h2>' + f[0] + '</h2><p>' + f[3] + '</p>' +
        '<div class="date">' + icon('ic-cal', 'ic-sm') + ' ' + f[1] + '</div>' +
        '<a href="#" class="btn btn-brass btn-sm">Leer más</a></div></article>';
      var grid = '<div class="news-grid">';
      posts.slice(1).forEach(function (p) {
        grid += '<article class="ncard reveal"><div class="ph">' + icon(C.icon, 'wm') + imgTag(p[2], p[0]) + '</div>' +
          '<div class="body"><span class="tag">' + C.name + '</span><h3>' + p[0] + '</h3>' +
          '<p class="excerpt">' + p[3] + '</p>' +
          '<div class="date">' + icon('ic-cal', 'ic-sm') + ' ' + p[1] + '</div></div></article>';
      });
      grid += '</div>';
      var pag = '<div class="pagination"><a href="#" class="on">1</a><a href="#">2</a><a href="#">3</a><a href="#">' + '›' + '</a></div>';
      main.innerHTML = featured + grid + pag;
    }

    // sidebar categories
    var sc = document.getElementById('side-cats');
    if (sc) {
      var colorVar = { inst: '--c-inst', ben: '--c-ben', tur: '--c-tur', opo: '--c-opo', com: '--c-com' };
      sc.innerHTML = ORDER.map(function (s) {
        var cc = CATS[s];
        return '<a href="' + s + '.html"' + (s === slug ? ' class="current"' : '') +
          '><span class="sdot" style="background:var(' + colorVar[cc.sc] + ')"></span>' + cc.name + '</a>';
      }).join('');
    }
    // nav highlight
    var navcur = document.querySelector('.navlinks a[data-cat="' + slug + '"]');
    if (navcur) navcur.classList.add('current');
  }

  // ---------- NOTICIAS hub (todas las categorías) ----------
  var newsRoot = document.getElementById('noticiaspage');
  if (newsRoot) {
    var all = [];
    ORDER.forEach(function (slug) {
      POSTS[slug].forEach(function (p) {
        all.push({ slug: slug, cat: CATS[slug], title: p[0], date: p[1], img: p[2], excerpt: p[3] });
      });
    });
    function ts(d) { var m = d.split('/'); return new Date(+m[2], +m[1] - 1, +m[0]).getTime(); }
    all.sort(function (a, b) { return ts(b.date) - ts(a.date); });
    function tagStyle(sc) { return ' style="background:var(--c-' + sc + '-bg);color:var(--c-' + sc + ')"'; }

    var feat = null;
    for (var k = 0; k < all.length; k++) { if (all[k].img) { feat = all[k]; break; } }
    if (!feat) feat = all[0];

    var featHtml = '<article class="feat-post reveal">' +
      '<div class="ph">' + icon(feat.cat.icon, 'wm') + imgTag(feat.img, feat.title) + '</div>' +
      '<div class="fp-body"><span class="tag"' + tagStyle(feat.cat.sc) + '>' + feat.cat.name + '</span>' +
      '<h2>' + feat.title + '</h2><p>' + feat.excerpt + '</p>' +
      '<div class="date">' + icon('ic-cal', 'ic-sm') + ' ' + feat.date + '</div>' +
      '<a href="#" class="btn btn-brass btn-sm">Leer más</a></div></article>';

    var grid = '<div class="news-grid">';
    all.forEach(function (x) {
      if (x === feat) return;
      grid += '<article class="ncard reveal" data-c="' + x.slug + '"><div class="ph">' + icon(x.cat.icon, 'wm') + imgTag(x.img, x.title) + '</div>' +
        '<div class="body"><span class="tag"' + tagStyle(x.cat.sc) + '>' + x.cat.name + '</span><h3>' + x.title + '</h3>' +
        '<p class="excerpt">' + (x.excerpt || '') + '</p>' +
        '<div class="date">' + icon('ic-cal', 'ic-sm') + ' ' + x.date + '</div></div></article>';
    });
    grid += '</div>';
    newsRoot.innerHTML = featHtml + grid;

    var nf = document.getElementById('nfilters');
    if (nf) {
      nf.addEventListener('click', function (e) {
        var b = e.target.closest('.filter'); if (!b) return;
        nf.querySelectorAll('.filter').forEach(function (f) { f.classList.remove('active'); });
        b.classList.add('active');
        var f = b.dataset.f;
        newsRoot.querySelectorAll('.news-grid .ncard').forEach(function (c) {
          c.style.display = (f === 'all' || c.dataset.c === f) ? '' : 'none';
        });
      });
    }
  }

  observeReveals();
})();
