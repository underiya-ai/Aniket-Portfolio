import { ArrowUpRight, Award, Trophy } from 'lucide-react'
import { certificates, hackathons } from '../data/portfolio'
import { Reveal, SectionTitle } from './ui'

function ExternalLink({ href }) {
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand dark:text-blue-400 hover:underline"
    >
      View <ArrowUpRight className="size-4" />
    </a>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="px-4 py-16 sm:px-6">
      <Reveal>
        <SectionTitle
          eyebrow="04 — Achievements"
          title="Achievements."
          subtitle="Certificates I've earned and hackathons I've taken part in."
        />
      </Reveal>

      <div className="mx-auto mt-12 max-w-5xl space-y-14">
        <div>
          <Reveal>
            <h3 className="flex items-center gap-2 text-2xl font-bold">
              <Award className="size-6 text-yellow-600/90" /> Certificates
            </h3>
          </Reveal>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {certificates.map((c, i) => (
              <Reveal key={c.title} delay={i * 80} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-gray-200 dark:border-white/10 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-yellow-50 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
                      <Award className="size-5" />
                    </div>
                    {c.date && <span className="font-mono text-sm text-gray-500 dark:text-neutral-400">{c.date}</span>}
                  </div>
                  <h4 className="mt-4 text-lg font-semibold">{c.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-neutral-400">{c.issuer}</p>
                  <p className="mt-3 flex-grow text-gray-600 dark:text-neutral-400">{c.description}</p>
                  <ExternalLink href={c.link} />
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <h3 className="flex items-center gap-2 text-2xl font-bold">
              <Trophy className="size-6 text-brand dark:text-blue-400" /> Hackathons
            </h3>
          </Reveal>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {hackathons.map((h, i) => (
              <Reveal key={h.name} delay={i * 80} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-gray-200 dark:border-white/10 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full bg-brand-soft dark:bg-blue-500/10 px-3 py-1 text-xs font-semibold text-brand dark:text-blue-400">
                      {h.result}
                    </span>
                    <span className="font-mono text-sm text-gray-500 dark:text-neutral-400">{h.date}</span>
                  </div>
                  <h4 className="mt-4 text-lg font-semibold">{h.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-neutral-400">Built: {h.project}</p>
                  <p className="mt-3 flex-grow text-gray-600 dark:text-neutral-400">{h.description}</p>
                  <ExternalLink href={h.link} />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
