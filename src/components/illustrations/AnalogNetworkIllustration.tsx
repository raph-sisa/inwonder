import { useEffect, useRef } from 'react'
import { animate } from 'framer-motion'

// The Analog Network — overlapping circles of human connection
// Evokes strangers meeting, phone-free experience, organic community

function seeded(seed: number) {
  return () => {
    seed = (seed * 16807 + 0) % 2147483647
    return (seed - 1) / 2147483646
  }
}

const rand = seeded(77)

interface Ring {
  cx: number
  cy: number
  r: number
  delay: number
  strokeWidth: number
  drift: { x: number; y: number }
}

// Generate overlapping rings — clusters of 2-4 that intersect
const rings: Ring[] = []
const clusterCenters = [
  { x: 120, y: 100 },
  { x: 220, y: 130 },
  { x: 300, y: 90 },
  { x: 170, y: 170 },
  { x: 280, y: 170 },
]

clusterCenters.forEach((center, ci) => {
  const count = 2 + Math.floor(rand() * 3)
  for (let i = 0; i < count; i++) {
    rings.push({
      cx: center.x + (rand() - 0.5) * 60,
      cy: center.y + (rand() - 0.5) * 50,
      r: 25 + rand() * 35,
      delay: ci * 0.3 + i * 0.15,
      strokeWidth: 0.6 + rand() * 0.8,
      drift: {
        x: (rand() - 0.5) * 6,
        y: (rand() - 0.5) * 6,
      },
    })
  }
})

// Small dots at intersection points (representing people)
const dots = Array.from({ length: 18 }, () => ({
  x: 80 + rand() * 260,
  y: 50 + rand() * 150,
  r: 1.5 + rand() * 2,
  delay: rand() * 2,
}))

export function AnalogNetworkIllustration({ className = '' }: { className?: string }) {
  const ringRefs = useRef<(SVGCircleElement | null)[]>([])
  const dotRefs = useRef<(SVGCircleElement | null)[]>([])

  useEffect(() => {
    const controls: ReturnType<typeof animate>[] = []

    // Draw in rings with a subtle breathing drift
    ringRefs.current.forEach((el, i) => {
      if (!el) return
      const ring = rings[i]
      const circumference = 2 * Math.PI * ring.r

      el.style.strokeDasharray = `${circumference}`
      el.style.strokeDashoffset = `${circumference}`
      el.style.opacity = '0'

      // Draw in
      controls.push(
        animate(circumference, 0, {
          duration: 1.8,
          delay: ring.delay + 0.3,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (v) => {
            el.style.strokeDashoffset = `${v}`
            el.style.opacity = `${1 - v / circumference}`
          },
        })
      )

      // Gentle drift animation
      controls.push(
        animate(0, 1, {
          duration: 4 + rand() * 3,
          delay: ring.delay + 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          onUpdate: (v) => {
            const dx = ring.drift.x * v
            const dy = ring.drift.y * v
            el.setAttribute('cx', `${ring.cx + dx}`)
            el.setAttribute('cy', `${ring.cy + dy}`)
          },
        })
      )
    })

    // Fade in dots
    dotRefs.current.forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'

      controls.push(
        animate(0, 1, {
          duration: 0.6,
          delay: dots[i].delay + 1,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (v) => { el.style.opacity = `${v * 0.6}` },
        })
      )

      // Subtle pulse
      controls.push(
        animate(dots[i].r, dots[i].r * 1.4, {
          duration: 2 + rand() * 2,
          delay: dots[i].delay + 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          onUpdate: (v) => { el.setAttribute('r', `${v}`) },
        })
      )
    })

    return () => controls.forEach((c) => c.stop())
  }, [])

  return (
    <svg viewBox="0 0 400 240" className={className} aria-label="Analog network illustration">
      {/* Warm cream background */}
      <rect width="400" height="240" fill="#f5ede6" />
      <defs>
        <radialGradient id="analog-glow" cx="45%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#c2703e" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#f5ede6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="240" fill="url(#analog-glow)" />

      {/* Rings */}
      {rings.map((ring, i) => (
        <circle
          key={`r-${i}`}
          ref={(el) => { ringRefs.current[i] = el }}
          cx={ring.cx}
          cy={ring.cy}
          r={ring.r}
          fill="none"
          stroke="#c2703e"
          strokeWidth={ring.strokeWidth}
          strokeOpacity="0.25"
        />
      ))}

      {/* People dots */}
      {dots.map((dot, i) => (
        <circle
          key={`d-${i}`}
          ref={(el) => { dotRefs.current[i] = el }}
          cx={dot.x}
          cy={dot.y}
          r={dot.r}
          fill="#2c2420"
        />
      ))}
    </svg>
  )
}
