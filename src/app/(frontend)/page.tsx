import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-3">
          <p className="text-sm tracking-widest uppercase text-blue-400">
            Skincare, simplified
          </p>
          <h1 className="text-4xl font-light tracking-tight text-slate-800">
            GlowGuide
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
            Personalised skincare recommendations based on your skin type
            and concerns. No guesswork, no overwhelm.
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl p-8 shadow-sm">
          <p className="text-sm text-slate-600 mb-6 text-center">
            Join the waitlist for early access
          </p>
          <ContactForm />
        </div>

        <p className="text-xs text-center text-slate-400">
          Free to use. Independent recommendations. No spam.
        </p>
      </div>
    </main>
  )
}