import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ProFlow Plumbing | Licensed & Insured Plumbers in San Francisco',
  description: 'Fast, reliable plumbing services in San Francisco. Emergency repairs, installations, maintenance. Licensed, insured, 24/7. Call (415) 555-0199.',
  keywords: ['plumber', 'plumbing', 'emergency plumber', 'pipe repair', 'drain cleaning', 'water heater', 'San Francisco', 'SF'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'ProFlow Plumbing',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://proflowplumbing.vercel.app',
    siteName: 'ProFlow Plumbing',
    title: 'ProFlow Plumbing | Licensed & Insured Plumbers',
    description: 'Fast, reliable plumbing services in San Francisco. Emergency repairs, installations, maintenance.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ProFlow Plumbing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProFlow Plumbing | Licensed & Insured Plumbers',
    description: 'Fast, reliable plumbing services in San Francisco. Emergency repairs, installations, maintenance.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}