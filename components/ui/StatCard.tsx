'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { StatItem } from '@/types'
import styles from './StatCard.module.css'

export default function StatCard({ value, label }: StatItem) {
  // Parse numeric part and suffix: "7+" -> (7, "+"), "50k+" -> (50, "k+")
  const match = value.match(/^(\d+)(.*)$/)
  const numericValue = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : value

  const [displayValue, setDisplayValue] = useState<number>(0)
  const cardRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef<boolean>(false)

  const animateCountUp = useCallback(() => {
    const duration = 1500
    const startTime = performance.now()

    function easeOutCubic(t: number): number {
      return 1 - Math.pow(1 - t, 3)
    }

    function tick(now: number) {
      const elapsed = now - startTime
      const t = Math.min(elapsed / duration, 1)
      const eased = easeOutCubic(t)
      setDisplayValue(Math.round(eased * numericValue))

      if (t < 1) {
        requestAnimationFrame(tick)
      } else {
        setDisplayValue(numericValue)
      }
    }

    requestAnimationFrame(tick)
  }, [numericValue])

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            observer.unobserve(entry.target)

            // Respect prefers-reduced-motion
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
              setDisplayValue(numericValue)
            } else {
              animateCountUp()
            }
          }
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
    }
  }, [animateCountUp, numericValue])

  return (
    <div ref={cardRef} className={styles.statCard}>
      <dl>
        <dt className={styles.statLabel}>{label}</dt>
        <dd className={styles.statValue}>
          {displayValue}{suffix}
        </dd>
      </dl>
    </div>
  )
}
