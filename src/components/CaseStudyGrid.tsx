import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'
import { Reveal } from './TextReveal'

export function CaseStudyGrid() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="work" aria-label="Featured Work" className="px-6 lg:px-20 py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">
              Featured Work
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-warm-500 text-base sm:text-lg leading-relaxed max-w-3xl mt-4">
              Enterprise platforms, AI-enabled workflows, and physical-digital experiments.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => {
            const cardTitle = study.cardTitle ?? study.title
            const card = (
              <Reveal key={study.id} delay={i * 0.08}>
                <div className={`group block cursor-pointer ${i % 3 === 1 ? 'lg:mt-12' : ''}`}>
                  {/* Card image — CSS hover for hardware acceleration, clip-path reveal */}
                  <motion.div
                    className="overflow-hidden rounded-xl aspect-[4/3] sm:aspect-[4/5] relative mb-6 bg-accent-warm border border-primary/10"
                    initial={shouldReduceMotion ? { opacity: 0 } : { clipPath: 'inset(0 0 8% 0)', opacity: 0 }}
                    whileInView={shouldReduceMotion ? { opacity: 1 } : { clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: i * 0.05 }}
                  >
                    <img
                      src={study.thumbnail}
                      alt={`${cardTitle} — ${study.byline}`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
                      loading={i < 3 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-warm-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 sm:p-8" aria-hidden="true">
                      <span className="text-white font-medium flex items-center gap-2">
                        {study.passwordProtected
                          ? 'Request Access'
                          : study.externalUrl
                            ? 'Visit Project'
                            : 'View Case Study'}{' '}
                        &#x2197;
                      </span>
                    </div>
                  </motion.div>

                  {/* Card text */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-warm-900">
                    {cardTitle}
                  </h3>
                  <p className="text-warm-500 text-sm sm:text-base">{study.byline}</p>
                </div>
              </Reveal>
            )

            if (study.externalUrl) {
              return (
                <a
                  key={study.id}
                  href={study.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${cardTitle} (opens in new tab)`}
                >
                  {card}
                </a>
              )
            }

            return (
              <Link key={study.id} to={`/work/${study.id}`}>
                {card}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
