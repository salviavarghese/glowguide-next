import type { Metadata } from "next"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description: "Who makes GlowGuide, how it stays independent, where the information comes from, and how affiliate links will be handled.",
}

export default function AboutPage() {
  return (
    <>
      <section className="wrap page-head">
        <h1>About GlowGuide</h1>
        <p className="lede">A skincare guide for people who have never had a routine. Made by one person, not a brand.</p>
      </section>
      <section className="wrap section--tight">
        <div className="article stack">
          <p>
            GlowGuide started as a placement project and turned into the thing I wished existed when I first stood in front of a skincare shelf: something that asks about your skin before it mentions a single product.
          </p>
          <p>
            It leans on Korean skincare because that world has spent decades on gentle, barrier-first formulas that suit beginners. It also includes a few pharmacy basics you can pick up in any UK high street, because the best routine is one you can actually buy.
          </p>
          <h2 id="independent">Independent</h2>
          <p>
            No brand pays to be on GlowGuide. Products are chosen by looking at what is in them, how they feel on the skin, and what they cost in the UK. If a product is here, it is because it does its job for the skin type it is listed under.
          </p>
          <h2 id="affiliate">How we make money</h2>
          <p>
            Right now, it doesn&rsquo;t. Every &ldquo;where to buy&rdquo; link is a plain link to a retailer or brand. The plan is to join affiliate programmes later, which means GlowGuide would earn a small commission if you buy through a link, at no extra cost to you. When that happens, UK advertising rules require those links to be labelled clearly, so each one will carry an &ldquo;Ad&rdquo; mark and a notice at the top of the page. Commission will never change which products are recommended or the order they appear in.
          </p>
          <h2 id="medical">A medical note</h2>
          <p>
            GlowGuide is general skincare education written for beginners. It is not medical advice, it does not diagnose anything, and it is not a replacement for a pharmacist, GP, midwife or dermatologist. Skin reacts differently from person to person. If you are pregnant or breastfeeding, under 16, using a prescription skin treatment, or living with a diagnosed condition such as eczema, rosacea, psoriasis or acne, the quiz adjusts what it suggests, but please check with a healthcare professional before changing your routine.
          </p>
          <p>
            Stop using any product that stings, burns, swells or causes a rash, and see a GP if it does not settle. Contact a GP promptly about any mole or mark that is new, changing, bleeding, itchy or painful. If a reaction is severe, or you have trouble breathing or swelling of the face or throat, call 999.
          </p>
          <h2 id="sources">Where this comes from</h2>
          <p>
            Every guide lists its sources at the bottom. For anything medical we go to the NHS, NICE, the British Association of Dermatologists, the British Skin Foundation, Cancer Research UK and the American Academy of Dermatology, and we paraphrase rather than copy. For how Korean products are actually formulated and layered, we follow people who read ingredient lists for a living:
          </p>
          <ul>
            <li>
              <strong>Dr Jenny Liu</strong> and <strong>Dr Dray</strong>, board-certified dermatologists who break down new Korean launches on YouTube, including how to layer them alongside Western actives.
            </li>
            <li>
              <strong>James Welsh</strong>, a skincare creator who tests Korean formulas against marketing claims, with a focus on barrier repair.
            </li>
            <li>
              <a href="https://www.hwahae.com/blog/" rel="noopener" target="_blank">
                Hwahae
              </a>
              , Korea&rsquo;s largest independent ingredient-analysis platform, for formulation safety and routines for fungal acne and pigmentation.
            </li>
            <li>
              <a href="https://sokoglam.com/blogs/theklog" rel="noopener" target="_blank">
                The Klog
              </a>{" "}
              by Soko Glam,{" "}
              <a href="https://www.snowwhiteandtheasianpear.com/" rel="noopener" target="_blank">
                Snow White and the Asian Pear
              </a>{" "}
              and{" "}
              <a href="https://koreanskincare.com/pages/skintalks" rel="noopener" target="_blank">
                Skin Talks
              </a>
              , three long-running K-beauty explainers written by people who use the products.
            </li>
          </ul>
          <p>None of them are paid by GlowGuide and none of them have reviewed this site. We read them; we do not speak for them.</p>
          {site.email && (
            <>
              <h2 id="contact">Say hello</h2>
              <p>
                Spotted a mistake, a product that has been discontinued, or something confusing? Email <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            </>
          )}
        </div>
      </section>
    </>
  )
}
