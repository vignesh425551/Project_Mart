import { useEffect, useMemo, useState } from 'react'
import Container from './Container'
import Button from './Button'
import ThemeToggle from './ThemeToggle'
import { useTheme } from '../hooks/useTheme'
import { CONSULTATION_HREF, CONTACT_HREF, CONTACT_EMAIL } from '../data/site'

type NavItem = { label: string; href: string }

const Logo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L2 7l10 5 10-5-10-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
    <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
  </svg>
)

export default function Navbar() {
  const items: NavItem[] = useMemo(
    () => [
      { label: 'Domains', href: '#domains' },
      { label: 'Projects', href: '#projects' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
    [],
  )

  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('')
  const [progress, setProgress] = useState(0)
  const { theme, toggleTheme } = useTheme()

  // Escape closes the mobile menu
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  // Scrolled state + reading-progress bar
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the section currently in view
  useEffect(() => {
    const ids = items.map((i) => i.href.slice(1))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [items])

  const onNavigate = () => setOpen(false)

  return (
    <header
      className={[
        'sticky top-0 z-50 transition-colors duration-300',
        scrolled ? 'glass-strong border-b border-white/10' : 'border-b border-transparent',
      ].join(' ')}
    >
      {/* Reading progress */}
      <div
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-brand-500 via-accent-400 to-magenta-400"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden="true"
      />

      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#top" className="group flex items-center gap-2.5" onClick={onNavigate}>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-[0_8px_24px_-8px_rgba(79,70,229,0.8)] transition-transform group-hover:scale-105">
            <Logo className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold tracking-tight text-white">FYP Mentorship</span>
            <span className="block text-[11px] font-medium text-slate-400">Expert guidance, real learning</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {items.map((item) => {
            const isActive = active === item.href
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className={[
                  'relative rounded-lg px-3 py-2 text-sm font-semibold transition-colors',
                  isActive ? 'text-white' : 'text-slate-300 hover:text-white',
                ].join(' ')}
              >
                {item.label}
                {isActive ? (
                  <span className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand-400 to-accent-400" />
                ) : null}
              </a>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <a
            href={CONTACT_HREF}
            title={`Email us: ${CONTACT_EMAIL}`}
            aria-label={`Email us at ${CONTACT_EMAIL}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl glass text-slate-200 transition-colors hover:border-brand-400/40 hover:text-white"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
              <path d="M4 7l8 5.5L20 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <Button href={CONSULTATION_HREF} size="sm" variant="primary">
            Book Free Call
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl glass text-slate-200"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d={open ? 'M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </Container>

      {open ? (
        <div className="lg:hidden">
          <div className="glass-strong border-t border-white/10">
            <Container className="py-3">
              <div className="flex flex-col gap-1">
                {items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={onNavigate}
                    className="rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-200 hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={CONTACT_HREF}
                  onClick={onNavigate}
                  className="mt-1 flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-200 hover:bg-white/5 hover:text-white"
                >
                  <svg className="h-5 w-5 text-brand-300" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M4 7l8 5.5L20 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="truncate">{CONTACT_EMAIL}</span>
                </a>
                <Button href={CONSULTATION_HREF} size="sm" variant="primary" className="mt-2">
                  Book Free Call
                </Button>
              </div>
            </Container>
          </div>
        </div>
      ) : null}
    </header>
  )
}
