import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowIcon } from "@/components/icons"
import { Notice } from "@/components/notice"
import { articles, getArticle } from "@/lib/articles"

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const a = getArticle(slug)
  if (!a) return {}
  return { title: a.title, description: a.summary }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const a = getArticle(slug)
  if (!a) notFound()
  const others = articles.filter((x) => x.slug !== a.slug).slice(0, 3)

  return (
    <>
      <section className="wrap page-head">
        <div className="article">
          <p className="caption">
            <Link href="/learn" style={{ textDecoration: "none" }}>
              Learn
            </Link>{" "}
            <span style={{ marginLeft: 12 }}>{a.minutes} minute read</span>
          </p>
          <h1 style={{ marginTop: 12 }}>{a.title}</h1>
          <p className="lede">{a.lede}</p>
          {a.short.length > 0 && (
            <div className="summary-box">
              <h2>In short</h2>
              <ul>
                {a.short.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
      <section className="wrap section--tight" style={{ paddingTop: 0 }}>
        <div className="article">
          {/* Guide bodies are first-party HTML written for this site (src/lib/articles.ts), not user input. */}
          <div dangerouslySetInnerHTML={{ __html: a.body }} />
          <div style={{ marginTop: 48 }}>
            <Notice title="Not medical advice">
              This is general information for healthy skin. If something is painful, spreading, bleeding or not settling, or you have a diagnosed skin condition, see a pharmacist, GP or dermatologist.
            </Notice>
          </div>
          <div className="sources">
            <h2>Sources</h2>
            <ol>
              {a.sources.map((u) => (
                <li key={u}>
                  <a href={u} rel="noopener" target="_blank">
                    {u}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="wrap section--tight">
        <div className="section-head">
          <h2>Keep reading</h2>
        </div>
        <ul className="index-list">
          {others.map((x) => (
            <li key={x.slug}>
              <Link href={`/learn/${x.slug}`}>
                <h3>{x.title}</h3>
                <p>{x.summary}</p>
                <ArrowIcon />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
