import { useEffect, useMemo, useState } from 'react'
import Container from './Container'

const NavIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 2L2 7l10 5 10-5-10-5Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M2 17l10 5 10-5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <path
      d="M2 12l10 5 10-5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
)

type NavItem = {
  label: string
  href: string
}

export default function Navbar() {
  const items: NavItem[] = useMemo(
    () => [
      { label: 'Domains', href: '#domains' },
      { label: 'Demo Projects', href: '#projects' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Why Us', href: '#why-us' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
    [],
  )

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const onNavigate = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-sm">
            <NavIcon className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold text-slate-900">FYP Mentorship</span>
            <span className="block text-xs font-medium text-slate-500">Expert guidance, real learning</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="text-sm font-semibold text-slate-700 hover:text-indigo-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/70 bg-white/50 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-5 w-5 text-slate-800" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d={open ? 'M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'}
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </Container>

      {open ? (
        <div className="md:hidden">
          <div className="border-t border-white/60 bg-white/80 backdrop-blur">
            <Container className="py-3">
              <div className="flex flex-col gap-2">
                {items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={onNavigate}
                    className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-white/70"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </Container>
          </div>
        </div>
      ) : null}
    </header>
  )
}

