import { Badge, Card, SectionTitle } from '../components'
import { skills } from '../data/skills'
import type { SkillCategory } from '../types'

const categoryLabels: Record<SkillCategory, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Herramientas',
  other: 'Otros',
}

const categories: SkillCategory[] = ['frontend', 'backend', 'tools', 'other']

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle
        eyebrow="Habilidades"
        title="Tecnologías con las que trabajo"
        description="Lenguajes, frameworks y herramientas que uso en mi día a día."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {categories.map((category) => {
          const items = skills.filter((skill) => skill.category === category)
          if (items.length === 0) return null

          return (
            <Card key={category}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {categoryLabels[category]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill.id}>{skill.name}</Badge>
                ))}
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
