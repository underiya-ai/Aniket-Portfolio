import { useState } from 'react'
import { Mail, Phone } from 'lucide-react'
import { profile } from '../data/portfolio'
import { GithubIcon, LinkedinIcon, Reveal, XIcon } from './ui'

export function Contact() {
  const [form, setForm] = useState({ name: '', message: '' })

  // No backend: opens the visitor's mail client with the message pre-filled.
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(form.message)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="px-4 py-16 sm:px-6">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-[30px] font-bold tracking-tight md:text-[40px]">Get in touch</h2>
        <p className="mt-3 text-gray-600 dark:text-neutral-400">
          Hiring for an AI/ML, GenAI or LLM role, or want to build something together? My inbox is open.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-3 text-left">
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-[#f2f2f2] dark:bg-white/5 dark:text-white dark:placeholder:text-neutral-500 px-6 py-4 focus:outline-black dark:focus:outline-white"
          />
          <textarea
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Your message"
            className="w-full resize-none rounded-xl border border-gray-200 dark:border-white/10 bg-[#f2f2f2] dark:bg-white/5 dark:text-white dark:placeholder:text-neutral-500 px-6 py-4 focus:outline-black dark:focus:outline-white"
          />
          <button
            type="submit"
            className="cursor-pointer rounded-xl bg-black/90 px-6 py-4 text-[15px] font-medium text-white hover:bg-black/80 dark:bg-white dark:text-neutral-900 dark:hover:bg-white/85"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-neutral-400">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-gray-900 dark:hover:text-white">
            <Mail className="size-4" /> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 hover:text-gray-900 dark:hover:text-white">
            <Phone className="size-4" /> {profile.phone}
          </a>
        </div>
      </Reveal>
    </section>
  )
}

const year = new Date().getFullYear()

export function Footer() {
  const links = [
    { href: profile.github, label: 'GitHub', icon: <GithubIcon /> },
    { href: profile.linkedin, label: 'LinkedIn', icon: <LinkedinIcon /> },
    { href: profile.x, label: 'X', icon: <XIcon /> },
    { href: `mailto:${profile.email}`, label: 'Email', icon: <Mail className="size-5" /> },
  ]
  return (
    <footer className="bg-black/90 px-6 py-8 text-white dark:border-t dark:border-white/10 dark:bg-black/40">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-white/70">
          © {year} {profile.name}. Built with React & Tailwind.
        </p>
        <div className="flex items-center gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              aria-label={l.label}
              className="text-white/80 hover:text-white"
            >
              {l.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
