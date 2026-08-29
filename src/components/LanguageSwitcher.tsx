import { useTranslation } from 'react-i18next'

const languages = ['es', 'en'] as const

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation()

  return (
    <div
      role="group"
      aria-label={t('nav.changeLanguage')}
      className="inline-flex items-center gap-0.5 rounded-full border border-slate-200 p-0.5 dark:border-slate-700"
    >
      {languages.map((code) => {
        const isActive = i18n.resolvedLanguage === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => i18n.changeLanguage(code)}
            aria-pressed={isActive}
            aria-label={code.toUpperCase()}
            className={`inline-flex h-8 cursor-pointer items-center rounded-full px-2 text-xs font-medium transition-colors ${
              isActive
                ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400'
                : 'text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
            }`}
          >
            {code.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}
