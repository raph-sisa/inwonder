import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function Nav() {
  return (
    <motion.header
      className="bg-warm-50/80 backdrop-blur-md border-b border-primary/10 px-6 lg:px-20 py-3"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    >
      <nav aria-label="Main navigation" className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        <Link to="/" className="text-lg font-bold tracking-tight text-warm-900 py-2 shrink-0">
          * In Wonder
        </Link>

        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            to="/field-notes"
            className="text-sm font-bold text-warm-600 hover:text-primary transition-colors py-2"
          >
            Field Notes
          </Link>
          <a
            href="/#contact"
            className="bg-primary text-white rounded-full px-5 sm:px-6 py-2.5 text-sm font-bold hover:opacity-90 transition-[transform,opacity] duration-160 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] min-h-[44px] inline-flex items-center"
          >
            Contact
          </a>
        </div>
      </nav>
    </motion.header>
  )
}
