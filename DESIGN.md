# GlowGuide design system

Version 1, 19 Oct 2026. Every page in the mockup and in the build uses only these tokens.

## 1. Feel

Calm, warm, clear. GlowGuide is the friend who actually reads the ingredients: it explains, it never tests you, it never sells at you. The visual world is skin and water, not clinic and not beauty counter: a pearl ground, deep-water ink, a drop of honey-coloured serum. Restraint is the point. One visual moment per page, and the home page's is the dropper.

## 2. Colour tokens

| Token | Hex | Use |
| --- | --- | --- |
| `--pearl` | `#F3F2EE` | Page ground. Never pure white. |
| `--pearl-deep` | `#E9E7E1` | Alternate section ground, table stripes. |
| `--paper` | `#FBFAF8` | Cards and panels that sit on pearl. |
| `--dew` | `#E2EBE9` | Water tint: hero stage, selected quiz option, info notice. |
| `--dew-deep` | `#C9D9D5` | Dew borders, progress track. |
| `--honey` | `#E2B254` | The one accent: serum drop, primary button, active nav mark, progress fill. |
| `--honey-deep` | `#C8983A` | Primary button hover and active. |
| `--ink` | `#14343B` | Text, outlines, the dropper bulb. |
| `--ink-soft` | `#4C5F64` | Secondary text. 6.0:1 on pearl. |
| `--line` | `#D4D1C9` | Rules and card borders. |
| `--success` | `#2A6F55` | Confirmation text and marks. |
| `--warning` | `#9A4F0E` | Caution text, watch-out notices (with `--warning-tint` `#F6E7D7`). |
| `--error` | `#A82E2A` | Validation text, error borders (with `--error-tint` `#F7E1DF`). |

Contrast (measured): ink on pearl 11.8:1, ink-soft on pearl 6.0:1 and on dew 5.5:1, ink on honey 6.8:1 and on honey-deep 5.1:1, white on ink 13.3:1, success, warning and error on pearl and on their tints all between 4.9:1 and 6.1:1. Honey is never used as text.

## 3. Type

Two families, clearly different jobs.

- Display: **Young Serif** (Google Fonts, 400 only). Headlines, the wordmark, product names on cards, big numbers in results.
- Text: **Karla** (Google Fonts, variable 300 to 800; we use 400, 500, 600). Body, UI, nav, labels, buttons.

Scale (mobile to desktop via clamp, base 17px):

| Role | Size | Line height | Family / weight | Tracking |
| --- | --- | --- | --- | --- |
| display-1 | 44 to 72px | 1.02 | Young Serif 400 | -0.015em |
| display-2 (h2) | 32 to 48px | 1.08 | Young Serif 400 | -0.01em |
| h3 | 24 to 30px | 1.15 | Young Serif 400 | 0 |
| h4 | 20px | 1.3 | Karla 600 | 0 |
| lede | 19px | 1.55 | Karla 400 | 0 |
| body | 17px | 1.6 | Karla 400 | 0 |
| small | 15px | 1.5 | Karla 400/500 | 0 |
| caption | 13px | 1.45 | Karla 500 | 0.01em |

Rules: sentence case everywhere, no all-caps labels, no eyebrow labels above headings unless the text is real information (for example "Step 2 of 6"). Reading measure 60 to 70 characters (`--measure: 64ch`). Input text never below 16px. Numbers in results use display-1 with a caption beneath.

## 4. Spacing

4px base. Tokens: `--s-1` 4, `--s-2` 8, `--s-3` 12, `--s-4` 16, `--s-5` 24, `--s-6` 32, `--s-7` 48, `--s-8` 64, `--s-9` 96, `--s-10` 128.

- Section padding: `--s-8` on phones, `--s-9` from 1024px.
- Container: max-width 1120px; side gutters 20px (phone), 32px (768+), 40px (1024+).
- Stack rhythm inside copy: headings get `--s-6` above and `--s-3` below; paragraphs `--s-4` apart.
- Card padding: `--s-5` (phone) and `--s-6` (desktop).

## 5. Shape, depth, motion

- Radii: `--r-control` 10px for buttons, inputs, chips, option cards' inner marks; `--r-card` 18px for cards, panels, notices, the stage. Nothing else is rounded.
- Shadow: one, `--shadow-float: 0 16px 40px -18px rgb(20 52 59 / .3)`, only on things that float (mobile menu panel, sticky quiz footer). Cards use a 1px `--line` border, no drop shadow.
- Glass edge: `--edge: inset 0 1px 0 #fff`, a one-pixel top highlight on paper surfaces (cards, option cards, product cards, chips). It is the only "glassy" treatment in the UI: no blur, no translucency, no frosted panels.
- Easing: `--ease: cubic-bezier(.2, .7, .2, 1)`. Durations: 160ms for colour and border changes, 280ms for panels opening and closing.
- Motion rules: motion only answers an action (menu opens, option selects, step changes) or, on the home page only, scroll position (the dropper). No entrance fades, no hover lift, no animated arrows, no looping anything. `prefers-reduced-motion: reduce` sets all transitions to 1ms and shows the dropper's final frame as a still image.

## 6. Components

