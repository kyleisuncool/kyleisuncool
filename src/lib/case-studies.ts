export type CaseStudy = {
  slug: string
  title: string
  subtitle: string
  description: string
  date: string
  tags: string[]
  status: 'published' | 'draft'
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'reimagine-ranch',
    title: 'Reimagine Ranch',
    subtitle: 'Turning 22 acres into a fundable vision',
    description:
      'A regenerative land project in Elgin, TX needed a pitch deck, a pro-forma, and a site that could open doors with investors. We built all three — and along the way defined what forward deployment actually looks like in practice.',
    date: '2026-06',
    tags: ['land', 'real estate', 'pitch deck', 'pro-forma'],
    status: 'published',
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}

export function getPublishedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((cs) => cs.status === 'published')
}
