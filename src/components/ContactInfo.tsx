import { useState } from 'react'
import { CONTACT_EMAIL, CONTACT_HREF } from '../data/site'

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 7l8 5.5L20 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/**
 * Visible, clickable, copyable contact email. Makes the address explicit so
 * users on devices without a configured mail client can still reach out.
 */
export default function ContactInfo() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable — the mailto link and visible text still work */
    }
  }

  return (
    <div className="ring-gradient rounded-2xl glass p-4 sm:p-5">
      <div className="flex items-center gap-4">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600/25 to-accent-500/15 text-brand-200 ring-1 ring-brand-400/25">
          <MailIcon className="h-5 w-5" />
        </span>

        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email us</p>
          <a
            href={CONTACT_HREF}
            className="block truncate text-sm font-semibold text-white transition-colors hover:text-brand-300 sm:text-base"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <button
          type="button"
          onClick={copy}
          aria-label="Copy email address"
          className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-lg glass px-3 text-xs font-semibold text-slate-200 transition-colors hover:border-brand-400/40 hover:text-white"
        >
          {copied ? (
            <>
              <svg className="h-4 w-4 text-accent-400" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <path d="M5 15V5a2 2 0 0 1 2-2h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
    </div>
  )
}
