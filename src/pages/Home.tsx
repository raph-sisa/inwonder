import { useRef, useEffect, useState } from 'react'
import { Hero } from '../components/Hero'
import { CaseStudyGrid } from '../components/CaseStudyGrid'
import { Curiosities } from '../components/Curiosities'

export function Home() {
  const scrollRef = useRef<HTMLElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const handler = () => setScrollY(el.scrollTop)
    el.addEventListener('scroll', handler, { passive: true })
    return () => el.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const sections = () => el.querySelectorAll<HTMLElement>(':scope > section, :scope > footer')

    const handleKey = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return
      // Don't hijack if user is in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return

      const sects = sections()
      if (!sects.length) return

      // Use offsetTop relative to the scroll container
      const scrollTop = el.scrollTop

      if (e.key === 'ArrowDown') {
        for (let i = 0; i < sects.length; i++) {
          const top = sects[i].offsetTop - el.offsetTop
          if (top > scrollTop + 2) {
            e.preventDefault()
            el.scrollTo({ top, behavior: 'smooth' })
            return
          }
        }
      } else {
        for (let i = sects.length - 1; i >= 0; i--) {
          const top = sects[i].offsetTop - el.offsetTop
          if (top < scrollTop - 2) {
            e.preventDefault()
            el.scrollTo({ top, behavior: 'smooth' })
            return
          }
        }
      }
    }

    // Use capture phase to intercept before default scroll
    window.addEventListener('keydown', handleKey, { capture: true })
    return () => window.removeEventListener('keydown', handleKey, { capture: true })
  }, [])

  return (
    <main
      ref={scrollRef}
      className="h-screen overflow-y-auto scroll-smooth snap-y snap-proximity"
      data-lenis-prevent
    >
      <section className="h-[85vh] relative snap-start" style={{ overflow: 'clip' }}>
        <Hero scrollY={scrollY} />
      </section>
      <section className="min-h-screen snap-start">
        <CaseStudyGrid />
      </section>
      <section className="min-h-screen snap-start">
        <Curiosities />
      </section>
      <footer id="contact" className="snap-start">
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
