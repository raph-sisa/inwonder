import { motion } from 'framer-motion'
import { TextReveal } from './TextReveal'

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 sm:px-12 max-w-6xl mx-auto">
      <div className="w-full">
        <div className="max-w-2xl">
          <TextReveal
            as="h1"
            className="font-display font-bold text-7xl sm:text-9xl text-warm-900 leading-[0.95] mb-4 tracking-tight"
            stagger={0.08}
            delay={0.1}
          >
            Raphael Sisa
          </TextReveal>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: EASE_OUT }}
            className="font-mono text-sm text-warm-400 mb-8"
          >
            Product Designer &amp; Design Leader — 10+ years
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: EASE_OUT }}
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
            transition={{ duration: 0.7, delay: 0.6, ease: EASE_OUT }}
            className="flex gap-8 text-sm font-mono"
          >
            <motion.a
              href="#work"
              className="text-warm-400 hover:text-accent transition-colors duration-300"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              See work &#x2193;
            </motion.a>
            <motion.a
              href="#contact"
              className="text-warm-400 hover:text-accent transition-colors duration-300"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              Get in touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
