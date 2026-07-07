import Link from 'next/link'
import { getVisibleCaseStudies } from '@/lib/case-studies'
import { getVisibleEssays } from '@/lib/writing'
import { getVisibleJournalEntries } from '@/lib/orion-journal'

type FeedItem = {
  type: string
  title: string
  description: string
  date: string
  href: string
  draft: boolean
}

function buildFeed(): FeedItem[] {
  const items: FeedItem[] = [
    ...getVisibleCaseStudies().map((cs) => ({
      type: 'Case study',
      title: cs.title,
      description: cs.description,
      date: cs.date,
      href: `/work/${cs.slug}`,
      draft: cs.status === 'draft',
    })),
    ...getVisibleEssays().map((e) => ({
      type: e.kind === 'pattern' ? 'Pattern' : 'Essay',
      title: e.title,
      description: e.description,
      date: e.date,
      href: `/writing/${e.slug}`,
      draft: e.status === 'draft',
    })),
    ...getVisibleJournalEntries().map((j) => ({
      type: 'Orion journal',
      title: j.title,
      description: j.description,
      date: j.date,
      href: `/orion/${j.slug}`,
      draft: j.status === 'draft',
    })),
  ]
  return items.sort((a, b) => b.date.localeCompare(a.date)).slice(0, 6)
}

const workPrinciples = [
  {
    title: 'I go in first',
    body: 'Most engagements start with no spec. I figure out what the project actually needs before anyone can tell me — then build it.',
  },
  {
    title: 'The site logs the work',
    body: 'Case studies, essays, and the Orion build journal are all dated, specific, and current. Draft is marked draft; nothing is dressed up.',
  },
  {
    title: 'Judgment, not just delivery',
    body: 'Decks, pro-formas, and design systems are downstream of something less visible: holding the complete picture of an organization while it’s being built.',
  },
]

export default function Home() {
  const feed = buildFeed()

  return (
    <>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-primary mb-6">
              Forward deployment
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-ink leading-[1.02] mb-8">
              I go in first.
            </h1>
            <p className="text-lg text-body leading-relaxed mb-10 max-w-xl">
              I embed with organizations at the moment they need to get serious — building
              the technical and strategic infrastructure that makes visions fundable,
              deployable, and real.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/work"
                className="inline-flex items-center justify-center h-10 px-5 bg-primary text-on-primary text-sm font-semibold rounded-sm hover:bg-primary-active transition-colors"
              >
                See the work
              </Link>
              <Link
                href="/writing"
                className="inline-flex items-center justify-center h-10 px-5 bg-canvas border border-hairline text-ink text-sm font-medium rounded-sm hover:bg-surface-soft transition-colors"
              >
                Read the writing
              </Link>
            </div>
          </div>
          <div className="hidden md:block border border-hairline px-5 py-4 mt-2 w-48">
            <p className="font-mono text-[0.65rem] uppercase tracking-wider text-muted mb-2">Status</p>
            <p className="text-sm font-medium text-ink mb-3">Active — Austin, TX</p>
            <p className="font-mono text-[0.65rem] uppercase tracking-wider text-muted mb-2">Log</p>
            <p className="text-sm font-medium text-ink">Updated {feed[0]?.date ?? ''}</p>
          </div>
        </div>
      </section>

      <div className="border-t border-hairline" />

      {/* How the work runs — numbered, not cards */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <p className="font-mono text-xs uppercase tracking-wider text-muted mb-10">
          How this runs
        </p>
        <div className="border-t border-hairline">
          {workPrinciples.map((item, i) => (
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

      {/* Unified log feed — case studies, writing, and Orion together */}
      <section className="bg-surface-soft">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <div className="flex items-baseline justify-between mb-10">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              Recent
            </p>
            <div className="flex gap-5">
              <Link href="/work" className="text-sm font-medium text-primary hover:text-primary-active transition-colors">
                Work →
              </Link>
              <Link href="/orion" className="text-sm font-medium text-primary hover:text-primary-active transition-colors">
                Orion →
              </Link>
              <Link href="/writing" className="text-sm font-medium text-primary hover:text-primary-active transition-colors">
                Writing →
              </Link>
            </div>
          </div>
          <div className="border-t border-hairline">
            {feed.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 py-6 border-b border-hairline"
              >
                <span className="font-mono text-xs text-muted-soft shrink-0 md:w-28">
                  {item.date}
                </span>
                <span className="flex-1">
                  <span className="flex flex-wrap items-center gap-3 mb-1">
                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-primary">
                      {item.type}
                    </span>
                    {item.draft && (
                      <span className="font-mono text-[0.65rem] uppercase tracking-wider text-on-primary bg-redline px-2 py-0.5">
                        draft
                      </span>
                    )}
                  </span>
                  <span className="font-display text-xl font-bold tracking-tight text-ink group-hover:text-primary transition-colors block mb-1">
                    {item.title}
                  </span>
                  <span className="text-sm text-body leading-relaxed max-w-xl block">
                    {item.description}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact — typographic, not a boxed CTA */}
      <section className="bg-surface-dark">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-24">
          <p className="font-display text-3xl md:text-4xl font-bold tracking-tight text-on-dark mb-6 max-w-lg">
            Working on something that needs to get serious?
          </p>
          <a
            href="mailto:ksowards@mac.com"
            className="inline-flex items-center gap-2 text-lg font-medium text-on-dark hover:text-primary-disabled transition-colors border-b border-on-dark-soft hover:border-primary-disabled pb-1"
          >
            ksowards@mac.com →
          </a>
        </div>
      </section>
    </>
  )
}
