import { buildWhatsAppUrl } from '@/lib/utils'
import type { NavLink, ServiceItem, GalleryItem, StatItem } from '@/types'

// Contact constants
export const WHATSAPP_NUMBER = '5551997590041'
export const TELEPHONE = '+55-51-99759-0041'
export const EMAIL = 'viegascaua@outlook.com'
export const INSTAGRAM_URL = 'https://instagram.com/viegasc_'
export const LOCATION = 'Porto Alegre, RS \u2014 Atende no RS e em SC'

// WhatsApp messages — proper Portuguese accented characters throughout
export const WHATSAPP_MESSAGES = {
  fab: 'Olá, Cauã! Encontrei seu trabalho e gostaria de saber mais sobre seus serviços como Private Chef.',
  eventos: 'Olá, Cauã! Tenho interesse em contratar você para um Evento Exclusivo. Poderia me passar mais informações sobre disponibilidade e proposta?',
  consultoria: 'Olá, Cauã! Gostaria de saber mais sobre a Consultoria em Gastronomia Japonesa. Como funciona o processo?',
  curso: 'Olá, Cauã! Tenho interesse no Curso Introdutório. Gostaria de entrar na lista de interesse para quando abrir novas turmas.',
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
  { value: '7+', label: 'Anos de dedicação' },
  { value: '12+', label: 'Eventos realizados' },
  { value: '66k', label: 'Alcance mensal' },
]

// Gallery items — all 14 real photos from public/images/
export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'gallery-1', src: '/images/food-table-1.jpeg', alt: 'Mesa de gastronomia japonesa em evento exclusivo', width: 800, height: 600 },
  { id: 'gallery-2', src: '/images/food-table-2.jpeg', alt: 'Apresentação artística de pratos japoneses', width: 800, height: 600 },
  { id: 'gallery-3', src: '/images/chef-event-1.jpeg', alt: 'Cauã Viegas - Private Chef em ação durante evento', width: 800, height: 600 },
  { id: 'gallery-4', src: '/images/chef-cooking-1.jpeg', alt: 'Preparo de prato em cozinha profissional', width: 800, height: 600 },
  { id: 'gallery-5', src: '/images/rice-detail.jpeg', alt: 'Detalhe do arroz shari preparado artesanalmente', width: 800, height: 600 },
  { id: 'gallery-6', src: '/images/three-fishes.jpg', alt: 'Seleção de peixes frescos para sashimi', width: 800, height: 600 },
  { id: 'gallery-7', src: '/images/food-table-3.jpeg', alt: 'Variedade de sushis e sashimis servidos', width: 800, height: 600 },
  { id: 'gallery-8', src: '/images/chef-event-2.jpeg', alt: 'Momento especial em evento gastronômico', width: 800, height: 600 },
  { id: 'gallery-9', src: '/images/chef-cooking-2.jpg', alt: 'Técnica de corte preciso de peixe', width: 800, height: 600 },
  { id: 'gallery-10', src: '/images/chef-bowl.jpg', alt: 'Cauã Viegas - Private Chef com tigela de ingredientes', width: 800, height: 600 },
  { id: 'gallery-11', src: '/images/food-table-4.jpg', alt: 'Mesa completa de experiência omakase', width: 800, height: 600 },
  { id: 'gallery-12', src: '/images/students-certificates.jpg', alt: 'Alunos do curso de sushi com certificados', width: 800, height: 600 },
  { id: 'gallery-13', src: '/images/hero-bg.jpeg', alt: 'Gastronomia japonesa de alto padrão', width: 800, height: 600 },
  { id: 'gallery-14', src: '/images/about-chef.jpg', alt: 'Retrato de Cauã Viegas - Private Chef', width: 800, height: 600 },
  { id: 'gallery-15', src: '/images/pescados-new.jpg', alt: 'Pescados selecionados para consultoria técnica e maturação', width: 800, height: 600 },
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
      'Ingredientes premium',
      'Apresentação do menu',
      'Atendimento em todo o Rio Grande do Sul e Santa Catarina',
    ],
    ctaLabel: 'Solicitar Proposta',
    messageKey: 'eventos',
    imageSrc: '/images/food-table-desktop.png',
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
    imageAlt: 'Cauã Viegas - Private Chef preparando pratos em cozinha profissional',
  },
  {
    id: 'curso',
    badge: '⏳ Em Breve',
    title: 'Curso Introdutório de Sushi',
    subtitle: 'Domine a arte do sushi',
    description: 'Curso introdutório com foco técnico para quem deseja construir base sólida na gastronomia japonesa. Conteúdo em fase final de desenvolvimento.',
    highlight: 'Formação estruturada para iniciantes, com método profissional e aplicação prática.',
    items: [
      'Preparos base da gastronomia Japonesa',
      'Técnicas de corte',
      'Manipulação correta',
      'Material didático incluso',
    ],
    ctaLabel: 'Entrar na Lista de Interesse',
    messageKey: 'curso',
    imageSrc: '/images/students-certificates.jpg',
    imageAlt: 'Alunos em formação técnica no curso introdutório de gastronomia japonesa',
  },
  {
    id: 'pescados',
    title: 'Consultoria de Maturação e Pescados',
    subtitle: 'Variedade, técnica e estratégia operacional.',
    description:
      'Consultoria focada em garantir variedade de peixes no seu cardápio — manipulados da forma correta. Desenvolvendo sabor, textura e minimizando o desperdício com a maturação.',
    highlight: 'Processo técnico para elevar qualidade percebida e eficiência operacional.',
    items: [
      'Manipulação correta dos Pescados',
      'Técnicas de corte',
      'Classificação profissional (cor, textura, frescor)',
      'Estratégia para cardápio e CMV',
    ],
    ctaLabel: 'Falar com o Consultor',
    messageKey: 'pescados',
    imageSrc: '/images/pescados-new.jpg',
    imageAlt: 'Seleção de pescados de alto padrão para consultoria gastronômica',
  },
]
