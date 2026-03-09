import { motion } from 'framer-motion'

// Option B: Continuous line passing through recognizable shapes — screen, circle, pen, hand
export function LineDrawB({ className = '' }: { className?: string }) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { pathLength: { duration: 3, ease: 'easeInOut' }, opacity: { duration: 0.3 } },
    },
  }

  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        d={`
          M 40 200
          C 50 180, 60 140, 80 130
          L 140 130 L 140 80 L 80 80 L 80 130
          C 90 110, 110 100, 110 100
          L 110 130
          C 140 140, 155 150, 170 160
          C 185 170, 195 165, 200 150
          C 205 135, 210 130, 220 135
          C 240 145, 240 175, 220 185
          C 200 195, 180 185, 175 170
          C 170 155, 180 145, 195 150
          C 210 155, 210 170, 200 175
          C 220 180, 240 190, 260 180
          C 270 175, 275 160, 270 150
          L 265 120 L 275 90 L 260 95 L 270 150
          C 280 170, 300 185, 320 175
          C 330 170, 335 155, 340 140
          C 345 130, 350 135, 355 145
          C 358 155, 354 165, 345 170
          C 336 175, 340 160, 350 155
          C 355 150, 360 155, 365 165
          C 370 180, 360 200, 340 200
        `}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
        initial="hidden"
        animate="visible"
      />
    </svg>
  )
}
