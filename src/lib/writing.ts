export type Essay = {
  slug: string
  title: string
  description: string
  date: string
  kind: 'essay' | 'pattern'
  tags: string[]
  status: 'published' | 'draft'
}

export const essays: Essay[] = [
  {
    slug: 'what-do-you-call-this',
    title: 'What Do You Call This?',
    description:
      'The work has a shape — walk into the fog, come out with infrastructure. What it doesn’t have is a name. Workshopping the title problem in public.',
    date: '2026-07-06',
    kind: 'essay',
    tags: ['positioning', 'forward deployment'],
    status: 'draft',
  },
  {
    slug: 'deck-as-output',
    title: 'The Deck as Output',
    description:
      'A repeatable pattern: organizational context in, a navigable 2D HTML pitch deck out — with a handoff document that lets anyone (human or AI) pick it up cold.',
    date: '2026-07-06',
    kind: 'pattern',
    tags: ['patterns', 'decks', 'handoff'],
    status: 'draft',
  },
]

export function getEssay(slug: string): Essay | undefined {
  return essays.find((e) => e.slug === slug)
}

export function getVisibleEssays(): Essay[] {
  const showDrafts = process.env.NODE_ENV === 'development'
  return essays
    .filter((e) => e.status === 'published' || showDrafts)
    .sort((a, b) => b.date.localeCompare(a.date))
}
