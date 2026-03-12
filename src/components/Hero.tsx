import { motion } from 'framer-motion'
import { MemojiHead } from './MemojiHead'

export function Hero() {
  return (
    <section className="h-[calc(100vh-theme(spacing.14)-theme(spacing.10))] flex flex-col justify-between px-6 sm:px-12 max-w-6xl mx-auto">
      {/* Main content — vertically centered, two columns */}
      <div className="flex-1 flex items-center">
        <div className="flex items-center justify-between w-full gap-12">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <h1 className="font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.08] tracking-tight text-warm-900 mb-6">
              Raphael Sisa
            </h1>
            <p className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.2] tracking-tight text-warm-500 font-light">
              &ldquo;I like making things and I tend to gather people to learn alongside me&rdquo;
            </p>
          </motion.div>

          {/* Right — memoji with depth displacement */}
          <div className="hidden md:block shrink-0">
            <MemojiHead className="w-80 lg:w-96" />
          </div>
        </div>
      </div>

      {/* Contact row — pinned to bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-6 pb-8 font-mono text-sm"
      >
        <a
          href="mailto:raph@inwonder.xyz"
          className="text-warm-400 hover:text-accent transition-colors"
        >
          raph@inwonder.xyz
        </a>
        <span className="text-warm-300">&middot;</span>
        <a
          href="https://www.linkedin.com/in/raphaelsisa/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-warm-400 hover:text-accent transition-colors"
        >
          LinkedIn &#x2197;
        </a>
        <span className="text-warm-300">&middot;</span>
        <a
          href="https://github.com/raph-sisa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-warm-400 hover:text-accent transition-colors"
        >
          GitHub &#x2197;
        </a>
      </motion.div>
    </section>
  )
}
