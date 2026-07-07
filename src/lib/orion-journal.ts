export type JournalEntry = {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  status: 'published' | 'draft'
}

export const journalEntries: JournalEntry[] = [
  {
    slug: 'building-orions-belt',
    title: 'Two Sessions, One Overhaul: Building Orion’s Belt',
    description:
      'What happened when I handed a live codebase — the dashboard that sits on top of Orion — to a frontier model and asked it to make it better.',
    date: '2026-07-06',
    tags: ['orions-belt', 'ai', 'build log'],
    status: 'draft',
  },
  {
    slug: 'origin',
    title: 'Zero to Operating System in Seven Days',
    description:
      'Orion wasn’t designed. It condensed — built from nothing during a live engagement, because the engagement demanded it.',
    date: '2026-07-06',
    tags: ['origin', 'vault', 'method'],
    status: 'draft',
  },
]

export function getJournalEntry(slug: string): JournalEntry | undefined {
  return journalEntries.find((e) => e.slug === slug)
}

export function getVisibleJournalEntries(): JournalEntry[] {
  const showDrafts = process.env.NODE_ENV === 'development'
  return journalEntries
    .filter((e) => e.status === 'published' || showDrafts)
    .sort((a, b) => b.date.localeCompare(a.date))
}
