import { Link } from 'react-router-dom'

export function Nav() {
  return (
    <nav className="bg-warm-50/80 backdrop-blur-md border-b border-warm-200/40">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="font-mono text-sm text-accent hover:text-accent-light transition-colors"
        >
          * In Wonder
        </Link>

        <div className="flex gap-6 font-mono text-sm font-medium">
          <a
            href="#work"
            className="text-warm-700 hover:text-accent transition-colors"
          >
            Work
          </a>
          <a
            href="#curiosities"
            className="text-warm-700 hover:text-accent transition-colors"
          >
            Curiosities
          </a>
          <a
            href="#contact"
            className="text-warm-700 hover:text-accent transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
