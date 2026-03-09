import { motion } from 'framer-motion'

// Option D: A face/profile drawn in one continuous line
export function LineDrawD({ className = '' }: { className?: string }) {
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
      viewBox="0 0 300 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        d={`
          M 85 280
          C 90 260, 100 240, 105 220
          C 110 200, 108 185, 100 175
          C 90 162, 80 150, 78 135
          C 75 115, 82 95, 95 82
          C 110 67, 130 60, 150 58
          C 175 56, 198 62, 212 78
          C 225 92, 230 112, 228 130
          C 226 145, 220 155, 210 165
          C 200 175, 195 185, 195 200
          C 195 215, 200 235, 210 260
          C 215 275, 218 285, 215 290

          M 108 130
          C 112 122, 122 118, 130 120
          C 138 122, 142 130, 138 136
          C 134 142, 125 142, 120 138

          M 170 125
          C 174 117, 184 113, 192 115
          C 200 117, 204 125, 200 131
          C 196 137, 187 137, 182 133

          M 145 145
          C 148 155, 152 168, 150 178
          C 148 185, 142 188, 138 182

          M 118 195
          C 128 205, 142 212, 158 210
          C 170 208, 178 200, 182 192
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
