'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
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
  const lockedScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const body = document.body

    if (isDrawerOpen) {
      lockedScrollY.current = window.scrollY
      body.style.position = 'fixed'
      body.style.top = `-${lockedScrollY.current}px`
      body.style.left = '0'
      body.style.right = '0'
      body.style.width = '100%'
      body.style.overflow = 'hidden'
    } else {
      const hadLock = body.style.position === 'fixed'
      body.style.position = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.width = ''
      body.style.overflow = ''

      if (hadLock) {
        window.scrollTo(0, lockedScrollY.current)
      }
    }

    return () => {
      const hadLock = body.style.position === 'fixed'
      body.style.position = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.width = ''
      body.style.overflow = ''
      if (hadLock) {
        window.scrollTo(0, lockedScrollY.current)
      }
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
