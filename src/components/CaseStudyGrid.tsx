import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'

const publicStudies = caseStudies.filter((s) => !s.passwordProtected)
const lockedStudies = caseStudies.filter((s) => s.passwordProtected)

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

      {/* Public studies — full cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {publicStudies.map((study, i) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              to={`/work/${study.id}`}
              className="group block text-left rounded-2xl overflow-hidden border border-warm-200/80 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={study.thumbnail}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-full bg-warm-100 text-warm-500 transition-colors duration-300 group-hover:bg-accent/10 group-hover:text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-warm-900 mb-1">
                  {study.title}
                </h3>
                <p className="text-sm text-warm-500 leading-relaxed">
                  {study.byline}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Locked studies — compact list */}
      {lockedStudies.length > 0 && (
        <div>
          <p className="font-mono text-xs text-warm-400 mb-4">
            Additional work — password protected
          </p>
          <div className="space-y-3">
            {lockedStudies.map((study, i) => (
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
                  <span className="font-mono text-xs text-warm-300 shrink-0 group-hover:text-accent transition-colors">
                    &#x1F512; Request access
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
