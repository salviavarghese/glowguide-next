// Rule-based recommendation engine. Pure functions, no I/O. See mockup/PRD.md for the rules in prose.

import type { Answers } from "./quiz"
import { products as allProducts, type Category, type Concern, type Product, type SkinType, type Step } from "./products"

export const TYPE_COPY: Record<SkinType, { label: string; copy: string }> = {
  oily: {
    label: "Oily",
    copy: "Your skin makes more oil than it needs, so it looks shiny by lunchtime and pores show more. That oil is also protection, so the aim is to balance it with light layers rather than strip it away, which only makes it produce more.",
  },
  dry: {
    label: "Dry",
    copy: "Your skin makes less oil than it needs, so it feels tight after washing and can flake. It needs gentle cleansing, richer moisture and ingredients that help it hold on to water.",
  },
  combination: {
    label: "Combination",
    copy: "Your forehead and nose make more oil than your cheeks. It is the most common type and the easiest to over-treat, because what calms the T-zone can dry out the cheeks. Light, balanced layers work best.",
  },
  sensitive: {
    label: "Sensitive",
    copy: "Your skin reacts: it stings, flushes or itches with products other people find fine. The barrier, the outer layer that keeps water in and irritants out, needs protecting, so the routine is short, fragrance-free and gentle.",
  },
  normal: {
    label: "Normal",
    copy: "Your skin is comfortable most of the time, neither oily nor tight. The job is to keep it that way: a simple routine, daily SPF, and nothing harsh.",
  },
}

export const CONCERN_LABEL: Record<Concern, string> = {
  acne: "breakouts",
  redness: "redness",
  pigmentation: "dark marks",
  ageing: "fine lines",
  dryness: "flaky patches",
  oiliness: "shine and pores",
  texture: "texture",
  dehydration: "dehydration",
}

const SKIN_FROM_Q1: Record<Answers["q1"], SkinType> = { tight: "dry", shiny: "oily", tzone: "combination", comfortable: "normal" }

export type Picks = {
  oil: Product | null
  cleanser: Product | null
  toner: Product | null
  treat: Product | null
  moisturiser: Product | null
  spf: Product | null
}

export type Watch = { title: string; body: string }

export type Recommendation = {
  skin: SkinType
  skinLabel: string
  skinCopy: string
  concerns: Concern[]
  sensitive: boolean
  dehydrated: boolean
  barrierFirst: boolean
  picks: Picks
  extras: { label: string; product: Product }[]
  watch: Watch[]
  basics: { label: string; product: Product }[]
  basicsTotal: number
}

