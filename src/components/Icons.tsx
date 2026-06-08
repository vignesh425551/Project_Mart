import type { IconName } from '../data/site'

type IconProps = { className?: string }

export function IconSparkle({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2l1.2 5.1L18 8.3l-4.8 1.2L12 15l-1.2-5.5L6 8.3l4.8-1.2L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M4 14l.7 2.8L7.5 18l-2.8.7L4 21l-.7-2.3L.5 18l2.8-1.2L4 14Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  )
}

export function IconAI({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 8h8v8H8V8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M6 12H4M20 12h-2M12 6V4M12 20v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 12l1.1 1.1L14 10.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconVision({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2.2 12s3.2-7 9.8-7 9.8 7 9.8 7-3.2 7-9.8 7-9.8-7-9.8-7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

export function IconCode({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 18 3 12l6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconData({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6c0-1.1 3.6-2 8-2s8 .9 8 2-3.6 2-8 2-8-.9-8-2Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 6v6c0 1.1 3.6 2 8 2s8-.9 8-2V6" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 12v6c0 1.1 3.6 2 8 2s8-.9 8-2v-6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

const MAP: Record<IconName, (p: IconProps) => React.ReactElement> = {
  sparkle: IconSparkle,
  ai: IconAI,
  vision: IconVision,
  code: IconCode,
  data: IconData,
}

/** Render an icon by its data-driven name. */
export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Cmp = MAP[name]
  return <Cmp className={className} />
}
