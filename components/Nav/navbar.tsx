'use client'

import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Passion', href: '#passion' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
] as const

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Show background once user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track which section is active using IntersectionObserver
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1))
    const observers: IntersectionObserver[] = []

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.35, rootMargin: '-80px 0px 0px 0px' },
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080C14]/90 backdrop-blur-md border-b border-slate-800/80'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-mono text-white font-bold text-lg tracking-tight select-none"
        >
          AM<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-cyan-400 ${
                  activeSection === href.slice(1)
                    ? 'text-cyan-400'
                    : 'text-slate-400'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA buttons — desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/assets/MyC.v.pdf"
            download
            className="inline-flex items-center gap-2 border border-slate-700 text-slate-300 text-sm font-medium px-4 py-1.5 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
              />
            </svg>
            My C.V
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-slate-700 text-slate-300 text-sm font-medium px-4 py-1.5 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-200"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#080C14]/95 backdrop-blur-md border-b border-slate-800">
          <ul className="flex flex-col px-6 py-5 gap-5">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-sm font-medium transition-colors duration-200 hover:text-cyan-400 ${
                    activeSection === href.slice(1)
                      ? 'text-cyan-400'
                      : 'text-slate-400'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <a
                href="/assets/MyC.v.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-2 border border-slate-700 text-slate-300 text-sm font-medium px-4 py-1.5 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                  />
                </svg>
                My C.V
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center border border-slate-700 text-slate-300 text-sm font-medium px-4 py-1.5 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-200"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
