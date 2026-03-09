import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const STORAGE_KEY = 'announcement-dismissed'
const ANNOUNCEMENT_ID = 'fabricated-launch'

export function AnnouncementBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY)
    if (dismissed !== ANNOUNCEMENT_ID) {
      setVisible(true)
    }
  }, [])

  function dismiss() {
    setVisible(false)
    localStorage.setItem(STORAGE_KEY, ANNOUNCEMENT_ID)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="bg-warm-900 text-warm-100 overflow-hidden"
        >
          <div className="flex items-center justify-center gap-3 px-4 py-2.5 text-sm relative max-w-6xl mx-auto">
            <span className="font-mono text-xs text-accent">New project</span>
            <span className="text-warm-400">—</span>
            <a
              href="https://fabricated.inwonder.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-light transition-colors duration-200"
            >
              <span className="font-medium">Fabricated</span>
              <span className="text-warm-400 ml-1.5">A hands-on hardware build series powered by Claude Code</span>
              <span className="ml-1.5 text-accent">&#x2197;</span>
            </a>
            <button
              onClick={dismiss}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-warm-500 hover:text-warm-200 transition-colors p-1 cursor-pointer"
              aria-label="Dismiss"
            >
              &#x2715;
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
