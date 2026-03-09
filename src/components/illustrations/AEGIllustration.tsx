import { useEffect, useRef } from 'react'
import { animate } from 'framer-motion'

// Global Touring Platform — interconnected cities on curved paths
// Evokes tour routes, global networks, enterprise scale

interface Node {
  x: number
  y: number
  r: number
  delay: number
}

interface Edge {
  from: number
  to: number
  delay: number
}

// Deterministic "random" from seed
function seeded(seed: number) {
  return () => {
    seed = (seed * 16807 + 0) % 2147483647
    return (seed - 1) / 2147483646
  }
}

const rand = seeded(42)

// Generate a network of cities
const nodes: Node[] = Array.from({ length: 14 }, (_, i) => ({
  x: 40 + rand() * 320,
  y: 30 + rand() * 180,
  r: 2 + rand() * 3,
  delay: i * 0.15,
}))

// Connect nearby nodes with edges
const edges: Edge[] = []
for (let i = 0; i < nodes.length; i++) {
  for (let j = i + 1; j < nodes.length; j++) {
    const dx = nodes[i].x - nodes[j].x
    const dy = nodes[i].y - nodes[j].y
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < 120) {
      edges.push({ from: i, to: j, delay: (i + j) * 0.08 })
    }
  }
}

function curvedPath(a: Node, b: Node): string {
  const mx = (a.x + b.x) / 2
  const my = (a.y + b.y) / 2
  const dx = b.x - a.x
  const dy = b.y - a.y
  const cx = mx - dy * 0.2
  const cy = my + dx * 0.2
  return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`
}

export function AEGIllustration({ className = '' }: { className?: string }) {
  const pathRefs = useRef<(SVGPathElement | null)[]>([])
  const nodeRefs = useRef<(SVGCircleElement | null)[]>([])

  useEffect(() => {
    // Draw in edges
    pathRefs.current.forEach((path, i) => {
      if (!path) return
      const length = path.getTotalLength()
      path.style.strokeDasharray = `${length}`
      path.style.strokeDashoffset = `${length}`

      animate(length, 0, {
        duration: 1.2,
        delay: edges[i].delay + 0.3,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (v) => { path.style.strokeDashoffset = `${v}` },
      })
    })

    // Fade in nodes
    nodeRefs.current.forEach((node, i) => {
      if (!node) return
      node.style.opacity = '0'
      node.style.transform = 'scale(0)'
      node.style.transformOrigin = 'center'

      animate(0, 1, {
        duration: 0.5,
        delay: nodes[i].delay + 0.2,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (v) => {
          node.style.opacity = `${v}`
          node.style.transform = `scale(${v})`
        },
      })
    })
  }, [])

  return (
    <svg viewBox="0 0 400 240" className={className} aria-label="Touring network illustration">
      {/* Deep navy background */}
      <rect width="400" height="240" fill="#141825" />
      <defs>
        <radialGradient id="aeg-glow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#c2703e" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#141825" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="240" fill="url(#aeg-glow)" />

      {/* Edges */}
      {edges.map((edge, i) => (
        <path
          key={`e-${i}`}
          ref={(el) => { pathRefs.current[i] = el }}
          d={curvedPath(nodes[edge.from], nodes[edge.to])}
          stroke="#c2703e"
          strokeWidth="0.8"
          strokeOpacity="0.3"
          fill="none"
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <g key={`n-${i}`}>
          {/* Glow */}
          <circle
            cx={node.x}
            cy={node.y}
            r={node.r * 2.5}
            fill="#c2703e"
            opacity="0.06"
          />
          {/* Node */}
          <circle
            ref={(el) => { nodeRefs.current[i] = el }}
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill="#d4915f"
          />
        </g>
      ))}
    </svg>
  )
}
