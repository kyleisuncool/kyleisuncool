'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  const dark = pathname?.startsWith('/orion') ?? false

  return (
    <header
      className={`w-full sticky top-0 z-50 border-b transition-colors ${
        dark ? 'bg-surface-dark border-surface-dark-elevated' : 'bg-canvas border-hairline'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className={`font-display text-xl font-bold tracking-tight hover:text-primary transition-colors ${
            dark ? 'text-on-dark' : 'text-ink'
          }`}
        >
          kyleisun.cool
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="/work"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              dark ? 'text-on-dark-soft' : 'text-body'
            }`}
          >
            Work
          </Link>
          <Link
            href="/orion"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              dark ? 'text-on-dark-soft' : 'text-body'
            }`}
          >
            Orion
          </Link>
          <Link
            href="/writing"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              dark ? 'text-on-dark-soft' : 'text-body'
            }`}
          >
            Writing
          </Link>
        </nav>
      </div>
    </header>
  )
}
