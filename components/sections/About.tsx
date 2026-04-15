import Image from 'next/image'
import SectionTitle from '@/components/ui/SectionTitle'
import StatCard from '@/components/ui/StatCard'
import { STAT_ITEMS } from '@/lib/constants'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="sobre" className={`${styles.aboutSection} revealOnScroll`}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutGrid}>
          {/* LEFT column: portrait */}
          <div className={styles.portraitColumn}>
            <div className={styles.portraitWrapper}>
              <Image
                src="/images/about-chef.jpg"
                alt="Cauã Viegas - Personal Chef"
                width={600}
                height={800}
                style={{ width: '100%', height: 'auto' }}
                sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 500px"
                className={styles.portraitImage}
              />
            </div>
          </div>

          {/* RIGHT column: bio */}
          <div className={styles.bioColumn}>
            <SectionTitle
              eyebrow="SOBRE O CHEF"
              heading="Formado na Tradição, Especializado na Arte"
            />
            <div className={styles.bioText}>
              <p>
                Com mais de 7 anos dedicados à gastronomia japonesa de alto padrão, construí
                uma reputação baseada em precisão técnica e experiências que transcendem
                a refeição.
              </p>
              <p>
                Sou especialista em sushi e técnicas clássicas japonesas. Atendo eventos privados,
                ofereço consultorias para restaurantes e ministro cursos para quem quer dominar a
                arte do sushi — sempre com ingredientes premium e apresentação artística.
              </p>
              <p>
                Baseado em Porto Alegre e atuando em todo o Rio Grande do Sul, planejo cada
                evento individualmente para garantir uma experiência única e inesquecível.
              </p>
            </div>
            <div className={styles.statGrid}>
              {STAT_ITEMS.map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
