import { buildWhatsAppUrl } from '@/lib/utils'
import type { NavLink, ServiceItem, GalleryItem, StatItem } from '@/types'

// Contact constants
export const WHATSAPP_NUMBER = '5551997590041'
export const TELEPHONE = '+55-51-99759-0041'
export const EMAIL = 'viegascaua@outlook.com'
export const INSTAGRAM_URL = 'https://instagram.com/viegasc_'
export const LOCATION = 'Porto Alegre, RS \u2014 Atende em todo estado'

// WhatsApp messages — proper Portuguese accented characters throughout
export const WHATSAPP_MESSAGES = {
  fab: 'Olá, Cauã! Encontrei seu trabalho e gostaria de saber mais sobre seus serviços de Personal Chef.',
  eventos: 'Olá, Cauã! Tenho interesse em contratar você para um Evento Exclusivo. Poderia me passar mais informações sobre disponibilidade e proposta?',
  consultoria: 'Olá, Cauã! Gostaria de saber mais sobre a Consultoria em Gastronomia Japonesa. Como funciona o processo?',
  curso: 'Olá, Cauã! Tenho interesse no Curso Introdutório de Sushi. Quais são as datas disponíveis e como faço para me inscrever?',
} as const

// Pre-built WhatsApp URLs
export const WHATSAPP_URL_FAB = buildWhatsAppUrl(WHATSAPP_NUMBER, WHATSAPP_MESSAGES.fab)
export const WHATSAPP_URL_EVENTOS = buildWhatsAppUrl(WHATSAPP_NUMBER, WHATSAPP_MESSAGES.eventos)
export const WHATSAPP_URL_CONSULTORIA = buildWhatsAppUrl(WHATSAPP_NUMBER, WHATSAPP_MESSAGES.consultoria)
export const WHATSAPP_URL_CURSO = buildWhatsAppUrl(WHATSAPP_NUMBER, WHATSAPP_MESSAGES.curso)

// Navigation links (proper Portuguese accents in labels; ASCII-only in hrefs)
export const NAV_LINKS: NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contact' },
]

// Stat items
export const STAT_ITEMS: StatItem[] = [
  { value: '7+', label: 'Anos de Dedicação' },
  { value: '12+', label: 'Eventos Exclusivos' },
  { value: '50k+', label: 'Alcance Mensal' },
]

// Gallery items (4:3 aspect ratio)
export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'gallery-1', src: '/images/gallery-01.jpg', alt: 'Sushi premium preparado pelo Chef Cauã Viegas', width: 800, height: 600 },
  { id: 'gallery-2', src: '/images/gallery-02.jpg', alt: 'Prato de sashimi com apresentação artística', width: 800, height: 600 },
  { id: 'gallery-3', src: '/images/gallery-03.jpg', alt: 'Evento exclusivo de gastronomia japonesa', width: 800, height: 600 },
  { id: 'gallery-4', src: '/images/gallery-04.jpg', alt: 'Detalhes de técnica de corte japonês', width: 800, height: 600 },
  { id: 'gallery-5', src: '/images/gallery-05.jpg', alt: 'Mesa completa de experiência omakase', width: 800, height: 600 },
]

// Service items (3 services)
export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 'eventos',
    title: 'Eventos Exclusivos',
    subtitle: 'Experiências gastronômicas únicas',
    description: 'Transforme seu evento em uma experiência inesquecível com gastronomia japonesa de alto padrão. Menu personalizado, serviço impecável e apresentação artística.',
    highlight: 'Cada evento é uma experiência única, criada especialmente para você.',
    items: [
      'Menu personalizado',
      'Ingredientes premium selecionados',
      'Serviço e apresentação artística',
      'Atendimento em todo o RS',
    ],
    ctaLabel: 'Solicitar Proposta',
    messageKey: 'eventos',
    imageSrc: '/images/food-table-1.jpeg',
    imageAlt: 'Mesa elegante com pratos de gastronomia japonesa em evento exclusivo',
  },
  {
    id: 'consultoria',
    title: 'Consultoria em Gastronomia Japonesa',
    subtitle: 'Eleve o padrão do seu restaurante',
    description: 'Consultoria especializada para restaurantes que desejam implementar ou aprimorar seu menu de gastronomia japonesa com técnicas autênticas.',
    highlight: 'Conhecimento técnico aliado à visão estratégica para seu negócio.',
    items: [
      'Análise e reestruturação de cardápio',
      'Treinamento de equipe',
      'Seleção de fornecedores',
      'Padronização de processos',
    ],
    ctaLabel: 'Conhecer a Consultoria',
    messageKey: 'consultoria',
    imageSrc: '/images/chef-cooking-1.jpeg',
    imageAlt: 'Chef Cauã Viegas preparando pratos em cozinha profissional',
  },
  {
    id: 'curso',
    title: 'Curso Introdutório de Sushi',
    subtitle: 'Domine a arte do sushi',
    description: 'Aprenda as técnicas fundamentais da culinária japonesa diretamente com um chef especializado. Do preparo do arroz ao corte preciso do peixe.',
    highlight: 'Uma imersão completa no universo do sushi para iniciantes e entusiastas.',
    items: [
      'Preparo do arroz shari',
      'Técnicas de corte (sashimi e nigiri)',
      'Montagem e apresentação',
      'Material didático incluso',
    ],
    ctaLabel: 'Quero Me Inscrever',
    messageKey: 'curso',
    imageSrc: '/images/students-certificates.jpg',
    imageAlt: 'Alunos com certificados após curso de sushi com o Chef Cauã Viegas',
  },
]
