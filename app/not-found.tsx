import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#080C14] flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <p className="font-mono text-7xl sm:text-8xl font-bold text-cyan-400 tracking-tight">
          404
        </p>

        <h1 className="mt-6 text-2xl sm:text-3xl font-bold text-white">
          Hmm, you&rsquo;re getting creative, aren&rsquo;t you? 😅
        </h1>

        <p className="mt-4 text-slate-400 leading-relaxed">
          Unfortunately, this path isn&rsquo;t available. 🚧 But don&rsquo;t go
          away &mdash; we can head back to the Home page. 🏠
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 border border-slate-700 text-slate-300 text-sm font-medium px-5 py-2 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-200"
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>
      </div>
    </main>
  )
}
