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
  pescados: 'Olá, Cauã! Gostaria de saber mais sobre a Consultoria de Pescados. Como funciona o processo de análise e seleção para restaurantes?',
} as const

// Pre-built WhatsApp URLs
export const WHATSAPP_URL_FAB = buildWhatsAppUrl(WHATSAPP_NUMBER, WHATSAPP_MESSAGES.fab)
export const WHATSAPP_URL_EVENTOS = buildWhatsAppUrl(WHATSAPP_NUMBER, WHATSAPP_MESSAGES.eventos)
export const WHATSAPP_URL_CONSULTORIA = buildWhatsAppUrl(WHATSAPP_NUMBER, WHATSAPP_MESSAGES.consultoria)
export const WHATSAPP_URL_CURSO = buildWhatsAppUrl(WHATSAPP_NUMBER, WHATSAPP_MESSAGES.curso)
export const WHATSAPP_URL_PESCADOS = buildWhatsAppUrl(WHATSAPP_NUMBER, WHATSAPP_MESSAGES.pescados)

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

// Gallery items — all 14 real photos from public/images/
export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'gallery-1', src: '/images/food-table-1.jpeg', alt: 'Mesa de gastronomia japonesa em evento exclusivo', width: 800, height: 600 },
  { id: 'gallery-2', src: '/images/food-table-2.jpeg', alt: 'Apresentação artística de pratos japoneses', width: 800, height: 600 },
  { id: 'gallery-3', src: '/images/chef-event-1.jpeg', alt: 'Chef Cauã Viegas em ação durante evento', width: 800, height: 600 },
  { id: 'gallery-4', src: '/images/chef-cooking-1.jpeg', alt: 'Preparo de prato em cozinha profissional', width: 800, height: 600 },
  { id: 'gallery-5', src: '/images/rice-detail.jpeg', alt: 'Detalhe do arroz shari preparado artesanalmente', width: 800, height: 600 },
  { id: 'gallery-6', src: '/images/three-fishes.jpg', alt: 'Seleção de peixes frescos para sashimi', width: 800, height: 600 },
  { id: 'gallery-7', src: '/images/food-table-3.jpeg', alt: 'Variedade de sushis e sashimis servidos', width: 800, height: 600 },
  { id: 'gallery-8', src: '/images/chef-event-2.jpeg', alt: 'Momento especial em evento gastronômico', width: 800, height: 600 },
  { id: 'gallery-9', src: '/images/chef-cooking-2.jpg', alt: 'Técnica de corte preciso de peixe', width: 800, height: 600 },
  { id: 'gallery-10', src: '/images/chef-bowl.jpg', alt: 'Chef Cauã Viegas com tigela de ingredientes', width: 800, height: 600 },
  { id: 'gallery-11', src: '/images/food-table-4.jpg', alt: 'Mesa completa de experiência omakase', width: 800, height: 600 },
  { id: 'gallery-12', src: '/images/students-certificates.jpg', alt: 'Alunos do curso de sushi com certificados', width: 800, height: 600 },
  { id: 'gallery-13', src: '/images/hero-bg.jpeg', alt: 'Gastronomia japonesa de alto padrão', width: 800, height: 600 },
  { id: 'gallery-14', src: '/images/about-chef.jpg', alt: 'Retrato do Chef Cauã Viegas', width: 800, height: 600 },
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
  {
    id: 'pescados',
    title: 'Consultoria de Pescados',
    subtitle: 'Qualidade, técnica e estratégia para elevar seu cardápio',
    description: 'Atuação especializada na seleção, análise e aplicação de pescados de alto padrão para restaurantes. Mais do que fornecer peixe, o foco é atuar como consultor estratégico, ajudando na escolha dos melhores produtos, identificação de melhorias no CMV e desenvolvimento de um cardápio mais rentável e atrativo.',
    highlight: 'Suporte técnico na utilização de pescados como atum e peixes brancos, garantindo melhor desempenho, sabor e experiência final ao cliente.',
    items: [
      'Classificação profissional de pescados (cor, textura e qualidade)',
      'Especialização em atum de alto padrão',
      'Consultoria estratégica para cardápio e CMV',
      'Curadoria de produtos com foco em performance e sabor',
      'Experiência direta com indústria e fornecimento',
    ],
    ctaLabel: 'Falar com o Consultor',
    messageKey: 'pescados',
    imageSrc: '/images/three-fishes.jpg',
    imageAlt: 'Seleção de pescados de alto padrão para consultoria gastronômica',
    badge: 'Especializado',
    maturationTitle: 'Maturação de Pescados',
    maturationDescription: 'Técnica avançada em ambiente controlado que intensifica sabor, melhora textura e eleva o nível do produto final.',
  },
]
