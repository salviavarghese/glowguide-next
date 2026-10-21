import Link from "next/link"
import { ArrowIcon } from "@/components/icons"
import { SearchForm } from "@/components/search-form"
import { TOPICS } from "@/lib/topics"
import { articles, getArticle } from "@/lib/articles"
import { recommend } from "@/lib/engine"
import { TYPE_COPY } from "@/lib/engine"

const SPECIMENS = [
  { name: "Centella", latin: "Centella asiatica", does: "Calms redness, repairs the barrier", anchor: "centella-asiatica-cica", lab: false },
  { name: "Snail mucin", latin: "Snail secretion filtrate", does: "Hydrates and softens", anchor: "snail-mucin", lab: false },
  { name: "Heartleaf", latin: "Houttuynia cordata", does: "Soothes spots, steadies oil", anchor: "heartleaf-houttuynia-cordata", lab: false },
  { name: "Rice", latin: "Oryza sativa extract", does: "Gentle brightening", anchor: "rice-extract", lab: false },
  { name: "Niacinamide", latin: "Vitamin B3", does: "Pores, oil, marks, barrier", anchor: "niacinamide-vitamin-b3", lab: true },
  { name: "Ceramides", latin: "Ceramide NP, AP, EOP", does: "The grout between skin cells", anchor: "ceramides", lab: true },
]

const TYPES = [
  { key: "oily", line: "Shiny by lunchtime, visible pores, prone to congestion. Needs light layers, not stripping." },
  { key: "dry", line: "Tight after washing, flaky patches, makeup clings. Needs richer moisture and gentle cleansing." },
  { key: "combination", line: "Oily T-zone, normal or dry cheeks. The most common type, and the easiest to over-treat." },
  { key: "sensitive", line: "Stings, flushes or reacts to new products. Fragrance-free, fewer steps, barrier first." },
  { key: "normal", line: "Comfortable most of the time. The job is to keep it that way with SPF and a simple routine." },
] as const

