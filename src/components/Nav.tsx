import Link from 'next/link'

export default function Nav() {
  return (
    <header className="w-full border-b border-hairline bg-canvas sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl font-bold text-ink tracking-tight hover:text-primary transition-colors"
        >
          kyleisun.cool
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="/work"
            className="text-sm font-medium text-body hover:text-primary transition-colors"
          >
            Work
          </Link>
          <Link
            href="/orion"
            className="text-sm font-medium text-body hover:text-primary transition-colors"
          >
            Orion
          </Link>
          <Link
            href="/writing"
            className="text-sm font-medium text-body hover:text-primary transition-colors"
          >
            Writing
          </Link>
        </nav>
      </div>
    </header>
  )
}
