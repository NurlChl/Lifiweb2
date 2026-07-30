import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Lifi Studio — Digital Product Studio for Teams That Ship',
  description: 'We design and ship digital products — web apps, mobile apps, AI integrations, and design systems. Purpose-built for the AI era.',
  keywords: ['digital product studio', 'web development', 'mobile apps', 'AI integration', 'design systems', 'Next.js', 'React'],
  authors: [{ name: 'Lifi Studio' }],
  creator: 'Lifi Studio',
  publisher: 'Lifi Studio',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lifistudio.id',
    title: 'Lifi Studio — Digital Product Studio for Teams That Ship',
    description: 'We design and ship digital products — web apps, mobile apps, AI integrations, and design systems. Purpose-built for the AI era.',
    siteName: 'Lifi Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lifi Studio — Digital Product Studio for Teams That Ship',
    description: 'We design and ship digital products — web apps, mobile apps, AI integrations, and design systems. Purpose-built for the AI era.',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-bg-primary text-fg-primary font-sans">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="pt-14">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}