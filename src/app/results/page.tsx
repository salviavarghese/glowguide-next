import type { Metadata } from "next"
import { Suspense } from "react"
import { Results } from "./results"

export const metadata: Metadata = {
  title: "Your routine",
  description: "Your skin type, what it means, and a five-step routine with products that suit it.",
  robots: { index: false },
}

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <section className="wrap section">
          <p className="lede">Building your routine.</p>
        </section>
      }
    >
      <Results />
    </Suspense>
  )
}
