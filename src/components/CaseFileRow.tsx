import Link from 'next/link'
import type { CaseStudy } from '@/lib/case-studies'
import Motif from './Motif'

export default function CaseFileRow({ study }: { study: CaseStudy }) {
  return (
    <Link href={`/work/${study.slug}`} className="group flex gap-6 md:gap-10 py-8 border-b border-hairline">
      <div className="w-20 h-20 md:w-28 md:h-28 shrink-0 bg-surface-soft">
        <Motif kind={study.motif} className="w-full h-full" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink group-hover:text-primary transition-colors text-balance">
            {study.title}
          </h2>
          {study.status === 'draft' && (
            <span className="font-mono text-[0.65rem] uppercase tracking-wider text-on-primary bg-redline px-2.5 py-0.5">
              draft
            </span>
          )}
        </div>
        <p className="text-sm font-medium text-muted mb-2">{study.subtitle}</p>
        <p className="text-sm text-body leading-relaxed max-w-xl mb-3">{study.description}</p>
        <p className="font-mono text-xs text-muted-soft uppercase tracking-wide">
          {study.date} &middot; {study.scopeStatus}
        </p>
      </div>
    </Link>
  )
}
