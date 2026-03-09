import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'
import { TextReveal, Reveal } from './TextReveal'
import type { CaseStudy } from '../data/caseStudies'

const curiosities = caseStudies.filter((s) => s.category === 'curiosity')

function CardMedia({ item }: { item: CaseStudy }) {
  if (item.illustration) {
    const Illustration = item.illustration
    return (
      <div className="aspect-[4/3] overflow-hidden flex items-center justify-center">
        <Illustration className="w-full h-full" />
      </div>
    )
  }
  return (
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  )
}

export function Curiosities() {
  return (
    <section id="curiosities" className="px-6 sm:px-12 py-24 max-w-5xl mx-auto">
      <Reveal>
        <p className="font-mono text-sm text-accent-light mb-3">
          Experiments &amp; explorations
        </p>
      </Reveal>

      <TextReveal
        as="h2"
        className="font-display font-bold text-5xl sm:text-7xl text-warm-100 mb-6 tracking-tight"
        delay={0.05}
      >
        Curiosities
      </TextReveal>

      <Reveal delay={0.1}>
        <p className="text-warm-400 leading-relaxed mb-12 max-w-xl">
          Things I've made for the joy of making them — experiments, workshops,
          and projects born from following a thread.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {curiosities.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.1}>
            {item.externalUrl ? (
              <a
                href={item.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl overflow-hidden border border-warm-700/40 bg-warm-800/50 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:border-accent/30"
              >
                <CardMedia item={item} />
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1 rounded-full bg-warm-700/30 text-warm-400 transition-colors duration-300 group-hover:bg-accent/15 group-hover:text-accent-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-warm-100 mb-1">
                    {item.title}
                    <span className="inline-block ml-1.5 text-warm-500 text-sm group-hover:text-accent-light transition-colors duration-300">&#x2197;</span>
                  </h3>
                  <p className="text-sm text-warm-400 leading-relaxed">
                    {item.byline}
                  </p>
                </div>
              </a>
            ) : (
            <Link
              to={`/work/${item.id}`}
              className="group block rounded-2xl overflow-hidden border border-warm-700/40 bg-warm-800/50 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:border-accent/30"
            >
              <CardMedia item={item} />
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-full bg-warm-700/30 text-warm-400 transition-colors duration-300 group-hover:bg-accent/15 group-hover:text-accent-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-warm-100 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-warm-400 leading-relaxed">
                  {item.byline}
                </p>
              </div>
            </Link>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
