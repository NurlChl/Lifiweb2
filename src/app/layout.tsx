import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  axes: ['opsz'],
})

export const metadata: Metadata = {
  title: { default: 'Lifi Studio — Digital Agency', template: '%s — Lifi Studio' },
  description: 'Premium web development, UI/UX design, and automation solutions for modern businesses.',
  openGraph: {
    title: 'Lifi Studio — Digital Agency',
    description: 'Premium web development, UI/UX design, and automation solutions.',
    url: 'https://lifistudio.id',
    siteName: 'Lifi Studio',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Lifi Studio', description: 'Premium digital solutions.' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="dark">
      <body className={`${inter.variable} font-sans bg-bg-primary text-fg-primary antialiased`}>
        <Header />
        <main className="min-h-[100dvh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
