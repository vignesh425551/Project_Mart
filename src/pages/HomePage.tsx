import { useState } from 'react'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import Reveal from '../components/Reveal'
import SectionIntro from '../components/SectionIntro'
import Stats from '../components/Stats'
import Marquee from '../components/Marquee'
import Particles from '../components/Particles'
import { useTypewriter } from '../hooks/useTypewriter'
import Pricing from '../components/Pricing'
import Faq from '../components/Faq'
import LeadForm from '../components/LeadForm'
import { Icon } from '../components/Icons'
import { DomainCard, DemoProjectCard, FeatureCard, TestimonialCard } from '../components/Cards'
import {
  CONTACT_HREF,
  CONSULTATION_HREF,
  domainCards,
  demoProjects,
  howSteps,
  whyCards,
  testimonials,
  type DemoProjectData,
  type IconName,
} from '../data/site'

/* -------------------------------------------------------------------------- */
/* Hero visual                                                                */
/* -------------------------------------------------------------------------- */

function CodeVisual() {
  return (
    <div className="relative hidden min-h-[420px] w-full items-center lg:flex">
      <div className="absolute -inset-8 animate-pulse-glow rounded-[2.5rem] bg-gradient-to-br from-brand-600/30 via-accent-500/20 to-magenta-500/20 blur-2xl" />
      <div className="ring-gradient relative w-full rounded-[2rem] glass-strong p-6 shadow-2xl">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          </div>
          <span className="text-xs font-semibold text-slate-400">mentorship.ts</span>
        </div>

        <pre className="mt-5 overflow-auto rounded-2xl bg-ink-950/70 p-4 text-xs leading-relaxed text-slate-300 ring-1 ring-white/10">
          <code>
            <span className="text-magenta-400">type</span>{' '}
            <span className="text-accent-400">Mentorship</span> = {'{'}
            {'\n'}  explain: <span className="text-emerald-400">"why, not just what"</span>
            {'\n'}  review: <span className="text-emerald-400">"your progress"</span>
            {'\n'}  prepare: <span className="text-emerald-400">"viva &amp; interviews"</span>
            {'\n'}
            {'}'}
            {'\n\n'}
            <span className="text-magenta-400">const</span>{' '}
            <span className="text-brand-300">you</span> = <span className="text-accent-400">ship</span>(project)
          </code>
        </pre>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { label: 'Idea', sub: 'Clear plan' },
            { label: 'Build', sub: 'Guided steps' },
            { label: 'Explain', sub: 'Confidence' },
          ].map((b) => (
            <div key={b.label} className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
              <p className="text-xs font-bold text-brand-300">{b.label}</p>
              <p className="mt-1 text-xs font-medium text-slate-400">{b.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function DemoThumbnail({ imageUrl, alt }: { imageUrl: string; alt: string }) {
  return <img src={imageUrl} alt={alt} className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
}

function StepIcon({ name }: { name: IconName }) {
  return (
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600/25 to-accent-500/15 text-brand-200 ring-1 ring-brand-400/25">
      <Icon name={name} className="h-5 w-5" />
    </div>
  )
}

function ImageGallery({ images }: { images: string[] }) {
  // Remounted via `key` when the active project changes, so index always starts at 0.
  const [index, setIndex] = useState(0)

  if (images.length === 0) return null

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setIndex((i) => (i + 1) % images.length)

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-ink-950">
        <img
          src={images[index]}
          alt={`Demo screenshot ${index + 1}`}
          className="h-[26rem] w-full object-contain"
          loading="lazy"
        />

        {images.length > 1 ? (
          <>
            <button
              type="button"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full glass-strong p-2 text-white transition hover:border-brand-400/50"
              onClick={prev}
              aria-label="Previous image"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M14 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full glass-strong p-2 text-white transition hover:border-brand-400/50"
              onClick={next}
              aria-label="Next image"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M10 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full glass px-3 py-1 text-xs font-semibold text-white">
              {index + 1} / {images.length}
            </span>
          </>
        ) : null}
      </div>

      {images.length > 1 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Show image ${i + 1}`}
              className={[
                'h-16 w-20 overflow-hidden rounded-xl border transition',
                i === index ? 'border-brand-400/70 ring-2 ring-brand-500/30' : 'border-white/10 hover:border-white/30',
              ].join(' ')}
              onClick={() => setIndex(i)}
            >
              <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function HomePage() {
  const [activeProject, setActiveProject] = useState<DemoProjectData | null>(null)
  const [activeModal, setActiveModal] = useState<'demo' | 'details' | null>(null)

  const closeModal = () => {
    setActiveModal(null)
    setActiveProject(null)
  }

  const { text: typedWord } = useTypewriter(
    ['AI / ML', 'Computer Vision', 'Web Development', 'Data Science'],
    { typeSpeed: 85, deleteSpeed: 40, pause: 1400 },
  )

  return (
    <div id="top">
      <Navbar />

      <main>
        {/* ---------------------------------------------------------------- Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute -top-32 right-[-160px] h-96 w-96 animate-float rounded-full bg-brand-600/20 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-40 left-[-180px] h-96 w-96 animate-float-slow rounded-full bg-accent-500/15 blur-3xl" aria-hidden="true" />
          <Particles />

          <Container className="relative py-16 sm:py-20 lg:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                    <Icon name="sparkle" className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-semibold text-slate-200">Final Year Project Mentorship</p>
                </div>

                <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Build <span className="text-gradient">industry-level</span> final year projects in
                  <span className="mt-2 flex min-h-[1.15em] items-center">
                    <span className="text-gradient">{typedWord}</span>
                    <span className="ml-1 inline-block h-[0.95em] w-[3px] animate-pulse rounded-full bg-accent-400 align-middle" aria-hidden="true" />
                  </span>
                </h1>

                <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
                  One-on-one mentorship across AI/ML, Computer Vision, Web Development, and Data Science — so you don’t just submit a project, you understand and defend it.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button href="#projects" variant="primary">View Projects</Button>
                  <Button href={CONTACT_HREF} variant="secondary">Contact a Mentor</Button>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {['Mentor reviews', 'Milestones', 'Viva prep', 'Clean deliverables'].map((t) => (
                    <span key={t} className="rounded-full glass px-3 py-1 text-xs font-semibold text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={120}>
                <CodeVisual />
              </Reveal>
            </div>
          </Container>
        </section>

        {/* -------------------------------------------------------------- Marquee */}
        <section className="border-y border-white/5 py-6">
          <Container>
            <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Tools &amp; frameworks we mentor in
            </p>
            <Marquee />
          </Container>
        </section>

        {/* ---------------------------------------------------------------- Stats */}
        <section className="py-12 sm:py-16">
          <Container>
            <Reveal>
              <Stats />
            </Reveal>
          </Container>
        </section>

        {/* -------------------------------------------------------------- Domains */}
        <section id="domains" className="scroll-mt-24 py-16 sm:py-20">
          <Container>
            <Reveal>
              <SectionIntro
                eyebrow="Project Domains"
                title="Pick your domain. Build with confidence."
                description="Explore modern final-year project ideas across AI/ML, Computer Vision, Web Development, and Data Science."
              />
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {domainCards.map((d, i) => (
                <Reveal key={d.title} delay={i * 80}>
                  <DomainCard icon={<Icon name={d.icon} className="h-5 w-5" />} title={d.title} description={d.description} href={d.href} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ------------------------------------------------------------- Projects */}
        <section id="projects" className="scroll-mt-24 py-16 sm:py-20">
          <Container>
            <Reveal>
              <SectionIntro
                eyebrow="Demo Projects"
                title="Clean, demo-ready projects you can explain — and defend."
                description="Each demo includes a clear tech stack, a guided build path, and deliverables for your report and viva."
              />
            </Reveal>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {demoProjects.map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <DemoProjectCard
                    title={p.title}
                    thumbnail={<DemoThumbnail imageUrl={p.thumbnail} alt={`${p.title} screenshot`} />}
                    techStack={p.techStack}
                    description={p.description}
                    onViewDemo={() => {
                      setActiveProject(p)
                      setActiveModal('demo')
                    }}
                    onViewDetails={() => {
                      setActiveProject(p)
                      setActiveModal('details')
                    }}
                  />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* --------------------------------------------------------- How it works */}
        <section id="how-it-works" className="scroll-mt-24 py-16 sm:py-20">
          <Container>
            <Reveal>
              <SectionIntro
                eyebrow="How It Works"
                title="A simple process that keeps you learning."
                description="You stay in control. We guide you step-by-step so the project becomes your own understanding."
              />
            </Reveal>

            <div className="relative mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {howSteps.map((s, i) => (
                <Reveal key={s.title} delay={i * 90}>
                  <div className="ring-gradient relative h-full rounded-3xl glass p-6">
                    <div className="flex items-center justify-between">
                      <StepIcon name={s.icon} />
                      <span className="text-3xl font-extrabold text-white/10">0{i + 1}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ------------------------------------------------------------- Why us */}
        <section id="why-us" className="scroll-mt-24 py-16 sm:py-20">
          <Container>
            <Reveal>
              <SectionIntro
                eyebrow="Why Choose Us"
                title="Mentorship that builds understanding and outcomes."
                description="Not done-for-you. We help you learn, build, and explain at an industry level."
              />
            </Reveal>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {whyCards.map((f, i) => (
                <Reveal key={f.title} delay={i * 80}>
                  <FeatureCard title={f.title} description={f.description} icon={<Icon name={f.icon} className="h-5 w-5" />} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ------------------------------------------------------------- Pricing */}
        <section id="pricing" className="scroll-mt-24 py-16 sm:py-20">
          <Container>
            <Reveal>
              <SectionIntro
                align="center"
                eyebrow="Pricing"
                title="Simple plans for every stage."
                description="Start with a free consultation. Pick a plan only when you’re confident it’s the right fit."
              />
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-12">
                <Pricing />
              </div>
            </Reveal>
          </Container>
        </section>

        {/* --------------------------------------------------------- Testimonials */}
        <section id="testimonials" className="scroll-mt-24 py-16 sm:py-20">
          <Container>
            <Reveal>
              <SectionIntro
                eyebrow="Testimonials"
                title="Students describe it as guidance that actually clicks."
                description="Placeholder feedback until you replace it with real student results."
              />
            </Reveal>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 90}>
                  <TestimonialCard name={t.name} role={t.role} quote={t.quote} rating={t.rating} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ----------------------------------------------------------------- FAQ */}
        <section id="faq" className="scroll-mt-24 py-16 sm:py-20">
          <Container>
            <Reveal>
              <SectionIntro
                align="center"
                eyebrow="FAQ"
                title="Questions? We’ve got answers."
                description="Everything you need to know before reaching out."
              />
            </Reveal>
            <Reveal delay={100}>
              <Faq />
            </Reveal>
          </Container>
        </section>

        {/* ------------------------------------------------------------- Contact */}
        <section id="contact" className="scroll-mt-24 py-16 sm:py-24">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <Reveal>
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-300 ring-1 ring-brand-400/20">
                    Get Started
                  </span>
                  <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                    Start your project <span className="text-gradient">today.</span>
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-slate-400">
                    Send us a quick note about your domain and timeline. We’ll reply with a clear, structured plan for your final-year project.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button href={CONSULTATION_HREF} variant="secondary">Book Free Consultation</Button>
                    <Button href={CONTACT_HREF} variant="ghost">Or email directly →</Button>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <LeadForm />
              </Reveal>
            </div>
          </Container>
        </section>

        {/* ---------------------------------------------------------------- Modals */}
        <Modal
          open={activeModal === 'demo' && activeProject !== null}
          title={activeProject ? `Demo: ${activeProject.title}` : 'Demo'}
          onClose={closeModal}
        >
          {activeProject ? <ImageGallery key={activeProject.title} images={activeProject.demoImages} /> : null}
        </Modal>

        <Modal
          open={activeModal === 'details' && activeProject !== null}
          title={activeProject ? `Details: ${activeProject.title}` : 'View Details'}
          onClose={closeModal}
        >
          {activeProject ? (
            <div className="space-y-5">
              <div>
                <p className="text-sm font-bold text-white">Project Summary</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{activeProject.description}</p>
              </div>

              <div>
                <p className="text-sm font-bold text-white">Tech Stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeProject.techStack.map((t) => (
                    <span key={t} className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-200 ring-1 ring-brand-400/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-bold text-white">Explanation</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{activeProject.explanation}</p>
              </div>

              <div className="rounded-2xl bg-brand-500/5 p-4 ring-1 ring-brand-400/15">
                <p className="text-xs font-medium text-slate-400">
                  💡 Tip: Use this explanation to structure your report + viva answers.
                </p>
              </div>
            </div>
          ) : null}
        </Modal>
      </main>

      <Footer />
    </div>
  )
}
