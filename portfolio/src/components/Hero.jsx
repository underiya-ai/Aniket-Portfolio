import { useState } from 'react'
import { FileDown } from 'lucide-react'
import { profile } from '../data/portfolio'
import { Button, GithubIcon, LinkedinIcon, XIcon } from './ui'

const socials = [
  { label: 'GitHub', href: profile.github, icon: GithubIcon },
  { label: 'LinkedIn', href: profile.linkedin, icon: LinkedinIcon },
  { label: 'X', href: profile.x, icon: XIcon },
  { label: 'Resume', href: profile.resume, icon: FileDown },
]

function Avatar() {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className="flex size-28 items-center justify-center rounded-full bg-linear-to-br from-gray-900 to-gray-700 text-3xl font-bold text-white shadow-md md:size-40 md:text-5xl dark:ring-1 dark:ring-white/15">
        {profile.initials}
      </div>
    )
  }
  return (
    <img
      src={profile.photo}
      alt={profile.name}
      onError={() => setFailed(true)}
      className="size-28 rounded-full object-cover shadow-md md:size-40"
    />
  )
}

export default function Hero() {
  return (
    <section id="top" className="grid items-center justify-center space-y-6 px-4 pt-32 pb-4 text-center md:pt-40">
      <div className="flex justify-center">
        <Avatar />
      </div>

      <div>
        <h1 className="text-[30px] leading-9 font-bold tracking-tight md:text-[50px] md:leading-[3.6rem]">
          <span>Hi, I'm {profile.name}.</span>
          <span className="block text-[25px] md:text-[46px]">{profile.role}</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl px-2 text-gray-600 md:px-16 dark:text-neutral-400">
          <span className="hidden md:inline">{profile.tagline}</span>
          <span className="md:hidden">{profile.taglineShort}</span>
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2 font-mono text-xs text-gray-500 dark:text-neutral-500">
          {profile.titles.map((t, i) => (
            <span key={t}>
              {i > 0 && <span className="mr-2 text-gray-300 dark:text-neutral-700">/</span>}
              {t}
            </span>
          ))}
        </div>
      </div>

      <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {socials.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-gray-700 transition-colors hover:text-brand dark:text-neutral-200 dark:hover:text-blue-400"
            >
              <Icon className="size-4.5" /> {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button href="#contact">Hire Me!</Button>
        <div className="flex items-center gap-2 rounded-full border border-green-200 bg-ok-soft px-4 py-1.5 text-sm text-ok dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-400">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-green-600" />
          </span>
          {profile.available}
        </div>
      </div>
    </section>
  )
}
