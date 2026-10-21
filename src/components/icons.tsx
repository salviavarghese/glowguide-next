// The small inline icon set from DESIGN.md: 20px, 1.75px ink stroke, used only where it carries meaning.

type Props = { className?: string }

const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true }

export function ArrowIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function BackIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  )
}

export function ExternalIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M14 5h5v5M19 5l-8 8M19 14v5H5V5h5" />
    </svg>
  )
}

export function MenuIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function AlertIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 8v5M12 16.5v.5" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  )
}
