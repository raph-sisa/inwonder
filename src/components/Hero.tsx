import { motion } from 'framer-motion'
import { MorphingLine } from './illustrations/MorphingLine'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 sm:px-12 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full">
        {/* Text */}
        <div className="max-w-2xl flex-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-sm text-accent mb-6"
          >
            * In Wonder
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-6xl sm:text-8xl text-warm-900 leading-[1.0] mb-4 tracking-tight"
          >
            Raphael{' '}
            <span className="block">Sisa</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="font-mono text-sm text-warm-400 mb-8"
          >
            Product Designer &amp; Design Leader — 10+ years
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg text-warm-500 leading-relaxed mb-12 max-w-xl font-light"
          >
            I like making things, and I tend to gather people to learn alongside
            me. Over the last decade, that curiosity has taken me across design,
            product, and research — from consumer apps and live events to
            enterprise platforms and immersive physical experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex gap-8 text-sm font-mono"
          >
            <motion.a
              href="#work"
              className="text-warm-400 hover:text-accent transition-colors"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              See work &#x2193;
            </motion.a>
            <motion.a
              href="#contact"
              className="text-warm-400 hover:text-accent transition-colors"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Get in touch
            </motion.a>
          </motion.div>
        </div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 shrink-0"
        >
          <MorphingLine className="w-full h-full text-accent/70" />
        </motion.div>
      </div>
    </section>
  )
}
