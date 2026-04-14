import Image from 'next/image'
import SectionTitle from '@/components/ui/SectionTitle'
import StatCard from '@/components/ui/StatCard'
import { STAT_ITEMS } from '@/lib/constants'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="sobre" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutGrid}>
          {/* Left column: bio */}
          <div className={styles.bioColumn}>
            <SectionTitle
              eyebrow="SOBRE O CHEF"
              heading="Formado na Tradição, Especializado na Arte"
            />

            <div className={styles.bioText}>
              <p>
                Com mais de 7 anos dedicados à gastronomia japonesa de alto padrão, Cauã Viegas
                construiu uma reputação baseada em precisão técnica e experiências que transcendem
                a refeição.
              </p>
              <p>
                Especialista em sushi e técnicas clássicas japonesas, atende eventos privados,
                consultorias para restaurantes e ministra cursos para quem quer dominar a arte do
                sushi — sempre com ingredientes premium e apresentação artística.
              </p>
              <p>
                Baseado em Porto Alegre e atuando em todo o Rio Grande do Sul, cada evento é
                planejado individualmente para garantir uma experiência única e inesquecível.
              </p>
            </div>

            <div className={styles.statGrid}>
              {STAT_ITEMS.map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>

          {/* Right column: portrait */}
          <div className={styles.portraitColumn}>
            <div className={styles.portraitWrapper}>
              <Image
                src="/images/chef-portrait.jpg"
                alt="Cauã Viegas - Personal Chef"
                width={600}
                height={800}
                style={{ width: '100%', height: 'auto' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
