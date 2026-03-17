export function HMIAlarmSystemContent() {
  return (
    <div className="space-y-10">
      {/* What this illustrates */}
      <div className="bg-accent/5 rounded-lg p-5 border-l-4 border-accent">
        <p className="font-mono text-sm font-semibold text-accent mb-2">What this case study illustrates</p>
        <p className="text-sm text-warm-600 leading-relaxed">
          Applying research from adjacent, high-stakes industries to identify
          design improvements in safety-critical software. Cross-domain synthesis,
          first-principles reasoning about color and attention, and building a
          working prototype to make the argument tangible.
        </p>
      </div>

      {/* Summary */}
      <p className="text-warm-700 leading-relaxed">
        I went down a rabbit hole I didn't expect. It started with a simple
        question: how do you design software for systems where getting the
        interface wrong can actually hurt someone? Not "user drops off at
        checkout" wrong — "rocket engine explodes on the test stand" wrong.
        I don't come from aerospace or defense. But I've spent the last decade
        building complex enterprise interfaces for expert users — financial
        platforms, operations tools, marketing automation systems. That curiosity
        led me to Revel.
      </p>

      {/* Role & Team */}
      <div className="bg-warm-50 rounded-lg p-5 border border-warm-200">
        <p className="font-mono text-xs text-accent mb-2">My role</p>
        <p className="text-sm text-warm-600 leading-relaxed">
          Independent design exploration. I researched High-Performance HMI
          standards, analyzed Revel's publicly available dashboard demos,
          synthesized findings from nuclear, oil &amp; gas, and chemical processing
          industries, and built an interactive prototype demonstrating both color
          approaches. This is speculative work — a research-driven exploration,
          not a shipped feature.
        </p>
      </div>

      {/* Stated Assumptions */}
      <div>
        <h3 id="stated-assumptions" className="font-mono text-xs text-accent mb-3">Stated Assumptions</h3>
        <p className="text-warm-600 leading-relaxed mb-4 text-sm">
          I don't have access to Revel's product, their operator research, or
          their design rationale. Everything here is based on publicly available
          demos and documentation. These assumptions are made explicit — each one
          is a question I'd validate with the team.
        </p>
        <div className="space-y-2 font-mono text-xs">
          <div className="flex gap-3 items-start bg-warm-50 border border-warm-200 rounded-lg p-3">
            <span className="text-accent shrink-0 mt-0.5">01</span>
            <span className="text-warm-600">The Gas Liquid System dashboard visible in public demos is representative of how operators interact with the system during live tests.</span>
          </div>
          <div className="flex gap-3 items-start bg-warm-50 border border-warm-200 rounded-lg p-3">
            <span className="text-accent shrink-0 mt-0.5">02</span>
            <span className="text-warm-600">Operators are sending commands to hardware from this screen — it's not just a monitoring display.</span>
          </div>
          <div className="flex gap-3 items-start bg-warm-50 border border-warm-200 rounded-lg p-3">
            <span className="text-accent shrink-0 mt-0.5">03</span>
            <span className="text-warm-600">Multiple operators (6–12 engineers) may share the same view during a test firing, each watching a different subsystem.</span>
          </div>
          <div className="flex gap-3 items-start bg-warm-50 border border-warm-200 rounded-lg p-3">
            <span className="text-accent shrink-0 mt-0.5">04</span>
            <span className="text-warm-600">The color choices in the current dashboards are functional defaults, not necessarily the result of dedicated HMI color philosophy research.</span>
          </div>
          <div className="flex gap-3 items-start bg-warm-50 border border-warm-200 rounded-lg p-3">
            <span className="text-accent shrink-0 mt-0.5">05</span>
            <span className="text-warm-600">Revel's customers span industries with varying regulatory requirements for HMI design (aerospace, nuclear, manufacturing).</span>
          </div>
        </div>
      </div>

      {/* Why Revel matters */}
      <div>
        <h3 id="why-revel-matters" className="font-mono text-xs text-accent mb-3">Why Revel Matters</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            Revel builds software for testing and controlling critical hardware —
            rocket engines, nuclear microreactors, jet engines, manufacturing
            systems. To understand why that's a big deal, you need to know what it
            replaced.
          </p>
          <p>
            Before Revel, most hardware test teams used LabVIEW — a graphical
            programming tool from 1986. LabVIEW is great for the simple version
            of the job: plug a sensor into a data acquisition box, drag a few
            visual blocks together, and you're seeing pressure or temperature
            readings on screen in minutes.
          </p>
          <p>
            But a rocket engine test isn't one sensor on a screen. It's hundreds
            of sensors, a precise multi-step ignition sequence with safety
            interlocks, custom operator displays, and abort criteria — all of
            which have to be configured and verified before every test. In
            LabVIEW, that's done through visual "wiring" that becomes
            unmaintainable as it grows. One engineer described going back to code
            he'd written himself two years earlier and needing a full day to
            understand what it did.
          </p>
        </div>
      </div>

      {/* The bottleneck */}
      <div>
        <h3 id="the-bottleneck" className="font-mono text-xs text-accent mb-3">The Software Bottleneck</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            Think about how engine development actually works: you run test #47 —
            a 30-second burn at 80% throttle. The data shows the turbopump is
            vibrating more than expected. For test #48, you want to add a few
            vibration sensors, adjust the throttle profile, and lower the abort
            threshold. Simple changes, right?
          </p>
          <p>
            But each change cascades. New sensors mean manually configuring each
            channel — sensor type, voltage range, sample rate, calibration curve,
            alarm thresholds — for every sensor you added. A new throttle profile
            means rewriting part of the test sequence in LabVIEW's visual wiring
            and hoping you don't break something else. New abort thresholds mean
            finding every place in the logic where vibration is checked and
            updating each one. The actual engine fire was 30 seconds. The software
            reconfiguration between tests was days to weeks.
          </p>
          <p>
            Revel compressed that cycle. When you connect a new sensor, their
            platform detects it, reads what type of sensor it is and how it's
            calibrated, and configures the data channel automatically. Test
            sequences are written in a modern text-based language (RevelCode)
            instead of visual wiring. Operator displays are configurable from a
            browser rather than custom-built from scratch for each test setup.
          </p>
        </div>
      </div>

      {/* Results stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-center">
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">14d → 8h</p>
          <p className="text-xs text-warm-400">Test stand config time</p>
        </div>
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">2x → daily</p>
          <p className="text-xs text-warm-400">Test frequency (Impulse Space)</p>
        </div>
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">Day 1</p>
          <p className="text-xs text-warm-400">New-grad running tests solo</p>
        </div>
      </div>

      {/* What I noticed */}
      <div>
        <h3 id="what-i-noticed" className="font-mono text-xs text-accent mb-3">What I Noticed</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            Their Gas Liquid System dashboard — visible in public demos — is a
            P&amp;ID (piping and instrumentation diagram) that operators use to
            monitor and control a test system. It's not just a display — there are
            active controls for tank filling, emergency drains, and command
            scripts. Operators are sending commands to hardware from this screen.
          </p>
          <p>
            Looking closely, there's thoughtful design work happening: they use
            orange text for "unknown" sensor states, they've embedded real-time
            telemetry charts directly in the schematic view, and the dashboard
            system supports multiple published views for different operator roles.
          </p>
          <p>
            But during normal operations, the screen is also full of color. Green
            piping throughout, bright blue and green tank fills, green status
            badges. The real dashboard has 60–80+ elements — valves, sensors,
            tanks, check valves, flow indicators, control scripts — and most of
            them are colorful when everything is running fine.
          </p>
        </div>
      </div>

      {/* The rabbit hole */}
      <div>
        <h3 id="the-research" className="font-mono text-xs text-accent mb-3">The Rabbit Hole</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            I started reading about how industries that have dealt with this
            problem for decades — nuclear power, oil and gas, chemical
            processing — have solved it. And I found a body of research I'd never
            encountered before.
          </p>
          <p>
            There's an entire field called High-Performance HMI (Human-Machine
            Interface) design, backed by standards like ISA-101 and NUREG-0700
            (the nuclear control room guidelines that came out of the Three Mile
            Island incident). The core principle is counterintuitive:
          </p>
        </div>

        <div className="bg-accent/5 rounded-lg p-5 border-l-4 border-accent mt-4">
          <p className="text-warm-800 leading-relaxed font-medium">
            When everything is normal, the screen should be boring.
          </p>
          <p className="text-sm text-warm-600 leading-relaxed mt-2">
            Gray pipes. Muted tanks. Neutral values. No color at all during
            nominal operations. Color is reserved exclusively for abnormal
            states — alarms, warnings, faults.
          </p>
        </div>

        <div className="space-y-4 text-warm-600 leading-relaxed mt-4">
          <p>
            Why? Because when everything is already colorful, an alarm has to
            compete for your attention. And in a test firing — where 6–12
            engineers might be sharing the same view, each watching a different
            subsystem — "competing for attention" isn't a UX annoyance. It's a
            safety issue.
          </p>
        </div>
      </div>

      {/* Research evidence */}
      <div>
        <h3 id="what-the-research-says" className="font-mono text-xs text-accent mb-3">What the Research Says</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-warm-50 border border-warm-200 rounded-lg p-4">
            <p className="font-mono text-xs text-accent mb-1">ISA-101</p>
            <p className="text-sm text-warm-600 leading-relaxed">
              Industry standard for HMI alarm management. Defines color
              hierarchies where gray is the default state and color is reserved
              for deviation from normal operating conditions.
            </p>
          </div>
          <div className="bg-warm-50 border border-warm-200 rounded-lg p-4">
            <p className="font-mono text-xs text-accent mb-1">NUREG-0700</p>
            <p className="text-sm text-warm-600 leading-relaxed">
              Nuclear Regulatory Commission guidelines for control room HMI,
              developed after the Three Mile Island incident. Establishes
              principles for reducing visual clutter in safety-critical displays.
            </p>
          </div>
          <div className="bg-warm-50 border border-warm-200 rounded-lg p-4">
            <p className="font-mono text-xs text-accent mb-1">U.S. Navy study</p>
            <p className="text-sm text-warm-600 leading-relaxed">
              Operators using simple, abstract graphics outperformed those using
              video-game-style displays by 70% — despite preferring the colorful
              version. Preference and performance diverged sharply.
            </p>
          </div>
          <div className="bg-warm-50 border border-warm-200 rounded-lg p-4">
            <p className="font-mono text-xs text-accent mb-1">Alarm detection</p>
            <p className="text-sm text-warm-600 leading-relaxed">
              Research showed that reserving color for alarms improved early
              detection of abnormal conditions by 48%. Color scarcity creates
              perceptual salience.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive prototype */}
      <div>
        <h3 id="the-prototype" className="font-mono text-xs text-accent mb-3">The Prototype</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            I took a simplified subset of Revel's Gas Liquid System and rebuilt
            it as a working prototype with a toggle between the two color
            approaches. Same layout. Same data. One switch changes the entire
            color layer.
          </p>
          <p>
            To be clear — this is exploration, not a critique. The Revel team has
            context I don't. They've shipped a product that's working, their
            customers are testing rockets with it, and looking closely at their
            dashboards there's clearly intentional design thinking already in
            place.
          </p>
        </div>

        {/* Prototype preview + launch link */}
        <div className="mt-6">
          <a
            href="/hmi-prototype/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative rounded-lg overflow-hidden border border-warm-200 shadow-lg transition-all group-hover:border-accent group-hover:shadow-xl">
              <img
                src="/images/hmi-alarm-system/prototype-revel-current.png"
                alt="HMI Alarm System Prototype — Gas Liquid System P&ID with green piping, colored tanks, and alarm states"
                className="w-full"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-accent text-white px-6 py-3 rounded-lg font-mono text-sm font-semibold shadow-lg">
                  Launch Interactive Prototype →
                </span>
              </div>
            </div>
          </a>
          <p className="text-xs text-warm-400 mt-3 font-mono text-center">
            Click to launch the interactive prototype — toggle between Revel's current colors and HPHMI applied
          </p>
        </div>
      </div>

      {/* Key principles */}
      <div>
        <h3 id="key-principles" className="font-mono text-xs text-accent mb-3">Key HPHMI Principles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="border-l-2 border-warm-300 pl-4 py-1">
            <p className="text-sm text-warm-800 font-medium">Gray is the goal state</p>
            <p className="text-xs text-warm-500">Normal operations should be visually quiet. If everything is green, nothing stands out.</p>
          </div>
          <div className="border-l-2 border-warm-300 pl-4 py-1">
            <p className="text-sm text-warm-800 font-medium">Color means deviation</p>
            <p className="text-xs text-warm-500">Every use of color should signal something abnormal. Alarms, warnings, faults — not "system working fine."</p>
          </div>
          <div className="border-l-2 border-warm-300 pl-4 py-1">
            <p className="text-sm text-warm-800 font-medium">Preference ≠ performance</p>
            <p className="text-xs text-warm-500">Operators consistently prefer colorful displays but perform measurably better with muted ones.</p>
          </div>
          <div className="border-l-2 border-warm-300 pl-4 py-1">
            <p className="text-sm text-warm-800 font-medium">Perceptual salience is finite</p>
            <p className="text-xs text-warm-500">The more color on screen, the harder any single element is to notice. Scarcity creates signal.</p>
          </div>
          <div className="border-l-2 border-warm-300 pl-4 py-1">
            <p className="text-sm text-warm-800 font-medium">Context-appropriate detail</p>
            <p className="text-xs text-warm-500">Overview displays show trends and status. Detail is available on drill-down, not crammed into every view.</p>
          </div>
          <div className="border-l-2 border-warm-300 pl-4 py-1">
            <p className="text-sm text-warm-800 font-medium">Standards exist for a reason</p>
            <p className="text-xs text-warm-500">ISA-101 and NUREG-0700 codify decades of incident response. These aren't theoretical guidelines.</p>
          </div>
        </div>
      </div>

      {/* What I'd explore next */}
      <div>
        <h3 id="what-id-explore-next" className="font-mono text-xs text-accent mb-3">What I'd Explore Next</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            This rabbit hole started with curiosity. It ended with a deeper
            appreciation for how hard it is to design software where the stakes
            are physical. Here's where I'd go next:
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>Display hierarchy — how warnings propagate from individual sensor to subsystem to facility overview, and how alarm states cascade across zoom levels</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>Industry flexibility — a token-based color system that adapts per customer, so aerospace teams get ISA-101 compliance while manufacturing teams get their own conventions</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>Learnability testing — whether gray-scale dashboards actually onboard new operators faster, since the signal vocabulary is smaller and more intentional</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>Alarm fatigue quantification — measuring how many color elements operators can track before alarm detection rates measurably degrade</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>Dark mode implications — how HPHMI principles translate when the base canvas is already dark, which is common in control room environments</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Earned insight */}
      <div className="border-l-2 border-accent pl-5 py-1">
        <p className="font-mono text-xs text-accent mb-2">Earned insight</p>
        <p className="text-warm-800 leading-relaxed">
          The hardest design principle in safety-critical interfaces is restraint.
          Making a screen look good is easy — green pipes, blue tanks, colorful
          badges. Making a screen that's boring on purpose, so that the one flash
          of orange is impossible to miss, requires fighting every instinct
          to make things visually rich. In HMI design, the absence of color{' '}
          <em>is</em> the design.
        </p>
      </div>
    </div>
  )
}
