# Reference specs

Each reference described back as a spec before use, as the brief asks. Measurements come from the live sites at a 1024px viewport on 19 Oct 2026. "Borrow" means the layout, spacing or hierarchy idea is adapted; nothing is copied (no content, colours or type).

## 1. Athleats (weareathleats.com)

- Layout: full-bleed photo hero, copy left-aligned in the bottom-left third over the photo, phone mockup right of centre. Below: a three-up row of small illustrations, then alternating two-column sections (copy left, product screenshot right) on a warm ground, then a long card grid of recipes. Nav is a centred pill with the wordmark in the middle and a single dark-green button on the right.
- Empty space: generous. Sections are roughly 120 to 160px apart; copy blocks sit in a column of about 480px with the rest left empty.
- Type sizes: four. 64px serif display (Perfectly Nineties, weight 400, line-height 1.1), 18px sans sub-heads, 16px sans body (line-height 1.5, letter-spacing -0.015em), 14px nav. Serif for display, humanist sans (Athauss) for everything else.
- Palette: warm off-white ground #F8F6F1, near-black text #1E1D19, muted body text #716F6A, one accent: olive #7B896F (buttons), plus a pale green testimonial card. Photography carries the colour.
- Deliberately absent: no gradients, no icon grids, no drop shadows, no centred hero, no uppercase labels. Only one button style.
- Clashes with GlowGuide: the olive accent and the app-store framing. Star ratings and testimonials are out (no fake social proof). Photo-led hero depends on photography we do not have yet.
- What we take: the warm off-white ground, serif display over a humanist sans, left-aligned hero copy in a narrow column, one accent only, sections that alternate copy and a real visual.

## 2. Polpis Systems (polpissystems.com)

- Layout: a long single scroll (13,000px) where one illustration (contour lines, then a drilling shaft) evolves while short copy blocks pin and release. Hero headline bottom-left, sub-copy bottom-right. Nav is a thin bar with tiny mono links.
- Empty space: extreme. Most of each viewport is illustration; copy is a 420px block.
- Type sizes: 57px grotesk display (letter-spacing -0.04em, weight 400), 34px h2, 23px h3, 14px mono body (line-height 1.7), 10px mono uppercase nav.
- Palette: near-black ground #0E0606, off-white text #F7F6F2, one accent: orange #FF7135, warm gradient washes in the illustration.
- Deliberately absent: no cards, no photos, no buttons other than one, no icons.
- Clashes with GlowGuide: dark mode (not wanted), monospace (reads technical), uppercase nav (banned), orange, 13,000px of scroll before anything actionable.
- What we take: the mechanism only. A sticky stage with one illustration driven by scroll progress, with short copy beats that appear as you move. Capped at about three viewports on GlowGuide so the quiz is never far away.

## 3. Craft (craft.do)

- Layout: centred serif headline over an illustrated sky, one black button, then a large real product screenshot. Below: a horizontal scroller of people cards, then alternating two-column feature sections, a dark pricing block, and a six-column footer.
- Empty space: moderate. Sections are 100 to 140px apart; content max-width about 1100px.
- Type sizes: 62px serif display (Untitled Serif, letter-spacing -0.04em), 50px h2, 42px h3, 16px sans body at weight 500. Serif display, sans body (Untitled Sans).
- Palette: warm off-white ground #FCF9F7, true black text #030302, black pill buttons, plus pastel illustration colours (sky blue, mint, lilac) and a pale green panel.
- Deliberately absent: no gradients on type, no shadows on cards, no uppercase labels.
- Clashes with GlowGuide: pastel panel colours and emoji (banned), everything centred in the hero (banned), black pill buttons everywhere (banned).
- What we take: the two-family type system with a big, calm serif headline and a sans body, the warm off-white ground, and showing the real product (our quiz) instead of describing it.

## 4. Hungry Tiger (eathungrytiger.com)

