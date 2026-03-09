import { motion } from 'framer-motion'

// Option C: Asterisk/star that unfurls from a point into something organic
export function LineDrawC({ className = '' }: { className?: string }) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { pathLength: { duration: 2.5, ease: 'easeInOut' }, opacity: { duration: 0.3 } },
    },
  }

  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        d={`
          M 150 150
          C 150 130, 148 100, 145 70
          C 143 55, 148 45, 155 50
          C 160 55, 155 65, 150 70
          L 150 150

          C 165 140, 190 120, 210 105
          C 220 98, 230 100, 225 108
          C 220 115, 210 112, 210 105
          L 150 150

          C 168 155, 200 162, 230 168
          C 245 172, 250 180, 242 183
          C 235 185, 232 178, 230 168
          L 150 150

          C 160 168, 175 195, 185 220
          C 190 233, 185 242, 178 238
          C 172 234, 177 225, 185 220
          L 150 150

          C 140 168, 125 195, 112 218
          C 107 230, 98 232, 97 224
          C 96 216, 103 213, 112 218
          L 150 150

          C 135 158, 110 168, 82 175
          C 67 178, 58 173, 63 166
          C 68 160, 75 162, 82 175
          L 150 150

          C 138 140, 115 122, 95 108
          C 85 100, 82 92, 90 90
          C 98 88, 98 96, 95 108
          L 150 150
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
