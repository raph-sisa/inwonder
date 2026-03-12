import { useRef, useEffect, Suspense, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Environment } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'
import { MOTION_CONFIG } from './constants'

const MODEL_URL = '/models/memoji.glb'
const DRACO_URL = 'https://www.gstatic.com/draco/versioned/decoders/1.5.7/'

// Preload the model with Draco decoder
useGLTF.preload(MODEL_URL, true, true, DRACO_URL)

function Head({ enabled }: { enabled: boolean }) {
  const { scene } = useGLTF(MODEL_URL, true, true, DRACO_URL)
  const groupRef = useRef<THREE.Group>(null)
  const currentRotation = useRef({ x: 0, y: 0 })
  const { mouse } = useThree()

  // Idle bob
  const bobRef = useRef(0)

  useFrame((_, delta) => {
    if (!groupRef.current) return

    if (enabled) {
      // Smoothly lerp toward mouse-based rotation
      const targetY = mouse.x * THREE.MathUtils.degToRad(MOTION_CONFIG.tiltMaxY * 2.5)
      const targetX = -mouse.y * THREE.MathUtils.degToRad(MOTION_CONFIG.tiltMaxX * 2.5)

      const lerp = 1 - Math.pow(0.05, delta)
      currentRotation.current.x += (targetX - currentRotation.current.x) * lerp
      currentRotation.current.y += (targetY - currentRotation.current.y) * lerp

      groupRef.current.rotation.x = currentRotation.current.x
      groupRef.current.rotation.y = currentRotation.current.y

      // Idle bob
      bobRef.current += delta
      groupRef.current.position.y = Math.sin(bobRef.current * (2 * Math.PI / MOTION_CONFIG.bobDuration)) * 0.02
    } else {
      groupRef.current.rotation.x = 0
      groupRef.current.rotation.y = 0
      groupRef.current.position.y = 0
    }
  })

  useEffect(() => {
    // Ensure the model renders with proper materials
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = false
        child.receiveShadow = false
      }
    })
  }, [scene])

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  )
}

interface MemojiModelProps {
  className?: string
}

export function MemojiModel({ className = '' }: MemojiModelProps) {
  const [loaded, setLoaded] = useState(false)
  const reducedMotion = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const enabled = !reducedMotion

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.9 }}
      transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative aspect-square">
        <Canvas
          camera={{ position: [0, 0.2, 3.8], fov: 35 }}
          gl={{ alpha: true, antialias: true }}
          dpr={[1, 2]}
          onCreated={() => setLoaded(true)}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 3, 4]} intensity={1.2} />
          <directionalLight position={[-2, 1, 2]} intensity={0.4} />
          <Suspense fallback={null}>
            <Head enabled={enabled} />
            <Environment preset="city" />
          </Suspense>
        </Canvas>

      </div>
    </motion.div>
  )
}
