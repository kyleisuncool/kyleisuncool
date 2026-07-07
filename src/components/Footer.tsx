import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-surface-dark mt-auto">
      <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col sm:flex-row justify-between gap-8">
        <div>
          <p className="font-display text-lg font-bold text-on-dark tracking-tight">kyleisun.cool</p>
          <p className="text-sm text-on-dark-soft mt-2">Embedded practice work, logged in the open.</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/work" className="text-on-dark-soft hover:text-on-dark transition-colors">
            Work
          </Link>
          <Link href="/orion" className="text-on-dark-soft hover:text-on-dark transition-colors">
            Orion
          </Link>
          <Link href="/writing" className="text-on-dark-soft hover:text-on-dark transition-colors">
            Writing
          </Link>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <a
            href="https://instagram.com/kyleisun.cool"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-dark-soft hover:text-on-dark transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-dark-soft hover:text-on-dark transition-colors"
          >
            YouTube
          </a>
          <a
            href="mailto:kyle@kyleisun.cool"
            className="text-on-dark-soft hover:text-on-dark transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
