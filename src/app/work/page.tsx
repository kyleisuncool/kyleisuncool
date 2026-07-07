import CaseFileRow from '@/components/CaseFileRow'
import { getVisibleCaseStudies } from '@/lib/case-studies'

export const metadata = {
  title: 'Work — kyleisun.cool',
  description: 'Case studies from active forward deployment engagements.',
}

export default function WorkPage() {
  const studies = getVisibleCaseStudies()

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <header className="mb-14">
        <p className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
          Case files
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-ink mb-4">
          The work
        </h1>
        <p className="text-base text-body max-w-lg leading-relaxed">
          Every engagement documented — what was needed, what was built, what moved
          because of it.
        </p>
      </header>

      {studies.length === 0 ? (
        <p className="text-muted">Case studies coming soon.</p>
      ) : (
        <div className="border-t border-hairline">
          {studies.map((study) => (
            <CaseFileRow key={study.slug} study={study} />
          ))}
        </div>
      )}
    </div>
  )
}
