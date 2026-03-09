import { Hero } from '../components/Hero'
import { CaseStudyGrid } from '../components/CaseStudyGrid'
import { Curiosities } from '../components/Curiosities'
import { Contact } from '../components/Contact'
import { SectionTransition } from '../components/SectionTransition'

export function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero — default warm-50 */}
      <Hero />

      {/* Selected Work — warm, light */}
      <SectionTransition
        nextSection={
          <div style={{ background: '#1a1310' }}>
            <Curiosities />
          </div>
        }
        transitionColor="#433a32"
      >
        <div style={{ background: '#f7f3ee' }}>
          <CaseStudyGrid />
        </div>
      </SectionTransition>

      {/* Contact — dark, warm */}
      <div style={{ background: '#2c2420' }}>
        <Contact />
      </div>
    </main>
  )
}
