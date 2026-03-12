import { HapticPatternPlayer } from '../HapticPatternPlayer'

export function HapticDesignSystemContent() {
  return (
    <div className="space-y-10">
      {/* What this illustrates */}
      <div className="bg-accent/5 rounded-lg p-5 border-l-4 border-accent">
        <p className="font-mono text-sm font-semibold text-accent mb-2">What this case study illustrates</p>
        <p className="text-sm text-warm-600 leading-relaxed">
          Designing for a novel interaction paradigm where no established patterns
          exist. Synthesizing cross-domain research into actionable design
          principles, building a systematic vocabulary grounded in perceptual
          science, and prototyping to communicate ideas that can't be shown on a
          screen.
        </p>
      </div>

      {/* Summary */}
      <p className="text-warm-700 leading-relaxed">
        A voice-capture ring startup is building a device with no screen — the
        entire feedback system runs through a single haptic motor on your finger.
        I designed a haptic vocabulary from first principles: synthesizing research
        across 6 domains, defining 5 patterns grounded in perceptual science, and
        building an interactive prototype to communicate what haptics feel like to
        stakeholders who can't hold the hardware.
      </p>

      {/* Role & Team */}
      <div className="bg-warm-50 rounded-lg p-5 border border-warm-200">
        <p className="font-mono text-xs text-accent mb-2">My role</p>
        <p className="text-sm text-warm-600 leading-relaxed">
          Independent design exploration. I scoped the challenge, conducted all
          research, synthesized findings into design principles, designed the
          haptic pattern library, and built the interactive prototype. This is
          speculative work — a systems-level response to a real product problem,
          not a shipped feature.
        </p>
      </div>

      {/* Stated Assumptions */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">Stated Assumptions</h3>
        <p className="text-warm-600 leading-relaxed mb-4 text-sm">
          Without direct access to the hardware or founding team, I made these
          assumptions explicit — each one is a question I'd validate in a real
          engagement.
        </p>
        <div className="space-y-2 font-mono text-xs">
          <div className="flex gap-3 items-start bg-warm-50 border border-warm-200 rounded-lg p-3">
            <span className="text-accent shrink-0 mt-0.5">01</span>
            <span className="text-warm-600">Ring has limited onboard storage (10–20 recordings) and can capture offline, syncing later via Bluetooth.</span>
          </div>
          <div className="flex gap-3 items-start bg-warm-50 border border-warm-200 rounded-lg p-3">
            <span className="text-accent shrink-0 mt-0.5">02</span>
            <span className="text-warm-600">Interaction model is press-and-hold to record, release to stop — not tap-to-toggle.</span>
          </div>
          <div className="flex gap-3 items-start bg-warm-50 border border-warm-200 rounded-lg p-3">
            <span className="text-accent shrink-0 mt-0.5">03</span>
            <span className="text-warm-600">Phone acts as middleware — handles processing, cloud routing, and earbuds detection. The ring doesn't detect earbuds independently.</span>
          </div>
          <div className="flex gap-3 items-start bg-warm-50 border border-warm-200 rounded-lg p-3">
            <span className="text-accent shrink-0 mt-0.5">04</span>
            <span className="text-warm-600">LRA driver supports waveform shaping (amplitude envelope control, not just on/off vibration).</span>
          </div>
          <div className="flex gap-3 items-start bg-warm-50 border border-warm-200 rounded-lg p-3">
            <span className="text-accent shrink-0 mt-0.5">05</span>
            <span className="text-warm-600">Three modes designed in priority order: ring-only → ring + earbuds → ring + earbuds + phone. Ring-only is the baseline experience.</span>
          </div>
        </div>
      </div>

      {/* Problem */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">The Problem</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            The ring has a single LRA (Linear Resonant Actuator) motor operating
            at ~150 Hz. No screen, no speaker, no LED. When a user holds the ring
            to their mouth and speaks, the{' '}
            <strong className="text-warm-800">only way the device can talk back
            is through vibration on their finger</strong>.
          </p>
          <p>
            That vibration needs to communicate: did recording start? Did it
            capture successfully? Did something fail? Is the AI responding? Is
            the battery about to die? Each of these states needs to feel distinct,
            learnable, and unmistakable — even while walking, cooking, or talking.
          </p>
          <p>
            No wearable on the market today has solved this. Apple Watch, Pixel
            Watch, AirPods, WHOOP, Fitbit — every device uses haptics as a
            secondary channel backed by a screen. None have designed haptics as
            the <strong className="text-warm-800">primary</strong> feedback system,
            and{' '}
            <strong className="text-warm-800">none include an explicit "learn the
            haptics" tutorial during onboarding</strong>.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-center">
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
          <p className="text-xs text-warm-400">Existing precedents</p>
        </div>
      </div>

      {/* Research */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">The Research</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            There's no haptic design handbook for rings. So I built one from
            adjacent domains — pulling from neuroscience, platform guidelines,
            encoding theory, ergonomics, and the wearable landscape.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          {/* Research domain cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-4">
              <p className="font-mono text-xs text-accent mb-1">Haptic perception</p>
              <p className="text-sm text-warm-600 leading-relaxed">
                Finger anatomy, mechanoreceptor mapping, vibrotactile frequency
                response. The proximal phalanx — where a ring sits — has dense
                Pacinian corpuscle clusters optimized for vibration detection.
              </p>
            </div>
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-4">
              <p className="font-mono text-xs text-accent mb-1">Cognitive ceiling</p>
              <p className="text-sm text-warm-600 leading-relaxed">
                6–8 patterns is the safe vocabulary size. 10–12 is a stretch with
                training. Only 2–3 intensity levels are reliably distinguishable
                (Weber fraction ~20% for vibrotactile amplitude).
              </p>
            </div>
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-4">
              <p className="font-mono text-xs text-accent mb-1">Non-visual encoding</p>
              <p className="text-sm text-warm-600 leading-relaxed">
                Morse code uses just 2 primitives. Braille uses binary encoding
                and global shape recognition. Musical rhythm creates expectation
                through meter. Tacton research shows rhythm achieves 93% recognition
                — the best single differentiating dimension.
              </p>
            </div>
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-4">
              <p className="font-mono text-xs text-accent mb-1">Platform systems</p>
              <p className="text-sm text-warm-600 leading-relaxed">
                Apple's Taptic Engine uses a 2D space (intensity + sharpness) with
                AHAP notation for developer handoff. Android uses a clear/rich/buzzy
                quality framework. PS5's DualSense proves physical metaphors beat
                abstract patterns.
              </p>
            </div>
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-4">
              <p className="font-mono text-xs text-accent mb-1">Arm fatigue</p>
              <p className="text-sm text-warm-600 leading-relaxed">
                The ring-to-mouth gesture requires a sustained raised arm. Research
                shows comfortable duration at shoulder height is 29–160 seconds.
                75% of participants in mid-air gesture studies tap out before 30
                minutes. Vibration perception degrades with muscle fatigue.
              </p>
            </div>
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-4">
              <p className="font-mono text-xs text-accent mb-1">Social acceptability</p>
              <p className="text-sm text-warm-600 leading-relaxed">
                74% of voice assistant users prefer using them at home. AirPods
                normalized talking to "nobody" via plausible deniability. The
                ring-to-mouth gesture has no existing social script — bystanders
                have no framework to interpret it.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Approach */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">The Approach</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            I started with a filter:{' '}
            <strong className="text-warm-800">"Does the user need to know this
            RIGHT NOW, on their body, without looking at anything?"</strong> If
            the answer was no, it belongs in the app, not the ring.
          </p>
          <p>
            This collapsed 28 potential states across 6 categories down to 5
            essential patterns. Processing status? App. Sync progress? App.
            Bluetooth connection? The AirPods disconnect chime handles it. The
            ring only speaks when the user needs immediate, embodied confirmation
            of what just happened.
          </p>
          <p>
            Rhythm became the primary differentiator — not intensity, not duration.
            The research is clear: rhythm achieves 93% recognition accuracy as a
            single dimension, while intensity tops out at 2–3 distinguishable
            levels. So tap count and spacing do the heavy lifting. Sharp waveforms
            signal mechanical/digital states. Rounded waveforms signal
            organic/positive outcomes.
          </p>
        </div>
      </div>

      {/* Interaction flow */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">Interaction Design</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            The recording interaction uses press-and-hold with smart silence
            detection. A quick tap under 300ms is ignored entirely — no haptic, no
            recording, no wasted processing. This is intentional: accidental
            presses should be invisible.
          </p>
        </div>

        <div className="mt-4 space-y-2 font-mono text-xs">
          <div className="flex gap-3 items-start bg-warm-50 border border-warm-200 rounded-lg p-3">
            <span className="text-accent shrink-0 mt-0.5">Hold &gt;300ms</span>
            <span className="text-warm-600">Confirm haptic fires. Recording begins. Local response in &lt;50ms — 20x faster than Siri's ~1s wake-to-chime.</span>
          </div>
          <div className="flex gap-3 items-start bg-warm-50 border border-warm-200 rounded-lg p-3">
            <span className="text-accent shrink-0 mt-0.5">Speech → silence</span>
            <span className="text-warm-600">3–5 seconds of post-speech silence triggers end. Done haptic plays. Recording captured.</span>
          </div>
          <div className="flex gap-3 items-start bg-warm-50 border border-warm-200 rounded-lg p-3">
            <span className="text-accent shrink-0 mt-0.5">Hold, no speech</span>
            <span className="text-warm-600">8 seconds of silence = user is thinking or accidental hold. Auto-cancel. No haptic — silence IS the signal.</span>
          </div>
          <div className="flex gap-3 items-start bg-warm-50 border border-warm-200 rounded-lg p-3">
            <span className="text-accent shrink-0 mt-0.5">Failure</span>
            <span className="text-warm-600">Error haptic fires immediately at point of failure. Sharp double buzz — unmistakable.</span>
          </div>
        </div>
      </div>

      {/* The Solution — Interactive prototype */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">The Haptic Vocabulary</h3>
        <p className="text-warm-600 leading-relaxed mb-6">
          Five patterns. Each grounded in the research: rhythm as the primary
          differentiator, sharp waveforms for mechanical states, rounded for
          organic outcomes. The most common action (start recording) gets the
          shortest pattern. Toggle to AHAP view to see the engineering handoff
          notation — the same format Apple uses for Taptic Engine.
        </p>
      </div>

      {/* Interactive component */}
      <HapticPatternPlayer />

      {/* Design principles highlight */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">Key Design Principles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="border-l-2 border-warm-300 pl-4 py-1">
            <p className="text-sm text-warm-800 font-medium">Haptic-only mode first</p>
            <p className="text-xs text-warm-500">All 5 patterns work without earbuds or phone. The ring is self-sufficient.</p>
          </div>
          <div className="border-l-2 border-warm-300 pl-4 py-1">
            <p className="text-sm text-warm-800 font-medium">Rhythm over intensity</p>
            <p className="text-xs text-warm-500">Tap count and spacing differentiate patterns. Intensity is unreliable beyond 2–3 levels.</p>
          </div>
          <div className="border-l-2 border-warm-300 pl-4 py-1">
            <p className="text-sm text-warm-800 font-medium">Frequency = familiarity</p>
            <p className="text-xs text-warm-500">Most common action gets the shortest pattern. Users hear "Confirm" hundreds of times — it should be instant.</p>
          </div>
          <div className="border-l-2 border-warm-300 pl-4 py-1">
            <p className="text-sm text-warm-800 font-medium">Silence is a signal</p>
            <p className="text-xs text-warm-500">No haptic for accidental presses, auto-cancels, or states learnable from other channels.</p>
          </div>
          <div className="border-l-2 border-warm-300 pl-4 py-1">
            <p className="text-sm text-warm-800 font-medium">Sharp = mechanical, soft = organic</p>
            <p className="text-xs text-warm-500">Waveform shape maps to meaning. Errors are crisp and angular. Success is rounded and warm.</p>
          </div>
          <div className="border-l-2 border-warm-300 pl-4 py-1">
            <p className="text-sm text-warm-800 font-medium">Design for fatigue</p>
            <p className="text-xs text-warm-500">Front-load confirmation. Use high-amplitude cues during recording — a tired arm dulls perception.</p>
          </div>
        </div>
      </div>

      {/* What I'd test */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">What I'd Want to Test</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            This is a speculative design — the real validation happens on hardware.
            These are the experiments I'd run first:
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>Pattern distinguishability across all 5 in a controlled setting, then under distraction (walking, talking, cooking)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>Onboarding effectiveness: how many sessions to reach &gt;90% recognition using Koch method (start with 2 patterns, add 1 at a time)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>Cold weather perception degradation — reduced blood flow to fingers changes vibrotactile sensitivity</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>Social acceptability of the ring-to-mouth gesture across contexts and age groups</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>Optimal silence threshold before auto-cancel (currently 8s — is that too long? too short?)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Earned Secret */}
      <div className="border-l-2 border-accent pl-5 py-1">
        <p className="font-mono text-xs text-accent mb-2">Earned secret</p>
        <p className="text-warm-800 leading-relaxed">
          When you're designing for a medium with no established patterns, the
          hardest work isn't creating the patterns — it's deciding what{' '}
          <em>not</em> to communicate. Twenty-eight states collapsed to five not
          because the others don't matter, but because the ring isn't the right
          surface for them. A haptic vocabulary that tries to say everything
          becomes noise. Restraint is the design.
        </p>
      </div>
    </div>
  )
}
