import { useEffect, useState } from 'react'
import { Hero } from '../components/Hero'
import { CaseStudyGrid } from '../components/CaseStudyGrid'

export function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <main id="main">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
        Skip to main content
      </a>

      <section className="min-h-[70vh] md:min-h-[85vh] relative" style={{ overflow: 'clip' }}>
        <Hero scrollY={scrollY} />
      </section>

      <section>
        <CaseStudyGrid />
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="px-6 lg:px-20 py-12 border-t border-primary/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3">
              Get in touch
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-warm-900 mb-4 italic">
              Let&rsquo;s talk
            </h2>
            <p className="text-warm-500 leading-relaxed max-w-lg">
              I&rsquo;m available for senior product roles and select consulting engagements. I&rsquo;m especially interested in complex operational, spatial, civic, infrastructure, and climate-related systems.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:raph@inwonder.xyz"
              className="inline-flex items-center gap-2 px-6 py-3 text-white bg-primary hover:opacity-90 rounded-full transition-[transform,opacity] duration-160 active:scale-[0.97] font-bold text-sm min-h-[44px] hover-lift"
            >
              raph@inwonder.xyz
            </a>
            <div className="flex gap-4 text-sm">
              <a
                href="https://www.linkedin.com/in/raphaelsisa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-500 hover:text-primary transition-colors py-2 px-1"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/raph-sisa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-500 hover:text-primary transition-colors py-2 px-1"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-bold text-warm-900 uppercase tracking-tighter">
            In Wonder &copy; {new Date().getFullYear()}
          </p>
          <p className="text-xs uppercase tracking-widest font-bold text-warm-500">
            Built with curiosity.
          </p>
        </div>
      </footer>
    </main>
  )
}
