import { Award, ChevronRight, GraduationCap } from 'lucide-react'
import { about, certificates, education, experience, profile, projects, skills } from '../data/portfolio'
import { Button, Reveal, SectionTitle, Tag } from './ui'

const stats = [
  { value: `${projects.length}`, label: 'End-to-end AI projects' },
  { value: education.cgpa, label: 'CGPA, B.Tech IT' },
  { value: `${certificates.length}+`, label: 'Certificates' },
]

function SubHeading({ children }) {
  return <h3 className="text-2xl font-bold text-black/90 dark:text-white">{children}</h3>
}

export default function About() {
  return (
    <section id="about" className="px-4 pt-14 pb-12 sm:px-6">
      <Reveal>
        <SectionTitle eyebrow="01 — About Me" title="About Me." />
      </Reveal>

      <div className="mx-auto mt-12 max-w-2xl space-y-16">
        <Reveal>
          <div className="space-y-3 text-[17px] leading-relaxed text-gray-700 dark:text-neutral-300">
            {about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          
        </Reveal>

        <Reveal>
          <SubHeading>Skills</SubHeading>
          <div className="mt-6 divide-y divide-gray-100 dark:divide-white/10 rounded-2xl border border-gray-200 dark:border-white/10">
            {skills.map((s) => (
              <div key={s.group} className="grid gap-2 p-4 sm:grid-cols-[170px_1fr] sm:gap-4">
                <div className="text-sm font-semibold text-gray-800 dark:text-neutral-200">{s.group}</div>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <SubHeading>Experience</SubHeading>
          <ol className="mt-6 space-y-8 border-l border-gray-200 dark:border-white/10 pl-6">
            {experience.map((e) => (
              <li key={e.org} className="relative">
                <span className="absolute top-1.5 -left-[31px] size-3 rounded-full border-2 border-white bg-black ring-1 ring-gray-300 dark:border-neutral-900 dark:bg-white dark:ring-white/30" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h4 className="text-lg font-semibold">
                    {e.role} <span className="font-normal text-gray-500 dark:text-neutral-400">· {e.org}</span>
                  </h4>
                  <span className="font-mono text-sm text-gray-500 dark:text-neutral-400">{e.period}</span>
                </div>
                <p className="mt-2 text-gray-600 dark:text-neutral-400">{e.description}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal>
          <SubHeading>Education</SubHeading>
          <div className="mt-6 flex gap-4 rounded-2xl border border-gray-200 dark:border-white/10 p-5">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft dark:bg-blue-500/10 text-brand dark:text-blue-400">
              <GraduationCap className="size-5" />
            </div>
            <div>
              <h4 className="font-semibold">{education.degree}</h4>
              <p className="text-gray-600 dark:text-neutral-400">{education.school}</p>
              <p className="mt-1 text-sm text-gray-500 dark:text-neutral-400">
                {education.status} · CGPA {education.cgpa}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <SubHeading>Achievements</SubHeading>
          <ul className="mt-6 space-y-3">
            {certificates.map((c) => (
              <li key={c.title} className="flex gap-3">
                <Award className="mt-0.5 size-5 shrink-0 text-yellow-600/90" />
                <span className="text-gray-700 dark:text-neutral-300">
                  <span className="font-medium text-gray-900 dark:text-white">{c.title}</span> — {c.description}
                </span>
              </li>
            ))}
          </ul>
          <a
            href="#achievements"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand dark:text-blue-400 hover:underline"
          >
            See certificates & hackathons <ChevronRight className="size-4" />
          </a>
        </Reveal>

        <Reveal className="flex justify-center">
          <Button href={`mailto:${profile.email}`}>Let's collaborate!</Button>
        </Reveal>
      </div>
    </section>
  )
}
