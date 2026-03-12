import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ── Haptic pattern definitions ──────────────────────────────────────────────

interface HapticPulse {
  time: number       // ms offset
  intensity: number  // 0–1
  sharpness: number  // 0–1 (high = crisp/mechanical, low = rounded/organic)
  duration: number   // ms
}

interface HapticPattern {
  name: string
  label: string
  trigger: string
  color: string
  pulses: HapticPulse[]
}

const patterns: HapticPattern[] = [
  {
    name: 'Confirm',
    label: '01',
    trigger: 'Recording started',
    color: '#0C0B0B',
    pulses: [
      { time: 0, intensity: 1.0, sharpness: 0.9, duration: 50 },
    ],
  },
  {
    name: 'Done',
    label: '02',
    trigger: 'Recording captured',
    color: '#0C0B0B',
    pulses: [
      { time: 0, intensity: 0.9, sharpness: 0.8, duration: 50 },
      { time: 200, intensity: 0.6, sharpness: 0.4, duration: 60 },
    ],
  },
  {
    name: 'Error',
    label: '03',
    trigger: 'Recording failed',
    color: '#FF4C24',
    pulses: [
      { time: 0, intensity: 1.0, sharpness: 1.0, duration: 50 },
      { time: 130, intensity: 1.0, sharpness: 1.0, duration: 50 },
    ],
  },
  {
    name: 'Attention',
    label: '04',
    trigger: 'AI response ready',
    color: '#0C0B0B',
    pulses: [
      { time: 0, intensity: 0.5, sharpness: 0.6, duration: 50 },
      { time: 150, intensity: 0.7, sharpness: 0.6, duration: 50 },
      { time: 300, intensity: 0.9, sharpness: 0.6, duration: 50 },
    ],
  },
  {
    name: 'Urgent',
    label: '05',
    trigger: 'Battery critical',
    color: '#FF4C24',
    pulses: [
      { time: 0, intensity: 1.0, sharpness: 1.0, duration: 40 },
      { time: 100, intensity: 1.0, sharpness: 1.0, duration: 40 },
      { time: 200, intensity: 1.0, sharpness: 1.0, duration: 40 },
      { time: 300, intensity: 1.0, sharpness: 1.0, duration: 40 },
    ],
  },
]

// ── Audio synthesis ─────────────────────────────────────────────────────────

function playHapticAudio(pattern: HapticPattern, audioCtx: AudioContext) {
  const totalDuration = Math.max(...pattern.pulses.map(p => p.time + p.duration))

  pattern.pulses.forEach((pulse) => {
    const startTime = audioCtx.currentTime + pulse.time / 1000
    const dur = pulse.duration / 1000

    // Base frequency: sharp = higher, more buzz-like; soft = lower, rounder
    const freq = 120 + pulse.sharpness * 80 // 120–200 Hz range

    const osc = audioCtx.createOscillator()
    const gain = audioCtx.createGain()

    // Sharp waveforms get square/sawtooth; soft get sine
    osc.type = pulse.sharpness > 0.7 ? 'square' : pulse.sharpness > 0.4 ? 'triangle' : 'sine'
    osc.frequency.setValueAtTime(freq, startTime)

    // Amplitude envelope
    const peakGain = pulse.intensity * 0.3 // Keep volume reasonable
    gain.gain.setValueAtTime(0, startTime)

    if (pulse.sharpness > 0.7) {
      // Sharp: near-instant attack, hard cutoff
      gain.gain.linearRampToValueAtTime(peakGain, startTime + 0.003)
      gain.gain.setValueAtTime(peakGain, startTime + dur - 0.003)
      gain.gain.linearRampToValueAtTime(0, startTime + dur)
    } else {
      // Soft: gradual attack and decay
      const attack = dur * 0.2
      const decay = dur * 0.3
      gain.gain.linearRampToValueAtTime(peakGain, startTime + attack)
      gain.gain.setValueAtTime(peakGain, startTime + dur - decay)
      gain.gain.linearRampToValueAtTime(0, startTime + dur)
    }

    osc.connect(gain)
    gain.connect(audioCtx.destination)
    osc.start(startTime)
    osc.stop(startTime + dur + 0.01)
  })

  return totalDuration
}

// ── Waveform SVG ────────────────────────────────────────────────────────────

