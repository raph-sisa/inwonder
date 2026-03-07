export function AEGContent() {
  return (
    <div className="space-y-10">
      {/* What this illustrates */}
      <div className="bg-warm-50 rounded-lg p-5 border border-warm-200">
        <p className="font-mono text-xs text-accent mb-2">What this case study illustrates</p>
        <p className="text-sm text-warm-600 leading-relaxed">
          Designing complex enterprise tools in a high-stakes domain, learning
          an unfamiliar business mid-flight, navigating resistant stakeholders,
          and shipping a platform that handles $1B+ in touring revenue.
        </p>
      </div>

      {/* Summary */}
      <p className="text-warm-700 leading-relaxed">
        I owned product design for a global touring operations platform at a major
        live entertainment company — the system that settles P&L for tours
        generating over $1B in annual revenue. Veteran users who'd relied on
        Excel for 20-30 years didn't want change. I designed a hybrid
        architecture that met them where they were, and the MVP launched to
        settle real shows.
      </p>

      {/* Role & Team */}
      <div className="bg-warm-50 rounded-lg p-5 border border-warm-200">
        <p className="font-mono text-xs text-accent mb-2">My role</p>
        <p className="text-sm text-warm-600 leading-relaxed">
          Sole product designer on the platform. I joined after initial
          discovery with no domain expertise in touring or booking. The team
          included an external agency (engineering, architecture, data, and
          a design lead I reported to), plus in-house product owners and
          business stakeholders.
        </p>
      </div>

      {/* Problem */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">The Problem</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            The company's Global Touring division — the core revenue engine — ran
            on a patchwork of legacy tools and Excel workbooks. Show settlement,
            P&L projections, artist contracts, and financial modeling all lived
            in spreadsheets maintained by people who'd been in their roles for
            decades.
          </p>
          <p>
            They needed a modern platform. But the users saw any move away from
            Excel as a threat. Previous attempts to modernize had failed because
            they tried to replace the spreadsheet entirely. If the new tool
            couldn't match or exceed their current capabilities on day one, they
            simply wouldn't use it.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 font-mono text-center">
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">$1B+</p>
          <p className="text-xs text-warm-400">Annual touring revenue</p>
        </div>
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">20-30 yr</p>
          <p className="text-xs text-warm-400">Avg. user tenure</p>
        </div>
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">3-way</p>
          <p className="text-xs text-warm-400">Stakeholder dynamic</p>
        </div>
      </div>

      {/* Approach */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">The Approach</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            I had to learn the touring P&L domain mid-flight — booking, show
            settlement, artist contracts, projection modeling. These were concepts
            I'd never worked with, and the users spoke a language built on decades
            of institutional knowledge.
          </p>
          <p>
            Rather than replacing Excel, I designed a{' '}
            <strong className="text-warm-800">hybrid architecture</strong>: a web
            application for tables, metadata, search, and detail views, connected
            to an Excel-based system with workbook templates, an in-Excel app for
            data sync and calculations, macros, and database integration. The web
            app handled what Excel was bad at. Excel handled what users refused to
            give up.
          </p>
          <p>
            I designed the financial modeling and show settlement workflows —
            the core of how the company made money on tours. I also designed
            email and notification systems to keep distributed teams in sync.
          </p>
        </div>
      </div>

      {/* Challenges */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">What Made It Hard</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            Three groups pulling in different directions. The external agency
            wanted to protect their margins and scope. In-house product owners
            had their own roadmap priorities. Veteran users couldn't agree on
            features or even basic business logic — different people calculated
            projections differently and had for years.
          </p>
          <p>
            I drove the business logic decision on P&L projections:{' '}
            <strong className="text-warm-800">conservative for internal estimates</strong>{' '}
            (protect the business),{' '}
            <strong className="text-warm-800">more generous for external-facing</strong>{' '}
            (keep the sales tool effective). The intention was to give users
            projection method selection, but it was scoped out of MVP due to
            Excel technical constraints — a pragmatic trade-off.
          </p>
          <p>
            I also advocated for cross-platform integration based on a bird's-eye
            view I'd built from working on other platforms within the company —
            seeing connections that siloed teams missed.
          </p>
        </div>
      </div>

      {/* Results */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">Results</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            <strong className="text-warm-800">The MVP launched and was used to settle actual shows</strong> —
            real money, real tours. The platform handled P&L for tours generating
            $1B+ in revenue.
          </p>
          <p>
            The hybrid DB + Excel + web app architecture solved real technical
            unknowns about Excel's limitations while keeping the interface familiar
            enough that change-resistant, decades-tenured users actually adopted it.
          </p>
        </div>
      </div>

      {/* Earned Secret */}
      <div className="border-l-2 border-accent pl-5 py-1">
        <p className="font-mono text-xs text-accent mb-2">Earned secret</p>
        <p className="text-warm-800 leading-relaxed">
          When your users have 30 years of domain expertise and hate change, you
          don't replace their tools — you upgrade the infrastructure underneath
          while keeping the interface familiar. The Excel-based architecture wasn't
          a compromise; it was the product insight. A beautiful web app they'd
          never open is worse than an Excel workbook they actually use.
        </p>
      </div>
    </div>
  )
}
