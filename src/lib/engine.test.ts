import { describe, expect, it } from "vitest"
import { recommend } from "./engine"
import { decodeAnswers, encodeAnswers, type Answers } from "./quiz"
import { products } from "./products"

const base: Answers = { q1: "tzone", q2: ["acne", "pigmentation"], q3: "stings", q4: ["noSPF", "noRoutine"], q5: "oilyTight", q6: [] }

describe("answer code", () => {
  it("round-trips", () => {
    const code = encodeAnswers(base)
    expect(decodeAnswers(code)).toEqual(base)
  })
  it("rejects malformed codes", () => {
    expect(decodeAnswers("")).toBeNull()
    expect(decodeAnswers("1-2-3")).toBeNull()
    expect(decodeAnswers("9-1-0-0-0-0")).toBeNull()
    expect(decodeAnswers("0-0-0-0-0-0")).toBeNull() // no concern picked
    expect(decodeAnswers("0-zz-0-0-0-0")).toBeNull()
  })
})

describe("recommend", () => {
  it("fills every step and always includes a sunscreen", () => {
    const r = recommend(base)
    expect(r.picks.cleanser).not.toBeNull()
    expect(r.picks.toner).not.toBeNull()
    expect(r.picks.moisturiser).not.toBeNull()
    expect(r.picks.spf?.category).toBe("spf")
    expect(r.basics).toHaveLength(4)
    expect(r.basicsTotal).toBeGreaterThan(0)
  })

  it("marks oily-but-tight skin as dehydrated", () => {
    const r = recommend(base)
    expect(r.dehydrated).toBe(true)
    expect(r.concerns).toContain("dehydration")
  })

  it("keeps retinoids and strong actives out in pregnancy", () => {
    const r = recommend({ ...base, q6: ["pregnant"], q2: ["ageing", "texture"] })
    const all = [...Object.values(r.picks), ...r.extras.map((e) => e.product)].filter(Boolean) as NonNullable<typeof r.picks.treat>[]
    expect(all.every((p) => !p.avoidIfPregnant)).toBe(true)
    expect(r.watch.some((w) => w.title.startsWith("Pregnant"))).toBe(true)
  })

  it("gives diagnosed eczema or rosacea no actives in the treat step and no exfoliant", () => {
    const r = recommend({ ...base, q3: "diagnosed", q2: ["texture", "oiliness"] })
    expect(r.picks.treat?.activeStrength).toBe("none")
    expect(r.extras.some((e) => e.product.category === "exfoliant")).toBe(false)
    expect(r.picks.treat?.sensitiveSafe).toBe(true)
  })

  it("never gives a beginner a strong active", () => {
    for (const q1 of ["tight", "shiny", "tzone", "comfortable"] as const) {
      const r = recommend({ ...base, q1, q2: ["texture"], q4: ["noRoutine"] })
      const all = [...Object.values(r.picks), ...r.extras.map((e) => e.product)].filter(Boolean) as NonNullable<typeof r.picks.treat>[]
      expect(all.every((p) => p.activeStrength !== "strong")).toBe(true)
    }
  })

  it("covers every skin type for every basic step", () => {
    for (const q1 of ["tight", "shiny", "tzone", "comfortable"] as const) {
      for (const q3 of ["rarely", "red"] as const) {
        const r = recommend({ q1, q2: ["dryness"], q3, q4: [], q5: "fine", q6: [] })
        expect(r.picks.cleanser, `${q1}/${q3} cleanser`).not.toBeNull()
        expect(r.picks.toner, `${q1}/${q3} toner`).not.toBeNull()
        expect(r.picks.moisturiser, `${q1}/${q3} moisturiser`).not.toBeNull()
        expect(r.picks.spf, `${q1}/${q3} spf`).not.toBeNull()
        expect(r.picks.oil, `${q1}/${q3} oil`).not.toBeNull()
      }
    }
  })

  it("flags the SPF habit and adds spot patches for breakouts", () => {
    const r = recommend(base)
    expect(r.watch.some((w) => w.title.includes("skip SPF"))).toBe(true)
    expect(r.extras.some((e) => e.product.category === "spot-treatment")).toBe(true)
  })

  it("data: every product has a valid tier for its price", () => {
    for (const p of products) {
      if (p.priceGBP == null) continue
      const tier = p.priceGBP < 12 ? "£" : p.priceGBP <= 25 ? "££" : "£££"
      expect(p.tier, p.id).toBe(tier)
    }
  })
})
