import type { Product } from "@/lib/products"
import { site } from "@/lib/site"
import { ExternalIcon } from "./icons"

/** Beginners put humectants on dry skin and get a sticky finish, so the card says when damp skin matters. */
export function dampTip(p: Product): string | null {
  const ings = p.keyIngredients.join(" ").toLowerCase()
  if (p.category === "toner" || p.category === "essence") return "Pat into damp skin with your hands, straight after cleansing."
  if (p.category === "serum" && ["hyaluronic", "snail", "beta-glucan", "glycerin", "panthenol"].some((k) => ings.includes(k)))
    return "Apply to damp skin and seal with moisturiser within a minute."
  if (p.category === "moisturiser") return "Goes on within a few minutes of washing, while skin is still slightly damp."
  return null
}

export function Tier({ tier }: { tier: Product["tier"] }) {
  const faded = "£££".slice(tier.length)
  return (
    <span className="tier" aria-label={`Price tier ${tier}`}>
      {tier}
      {faded && <span>{faded}</span>}
    </span>
  )
}

export function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  const tip = dampTip(product)
  return (
    <article className="product" style={compact ? { padding: "var(--s-4)" } : undefined}>
      <p className="product__brand">{product.brand}</p>
      <h4 className="product__name">{product.name}</h4>
      <p className="product__ing">{product.keyIngredients.slice(0, 3).join(", ")}</p>
      <p className="product__why">{product.why}</p>
      {tip && <p className="product__tip">{tip}</p>}
      <div className="product__foot">
        <Tier tier={product.tier} />
        {product.buyUrl ? (
          <span>
            {site.affiliate && <span className="ad">Ad</span>}
            <a className="link" href={product.buyUrl} target="_blank" rel={site.affiliate ? "noopener sponsored" : "noopener"}>
              Where to buy
              <ExternalIcon />
            </a>
          </span>
        ) : (
          <span className="small muted">Link coming</span>
        )}
      </div>
    </article>
  )
}
