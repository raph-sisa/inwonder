import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
}

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:py-32 border-t border-stone-800">
      <div className="max-w-3xl mx-auto">
        <motion.div {...fadeIn}>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-100 mb-6">
            Let's talk
          </h2>
          <p className="text-lg text-stone-400 leading-relaxed mb-8">
            I'm looking for my next role — in-person or hybrid in Southern California.
            Product management, design leadership, design technology, or something that
            values the full stack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 font-mono text-sm">
            <a
              href="https://www.linkedin.com/in/raphaelsisa/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-stone-300 hover:text-amber-400 transition-colors"
            >
              LinkedIn &#x2197;
            </a>
            <a
              href="https://github.com/raph-sisa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-stone-300 hover:text-amber-400 transition-colors"
            >
              GitHub &#x2197;
            </a>
            <a
              href="mailto:hello@inwonder.xyz"
              className="inline-flex items-center gap-2 text-stone-300 hover:text-amber-400 transition-colors"
            >
              hello@inwonder.xyz
            </a>
          </div>
        </motion.div>
        <div className="mt-24 pt-8 border-t border-stone-900">
          <p className="font-mono text-xs text-stone-700">
            Built with React, Tailwind, and curiosity. &copy; {new Date().getFullYear()} Raphael Sisa.
          </p>
        </div>
      </div>
    </section>
  )
}
