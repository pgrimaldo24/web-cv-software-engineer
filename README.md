# CV / Portfolio — Software Engineer

Landing page personal de CV/portfolio construida con Vite + React + TypeScript y Tailwind CSS.

## Stack

- [Vite](https://vite.dev/) — build tool y dev server
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`, sin `tailwind.config.js`)
- [lucide-react](https://lucide.dev/) — iconos de UI (menú, cerrar, chevrons, íconos de categoría)
- [react-icons](https://react-icons.github.io/react-icons/) — logos de marca (GitHub, LinkedIn, Stack Overflow)
- Sin librerías de state management — solo `useState`/hooks propios

## Requisitos

- Node.js 18+
- npm

## Empezar

```bash
npm install
npm run dev
```

El servidor de desarrollo queda disponible en `http://localhost:5173`.

## Scripts

| Comando           | Descripción                                      |
| ------------------ | ------------------------------------------------- |
| `npm run dev`       | Inicia el servidor de desarrollo con HMR          |
| `npm run build`     | Typecheck (`tsc -b`) + build de producción a `dist/` |
| `npm run preview`   | Sirve el build de producción localmente           |
| `npm run lint`      | Corre ESLint sobre el proyecto                    |

## Arquitectura

```
src/
├── assets/logos/   # Logos de empresas (SVG/PNG) usados en la sección Companies
├── components/     # UI reutilizable: Button, Badge, Card, Logo, SectionTitle, ThemeToggle
├── sections/       # Secciones de la landing: Header, Hero, About, Companies, Experience, Skills, Projects, Contact, Footer
├── data/           # Contenido tipado: profile.ts, companies.ts, experience.ts, skills.ts, projects.ts
├── types/          # Interfaces TypeScript: Company, Experience, SkillGroup, Project
├── hooks/          # Hooks propios: useTheme, useScrolled, useActiveSection, useInView
├── App.tsx         # Ensambla las secciones en orden
└── index.css       # Entry point de Tailwind + estilos globales (fuente, scroll, animaciones)
```

### Secciones

`Header` (sticky, glassmorphism al hacer scroll, scroll-spy, menú mobile) → `Hero` → `About` → `Companies` (marquee infinito de empresas) → `Experience` (destacadas + acordeón compacto) → `Skills` (grid por categoría con fade-in) → `Projects` (cards expandibles) → `Contact` → `Footer`.

### Dark mode

Se activa/desactiva agregando la clase `dark` en `<html>` (ver [useTheme.ts](src/hooks/useTheme.ts)). La preferencia se persiste en `localStorage` y respeta `prefers-color-scheme` en la primera carga.

## Personalizar el contenido

Toda la información del CV vive en `src/data/`, tipada contra las interfaces de `src/types/`:

- **`profile.ts`** — nombre, rol, tagline, ubicación, email, y enlaces a GitHub / LinkedIn / Stack Overflow / CV.
- **`companies.ts`** — empresas para el marquee (`Company[]`), con soporte para logo, texto estilizado como fallback, o cards con fondo propio cuando el logo lo requiere.
- **`experience.ts`** — historial laboral (`Experience[]`), ordenado de más reciente a más antiguo.
- **`skills.ts`** — stack técnico agrupado por categoría (`SkillGroup[]`), cada grupo con su ícono de lucide-react.
- **`projects.ts`** — proyectos destacados (`Project[]`), con stack, highlights y uno o varios repos (`repoUrl` o `repos[]`).

Para actualizar tu CV, edita esos archivos — no hace falta tocar los componentes.

## Tipografía

El proyecto usa [Poppins](https://fonts.google.com/specimen/Poppins) como fuente global, cargada desde Google Fonts en [index.html](index.html) y configurada como `--font-sans` en [index.css](src/index.css).
