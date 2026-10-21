import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const alt = "GlowGuide: skincare for beginners, built around your skin"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  const youngSerif = await readFile(join(process.cwd(), "assets/young-serif-latin-400-normal.woff"))
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f3f2ee",
          color: "#14343b",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          fontFamily: "Young Serif",
        }}
      >
        <div style={{ fontSize: 40, display: "flex" }}>GlowGuide</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 88, lineHeight: 1.02, letterSpacing: -1.5, display: "flex", maxWidth: 900 }}>Start with your skin, not the shelf.</div>
          <div style={{ fontSize: 30, color: "#4c5f64", display: "flex", fontFamily: "sans-serif", maxWidth: 820 }}>
            A two-minute quiz, a five-step Korean skincare routine, UK prices. For complete beginners.
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 28, height: 28, borderRadius: 28, background: "#e2b254", display: "flex" }} />
          <div style={{ fontSize: 24, color: "#4c5f64", display: "flex", fontFamily: "sans-serif" }}>glowguide-next-blue.vercel.app</div>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Young Serif", data: youngSerif, style: "normal", weight: 400 }] },
  )
}
