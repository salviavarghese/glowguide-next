"use client"

import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import { Notice } from "@/components/notice"
import { ProductCard } from "@/components/product-card"
import { CONCERN_LABEL, recommend, type Recommendation } from "@/lib/engine"
import type { Product } from "@/lib/products"
import { decodeAnswers, loadAnswers, saveAnswers } from "@/lib/quiz"
import { site } from "@/lib/site"

type State = { kind: "loading" } | { kind: "empty" } | { kind: "invalid" } | { kind: "ready"; code: string; rec: Recommendation }

export function Results() {
  const params = useSearchParams()
  const router = useRouter()
  const codeParam = params.get("a")
  // Answers saved from an earlier visit (client only; this component never renders on the server).
  const [saved] = useState(() => (typeof window === "undefined" ? null : loadAnswers()))

  const state = useMemo<State>(() => {
    if (codeParam) {
      const answers = decodeAnswers(codeParam)
      return answers ? { kind: "ready", code: codeParam, rec: recommend(answers) } : { kind: "invalid" }
    }
    return saved && decodeAnswers(saved) ? { kind: "loading" } : { kind: "empty" }
  }, [codeParam, saved])

  useEffect(() => {
    if (codeParam && decodeAnswers(codeParam)) saveAnswers(codeParam)
    else if (!codeParam && saved && decodeAnswers(saved)) router.replace(`/results?a=${saved}`)
  }, [codeParam, saved, router])

  if (state.kind === "loading") {
    return (
      <section className="wrap section">
        <p className="lede" aria-live="polite">
          Building your routine.
        </p>
      </section>
    )
  }

  if (state.kind === "empty") {
    return (
      <section className="wrap section">
        <div className="stack" style={{ maxWidth: "36rem" }}>
          <h1>Nothing here yet.</h1>
          <p className="lede">Take the quiz and your routine will show up here. It takes about two minutes and nothing is saved anywhere but your own browser.</p>
          <p>
            <Link className="btn btn--primary" href="/quiz">
              Start the quiz
            </Link>
          </p>
        </div>
      </section>
    )
  }

  if (state.kind === "invalid") {
    return (
      <section className="wrap section">
        <div className="stack" style={{ maxWidth: "40rem" }}>
          <h1>That link is missing some answers.</h1>
          <Notice title="Something went wrong" tone="error">
            Your results link is incomplete or has been changed, so the routine cannot be rebuilt from it. Retake the quiz to get a fresh one.
          </Notice>
          <p>
            <Link className="btn btn--primary" href="/quiz">
              Retake the quiz
            </Link>
          </p>
        </div>
      </section>
    )
  }

  const { rec, code } = state
  const shareUrl = `${site.url}/results?a=${code}`
  const tags = [...rec.concerns.map((c) => CONCERN_LABEL[c]), ...(rec.sensitive ? ["easily irritated"] : [])]

  return (
    <>
      <section className="wrap page-head">
        <div className="result-head">
          <div>
            <p className="caption">Your skin type</p>
            <h1 className="result-type">
              {rec.skinLabel}
              {rec.sensitive ? ", leaning sensitive" : ""}
            </h1>
          </div>
          <ul className="result-tags" aria-label="Your concerns">
            {tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className="lede measure">{rec.skinCopy}</p>
          {rec.dehydrated && (
            <p className="small muted">
              You also said your skin feels tight by midday even though it gets oily. That is dehydration (a lack of water, not oil), so your routine leans on hydrating layers and keeps the oil control gentle.
            </p>
          )}
        </div>
      </section>

      <section className="wrap section--tight">
        <div className="section-head">
          <h2>Your routine</h2>
          <p className="lede">One product per step. Start with the basics in week one and add the rest in the order below, so if anything disagrees with your skin you know what caused it.</p>
        </div>
        <div className="routine">
          <div className="routine__col">
            <h3>Morning</h3>
            <Step n="1" name="Cleanse" when="water-based" product={rec.picks.cleanser} note="A splash of water is enough on mornings when your skin feels fine." />
            <Step n="2" name="Tone" product={rec.picks.toner} />
            <Step n="3" name="Treat" when="from week 4" product={rec.picks.treat} note="Introduce this last, once the basics feel comfortable." />
            <Step n="4" name="Moisturise" product={rec.picks.moisturiser} />
            <Step n="5" name="Protect" when="every day" product={rec.picks.spf} note="About a quarter teaspoon for the face, last step before makeup." />
          </div>
          <div className="routine__col">
            <h3>Night</h3>
            <Step n="1" name="Cleanse" when="oil first, if you wore SPF or makeup" product={rec.picks.oil} note="Massage onto dry skin for a minute, then rinse." />
            <Step n="2" name="Cleanse" when="water-based" product={rec.picks.cleanser} />
            <Step n="3" name="Tone" product={rec.picks.toner} />
            <Step n="4" name="Treat" when="from week 4" product={rec.picks.treat} />
            <Step n="5" name="Moisturise" product={rec.picks.moisturiser} />
          </div>
        </div>
        {rec.extras.length > 0 && (
          <div className="routine" style={{ marginTop: 32 }}>
            <div className="routine__col">
              <h3>Extras</h3>
              {rec.extras.map((e) => (
                <div className="routine__step" key={e.product.id}>
                  <div>
                    <p className="routine__label">
                      <span className="n">{e.label}</span>
                    </p>
                  </div>
                  <ProductCard product={e.product} compact />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="wrap section--tight">
        <div className="split" style={{ alignItems: "start" }}>
          <div className="stack">
            <h2>Buy these four first</h2>
            <p className="lede">Cleanser, toner, moisturiser and sunscreen are a complete routine on their own. The oil cleanser and serum can wait a couple of weeks.</p>
            <p className="small muted">Prices are the regular UK prices we found in {site.pricesChecked}, rounded. Shops change them often.</p>
          </div>
          <ShoppingList rec={rec} />
        </div>
      </section>

      <section className="wrap section--tight">
        <div className="section-head">
          <h2>Add them in this order</h2>
          <p className="lede">New products one at a time, at least a week apart, two if your skin is reactive. Skin takes a few weeks to show whether something is working.</p>
        </div>
        <ol className="timeline">
          <li>
            <span className="w">Week 1</span>
            <span>Cleanser, moisturiser and SPF. That is a complete routine on its own.</span>
          </li>
          <li>
            <span className="w">Week 2</span>
            <span>Add the oil cleanser at night and the toner.</span>
          </li>
          <li>
            <span className="w">Week 4</span>
            <span>Add the serum. Patch test first if your skin is reactive.</span>
          </li>
          <li>
            <span className="w">Week 6</span>
            <span>Spot patches whenever you need them. Judge the whole routine at the eight-week mark, not before.</span>
          </li>
        </ol>
      </section>

      <section className="wrap section--tight">
        <div className="section-head">
          <h2>Watch-outs for you</h2>
        </div>
        <div className="stack" style={{ maxWidth: "40rem" }}>
          {rec.barrierFirst && (
            <Notice title="Barrier first">
              Your answers point to a barrier that needs looking after, so the routine starts with the four basics (cleanse, hydrate, seal, protect) and holds the serum back until week four. If anything stings or flakes before then, drop back to the four and stay there until it stops.
            </Notice>
          )}
          {rec.watch.map((w) => (
            <Notice key={w.title} title={w.title} tone="warn">
              {w.body}
            </Notice>
          ))}
          <Notice title="Purging or breakout?">
            If you break out in the first few weeks of a new active, in places you usually break out, that is probably purging and it settles within four to six weeks. New spots in new places, or stinging, mean stop.{" "}
            <Link href="/learn/purging">How to tell the difference</Link>.
          </Notice>
        </div>
      </section>

      <section className="wrap section--tight">
        <ShareCard url={shareUrl} skin={rec.skin} skinLabel={rec.skinLabel} />
      </section>

      <section className="wrap section--tight">
        <p className="small muted measure">
          &ldquo;Where to buy&rdquo; links go straight to retailers and brands; GlowGuide is independent and no brand pays to be here. This routine is general information for healthy skin, not medical advice. See a GP about anything painful, spreading or not settling.
        </p>
      </section>
    </>
  )
}

function Step({ n, name, when, product, note }: { n: string; name: string; when?: string; product: Product | null; note?: string }) {
  return (
    <div className="routine__step">
      <div>
        <p className="routine__label">
          <span className="n">
            {n}. {name}
          </span>
          {when && <span className="when">{when}</span>}
        </p>
        {note && (
          <p className="small muted" style={{ marginTop: 6 }}>
            {note}
          </p>
        )}
      </div>
      {product ? <ProductCard product={product} compact /> : <p className="small muted">No match in our list yet.</p>}
    </div>
  )
}

function ShoppingList({ rec }: { rec: Recommendation }) {
  const [copied, setCopied] = useState<null | "ok" | "fail">(null)
  const text = rec.basics.map((b) => `${b.label}: ${b.product.brand} ${b.product.name} (about £${Math.round(b.product.priceGBP ?? 0)})`).join(" / ")
  const copy = () => {
    if (!navigator.clipboard) {
      setCopied("fail")
      return
    }
    navigator.clipboard.writeText(text).then(
      () => {
        setCopied("ok")
        setTimeout(() => setCopied(null), 1800)
      },
      () => setCopied("fail"),
    )
  }
  return (
    <div className="shoplist">
      <h3>Your shopping list</h3>
      <ol>
        {rec.basics.map((b) => (
          <li key={b.product.id}>
            <span>
              {b.product.brand} {b.product.name}
            </span>
            <span>£{Math.round(b.product.priceGBP ?? 0)}</span>
          </li>
        ))}
      </ol>
      <p className="shoplist__total">
        <span>About</span>
        <span>£{Math.round(rec.basicsTotal)} for all four</span>
      </p>
      <button className="btn btn--secondary btn--sm" type="button" onClick={copy}>
        {copied === "ok" ? "Copied" : "Copy the list"}
      </button>
      {copied === "fail" && (
        <p className="small muted" style={{ marginTop: 8 }}>
          Copying is blocked in this browser. Select the list above and copy it by hand.
        </p>
      )}
    </div>
  )
}

function ShareCard({ url, skin, skinLabel }: { url: string; skin: string; skinLabel: string }) {
  const [copied, setCopied] = useState<null | "ok" | "fail">(null)
  const copy = () => {
    if (!navigator.clipboard) {
      setCopied("fail")
      return
    }
    navigator.clipboard.writeText(url).then(
      () => {
        setCopied("ok")
        setTimeout(() => setCopied(null), 1800)
      },
      () => setCopied("fail"),
    )
  }
  return (
    <div className="card" style={{ maxWidth: "40rem" }}>
      <h3>Save or share your routine</h3>
      <p className="small muted" style={{ marginTop: 8 }}>
        This link rebuilds your results from your answers. Nothing is stored on a server.
      </p>
      <div className="share" style={{ marginTop: 16 }}>
        <label className="sr-only" htmlFor="share-url">
          Results link
        </label>
        <input id="share-url" type="url" readOnly value={url} onFocus={(e) => e.currentTarget.select()} />
        <button className="btn btn--secondary" type="button" onClick={copy}>
          {copied === "ok" ? "Copied" : "Copy link"}
        </button>
      </div>
      {copied === "fail" && (
        <p className="small muted" style={{ marginTop: 8 }}>
          Copying is blocked in this browser. Tap the link to select it, then copy.
        </p>
      )}
      <p className="small" style={{ marginTop: 16 }}>
        <Link className="link" href="/quiz">
          Retake the quiz
        </Link>{" "}
        <span className="muted">or</span>{" "}
        <Link className="link" href={`/skin-types/${skin}`}>
          browse everything for {skinLabel.toLowerCase()} skin
        </Link>
      </p>
    </div>
  )
}
