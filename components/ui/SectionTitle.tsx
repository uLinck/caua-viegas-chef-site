import styles from './SectionTitle.module.css'
import clsx from 'clsx'

interface SectionTitleProps {
  eyebrow?: string
  heading: string
  as?: 'h1' | 'h2' | 'h3'
  centered?: boolean
}

export default function SectionTitle({
  eyebrow,
  heading,
  as: Tag = 'h2',
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={clsx(styles.titleWrapper, centered && styles.centered)}>
      {eyebrow && (
        <span className={styles.eyebrow}>{eyebrow}</span>
      )}
      <Tag className={styles.heading}>{heading}</Tag>
      <div className={styles.rule} aria-hidden="true" />
    </div>
  )
}
