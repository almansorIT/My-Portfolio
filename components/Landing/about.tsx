'use client'

import { useInView } from '@/hooks/useInView'

const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Built' },
    { value: '10+', label: 'Technologies' },
    { value: '3', label: 'Certificates' },
]

const techStack = [
    'ASP.NET Core',
    'Clean Architecture',
    'Vertical Slice Architecture',
    'Entity Framework Core',
    'C#',
    'Next.js',
    'React',
    'Blazor',
    'MongoDB',
    'MySQL',
    'Docker',
    'Kubernetes',
    'Azure',
    'Redis',
    'JWT',
    'REST APIs',
    'Tailwind CSS',
]

const certificates = [
    { title: 'B.Sc. Information Technology', issuer: 'University of Science & Applied Studies' },
    { title: 'Full-Stack Developer', issuer: 'Microsoft' },
    { title: 'Project Management Professional', issuer: 'Google' },
    { title: 'IT Support Specialist', issuer: 'IBM' },

]

export default function About() {
    const { ref, inView } = useInView()

    return (
        <section id="about" className="py-24 lg:py-32">
            <div ref={ref} className="max-w-6xl mx-auto px-6">
                {/* Section header */}
                <div
                    className={`mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
                >
                    <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
                        01. About
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
                        Who I Am
                    </h2>
                    <div className="w-12 h-0.5 bg-cyan-400 mt-4" />
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left — Bio text */}
                    <div
                        className={`space-y-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
                        style={{ animationDelay: '0.1s' }}
                    >
                        <p className="text-slate-300 text-lg leading-relaxed">
                            I&apos;m a full-stack developer passionate about building{' '}
                            <span className="text-cyan-400 font-medium">
                                secure, scalable systems
                            </span>{' '}
                            that solve real-world problems. I specialise in the .NET ecosystem,
                            architecting production-grade APIs and cloud-native applications.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            With hands-on experience across the full stack — from Blazor and
                            Next.js frontends to ASP.NET Core backends, MongoDB Atlas, MySQL
                            databases, and Docker/Kubernetes deployments — I deliver clean,
                            maintainable solutions with a strong focus on performance and
                            security.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            I hold a{' '}
                            <span className="text-white font-medium">
                                Full-Stack Developer Certificate
                            </span>{' '}
                            from Microsoft and a{' '}
                            <span className="text-white font-medium">
                                Project Management Professional Certificate
                            </span>{' '}
                            from Google, complementing my technical skills with structured
                            delivery methodology.
                            <span className="text-white font-medium">
                                IBM IT Support Certificate
                            </span>
                        </p>
                        {/* Tech pills */}
                        <div className="pt-2">
                            <p className="text-slate-500 text-sm mb-3 font-mono">
                                Tech I work with:
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300 rounded-full hover:border-cyan-400/50 hover:text-cyan-400 transition-colors duration-200 cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right — Stats + certificates */}
                    <div
                        className={`${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
                        style={{ animationDelay: '0.22s' }}
                    >
                        {/* Stats grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map(({ value, label }) => (
                                <div
                                    key={label}
                                    className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400/30 transition-colors duration-300"
                                >
                                    <p className="text-4xl font-bold text-cyan-400 font-mono">
                                        {value}
                                    </p>
                                    <p className="text-slate-400 text-sm mt-1">{label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Certificates */}
                        <div className="mt-6 space-y-3">
                            <p className="text-slate-500 text-sm font-mono mb-3">
                                Certificates:
                            </p>
                            {certificates.map((cert) => (
                                <div
                                    key={cert.title}
                                    className="flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-slate-700 transition-colors duration-200"
                                >
                                    <div className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0" />
                                    <div>
                                        <p className="text-white text-sm font-medium">
                                            {cert.title}
                                        </p>
                                        <p className="text-slate-500 text-xs mt-0.5">
                                            {cert.issuer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
