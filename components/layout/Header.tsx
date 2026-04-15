'use client'

import { useState, useEffect } from 'react'
import { NAV_LINKS } from '@/lib/constants'
import styles from './Header.module.css'
import clsx from 'clsx'

const VISIBLE_HREFS = ['#inicio', '#sobre', '#servicos']

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isDrawerOpen])

  const closeDrawer = () => setIsDrawerOpen(false)

  const visibleLinks = NAV_LINKS.filter(link =>
    VISIBLE_HREFS.includes(link.href)
  )

  return (
    <header className={clsx(styles.header, isScrolled && styles.scrolled)}>
      <a href="#inicio" className={styles.logo} onClick={closeDrawer}>
        CAUÃ VIEGAS
      </a>

      <nav className={styles.desktopNav} aria-label="Navegação principal">
        {visibleLinks.map(link => (
          <a key={link.href} href={link.href} className={styles.navLink}>
            {link.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className={styles.hamburger}
        aria-label={isDrawerOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isDrawerOpen}
        onClick={() => setIsDrawerOpen(v => !v)}
      >
        <span className={clsx(styles.hamburgerLine, isDrawerOpen && styles.open)} />
        <span className={clsx(styles.hamburgerLine, isDrawerOpen && styles.open)} />
        <span className={clsx(styles.hamburgerLine, isDrawerOpen && styles.open)} />
      </button>

      <nav
        className={clsx(styles.drawer, isDrawerOpen && styles.drawerOpen)}
        aria-label="Menu móvel"
        aria-hidden={!isDrawerOpen}
      >
        {visibleLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={styles.drawerLink}
            onClick={closeDrawer}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
