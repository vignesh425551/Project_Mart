import Container from './Container'

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    className="text-sm font-semibold text-slate-600 hover:text-indigo-700"
  >
    {label}
  </a>
)

export default function Footer() {
  return (
    <footer className="border-t border-white/70 bg-white/60 backdrop-blur">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-bold text-slate-900">FYP Mentorship</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Guidance for AI/ML, Computer Vision, Web Development, and Data Science final-year projects.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-bold text-slate-900">Contact</p>
            <p className="text-sm text-slate-600">Email: sriven425551@gmail.com</p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-bold text-slate-900">Links</p>
            <div className="flex flex-col gap-2">
              <FooterLink href="#domains" label="Domains" />
              <FooterLink href="#projects" label="Demo Projects" />
              <FooterLink href="#how-it-works" label="How It Works" />
              <FooterLink href="#contact" label="Contact" />
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-bold text-slate-900">Get Updates</p>
            <p className="text-sm text-slate-600">
              Subscribe for project tips and mentorship openings.
            </p>
            <a
              href="https://example.com/subscribe"
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
            >
              Subscribe
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium text-slate-500">© {new Date().getFullYear()} FYP Mentorship. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://example.com/privacy" className="text-xs font-semibold text-slate-600 hover:text-indigo-700">Privacy</a>
            <a href="https://example.com/terms" className="text-xs font-semibold text-slate-600 hover:text-indigo-700">Terms</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

