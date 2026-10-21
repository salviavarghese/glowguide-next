# GlowGuide

Skincare for complete beginners, built around your skin. A two-minute quiz returns a five-step Korean skincare routine with UK-available products; shelves by skin type; nine plain-English guides.

Live: https://glowguide-next-blue.vercel.app

## Stack

Next.js 16 (App Router, TypeScript), Tailwind 4, self-hosted fonts (Young Serif, Karla), Vitest. No database, no accounts, no analytics. Products and guides are typed data files.

## Run it

```
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm test           # engine and data tests
npm run lint
npm run typecheck
```

Copy `.env.example` to `.env.local` to set the public URL and a contact email (both optional).

## Where things are

- `src/app` routes: `/`, `/quiz`, `/results`, `/skin-types/[type]`, `/learn/[slug]`, `/about`, `/privacy`, plus icons, Open Graph image, robots and sitemap.
- `src/lib/products.ts` the 56 researched products (UK prices, October 2026). Edit here to add or remove a product.
- `src/lib/articles.ts` the guides, as HTML strings with their sources.
- `src/lib/engine.ts` the recommendation rules, with tests in `engine.test.ts`.
- `src/lib/quiz.ts` the questions and the answer code used in `/results?a=…`.
- `src/lib/site.ts` site-wide settings, including the affiliate switch that turns on "Ad" labels.
- `DESIGN.md` tokens, type scale, components. `docs/` holds the PRD, reference specs, audit and research notes.

## History

v1 (Jan to Apr 2026) was a placement project: a landing page with a Payload CMS sign-up form. v2 (Oct 2026) is the product itself and replaces it entirely.
