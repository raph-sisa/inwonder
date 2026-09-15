import { Disclosure } from '../Disclosure'

export function AEGContent() {
  return (
    <div className="space-y-10">
      <div className="bg-accent/5 rounded-lg p-5 border-l-4 border-accent">
        <p className="text-sm text-warm-600 leading-relaxed">
          Designing across a complex organization where different touring teams had
          developed their own workflows, language, and institutional knowledge over
          decades. The challenge was not simply replacing software — it was
          understanding what people already knew, deciding what could be shared, and
          designing change they could actually adopt.
        </p>
      </div>

      <p className="text-warm-700 leading-relaxed">
        I helped lead product design for a global touring operations platform at
        a major live entertainment company — the system that settles P&amp;L for
        tours generating over $1B in annual revenue. The platform needed to
        support roughly a dozen touring teams in the U.S., as well as teams in
        the UK, Asia, and Latin America, each with its own processes and
        institutional knowledge. Many veteran users had relied on Excel for
        20-30 years and had good reasons to be cautious about changing tools. We
        designed a hybrid architecture that preserved familiar workflows while
        improving the infrastructure around them, and the MVP launched to settle
        real shows.
      </p>

      <div className="bg-warm-50 rounded-lg p-5 border border-warm-200">
        <p className="text-xs text-accent font-semibold mb-2">My role</p>
        <p className="text-sm text-warm-600 leading-relaxed">
          Product designer on a blended AEG and vendor team. Partnered closely
          with another designer across discovery, research, concept development,
          user testing, prototyping, and production design. Worked alongside
          product owners, engineers, data analysts, software architects, and
          touring teams representing AEG subsidiary brands across the U.S., UK,
          Asia, and Latin America.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">$1B+</p>
          <p className="text-xs text-warm-400">Annual touring revenue</p>
        </div>
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">20-30 yr</p>
          <p className="text-xs text-warm-400">Avg. user tenure</p>
        </div>
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">4 regions</p>
          <p className="text-xs text-warm-400">Global operations</p>
        </div>
      </div>

      <div>
        <h3 className="text-xs text-accent font-semibold mb-3">The Key Move</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            Previous modernization attempts had treated existing workflows as
            something to replace. Our research suggested the opposite: the Excel
            workbooks contained years of embedded practice, shortcuts, and domain
            knowledge. If a new tool could not match what users already depended on,
            they had little reason to adopt it.
          </p>
          <p>
            Rather than asking users to abandon that expertise, we designed a{' '}
            <strong className="text-warm-800">hybrid architecture</strong>: a web
            app for tables, metadata, and search — connected to Excel workbook
            templates with data sync, macros, and database integration. The web app
            handled what Excel was bad at. Excel preserved workflows users still
            needed.
          </p>
          <p>
            I drove the business logic decision on P&amp;L projections:{' '}
            <strong className="text-warm-800">conservative for internal estimates</strong>,{' '}
            <strong className="text-warm-800">generous for external-facing</strong>.
            The MVP launched and was used to settle actual shows — real money, real tours.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <Disclosure label="What made it hard" count={3}>
          <div className="space-y-3 text-sm text-warm-600 leading-relaxed">
            <p>
              This wasn't a single stakeholder group with one established way
              of working. The platform had to align touring teams across AEG's
              subsidiary brands and international regions, alongside an external
              agency and in-house product owners. Different teams used different
              processes, terminology, and projection methods, often developed
              over decades. We had to determine what should be standardized
              globally and what needed to remain flexible locally.
            </p>
            <p>
              The projection method decision was scoped out of MVP due to Excel
              technical constraints — a pragmatic trade-off I advocated for rather
              than letting it block the launch.
            </p>
            <p>
              I also pushed for cross-platform integration based on a bird's-eye
              view I'd built from working on other platforms within the company —
              seeing connections that siloed teams missed.
            </p>
          </div>
        </Disclosure>

        <Disclosure label="Questions I'd ask next">
          <ul className="space-y-2 text-sm text-warm-600">
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>How do we measure whether the hybrid architecture is a bridge or a permanent state? What signals tell us users are ready for more migration?</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>Can we instrument the Excel workbooks to understand which features users actually rely on vs. which they think they rely on?</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>How do we handle the projection method disagreement systematically — is there a way to let different teams use different methods without fragmenting the source of truth?</span>
            </li>
          </ul>
        </Disclosure>
      </div>

      <div className="border-l-2 border-accent pl-5 py-1">
        <p className="text-xs text-accent font-semibold mb-2">Earned secret</p>
        <p className="text-warm-800 leading-relaxed">
          People with decades of experience are not obstacles to change; they are
          often carrying knowledge the new system needs to preserve. Good
          modernization starts by understanding what their existing tools make
          possible, then changing the infrastructure without casually discarding
          the practices that work.
        </p>
      </div>
    </div>
  )
}
