import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CareerMorph, careerShapes } from '../components/illustrations/CareerMorph'

export function MockupMorph() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <main className="min-h-screen bg-warm-50 flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-lg w-full text-center">
        <p className="font-mono text-xs text-warm-400 mb-8">
          Hero Illustration Mockup — {careerShapes.length} shapes
        </p>

        {/* The morphing illustration */}
        <div className="w-80 h-80 mx-auto mb-8">
          <CareerMorph
            className="w-full h-full text-warm-800"
            onShapeChange={setCurrentIndex}
          />
        </div>

        {/* Current shape label */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-display text-2xl text-warm-900 mb-1">
              {careerShapes[currentIndex].label}
            </p>
            <p className="font-mono text-sm text-accent">
              {careerShapes[currentIndex].caption}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Shape index dots */}
        <div className="flex gap-1.5 justify-center mt-8">
          {careerShapes.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                i === currentIndex ? 'bg-accent' : 'bg-warm-200'
              }`}
            />
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 grid grid-cols-3 gap-2 text-left">
          {careerShapes.map((shape, i) => (
            <div
              key={i}
              className={`text-xs px-2 py-1 rounded transition-colors duration-300 ${
                i === currentIndex
                  ? 'bg-accent/10 text-accent'
                  : 'text-warm-400'
              }`}
            >
              <span className="font-mono">{i + 1}.</span> {shape.label}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
