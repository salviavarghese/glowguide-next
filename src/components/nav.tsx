"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { CloseIcon, MenuIcon } from "./icons"

const items = [
  { href: "/quiz", label: "Quiz" },
  { href: "/skin-types", label: "Skin types" },
  { href: "/learn", label: "Learn" },
  { href: "/about", label: "About" },
]

export function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  const isCurrent = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/"))

  const links = items.map((item) => (
    <li key={item.href}>
      <Link href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined} onClick={() => setOpen(false)}>
        {item.label}
      </Link>
    </li>
  ))

  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <Link className="wordmark" href="/" aria-label="GlowGuide home">
          GlowGuide
        </Link>
        <nav aria-label="Main">
          <ul className="nav__links">{links}</ul>
        </nav>
        <Link className="btn btn--primary nav__cta" href="/quiz">
          Start the quiz
        </Link>
        <button className="nav__menu" type="button" aria-expanded={open} aria-controls="menu-panel" onClick={() => setOpen((o) => !o)}>
          <span>{open ? "Close" : "Menu"}</span>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      <div className={`menu-panel${open ? " is-open" : ""}`} id="menu-panel">
        <ul>{links}</ul>
        <Link className="btn btn--primary btn--block" href="/quiz" onClick={() => setOpen(false)}>
          Start the quiz
        </Link>
      </div>
    </header>
  )
}
