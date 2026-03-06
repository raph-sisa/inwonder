import { motion } from 'framer-motion'
import type { CaseStudy } from '../data/caseStudies'

interface Props {
  studies: CaseStudy[]
  onSelect: (id: string) => void
}

export function CaseStudyGrid({ studies, onSelect }: Props) {
  return (
    <section id="work" className="px-6 sm:px-12 py-16 max-w-5xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-sm text-accent mb-8"
      >
        Selected Work
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {studies.map((study, i) => (
          <motion.button
            key={study.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            onClick={() => study.available && onSelect(study.id)}
            className={`text-left rounded-xl overflow-hidden border border-warm-200 bg-white shadow-sm transition-shadow ${
              study.available
                ? 'hover:shadow-md cursor-pointer'
                : 'opacity-75 cursor-default'
            }`}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={study.thumbnail}
                alt={study.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex flex-wrap gap-2 mb-3">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-0.5 rounded-full bg-warm-100 text-warm-500"
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
              {!study.available && (
                <p className="text-xs font-mono text-warm-400 mt-3">
                  Coming soon
                </p>
              )}
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  )
}
