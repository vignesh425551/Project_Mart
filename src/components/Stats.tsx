import { stats, type StatData } from '../data/site'
import { useCountUp } from '../hooks/useCountUp'

function StatItem({ stat }: { stat: StatData }) {
  const decimals = Number.isInteger(stat.value) ? 0 : 1
  const { ref, value } = useCountUp<HTMLParagraphElement>(stat.value, { decimals })
  const display = decimals ? value.toFixed(1) : Math.round(value).toString()

  return (
    <div className="ring-gradient relative rounded-3xl glass p-6 text-center">
      <p ref={ref} className="text-4xl font-extrabold tracking-tight text-gradient sm:text-5xl">
        {display}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-slate-400">{stat.label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <StatItem key={s.label} stat={s} />
      ))}
    </div>
  )
}
