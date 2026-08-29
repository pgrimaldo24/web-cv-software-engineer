interface SectionTitleProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionTitleProps) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`mb-10 flex flex-col gap-2 ${alignment}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  )
}
