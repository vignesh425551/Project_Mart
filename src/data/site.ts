// ----------------------------------------------------------------------------
// Central site content. Edit copy, projects, pricing, FAQ, etc. here.
// Keeping data out of HomePage.tsx keeps the markup clean and easy to maintain.
// ----------------------------------------------------------------------------

export const CONTACT_EMAIL = 'sriven425551@gmail.com'

export function mailtoHref(subject: string, body: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export const CONTACT_HREF = mailtoHref(
  'FYP Mentorship Inquiry',
  'Hi FYP Mentorship,\n\nI want help with my final year project.\n\nDomain: \nTimeline: \n\nThank you.',
)

export const CONSULTATION_HREF = mailtoHref(
  'Free Consultation Booking',
  'Hi FYP Mentorship,\n\nI want to book a free consultation.\n\nDomain: \nTimeline: \n\nThank you.',
)

export type IconName = 'sparkle' | 'ai' | 'vision' | 'code' | 'data'

export type DomainCardData = {
  title: string
  description: string
  href: string
  icon: IconName
}

export const domainCards: DomainCardData[] = [
  { title: 'AI / ML', description: 'Chatbots, RAG pipelines, and prediction systems.', href: '#projects', icon: 'ai' },
  { title: 'Computer Vision', description: 'ANPR, detection, and image-processing projects.', href: '#projects', icon: 'vision' },
  { title: 'Web Development', description: 'Full-stack apps with clean, modern architecture.', href: '#projects', icon: 'code' },
  { title: 'Data Science', description: 'Dashboards, analytics, and actionable insights.', href: '#projects', icon: 'data' },
]

export type DemoProjectData = {
  title: string
  techStack: string[]
  description: string
  thumbnail: string
  demoImages: string[]
  explanation: string
}

export const demoProjects: DemoProjectData[] = [
  {
    title: 'AI Chatbot (LangChain + RAG)',
    techStack: ['Python', 'LangChain', 'RAG', 'Vector DB'],
    description: 'Build a context-aware chatbot with retrieval, citations, and evaluation.',
    thumbnail: '/demo/ai-chatbot/1-before-upload.png',
    demoImages: [
      '/demo/ai-chatbot/1-before-upload.png',
      '/demo/ai-chatbot/2-qa.png',
      '/demo/ai-chatbot/3-qa2.png',
      '/demo/ai-chatbot/4-ref-in-doc.png',
    ],
    explanation:
      'A retrieval-augmented chatbot that answers using your uploaded documents. You’ll implement chunking, embeddings + vector search, prompt design, and output evaluation so you can clearly explain your approach during viva and interviews.',
  },
  {
    title: 'Automatic Number Plate Recognition',
    techStack: ['Python', 'OpenCV', 'OCR', 'Image Processing'],
    description: 'Detect plates, enhance images, and extract readable text reliably.',
    thumbnail: '/demo/anpr/1-anpr.png',
    demoImages: ['/demo/anpr/1-anpr.png', '/demo/anpr/2-anpr.png'],
    explanation:
      'A pipeline-based ANPR demo: detect/locate the plate region, preprocess the crop (denoise/threshold), run OCR, and validate outputs. The mentoring focuses on data prep, parameter tuning, and robust explanation of failure cases.',
  },
  {
    title: 'Doctor Appointment Assistant',
    techStack: ['React', 'Node.js', 'NLP', 'Scheduling'],
    description: 'A guided booking flow that understands queries and schedules appointments.',
    thumbnail: '/demo/doctor-assistant/1-flow.png',
    demoImages: ['/demo/doctor-assistant/1-flow.png', '/demo/doctor-assistant/2-booking.png'],
    explanation:
      'An assistant that collects user intent, confirms doctor selection, and books an appointment using structured conversation steps. You’ll learn how to design the flow, handle user inputs safely, and explain the end-to-end logic.',
  },
  {
    title: 'Resume Builder (Web App)',
    techStack: ['React', 'Node.js', 'PDF Export', 'Validation'],
    description: 'Generate a professional resume from form inputs and export/print it easily.',
    thumbnail: '/demo/resume-builder/2-form.png',
    demoImages: ['/demo/resume-builder/1-login.png', '/demo/resume-builder/2-form.png'],
    explanation:
      'A web-based resume builder that turns user inputs into a clean, readable resume layout. You’ll implement form validation, dynamic sections, and export/print-friendly formatting so your project is easy to demo and defend.',
  },
]

export type TechItem = { name: string; icon: string }

// Simple brand-mark glyphs (kept as inline-renderable names → see Marquee.tsx).
export const techStack: TechItem[] = [
  { name: 'Python', icon: 'python' },
  { name: 'React', icon: 'react' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'OpenCV', icon: 'opencv' },
  { name: 'LangChain', icon: 'langchain' },
  { name: 'Node.js', icon: 'node' },
  { name: 'TensorFlow', icon: 'tensorflow' },
  { name: 'PyTorch', icon: 'pytorch' },
  { name: 'PostgreSQL', icon: 'postgres' },
  { name: 'Docker', icon: 'docker' },
]

export type StatData = { value: number; suffix: string; label: string }

export const stats: StatData[] = [
  { value: 200, suffix: '+', label: 'Students mentored' },
  { value: 50, suffix: '+', label: 'Projects delivered' },
  { value: 95, suffix: '%', label: 'Viva pass rate' },
  { value: 4.9, suffix: '/5', label: 'Average rating' },
]

export type StepData = { title: string; description: string; icon: IconName }

export const howSteps: StepData[] = [
  { title: 'Choose Domain', description: 'Pick AI/ML, CV, Web, or Data Science.', icon: 'sparkle' },
  { title: 'Get Project Idea', description: 'Receive a clear scope and plan.', icon: 'ai' },
  { title: 'Build with Guidance', description: 'Milestones, reviews, and feedback.', icon: 'code' },
  { title: 'Complete & Explain', description: 'Documentation, viva prep, confidence.', icon: 'data' },
]

export type FeatureData = { title: string; description: string; icon: IconName }

export const whyCards: FeatureData[] = [
  { title: 'Real understanding (not copy-paste)', description: 'We teach concepts so you can explain your project clearly.', icon: 'sparkle' },
  { title: 'Industry-level projects', description: 'Modern stacks, practical workflows, and measurable outcomes.', icon: 'ai' },
  { title: 'Viva & interview preparation', description: 'Answer frameworks, question practice, and presentation guidance.', icon: 'data' },
  { title: 'One-on-one mentorship', description: 'Direct review and structured feedback at every milestone.', icon: 'code' },
]

export type TestimonialData = { name: string; role: string; quote: string; rating: number }

export const testimonials: TestimonialData[] = [
  { name: 'Aarav K.', role: 'Final year student', quote: 'My chatbot project finally made sense. The guidance helped me explain everything during the viva.', rating: 5 },
  { name: 'Meera S.', role: 'CS student', quote: 'The milestones and feedback were consistent. I learned how to design, not just build.', rating: 5 },
  { name: 'Rahul P.', role: 'AI/ML track', quote: 'They helped me structure the report and prepare answers. My demo was smooth and confident.', rating: 5 },
]

export type PricingTier = {
  name: string
  price: string
  cadence: string
  tagline: string
  features: string[]
  cta: string
  href: string
  highlighted?: boolean
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: 'Free',
    cadence: 'consultation',
    tagline: 'Get clarity before you commit.',
    features: ['30-min scoping call', 'Domain & idea suggestions', 'Feasibility check', 'Rough timeline'],
    cta: 'Book Free Call',
    href: CONSULTATION_HREF,
  },
  {
    name: 'Guided',
    price: 'Custom',
    cadence: 'per project',
    tagline: 'Most popular for final-year students.',
    features: [
      'Everything in Starter',
      'Weekly 1:1 mentorship',
      'Milestone reviews & feedback',
      'Code + report guidance',
      'Viva & interview prep',
    ],
    cta: 'Start This Plan',
    href: CONTACT_HREF,
    highlighted: true,
  },
  {
    name: 'Pro',
    price: 'Custom',
    cadence: 'per project',
    tagline: 'For ambitious, publication-ready work.',
    features: [
      'Everything in Guided',
      'Advanced architecture review',
      'Research-paper support',
      'Deployment guidance',
      'Priority response',
    ],
    cta: 'Talk to a Mentor',
    href: CONTACT_HREF,
  },
]

export type FaqItem = { question: string; answer: string }

export const faqs: FaqItem[] = [
  {
    question: 'Do you build the project for me?',
    answer:
      'No — we mentor you so the work is genuinely yours. We guide architecture, review code, and prepare you to defend every decision in your viva. You learn, you build, you own it.',
  },
  {
    question: 'Which domains do you support?',
    answer:
      'AI/ML (chatbots, RAG, prediction), Computer Vision (detection, ANPR, OCR), Web Development (full-stack apps), and Data Science (analytics, dashboards). If you’re unsure, the free consultation helps you choose.',
  },
  {
    question: 'How does the mentorship actually work?',
    answer:
      'We agree on a scope and timeline, then meet for weekly 1:1 sessions with milestone reviews in between. You get feedback on code, documentation, and your viva/interview answers.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Most final-year projects run 6–12 weeks depending on complexity. We map milestones to your college deadline so you’re never rushing at the end.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Book a free consultation using the form or email button. Tell us your domain and timeline, and we’ll send back a clear plan.',
  },
]
