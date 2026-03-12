import { useEffect, useRef, useMemo } from 'react'
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { interpolate } from 'flubber'

// ═══════════════════════════════════════════════════
// Scene 1: Solar system — Sun with orbiting planets
// "I like making things and gathering people to learn"
// ═══════════════════════════════════════════════════

// Sun body — large circle with some internal detail for 3D depth
const SUN_PATH = `
  M 150 60
  C 170 58 192 66 208 80
  C 224 94 234 114 238 136
  C 242 158 238 182 228 200
  C 218 218 202 230 182 236
  C 162 242 140 240 122 234
  C 104 226 88 212 78 196
  C 68 180 62 158 62 138
  C 62 118 68 98 80 82
  C 92 66 110 60 130 58
  C 138 57 144 58 150 60
  Z
`

// Sun surface arcs — suggest curvature and depth
const SUN_DETAILS = [
  // Terminator shadow arc (right side depth)
  `M 215 82 C 232 105 240 135 238 165 C 236 195 225 218 208 232`,
  // Surface swirl 1
  `M 105 120 C 118 115 135 118 148 128 C 158 136 155 145 142 142`,
  // Surface swirl 2
  `M 165 170 C 178 165 192 172 195 185 C 198 196 188 200 180 195`,
  // Inner glow arc
  `M 120 95 C 140 88 168 88 188 98`,
]

// Corona / rays emanating from the sun
const CORONA_PATHS = [
  `M 150 52 L 150 34`,
  `M 195 68 L 208 52`,
  `M 228 100 L 248 88`,
  `M 240 148 L 260 148`,
  `M 228 196 L 248 210`,
  `M 195 228 L 208 244`,
  `M 150 244 L 150 262`,
  `M 105 228 L 92 244`,
  `M 72 196 L 52 210`,
  `M 60 148 L 40 148`,
  `M 72 100 L 52 88`,
  `M 105 68 L 92 52`,
]

// Orbiting planets — [orbitRadiusX, orbitRadiusY, size, speed, startAngle]
const PLANETS = [
  { rx: 115, ry: 35, r: 7, speed: 0.008, start: 0.4 },
  { rx: 135, ry: 42, r: 5, speed: -0.012, start: 2.2 },
  { rx: 100, ry: 30, r: 9, speed: 0.006, start: 4.5 },
  { rx: 128, ry: 38, r: 4, speed: 0.015, start: 1.1 },
  { rx: 148, ry: 48, r: 6, speed: -0.009, start: 3.8 },
]

// ═══════════════════════════════════════════════════
// Scene 2: Astronaut tethered to rocket ship
// "Here's what I'm exploring now"
// ═══════════════════════════════════════════════════

// Astronaut — proper spacesuit: round helmet with visor reflection,
// bulky torso with life support pack, thick gloved arms floating outward,
// chunky boots, proportioned like a real EVA suit
const ASTRONAUT_PATH = `
  M 150 48
  C 138 48 128 56 126 68
  C 124 80 128 90 134 94
  L 132 98
  C 128 100 126 104 126 110
  L 124 118
  C 122 120 118 122 114 124
  L 100 130
  C 94 132 88 136 84 142
  L 78 158
  C 74 164 72 172 76 176
  C 80 180 86 178 90 174
  L 104 154
  C 108 150 112 148 116 148
  L 120 150
  C 122 152 122 156 122 160
  L 120 170
  L 118 194
  C 118 198 116 202 114 206
  L 108 220
  L 102 234
  C 100 240 96 248 94 254
  C 92 260 94 266 100 266
  L 110 266
  C 116 266 120 262 122 256
  L 130 230
  C 132 224 134 218 136 210
  L 140 190
  C 142 186 146 184 150 184
  C 154 184 158 186 160 190
  L 164 210
  C 166 218 168 224 170 230
  L 178 256
  C 180 262 184 266 190 266
  L 200 266
  C 206 266 208 260 206 254
  L 198 234
  L 192 220
  C 190 216 188 210 186 206
  L 182 194
  L 180 170
  L 178 160
  C 178 156 178 152 180 150
  L 184 148
  C 188 148 192 150 196 154
  L 210 174
  C 214 178 220 180 224 176
  C 228 172 226 164 222 158
  L 216 142
  C 212 136 206 132 200 130
  L 186 124
  C 182 122 178 120 176 118
  L 174 110
  C 174 104 172 100 168 98
  L 166 94
  C 172 90 176 80 174 68
  C 172 56 162 48 150 48
  Z
`

