import { useTranslation } from 'react-i18next'
import { SectionTitle } from '../components'
import { profile } from '../data/profile'

export function About() {
  const { t } = useTranslation()
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle
        eyebrow={t('about.eyebrow')}
        title={t('about.title')}
        description={t('hero.tagline')}
      />
      <div className="grid gap-8 md:grid-cols-3">
        <p className="text-base leading-relaxed text-slate-600 md:col-span-2 dark:text-slate-400">
          {t('about.paragraph1')}
          <br /><br />
          {t('about.paragraph2')}
          <br /><br />
          {t('about.paragraph3')}
        </p>
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">{t('about.location')}</dt>
            <dd className="text-slate-600 dark:text-slate-400">{profile.location}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">{t('about.email')}</dt>
            <dd className="text-slate-600 dark:text-slate-400">{profile.email}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
