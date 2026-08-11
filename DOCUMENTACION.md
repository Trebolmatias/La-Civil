# la Civil — Documentación del proyecto web

> Asociación Civil del Personal Jerárquico, Profesional y Técnico del Banco de la Nación Argentina.
> Última actualización: **2026-08-10** · Cliente: **la Civil** (presidenta: Laura Elena Rizzo).

---

## 1. Contexto

Matías (freelance) desarrolla la nueva web de **la Civil**. Lo que pidió la presidenta y define el valor del proyecto:

1. Web **más llamativa** (está aburrida de la actual).
2. **Noticias con más protagonismo visual**.
3. Que **alguien genere noticias todas las semanas** → **servicio de contenido recurrente** (abono mensual). Es el gran diferencial y el ingreso recurrente de Matías.

Datos de la asociación: fundada el **9 de junio de 1986** · Bartolomé Mitre 311, 3º, CABA · socios@funcionarios-bna.com.ar · +54 11 4345-2240 / 41.

---

## 2. Las dos opciones de diseño (para la reunión)

Se preparan **2 propuestas** para que la presidenta elija dirección. Ambas se sirven desde el **mismo servidor local**.

### Cómo correrlas
```bash
cd "C:\Matias\La Civil\maqueta"
python serve.py
```
(o doble clic en `maqueta\iniciar_servidor.bat`). El servidor **se cae al cerrar la sesión** → hay que relevantarlo. No usa caché, así que **F5 alcanza** (Ctrl+F5 para forzar).

| Opción | Qué es | URL local |
|---|---|---|
| **A** — Institucional | Maqueta propia, sobria (navy). | http://localhost:8000/index.html |
| **B** — Moderna/llamativa | Template **eduleb** adaptado a la Civil, colores vibrantes. | http://localhost:8000/opcion-b/index.html |

> La presidenta pidió **colores llamativos**, por eso la Opción B **conserva la paleta vibrante original** del template (violeta + coral). Es la opción más alineada a su pedido.

---

## 3. Opción B en detalle (template eduleb → la Civil)

- **Origen**: `Templates/eduleb/eduleb` (Bootstrap + jQuery + Owl Carousel). Copiado a `maqueta/opcion-b/` (autocontenido; usa CDN de fuentes y Font Awesome → **necesita internet**).
- **Páginas** (navbar y footer conectados entre sí):
  - `index.html` (home), `institucional.html`, `beneficios.html`, `turismo.html`, `capacitacion.html`, `noticias.html`, `contacto.html`.
- **Contenido real cargado**: hero, contadores (1986 / 4129 afiliados / 44 hoteles / 20 destinos), 4 pilares, Quiénes somos, categorías de beneficios, grilla de servicios, 8 destinos de turismo, bloque "Novedades cada semana", testimonios de socios *(genéricos, placeholder)*, últimas noticias, y footer con contacto real.
- **Imágenes**: en `maqueta/opcion-b/assets/img/lacivil/`.

### Ajustes aplicados hoy sobre la Opción B
- **Hero**: reconstruido con columnas Bootstrap centradas (antes la foto se montaba sobre el título); se sacó el buscador y el badge "Desde 1986".
- **Contadores**: 1986 Año de fundación · 4129 Afiliados · 44 Hoteles adheridos · 20 Destinos turísticos, con **íconos Font Awesome** (calendario, personas, hotel, mapa).
- **Pilares**: los números 01–04 se cambiaron por **íconos** (regalo, hotel, birrete, manos con corazón).
- **Cards de igual altura** en todas las páginas (flexbox) — antes la card de "idiomas" sobresalía.
- **Badge "cada semana"**: movido al margen inferior derecho para no tapar la imagen.
- **Preloader**: se reemplazó la "bicicleta" del template por el **isotipo real de la Civil girando**.
- **Logos**: ver sección 4.

### Assets de logo (sección 4)
El logo oficial (`maqueta/img/logocivil.png`) es **blanco, apaisado 1475×300**, con un descriptor de 4 líneas que se apelmaza al achicarse. Por eso se recortó:

