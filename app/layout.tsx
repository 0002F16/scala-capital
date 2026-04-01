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
  title: 'Scala Capital - Early-Stage Venture Investing',
  description:
    'Scala Capital is a family-backed investment platform focused on early-stage venture investing. We partner with ambitious founders solving real structural problems.',
  openGraph: {
    title: 'Scala Capital - Early-Stage Venture Investing',
    description:
      'Family-backed early-stage venture capital. Patient capital, fast decisions, direct founder partnerships.',
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
