import type { SkinType } from "./products"

export const SKIN_TYPES: SkinType[] = ["oily", "dry", "combination", "sensitive", "normal"]

export const TYPE_PAGE: Record<SkinType, { tell: string; look: string; avoid: string }> = {
  oily: {
    tell: "Shine across the whole face within a couple of hours of washing. Pores look bigger on the nose and cheeks. Makeup slides. Blotting paper comes away with oil from every zone.",
    look: "Gel or foam cleansers that leave skin clean but not squeaky. Toners with green tea or niacinamide to steady oil. Light, watery moisturisers, because oily skin still needs water. Sunscreens labelled gel, watery or matte.",
    avoid: "Harsh scrubs and alcohol-heavy toners. They strip the oil, your skin panics and makes more.",
  },
  dry: {
    tell: "Tight the moment you step out of the shower. Flaky patches around the nose and mouth, especially in winter. Fine lines look deeper when the skin is dehydrated. Blotting paper comes away clean.",
    look: "Cream or milk cleansers, and cleansing balms at night. Toners with hyaluronic acid or glycerin, layered. Rich moisturisers with ceramides. Cream sunscreens.",
    avoid: "Foaming cleansers that squeak, hot water, and more than one exfoliant a week.",
  },
  combination: {
    tell: "Shine on the forehead and nose by lunchtime while the cheeks feel fine or even tight. Breakouts mostly in the T-zone. Blotting paper picks up oil from the nose but not the cheeks.",
    look: "Low-pH gel cleansers that respect the cheeks. Balancing toners. Lotion-weight moisturisers, with a richer cream on the cheeks in winter if they need it. Light sunscreens.",
    avoid: "Treating the whole face like the T-zone. Oil-control everything leaves the cheeks dry and flaky.",
  },
  sensitive: {
    tell: "Stinging, burning or itching when you put something new on. Redness after washing or in the wind. Reacting to fragrance. You might also have eczema or rosacea, which a GP can confirm.",
    look: "Fragrance-free everything. Cleansers with a skin-friendly pH. Toners and serums with centella, panthenol or mugwort. Moisturisers with ceramides to repair the barrier. Mineral or hybrid sunscreens that do not sting.",
    avoid: "Acids, scrubs, essential oils and fragrance. One new product at a time, patch tested first.",
  },
  normal: {
    tell: "Comfortable most of the day. The odd spot, the odd dry patch, nothing that sticks around. Pores visible but small.",
    look: "Whatever you enjoy using, within the five steps. A gentle cleanser, a hydrating toner, a serum for whatever bothers you most, a lotion or light cream, and a sunscreen you will actually wear every day.",
    avoid: "Fixing what is not broken. Skin that behaves does not need ten steps or strong actives to stay that way.",
  },
}

export function isSkinType(s: string): s is SkinType {
  return (SKIN_TYPES as string[]).includes(s)
}
