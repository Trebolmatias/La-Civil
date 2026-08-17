/* ===== la Civil — comportamiento extra (Opción B) =====
   WhatsApp flotante · modales login/registro · logo footer azul · hero carrusel */
(function () {
  function ready(fn){ if(document.readyState!=='loading'){fn();} else {document.addEventListener('DOMContentLoaded',fn);} }

  ready(function () {

    /* (6) Logo del footer en versión oscura (el blanco no se ve sobre fondo claro) */
    document.querySelectorAll('.single_footer > a img').forEach(function (img) {
      if (/logo-civil-lockup\.png/.test(img.getAttribute('src') || '')) {
        img.src = img.getAttribute('src').replace('logo-civil-lockup.png', 'logo-civil-lockup-dark.png');
      }
    });

    /* (7) Botón flotante de WhatsApp */
    if (!document.querySelector('.wa-float')) {
      var wa = document.createElement('a');
      wa.className = 'wa-float';
      wa.href = 'https://wa.me/541143452240';
      wa.target = '_blank'; wa.rel = 'noopener';
      wa.setAttribute('aria-label', 'WhatsApp'); wa.title = 'Escribinos por WhatsApp';
      wa.innerHTML = '<svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.1 1.6 5.9L4 29l8.3-1.6c1.7.9 3.6 1.4 5.7 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-4.9 1 1-4.8-.2-.4c-1-1.6-1.5-3.4-1.5-5.3C5 9.5 9.9 4.9 16 4.9S27 9.5 27 15 22.1 24.8 16 24.8zm5.4-6.9c-.3-.1-1.8-.9-2-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5s-.6-1.5-.9-2.1c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4z"/></svg>';
      document.body.appendChild(wa);
    }

    /* (4)(5) Modales de login y registro */
    var LOGO = 'assets/img/lacivil/logo-civil-lockup-dark.png';
    var modalsHTML =
      '<div class="lc-modal-ov" id="lcLogin" role="dialog" aria-modal="true" aria-labelledby="lcLoginT">' +
        '<div class="lc-modal">' +
          '<button class="lc-close" data-close aria-label="Cerrar">&times;</button>' +
          '<img class="lc-logo" src="' + LOGO + '" alt="la Civil">' +
          '<h3 id="lcLoginT">Ingresar</h3>' +
          '<p class="lc-sub">Accedé al área de socios de la Civil.</p>' +
          '<form data-demo>' +
            '<div class="lc-field"><label>Usuario o e-mail</label><input type="text" autocomplete="username" placeholder="tu e-mail"></div>' +
            '<div class="lc-field"><label>Contraseña</label><input type="password" autocomplete="current-password" placeholder="••••••••"></div>' +
            '<button type="submit" class="lc-submit">Ingresar</button>' +
          '</form>' +
          '<p class="lc-alt">¿No sos socio todavía? <a data-open="lcRegister">Asociate</a></p>' +
          '<p class="lc-note">Maqueta de demostración — el formulario aún no está conectado.</p>' +
        '</div>' +
      '</div>' +
      '<div class="lc-modal-ov" id="lcRegister" role="dialog" aria-modal="true" aria-labelledby="lcRegT">' +
        '<div class="lc-modal">' +
          '<button class="lc-close" data-close aria-label="Cerrar">&times;</button>' +
          '<img class="lc-logo" src="' + LOGO + '" alt="la Civil">' +
          '<h3 id="lcRegT">Asociate</h3>' +
          '<p class="lc-sub">Sumate a la Civil y accedé a todos los beneficios.</p>' +
          '<form data-demo>' +
            '<div class="lc-row2">' +
              '<div class="lc-field"><label>Nombre</label><input type="text" placeholder="Nombre"></div>' +
              '<div class="lc-field"><label>Apellido</label><input type="text" placeholder="Apellido"></div>' +
            '</div>' +
            '<div class="lc-field"><label>DNI</label><input type="text" inputmode="numeric" placeholder="Sin puntos"></div>' +
            '<div class="lc-field"><label>E-mail</label><input type="email" placeholder="tu@email.com"></div>' +
            '<div class="lc-field"><label>Teléfono</label><input type="tel" placeholder="+54 11 ..."></div>' +
            '<button type="submit" class="lc-submit">Enviar solicitud</button>' +
          '</form>' +
          '<p class="lc-alt">¿Ya tenés cuenta? <a data-open="lcLogin">Ingresar</a></p>' +
          '<p class="lc-note">Maqueta de demostración — el formulario aún no está conectado.</p>' +
        '</div>' +
      '</div>';
    document.body.insertAdjacentHTML('beforeend', modalsHTML);

    function openModal(id){ var m=document.getElementById(id); if(m){ closeAll(); m.classList.add('open'); document.body.style.overflow='hidden'; } }
    function closeAll(){ document.querySelectorAll('.lc-modal-ov.open').forEach(function(m){m.classList.remove('open');}); document.body.style.overflow=''; }

    // disparadores: "Ingresar" (.header-btn) -> login ; "Asociarme" del navbar -> registro
    document.querySelectorAll('.header-btn').forEach(function(b){
      b.addEventListener('click', function(e){ e.preventDefault(); openModal('lcLogin'); });
    });
    document.querySelectorAll('.site-navigation .btn_one').forEach(function(b){
      b.addEventListener('click', function(e){ e.preventDefault(); openModal('lcRegister'); });
    });

    // cierres y navegación entre modales
    document.addEventListener('click', function(e){
      if (e.target.closest('[data-close]')) { closeAll(); return; }
      var opener = e.target.closest('[data-open]');
      if (opener) { e.preventDefault(); openModal(opener.getAttribute('data-open')); return; }
      if (e.target.classList.contains('lc-modal-ov')) { closeAll(); }  // click en el fondo
    });
    document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeAll(); });
    document.querySelectorAll('.lc-modal form[data-demo]').forEach(function(f){
      f.addEventListener('submit', function(e){ e.preventDefault(); });
    });

    /* (1) Hero carrusel — solo si existe #heroSlider (index) */
    if (window.jQuery && jQuery('#heroSlider').length && jQuery.fn.owlCarousel) {
      jQuery('#heroSlider').owlCarousel({
        singleItem: true,
        autoPlay: 5500,
        stopOnHover: true,
        navigation: true,
        navigationText: ['&#8249;', '&#8250;'],
        pagination: true,
        slideSpeed: 600,
        transitionStyle: 'fade',
        mouseDrag: true,
        touchDrag: false   // permite el scroll vertical de la página en el celular
      });
    }
  });
})();
