// Product data for shelves and results. Researched October 2026 (see research notes in the PR). Prices are rounded regular UK prices.

export type SkinType = "oily" | "dry" | "combination" | "sensitive" | "normal"
export type Concern = "acne" | "redness" | "pigmentation" | "ageing" | "dryness" | "oiliness" | "texture" | "dehydration"
export type Category = "cleansing-oil" | "cleanser" | "toner" | "essence" | "serum" | "moisturiser" | "spf" | "exfoliant" | "spot-treatment" | "mask" | "eye"
export type Step = "cleanse" | "tone" | "treat" | "moisturise" | "protect" | "extra"
export type Tier = "£" | "££" | "£££"

export type Product = {
  id: string
  brand: string
  name: string
  category: Category
  step: Step
  skinTypes: SkinType[]
  concerns: Concern[]
  keyIngredients: string[]
  texture: string
  size: string | null
  priceGBP: number | null
  tier: Tier
  retailer: string | null
  buyUrl: string | null
  when: "am" | "pm" | "both"
  why: string
  beginnerNote: string | null
  fragranceFree: boolean | null
  alcoholFree: boolean | null
  avoidIfPregnant: boolean
  sensitiveSafe: boolean
  activeStrength: "none" | "gentle" | "strong"
  origin: string
}

