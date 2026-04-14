import type { StatItem } from '@/types'
import styles from './StatCard.module.css'

export default function StatCard({ value, label }: StatItem) {
  return (
    <div className={styles.statCard}>
      <dl>
        <dt className={styles.statLabel}>{label}</dt>
        <dd className={styles.statValue}>{value}</dd>
      </dl>
    </div>
  )
}
