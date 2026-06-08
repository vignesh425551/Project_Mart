import type { Theme } from '../hooks/useTheme'

export default function ThemeToggle({
  theme,
  onToggle,
  className,
}: {
  theme: Theme
  onToggle: () => void
  className?: string
}) {
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className={[
        'group relative inline-flex h-10 w-10 items-center justify-center rounded-xl glass text-slate-200 transition-colors hover:border-brand-400/40 hover:text-white',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* Sun (shown in dark mode → click to go light) */}
      <svg
        className={[
          'absolute h-5 w-5 transition-all duration-300',
          isDark ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0',
        ].join(' ')}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>

      {/* Moon (shown in light mode → click to go dark) */}
      <svg
        className={[
          'absolute h-5 w-5 transition-all duration-300',
          isDark ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100',
        ].join(' ')}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
