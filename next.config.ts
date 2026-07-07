import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  options: {
    // String form — required for Turbopack (functions can't cross into Rust)
    remarkPlugins: ['remark-gfm'],
  },
})

export default withMDX(nextConfig)