const CHART_WIDTH = 400
const CHART_HEIGHT = 80
const CHART_PADDING = 0

function WaveformChart({
  pattern,
  progress,
  isPlaying,
}: {
  pattern: HapticPattern
  progress: number // 0–1
  isPlaying: boolean
}) {
  const totalDuration = Math.max(...pattern.pulses.map(p => p.time + p.duration))
  const timeScale = (CHART_WIDTH - CHART_PADDING * 2) / (totalDuration + 60) // extra padding right

  const buildPulsePath = (pulse: HapticPulse) => {
    const x = CHART_PADDING + pulse.time * timeScale
    const w = pulse.duration * timeScale
    const h = pulse.intensity * (CHART_HEIGHT - 10)
    const y = CHART_HEIGHT - h

    if (pulse.sharpness > 0.7) {
      // Sharp: rectangle with tiny rounded corners
      return `M${x},${CHART_HEIGHT} L${x},${y + 2} Q${x},${y} ${x + 2},${y} L${x + w - 2},${y} Q${x + w},${y} ${x + w},${y + 2} L${x + w},${CHART_HEIGHT}`
    } else {
      // Soft: smooth bell curve
      const cp = w * 0.3
      return `M${x},${CHART_HEIGHT} C${x},${CHART_HEIGHT} ${x + cp},${y} ${x + w / 2},${y} C${x + w - cp},${y} ${x + w},${CHART_HEIGHT} ${x + w},${CHART_HEIGHT}`
    }
  }

  const playheadX = CHART_PADDING + progress * (totalDuration + 40) * timeScale

  return (
    <svg
      viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT + 4}`}
      className="w-full h-auto"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Baseline */}
      <line
        x1={CHART_PADDING}
        y1={CHART_HEIGHT}
        x2={CHART_WIDTH}
        y2={CHART_HEIGHT}
        stroke="#D4D0C8"
        strokeWidth="1"
      />

      {/* Pulse shapes */}
      {pattern.pulses.map((pulse, i) => (
        <path
          key={i}
          d={buildPulsePath(pulse)}
          fill={pattern.color}
          opacity={0.15}
          stroke={pattern.color}
          strokeWidth="2"
        />
      ))}

      {/* Animated filled pulses (fill as playhead passes) */}
      {isPlaying && pattern.pulses.map((pulse, i) => {
        const pulseStart = pulse.time / (totalDuration + 40)
        const pulseEnd = (pulse.time + pulse.duration) / (totalDuration + 40)
        const pulseProgress = Math.max(0, Math.min(1,
          (progress - pulseStart) / (pulseEnd - pulseStart)
        ))

        if (pulseProgress <= 0) return null

        return (
          <g key={`active-${i}`}>
            <clipPath id={`clip-${pattern.name}-${i}`}>
              <rect
                x={CHART_PADDING + pulse.time * timeScale}
                y={0}
                width={pulse.duration * timeScale * pulseProgress}
                height={CHART_HEIGHT + 4}
              />
            </clipPath>
            <path
              d={buildPulsePath(pulse)}
              fill={pattern.color}
              opacity={0.6}
              stroke={pattern.color}
              strokeWidth="2"
              clipPath={`url(#clip-${pattern.name}-${i})`}
            />
          </g>
        )
      })}

      {/* Playhead */}
      {isPlaying && (
        <line
          x1={playheadX}
          y1={0}
          x2={playheadX}
          y2={CHART_HEIGHT + 4}
          stroke={pattern.color}
          strokeWidth="1.5"
          opacity={0.8}
        />
      )}
    </svg>
  )
}

// ── Ring vibration animation ────────────────────────────────────────────────

