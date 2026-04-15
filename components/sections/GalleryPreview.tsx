import GalleryClient from '@/components/ui/GalleryClient'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { GALLERY_ITEMS } from '@/lib/constants'
import styles from './GalleryPreview.module.css'

export default function GalleryPreview() {
  const previewItems = GALLERY_ITEMS.slice(0, 6)

  return (
    <section id="galeria" className={`${styles.gallerySection} revealOnScroll`}>
      <div className={styles.galleryContainer}>
        <SectionTitle
          eyebrow="GALERIA"
          heading="Momentos em Destaque"
          centered
        />
        <GalleryClient items={previewItems} allItems={GALLERY_ITEMS} />
        <div className={styles.ctaWrapper}>
          <Button href="/gallery" variant="ghost">
            Ver Galeria Completa
          </Button>
        </div>
      </div>
    </section>
  )
}
