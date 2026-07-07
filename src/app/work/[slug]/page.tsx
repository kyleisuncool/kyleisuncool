import { notFound } from 'next/navigation'
import { getCaseStudy, getVisibleCaseStudies } from '@/lib/case-studies'
import type { Metadata } from 'next'
import Link from 'next/link'
import Motif from '@/components/Motif'
import SpecSheet from '@/components/SpecSheet'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getVisibleCaseStudies().map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return {}
  return {
    title: `${study.title} — kyleisun.cool`,
    description: study.description,
  }
}

export const dynamicParams = false

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const study = getCaseStudy(slug)

  if (!study) notFound()

  const { default: Content } = await import(`@/content/case-studies/${slug}.mdx`)

  return (
    <div>
      {/* Motif band */}
      <div className="h-40 md:h-56 bg-surface-soft border-b border-hairline overflow-hidden">
        <Motif kind={study.motif} className="w-full h-full opacity-90" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav className="mb-10">
          <Link
            href="/work"
            className="text-sm font-medium text-muted hover:text-ink transition-colors"
          >
            ← Work
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[0.65rem] uppercase tracking-wider text-muted bg-surface-card px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
            {study.status === 'draft' && (
              <span className="font-mono text-[0.65rem] uppercase tracking-wider text-on-primary bg-redline px-2.5 py-1">
                draft
              </span>
            )}
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.1] mb-4 text-balance">
            {study.title}
          </h1>
          <p className="text-lg font-medium text-muted mb-4">{study.subtitle}</p>
          <p className="text-base text-body leading-relaxed max-w-[68ch]">{study.description}</p>
        </header>

        <SpecSheet
          specs={[
            { label: 'Role', value: study.role },
            { label: 'Timeframe', value: study.timeframe },
            { label: 'Status', value: study.scopeStatus },
          ]}
        />

        {/* MDX content */}
        <article className="field-log max-w-[68ch] mt-14">
          <Content />
        </article>
      </div>
    </div>
  )
}
