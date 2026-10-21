import type { MetadataRoute } from "next"
import { articles } from "@/lib/articles"
import { site } from "@/lib/site"
import { SKIN_TYPES } from "@/lib/skin-types"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const fixed = ["", "/quiz", "/skin-types", "/learn", "/about", "/privacy"].map((p) => ({ url: `${site.url}${p}`, lastModified: now }))
  const types = SKIN_TYPES.map((t) => ({ url: `${site.url}/skin-types/${t}`, lastModified: now }))
  const guides = articles.map((a) => ({ url: `${site.url}/learn/${a.slug}`, lastModified: now }))
  return [...fixed, ...types, ...guides]
}
