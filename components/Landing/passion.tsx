'use client'

import { useInView } from '@/hooks/useInView'

const passions = [
  {
    icon: '⚡',
    title: 'Clean Architecture',
    description:
      'Building maintainable codebases with SOLID principles, domain-driven design, and clean architecture patterns in .NET.',
  },
  {
    icon: '☁️',
    title: 'Cloud & Azure',
    description:
      'Designing cloud-native solutions on Azure — from App Services and Functions to Kubernetes clusters and managed databases.',
  },
  {
    icon: '🔗',
    title: 'API Design',
    description:
      'Crafting secure, well-documented REST APIs with JWT authentication, proper versioning, and performance optimisation.',
  },
  {
    icon: '🚀',
    title: 'DevOps & CI/CD',
    description:
      'Automating deployments with Docker, Kubernetes, and CI/CD pipelines that ensure fast, reliable, zero-downtime releases.',
  },
  {
    icon: '🎨',
    title: 'Frontend Craft',
    description:
      'Building responsive, accessible UIs with React/Next.js and Blazor, always focusing on performance and delightful UX.',
  },
  {
    icon: '📚',
    title: 'Continuous Learning',
    description:
      'Staying ahead of the curve — constantly exploring new frameworks, patterns, and best practices to sharpen my craft.',
  },
]

export default function Passion() {
  const { ref, inView } = useInView()

  return (
    <section id="passion" className="py-24 lg:py-32 relative">
      {/* Subtle section tint */}
      <div className="absolute inset-0 bg-slate-900/20 pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div
          className={`mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
            02. Passion
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            What Drives Me
          </h2>
          <div className="w-12 h-0.5 bg-cyan-400 mt-4" />
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {passions.map((item, i) => (
            <div
              key={item.title}
              className={`group bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400/40 hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-400/5 ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.08 + i * 0.1}s` }}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
