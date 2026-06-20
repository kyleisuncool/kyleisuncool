import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-display text-4xl font-normal tracking-tight text-ink leading-tight mb-6 mt-12 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-display text-3xl font-normal tracking-tight text-ink leading-snug mb-4 mt-10">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-display text-2xl font-normal tracking-tight text-ink leading-snug mb-3 mt-8">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-body text-base leading-relaxed mb-5">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-outside pl-5 mb-5 space-y-2 text-body">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside pl-5 mb-5 space-y-2 text-body">{children}</ol>
  ),
  li: ({ children }) => <li className="text-base leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-primary pl-6 my-6 text-muted italic">
      {children}
    </blockquote>
  ),
  strong: ({ children }) => (
    <strong className="font-medium text-ink">{children}</strong>
  ),
  hr: () => <hr className="border-hairline my-10" />,
  a: ({ href, children }) => (
    <a href={href} className="text-primary underline underline-offset-2 hover:text-primary-active transition-colors">
      {children}
    </a>
  ),
}

export function useMDXComponents(): MDXComponents {
  return components
}
