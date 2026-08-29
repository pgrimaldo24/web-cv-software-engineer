import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa'
import { Button, ThemeToggle } from '../components'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrolled } from '../hooks/useScrolled'

const navLinks = [
  { label: 'Sobre mí', href: '#about', id: 'about' },
  { label: 'Experiencia', href: '#experience', id: 'experience' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Proyectos', href: '#projects', id: 'projects' },
  { label: 'Contacto', href: '#contact', id: 'contact' },
]

const sectionIds = ['top', ...navLinks.map((link) => link.id)]

export function Header() {
  const scrolled = useScrolled(20)
  const activeId = useActiveSection(sectionIds)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleNavClick(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200 bg-white/70 shadow-sm backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/70'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-end gap-10 px-6 py-4 md:justify-center">
        <nav className="hidden gap-6 md:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.id
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-indigo-600 after:transition-all after:duration-300 dark:after:bg-indigo-400 ${
                  isActive
                    ? 'text-indigo-600 after:w-full dark:text-indigo-400'
                    : 'text-slate-600 after:w-0 hover:text-indigo-600 hover:after:w-full dark:text-slate-300 dark:hover:text-indigo-400'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="primary"
            className="px-4 py-2 text-xs"
            onClick={() => window.open(profile.resumeUrl, '_blank')}
          >
            Descargar CV
          </Button>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Ir a mi perfil de LinkedIn"
            className="text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            <FaLinkedin className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Ir a mi perfil de GitHub"
            className="text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            <FaGithub className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={profile.stackoverflow}
            target="_blank"
            rel="noreferrer"
            aria-label="Ir a mi perfil de Stack Overflow"
            className="text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            <FaStackOverflow className="h-5 w-5" aria-hidden="true" />
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {isMenuOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-1 border-t border-slate-200 bg-white/90 px-6 py-4 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/90">
          {navLinks.map((link) => {
            const isActive = activeId === link.id
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </a>
            )
          })}
          <div className="mt-2 flex items-center gap-4 border-t border-slate-200 pt-4 dark:border-slate-800">
            <Button
              variant="primary"
              className="flex-1 px-4 py-2 text-xs"
              onClick={() => window.open(profile.resumeUrl, '_blank')}
            >
              Descargar CV
            </Button>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Ir a mi perfil de LinkedIn"
              className="text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
            >
              <FaLinkedin className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Ir a mi perfil de GitHub"
              className="text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
            >
              <FaGithub className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={profile.stackoverflow}
              target="_blank"
              rel="noreferrer"
              aria-label="Ir a mi perfil de Stack Overflow"
              className="text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
            >
              <FaStackOverflow className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
