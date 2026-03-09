import { motion } from 'framer-motion'
import { TextReveal, Reveal } from './TextReveal'

export function Contact() {
  return (
    <section
      id="contact"
      className="px-6 sm:px-12 py-24 max-w-5xl mx-auto border-t border-warm-700/30"
    >
      <div className="max-w-2xl">
        <TextReveal
          as="h2"
          className="font-display font-bold text-5xl sm:text-7xl text-warm-100 mb-6 tracking-tight"
          accent={['talk']}
        >
          Let's talk
        </TextReveal>

        <Reveal delay={0.1}>
          <p className="text-warm-400 leading-relaxed mb-6">
            I'm a product designer looking for my next role — in-person or hybrid
            in Southern California. I'm strongest when I can work across research,
            design, and code.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-col sm:flex-row gap-4 font-mono text-sm">
            <motion.a
              href="https://www.linkedin.com/in/raphaelsisa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-400 hover:text-accent-light transition-colors duration-300"
              whileHover={{ x: 3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              LinkedIn &#x2197;
            </motion.a>
            <motion.a
              href="https://github.com/raph-sisa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-400 hover:text-accent-light transition-colors duration-300"
              whileHover={{ x: 3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              GitHub &#x2197;
            </motion.a>
            <motion.a
              href="mailto:raph@inwonder.xyz"
              className="text-warm-400 hover:text-accent-light transition-colors duration-300"
              whileHover={{ x: 3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              raph@inwonder.xyz
            </motion.a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <div className="mt-16 pt-6 border-t border-warm-700/30">
          <p className="font-mono text-xs text-warm-500">
            Built with React, Tailwind, and curiosity. &copy; {new Date().getFullYear()} Raphael Sisa.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
