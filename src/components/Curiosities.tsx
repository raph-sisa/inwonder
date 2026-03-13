import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'
import { TextReveal, Reveal } from './TextReveal'
import type { CaseStudy } from '../data/caseStudies'

const curiosities = caseStudies.filter((s) => s.category === 'curiosity')

function CardMedia({ item }: { item: CaseStudy }) {
  if (item.illustration) {
    const Illustration = item.illustration
    return (
      <div className="aspect-[4/3] overflow-hidden flex items-center justify-center border-b border-warm-200/40">
        <Illustration className="w-full h-full" />
      </div>
    )
  }
  return (
    <div className="aspect-[4/3] overflow-hidden border-b border-warm-200/40">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  )
}

function CardContent({ item }: { item: CaseStudy }) {
  return (
    <>
      <CardMedia item={item} />
      <div className="p-5">
        <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono text-warm-400 group-hover:text-warm-500 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-display text-xl text-warm-900 mb-1.5 tracking-tight">
          {item.title}
          {item.externalUrl && (
            <span className="inline-block ml-1.5 text-warm-500 text-sm group-hover:text-accent transition-colors duration-300">&#x2197;</span>
          )}
        </h3>
        <p className="text-sm text-warm-500 leading-relaxed">
          {item.byline}
        </p>
      </div>
    </>
  )
}

export function Curiosities() {
  return (
    <section id="curiosities" className="py-24 max-w-6xl mx-auto px-6 sm:px-12">
      <Reveal>
        <p className="font-mono text-sm text-accent mb-3">
          Experiments &amp; explorations
        </p>
      </Reveal>

      <TextReveal
        as="h2"
        className="font-display font-bold text-5xl sm:text-7xl text-warm-900 mb-6 tracking-tight"
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

      <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6 sm:-mx-12 sm:px-12 scrollbar-hide">
        {curiosities.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.1}>
            {item.externalUrl ? (
              <a
                href={item.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-[280px] sm:w-[320px] shrink-0 rounded-2xl overflow-hidden border border-warm-200/60 bg-white/50 hover:bg-white hover:border-accent/25 hover:shadow-md transition-all duration-300 snap-start"
              >
                <CardContent item={item} />
              </a>
            ) : (
              <Link
                to={`/work/${item.id}`}
                className="group block w-[280px] sm:w-[320px] shrink-0 rounded-2xl overflow-hidden border border-warm-200/60 bg-white/50 hover:bg-white hover:border-accent/25 hover:shadow-md transition-all duration-300 snap-start"
              >
                <CardContent item={item} />
              </Link>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
