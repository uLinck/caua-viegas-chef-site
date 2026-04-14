import type { Metadata, Viewport } from 'next'
import { Inter, Noto_Serif_JP } from 'next/font/google'
import './globals.css'
import styles from './layout.module.css'
import { TELEPHONE, EMAIL, INSTAGRAM_URL } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-noto-serif-jp',
})

export const viewport: Viewport = {
  themeColor: '#141414',
  colorScheme: 'dark',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://chefviegas.vercel.app'),
  title: {
    default: 'Cauã Viegas | Personal Chef',
    template: '%s | Cauã Viegas',
  },
  description:
    'Cauã Viegas — Personal Chef especializado em gastronomia japonesa de alto padrão. Eventos exclusivos, consultoria e cursos de sushi em Porto Alegre, RS.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://chefviegas.vercel.app',
    siteName: 'Cauã Viegas | Personal Chef',
    title: 'Cauã Viegas | Personal Chef Especializado em Gastronomia Japonesa',
    description:
      'Experiências gastronômicas japonesas únicas em Porto Alegre. Eventos privados, consultoria para restaurantes e cursos de sushi com o Chef Cauã Viegas.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cauã Viegas | Personal Chef',
    description:
      'Personal Chef especializado em gastronomia japonesa de alto padrão em Porto Alegre, RS.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Cauã Viegas | Personal Chef',
  url: 'https://chefviegas.vercel.app',
  telephone: TELEPHONE,
  email: EMAIL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Porto Alegre',
    addressRegion: 'RS',
    addressCountry: 'BR',
  },
  areaServed: {
    '@type': 'State',
    name: 'Rio Grande do Sul',
  },
  description:
    'Personal Chef especializado em gastronomia japonesa de alto padrão. Eventos exclusivos, consultoria e cursos de sushi em Porto Alegre e todo o RS.',
  sameAs: [INSTAGRAM_URL],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${notoSerifJP.variable}`}>
      <body>
        <a href="#main-content" className={styles.skipLink}>
          Pular para o conteúdo principal
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
