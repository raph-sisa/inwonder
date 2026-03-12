// Eye position calibration — percentages relative to the memoji image
// These values need visual tuning against the actual PNG
export const EYES = {
  left:  { cx: 39, cy: 41.5 },
  right: { cx: 61, cy: 41.5 },
  pupilDiameter: 5,      // % of container width
  irisDiameter: 7.5,     // % of container width
  openingWidth: 12,      // % of container width
  openingHeight: 7,      // % of container height
  maxShiftX: 3,          // px – pupil gaze offset
  maxShiftY: 2,          // px – pupil gaze offset
} as const

export const COLORS = {
  skin: '#D9A87C',
  iris: '#7A5C2E',
  pupil: '#2C1E12',
  highlight: 'rgba(255, 255, 255, 0.55)',
} as const

export const BLINK = {
  minInterval: 2500,     // ms between blinks
  maxInterval: 5000,
  duration: 150,         // ms for one blink cycle
  closedPause: 30,       // ms held shut
  doubleChance: 0.12,    // probability of double-blink
} as const

export const MOTION_CONFIG = {
  tiltMaxX: 3,           // degrees vertical tilt
  tiltMaxY: 5,           // degrees horizontal tilt
  perspective: 800,
  tiltSpring: { stiffness: 50, damping: 20 },
  pupilSpring: { stiffness: 100, damping: 15 },
  bobAmplitude: 2,       // px
  bobDuration: 4,        // seconds
} as const
