import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm text-amber-400 mb-4"
        >
          In Wonder
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-100 leading-tight mb-6"
        >
          Raphael Sisa
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-stone-400 leading-relaxed max-w-2xl mb-8"
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
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex gap-6 text-sm font-mono"
        >
          <a href="#work" className="text-stone-300 hover:text-amber-400 transition-colors">
            See work &#x2193;
          </a>
          <a href="#contact" className="text-stone-300 hover:text-amber-400 transition-colors">
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
