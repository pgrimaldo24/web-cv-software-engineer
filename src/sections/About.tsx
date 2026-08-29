import { SectionTitle } from '../components'
import { profile } from '../data/profile'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle
        eyebrow="Sobre mí"
        title="Un poco de mi historia"
        description="8+ años construyendo software que realmente se usa, en equipos reales, con problemas reales."
      />
      <div className="grid gap-8 md:grid-cols-3">
        <p className="text-base leading-relaxed text-slate-600 md:col-span-2 dark:text-slate-400">
          En lo largo de mi experiencia me he enfocado en el desarrollo fullstack, moviéndome entre
          Java, .NET, React y Angular según lo que el problema pida. He trabajado en proyectos
          para banca, retail y telecomunicaciones sectores donde un error en producción cuesta
          caro, así que aprendí a diseñar pensando en escalabilidad desde el día uno: microservicios,
          programación reactiva, CQRS y buenas prácticas de Clean Architecture no son buzzwords
          para mí, son lo que uso todos los días.
          <br /><br />
          Me gusta el código que se entiende sin necesitar explicación, los pipelines que no fallan
          a las 2am, y los equipos donde se puede discutir una decisión técnica sin ego de por medio.
          Hoy sigo sumando: terminando mi carrera en la UPC y usando herramientas de IA como Claude
          y Cursor para acelerar el desarrollo sin perder calidad en el código.
        </p>
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">Ubicación</dt>
            <dd className="text-slate-600 dark:text-slate-400">{profile.location}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">Email</dt>
            <dd className="text-slate-600 dark:text-slate-400">{profile.email}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
