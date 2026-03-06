import { motion } from 'framer-motion'
import { ImageGallery } from './ImageGallery'

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
}

const processImages = [
  { src: '/images/analog-network/process/route-map.jpg', alt: 'Route planning on Apple Maps', caption: 'Mapping the walking circuit through downtown Long Beach' },
  { src: '/images/analog-network/process/zine-layout-sketch.jpg', alt: 'Zine layout sketch', caption: 'Paper prototype for the 8-page foldable field manual' },
  { src: '/images/analog-network/process/lineart.png', alt: 'Lineart extraction from map data', caption: 'Lineart extracted from GIS data — used as ControlNet input' },
  { src: '/images/analog-network/process/depth-map.png', alt: 'Depth map of Long Beach', caption: 'Depth map generated from geographic data for isometric perspective' },
  { src: '/images/analog-network/process/comfyui-map-01.png', alt: 'ComfyUI stylized map output', caption: 'Early ComfyUI output — dual ControlNet with lineart + depth' },
  { src: '/images/analog-network/process/comfyui-map-02.png', alt: 'ComfyUI grayscale map iteration', caption: 'Later iteration — approaching the sci-fi aesthetic we wanted' },
]

const eventImages = [
  { src: '/images/analog-network/event/rings-and-zine.jpg', alt: 'Participants showing 3D-printed rings and field manual', caption: 'Carriers showing off their rings and completed field manual' },
  { src: '/images/analog-network/event/3d-printer-booth.jpg', alt: '3D printer running at the booth', caption: 'Live 3D printing rings at the Art Walk booth' },
  { src: '/images/analog-network/event/carriers-with-rings.jpg', alt: 'Three people showing their rings at dusk', caption: 'Carriers at dusk with the Poster Biennial overhead' },
  { src: '/images/analog-network/event/participant-zine.jpg', alt: 'Participant reading the zine', caption: 'A participant exploring the field manual' },
]

