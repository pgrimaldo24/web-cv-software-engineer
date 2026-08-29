import type { AnchorHTMLAttributes } from 'react'
import cvFile from '../assets/docs/CV_Pierr_Grimaldo_Vidalon.pdf'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'

interface DownloadCvButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-indigo-600 text-white hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400',
  secondary:
    'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700',
  ghost:
    'bg-transparent text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
  outline:
    'border border-indigo-300 bg-indigo-50/50 text-indigo-700 backdrop-blur-xl hover:bg-indigo-100 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-slate-100 dark:hover:bg-indigo-500/20',
}

export function DownloadCvButton({
  variant = 'primary',
  className = '',
  ...props
}: DownloadCvButtonProps) {
  return (
    <a
      href={cvFile}
      download="CV_Pierr_Grimaldo_Vidalon.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      Descargar CV
    </a>
  )
}
