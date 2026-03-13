import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import { Nav } from './components/Nav'
import { PageTransition } from './components/PageTransition'
import { Home } from './pages/Home'
import { CaseStudyPage } from './pages/CaseStudyPage'

export default function App() {
  const location = useLocation()

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <>
      <div className="sticky top-0 z-50">
        <Nav />
      </div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/work/:id" element={<PageTransition><CaseStudyPage /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </>
  )
}
