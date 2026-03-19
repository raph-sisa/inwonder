import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'

export function BuilderCaseStudyGrid() {
  const workStudies = caseStudies.filter((s) => s.category === 'work')
  const curiosities = caseStudies.filter((s) => (s.category as string) === 'curiosity')

  return (
    <section id="work" className="py-24 bg-warm-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-baseline gap-4 border-b border-warm-200 pb-8">
          <h2 className="font-display text-4xl text-warm-900">Work &amp; Artifacts</h2>
          <p className="font-mono text-xs text-warm-400 uppercase tracking-widest">
            A selection of technical records and process notes
          </p>
        </div>

        {/* Asymmetric Grid for Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-12">
          {workStudies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`${i % 2 === 1 ? 'md:mt-24' : ''}`}
            >
              <Link to={`/work/${study.id}`} className="group block">
                {/* Image/Illustration Container as an "Artifact Box" */}
                <div className="relative aspect-[4/3] bg-warm-100 border border-warm-200 overflow-hidden mb-6">
                  {/* Label tag */}
                  <div className="absolute top-4 left-4 z-10 font-mono text-[10px] bg-warm-50 border border-warm-200 px-2 py-0.5 text-warm-400">
                    {`ID: ${study.id.toUpperCase()}`}
                  </div>
                  
                  {study.illustration && (
                    <div className="w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out">
                      <study.illustration className="w-full h-full" />
                    </div>
                  )}
                  
                  {/* Shadow/Overlay */}
                  <div className="absolute inset-0 bg-warm-900/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Metadata */}
                <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
                  {study.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] uppercase tracking-tighter text-warm-400">
                      [{tag}]
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-3xl text-warm-900 mb-3 group-hover:text-accent transition-colors duration-300">
                  {study.title}
                </h3>
                
                <p className="font-sans text-sm text-warm-500 leading-relaxed max-w-md">
                  {study.byline}
                </p>

                <div className="mt-6 font-mono text-xs text-warm-300 flex items-center gap-2 group-hover:text-warm-600 transition-colors">
                  <span>Open Record</span>
                  <span className="w-8 h-[1px] bg-warm-200 group-hover:w-12 group-hover:bg-warm-400 transition-all" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Curiosities / Minor Works */}
        <div className="mt-48">
          <div className="mb-16">
            <h2 className="font-display text-3xl text-warm-900 mb-2">Curiosities</h2>
            <p className="font-mono text-[10px] text-warm-400 uppercase tracking-widest">
              Experiments, side-projects, and technical explorations
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {curiosities.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 border border-warm-200 bg-white/30 hover:bg-white hover:shadow-xl hover:shadow-warm-200/50 transition-all group"
              >
                <div className="font-mono text-[9px] text-accent mb-4">#{item.id}</div>
                <h4 className="font-display text-xl text-warm-900 mb-2">{item.title}</h4>
                <p className="text-xs text-warm-500 mb-6 leading-relaxed">
                  {item.byline}
                </p>
                
                {item.externalUrl ? (
                  <a href={item.externalUrl} target="_blank" rel="noreferrer" className="font-mono text-[10px] uppercase text-warm-400 hover:text-accent flex items-center gap-1">
                    Visit Project &#x2197;
                  </a>
                ) : (
                  <Link to={`/work/${item.id}`} className="font-mono text-[10px] uppercase text-warm-400 hover:text-accent">
                    View Case Study
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
