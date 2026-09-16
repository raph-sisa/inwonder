import { Link } from 'react-router-dom'

const notes = [
  {
    title: 'Bent Sheet Bench',
    meta: 'Observation · Orthographic drawing · Rhino',
    body:
      'Translating a bent-metal bench from observation into orthographic views in Figma, then into a Rhino model. I used the exercise to understand proportion, curvature, and how a continuous sheet becomes structure.',
    steps: ['Observed + sketched', 'Built front / side / top views', 'Modeled the form in Rhino'],
  },
  {
    title: 'Perspective Study — Wall + Three Trees',
    meta: 'Observation · Perspective · Drawing',
    body:
      'Practicing perspective by breaking the scene into planes and using construction lines to check how surfaces recede and align in space.',
    steps: ['Observed on site', 'Identified dominant planes', 'Used construction lines to check depth + alignment'],
  },
]

export function FieldNotes() {
  return (
    <main id="main" className="px-6 lg:px-20 py-14 md:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 md:mb-20">
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">
            Learning in public
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-warm-900 italic tracking-tight mb-6">
            Field Notes
          </h1>
          <p className="max-w-2xl text-warm-500 text-lg md:text-xl leading-relaxed">
            Small observations, sketches, models, and experiments from learning to read and make space.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {notes.map((note, index) => (
            <article key={note.title} className="grid md:grid-cols-[1fr_1.15fr] gap-8 md:gap-12 items-start">
              <div className="md:sticky md:top-28">
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="font-display text-3xl sm:text-4xl text-warm-900 italic mb-3">
                  {note.title}
                </h2>
                <p className="text-xs uppercase tracking-widest font-bold text-warm-400 mb-5">
                  {note.meta}
                </p>
                <p className="text-warm-600 leading-relaxed mb-6">
                  {note.body}
                </p>
                <ul className="space-y-2 text-sm text-warm-500">
                  {note.steps.map((step) => (
                    <li key={step} className="flex gap-2">
                      <span className="text-primary">—</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-primary/10 bg-warm-50 overflow-hidden min-h-[320px] md:min-h-[430px] flex items-center justify-center p-8">
                <div className="text-center max-w-sm">
                  <p className="font-display text-2xl text-warm-900 italic mb-3">Visual study</p>
                  <p className="text-sm text-warm-400 leading-relaxed">
                    Sketches and model images for this note are being added here.
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 md:mt-28 pt-10 border-t border-primary/10 flex items-center justify-between gap-6 flex-wrap">
          <p className="text-warm-500 text-sm">More studies will be added as the work develops.</p>
          <Link
            to="/"
            className="text-sm font-bold text-primary hover:opacity-70 transition-opacity"
          >
            ← Back to selected work
          </Link>
        </div>
      </div>
    </main>
  )
}
