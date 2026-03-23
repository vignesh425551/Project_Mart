import { useEffect, useState } from 'react'

type ModalProps = {
  open: boolean
  title: string
  children: React.ReactNode
  onClose: () => void
}

export default function Modal({ open, title, children, onClose }: ModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open || !mounted) return null

  return (
    <div className="fixed inset-0 z-[100]">
      <button
        type="button"
        aria-label="Close modal"
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative mx-auto mt-10 w-[calc(100%-2rem)] max-w-3xl rounded-3xl border border-white/20 bg-white/90 p-5 shadow-xl backdrop-blur sm:p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-indigo-700">{title}</p>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/70 bg-white/70 text-slate-700 hover:bg-white"
            onClick={onClose}
            aria-label="Close"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="mt-4">{children}</div>
      </div>
    </div>
  )
}

