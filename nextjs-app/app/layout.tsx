import type { Metadata } from 'next'
import { Cardo, Nunito_Sans } from 'next/font/google'
import './globals.css'

const cardo = Cardo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cardo',
  display: 'swap',
})

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Scala Capital — Investing in Early-Stage SEA Innovation',
  description:
    'Scala Capital is a family-backed investment platform focused on early-stage venture investing in Southeast Asia. We partner with ambitious founders solving real structural problems.',
  openGraph: {
    title: 'Scala Capital — Investing in Early-Stage SEA Innovation',
    description:
      'Family-backed early-stage venture capital for Southeast Asia. Patient capital, fast decisions, direct founder partnerships.',
    url: 'https://www.scalacapital.com',
    siteName: 'Scala Capital',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cardo.variable} ${nunito.variable}`}>
      <body className="bg-white">{children}</body>
    </html>
  )
}
