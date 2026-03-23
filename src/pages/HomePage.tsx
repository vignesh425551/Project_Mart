import { useEffect, useState, type ReactNode } from 'react'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import Footer from '../components/Footer'
import { DomainCard, DemoProjectCard, FeatureCard, TestimonialCard } from '../components/Cards'
import Modal from '../components/Modal'

function IconSparkle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l1.2 5.1L18 8.3l-4.8 1.2L12 15l-1.2-5.5L6 8.3l4.8-1.2L12 2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M4 14l.7 2.8L7.5 18l-2.8.7L4 21l-.7-2.3L.5 18l2.8-1.2L4 14Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconAI({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 8h8v8H8V8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M6 12H4M20 12h-2M12 6V4M12 20v-2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10 12l1.1 1.1L14 10.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconVision({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2.2 12s3.2-7 9.8-7 9.8 7 9.8 7-3.2 7-9.8 7-9.8-7-9.8-7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function IconCode({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 18 3 12l6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconData({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 6c0-1.1 3.6-2 8-2s8 .9 8 2-3.6 2-8 2-8-.9-8-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4 6v6c0 1.1 3.6 2 8 2s8-.9 8-2V6"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4 12v6c0 1.1 3.6 2 8 2s8-.9 8-2v-6"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function CodeVisual() {
  return (
    <div className="relative hidden min-h-[420px] w-full items-center lg:flex">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-indigo-600/10 via-cyan-500/10 to-transparent blur-[1px]" />
      <div className="relative w-full rounded-[2rem] border border-white/70 bg-white/60 p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-indigo-600/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-400/70" />
          </div>
          <span className="text-xs font-semibold text-slate-500">mentorship.ts</span>
        </div>

        <pre className="mt-5 overflow-auto rounded-2xl bg-gradient-to-b from-slate-50 to-white p-4 text-xs leading-relaxed ring-1 ring-slate-200">
{`type Mentorship = {
  explain: "why, not just what"
  review: "your progress"
  prepare: "viva & interviews"
}

const mentorship: Mentorship = { explain: "why", review: "daily", prepare: "weekly" }`}
        </pre>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="rounded-2xl bg-indigo-600/10 p-3 ring-1 ring-indigo-600/20">
            <p className="text-xs font-bold text-indigo-700">Idea</p>
            <p className="mt-1 text-xs font-medium text-slate-600">Clear plan</p>
          </div>
          <div className="rounded-2xl bg-cyan-500/10 p-3 ring-1 ring-cyan-500/20">
            <p className="text-xs font-bold text-cyan-700">Build</p>
            <p className="mt-1 text-xs font-medium text-slate-600">Guided steps</p>
          </div>
          <div className="rounded-2xl bg-indigo-600/10 p-3 ring-1 ring-indigo-600/20">
            <p className="text-xs font-bold text-indigo-700">Explain</p>
            <p className="mt-1 text-xs font-medium text-slate-600">Confidence</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-sm font-bold text-indigo-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-slate-600">{description}</p>
      ) : null}
    </div>
  )
}

function DemoThumbnail({ imageUrl, alt }: { imageUrl: string; alt: string }) {
  return (
    <img src={imageUrl} alt={alt} className="h-44 w-full object-cover" loading="lazy" />
  )
}

function StepIcon({ icon }: { icon: ReactNode }) {
  return (
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-indigo-600/10 text-indigo-700 ring-1 ring-indigo-600/20">
      {icon}
    </div>
  )
}

function ImageGallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [images])

  if (images.length === 0) return null

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setIndex((i) => (i + 1) % images.length)

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white">
        <img
          src={images[index]}
          alt={`Demo screenshot ${index + 1}`}
          className="h-[26rem] w-full object-contain bg-white"
          loading="lazy"
        />

        {images.length > 1 ? (
          <>
            <button
              type="button"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-slate-800 shadow-sm hover:bg-white"
              onClick={prev}
              aria-label="Previous image"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M14 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-slate-800 shadow-sm hover:bg-white"
              onClick={next}
              aria-label="Next image"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M10 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
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
                i === index ? 'border-indigo-600/60' : 'border-white/60 hover:border-white/90',
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

export default function HomePage() {
  const contactEmail = 'sriven425551@gmail.com'
  const contactEmailHref = `mailto:${contactEmail}?subject=FYP%20Mentorship%20Inquiry&body=Hi%20FYP%20Mentorship%2C%0A%0AI%20want%20help%20with%20my%20final%20year%20project.%0A%0ADomain%3A%20%0ATimeline%3A%20%0AThank%20you.`
  const consultationEmailHref = `mailto:${contactEmail}?subject=Free%20Consultation%20Booking&body=Hi%20FYP%20Mentorship%2C%0A%0AI%20want%20to%20book%20a%20free%20consultation.%0A%0ADomain%3A%20%0ATimeline%3A%20%0AThank%20you.`

  const domainCards = [
    {
      title: 'AI/ML',
      description: 'Chatbots, RAG, prediction systems.',
      href: '#projects',
      icon: <IconAI className="h-5 w-5" />,
    },
    {
      title: 'Computer Vision',
      description: 'ANPR and face detection projects.',
      href: '#projects',
      icon: <IconVision className="h-5 w-5" />,
    },
    {
      title: 'Web Development',
      description: 'Full-stack apps with clean architecture.',
      href: '#projects',
      icon: <IconCode className="h-5 w-5" />,
    },
    {
      title: 'Data Science',
      description: 'Dashboards, analytics, and insights.',
      href: '#projects',
      icon: <IconData className="h-5 w-5" />,
    },
  ]

  const aiChatbotImages = [
    '/demo/ai-chatbot/1-before-upload.png',
    '/demo/ai-chatbot/2-qa.png',
    '/demo/ai-chatbot/3-qa2.png',
    '/demo/ai-chatbot/4-ref-in-doc.png',
  ]

  const anprImages = [
    '/demo/anpr/1-anpr.png',
    '/demo/anpr/2-anpr.png',
  ]

  const doctorImages = [
    '/demo/doctor-assistant/1-flow.png',
    '/demo/doctor-assistant/2-booking.png',
  ]

  const resumeImages = [
    '/demo/resume-builder/1-login.png',
    '/demo/resume-builder/2-form.png',
  ]

  type DemoProject = {
    title: string
    techStack: string[]
    description: string
    thumbnail: ReactNode
    demoImages: string[]
    explanation: string
  }

  const demoProjects = [
    {
      title: 'AI Chatbot (LangChain + RAG)',
      techStack: ['Python', 'LangChain', 'RAG', 'Vector DB'],
      description: 'Build a context-aware chatbot with retrieval, citations, and evaluation.',
      thumbnail: (
        <DemoThumbnail imageUrl={aiChatbotImages[0]} alt="AI Chatbot demo screenshot" />
      ),
      demoImages: aiChatbotImages,
      explanation:
        'A retrieval-augmented chatbot that answers using your uploaded documents. You’ll implement chunking, embeddings + vector search, prompt design, and output evaluation so you can clearly explain your approach during viva and interviews.',
    },
    {
      title: 'Automatic Number Plate Recognition (OpenCV)',
      techStack: ['Python', 'OpenCV', 'OCR', 'Image Processing'],
      description: 'Detect plates, enhance images, and extract readable text reliably.',
      thumbnail: (
        <DemoThumbnail imageUrl={anprImages[0]} alt="ANPR demo screenshot" />
      ),
      demoImages: anprImages,
      explanation:
        'A pipeline-based ANPR demo: detect/locate the plate region, preprocess the crop (denoise/threshold), run OCR, and validate outputs. The mentoring focuses on data prep, parameter tuning, and robust explanation of failure cases.',
    },
    {
      title: 'Doctor Appointment Assistant',
      techStack: ['React', 'Node.js', 'NLP', 'Scheduling'],
      description: 'A guided booking flow that understands queries and schedules appointments.',
      thumbnail: (
        <DemoThumbnail imageUrl={doctorImages[0]} alt="Doctor Appointment Assistant demo screenshot" />
      ),
      demoImages: doctorImages,
      explanation:
        'An assistant that collects user intent, confirms doctor selection, and books an appointment using structured conversation steps. You’ll learn how to design the flow, handle user inputs safely, and explain the end-to-end logic.',
    },
    {
      title: 'Resume Builder (Web App)',
      techStack: ['React', 'Node.js', 'Resume Generator', 'Export/Print'],
      description: 'Generate a professional resume from form inputs and export/print it easily.',
      thumbnail: (
        <DemoThumbnail imageUrl={resumeImages[1]} alt="Resume Builder demo screenshot" />
      ),
      demoImages: resumeImages,
      explanation:
        'A web-based resume builder that turns user inputs into a clean, readable resume layout. You’ll implement form validation, dynamic sections, and export/print-friendly formatting so your project is easy to demo and defend.',
    },
  ]

  const [activeProject, setActiveProject] = useState<DemoProject | null>(null)
  const [activeModal, setActiveModal] = useState<'demo' | 'details' | null>(null)

  const howSteps = [
    {
      title: 'Choose Domain',
      description: 'Pick AI/ML, CV, Web, or Data Science.',
      icon: <IconSparkle className="h-5 w-5" />,
    },
    {
      title: 'Get Project Idea',
      description: 'Receive a clear scope and plan.',
      icon: <IconAI className="h-5 w-5" />,
    },
    {
      title: 'Build with Guidance',
      description: 'Milestones, reviews, and feedback.',
      icon: <IconCode className="h-5 w-5" />,
    },
    {
      title: 'Complete & Explain',
      description: 'Documentation, viva prep, confidence.',
      icon: <IconData className="h-5 w-5" />,
    },
  ]

  const whyCards = [
    {
      title: 'Real understanding (not copy-paste)',
      description: 'We teach concepts so you can explain your project clearly.',
      icon: <IconSparkle className="h-5 w-5" />,
    },
    {
      title: 'Industry-level projects',
      description: 'Modern stacks, practical workflows, and measurable outcomes.',
      icon: <IconAI className="h-5 w-5" />,
    },
    {
      title: 'Viva & interview preparation',
      description: 'Answer frameworks, question practice, and presentation guidance.',
      icon: <IconData className="h-5 w-5" />,
    },
    {
      title: 'One-on-one mentorship',
      description: 'You get direct review and structured feedback each milestone.',
      icon: <IconCode className="h-5 w-5" />,
    },
  ]

  const testimonials = [
    {
      name: 'Aarav K.',
      role: 'Final year student',
      quote: 'My chatbot project finally made sense. The guidance helped me explain everything during the viva.',
    },
    {
      name: 'Meera S.',
      role: 'CS student',
      quote: 'The milestones and feedback were consistent. I learned how to design, not just build.',
    },
    {
      name: 'Rahul P.',
      role: 'AI/ML track',
      quote: 'They helped me structure the report and prepare answers. My demo was smooth and confident.',
    },
  ]

  return (
    <div id="top">
      <Navbar />

      <main>
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-cyan-500/7 to-white"
            aria-hidden="true"
          />
          <div
            className="absolute -top-24 right-[-140px] h-72 w-72 rounded-full bg-indigo-600/15 blur-2xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-28 left-[-160px] h-72 w-72 rounded-full bg-cyan-500/12 blur-2xl"
            aria-hidden="true"
          />

          <Container className="relative py-12 sm:py-16 lg:py-20">
            <div className="grid items-start gap-10 lg:items-center lg:grid-cols-2">
              <div>
                <div className="inline-flex items-center gap-2 rounded-2xl bg-white/70 px-4 py-2 ring-1 ring-white/70 backdrop-blur">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-indigo-600/10 text-indigo-700 ring-1 ring-indigo-600/20">
                    <IconSparkle className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-semibold text-slate-700">
                    Final Year Project Mentorship
                  </p>
                </div>

                <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                  Build Industry-Level Final Year Projects with Expert Guidance
                </h1>

                <p className="mt-4 text-base font-semibold text-slate-600">
                  AI | ML | Web Development | Real-world projects
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button href="#projects" variant="primary">
                    View Projects
                  </Button>
                  <Button
                    href={contactEmailHref}
                    variant="secondary"
                  >
                    <span className="leading-tight">Contact on Email</span>
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {['Mentor reviews', 'Milestones', 'Viva prep', 'Clean deliverables'].map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-white/70 backdrop-blur"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <CodeVisual />
              </div>
            </div>
          </Container>
        </section>

        <section id="domains" className="scroll-mt-24 py-14 sm:py-16">
          <Container>
            <SectionIntro
              eyebrow="Project Domains"
              title="Pick your domain. Build your project with confidence."
              description="Explore modern final-year project ideas across AI/ML, Computer Vision, Web Development, and Data Science."
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {domainCards.map((d) => (
                <DomainCard
                  key={d.title}
                  icon={d.icon}
                  title={d.title}
                  description={d.description}
                  href={d.href}
                />
              ))}
            </div>
          </Container>
        </section>

        <section id="projects" className="scroll-mt-24 py-14 sm:py-16">
          <Container>
            <SectionIntro
              eyebrow="Demo Projects"
              title="Clean, demo-ready projects you can explain (and defend)."
              description="Each demo includes a clear tech stack, a guided build path, and deliverables for your report and viva."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-2">
              {demoProjects.map((p) => (
                <DemoProjectCard
                  key={p.title}
                  title={p.title}
                  thumbnail={p.thumbnail}
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
              ))}
            </div>
          </Container>
        </section>

        <section id="how-it-works" className="scroll-mt-24 py-14 sm:py-16">
          <Container>
            <SectionIntro
              eyebrow="How It Works"
              title="A simple process that keeps you learning."
              description="You stay in control. We guide you step-by-step so your project becomes your own understanding."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {howSteps.map((s) => (
                <div
                  key={s.title}
                  className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-sm"
                >
                  <StepIcon icon={s.icon} />
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="why-us" className="scroll-mt-24 py-14 sm:py-16">
          <Container>
            <SectionIntro
              eyebrow="Why Choose Us"
              title="Mentorship that builds understanding and outcomes."
              description="Not done-for-you. We help you learn, build, and explain at an industry level."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-2">
              {whyCards.map((f) => (
                <FeatureCard key={f.title} title={f.title} description={f.description} icon={f.icon} />
              ))}
            </div>
          </Container>
        </section>

        <section id="testimonials" className="scroll-mt-24 py-14 sm:py-16">
          <Container>
            <SectionIntro
              eyebrow="Testimonials"
              title="Students describe it as guidance that actually clicks."
              description="Placeholder feedback until you replace with real student results."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {testimonials.map((t) => (
                <TestimonialCard key={t.name} name={t.name} role={t.role} quote={t.quote} />
              ))}
            </div>
          </Container>
        </section>

        <section id="contact" className="scroll-mt-24 py-14 sm:py-16">
          <Container>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-indigo-600/10 via-cyan-500/10 to-white p-8 shadow-sm sm:p-12">
              <div
                className="absolute -top-20 -right-24 h-56 w-56 rounded-full bg-indigo-600/15 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-cyan-500/12 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  <p className="text-sm font-bold text-indigo-700">Final year projects, made clear</p>
                  <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                    Start Your Project Today
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    Book a consultation and get a structured plan for your domain, timeline, and deliverables.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <Button
                    href={consultationEmailHref}
                    variant="secondary"
                  >
                    Book Free Consultation
                  </Button>
                  <Button
                    href={consultationEmailHref}
                    variant="primary"
                  >
                    <span className="leading-tight">Email Now</span>
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <Modal
          open={activeModal === 'demo' && activeProject !== null}
          title={activeProject ? `Demo: ${activeProject.title}` : 'Demo'}
          onClose={() => {
            setActiveModal(null)
            setActiveProject(null)
          }}
        >
          {activeProject ? (
            <ImageGallery images={activeProject.demoImages} />
          ) : null}
        </Modal>

        <Modal
          open={activeModal === 'details' && activeProject !== null}
          title={activeProject ? `View Details: ${activeProject.title}` : 'View Details'}
          onClose={() => {
            setActiveModal(null)
            setActiveProject(null)
          }}
        >
          {activeProject ? (
            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold text-slate-900">Project Summary</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{activeProject.description}</p>
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900">Tech Stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeProject.techStack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-600/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900">Explanation</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{activeProject.explanation}</p>
              </div>

              <p className="text-xs font-medium text-slate-500">
                Tip: Use this explanation to structure your report + viva answers.
              </p>
            </div>
          ) : null}
        </Modal>

        <Footer />
      </main>
    </div>
  )
}

