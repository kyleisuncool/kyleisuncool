import type { Metadata } from 'next'
import { Bitter, Public_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const bitter = Bitter({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
})

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'kyleisun.cool',
  description: 'Forward deployment. Kyle Sowards builds the technical and strategic infrastructure that makes ideas fundable, deployable, and real.',
  openGraph: {
    title: 'kyleisun.cool',
    description: 'Forward deployment.',
    url: 'https://kyleisun.cool',
    siteName: 'kyleisun.cool',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bitter.variable} ${publicSans.variable} ${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-canvas antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
