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
                alt="Cauã Viegas - Private Chef"
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
              heading="Tradição Japonesa com Técnica e Precisão"
            />
            <div className={styles.bioText}>
              <p>
                Com mais de 7 anos dedicados à gastronomia japonesa de alto
                padrão, construí minha trajetória com foco em técnica,
                disciplina e respeito à tradição.
              </p>
              <p>
                Especialista em sushi e nas bases clássicas da culinária
                japonesa, atuo em eventos privados, consultorias para
                restaurantes e cursos voltados à formação técnica — sempre com
                ingredientes selecionados e execução precisa.
              </p>
              <p>
                Sou de Porto Alegre, mas atuo em todo o Rio Grande do Sul,
                planejando cada evento individualmente para garantir uma
                experiência única e inesquecível.
              </p>
            </div>
            <div className={styles.statGrid}>
              {STAT_ITEMS.map((stat) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
