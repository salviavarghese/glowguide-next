import Link from "next/link"
import { site } from "@/lib/site"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__about">
            <Link className="wordmark" href="/">
              GlowGuide
            </Link>
            <p>{site.tagline} Built for beginners of any age, with a Korean skincare lean and UK prices.</p>
          </div>
          <div>
            <h4>Site</h4>
            <ul>
              <li><Link href="/quiz">Skin quiz</Link></li>
              <li><Link href="/skin-types">Skin types</Link></li>
              <li><Link href="/learn">Learn</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>
          <div>
            <h4>Learn</h4>
            <ul>
              <li><Link href="/learn/five-steps">The five-step routine</Link></li>
              <li><Link href="/learn/double-cleansing">Double cleansing</Link></li>
              <li><Link href="/learn/ingredients">Ingredient glossary</Link></li>
              <li><Link href="/learn/spf">SPF in the UK</Link></li>
              <li><Link href="/learn/purging">Purging or breakout?</Link></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/about#affiliate">How we make money</Link></li>
              <li><Link href="/about#medical">Medical note</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer__legal">
          <p>
            GlowGuide is independent and no brand pays to be included. &ldquo;Where to buy&rdquo; links are plain links today; if affiliate links are added later they will be labelled &ldquo;Ad&rdquo;, as UK advertising rules require, and will never change which products are recommended.
          </p>
          <p>GlowGuide gives general skincare information, not medical advice. If something on your skin is painful, spreading, bleeding or not settling, see a GP or a dermatologist.</p>
          <p>&copy; {year} GlowGuide</p>
        </div>
      </div>
    </footer>
  )
}
