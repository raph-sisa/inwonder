import { useEffect, useRef } from 'react'
import { animate } from 'framer-motion'

// Fabricated — generative circuit board traces
// Evokes PCBs, hardware builds, maker culture

function seeded(seed: number) {
  return () => {
    seed = (seed * 16807 + 0) % 2147483647
    return (seed - 1) / 2147483646
  }
}

const rand = seeded(55)

// Generate circuit traces — horizontal and vertical paths with right-angle turns
interface Trace {
  path: string
  delay: number
  width: number
}

function generateTrace(startX: number, startY: number, steps: number): string {
  let x = startX
  let y = startY
  let d = `M ${x} ${y}`
  let horizontal = rand() > 0.5

  for (let i = 0; i < steps; i++) {
    if (horizontal) {
      const dx = 20 + rand() * 60
      x += rand() > 0.5 ? dx : -dx
      x = Math.max(20, Math.min(380, x))
    } else {
      const dy = 15 + rand() * 40
      y += rand() > 0.5 ? dy : -dy
      y = Math.max(20, Math.min(220, y))
    }
    d += ` L ${Math.round(x)} ${Math.round(y)}`
    horizontal = !horizontal
  }
  return d
}

const traces: Trace[] = Array.from({ length: 8 }, (_, i) => ({
  path: generateTrace(30 + rand() * 340, 30 + rand() * 180, 3 + Math.floor(rand() * 4)),
  delay: i * 0.25,
  width: 0.8 + rand() * 0.8,
}))

// Component pads (where traces meet)
const pads = Array.from({ length: 12 }, () => ({
  x: 30 + rand() * 340,
  y: 30 + rand() * 180,
  r: 3 + rand() * 3,
  isVia: rand() > 0.6,
  delay: rand() * 1.5,
}))

// IC chip rectangles
const chips = [
  { x: 140 + rand() * 40, y: 80 + rand() * 30, w: 30 + rand() * 20, h: 18 + rand() * 10, delay: 0.8 },
  { x: 250 + rand() * 40, y: 130 + rand() * 30, w: 25 + rand() * 15, h: 14 + rand() * 8, delay: 1.2 },
]

export function FabricatedIllustration({ className = '' }: { className?: string }) {
  const traceRefs = useRef<(SVGPathElement | null)[]>([])
  const padRefs = useRef<(SVGGElement | null)[]>([])
  const chipRefs = useRef<(SVGRectElement | null)[]>([])

  useEffect(() => {
    const controls: ReturnType<typeof animate>[] = []

    // Draw in traces
    traceRefs.current.forEach((el, i) => {
      if (!el) return
      const length = el.getTotalLength()
      el.style.strokeDasharray = `${length}`
      el.style.strokeDashoffset = `${length}`

      controls.push(
        animate(length, 0, {
          duration: 1.5,
          delay: traces[i].delay + 0.2,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (v) => { el.style.strokeDashoffset = `${v}` },
        })
      )
    })

    // Fade in pads
    padRefs.current.forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'scale(0)'
      el.style.transformOrigin = 'center'

      controls.push(
        animate(0, 1, {
          duration: 0.4,
          delay: pads[i].delay + 0.8,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (v) => {
            el.style.opacity = `${v}`
            el.style.transform = `scale(${v})`
          },
        })
      )
    })

    // Fade in chips
    chipRefs.current.forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'

      controls.push(
        animate(0, 1, {
          duration: 0.6,
          delay: chips[i].delay + 0.5,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (v) => { el.style.opacity = `${v}` },
        })
      )
    })

    return () => controls.forEach((c) => c.stop())
  }, [])

  return (
    <svg viewBox="0 0 400 240" className={className} aria-label="Circuit board illustration">
      {/* Dark green PCB background */}
      <rect width="400" height="240" fill="#0e1a14" />
      <defs>
        <radialGradient id="pcb-glow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#1a3a24" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0e1a14" stopOpacity="0" />
        </radialGradient>
        <pattern id="pcb-grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#c2703e" strokeWidth="0.15" strokeOpacity="0.06" />
        </pattern>
      </defs>
      <rect width="400" height="240" fill="url(#pcb-glow)" />
      <rect width="400" height="240" fill="url(#pcb-grid)" />

      {/* Traces */}
      {traces.map((trace, i) => (
        <path
          key={`t-${i}`}
          ref={(el) => { traceRefs.current[i] = el }}
          d={trace.path}
          stroke="#c2703e"
          strokeWidth={trace.width}
          strokeOpacity="0.35"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      ))}

      {/* Component pads */}
      {pads.map((pad, i) => (
        <g
          key={`pad-${i}`}
          ref={(el) => { padRefs.current[i] = el }}
        >
          <circle cx={pad.x} cy={pad.y} r={pad.r} fill="#d4915f" opacity="0.7" />
          {pad.isVia && (
            <circle cx={pad.x} cy={pad.y} r={pad.r * 0.4} fill="#fdf8f4" />
          )}
          <circle cx={pad.x} cy={pad.y} r={pad.r * 1.8} fill="#c2703e" opacity="0.05" />
        </g>
      ))}

      {/* IC chips */}
      {chips.map((chip, i) => (
        <g key={`chip-${i}`}>
          <rect
            ref={(el) => { chipRefs.current[i] = el }}
            x={chip.x}
            y={chip.y}
            width={chip.w}
            height={chip.h}
            rx="2"
            fill="#d4915f"
            opacity="0.6"
          />
          {/* Chip pins */}
          {Array.from({ length: Math.floor(chip.w / 6) }).map((_, pi) => (
            <g key={`pin-${i}-${pi}`}>
              <rect
                x={chip.x + 3 + pi * 6}
                y={chip.y - 2}
                width="2"
                height="2"
                fill="#a89888"
                opacity="0.4"
              />
              <rect
                x={chip.x + 3 + pi * 6}
                y={chip.y + chip.h}
                width="2"
                height="2"
                fill="#a89888"
                opacity="0.4"
              />
            </g>
          ))}
        </g>
      ))}
    </svg>
  )
}
