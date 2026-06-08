import { techStack } from '../data/site'

function ChipIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4 10v4M20 10v4M10 4h4M10 20h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function TechChip({ name }: { name: string }) {
  return (
    <li className="flex shrink-0 items-center gap-2.5 rounded-full glass px-5 py-2.5">
      <span className="text-brand-300">
        <ChipIcon className="h-4 w-4" />
      </span>
      <span className="whitespace-nowrap text-sm font-semibold text-slate-200">{name}</span>
    </li>
  )
}

/**
 * Infinite horizontal marquee of the tech stack. The list is rendered twice and
 * translated -50% so the loop is seamless. Pauses on hover; respects reduced motion.
 */
export default function Marquee() {
  return (
    <div
      className="group relative overflow-hidden py-2"
      aria-label="Technologies we mentor in"
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[var(--surface-base)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[var(--surface-base)] to-transparent" />

      <ul className="flex w-max items-center gap-4 animate-marquee group-hover:[animation-play-state:paused]">
        {[...techStack, ...techStack].map((t, i) => (
          <TechChip key={`${t.name}-${i}`} name={t.name} />
        ))}
      </ul>
    </div>
  )
}
