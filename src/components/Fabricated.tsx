import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
}

export function Fabricated() {
  return (
    <section className="px-6 py-24 sm:py-32 border-t border-stone-800">
      <div className="max-w-3xl mx-auto">
        <motion.div {...fadeIn}>
          <p className="font-mono text-sm text-amber-400 mb-3">Coming Soon</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-100 mb-4">
            Fabricated
          </h2>
          <p className="text-lg text-stone-400 leading-relaxed mb-6">
            A workshop and hackathon exploring what happens when Claude Code meets
            hardware — physical computing, rapid prototyping, and building things
            you can hold in your hands.
          </p>
          <p className="text-stone-500 leading-relaxed">
            Fabricated brings together developers, designers, and makers to build
            AI-assisted physical projects in a single session. Currently in development.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
