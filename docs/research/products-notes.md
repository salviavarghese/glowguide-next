# GlowGuide product database: sources and caveats

Compiled 19 October 2026. Every product was checked by web search plus a fetch of a live UK retailer product page (or, where noted, a UK-facing aggregator). Prices are the GBP price shown on the page that day; where the page showed a temporary promotion I recorded the regular/RRP price in `priceGBP` and note the promo price here. Prices move constantly, so treat them as approximate and re-check before launch.

## Conventions used in products.json

- `priceGBP` = regular price on the retailer page (not the flash-sale price), October 2026. Tier: `£` under 12, `££` 12 to 25 inclusive, `£££` over 25.
- `fragranceFree` = true only when the retailer/brand states fragrance-free AND/OR the ingredient list I saw has no parfum and no essential oils; false if parfum or essential oils are present; null when I could not verify a full ingredient list. Same rule for `alcoholFree` (alcohol denat / ethanol; fatty alcohols do not count).
- `sensitiveSafe` = false for acids, retinoids, 10% niacinamide, high-foaming cleansers and anything with essential oils or notable fragrance.
- `avoidIfPregnant` = true for all retinoids and for leave-on acids above the very low Korean toner strengths (The Ordinary Glycolic 7%, COSRX BHA 4%). The very low-strength acid toners (COSRX AHA/BHA, Some By Mi, Beauty of Joseon Green Plum) are left false; the site should still show a general caution for pregnancy.
- Exfoliating toners are filed under `category: exfoliant`, `step: treat`, so that `toner` means a plain hydrating toner.
- `origin` for The Ordinary is coded `UK` because the schema has no `CA`. DECIEM is a Canadian brand (owned by Estée Lauder); it is in this list purely as a UK high-street basic. Add `CA` to the enum if you want this to be accurate.

## Coverage counts (56 products)

By category: serum 11, moisturiser 9, spf 7, cleanser 6, toner 6, exfoliant 5, cleansing-oil 4 (2 balms), essence 4, mask 2, eye 1, spot-treatment 1.

By skin type (products tagged, any category): combination 52, normal 52, oily 40, dry 38, sensitive 32.

Per skin type, minimum 2 in each of cleanser / toner / serum-or-essence / moisturiser / spf: met for all five (lowest cell is oily moisturisers = 3 and oily toners = 3).

Concerns with at least 3 `step: treat` products: acne 12, texture 14, oiliness 8, dehydration 7, ageing 5, redness 5, dryness 4, pigmentation 4.

Tiers: £ 4, ££ 44, £££ 8. Pharmacy basics (non-Korean): CeraVe Hydrating Cleanser, CeraVe Moisturising Cream, La Roche-Posay Anthelios UVMune 400, The Ordinary Niacinamide 10% + Zinc 1%, The Ordinary Glycolic Acid 7%, The Ordinary Retinal 0.2% (6). Cetaphil Gentle Skin Cleanser was verified (Lookfantastic, £11.50, fragrance-free) but left out to stay within the 4 to 6 cap; add it back if wanted: https://www.lookfantastic.com/p/cetaphil-gentle-skin-cleanser-wash-236ml/13908195/

Strong actives (`activeStrength: strong`): The Ordinary Glycolic 7%, COSRX BHA Blackhead Power Liquid, The Ordinary Retinal 0.2%. Retinoids (`avoidIfPregnant`): The Ordinary Retinal 0.2%, COSRX The Retinol 0.1 Cream, Beauty of Joseon Revive Eye Serum. Gentle exfoliants/spot: COSRX AHA/BHA toner, Some By Mi Miracle Toner, Beauty of Joseon Green Plum toner, COSRX pimple patch.

SPF: 7 total; fragrance-free/sensitive-friendly: Beauty of Joseon Relief Sun, Skin1004 Hyalu-Cica Sun Serum, Isntree Watery Sun Gel, Round Lab Birch Juice, La Roche-Posay UVMune 400 (non-perfumed), Purito Daily Sun Lotion. UK pharmacy option: La Roche-Posay.

## Must-include items: substitutions and renames

