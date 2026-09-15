import { ImageGallery } from '../ImageGallery'
import { asset } from '../../utils/assets'
import { Disclosure } from '../Disclosure'

const processImages = [
  { src: asset('/images/analog-network/process/lineart.png'), alt: 'Lineart from GIS data', caption: 'Lineart extracted from GIS data' },
  { src: asset('/images/analog-network/process/comfyui-map-01.png'), alt: 'ComfyUI output', caption: 'ComfyUI output — dual ControlNet' },
]

const eventImages = [
  { src: asset('/images/analog-network/event/rings-and-zine.jpg'), alt: 'Rings and field manual', caption: '3D-printed rings and foldable field guide' },
  { src: asset('/images/analog-network/event/carriers-with-rings.jpg'), alt: 'Participants at dusk', caption: 'Participants moving through downtown at dusk' },
]

export function AnalogNetworkContent() {
  return (
    <div className="space-y-10">
      <div className="bg-accent/5 rounded-lg p-5 border-l-4 border-accent">
        <p className="text-sm text-warm-600 leading-relaxed">
          A phone-free speculative city experience designed to increase presence,
          encourage positive interaction between strangers, and draw Art Walk visitors
          through downtown Long Beach&apos;s design district.
        </p>
      </div>

      <p className="text-warm-700 leading-relaxed">
        I pitched a speculative scavenger hunt for the DTLB Art Walk around a simple idea:
        what happens when people temporarily give up their phones and move through the city
        with a shared story, physical artifacts, and reasons to interact with one another?
        The project also supported a goal from Studio One Eleven and the Downtown Long Beach
        Business Improvement Association to bring more foot traffic through the downtown design district.
      </p>

      <div className="bg-warm-50 rounded-lg p-5 border border-warm-200">
        <p className="text-xs text-accent font-semibold mb-2">My role</p>
        <p className="text-sm text-warm-600 leading-relaxed">
          I proposed the core scavenger-hunt concept, developed the participant journey,
          designed the foldable field-guide zine, and created the activities and prompts.
          I also built the map-generation workflow and helped run the live experience.
        </p>
        <p className="text-sm text-warm-600 leading-relaxed mt-3">
          I worked with two collaborators: Gamal, an industrial designer, designed the
          3D-printed rings; our second collaborator kept the team aligned and moving toward
          a shippable experience under a very compressed timeline.
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
        alt="Participants moving through downtown Long Beach at dusk"
        className="w-full rounded-lg"
      />

      <div>
        <h3 className="text-xs text-accent font-semibold mb-3">Designing for presence and interaction</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            The project had two intertwined questions: what happens when people temporarily
            give up their phones as the primary interface to a city, and can a playful shared
            experience give strangers a low-stakes reason to interact?
          </p>
          <p>
            Participants received a 3D-printed ring and a hand-folded field guide, then moved
            through downtown finding poster nodes and completing activities. The phone-free
            constraint, shared fictional premise, and physical artifacts changed the conditions
            under which people moved through the district and paid attention to one another.
          </p>
          <p>
            The route through downtown was also intentional. Studio One Eleven and the DTLB
            Business Improvement Association wanted the Art Walk to draw people through the
            design district, so the experience became a way to support that event goal while
            experimenting with presence, social interaction, and movement through place.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-xs text-accent font-semibold mb-3">Making the map</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            The map needed to work as real wayfinding while also feeling like an artifact from
            the speculative world. I exported GIS data from downtown Long Beach, extracted
            linework and depth information, and used ComfyUI with dual ControlNet to transform
            the geography while preserving enough of the actual street network to navigate.
          </p>
          <p>
            I had not used GIS, ComfyUI, or ControlNet before this project. The technical
            experimentation mattered because it let the map sit somewhere between real
            infrastructure and imagined city.
          </p>
        </div>
      </div>

      <ImageGallery images={processImages} columns={2} />
      <ImageGallery images={eventImages} columns={2} />

      <div className="space-y-3">
        <Disclosure label="What went sideways">
          <div className="space-y-3 text-sm text-warm-600 leading-relaxed">
            <p>
              Premium paper wouldn&apos;t fold without tearing, so I switched to standard printer
              paper at the last minute. More than 100 zines were cut by hand the morning of the event,
              and participants began arriving before we were fully set up.
            </p>
            <p>
              A family wanted to do the full experience together with their kids, which we had
              not planned for. I improvised alternate rules and prompts on the spot. It was a useful
              reminder that the people who show up will always complicate the participant you imagined.
            </p>
          </div>
        </Disclosure>

        <Disclosure label="Looking back">
          <div className="space-y-3 text-sm text-warm-600 leading-relaxed">
            <p>
              This was not a community-design project in the way I would define one now. We designed
              an experience for whoever happened to encounter it at the Art Walk rather than developing
              it with the people who already had deep relationships with the places we were using.
            </p>
            <p>
              The project showed me that a small intervention — a story, a map, a few physical objects,
              and a different set of rules — can change how people move through and pay attention to a place.
              It also makes me curious about what I would do differently now: who gets to place a new narrative
              onto a neighborhood, who feels invited into the experience, and how local knowledge might shape
              the route, prompts, and story from the beginning.
            </p>
          </div>
        </Disclosure>

        <Disclosure label="What I'd explore next">
          <ul className="space-y-2 text-sm text-warm-600">
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>How residents, businesses, or other people with deep knowledge of the area could help shape the route and narrative</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>How different groups experience the same streets differently — and what that should change about the design</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>How to distinguish participation in an experience from meaningful participation in designing it</span>
            </li>
          </ul>
        </Disclosure>
      </div>

      <div className="border-l-2 border-accent pl-5 py-1">
        <p className="text-xs text-accent font-semibold mb-2">What I learned</p>
        <p className="text-warm-800 leading-relaxed">
          People were surprisingly willing to step into an unfamiliar experience when the invitation
          was tangible, playful, and low-stakes. A small change in rules — put away your phone, carry
          this object, follow this strange map — was enough to alter how some people moved through a
          familiar part of the city. The project made me more interested in the relationship between
          story, physical objects, movement, and place.
        </p>
        <p className="text-warm-800 leading-relaxed mt-3">
          It also left me with a question that matters more to me now: how do you create conditions for
          people to experience a place differently without assuming that you should be the one deciding
          what that place ought to become?
        </p>
      </div>
    </div>
  )
}
