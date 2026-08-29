import { Button, SectionTitle } from '../components'
import { profile } from '../data/profile'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle
        align="center"
        eyebrow="Contacto"
        title="Hablemos"
        description="¿Tienes un proyecto en mente o una oportunidad laboral? Escríbeme."
      />
      <div className="flex flex-col items-center gap-4">
        <Button variant="primary" onClick={() => (window.location.href = `mailto:${profile.email}`)}>
          {profile.email}
        </Button>
        <div className="flex gap-4 text-sm">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            LinkedIn
          </a>
          <a
            href={profile.stackoverflow}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            Stack Overflow
          </a>
        </div>
      </div>
    </section>
  )
}
