import { notFound } from 'next/navigation'
import { getCaseStudy, caseStudies } from '@/lib/case-studies'
import type { Metadata } from 'next'
import Link from 'next/link'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return caseStudies
    .filter((cs) => cs.status === 'published')
    .map((cs) => ({ slug: cs.slug }))
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
    <div className="max-w-5xl mx-auto px-6 py-16">
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
      <header className="max-w-2xl mb-14">
        <div className="flex flex-wrap gap-2 mb-6">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium tracking-wide uppercase text-muted bg-surface-card rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-normal tracking-tight text-ink leading-[1.1] mb-4">
          {study.title}
        </h1>
        <p className="text-lg font-medium text-muted mb-4">{study.subtitle}</p>
        <p className="text-base text-body leading-relaxed">{study.description}</p>
        <p className="text-sm text-muted-soft mt-6">{study.date}</p>
      </header>

      {/* Divider */}
      <div className="border-t border-hairline mb-14" />

      {/* MDX content */}
      <article className="max-w-2xl">
        <Content />
      </article>
    </div>
  )
}
