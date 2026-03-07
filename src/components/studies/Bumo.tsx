export function BumoContent() {
  return (
    <div className="space-y-10">
      {/* What this illustrates */}
      <div className="bg-warm-50 rounded-lg p-5 border border-warm-200">
        <p className="font-mono text-xs text-accent mb-2">What this case study illustrates</p>
        <p className="text-sm text-warm-600 leading-relaxed">
          Building an end-to-end AI-powered pipeline from scratch, making
          deliberate build-vs-buy decisions under constraints, and scaling a
          startup's supplier acquisition 5x against a hard deadline.
        </p>
      </div>

      {/* Summary */}
      <p className="text-warm-700 leading-relaxed">
        I designed and built an automated supplier acquisition pipeline for an
        early-stage kids' activities marketplace. The founder was personally
        sending 20 outreach emails a week. I built a system that scaled that
        to 100 — across 10 cities, with LLM-powered personalization and 80%
        pre-filled onboarding. Shipped in 2 months, in time for the seasonal
        search window.
      </p>

      {/* Role & Team */}
      <div className="bg-warm-50 rounded-lg p-5 border border-warm-200">
        <p className="font-mono text-xs text-accent mb-2">My role</p>
        <p className="text-sm text-warm-600 leading-relaxed">
          I was the sole designer and builder on this pipeline. I owned
          everything from system architecture to data scraping to outreach
          automation. Worked directly with the founder, who provided domain
          knowledge and supplier relationships. Used Claude Code as a thought
          partner for architecture decisions.
        </p>
      </div>

      {/* Problem */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">The Problem</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            The marketplace connected parents with kids' activity providers —
            including summer camps. But the supply side was the bottleneck.
            Suppliers were niche and fragmented. Online data was outdated and
            unreliable. The founder was manually researching and emailing
            providers one by one, ~20 per week, instead of focusing on growth.
          </p>
          <p>
            There was a{' '}
            <strong className="text-warm-800">hard deadline</strong>: parents
            start searching for summer camps at a predictable time each year.
            The platform needed inventory before that window opened — or miss
            the entire season.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 font-mono text-center">
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">5x</p>
          <p className="text-xs text-warm-400">Outreach scaling</p>
        </div>
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">10</p>
          <p className="text-xs text-warm-400">Cities covered</p>
        </div>
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">80%</p>
          <p className="text-xs text-warm-400">Onboarding pre-filled</p>
        </div>
      </div>

      {/* Approach */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">The Approach</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            I built the pipeline in layers. First,{' '}
            <strong className="text-warm-800">data ingestion</strong>: Python
            scripts and headless browsers pulling supplier data from multiple
            sources across 10 cities, ingesting thousands of providers into a
            NoSQL database.
          </p>
          <p>
            Then{' '}
            <strong className="text-warm-800">normalization and validation</strong>.
            This was the unglamorous but critical layer — cleaning, enriching,
            and validating contact data. Bad data meant bounced emails, burned
            sender domains, and wasted outreach. The pipeline was only as good
            as its data quality.
          </p>
          <p>
            For campaign execution, I made a deliberate{' '}
            <strong className="text-warm-800">build-vs-buy decision</strong>:
            I evaluated building an entire omnichannel workflow from scratch
            versus using Apollo. I chose Apollo for campaign execution — they
            had dedicated deliverability support and lower risk of burning
            sender reputation — while keeping the data pipeline fully custom.
          </p>
          <p>
            I built{' '}
            <strong className="text-warm-800">LLM-powered personalization</strong>{' '}
            into the outbound layer — messages contextualized with supplier
            data, sequenced across cold email, SMS, and voicemail drops. Each
            message felt hand-written because it was informed by real data about
            the supplier's programs, location, and specialties.
          </p>
        </div>
      </div>

      {/* Challenges */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">What Made It Hard</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            Supplier data on the web was a mess — outdated listings, closed
            businesses still showing up, inconsistent formatting across sources.
            The validation layer had to be aggressive enough to filter garbage
            but permissive enough not to throw away real leads.
          </p>
          <p>
            The build-vs-buy decision had real stakes. Building everything custom
            would give full control but risk missing the deadline. Buying a
            turnkey solution would be fast but wouldn't handle our unusual data
            pipeline. The split approach — custom where it matters, off-the-shelf
            where it's commoditized — was the right call, but it required
            designing clean integration points between systems.
          </p>
        </div>
      </div>

      {/* Solution highlight */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">The Onboarding Shortcut</h3>
        <p className="text-warm-600 leading-relaxed">
          The last piece was reducing friction for suppliers who responded. Instead
          of rebuilding the onboarding flow, I reused the marketplace's existing
          components but{' '}
          <strong className="text-warm-800">pre-populated ~80% of the data</strong>{' '}
          from the pipeline. Suppliers just reviewed what we'd already gathered,
          confirmed details, and signed via DocuSign. What used to be a 20-minute
          form became a 3-minute review.
        </p>
      </div>

      {/* Results */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">Results</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            <strong className="text-warm-800">Outreach scaled from 20 to 100 emails per week</strong> —
            a 5x increase. The pipeline ingested thousands of suppliers across
            10 major US cities. The team could focus only on highest-value leads
            instead of manual research.
          </p>
          <p>
            Supplier onboarding friction dropped dramatically with the 80%
            pre-fill. Built and shipped the entire system in 2 months, in time
            for the summer camp search window. The founder was freed from
            day-to-day outreach to focus on growth.
          </p>
        </div>
      </div>

      {/* Earned Secret */}
      <div className="border-l-2 border-accent pl-5 py-1">
        <p className="font-mono text-xs text-accent mb-2">Earned secret</p>
        <p className="text-warm-800 leading-relaxed">
          The build-vs-buy decision is the most important product call on a small
          team. Build the part that's your competitive advantage (clean, validated,
          enriched data), buy the part that's commoditized (campaign execution).
          The 80% onboarding pre-fill is the same instinct — don't rebuild what
          exists, just make the existing flow smarter with better data.
        </p>
      </div>
    </div>
  )
}
