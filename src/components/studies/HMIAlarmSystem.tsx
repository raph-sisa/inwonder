import { asset } from '../../utils/assets'
import { Disclosure } from '../Disclosure'

export function HMIAlarmSystemContent() {
  return (
    <div className="space-y-10">
      <div className="bg-accent/5 rounded-lg p-5 border-l-4 border-accent">
        <p className="text-sm text-warm-600 leading-relaxed">
          Applying cross-domain research from nuclear and aerospace industries
          to identify design improvements in safety-critical software. First-principles
          reasoning about color and attention, with a working prototype.
        </p>
      </div>

      <p className="text-warm-700 leading-relaxed">
        I went down a rabbit hole. It started with a question: how do you design
        software for systems where getting the interface wrong can actually hurt
        someone? Not "user drops off at checkout" wrong —{' '}
        <strong className="text-warm-800">"rocket engine explodes on the test
        stand" wrong</strong>. That curiosity led me to Revel, a company building
        software for testing rocket engines, nuclear microreactors, and jet engines.
      </p>

      <div className="bg-warm-50 rounded-lg p-5 border border-warm-200">
        <p className="text-xs text-accent font-semibold mb-2">My role</p>
        <p className="text-sm text-warm-600 leading-relaxed">
          Independent design exploration. Researched High-Performance HMI standards,
          analyzed public dashboard demos, and built an interactive prototype
          demonstrating both color approaches. Speculative work, not shipped.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">14d → 8h</p>
          <p className="text-xs text-warm-400">Test config time (Revel)</p>
        </div>
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">+48%</p>
          <p className="text-xs text-warm-400">Alarm detection improvement</p>
        </div>
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">70%</p>
          <p className="text-xs text-warm-400">Navy: muted outperforms colorful</p>
        </div>
      </div>

      <div>
        <h3 className="text-xs text-accent font-semibold mb-3">The Insight</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            Revel's dashboards show P&ID schematics that operators use to monitor
            and control live test systems — 60-80+ elements including valves, sensors,
            and tanks. During normal operations, the screen is full of color. Green
            pipes, bright blue tanks, green status badges.
          </p>
          <p>
            Industries that have dealt with this for decades — nuclear, oil and gas,
            chemical processing — converged on a counterintuitive principle:
          </p>
        </div>

        <div className="bg-accent/5 rounded-lg p-5 border-l-4 border-accent mt-4">
          <p className="text-warm-800 leading-relaxed font-medium">
            When everything is normal, the screen should be boring.
          </p>
          <p className="text-sm text-warm-600 leading-relaxed mt-2">
            Gray pipes. Muted tanks. No color at all during nominal operations.
            Color is reserved exclusively for abnormal states. When everything
            is already colorful, an alarm has to compete for your attention.
          </p>
        </div>
      </div>

      {/* Prototype */}
      <div>
        <h3 className="text-xs text-accent font-semibold mb-3">The Prototype</h3>
        <p className="text-warm-600 leading-relaxed mb-4">
          Same layout. Same data. Same 18 valves and 20 sensors. One switch changes
          the entire color layer. Toggle between Revel's current approach and
          High-Performance HMI applied.
        </p>
        <a
          href="/hmi-prototype/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="relative rounded-lg overflow-hidden border border-warm-200 shadow-lg transition-all group-hover:border-accent group-hover:shadow-xl">
            <img
              src={asset('/images/hmi-alarm-system/prototype-revel-current.png')}
              alt="HMI Alarm System Prototype"
              className="w-full"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="bg-accent text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-lg">
                Launch Interactive Prototype →
              </span>
            </div>
          </div>
        </a>
      </div>

      <div className="space-y-3">
        <Disclosure label="Stated assumptions" count={5}>
          <div className="space-y-2 text-sm text-warm-600">
            <p className="text-warm-500 mb-3">
              I don't have access to Revel's product or design rationale. These
              assumptions are made explicit — each one is a question I'd validate
              with the team.
            </p>
            <div className="flex gap-3 items-start">
              <span className="text-accent shrink-0 mt-0.5">01</span>
              <span>The Gas Liquid System dashboard in public demos is representative of how operators interact during live tests.</span>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-accent shrink-0 mt-0.5">02</span>
              <span>Operators are sending commands to hardware from this screen — not just monitoring.</span>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-accent shrink-0 mt-0.5">03</span>
              <span>Multiple operators (6-12 engineers) may share the same view during a test firing.</span>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-accent shrink-0 mt-0.5">04</span>
              <span>Current color choices are functional defaults, not necessarily the result of dedicated HMI color research.</span>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-accent shrink-0 mt-0.5">05</span>
              <span>Revel's customers span industries with varying regulatory requirements for HMI design.</span>
            </div>
          </div>
        </Disclosure>

        <Disclosure label="Research evidence" count={4}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="bg-warm-50 rounded-lg p-3">
              <p className="text-accent font-semibold text-xs mb-1">ISA-101</p>
              <p className="text-warm-600">Industry standard for HMI alarm management. Gray is default, color is reserved for deviation.</p>
            </div>
            <div className="bg-warm-50 rounded-lg p-3">
              <p className="text-accent font-semibold text-xs mb-1">NUREG-0700</p>
              <p className="text-warm-600">Nuclear control room guidelines developed after Three Mile Island. Principles for reducing visual clutter in safety-critical displays.</p>
            </div>
            <div className="bg-warm-50 rounded-lg p-3">
              <p className="text-accent font-semibold text-xs mb-1">U.S. Navy study</p>
              <p className="text-warm-600">Operators using simple, abstract graphics outperformed colorful displays by 70% — despite preferring the colorful version.</p>
            </div>
            <div className="bg-warm-50 rounded-lg p-3">
              <p className="text-accent font-semibold text-xs mb-1">Alarm detection</p>
              <p className="text-warm-600">Reserving color for alarms improved early detection of abnormal conditions by 48%. Color scarcity creates perceptual salience.</p>
            </div>
          </div>
        </Disclosure>

        <Disclosure label="What I'd explore next" count={5}>
          <ul className="space-y-2 text-sm text-warm-600">
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>Display hierarchy — how warnings propagate from sensor to subsystem to facility overview</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>A token-based color system that adapts per customer's regulatory requirements</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>Whether gray-scale dashboards onboard new operators faster (smaller signal vocabulary)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>Alarm fatigue quantification — how many color elements before detection rates degrade</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>Dark mode implications — HPHMI when the base canvas is already dark</span>
            </li>
          </ul>
        </Disclosure>
      </div>

      <div className="border-l-2 border-accent pl-5 py-1">
        <p className="text-xs text-accent font-semibold mb-2">Earned insight</p>
        <p className="text-warm-800 leading-relaxed">
          The hardest design principle in safety-critical interfaces is restraint.
          Making a screen look good is easy. Making a screen that's boring on purpose,
          so that one flash of orange is impossible to miss, requires fighting every
          instinct to make things visually rich. The absence of color{' '}
          <em>is</em> the design.
        </p>
      </div>
    </div>
  )
}
