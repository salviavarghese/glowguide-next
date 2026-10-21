import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { site } from "@/lib/site"

const youngSerif = localFont({
  src: "./fonts/young-serif-latin-400-normal.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-young-serif",
  display: "swap",
})

const karla = localFont({
  src: [
    { path: "./fonts/karla-latin-wght-normal.woff2", weight: "200 800", style: "normal" },
    { path: "./fonts/karla-latin-wght-italic.woff2", weight: "200 800", style: "italic" },
  ],
  variable: "--font-karla",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "GlowGuide: skincare for beginners, built around your skin",
    template: "%s, GlowGuide",
  },
  description: site.description,
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_GB",
  },
}

export const viewport: Viewport = {
  themeColor: "#f3f2ee",
  colorScheme: "light",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${youngSerif.variable} ${karla.variable}`}>
      <body>
        <a className="sr-only" href="#main">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
