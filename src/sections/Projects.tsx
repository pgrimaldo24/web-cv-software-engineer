import { Badge, Button, Card, SectionTitle } from '../components'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle
        eyebrow="Proyectos"
        title="Trabajo destacado"
        description="Una selección de proyectos personales y profesionales."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
            <div className="mt-5 flex gap-3">
              {project.liveUrl && (
                <Button
                  variant="primary"
                  className="px-4 py-2 text-xs"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  Ver demo
                </Button>
              )}
              {project.repoUrl && (
                <Button
                  variant="secondary"
                  className="px-4 py-2 text-xs"
                  onClick={() => window.open(project.repoUrl, '_blank')}
                >
                  Código
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