function RingPulse({ isPlaying, color }: { isPlaying: boolean; color: string }) {
  return (
    <div className="relative w-10 h-10 flex items-center justify-center">
      {/* Ring icon */}
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        {/* Ring band */}
        <ellipse
          cx="20" cy="22" rx="10" ry="12"
          stroke={isPlaying ? color : '#B8B4AC'}
          strokeWidth="3"
          fill="none"
        />
        {/* Top detail */}
        <rect
          x="15" y="8" width="10" height="5" rx="2"
          fill={isPlaying ? color : '#B8B4AC'}
        />
      </svg>

      {/* Vibration rings */}
      <AnimatePresence>
        {isPlaying && (
          <>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border-2"
                style={{ borderColor: color }}
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 2.2, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── AHAP JSON generation ────────────────────────────────────────────────────

function toAHAP(pattern: HapticPattern) {
  const events = pattern.pulses.map((pulse) => ({
    Event: {
      Time: pulse.time / 1000,
      EventType: "HapticTransient",
      EventParameters: [
        { ParameterID: "HapticIntensity", ParameterValue: pulse.intensity },
        { ParameterID: "HapticSharpness", ParameterValue: pulse.sharpness },
      ],
    },
  }))

  return {
    Version: 1.0,
    Metadata: {
      Project: "Sandbar Stream",
      Created: "2026-03-12",
      Description: `${pattern.name} — ${pattern.trigger}`,
    },
    Pattern: events,
  }
}

function AHAPView({ pattern }: { pattern: HapticPattern }) {
  const ahap = toAHAP(pattern)
  const json = JSON.stringify(ahap, null, 2)

  return (
    <div className="relative">
      <pre
        className="font-mono text-[11px] leading-relaxed overflow-x-auto p-4 rounded-lg border border-[#E8E4DC]"
        style={{ backgroundColor: '#F5F2EA', color: '#0C0B0B' }}
      >
        <code>{json}</code>
      </pre>
      <div
        className="absolute top-2 right-2 font-mono text-[9px] px-1.5 py-0.5 rounded"
        style={{ backgroundColor: '#E8E4DC', color: '#9C9890' }}
      >
        .ahap
      </div>
    </div>
  )
}

// ── Pattern row component ───────────────────────────────────────────────────

function PatternRow({ pattern, view }: { pattern: HapticPattern; view: 'waveform' | 'ahap' }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioCtxRef = useRef<AudioContext | null>(null)
  const animRef = useRef<number>(0)

  const play = useCallback(() => {
    if (isPlaying) return

    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContext()
    }
    const ctx = audioCtxRef.current

    setIsPlaying(true)
    setProgress(0)

    const totalDuration = playHapticAudio(pattern, ctx)
    const startTime = performance.now()
    const animDuration = totalDuration + 60 // small tail

    const animate = (now: number) => {
      const elapsed = now - startTime
      const p = Math.min(1, elapsed / animDuration)
      setProgress(p)

      if (p < 1) {
        animRef.current = requestAnimationFrame(animate)
      } else {
        setIsPlaying(false)
        setProgress(0)
      }
    }

    animRef.current = requestAnimationFrame(animate)
  }, [isPlaying, pattern])

  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [])

  if (view === 'ahap') {
    return (
      <div className="py-4 border-b border-[#E8E4DC] last:border-b-0">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <motion.button
              className="w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0"
              style={{
                backgroundColor: isPlaying ? pattern.color : 'transparent',
                border: `2px solid ${isPlaying ? pattern.color : '#B8B4AC'}`,
              }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Play ${pattern.name} pattern`}
              onClick={play}
            >
              {isPlaying ? (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
                  <rect x="1" y="1" width="3" height="8" rx="0.5" />
                  <rect x="6" y="1" width="3" height="8" rx="0.5" />
                </svg>
              ) : (
                <svg width="10" height="12" viewBox="0 0 10 12" fill="#B8B4AC">
                  <path d="M1 1.5v9l8-4.5-8-4.5z" />
                </svg>
              )}
            </motion.button>
            <div>
              <p className="font-mono text-xs font-medium" style={{ color: pattern.color }}>
                {pattern.label} {pattern.name}
              </p>
              <p className="font-mono text-[10px] text-[#9C9890]">
                {pattern.trigger}
              </p>
            </div>
          </div>
          <RingPulse isPlaying={isPlaying} color={pattern.color} />
        </div>
        <AHAPView pattern={pattern} />
      </div>
    )
  }

  return (
    <div
      className="group grid items-center gap-4 py-4 border-b border-[#E8E4DC] last:border-b-0 cursor-pointer transition-colors hover:bg-[#F5F2EA]"
      style={{ gridTemplateColumns: '2.5rem 2.5rem 1fr 10rem' }}
      onClick={play}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') play() }}
    >
      {/* Play button */}
      <div className="flex items-center justify-center">
        <motion.button
          className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
          style={{
            backgroundColor: isPlaying ? pattern.color : 'transparent',
            border: `2px solid ${isPlaying ? pattern.color : '#B8B4AC'}`,
          }}
          whileTap={{ scale: 0.9 }}
          aria-label={`Play ${pattern.name} pattern`}
          onClick={(e) => { e.stopPropagation(); play() }}
        >
          {isPlaying ? (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
              <rect x="1" y="1" width="3" height="8" rx="0.5" />
              <rect x="6" y="1" width="3" height="8" rx="0.5" />
            </svg>
          ) : (
            <svg width="10" height="12" viewBox="0 0 10 12" fill="#B8B4AC">
              <path d="M1 1.5v9l8-4.5-8-4.5z" />
            </svg>
          )}
        </motion.button>
      </div>

      {/* Ring pulse */}
      <RingPulse isPlaying={isPlaying} color={pattern.color} />

      {/* Waveform */}
      <div className="min-w-0">
        <WaveformChart pattern={pattern} progress={progress} isPlaying={isPlaying} />
      </div>

      {/* Label */}
      <div className="text-right pr-1">
        <p className="font-mono text-xs" style={{ color: pattern.color }}>
          {pattern.label} {pattern.name}
        </p>
        <p className="font-mono text-[10px] text-[#9C9890]">
          {pattern.trigger}
        </p>
      </div>
    </div>
  )
}

// ── View toggle ─────────────────────────────────────────────────────────────

function ViewToggle({
  view,
  onChange,
}: {
  view: 'waveform' | 'ahap'
  onChange: (v: 'waveform' | 'ahap') => void
}) {
  return (
    <div
      className="inline-flex rounded-lg p-0.5 border border-[#E8E4DC]"
      style={{ backgroundColor: '#F5F2EA' }}
    >
      {(['waveform', 'ahap'] as const).map((v) => (
        <button
          key={v}
          onClick={() => onChange(v)}
          className="relative px-3 py-1.5 font-mono text-[11px] rounded-md transition-colors"
          style={{
            color: view === v ? '#0C0B0B' : '#9C9890',
            backgroundColor: view === v ? '#FAF8F0' : 'transparent',
            boxShadow: view === v ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
          }}
        >
          {v === 'waveform' ? 'Waveform' : 'AHAP'}
        </button>
      ))}
    </div>
  )
}

// ── Main component ──────────────────────────────────────────────────────────

export function HapticPatternPlayer() {
  const [view, setView] = useState<'waveform' | 'ahap'>('waveform')

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-baseline justify-between mb-6">
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#9C9890] mb-1">
            Haptic Pattern Library
          </p>
          <h3 className="text-lg font-semibold" style={{ color: '#0C0B0B' }}>
            5-Pattern Vocabulary (v1)
          </h3>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="font-mono text-[10px] text-[#9C9890] text-right">
            <p>LRA · ~150 Hz</p>
            <p>Ring-only mode</p>
          </div>
          <ViewToggle view={view} onChange={setView} />
        </div>
      </div>

      {/* Axis legend — only in waveform mode */}
      <AnimatePresence mode="wait">
        {view === 'waveform' && (
          <motion.div
            key="legend"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="flex items-center gap-4 mb-3 font-mono text-[10px] text-[#9C9890]">
              <span>Y: Intensity (0–1.0)</span>
              <span>X: Time (ms)</span>
              <span className="ml-auto flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="inline-block w-3 h-3 bg-[#0C0B0B] opacity-20 rounded-sm" />
                  Sharp
                </span>
                <span className="flex items-center gap-1">
                  <span className="inline-block w-3 h-3 bg-[#0C0B0B] opacity-20 rounded-full" />
                  Soft
                </span>
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pattern list */}
      <motion.div
        className="rounded-xl p-5 border border-[#E8E4DC]"
        style={{ backgroundColor: '#FAF8F0' }}
        layout
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {patterns.map((pattern) => (
              <PatternRow key={pattern.name} pattern={pattern} view={view} />
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Footer note */}
      <p className="font-mono text-[10px] text-[#9C9890] mt-3 text-center">
        {view === 'waveform'
          ? 'Click a pattern to hear an audio approximation · Best with headphones'
          : 'AHAP (Apple Haptic Audio Pattern) · JSON notation for iOS Taptic Engine'
        }
      </p>
    </div>
  )
}
