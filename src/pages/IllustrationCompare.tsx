import { LineDrawB } from '../components/illustrations/LineDrawB'
import { LineDrawC } from '../components/illustrations/LineDrawC'
import { LineDrawD } from '../components/illustrations/LineDrawD'

export function IllustrationCompare() {
  return (
    <main className="min-h-screen px-6 sm:px-12 py-16 max-w-6xl mx-auto">
      <h1 className="font-display font-bold text-3xl text-warm-900 mb-4 tracking-tight">
        Line Drawing Options
      </h1>
      <p className="text-warm-500 mb-12">Each draws itself on load. Refresh to replay.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="font-mono text-sm text-accent mb-4">B — Objects in one line</h2>
          <p className="text-sm text-warm-400 mb-6">
            A continuous line passing through recognizable shapes — screen, community circle, pen, hand.
          </p>
          <div className="bg-white rounded-2xl border border-warm-200 p-8 aspect-square flex items-center justify-center">
            <LineDrawB className="w-full h-full text-warm-800" />
          </div>
        </div>

        <div>
          <h2 className="font-mono text-sm text-accent mb-4">C — Asterisk unfurls</h2>
          <p className="text-sm text-warm-400 mb-6">
            Starts from a center point and blooms outward like your * brand mark becoming something organic.
          </p>
          <div className="bg-white rounded-2xl border border-warm-200 p-8 aspect-square flex items-center justify-center">
            <LineDrawC className="w-full h-full text-warm-800" />
          </div>
        </div>

        <div>
          <h2 className="font-mono text-sm text-accent mb-4">D — Face in one line</h2>
          <p className="text-sm text-warm-400 mb-6">
            A portrait drawn with a single continuous stroke. Personal, warm, immediately human.
          </p>
          <div className="bg-white rounded-2xl border border-warm-200 p-8 aspect-square flex items-center justify-center">
            <LineDrawD className="w-full h-full text-warm-800" />
          </div>
        </div>
      </div>
    </main>
  )
}
