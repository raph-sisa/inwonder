import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.5 },
}

export function Contact() {
  return (
    <section id="contact" className="px-6 sm:px-12 py-16 max-w-5xl mx-auto border-t border-warm-200">
      <motion.div {...fadeIn} className="max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-warm-900 mb-4">
          Let's talk
        </h2>
        <p className="text-warm-600 leading-relaxed mb-6">
          I'm looking for my next role — in-person or hybrid in Southern California.
          Product management, design leadership, design technology, or something that
          values the full stack.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 font-mono text-sm">
          <a
            href="https://www.linkedin.com/in/raphaelsisa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-500 hover:text-accent transition-colors"
          >
            LinkedIn &#x2197;
          </a>
          <a
            href="https://github.com/raph-sisa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-500 hover:text-accent transition-colors"
          >
            GitHub &#x2197;
          </a>
          <a
            href="mailto:hello@inwonder.xyz"
            className="text-warm-500 hover:text-accent transition-colors"
          >
            hello@inwonder.xyz
          </a>
        </div>
      </motion.div>
      <div className="mt-16 pt-6 border-t border-warm-100">
        <p className="font-mono text-xs text-warm-300">
          Built with React, Tailwind, and curiosity. &copy; {new Date().getFullYear()} Raphael Sisa.
        </p>
      </div>
    </section>
  )
}
