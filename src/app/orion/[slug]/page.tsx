import { notFound } from 'next/navigation'
import { getJournalEntry, getVisibleJournalEntries } from '@/lib/orion-journal'
import type { Metadata } from 'next'
import Link from 'next/link'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getVisibleJournalEntries().map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const entry = getJournalEntry(slug)
  if (!entry) return {}
  return {
    title: `${entry.title} — kyleisun.cool`,
    description: entry.description,
  }
}

export const dynamicParams = false

export default async function JournalEntryPage({ params }: Props) {
  const { slug } = await params
  const entry = getJournalEntry(slug)

  if (!entry) notFound()

  const { default: Content } = await import(`@/content/orion/${slug}.mdx`)

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Breadcrumb */}
      <nav className="mb-10">
        <Link
          href="/orion"
          className="text-sm font-medium text-muted hover:text-ink transition-colors"
        >
          ← Orion
        </Link>
      </nav>

      {/* Header */}
      <header className="max-w-2xl mb-14">
        <div className="flex flex-wrap gap-2 mb-6">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[0.65rem] uppercase tracking-wider text-muted bg-surface-card px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
          {entry.status === 'draft' && (
            <span className="font-mono text-[0.65rem] uppercase tracking-wider text-on-primary bg-redline px-2.5 py-1">
              draft
            </span>
          )}
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.1] mb-4">
          {entry.title}
        </h1>
        <p className="text-base text-body leading-relaxed">{entry.description}</p>
        <p className="font-mono text-xs text-muted-soft mt-6">{entry.date}</p>
      </header>

      {/* Divider */}
      <div className="border-t border-hairline mb-14" />

      {/* MDX content */}
      <article className="field-log max-w-[68ch]">
        <Content />
      </article>
    </div>
  )
}
