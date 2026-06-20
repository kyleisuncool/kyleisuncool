import Link from 'next/link'
import CaseStudyCard from '@/components/CaseStudyCard'
import { getPublishedCaseStudies } from '@/lib/case-studies'

export default function Home() {
  const studies = getPublishedCaseStudies().slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-widest uppercase text-primary mb-6">
            Forward Deployment
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-normal tracking-tight text-ink leading-[1.05] mb-8">
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
              className="inline-flex items-center justify-center h-10 px-5 bg-primary text-on-primary text-sm font-medium rounded-lg hover:bg-primary-active transition-colors"
            >
              See the work
            </Link>
            <a
              href="https://substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 px-5 bg-canvas border border-hairline text-ink text-sm font-medium rounded-lg hover:bg-surface-soft transition-colors"
            >
              Read the writing
            </a>
          </div>
        </div>
      </section>

      {/* Divider band */}
      <div className="border-t border-hairline" />

      {/* What I do */}
      <section className="bg-surface-soft">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-10">
            What this is
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Strategic infrastructure',
                body: 'Pitch decks, pro-formas, design systems, and institutional memory — the materials that let an organization credibly present itself to investors and partners.',
              },
              {
                title: 'Technical deployment',
                body: 'From website builds to mesh-network nodes, I implement the systems that make the vision tangible. Something you can point to. Something that runs.',
              },
              {
                title: 'Case studies as proof',
                body: 'Every engagement becomes a documented case study — what was needed, what was built, what it cost, and what moved because of it.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-surface-card rounded-xl p-8">
                <h3 className="font-display text-xl font-normal tracking-tight text-ink mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-body leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study preview */}
      {studies.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 py-20 md:py-24">
          <div className="flex items-baseline justify-between mb-10">
            <p className="text-xs font-medium tracking-widest uppercase text-muted">
              Case studies
            </p>
            <Link
              href="/work"
              className="text-sm font-medium text-primary hover:text-primary-active transition-colors"
            >
              All work →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </section>
      )}

      {/* CTA band */}
      <section className="bg-surface-dark">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
          <p className="font-display text-3xl md:text-4xl font-normal tracking-tight text-on-dark mb-6 max-w-lg">
            Working on something that needs to get serious?
          </p>
          <a
            href="mailto:ksowards@mac.com"
            className="inline-flex items-center justify-center h-10 px-5 bg-primary text-on-primary text-sm font-medium rounded-lg hover:bg-primary-active transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>
    </>
  )
}
