import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'
import { TextReveal, Reveal } from './TextReveal'
import type { CaseStudy } from '../data/caseStudies'

const curiosities = caseStudies.filter((s) => (s.category as string) === 'curiosity')

function CuriosityCard({ item, index }: { item: CaseStudy; index: number }) {
  const inner = (
    <div className="bg-primary/5 rounded-xl aspect-square flex flex-col items-center justify-center border border-primary/10 relative overflow-hidden group cursor-pointer hover:border-primary/30 transition-colors">
      {item.illustration ? (
        <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
          <item.illustration className="w-full h-full" />
        </div>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity"
          style={{ backgroundImage: `url(${item.thumbnail})` }}
        />
      )}
      <div className="relative z-10 text-center p-6">
        <span className="text-primary font-mono text-xs font-bold block mb-2">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h4 className="font-bold text-warm-900 text-sm">{item.title}</h4>
      </div>
    </div>
  )

  if (item.externalUrl) {
    return (
      <a href={item.externalUrl} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    )
  }
  return <Link to={`/work/${item.id}`}>{inner}</Link>
}

export function Curiosities() {
  return (
    <section id="curiosities" className="px-6 lg:px-20 py-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left column — text */}
        <div className="lg:col-span-4">
          <Reveal>
            <span className="text-primary font-bold uppercase tracking-widest text-xs">
              Experiments
            </span>
          </Reveal>

          <TextReveal
            as="h2"
            className="font-display text-5xl mt-2 mb-6 text-warm-900"
            delay={0.05}
          >
            Curiosities
          </TextReveal>

          <Reveal delay={0.1}>
            <p className="text-warm-500 leading-relaxed mb-8">
              Things I've made for the joy of making them — experiments, workshops,
              and projects born from following a thread. Raw, iterative, and purely exploratory.
            </p>
          </Reveal>

          {/* List of experiments */}
          {curiosities.map((item, i) => {
            const Wrapper = item.externalUrl ? 'a' : Link
            const props = item.externalUrl
              ? { href: item.externalUrl, target: '_blank', rel: 'noopener noreferrer' }
              : { to: `/work/${item.id}` }

            return (
              <Reveal key={item.id} delay={i * 0.05}>
                <Wrapper
                  {...(props as any)}
                  className="group flex items-center gap-4 py-3 px-1 border-b border-warm-200 w-full text-left hover:border-primary transition-colors"
                >
                  <span className="text-primary font-mono text-xs">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-bold flex-grow text-warm-900 text-sm group-hover:text-primary transition-colors">
                    {item.title}
                  </span>
                  <span className="text-warm-400 group-hover:text-primary text-sm transition-colors">
                    &#x2197;
                  </span>
                </Wrapper>
              </Reveal>
            )
          })}
        </div>

        {/* Right column — tile grid */}
        <div className="lg:col-span-8 grid grid-cols-2 gap-4">
          {curiosities.slice(0, 3).map((item, i) => (
            <Reveal key={item.id} delay={i * 0.1}>
              <CuriosityCard item={item} index={i} />
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <Link
              to="/archive"
              className="bg-primary/10 rounded-xl aspect-square flex flex-col items-center justify-center border border-primary/20 text-center p-6 group cursor-pointer hover:bg-primary transition-colors"
            >
              <span className="text-5xl mb-4 group-hover:text-white text-primary">+</span>
              <p className="font-bold group-hover:text-white text-warm-900">
                Explore all {curiosities.length} experiments
              </p>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
