import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { CaseStudyPage } from './pages/CaseStudyPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work/:id" element={<CaseStudyPage />} />
    </Routes>
  )
}
