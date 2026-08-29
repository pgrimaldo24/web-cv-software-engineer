import { Code2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface LogoProps {
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

export function Logo({ onClick }: LogoProps) {
  const { t } = useTranslation()
  return (
    <a
      href="#top"
      onClick={onClick}
      aria-label={t('nav.goHome')}
      className="group inline-flex items-center gap-2"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-500 text-white shadow-md transition-transform duration-300 group-hover:scale-105 dark:from-indigo-400 dark:to-fuchsia-400">
        <Code2 className="h-5 w-5" aria-hidden="true" />
      </span>
    </a>
  )
}
