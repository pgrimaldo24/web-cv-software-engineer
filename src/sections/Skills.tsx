import { useTranslation } from 'react-i18next'
import { Badge, Card, SectionTitle } from '../components'
import { skillGroups } from '../data/skills'
import { useInView } from '../hooks/useInView'
import type { SkillGroup } from '../types'

function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  const { t } = useTranslation()
  const { ref, isInView } = useInView<HTMLDivElement>()
  const Icon = group.icon

  return (
    <Card
      ref={ref}
      className={isInView ? 'animate-fade-in-up' : 'opacity-0'}
      style={isInView ? { animationDelay: `${index * 80}ms` } : undefined}
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
          {t(`skills.groups.${group.id}`)}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <Badge
            key={item}
            className="transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 dark:hover:border-indigo-500/40 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-300"
          >
            {t(`skills.items.${item}`, { defaultValue: item })}
          </Badge>
        ))}
      </div>
    </Card>
  )
}

export function Skills() {
  const { t } = useTranslation()
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle
        eyebrow={t('skills.eyebrow')}
        title={t('skills.title')}
        description={t('skills.description')}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <SkillCard key={group.id} group={group} index={index} />
        ))}
      </div>
    </section>
  )
}
