import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import GalleryClient from '@/components/ui/GalleryClient'
import SectionTitle from '@/components/ui/SectionTitle'
import { GALLERY_ITEMS } from '@/lib/constants'
import styles from './gallery.module.css'

export const metadata: Metadata = {
  title: 'Galeria',
  description:
    'Galeria de fotos do Chef Cauã Viegas — eventos exclusivos, pratos de gastronomia japonesa, bastidores e cursos de sushi em Porto Alegre.',
}

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main id="main-content" className={styles.galleryMain}>
        <div className={styles.galleryPageContainer}>
          <SectionTitle
            eyebrow="GALERIA"
            heading="Todos os Momentos"
            centered
          />
          <GalleryClient items={GALLERY_ITEMS} />
        </div>
      </main>
      <Footer />
    </>
  )
}
