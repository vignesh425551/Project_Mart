import { useEffect, useRef, useState } from 'react'

/**
 * Adds a scroll-reveal effect. Returns a ref to attach to the element and a
 * boolean once it has entered the viewport. Combine with the `.reveal` class:
 *
 *   const { ref, visible } = useReveal<HTMLDivElement>()
 *   <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`} />
 */
export function useReveal<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)
  // No IntersectionObserver (SSR / very old browsers) → start visible so content never hides.
  const [visible, setVisible] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px', ...options },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return { ref, visible }
}
