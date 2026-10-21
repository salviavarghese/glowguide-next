"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { TOPICS } from "@/lib/topics"

const ROUTES: [string[], string][] = [
  [["breakout", "spot", "acne", "blackhead", "whitehead"], "/skin-types/oily"],
  [["red", "irritat", "sting", "sensitive", "eczema", "rosacea"], "/skin-types/sensitive"],
  [["dark mark", "pigment", "uneven", "brighten", "vitamin c", "arbutin", "tranexamic"], "/learn/ingredients#vitamin-c"],
  [["dehydrat"], "/learn/skin-types"],
  [["dry", "tight", "flak"], "/skin-types/dry"],
  [["oily", "shine", "shiny", "pore"], "/skin-types/oily"],
  [["combination", "t-zone", "tzone"], "/skin-types/combination"],
  [["normal"], "/skin-types/normal"],
  [["double", "oil cleans", "cleansing oil", "balm"], "/learn/double-cleansing"],
  [["spf", "sun", "uva", "pa++"], "/learn/spf"],
  [["purg"], "/learn/purging"],
  [["myth", "toothpaste", "lemon"], "/learn/myths"],
  [["gp", "doctor", "dermatolog", "how long"], "/learn/when-to-see-a-gp"],
  [["mistake"], "/learn/mistakes"],
  [["skin type", "which type", "what type", "bare-face", "bare face"], "/learn/skin-types"],
  [["five", "5 step", "routine", "order", "layer"], "/learn/five-steps"],
  [["snail"], "/learn/ingredients#snail-mucin"],
  [["centella", "cica"], "/learn/ingredients#centella-asiatica-cica"],
  [["niacinamide", "b3"], "/learn/ingredients#niacinamide-vitamin-b3"],
  [["retinol", "retinal", "retinoid"], "/learn/ingredients#retinol-and-retinal"],
  [["hyaluronic"], "/learn/ingredients#hyaluronic-acid"],
  [["ceramide"], "/learn/ingredients#ceramides"],
  [["heartleaf", "houttuynia"], "/learn/ingredients#heartleaf-houttuynia-cordata"],
  [["rice"], "/learn/ingredients#rice-extract"],
  [["mugwort", "artemisia"], "/learn/ingredients#mugwort-artemisia"],
  [["salicylic", "bha"], "/learn/ingredients#salicylic-acid-bha"],
  [["aha", "glycolic", "lactic", "mandelic", "exfol"], "/learn/ingredients#ahas-glycolic-lactic-mandelic"],
  [["azelaic"], "/learn/ingredients#azelaic-acid"],
  [["ingredient", "glossary"], "/learn/ingredients"],
]

export function routeFor(query: string): string {
  const q = query.trim().toLowerCase()
  if (!q) return "/learn"
  const exact = TOPICS.find((t) => t.label.toLowerCase() === q)
  if (exact) return exact.href
  for (const [keys, href] of ROUTES) if (keys.some((k) => q.includes(k))) return href
  return "/learn"
}

export function SearchForm() {
  const router = useRouter()
  const [value, setValue] = useState("")
  return (
    <form
      className="search"
      role="search"
      action="/learn"
      onSubmit={(e) => {
        e.preventDefault()
        router.push(routeFor(value))
      }}
    >
      <label className="sr-only" htmlFor="q">
        Find a concern, ingredient or step
      </label>
      <input
        id="q"
        name="q"
        type="search"
        list="topics"
        placeholder="Breakouts, snail mucin, double cleansing"
        autoComplete="off"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <datalist id="topics">
        {TOPICS.map((t) => (
          <option key={t.label} value={t.label} />
        ))}
      </datalist>
      <button className="btn btn--secondary" type="submit">
        Find
      </button>
    </form>
  )
}
