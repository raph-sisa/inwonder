import { useEffect, useState } from 'react'
import { Hero } from '../components/Hero'
import { CaseStudyGrid } from '../components/CaseStudyGrid'
import { Curiosities } from '../components/Curiosities'

export function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <main>
      <section className="h-[85vh] relative" style={{ overflow: 'clip' }}>
        <Hero scrollY={scrollY} />
      </section>
      <section className="min-h-screen">
        <CaseStudyGrid />
      </section>
      <section className="min-h-screen">
        <Curiosities />
      </section>
      <footer id="contact">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 py-24">
          <p className="font-mono text-sm text-accent mb-3">Get in touch</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-warm-900 mb-4 tracking-tight">
            Let&rsquo;s talk
          </h2>
          <p className="text-warm-500 leading-relaxed mb-8 max-w-lg">
            Open to founding-stage roles in LA. If you&rsquo;re building something interesting and need a product-design leader who ships, I&rsquo;d love to hear about it.
          </p>
          <div className="flex flex-wrap items-center gap-6 font-mono text-sm">
            <a
              href="mailto:raph@inwonder.xyz"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-white bg-accent hover:bg-accent-light rounded-lg transition-colors"
            >
              raph@inwonder.xyz
            </a>
            <a
              href="https://www.linkedin.com/in/raphaelsisa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-500 hover:text-accent transition-colors"
            >
              LinkedIn &#x2197;
            </a>
            <a
              href="https://github.com/raph-sisa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-500 hover:text-accent transition-colors"
            >
              GitHub &#x2197;
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
