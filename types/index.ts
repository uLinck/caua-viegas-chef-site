export interface ServiceItem {
  id: string
  title: string
  subtitle: string
  description: string
  highlight: string
  items: string[]
  ctaLabel: string
  messageKey: 'fab' | 'eventos' | 'consultoria' | 'curso'
}

export interface GalleryItem {
  id: string
  src: string
  alt: string
  width: number
  height: number
}

export interface StatItem {
  value: string
  label: string
}

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  platform: 'instagram' | 'whatsapp' | 'email'
  href: string
  label: string
}
