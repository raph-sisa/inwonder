import { Hero } from './components/Hero'
import { CaseStudy } from './components/CaseStudy'
import { Fabricated } from './components/Fabricated'
import { Contact } from './components/Contact'

export default function App() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CaseStudy />
      <Fabricated />
      <Contact />
    </main>
  )
}
