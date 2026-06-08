import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md'

type ButtonBaseProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

type ButtonAsAnchorProps = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & { href: string }

type ButtonAsButtonProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & { href?: undefined }

export default function Button(props: ButtonAsAnchorProps | ButtonAsButtonProps) {
  const { variant = 'primary', size = 'md', className, children, ...rest } = props as ButtonBaseProps & {
    href?: string
  }

  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:opacity-60 disabled:pointer-events-none'

  const sizeClass = size === 'sm' ? 'h-10 px-4 text-sm' : 'h-12 px-6 text-sm sm:text-base'

  const variantClass =
    variant === 'primary'
      ? 'text-white bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 bg-[length:200%_auto] hover:bg-[position:right_center] shadow-[0_10px_30px_-10px_rgba(79,70,229,0.7)] hover:shadow-[0_16px_44px_-10px_rgba(34,211,238,0.6)] hover:-translate-y-0.5'
      : variant === 'secondary'
        ? 'text-slate-100 glass hover:border-brand-400/40 hover:-translate-y-0.5'
        : 'text-brand-300 hover:text-white hover:bg-white/5'

  const finalClass = [base, sizeClass, variantClass, className].filter(Boolean).join(' ')

  if ('href' in props && typeof props.href === 'string') {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a {...anchorRest} className={finalClass} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} className={finalClass}>
      {children}
    </button>
  )
}
