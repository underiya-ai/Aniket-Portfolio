import { ArrowUpRight, Bot } from 'lucide-react'
import { profile, projects } from '../data/portfolio'
import { Button, GithubIcon, Reveal, SectionTitle, Tag } from './ui'

// Decorative header for each card, standing in for a screenshot.
function Preview({ index, title }) {
  return (
    <div className="relative flex aspect-[16/9] items-end overflow-hidden rounded-md border border-gray-200 dark:border-white/10 bg-gray-50/85 dark:bg-white/[0.03] p-4">
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:16px_16px] opacity-60 dark:bg-[radial-gradient(#3f3f46_1px,transparent_1px)]" />
      <div className="absolute top-4 right-4 flex size-12 items-center justify-center rounded-xl bg-black text-white shadow-md dark:bg-white dark:text-neutral-900">
        <Bot className="size-6" />
      </div>
      <div className="relative">
        <div className="font-mono text-xs text-gray-500 dark:text-neutral-400">project_{String(index + 1).padStart(2, '0')}</div>
        <div className="text-lg font-semibold text-gray-900 dark:text-white">{title}</div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-16 sm:px-6">
      <Reveal>
        <SectionTitle
          eyebrow="02 — Projects"
          title="Shipped Projects."
          subtitle="Agents, RAG pipelines and LLM-powered apps I've designed and built end to end."
        />
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 100} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-gray-200 dark:border-white/10 p-5 transition-shadow hover:shadow-lg">
              <Preview index={i} title={p.subtitle} />
              <h3 className="mt-6 text-2xl font-bold">{p.title}</h3>
              <p className="mt-3 flex-grow text-base leading-relaxed font-light text-gray-700 dark:text-neutral-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <div className="mt-5 grid gap-2">
                <Button
                  href={p.live || p.github}
                  variant="light"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full"
                >
                  {p.live ? (
                    <>
                      View Project <ArrowUpRight className="size-4" />
                    </>
                  ) : (
                    <>
                      <GithubIcon className="size-4" /> View Code
                    </>
                  )}
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 flex justify-center">
        <Button href={profile.github} variant="outline" target="_blank" rel="noreferrer">
          View all on GitHub <ArrowUpRight className="size-4" />
        </Button>
      </Reveal>
    </section>
  )
}
