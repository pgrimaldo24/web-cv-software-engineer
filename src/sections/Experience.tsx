import { Badge, Card, SectionTitle } from '../components'
import { experience } from '../data/experience'

function formatRange(start: string, end?: string) {
  return `${start} — ${end ?? 'Presente'}`
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle
        eyebrow="Trayectoria"
        title="Experiencia profesional"
        description="Un resumen de los roles y empresas donde he trabajado."
      />
      <div className="space-y-6">
        {experience.map((item) => (
          <Card key={item.id}>
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {item.company}
                  {item.location ? ` · ${item.location}` : ''}
                </p>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {formatRange(item.startDate, item.endDate)}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {item.description}
            </p>
            {item.highlights && (
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-600 dark:text-slate-400">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
            {item.technologies && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </section>
  )
}
