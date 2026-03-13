import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'
import { Reveal } from './TextReveal'

const workStudies = caseStudies.filter((s) => s.category === 'work')

export function CaseStudyGrid() {
  return (
    <section id="work" className="py-24"><div className="max-w-6xl mx-auto px-6 sm:px-12">
      <Reveal>
        <p className="font-mono text-sm text-warm-400 mb-2">
          Previously at AEG Presents &middot; AT&amp;T &middot; Fabernovel
        </p>
        <p className="font-mono text-sm text-accent mb-3">
          Case studies &amp; client work
        </p>
      </Reveal>


      {/* Horizontal scroll container */}
      <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6 sm:-mx-12 sm:px-12 scrollbar-hide">
        {workStudies.map((study, i) => (
          <Reveal key={study.id} delay={i * 0.1}>
            <Link
              to={`/work/${study.id}`}
              className="group block w-[280px] sm:w-[320px] shrink-0 rounded-2xl border border-warm-200/60 bg-white/50 hover:bg-white hover:border-accent/25 hover:shadow-md transition-all duration-400 overflow-hidden snap-start"
            >
              {/* Illustration */}
              <div className="relative w-full aspect-[4/3] overflow-hidden border-b border-warm-200/40">
                {study.illustration && (
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <study.illustration className="w-full h-full" />
                  </motion.div>
                )}
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-5">
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

                <h3 className="font-display text-xl text-warm-900 mb-1.5 tracking-tight">
                  {study.title}
                </h3>

                <p className="text-sm text-warm-500 leading-relaxed">
                  {study.byline}
                </p>

                <div className="mt-3">
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
            </Link>
          </Reveal>
        ))}
      </div>
    </div></section>
  )
}
