import { AnalogNetworkContent } from '../components/studies/AnalogNetwork'
import { AEGContent } from '../components/studies/AEG'
import { BumoContent } from '../components/studies/Bumo'
import { HapticDesignSystemContent } from '../components/studies/HapticDesignSystem'
import { AEGIllustration } from '../components/illustrations/AEGIllustration'
import { BumoIllustration } from '../components/illustrations/BumoIllustration'
import { AnalogNetworkIllustration } from '../components/illustrations/AnalogNetworkIllustration'
import { FabricatedIllustration } from '../components/illustrations/FabricatedIllustration'
import { HapticRingIllustration } from '../components/illustrations/HapticRingIllustration'

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
  category: 'work' | 'curiosity'
  content?: React.ComponentType
  illustration?: React.ComponentType<{ className?: string }>
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'aeg',
    title: 'Global Touring Platform',
    byline: 'Designing enterprise tools for $1B+ in touring revenue',
    teaser: 'Owned product design for a touring operations platform at a major live entertainment company — the system that settles P&L for tours generating over $1B in annual revenue.',
    tags: ['Enterprise Product', 'Complex Systems', 'Change Management'],
    thumbnail: '/images/analog-network/process/depth-map.png',
    available: true,
    passwordProtected: true,
    category: 'work',
    content: AEGContent,
    illustration: AEGIllustration,
  },
  {
    id: 'bumo',
    title: 'Automated Supplier Pipeline',
    byline: 'Building an AI pipeline that scaled supplier acquisition 5x',
    teaser: 'Designed and built an end-to-end AI-powered supplier acquisition pipeline from scratch — scaling outreach from 20 to 100 emails per week across 10 cities.',
    tags: ['AI/ML', 'End-to-End Delivery', 'Startup Execution'],
    thumbnail: '/images/analog-network/process/comfyui-map-01.png',
    available: true,
    passwordProtected: true,
    category: 'work',
    content: BumoContent,
    illustration: BumoIllustration,
  },
  {
    id: 'fabricated',
    title: 'Fabricated',
    byline: 'A hands-on hardware build series where beginners use AI to make real devices',
    tags: ['Hardware', 'Claude Code', 'Workshop'],
    thumbnail: '/images/fabricated/thumbnail.svg',
    available: true,
    externalUrl: 'https://fabricated.inwonder.xyz',
    category: 'curiosity',
    illustration: FabricatedIllustration,
  },
  {
    id: 'haptic-design-system',
    title: 'Haptic Design System',
    byline: 'Designing a feedback language for a screenless device — from first principles',
    teaser: 'A voice-capture ring with no screen needs to communicate entirely through vibration. I synthesized research across 6 domains, defined a 5-pattern haptic vocabulary, and built an interactive prototype to make the invisible tangible.',
    tags: ['Systems Design', 'Research Synthesis', 'Novel Interaction'],
    thumbnail: '/images/analog-network/process/depth-map.png',
    available: true,
    category: 'curiosity',
    content: HapticDesignSystemContent,
    illustration: HapticRingIllustration,
  },
  {
    id: 'analog-network',
    title: 'The Analog Network',
    byline: '100+ strangers went phone-free to explore a speculative city — shipped in 48 hours',
    tags: ['Experience Design', 'Creative Constraints', 'Physical Product'],
    thumbnail: '/images/analog-network/event/participants-rings-zine.jpg',
    available: true,
    category: 'curiosity',
    content: AnalogNetworkContent,
    illustration: AnalogNetworkIllustration,
  },
]
