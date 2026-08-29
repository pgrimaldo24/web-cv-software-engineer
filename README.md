# CV / Portfolio — Software Engineer

Landing page personal de CV/portfolio construida con Vite + React + TypeScript y Tailwind CSS.

## Stack

- [Vite](https://vite.dev/) — build tool y dev server
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`, sin `tailwind.config.js`)
- [lucide-react](https://lucide.dev/) — iconos de UI (menú, cerrar, etc.)
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
├── components/     # UI reutilizable: Button, Badge, Card, SectionTitle, ThemeToggle
├── sections/       # Secciones de la landing: Header, Hero, About, Experience, Skills, Projects, Contact, Footer
├── data/           # Contenido tipado: profile.ts, experience.ts, skills.ts, projects.ts
├── types/          # Interfaces TypeScript: Experience, Skill, Project
├── hooks/          # Hooks propios: useTheme, useScrolled, useActiveSection
├── App.tsx         # Ensambla las secciones en orden
└── index.css       # Entry point de Tailwind + estilos globales (fuente, scroll)
```

### Secciones

`Header` (sticky, glassmorphism al hacer scroll, scroll-spy, menú mobile) → `Hero` → `About` → `Experience` → `Skills` → `Projects` → `Contact` → `Footer`.

### Dark mode

Se activa/desactiva agregando la clase `dark` en `<html>` (ver [useTheme.ts](src/hooks/useTheme.ts)). La preferencia se persiste en `localStorage` y respeta `prefers-color-scheme` en la primera carga.

## Personalizar el contenido

Toda la información del CV vive en `src/data/`, tipada contra las interfaces de `src/types/`:

- **`profile.ts`** — nombre, rol, tagline, ubicación, email, y enlaces a GitHub / LinkedIn / Stack Overflow / CV.
- **`experience.ts`** — historial laboral (`Experience[]`).
- **`skills.ts`** — habilidades por categoría (`Skill[]`).
- **`projects.ts`** — proyectos destacados (`Project[]`).

Para actualizar tu CV, edita esos archivos — no hace falta tocar los componentes.

## Tipografía

El proyecto usa [Poppins](https://fonts.google.com/specimen/Poppins) como fuente global, cargada desde Google Fonts en [index.html](index.html) y configurada como `--font-sans` en [index.css](src/index.css).
