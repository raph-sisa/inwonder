import { useEffect, useRef } from 'react'
import { animate } from 'framer-motion'

// Stylized ring with radiating haptic vibration waves
// Warm cream + coral palette matching Sandbar's brand

export function HapticRingIllustration({ className = '' }: { className?: string }) {
  const waveRefs = useRef<(SVGEllipseElement | null)[]>([])
  const pulseRefs = useRef<(SVGCircleElement | null)[]>([])
  const ringRef = useRef<SVGGElement | null>(null)

  useEffect(() => {
    // Fade in ring
    if (ringRef.current) {
      ringRef.current.style.opacity = '0'
      animate(0, 1, {
        duration: 0.8,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (v) => {
          if (ringRef.current) ringRef.current.style.opacity = `${v}`
        },
      })
    }

    // Animate haptic waves outward
    waveRefs.current.forEach((wave, i) => {
      if (!wave) return
      wave.style.opacity = '0'

      const loop = () => {
        animate(0, 1, {
          duration: 1.8,
          delay: i * 0.35,
          ease: 'easeOut',
          onUpdate: (v) => {
            if (!wave) return
            const scale = 1 + v * 0.8
            wave.style.transform = `scale(${scale})`
            wave.style.transformOrigin = 'center'
            wave.style.opacity = `${(1 - v) * 0.5}`
          },
          onComplete: loop,
        })
      }
      loop()
    })

    // Animate pulse dots
    pulseRefs.current.forEach((dot, i) => {
      if (!dot) return
      dot.style.opacity = '0'

      const loop = () => {
        animate(0, 1, {
          duration: 2.4,
          delay: 0.6 + i * 0.5,
          ease: 'easeOut',
          onUpdate: (v) => {
            if (!dot) return
            dot.style.opacity = `${v < 0.3 ? v / 0.3 : (1 - v) / 0.7}`
          },
          onComplete: loop,
        })
      }
      loop()
    })
  }, [])

  return (
    <svg viewBox="0 0 400 240" className={className} aria-label="Haptic ring illustration with vibration waves">
      {/* Warm cream background */}
      <rect width="400" height="240" fill="#FAF8F0" />

      {/* Subtle radial glow behind ring */}
      <defs>
        <radialGradient id="haptic-glow" cx="50%" cy="50%" r="40%">
          <stop offset="0%" stopColor="#FF4C24" stopOpacity="0.08" />
          <stop offset="60%" stopColor="#FF4C24" stopOpacity="0.03" />
          <stop offset="100%" stopColor="#FAF8F0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ring-band" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2A2826" />
          <stop offset="40%" stopColor="#0C0B0B" />
          <stop offset="100%" stopColor="#1A1918" />
        </linearGradient>
        <linearGradient id="ring-inner" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3D3A38" />
          <stop offset="100%" stopColor="#252322" />
        </linearGradient>
        <linearGradient id="ring-highlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.15" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="400" height="240" fill="url(#haptic-glow)" />

      {/* Haptic vibration waves — concentric ellipses */}
      {[0, 1, 2, 3].map((i) => (
        <ellipse
          key={`wave-${i}`}
          ref={(el) => { waveRefs.current[i] = el }}
          cx="200"
          cy="120"
          rx={55 + i * 18}
          ry={38 + i * 12}
          fill="none"
          stroke="#FF4C24"
          strokeWidth="1"
          opacity="0"
        />
      ))}

      {/* Floating pulse dots — representing haptic events */}
      {[
        { x: 130, y: 85 },
        { x: 270, y: 90 },
        { x: 145, y: 155 },
        { x: 258, y: 152 },
        { x: 120, y: 118 },
        { x: 280, y: 122 },
      ].map((pos, i) => (
        <circle
          key={`pulse-${i}`}
          ref={(el) => { pulseRefs.current[i] = el }}
          cx={pos.x}
          cy={pos.y}
          r="2"
          fill="#FF4C24"
          opacity="0"
        />
      ))}

      {/* Ring — isometric-ish side view */}
      <g ref={ringRef}>
        {/* Ring shadow */}
        <ellipse
          cx="200"
          cy="162"
          rx="42"
          ry="8"
          fill="#0C0B0B"
          opacity="0.1"
        />

        {/* Ring band — outer */}
        <ellipse
          cx="200"
          cy="120"
          rx="44"
          ry="50"
          fill="url(#ring-band)"
          stroke="#3D3A38"
          strokeWidth="0.5"
        />

        {/* Ring band — inner cutout */}
        <ellipse
          cx="200"
          cy="120"
          rx="32"
          ry="38"
          fill="url(#ring-inner)"
        />

        {/* Inner cavity (darker) */}
        <ellipse
          cx="200"
          cy="120"
          rx="30"
          ry="36"
          fill="#FAF8F0"
        />

        {/* Ring top surface highlight */}
        <ellipse
          cx="200"
          cy="120"
          rx="44"
          ry="50"
          fill="url(#ring-highlight)"
          clipPath="inset(0 0 50% 0)"
        />

        {/* Button / sensor area — subtle raised rectangle on the outer band */}
        <rect
          x="194"
          y="68"
          width="12"
          height="6"
          rx="2"
          fill="#1A1918"
          stroke="#3D3A38"
          strokeWidth="0.5"
        />

        {/* Button indicator — tiny coral dot */}
        <circle
          cx="200"
          cy="71"
          r="1.2"
          fill="#FF4C24"
          opacity="0.8"
        />

        {/* Inner ring surface details — sensor strip */}
        <path
          d="M182 120 Q200 132 218 120"
          fill="none"
          stroke="#3D3A38"
          strokeWidth="0.5"
          opacity="0.5"
        />
      </g>

      {/* Labels */}
      <text
        x="200"
        y="224"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="8"
        fill="#9C9890"
        letterSpacing="0.1em"
      >
        SINGLE LRA · ~150 HZ · HAPTIC-ONLY MODE
      </text>
    </svg>
  )
}
