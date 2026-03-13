import { motion } from 'framer-motion'
import { MemojiHead } from './MemojiHead'

interface HeroProps {
  scrollY?: number
}

export function Hero({ scrollY = 0 }: HeroProps) {
  const textOffset = scrollY * -0.35
  const textOpacity = Math.max(0, 1 - scrollY / 600)
  const memojiOpacity = Math.max(0, 1 - scrollY / 400)

  return (
    <section className="h-full flex flex-col justify-between px-6 sm:px-12 max-w-6xl mx-auto">
      {/* Main content — vertically centered, two columns */}
      <div className="flex-1 flex items-center">
        <div className="flex items-center justify-between w-full gap-12">
          {/* Left — text with parallax */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
            style={{
              transform: `translateY(${textOffset}px)`,
              opacity: textOpacity,
              willChange: 'transform, opacity',
            }}
          >
            {/* Mobile memoji — static PNG above name */}
            <motion.div
              className="md:hidden mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="/images/memoji.png"
                alt="Raphael Sisa memoji"
                className="w-24 h-24 object-contain"
              />
            </motion.div>

            <h1 className="font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.08] tracking-tight text-warm-900 mb-6">
              Raphael Sisa
            </h1>
            <p className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.2] tracking-tight text-warm-500 font-light">
              I build, not just design. I turn enterprise complexity into software people actually want to use. I also tend to gather people to learn alongside me.
            </p>
            <span className="inline-block mt-4 font-mono text-sm text-warm-400">
              Based in LA &middot; Open to founding-stage roles
            </span>

            {/* CTA */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-mono text-white bg-accent hover:bg-accent-light rounded-lg transition-colors"
              >
                View my work &darr;
              </a>
            </motion.div>
          </motion.div>

          {/* Right — 3D memoji on desktop, fades out on scroll */}
          <div
            className="hidden md:block shrink-0"
            style={{ opacity: memojiOpacity }}
          >
            <MemojiHead className="w-80 lg:w-96" />
          </div>
        </div>
      </div>
    </section>
  )
}
