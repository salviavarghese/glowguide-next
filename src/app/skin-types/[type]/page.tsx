import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ProductCard } from "@/components/product-card"
import { TYPE_COPY } from "@/lib/engine"
import { products, type Category, type Product, type SkinType } from "@/lib/products"
import { site } from "@/lib/site"
import { SKIN_TYPES, TYPE_PAGE, isSkinType } from "@/lib/skin-types"

type Shelf = { title: string; cats: Category[]; note: string }

const START: Shelf[] = [
  { title: "Cleansers", cats: ["cleanser"], note: "Morning and night. Low pH, no squeak." },
  { title: "Cleansing oils and balms", cats: ["cleansing-oil"], note: "Night, before the cleanser, if you wore SPF or makeup." },
  { title: "Toners and essences", cats: ["toner", "essence"], note: "Patted into damp skin with your hands. The hydration step." },
  { title: "Moisturisers", cats: ["moisturiser"], note: "Seals the water in and keeps the barrier calm." },
  { title: "Sunscreens", cats: ["spf"], note: "Every morning. SPF 30 or higher, two finger lengths." },
]
const TREAT: Shelf[] = [{ title: "Serums", cats: ["serum"], note: "One, aimed at your main concern, added once the basics feel comfortable." }]
const ADVANCED: Shelf[] = [
  { title: "Exfoliants and stronger actives", cats: ["exfoliant"], note: "One to three nights a week at most, never with a retinoid on the same night." },
  { title: "Spot patches, masks and eye care", cats: ["spot-treatment", "mask", "eye"], note: "Nice to have. None of these are part of the routine itself." },
]

const tierRank = (p: Product) => (p.tier === "£" ? 0 : p.tier === "££" ? 1 : 2)

function shelfItems(type: SkinType, cats: Category[], strongOk: boolean) {
  return products
    .filter((p) => cats.includes(p.category) && p.skinTypes.includes(type) && (strongOk || p.activeStrength !== "strong"))
    .sort((a, b) => tierRank(a) - tierRank(b) || a.brand.localeCompare(b.brand))
    .slice(0, 6)
}

export function generateStaticParams() {
  return SKIN_TYPES.map((type) => ({ type }))
}

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params
  if (!isSkinType(type)) return {}
  const label = TYPE_COPY[type].label
  return {
    title: `${label} skin`,
    description: `How to tell if you have ${label.toLowerCase()} skin, what to look for in products, and a shelf for every step.`,
  }
}

function ShelfBlock({ type, shelves, strongOk }: { type: SkinType; shelves: Shelf[]; strongOk: boolean }) {
  return (
    <>
      {shelves.map((s) => {
        const items = shelfItems(type, s.cats, strongOk)
        if (items.length === 0) return null
        return (
          <div className="stack" style={{ marginTop: 40 }} key={s.title}>
            <div className="section-head" style={{ marginBottom: 16 }}>
              <h3>{s.title}</h3>
              <p className="small muted">{s.note}</p>
            </div>
            <div className="shelf shelf--scroll">
              {items.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default async function SkinTypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params
  if (!isSkinType(type)) notFound()
  const { label, copy } = TYPE_COPY[type]
  const info = TYPE_PAGE[type]
  const strongSerums = products.filter((p) => p.category === "serum" && p.skinTypes.includes(type) && p.activeStrength === "strong").slice(0, 6)

  return (
    <>
      <section className="wrap page-head">
        <h1>{label} skin</h1>
        <p className="lede">{copy}</p>
      </section>
      <section className="wrap section--tight">
        <div className="split" style={{ alignItems: "start" }}>
          <div className="stack">
            <h3>How to tell</h3>
            <p>{info.tell}</p>
          </div>
          <div className="stack">
            <h3>What to look for on a label</h3>
            <p>{info.look}</p>
            <h3 style={{ marginTop: 24 }}>What to avoid</h3>
            <p>{info.avoid}</p>
          </div>
        </div>
      </section>
      <section className="wrap section--tight">
        <div className="section-head">
          <p className="caption">The shelf for {label.toLowerCase()} skin</p>
          <p className="small muted" style={{ marginTop: 8 }}>
            Every product is available in the UK. £ is under £12, ££ is £12 to £25, £££ is over £25. Swipe each row on a phone.
          </p>
        </div>
        <div className="stack" style={{ marginTop: 8 }}>
          <h2>Start here: the four basics</h2>
          <p className="lede" style={{ marginTop: 8 }}>
            Cleanse, hydrate, seal, protect. This is a complete routine on its own, and it is where struggling skin should stay until it settles.
          </p>
          <ShelfBlock type={type} shelves={START} strongOk={false} />
        </div>
        <div className="stack" style={{ marginTop: 64 }}>
          <h2>Step five: treat</h2>
          <p className="lede" style={{ marginTop: 8 }}>
            Add one serum once the basics feel automatic, and give it a week or two before judging it.
          </p>
          <ShelfBlock type={type} shelves={TREAT} strongOk={false} />
        </div>
        <details className="advanced" style={{ marginTop: 64 }}>
          <summary>
            <span className="h3">Advanced, once your skin is settled</span>
            <span className="small muted">Exfoliants, retinoids and extras. Hidden by default so a beginner does not buy them by accident.</span>
          </summary>
          <ShelfBlock type={type} shelves={ADVANCED} strongOk={true} />
          {strongSerums.length > 0 && (
            <div className="stack" style={{ marginTop: 40 }}>
              <div className="section-head" style={{ marginBottom: 16 }}>
                <h3>Retinoids and strong serums</h3>
                <p className="small muted">Night only, two or three nights a week to start, never in pregnancy. Patch test first.</p>
              </div>
              <div className="shelf shelf--scroll">
                {strongSerums.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </details>
        <p className="small muted" style={{ marginTop: 48 }}>
          Prices checked {site.pricesChecked} and rounded into tiers. Links go straight to retailers and brands; no brand pays to be listed.
        </p>
      </section>
    </>
  )
}
