export default function Footer() {
  return (
    <footer className="bg-surface-dark mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col sm:flex-row justify-between gap-8">
        <div>
          <p className="font-display text-lg text-on-dark tracking-tight">kyleisun.cool</p>
          <p className="text-sm text-on-dark-soft mt-2">Forward deployment. Built in public.</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-on-dark-soft">
          <a
            href="https://substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-on-dark transition-colors"
          >
            Substack
          </a>
          <a
            href="https://instagram.com/kyleisun.cool"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-on-dark transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-on-dark transition-colors"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  )
}
