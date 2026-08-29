import type { CSSProperties, ReactNode, Ref } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  ref?: Ref<HTMLDivElement>
}

export function Card({ children, className = '', style, ref }: CardProps) {
  return (
    <div
      ref={ref}
      style={style}
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900 ${className}`}
    >
      {children}
    </div>
  )
}