// Helmet visor — curved reflective shield across face
const VISOR_PATH = `
  M 134 62
  C 132 56 138 50 150 50
  C 162 50 168 56 166 62
  C 166 72 160 80 150 82
  C 140 80 134 72 134 62
  Z
`

// Visor reflection glint
const VISOR_GLINT = `
  M 140 58 C 142 55 146 54 148 56
`

// Life support backpack — visible on left side of torso
const BACKPACK_PATH = `
  M 122 108 L 118 108 C 114 108 112 112 112 116
  L 112 155 C 112 160 114 164 118 164
  L 122 162
`

// Rocket ship — classic shape: nose cone, body tube, two fins, porthole
const ROCKET_PATH = `
  M 255 12
  C 253 6 250 2 247 2
  C 244 2 241 6 239 12
  L 234 32
  L 232 32
  C 230 32 228 34 228 36
  L 228 72
  C 228 76 230 80 232 82
  L 226 86
  C 222 90 220 96 224 100
  L 232 96
  L 232 82
  L 234 82
  L 234 36
  L 260 36
  L 260 82
  L 262 82
  L 262 96
  L 270 100
  C 274 96 272 90 268 86
  L 266 82
  C 268 80 270 76 270 72
  L 270 36
  C 270 34 268 32 266 32
  L 262 32
  Z
`

// Rocket porthole
const PORTHOLE_PATH = `
  M 247 50
  C 243 50 240 53 240 57
  C 240 61 243 64 247 64
  C 251 64 254 61 254 57
  C 254 53 251 50 247 50
  Z
`

// Rocket flame — three tongues
const FLAME_PATH = `
  M 235 96 C 233 104 231 112 234 122 C 237 112 236 104 238 96
  M 244 96 C 242 108 240 118 247 130 C 250 118 248 108 250 96
  M 258 96 C 256 104 254 112 257 122 C 260 112 259 104 261 96
`

// Tether — gentle curve from astronaut to rocket
const TETHER_PATH = `
  M 174 95
  C 190 85 210 68 228 52
  C 235 46 240 40 244 34
`

// Stars
const STAR_PATHS = [
  `M 35 50 L 35 58 M 31 54 L 39 54`,
  `M 22 165 L 22 171 M 19 168 L 25 168`,
  `M 278 135 L 278 141 M 275 138 L 281 138`,
  `M 265 225 L 265 231 M 262 228 L 268 228`,
  `M 48 245 L 48 251 M 45 248 L 51 248`,
  `M 15 95 L 15 99 M 13 97 L 17 97`,
  `M 288 195 L 288 199 M 286 197 L 290 197`,
]

const DOT_STARS: [number, number][] = [
  [28, 130], [52, 38], [72, 260], [245, 105], [258, 260],
  [12, 220], [292, 155], [42, 195], [275, 65], [220, 280],
  [8, 65], [288, 230], [38, 275], [230, 22], [62, 90],
  [285, 85], [18, 250], [272, 172],
]

// ═══════════════════════════════════════════════════

function clamp01(v: number) {
  return Math.max(0, Math.min(1, v))
}

interface Props {
  className?: string
  scrollRef: React.RefObject<HTMLElement | null>
}

