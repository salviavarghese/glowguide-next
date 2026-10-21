import type { Metadata } from "next"
import Link from "next/link"
import { ArrowIcon } from "@/components/icons"
import { Notice } from "@/components/notice"
import { TYPE_COPY } from "@/lib/engine"
import { SKIN_TYPES, TYPE_PAGE } from "@/lib/skin-types"

export const metadata: Metadata = {
  title: "Skin types",
  description: "Oily, dry, combination, sensitive and normal skin explained, with products for each.",
}

export default function SkinTypesPage() {
  return (
    <>
      <section className="wrap page-head">
        <h1>Skin types</h1>
        <p className="lede">Five types, explained in plain words, with a shelf of products for every step. Not sure which you are? The quiz works it out in two minutes.</p>
      </section>
      <section className="wrap section--tight">
        <ul className="index-list">
          {SKIN_TYPES.map((k) => (
            <li key={k}>
              <Link href={`/skin-types/${k}`}>
                <h3>{TYPE_COPY[k].label}</h3>
                <p>{TYPE_PAGE[k].tell.split(".")[0]}.</p>
                <ArrowIcon />
              </Link>
            </li>
          ))}
        </ul>
        <div style={{ maxWidth: "40rem", marginTop: 32 }}>
          <Notice title="Dry or dehydrated?">
            Dry skin lacks oil. Dehydrated skin lacks water, and any type can be dehydrated, including oily skin that feels tight. If that sounds like you, read your type&rsquo;s page and add a hydrating toner.
          </Notice>
        </div>
        <p style={{ marginTop: 32 }}>
          <Link className="btn btn--secondary" href="/quiz">
            Find my type with the quiz
          </Link>
        </p>
      </section>
    </>
  )
}