- Layout: a 6,144px tall hero section (eight viewports) with a fixed, full-viewport stage. The jar is a Lottie animation rendered to canvas and scrubbed by scroll position (Webflow interaction), so the jar turns and tilts as you scroll while short copy blocks fade in at fixed scroll points. Smooth scrolling via Lenis; word-by-word text reveal via GSAP SplitType. Display headline fills the full width.
- Empty space: the stage is mostly empty ground with one object centred; copy blocks are small and positioned in corners.
- Type sizes: 152px display (Salmond, weight 700, letter-spacing about -0.02em), small sans body (Graphikx) around 12 to 14px.
- Palette: rust ground #823513, marigold text #FAAE33, black and orange product. Two colours plus the jar photo.
- Deliberately absent: no cards in the hero, no nav bar chrome beyond tiny links, nothing to click until the copy says "buy now".
- Clashes with GlowGuide: the shouting type scale, the two-colour saturated world, eight viewports of scroll, smooth-scroll hijacking (bad on phones), canvas and Lottie dependencies.
- What we take: the exact mechanism the brief asks for, rebuilt lighter. Sticky stage (not fixed), 260vh tall, an SVG dropper whose bulb squeezes, a serum drop that forms, falls and lands, driven by scroll progress with transforms only. No canvas, no Lottie, no library. Reduced motion or no JavaScript shows the final frame as a static illustration, so the page can never break.

## 5. Prose blog (via Refero), added 21 Oct

- Layout: thin nav with a small wordmark and text links; a full-width editorial hero built on one large photograph with a text panel at the left (serif italic heading, two lines of copy, a search field) and a 2 by 3 grid of rounded topic buttons at the right. Below: a dark olive "Trending" band with a serif tile and a horizontal carousel of photo cards; then category sections, each with one featured article (text card left, photo right, date and read time in a caption) and a row of three photo cards; a promo banner; a repeated category section.
- Empty space: moderate. Content sits in a 1200px container; sections are about 80px apart.
- Type sizes: three in use. Serif display (Saol) for headings around 32 to 40px with an italic for the hero; sans (Simplon) body at 14 to 16px; tiny tracked captions for dates and read times.
- Palette: sepia, charcoal, camel brown, silver pink and a light beige ground. Photography carries almost all the colour.
- Deliberately absent: no icon grids, no gradients, no illustration; nothing competes with the photographs.
- Clashes with GlowGuide: every section depends on photography we do not have; tracked uppercase captions are banned; the carousel and promo banner are shop furniture.
- What we take: the hero as a working tool (headline, copy, search, topic chips) rather than a picture; the featured-plus-stack article block; category sections with one large item and a row of smaller ones; read time as a caption; photo slots sized and positioned for when real photographs exist.

## 6. Douze about page (via Refero), added 21 Oct

- Layout: full-bleed photo hero with a two-line serif headline in white; then alternating blocks of photograph and short text, each text block with a small curved label, a serif heading, two short paragraphs and one pale sage button; an "Our ingredients" row of three cropped ingredient photographs; a founders block; a full-width sign-up band.
- Empty space: generous. Text columns are about 380px wide with photographs taking the other half.
- Type sizes: a light condensed serif (Boogy Brut) at roughly 56px for the hero and 36px for section headings with an italic accent word; a small sans (Robin) for body at 13 to 14px; tiny uppercase labels in sage.
- Palette: off-white ground, deep teal, army brown, mocha, dark grey, and a pale sage for buttons.
- Deliberately absent: no cards, no borders, no icons; whitespace and photography do the structuring.
- Clashes with GlowGuide: the italic accent word (a generated-page tell), uppercase labels, and photography everywhere.
- What we take: the ingredient row as a first-class section (ours uses typographic specimen tiles until photographs exist), the pale tint for secondary surfaces, and the discipline of one heading, two paragraphs, one action per block.

## What the references share, and what GlowGuide keeps

- One accent colour, chosen once.
- A serif display face over a sans text face, or one family used with discipline.
- Warm off-white grounds on the two product sites.
- Copy in narrow columns with a lot of air around it.
- One big visual idea per page, and nothing else competing with it.
