"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { AlertIcon, BackIcon } from "@/components/icons"
import { encodeAnswers, questions, saveAnswers, type Answers } from "@/lib/quiz"

type Draft = { q1?: string; q2: string[]; q3?: string; q4: string[]; q5?: string; q6: string[] }

const empty: Draft = { q2: [], q4: [], q6: [] }

export function Quiz() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [draft, setDraft] = useState<Draft>(empty)
  const [error, setError] = useState(false)
  const headingRef = useRef<HTMLHeadingElement>(null)

  const q = questions[step]
  const total = questions.length

  useEffect(() => {
    headingRef.current?.focus()
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [step])

  const picked = (key: typeof q.key): string[] => {
    const v = draft[key]
    return Array.isArray(v) ? v : v ? [v] : []
  }

  const choose = (value: string) => {
    setError(false)
    if (q.type === "single") {
      setDraft({ ...draft, [q.key]: value })
      return
    }
    const key = q.key as "q2" | "q4" | "q6"
    const current = draft[key]
    const isNone = value === "none"
    if (isNone) {
      setDraft({ ...draft, [key]: current.includes("none") ? [] : ["none"] })
      return
    }
    const without = current.filter((v) => v !== "none")
    if (without.includes(value)) {
      setDraft({ ...draft, [key]: without.filter((v) => v !== value) })
      return
    }
    if (q.max && without.length >= q.max) return
    setDraft({ ...draft, [key]: [...without, value] })
  }

  const next = () => {
    const required = !("required" in q && q.required === false)
    if (required && picked(q.key).length === 0) {
      setError(true)
      return
    }
    if (step < total - 1) {
      setStep(step + 1)
      return
    }
    const answers: Answers = {
      q1: draft.q1 as Answers["q1"],
      q2: draft.q2.filter((v) => v !== "none") as Answers["q2"],
      q3: draft.q3 as Answers["q3"],
      q4: draft.q4.filter((v) => v !== "none") as Answers["q4"],
      q5: draft.q5 as Answers["q5"],
      q6: draft.q6.filter((v) => v !== "none") as Answers["q6"],
    }
    const code = encodeAnswers(answers)
    saveAnswers(code)
    router.push(`/results?a=${code}`)
  }

  const current = picked(q.key)

  return (
    <div className="quiz">
      <div className="quiz__top">
        <button className="btn btn--ghost btn--sm" type="button" onClick={() => setStep(Math.max(0, step - 1))} style={{ visibility: step === 0 ? "hidden" : "visible" }}>
          <BackIcon /> Back
        </button>
        <p className="caption" aria-live="polite">
          Step {step + 1} of {total}
        </p>
      </div>
      <div className="progress" role="progressbar" aria-valuemin={1} aria-valuemax={total} aria-valuenow={step + 1} aria-label="Quiz progress">
        <span style={{ width: `${((step + 1) / total) * 100}%` }} />
      </div>
      {step === 0 && <p className="quiz__intro">About two minutes. No account, no email, and you can change any answer with Back.</p>}

      <h2 id={`q-${q.key}`} ref={headingRef} tabIndex={-1} style={{ outline: "none" }}>
        {q.question}
      </h2>
      {q.help && <p className="q-help">{q.help}</p>}

      <ul className={`options${error ? " has-error" : ""}`} role={q.type === "multi" ? "group" : "radiogroup"} aria-labelledby={`q-${q.key}`}>
        {q.options.map((o) => {
          const on = current.includes(o.value)
          const multi = q.type === "multi"
          return (
            <li key={o.value}>
              <button
                className={`option${multi ? " option--multi" : ""}`}
                type="button"
                role={multi ? "checkbox" : "radio"}
                aria-checked={on}
                onClick={() => choose(o.value)}
              >
                <span>
                  {o.label}
                  {o.helper && <small>{o.helper}</small>}
                </span>
                <span className="mark" />
              </button>
            </li>
          )
        })}
      </ul>
      {error && (
        <p className="field-error" role="alert">
          <AlertIcon />
          <span>Pick at least one option to continue.</span>
        </p>
      )}

      <div className="quiz__foot">
        <Link className="link small" href="/">
          Save it for later
        </Link>
        <button className="btn btn--primary" type="button" onClick={next}>
          {step === total - 1 ? "See my routine" : "Next"}
        </button>
      </div>
    </div>
  )
}