| Archivo | Qué es | Dónde se usa |
|---|---|---|
| `logo-civil-lockup-dark.png` | Ícono + "la Civil" (navy), recortado | Navbar (fondo claro) — Opción A y B |
| `logo-civil-lockup.png` | Ícono + "la Civil" (blanco), recortado | Footer (fondo oscuro) |
| `logo-civil-mark.png` | Solo el isotipo (blanco) | Preloader que gira |
| `logo-civil-dark.png` / `logo-civil.png` | Logo oficial completo (navy / blanco) | Respaldo |

> **Opción A** también usa el logo oficial (`logo-civil-lockup-dark.png`). Ojo: el navy no se ve en dark-mode de la Opción A (para la demo en modo claro está OK).

---

## 4. Decisión de tecnología: **Django + Wagtail**

Elegido para el desarrollo real (Matías ya trabajó con este stack).

**Por qué encaja:**
- **Autenticación de fábrica** → login de socios y "solo registrados comentan" es trivial.
- **El admin / Wagtail ES el CMS** → resuelve el requisito clave (que la asociación cargue noticias sola) **sin comprar ni integrar un CMS aparte**. Wagtail da un editor lindo para gente no técnica.
- **Seguro por defecto** (contraseñas hasheadas, CSRF/XSS) → importante para el manejo de datos de socios.
- El **HTML/CSS ya hecho se reutiliza** como templates de Django.

**A tener en cuenta:** necesita hosting con **Python + PostgreSQL** y un deploy más elaborado que un sitio estático o WordPress.

---

## 5. Idea de comunidad + Roadmap por fases

**Idea (de Matías):** blog/noticias donde el **socio registrado comenta**, para fomentar participación y contenido dinámico. Decisión tomada: **comentar y ver comentarios solo para socios logueados** (comunidad privada → baja el riesgo de moderación y de exposición pública).

**Lámina visual para la reunión:** https://claude.ai/code/artifact/6cc15332-c906-42cf-b07d-f733ad3bef04

| Fase | Qué | Entrega |
|---|---|---|
| **0 — Hoy** | Diseño y dirección (elegir propuesta) | Rumbo visual aprobado |
| **1 — MVP** | Sitio + noticias autoadministrables (Django/Wagtail), deploy | Sitio profesional que la asociación maneja sola |
| **2** | Socios registrados (login validando socio, área privada, privacidad) | Base de socios |
| **3** | Comunidad: comentarios solo para socios logueados, reportar/moderar | Participación y contenido de socios |
| **4** | Dinamismo: reacciones, encuestas, newsletter, ranking, métricas | Sitio vivo que crece solo |

**Transversal:** el **servicio de contenido recurrente** (publicación semanal + comunidad + mantenimiento) corre **desde la Fase 1** → es el abono mensual de Matías. Cada fase entrega valor por sí sola (bajo riesgo).

### Cómo se muestra la comunidad en la maqueta (decidido)
**No se hace una "Opción C" clonando B.** (A y B son *estéticas* rivales — se elige una; una "C" sería B + función, no compite como tercera opción, y clonar 7 páginas es caro y genera copias que hay que mantener sincronizadas.)

En su lugar se agrega **una única página de *noticia individual* dentro de la Opción B** (adaptando `opcion-b/blog_single.html` de eduleb) que muestra la funcionalidad como **maqueta**:
- **Reacciones "Me gusta / Me sirve"** — con un toque de JS el número **sube al hacer clic** (para que en la demo se sienta vivo).
- **Comentarios de ejemplo** de socios + una caja **"Iniciá sesión para comentar"** → comunica de una la decisión de *solo socios logueados*.

Se presenta como *"así se vería una noticia con la comunidad activa (Fase 3)"* — **apoya el roadmap, no compite con A/B**. Es maqueta: no persiste (lo real es Fase 3 con Django). **Matías la está armando él.**

---

## 6. Protección de datos (Ley 25.326, Argentina)

Al registrar socios aplica la **Ley 25.326** (regulador: **AAIP**; hay una reforma en camino hacia estándar GDPR). Checklist práctico:

1. **Consentimiento + finalidad**: el socio acepta el uso de sus datos para un fin declarado (participar de la comunidad). No usarlos para otra cosa.
2. **Política de Privacidad clara** (qué datos, para qué, quién es responsable, cómo ejercer derechos).
3. **Derechos ARCO**: poder Acceder, Rectificar, Cancelar (borrar) y Oponerse → al menos permitir borrar la cuenta / pedirlo por mail.
4. **Minimización**: pedir solo lo necesario (mail, nombre, quizá legajo para validar socio).
5. **Seguridad razonable**: HTTPS, contraseñas hasheadas, control de acceso (Django lo cubre).
6. **Evitar datos sensibles**: la afiliación gremial/sindical es dato sensible por ley → no capturarlo.
7. **Roles**: la **Asociación es la responsable** de los datos; Matías/hosting es el "encargado del tratamiento" → conviene acuerdo por escrito.

**Para arrancar:** checkbox de consentimiento + links a Política de Privacidad y Términos en el registro, y opción de borrar cuenta. Ideal que el **área legal de la asociación** revise/firme la política. *(Orientación general, no asesoramiento legal — conviene una consulta corta a un abogado.)*

---

## 7. Pendientes

- [ ] Reunión con la presidenta: mostrar Opción A y B + la lámina del roadmap → **elegir dirección**.
- [ ] Opción B: reemplazar **testimonios genéricos** por reales; artículos de noticia individuales (hoy los "Leer más" van a `#`).
- [ ] Opción A: imágenes por reemplazar (`hero-2.jpg` con marca de agua, `institucional-3.jpg` placeholder); grillas de 3 cards en móvil (la última impar debería ocupar el ancho).
- [ ] Al elegir Opción B como definitiva: migrar lo pesado que ya existe en Opción A (mapa Leaflet de hoteles, estatuto completo).
- [ ] Definir hosting (Python + PostgreSQL) para Django/Wagtail.
- [ ] **Opción B: página de noticia individual con reacciones + comentarios** (mockup). La está armando Matías. Ver sección 5 → "Cómo se muestra la comunidad".

---

## 8. Cómo seguir (traspaso a otra sesión)

**Qué es esto:** proyecto de rediseño web de *la Civil*. Hoy hay **maquetas estáticas** (HTML/CSS/JS) para elegir diseño; el desarrollo real será en **Django + Wagtail** (ver secciones 4 y 5).

**Rutas clave:**
- `C:\Matias\La Civil\maqueta\` — Opción A (raíz) y Opción B (`opcion-b/`). Servidor: `python serve.py` → http://localhost:8000 (se cae al cerrar sesión; F5/Ctrl+F5, no usa caché).
- `C:\Matias\La Civil\DOCUMENTACION.md` — este archivo (documento maestro).
- Assets de imágenes/logo de la Opción B: `maqueta/opcion-b/assets/img/lacivil/`.
- Lámina del roadmap (artifact): ver sección 5.

**Estado / próximas tareas concretas:**
1. **Reunión con la presidenta:** mostrar A y B + la lámina del roadmap → que elija diseño.
2. **En curso (Matías):** página de noticia con reacciones + comentarios dentro de la Opción B (maqueta — sección 5).
3. Al elegir diseño definitivo: arrancar **Fase 1** (migrar a Django/Wagtail, CMS de noticias, deploy) reutilizando el HTML/CSS de la maqueta como templates.

**Reglas importantes:**
- **No revertir** los cambios que Matías hace por su cuenta en `opcion-b/index.html` (hero carrusel Owl `lc-hero`, `assets/css/lacivil-extra.css`, modal de registro `data-open="lcRegister"`).
- La Opción B **conserva los colores vibrantes** del template (pedido de la presidenta) — no recolorear a la paleta de la Civil.
- Matías trabaja en **Windows**, en **español rioplatense**, **paso a paso** (validar cada etapa). Da feedback con **capturas marcadas**. Cuida el costo → agrupar cambios en tandas.
