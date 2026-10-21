# GlowGuide v2: PRD

21 Oct 2026. This is the "write a PRD.md with every page, section and layout before any code" step from the Master Frontend Prompt (new-build variant). The mockup in this folder is the visual of this PRD; STEP 3 builds exactly this. Tokens and components are in DESIGN.md, reference specs in REFERENCES.md, the polish list and open decisions in AUDIT.md.

## BRIEF (as understood from the chat)

- Project: GlowGuide. A skincare recommendation and learning site for complete beginners of any age: a two-minute quiz that returns a five-step Korean-skincare routine with UK-available products, shelves by skin type, and plain-English guides.
- Stack: Next.js 16 (App Router, TypeScript) + Tailwind 4, deployed on Vercel from `salviavarghese/glowguide-next`. The April Payload CMS and Neon database are removed; products and guides are typed data files.
- Pages: Home, Quiz, Results, Skin types index, five skin type pages, Learn index, nine guides, About, Privacy, 404. No logged-in areas, no accounts.
- Brand: wordmark "GlowGuide" set in Young Serif (no logo yet). Colour system from DESIGN.md: pearl ground, ink text, honey accent, dew tint. Tagline: "Skincare advice from the friend who actually reads the ingredients."
- The feel in three words: calm, warm, clear.
- References: Athleats, Polpis, Craft, Hungry Tiger (round 1), Prose blog and Douze about page via Refero (round 3). All described back as specs in REFERENCES.md. Layout and hierarchy adapted, nothing copied.
- Not wanted: dark mode, animation (the scroll-driven pipette was built and then removed on request), stock photos, glassmorphism, anything from the AI-tell list.
- Copy: written from scratch for this site, in the voice rules in DESIGN.md section 9; reviewed in the mockup.
- Skills: taste-skill, ui-ux-pro-max and impeccable are not available in this environment, nor is the Playwright MCP; Playwright (Python) was used for screenshots and the DESIGN RULES list was checked by hand and by script. Install the add-ons in Claude Code before STEP 3 if you want the extra pass.

## Site-wide

- Nav: 64px bar, wordmark left, links (Quiz, Skin types, Learn, About), primary button "Start the quiz" from 1024px; a 44px Menu control below that opening a full-width panel with the links in h3 size and the primary button. Current page gets the honey underline. Skip link to `#main`.
- Footer: four columns from 768px (about with wordmark and one line; Site; Learn; Legal), then the independence sentence, the medical sentence and the copyright line with the current year.
- Container 1120px, gutters 20/32/40px, sections 64px on phones and 96px from 1024px.
- Every page: unique title and meta description, pearl ground, one primary action, AA contrast, 44px tap targets, 16px input text, no horizontal scroll at 360 to 1440px.
- Routes and the answer code in `/results?a=` never change once built; product ids in the data file are stable because share links and skin type pages use them.

## Home (`/`)

1. Hero (two columns from 1024px, 7:5). Left: h1 "Start with your skin, not the shelf.", two-line lede, primary button "Start the quiz", tertiary link "Or browse by skin type", a search field with a datalist of topics and a secondary "Find" button, nine topic chips. Right: a real quiz question rendered as a preview card with the caption "A real question from the quiz". On phones the preview sits below the chips.
   Search behaviour: keyword routes (concern, ingredient, step) to the page that answers it; empty or unmatched goes to `/learn`. In the build this becomes a small client-side index over guides, ingredients and skin types.
2. "New here? Start with these three." (pearl-deep band): featured block, one large card for The five-step routine and two stacked cards (Which skin type am I?, Double cleansing). Each card is one link.
3. "Already know your skin type?": index list of the five types, each a row with name, one line and an arrow.
4. "Six ingredients worth knowing" (pearl-deep): six specimen tiles (centella, snail mucin, heartleaf, rice, niacinamide, ceramides) linking to glossary anchors, plus "Read the whole glossary". Tiles become photographs when real ones exist.
5. "What your results look like": split, copy left with the primary button, a results preview card right (skin type, the four basics, a rounded total). The preview is generated from the same engine and data as the results page so it never drifts.
6. "Keep learning" (pearl-deep): four guide cards (double cleansing, skin types, purging, SPF) and "All guides".
7. "Straight about how this works": split, two paragraphs on independence, links and medical scope with a link to About, and a card with the final "Start the quiz".

## Quiz (`/quiz`)

- Single column, max 40rem. Top row: ghost "Back" (hidden on step 1) and "Step n of 6". Four-pixel progress bar. Step 1 only: "About two minutes. No account, no email, and you can change any answer with Back."
- Six steps, one question each, h2 question, optional helper line, tappable option cards (radio or checkbox semantics), optional helper under each option:
  1. How skin feels a few hours after washing (single).
  2. What bothers you most (multi, up to three).
  3. How skin reacts to new products (single, includes diagnosed eczema or rosacea).
  4. Which are true right now (multi: no SPF, no routine, wears makeup or SPF, already uses actives, none).
  5. By midday your skin is (single, separates dry from dehydrated).
  6. Anything to keep in mind (multi, optional: pregnant or breastfeeding, under 16, prescription acne treatment, none).
