import { useEffect, useRef } from 'react'
import { animate } from 'framer-motion'

// Automated Supplier Pipeline — particles flowing through channels
// Evokes data pipelines, filtering, AI/ML processing

function seeded(seed: number) {
  return () => {
    seed = (seed * 16807 + 0) % 2147483647
    return (seed - 1) / 2147483646
  }
}

const rand = seeded(99)

// Pipeline stages (x positions of vertical dividers)
const stages = [100, 180, 260, 340]

// Particles that flow through the pipeline
const particles = Array.from({ length: 20 }, (_, i) => {
  const lane = Math.floor(rand() * 5)
  const yBase = 40 + lane * 35
  const yJitter = (rand() - 0.5) * 16
  return {
    startX: 20 + rand() * 30,
    endX: 350 + rand() * 30,
    y: yBase + yJitter,
    r: 2 + rand() * 2.5,
    duration: 2.5 + rand() * 2,
    delay: i * 0.2 + rand() * 0.5,
    // Some particles get filtered out (don't reach the end)
    filtered: rand() > 0.6,
    filterStage: Math.floor(rand() * 3) + 1,
    opacity: 0.3 + rand() * 0.5,
  }
})

export function BumoIllustration({ className = '' }: { className?: string }) {
  const particleRefs = useRef<(SVGCircleElement | null)[]>([])
  const trailRefs = useRef<(SVGLineElement | null)[]>([])

  useEffect(() => {
    const controls: ReturnType<typeof animate>[] = []

    particleRefs.current.forEach((el, i) => {
      if (!el) return
      const p = particles[i]
      const actualEnd = p.filtered ? stages[p.filterStage] - 10 : p.endX

      el.style.opacity = '0'

      // Animate particle across
      const ctrl = animate(p.startX, actualEnd, {
        duration: p.duration,
        delay: p.delay,
        ease: [0.4, 0, 0.2, 1],
        repeat: Infinity,
        repeatDelay: 1 + rand() * 2,
        onUpdate: (v) => {
          el.setAttribute('cx', `${v}`)
          el.style.opacity = v > p.startX + 5 ? `${p.opacity}` : '0'

          // Fade out at end
          const distToEnd = actualEnd - v
          if (distToEnd < 20) {
            el.style.opacity = `${p.opacity * (distToEnd / 20)}`
          }

          // Trail
          const trail = trailRefs.current[i]
          if (trail) {
            trail.setAttribute('x1', `${Math.max(p.startX, v - 25)}`)
            trail.setAttribute('x2', `${v}`)
            trail.style.opacity = el.style.opacity
          }
        },
      })
      controls.push(ctrl)
    })

    return () => controls.forEach((c) => c.stop())
  }, [])

  return (
    <svg viewBox="0 0 400 240" className={className} aria-label="Data pipeline illustration">
      {/* Deep plum background */}
      <rect width="400" height="240" fill="#1e1420" />
      <defs>
        <linearGradient id="bumo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#251828" stopOpacity="1" />
          <stop offset="100%" stopColor="#1a1220" stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#bumo-grad)" />

      {/* Stage dividers */}
      {stages.map((x, i) => (
        <g key={`stage-${i}`}>
          <line
            x1={x} y1="25" x2={x} y2="215"
            stroke="#c2703e"
            strokeWidth="0.5"
            strokeOpacity="0.15"
            strokeDasharray="4 4"
          />
          <text
            x={x}
            y="228"
            textAnchor="middle"
            fontSize="7"
            fontFamily="monospace"
            fill="#a89888"
            opacity="0.3"
          >
            {['INGEST', 'FILTER', 'SCORE', 'MATCH'][i]}
          </text>
        </g>
      ))}

      {/* Funnel shape hint */}
      <path
        d="M 30 25 L 380 80 M 30 215 L 380 160"
        stroke="#c2703e"
        strokeWidth="0.4"
        strokeOpacity="0.08"
        fill="none"
      />

      {/* Particle trails */}
      {particles.map((p, i) => (
        <line
          key={`trail-${i}`}
          ref={(el) => { trailRefs.current[i] = el }}
          x1={p.startX}
          y1={p.y}
          x2={p.startX}
          y2={p.y}
          stroke="#c2703e"
          strokeWidth={p.r * 0.6}
          strokeLinecap="round"
          strokeOpacity="0.15"
        />
      ))}

      {/* Particles */}
      {particles.map((p, i) => (
        <circle
          key={`p-${i}`}
          ref={(el) => { particleRefs.current[i] = el }}
          cx={p.startX}
          cy={p.y}
          r={p.r}
          fill={p.filtered ? '#a89888' : '#c2703e'}
        />
      ))}
    </svg>
  )
}
