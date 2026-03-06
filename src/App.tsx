import { useState } from 'react'
import { Hero } from './components/Hero'
import { CaseStudyGrid } from './components/CaseStudyGrid'
import { CaseStudyDetail } from './components/CaseStudyDetail'
import { Fabricated } from './components/Fabricated'
import { Contact } from './components/Contact'
import { caseStudies } from './data/caseStudies'

export default function App() {
  const [activeStudy, setActiveStudy] = useState<string | null>(null)

  const activeData = caseStudies.find((s) => s.id === activeStudy)

  return (
    <main className="min-h-screen">
      <Hero />
      <CaseStudyGrid
        studies={caseStudies}
        onSelect={(id) => setActiveStudy(id)}
      />
      {activeData && (
        <CaseStudyDetail
          study={activeData}
          onClose={() => setActiveStudy(null)}
        />
      )}
      <Fabricated />
      <Contact />
    </main>
  )
}