- Footer row: "Save it for later" link left, primary "Next" right ("See my routine" on step 6). Sticky at the bottom on phones.
- Validation: pressing Next with nothing picked on a required step turns the option borders error-red and shows "Pick at least one option to continue." with an alert icon; clears on any pick. "None of these" clears the other options in its group; a group with a maximum ignores extra picks.
- Answers encode into `/results?a=…` and are also kept in localStorage so a reload keeps the routine.

## Results (`/results?a=…`)

1. Head: caption "Your skin type", the type in display size (with ", leaning sensitive" when relevant), tag chips for the concerns, the type paragraph, and a dehydration note when it applies.
2. "Your routine": two columns from 1024px, Morning and Night, five numbered step rows each with the step name, timing, an optional one-line note and the product card for the pick. Night step 1 is the oil cleanser. Extras (spot patches, a gentle exfoliant) appear in a third block when the answers call for them.
3. "Buy these four first": copy left, a shopping-list card right with the four basics, rounded prices, a total and a copy button.
4. "Add them in this order": week 1, 2, 4, 6 timeline rows.
5. "Watch-outs for you": a barrier-first notice when the answers call for it, one caution notice per safety flag (pregnancy, prescription, under 16, eczema or rosacea, reactive skin, no SPF habit, already using actives), and the purging note.
6. Share card: read-only link input and "Copy link", plus "Retake the quiz" and "browse everything for … skin".
7. Closing line on links and medical scope.
- Empty state (`/results` with no answers): "Nothing here yet." with the primary button.
- Error state (malformed code): the error notice from the style guide with "Retake the quiz".
- Engine rules (ported from the Python reference to TypeScript with unit tests): skin type from Q1 adjusted by Q5; sensitivity from Q3; gentle-only for diagnosed, under-16 or prescription; no retinoids or strong acids in pregnancy; strong actives never for beginners; sensitive-safe and fragrance-free preferred for reactive skin; one pick per step scored on concern overlap, type match, texture fit and price tier; always an SPF; double cleanse at night.

## Skin types (`/skin-types`) and each type (`/skin-types/[type]`)

- Index: page head, index list of the five types, the "Dry or dehydrated?" notice, secondary button to the quiz.
- Type page: page head with the type paragraph; split "How to tell" and "What to look for on a label" plus "What to avoid"; then shelves in three groups: "Start here: the four basics" (cleansers, cleansing oils and balms, toners and essences, moisturisers, sunscreens), "Step five: treat" (serums without strong actives), and a closed "Advanced, once your skin is settled" disclosure (exfoliants and stronger actives, spot patches and masks and eye care, retinoids and strong serums). Shelves scroll sideways on phones with a peek of the next card. Price-tier line at the bottom.

## Learn (`/learn`) and guides (`/learn/[slug]`)

- Index: page head; featured block with The five-step routine large and a dew card "Read in this order"; a grid of the other eight guides as cards (title, summary, read time); source note linking to About.
- Guide: caption row (Learn link, read time), h1, lede, "In short" box with three bullets, the body at a 64ch measure with h2 and h3 (h3s carry anchor ids for chips and search), the "Not medical advice" notice, a numbered Sources list, and "Keep reading" with three other guides.
- Nine guides: five steps, double cleansing, skin types, ingredient glossary (30 entries), purging, SPF in the UK, myths, how long results take and when to see a GP, fifteen beginner mistakes.

## About (`/about`), Privacy (`/privacy`), 404

- About: who makes it, Independent, How we make money (honest current state, Ad labels when affiliate links exist), A medical note, Where this comes from (clinical bodies and the Korean-skincare experts), Say hello with the contact email.
- Privacy: what is stored (answers in the browser only), analytics (cookieless, no banner), links to shops, contact, last-updated line.
- 404: "That page isn't here." with the primary button to the quiz and a secondary to home.

## Data (from DESIGN.md section 8b)

- `products` (56 researched, UK prices and links), `ingredients` (the glossary), `concerns`, `steps`. The product cards, shelves, results and the home preview all read from these; the damp-skin tip and the advanced disclosure are rules over the data, not hand-written.

## Acceptance for STEP 3

- Matches the mockup page for page at 390 and 1280, and holds at 360, 430, 768, 1024 and 1440.
- Build, lint, type-check and the engine tests pass; no console errors.
- Every state above reachable and checked by hand: menu, quiz validation, results empty and error, advanced disclosure, copy buttons, search routes.
- Only approved polish-list items are built (AUDIT.md).
