import { AnalogNetworkContent } from '../components/studies/AnalogNetwork'
import { AEGContent } from '../components/studies/AEG'
import { BumoContent } from '../components/studies/Bumo'

export interface CaseStudy {
  id: string
  title: string
  byline: string
  tags: string[]
  thumbnail: string
  available: boolean
  passwordProtected?: boolean
  category: 'work' | 'curiosity'
  content: React.ComponentType
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'aeg',
    title: 'Global Touring Platform',
    byline: 'Designing enterprise tools for $1B+ in touring revenue',
    tags: ['Enterprise Product', 'Complex Systems', 'Change Management'],
    thumbnail: '/images/analog-network/process/depth-map.png',
    available: true,
    passwordProtected: true,
    category: 'work',
    content: AEGContent,
  },
  {
    id: 'bumo',
    title: 'Automated Supplier Pipeline',
    byline: 'Building an AI pipeline that scaled supplier acquisition 5x',
    tags: ['AI/ML', 'End-to-End Delivery', 'Startup Execution'],
    thumbnail: '/images/analog-network/process/comfyui-map-01.png',
    available: true,
    passwordProtected: true,
    category: 'work',
    content: BumoContent,
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
  },
]
