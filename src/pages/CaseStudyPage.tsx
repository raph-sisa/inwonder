import { useParams, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { caseStudies } from '../data/caseStudies'

const CASE_STUDY_PASSWORD = 'inwonder2026'

export function CaseStudyPage() {
  const { id } = useParams()
  const study = caseStudies.find((s) => s.id === id)

  const [unlocked, setUnlocked] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    if (!study?.passwordProtected) {
      setUnlocked(true)
    } else {
      const stored = sessionStorage.getItem('cs-unlocked')
      if (stored === 'true') setUnlocked(true)
    }
  }, [study?.passwordProtected])

  if (!study) return <Navigate to="/" replace />

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
    <main className="min-h-screen">
      {/* Header */}
      <header className="px-6 sm:px-12 max-w-3xl mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded-full bg-warm-100 text-warm-500"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-warm-900 tracking-tight mb-3">
            {study.title}
          </h1>
          <p className="text-lg text-warm-500">{study.byline}</p>
        </motion.div>
      </header>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="px-6 sm:px-12 max-w-3xl mx-auto pb-24"
      >
        {unlocked ? (
          <Content />
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-10 h-10 rounded-full bg-warm-100 flex items-center justify-center mb-4">
              <span className="text-warm-400 text-lg">&#x1F512;</span>
            </div>
            <h3 className="text-lg font-bold text-warm-900 mb-2">
              This case study is password-protected
            </h3>
            <p className="text-sm text-warm-500 mb-6 max-w-sm">
              It contains confidential project details. Reach out at{' '}
              <a href="mailto:raph@inwonder.xyz" className="text-accent hover:underline">
                raph@inwonder.xyz
              </a>{' '}
              and I'll share access.
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
      </motion.div>
    </main>
  )
}
