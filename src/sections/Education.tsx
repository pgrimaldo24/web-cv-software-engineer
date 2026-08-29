import { ChevronDown, GraduationCap } from 'lucide-react'
import { useState } from 'react'
import { Badge, Card, SectionTitle } from '../components'
import { certificationGroups } from '../data/certifications'
import { education } from '../data/education'
import { useInView } from '../hooks/useInView'
import type { CertificationGroup } from '../types'

function EducationCard() {
  const { ref, isInView } = useInView<HTMLDivElement>()

  return (
    <Card
      ref={ref}
      className={`mb-10 border-indigo-200 bg-indigo-50/40 dark:border-indigo-500/20 dark:bg-indigo-500/5 ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
            <GraduationCap className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {education.degree}
            </h3>
            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              {education.institution}
            </p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{education.detail}</p>
          </div>
        </div>
        <Badge className="w-fit shrink-0 border-amber-300 bg-amber-50 text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400">
          {education.status}
        </Badge>
      </div>
    </Card>
  )
}

function CertificationGroupCard({ group, index }: { group: CertificationGroup; index: number }) {
  const { ref, isInView } = useInView<HTMLDivElement>()
  const [isOpen, setIsOpen] = useState(false)
  const Icon = group.icon

  return (
    <Card
      ref={ref}
      className={`!p-0 overflow-hidden ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={isInView ? { animationDelay: `${index * 80}ms` } : undefined}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-3 p-6 text-left"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
            {group.category}
          </h3>
        </div>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="space-y-3 px-6 pb-6">
          {group.items.map((item) => (
            <li key={item.name} className="flex items-start justify-between gap-3 text-sm">
              <div>
                <p className="font-medium text-slate-700 dark:text-slate-300">{item.name}</p>
                {item.institution && (
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.institution}</p>
                )}
              </div>
              {item.year && <Badge className="shrink-0 text-xs">{item.year}</Badge>}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle
        eyebrow="Formación"
        title="Educación y Certificaciones"
        description="Formación académica en curso y certificaciones que respaldan mi especialización en arquitectura, seguridad y buenas prácticas."
      />

      <EducationCard />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificationGroups.map((group, index) => (
          <CertificationGroupCard key={group.id} group={group} index={index} />
        ))}
      </div>
    </section>
  )
}
