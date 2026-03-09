import { useEffect, useRef, useState } from 'react'
import { interpolate } from 'flubber'
import { useMotionValue, animate } from 'framer-motion'

// All shapes as closed paths for smooth flubber morphing
const shapes = [
  // Asterisk / star burst
  `M 150 90 L 155 130 L 190 105 L 165 135 L 205 140 L 165 150 L 195 175 L 155 155 L 155 195 L 145 155 L 115 180 L 135 150 L 95 145 L 135 135 L 110 108 L 145 130 Z`,

  // Raphael's face — single continuous path: head, hair, down to left eye,
  // across bridge to right eye, down nose, across mouth, back up into beard/jaw
  `M 150 55
   C 135 52, 118 55, 112 60
   C 105 65, 100 58, 108 52
   C 115 46, 130 42, 145 44
   C 155 42, 168 44, 178 50
   C 185 55, 188 62, 185 70
   C 195 68, 200 75, 200 85
   C 200 100, 198 108, 195 115
   C 192 112, 185 108, 178 108
   C 172 108, 168 112, 168 118
   C 168 124, 172 128, 178 128
   C 185 128, 192 124, 195 120
   C 198 125, 200 132, 198 140
   C 195 148, 190 155, 188 160
   C 192 168, 195 178, 192 188
   C 188 200, 180 215, 170 225
   C 162 233, 150 236, 138 233
   C 128 228, 118 215, 112 200
   C 108 188, 105 178, 108 168
   C 110 160, 108 150, 105 142
   C 102 135, 100 128, 102 120
   C 105 124, 112 128, 118 128
   C 125 128, 130 124, 130 118
   C 130 112, 126 108, 120 108
   C 114 108, 108 112, 105 115
   C 102 108, 100 100, 100 85
   C 100 75, 105 68, 115 70
   C 115 62, 125 55, 150 55
   C 150 80, 148 100, 145 115
   C 144 118, 143 120, 145 118
   C 148 115, 150 100, 150 130
   C 149 138, 148 145, 150 148
   C 152 150, 154 148, 153 145
   C 152 140, 150 148, 132 168
   C 138 174, 145 176, 152 175
   C 160 174, 165 170, 168 165
   Z`,

  // Sun with rays
  `M 150 85 L 165 120 L 200 100 L 180 130 L 215 140 L 180 155 L 200 185 L 165 168 L 155 205 L 145 168 L 115 190 L 130 155 L 90 148 L 125 132 L 105 105 L 138 122 Z`,

  // Crescent moon
  `M 175 65 C 130 75, 95 115, 95 155 C 95 200, 125 235, 165 240 C 140 225, 125 195, 125 160 C 125 120, 145 85, 175 65 Z`,

  // Rose / flower (Little Prince)
  `M 150 210 C 150 185, 140 170, 130 155 C 115 135, 115 115, 130 105 C 145 95, 160 100, 165 115 C 170 100, 185 95, 195 108 C 205 120, 198 140, 182 150 C 195 145, 210 148, 210 165 C 210 182, 192 188, 175 178 C 178 192, 168 200, 155 205 C 152 208, 150 210, 150 210 Z`,

  // Planet with ring
  `M 150 100 C 185 100, 210 125, 210 155 C 210 185, 185 210, 150 210 C 115 210, 90 185, 90 155 C 90 125, 115 100, 150 100 Z`,
]

const HOLD_DURATION = 600
const MORPH_DURATION = 2800

export function MorphingLine({ className = '' }: { className?: string }) {
  const pathRef = useRef<SVGPathElement>(null)
  const [shapeIndex, setShapeIndex] = useState(0)
  const progress = useMotionValue(0)
  const drawProgress = useMotionValue(0)
  const [hasDrawn, setHasDrawn] = useState(false)

  // Initial draw-in animation
  useEffect(() => {
    const controls = animate(drawProgress, 1, {
      duration: 2,
      ease: 'easeInOut',
      onComplete: () => setHasDrawn(true),
    })
    return () => controls.stop()
  }, [drawProgress])

  // Update stroke-dashoffset for draw-in
  useEffect(() => {
    const path = pathRef.current
    if (!path) return

    const length = path.getTotalLength()
    path.style.strokeDasharray = `${length}`

    const unsubscribe = drawProgress.on('change', (v) => {
      path.style.strokeDashoffset = `${length * (1 - v)}`
    })
    return unsubscribe
  }, [drawProgress])

  // Morphing loop
  useEffect(() => {
    if (!hasDrawn) return

    let mounted = true
    let timeout: ReturnType<typeof setTimeout>

    async function morph() {
      while (mounted) {
        await new Promise((r) => { timeout = setTimeout(r, HOLD_DURATION) })
        if (!mounted) break

        const nextIndex = (shapeIndex + 1) % shapes.length
        const interpolator = interpolate(shapes[shapeIndex], shapes[nextIndex], {
          maxSegmentLength: 6,
        })

        await new Promise<void>((resolve) => {
          const controls = animate(progress, 1, {
            duration: MORPH_DURATION / 1000,
            ease: 'easeInOut',
            onUpdate: (v) => {
              if (pathRef.current) {
                pathRef.current.setAttribute('d', interpolator(v))
              }
            },
            onComplete: () => {
              progress.set(0)
              resolve()
            },
          })

          if (!mounted) controls.stop()
        })

        if (!mounted) break
        setShapeIndex(nextIndex)
      }
    }

    morph()
    return () => {
      mounted = false
      clearTimeout(timeout)
    }
  }, [hasDrawn, shapeIndex, progress])

  return (
    <svg
      viewBox="60 30 190 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        ref={pathRef}
        d={shapes[0]}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
