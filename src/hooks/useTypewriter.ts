import { useEffect, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/**
 * Cycles through `words`, typing and deleting each one for a rotating headline.
 * If the user prefers reduced motion, it simply shows the first word, static.
 */
export function useTypewriter(
  words: string[],
  { typeSpeed = 90, deleteSpeed = 45, pause = 1500 }: { typeSpeed?: number; deleteSpeed?: number; pause?: number } = {},
) {
  const reduced = prefersReducedMotion()
  // When reduced motion is preferred, start (and stay) on the first word.
  const [text, setText] = useState(() => (reduced ? words[0] ?? '' : ''))
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduced || words.length === 0) return

    const current = words[wordIndex % words.length]

    // Finished typing → pause, then start deleting.
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }

    // Finished deleting → advance to next word (scheduled, not synchronous).
    if (deleting && text === '') {
      const t = setTimeout(() => {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
      }, typeSpeed)
      return () => clearTimeout(t)
    }

    const delay = deleting ? deleteSpeed : typeSpeed
    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
      )
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause, reduced])

  return { text, reduced }
}
