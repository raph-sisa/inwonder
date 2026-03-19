import { motion } from 'framer-motion'
import { MemojiHead } from './MemojiHead'
import { asset } from '../utils/assets'

interface HeroProps {
  scrollY?: number
}

export function Hero({ scrollY = 0 }: HeroProps) {
  const textOffset = scrollY * -0.35
  const textOpacity = Math.max(0, 1 - scrollY / 600)
  const memojiOpacity = Math.max(0, 1 - scrollY / 400)

  return (
    <section className="h-full flex flex-col justify-center px-6 lg:px-20 pt-16 md:pt-24 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-8 md:gap-12">
        {/* Left — text with parallax */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
          style={{
            transform: `translateY(${textOffset}px)`,
            opacity: textOpacity,
            willChange: 'transform, opacity',
          }}
        >
          {/* Mobile memoji */}
          <motion.div
            className="md:hidden mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={asset('/images/memoji.png')}
              alt="Raphael Sisa memoji"
              className="w-24 h-24 object-contain"
              loading="lazy"
            />
          </motion.div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8 italic">
            Design, code,{' '}
            <span className="text-primary">and the space</span>{' '}
            between.
          </h1>

          <p className="text-lg sm:text-xl text-warm-500 max-w-xl leading-relaxed">
            Design technologist and builder with a background spanning product design, research, and strategy. I make complex systems feel simple — and gather people to learn alongside me.
          </p>

          <span className="inline-block mt-4 text-sm text-warm-500">
            Raphael Sisa &middot; Based in LA &middot; Open to founding-stage roles
          </span>

        </motion.div>

        {/* Right — 3D memoji on desktop */}
        <div
          className="hidden md:block shrink-0"
          style={{ opacity: memojiOpacity }}
          aria-hidden="true"
        >
          <MemojiHead className="w-80 lg:w-96" />
        </div>
      </div>
    </section>
  )
}
