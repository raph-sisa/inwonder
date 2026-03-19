import { HapticPatternPlayer } from '../HapticPatternPlayer'
import { Disclosure } from '../Disclosure'

export function HapticDesignSystemContent() {
  return (
    <div className="space-y-10">
      <div className="bg-accent/5 rounded-lg p-5 border-l-4 border-accent">
        <p className="text-sm text-warm-600 leading-relaxed">
          Designing for a novel interaction paradigm where no established patterns
          exist. Synthesizing cross-domain research into a systematic haptic
          vocabulary for a screenless device.
        </p>
      </div>

      <p className="text-warm-700 leading-relaxed">
        A voice-capture ring with no screen needs to communicate entirely through
        vibration on your finger. I synthesized research across 6 domains, defined
        5 patterns grounded in perceptual science, and built an interactive prototype
        to communicate what haptics feel like to stakeholders who can't hold the hardware.
      </p>

      <div className="bg-warm-50 rounded-lg p-5 border border-warm-200">
        <p className="text-xs text-accent font-semibold mb-2">My role</p>
        <p className="text-sm text-warm-600 leading-relaxed">
          Independent design exploration. Scoped the challenge, conducted all
          research, synthesized findings into design principles, designed the
          pattern library, and built the interactive prototype.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">6</p>
          <p className="text-xs text-warm-400">Research domains</p>
        </div>
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">22</p>
          <p className="text-xs text-warm-400">Design principles</p>
        </div>
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">5</p>
          <p className="text-xs text-warm-400">Haptic patterns</p>
        </div>
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">0</p>
          <p className="text-xs text-warm-400">Established playbooks</p>
        </div>
      </div>

      <div>
        <h3 className="text-xs text-accent font-semibold mb-3">The Key Move</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            The ring has a single vibration motor at ~150 Hz. That motor needs to
            communicate: did recording start? Did it capture? Did something fail?
            Each state needs to feel distinct, learnable, and unmistakable — even
            while walking, cooking, or talking.
          </p>
          <p>
            I started with a filter:{' '}
            <strong className="text-warm-800">"Does the user need to know this
            RIGHT NOW, on their body, without looking at anything?"</strong> If
            not, it belongs in the app. This collapsed 28 potential states down to 5.
          </p>
          <p>
            <strong className="text-warm-800">Rhythm became the primary differentiator</strong> —
            not intensity, not duration. Research shows rhythm achieves up to 93%
            recognition, while intensity tops out at 2-3 distinguishable levels.
            Sharp waveforms signal mechanical states. Rounded waveforms signal
            organic outcomes.
          </p>
        </div>
      </div>

      <HapticPatternPlayer />

      <div>
        <h3 className="text-xs text-accent font-semibold mb-3">Core Principles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="border-l-2 border-warm-300 pl-4 py-1">
            <p className="text-sm text-warm-800 font-medium">Rhythm over intensity</p>
            <p className="text-xs text-warm-500">Tap count and spacing differentiate patterns. Intensity is unreliable beyond 2-3 levels.</p>
          </div>
          <div className="border-l-2 border-warm-300 pl-4 py-1">
            <p className="text-sm text-warm-800 font-medium">Frequency = familiarity</p>
            <p className="text-xs text-warm-500">Most common action gets the shortest pattern. "Confirm" should be instant.</p>
          </div>
          <div className="border-l-2 border-warm-300 pl-4 py-1">
            <p className="text-sm text-warm-800 font-medium">Silence is a signal</p>
            <p className="text-xs text-warm-500">No haptic for accidental presses or states learnable from other channels.</p>
          </div>
          <div className="border-l-2 border-warm-300 pl-4 py-1">
            <p className="text-sm text-warm-800 font-medium">Sharp = mechanical, soft = organic</p>
            <p className="text-xs text-warm-500">Waveform shape maps to meaning. Errors are crisp. Success is warm.</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Disclosure label="Stated assumptions" count={5}>
          <div className="space-y-2 text-sm text-warm-600">
            <div className="flex gap-3 items-start">
              <span className="text-accent shrink-0 mt-0.5">01</span>
              <span>Ring has limited onboard storage (10-20 recordings) and can capture offline, syncing later via Bluetooth.</span>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-accent shrink-0 mt-0.5">02</span>
              <span>Interaction model is press-and-hold to record, release to stop — not tap-to-toggle.</span>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-accent shrink-0 mt-0.5">03</span>
              <span>Phone acts as middleware — handles processing, cloud routing, and earbuds detection.</span>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-accent shrink-0 mt-0.5">04</span>
              <span>LRA driver supports waveform shaping (amplitude envelope control, not just on/off vibration).</span>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-accent shrink-0 mt-0.5">05</span>
              <span>Three modes designed in priority order: ring-only → ring + earbuds → ring + earbuds + phone.</span>
            </div>
          </div>
        </Disclosure>

        <Disclosure label="Research domains" count={6}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="bg-warm-50 rounded-lg p-3">
              <p className="text-accent font-semibold text-xs mb-1">Haptic perception</p>
              <p className="text-warm-600">Finger anatomy, mechanoreceptor mapping. The proximal phalanx has dense Pacinian corpuscle clusters optimized for vibration.</p>
            </div>
            <div className="bg-warm-50 rounded-lg p-3">
              <p className="text-accent font-semibold text-xs mb-1">Cognitive ceiling</p>
              <p className="text-warm-600">6-8 patterns practical, 10-12 with training. Only 2-3 intensity levels reliably distinguishable.</p>
            </div>
            <div className="bg-warm-50 rounded-lg p-3">
              <p className="text-accent font-semibold text-xs mb-1">Non-visual encoding</p>
              <p className="text-warm-600">Morse uses 2 primitives. Tacton research shows rhythm achieves up to 93% recognition.</p>
            </div>
            <div className="bg-warm-50 rounded-lg p-3">
              <p className="text-accent font-semibold text-xs mb-1">Platform systems</p>
              <p className="text-warm-600">Apple's AHAP notation, Android's quality framework. PS5 proves physical metaphors beat abstract patterns.</p>
            </div>
            <div className="bg-warm-50 rounded-lg p-3">
              <p className="text-accent font-semibold text-xs mb-1">Arm fatigue</p>
              <p className="text-warm-600">Vibration perception degrades with muscle fatigue — matters for longer recording sessions.</p>
            </div>
            <div className="bg-warm-50 rounded-lg p-3">
              <p className="text-accent font-semibold text-xs mb-1">Social acceptability</p>
              <p className="text-warm-600">The ring-to-mouth gesture has no existing social script — bystanders have no framework to interpret it.</p>
            </div>
          </div>
        </Disclosure>

        <Disclosure label="What I'd test first" count={5}>
          <ul className="space-y-2 text-sm text-warm-600">
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>Pattern distinguishability across all 5 in controlled settings, then under distraction (walking, talking, cooking)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>Onboarding effectiveness: how many sessions to reach &gt;90% recognition using Koch method</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>Cold weather perception degradation — reduced blood flow changes vibrotactile sensitivity</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>Social acceptability of the ring-to-mouth gesture across contexts and age groups</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>Optimal silence threshold before auto-cancel (currently 8s — too long? too short?)</span>
            </li>
          </ul>
        </Disclosure>
      </div>

      <div className="border-l-2 border-accent pl-5 py-1">
        <p className="text-xs text-accent font-semibold mb-2">Earned secret</p>
        <p className="text-warm-800 leading-relaxed">
          When you're designing for a medium with no established patterns, the
          hardest work isn't creating the patterns — it's deciding what{' '}
          <em>not</em> to communicate. Twenty-eight states collapsed to five.
          A haptic vocabulary that tries to say everything becomes noise.
          Restraint is the design.
        </p>
      </div>
    </div>
  )
}
