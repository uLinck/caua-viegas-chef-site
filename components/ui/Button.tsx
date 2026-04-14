import styles from './Button.module.css'
import clsx from 'clsx'

type ButtonVariant = 'primary' | 'whatsapp' | 'ghost'

interface ButtonBase {
  children: React.ReactNode
  variant?: ButtonVariant
  className?: string
}

interface ButtonAsLink extends ButtonBase {
  href: string
  target?: '_blank' | '_self'
  rel?: string
  onClick?: never
  type?: never
}

interface ButtonAsButton extends ButtonBase {
  href?: never
  target?: never
  rel?: never
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
}

type ButtonProps = ButtonAsLink | ButtonAsButton

export default function Button(props: ButtonProps) {
  const { children, variant = 'primary', className } = props

  const combinedClass = clsx(styles.button, styles[variant], className)

  if (props.href !== undefined) {
    const { href, target, rel } = props
    const isExternal = target === '_blank'
    const resolvedRel = rel ?? (isExternal ? 'noopener noreferrer' : undefined)

    return (
      <a
        href={href}
        target={target}
        rel={resolvedRel}
        className={combinedClass}
      >
        {children}
      </a>
    )
  }

  const { onClick, type = 'button' } = props as ButtonAsButton

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClass}
    >
      {children}
    </button>
  )
}
