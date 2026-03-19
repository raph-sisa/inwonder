import { Link } from 'react-router-dom'

export function Nav() {
  return (
    <header className="bg-warm-50/80 backdrop-blur-md border-b border-primary/10 px-6 lg:px-20 py-3">
      <nav aria-label="Main navigation" className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-lg font-bold tracking-tight text-warm-900 py-2">
          * In Wonder
        </Link>

        <a
          href="#contact"
          className="bg-primary text-white rounded-full px-6 py-2.5 text-sm font-bold hover:opacity-90 transition-opacity min-h-[44px] inline-flex items-center"
        >
          Contact
        </a>
      </nav>
    </header>
  )
}
