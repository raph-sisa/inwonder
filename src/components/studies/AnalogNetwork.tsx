import { ImageGallery } from '../ImageGallery'

const processImages = [
  { src: '/images/analog-network/process/lineart.png', alt: 'Lineart from GIS data', caption: 'Lineart extracted from GIS data — ControlNet input' },
  { src: '/images/analog-network/process/depth-map.png', alt: 'Depth map', caption: 'Depth map for isometric perspective' },
  { src: '/images/analog-network/process/comfyui-map-01.png', alt: 'ComfyUI output', caption: 'ComfyUI output — dual ControlNet' },
  { src: '/images/analog-network/process/comfyui-map-02.png', alt: 'Later iteration', caption: 'Later iteration — sci-fi aesthetic' },
]

const eventImages = [
  { src: '/images/analog-network/event/rings-and-zine.jpg', alt: 'Rings and field manual', caption: 'Carriers with rings and completed field manual' },
  { src: '/images/analog-network/event/3d-printer-booth.jpg', alt: '3D printer at booth', caption: 'Live 3D printing at the Art Walk' },
  { src: '/images/analog-network/event/carriers-with-rings.jpg', alt: 'Carriers at dusk', caption: 'Carriers at dusk under the Poster Biennial' },
  { src: '/images/analog-network/event/participant-zine.jpg', alt: 'Participant with zine', caption: 'A participant exploring the field manual' },
]

export function AnalogNetworkContent() {
  return (
    <div className="space-y-10">
      {/* What this illustrates */}
      <div className="bg-warm-50 rounded-lg p-5 border border-warm-200">
        <p className="font-mono text-xs text-accent mb-2">What this case study illustrates</p>
        <p className="text-sm text-warm-600 leading-relaxed">
          Rapid adoption of unfamiliar tools (ComfyUI, GIS, 3D printing),
          comfort working in ambiguity, shipping a physical product under
          extreme constraints, and the kind of creative initiative that
          carries into product work.
        </p>
      </div>

      {/* Summary */}
      <p className="text-warm-700 leading-relaxed">
        I designed and shipped a speculative fiction scavenger hunt for the DTLB
        Art Walk — a phone-free city experience with 3D-printed artifacts, an
        AI-generated map, and a hand-folded zine. Over 100 participants in one
        evening. Studio One Eleven invited us back.
      </p>

      {/* The Hook */}
      <div>
        <p className="text-warm-600 leading-relaxed">
          A woman meowed at a group of strangers. Her partner doubled over laughing.
          They told us they'd been stuck at home all weekend in a funk — and this
          scavenger hunt changed their whole outlook.
        </p>
        <p className="text-sm font-mono text-warm-400 mt-2">
          DTLB Art Walk — October 2025 — Long Beach, CA
        </p>
      </div>

      {/* Hero image */}
      <img
        src="/images/analog-network/event/carriers-with-rings.jpg"
        alt="Carriers showing rings at dusk"
        className="w-full rounded-lg"
      />

      {/* Role & Team */}
      <div className="bg-warm-50 rounded-lg p-5 border border-warm-200">
        <p className="font-mono text-xs text-accent mb-2">My role</p>
        <p className="text-sm text-warm-600 leading-relaxed">
          I conceived the experience design, built the AI-generated map pipeline
          (ComfyUI + GIS), designed and produced the zine, and ran the live booth
          on event day. I collaborated with two partners — one on narrative and
          speculative fiction, one on 3D printing and fabrication.
        </p>
      </div>

      {/* Problem */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">The Problem</h3>
        <p className="text-warm-600 leading-relaxed">
          Downtown Long Beach's Art Walk draws thousands, but most people drift
          passively from booth to booth, phones in hand. We wanted to make something
          that demanded presence — an experience you couldn't scroll through.
        </p>
      </div>

      {/* Approach */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">The Approach</h3>
        <p className="text-warm-600 leading-relaxed">
          We wrapped a scavenger hunt inside a speculative fiction set in 2032 —
          a post-digital urban operating system called The Analog Network.
          Participants got a 3D-printed ring and a hand-folded zine, then navigated
          downtown Long Beach finding poster nodes, completing tasks, and talking
          to strangers. No phones. The critique of screen addiction became embodied
          through play.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 font-mono text-center">
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">&lt;$100</p>
          <p className="text-xs text-warm-400">Total cost to ship</p>
        </div>
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">2 days</p>
          <p className="text-xs text-warm-400">Idea to live experience</p>
        </div>
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">100+</p>
          <p className="text-xs text-warm-400">Phone-free participants</p>
        </div>
      </div>

      {/* Making the Map */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">Making the Map</h3>
        <p className="text-warm-600 leading-relaxed mb-6">
          The zine needed a map that actually guided people through Long Beach while
          pulling them into the speculative world. I exported{' '}
          <code className="font-mono text-xs bg-warm-100 px-1.5 py-0.5 rounded">.geojson</code>{' '}
          data from Felt, extracted lineart and depth maps, then ran them through
          ComfyUI on rented RunPod GPUs using dual ControlNet workflows. First time
          using ComfyUI — version conflicts broke my workflow files twice before the
          map came together.
        </p>
        <ImageGallery images={processImages} columns={2} />
      </div>

      {/* Challenges */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">What Went Sideways</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed mb-6">
          <p>
            Premium paper wouldn't fold without tearing — switched to standard printer
            paper at the last minute. Over 100 zines hand-cut with an exacto knife
            the morning of the event. Participants showed up before we were fully set
            up. A family wanted to do the full adventure phone-free with their kids,
            which we hadn't planned for — I improvised new rules on the spot, drawing
            on UCB improv training.
          </p>
        </div>
        <ImageGallery images={eventImages} columns={2} />
      </div>

      {/* Results & Impact */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">Results</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            <strong className="text-warm-800">Studio One Eleven invited us back</strong>{' '}
            for future collaborations after a single evening. We're now planning
            larger-scale immersive installations — physical pieces embedded in city
            infrastructure.
          </p>
          <p>
            Participants consistently stayed 30-45 minutes longer than they planned.
            Multiple groups came back to our booth after completing the hunt to share
            their experience — something that doesn't happen at a typical art walk.
            The family who went phone-free said it was the first time in months they'd
            done something together without screens.
          </p>
        </div>
      </div>

      {/* Earned Secret */}
      <div className="border-l-2 border-accent pl-5 py-1">
        <p className="font-mono text-xs text-accent mb-2">Earned secret</p>
        <p className="text-warm-800 leading-relaxed">
          You expect people to see your thing as an imposition. They actually see it
          as a gift. When you make something with genuine care and put it in front
          of strangers, they don't resist — they lean in.
        </p>
      </div>
    </div>
  )
}
