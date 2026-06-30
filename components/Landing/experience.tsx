'use client'

import { useInView } from '@/hooks/useInView'

const experiences = [
  {
    role: 'Full-Stack Developer',
    company: 'IO Center',
    period: 'Apr 2025 — Present',
    type: 'Full-Time',
    highlights: [
      'Architected and scaled a microservices-based learning platform using a BFF and API Gateway to support modular, maintainable backend services.',
      'Implemented asynchronous messaging with RabbitMQ to improve service communication and support event-driven workflows.',
      'Delivered SSR-enabled Next.js public pages to improve frontend rendering and user experience.',
      'Introduced Redis caching that cut latency and backend load by 40%, improving platform performance and scalability.',
      'Implemented policy-based access control to secure platform functionality across user roles and permissions.',
    ],
  },
  {
    role: 'Full-Stack Engineer',
    company: 'Freelancer',
    period: 'Nov 2024 — Apr 2025',
    type: 'Freelance',
    highlights: [
      'Designed and developed full-stack web applications using ASP.NET Core and Blazor, delivering integrated frontend and backend components.',
      'Integrated MongoDB Atlas and MySQL to support SQL and NoSQL data persistence for web applications.',
      'Implemented JWT authentication with role-based authorization to strengthen application security and access control.',
      'Improved backend performance through targeted optimization of application logic and data interactions.',
    ],
  },
]

export default function Experience() {
  const { ref, inView } = useInView()

  return (
    <section id="experience" className="py-24 lg:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          className={`mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
            03. Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Where I&apos;ve Worked
          </h2>
          <div className="w-12 h-0.5 bg-cyan-400 mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical guide line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-slate-800" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={exp.role}
                className={`relative pl-12 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.1 + i * 0.18}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-5 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full bg-[#080C14] border-2 border-cyan-400 ring-4 ring-cyan-400/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                </div>

                {/* Card */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-700 transition-colors duration-300">
                  {/* Card header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-white font-semibold text-xl">
                        {exp.role}
                      </h3>
                      <p className="text-cyan-400 font-mono text-sm mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-slate-400 text-sm font-mono">
                        {exp.period}
                      </span>
                      <span className="px-2.5 py-0.5 bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs rounded-full font-mono">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Bullet highlights */}
                  <ul className="space-y-2.5">
                    {exp.highlights.map((point, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                      >
                        <span className="text-cyan-400 mt-1 flex-shrink-0 text-xs">
                          ▸
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
