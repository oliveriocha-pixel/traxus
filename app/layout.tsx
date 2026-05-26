import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Barlow_Condensed } from 'next/font/google'
import { IBM_Plex_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-barlow',
  display: 'swap'
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-mono',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'TRAXUS | Pisos Industriales de Alto Rendimiento',
  description: 'TRAXUS — Pisos industriales de alto rendimiento para logística y manufactura. Soluciones de juntas, resellado y Logislab® Freeze para bodegas refrigeradas.',
  keywords: ['pisos industriales', 'logística', 'manufactura', 'bodegas refrigeradas', 'Logislab Freeze', 'México'],
  authors: [{ name: 'TRAXUS' }],
  openGraph: {
    title: 'TRAXUS | Pisos Industriales',
    description: 'Reducimos costos de operación y paros de producción con sistemas de piso industrial de alto rendimiento.',
    type: 'website',
    url: 'https://traxus.com',
    locale: 'es_MX',
  },
  icons: {
    icon: '/logo.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#111111',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-MX" className={`${inter.variable} ${barlowCondensed.variable} ${ibmPlexMono.variable} bg-[#111111]`}>
      <body className="font-sans antialiased bg-[#111111] text-[#E8E8E8] overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
