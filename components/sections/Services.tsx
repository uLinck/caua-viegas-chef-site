import SectionTitle from '@/components/ui/SectionTitle'
import ServiceCard from '@/components/ui/ServiceCard'
import { SERVICE_ITEMS } from '@/lib/constants'
import styles from './Services.module.css'

export default function Services() {
  return (
    <section id="servicos" className={`${styles.servicesSection} revealOnScroll`}>
      <div className={styles.servicesContainer}>
        <SectionTitle
          eyebrow="SERVIÇOS"
          heading="O Que Ofereço"
          centered
        />
        <div className={styles.servicesGrid}>
          {SERVICE_ITEMS.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
