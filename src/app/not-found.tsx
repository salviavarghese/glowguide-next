import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page isn't here.",
}

export default function NotFound() {
  return (
    <section className="wrap section">
      <div className="stack" style={{ maxWidth: "36rem" }}>
        <p className="caption">Error 404</p>
        <h1>That page isn&rsquo;t here.</h1>
        <p className="lede">The link may be old, or the address has a typo. The quiz and the skin type pages are the best places to start.</p>
        <p style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <Link className="btn btn--primary" href="/quiz">
            Start the quiz
          </Link>
          <Link className="btn btn--secondary" href="/">
            Go to the home page
          </Link>
        </p>
      </div>
    </section>
  )
}
