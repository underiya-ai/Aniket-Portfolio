import { ArrowUpRight, Clock } from 'lucide-react'
import { learnings } from '../data/portfolio'
import { Reveal, SectionTitle, Tag } from './ui'

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function Learnings() {
  const posts = [...learnings].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <section id="learnings" className="bg-gray-50/70 dark:bg-white/[0.02] px-4 py-16 sm:px-6">
      <Reveal>
        <SectionTitle
          eyebrow="03 — Learnings"
          title="Things I've Learned."
          subtitle="Posts and notes from building with LLMs, agents and ML — written as I learn."
        />
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-3xl gap-4">
        {posts.map((post, i) => {
          const Wrapper = post.link ? 'a' : 'div'
          return (
            <Reveal key={post.title} delay={i * 60}>
              <Wrapper
                {...(post.link ? { href: post.link, target: '_blank', rel: 'noreferrer' } : {})}
                className="group block rounded-2xl border border-gray-200 dark:border-white/10 bg-white p-6 dark:bg-neutral-900 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-gray-500 dark:text-neutral-400">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span className="text-gray-300 dark:text-neutral-700">•</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-3.5" /> {post.readTime}
                  </span>
                </div>
                <div className="mt-2 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-tight">{post.title}</h3>
                  {post.link && (
                    <ArrowUpRight className="size-5 shrink-0 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gray-900 dark:group-hover:text-white" />
                  )}
                </div>
                <p className="mt-2 text-gray-600 dark:text-neutral-400">{post.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </Wrapper>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
