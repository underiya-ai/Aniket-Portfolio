import { Fragment, useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

const navLinks = [
  { id: 'about', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'learnings', label: 'Learnings' },
  { id: 'achievements', label: 'Achievements' },
]

function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {
      // Storage unavailable (private mode) — theme still applies for this visit.
    }
  }

  return [dark, toggle]
}

function Divider() {
  return <span aria-hidden="true" className="h-4 w-px bg-gray-300 max-sm:hidden dark:bg-white/20" />
}

export default function Navbar() {
  const [active, setActive] = useState('')
  const [dark, toggleTheme] = useTheme()

  // Highlight the link of the section currently in view.
  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-3">
      <nav className="flex items-center rounded-full border border-gray-200 bg-white/80 px-2 py-1.5 shadow-sm backdrop-blur-md sm:px-3 dark:border-white/15 dark:bg-neutral-900/80">
        {navLinks.map((link) => (
          <Fragment key={link.id}>
            <a
              href={`#${link.id}`}
              className={`rounded-full px-2 py-1.5 text-[13px] whitespace-nowrap transition-colors sm:px-4 sm:text-[15px] ${
                active === link.id
                  ? 'font-semibold text-gray-900 dark:text-white'
                  : 'font-medium text-gray-500 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-white'
              }`}
            >
              {link.label}
            </a>
            <Divider />
          </Fragment>
        ))}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          className="ml-0.5 cursor-pointer rounded-full p-2 text-gray-700 transition-colors hover:bg-gray-100 sm:ml-1 dark:text-white dark:hover:bg-white/10"
        >
          {dark ? <Sun className="size-4.5" /> : <Moon className="size-4.5" />}
        </button>
      </nav>
    </header>
  )
}
