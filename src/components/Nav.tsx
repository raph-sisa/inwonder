import { Link, useLocation } from 'react-router-dom'

export function Nav() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <nav className="bg-warm-50/80 backdrop-blur-md border-b border-warm-200/40">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="font-mono text-sm text-accent hover:text-accent-light transition-colors"
        >
          * In Wonder
        </Link>

        {isHome ? (
          <div className="flex gap-6 font-mono text-sm">
            <a href="#work" className="text-warm-400 hover:text-accent transition-colors">
              Work
            </a>
            <a href="#curiosities" className="text-warm-400 hover:text-accent transition-colors">
              Curiosities
            </a>
            <a href="#contact" className="text-warm-400 hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        ) : (
          <Link
            to="/"
            className="font-mono text-sm text-warm-400 hover:text-accent transition-colors"
          >
            &larr; Back
          </Link>
        )}
      </div>
    </nav>
  )
}
