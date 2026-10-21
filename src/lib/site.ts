// Site-wide settings. Change these in one place.

export const site = {
  name: "GlowGuide",
  tagline: "Skincare advice from the friend who actually reads the ingredients.",
  description:
    "Take a two-minute skin quiz and get a five-step Korean skincare routine with UK-available products that suit your skin type. Written for complete beginners.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://glowguide-next-blue.vercel.app",
  /** Contact address shown on About and Privacy. Leave empty until you have one; the sections hide themselves. */
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  /** Switch to true only once real affiliate links exist, so cards show the "Ad" label UK rules require. */
  affiliate: false,
  pricesChecked: "October 2026",
}
