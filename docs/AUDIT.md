# Audit and polish list

This is a fresh build, so the "before" is the April 2026 landing page (Next.js, Payload CMS form, four sections, blue gradients). It is being replaced, not reskinned. The audit below maps what the new site has and what a real site needs.

## Page and flow map (new site)

| Route | Page | Flow |
| --- | --- | --- |
| `/` | Home | Scroll moment → Start the quiz, or browse skin types or learn |
| `/quiz` | Quiz, 6 steps | Pick options → Next (validation: at least one unless optional) → See my routine |
| `/results?a=…` | Results | Answers encoded in the URL; empty state when missing |
| `/skin-types` | Skin types index | → one page per type |
| `/skin-types/[type]` | Oily, dry, combination, sensitive, normal | Shelves per step → Where to buy (external) |
| `/learn` | Learn index | → articles |
| `/learn/[slug]` | Five steps, double cleansing, ingredient glossary, purging, SPF, myths, skin types, when to see a GP | Sources at the bottom |
| `/about` | About, independence, affiliate, medical note, contact | |
| `/privacy` | Privacy | |
| `*` | 404 | → quiz or home |

Things that must stay fixed once built: route names above, the answer-code format in `/results?a=`, product ids in the data file (they are used in share links and skin type pages), and the `data-*` hooks in the quiz.

## What looked AI-generated on the old site (so the new one avoids it)

Glow blobs (`blur-3xl` circles), gradient text in the headline, uppercase tracked eyebrow labels over every heading, everything centred, pill buttons everywhere, a bento-style feature grid with four near-identical cards, a frosted sign-up card (`backdrop-blur`), Geist as the default font, a fake "stats" framing, and placeholder nav links (`href="#"`).

## Polish list

| Item | Status in mockup | Build note |
| --- | --- | --- |
| Favicon set | missing | Add `icon.svg`, `apple-icon.png`, `icon.png` (Next metadata files). Markup only. |
| Unique page title per page | present | Metadata API per route. |
| Meta description per page | present | Metadata API per route. |
| Open Graph image | missing | `opengraph-image.tsx` generating a pearl card with the wordmark. Markup only. |
| Custom 404 | present | `not-found.tsx`. |
| Correct copyright year | present (2026) | Rendered from the current date. |
| Clickable logo to home | present | |
| Clickable email (mailto:) | present | Needs a real address from you; `hello@glowguide.example` is a stand-in. |
| Clickable phone | not applicable | No phone number. |
| Footer links working | present | |
| Broken links or buttons | none in mockup | Verify after build. |
| Form success and error messages | present (quiz validation) | No contact form by design. |
| Loading, empty, error states | empty results present; results error notice in style guide | Add a loading skeleton only if results ever fetch (they do not). |
| Placeholder text | none | |
| Unused nav items | none | |
| Alt text on images | present (dropper has a title; product photo slot has alt) | |
| Oversized images | none yet | Compress any photos you supply to 1600px wide WebP. |
| robots.txt and sitemap.xml | missing | `robots.ts` and `sitemap.ts`. New files, no logic. |
| Privacy policy and terms | privacy present; terms missing | A terms page is optional for a free site with no accounts. Say if you want one. |
| Cookie banner | not needed | Vercel Web Analytics is cookieless. |
| Analytics | missing | `@vercel/analytics` is one dependency and one component. Needs your OK (new dependency). |
| Real contact details | stand-in email | Needs your decision. |
| CTA above the fold | present | |
| Search | present (keyword routes to the right page) | In the build, a small client-side index over guides, ingredients and skin types; no server. |
| Guide summaries (In short) | present | |
| Shopping list with total on results | present | Prices from the product data. |
| Damp-skin tip on humectant products | present | Rendered from product data. |
| Advanced products hidden from beginners | present | `<details>` on skin type pages; results engine excludes strong actives for beginners. |
| Sources and experts page | present (About) | Dr Jenny Liu, Dr Dray, James Welsh, Hwahae, The Klog, Snow White and the Asian Pear, Skin Talks, plus NHS, NICE, BAD, BSF, CRUK, AAD. |
| Affiliate disclosure | present, honest about the current state (plain links, no tags) | UK ASA/CMA guidance: once real affiliate links exist, each one needs a visible "Ad" label and a notice at the top of the page; "Affiliate" alone is not an accepted label. The card footer design for this is in the style guide and the label is one config switch in the build. |
| Medical disclaimer | present | |

## Needs a decision from you (new logic or pages, not built until you say)

1. Analytics: add `@vercel/analytics` (new dependency) or leave out.
2. Contact email to show on About and Privacy.
3. Terms page: yes or no.
4. Results storage: the plan is answers in the URL plus `localStorage` so the routine survives a reload. Confirm.
5. Payload CMS and the Neon database from April are removed in the new build (the product list is a typed data file). Confirm you do not need the old sign-up form data.
6. Push access: pushes from this session are refused until the Claude GitHub app is installed on the repo (github.com/apps/claude/installations/select_target, pick salviavarghese/glowguide-next). Until then the mockup travels as a zip.
