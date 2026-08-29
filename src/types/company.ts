export interface Company {
  id: string
  name: string
  logo?: string
  url?: string
  /** Renderiza el nombre como texto estilizado en vez de logo (marcas de terceros, logos rotos, etc.) */
  textOnly?: boolean
  /** Clase Tailwind extra para el texto estilizado (ej. cursiva, tracking) */
  textClassName?: string
  /** El logo trae su propio fondo sólido incrustado (ej. rectángulo blanco) y necesita una card clara propia */
  needsLightBackground?: boolean
  /** El logo es blanco/monocromo claro y necesita una card oscura propia para ser visible en light mode */
  needsDarkBackground?: boolean
  /** Clase Tailwind de altura para compensar logos con mucho padding interno (por defecto h-14) */
  logoHeightClassName?: string
}
