'use client'

import { useInView } from '@/hooks/useInView'

const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)

const projects = [
  {
    title: 'Cloud-Native API Platform',
    description:
      'Production-grade REST API built with ASP.NET Core, featuring JWT authentication, MongoDB Atlas, Redis caching, and Kubernetes deployment.',
    tags: ['ASP.NET Core', 'C#', 'MongoDB', 'Redis', 'Docker', 'K8s'],
    github: 'https://github.com/almansorIT',
    demo: '#',
    featured: true,
  },
  {
    title: 'Multi-Tenant SaaS Dashboard',
    description:
      'Full-stack SaaS application with a Blazor frontend and ASP.NET Core backend, implementing clean architecture and CQRS patterns.',
    tags: ['Blazor', 'C#', 'MySQL', 'Clean Arch', 'Azure'],
    github: 'https://github.com/almansorIT',
    demo: '#',
    featured: true,
  },
  {
    title: 'DevOps Automation Pipeline',
    description:
      'CI/CD pipeline with Azure DevOps, Docker containerisation, and Kubernetes orchestration for automated zero-downtime deployments.',
    tags: ['Docker', 'Kubernetes', 'Azure DevOps', 'CI/CD'],
    github: 'https://github.com/almansorIT',
    demo: '#',
    featured: false,
  },
  {
    title: 'E-Commerce Backend',
    description:
      'Scalable e-commerce API covering product catalogue, order management, payment integration, and real-time inventory tracking.',
    tags: ['ASP.NET Core', 'MySQL', 'JWT', 'REST API'],
    github: 'https://github.com/almansorIT',
    demo: '#',
    featured: false,
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio built with Next.js 16 and Tailwind CSS v4, featuring scroll-based animations and a clean dark design system.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS v4', 'React 19'],
    github: 'https://github.com/almansorIT',
    demo: '#',
    featured: false,
  },
  {
    title: 'Auth Microservice',
    description:
      'Standalone authentication microservice with JWT, refresh-token rotation, role-based access control, and structured audit logging.',
    tags: ['ASP.NET Core', 'JWT', 'MongoDB', 'Microservices'],
    github: 'https://github.com/almansorIT',
    demo: '#',
    featured: false,
  },
]

export default function Work() {
  const { ref, inView } = useInView()

  return (
    <section id="work" className="py-24 lg:py-32 relative">
      {/* Subtle section tint */}
      <div className="absolute inset-0 bg-slate-900/20 pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div
          className={`mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
            04. Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Selected Projects
          </h2>
          <div className="w-12 h-0.5 bg-cyan-400 mt-4" />
          <p className="text-slate-400 mt-4 max-w-xl">
            A selection of projects showcasing my range across backend
            architecture, cloud deployments, and full-stack delivery.
          </p>
        </div>

        {/* Project cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group flex flex-col bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400/40 hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-400/5 ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.08 + i * 0.08}s` }}
            >
              {/* Top bar: featured badge + links */}
              <div className="flex items-center justify-between mb-4">
                {project.featured ? (
                  <span className="px-2.5 py-0.5 bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-mono rounded-full">
                    Featured
                  </span>
                ) : (
                  <span />
                )}
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="text-slate-600 hover:text-slate-300 transition-colors duration-200"
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    className="text-slate-600 hover:text-slate-300 transition-colors duration-200"
                  >
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs font-mono text-slate-500 bg-slate-800/80 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* More projects CTA */}
        <div
          className={`mt-12 text-center ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.65s' }}
        >
          <a
            href="https://github.com/almansorIT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-slate-700 text-slate-400 text-sm font-medium px-6 py-3 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-200"
          >
            View More on GitHub
            <GithubIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
