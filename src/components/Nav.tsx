import Link from 'next/link'

export default function Nav() {
  return (
    <header className="w-full border-b border-hairline bg-canvas sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl text-ink tracking-tight hover:text-primary transition-colors"
        >
          kyleisun.cool
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="/work"
            className="text-sm font-medium text-muted hover:text-ink transition-colors"
          >
            Work
          </Link>
          <a
            href="https://substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted hover:text-ink transition-colors"
          >
            Writing
          </a>
        </nav>
      </div>
    </header>
  )
}
