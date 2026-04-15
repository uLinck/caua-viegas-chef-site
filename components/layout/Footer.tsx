import { EMAIL, WHATSAPP_URL_FAB, INSTAGRAM_URL } from '@/lib/constants'
import SocialIcons from '@/components/ui/SocialIcons'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={`${styles.footerWrapper} revealOnScroll`}>
      <div className={styles.footerContent}>
        <p className={styles.brand}>
          <span className={styles.brandName}>Cauã Viegas</span>
          {' — '}Personal Chef · Gastronomia Japonesa
        </p>
        <SocialIcons
          instagramUrl={INSTAGRAM_URL}
          whatsappUrl={WHATSAPP_URL_FAB}
          email={EMAIL}
        />
        <hr className={styles.divider} aria-hidden="true" />
        <p className={styles.copyright}>
          &copy; 2026 Cauã Viegas. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