export default function HomePage() {
  const featured = getArticle("five-steps")!
  const grid = ["double-cleansing", "skin-types", "purging", "spf"].map((s) => getArticle(s)!)
  // The results preview comes from the same engine as /results so it never drifts from what people actually get.
  const example = recommend({ q1: "tzone", q2: ["acne", "pigmentation"], q3: "stings", q4: ["noSPF", "noRoutine"], q5: "oilyTight", q6: [] })

  return (
    <>
      <section className="hero-ed">
        <div className="wrap hero-ed__grid">
          <div>
            <h1>Start with your skin, not the shelf.</h1>
            <p className="lede" style={{ marginTop: 20, maxWidth: "34rem" }}>
              Six questions, two minutes, no account. GlowGuide works out your skin type and builds a five-step routine from Korean skincare that suits it, priced in pounds and sold in the UK. Written for complete beginners, whatever your age.
            </p>
            <div className="hero-ed__actions">
              <Link className="btn btn--primary" href="/quiz">
                Start the quiz
              </Link>
              <Link className="link" href="/skin-types">
                Or browse by skin type
                <ArrowIcon />
              </Link>
            </div>
            <SearchForm />
            <ul className="chips" aria-label="Common topics">
              {TOPICS.slice(0, 9).map((t) => (
                <li key={t.label}>
                  <Link className="chip" href={t.href}>
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hero-ed__visual" aria-hidden="true">
            <div className="preview">
              <div className="progress">
                <span style={{ width: "33%" }} />
              </div>
              <p className="caption">Step 2 of 6</p>
              <h4>What bothers you most about your skin?</h4>
              <ul className="options">
                {[
                  ["Breakouts", true],
                  ["Redness or easily irritated", false],
                  ["Shine and visible pores", true],
                  ["Dark marks or uneven tone", false],
                ].map(([label, on]) => (
                  <li key={String(label)}>
                    <span className="option option--multi" aria-pressed={on ? "true" : "false"}>
                      {label}
                      <span className="mark" />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="caption" style={{ marginTop: 12, textAlign: "center" }}>
              A real question from the quiz
            </p>
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="wrap">
          <div className="section-head">
            <h2>New here? Start with these three.</h2>
            <p className="lede">Ten minutes of reading that saves months of guessing. Everything else on the site builds on them.</p>
          </div>
          <div className="feature">
            <Link className="feature__main" href={`/learn/${featured.slug}`}>
              <div>
                <p className="caption">{featured.minutes} minute read</p>
                <h3 style={{ marginTop: 12, fontSize: "var(--display-2)" }}>{featured.title}</h3>
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
              <Link className="feature__item" href="/learn/skin-types">
                <p className="caption">4 minute read</p>
                <h3 style={{ marginTop: 8 }}>Which skin type am I?</h3>
                <p className="small muted" style={{ marginTop: 8 }}>
                  The thirty-minute bare-face test, and why dry and dehydrated are different problems.
                </p>
              </Link>
              <Link className="feature__item" href="/learn/double-cleansing">
                <p className="caption">4 minute read</p>
                <h3 style={{ marginTop: 8 }}>Double cleansing</h3>
                <p className="small muted" style={{ marginTop: 8 }}>
                  Oil first, then water. The reason Korean routines can wear sunscreen every day.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Already know your skin type?</h2>
            <p className="lede">
              Go straight to the shelf for it. Each page explains what the type means, what to look for on a label, and products for every step, with the advanced ones kept out of the way.
            </p>
          </div>
          <ul className="index-list">
            {TYPES.map((t) => (
              <li key={t.key}>
                <Link href={`/skin-types/${t.key}`}>
                  <h3>{TYPE_COPY[t.key].label}</h3>
                  <p>{t.line}</p>
                  <ArrowIcon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--deep">
        <div className="wrap">
          <div className="section-head">
            <h2>Six ingredients worth knowing</h2>
            <p className="lede">The ones that keep turning up on Korean labels, and what each actually does. The full glossary covers thirty.</p>
          </div>
          <ul className="specimens">
            {SPECIMENS.map((s) => (
              <li key={s.anchor}>
                <Link className={`specimen${s.lab ? " specimen--lab" : ""}`} href={`/learn/ingredients#${s.anchor}`}>
                  <span className="name">{s.name}</span>
                  <span className="latin">{s.latin}</span>
                  <span className="does">{s.does}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: 24 }}>
            <Link className="link" href="/learn/ingredients">
              Read the whole glossary
              <ArrowIcon />
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="stack">
            <h2>What your results look like</h2>
            <p className="lede">
              Your skin type in plain English, what it means day to day, and a morning and night routine with one product per step and the reason it was picked.
            </p>
            <p>
              You also get a shopping list for the four basics with a rough total, the order to introduce everything in, and watch-outs written for your answers, such as what to leave out if you are pregnant or on prescription treatment.
            </p>
            <p>
              <Link className="btn btn--primary" href="/quiz">
                Start the quiz
              </Link>
            </p>
          </div>
          <div className="split__visual" style={{ alignItems: "start" }}>
            <div className="preview" aria-hidden="true" style={{ maxWidth: "24rem" }}>
              <p className="caption">Your skin type</p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", lineHeight: 1.1, marginTop: 6 }}>
                {example.skinLabel}
                {example.sensitive ? ", leaning sensitive" : ""}
              </p>
              <p className="caption" style={{ marginTop: 16 }}>
                The four basics
              </p>
              <ul className="small" style={{ marginTop: 8, paddingLeft: "1.1em", lineHeight: 1.5 }}>
                {example.basics.map((b) => (
                  <li key={b.product.id}>
                    {b.product.brand} {b.product.name}
                  </li>
                ))}
              </ul>
              <p className="caption" style={{ marginTop: 16 }}>
                About £{Math.round(example.basicsTotal)} for all four
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="wrap">
          <div className="section-head">
            <h2>Keep learning</h2>
          </div>
          <div className="article-grid">
            {grid.map((a) => (
              <Link className="article-card" key={a.slug} href={`/learn/${a.slug}`}>
                <div>
                  <h3>{a.title}</h3>
                  <p style={{ marginTop: 8 }}>{a.summary}</p>
                </div>
                <p className="caption">{a.minutes} minute read</p>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: 24 }}>
            <Link className="link" href="/learn">
              All {articles.length} guides
              <ArrowIcon />
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="stack">
            <h2>Straight about how this works</h2>
            <p>
              GlowGuide is independent. No brand pays to be recommended; products are chosen on ingredients, texture and UK price. Links go straight to retailers, with no affiliate tags for now, and if that changes the links will be labelled.
            </p>
            <p>
              Everything here is general information for healthy skin, checked against NHS, NICE and dermatology-body guidance, with the Korean specifics checked against people who read ingredient lists for a living. It is not medical advice.{" "}
              <Link className="link" href="/about#sources">
                Who we learn from
                <ArrowIcon />
              </Link>
            </p>
          </div>
          <div className="card">
            <h3>Ready when you are.</h3>
            <p className="lede" style={{ marginTop: 8 }}>
              Six questions. Two minutes. A routine you can actually follow.
            </p>
            <p style={{ marginTop: 20 }}>
              <Link className="btn btn--primary" href="/quiz">
                Start the quiz
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