export function HeroIllustration({ className = '', scrollRef }: Props) {
  // ── Refs ──
  const bodyStrokeRef = useRef<SVGPathElement>(null)
  const bodyFillRef = useRef<SVGPathElement>(null)
  const sunDetailRefs = useRef<(SVGPathElement | null)[]>([])
  const coronaRefs = useRef<(SVGPathElement | null)[]>([])
  const planetFillRefs = useRef<(SVGCircleElement | null)[]>([])
  const planetStrokeRefs = useRef<(SVGCircleElement | null)[]>([])
  const visorRef = useRef<SVGPathElement>(null)
  const visorGlintRef = useRef<SVGPathElement>(null)
  const backpackRef = useRef<SVGPathElement>(null)
  const rocketRef = useRef<SVGPathElement>(null)
  const portholeRef = useRef<SVGPathElement>(null)
  const flameRef = useRef<SVGPathElement>(null)
  const tetherRef = useRef<SVGPathElement>(null)
  const starRefs = useRef<(SVGPathElement | null)[]>([])
  const dotRefs = useRef<(SVGCircleElement | null)[]>([])
  const filterRef = useRef<SVGFETurbulenceElement>(null)

  // ── Scroll ──
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end start'],
  })

  const morphT = useTransform(scrollYProgress, [0, 0.35], [0, 1])
  const sunDetailsFade = useTransform(scrollYProgress, [0, 0.18], [1, 0])
  const coronaFade = useTransform(scrollYProgress, [0, 0.15], [0.6, 0])
  const planetsFade = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const astroDetailFade = useTransform(scrollYProgress, [0.22, 0.4], [0, 1])
  const starsFade = useTransform(scrollYProgress, [0.15, 0.35], [0, 0.5])

  const sunDetailsFadeRef = useRef(1)
  const coronaFadeRef = useRef(0.6)
  const planetsFadeRef = useRef(1)
  const astroDetailFadeRef = useRef(0)
  const starsFadeRef = useRef(0)

  useMotionValueEvent(sunDetailsFade, 'change', (v) => { sunDetailsFadeRef.current = v })
  useMotionValueEvent(coronaFade, 'change', (v) => { coronaFadeRef.current = v })
  useMotionValueEvent(planetsFade, 'change', (v) => { planetsFadeRef.current = v })
  useMotionValueEvent(astroDetailFade, 'change', (v) => { astroDetailFadeRef.current = v })
  useMotionValueEvent(starsFade, 'change', (v) => { starsFadeRef.current = v })

  // ── Flubber: sun → astronaut ──
  const bodyInterpolator = useMemo(
    () => interpolate(SUN_PATH, ASTRONAUT_PATH, { maxSegmentLength: 8 }),
    []
  )

  useEffect(() => {
    const unsub = morphT.on('change', (v) => {
      const d = bodyInterpolator(clamp01(v))
      if (bodyStrokeRef.current) bodyStrokeRef.current.setAttribute('d', d)
      if (bodyFillRef.current) bodyFillRef.current.setAttribute('d', d)
    })
    return unsub
  }, [morphT, bodyInterpolator])

  // ── rAF loop: planet orbits + boiling + fades ──
  useEffect(() => {
    let raf: number
    let frameCount = 0
    let lastFilterTime = 0
    const angles = PLANETS.map((p) => p.start)

    function tick(time: number) {
      const cx = 150, cy = 150

      // Planet orbits
      const pf = planetsFadeRef.current
      PLANETS.forEach((planet, i) => {
        angles[i] = (angles[i] + planet.speed) % (Math.PI * 2)
        const px = cx + planet.rx * Math.cos(angles[i])
        const py = cy + planet.ry * Math.sin(angles[i])
        const behind = Math.sin(angles[i]) < 0

        // Behind layer
        const behindEl = planetFillRefs.current[i]
        if (behindEl) {
          behindEl.setAttribute('cx', String(px))
          behindEl.setAttribute('cy', String(py))
          behindEl.setAttribute('opacity', String(behind ? pf : 0))
        }
        // Front layer
        const frontEl = planetStrokeRefs.current[i]
        if (frontEl) {
          frontEl.setAttribute('cx', String(px))
          frontEl.setAttribute('cy', String(py))
          frontEl.setAttribute('opacity', String(!behind ? pf : 0))
        }
      })

      // Sun details
      sunDetailRefs.current.forEach((el, i) => {
        if (el) el.setAttribute('opacity', String(sunDetailsFadeRef.current * (i === 0 ? 0.4 : 0.3)))
      })

      // Corona
      coronaRefs.current.forEach((el) => {
        if (el) el.setAttribute('opacity', String(coronaFadeRef.current))
      })

      // Astronaut details
      const af = astroDetailFadeRef.current
      if (visorRef.current) visorRef.current.setAttribute('opacity', String(af))
      if (visorGlintRef.current) visorGlintRef.current.setAttribute('opacity', String(af * 0.6))
      if (backpackRef.current) backpackRef.current.setAttribute('opacity', String(af))
      if (rocketRef.current) rocketRef.current.setAttribute('opacity', String(af))
      if (portholeRef.current) portholeRef.current.setAttribute('opacity', String(af))
      if (flameRef.current) flameRef.current.setAttribute('opacity', String(af * 0.7))
      if (tetherRef.current) tetherRef.current.setAttribute('opacity', String(af))

      // Stars
      const sf = starsFadeRef.current
      starRefs.current.forEach((el) => { if (el) el.setAttribute('opacity', String(sf)) })
      dotRefs.current.forEach((el) => { if (el) el.setAttribute('opacity', String(sf * 0.6)) })

      // Boiling filter
      if (time - lastFilterTime > 120) {
        frameCount = (frameCount + 1) % 200
        if (filterRef.current) filterRef.current.setAttribute('seed', String(frameCount))
        lastFilterTime = time
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className={className}>
      <svg viewBox="0 0 300 300" fill="none" className="w-full h-full">
        <defs>
          <filter id="boil" x="-8%" y="-8%" width="116%" height="116%">
            <feTurbulence
              ref={filterRef}
              type="fractalNoise"
              baseFrequency="0.035"
              numOctaves="4"
              seed={0}
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="3"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>

        <g filter="url(#boil)" className="text-warm-700">
          {/* ── Dot stars (fade in) ── */}
          {DOT_STARS.map(([cx, cy], i) => (
            <circle
              key={`dot-${i}`}
              ref={(el) => { dotRefs.current[i] = el }}
              cx={cx}
              cy={cy}
              r={1.2}
              fill="currentColor"
              opacity={0}
            />
          ))}

          {/* ── Cross stars (fade in) ── */}
          {STAR_PATHS.map((d, i) => (
            <path
              key={`star-${i}`}
              ref={(el) => { starRefs.current[i] = el }}
              d={d}
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              fill="none"
              opacity={0}
            />
          ))}

          {/* ── Corona rays (fade out) ── */}
          {CORONA_PATHS.map((d, i) => (
            <path
              key={`corona-${i}`}
              ref={(el) => { coronaRefs.current[i] = el }}
              d={d}
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              fill="none"
              opacity={0.6}
            />
          ))}

          {/* ── Planets behind sun (z-order: behind) ── */}
          {PLANETS.map((p, i) => (
            <circle
              key={`p-behind-${i}`}
              ref={(el) => { planetFillRefs.current[i] = el }}
              cx={150}
              cy={150}
              r={p.r}
              stroke="currentColor"
              strokeWidth="1.2"
              fill="none"
              opacity={0}
            />
          ))}

          {/* ── Sun/Astronaut body fill (solid, occludes planets behind) ── */}
          <path
            ref={bodyFillRef}
            d={SUN_PATH}
            stroke="none"
            fill="var(--color-warm-50)"
          />

          {/* ── Sun surface details (fade out) ── */}
          {SUN_DETAILS.map((d, i) => (
            <path
              key={`detail-${i}`}
              ref={(el) => { sunDetailRefs.current[i] = el }}
              d={d}
              stroke="currentColor"
              strokeWidth={i === 0 ? '1' : '0.8'}
              strokeLinecap="round"
              fill="none"
              opacity={i === 0 ? 0.4 : 0.3}
            />
          ))}

          {/* ── Main body stroke: sun → astronaut ── */}
          <path
            ref={bodyStrokeRef}
            d={SUN_PATH}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* ── Planets in front of sun (z-order: front) ── */}
          {PLANETS.map((p, i) => (
            <circle
              key={`p-front-${i}`}
              ref={(el) => { planetStrokeRefs.current[i] = el }}
              cx={150}
              cy={150}
              r={p.r}
              stroke="currentColor"
              strokeWidth="1.2"
              fill="var(--color-warm-50)"
              opacity={0}
            />
          ))}

          {/* ── Backpack / life support (fades in) ── */}
          <path
            ref={backpackRef}
            d={BACKPACK_PATH}
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity={0}
          />

          {/* ── Rocket ship (fades in) ── */}
          <path
            ref={rocketRef}
            d={ROCKET_PATH}
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity={0}
          />

          {/* ── Rocket porthole (fades in) ── */}
          <path
            ref={portholeRef}
            d={PORTHOLE_PATH}
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity={0}
          />

          {/* ── Rocket flame (fades in) ── */}
          <path
            ref={flameRef}
            d={FLAME_PATH}
            stroke="currentColor"
            strokeWidth="0.8"
            strokeLinecap="round"
            fill="none"
            opacity={0}
          />

          {/* ── Tether (fades in) ── */}
          <path
            ref={tetherRef}
            d={TETHER_PATH}
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="4 6"
            fill="none"
            opacity={0}
          />

          {/* ── Visor (fades in) ── */}
          <path
            ref={visorRef}
            d={VISOR_PATH}
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity={0}
          />

          {/* ── Visor glint (fades in) ── */}
          <path
            ref={visorGlintRef}
            d={VISOR_GLINT}
            stroke="currentColor"
            strokeWidth="0.8"
            strokeLinecap="round"
            fill="none"
            opacity={0}
          />
        </g>
      </svg>
    </div>
  )
}
