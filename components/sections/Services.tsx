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

    const DURATION = 600
    const STAGGER = [0, 100, 200, 300]
    const children = Array.from(grid.children) as HTMLElement[]

    // Set initial hidden state
    children.forEach((el, i) => {
      el.classList.add(i % 2 === 0 ? styles.slideLeft : styles.slideRight)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const i = children.indexOf(el)
          observer.unobserve(el)
          setTimeout(() => {
            el.classList.add(styles.animating)
            setTimeout(() => {
              el.classList.remove(styles.slideLeft, styles.slideRight, styles.animating)
            }, DURATION + 50)
          }, STAGGER[Math.min(i, STAGGER.length - 1)])
        })
      },
      { threshold: 0.1 }
    )

    children.forEach((el) => observer.observe(el))
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
