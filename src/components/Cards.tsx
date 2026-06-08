import type { ReactNode } from 'react'
import Button from './Button'

function IconBadge({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600/25 to-accent-500/15 text-brand-200 ring-1 ring-brand-400/25">
      {children}
    </div>
  )
}

type DomainCardProps = {
  icon: ReactNode
  title: string
  description: string
  href: string
}

export function DomainCard({ icon, title, description, href }: DomainCardProps) {
  return (
    <a href={href} className="ring-gradient glow-hover group relative block rounded-3xl glass p-6">
      <div className="flex items-start gap-3.5">
        <IconBadge>{icon}</IconBadge>
        <div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-400">{description}</p>
        </div>
      </div>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-300 opacity-0 transition-opacity group-hover:opacity-100">
        Explore
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </a>
  )
}

type FeatureCardProps = { title: string; description: string; icon: ReactNode }

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="ring-gradient relative rounded-3xl glass p-6">
      <div className="flex items-start gap-3.5">
        <IconBadge>{icon}</IconBadge>
        <div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-400">{description}</p>
        </div>
      </div>
    </div>
  )
}

function TechBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-200 ring-1 ring-brand-400/20">
      {label}
    </span>
  )
}

type DemoProjectCardProps = {
  title: string
  thumbnail: ReactNode
  techStack: string[]
  description: string
  onViewDemo: () => void
  onViewDetails: () => void
}

export function DemoProjectCard({
  title,
  thumbnail,
  techStack,
  description,
  onViewDemo,
  onViewDetails,
}: DemoProjectCardProps) {
  return (
    <div className="ring-gradient glow-hover group relative overflow-hidden rounded-3xl glass p-6">
      <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
        <div className="bg-gradient-to-br from-brand-600/20 via-accent-500/10 to-transparent">
          {thumbnail}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
      </div>

      <div className="mt-5">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {techStack.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Button onClick={onViewDemo} variant="primary" size="sm" className="w-full">
            View Demo
          </Button>
          <Button onClick={onViewDetails} variant="secondary" size="sm" className="w-full">
            View Details
          </Button>
        </div>
      </div>
    </div>
  )
}

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`Rated ${rating} out of ${max}`}>
      {Array.from({ length: max }).map((_, i) => (
        <svg
          key={i}
          className={i < rating ? 'h-4 w-4 text-amber-400' : 'h-4 w-4 text-slate-600'}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.3l6.5-.9L12 2.5Z" />
        </svg>
      ))}
    </div>
  )
}

type TestimonialCardProps = { name: string; role: string; quote: string; rating: number }

export function TestimonialCard({ name, role, quote, rating }: TestimonialCardProps) {
  return (
    <figure className="ring-gradient glow-hover relative flex h-full flex-col rounded-3xl glass p-6">
      <div className="flex items-center justify-between">
        <StarRating rating={rating} />
        <svg className="h-8 w-8 text-brand-400/50" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M9.5 7C6.5 8 5 10.7 5 14v3h5v-6H7.5C7.7 9.3 8.6 8 10 7.4L9.5 7Zm9 0c-3 1-4.5 3.7-4.5 7v3h5v-6h-2.5c.2-1.7 1.1-3 2.5-3.6L18.5 7Z" />
        </svg>
      </div>

      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">“{quote}”</blockquote>

      <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 via-accent-500 to-magenta-500 p-[2px]">
          <span className="flex h-full w-full items-center justify-center rounded-full bg-[var(--surface-base)] text-sm font-bold text-gradient">
            {name.charAt(0)}
          </span>
        </span>
        <span>
          <span className="block text-sm font-semibold text-white">{name}</span>
          <span className="block text-xs font-medium text-slate-400">{role}</span>
        </span>
      </figcaption>
    </figure>
  )
}
