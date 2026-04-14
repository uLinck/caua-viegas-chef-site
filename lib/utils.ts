/**
 * Build a WhatsApp Web URL with pre-filled message.
 * Uses encodeURIComponent to handle Portuguese accented characters (ã, é, ç, ó).
 */
export function buildWhatsAppUrl(phone: string, message: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
