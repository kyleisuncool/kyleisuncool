import Link from 'next/link'
import type { CaseStudy } from '@/lib/case-studies'

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link href={`/work/${study.slug}`} className="group block">
      <article className="bg-surface-card rounded-xl p-8 h-full flex flex-col gap-4 hover:bg-surface-cream-strong transition-colors">
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium tracking-wide uppercase text-muted bg-canvas rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex-1">
          <h3 className="font-display text-2xl font-normal tracking-tight text-ink mb-2 group-hover:text-primary transition-colors">
            {study.title}
          </h3>
          <p className="text-sm font-medium text-muted mb-3">{study.subtitle}</p>
          <p className="text-sm text-body leading-relaxed">{study.description}</p>
        </div>
        <p className="text-xs text-muted-soft">{study.date}</p>
      </article>
    </Link>
  )
}
