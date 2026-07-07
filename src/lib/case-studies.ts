import type { MotifKind } from '@/components/Motif'

export type CaseStudy = {
  slug: string
  title: string
  subtitle: string
  description: string
  date: string
  tags: string[]
  status: 'published' | 'draft'
  motif: MotifKind
  role: string
  timeframe: string
  scopeStatus: string
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
    motif: 'contour',
    role: 'Embedded builder',
    timeframe: 'May 2026 — ongoing',
    scopeStatus: 'Deck shipped, site + design system live',
  },
  {
    slug: 'tara-maria',
    title: 'Tara Maria',
    subtitle: 'From healing practice to bookable business',
    description:
      'A healer offering Reiki, Akashic Readings, Sound Healing, and Hypnotherapy needed more than a website — she needed a brand that matched the seriousness of her practice and a booking system that let people actually reach it. Built from scratch: positioning, design, and a full booking flow with payments.',
    date: '2026-07',
    tags: ['booking', 'payments', 'brand', 'small business'],
    status: 'draft',
    motif: 'grid',
    role: 'Embedded builder',
    timeframe: '2026',
    scopeStatus: 'Feature-complete, pending launch',
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}

export function getPublishedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((cs) => cs.status === 'published')
}

export function getVisibleCaseStudies(): CaseStudy[] {
  const showDrafts = process.env.NODE_ENV === 'development'
  return caseStudies.filter((cs) => cs.status === 'published' || showDrafts)
}