export function CaseStudy() {
  return (
    <section id="work" className="px-6 py-24 sm:py-32">
      <div className="max-w-3xl mx-auto">
        {/* Header — start in the middle of the action */}
        <motion.div {...fadeIn}>
          <p className="font-mono text-sm text-amber-400 mb-3">Case Study</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-100 mb-4">
            The Analog Network
          </h2>
          <p className="text-lg text-stone-300 leading-relaxed mb-2">
            A woman meowed at a group of strangers. Her partner doubled over laughing.
            They told us they'd been stuck at home all weekend in a funk — and
            this scavenger hunt had changed their whole outlook.
          </p>
          <p className="text-sm font-mono text-stone-500 mb-12">
            DTLB Art Walk — October 2025 — Long Beach, CA
          </p>
        </motion.div>

        {/* Hero image */}
        <motion.div {...fadeIn} className="mb-16">
          <img
            src="/images/analog-network/event/carriers-with-rings.jpg"
            alt="Three carriers showing their rings at dusk under the Poster Biennial"
            className="w-full rounded-lg"
          />
        </motion.div>

        {/* The Setup — establish the movement */}
        <motion.div {...fadeIn} className="mb-16">
          <h3 className="font-mono text-sm text-amber-400 mb-4">The Setup</h3>
          <div className="space-y-4 text-stone-300 leading-relaxed">
            <p>
              <em className="text-stone-100">"In a world of infinite scrolling, we chose to walk."</em>
            </p>
            <p>
              It started with a 3D printer and a question: what if we brought it to
              an art walk and just got people curious? But then the idea kept pulling us
              forward — what if the rings we printed meant something? What if there was
              a hunt? What if the whole thing was wrapped in a fiction that critiqued
              the very screen addiction participants would put down their phones to play?
            </p>
            <p>
              That fiction became The Analog Network: a speculative experience set in 2032,
              where a post-digital urban operating system has emerged. No apps. No screens.
              Just human connection and distributed intelligence. Participants received a
              3D-printed ring and a hand-folded zine that made them "carriers" in this
              network — navigating downtown Long Beach, activating poster nodes, completing
              tasks, talking to strangers. The critique of screen culture became an embodied
              experience. By playing, you built the network the story described.
            </p>
          </div>
        </motion.div>

        {/* The Constraints */}
        <motion.div {...fadeIn} className="mb-16">
          <h3 className="font-mono text-sm text-amber-400 mb-4">The Constraints</h3>
          <div className="space-y-4 text-stone-300 leading-relaxed">
            <p>
              Three collaborators who'd never worked together. A month of brainstorming that
              compressed into 2 days of actual building. Less than $100. And one deliberate
              constraint that made the whole thing harder: no phones. I could have built a
              companion app in an afternoon. We chose analog on purpose.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-8 font-mono text-center">
            <div className="bg-stone-900 rounded-lg p-4">
              <p className="text-2xl font-bold text-stone-100">&lt;$100</p>
              <p className="text-xs text-stone-500 mt-1">Total budget</p>
            </div>
            <div className="bg-stone-900 rounded-lg p-4">
              <p className="text-2xl font-bold text-stone-100">2 days</p>
              <p className="text-xs text-stone-500 mt-1">Build time</p>
            </div>
            <div className="bg-stone-900 rounded-lg p-4">
              <p className="text-2xl font-bold text-stone-100">100+</p>
              <p className="text-xs text-stone-500 mt-1">Participants</p>
            </div>
          </div>
        </motion.div>

        {/* The Team */}
        <motion.div {...fadeIn} className="mb-16">
          <h3 className="font-mono text-sm text-amber-400 mb-4">The Team</h3>
          <div className="space-y-4 text-stone-300 leading-relaxed">
            <p>
              Gamal, an industrial designer, handled the physical artifacts — 3D-printing
              100+ rings, sourcing cheap Home Depot tiles to break apart and laser-etch
              with custom designs. Susie kept us honest on scope when Gamal and I
              kept spiraling into building an entire world for v1. I owned the story:
              the speculative fiction narrative, the task design, the zine from concept
              to print, and the AI-generated map that held it all together.
            </p>
          </div>
        </motion.div>

        {/* Making the Map — the technical craft story */}
        <motion.div {...fadeIn} className="mb-16">
          <h3 className="font-mono text-sm text-amber-400 mb-4">Making the Map</h3>
          <div className="space-y-4 text-stone-300 leading-relaxed mb-8">
            <p>
              The zine needed a map that did two things at once: actually guide people
              through downtown Long Beach, and pull them into the speculative world of
              the story. I wanted participants to look at a real city and see something
              more — the way a fiction layered on top of geography can make familiar
              streets feel like undiscovered territory.
            </p>
            <p>
              I exported{' '}
              <code className="font-mono text-sm bg-stone-800 px-1.5 py-0.5 rounded">.geojson</code>{' '}
              data from Felt (a GIS tool), then extracted lineart and depth maps from
              the geographic data. I rented GPU compute on RunPod and ran the outputs
              through ComfyUI using dual ControlNet workflows — one controlling the
              structural layout from lineart, the other driving the isometric perspective
              from depth. The goal: grayscale, printable on a tiny zine page, still
              accurate enough to navigate six blocks of downtown.
            </p>
            <p>
              It didn't go smoothly. RunPod surfaced different ComfyUI versions that
              broke my JSON workflow files. The rings were supposed to have laser-etched
              tile inlays, but the etcher couldn't handle fragments that small. We adapted.
              The map came together. The rings worked beautifully on their own — they
              became conversation starters and identity markers, which is what mattered.
            </p>
          </div>
          <ImageGallery images={processImages} columns={2} />
        </motion.div>

        {/* The Day — problems beat successes */}
        <motion.div {...fadeIn} className="mb-16">
          <h3 className="font-mono text-sm text-amber-400 mb-4">The Day</h3>
          <div className="space-y-4 text-stone-300 leading-relaxed mb-8">
            <p>
              Morning of: I'm at Studio One Eleven hand-cutting zines with an exacto
              knife. The premium paper I'd bought won't fold without tearing — turns out
              heavy stock and tiny booklet folds don't mix. We switched to whatever was
              in the printer. It worked fine. Over 100 zines, hand-cut and folded. Tedious.
              Worth it.
            </p>
            <p>
              Then the Art Walk started and people just... showed up. We were one of
              the first touchpoints, and participants were immediately curious about the
              rings and the zines. I got real-time feedback on task ordering. I improvised
              new rules on the spot — drawing on improv training from Upright Citizens
              Brigade — things like "make up your own rule and have your group follow it."
              One group hopped on one foot for an entire block.
            </p>
            <p>
              A family came back and told us they'd completed the whole adventure
              phone-free. The couple who'd been in a funk all weekend — the ones with
              the meowing — they stuck around to talk about how the experience felt. It
              wasn't polite feedback. It was genuine. They were lighter than when they
              started.
            </p>
          </div>
          <ImageGallery images={eventImages} columns={2} />
        </motion.div>

        {/* What Happened Next */}
        <motion.div {...fadeIn} className="mb-16">
          <h3 className="font-mono text-sm text-amber-400 mb-4">What Happened Next</h3>
          <div className="space-y-4 text-stone-300 leading-relaxed">
            <p>
              Studio One Eleven — the architecture and urban design firm that produced the
              Art Walk — invited us back. Gamal, Susie, and I are now planning
              larger-scale immersive installations: physical pieces embedded in city
              infrastructure. The vision that crystallized for me is something like Meow
              Wolf, but woven into the urban landscape — where a mailbox could be a dance
              zone and every block has something to discover.
            </p>
            <p>
              I've since built a workshop at home, taught myself power tools, and
              started fabricating at a larger scale. The Analog Network was v1. It won't
              be the last.
            </p>
          </div>
        </motion.div>

        {/* The Earned Secret — anchored prominently */}
        <motion.div {...fadeIn}>
          <div className="border-l-2 border-amber-400 pl-6 py-2">
            <p className="text-lg text-stone-200 leading-relaxed mb-4">
              You expect people to see your thing as an imposition. They actually see it
              as a gift. When you make something with genuine care and put it in front
              of strangers, they don't resist — they lean in.
            </p>
            <p className="text-stone-500 text-sm font-mono">
              Tools: ComfyUI, RunPod, Felt (GIS), 3D printing, speculative fiction, zine design
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
