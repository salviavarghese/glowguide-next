// The six quiz questions, and the compact answer code used in /results?a=… and localStorage.

export type Q1 = "tight" | "shiny" | "tzone" | "comfortable"
export type Q2 = "acne" | "redness" | "pigmentation" | "ageing" | "dryness" | "oiliness" | "texture" | "dull"
export type Q3 = "rarely" | "stings" | "red" | "diagnosed"
export type Q4 = "noSPF" | "noRoutine" | "wears" | "actives"
export type Q5 = "dry" | "oily" | "oilyTight" | "fine"
export type Q6 = "pregnant" | "under16" | "prescription"

export type Answers = {
  q1: Q1
  q2: Q2[]
  q3: Q3
  q4: Q4[]
  q5: Q5
  q6: Q6[]
}

export type Option<T extends string> = { value: T; label: string; helper?: string; none?: boolean }

export type Question =
  | { key: "q1"; type: "single"; question: string; help?: string; options: Option<Q1>[] }
  | { key: "q2"; type: "multi"; question: string; help?: string; options: Option<Q2>[]; max?: number; required?: boolean }
  | { key: "q3"; type: "single"; question: string; help?: string; options: Option<Q3>[] }
  | { key: "q4"; type: "multi"; question: string; help?: string; options: Option<Q4 | "none">[]; max?: number; required?: boolean }
  | { key: "q5"; type: "single"; question: string; help?: string; options: Option<Q5>[] }
  | { key: "q6"; type: "multi"; question: string; help?: string; options: Option<Q6 | "none">[]; max?: number; required?: boolean }

export const questions: Question[] = [
  {
    key: "q1",
    type: "single",
    question: "A few hours after washing your face, how does it usually feel?",
    help: "Pick the one that is true most days, not on your worst day.",
    options: [
      { value: "tight", label: "Tight or dry", helper: "Feels pulled, sometimes flaky" },
      { value: "shiny", label: "Shiny all over", helper: "Forehead, nose and cheeks all look oily" },
      { value: "tzone", label: "Shiny on the T-zone only", helper: "Forehead and nose, cheeks feel fine" },
      { value: "comfortable", label: "Comfortable", helper: "Not oily, not tight" },
    ],
  },
  {
    key: "q2",
    type: "multi",
    question: "What bothers you most about your skin?",
    help: "Pick up to three.",
    max: 3,
    options: [
      { value: "acne", label: "Breakouts", helper: "Spots, whiteheads or blackheads" },
      { value: "redness", label: "Redness or easily irritated" },
      { value: "pigmentation", label: "Dark marks or uneven tone", helper: "Marks left after spots, patches, sun spots" },
      { value: "ageing", label: "Fine lines or loss of firmness" },
      { value: "dryness", label: "Flaky or rough patches" },
      { value: "oiliness", label: "Shine and visible pores" },
      { value: "texture", label: "Bumpy or uneven texture" },
      { value: "dull", label: "Dull or tired-looking" },
    ],
  },
  {
    key: "q3",
    type: "single",
    question: "How does your skin react to new products?",
    options: [
      { value: "rarely", label: "Rarely a problem" },
      { value: "stings", label: "Sometimes stings or tingles" },
      { value: "red", label: "Goes red or itchy easily" },
      { value: "diagnosed", label: "I have diagnosed eczema or rosacea", helper: "We will keep acids and strong actives out" },
    ],
  },
  {
    key: "q4",
    type: "multi",
    question: "Which of these are true for you right now?",
    help: "Pick any that apply.",
    options: [
      { value: "noSPF", label: "I don't wear SPF most days" },
      { value: "noRoutine", label: "I don't really have a routine" },
      { value: "wears", label: "I wear makeup or SPF most days", helper: "Helps us decide whether you need a double cleanse" },
      { value: "actives", label: "I already use retinol or acids" },
      { value: "none", label: "None of these", none: true },
    ],
  },
  {
    key: "q5",
    type: "single",
    question: "By the middle of the day, your skin is usually",
    help: "This tells dry apart from dehydrated. Oily skin can be dehydrated too.",
    options: [
      { value: "dry", label: "Dry and tight" },
      { value: "oily", label: "Oily everywhere" },
      { value: "oilyTight", label: "Oily but still feels tight", helper: "A sign of dehydration" },
      { value: "fine", label: "Fine, nothing to report" },
    ],
  },
  {
    key: "q6",
    type: "multi",
    question: "Anything we should keep in mind?",
    help: "Optional. These change which ingredients we suggest.",
    required: false,
    options: [
      { value: "pregnant", label: "Pregnant or breastfeeding", helper: "No retinoids or strong acids" },
      { value: "under16", label: "Under 16", helper: "Gentle basics only" },
      { value: "prescription", label: "On prescription acne treatment", helper: "Isotretinoin, tretinoin or adapalene" },
      { value: "none", label: "None of these", none: true },
    ],
  },
]

const Q1S: Q1[] = ["tight", "shiny", "tzone", "comfortable"]
const Q2S: Q2[] = ["acne", "redness", "pigmentation", "ageing", "dryness", "oiliness", "texture", "dull"]
const Q3S: Q3[] = ["rarely", "stings", "red", "diagnosed"]
const Q4S: Q4[] = ["noSPF", "noRoutine", "wears", "actives"]
const Q5S: Q5[] = ["dry", "oily", "oilyTight", "fine"]
const Q6S: Q6[] = ["pregnant", "under16", "prescription"]

function mask<T extends string>(all: T[], picked: T[]): number {
  return picked.reduce((m, v) => m | (1 << all.indexOf(v)), 0)
}
function unmask<T extends string>(all: T[], m: number): T[] {
  return all.filter((_, i) => (m >> i) & 1)
}

/** Encode answers as a short code: q1-q2mask-q3-q4mask-q5-q6mask, all base 36. Example: 2-5-1-3-2-0 */
export function encodeAnswers(a: Answers): string {
  return [
    Q1S.indexOf(a.q1),
    mask(Q2S, a.q2),
    Q3S.indexOf(a.q3),
    mask(Q4S, a.q4),
    Q5S.indexOf(a.q5),
    mask(Q6S, a.q6),
  ]
    .map((n) => n.toString(36))
    .join("-")
}

/** Decode a code back to answers. Returns null for anything malformed or out of range. */
export function decodeAnswers(code: string | null | undefined): Answers | null {
  if (!code) return null
  const parts = code.split("-")
  if (parts.length !== 6) return null
  const nums = parts.map((p) => (/^[0-9a-z]{1,2}$/.test(p) ? parseInt(p, 36) : NaN))
  if (nums.some((n) => Number.isNaN(n))) return null
  const [i1, m2, i3, m4, i5, m6] = nums
  if (i1 < 0 || i1 >= Q1S.length || i3 < 0 || i3 >= Q3S.length || i5 < 0 || i5 >= Q5S.length) return null
  if (m2 >= 1 << Q2S.length || m4 >= 1 << Q4S.length || m6 >= 1 << Q6S.length) return null
  const q2 = unmask(Q2S, m2)
  if (q2.length === 0 || q2.length > 3) return null
  return { q1: Q1S[i1], q2, q3: Q3S[i3], q4: unmask(Q4S, m4), q5: Q5S[i5], q6: unmask(Q6S, m6) }
}

export const STORAGE_KEY = "glowguide.answers"

export function saveAnswers(code: string) {
  try {
    window.localStorage.setItem(STORAGE_KEY, code)
  } catch {
    /* private mode or blocked storage: the URL still carries the answers */
  }
}

export function loadAnswers(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}
