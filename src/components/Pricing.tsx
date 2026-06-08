import { pricingTiers, type PricingTier } from '../data/site'
import Button from './Button'

const Check = () => (
  <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function TierCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={[
        'ring-gradient relative flex h-full flex-col rounded-3xl p-7 transition-transform',
        tier.highlighted
          ? 'glass-strong lg:-translate-y-3 shadow-[0_30px_90px_-30px_rgba(79,70,229,0.6)]'
          : 'glass',
      ].join(' ')}
    >
      {tier.highlighted ? (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
          Most Popular
        </span>
      ) : null}

      <p className="text-sm font-bold uppercase tracking-wider text-brand-300">{tier.name}</p>
      <div className="mt-3 flex items-end gap-1.5">
        <span className="text-4xl font-extrabold tracking-tight text-white">{tier.price}</span>
        <span className="pb-1 text-sm font-medium text-slate-400">/ {tier.cadence}</span>
      </div>
      <p className="mt-2 text-sm text-slate-400">{tier.tagline}</p>

      <ul className="mt-6 flex-1 space-y-3">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
            <Check />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7">
        <Button
          href={tier.href}
          variant={tier.highlighted ? 'primary' : 'secondary'}
          className="w-full"
        >
          {tier.cta}
        </Button>
      </div>
    </div>
  )
}

export default function Pricing() {
  return (
    <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
      {pricingTiers.map((tier) => (
        <TierCard key={tier.name} tier={tier} />
      ))}
    </div>
  )
}
