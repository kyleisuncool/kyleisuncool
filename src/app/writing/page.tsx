import Link from 'next/link'
import { getVisibleEssays } from '@/lib/writing'

export const metadata = {
  title: 'Writing — kyleisun.cool',
  description: 'Essays and patterns from forward deployment work.',
}

export default function WritingPage() {
  const essays = getVisibleEssays()

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <header className="mb-14">
        <p className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
          Writing
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-ink mb-4 text-balance">
          Essays &amp; patterns
        </h1>
        <p className="text-base text-body max-w-lg leading-relaxed">
          Thinking in public — the positioning questions I haven&apos;t answered yet,
          and the patterns that keep proving themselves across engagements.
        </p>
      </header>

      {essays.length === 0 ? (
        <p className="text-muted">Writing coming soon.</p>
      ) : (
        <div className="border-t border-hairline">
          {essays.map((essay) => (
            <Link
              key={essay.slug}
              href={`/writing/${essay.slug}`}
              className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-8 border-b border-hairline"
            >
              <span className="font-mono text-xs text-muted-soft shrink-0 md:w-28">
                {essay.date.slice(0, 7)}
              </span>
              <span className="flex-1">
                <span className="flex items-center gap-3 mb-2">
                  <span className="font-display text-2xl font-bold tracking-tight text-ink group-hover:text-primary transition-colors text-balance">
                    {essay.title}
                  </span>
                  {essay.kind === 'pattern' && (
                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted bg-surface-card px-2.5 py-0.5">
                      pattern
                    </span>
                  )}
                  {essay.status === 'draft' && (
                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-on-primary bg-redline px-2.5 py-0.5">
                      draft
                    </span>
                  )}
                </span>
                <span className="block text-sm text-body leading-relaxed max-w-xl">
                  {essay.description}
                </span>
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
