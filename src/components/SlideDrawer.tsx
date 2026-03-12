import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'
import type { CaseStudy } from '../data/caseStudies'

interface SlideDrawerProps {
  isOpen: boolean
  onClose: () => void
  category: 'work' | 'curiosity'
  title: string
}

function DrawerCard({ study }: { study: CaseStudy }) {
  const Wrapper = study.externalUrl
    ? ({ children, className }: { children: React.ReactNode; className: string }) => (
        <a href={study.externalUrl} target="_blank" rel="noopener noreferrer" className={className}>
          {children}
        </a>
      )
    : ({ children, className }: { children: React.ReactNode; className: string }) => (
        <Link to={`/work/${study.id}`} className={className}>
          {children}
        </Link>
      )

  return (
    <Wrapper className="group block rounded-2xl border border-warm-200/60 bg-white/50 hover:bg-white hover:border-accent/25 hover:shadow-md transition-all duration-400 overflow-hidden">
      {study.illustration && (
        <div className="relative w-full aspect-[16/9] overflow-hidden border-b border-warm-200/40">
          <study.illustration className="w-full h-full" />
        </div>
      )}
      <div className="p-5">
        <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono text-warm-400 group-hover:text-warm-500 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-display text-xl text-warm-900 mb-1 tracking-tight">
          {study.title}
          {study.externalUrl && (
            <span className="inline-block ml-1.5 text-warm-400 text-sm group-hover:text-accent transition-colors">&#x2197;</span>
          )}
        </h3>
        <p className="text-sm text-warm-500 leading-relaxed">{study.byline}</p>
        {study.passwordProtected && (
          <span className="inline-flex items-center gap-2 font-mono text-xs text-warm-300 group-hover:text-accent transition-colors duration-300 mt-3">
            <span className="w-5 h-5 rounded-full border border-warm-200 group-hover:border-accent/40 flex items-center justify-center transition-colors duration-300">
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="text-current">
                <path d="M4 7V5a4 4 0 1 1 8 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
            Request access
          </span>
        )}
      </div>
    </Wrapper>
  )
}

export function SlideDrawer({ isOpen, onClose, category, title }: SlideDrawerProps) {
  const studies = caseStudies.filter((s) => s.category === category)

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-warm-900/40 backdrop-blur-sm z-[60]"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            data-lenis-prevent
            className="fixed top-0 right-0 h-full w-full max-w-xl bg-warm-50 z-[70] shadow-2xl overflow-y-auto overscroll-contain"
          >
            <div className="sticky top-0 bg-warm-50/90 backdrop-blur-md border-b border-warm-200/40 px-6 py-4 flex items-center justify-between z-10">
              <h2 className="font-display text-2xl text-warm-900 tracking-tight">{title}</h2>
              <button
                onClick={onClose}
                className="text-warm-400 hover:text-warm-700 transition-colors p-1 cursor-pointer"
                aria-label="Close"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-6">
              {studies.map((study) => (
                <DrawerCard key={study.id} study={study} />
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
