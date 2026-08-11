# Relevamiento de la web actual — Asociación Civil del Personal Jerárquico, Profesional y Técnico del BNA

**Sitio relevado:** https://funcionarios-bna.com.ar/ (marca interna: "La Civil")
**Fecha de relevamiento:** 01/08/2026
**Tecnología detectada:** sitio en PHP plano, diseño de plantilla antigua, © 2017 en el pie.

> Nota: los dos "sitios" mencionados (`funcionarios-bna.com.ar` y `www.funcionarios-bna.com.ar`) son **el mismo sitio** servido con y sin `www`. Conviene confirmar con la presidenta si existe un segundo sitio realmente distinto (por ejemplo, uno viejo en otra plataforma).

---

## 1. Hallazgos críticos (resumen para el pitch)

| # | Hallazgo | Impacto |
|---|----------|---------|
| 1 | **Páginas de convenios universitarios vacías** (Siglo 21, UCES, etc.): listan la institución pero no muestran ningún beneficio, descuento ni requisito. | El principal activo comercial (educación) es invisible. Nadie se asocia por algo que no puede ver. |
| 2 | **"Valores Vigentes" no muestra ningún valor.** La página existe pero está vacía. | El interesado no puede saber cuánto cuesta la cuota → fricción máxima para asociarse. |
| 3 | **Asesoría Legal sin contenido:** solo dice "comuníquese por mail". | Un servicio valioso presentado como un trámite burocrático. |
| 4 | **Contenido congelado:** copyright © 2017, comunicados institucionales de 2018. | Transmite abandono; daña la percepción de una institución activa. |
| 5 | **Proceso de asociación anticuado:** descargar PDF, firmar e **enviar por correo interno del banco**. | Enorme fricción. Debería ser un formulario online de punta a punta. |
| 6 | **Sin catálogo ni buscador de beneficios.** Todo está escondido en menús desplegables. | El visitante no descubre el valor; abandona. |
| 7 | **Sin SEO, sin analítica visible, sin CTA persistente, sin WhatsApp destacado.** | No capta tráfico orgánico ni mide conversiones. |
| 8 | **Diseño no orientado a conversión:** funciona como folleto institucional, no como herramienta de captación. | Coincide con el diagnóstico de la propuesta. |

**Conclusión:** el sitio *parece* completo por su menú, pero al navegarlo la mayoría de las páginas son cáscaras vacías o remiten a un mail/PDF. La oportunidad de mejora es total.

---

## 2. Datos institucionales

- **Nombre completo:** Asociación Civil del Personal Jerárquico, Profesional y Técnico del Banco de la Nación Argentina.
- **Fundación:** 9 de junio de 1986 (+39 años de trayectoria).
- **Alcance:** nacional.
- **Domicilio:** Bartolomé Mitre 311, 3º piso, CABA.
- **Correspondencia interna BNA:** Bartolomé Mitre 326, Casa Central, código correo interno DE-810.
- **Email:** socios@funcionarios-bna.com.ar
- **Teléfono:** +54 11 4345-2240 / 41
- **Horario:** Lunes a viernes de 9:00 a 17:00 hs.

---

## 3. Mapa del sitio actual (estructura de menú)

- **Inicio** (`index.php`)
- **Institucional**
  - Convocatoria Asamblea
  - Comisión Directiva *(página vacía)*
  - Comisiones Directivas Anteriores
  - Estatuto
- **Socios y Bonos**
  - Socios (`socios.php`)
  - Bonos (`bonos.php`)
  - Valores Vigentes *(página vacía — sin valores)*
  - Reglamento de Bonos
- **Servicios**
  - Sorteos (reglamento + ganadores)
  - Acción Social (reglamento + anexo + formulario PDF)
  - Departamento (alojamiento en CABA) — información + reglamento + formulario
  - Residencias para Adultos Mayores
  - Asesoría Legal *(sin contenido real)*
- **Noticias** (`noticias.php`)
- **Capacitación**
  - Becas (reglamento + anexo + formulario PDF)
  - Convenios Internacionales *(en construcción — `actualizando.php`)*
  - Convenios Nacionales:
    - Universidad Siglo 21 *(página vacía)*
    - Universidad Católica de Salta – UCASAL
    - Universidad de Ciencias Empresariales y Sociales – UCES *(página vacía)*
    - Universidad Popular Resistencia
    - Universidad Tecnológica Nacional Reconquista – UTN
    - Instituto Técnico Superior – TECLAB
    - Fundación Jerárquicos Salud – Idiomas
- **Turismo**
  - Hoteles (mapa con hoteles adheridos y descuentos)
- **Autoservicio**
  - Alta de Socio (formulario online)
  - Actualización de datos
- **Admin** (panel de administración)
- **Contacto**

---

## 4. Inventario de servicios y beneficios

