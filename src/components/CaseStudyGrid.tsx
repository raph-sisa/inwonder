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
        className="font-display font-bold text-5xl sm:text-7xl text-warm-900 mb-14 tracking-tight"
        accent={['Work']}
        stagger={0.06}
      >
        Selected Work
      </TextReveal>

      <div className="space-y-3">
        {workStudies.map((study, i) => (
          <Reveal key={study.id} delay={i * 0.08}>
            <Link
              to={`/work/${study.id}`}
              className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-5 rounded-xl border border-warm-200/60 bg-white/50 hover:bg-white hover:border-accent/20 hover:shadow-sm transition-all duration-300"
            >
              {/* Generative illustration */}
              <div className="w-full sm:w-28 h-20 sm:h-16 rounded-lg shrink-0 overflow-hidden border border-warm-200/40">
                {study.illustration && <study.illustration className="w-full h-full" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap gap-2 mb-1.5">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-warm-400 transition-colors group-hover:text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-base font-semibold text-warm-900 mb-0.5">
                  {study.title}
                </h3>
                <p className="text-sm text-warm-500 leading-relaxed">
                  {study.byline}
                </p>
              </div>
              {study.passwordProtected && (
                <motion.span
                  className="font-mono text-xs text-warm-300 shrink-0 group-hover:text-accent transition-colors duration-300"
                  whileHover={{ x: 2 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  &#x1F512; Request access
                </motion.span>
              )}
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
