import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'

const workStudies = caseStudies.filter((s) => s.category === 'work')

export function CaseStudyGrid() {
  return (
    <section id="work" className="px-6 sm:px-12 py-24 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display font-bold text-3xl sm:text-5xl text-warm-900 mb-14 tracking-tight"
      >
        Selected Work
      </motion.h2>

      <div className="space-y-3">
        {workStudies.map((study, i) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Link
              to={`/work/${study.id}`}
              className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-5 rounded-xl border border-warm-200/60 bg-white/50 hover:bg-white hover:border-accent/20 hover:shadow-sm transition-all duration-300"
            >
              {/* Color placeholder */}
              <div
                className="w-full sm:w-20 h-20 sm:h-14 rounded-lg shrink-0"
                style={{
                  background: study.id === 'aeg'
                    ? 'linear-gradient(135deg, #2c2420 0%, #433a32 100%)'
                    : 'linear-gradient(135deg, #c2703e 0%, #d4915f 100%)',
                }}
              />
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
                <span className="font-mono text-xs text-warm-300 shrink-0 group-hover:text-accent transition-colors">
                  &#x1F512; Request access
                </span>
              )}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
