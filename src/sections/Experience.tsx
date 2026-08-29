import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Badge, Card, SectionTitle } from '../components'
import { experience } from '../data/experience'
import type { Experience as ExperienceItem } from '../types'

const FEATURED_COUNT = 5

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const { t } = useTranslation()
  const achievements = t(`experience.items.${item.id}.achievements`, { returnObjects: true }) as string[]

  return (
    <Card>
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {t(`experience.items.${item.id}.role`)}
          </h3>
          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
            {item.company}
          </p>
        </div>
        <span className="shrink-0 text-sm text-slate-500 dark:text-slate-400">{item.period}</span>
      </div>

      <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-600 dark:text-slate-400">
        {achievements.map((achievement) => (
          <li key={achievement}>{achievement}</li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </Card>
  )
}

function CompactExperienceItem({ item }: { item: ExperienceItem }) {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const achievements = t(`experience.items.${item.id}.achievements`, { returnObjects: true }) as string[]

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
            {t(`experience.items.${item.id}.role`)}
          </h3>
          <p className="text-sm text-indigo-600 dark:text-indigo-400">{item.company}</p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <span className="text-xs text-slate-500 dark:text-slate-400">{item.period}</span>
          <ChevronDown
            className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-5">
          <ul className="list-inside list-disc space-y-1 text-sm text-slate-600 dark:text-slate-400">
            {achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
          <div className="mt-3 flex flex-wrap gap-2">
            {item.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Experience() {
  const { t } = useTranslation()
  const featured = experience.slice(0, FEATURED_COUNT)
  const rest = experience.slice(FEATURED_COUNT)

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle
        eyebrow={t('experience.eyebrow')}
        title={t('experience.title')}
        description={t('experience.description')}
      />

      <div className="space-y-6">
        {featured.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>

      {rest.length > 0 && (
        <div className="mt-10">
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
            {t('experience.additional')}
          </h3>
          <div className="space-y-3">
            {rest.map((item) => (
              <CompactExperienceItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
