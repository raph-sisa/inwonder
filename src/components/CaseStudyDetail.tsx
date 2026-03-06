import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { CaseStudy } from '../data/caseStudies'

interface Props {
  study: CaseStudy
  onClose: () => void
}

export function CaseStudyDetail({ study, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])

  const Content = study.content

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed inset-0 z-50 overflow-y-auto"
      >
        <div
          className="min-h-screen flex justify-center py-8 px-4 sm:px-8"
          onClick={onClose}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-3xl w-full my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm rounded-t-2xl border-b border-warm-100 px-6 sm:px-10 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-warm-900">{study.title}</h2>
                <p className="text-sm text-warm-500">{study.byline}</p>
              </div>
              <button
                onClick={onClose}
                className="text-warm-400 hover:text-warm-700 transition-colors text-2xl leading-none p-2 cursor-pointer"
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            {/* Content */}
            <div className="px-6 sm:px-10 py-8">
              <Content />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
