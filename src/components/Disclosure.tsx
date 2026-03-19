import { useState, useId } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

interface DisclosureProps {
  label: string
  count?: number
  children: React.ReactNode
}

export function Disclosure({ label, count, children }: DisclosureProps) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="border border-warm-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center gap-3 px-5 py-3.5 text-left hover:bg-warm-50 transition-colors duration-150"
      >
        <motion.span
          aria-hidden="true"
          className="text-accent text-xs"
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
        >
          ▸
        </motion.span>
        <span className="text-sm font-semibold text-warm-800 flex-grow">
          {label}
        </span>
        {count !== undefined && (
          <span className="text-xs text-warm-500" aria-label={`${count} items`}>
            {count}
          </span>
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-label={label}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <motion.div
              className="px-5 pb-5 pt-1"
              initial={{ y: 6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
