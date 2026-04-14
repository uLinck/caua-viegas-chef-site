import Image from 'next/image'
import styles from './Hero.module.css'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className={styles.heroSection} id="inicio">
      <Image
        src="/images/hero-bg.jpg"
        alt="Cauã Viegas - Personal Chef preparando gastronomia japonesa"
        fill
        style={{ objectFit: 'cover' }}
        sizes="100vw"
        preload={true}
      />
      <div className={styles.heroOverlay} aria-hidden="true" />
      <span className={styles.kanji} aria-hidden="true">道</span>
      <div className={styles.heroContent}>
        <span className={styles.eyebrow}>PERSONAL CHEF — GASTRONOMIA JAPONESA</span>
        <h1 className={styles.heading}>
          Cauã Viegas
        </h1>
        <p className={styles.tagline}>
          Da tradição japonesa à sua mesa — experiências gastronômicas únicas em Porto Alegre e todo o RS.
        </p>
        <div className={styles.ctaWrapper}>
          <Button href="#contact" variant="primary">
            Solicitar Experiência
          </Button>
        </div>
      </div>
    </section>
  )
}
