'use client'

import { useRef, useEffect } from 'react'
import SectionTitle from '@/components/ui/SectionTitle'
import ServiceCard from '@/components/ui/ServiceCard'
import { SERVICE_ITEMS } from '@/lib/constants'
import styles from './Services.module.css'

export default function Services() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    grid.classList.add(styles.animateReady)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          grid.classList.add(styles.isVisible)
          observer.disconnect()
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(grid)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicos" className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <SectionTitle eyebrow="SERVIÇOS" heading="O Que Ofereço" centered />
        <div ref={gridRef} className={styles.servicesGrid}>
          {SERVICE_ITEMS.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
