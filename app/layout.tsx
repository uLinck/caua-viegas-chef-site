import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Noto_Serif_JP } from 'next/font/google'
import './globals.css'
import styles from './layout.module.css'
import { TELEPHONE, EMAIL, INSTAGRAM_URL } from '@/lib/constants'

const notoSerifJp = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-noto-serif-jp',
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cormorant',
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8F4EF' },
    { media: '(prefers-color-scheme: dark)', color: '#0F0F0D' },
  ],
  colorScheme: 'light dark',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://chefviegas.vercel.app'),
  title: {
    default: 'Cauã Viegas - Private Chef',
    template: '%s | Cauã Viegas - Private Chef',
  },
  description:
    'Cauã Viegas - Private Chef especializado em gastronomia japonesa de alto padrão. Eventos exclusivos, consultoria e cursos em Porto Alegre, RS, Santa Catarina e Rio Grande do Sul.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://chefviegas.vercel.app',
    siteName: 'Cauã Viegas - Private Chef',
    title: 'Cauã Viegas - Private Chef | Excelência na gastronomia Japonesa.',
    description:
      'Experiências gastronômicas japonesas únicas em Porto Alegre. Eventos privados, consultoria para restaurantes e cursos com Cauã Viegas - Private Chef.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cauã Viegas - Private Chef',
    description:
      'Cauã Viegas - Private Chef especializado em gastronomia japonesa de alto padrão em Porto Alegre, RS, SC e região sul.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Cauã Viegas - Private Chef',
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
    'Cauã Viegas - Private Chef especializado em gastronomia japonesa de alto padrão. Eventos exclusivos, consultoria e cursos em Porto Alegre, RS e SC.',
  sameAs: [INSTAGRAM_URL],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${cormorantGaramond.variable} ${notoSerifJp.variable}`} suppressHydrationWarning>
      <body>
        <a href="#main-content" className={styles.skipLink}>
          Pular para o conteúdo principal
        </a>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||t==='light'?t:window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',d);}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
