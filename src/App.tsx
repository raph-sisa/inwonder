import { Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Home } from './pages/Home'
import { CaseStudyPage } from './pages/CaseStudyPage'

export default function App() {
  return (
    <>
      <Nav />
      <div className="pt-14">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:id" element={<CaseStudyPage />} />
        </Routes>
      </div>
    </>
  )
}
