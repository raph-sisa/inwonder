import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'

const curiosities = caseStudies.filter((s) => s.category === 'curiosity')

export function Curiosities() {
  return (
    <section id="curiosities" className="px-6 sm:px-12 py-24 max-w-5xl mx-auto border-t border-warm-200/60">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-sm text-accent mb-3"
      >
        Experiments &amp; explorations
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="font-display font-bold text-3xl sm:text-5xl text-warm-900 mb-6 tracking-tight"
      >
        Curiosities
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-warm-500 leading-relaxed mb-12 max-w-xl"
      >
        Things I've made for the joy of making them — experiments, workshops,
        and projects born from following a thread.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {curiosities.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              to={`/work/${item.id}`}
              className="group block rounded-2xl overflow-hidden border border-warm-200/80 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-full bg-warm-100 text-warm-500 transition-colors duration-300 group-hover:bg-accent/10 group-hover:text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-warm-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-warm-500 leading-relaxed">
                  {item.byline}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
