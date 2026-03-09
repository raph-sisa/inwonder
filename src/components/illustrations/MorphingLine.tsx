import { useEffect, useRef, useState, useCallback } from 'react'
import { interpolate } from 'flubber'
import { useMotionValue, animate } from 'framer-motion'

// Work domains — each shape echoes a project area in the portfolio
// All single closed curves with similar point counts for clean morphs
const shapes = [
  // 1. Rounded screen — product design (enterprise platforms, dashboards)
  `M 90 90 C 90 82, 96 78, 105 78 L 195 78 C 204 78, 210 82, 210 90
   L 210 190 C 210 198, 204 202, 195 202 L 150 202 L 150 222
   L 175 222 L 125 222 L 150 222 L 150 202 L 105 202
   C 96 202, 90 198, 90 190 Z`,

  // 2. Branching node tree — data systems, AI pipelines (Bumo)
  `M 150 70 C 160 70, 168 78, 168 88 C 168 96, 162 103, 155 105
   L 190 140 C 200 138, 212 145, 215 155 C 218 168, 210 178, 198 178
   C 186 178, 178 168, 180 158 L 155 125 L 130 158
   C 128 168, 118 178, 106 178 C 94 178, 84 168, 88 155
   C 90 145, 102 138, 112 140 L 145 105 C 138 103, 132 96, 132 88
   C 132 78, 140 70, 150 70 Z`,

  // 3. Hexagonal chip — hardware, circuits, maker culture (Fabricated)
  `M 150 72 L 212 100 C 218 103, 222 110, 222 117 L 222 173
   C 222 180, 218 187, 212 190 L 150 218 L 88 190
   C 82 187, 78 180, 78 173 L 78 117 C 78 110, 82 103, 88 100 Z`,

  // 4. Trefoil — community, overlapping circles, togetherness (Analog Network)
  `M 150 82 C 172 72, 198 80, 205 102 C 215 95, 232 108, 228 130
   C 224 152, 200 162, 185 158 C 195 175, 192 200, 172 210
   C 152 220, 135 208, 132 190 C 120 208, 98 215, 82 200
   C 68 182, 78 162, 95 155 C 78 148, 68 128, 78 110
   C 88 92, 110 88, 125 98 C 120 80, 135 72, 150 82 Z`,
]

// Each domain gets a distinct but cohesive color
const colors = [
  { stroke: '#a89888', fill: '#a89888' },  // warm-400 — product/interface
  { stroke: '#c2703e', fill: '#c2703e' },  // accent — data/AI systems
  { stroke: '#7a6e62', fill: '#7a6e62' },  // warm-500 — hardware/maker
  { stroke: '#d4915f', fill: '#d4915f' },  // accent-light — community
]

function lerpColor(colorA: string, colorB: string, t: number): string {
  const parse = (hex: string) => [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ]
  const [r1, g1, b1] = parse(colorA)
  const [r2, g2, b2] = parse(colorB)
  const r = Math.round(r1 + (r2 - r1) * t)
  const g = Math.round(g1 + (g2 - g1) * t)
  const bl = Math.round(b1 + (b2 - b1) * t)
  return `#${((1 << 24) + (r << 16) + (g << 8) + bl).toString(16).slice(1)}`
}

// power3.out equivalent — fast arrival, gentle settle
const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1]
// Soft ease for draw-in
const EASE_DRAW: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const HOLD_DURATION = 3000
const MORPH_DURATION = 2400

export function MorphingLine({ className = '' }: { className?: string }) {
  const pathRef = useRef<SVGPathElement>(null)
  const fillRef = useRef<SVGPathElement>(null)
  const glowRef = useRef<SVGPathElement>(null)
  const indexRef = useRef(0)
  const mountedRef = useRef(true)
  const drawProgress = useMotionValue(0)
  const [hasDrawn, setHasDrawn] = useState(false)

  // Initial draw-in: stroke reveals, then fill and glow fade in
  useEffect(() => {
    const controls = animate(drawProgress, 1, {
      duration: 2.8,
      ease: EASE_DRAW,
      onComplete: () => setHasDrawn(true),
    })
    return () => controls.stop()
  }, [drawProgress])

  useEffect(() => {
    const path = pathRef.current
    if (!path) return

    const length = path.getTotalLength()
    path.style.strokeDasharray = `${length}`

    const unsubscribe = drawProgress.on('change', (v) => {
      path.style.strokeDashoffset = `${length * (1 - v)}`

      // Fill fades in during last 30% of draw
      const fillOpacity = Math.max(0, (v - 0.7) / 0.3) * 0.05
      if (fillRef.current) fillRef.current.style.opacity = `${fillOpacity}`

      // Glow fades in during last 20%
      const glowOpacity = Math.max(0, (v - 0.8) / 0.2) * 0.12
      if (glowRef.current) glowRef.current.style.opacity = `${glowOpacity}`
    })
    return unsubscribe
  }, [drawProgress])

  // Morph loop — runs once hasDrawn, no state dependency to avoid restarts
  const runMorphLoop = useCallback(async () => {
    while (mountedRef.current) {
      await new Promise<void>((r) => {
        const id = setTimeout(r, HOLD_DURATION)
        if (!mountedRef.current) clearTimeout(id)
      })
      if (!mountedRef.current) break

      const currentIndex = indexRef.current
      const nextIndex = (currentIndex + 1) % shapes.length
      const interpolator = interpolate(shapes[currentIndex], shapes[nextIndex], {
        maxSegmentLength: 1,
      })

      const fromColor = colors[currentIndex]
      const toColor = colors[nextIndex]

      await new Promise<void>((resolve) => {
        const controls = animate(0, 1, {
          duration: MORPH_DURATION / 1000,
          ease: EASE_OUT,
          onUpdate: (v) => {
            const d = interpolator(v)
            const strokeColor = lerpColor(fromColor.stroke, toColor.stroke, v)
            const fillColor = lerpColor(fromColor.fill, toColor.fill, v)

            if (pathRef.current) {
              pathRef.current.setAttribute('d', d)
              pathRef.current.style.stroke = strokeColor
            }
            if (fillRef.current) {
              fillRef.current.setAttribute('d', d)
              fillRef.current.style.fill = fillColor
            }
            if (glowRef.current) {
              glowRef.current.setAttribute('d', d)
              glowRef.current.style.stroke = strokeColor
            }
          },
          onComplete: resolve,
        })

        if (!mountedRef.current) controls.stop()
      })

      if (!mountedRef.current) break
      indexRef.current = nextIndex
    }
  }, [])

  useEffect(() => {
    if (!hasDrawn) return
    mountedRef.current = true
    runMorphLoop()
    return () => { mountedRef.current = false }
  }, [hasDrawn, runMorphLoop])

  // Cleanup on unmount
  useEffect(() => {
    return () => { mountedRef.current = false }
  }, [])

  const initialColor = colors[0]

  return (
    <svg
      viewBox="60 30 190 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Glow layer — blurred, wider stroke for soft halo */}
      <path
        ref={glowRef}
        d={shapes[0]}
        stroke={initialColor.stroke}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        style={{ opacity: 0, filter: 'blur(8px)' }}
      />
      {/* Fill layer — very subtle solid behind stroke */}
      <path
        ref={fillRef}
        d={shapes[0]}
        fill={initialColor.fill}
        style={{ opacity: 0 }}
      />
      {/* Main stroke */}
      <path
        ref={pathRef}
        d={shapes[0]}
        stroke={initialColor.stroke}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
