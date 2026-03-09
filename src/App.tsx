import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { CaseStudyPage } from './pages/CaseStudyPage'
import { IllustrationCompare } from './pages/IllustrationCompare'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work/:id" element={<CaseStudyPage />} />
      <Route path="/compare" element={<IllustrationCompare />} />
    </Routes>
  )
}
