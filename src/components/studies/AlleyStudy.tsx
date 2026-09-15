import forward from '../../data/alleyImages/forward'
import reverse from '../../data/alleyImages/reverse'
import map1 from '../../data/alleyImages/map1'

const forwardStrip = `data:image/webp;base64,${forward}`
const reverseStrip = `data:image/webp;base64,${reverse}`
const siteMap = `data:image/webp;base64,${map1}`

export const alleyThumbnail = forwardStrip

const questions = [
  ['Problem framing', 'Is illegal dumping the problem itself, or a visible symptom of how responsibility and accountability are distributed?'],
  ['Power', 'Who gets to define what should happen here? Who benefits from an intervention, and who bears its costs?'],
  ['Stewardship', 'Who currently notices, reports, removes, maintains, or cares for what happens in the alley? What informal stewardship already exists?'],
  ['Community knowledge', 'What do the people who experience the alley most directly already know about how it works?'],
  ['Actors', 'Who is actually dumping — nearby residents, contractors, passersby, or some combination? What evidence would let me distinguish among them?'],
  ['Intervention', 'What if people living around the alley do not want it activated or redesigned? The process needs to preserve the possibility of a smaller, different, or non-physical intervention.'],
]

export function AlleyStudyContent() {
  return (
    <div className="space-y-12">
      <div className="bg-accent/5 rounded-lg p-5 border-l-4 border-accent">
        <p className="text-sm text-warm-600 leading-relaxed">
          <span className="font-semibold text-warm-800">Work in progress.</span>{' '}
          I started with a concrete problem — recurring illegal dumping — and am using the alley as a way to study how spatial conditions, stewardship, power, and everyday use shape what a place becomes.
        </p>
      </div>

      <div className="space-y-4 text-warm-700 leading-relaxed">
        <p>
          An alley in my Long Beach neighborhood runs between two rows of homes, connecting Somerset Park at one end with a church parking lot at the other. I began looking closely at it because unwanted material regularly appears there: everyday trash, furniture, and at times construction or renovation debris that seems to have been brought in and left overnight.
        </p>
        <p>
          Once a large item or pile remains, the condition can compound. Additional smaller trash — food containers, paper plates, loose household waste — collects around it. That shifted my question from <em>“How do we stop littering?”</em> to something broader: <strong className="text-warm-900">What conditions make this alley feel like a place where unwanted material can be left with little consequence?</strong>
        </p>
      </div>

      <div>
        <h3 className="text-xs text-accent font-semibold mb-4">Site context</h3>
        <figure>
          <img
            src={siteMap}
            alt="Annotated aerial map of the alley study area between Somerset Park and a church parking lot in Long Beach"
            className="w-full rounded-lg border border-warm-200"
          />
          <figcaption className="text-xs text-warm-400 leading-relaxed mt-2">
            Annotated Felt map showing Somerset Park at the west end, the church and parking lot at the east, and the two residential rows bordering the alley.
          </figcaption>
        </figure>
      </div>

      <div>
        <h3 className="text-xs text-accent font-semibold mb-4">The first reframing</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            At first I imagined the project as a redesign: make the alley cleaner, safer, or more cared for. Observation made that framing feel premature. Different residences relate to the alley differently. Some people primarily pass through it by car into garages; other residential and parking entrances face it more directly. People also move through it on foot. The same dumping event can therefore affect the block as a whole while producing very different levels of exposure.
          </p>
          <p>
            Before proposing a physical intervention, I want to understand what the alley already is to the people who use it — infrastructure, service corridor, route home, shared space, leftover space, or something else entirely — and whether they even share my belief that it should change.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-xs text-accent font-semibold mb-4">Movement through the site</h3>
        <p className="text-warm-600 leading-relaxed mb-5">
          I recorded the alley in both directions to study sequence rather than a single static view. Moving through it reveals a repeated rhythm of garages, fences, residential edges, bins, parked vehicles, utility poles, and intermittent openings — with the park and church lot acting as larger spatial anchors at either end.
        </p>
        <div className="space-y-5">
          <figure>
            <p className="font-mono text-[10px] uppercase tracking-widest text-warm-400 mb-2">Church parking → Somerset Park</p>
            <img src={forwardStrip} alt="Three frames from a drive through the alley from the church parking lot toward Somerset Park" className="w-full rounded-lg border border-warm-200" />
          </figure>
          <figure>
            <p className="font-mono text-[10px] uppercase tracking-widest text-warm-400 mb-2">Somerset Park → church parking</p>
            <img src={reverseStrip} alt="Three frames from a drive through the alley from Somerset Park toward the church parking lot" className="w-full rounded-lg border border-warm-200" />
          </figure>
        </div>
      </div>

      <div>
        <h3 className="text-xs text-accent font-semibold mb-4">Questions shaping the research</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {questions.map(([title, body]) => (
            <div key={title} className="bg-warm-50 rounded-lg p-4 border border-warm-200">
              <p className="text-xs text-accent font-semibold mb-2">{title}</p>
              <p className="text-sm text-warm-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-l-2 border-accent pl-5 py-1">
        <p className="text-xs text-accent font-semibold mb-2">Working hypothesis</p>
        <p className="text-warm-800 leading-relaxed">
          Illegal dumping may be less a standalone behavior problem than a symptom of the alley's ambiguous status: a space used by many people, experienced unevenly by residents, but with unclear stewardship and limited accountability for what happens there.
        </p>
        <p className="text-xs text-warm-400 mt-3">This is a hypothesis, not a conclusion. The next phase is intended to challenge it.</p>
      </div>

      <div>
        <h3 className="text-xs text-accent font-semibold mb-4">Mapping the stakeholder system</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            The residents immediately bordering the alley are the clearest stakeholders, but the wider system is still unclear. Rather than inventing a complete stakeholder map from a distance, I want the next phase of research to discover who actually has responsibility, influence, knowledge, or exposure.
          </p>
          <p>
            Possible stakeholders to investigate include residents, property owners and managers, the church, people who use the park or pass through the alley, city departments responsible for alley maintenance or illegal dumping, waste services, and contractors or renovation crews. They may not all matter equally; the point is to learn who does.
          </p>
        </div>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          {['Who uses it?', 'Who is affected?', 'Who has authority?', 'Who has resources to change it?'].map((q) => (
            <div key={q} className="bg-warm-50 border border-warm-200 rounded-lg p-3">
              <p className="text-xs text-warm-600 leading-snug">{q}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs text-accent font-semibold mb-4">What comes next</h3>
        <ul className="space-y-3 text-sm text-warm-600">
          {[
            'Talk with people living along both sides of the alley about what they notice, value, avoid, and consider a problem.',
            'Identify which city or service organizations actually own, maintain, report on, or remove dumped material.',
            'Log dumping events over time — location, material, approximate arrival and removal, and whether additional trash accumulates around them.',
            'Map stakeholder relationships, responsibilities, and gaps in stewardship.',
            'Use small, reversible scenarios or design fictions to explore possible interventions and second-order effects before committing to a physical design.',
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-accent shrink-0">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-warm-50 rounded-lg p-5 border border-warm-200">
        <p className="text-xs text-accent font-semibold mb-2">Current stance</p>
        <p className="text-sm text-warm-700 leading-relaxed">
          The goal is not to arrive at a predetermined redesign. It is to understand the place well enough to know <strong className="text-warm-900">whether, where, and how design can actually help</strong> — and to remain open to discovering that the most responsible intervention may not be a new physical object at all.
        </p>
      </div>

      <p className="text-xs text-warm-400 leading-relaxed">
        Methods so far: field observation, spatial mapping, drive-through video documentation, visual analysis, stakeholder framing, and hypothesis development. Ongoing work, September 2026.
      </p>
    </div>
  )
}
