import { motion } from 'framer-motion'

// Soft floating orbs that drift slowly — creates atmospheric depth
// Uses warm palette, blurred to feel organic

interface Orb {
  x: string
  y: string
  size: string
  color: string
  duration: number
  delay: number
  dx: string
  dy: string
}

const orbs: Orb[] = [
  {
    x: '62%', y: '25%', size: '20rem',
    color: 'rgba(194, 112, 62, 0.18)',
    duration: 25, delay: 0, dx: '40px', dy: '-30px',
  },
  {
    x: '78%', y: '58%', size: '15rem',
    color: 'rgba(212, 145, 95, 0.14)',
    duration: 30, delay: 0.3, dx: '-35px', dy: '25px',
  },
  {
    x: '48%', y: '68%', size: '11rem',
    color: 'rgba(194, 112, 62, 0.12)',
    duration: 22, delay: 0.6, dx: '25px', dy: '-40px',
  },
  {
    x: '82%', y: '18%', size: '9rem',
    color: 'rgba(168, 152, 136, 0.14)',
    duration: 28, delay: 0.2, dx: '-30px', dy: '20px',
  },
]

export function HeroAmbient({ className = '' }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: 'blur(30px)',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: [0, orb.dx, 0, `-${orb.dx.replace('-', '')}`, 0],
            y: [0, orb.dy, 0, `-${orb.dy.replace('-', '')}`, 0],
            scale: [1, 1.05, 0.95, 1.02, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
