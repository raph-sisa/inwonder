import { motion } from 'framer-motion'
import { Reveal } from './TextReveal'

const interests = [
  {
    label: 'AI Adoption Research',
    description:
      'Running community pilots to understand how teams actually adopt AI tools — not the hype, but the real behavioral shifts.',
  },
  {
    label: 'Fabricated',
    description:
      'A hands-on hardware build series powered by Claude Code. Making physical things with AI as a creative partner.',
    link: 'https://fabricated.inwonder.xyz',
  },
  {
    label: 'Design + Engineering',
    description:
      'Closing the gap between design intent and shipped product. Building tools and workflows that treat both as one craft.',
  },
]

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function CurrentInterests() {
  return (
    <section className="px-6 sm:px-12 py-32 max-w-5xl mx-auto">
      <Reveal>
        <p className="font-mono text-sm text-accent mb-3">Right now</p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="font-display font-bold text-4xl sm:text-6xl text-warm-900 mb-6 tracking-tight leading-[1.1]">
          Currently exploring
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="text-lg text-warm-500 font-light max-w-2xl mb-16 leading-relaxed">
          Over the last decade, my curiosity has taken me across design, product, and research —
          from consumer apps and live events to enterprise platforms and immersive physical experiences.
          Here's what I'm into right now.
        </p>
      </Reveal>

      <div className="grid gap-8 sm:grid-cols-3">
        {interests.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: EASE_OUT }}
            className="group"
          >
            <h3 className="font-sans text-lg font-medium text-warm-800 mb-2">
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {item.label}
                  <span className="ml-1.5 text-accent text-sm">&#x2197;</span>
                </a>
              ) : (
                item.label
              )}
            </h3>
            <p className="text-warm-500 text-sm leading-relaxed font-light">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