| Categoría | Servicio / Beneficio | Estado en la web actual | Descripción relevada | Requisitos / Acceso |
|---|---|---|---|---|
| Educación | Universidad Siglo 21 | Página vacía | Convenio nacional. Sin detalle de descuento. | A confirmar |
| Educación | UCASAL | A relevar | Convenio nacional. | A confirmar |
| Educación | UCES | Página vacía | Convenio nacional. | A confirmar |
| Educación | Universidad Popular Resistencia | A relevar | Convenio nacional. | A confirmar |
| Educación | UTN Reconquista | A relevar | Convenio nacional. | A confirmar |
| Educación | TECLAB | A relevar | Instituto técnico superior. | A confirmar |
| Educación | Fundación Jerárquicos Salud – Idiomas | A relevar | Cursos de idiomas. | A confirmar |
| Educación | Convenios Internacionales | En construcción | Página `actualizando.php`. | — |
| Becas | Becas a la Excelencia / Becas para hijos | Reglamento en PDF | Reglamento + anexo + formulario descargable. Hay "Ganadores Becas a la Excelencia 2026". | Ser socio; ver reglamento |
| Turismo | Hoteles adheridos | Mapa | Hoteles en Argentina con descuentos. Reserva directa con el establecimiento presentando carnet de socio + DNI. | Carnet de socio + DNI |
| Alojamiento | Departamento (CABA) | Info + reglamento + formulario | Alojamiento temporario en CABA para socios. | Ver reglamento; formulario online |
| Residencias | Residencias para Adultos Mayores | Info + mapa | Residencias adheridas con descuento. Para socios activos, adherentes y jubilados. | Carnet de socio |
| Asesoría legal | Orientación jurídica | Sin contenido | Solo remite a mail. | Consultar por mail |
| Acción social | Fondo Solidario de Acción Social | Reglamento + anexo + formulario | Subsidios / acompañamiento. Reglamento y anexo disponibles. | Ver reglamento; formulario |
| Sorteos | Sorteos para socios | Reglamento + ganadores | Sorteos periódicos con listado de ganadores. | Ser socio |
| Bonos | Solicitud de bonos | Instructivo + formulario | Descargar formulario, enviar firmado por correo interno BNA. | Ser socio |

> Las celdas "A relevar / A confirmar" requieren datos que la presidenta debe aportar (descuentos concretos, requisitos, vigencias). Ese es el insumo clave que hoy **no está publicado en ningún lado**.

---

## 5. Proceso de asociación actual (a modernizar)

1. Completar formulario online (`socio_form_alta.php`) **o** descargar PDF.
2. Si es PDF: imprimir, firmar y **enviar el original por correo interno del BNA** (código DE-810) o por Correo Argentino.
3. La Asociación procesa la solicitud.

**Problema:** aun existiendo la opción online, se empuja al método por correo físico. Fricción altísima. La nueva web debe permitir asociarse 100% online.

---

## 6. Noticias / novedades publicadas (muestra)

- Ganadores a las Becas a la Excelencia 2026 (20/07/2026)
- Día del Amigo (20/07/2026)
- 9 de Julio – Día de la Independencia (09/07/2026)
- WhatsApp (08/07/2026)
- Día del Padre (21/06/2026)
- Día de la Bandera (20/06/2026)
- Comunicados institucionales antiguos (2018)

Observación: las novedades recientes son mayormente **efemérides**, no beneficios accionables. Falta contenido de valor práctico (nuevos convenios, becas, promos) como recomienda la propuesta.

---

## 7. Datos que faltan y hay que pedirle a la presidenta

1. **Valor de la cuota societaria** (mensual/anual) y categorías (activo, adherente, jubilado).
2. **Detalle real de cada convenio universitario:** % de descuento, carreras, requisitos, vigencia.
3. **Beneficios concretos** por cada servicio (montos de subsidios, condiciones).
4. Listado actualizado de **hoteles y residencias** adheridos con sus descuentos.
5. **Comisión Directiva** actual (nombres y cargos).
6. Confirmar si existe un **segundo sitio** realmente distinto.
7. Accesos: dominio, hosting, DNS, casilla de mail, panel actual (para migración y redirecciones).
8. Material gráfico: **logo en alta**, colores institucionales, fotos reales.

---

## 8. Recomendación técnica (esquema que mantenés vos)

- **Stack:** sitio moderno, liviano y rápido (Next.js / Astro o similar), no WordPress. Mejor rendimiento, mejor SEO, menos superficie de mantenimiento y seguridad.
- **Contenido:** panel simple para que la Asociación cargue noticias/beneficios, y vos gestionás lo estructural (modelo mixto tirando a administrado por vos).
- **Infra:** hosting administrado (Vercel/Netlify) + dominio actual con redirecciones 301 desde las URLs `.php` viejas para no perder posicionamiento.
- **Base:** catálogo de beneficios como datos (JSON/CMS) para que crezca sin rehacer páginas.
- **Incluido en el abono mensual:** actualizaciones, carga de contenido, SEO, analítica, backups, soporte y reporte de métricas.
