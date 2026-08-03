# Portafolio

Proyecto de portafolio personal hecho con React + Vite, Tailwind CSS y React Router.

## Estructura

```
src/
  components/   componentes reutilizables (Navbar, Footer, FlashCard, TimelineStep, ProjectCard, Landscape, PageHeader)
  pages/        una página por ruta (Home, Contacto, HistorialAcademico, PortafolioProyectos)
  data/         contenido.js -> edita aquí tu nombre, bio, contactos, historial y proyectos
  App.jsx       layout + definición de rutas (react-router-dom)
  main.jsx      punto de entrada, monta BrowserRouter
```

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre la URL que muestra la terminal (por defecto http://localhost:5173).

## Cómo editar el contenido

Todo el texto (nombre, bio, redes, historial académico, proyectos) vive en
`src/data/contenido.js`. No necesitas tocar los componentes ni las páginas
para actualizar tu información.

## Build de producción

```bash
npm run build
npm run preview
```
