import Link from 'next/link'
import { getVisibleJournalEntries } from '@/lib/orion-journal'

export const metadata = {
  title: 'Orion — kyleisun.cool',
  description:
    'Orion is the operating system behind the work — a plain-text vault plus an AI operating layer that holds the complete picture of an organization.',
}

const capabilities = [
  {
    title: 'Relationship signal',
    body: 'Every person has a page, a contact cadence, and a follow-up date. Nothing goes quiet by accident — the system flags who needs attention before the relationship drifts.',
  },
  {
    title: 'Institutional memory',
    body: 'Decisions are logged immutably, with context, rationale, and follow-up. Six weeks later, "why did we do it this way?" has an answer with a date on it.',
  },
  {
    title: 'Cross-cutting threads',
    body: 'Some risks don’t live in any single project — they run across several at once. Threads track those signals so they surface before they become problems.',
  },
  {
    title: 'Output on demand',
    body: 'Meeting briefs, project snapshots, status narratives, outbound drafts — generated from live context, not reconstructed from scratch each time.',
  },
  {
    title: 'Self-maintenance',
    body: 'The vault audits itself: dead links, orphaned pages, stale content, drift between what’s recorded and what’s real. Health reports, on a cadence.',
  },
  {
    title: 'A visual command center',
    body: 'Orion’s Belt — a dashboard that reads the vault directly and renders it live: follow-ups, deadlines, threads, decisions, and a knowledge graph of the whole system.',
  },
]

export default function OrionPage() {
  const entries = getVisibleJournalEntries()

  return (
    <>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-wider text-primary mb-6">
            Orion
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-ink leading-[1.05] mb-8">
            The system behind the work.
          </h1>
          <p className="text-lg text-body leading-relaxed mb-5 max-w-xl">
            Orion is an operating system for an organization&apos;s memory — a
            plain-text knowledge vault paired with an AI operating layer. It tracks
            the people, projects, decisions, and cross-cutting risks of every
            engagement, and it compounds: every conversation, every document, every
            signal gets filed, linked, and kept current.
          </p>
          <p className="text-lg text-body leading-relaxed max-w-xl">
            It&apos;s not a note-taking app. It&apos;s how one person holds the
            complete picture of an organization — and it was built in public, during
            a live engagement, because the engagement demanded it.
          </p>
        </div>
      </section>

      <div className="border-t border-hairline" />

      {/* What it does — numbered, not cards */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <p className="font-mono text-xs uppercase tracking-wider text-muted mb-10">
          What it does
        </p>
        <div className="border-t border-hairline">
          {capabilities.map((item, i) => (
            <div key={item.title} className="grid md:grid-cols-[3rem_1fr_2fr] gap-4 md:gap-8 py-8 border-b border-hairline">
              <p className="font-mono text-sm text-primary">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="text-sm text-body leading-relaxed max-w-md">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why it exists */}
      <section className="bg-surface-dark">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-24">
          <p className="font-display text-3xl md:text-4xl font-bold tracking-tight text-on-dark max-w-2xl">
            The vault is the tool. The judgment is the service.
          </p>
        </div>
      </section>

      {/* Journal */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-24">
        <header className="mb-10">
          <p className="font-mono text-xs uppercase tracking-wider text-muted mb-4">
            Build journal
          </p>
          <p className="text-base text-body max-w-lg leading-relaxed">
            Orion is ongoing work. This is the record of building it.
          </p>
        </header>

        {entries.length === 0 ? (
          <p className="text-muted">Journal entries coming soon.</p>
        ) : (
          <div className="border-t border-hairline">
            {entries.map((entry) => (
              <Link
                key={entry.slug}
                href={`/orion/${entry.slug}`}
                className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-8 border-b border-hairline"
              >
                <span className="font-mono text-xs text-muted-soft shrink-0 md:w-24">
                  {entry.date.slice(0, 7)}
                </span>
                <span className="flex-1">
                  <span className="flex items-center gap-3 mb-2">
                    <span className="font-display text-2xl font-bold tracking-tight text-ink group-hover:text-primary transition-colors">
                      {entry.title}
                    </span>
                    {entry.status === 'draft' && (
                      <span className="font-mono text-[0.65rem] uppercase tracking-wider text-on-primary bg-redline px-2.5 py-0.5">
                        draft
                      </span>
                    )}
                  </span>
                  <span className="block text-sm text-body leading-relaxed max-w-xl">
                    {entry.description}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  )
}
