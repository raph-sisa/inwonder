import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { CaseStudy } from '../data/caseStudies'

const CASE_STUDY_PASSWORD = 'inwonder2026'

interface Props {
  study: CaseStudy
  onClose: () => void
}

export function CaseStudyDetail({ study, onClose }: Props) {
  const [unlocked, setUnlocked] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!study.passwordProtected) {
      setUnlocked(true)
    } else {
      const stored = sessionStorage.getItem('cs-unlocked')
      if (stored === 'true') setUnlocked(true)
    }
  }, [study.passwordProtected])

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (password === CASE_STUDY_PASSWORD) {
      setUnlocked(true)
      sessionStorage.setItem('cs-unlocked', 'true')
      setError(false)
    } else {
      setError(true)
    }
  }

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
              {unlocked && Content ? (
                <Content />
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-10 h-10 rounded-full bg-warm-100 flex items-center justify-center mb-4">
                    <span className="text-warm-400 text-lg">&#x1F512;</span>
                  </div>
                  <h3 className="text-lg font-bold text-warm-900 mb-2">
                    This case study is password-protected
                  </h3>
                  <p className="text-sm text-warm-500 mb-6 max-w-sm">
                    It contains confidential project details. If you're a hiring
                    manager or recruiter, reach out and I'll share access.
                  </p>
                  <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-xs">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => { setPassword(e.target.value); setError(false) }}
                      placeholder="Enter password"
                      className={`flex-1 px-3 py-2 rounded-lg border text-sm font-mono outline-none transition-colors ${
                        error
                          ? 'border-red-300 bg-red-50 focus:border-red-400'
                          : 'border-warm-200 bg-warm-50 focus:border-accent'
                      }`}
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-light transition-colors cursor-pointer"
                    >
                      View
                    </button>
                  </form>
                  {error && (
                    <p className="text-xs text-red-500 mt-2">Incorrect password</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
