'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Hero.module.css'
import Button from '@/components/ui/Button'

export default function Hero() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={isReady ? `${styles.heroSection} ${styles.heroReady}` : styles.heroSection} id="inicio">
      {/* Mobile hero — portrait of chef behind sushi table */}
      <Image
        src="/images/hero-bg.jpeg"
        alt="Cauã Viegas - Personal Chef preparando gastronomia japonesa"
        fill
        className={styles.heroBgMobile}
        sizes="100vw"
        preload={true}
        fetchPriority="high"
        loading="eager"
        onLoad={() => setIsReady(true)}
      />
      {/* Desktop hero — moody kitchen scene with sushi in foreground */}
      <Image
        src="/images/chef-cooking-hero.png"
        alt="Cauã Viegas - Personal Chef preparando gastronomia japonesa"
        fill
        className={styles.heroBgDesktop}
        sizes="100vw"
        loading="lazy"
        onLoad={() => setIsReady(true)}
      />
      <div className={styles.heroOverlay} aria-hidden="true" />
      <div className={styles.heroContent}>
        <span className={styles.eyebrow}>PERSONAL CHEF &#8212; GASTRONOMIA JAPONESA</span>
        <h1 className={styles.heading}>
          <span className={styles.headingLine}>PERSONAL CHEF</span>
          <span className={styles.headingLine}>CAUÃ VIEGAS</span>
        </h1>
        <p className={styles.tagline}>
          Levo experiências gastronômicas únicas para a intimidade da sua casa.
        </p>
        <div className={styles.ctaWrapper}>
          <Button href="#servicos" variant="primary">
            Conhecer Serviços
          </Button>
        </div>
      </div>
      <div className={styles.decorativeLine} aria-hidden="true">
        <span className={styles.kanji}>道</span>
      </div>
    </section>
  )
}
