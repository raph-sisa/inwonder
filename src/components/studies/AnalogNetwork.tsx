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

      {/* The Hook */}
      <div>
        <p className="text-warm-700 leading-relaxed">
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

      {/* The Story */}
      <div className="space-y-4 text-warm-600 leading-relaxed">
        <p>
          <em className="text-warm-800">"In a world of infinite scrolling, we chose to walk."</em>
        </p>
        <p>
          It started with bringing a 3D printer to an art walk. The idea evolved:
          what if the rings meant something? What if there was a hunt wrapped in
          a fiction that critiqued the very screen addiction participants would put
          down to play? Three collaborators, 2 days of building, under $100.
        </p>
        <p>
          The Analog Network became a speculative fiction experience set in 2032 —
          a post-digital urban operating system. Participants got a 3D-printed ring
          and a hand-folded zine, then navigated downtown Long Beach finding poster
          nodes, completing tasks, and talking to strangers. No phones. The
          critique became embodied through play.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 font-mono text-center">
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">&lt;$100</p>
          <p className="text-xs text-warm-400">Budget</p>
        </div>
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">2 days</p>
          <p className="text-xs text-warm-400">Build time</p>
        </div>
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">100+</p>
          <p className="text-xs text-warm-400">Participants</p>
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
          using ComfyUI — version conflicts broke my workflow files, but the map
          came together.
        </p>
        <ImageGallery images={processImages} columns={2} />
      </div>

      {/* The Day */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">The Day</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed mb-6">
          <p>
            Premium paper wouldn't fold without tearing. Standard printer paper
            worked fine. Over 100 zines hand-cut with an exacto knife. Participants
            showed up immediately. A family completed the full adventure phone-free.
            I improvised new rules live, drawing on UCB improv training.
          </p>
        </div>
        <ImageGallery images={eventImages} columns={2} />
      </div>

      {/* Outcome */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">What Happened Next</h3>
        <p className="text-warm-600 leading-relaxed">
          Studio One Eleven invited us back for future collaborations. We're now
          planning larger-scale immersive installations — physical pieces embedded
          in city infrastructure. I've since built a workshop at home and started
          fabricating at a larger scale.
        </p>
      </div>

      {/* Earned Secret */}
      <div className="border-l-2 border-accent pl-5 py-1">
        <p className="text-warm-800 leading-relaxed">
          You expect people to see your thing as an imposition. They actually see it
          as a gift. When you make something with genuine care and put it in front
          of strangers, they don't resist — they lean in.
        </p>
      </div>

      {/* Tools */}
      <p className="text-warm-400 text-xs font-mono">
        Tools: ComfyUI, RunPod, Felt (GIS), 3D printing, speculative fiction, zine design
      </p>
    </div>
  )
}
