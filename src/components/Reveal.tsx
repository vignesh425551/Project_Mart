import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

/** Wraps children in a scroll-reveal animation. Optional stagger delay (ms). */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={['reveal', visible ? 'is-visible' : '', className].filter(Boolean).join(' ')}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
