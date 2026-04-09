import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <section className="relative pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xs tracking-[0.3em] uppercase text-blue-400 font-medium">Skincare, simplified</p>
            <h1 className="text-4xl sm:text-5xl font-extralight tracking-tight text-slate-800 leading-tight">Find the right products for <span className="font-normal bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">your skin</span></h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-md">Personalised skincare recommendations based on your unique skin type and concerns. No guesswork. No overwhelm. Just better skin.</p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#signup" className="px-6 py-3 bg-blue-400 hover:bg-blue-500 text-white text-sm rounded-full transition-colors">Get started</a>
              <a href="#how-it-works" className="px-6 py-3 border border-slate-200 hover:border-slate-300 text-slate-600 text-sm rounded-full transition-colors">Learn more</a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 rounded-3xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center space-y-3 p-8">
                <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center mx-auto shadow-sm"><span className="text-blue-400 text-2xl">&#10024;</span></div>
                <p className="text-slate-600 text-sm font-medium">2 minute skin quiz</p>
                <p className="text-slate-400 text-xs">No account needed</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-md p-4 border border-slate-100">
              <p className="text-xs text-slate-500">Trusted by</p>
              <p className="text-lg font-semibold text-slate-800">2,000+</p>
              <p className="text-xs text-slate-400">skincare lovers</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><p className="text-2xl font-light text-blue-400">5+</p><p className="text-xs text-slate-500 mt-1">Skin types covered</p></div>
          <div><p className="text-2xl font-light text-blue-400">50+</p><p className="text-xs text-slate-500 mt-1">Products reviewed</p></div>
          <div><p className="text-2xl font-light text-blue-400">100%</p><p className="text-xs text-slate-500 mt-1">Free to use</p></div>
          <div><p className="text-2xl font-light text-blue-400">0</p><p className="text-xs text-slate-500 mt-1">Brand partnerships</p></div>
        </div>
      </section>
      <section id="how-it-works" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-blue-400 font-medium text-center mb-3">How it works</p>
          <h2 className="text-3xl font-extralight text-center mb-6 text-slate-800">Three steps to better skin</h2>
          <p className="text-slate-500 text-sm text-center max-w-md mx-auto mb-20">Take our quick skin quiz and get personalised recommendations in minutes.</p>
          <div className="relative">
            <svg className="absolute top-16 left-0 w-full h-64 hidden md:block" viewBox="0 0 1000 200" fill="none" preserveAspectRatio="none"><path d="M 100 150 C 250 150, 300 50, 500 50 C 700 50, 750 150, 900 150" stroke="#93c5fd" strokeWidth="3" strokeDasharray="8 8" fill="none" /></svg>
            <div className="hidden md:flex justify-between absolute top-0 left-0 w-full px-12"><span className="text-[120px] font-bold text-blue-50 leading-none select-none">1</span><span className="text-[120px] font-bold text-blue-50 leading-none select-none">2</span><span className="text-[120px] font-bold text-blue-50 leading-none select-none">3</span></div>
            <div className="relative grid md:grid-cols-3 gap-8">
              <div className="md:mt-24">
                <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center mb-4 shadow-md"><span className="text-white text-sm font-semibold">01</span></div>
                <h3 className="text-lg font-medium text-slate-800 mb-2">Take the quiz</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Answer a few simple questions about your skin type, concerns, and current routine. Takes less than 2 minutes.</p>
              </div>
              <div className="md:mt-8">
                <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center mb-4 shadow-md"><span className="text-white text-sm font-semibold">02</span></div>
                <h3 className="text-lg font-medium text-slate-800 mb-2">Get your profile</h3>
                <p className="text-sm text-slate-500 leading-relaxed">We analyse your answers and build a personalised skin profile with targeted product recommendations.</p>
              </div>
              <div className="md:mt-24">
                <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center mb-4 shadow-md"><span className="text-white text-sm font-semibold">03</span></div>
                <h3 className="text-lg font-medium text-slate-800 mb-2">Discover products</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Browse curated products filtered to your skin type. Every recommendation is independent and unbiased.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-blue-400 font-medium text-center mb-3">Features</p>
          <h2 className="text-3xl font-extralight text-center mb-16 text-slate-800">Why GlowGuide</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0"><span className="text-blue-400 text-lg">&#128270;</span></div>
                <div>
                  <h3 className="text-lg font-medium text-slate-800 mb-2">Skin Analysis Quiz</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">A guided quiz that identifies your skin type, concerns, and goals. We ask about your skin type (oily, dry, combination, sensitive, normal), your top concerns (acne, hyperpigmentation, ageing, redness, texture), and your current routine. Simple questions, no selfie required.</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-sky-400 rounded-2xl p-8 text-white shadow-sm">
              <h3 className="text-lg font-medium mb-2">100% Independent</h3>
              <p className="text-sm text-blue-100 leading-relaxed">We are not owned by any brand. Every recommendation is based on what works for your skin, not who pays us.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0"><span className="text-blue-400 text-lg">&#128218;</span></div>
                <div>
                  <h3 className="text-lg font-medium text-slate-800 mb-2">Browse by Skin Type</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Explore products by category — cleansers, serums, moisturisers, SPF. All filtered to your skin type.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0"><span className="text-blue-400 text-lg">&#127793;</span></div>
                <div>
                  <h3 className="text-lg font-medium text-slate-800 mb-2">Beginner Friendly</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">No complex terminology. No intimidating routines. Just clear, simple advice anyone can follow.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0"><span className="text-blue-400 text-lg">&#128274;</span></div>
                <div>
                  <h3 className="text-lg font-medium text-slate-800 mb-2">Coming: Product Scanner</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Scan any barcode and get an ingredient safety score. Know what you are putting on your skin.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="signup" className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-xs tracking-[0.3em] uppercase text-blue-400 font-medium">Stay in the loop</p>
            <h2 className="text-3xl font-extralight text-slate-800">Get exclusive skincare tips</h2>
            <p className="text-sm text-slate-500 leading-relaxed">Sign up for personalised skincare advice, product recommendations, and early access to new features like our product scanner. Completely free, forever.</p>
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><span className="text-blue-400 text-xs">&#10003;</span></div><p className="text-sm text-slate-600">Weekly personalised tips</p></div>
              <div className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><span className="text-blue-400 text-xs">&#10003;</span></div><p className="text-sm text-slate-600">New product alerts for your skin type</p></div>
              <div className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><span className="text-blue-400 text-xs">&#10003;</span></div><p className="text-sm text-slate-600">Early access to new features</p></div>
            </div>
          </div>
          <div>
            <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
              <ContactForm />
            </div>
            <p className="text-xs text-center text-slate-400 mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
      <footer className="py-12 px-4 border-t border-slate-100 bg-slate-50">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-light tracking-wide text-slate-800">GlowGuide</p>
            <p className="text-xs text-slate-400 mt-1">Skincare recommendations you can trust</p>
          </div>
          <p className="text-xs text-slate-400">Built by Salvia Varghese</p>
        </div>
      </footer>
    </div>
  )
}
