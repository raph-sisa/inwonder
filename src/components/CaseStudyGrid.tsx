import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'
import { TextReveal, Reveal } from './TextReveal'

const workStudies = caseStudies.filter((s) => s.category === 'work')

export function CaseStudyGrid() {
  return (
    <section id="work" className="px-6 sm:px-12 py-24 max-w-5xl mx-auto">
      <Reveal>
        <p className="font-mono text-sm text-accent mb-3">
          Case studies &amp; client work
        </p>
      </Reveal>

      <TextReveal
        as="h2"
        className="font-display font-bold text-5xl sm:text-7xl text-warm-900 mb-16 tracking-tight"
        accent={['Work']}
        stagger={0.06}
      >
        Selected Work
      </TextReveal>

      <div className="space-y-8">
        {workStudies.map((study, i) => (
          <Reveal key={study.id} delay={i * 0.1}>
            <Link
              to={`/work/${study.id}`}
              className="group block rounded-2xl border border-warm-200/60 bg-white/50 hover:bg-white hover:border-accent/25 hover:shadow-md transition-all duration-400 overflow-hidden"
            >
              {/* Illustration — large hero area */}
              <div className="relative w-full aspect-[16/7] overflow-hidden border-b border-warm-200/40">
                {study.illustration && (
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <study.illustration className="w-full h-full" />
                  </motion.div>
                )}
                {/* Subtle gradient overlay at bottom for depth */}
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
              </div>

              {/* Content area */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono text-warm-400 group-hover:text-warm-500 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl sm:text-3xl text-warm-900 mb-2 tracking-tight">
                      {study.title}
                    </h3>

                    {/* Byline */}
                    <p className="text-base text-warm-500 leading-relaxed mb-0">
                      {study.byline}
                    </p>

                    {/* Teaser — reveals on hover */}
                    {study.teaser && (
                      <p className="text-sm text-warm-400 leading-relaxed mt-3 max-w-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                        {study.teaser}
                      </p>
                    )}
                  </div>

                  {/* CTA area */}
                  <div className="shrink-0 sm:mt-1">
                    {study.passwordProtected ? (
                      <span className="inline-flex items-center gap-2 font-mono text-xs text-warm-300 group-hover:text-accent transition-colors duration-300">
                        <span className="w-5 h-5 rounded-full border border-warm-200 group-hover:border-accent/40 flex items-center justify-center transition-colors duration-300">
                          <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="text-current">
                            <path d="M4 7V5a4 4 0 1 1 8 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                        </span>
                        Request access
                      </span>
                    ) : (
                      <span className="font-mono text-xs text-warm-400 group-hover:text-accent transition-colors duration-300">
                        View &rarr;
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
