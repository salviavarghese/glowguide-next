import type { Metadata } from "next"
import { Quiz } from "./quiz"

export const metadata: Metadata = {
  title: "Skin quiz",
  description: "Six quick questions to find your skin type and build a five-step routine.",
}

export default function QuizPage() {
  return (
    <section className="section--tight">
      <div className="wrap">
        <Quiz />
      </div>
    </section>
  )
}
