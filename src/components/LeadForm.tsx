import { useState, type FormEvent } from 'react'
import Button from './Button'
import { mailtoHref } from '../data/site'

type Fields = { name: string; email: string; domain: string; message: string }
type Errors = Partial<Record<keyof Fields, string>>

const DOMAINS = ['AI / ML', 'Computer Vision', 'Web Development', 'Data Science', 'Not sure yet']

const inputClass =
  'w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-brand-400/60 focus:ring-2 focus:ring-brand-500/30'

const labelClass = 'mb-1.5 block text-sm font-semibold text-slate-200'

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default function LeadForm() {
  const [fields, setFields] = useState<Fields>({ name: '', email: '', domain: DOMAINS[0], message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [key]: e.target.value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const validate = (): Errors => {
    const next: Errors = {}
    if (!fields.name.trim()) next.name = 'Please enter your name.'
    if (!fields.email.trim()) next.email = 'Please enter your email.'
    else if (!isValidEmail(fields.email)) next.email = 'Please enter a valid email.'
    if (!fields.message.trim()) next.message = 'Tell us a little about your project.'
    return next
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const found = validate()
    if (Object.keys(found).length > 0) {
      setErrors(found)
      return
    }

    const body = `Hi FYP Mentorship,\n\nName: ${fields.name}\nEmail: ${fields.email}\nDomain: ${fields.domain}\n\n${fields.message}\n\nThank you.`
    window.location.href = mailtoHref(`FYP Inquiry — ${fields.name}`, body)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="ring-gradient flex flex-col items-center justify-center rounded-3xl glass-strong p-10 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-white">
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="mt-5 text-xl font-bold text-white">Your email is ready to send</h3>
        <p className="mt-2 max-w-sm text-sm text-slate-400">
          We opened your email app with the details pre-filled. Just hit send and we’ll reply with a plan.
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-semibold text-brand-300 hover:text-white"
          onClick={() => setSubmitted(false)}
        >
          ← Edit details
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="ring-gradient rounded-3xl glass-strong p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="lf-name">Name</label>
          <input id="lf-name" className={inputClass} value={fields.name} onChange={update('name')} placeholder="Your name" aria-invalid={!!errors.name} />
          {errors.name ? <p className="mt-1.5 text-xs font-medium text-rose-400">{errors.name}</p> : null}
        </div>

        <div>
          <label className={labelClass} htmlFor="lf-email">Email</label>
          <input id="lf-email" type="email" className={inputClass} value={fields.email} onChange={update('email')} placeholder="you@example.com" aria-invalid={!!errors.email} />
          {errors.email ? <p className="mt-1.5 text-xs font-medium text-rose-400">{errors.email}</p> : null}
        </div>
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="lf-domain">Domain</label>
        <select id="lf-domain" className={inputClass} value={fields.domain} onChange={update('domain')}>
          {DOMAINS.map((d) => (
            <option key={d} value={d} className="bg-ink-900">
              {d}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="lf-message">Tell us about your project</label>
        <textarea
          id="lf-message"
          rows={4}
          className={inputClass}
          value={fields.message}
          onChange={update('message')}
          placeholder="What do you want to build? Any deadline?"
          aria-invalid={!!errors.message}
        />
        {errors.message ? <p className="mt-1.5 text-xs font-medium text-rose-400">{errors.message}</p> : null}
      </div>

      <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-xs text-slate-500">We’ll only use your details to reply about mentorship.</p>
        <Button type="submit" variant="primary" className="w-full sm:w-auto">
          Send Inquiry
        </Button>
      </div>
    </form>
  )
}
