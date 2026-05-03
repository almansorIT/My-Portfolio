'use client'

import { useEffect, useState } from 'react'

const roles = [
  'Full-Stack Developer',
  '.NET Engineer',
  'Cloud Architect',
  'DevOps Engineer',
  'API Specialist',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  // Typewriter animation cycling through roles
  useEffect(() => {
    const current = roles[roleIndex]

    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          75,
        )
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2200)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length - 1)),
          38,
        )
        return () => clearTimeout(t)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dot-grid texture */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Radial vignette so edges fade to background colour */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, #080C14 100%)',
        }}
      />

      {/* Subtle cyan glow behind the text */}
      <div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="max-w-3xl">
          {/* Greeting label */}
          <p
            className="text-cyan-400 text-sm font-mono font-medium tracking-widest uppercase mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.05s' }}
          >
            Hello, I&apos;m
          </p>

          {/* Name */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 animate-fade-in-up"
            style={{ animationDelay: '0.18s' }}
          >
            Almansoor
            <br />
            <span className="text-slate-300">Mukhawi</span>
          </h1>

          {/* Animated role typewriter */}
          <div
            className="h-10 flex items-center mb-8 animate-fade-in-up"
            style={{ animationDelay: '0.32s' }}
          >
            <span className="text-xl sm:text-2xl text-cyan-400 font-mono font-medium">
              {displayed}
              <span className="animate-blink">|</span>
            </span>
          </div>

          {/* Short bio */}
          <p
            className="text-slate-400 text-lg leading-relaxed max-w-xl mb-10 animate-fade-in-up"
            style={{ animationDelay: '0.46s' }}
          >
            Full-stack developer specialising in .NET applications, delivering
            secure, scalable solutions with clean architecture and cloud-native
            development.
          </p>

          {/* CTA buttons */}
          <div
            className="flex flex-wrap gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.58s' }}
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-cyan-400 text-[#080C14] font-semibold px-6 py-3 rounded-full hover:bg-cyan-300 transition-colors duration-200"
            >
              View My Work
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-slate-700 text-slate-300 font-semibold px-6 py-3 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll indicator */}
          <div
            className="mt-20 flex flex-col items-start gap-2 animate-fade-in-up"
            style={{ animationDelay: '0.88s' }}
          >
            <span className="text-slate-600 text-xs font-mono tracking-widest uppercase">
              Scroll
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent ml-0.5" />
          </div>
        </div>
      </div>
    </section>
  )
}
