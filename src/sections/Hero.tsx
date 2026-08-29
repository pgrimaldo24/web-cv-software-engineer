import { Button } from '../components'
import { profile } from '../data/profile'

const terminalLines = [
  'React / TypeScript',
  'Node.js / Express',
  'PostgreSQL / MongoDB',
  'Docker / CI-CD',
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-indigo-400/20 blur-[120px] dark:bg-indigo-500/10" />
        <div className="absolute right-1/4 bottom-1/4 h-[600px] w-[600px] rounded-full bg-fuchsia-400/10 blur-[150px] dark:bg-fuchsia-500/10" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-slate-50/60 px-4 py-2 backdrop-blur-xl dark:border-white/10 dark:bg-slate-800/50">
            {/* <span className="h-2 w-2 animate-ping rounded-full bg-indigo-500" /> */}
            <span className="text-xs font-medium tracking-widest text-slate-600 uppercase dark:text-slate-400">
              Disponible para nuevas oportunidades
            </span>
          </div>

          <h1 className="text-4xl leading-tight font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white">
            Hola, soy
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-fuchsia-400">
              {profile.name}
            </span>
          </h1>

          <p className="text-xl font-medium text-indigo-600 dark:text-indigo-400">
            {profile.role}
          </p>

          <p className="max-w-xl text-lg text-slate-600 dark:text-slate-400">
            {profile.tagline}
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            <Button variant="primary" onClick={() => (window.location.href = '#contact')}>
              Contáctame
            </Button>
            <Button variant="outline" onClick={() => window.open(profile.resumeUrl, '_blank')}>
              Descargar CV
            </Button>
          </div>
        </div>

        <div className="relative mt-12 lg:col-span-5 lg:mt-0">
          <div className="relative rounded-2xl border border-slate-200 bg-white/60 p-6 shadow-2xl backdrop-blur-2xl transition-transform duration-500 hover:rotate-0 lg:rotate-2 dark:border-white/10 dark:bg-slate-900/40">
            <div className="mb-4 flex items-center gap-2 border-b border-slate-200 pb-4 dark:border-white/5">
              <div className="h-3 w-3 rounded-full bg-red-400/80" />
              <div className="h-3 w-3 rounded-full bg-amber-400/80" />
              <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <span className="ml-4 font-mono text-xs text-slate-400 dark:text-slate-500">
                {profile.name.toLowerCase().replace(/\s+/g, '')}@dev-env: ~
              </span>
            </div>

            <div className="font-mono text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              <p className="mb-2 text-indigo-600 dark:text-indigo-400">
                &gt; initialize_stack()
              </p>
              <p className="mb-1 pl-4 text-slate-500 dark:text-slate-400">
                Loading dependencies...
              </p>
              {terminalLines.map((line) => (
                <p key={line} className="pl-4 text-emerald-600 dark:text-emerald-400">
                  [OK] {line}
                </p>
              ))}
              <p className="mt-4 text-indigo-600 dark:text-indigo-400">
                &gt; await compile_experience()
              </p>
              <div className="mt-2 flex items-center gap-2 pl-4">
                <span className="inline-block h-4 w-2 animate-pulse bg-indigo-500" />
                <span className="text-slate-500 dark:text-slate-400">Processing experience...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