- **The Face Shop Rice Water Bright Foaming Cleanser**: exists and is sold, but UK availability is thin. Not on Boots, Superdrug, Cult Beauty or Lookfantastic. Only UK-facing page that rendered was Stylevana (GB site) whose page metadata showed £3.00, which looks like a clearance price; glamglobal.co.uk lists the 300ml but its price did not load. Included with the Stylevana URL and the £3.00 price flagged as uncertain. If you want a safer entry, swap in Round Lab 1025 Dokdo Cleanser (already included, Boots £15).
- **Dr. Jart+ Cicapair Tiger Grass Serum or Cream**: the line was relaunched; the cream is now sold as Cicapair Intensive Soothing Tiger Grass Repair Cream (Cult Beauty £40) and the serum as Cicapair Intensive Soothing Repair Serum (£42). Included the cream.
- **Medicube Deep Vita C / peptide serum**: Boots UK currently stocks Medicube Triple Collagen Serum 4.0 (£23) and Collagen Glow Booster Serum; Deep Vita C was not found at a UK retailer. Included Triple Collagen Serum 4.0.
- **Innisfree Green Tea Seed Hyaluronic Cream**: out of stock at Cult Beauty and Beauty Bay under that name; Cult Beauty sells the current version as Green Tea Hyaluronic Acid Cream (£25, in stock) and its description still calls it the Green Tea Seed Hyaluronic Cream. Included under the new name.
- **Purito Wonder Releaf Centella Cream**: included the Unscented version (PureSeoul). The Purito sunscreen was added as a bonus: Daily Go-To Sunscreen is now sold as Wonder Releaf Centella Daily Sun Lotion.
- **Laneige Cream Skin Toner**: current Boots stock is the Cerapeptide formula (170ml, £29.50); named accordingly.
- **COSRX Acne Pimple Master Patch**: COSRX now also labels it Master Patch Original Fit; Lookfantastic still lists the old name.
- **Anua Heartleaf 77% Soothing Toner**: Boots still sells it under this name; SkinSort also lists a Heartleaf 77 + Hyaluron Soothing Toner, which may be a newer edition. Fragrance-free/alcohol-free flags were read from the SkinSort entry.
- **Aestura Atobarrier 365 Cream**: sold at Sephora UK (80ml £26, 45ml £17), but the page showed both in stock and temporarily out of stock; cosmetis.com was out of stock. Re-check before launch.
- **I'm From Mugwort Essence**: PureSeoul £38 (no sold-out flag); Beauty Bay £37 but out of stock. The Mugwort Mask is also available at PureSeoul for £33.50 (https://pureseoul.co.uk/products/im-from-mugwort-mask) if you want it as a second option.
- **Beauty of Joseon Ginseng Essence Water**: Superdrug page is no longer available online; Boots page did not render a price; John Lewis £17 used.
- **Round Lab Birch Juice Moisturizing Sun Cream**: Boots page failed to load; Lookfantastic £21 used (Sephora UK had it at £15 on a 40% promotion but with conflicting stock status).
- **Heimish All Clean Balm**: Justmylook lists it as All Clean Intensive Cleansing Balm (same product, newer packaging). RRP £18, on sale at £12.26; PureSeoul had a clearance price of £4.14 which I ignored.
- **Tirtir Milk Skin Toner** (optional) and **Bioré UV Aqua Rich Watery Essence** (optional) both verified and included.
- Everything else on the must-include list was found and included under its current name.

## Price caveats

