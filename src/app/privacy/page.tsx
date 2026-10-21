import type { Metadata } from "next"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy",
  description: "How GlowGuide handles your quiz answers and analytics.",
}

export default function PrivacyPage() {
  return (
    <>
      <section className="wrap page-head">
        <h1>Privacy</h1>
        <p className="lede">Short version: GlowGuide does not have accounts, does not ask for your email, and does not sell data.</p>
      </section>
      <section className="wrap section--tight">
        <div className="article stack">
          <h2>What GlowGuide stores</h2>
          <p>
            Your quiz answers are saved in your own browser so your results are still there when you come back. They never leave your device unless you choose to share your results link, which encodes your answers in the web address. Clearing your browser data removes them.
          </p>
          <h2>Analytics</h2>
          <p>GlowGuide does not run analytics or set cookies, which is why there is no cookie banner. If that changes, this page will say so first.</p>
          <h2>Links to shops</h2>
          <p>
            &ldquo;Where to buy&rdquo; links take you to retailers and brands with their own privacy policies. They are plain links today; if affiliate links are added later, each one will be labelled.
          </p>
          {site.email && (
            <>
              <h2>Contact</h2>
              <p>
                Questions about privacy: <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            </>
          )}
          <p className="muted small">Last updated 21 October 2026.</p>
        </div>
      </section>
    </>
  )
}