export const products: Product[] = [
  {
    "id": "anua-heartleaf-pore-control-cleansing-oil",
    "brand": "Anua",
    "name": "Heartleaf Pore Control Cleansing Oil",
    "category": "cleansing-oil",
    "step": "cleanse",
    "skinTypes": [
      "oily",
      "dry",
      "combination",
      "sensitive",
      "normal"
    ],
    "concerns": [
      "oiliness",
      "acne",
      "texture"
    ],
    "keyIngredients": [
      "heartleaf (houttuynia cordata) extract",
      "centella asiatica",
      "panthenol",
      "plant oils"
    ],
    "texture": "oil",
    "size": "200ml",
    "priceGBP": 16.0,
    "tier": "££",
    "retailer": "Boots",
    "buyUrl": "https://boots.com/anua-heartleaf-pore-control-cleansing-oil-200ml-10352040",
    "when": "pm",
    "why": "A light oil you massage onto dry skin to dissolve sunscreen, makeup and the oil sitting in pores, then rinse. It is the usual first step of a double cleanse and suits almost everyone, including people who find oil cleansers heavy.",
    "beginnerNote": "Apply to a dry face, massage for about a minute, add a splash of water to turn it milky, rinse, then follow with a water-based cleanser.",
    "fragranceFree": false,
    "alcoholFree": true,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "heimish-all-clean-balm",
    "brand": "Heimish",
    "name": "All Clean Balm",
    "category": "cleansing-oil",
    "step": "cleanse",
    "skinTypes": [
      "oily",
      "dry",
      "combination",
      "normal"
    ],
    "concerns": [
      "oiliness",
      "dryness",
      "texture"
    ],
    "keyIngredients": [
      "shea butter",
      "coconut-derived emollients",
      "citrus and herb extracts"
    ],
    "texture": "balm",
    "size": "120ml",
    "priceGBP": 18.0,
    "tier": "££",
    "retailer": "Justmylook",
    "buyUrl": "https://www.justmylook.com/products/heimish-all-clean-intensive-cleansing-balm-120ml",
    "when": "pm",
    "why": "A solid balm that melts into an oil on the skin and then rinses off as a milk, taking makeup and SPF with it. Good if you prefer scooping a balm to pumping a runny oil, and it works for most skin types.",
    "beginnerNote": "It contains essential oils, so patch test first if your skin reacts easily, and always follow with a second gentle cleanser.",
    "fragranceFree": false,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": false,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "banila-co-clean-it-zero-cleansing-balm-original",
    "brand": "Banila Co",
    "name": "Clean It Zero Cleansing Balm Original",
    "category": "cleansing-oil",
    "step": "cleanse",
    "skinTypes": [
      "oily",
      "dry",
      "combination",
      "normal"
    ],
    "concerns": [
      "oiliness",
      "dryness",
      "texture"
    ],
    "keyIngredients": [
      "acerola extract",
      "vitamin C",
      "cranberry extract",
      "hot spring water"
    ],
    "texture": "balm",
    "size": "100ml",
    "priceGBP": 22.0,
    "tier": "££",
    "retailer": "Justmylook",
    "buyUrl": "https://www.justmylook.com/products/banila-co-clean-it-zero-original-cleansing-balm-100ml",
    "when": "pm",
    "why": "The classic Korean sherbet-style cleansing balm: it turns to oil on contact and lifts off makeup and sunscreen quickly. A reliable first cleanse for normal, combination or dry skin.",
    "beginnerNote": "The Original version is scented; Banila Co also sells a Purifying version for easily irritated skin.",
    "fragranceFree": false,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": false,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "beauty-of-joseon-ginseng-cleansing-oil",
    "brand": "Beauty of Joseon",
    "name": "Ginseng Cleansing Oil",
    "category": "cleansing-oil",
    "step": "cleanse",
    "skinTypes": [
      "dry",
      "combination",
      "normal",
      "oily"
    ],
    "concerns": [
      "dryness",
      "dehydration",
      "oiliness"
    ],
    "keyIngredients": [
      "soybean oil",
      "olive fruit oil",
      "camellia seed oil",
      "ginseng seed oil"
    ],
    "texture": "oil",
    "size": "210ml",
    "priceGBP": 17.0,
    "tier": "££",
    "retailer": "Cult Beauty",
    "buyUrl": "https://www.cultbeauty.co.uk/p/beauty-of-joseon-ginseng-cleansing-oil-210ml/14866959/",
    "when": "pm",
    "why": "A richer, more cushiony cleansing oil built on plant oils, so it feels comforting on dry or normal skin while still breaking down sunscreen and makeup. It rinses clean without a tight feeling.",
    "beginnerNote": "It has a natural herbal scent from the ginseng seed oil, so pick a different oil if you want something unscented.",
    "fragranceFree": false,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": false,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "anua-heartleaf-quercetinol-pore-deep-cleansing-foam",
    "brand": "Anua",
    "name": "Heartleaf Quercetinol Pore Deep Cleansing Foam",
    "category": "cleanser",
    "step": "cleanse",
    "skinTypes": [
      "oily",
      "combination",
      "normal"
    ],
    "concerns": [
      "acne",
      "oiliness",
      "texture"
    ],
    "keyIngredients": [
      "heartleaf extract",
      "quercetin",
      "salicylic acid (BHA)",
      "hyaluronic acid"
    ],
    "texture": "foam",
    "size": "150ml",
    "priceGBP": 13.0,
    "tier": "££",
    "retailer": "Boots",
    "buyUrl": "https://boots.com/anua-heartleaf-quercetinol-pore-deep-cleansing-foam-150ml-10352043",
    "when": "both",
    "why": "A fine, airy foam with a small amount of salicylic acid, so it cleans into pores a little more deeply than a plain gel without feeling harsh. Suits oily or combination skin that gets congested.",
    "beginnerNote": "Use as your second cleanse at night and on its own in the morning; it is scented, so skip it if fragrance bothers you.",
    "fragranceFree": false,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": false,
    "activeStrength": "gentle",
    "origin": "KR"
  },
  {
    "id": "cosrx-low-ph-good-morning-gel-cleanser",
    "brand": "COSRX",
    "name": "Low pH Good Morning Gel Cleanser",
    "category": "cleanser",
    "step": "cleanse",
    "skinTypes": [
      "oily",
      "combination",
      "normal",
      "sensitive"
    ],
    "concerns": [
      "acne",
      "oiliness"
    ],
    "keyIngredients": [
      "tea tree leaf oil",
      "betaine salicylate (BHA)",
      "allantoin"
    ],
    "texture": "gel",
    "size": "150ml",
    "priceGBP": 14.7,
    "tier": "££",
    "retailer": "Boots",
    "buyUrl": "https://boots.com/cosrx-low-ph-good-morning-gel-cleanser-150ml-10280730",
    "when": "both",
    "why": "A mild gel cleanser with a skin-friendly low pH, so it washes away oil and sweat without stripping. It is one of the most common first Korean cleansers for oily and combination skin.",
    "beginnerNote": "It foams only a little, which is normal; it contains tea tree oil, so patch test if you are very reactive.",
    "fragranceFree": false,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "gentle",
    "origin": "KR"
  },
  {
    "id": "etude-soonjung-ph-6-5-whip-cleanser",
    "brand": "Etude",
    "name": "SoonJung pH 6.5 Whip Cleanser",
    "category": "cleanser",
    "step": "cleanse",
    "skinTypes": [
      "dry",
      "sensitive",
      "normal",
      "combination"
    ],
    "concerns": [
      "redness",
      "dryness",
      "dehydration"
    ],
    "keyIngredients": [
      "madecassoside",
      "panthenol",
      "green tea extract"
    ],
    "texture": "foam",
    "size": "150ml",
    "priceGBP": 16.0,
    "tier": "££",
    "retailer": "Superdrug (marketplace seller)",
    "buyUrl": "https://www.superdrug.com/skin/face-skin-care/cleansers/cleansing-mousse-foams/etude-house-soonjung-ph-65-whip-cleanser-150ml/p/mp-00045507",
    "when": "both",
    "why": "A soft whipped foam made for easily irritated skin: no fragrance, no essential oils and a gentle pH, so it cleans without leaving skin tight. A safe pick if you are not sure what your skin can tolerate.",
    "beginnerNote": "Work a small amount into a lather in your hands before it touches your face.",
    "fragranceFree": true,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "the-face-shop-rice-water-bright-foaming-cleanser",
    "brand": "The Face Shop",
    "name": "Rice Water Bright Foaming Cleanser",
    "category": "cleanser",
    "step": "cleanse",
    "skinTypes": [
      "normal",
      "combination",
      "oily"
    ],
    "concerns": [
      "oiliness",
      "texture"
    ],
    "keyIngredients": [
      "rice water extract",
      "rice bran"
    ],
    "texture": "foam",
    "size": "150ml",
    "priceGBP": 3.0,
    "tier": "£",
    "retailer": "Stylevana (UK site)",
    "buyUrl": "https://www.stylevana.com/en_GB/the-face-shop-rice-water-bright-foaming-cleanser.html",
    "when": "both",
    "why": "A creamy, high-foaming rice cleanser that leaves skin feeling squeaky clean. Best for normal to oily skin that likes a thorough wash; dry or sensitive skin may find it a bit drying.",
    "beginnerNote": "Rinse well and follow with a hydrating toner, because it foams more strongly than most low-pH Korean cleansers.",
    "fragranceFree": null,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": false,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "cerave-hydrating-cleanser",
    "brand": "CeraVe",
    "name": "Hydrating Cleanser",
    "category": "cleanser",
    "step": "cleanse",
    "skinTypes": [
      "dry",
      "sensitive",
      "normal"
    ],
    "concerns": [
      "dryness",
      "dehydration",
      "redness"
    ],
    "keyIngredients": [
      "ceramides",
      "hyaluronic acid",
      "glycerin"
    ],
    "texture": "lotion",
    "size": "236ml",
    "priceGBP": 12.5,
    "tier": "££",
    "retailer": "Boots",
    "buyUrl": "https://boots.com/cerave-hydrating-cleanser-236ml-10246701",
    "when": "both",
    "why": "A non-foaming, fragrance-free cleanser from the UK pharmacy shelf that cleans without disturbing dry or sensitive skin. A dependable starting point if Korean products are hard to find near you.",
    "beginnerNote": "It does not foam, so do not keep adding more trying to make bubbles; massage and rinse.",
    "fragranceFree": true,
    "alcoholFree": true,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "US"
  },
  {
    "id": "round-lab-1025-dokdo-cleanser",
    "brand": "Round Lab",
    "name": "1025 Dokdo Cleanser",
    "category": "cleanser",
    "step": "cleanse",
    "skinTypes": [
      "oily",
      "dry",
      "combination",
      "sensitive",
      "normal"
    ],
    "concerns": [
      "dehydration",
      "dryness",
      "oiliness"
    ],
    "keyIngredients": [
      "hyaluronic acid",
      "ceramide NP",
      "deep sea water"
    ],
    "texture": "foam",
    "size": "150ml",
    "priceGBP": 15.0,
    "tier": "££",
    "retailer": "Boots",
    "buyUrl": "https://boots.com/round-lab-1025-dokdo-cleanser-150ml-10352047",
    "when": "both",
    "why": "A creamy foam that cleans properly but leaves skin soft rather than tight, thanks to hyaluronic acid and a ceramide. A good all-rounder when you want one cleanser for the whole household.",
    "beginnerNote": "Pair it with the matching Dokdo toner if you want a simple two-step start.",
    "fragranceFree": null,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "anua-heartleaf-77-soothing-toner",
    "brand": "Anua",
    "name": "Heartleaf 77% Soothing Toner",
    "category": "toner",
    "step": "tone",
    "skinTypes": [
      "oily",
      "dry",
      "combination",
      "sensitive",
      "normal"
    ],
    "concerns": [
      "redness",
      "acne",
      "dehydration"
    ],
    "keyIngredients": [
      "heartleaf (houttuynia cordata) extract 77%",
      "centella asiatica",
      "panthenol",
      "betaine"
    ],
    "texture": "watery",
    "size": "250ml",
    "priceGBP": 19.0,
    "tier": "££",
    "retailer": "Boots",
    "buyUrl": "https://boots.com/anua-heartleaf-soothing-toner-250ml-10352039",
    "when": "both",
    "why": "A watery, calming toner that takes the heat out of flushed or breakout-prone skin and adds a first layer of hydration. It is gentle enough for sensitive skin and works under anything.",
    "beginnerNote": "Pat a few drops in with your hands straight after cleansing while the skin is still slightly damp.",
    "fragranceFree": true,
    "alcoholFree": true,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "isntree-green-tea-fresh-toner",
    "brand": "Isntree",
    "name": "Green Tea Fresh Toner",
    "category": "toner",
    "step": "tone",
    "skinTypes": [
      "oily",
      "combination",
      "normal",
      "sensitive"
    ],
    "concerns": [
      "oiliness",
      "acne",
      "dehydration"
    ],
    "keyIngredients": [
      "green tea extract (about 80%)",
      "centella asiatica",
      "hyaluronic acid",
      "allantoin"
    ],
    "texture": "watery",
    "size": "200ml",
    "priceGBP": 18.48,
    "tier": "££",
    "retailer": "Boots",
    "buyUrl": "https://boots.com/isntree-green-tea-fresh-toner-200ml-10352440",
    "when": "both",
    "why": "A light green tea toner that hydrates without any heaviness, so oily and combination skin get moisture while still feeling fresh. Antioxidant green tea also helps calm skin that is prone to spots.",
    "beginnerNote": "Can be used morning and night; if your skin is very dry you may want a richer toner instead.",
    "fragranceFree": null,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "round-lab-1025-dokdo-toner",
    "brand": "Round Lab",
    "name": "1025 Dokdo Toner",
    "category": "toner",
    "step": "tone",
    "skinTypes": [
      "oily",
      "dry",
      "combination",
      "sensitive",
      "normal"
    ],
    "concerns": [
      "dehydration",
      "dryness",
      "redness"
    ],
    "keyIngredients": [
      "deep sea water minerals",
      "panthenol",
      "red algae extract"
    ],
    "texture": "watery",
    "size": "200ml",
    "priceGBP": 17.0,
    "tier": "££",
    "retailer": "Lookfantastic",
    "buyUrl": "https://www.lookfantastic.com/p/round-lab-1025-dokdo-toner-200ml/16858529/",
    "when": "both",
    "why": "A plain, watery hydrating toner that absorbs instantly and suits every skin type, which is why it is so often recommended as a first toner. Nothing in it is likely to sting or clog.",
    "beginnerNote": "Apply with your hands rather than a cotton pad to avoid wasting product.",
    "fragranceFree": null,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "haruharu-wonder-black-rice-hyaluronic-toner",
    "brand": "Haruharu Wonder",
    "name": "Black Rice Hyaluronic Toner",
    "category": "toner",
    "step": "tone",
    "skinTypes": [
      "dry",
      "normal",
      "combination"
    ],
    "concerns": [
      "dehydration",
      "dryness",
      "ageing"
    ],
    "keyIngredients": [
      "fermented black rice extract",
      "hyaluronic acid",
      "betaine",
      "beta-glucan"
    ],
    "texture": "watery",
    "size": "150ml",
    "priceGBP": 16.95,
    "tier": "££",
    "retailer": "Superdrug (marketplace seller)",
    "buyUrl": "https://www.superdrug.com/skin/face-skin-care/cleansers/face-toner/haruharu-wonder-black-rice-hyaluronic-toner-150ml/p/mp-00045349",
    "when": "both",
    "why": "A slightly viscous hydrating toner built on fermented black rice, which gives a plumper, more comfortable feel than a plain water toner. Good for normal to dry skin that wants a bit more cushion.",
    "beginnerNote": "This version contains lavender oil; Haruharu also sells a Fragrance Free edition if you react to essential oils.",
    "fragranceFree": false,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": false,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "tirtir-milk-skin-toner",
    "brand": "TIRTIR",
    "name": "Milk Skin Toner",
    "category": "toner",
    "step": "tone",
    "skinTypes": [
      "dry",
      "normal",
      "combination"
    ],
    "concerns": [
      "dryness",
      "dehydration",
      "texture"
    ],
    "keyIngredients": [
      "niacinamide",
      "centella asiatica",
      "ceramides",
      "peptides",
      "rice bran extract"
    ],
    "texture": "lotion",
    "size": "150ml",
    "priceGBP": 25.0,
    "tier": "££",
    "retailer": "Lookfantastic",
    "buyUrl": "https://www.lookfantastic.com/p/tirtir-milk-skin-toner-150ml/17074478/",
    "when": "both",
    "why": "A milky toner that sits between a toner and a light lotion, so it hydrates and softens in one step. Handy for dry or normal skin that wants a short routine.",
    "beginnerNote": "Shake before use and smooth a thin layer over the face; you may not need a separate serum on easy days.",
    "fragranceFree": null,
    "alcoholFree": true,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "laneige-cream-skin-toner-moisturiser",
    "brand": "Laneige",
    "name": "Cream Skin Toner & Moisturiser (Cerapeptide)",
    "category": "toner",
    "step": "tone",
    "skinTypes": [
      "dry",
      "normal",
      "sensitive",
      "combination"
    ],
    "concerns": [
      "dryness",
      "dehydration"
    ],
    "keyIngredients": [
      "ceramide NP",
      "peptides",
      "squalane",
      "hyaluronic acid"
    ],
    "texture": "lotion",
    "size": "170ml",
    "priceGBP": 29.5,
    "tier": "£££",
    "retailer": "Boots",
    "buyUrl": "https://boots.com/laneige-cream-skin-toner-and-moisturiser-170ml-10356939",
    "when": "both",
    "why": "A milky toner that behaves like a very light moisturiser, with ceramides and peptides to support a dry or sensitive skin barrier. For some people it replaces both toner and moisturiser in the morning.",
    "beginnerNote": "Shake well, then press two or three layers in with your palms for extra hydration.",
    "fragranceFree": true,
    "alcoholFree": true,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "cosrx-aha-bha-clarifying-treatment-toner",
    "brand": "COSRX",
    "name": "AHA/BHA Clarifying Treatment Toner",
    "category": "exfoliant",
    "step": "treat",
    "skinTypes": [
      "oily",
      "combination",
      "normal"
    ],
    "concerns": [
      "texture",
      "oiliness",
      "acne"
    ],
    "keyIngredients": [
      "glycolic acid (AHA)",
      "betaine salicylate (BHA)",
      "willow bark water",
      "allantoin"
    ],
    "texture": "watery",
    "size": "150ml",
    "priceGBP": 21.99,
    "tier": "££",
    "retailer": "Cult Beauty",
    "buyUrl": "https://www.cultbeauty.co.uk/p/cosrx-aha-bha-clarifying-treatment-toner-150ml/11401176/",
    "when": "pm",
    "why": "A very low-strength exfoliating toner, so it is a soft introduction to acids rather than a peel. It helps with slight roughness and clogged pores with little risk of irritation.",
    "beginnerNote": "Start two or three nights a week after cleansing and always wear SPF in the morning.",
    "fragranceFree": null,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": false,
    "activeStrength": "gentle",
    "origin": "KR"
  },
  {
    "id": "some-by-mi-aha-bha-pha-30-days-miracle-toner",
    "brand": "Some By Mi",
    "name": "AHA BHA PHA 30 Days Miracle Toner",
    "category": "exfoliant",
    "step": "treat",
    "skinTypes": [
      "oily",
      "combination"
    ],
    "concerns": [
      "acne",
      "oiliness",
      "texture"
    ],
    "keyIngredients": [
      "tea tree extract",
      "AHA",
      "BHA",
      "PHA",
      "niacinamide"
    ],
    "texture": "watery",
    "size": "150ml",
    "priceGBP": 17.5,
    "tier": "££",
    "retailer": "Justmylook",
    "buyUrl": "https://www.justmylook.com/products/some-by-mi-30-days-aha-bha-pha-miracle-toner-150ml",
    "when": "pm",
    "why": "A mild exfoliating toner that mixes three acid types at low levels with tea tree, aimed at oily skin with small breakouts and bumpy texture. It is gentle enough to use most nights once your skin is used to it.",
    "beginnerNote": "Begin every other night and stop if you feel stinging; do not stack it with other acids on the same night.",
    "fragranceFree": null,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": false,
    "activeStrength": "gentle",
    "origin": "KR"
  },
  {
    "id": "beauty-of-joseon-green-plum-refreshing-toner",
    "brand": "Beauty of Joseon",
    "name": "Green Plum Refreshing Toner: AHA + BHA",
    "category": "exfoliant",
    "step": "treat",
    "skinTypes": [
      "oily",
      "combination",
      "normal"
    ],
    "concerns": [
      "texture",
      "oiliness",
      "acne"
    ],
    "keyIngredients": [
      "green plum water",
      "glycolic acid (AHA)",
      "salicylic acid (BHA)",
      "mung bean extract"
    ],
    "texture": "watery",
    "size": "150ml",
    "priceGBP": 15.5,
    "tier": "££",
    "retailer": "Cult Beauty",
    "buyUrl": "https://www.cultbeauty.co.uk/p/beauty-of-joseon-green-plum-refreshing-aha-bha-toner-150ml/15391675/",
    "when": "pm",
    "why": "A daily-use exfoliating toner with small amounts of glycolic and salicylic acid, so pores stay clearer and skin feels smoother without the sting of a stronger acid. Good for combination skin that gets a bit congested.",
    "beginnerNote": "Use on a cotton pad or with hands after cleansing, a few nights a week to start.",
    "fragranceFree": null,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": false,
    "activeStrength": "gentle",
    "origin": "KR"
  },
  {
    "id": "the-ordinary-glycolic-acid-7-exfoliating-toner",
    "brand": "The Ordinary",
    "name": "Glycolic Acid 7% Exfoliating Toner",
    "category": "exfoliant",
    "step": "treat",
    "skinTypes": [
      "oily",
      "combination",
      "normal"
    ],
    "concerns": [
      "texture",
      "pigmentation",
      "oiliness"
    ],
    "keyIngredients": [
      "glycolic acid 7%",
      "aloe vera",
      "ginseng root",
      "tasmanian pepperberry"
    ],
    "texture": "watery",
    "size": "240ml",
    "priceGBP": 11.5,
    "tier": "£",
    "retailer": "Boots",
    "buyUrl": "https://boots.com/the-ordinary-glycolic-acid-toning-solution-240ml-10279240",
    "when": "pm",
    "why": "A proper-strength glycolic acid toner that visibly smooths rough texture and fades marks faster than the gentle Korean acid toners. It is cheap and effective, but it is a real active and can irritate.",
    "beginnerNote": "Only once or twice a week at first, never on the same night as retinoids or other acids, and SPF every morning is non-negotiable.",
    "fragranceFree": true,
    "alcoholFree": true,
    "avoidIfPregnant": true,
    "sensitiveSafe": false,
    "activeStrength": "strong",
    "origin": "UK"
  },
  {
    "id": "cosrx-bha-blackhead-power-liquid",
    "brand": "COSRX",
    "name": "BHA Blackhead Power Liquid",
    "category": "exfoliant",
    "step": "treat",
    "skinTypes": [
      "oily",
      "combination"
    ],
    "concerns": [
      "acne",
      "oiliness",
      "texture"
    ],
    "keyIngredients": [
      "betaine salicylate 4% (BHA)",
      "willow bark water",
      "niacinamide",
      "hyaluronic acid"
    ],
    "texture": "watery",
    "size": "100ml",
    "priceGBP": 25.0,
    "tier": "££",
    "retailer": "John Lewis",
    "buyUrl": "https://www.johnlewis.com/cosrx-bha-blackhead-power-liquid-100ml/p115393663",
    "when": "pm",
    "why": "A leave-on salicylic acid treatment that works inside pores to loosen blackheads and reduce breakouts on oily skin. Stronger than an acid toner, so treat it as a targeted active rather than an everyday step.",
    "beginnerNote": "Start two nights a week on dry skin after cleansing, wait a few minutes, then moisturise; expect a possible purge in the first weeks.",
    "fragranceFree": null,
    "alcoholFree": null,
    "avoidIfPregnant": true,
    "sensitiveSafe": false,
    "activeStrength": "strong",
    "origin": "KR"
  },
  {
    "id": "cosrx-advanced-snail-96-mucin-power-essence",
    "brand": "COSRX",
    "name": "Advanced Snail 96 Mucin Power Essence",
    "category": "essence",
    "step": "treat",
    "skinTypes": [
      "oily",
      "dry",
      "combination",
      "sensitive",
      "normal"
    ],
    "concerns": [
      "dehydration",
      "texture",
      "redness",
      "dryness"
    ],
    "keyIngredients": [
      "snail secretion filtrate 96%",
      "hyaluronic acid",
      "betaine",
      "panthenol",
      "allantoin"
    ],
    "texture": "gel",
    "size": "100ml",
    "priceGBP": 24.99,
    "tier": "££",
    "retailer": "Boots",
    "buyUrl": "https://boots.com/cosrx-advanced-snail-96-mucin-power-essence-gel-100ml-10280721",
    "when": "both",
    "why": "A slippery, lightweight essence that hydrates, helps skin recover from spots and dryness and gives a healthy-looking bounce. It suits every skin type, including sensitive, and layers under anything.",
    "beginnerNote": "The stringy texture is normal; press a pump into damp skin after toner and let it absorb.",
    "fragranceFree": true,
    "alcoholFree": true,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "beauty-of-joseon-ginseng-essence-water",
    "brand": "Beauty of Joseon",
    "name": "Ginseng Essence Water",
    "category": "essence",
    "step": "treat",
    "skinTypes": [
      "dry",
      "normal",
      "combination",
      "sensitive"
    ],
    "concerns": [
      "dehydration",
      "dryness",
      "ageing"
    ],
    "keyIngredients": [
      "ginseng root water 80%",
      "niacinamide 2%",
      "hyaluronic acid",
      "panthenol"
    ],
    "texture": "watery",
    "size": "150ml",
    "priceGBP": 17.0,
    "tier": "££",
    "retailer": "John Lewis",
    "buyUrl": "https://www.johnlewis.com/beauty-of-joseon-ginseng-essence-water-150ml/p115316818",
    "when": "both",
    "why": "A watery essence that sits between toner and serum, hydrating and giving tired-looking skin a bit more life. A simple first essence for normal to dry skin that wants a glow rather than any strong active.",
    "beginnerNote": "Use after toner and before serum; a few drops pressed in with your hands is enough.",
    "fragranceFree": true,
    "alcoholFree": true,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "mixsoon-bean-essence",
    "brand": "Mixsoon",
    "name": "Bean Essence",
    "category": "essence",
    "step": "treat",
    "skinTypes": [
      "dry",
      "normal",
      "combination"
    ],
    "concerns": [
      "texture",
      "dehydration",
      "dryness"
    ],
    "keyIngredients": [
      "fermented soybean extract",
      "barley",
      "pomegranate",
      "korean pear"
    ],
    "texture": "serum",
    "size": "50ml",
    "priceGBP": 28.0,
    "tier": "£££",
    "retailer": "Boots",
    "buyUrl": "https://boots.com/mixsoon-bean-essence-50ml-10352034",
    "when": "pm",
    "why": "A thick, sticky fermented essence with a very short ingredient list that softens rough skin and boosts hydration without acids. People with dry or dull skin tend to like it most.",
    "beginnerNote": "A little goes a long way; rub a pea-sized amount gently over dry skin, let it sit, then continue with your routine.",
    "fragranceFree": true,
    "alcoholFree": true,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "im-from-mugwort-essence",
    "brand": "I'm From",
    "name": "Mugwort Essence",
    "category": "essence",
    "step": "treat",
    "skinTypes": [
      "sensitive",
      "oily",
      "combination",
      "normal"
    ],
    "concerns": [
      "redness",
      "acne"
    ],
    "keyIngredients": [
      "mugwort (artemisia princeps) extract 100%"
    ],
    "texture": "watery",
    "size": "160ml",
    "priceGBP": 38.0,
    "tier": "£££",
    "retailer": "PureSeoul",
    "buyUrl": "https://pureseoul.co.uk/products/mugwort-essence-160ml",
    "when": "both",
    "why": "A single-ingredient mugwort essence used to calm redness and angry, breakout-prone skin. It is one of the simplest soothing products you can buy, though the price is on the high side for the size.",
    "beginnerNote": "Pat a small amount in after cleansing; using too much can feel tacky.",
    "fragranceFree": true,
    "alcoholFree": true,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "beauty-of-joseon-glow-deep-serum-rice-alpha-arbutin",
    "brand": "Beauty of Joseon",
    "name": "Glow Deep Serum: Rice + Alpha Arbutin",
    "category": "serum",
    "step": "treat",
    "skinTypes": [
      "oily",
      "dry",
      "combination",
      "sensitive",
      "normal"
    ],
    "concerns": [
      "pigmentation",
      "texture"
    ],
    "keyIngredients": [
      "rice bran water 68%",
      "alpha arbutin 2%",
      "niacinamide",
      "panthenol"
    ],
    "texture": "serum",
    "size": "30ml",
    "priceGBP": 15.0,
    "tier": "££",
    "retailer": "Boots",
    "buyUrl": "https://boots.com/beauty-of-joseon-glow-deep-serum--riceandalpha-arbutin-30ml-10352393",
    "when": "both",
    "why": "A light brightening serum that slowly fades dark marks left by spots and evens out tone, using arbutin and niacinamide rather than acids. It is gentle enough for most sensitive skin and cheap for what it does.",
    "beginnerNote": "Results take weeks, so be patient, and wear SPF in the day or the marks will keep coming back.",
    "fragranceFree": true,
    "alcoholFree": true,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "gentle",
    "origin": "KR"
  },
  {
    "id": "skin1004-madagascar-centella-ampoule",
    "brand": "Skin1004",
    "name": "Madagascar Centella Ampoule",
    "category": "serum",
    "step": "treat",
    "skinTypes": [
      "oily",
      "dry",
      "combination",
      "sensitive",
      "normal"
    ],
    "concerns": [
      "redness",
      "acne",
      "dehydration"
    ],
    "keyIngredients": [
      "centella asiatica extract",
      "glycerin"
    ],
    "texture": "watery",
    "size": "55ml",
    "priceGBP": 17.02,
    "tier": "££",
    "retailer": "Boots",
    "buyUrl": "https://boots.com/skin1004-madagascar-centella-ampoule-55ml-10352028",
    "when": "both",
    "why": "A watery centella serum with almost nothing else in it, used to calm redness and irritation and to help skin settle after breakouts. A safe first serum for sensitive or reactive skin of any type.",
    "beginnerNote": "Apply after toner; it is light enough to use morning and night and to layer under stronger actives.",
    "fragranceFree": true,
    "alcoholFree": true,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "torriden-dive-in-low-molecular-hyaluronic-acid-serum",
    "brand": "Torriden",
    "name": "Dive-In Low Molecular Hyaluronic Acid Serum",
    "category": "serum",
    "step": "treat",
    "skinTypes": [
      "oily",
      "dry",
      "combination",
      "sensitive",
      "normal"
    ],
    "concerns": [
      "dehydration",
      "dryness",
      "redness"
    ],
    "keyIngredients": [
      "multi-weight hyaluronic acid",
      "panthenol",
      "allantoin",
      "ceramide NP",
      "madecassoside"
    ],
    "texture": "serum",
    "size": "50ml",
    "priceGBP": 19.0,
    "tier": "££",
    "retailer": "Justmylook",
    "buyUrl": "https://www.justmylook.com/products/torriden-dive-in-low-molecular-hyaluronic-acid-serum-50ml",
    "when": "both",
    "why": "A fragrance-free hydrating serum that uses several sizes of hyaluronic acid so skin feels plump rather than just wet on the surface. Suits every skin type, especially dehydrated oily skin that still needs water.",
    "beginnerNote": "Apply to slightly damp skin and seal it in with moisturiser so the hydration does not evaporate.",
    "fragranceFree": true,
    "alcoholFree": true,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "medicube-triple-collagen-serum",
    "brand": "Medicube",
    "name": "Triple Collagen Serum 4.0",
    "category": "serum",
    "step": "treat",
    "skinTypes": [
      "dry",
      "normal",
      "combination",
      "oily"
    ],
    "concerns": [
      "ageing",
      "dehydration"
    ],
    "keyIngredients": [
      "collagen (three forms)",
      "hyaluronic acid",
      "niacinamide",
      "adenosine"
    ],
    "texture": "serum",
    "size": "55ml",
    "priceGBP": 23.0,
    "tier": "££",
    "retailer": "Boots",
    "buyUrl": "https://boots.com/medicube-triple-collagen-serum-55ml-10361905",
    "when": "both",
    "why": "A hydrating serum aimed at skin that is starting to look less bouncy, with collagen, niacinamide and adenosine for a firmer, smoother feel. A reasonable first anti-ageing serum that will not irritate the way retinoids can.",
    "beginnerNote": "It is scented, so skip it if fragrance bothers your skin; otherwise use after toner morning and night.",
    "fragranceFree": false,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": false,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "numbuzin-no-3-skin-softening-serum",
    "brand": "Numbuzin",
    "name": "No.3 Skin Softening Serum",
    "category": "serum",
    "step": "treat",
    "skinTypes": [
      "dry",
      "normal",
      "combination",
      "oily"
    ],
    "concerns": [
      "texture",
      "ageing",
      "dehydration"
    ],
    "keyIngredients": [
      "bifida ferment lysate",
      "galactomyces ferment filtrate",
      "niacinamide",
      "squalane",
      "adenosine"
    ],
    "texture": "serum",
    "size": "50ml",
    "priceGBP": 21.0,
    "tier": "££",
    "retailer": "Cult Beauty",
    "buyUrl": "https://www.cultbeauty.co.uk/p/numbuzin-no.3-skin-softening-serum-50ml/17750368/",
    "when": "both",
    "why": "A fermented serum that smooths rough, flaky patches and makes skin feel softer and more even without any acids. Popular with people whose skin looks dull or bumpy but cannot tolerate exfoliants.",
    "beginnerNote": "Press a thin layer over the whole face after toner; a thicker layer can be used on rough patches.",
    "fragranceFree": null,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "axis-y-dark-spot-correcting-glow-serum",
    "brand": "Axis-Y",
    "name": "Dark Spot Correcting Glow Serum",
    "category": "serum",
    "step": "treat",
    "skinTypes": [
      "oily",
      "dry",
      "combination",
      "sensitive",
      "normal"
    ],
    "concerns": [
      "pigmentation",
      "acne",
      "texture"
    ],
    "keyIngredients": [
      "niacinamide 5%",
      "squalane",
      "glutathione",
      "papaya and rice bran extracts"
    ],
    "texture": "serum",
    "size": "50ml",
    "priceGBP": 19.99,
    "tier": "££",
    "retailer": "Superdrug",
    "buyUrl": "https://www.superdrug.com/skin/face-skin-care/face-serums/axis-y-dark-spot-correcting-glow-serum-50ml/p/856910",
    "when": "both",
    "why": "A creamy niacinamide serum that targets the dark marks spots leave behind and gives a general glow. The niacinamide level is moderate, so it suits beginners and most sensitive skin.",
    "beginnerNote": "Use morning and night after toner; it also works well dabbed only on marks if you prefer.",
    "fragranceFree": null,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "gentle",
    "origin": "KR"
  },
  {
    "id": "anua-niacinamide-10-txa-4-serum",
    "brand": "Anua",
    "name": "Niacinamide 10% + TXA 4% Serum",
    "category": "serum",
    "step": "treat",
    "skinTypes": [
      "oily",
      "combination",
      "normal"
    ],
    "concerns": [
      "pigmentation",
      "oiliness",
      "texture"
    ],
    "keyIngredients": [
      "niacinamide 10%",
      "tranexamic acid 4%",
      "arbutin 2%"
    ],
    "texture": "serum",
    "size": "30ml",
    "priceGBP": 22.0,
    "tier": "££",
    "retailer": "Boots",
    "buyUrl": "https://boots.com/anua-niacinamide-and-txa-serum-30ml-10352044",
    "when": "both",
    "why": "A stronger brightening serum that pairs a high dose of niacinamide with tranexamic acid and arbutin to fade stubborn dark marks and tighten the look of pores. Best for oily or combination skin that tolerates actives well.",
    "beginnerNote": "Ten percent niacinamide can tingle or flush on sensitive skin; start once a day and build up.",
    "fragranceFree": null,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": false,
    "activeStrength": "gentle",
    "origin": "KR"
  },
  {
    "id": "beauty-of-joseon-calming-serum-green-tea-panthenol",
    "brand": "Beauty of Joseon",
    "name": "Calming Serum: Green Tea + Panthenol",
    "category": "serum",
    "step": "treat",
    "skinTypes": [
      "oily",
      "combination",
      "sensitive",
      "normal"
    ],
    "concerns": [
      "redness",
      "acne",
      "oiliness"
    ],
    "keyIngredients": [
      "green tea leaf water",
      "panthenol",
      "centella asiatica",
      "propolis extract"
    ],
    "texture": "serum",
    "size": "30ml",
    "priceGBP": 15.0,
    "tier": "££",
    "retailer": "Lookfantastic",
    "buyUrl": "https://www.lookfantastic.com/p/beauty-of-joseon-calming-serum-green-tea-panthenol-30ml/14866963/",
    "when": "both",
    "why": "A light serum that calms red, oily, breakout-prone skin with green tea and panthenol instead of drying it out. A good everyday serum for teenagers and anyone whose skin is both spotty and easily irritated.",
    "beginnerNote": "Apply after toner; it is light enough to wear under SPF in the morning.",
    "fragranceFree": true,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "the-ordinary-niacinamide-10-zinc-1",
    "brand": "The Ordinary",
    "name": "Niacinamide 10% + Zinc 1%",
    "category": "serum",
    "step": "treat",
    "skinTypes": [
      "oily",
      "combination",
      "normal"
    ],
    "concerns": [
      "oiliness",
      "acne",
      "texture"
    ],
    "keyIngredients": [
      "niacinamide 10%",
      "zinc PCA 1%"
    ],
    "texture": "serum",
    "size": "30ml",
    "priceGBP": 5.0,
    "tier": "£",
    "retailer": "Boots",
    "buyUrl": "https://boots.com/the-ordinary-niacinamide-10-zinc-1-10267783",
    "when": "both",
    "why": "The cheapest widely available serum for oily, spot-prone skin: niacinamide helps with oil, pores and marks, and zinc helps with congestion. It is a sound budget pick if you only buy one serum.",
    "beginnerNote": "It can pill under other products, so use a thin layer and let it dry; if it stings, your skin may prefer a lower-strength niacinamide.",
    "fragranceFree": true,
    "alcoholFree": true,
    "avoidIfPregnant": false,
    "sensitiveSafe": false,
    "activeStrength": "gentle",
    "origin": "UK"
  },
  {
    "id": "the-ordinary-retinal-0-2-emulsion",
    "brand": "The Ordinary",
    "name": "Retinal 0.2% Emulsion",
    "category": "serum",
    "step": "treat",
    "skinTypes": [
      "oily",
      "dry",
      "combination",
      "normal"
    ],
    "concerns": [
      "ageing",
      "texture",
      "acne"
    ],
    "keyIngredients": [
      "retinaldehyde 0.2%",
      "avenanthramide (oat-derived soother)"
    ],
    "texture": "serum",
    "size": "15ml",
    "priceGBP": 15.2,
    "tier": "££",
    "retailer": "Boots",
    "buyUrl": "https://boots.com/the-ordinary-retinal-0-2-emulsion-serum-15ml-10340633",
    "when": "pm",
    "why": "An affordable retinal, a form of vitamin A that works faster than retinol, for fine lines, texture and breakouts. It is effective, so it is best treated as a step up once your basic routine is settled.",
    "beginnerNote": "Night only, a pea-sized amount on dry skin one or two nights a week to start, SPF every morning, and not if you are pregnant or breastfeeding.",
    "fragranceFree": true,
    "alcoholFree": null,
    "avoidIfPregnant": true,
    "sensitiveSafe": false,
    "activeStrength": "strong",
    "origin": "UK"
  },
  {
    "id": "cosrx-the-retinol-0-1-cream",
    "brand": "COSRX",
    "name": "The Retinol 0.1 Cream",
    "category": "serum",
    "step": "treat",
    "skinTypes": [
      "oily",
      "dry",
      "combination",
      "sensitive",
      "normal"
    ],
    "concerns": [
      "ageing",
      "texture",
      "acne"
    ],
    "keyIngredients": [
      "retinol 0.1%",
      "hyaluronic acid",
      "panthenol",
      "shea butter"
    ],
    "texture": "cream",
    "size": "20ml",
    "priceGBP": 29.99,
    "tier": "£££",
    "retailer": "Lookfantastic",
    "buyUrl": "https://www.lookfantastic.com/p/14219147/",
    "when": "pm",
    "why": "A low-dose retinol in a cushioning cream base, which makes it one of the easier ways to start vitamin A for lines, texture and spots. The tube is small and the price is high for the size, but a little goes a long way.",
    "beginnerNote": "Night only, two nights a week to begin, moisturiser on top, SPF every morning, and avoid during pregnancy.",
    "fragranceFree": null,
    "alcoholFree": null,
    "avoidIfPregnant": true,
    "sensitiveSafe": false,
    "activeStrength": "gentle",
    "origin": "KR"
  },
  {
    "id": "beauty-of-joseon-revive-eye-serum-ginseng-retinal",
    "brand": "Beauty of Joseon",
    "name": "Revive Eye Serum: Ginseng + Retinal",
    "category": "eye",
    "step": "extra",
    "skinTypes": [
      "oily",
      "dry",
      "combination",
      "sensitive",
      "normal"
    ],
    "concerns": [
      "ageing",
      "pigmentation"
    ],
    "keyIngredients": [
      "retinal (liposomal)",
      "ginseng root extract",
      "niacinamide",
      "peptides",
      "ceramide NP"
    ],
    "texture": "serum",
    "size": "30ml",
    "priceGBP": 15.0,
    "tier": "££",
    "retailer": "Cult Beauty",
    "buyUrl": "https://www.cultbeauty.co.uk/p/beauty-of-joseon-revive-eye-serum-ginseng-retinal-30ml/14866956/",
    "when": "pm",
    "why": "A light eye serum with a small, encapsulated dose of retinal, so it is a soft way to start on fine lines and dark circles around the eyes. Many people also use it as a gentle first retinoid for the whole face.",
    "beginnerNote": "Night only, a rice-grain amount patted around the orbital bone, and avoid during pregnancy.",
    "fragranceFree": null,
    "alcoholFree": null,
    "avoidIfPregnant": true,
    "sensitiveSafe": false,
    "activeStrength": "gentle",
    "origin": "KR"
  },
  {
    "id": "beauty-of-joseon-dynasty-cream",
    "brand": "Beauty of Joseon",
    "name": "Dynasty Cream",
    "category": "moisturiser",
    "step": "moisturise",
    "skinTypes": [
      "dry",
      "normal",
      "combination"
    ],
    "concerns": [
      "dryness",
      "ageing",
      "dehydration"
    ],
    "keyIngredients": [
      "rice bran water",
      "ginseng root water",
      "squalane",
      "niacinamide",
      "ceramide NP"
    ],
    "texture": "cream",
    "size": "50ml",
    "priceGBP": 21.0,
    "tier": "££",
    "retailer": "Cult Beauty",
    "buyUrl": "https://www.cultbeauty.co.uk/p/beauty-of-joseon-dynasty-cream-50ml/14866965/",
    "when": "both",
    "why": "A nourishing cream that feels rich in the jar but sinks in without greasiness, with squalane and a ceramide for dryness and niacinamide for glow. A good everyday moisturiser for normal to dry skin.",
    "beginnerNote": "Use a pea to a bean-sized amount; oily skin may prefer it as a night cream only.",
    "fragranceFree": null,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "aestura-atobarrier-365-cream",
    "brand": "Aestura",
    "name": "Atobarrier 365 Cream",
    "category": "moisturiser",
    "step": "moisturise",
    "skinTypes": [
      "dry",
      "sensitive",
      "normal"
    ],
    "concerns": [
      "dryness",
      "redness",
      "dehydration"
    ],
    "keyIngredients": [
      "ceramide NP",
      "cholesterol",
      "fatty acids",
      "squalane",
      "niacinamide"
    ],
    "texture": "cream",
    "size": "80ml",
    "priceGBP": 26.0,
    "tier": "£££",
    "retailer": "Sephora UK",
    "buyUrl": "https://www.sephora.co.uk/p/atobarrier365-cream-80ml",
    "when": "both",
    "why": "A barrier-repair cream from a Korean dermatology brand, with ceramides, cholesterol and fatty acids in the ratio the skin barrier likes. Made for dry, eczema-prone or over-exfoliated skin that needs rebuilding rather than just softening.",
    "beginnerNote": "The tiny beads in the cream are ceramide capsules; rub gently until they melt in.",
    "fragranceFree": true,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "laneige-water-bank-blue-hyaluronic-cream",
    "brand": "Laneige",
    "name": "Water Bank Blue Hyaluronic Cream Moisturiser",
    "category": "moisturiser",
    "step": "moisturise",
    "skinTypes": [
      "dry",
      "normal",
      "combination"
    ],
    "concerns": [
      "dehydration",
      "dryness"
    ],
    "keyIngredients": [
      "blue hyaluronic acid",
      "squalane",
      "glycerin"
    ],
    "texture": "cream",
    "size": "50ml",
    "priceGBP": 33.5,
    "tier": "£££",
    "retailer": "Boots",
    "buyUrl": "https://boots.com/laneige-water-bank-blue-hyaluronic-cream-moisturiser-50ml-10348261",
    "when": "both",
    "why": "A rich but bouncy hydrating cream built around small-molecule hyaluronic acid, for skin that feels dry and tight by mid-afternoon. A step up in price and richness from the budget options.",
    "beginnerNote": "Laneige also makes a Gel version of this cream that oily and combination skin usually prefer.",
    "fragranceFree": null,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "illiyoon-ceramide-ato-concentrate-cream",
    "brand": "Illiyoon",
    "name": "Ceramide Ato Concentrate Cream",
    "category": "moisturiser",
    "step": "moisturise",
    "skinTypes": [
      "dry",
      "sensitive",
      "normal"
    ],
    "concerns": [
      "dryness",
      "redness",
      "dehydration"
    ],
    "keyIngredients": [
      "encapsulated ceramide complex",
      "cholesterol",
      "fatty acids",
      "panthenol"
    ],
    "texture": "cream",
    "size": "200ml",
    "priceGBP": 19.99,
    "tier": "££",
    "retailer": "Glam Global (UK); Boots and Amazon UK list the same price",
    "buyUrl": "https://glamglobal.co.uk/products/illiyoon-ceramide-ato-concentrate-cream-200ml",
    "when": "both",
    "why": "A big, fragrance-free ceramide cream that is thick in the tube but absorbs to a soft, non-greasy finish. Excellent value for dry or sensitive skin and gentle enough for children and eczema-prone areas.",
    "beginnerNote": "It is rich, so a small amount is enough; it works for face and body.",
    "fragranceFree": true,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "innisfree-green-tea-hyaluronic-acid-cream",
    "brand": "Innisfree",
    "name": "Green Tea Hyaluronic Acid Cream",
    "category": "moisturiser",
    "step": "moisturise",
    "skinTypes": [
      "oily",
      "combination",
      "normal"
    ],
    "concerns": [
      "dehydration",
      "oiliness"
    ],
    "keyIngredients": [
      "green tea extract",
      "hyaluronic acid (five types)",
      "ceramide NP",
      "panthenol",
      "squalane"
    ],
    "texture": "gel",
    "size": "50ml",
    "priceGBP": 25.0,
    "tier": "££",
    "retailer": "Cult Beauty",
    "buyUrl": "https://www.cultbeauty.co.uk/p/innisfree-green-tea-hyaluronic-acid-cream-50ml/15213890/",
    "when": "both",
    "why": "A light green tea gel-cream that hydrates oily and combination skin without a heavy or shiny finish. A sensible daytime moisturiser under sunscreen if creams usually feel like too much.",
    "beginnerNote": "It has a fresh green tea scent from plant oils, so patch test if essential oils bother you.",
    "fragranceFree": false,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": false,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "purito-wonder-releaf-centella-cream-unscented",
    "brand": "Purito",
    "name": "Wonder Releaf Centella Cream Unscented",
    "category": "moisturiser",
    "step": "moisturise",
    "skinTypes": [
      "oily",
      "dry",
      "combination",
      "sensitive",
      "normal"
    ],
    "concerns": [
      "redness",
      "dryness",
      "dehydration"
    ],
    "keyIngredients": [
      "centella asiatica extract",
      "niacinamide",
      "ceramide NP",
      "squalane",
      "shea butter"
    ],
    "texture": "cream",
    "size": "50ml",
    "priceGBP": 17.2,
    "tier": "££",
    "retailer": "PureSeoul",
    "buyUrl": "https://pureseoul.co.uk/products/wonder-releaf-centella-cream-unscented-50ml",
    "when": "both",
    "why": "A medium-weight centella cream with no fragrance at all that calms redness while keeping skin comfortable. It sits in the middle of the richness scale, so it suits nearly every skin type.",
    "beginnerNote": "Make sure you pick the Unscented version if your skin is reactive; Purito also sells a scented one.",
    "fragranceFree": true,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "dr-jart-cicapair-tiger-grass-repair-cream",
    "brand": "Dr. Jart+",
    "name": "Cicapair Intensive Soothing Tiger Grass Repair Cream",
    "category": "moisturiser",
    "step": "moisturise",
    "skinTypes": [
      "dry",
      "sensitive",
      "normal",
      "combination"
    ],
    "concerns": [
      "redness",
      "dryness"
    ],
    "keyIngredients": [
      "centella asiatica (tiger grass)",
      "niacinamide",
      "peptides",
      "shea butter",
      "allantoin"
    ],
    "texture": "cream",
    "size": "50ml",
    "priceGBP": 40.0,
    "tier": "£££",
    "retailer": "Cult Beauty",
    "buyUrl": "https://www.cultbeauty.co.uk/p/dr.jart-cicapair-intensive-soothing-tiger-grass-repair-cream-50ml/15147267/",
    "when": "both",
    "why": "The best-known Korean redness cream: a silky centella moisturiser that calms irritated, flushed skin and helps it recover. It is expensive, so it makes most sense as a treat for persistent redness rather than a first basic.",
    "beginnerNote": "Lightly scented with lavender; the cheaper Purito or Skin1004 centella options do a similar job if budget matters.",
    "fragranceFree": false,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "cerave-moisturising-cream",
    "brand": "CeraVe",
    "name": "Moisturising Cream",
    "category": "moisturiser",
    "step": "moisturise",
    "skinTypes": [
      "dry",
      "sensitive",
      "normal"
    ],
    "concerns": [
      "dryness",
      "dehydration",
      "redness"
    ],
    "keyIngredients": [
      "ceramides",
      "hyaluronic acid",
      "glycerin",
      "petrolatum"
    ],
    "texture": "cream",
    "size": "454g",
    "priceGBP": 17.0,
    "tier": "££",
    "retailer": "Boots",
    "buyUrl": "https://www.boots.com/cerave-moisturising-cream-pot-454g-10246704",
    "when": "both",
    "why": "A huge tub of fragrance-free ceramide cream from the pharmacy that works for face and body and lasts for months. The most cost-effective option here for dry or sensitive skin that just needs reliable moisture.",
    "beginnerNote": "It is thick, so use a small amount on the face; CeraVe makes a lighter Moisturising Lotion if this feels heavy.",
    "fragranceFree": true,
    "alcoholFree": true,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "US"
  },
  {
    "id": "skin1004-madagascar-centella-poremizing-light-gel-cream",
    "brand": "Skin1004",
    "name": "Madagascar Centella Poremizing Light Gel Cream",
    "category": "moisturiser",
    "step": "moisturise",
    "skinTypes": [
      "oily",
      "combination"
    ],
    "concerns": [
      "oiliness",
      "texture",
      "acne"
    ],
    "keyIngredients": [
      "centella asiatica extract",
      "niacinamide",
      "hyaluronic acid",
      "pink salt",
      "witch hazel"
    ],
    "texture": "gel",
    "size": "75ml",
    "priceGBP": 18.0,
    "tier": "££",
    "retailer": "Superdrug (marketplace seller)",
    "buyUrl": "https://www.superdrug.com/skin/face-skin-care/moisturising-lotions/skin1004-madagascar-centella-poremizing-light-gel-cream-75ml/p/mp-00035294",
    "when": "both",
    "why": "A very light gel moisturiser for oily skin that gives hydration with a matte, non-sticky finish and a bit of pore-refining help. Good under sunscreen if creams make you shiny by lunchtime.",
    "beginnerNote": "Dry or sensitive skin will probably find it too light; pick the Skin1004 Soothing Cream instead.",
    "fragranceFree": null,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "beauty-of-joseon-relief-sun-rice-probiotics-spf50",
    "brand": "Beauty of Joseon",
    "name": "Relief Sun: Rice + Probiotics SPF50+ PA++++",
    "category": "spf",
    "step": "protect",
    "skinTypes": [
      "oily",
      "dry",
      "combination",
      "sensitive",
      "normal"
    ],
    "concerns": [
      "dryness",
      "dehydration",
      "ageing"
    ],
    "keyIngredients": [
      "rice extract",
      "fermented probiotics",
      "niacinamide",
      "modern chemical UV filters"
    ],
    "texture": "cream",
    "size": "50ml",
    "priceGBP": 15.5,
    "tier": "££",
    "retailer": "Cult Beauty",
    "buyUrl": "https://www.cultbeauty.co.uk/p/beauty-of-joseon-relief-sun-rice-probiotics-spf50-50ml/15443553/",
    "when": "am",
    "why": "The sunscreen that converted a lot of people to daily SPF: a light cream with no white cast, no fragrance and no alcohol that feels like a moisturiser. It suits all skin types and layers well under makeup.",
    "beginnerNote": "Use about half a teaspoon for the face and neck as the last step of your morning routine, and reapply if you are outside for long.",
    "fragranceFree": true,
    "alcoholFree": true,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "skin1004-hyalu-cica-water-fit-sun-serum-spf50",
    "brand": "Skin1004",
    "name": "Madagascar Centella Hyalu-Cica Water-Fit Sun Serum SPF50+ PA++++",
    "category": "spf",
    "step": "protect",
    "skinTypes": [
      "oily",
      "dry",
      "combination",
      "sensitive",
      "normal"
    ],
    "concerns": [
      "dehydration",
      "redness"
    ],
    "keyIngredients": [
      "centella asiatica extract",
      "hyaluronic acid",
      "green tea extract",
      "modern chemical UV filters"
    ],
    "texture": "serum",
    "size": "50ml",
    "priceGBP": 18.0,
    "tier": "££",
    "retailer": "Boots",
    "buyUrl": "https://boots.com/skin1004-madagascar-centella-hyalu-cica-water-fit-sun-serum-spf50-and-paand50ml-10352029",
    "when": "am",
    "why": "A watery, serum-like sunscreen with centella that feels like nothing on the skin and leaves a slightly dewy finish with no white cast. A strong choice for sensitive skin that hates the feel of sunscreen.",
    "beginnerNote": "Apply generously as the last morning step; the dewy finish can look shiny on very oily skin, so set with powder if needed.",
    "fragranceFree": true,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "isntree-hyaluronic-acid-watery-sun-gel-spf50",
    "brand": "Isntree",
    "name": "Hyaluronic Acid Watery Sun Gel SPF50+ PA++++",
    "category": "spf",
    "step": "protect",
    "skinTypes": [
      "oily",
      "combination",
      "normal",
      "sensitive"
    ],
    "concerns": [
      "dehydration",
      "oiliness"
    ],
    "keyIngredients": [
      "hyaluronic acid (eight types)",
      "niacinamide",
      "centella asiatica",
      "ceramide NP",
      "chemical UV filters"
    ],
    "texture": "gel",
    "size": "50ml",
    "priceGBP": 22.66,
    "tier": "££",
    "retailer": "Boots",
    "buyUrl": "https://boots.com/isntree-isntree-hyaluronic-acid-watery-sun-gel-spf50and-paand50ml-10352436",
    "when": "am",
    "why": "A light gel sunscreen that hydrates and does not pill, sting or leave a cast, with no fragrance or ethanol. Oily and combination skin in particular tend to get on with it.",
    "beginnerNote": "Let it settle for a minute before makeup; reapply every couple of hours in strong sun.",
    "fragranceFree": true,
    "alcoholFree": true,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "round-lab-birch-juice-moisturizing-sun-cream-spf50",
    "brand": "Round Lab",
    "name": "Birch Juice Moisturizing Sun Cream SPF50+ PA++++",
    "category": "spf",
    "step": "protect",
    "skinTypes": [
      "dry",
      "normal",
      "combination",
      "sensitive"
    ],
    "concerns": [
      "dryness",
      "dehydration"
    ],
    "keyIngredients": [
      "birch sap",
      "hyaluronic acid",
      "niacinamide",
      "vitamin E",
      "chemical UV filters"
    ],
    "texture": "cream",
    "size": "50ml",
    "priceGBP": 21.0,
    "tier": "££",
    "retailer": "Lookfantastic",
    "buyUrl": "https://www.lookfantastic.com/p/round-lab-birch-juice-sun-cream-spf50-50ml/16858531/",
    "when": "am",
    "why": "A hydrating sunscreen with a soft, lightly dewy finish that behaves like a moisturiser on dry or normal skin. No fragrance in the ingredient list, so it is a good pick for sensitive skin that still wants a creamy texture.",
    "beginnerNote": "Dry skin can often skip a separate morning moisturiser underneath this one.",
    "fragranceFree": true,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "la-roche-posay-anthelios-uvmune-400-invisible-fluid-spf50",
    "brand": "La Roche-Posay",
    "name": "Anthelios UVMune 400 Invisible Fluid SPF50+ (non-perfumed)",
    "category": "spf",
    "step": "protect",
    "skinTypes": [
      "oily",
      "dry",
      "combination",
      "sensitive",
      "normal"
    ],
    "concerns": [
      "ageing",
      "pigmentation"
    ],
    "keyIngredients": [
      "Mexoryl 400 (ultra-long UVA filter)",
      "broad-spectrum chemical filters",
      "glycerin"
    ],
    "texture": "lotion",
    "size": "50ml",
    "priceGBP": 21.0,
    "tier": "££",
    "retailer": "Cult Beauty",
    "buyUrl": "https://www.cultbeauty.co.uk/p/la-roche-posay-anthelios-uvmune-400-invisible-fluid-non-perfumed-suncream-spf50-50ml/13494906",
    "when": "am",
    "why": "The pharmacy standard for serious daily sun protection: a runny, invisible fluid with one of the best UVA filters available, and this version has no perfume. It is also widely stocked in Boots, which makes it the easiest high-end sunscreen to pick up in person.",
    "beginnerNote": "Shake before use; it feels slightly wet for a minute and then sets, so give it time before makeup.",
    "fragranceFree": true,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "FR"
  },
  {
    "id": "biore-uv-aqua-rich-watery-essence-spf50",
    "brand": "Bioré",
    "name": "UV Aqua Rich Watery Essence SPF50+ PA++++",
    "category": "spf",
    "step": "protect",
    "skinTypes": [
      "oily",
      "combination",
      "normal"
    ],
    "concerns": [
      "oiliness"
    ],
    "keyIngredients": [
      "hyaluronic acid",
      "chemical UV filters",
      "alcohol (for a fast-drying finish)"
    ],
    "texture": "watery",
    "size": "50ml",
    "priceGBP": 15.99,
    "tier": "££",
    "retailer": "Boots",
    "buyUrl": "https://boots.com/biore-uv-aqua-rich-water-essence-sunscreen-spf-50-50ml-10356353",
    "when": "am",
    "why": "The classic Japanese weightless sunscreen: it spreads like water, dries down in seconds and leaves no cast or shine, which is why oily skin loves it. It does contain alcohol and fragrance, so it is not the one for dry or reactive skin.",
    "beginnerNote": "Apply a generous layer; the thin texture makes it easy to use too little.",
    "fragranceFree": false,
    "alcoholFree": false,
    "avoidIfPregnant": false,
    "sensitiveSafe": false,
    "activeStrength": "none",
    "origin": "JP"
  },
  {
    "id": "purito-wonder-releaf-centella-daily-sun-lotion-spf50",
    "brand": "Purito",
    "name": "Wonder Releaf Centella Daily Sun Lotion SPF50+ PA++++",
    "category": "spf",
    "step": "protect",
    "skinTypes": [
      "sensitive",
      "dry",
      "normal",
      "combination"
    ],
    "concerns": [
      "redness",
      "dryness"
    ],
    "keyIngredients": [
      "centella asiatica extract",
      "madecassoside",
      "mixed mineral and chemical UV filters"
    ],
    "texture": "lotion",
    "size": "60ml",
    "priceGBP": 20.0,
    "tier": "££",
    "retailer": "Lookfantastic",
    "buyUrl": "https://www.lookfantastic.com/p/purito-wonder-releaf-centella-daily-sun-lotion-60ml/13455612/",
    "when": "am",
    "why": "A fragrance-free, centella-based sunscreen designed for skin that reacts to most SPFs, with a soft lotion texture and no white cast. A calm, safe daily option for sensitive or redness-prone skin.",
    "beginnerNote": "This is the renamed Daily Go-To Sunscreen; older reviews under that name refer to the same product.",
    "fragranceFree": true,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "cosrx-acne-pimple-master-patch",
    "brand": "COSRX",
    "name": "Acne Pimple Master Patch",
    "category": "spot-treatment",
    "step": "treat",
    "skinTypes": [
      "oily",
      "dry",
      "combination",
      "sensitive",
      "normal"
    ],
    "concerns": [
      "acne"
    ],
    "keyIngredients": [
      "hydrocolloid"
    ],
    "texture": "patch",
    "size": "24 patches",
    "priceGBP": 5.99,
    "tier": "£",
    "retailer": "Lookfantastic",
    "buyUrl": "https://www.lookfantastic.com/p/11401172/",
    "when": "both",
    "why": "Thin hydrocolloid stickers that you put over a whitehead to absorb fluid, protect it from picking and help it flatten overnight. There is no active ingredient, so they are safe for every skin type and any age.",
    "beginnerNote": "Stick onto clean, dry skin before moisturiser; they only help spots that have come to a head, not deep bumps.",
    "fragranceFree": true,
    "alcoholFree": true,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "laneige-cica-sleeping-mask",
    "brand": "Laneige",
    "name": "Cica Sleeping Mask",
    "category": "mask",
    "step": "extra",
    "skinTypes": [
      "dry",
      "sensitive",
      "normal",
      "combination"
    ],
    "concerns": [
      "redness",
      "dryness",
      "dehydration"
    ],
    "keyIngredients": [
      "centella asiatica (cica)",
      "forest yeast complex",
      "shea butter",
      "squalane",
      "panthenol"
    ],
    "texture": "cream",
    "size": "60ml",
    "priceGBP": 30.0,
    "tier": "£££",
    "retailer": "Boots",
    "buyUrl": "https://boots.com/laneige-cica-sleeping-mask-60ml-10348271",
    "when": "pm",
    "why": "A leave-on overnight mask you use instead of night cream a couple of times a week when skin feels dry, irritated or sunburnt. It calms and cushions, and you wake up with softer skin.",
    "beginnerNote": "Apply a thin layer as the last step at night, two or three nights a week, and rinse in the morning.",
    "fragranceFree": null,
    "alcoholFree": null,
    "avoidIfPregnant": false,
    "sensitiveSafe": true,
    "activeStrength": "none",
    "origin": "KR"
  },
  {
    "id": "innisfree-super-volcanic-pore-clay-mask",
    "brand": "Innisfree",
    "name": "Super Volcanic Pore Clay Mask",
    "category": "mask",
    "step": "extra",
    "skinTypes": [
      "oily",
      "combination"
    ],
    "concerns": [
      "oiliness",
      "texture",
      "acne"
    ],
    "keyIngredients": [
      "Jeju volcanic clusters",
      "bentonite and kaolin clay",
      "lactic acid (AHA)"
    ],
    "texture": "cream",
    "size": "100ml",
    "priceGBP": 21.0,
    "tier": "££",
    "retailer": "Boots",
    "buyUrl": "https://boots.com/innisfree-super-volcanic-pore-clay-mask-100ml-10352958",
    "when": "pm",
    "why": "A wash-off clay mask that pulls excess oil out of pores and leaves oily skin looking smoother and less shiny for a few days. Fragrance-free and alcohol-free, so it is less harsh than many clay masks.",
    "beginnerNote": "Once a week on clean skin for about ten minutes, rinse before it fully cracks, then moisturise.",
    "fragranceFree": true,
    "alcoholFree": true,
    "avoidIfPregnant": false,
    "sensitiveSafe": false,
    "activeStrength": "gentle",
    "origin": "KR"
  }
]

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}
