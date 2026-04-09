"use client"

import { useState } from "react"

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="text-lg font-light tracking-wide text-slate-800">GlowGuide</a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm text-slate-500 hover:text-slate-800 transition-colors">How it works</a>
          <a href="#" className="text-sm text-slate-500 hover:text-slate-800 transition-colors">Skin Quiz</a>
          <a href="#" className="text-sm text-slate-500 hover:text-slate-800 transition-colors">Browse by Skin Type</a>
          <a href="#signup" className="px-4 py-2 bg-blue-400 hover:bg-blue-500 text-white text-sm rounded-full transition-colors">Sign up</a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2">
          <span className={`block w-5 h-0.5 bg-slate-600 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-slate-600 transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-slate-600 transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 py-6 space-y-4">
          <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="block text-sm text-slate-600">How it works</a>
          <a href="#" onClick={() => setMenuOpen(false)} className="block text-sm text-slate-600">Skin Quiz</a>
          <a href="#" onClick={() => setMenuOpen(false)} className="block text-sm text-slate-600">Browse by Skin Type</a>
          <a href="#signup" onClick={() => setMenuOpen(false)} className="block w-full text-center px-4 py-2 bg-blue-400 text-white text-sm rounded-full">Sign up</a>
        </div>
      )}
    </nav>
  )
}
