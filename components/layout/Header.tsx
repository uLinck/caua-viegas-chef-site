'use client'

import { useState, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { NAV_LINKS, WHATSAPP_URL_FAB } from '@/lib/constants'
import ThemeToggle from '@/components/ui/ThemeToggle'
import Button from '@/components/ui/Button'
import styles from './Header.module.css'
import clsx from 'clsx'

const VISIBLE_HREFS = ['#inicio', '#sobre', '#servicos', '#galeria']

export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const resolveHref = (hash: string) => (isHome ? hash : `/${hash}`)

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

  const closeDrawer = useCallback(() => setIsDrawerOpen(false), [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        closeDrawer()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isDrawerOpen, closeDrawer])

  const visibleLinks = NAV_LINKS.filter(link =>
    VISIBLE_HREFS.includes(link.href)
  )

  return (
    <header className={clsx(styles.header, isScrolled && styles.scrolled)}>
      {/* Left: Logo */}
      <a href={resolveHref('#inicio')} className={styles.logo} onClick={closeDrawer}>
        Cauã Viegas - Private Chef
      </a>

      {/* Center: Desktop nav links */}
      <nav className={styles.desktopNav} aria-label="Navegação principal">
        {visibleLinks.map(link => (
          <a key={link.href} href={resolveHref(link.href)} className={styles.navLink}>
            {link.label}
          </a>
        ))}
      </nav>

      {/* Right: Actions group */}
      <div className={styles.headerActions}>
        <ThemeToggle />
        <Button
          href={WHATSAPP_URL_FAB}
          target="_blank"
          variant="whatsapp"
          className={styles.ctaButton}
          aria-label="Entrar em contato via WhatsApp"
        >
          Entrar em Contato
        </Button>
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
      </div>

      {/* Backdrop overlay for mobile drawer */}
      <div
        className={clsx(styles.backdrop, isDrawerOpen && styles.backdropVisible)}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Mobile drawer — partial width, right-anchored */}
      <nav
        className={clsx(styles.drawer, isDrawerOpen && styles.drawerOpen)}
        aria-label="Menu móvel"
        aria-hidden={!isDrawerOpen}
      >
        {visibleLinks.map(link => (
          <a
            key={link.href}
            href={resolveHref(link.href)}
            className={styles.drawerLink}
            onClick={closeDrawer}
          >
            {link.label}
          </a>
        ))}
        {/* WhatsApp CTA repeated in drawer for mobile access */}
        <Button
          href={WHATSAPP_URL_FAB}
          target="_blank"
          variant="whatsapp"
          className={styles.drawerCta}
          aria-label="Entrar em contato via WhatsApp"
        >
          Entrar em Contato
        </Button>
      </nav>
    </header>
  )
}
