import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  stagger?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  accent?: string[]
  once?: boolean
}

export function TextReveal({
  children,
  className = '',
  delay = 0,
  stagger = 0.04,
  as: Tag = 'span',
  accent,
  once = true,
}: TextRevealProps) {
  const words = children.split(' ')
  const MotionTag = motion.create(Tag)

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => {
        const isAccent = accent?.some((a) => word.toLowerCase().includes(a.toLowerCase()))
        return (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className={`inline-block ${isAccent ? 'text-accent' : ''}`}
              variants={{
                hidden: { y: '100%', opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && <span>&nbsp;</span>}
          </span>
        )
      })}
    </MotionTag>
  )
}

// Simple fade-up with power3.out easing
interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  once?: boolean
}

export function Reveal({ children, className = '', delay = 0, once = true }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
