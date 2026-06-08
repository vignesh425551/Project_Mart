import Container from './Container'
import { CONTACT_EMAIL, CONTACT_HREF } from '../data/site'

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <a href={href} className="text-sm font-medium text-slate-400 transition-colors hover:text-white">
    {label}
  </a>
)

const Logo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L2 7l10 5 10-5-10-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
    <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10 bg-ink-950/60">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" aria-hidden="true" />
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                <Logo className="h-4.5 w-4.5" />
              </span>
              <p className="text-sm font-extrabold text-white">FYP Mentorship</p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Guidance for AI/ML, Computer Vision, Web Development, and Data Science final-year projects.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-bold text-white">Contact</p>
            <a href={CONTACT_HREF} className="block text-sm text-slate-400 transition-colors hover:text-white">
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-bold text-white">Explore</p>
            <div className="flex flex-col gap-2.5">
              <FooterLink href="#domains" label="Domains" />
              <FooterLink href="#projects" label="Demo Projects" />
              <FooterLink href="#pricing" label="Pricing" />
              <FooterLink href="#faq" label="FAQ" />
              <FooterLink href="#contact" label="Contact" />
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-bold text-white">Ready to start?</p>
            <p className="text-sm text-slate-400">Book a free consultation and get a structured plan for your project.</p>
            <a
              href={CONTACT_HREF}
              className="inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-brand-600 to-accent-500 px-5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(79,70,229,0.7)] transition-transform hover:-translate-y-0.5"
            >
              Email a Mentor
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium text-slate-500">
            © {new Date().getFullYear()} FYP Mentorship. All rights reserved.
          </p>
          <p className="text-xs font-medium text-slate-500">Built for students, by mentors who care.</p>
        </div>
      </Container>
    </footer>
  )
}