- COSRX prices at Cult Beauty / Lookfantastic are noticeably higher than at Boots or John Lewis (e.g. BHA Blackhead Power Liquid £29.99 at Lookfantastic vs £25 at John Lewis; Oil-Free Ultra-Moisturizing Lotion £30.99 at Cult Beauty, which is why it was left out). COSRX The Retinol 0.1 Cream is £29.99 at Lookfantastic (in stock) and sold out at Escentual (£30).
- Etude SoonJung Whip Cleanser: the Superdrug marketplace page showed £19.99, but cosmetify lists the same seller (Melon + Starfish) at £16 and Glambeauty at £14.45 (RRP £16.95). Recorded £16.
- Illiyoon Ceramide Ato Concentrate Cream: trolley.co.uk shows Boots and Amazon UK at £19.99, but I could not find a direct Boots product URL; the buyUrl is the Glam Global (UK) product page, whose own price did not render.
- Haruharu Wonder and Round Lab 1025 Dokdo Toner pages on Superdrug are marketplace listings that show a no-longer-available banner alongside an add-to-basket button; the Dokdo toner was therefore sourced from Lookfantastic instead. Skin1004 Poremizing Light Gel Cream has the same marketplace ambiguity.
- Promotional prices seen on the day (not used in priceGBP): Anua cleansing oil £14.40, Anua toner £17.10, COSRX Snail essence £17.49, Skin1004 Centella Ampoule £13.62, Skin1004 Sun Serum £16.20, Isntree toner £14.78, Isntree sun gel £18.13, Laneige Water Bank cream £26.80, CeraVe Moisturising Cream £13.60, The Ordinary Niacinamide £4.25, Round Lab Dokdo Cleanser £12.00, Bioré £10.66, Anua Niacinamide serum £19.80, Some By Mi £11.50, Banila Co £13.90, Torriden £17.67, Beauty of Joseon Calming Serum £12.00, Axis-Y £17.99.
- Skin1004 Madagascar Centella Ampoule: Boots sells the 55ml (£17.02); the 100ml size was not found at a UK retailer.

## Sources (one per product; price source = buyUrl unless stated)

