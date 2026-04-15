'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import type { GalleryItem } from '@/types'
import styles from './GalleryClient.module.css'

interface GalleryClientProps {
  items: GalleryItem[]
  allItems?: GalleryItem[]
}

export default function GalleryClient({ items, allItems }: GalleryClientProps) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const lightboxItems = allItems ?? items
  const slides = lightboxItems.map(item => ({
    src: item.src,
    alt: item.alt,
    width: item.width,
    height: item.height,
  }))

  return (
    <>
      <div className={styles.grid}>
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            className={styles.gridItem}
            onClick={() => { setIndex(i); setOpen(true) }}
            aria-label={`Abrir foto: ${item.alt}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
              style={{ objectFit: 'cover' }}
              className={styles.gridImage}
              loading="lazy"
            />
            <div className={styles.hoverOverlay} aria-hidden="true" />
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        on={{ view: ({ index: i }) => setIndex(i) }}
        slides={slides}
      />
    </>
  )
}
