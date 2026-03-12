import { useState, useCallback, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import { Nav } from './components/Nav'
import { AnnouncementBar } from './components/AnnouncementBar'
import { SlideDrawer } from './components/SlideDrawer'
import { PageTransition } from './components/PageTransition'
import { Home } from './pages/Home'
import { CaseStudyPage } from './pages/CaseStudyPage'

type DrawerType = 'work' | 'curiosities' | null

export default function App() {
  const location = useLocation()
  const [openDrawer, setOpenDrawer] = useState<DrawerType>(null)

  const closeDrawer = useCallback(() => setOpenDrawer(null), [])

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

  // Close drawer on route change
  useEffect(() => {
    setOpenDrawer(null)
  }, [location.pathname])

  return (
    <>
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <Nav
          onOpenWork={() => setOpenDrawer('work')}
          onOpenCuriosities={() => setOpenDrawer('curiosities')}
        />
      </div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/work/:id" element={<PageTransition><CaseStudyPage /></PageTransition>} />
        </Routes>
      </AnimatePresence>

      <SlideDrawer
        isOpen={openDrawer === 'work'}
        onClose={closeDrawer}
        category="work"
        title="Selected Work"
      />
      <SlideDrawer
        isOpen={openDrawer === 'curiosities'}
        onClose={closeDrawer}
        category="curiosity"
        title="Curiosities"
      />
    </>
  )
}
