// Decorative floating glow particles for the hero background. Purely visual.
const PARTICLES = [
  { left: '8%', top: '18%', size: 8, color: 'bg-brand-400', delay: '0s', anim: 'animate-float' },
  { left: '22%', top: '70%', size: 5, color: 'bg-accent-400', delay: '1.2s', anim: 'animate-float-slow' },
  { left: '40%', top: '12%', size: 6, color: 'bg-magenta-400', delay: '0.6s', anim: 'animate-float' },
  { left: '63%', top: '78%', size: 7, color: 'bg-brand-300', delay: '2s', anim: 'animate-float-slow' },
  { left: '78%', top: '24%', size: 5, color: 'bg-accent-400', delay: '0.3s', anim: 'animate-float' },
  { left: '90%', top: '60%', size: 9, color: 'bg-magenta-400', delay: '1.6s', anim: 'animate-float-slow' },
  { left: '52%', top: '50%', size: 4, color: 'bg-brand-400', delay: '0.9s', anim: 'animate-float' },
]

export default function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className={`absolute rounded-full ${p.color} ${p.anim} opacity-60 blur-[1px]`}
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            boxShadow: '0 0 12px 2px currentColor',
          }}
        />
      ))}
    </div>
  )
}
