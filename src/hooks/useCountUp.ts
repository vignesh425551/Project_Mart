import { useEffect, useRef, useState } from 'react'

/**
 * Counts up from 0 to `end` once the element scrolls into view.
 * Supports decimals (e.g. 4.9) via the `decimals` option.
 */
export function useCountUp<T extends HTMLElement>(
  end: number,
  { duration = 1600, decimals = 0 }: { duration?: number; decimals?: number } = {},
) {
  const ref = useRef<T | null>(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const run = () => {
      if (started.current) return
      started.current = true

      const startTime = performance.now()
      const tick = (now: number) => {
        const elapsed = now - startTime
        const t = Math.min(elapsed / duration, 1)
        // easeOutCubic for a snappy finish
        const eased = 1 - Math.pow(1 - t, 3)
        setValue(Number((end * eased).toFixed(decimals)))
        if (t < 1) requestAnimationFrame(tick)
        else setValue(end)
      }
      requestAnimationFrame(tick)
    }

    if (typeof IntersectionObserver === 'undefined') {
      run()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [end, duration, decimals])

  return { ref, value }
}