export function recommend(a: Answers, products: Product[] = allProducts): Recommendation {
  const skin = SKIN_FROM_Q1[a.q1]
  const concerns: Concern[] = a.q2.filter((c) => c !== "dull") as Concern[]
  const dehydrated = a.q5 === "oilyTight" || (a.q5 === "dry" && skin !== "dry")
  if ((a.q5 === "oilyTight" || (a.q5 === "dry" && skin !== "dry")) && !concerns.includes("dehydration")) concerns.push("dehydration")
  const sensitive = a.q3 === "stings" || a.q3 === "red" || a.q3 === "diagnosed"
  const diagnosed = a.q3 === "diagnosed"
  const pregnant = a.q6.includes("pregnant")
  const under16 = a.q6.includes("under16")
  const prescription = a.q6.includes("prescription")
  const gentleOnly = diagnosed || under16 || prescription
  const beginner = a.q4.includes("noRoutine") || !a.q4.includes("actives")
  const noSpf = a.q4.includes("noSPF")

  const ok = (p: Product) => {
    if (!p.skinTypes.includes(skin) && !(sensitive && p.skinTypes.includes("sensitive"))) return false
    if (pregnant && p.avoidIfPregnant) return false
    if (sensitive && !p.sensitiveSafe) return false
    if ((gentleOnly || beginner) && p.activeStrength === "strong") return false
    if (gentleOnly && p.activeStrength !== "none" && p.step === "treat") return false
    return true
  }

  const score = (p: Product, step: Step) => {
    let s = 0
    s += 3 * p.concerns.filter((c) => concerns.includes(c)).length
    if (p.skinTypes.includes(skin)) s += 2
    if (sensitive && p.fragranceFree) s += 2
    if (sensitive && p.skinTypes.includes("sensitive")) s += 2
    if (p.tier === "£") s += 2
    else if (p.tier === "££") s += 1
    if (p.origin === "KR") s += 1
    if (step === "cleanse" && (skin === "dry" || skin === "sensitive") && ["cream", "lotion", "gel"].includes(p.texture)) s += 1
    if (step === "moisturise") {
      if ((skin === "oily" || skin === "combination") && ["gel", "lotion", "watery"].includes(p.texture)) s += 2
      if (skin === "dry" && p.texture === "cream") s += 2
    }
    if (step === "treat" && (p.category === "serum" || p.category === "essence")) s += 1
    return s
  }

  const pick = (cats: Category[], step: Step, anyStep = false): Product | null => {
    const cands = products.filter((p) => cats.includes(p.category) && (anyStep || p.step === step) && ok(p))
    cands.sort((x, y) => score(y, step) - score(x, step) || (x.priceGBP ?? 99) - (y.priceGBP ?? 99))
    return cands[0] ?? null
  }

  const picks: Picks = {
    oil: pick(["cleansing-oil"], "cleanse"),
    cleanser: pick(["cleanser"], "cleanse"),
    toner: pick(["toner"], "tone"),
    treat: pick(["serum", "essence"], "treat"),
    moisturiser: pick(["moisturiser"], "moisturise"),
    spf: pick(["spf"], "protect"),
  }

  const extras: Recommendation["extras"] = []
  if (concerns.includes("acne")) {
    const patch = pick(["spot-treatment"], "extra", true)
    if (patch) extras.push({ label: "Spot patches", product: patch })
  }
  if ((concerns.includes("texture") || concerns.includes("oiliness")) && !gentleOnly) {
    const ex = pick(["exfoliant"], "extra", true)
    if (ex) extras.push({ label: "Gentle exfoliant, two nights a week, from week 6", product: ex })
  }

  const watch: Watch[] = []
  if (pregnant)
    watch.push({
      title: "Pregnant or breastfeeding",
      body: "Retinoids and strong acids are left out of your routine. Azelaic acid, niacinamide and vitamin C are the usual safe swaps, but check with your midwife or GP before adding anything new.",
    })
  if (prescription)
    watch.push({
      title: "On prescription acne treatment",
      body: "Your routine is hydration and SPF only, with no extra actives. Prescription treatments already do the heavy lifting and extra acids or retinol on top usually just cause irritation.",
    })
  if (under16)
    watch.push({
      title: "Under 16",
      body: "Gentle basics only: cleanser, moisturiser and SPF, with a spot patch if you need one. Retinoids and strong acids need a doctor's say-so at your age.",
    })
  if (diagnosed)
    watch.push({
      title: "Eczema or rosacea",
      body: "No acids, no fragrance, no scrubs. If a product stings, stop. A GP or pharmacist can suggest prescription options that work better than anything on this list.",
    })
  else if (sensitive)
    watch.push({
      title: "Reactive skin",
      body: "Patch test every new product on your inner forearm or behind your ear for three days before it goes near your face.",
    })
  if (noSpf)
    watch.push({
      title: "You said you skip SPF",
      body: "SPF is the one step that does the most for every concern you picked, including dark marks and breakouts. The sunscreen we chose is light and has no white cast, which makes it far easier to stick with.",
    })
  if (a.q4.includes("actives"))
    watch.push({
      title: "You already use actives",
      body: "Keep them to every other night and never in the same routine as a strong acid. If you add the serum we suggest, drop one active for two weeks first.",
    })

  const basics = (
    [
      ["Cleanser", picks.cleanser],
      ["Toner", picks.toner],
      ["Moisturiser", picks.moisturiser],
      ["Sunscreen", picks.spf],
    ] as [string, Product | null][]
  )
    .filter((x): x is [string, Product] => x[1] !== null)
    .map(([label, product]) => ({ label, product }))
  const basicsTotal = basics.reduce((t, b) => t + (b.product.priceGBP ?? 0), 0)

  return {
    skin,
    skinLabel: TYPE_COPY[skin].label,
    skinCopy: TYPE_COPY[skin].copy,
    concerns,
    sensitive,
    dehydrated,
    barrierFirst: sensitive || diagnosed || a.q4.includes("noRoutine") || concerns.includes("redness"),
    picks,
    extras,
    watch,
    basics,
    basicsTotal,
  }
}
