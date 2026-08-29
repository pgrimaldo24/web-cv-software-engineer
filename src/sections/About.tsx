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
          Me muevo entre Java, .NET, React y Angular según lo que el proyecto necesite, pero mi foco
          siempre ha sido el mismo: sistemas que no pueden fallar. He trabajado en banca, retail y
          telecomunicaciones, sectores donde un error en producción tiene un costo real, diseñando
          microservicios, arquitecturas reactivas y soluciones bajo CQRS y Clean Architecture que hoy
          corren en producción para clientes como BCP, Oechsle y Grupo Gloria.
          <br /><br />
          No solo escribo código: he migrado servicios completos a arquitecturas más eficientes
          (Spring Boot a Quarkus, reduciendo tiempos de respuesta), implementado API Gateways desde
          cero para ecosistemas de microservicios, y liderado equipos técnicos bajo Scrum cuando el
          proyecto lo pidió. Me importa el código que se entiende sin necesitar explicación y los
          pipelines que no fallan a las 2am.
          <br /><br />
          Sigo sumando: terminando Ingeniería de Sistemas en la UPC, y usando Claude y Cursor como
          parte de mi flujo diario para acelerar el desarrollo sin sacrificar calidad.
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
