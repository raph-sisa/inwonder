import { Link } from 'react-router-dom'

interface NavProps {
  onOpenWork?: () => void
  onOpenCuriosities?: () => void
}

export function Nav({ onOpenWork, onOpenCuriosities }: NavProps) {
  return (
    <nav className="bg-warm-50/80 backdrop-blur-md border-b border-warm-200/40">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="font-mono text-sm text-accent hover:text-accent-light transition-colors"
        >
          * In Wonder
        </Link>

        <div className="flex gap-6 font-mono text-sm">
          <button
            onClick={onOpenWork}
            className="text-warm-400 hover:text-accent transition-colors cursor-pointer"
          >
            Work
          </button>
          <button
            onClick={onOpenCuriosities}
            className="text-warm-400 hover:text-accent transition-colors cursor-pointer"
          >
            Curiosities
          </button>
        </div>
      </div>
    </nav>
  )
}
