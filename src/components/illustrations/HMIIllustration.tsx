import { useEffect, useRef } from 'react'
import { animate } from 'framer-motion'

// Abstract P&ID schematic: gray nominal elements with one orange alarm
// Demonstrates the HPHMI principle — color means deviation

export function HMIIllustration({ className = '' }: { className?: string }) {
  const alarmRef = useRef<SVGGElement | null>(null)
  const pulseRef = useRef<SVGCircleElement | null>(null)
  const elementsRef = useRef<SVGGElement | null>(null)

  useEffect(() => {
    // Fade in schematic elements
    if (elementsRef.current) {
      elementsRef.current.style.opacity = '0'
      animate(0, 1, {
        duration: 0.8,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (v) => {
          if (elementsRef.current) elementsRef.current.style.opacity = `${v}`
        },
      })
    }

    // Pulse the alarm element
    if (alarmRef.current) {
      alarmRef.current.style.opacity = '0'
      animate(0, 1, {
        duration: 0.6,
        delay: 0.8,
        ease: 'easeOut',
        onUpdate: (v) => {
          if (alarmRef.current) alarmRef.current.style.opacity = `${v}`
        },
      })
    }

    // Animate alarm pulse ring
    if (pulseRef.current) {
      pulseRef.current.style.opacity = '0'
      const loop = () => {
        animate(0, 1, {
          duration: 2,
          delay: 0.3,
          ease: 'easeOut',
          onUpdate: (v) => {
            if (!pulseRef.current) return
            const scale = 1 + v * 1.2
            pulseRef.current.style.transform = `scale(${scale})`
            pulseRef.current.style.transformOrigin = '310px 95px'
            pulseRef.current.style.opacity = `${(1 - v) * 0.4}`
          },
          onComplete: loop,
        })
      }
      loop()
    }
  }, [])

  return (
    <svg viewBox="0 0 400 240" className={className} aria-label="HMI alarm system illustration — gray schematic with orange warning element">
      {/* Dark background */}
      <rect width="400" height="240" fill="#1C1B1A" />

      {/* Subtle grid pattern */}
      <defs>
        <pattern id="hmi-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#2A2826" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="400" height="240" fill="url(#hmi-grid)" />

      {/* Schematic elements — all gray (nominal state) */}
      <g ref={elementsRef}>
        {/* Horizontal pipe runs */}
        <line x1="40" y1="120" x2="160" y2="120" stroke="#4A4744" strokeWidth="3" />
        <line x1="200" y1="120" x2="360" y2="120" stroke="#4A4744" strokeWidth="3" />
        <line x1="100" y1="80" x2="100" y2="160" stroke="#4A4744" strokeWidth="3" />

        {/* Tank 1 — left */}
        <rect x="55" y="70" width="30" height="50" rx="2" fill="none" stroke="#4A4744" strokeWidth="2" />
        <rect x="57" y="95" width="26" height="23" rx="1" fill="#3D3A38" opacity="0.5" />

        {/* Tank 2 — center */}
        <rect x="165" y="90" width="30" height="60" rx="2" fill="none" stroke="#4A4744" strokeWidth="2" />
        <rect x="167" y="125" width="26" height="23" rx="1" fill="#3D3A38" opacity="0.5" />

        {/* Valve symbols */}
        <polygon points="130,114 140,120 130,126" fill="#4A4744" />
        <polygon points="150,114 140,120 150,126" fill="#4A4744" />

        <polygon points="230,114 240,120 230,126" fill="#4A4744" />
        <polygon points="250,114 240,120 250,126" fill="#4A4744" />

        {/* Pump circle */}
        <circle cx="270" cy="120" r="12" fill="none" stroke="#4A4744" strokeWidth="2" />
        <path d="M264 120 L276 120 M270 114 L270 126" stroke="#4A4744" strokeWidth="1.5" />

        {/* Sensor indicators — small squares, all gray */}
        <rect x="85" y="75" width="8" height="8" rx="1" fill="#3D3A38" stroke="#4A4744" strokeWidth="1" />
        <rect x="170" y="85" width="8" height="8" rx="1" fill="#3D3A38" stroke="#4A4744" strokeWidth="1" />
        <rect x="135" y="105" width="8" height="8" rx="1" fill="#3D3A38" stroke="#4A4744" strokeWidth="1" />

        {/* Vertical branch */}
        <line x1="310" y1="80" x2="310" y2="160" stroke="#4A4744" strokeWidth="3" />

        {/* Tank 3 — right */}
        <rect x="295" y="140" width="30" height="40" rx="2" fill="none" stroke="#4A4744" strokeWidth="2" />
        <rect x="297" y="158" width="26" height="20" rx="1" fill="#3D3A38" opacity="0.5" />

        {/* Small sensor dots */}
        <circle cx="200" cy="120" r="3" fill="#3D3A38" stroke="#4A4744" strokeWidth="1" />
        <circle cx="340" cy="120" r="3" fill="#3D3A38" stroke="#4A4744" strokeWidth="1" />
      </g>

      {/* THE alarm — one orange element breaking the gray */}
      <g ref={alarmRef}>
        {/* Alarm pulse ring */}
        <circle
          ref={pulseRef}
          cx="310"
          cy="95"
          r="10"
          fill="none"
          stroke="#FF4C24"
          strokeWidth="1.5"
          opacity="0"
        />

        {/* Alarm sensor — orange */}
        <rect x="303" y="88" width="14" height="14" rx="2" fill="#FF4C24" opacity="0.9" />
        <text x="310" y="98" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#1C1B1A" fontWeight="bold">!</text>

        {/* Alarm label */}
        <text x="310" y="80" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#FF4C24" opacity="0.7">
          HIGH PRESS
        </text>
      </g>

      {/* Labels */}
      <text
        x="200"
        y="224"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="8"
        fill="#4A4744"
        letterSpacing="0.1em"
      >
        GRAY IS NOMINAL · COLOR IS DEVIATION
      </text>
    </svg>
  )
}
