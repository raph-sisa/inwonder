import { Hero } from '../components/Hero'
import { CaseStudyGrid } from '../components/CaseStudyGrid'
import { Curiosities } from '../components/Curiosities'
import { Contact } from '../components/Contact'

export function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CaseStudyGrid />
      <Curiosities />
      <Contact />
    </main>
  )
}
