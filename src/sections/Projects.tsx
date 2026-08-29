import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaGithub } from 'react-icons/fa'
import { Badge, Button, Card, SectionTitle } from '../components'
import { projects } from '../data/projects'
import type { Project } from '../types'

const VISIBLE_STACK_COUNT = 7

function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const visibleStack = project.stack.slice(0, VISIBLE_STACK_COUNT)
  const extraStackCount = project.stack.length - visibleStack.length
  const highlights = t(`projects.items.${project.id}.highlights`, { returnObjects: true }) as string[]

  return (
    <Card className="flex flex-col">
      <span className="mb-2 w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
        {t(`projects.items.${project.id}.category`)}
      </span>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {t(`projects.items.${project.id}.description`)}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {visibleStack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
        {extraStackCount > 0 && <Badge>{t('projects.moreCount', { count: extraStackCount })}</Badge>}
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="mt-4 flex cursor-pointer items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
      >
        {isOpen ? t('projects.hideDetails') : t('projects.showDetails')}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'mt-3 max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="list-inside list-disc space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex flex-1 flex-wrap items-end gap-3">
        {project.repos ? (
          project.repos.map((repo) => (
            <Button
              key={repo.url}
              variant="secondary"
              className="gap-2 px-4 py-2 text-xs"
              onClick={() => window.open(repo.url, '_blank')}
            >
              <FaGithub className="h-4 w-4" aria-hidden="true" />
              {t(`projects.repos.${repo.label}`, { defaultValue: repo.label })}
            </Button>
          ))
        ) : project.repoUrl ? (
          <Button
            variant="secondary"
            className="gap-2 px-4 py-2 text-xs"
            onClick={() => window.open(project.repoUrl, '_blank')}
          >
            <FaGithub className="h-4 w-4" aria-hidden="true" />
            {t('projects.viewRepo')}
          </Button>
        ) : null}
      </div>
    </Card>
  )
}

export function Projects() {
  const { t } = useTranslation()
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle
        eyebrow={t('projects.eyebrow')}
        title={t('projects.title')}
        description={t('projects.description')}
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
