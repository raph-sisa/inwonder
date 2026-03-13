import { useParams, Navigate } from 'react-router-dom'
import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { caseStudies } from '../data/caseStudies'

const CASE_STUDY_PASSWORD = 'inwonder2026'

interface TocItem {
  id: string
  text: string
}

function TableOfContents({ contentRef }: { contentRef: React.RefObject<HTMLDivElement | null> }) {
  const [items, setItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  // Scan for h3s once content renders
  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    const timer = setTimeout(() => {
      const headings = el.querySelectorAll('h3')
      const tocItems: TocItem[] = []
      headings.forEach((h, i) => {
        const id = h.id || `section-${i}`
        if (!h.id) h.id = id
        tocItems.push({ id, text: h.textContent || '' })
      })
      setItems(tocItems)
      if (tocItems.length > 0) setActiveId(tocItems[0].id)
    }, 100)

    return () => clearTimeout(timer)
  }, [contentRef])

  // Track active section on scroll
  const handleScroll = useCallback(() => {
    if (!items.length) return
    const offset = 120
    for (let i = items.length - 1; i >= 0; i--) {
      const el = document.getElementById(items[i].id)
      if (el && el.getBoundingClientRect().top <= offset) {
        setActiveId(items[i].id)
        return
      }
    }
    setActiveId(items[0].id)
  }, [items])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  if (items.length === 0) return null

  return (
    <nav className="hidden lg:block sticky top-24 self-start w-48 shrink-0">
      <p className="font-mono text-[10px] uppercase tracking-widest text-warm-400 mb-3">
        On this page
      </p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className={`block text-xs leading-snug py-0.5 transition-colors duration-200 ${
                activeId === item.id
                  ? 'text-accent font-medium'
                  : 'text-warm-400 hover:text-warm-600'
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function CaseStudyPage() {
  const { id } = useParams()
  const study = caseStudies.find((s) => s.id === id)
  const contentRef = useRef<HTMLDivElement>(null)

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

  if (!study || !study.content) return <Navigate to="/" replace />

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
      <header className="px-6 sm:px-12 max-w-3xl mx-auto lg:max-w-5xl mb-10">
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

      {/* Content with sidebar TOC */}
      <div className="px-6 sm:px-12 max-w-5xl mx-auto pb-24">
        <div className="flex gap-12">
          {unlocked && <TableOfContents contentRef={contentRef} />}

          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl flex-1 min-w-0"
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
                  and I&rsquo;ll share access.
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
        </div>
      </div>
    </main>
  )
}
