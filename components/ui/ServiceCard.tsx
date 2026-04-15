import type { ServiceItem } from '@/types'
import Image from 'next/image'
import { WHATSAPP_URL_EVENTOS, WHATSAPP_URL_CONSULTORIA, WHATSAPP_URL_CURSO } from '@/lib/constants'
import Button from '@/components/ui/Button'
import styles from './ServiceCard.module.css'

interface ServiceCardProps {
  service: ServiceItem
}

const ctaUrls: Record<string, string> = {
  eventos: WHATSAPP_URL_EVENTOS,
  consultoria: WHATSAPP_URL_CONSULTORIA,
  curso: WHATSAPP_URL_CURSO,
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className={styles.serviceCard}>
      <Image
        src={service.imageSrc}
        alt={service.imageAlt}
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        className={styles.cardBgImage}
        loading="lazy"
      />
      <div className={styles.cardOverlay} aria-hidden="true" />
      <h3 className={styles.cardTitle}>{service.title}</h3>
      <span className={styles.cardSubtitle}>{service.subtitle}</span>
      <p className={styles.cardDescription}>{service.description}</p>
      <blockquote className={styles.cardHighlight}>{service.highlight}</blockquote>
      <ul className={styles.cardItems}>
        {service.items.map((item) => (
          <li key={item} className={styles.cardItem}>
            <svg
              className={styles.checkIcon}
              width="10"
              height="10"
              viewBox="0 0 10 10"
              aria-hidden="true"
              fill="currentColor"
            >
              <path d="M8.5 2L4 7.5 1.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
      <div className={styles.cardCta}>
        <Button
          href={ctaUrls[service.id]}
          target="_blank"
          rel="noopener noreferrer"
          variant="whatsapp"
          aria-label={`${service.ctaLabel} — ${service.title}`}
        >
          {service.ctaLabel}
        </Button>
      </div>
    </div>
  )
}
