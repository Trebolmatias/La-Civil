/* ===== Mapa interactivo de hoteles adheridos (Leaflet) — Opción B ===== */
(function () {
  var host = document.getElementById('leafmap');
  if (!host || !window.L || !window.HOTELES) return;
  var L = window.L, DATA = window.HOTELES;

  // foto por destino (para la tarjeta lateral) — rutas relativas a /opcion-b/
  var IMG = {
    'San Carlos de Bariloche': '../img/turismo/bariloche.png',
    'Salta': '../img/turismo/salta1.jpeg',
    'Mendoza': '../img/turismo/Mendoza.jpg',
    'Pto. Iguazú - Misiones': '../img/turismo/misiones.jpeg',
    'Mar del Plata': '../img/turismo/costa.jpg',
    'C.A.B.A.': '../img/turismo/caba.jpg',
    'Concordia': '../img/turismo/concordia.jpeg',
    'Catamarca': '../img/turismo/catamarca.jpg',
    'La Plata': '../img/turismo/la_plata.jpg',
    'Neuquen': '../img/turismo/neuquen.png',
    'Paraná': '../img/turismo/parana.jpg',
    'Posadas': '../img/turismo/posadas.jpg',
    'Victoria': '../img/turismo/victoria.jpg',
    'Rosario': '../img/turismo/Rosario.jpg',
    'Villa Carlos Paz': '../img/turismo/Villa_Carlos_Paz.jpg',
    'Córdoba': '../img/turismo/Cordoba.jpg',
    'Villa María': '../img/turismo/Villa_María.jpg',
    'Tucuman': '../img/turismo/Tucuman.jpg',
    'Termas de Rio Hondo': '../img/turismo/Termas_de_Rio_Hondo.jpg',
    'Santa Rosa': '../img/turismo/santa_rosa.jpg'
  };
  function plural(n){ return n + ' hotel' + (n > 1 ? 'es' : ''); }

  // ---- map ----
  var map = L.map(host, { scrollWheelZoom: false, zoomControl: true }).setView([-38, -63], 4);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    subdomains: 'abc', maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
  }).addTo(map);
  map.on('click', function(){ map.scrollWheelZoom.enable(); });   // habilita zoom con rueda al interactuar

  var markers = [], latlngs = [];
  DATA.forEach(function (loc, idx) {
    var n = loc.hoteles.length;
    var icon = L.divIcon({
      className: '', html: '<div class="mk-pin" data-idx="' + idx + '">' + n + '</div>',
      iconSize: [34, 34], iconAnchor: [17, 17], popupAnchor: [0, -16]
    });
    var m = L.marker([loc.lat, loc.lng], { icon: icon }).addTo(map);
    var hotelsHtml = loc.hoteles.map(function (h) { return '<li>' + h + '</li>'; }).join('');
    m.bindPopup(
      '<div class="pop"><div class="pop-title">' + loc.id + '</div>' +
      '<div class="pop-sub">' + plural(n) + '</div><ul>' + hotelsHtml + '</ul>' +
      '<a class="pop-cta" href="contacto.html">Reservar con tu carnet →</a></div>',
      { maxWidth: 260 }
    );
    m.bindTooltip(loc.id + ' · ' + plural(n), { direction: 'top', offset: [0, -14] });
    m.on('click', function () { select(idx, false); });
    markers.push(m); latlngs.push([loc.lat, loc.lng]);
  });
  map.fitBounds(latlngs, { padding: [40, 40] });

  // ---- side list ----
  var list = document.getElementById('hlist');
  var pin = '<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.3 7-11a7 7 0 0 0-14 0c0 4.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>';
  var chev = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg>';
  function thumb(l) {
    var src = IMG[l.id];
    var img = src ? '<img src="' + src + '" alt="" loading="lazy" onerror="this.remove()">' : '';
    return '<span class="hc-thumb">' + img + '<span class="hc-thumb-ic">' + pin + '</span></span>';
  }
  var order = DATA.map(function (l, i) { return { l: l, i: i }; })
    .sort(function (a, b) { return b.l.hoteles.length - a.l.hoteles.length || a.l.id.localeCompare(b.l.id); });
  list.innerHTML = order.map(function (o) {
    var l = o.l, i = o.i;
    return '<div class="hcard" data-idx="' + i + '">' +
      '<div class="hc-head">' + thumb(l) +
      '<span class="hc-name">' + l.id + '</span>' +
      '<span class="hc-count">' + plural(l.hoteles.length) + '</span>' +
      '<span class="hc-chev">' + chev + '</span></div>' +
      '<div class="hc-body"><ul>' + l.hoteles.map(function (h) { return '<li>' + h + '</li>'; }).join('') + '</ul></div></div>';
  }).join('');
  var cards = [].slice.call(list.querySelectorAll('.hcard'));
  var current = -1;

  function markerEl(idx){ var m=markers[idx]; return m && m.getElement() ? m.getElement().querySelector('.mk-pin') : null; }
  function select(idx, fromCard) {
    current = idx;
    markers.forEach(function (m, i) { var el = markerEl(i); if (el) el.classList.toggle('sel', i === idx); });
    cards.forEach(function (c) { c.classList.toggle('active', +c.dataset.idx === idx); });
    if (idx > -1) {
      var loc = DATA[idx];
      map.flyTo([loc.lat, loc.lng], 6, { duration: .6 });
      markers[idx].openPopup();
      var card = list.querySelector('.hcard[data-idx="' + idx + '"]');
      if (fromCard === false && card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
  cards.forEach(function (c) {
    c.querySelector('.hc-head').addEventListener('click', function () { select(+c.dataset.idx, true); });
  });

  // ---- search ----
  var q = document.getElementById('hsearch-input');
  var cnt = document.getElementById('hcount');
  function apply() {
    var t = (q.value || '').toLowerCase().trim(), shown = 0;
    cards.forEach(function (c) {
      var idx = +c.dataset.idx, loc = DATA[idx];
      var hay = (loc.id + ' ' + loc.hoteles.join(' ')).toLowerCase();
      var ok = !t || hay.indexOf(t) > -1;
      c.style.display = ok ? '' : 'none';
      if (map.hasLayer(markers[idx]) !== ok) { ok ? markers[idx].addTo(map) : map.removeLayer(markers[idx]); }
      if (ok) shown++;
    });
    cnt.textContent = shown + ' destino' + (shown !== 1 ? 's' : '');
  }
  if (q) q.addEventListener('input', apply);

  // totals
  var total = DATA.reduce(function (s, l) { return s + l.hoteles.length; }, 0);
  var ht = document.getElementById('htotal'); if (ht) ht.textContent = total;
  if (cnt) cnt.textContent = DATA.length + ' destinos';

  setTimeout(function(){ map.invalidateSize(); }, 200);
})();
