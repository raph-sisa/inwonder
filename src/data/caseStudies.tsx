import { AnalogNetworkContent } from '../components/studies/AnalogNetwork'
import { AEGContent } from '../components/studies/AEG'
import { BumoContent } from '../components/studies/Bumo'
import { HapticDesignSystemContent } from '../components/studies/HapticDesignSystem'
import { HMIAlarmSystemContent } from '../components/studies/HMIAlarmSystem'
import { SpyCopilotContent } from '../components/studies/SpyCopilot'
import { asset } from '../utils/assets'

export interface CaseStudy {
  id: string
  title: string
  byline: string
  teaser?: string
  tags: string[]
  thumbnail: string
  available: boolean
  passwordProtected?: boolean
  externalUrl?: string
  category: 'work'
  content?: React.ComponentType
  illustration?: React.ComponentType<{ className?: string }>
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'spy-copilot',
    title: 'SPY Trading Copilot',
    byline: 'A real-time AI trading copilot built in 6 hours with Claude Code',
    teaser: 'Built a real-time SPY options trading copilot that streams live market data, runs AI analysis every 60 seconds, and executes bracket orders — because taking screenshots and pasting them into Claude was too slow.',
    tags: ['AI/ML', 'Real-Time Systems', 'Claude Code', 'Perplexity'],
    thumbnail: asset('/images/stitch-spy2.png'),
    available: true,
    category: 'work',
    content: SpyCopilotContent,
  },
  {
    id: 'aeg',
    title: 'Global Touring Platform',
    byline: 'Designing enterprise tools for $1B+ in touring revenue',
    teaser: 'Owned product design for a touring operations platform at a major live entertainment company — the system that settles P&L for tours generating over $1B in annual revenue.',
    tags: ['Enterprise Product', 'Complex Systems', 'Change Management'],
    thumbnail: asset('/images/stitch-aeg.png'),
    available: true,
    passwordProtected: true,
    category: 'work',
    content: AEGContent,
  },
  {
    id: 'bumo',
    title: 'Automated Supplier Pipeline',
    byline: 'Building an AI pipeline that scaled supplier acquisition 5x',
    teaser: 'Designed and built an end-to-end AI-powered supplier acquisition pipeline from scratch — scaling outreach from 20 to 100 emails per week across 10 cities.',
    tags: ['AI/ML', 'End-to-End Delivery', 'Startup Execution'],
    thumbnail: asset('/images/stitch-bumo.png'),
    available: true,
    passwordProtected: true,
    category: 'work',
    content: BumoContent,
  },
  {
    id: 'fabricated',
    title: 'Fabricated',
    byline: 'A hands-on hardware build series where beginners use AI to make real devices',
    tags: ['Hardware', 'Claude Code', 'Workshop'],
    thumbnail: asset('/images/stitch-fabricated.png'),
    available: true,
    externalUrl: 'https://fabricated.inwonder.xyz',
    category: 'work',
  },
  {
    id: 'haptic-design-system',
    title: 'Haptic Design System',
    byline: 'Designing a feedback language for a screenless device — from first principles',
    teaser: 'A voice-capture ring with no screen needs to communicate entirely through vibration. I synthesized research across 6 domains, defined a 5-pattern haptic vocabulary, and built an interactive prototype to make the invisible tangible.',
    tags: ['Systems Design', 'Research Synthesis', 'Novel Interaction'],
    thumbnail: asset('/images/stitch-haptic.png'),
    available: true,
    category: 'work',
    content: HapticDesignSystemContent,
  },
  {
    id: 'hmi-alarm-system',
    title: 'The Case for Boring Design',
    byline: 'Exploring High-Performance HMI principles for safety-critical hardware control',
    teaser: 'A curiosity-driven exploration of how color philosophy affects operator safety in rocket engine test software — with a working prototype you can toggle yourself.',
    tags: ['Safety-Critical HMI', 'Design Systems', 'Research Synthesis', 'Prototyping in Code'],
    thumbnail: asset('/images/stitch-hmi.png'),
    available: true,
    category: 'work',
    content: HMIAlarmSystemContent,
  },
  {
    id: 'analog-network',
    title: 'The Analog Network',
    byline: '100+ strangers went phone-free to explore a speculative city — shipped in 48 hours',
    tags: ['Experience Design', 'Creative Constraints', 'Physical Product'],
    thumbnail: asset('/images/stitch-analog.png'),
    available: true,
    category: 'work',
    content: AnalogNetworkContent,
  },
]
