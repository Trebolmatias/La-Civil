# Maqueta — Nueva web Asociación de Funcionarios BNA

Maqueta navegable (multi-página) de la nueva web. Pensada como **portal de contenidos**: banner principal, categorías independientes con su propia sección en la Home y su propia página.

## Cómo verla

Abrí **`index.html`** en el navegador (doble clic). Desde ahí navegás a todo.

> Nota: es HTML/CSS/JS estático, no necesita servidor. Si algún navegador bloquea el `?cat=` al abrir como archivo, se puede levantar un servidor local simple, pero en general funciona con doble clic.

## Estructura de archivos

```
maqueta/
├── index.html            → Home (portal)
├── institucional.html    ┐
├── beneficios.html       │  Páginas de categoría
├── turismo.html          │  (comparten diseño y lógica)
├── oportunidades.html    │
├── comunicados.html      ┘
├── css/
│   └── styles.css        → Todos los estilos (colores, tipografía, componentes)
├── js/
│   └── app.js            → Íconos + interacción + contenido de las categorías
├── img/                  → Acá van las fotos (ver img/LEEME.txt)
└── README.md
```

## Páginas de categoría

La navbar lleva a páginas reales, cada una con su propia URL (como será en la web final):

- `institucional.html`
- `beneficios.html`
- `turismo.html`
- `oportunidades.html`
- `comunicados.html`

Todas usan el mismo diseño: cada archivo solo declara su categoría con `<body data-cat="...">` y `app.js` arma el contenido. El contenido de ejemplo está en `js/app.js` (objeto `POSTS`); en la web real vendrá del panel de administración.

## Imágenes

Ver **`img/LEEME.txt`**. Poné las fotos con los nombres indicados y aparecen solas; si falta alguna, se muestra un placeholder de color.

## Pendiente / próximos pasos

- Reemplazar logo "AF" por el logo institucional real.
- Definir colores finales (hoy: azul institucional + dorado).
- Cargar fotos reales.
- Página de detalle de noticia, formulario de asociación y catálogo completo.
