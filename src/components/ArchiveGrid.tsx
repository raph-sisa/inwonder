import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'

export function ArchiveGrid() {
  const workStudies = caseStudies.filter((s) => s.category === 'work')
  const curiosities = caseStudies.filter((s) => (s.category as string) === 'curiosity')

  return (
    <section className="py-24 max-w-6xl mx-auto px-6 sm:px-12 font-mono">
      {/* Work Section */}
      <div className="mb-32">
        <h2 className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-12 flex items-center gap-6">
          [01] Enterprise Artifacts
          <span className="flex-1 h-[1px] bg-neutral-100" />
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {workStudies.map((study) => (
            <Link key={study.id} to={`/work/${study.id}`} className="group block border-t border-black pt-6">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] text-neutral-400">ID: {study.id.toUpperCase()}</span>
                <span className="text-[10px] font-bold text-neutral-900 group-hover:text-black transition-colors">v.2026</span>
              </div>
              <h3 className="text-lg font-bold mb-4 uppercase group-hover:bg-black group-hover:text-white inline-block px-1 -ml-1 transition-all">
                {study.title}
              </h3>
              <p className="text-xs text-neutral-500 mb-8 leading-relaxed">
                {study.teaser || study.byline}
              </p>
              
              <div className="aspect-video bg-neutral-50 border border-neutral-100 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                {study.illustration && (
                  <study.illustration className="w-full h-full opacity-70 group-hover:opacity-100" />
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Curiosities / Research Section */}
      <div>
        <h2 className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-12 flex items-center gap-6">
          [02] Research &amp; Experiments
          <span className="flex-1 h-[1px] bg-neutral-100" />
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
          {curiosities.map((item) => (
            <Link key={item.id} to={`/work/${item.id}`} className="group flex justify-between items-baseline border-b border-neutral-100 pb-4">
              <div className="flex gap-4 items-baseline">
                 <span className="text-[10px] text-neutral-300">01</span>
                 <h4 className="text-sm font-bold uppercase group-hover:underline underline-offset-4">{item.title}</h4>
              </div>
              <span className="text-[10px] text-neutral-400 group-hover:text-black">&rarr; View Record</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
