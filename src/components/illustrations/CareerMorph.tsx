import { useEffect, useRef, useState } from 'react'
import { interpolate } from 'flubber'
import { useMotionValue, animate } from 'framer-motion'

// Each shape is a closed SVG path centered roughly in a 300x300 viewBox.
// Labels are for display on the mockup page.
export const careerShapes = [
  {
    label: 'Asterisk',
    caption: 'In Wonder',
    d: `M 150 90 L 155 130 L 190 105 L 165 135 L 205 140 L 165 150 L 195 175 L 155 155 L 155 195 L 145 155 L 115 180 L 135 150 L 95 145 L 135 135 L 110 108 L 145 130 Z`,
  },
  {
    label: 'Palm Tree',
    caption: 'Coachella',
    d: `M 145 250 L 140 180 C 138 160, 142 145, 150 130 C 130 125, 100 115, 80 95 C 95 108, 115 115, 140 120 C 125 108, 100 85, 85 60 C 105 80, 125 100, 145 115 C 140 95, 138 70, 140 45 C 145 70, 148 95, 150 115 C 160 95, 175 70, 185 50 C 178 75, 165 100, 155 118 C 175 105, 200 90, 220 80 C 200 98, 175 112, 155 125 C 175 118, 205 115, 225 110 C 200 122, 170 128, 152 132 C 158 145, 160 165, 158 185 L 155 250 Z`,
  },
  {
    label: 'Ferris Wheel',
    caption: 'Coachella',
    d: `M 150 60 C 185 60, 215 80, 228 110 C 241 140, 238 175, 220 200 C 202 225, 175 240, 150 240 C 125 240, 98 225, 80 200 C 62 175, 59 140, 72 110 C 85 80, 115 60, 150 60 Z M 150 80 L 150 220 M 80 150 L 220 150 M 100 90 L 200 210 M 200 90 L 100 210 M 130 250 L 130 270 L 170 270 L 170 250 Z`,
  },
  {
    label: 'Television',
    caption: 'AT&T / DirecTV',
    d: `M 75 80 L 225 80 C 232 80, 238 86, 238 93 L 238 195 C 238 202, 232 208, 225 208 L 75 208 C 68 208, 62 202, 62 195 L 62 93 C 62 86, 68 80, 75 80 Z M 80 95 L 220 95 L 220 195 L 80 195 Z M 125 208 L 120 240 L 180 240 L 175 208 M 110 240 L 190 240 M 135 145 L 165 160 L 135 175 Z`,
  },
  {
    label: 'Guitar',
    caption: 'AEG Touring',
    d: `M 165 55 L 175 55 L 175 70 L 180 70 L 180 55 L 190 55 L 190 95 L 180 95 L 180 80 L 175 80 L 170 120 L 168 140 C 185 148, 198 165, 200 185 C 202 210, 190 230, 170 240 C 160 245, 148 245, 138 240 C 118 230, 105 210, 108 185 C 110 165, 122 148, 140 140 L 138 120 L 165 95 L 165 55 Z M 145 175 C 140 180, 138 190, 142 198 C 146 206, 155 208, 162 205 C 168 200, 170 190, 165 182 C 160 175, 150 172, 145 175 Z`,
  },
  {
    label: 'Microphone',
    caption: 'Live Events',
    d: `M 130 70 C 130 50, 170 50, 170 70 L 170 130 C 170 150, 130 150, 130 130 Z M 110 110 C 110 155, 140 175, 150 175 C 160 175, 190 155, 190 110 M 150 175 L 150 220 M 120 220 L 180 220 M 135 70 L 135 130 M 150 70 L 150 130 M 165 70 L 165 130 Z`,
  },
  {
    label: 'Race Car',
    caption: 'NASCAR',
    d: `M 60 155 C 62 140, 75 130, 90 128 L 120 125 C 130 115, 145 105, 165 105 L 210 108 C 225 110, 238 120, 245 135 L 250 150 C 255 155, 252 165, 245 168 L 230 170 C 228 185, 216 195, 202 195 C 188 195, 176 185, 174 170 L 130 170 C 128 185, 116 195, 102 195 C 88 195, 76 185, 74 170 L 58 168 C 52 165, 50 158, 52 155 Z M 102 172 C 95 172, 90 178, 90 184 C 90 190, 95 195, 102 195 C 109 195, 114 190, 114 184 C 114 178, 109 172, 102 172 Z M 202 172 C 195 172, 190 178, 190 184 C 190 190, 195 195, 202 195 C 209 195, 214 190, 214 184 C 214 178, 209 172, 202 172 Z`,
  },
  {
    label: 'Film Camera',
    caption: 'Filmmaking',
    d: `M 80 100 L 210 100 C 218 100, 225 107, 225 115 L 225 205 C 225 213, 218 220, 210 220 L 80 220 C 72 220, 65 213, 65 205 L 65 115 C 65 107, 72 100, 80 100 Z M 100 80 L 120 80 L 130 100 L 90 100 Z M 165 80 L 185 80 L 195 100 L 155 100 Z M 225 140 L 260 120 L 260 195 L 225 175 Z M 145 160 C 130 160, 118 172, 118 185 C 118 198, 130 210, 145 210 C 160 210, 172 198, 172 185 C 172 172, 160 160, 145 160 Z`,
  },
  {
    label: 'Ring',
    caption: 'Analog Network',
    d: `M 150 75 C 192 75, 225 108, 225 150 C 225 192, 192 225, 150 225 C 108 225, 75 192, 75 150 C 75 108, 108 75, 150 75 Z M 150 110 C 172 110, 190 128, 190 150 C 190 172, 172 190, 150 190 C 128 190, 110 172, 110 150 C 110 128, 128 110, 150 110 Z`,
  },
  {
    label: 'Zine',
    caption: 'Analog Network',
    d: `M 85 80 L 215 80 L 215 230 L 85 230 Z M 150 80 L 150 230 M 100 100 L 140 100 M 100 115 L 140 115 M 100 130 L 130 130 M 160 100 L 200 100 M 160 115 L 200 115 M 160 130 L 190 130 M 100 160 L 140 160 M 100 175 L 140 175 M 160 160 L 200 160 M 160 175 L 200 175 Z`,
  },
  {
    label: 'Open Book',
    caption: 'Book Clubs',
    d: `M 150 90 C 130 85, 100 82, 70 88 C 65 89, 60 94, 60 100 L 60 205 C 60 210, 65 214, 70 213 C 100 208, 130 210, 150 220 C 170 210, 200 208, 230 213 C 235 214, 240 210, 240 205 L 240 100 C 240 94, 235 89, 230 88 C 200 82, 170 85, 150 90 Z M 150 90 L 150 220 M 80 105 L 135 100 M 80 125 L 135 120 M 80 145 L 130 140 M 165 100 L 220 105 M 165 120 L 220 125 M 165 140 L 215 145 Z`,
  },
  {
    label: 'Light Bulb',
    caption: 'Ideas & Workshops',
    d: `M 150 55 C 120 55, 95 75, 95 105 C 95 130, 108 148, 125 162 C 130 168, 132 178, 132 188 L 168 188 C 168 178, 170 168, 175 162 C 192 148, 205 130, 205 105 C 205 75, 180 55, 150 55 Z M 128 200 L 172 200 M 130 212 L 170 212 M 135 224 L 165 224 M 145 224 L 145 238 C 145 242, 148 245, 150 245 C 152 245, 155 242, 155 238 L 155 224 M 150 55 L 150 45 M 205 105 L 218 105 M 95 105 L 82 105 M 190 72 L 200 62 M 110 72 L 100 62 Z`,
  },
  {
    label: 'Coffee Cup',
    caption: 'Conversations',
    d: `M 90 110 L 200 110 L 190 240 C 188 248, 180 255, 170 255 L 120 255 C 110 255, 102 248, 100 240 Z M 200 130 C 220 130, 235 142, 235 158 C 235 174, 220 186, 200 186 M 120 90 C 122 75, 128 68, 125 55 M 145 85 C 147 65, 153 58, 150 42 M 170 90 C 172 75, 178 68, 175 55 Z`,
  },
  {
    label: 'Chairs in Circle',
    caption: 'Learning Communities',
    d: `M 150 80 L 160 95 L 140 95 Z M 200 100 L 205 118 L 188 112 Z M 225 145 L 222 165 L 210 152 Z M 215 195 L 205 210 L 198 195 Z M 180 230 L 168 240 L 165 222 Z M 140 240 L 128 240 L 132 222 Z M 100 220 L 92 208 L 108 205 Z M 80 180 L 78 162, 92 168 Z M 82 130 L 88 115 L 98 128 Z M 110 95 L 118 82 L 125 98 Z M 150 120 C 168 120, 182 134, 182 150 C 182 166, 168 180, 150 180 C 132 180, 118 166, 118 150 C 118 134, 132 120, 150 120 Z`,
  },
  {
    label: 'Rose',
    caption: 'The Little Prince',
    d: `M 150 240 L 150 170 C 148 165, 142 160, 135 155 C 120 145, 115 128, 125 115 C 132 105, 145 102, 152 110 C 155 100, 165 95, 175 100 C 188 108, 190 125, 180 138 C 192 135, 205 140, 208 155 C 210 170, 198 180, 185 178 C 190 190, 182 200, 170 198 C 165 205, 155 205, 150 198 C 145 205, 135 205, 130 198 C 120 200, 112 192, 115 180 C 102 178, 95 165, 100 152 C 105 140, 118 138, 128 142 L 128 142 C 122 130, 128 118, 140 115 C 140 115, 145 140, 150 170 Z M 155 170 C 165 150, 185 155, 175 170 M 145 170 C 135 148, 118 155, 128 168 Z`,
  },
  {
    label: 'Crescent Moon',
    caption: 'Wonder',
    d: `M 175 60 C 125 70, 88 115, 88 165 C 88 218, 128 260, 170 260 C 148 250, 130 228, 125 200 C 118 168, 128 132, 150 108 C 165 92, 180 82, 195 78 C 190 68, 182 62, 175 60 Z M 210 85 L 215 75 L 220 85 L 230 82 L 225 92 L 235 95 L 225 100 L 230 110 L 220 105 L 215 115 L 210 105 L 200 110 L 205 100 L 195 95 L 205 92 L 200 82 Z`,
  },
  {
    label: 'Planet',
    caption: 'The Little Prince',
    d: `M 150 85 C 186 85, 215 114, 215 150 C 215 186, 186 215, 150 215 C 114 215, 85 186, 85 150 C 85 114, 114 85, 150 85 Z M 55 170 C 85 155, 125 148, 170 148 C 210 148, 240 155, 260 165 C 245 172, 215 168, 175 162 C 130 155, 85 158, 55 170 Z M 140 95 C 138 92, 142 85, 148 82 C 152 80, 148 88, 145 92 Z`,
  },
  {
    label: 'Telescope',
    caption: 'Curiosity',
    d: `M 195 80 L 225 60 L 235 75 L 205 95 L 205 95 C 210 100, 208 108, 202 112 L 148 148 C 152 155, 150 165, 142 170 L 120 182 C 115 185, 108 183, 105 178 L 95 160 C 92 155, 94 148, 100 145 L 122 132 C 128 128, 138 130, 142 138 L 195 102 C 200 98, 200 90, 195 85 Z M 105 178 L 85 225 M 95 160 L 60 210 M 142 170 L 170 240 Z`,
  },
  {
    label: 'Compass',
    caption: 'Exploration',
    d: `M 150 65 C 197 65, 235 103, 235 150 C 235 197, 197 235, 150 235 C 103 235, 65 197, 65 150 C 65 103, 103 65, 150 65 Z M 150 75 C 191 75, 225 109, 225 150 C 225 191, 191 225, 150 225 C 109 225, 75 191, 75 150 C 75 109, 109 75, 150 75 Z M 150 55 L 150 65 M 150 235 L 150 245 M 55 150 L 65 150 M 235 150 L 245 150 M 130 130 L 145 148 L 110 190 L 155 152 L 190 110 L 153 148 Z`,
  },
  {
    label: 'Speech Bubbles',
    caption: 'Gathering People',
    d: `M 80 90 C 80 75, 95 62, 155 62 C 215 62, 230 75, 230 90 L 230 140 C 230 155, 215 168, 155 168 L 120 168 L 95 192 L 100 168 C 88 165, 80 155, 80 140 Z M 185 175 C 185 175, 200 175, 220 178 C 240 182, 248 192, 248 202 L 248 232 C 248 242, 240 250, 220 252 L 210 252 L 225 272 L 200 252 C 185 250, 175 242, 175 232 L 175 202 C 175 192, 180 182, 185 175 Z`,
  },
  {
    label: 'Face',
    caption: 'Raphael',
    d: `M 150 55 C 135 52, 118 55, 112 60 C 105 65, 100 58, 108 52 C 115 46, 130 42, 145 44 C 155 42, 168 44, 178 50 C 185 55, 188 62, 185 70 C 195 68, 200 75, 200 85 C 200 100, 198 108, 195 115 C 192 112, 185 108, 178 108 C 172 108, 168 112, 168 118 C 168 124, 172 128, 178 128 C 185 128, 192 124, 195 120 C 198 125, 200 132, 198 140 C 195 148, 190 155, 188 160 C 192 168, 195 178, 192 188 C 188 200, 180 215, 170 225 C 162 233, 150 236, 138 233 C 128 228, 118 215, 112 200 C 108 188, 105 178, 108 168 C 110 160, 108 150, 105 142 C 102 135, 100 128, 102 120 C 105 124, 112 128, 118 128 C 125 128, 130 124, 130 118 C 130 112, 126 108, 120 108 C 114 108, 108 112, 105 115 C 102 108, 100 100, 100 85 C 100 75, 105 68, 115 70 C 115 62, 125 55, 150 55 Z`,
  },
]

const HOLD_DURATION = 800
const MORPH_DURATION = 2200

interface Props {
  className?: string
  onShapeChange?: (index: number) => void
}

export function CareerMorph({ className = '', onShapeChange }: Props) {
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

        const nextIndex = (shapeIndex + 1) % careerShapes.length
        const interpolator = interpolate(
          careerShapes[shapeIndex].d,
          careerShapes[nextIndex].d,
          { maxSegmentLength: 6 }
        )

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
        onShapeChange?.(nextIndex)
      }
    }

    morph()
    return () => {
      mounted = false
      clearTimeout(timeout)
    }
  }, [hasDrawn, shapeIndex, progress, onShapeChange])

  return (
    <svg
      viewBox="40 30 220 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        ref={pathRef}
        d={careerShapes[0].d}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
