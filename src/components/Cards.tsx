import type { ReactNode } from 'react'
import Button from './Button'

type DomainCardProps = {
  icon: ReactNode
  title: string
  description: string
  href: string
}

export function DomainCard({ icon, title, description, href }: DomainCardProps) {
  return (
    <a
      href={href}
      className="group relative rounded-3xl border border-white/70 bg-white/70 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:bg-white"
    >
      <div className="flex items-start gap-3">
        <div className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600/10 text-indigo-700 ring-1 ring-indigo-600/20 transition-colors group-hover:bg-indigo-600/15">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">{description}</p>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1 rounded-b-3xl opacity-0 bg-gradient-to-r from-indigo-600 via-cyan-500 to-indigo-600 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
    </a>
  )
}

type FeatureCardProps = {
  title: string
  description: string
  icon: ReactNode
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600/10 text-indigo-700 ring-1 ring-indigo-600/20">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  )
}

type TechBadgeProps = { label: string }

function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-600/10">
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
    <div className="group rounded-3xl border border-white/70 bg-white/70 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:bg-white">
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600/10 via-cyan-500/5 to-white ring-1 ring-white/70">
        {thumbnail}
      </div>

      <div className="mt-5">
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>

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

type TestimonialCardProps = {
  name: string
  role: string
  quote: string
}

export function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
  return (
    <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">{name}</p>
          <p className="text-xs font-medium text-slate-500">{role}</p>
        </div>
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600/10 text-indigo-700 ring-1 ring-indigo-600/20">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M10 11c0-3 2-6 6-7v3c-2 1-3 3-3 4h3v7h-7v-6Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M2 11c0-3 2-6 6-7v3c-2 1-3 3-3 4h3v7H0v-6Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-600">&ldquo;{quote}&rdquo;</p>
    </div>
  )
}

