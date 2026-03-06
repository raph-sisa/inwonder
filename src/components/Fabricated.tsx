import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.5 },
}

export function Fabricated() {
  return (
    <section className="px-6 sm:px-12 py-16 max-w-5xl mx-auto border-t border-warm-200">
      <motion.div {...fadeIn} className="max-w-2xl">
        <p className="font-mono text-sm text-accent mb-3">Coming Soon</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-warm-900 mb-4">
          Fabricated
        </h2>
        <p className="text-warm-600 leading-relaxed mb-4">
          A workshop and hackathon exploring what happens when Claude Code meets
          hardware — physical computing, rapid prototyping, and building things
          you can hold in your hands.
        </p>
        <p className="text-warm-400 leading-relaxed text-sm">
          Currently in development.
        </p>
      </motion.div>
    </section>
  )
}