- Buttons. Primary: honey fill, ink text, 10px radius, 48px tall on phones (44 minimum everywhere), 17px Karla 600, horizontal padding 22px. Hover and active: honey-deep. Focus-visible: 2px ink outline, 3px offset. Disabled: 45% opacity, no pointer. Secondary: 1.5px ink border, transparent fill, ink text; hover: dew fill. Tertiary: text link, ink, 1.5px underline offset 4px; hover: honey-deep underline. Button text never wraps.
- Nav. 64px bar on pearl with a 1px line below. Wordmark left in Young Serif 22px. Links in Karla 500 15px, ink-soft; current page is ink with a 2px honey underline 6px below the baseline. Primary button at the right from 1024px. Below 1024px a 44px "Menu" control opens a full-height pearl panel with the links in h3 size and the primary button at the bottom; the panel carries the float shadow.
- Quiz option card. Paper fill, 1px line border, 18px radius, 56px minimum height, 16px padding, 17px Karla 500 label with an optional 15px ink-soft helper. Selected: dew fill, 2px ink border, a filled ink circle mark at the right. Hover: dew-deep border. Focus-visible: 2px ink outline. Multi-select cards show a square mark instead of a circle.
- Progress. A 4px dew-deep track with a honey fill across the top of the quiz card, plus the text "Step 2 of 6" in caption size.
- Product card. Paper, 1px line, 18px radius. Brand in caption (ink-soft), name in h4 set in Young Serif, one line of key ingredients in small, the "why" in small ink-soft, then a row with the tier (£, ££ or £££ in Karla 600) and a "Where to buy" tertiary link with an external-link mark. Optional photo slot at the top at a 4:3 ratio, only when a real photo exists; no placeholder is ever shown.
- Routine step row. Left column: the step name in h4 and the time of day. Right: the product card. On phones the columns stack.
- Notice. 18px radius panel, 16px padding, 1px border. Info uses dew; caution uses warning-tint with warning text for the heading; never a coloured left stripe.
- Search and chips. A 48px search input (16px text, paper fill, line border, ink focus ring) beside a secondary button; chips are 40px tall, 10px radius, paper fill, line border, dew on hover. Chips are links, never filters that hide content.
- Featured block. One large paper card (3 columns) beside two stacked cards (2 columns) from 768px; single column below. Hover underlines the heading in honey. Used for "start here" on the home page and the Learn index.
- In short box. A dew panel at the top of every guide with a three-bullet summary, so a beginner can stop reading after it.
- Shopping list. A paper card on results listing the four basics with rounded prices and a total, plus a copy button.
- Quiz footer. Sticky at the bottom on phones with a line above and the Next button on the right, so the action never scrolls away.
- Footer. Pearl ground, 1px line above, four columns from 768px (about, site, learn, legal), the affiliate sentence and the medical sentence in small ink-soft, then the copyright line with the current year.

## 7. Iconography and imagery

- Icons: a small inline set drawn at 20px with a 1.75px ink stroke: menu, close, arrow right, external link, check, back. Used only where they carry meaning (links out, close, back). No decorative icon grids.
- Imagery: no stock photos and no abstract blobs. The only illustration is the dropper. Product and home photo slots exist in the markup and stay collapsed until real photos are supplied; photos must be real objects on a plain surface, exported at 1600px wide, and never stretched.

## 8. The home page moment: a hero you can use

- There is no illustration or animation on the home page any more. The hero is the headline, a two-line lede, the primary button, a search field with a datalist of topics, and a row of topic chips, with a real quiz question beside it at laptop width. The search maps what is typed to the page that answers it (keyword routes in the script) and falls back to the Learn index.
- Below it, in order: a "start here" block (one featured guide and two stacked), the five skin types as an index list, six ingredient specimen tiles, a preview of what results look like, four guide cards, and an honest trust block with the final call to action.
- Specimen tiles: a 4:5 (3:4 at desktop) tile in dew for botanicals and pearl for lab ingredients, with the name in Young Serif, the Latin or INCI name in Karla italic, and one line on what it does. They are the stand-in for ingredient photographs: when a real photograph exists it replaces the tint, and the text sits on a paper strip at the bottom.
- Photo shot list for when you have a camera and the products: six ingredient macros (centella leaf, a snail shell or mucin texture, heartleaf, rice grains, a niacinamide serum drop, a ceramide cream swatch), the four basics on a plain surface, one hero still life of a dropper on a mirror. Plain backgrounds, daylight, 1600px wide, WebP.

## 8b. Data model for the build

Three typed tables, mirrored from the research notes, so a skin type page or a results page is a query rather than hand-written HTML:

- `products` (the 56 researched items): id, brand, name, category, step, skinTypes, concerns, keyIngredients, texture, size, priceGBP, tier, retailer, buyUrl, when, why, beginnerNote, fragranceFree, alcoholFree, avoidIfPregnant, sensitiveSafe, activeStrength, origin.
- `ingredients` (the glossary): id, name, aliases, primaryBenefit, targetSkinTypes, cautions, layering (for example "damp skin"), pairsWith, avoidWith, pregnancySafe.
- `concerns` and `steps`: concern id, label, recommendedIngredients; step id, order, name, frequency (am, pm, both), howToApply (one short line for the card tip).

Two UI rules come from the data: a damp-skin tip renders on any toner, essence, humectant serum or moisturiser, and anything with `activeStrength: strong` only appears under the Advanced disclosure, never in the starter shelves or a beginner's results.

## 9. Writing

- Plain words, sentence case, active voice. "Find my routine", not "Submit".
- No em dashes. Use a comma, a full stop or brackets.
- No "it's not X, it's Y" constructions, no exclamation marks, no hype words.
- Explain any skincare term the first time it appears, in one short clause.
- Errors say what happened and what to do: "Pick at least one option to continue."
- Empty states invite: "Nothing here yet. Take the quiz and your routine will show up here."
