import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
      <section className="relative overflow-hidden pt-32 pb-20 px-4">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sky-100 rounded-full blur-3xl opacity-50" />
        <div className="relative max-w-6xl mx-auto text-center space-y-6">
          <p className="text-xs tracking-[0.3em] uppercase text-blue-400 font-medium">Skincare, simplified</p>
          <h1 className="text-5xl sm:text-6xl font-extralight tracking-tight text-slate-800 leading-tight">Your skin knows <br /><span className="font-normal bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">what it needs</span></h1>
          <p className="text-slate-500 text-base max-w-md mx-auto leading-relaxed">Personalised skincare recommendations based on your unique skin type and concerns. Stop guessing what your skin needs.</p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <a href="#signup" className="px-6 py-3 bg-blue-400 hover:bg-blue-500 text-white text-sm rounded-full transition-colors">Get started</a>
            <a href="#how-it-works" className="px-6 py-3 border border-slate-200 hover:border-slate-300 text-slate-600 text-sm rounded-full transition-colors">How it works</a>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="py-24 px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-blue-400 font-medium text-center mb-3">How it works</p>
          <h2 className="text-3xl font-extralight text-center mb-6 text-slate-800">Three steps for better skin</h2>
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
                <p className="text-sm text-slate-500 leading-relaxed">Browse personalised products filtered to your skin type. Every recommendation is independent and unbiased.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-white/40">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-blue-400 font-medium text-center mb-3">Features</p>
          <h2 className="text-3xl font-extralight text-center mb-16 text-slate-800">Everything you need</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-8 border border-blue-100/50">
              <h3 className="text-lg font-medium text-slate-800 mb-2">Skin Analysis Quiz</h3>
              <p className="text-sm text-slate-500 leading-relaxed">A guided quiz that identifies your skin type, concerns, and goals. Simple questions, no selfie required.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-100/50">
              <h3 className="text-lg font-medium text-slate-800 mb-2">Browse by Skin Type</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Explore products organised by skin type and category — cleansers, serums, moisturisers, SPF, and more.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-2xl p-8 border border-slate-100/50">
              <h3 className="text-lg font-medium text-slate-800 mb-2">Independent Recommendations</h3>
              <p className="text-sm text-slate-500 leading-relaxed">We are not owned by any brand. Every recommendation is based on what works for your skin.</p>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 border border-blue-100/50">
              <h3 className="text-lg font-medium text-slate-800 mb-2">Coming Soon: Product Scanner</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Scan any product barcode and get an ingredient safety score. Know what you are putting on your skin before you buy.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="signup" className="py-20 px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center space-y-3 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase text-blue-400 font-medium">Stay in the loop</p>
            <h2 className="text-3xl font-extralight text-slate-800">Get exclusive skincare tips</h2>
            <p className="text-sm text-slate-500 leading-relaxed">Sign up for personalised skincare advice and product recommendations. Free forever.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl p-8 shadow-sm">
            <ContactForm />
          </div>
          <p className="text-xs text-center text-slate-400 mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
      <footer className="py-12 px-4 border-t border-slate-100">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-light tracking-wide text-slate-800">GlowGuide</p>
          <p className="text-xs text-slate-400">Built by Salvia Varghese</p>
        </div>
      </footer>
    </div>
  )
}
