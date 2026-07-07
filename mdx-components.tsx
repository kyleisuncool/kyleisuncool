import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-display text-4xl font-bold tracking-tight text-ink leading-tight mb-6 mt-12 first:mt-0 text-balance">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-display text-3xl font-bold tracking-tight text-ink leading-snug mb-4 mt-14 pt-10 border-t border-hairline first:mt-0 first:pt-0 first:border-0 text-balance">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-display text-xl font-bold tracking-tight text-ink leading-snug mb-3 mt-8 text-balance">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-body text-base leading-relaxed mb-5 max-w-[68ch]">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-outside pl-5 mb-5 space-y-2 text-body max-w-[68ch]">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside pl-5 mb-5 space-y-2 text-body max-w-[68ch]">{children}</ol>
  ),
  li: ({ children }) => <li className="text-base leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-10 py-6 border-t border-b border-hairline [&>p]:font-display [&>p]:text-2xl [&>p]:font-bold [&>p]:text-ink [&>p]:leading-snug [&>p]:max-w-[32ch] [&>p]:text-balance [&>p]:mb-0">
      {children}
    </blockquote>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-ink">{children}</strong>
  ),
  hr: () => <hr className="border-hairline my-10" />,
  table: ({ children }) => (
    <div className="overflow-x-auto my-8">
      <table className="w-full text-sm text-body border-collapse font-sans">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="text-left font-mono text-xs uppercase tracking-wide text-muted border-b border-hairline px-4 py-2.5">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-hairline px-4 py-2.5 align-top">{children}</td>
  ),
  a: ({ href, children }) => (
    <a href={href} className="text-primary underline underline-offset-2 hover:text-primary-active transition-colors">
      {children}
    </a>
  ),
}

export function useMDXComponents(): MDXComponents {
  return components
}
