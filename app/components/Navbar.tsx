'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Thesis', href: '#thesis' },
  { label: 'Focus', href: '#focus' },
  { label: 'Founders', href: '#founders' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-scala-black/90 shadow-[0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-1xl items-center justify-between px-6 py-5 lg:px-12">
        <a
          href="#"
          className="group flex items-center gap-3 font-cardo text-xl font-bold tracking-wide text-white"
        >
          <span className="relative">
            Scala Capital
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-scala-blue/50 transition-all duration-500 group-hover:w-full" />
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-nunito text-[11px] font-light tracking-[0.25em] text-white/50 uppercase transition-colors duration-300 hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-scala-blue/40 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-px w-5 bg-white transition-all duration-300 ${
              mobileOpen ? 'translate-y-[3.5px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-px w-5 bg-white transition-all duration-300 ${
              mobileOpen ? '-translate-y-[3.5px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          mobileOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-white/[0.04] bg-scala-black/95 px-6 pb-8 pt-4 backdrop-blur-xl">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block border-b border-white/[0.03] py-4 font-nunito text-[11px] font-light tracking-[0.25em] text-white/50 uppercase transition-colors hover:text-white"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
