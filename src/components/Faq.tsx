import { useState } from 'react'
import { faqs } from '../data/site'

function FaqRow({
  question,
  answer,
  isOpen,
  onToggle,
  id,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  id: string
}) {
  return (
    <div className="ring-gradient overflow-hidden rounded-2xl glass">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
      >
        <span className="text-sm font-semibold text-white sm:text-base">{question}</span>
        <span
          className={[
            'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-300 ring-1 ring-brand-400/20 transition-transform duration-300',
            isOpen ? 'rotate-45' : '',
          ].join(' ')}
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        id={`${id}-panel`}
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-slate-400">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-3">
      {faqs.map((item, i) => (
        <FaqRow
          key={item.question}
          id={`faq-${i}`}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex((cur) => (cur === i ? null : i))}
        />
      ))}
    </div>
  )
}
