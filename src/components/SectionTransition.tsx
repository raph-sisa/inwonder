import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface SectionTransitionProps {
  children: ReactNode
  nextSection: ReactNode
  transitionColor?: string
}

export function SectionTransition({
  children,
  nextSection,
  transitionColor = '#d6c8ba',
}: SectionTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Content fades and lifts out
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55, 0.8], [1, 1, 0])
  const contentY = useTransform(scrollYProgress, [0.55, 0.8], [0, -50])
  const contentScale = useTransform(scrollYProgress, [0.55, 0.8], [1, 0.97])

  // Warm gradient wipe rises from bottom
  const overlayOpacity = useTransform(scrollYProgress, [0.45, 0.65, 0.85, 1], [0, 0.25, 0.25, 0])

  return (
    <>
      <div ref={containerRef} className="relative" style={{ minHeight: '140vh' }}>
        <div className="sticky top-14 overflow-hidden">
          <motion.div
            style={{
              opacity: contentOpacity,
              y: contentY,
              scale: contentScale,
            }}
          >
            {children}
          </motion.div>

          {/* Gradient overlay — bridges the two section colors */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: overlayOpacity,
              background: `linear-gradient(to top, ${transitionColor} 0%, transparent 70%)`,
            }}
          />
        </div>
      </div>

      {nextSection}
    </>
  )
}