| id | Source URL (retailer, price seen) |
|---|---|
| anua-heartleaf-pore-control-cleansing-oil | https://boots.com/anua-heartleaf-pore-control-cleansing-oil-200ml-10352040 (Boots, £16.00 RRP / £14.40 promo). Fragrance flag: https://skinsort.com/products/anua/heartleaf-pore-control-cleansing-oil |
| heimish-all-clean-balm | https://www.justmylook.com/products/heimish-all-clean-intensive-cleansing-balm-120ml (Justmylook, RRP £18.00 / £12.26 promo) |
| banila-co-clean-it-zero-cleansing-balm-original | https://www.justmylook.com/products/banila-co-clean-it-zero-original-cleansing-balm-100ml (Justmylook, RRP £22.00 / £13.90 promo) |
| beauty-of-joseon-ginseng-cleansing-oil | https://www.cultbeauty.co.uk/p/beauty-of-joseon-ginseng-cleansing-oil-210ml/14866959/ (Cult Beauty, £17.00) |
| anua-heartleaf-quercetinol-pore-deep-cleansing-foam | https://boots.com/anua-heartleaf-quercetinol-pore-deep-cleansing-foam-150ml-10352043 (Boots, £13.00); ingredients from https://www.boots.ie/anua-heartleaf-quercetinol-pore-deep-cleansing-foam-150ml-10352043 |
| cosrx-low-ph-good-morning-gel-cleanser | https://boots.com/cosrx-low-ph-good-morning-gel-cleanser-150ml-10280730 (Boots, £14.70) |
| etude-soonjung-ph-6-5-whip-cleanser | https://www.superdrug.com/skin/face-skin-care/cleansers/cleansing-mousse-foams/etude-house-soonjung-ph-65-whip-cleanser-150ml/p/mp-00045507 (Superdrug marketplace, £19.99 shown); price £16 from https://www.cosmetify.com/etude-house-soonjung-ph-65-whip-cleanser/ ; fragrance-free from https://pureseoul.co.uk/collections/cleansers/products/soonjung-ph-6-5-whip-cleanser150ml |
| the-face-shop-rice-water-bright-foaming-cleanser | https://www.stylevana.com/en_GB/the-face-shop-rice-water-bright-foaming-cleanser.html (Stylevana GB, £3.00 in page metadata, uncertain) |
| cerave-hydrating-cleanser | https://boots.com/cerave-hydrating-cleanser-236ml-10246701 (Boots, £12.50) |
| round-lab-1025-dokdo-cleanser | https://boots.com/round-lab-1025-dokdo-cleanser-150ml-10352047 (Boots, £15.00 RRP / £12.00 promo) |
| anua-heartleaf-77-soothing-toner | https://boots.com/anua-heartleaf-soothing-toner-250ml-10352039 (Boots, £19.00 RRP / £17.10 promo); flags from https://skinsort.com/products/anua/heartleaf-77-hyaluron-soothing-toner |
| isntree-green-tea-fresh-toner | https://boots.com/isntree-green-tea-fresh-toner-200ml-10352440 (Boots, £18.48 RRP / £14.78 promo) |
| round-lab-1025-dokdo-toner | https://www.lookfantastic.com/p/round-lab-1025-dokdo-toner-200ml/16858529/ (Lookfantastic, £17.00) |
| haruharu-wonder-black-rice-hyaluronic-toner | https://www.superdrug.com/skin/face-skin-care/cleansers/face-toner/haruharu-wonder-black-rice-hyaluronic-toner-150ml/p/mp-00045349 (Superdrug marketplace, £16.95 RRP / £13.56 promo) |
| tirtir-milk-skin-toner | https://www.lookfantastic.com/p/tirtir-milk-skin-toner-150ml/17074478/ (Lookfantastic, £25.00); flags from https://skinsort.com/compare/laneige-cream-skin-cerapeptide-toner-moisturizer-vs-tirtir-milk-skin-toner |
| laneige-cream-skin-toner-moisturiser | https://boots.com/laneige-cream-skin-toner-and-moisturiser-170ml-10356939 (Boots, £29.50); flags from the SkinSort compare page above |
| cosrx-aha-bha-clarifying-treatment-toner | https://www.cultbeauty.co.uk/p/cosrx-aha-bha-clarifying-treatment-toner-150ml/11401176/ (Cult Beauty, £21.99) |
| some-by-mi-aha-bha-pha-30-days-miracle-toner | https://www.justmylook.com/products/some-by-mi-30-days-aha-bha-pha-miracle-toner-150ml (Justmylook, RRP £17.50 / £11.50 promo) |
| beauty-of-joseon-green-plum-refreshing-toner | https://www.cultbeauty.co.uk/p/beauty-of-joseon-green-plum-refreshing-aha-bha-toner-150ml/15391675/ (Cult Beauty, £15.50) |
| the-ordinary-glycolic-acid-7-exfoliating-toner | https://boots.com/the-ordinary-glycolic-acid-toning-solution-240ml-10279240 (Boots, £11.50) |
| cosrx-bha-blackhead-power-liquid | https://www.johnlewis.com/cosrx-bha-blackhead-power-liquid-100ml/p115393663 (John Lewis, £25.00); ingredients from https://www.lookfantastic.com/p/11401180/ (£29.99 there) |
| cosrx-advanced-snail-96-mucin-power-essence | https://boots.com/cosrx-advanced-snail-96-mucin-power-essence-gel-100ml-10280721 (Boots, £24.99 RRP / £17.49 promo); free-from flags from https://pureseoul.co.uk/products/cosrx-advanced-snail-96-mucin-power-essence (£23.90) |
| beauty-of-joseon-ginseng-essence-water | https://www.johnlewis.com/beauty-of-joseon-ginseng-essence-water-150ml/p115316818 (John Lewis, £17.00); ingredients from https://superdrug.com/skin/face-skin-care/cleansers/face-toner/beauty-of-joseon-ginseng-essence-water-150ml/p/843962 (no longer available online) |
| mixsoon-bean-essence | https://boots.com/mixsoon-bean-essence-50ml-10352034 (Boots, £28.00) |
| im-from-mugwort-essence | https://pureseoul.co.uk/products/mugwort-essence-160ml (PureSeoul, £38.00); Beauty Bay £37 out of stock: https://www.beautybay.com/p/im-from/mugwort-esssence/160/ |
| beauty-of-joseon-glow-deep-serum-rice-alpha-arbutin | https://boots.com/beauty-of-joseon-glow-deep-serum--riceandalpha-arbutin-30ml-10352393 (Boots, £15.00); flags from https://skinsort.com/products/beauty-of-joseon/glow-deep-serum-rice-arbutin (SkinSort flags rice bran water as perfuming, which I did not count as fragrance) |
| skin1004-madagascar-centella-ampoule | https://boots.com/skin1004-madagascar-centella-ampoule-55ml-10352028 (Boots, £17.02 RRP / £13.62 promo) |
| torriden-dive-in-low-molecular-hyaluronic-acid-serum | https://www.justmylook.com/products/torriden-dive-in-low-molecular-hyaluronic-acid-serum-50ml (Justmylook, RRP £19.00 / £17.67 promo); flags from https://skinsort.com/products/torriden/dive-in-low-molecular-hyaluronic-acid-serum |
| medicube-triple-collagen-serum | https://boots.com/medicube-triple-collagen-serum-55ml-10361905 (Boots, £23.00) |
| numbuzin-no-3-skin-softening-serum | https://www.cultbeauty.co.uk/p/numbuzin-no.3-skin-softening-serum-50ml/17750368/ (Cult Beauty, £21.00) |
| axis-y-dark-spot-correcting-glow-serum | https://www.superdrug.com/skin/face-skin-care/face-serums/axis-y-dark-spot-correcting-glow-serum-50ml/p/856910 (Superdrug, £19.99 RRP / £17.99 promo) |
| anua-niacinamide-10-txa-4-serum | https://boots.com/anua-niacinamide-and-txa-serum-30ml-10352044 (Boots, £22.00 RRP / £19.80 promo) |
| beauty-of-joseon-calming-serum-green-tea-panthenol | https://www.lookfantastic.com/p/beauty-of-joseon-calming-serum-green-tea-panthenol-30ml/14866963/ (Lookfantastic, RRP £15.00 / £12.00 promo) |
| the-ordinary-niacinamide-10-zinc-1 | https://boots.com/the-ordinary-niacinamide-10-zinc-1-10267783 (Boots, £5.00 RRP / £4.25 promo) |
| the-ordinary-retinal-0-2-emulsion | https://boots.com/the-ordinary-retinal-0-2-emulsion-serum-15ml-10340633 (Boots, £15.20) |
| cosrx-the-retinol-0-1-cream | https://www.lookfantastic.com/p/14219147/ (Lookfantastic, £29.99); Escentual £30 sold out: https://www.escentual.com/cosrx/cosrx065/ |
| beauty-of-joseon-revive-eye-serum-ginseng-retinal | https://www.cultbeauty.co.uk/p/beauty-of-joseon-revive-eye-serum-ginseng-retinal-30ml/14866956/ (Cult Beauty, £15.00) |
| beauty-of-joseon-dynasty-cream | https://www.cultbeauty.co.uk/p/beauty-of-joseon-dynasty-cream-50ml/14866965/ (Cult Beauty, £21.00) |
| aestura-atobarrier-365-cream | https://www.sephora.co.uk/p/atobarrier365-cream-80ml (Sephora UK, £26.00 for 80ml; stock status conflicting) |
| laneige-water-bank-blue-hyaluronic-cream | https://boots.com/laneige-water-bank-blue-hyaluronic-cream-moisturiser-50ml-10348261 (Boots, £33.50 RRP / £26.80 promo) |
| illiyoon-ceramide-ato-concentrate-cream | https://glamglobal.co.uk/products/illiyoon-ceramide-ato-concentrate-cream-200ml (Glam Global UK, price not rendered); price £19.99 from Boots/Amazon listings on https://www.trolley.co.uk/product/illiyoon-ceramide-ato-concentrate-cream/BLV722 ; fragrance-free per https://www.geekyposh.com/illiyoon-ceramide-ato-concentrate-cream-review/ |
| innisfree-green-tea-hyaluronic-acid-cream | https://www.cultbeauty.co.uk/p/innisfree-green-tea-hyaluronic-acid-cream-50ml/15213890/ (Cult Beauty, £25.00); old name out of stock at https://www.cultbeauty.co.uk/p/innisfree-green-tea-seed-hyaluronic-cream-50ml/15228000/ |
| purito-wonder-releaf-centella-cream-unscented | https://pureseoul.co.uk/products/wonder-releaf-centella-cream-unscented-50ml (PureSeoul, £17.20) |
| dr-jart-cicapair-tiger-grass-repair-cream | https://www.cultbeauty.co.uk/p/dr.jart-cicapair-intensive-soothing-tiger-grass-repair-cream-50ml/15147267/ (Cult Beauty, £40.00); range list at https://cultbeauty.co.uk/c/brands/dr-jart/cicapair |
| cerave-moisturising-cream | https://www.boots.com/cerave-moisturising-cream-pot-454g-10246704 (Boots, £17.00 RRP / £13.60 promo) |
| skin1004-madagascar-centella-poremizing-light-gel-cream | https://www.superdrug.com/skin/face-skin-care/moisturising-lotions/skin1004-madagascar-centella-poremizing-light-gel-cream-75ml/p/mp-00035294 (Superdrug marketplace, £18.00 RRP / £14.15 promo) |
| beauty-of-joseon-relief-sun-rice-probiotics-spf50 | https://www.cultbeauty.co.uk/p/beauty-of-joseon-relief-sun-rice-probiotics-spf50-50ml/15443553/ (Cult Beauty, £15.50); full ingredient list (no parfum, no alcohol denat) from https://www.beautybay.com/p/beauty-of-joseon/relief-sun-rice-probiotics/ |
| skin1004-hyalu-cica-water-fit-sun-serum-spf50 | https://boots.com/skin1004-madagascar-centella-hyalu-cica-water-fit-sun-serum-spf50-and-paand50ml-10352029 (Boots, £18.00 RRP / £16.20 promo) |
| isntree-hyaluronic-acid-watery-sun-gel-spf50 | https://boots.com/isntree-isntree-hyaluronic-acid-watery-sun-gel-spf50and-paand50ml-10352436 (Boots, £22.66 RRP / £18.13 promo); ingredient list and free-from flags from https://pureseoul.co.uk/products/hyaluronic-acid-water-sun-gel (£21.80) |
| round-lab-birch-juice-moisturizing-sun-cream-spf50 | https://www.lookfantastic.com/p/round-lab-birch-juice-sun-cream-spf50-50ml/16858531/ (Lookfantastic, £21.00); ingredients also checked at https://www.sephora.co.uk/p/round-lab-birch-juice-moisturizing-sun-cream-spf50-pa-50ml |
| la-roche-posay-anthelios-uvmune-400-invisible-fluid-spf50 | https://www.cultbeauty.co.uk/p/la-roche-posay-anthelios-uvmune-400-invisible-fluid-non-perfumed-suncream-spf50-50ml/13494906 (Cult Beauty, £21.00); Boots UK page exists but did not render a price: https://boots.com/la-roche-posay-anthelios-uvmune-400-invisible-fluid-spf50-50ml-10306562 |
| biore-uv-aqua-rich-watery-essence-spf50 | https://boots.com/biore-uv-aqua-rich-water-essence-sunscreen-spf-50-50ml-10356353 (Boots, £15.99 RRP / £10.66 promo) |
| purito-wonder-releaf-centella-daily-sun-lotion-spf50 | https://www.lookfantastic.com/p/purito-wonder-releaf-centella-daily-sun-lotion-60ml/13455612/ (Lookfantastic, £20.00) |
| cosrx-acne-pimple-master-patch | https://www.lookfantastic.com/p/11401172/ (Lookfantastic, £5.99) |
| laneige-cica-sleeping-mask | https://boots.com/laneige-cica-sleeping-mask-60ml-10348271 (Boots, £30.00) |
| innisfree-super-volcanic-pore-clay-mask | https://boots.com/innisfree-super-volcanic-pore-clay-mask-100ml-10352958 (Boots, £21.00) |

## Verified but not included

- Cetaphil Gentle Skin Cleanser 236ml: Lookfantastic £11.50 (see above).
- COSRX Oil-Free Ultra-Moisturizing Lotion 100ml: Cult Beauty £30.99 (too expensive for its tier role).
- I'm From Mugwort Mask 110g: PureSeoul £33.50.
- Beauty of Joseon Relief Sun at Sephora UK: £12.80 on promotion, stock conflicting.
