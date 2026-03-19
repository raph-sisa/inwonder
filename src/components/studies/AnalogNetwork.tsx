import { ImageGallery } from '../ImageGallery'
import { asset } from '../../utils/assets'
import { Disclosure } from '../Disclosure'

const processImages = [
  { src: asset('/images/analog-network/process/lineart.png'), alt: 'Lineart from GIS data', caption: 'Lineart extracted from GIS data' },
  { src: asset('/images/analog-network/process/comfyui-map-01.png'), alt: 'ComfyUI output', caption: 'ComfyUI output — dual ControlNet' },
]

const eventImages = [
  { src: asset('/images/analog-network/event/rings-and-zine.jpg'), alt: 'Rings and field manual', caption: 'Carriers with rings and field manual' },
  { src: asset('/images/analog-network/event/carriers-with-rings.jpg'), alt: 'Carriers at dusk', caption: 'Carriers at dusk' },
]

export function AnalogNetworkContent() {
  return (
    <div className="space-y-10">
      <div className="bg-accent/5 rounded-lg p-5 border-l-4 border-accent">
        <p className="text-sm text-warm-600 leading-relaxed">
          Rapid adoption of unfamiliar tools (ComfyUI, GIS, 3D printing),
          shipping a physical product under extreme constraints, and the kind
          of creative initiative that carries into product work.
        </p>
      </div>

      <p className="text-warm-700 leading-relaxed">
        I designed and shipped a speculative fiction scavenger hunt for the DTLB
        Art Walk — a phone-free city experience with 3D-printed artifacts, an
        AI-generated map, and a hand-folded zine. Over 100 participants in one
        evening. Studio One Eleven invited us back.
      </p>

      <div className="bg-warm-50 rounded-lg p-5 border border-warm-200">
        <p className="text-xs text-accent font-semibold mb-2">My role</p>
        <p className="text-sm text-warm-600 leading-relaxed">
          Conceived the experience, built the AI map pipeline (ComfyUI + GIS),
          designed and produced the zine, ran the live booth. Collaborated with
          partners on narrative and 3D printing.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">&lt;$100</p>
          <p className="text-xs text-warm-400">Total cost</p>
        </div>
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">2 days</p>
          <p className="text-xs text-warm-400">Idea to live</p>
        </div>
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">100+</p>
          <p className="text-xs text-warm-400">Participants</p>
        </div>
      </div>

      <img
        src={asset('/images/analog-network/event/carriers-with-rings.jpg')}
        alt="Carriers showing rings at dusk"
        className="w-full rounded-lg"
      />

      <div>
        <h3 className="text-xs text-accent font-semibold mb-3">The Experience</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            We wrapped a scavenger hunt inside a speculative fiction set in 2032.
            Participants got a 3D-printed ring and a hand-folded zine, then navigated
            downtown Long Beach finding poster nodes, completing tasks, and talking
            to strangers. No phones. The critique of screen addiction became embodied
            through play.
          </p>
          <p>
            The zine needed a map that actually guided people while pulling them into
            the world. I exported GIS data, extracted lineart and depth maps, then ran
            them through ComfyUI with dual ControlNet. First time using any of these tools.
          </p>
        </div>
      </div>

      <ImageGallery images={processImages} columns={2} />
      <ImageGallery images={eventImages} columns={2} />

      <div className="space-y-3">
        <Disclosure label="What went sideways">
          <div className="space-y-3 text-sm text-warm-600 leading-relaxed">
            <p>
              Premium paper wouldn't fold without tearing — switched to standard printer
              paper at the last minute. Over 100 zines hand-cut with an exacto knife
              the morning of the event. Participants showed up before we were fully set up.
            </p>
            <p>
              A family wanted to do the full adventure phone-free with their kids,
              which we hadn't planned for — I improvised new rules on the spot, drawing
              on UCB improv training.
            </p>
          </div>
        </Disclosure>

        <Disclosure label="What I'd explore next">
          <ul className="space-y-2 text-sm text-warm-600">
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>Larger-scale immersive installations — physical pieces embedded in city infrastructure</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>How to design for different group sizes — solo vs. couples vs. families need different task structures</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>Measuring engagement depth beyond participation count — what does "presence" actually look like?</span>
            </li>
          </ul>
        </Disclosure>
      </div>

      <div className="border-l-2 border-accent pl-5 py-1">
        <p className="text-xs text-accent font-semibold mb-2">Earned secret</p>
        <p className="text-warm-800 leading-relaxed">
          You expect people to see your thing as an imposition. They actually see it
          as a gift. When you make something with genuine care and put it in front
          of strangers, they don't resist — they lean in.
        </p>
      </div>
    </div>
  )
}
