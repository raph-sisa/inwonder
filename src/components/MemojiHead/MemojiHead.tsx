import { useState } from 'react'
import { motion, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { MemojiCanvas } from './MemojiCanvas'
import { EyeOverlay } from './EyeOverlay'
import { useMousePosition } from './useMousePosition'
import { useBlink } from './useBlink'
import { MOTION_CONFIG } from './constants'

interface MemojiHeadProps {
  className?: string
}

export function MemojiHead({ className = '' }: MemojiHeadProps) {
  const [loaded, setLoaded] = useState(false)
  const reducedMotion = useReducedMotion()
  const animationsEnabled = !reducedMotion

  const { x: mouseX, y: mouseY } = useMousePosition()
  const isBlinking = useBlink(animationsEnabled)

  // Subtle 3D tilt via CSS perspective (complements the WebGL depth displacement)
  const tiltSpring = MOTION_CONFIG.tiltSpring
  const smoothX = useSpring(mouseX, tiltSpring)
  const smoothY = useSpring(mouseY, tiltSpring)
  const rotateY = useTransform(smoothX, [-1, 1], [-MOTION_CONFIG.tiltMaxY, MOTION_CONFIG.tiltMaxY])
  const rotateX = useTransform(smoothY, [-1, 1], [MOTION_CONFIG.tiltMaxX, -MOTION_CONFIG.tiltMaxX])

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.9 }}
      transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: MOTION_CONFIG.perspective }}
    >
      {/* 3D tilt + idle bob */}
      <motion.div
        style={{
          rotateX: animationsEnabled ? rotateX : 0,
          rotateY: animationsEnabled ? rotateY : 0,
          transformStyle: 'preserve-3d',
        }}
        animate={animationsEnabled ? {
          y: [0, -MOTION_CONFIG.bobAmplitude, 0],
        } : undefined}
        transition={animationsEnabled ? {
          y: {
            duration: MOTION_CONFIG.bobDuration,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        } : undefined}
      >
        {/* Canvas + eye overlays share the same bounding box */}
        <div className="relative">
          <MemojiCanvas
            mouseX={mouseX}
            mouseY={mouseY}
            enabled={animationsEnabled}
            onLoad={() => setLoaded(true)}
          />

          {/* Eye overlays — positioned over the canvas */}
          {animationsEnabled && loaded && (
            <div className="absolute inset-0 pointer-events-none">
              <EyeOverlay side="left" mouseX={mouseX} mouseY={mouseY} isBlinking={isBlinking} />
              <EyeOverlay side="right" mouseX={mouseX} mouseY={mouseY} isBlinking={isBlinking} />
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
