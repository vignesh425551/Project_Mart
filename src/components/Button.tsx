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
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & {
    href: string
  }

type ButtonAsButtonProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
    href?: undefined
  }

export default function Button(props: ButtonAsAnchorProps | ButtonAsButtonProps) {
  const { variant = 'primary', size = 'md', className, children, ...rest } = props as ButtonBaseProps & {
    href?: string
  }

  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600/50 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none'

  const sizeClass =
    size === 'sm' ? 'h-10 px-4 text-sm' : 'h-12 px-5 text-sm sm:text-base'

  const variantClass =
    variant === 'primary'
      ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm'
      : variant === 'secondary'
        ? 'bg-white/70 text-slate-900 hover:bg-white border border-white/60'
        : 'bg-transparent text-indigo-700 hover:bg-indigo-50'

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

