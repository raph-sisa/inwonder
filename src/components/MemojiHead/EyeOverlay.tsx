import { motion, useSpring, useTransform, type MotionValue } from 'framer-motion'
import { EYES, COLORS, MOTION_CONFIG } from './constants'

interface EyeOverlayProps {
  side: 'left' | 'right'
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
  isBlinking: boolean
}

export function EyeOverlay({ side, mouseX, mouseY, isBlinking }: EyeOverlayProps) {
  const eye = side === 'left' ? EYES.left : EYES.right

  // Spring-smoothed pupil offset
  const springCfg = MOTION_CONFIG.pupilSpring
  const pupilX = useSpring(
    useTransform(mouseX, [-1, 1], [-EYES.maxShiftX, EYES.maxShiftX]),
    springCfg,
  )
  const pupilY = useSpring(
    useTransform(mouseY, [-1, 1], [-EYES.maxShiftY, EYES.maxShiftY]),
    springCfg,
  )

  return (
    <div
      style={{
        position: 'absolute',
        left: `${eye.cx}%`,
        top: `${eye.cy}%`,
        transform: 'translate(-50%, -50%)',
        width: `${EYES.openingWidth}%`,
        aspectRatio: `${EYES.openingWidth} / ${EYES.openingHeight}`,
        pointerEvents: 'none',
      }}
    >
      {/* Iris + pupil as a radial gradient circle */}
      <motion.div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: `${(EYES.irisDiameter / EYES.openingWidth) * 100}%`,
          aspectRatio: '1',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${COLORS.pupil} 35%, ${COLORS.iris} 36% 75%, transparent 76%)`,
          x: pupilX,
          y: pupilY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isBlinking ? 0 : 0.85,
        }}
        transition={{ opacity: { duration: 0.04 } }}
      />

      {/* Specular highlight — shifts slightly with gaze */}
      <motion.div
        style={{
          position: 'absolute',
          left: '45%',
          top: '38%',
          width: `${(2.5 / EYES.openingWidth) * 100}%`,
          aspectRatio: '1',
          borderRadius: '50%',
          backgroundColor: COLORS.highlight,
          x: useTransform(pupilX, v => v * 0.3),
          y: useTransform(pupilY, v => v * 0.3),
          translateX: '-50%',
          translateY: '-50%',
          opacity: isBlinking ? 0 : 1,
          filter: 'blur(0.5px)',
        }}
        transition={{ opacity: { duration: 0.04 } }}
      />

      {/* Eyelid — skin-colored shape that scales down to close */}
      <motion.div
        animate={{ scaleY: isBlinking ? 1 : 0 }}
        transition={{ duration: BLINK_ANIM_S, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          inset: '-10%',
          backgroundColor: COLORS.skin,
          borderRadius: '40%',
          transformOrigin: 'top center',
        }}
      />
    </div>
  )
}

const BLINK_ANIM_S = 0.08
