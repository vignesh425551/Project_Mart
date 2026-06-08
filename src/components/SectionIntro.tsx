type SectionIntroProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionIntro({ eyebrow, title, description, align = 'left' }: SectionIntroProps) {
  const centered = align === 'center'
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-300 ring-1 ring-brand-400/20">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p className={['mt-3 text-base leading-relaxed text-slate-400', centered ? 'mx-auto' : ''].join(' ')}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
