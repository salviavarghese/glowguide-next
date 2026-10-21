import type { Metadata } from "next"
import Link from "next/link"
import { ArrowIcon } from "@/components/icons"
import { articles } from "@/lib/articles"

export const metadata: Metadata = {
  title: "Learn",
  description: "Beginner skincare guides: the five-step routine, double cleansing, ingredients, SPF and more.",
}

export default function LearnPage() {
  const [featured, ...rest] = articles
  return (
    <>
      <section className="wrap page-head">
        <h1>Learn</h1>
        <p className="lede">
          Short guides for people who have never had a routine. Every skincare term gets a one-line explanation the first time it appears, and every guide opens with the three things to remember.
        </p>
      </section>
      <section className="wrap section--tight">
        <div className="feature" style={{ marginBottom: 32 }}>
          <Link className="feature__main" href={`/learn/${featured.slug}`}>
            <div>
              <p className="caption">Start here, {featured.minutes} minute read</p>
              <h2 style={{ marginTop: 12 }}>{featured.title}</h2>
              <p className="lede" style={{ marginTop: 16 }}>
                {featured.lede}
              </p>
            </div>
            <p className="link">
              Read the guide
              <ArrowIcon />
            </p>
          </Link>
          <div className="feature__side">
            <div className="feature__item" style={{ background: "var(--dew)", borderColor: "var(--dew-deep)" }}>
              <h3>Read in this order</h3>
              <ol className="small" style={{ marginTop: 12, paddingLeft: "1.2em", lineHeight: 1.6 }}>
                <li>The five-step routine</li>
                <li>Skin types, and how to tell yours</li>
                <li>Double cleansing</li>
                <li>SPF in the UK</li>
                <li>Then the glossary, as you meet each ingredient</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="article-grid">
          {rest.map((a) => (
            <Link className="article-card" key={a.slug} href={`/learn/${a.slug}`}>
              <div>
                <h3>{a.title}</h3>
                <p style={{ marginTop: 8 }}>{a.summary}</p>
              </div>
              <p className="caption">{a.minutes} minute read</p>
            </Link>
          ))}
        </div>
        <p className="small muted" style={{ marginTop: 32, maxWidth: "40rem" }}>
          Written from NHS, NICE, British Association of Dermatologists and American Academy of Dermatology material, with the layering and formulation specifics checked against dermatologists and ingredient analysts who specialise in Korean skincare.{" "}
          <Link href="/about#sources">Who we learn from</Link>. General information, not medical advice.
        </p>
      </section>
    </>
  )
}
