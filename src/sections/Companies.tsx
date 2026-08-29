import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { companies } from '../data/companies'
import type { Company } from '../types'

function CompanyLogo({ company }: { company: Company }) {
  const [imageFailed, setImageFailed] = useState(false)
  const showText = company.textOnly || !company.logo || imageFailed

  if (showText) {
    return (
      <span
        className={`font-mono text-xl text-slate-500 dark:text-slate-300 ${company.textClassName ?? 'font-semibold'}`}
      >
        {company.name}
      </span>
    )
  }

  const imageClasses = `${company.logoHeightClassName ?? 'h-14'} w-auto object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 dark:opacity-70`

  if (company.needsLightBackground) {
    return (
      <span className="flex items-center rounded-xl bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200 dark:ring-white/10">
        <img
          src={company.logo}
          alt={company.name}
          loading="lazy"
          onError={() => setImageFailed(true)}
          className="h-11 w-auto object-contain opacity-90 grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
        />
      </span>
    )
  }

  if (company.needsDarkBackground) {
    return (
      <span className="flex items-center rounded-xl bg-slate-900 px-4 py-2 shadow-sm ring-1 ring-slate-800">
        <img
          src={company.logo}
          alt={company.name}
          loading="lazy"
          onError={() => setImageFailed(true)}
          className="h-11 w-auto object-contain opacity-80 transition-all duration-300 group-hover:opacity-100"
        />
      </span>
    )
  }

  return (
    <img
      src={company.logo}
      alt={company.name}
      loading="lazy"
      onError={() => setImageFailed(true)}
      className={imageClasses}
    />
  )
}

function MarqueeTrack() {
  return (
    <div className="flex shrink-0 items-center gap-20 pr-20">
      {companies.map((company) => (
        <a
          key={company.id}
          href={company.url ?? undefined}
          target={company.url ? '_blank' : undefined}
          rel={company.url ? 'noreferrer' : undefined}
          aria-label={company.name}
          className="group flex items-center"
        >
          <CompanyLogo company={company} />
        </a>
      ))}
    </div>
  )
}

export function Companies() {
  const { t } = useTranslation()
  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-gradient-to-b from-indigo-50/60 via-white to-white py-16 dark:border-slate-800 dark:from-indigo-500/5 dark:via-slate-950 dark:to-slate-950">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/10 blur-[130px] dark:bg-indigo-500/10" />
      </div>

      <p className="relative z-10 mb-10 text-center font-sans text-sm font-semibold tracking-[0.2em] text-indigo-600/80 uppercase dark:text-indigo-400/80">
        {t('companies.subtitle')}
      </p>

      <div
        className="group/marquee relative z-10 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
      >
        <div className="animate-marquee flex w-max group-hover/marquee:[animation-play-state:paused]">
          <MarqueeTrack />
          <div aria-hidden="true" className="flex">
            <MarqueeTrack />
          </div>
        </div>
      </div>
    </section>
  )
}
