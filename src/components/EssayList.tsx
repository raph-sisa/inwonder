import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'

export function EssayList() {
  const workStudies = caseStudies.filter((s) => s.category === 'work')

  return (
    <section className="py-24 max-w-3xl mx-auto px-6 sm:px-12">
      <div className="flex flex-col gap-32">
        {workStudies.map((study) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to={`/work/${study.id}`} className="group">
              <div className="mb-12 aspect-[16/10] bg-neutral-50 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out">
                {study.illustration && (
                  <study.illustration className="w-full h-full opacity-80 group-hover:opacity-100" />
                )}
              </div>
              
              <div className="max-w-2xl mx-auto">
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-6">
                  {study.tags.join(' / ')}
                </p>
                <h3 className="font-display text-4xl text-black mb-6 group-hover:underline underline-offset-8 decoration-neutral-100 transition-all">
                  {study.title}
                </h3>
                <p className="font-sans text-lg text-neutral-600 leading-relaxed mb-8">
                  {study.teaser || study.byline}
                </p>
                <span className="font-sans text-sm font-medium text-black border-b border-black pb-1 hover:text-neutral-500 transition-colors">
                  Continue reading
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
