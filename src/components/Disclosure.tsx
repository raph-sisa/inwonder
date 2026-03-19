import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface DisclosureProps {
  label: string
  count?: number
  children: React.ReactNode
}

export function Disclosure({ label, count, children }: DisclosureProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-warm-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-5 py-3.5 text-left hover:bg-warm-50 transition-colors"
      >
        <span
          className="text-accent text-xs transition-transform duration-200"
          style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
        >
          ▸
        </span>
        <span className="text-sm font-semibold text-warm-800 flex-grow">
          {label}
        </span>
        {count !== undefined && (
          <span className="text-xs text-warm-400">{count}</span>
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
