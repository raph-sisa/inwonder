import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center px-6 sm:px-12 max-w-5xl mx-auto">
      <div className="max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-accent mb-4"
        >
          In Wonder
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-warm-900 leading-tight mb-6"
        >
          Raphael Sisa
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-warm-600 leading-relaxed mb-8"
        >
          Most product people spec it. Some design it. A few ship it.
          I do all three — building across research, design, and code to
          take ideas from whiteboard to production. Enterprise platforms
          that handle $1B+ in touring revenue. AI pipelines that
          scaled supplier acquisition 5x. Immersive city experiences
          built with 3D printers and speculative fiction.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-6 text-sm font-mono"
        >
          <a href="#work" className="text-warm-500 hover:text-accent transition-colors">
            See work &#x2193;
          </a>
          <a href="#contact" className="text-warm-500 hover:text-accent transition-colors">
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
