import { useTranslation } from 'react-i18next'
import { profile } from '../data/profile'

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 text-sm text-slate-500 dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} {profile.name}. {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}
