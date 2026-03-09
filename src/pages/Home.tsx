import { Hero } from '../components/Hero'
import { CaseStudyGrid } from '../components/CaseStudyGrid'
import { Contact } from '../components/Contact'

export function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CaseStudyGrid />
      <Contact />
    </main>
  )
}
