import { Disclosure } from '../Disclosure'

export function BumoContent() {
  return (
    <div className="space-y-10">
      <div className="bg-accent/5 rounded-lg p-5 border-l-4 border-accent">
        <p className="text-sm text-warm-600 leading-relaxed">
          Building an end-to-end AI pipeline from scratch, making deliberate
          build-vs-buy decisions under constraints, and scaling supplier
          acquisition 5x against a hard seasonal deadline.
        </p>
      </div>

      <p className="text-warm-700 leading-relaxed">
        The founder of an early-stage kids' activities marketplace was personally
        sending 20 outreach emails a week. I built a system that scaled that
        to 100 — across 10 cities, with LLM-powered personalization and 80%
        pre-filled onboarding. Shipped in 2 months, in time for the summer
        camp search window.
      </p>

      <div className="bg-warm-50 rounded-lg p-5 border border-warm-200">
        <p className="text-xs text-accent font-semibold mb-2">My role</p>
        <p className="text-sm text-warm-600 leading-relaxed">
          Sole designer and builder on the pipeline. Owned everything from
          system architecture to data scraping to outreach automation. Worked
          directly with the founder.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 text-center">
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

      <div>
        <h3 className="text-xs text-accent font-semibold mb-3">The Key Move</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            I built the pipeline in layers. First, Python scripts pulling supplier
            data from multiple sources across 10 cities. Then a normalization layer —
            cleaning, enriching, and validating contact data. Bad data meant bounced
            emails and burned sender domains.
          </p>
          <p>
            The critical call was{' '}
            <strong className="text-warm-800">build-vs-buy</strong>: I kept the data
            pipeline fully custom but chose Apollo for campaign execution — they had
            dedicated deliverability support and lower risk of burning sender reputation.
            Build the competitive advantage, buy the commodity.
          </p>
          <p>
            LLM-powered personalization made each message feel hand-written. And instead
            of rebuilding onboarding, I{' '}
            <strong className="text-warm-800">pre-populated 80% of the data</strong>{' '}
            from the pipeline. What used to be a 20-minute form became a 3-minute review.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <Disclosure label="Build-vs-buy reasoning">
          <div className="space-y-3 text-sm text-warm-600 leading-relaxed">
            <p>
              I evaluated building an entire omnichannel outreach workflow from scratch
              versus using Apollo. The tradeoffs were clear: building everything custom
              would give full control but risk missing the seasonal deadline. A turnkey
              solution would be fast but couldn't handle our unusual data pipeline.
            </p>
            <p>
              The split approach — custom where it's our competitive advantage (clean,
              validated, enriched data), off-the-shelf where it's commoditized (campaign
              execution, deliverability) — required designing clean integration points
              between systems. That was the real architecture work.
            </p>
          </div>
        </Disclosure>

        <Disclosure label="What made it hard">
          <div className="space-y-3 text-sm text-warm-600 leading-relaxed">
            <p>
              Supplier data on the web was a mess — outdated listings, closed
              businesses still showing up, inconsistent formatting across sources.
              The validation layer had to be aggressive enough to filter garbage
              but permissive enough not to throw away real leads.
            </p>
          </div>
        </Disclosure>

        <Disclosure label="Questions I'd ask next">
          <ul className="space-y-2 text-sm text-warm-600">
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>What's the actual conversion rate from pipeline-sourced leads vs. founder-sourced leads? Is the data quality gap showing up in outcomes?</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>At what point does the 80% pre-fill create false confidence — are suppliers rubber-stamping data they should be correcting?</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">—</span>
              <span>Can we close the loop — feed supplier response patterns back into the LLM personalization to improve message quality over time?</span>
            </li>
          </ul>
        </Disclosure>
      </div>

      <div className="border-l-2 border-accent pl-5 py-1">
        <p className="text-xs text-accent font-semibold mb-2">Earned secret</p>
        <p className="text-warm-800 leading-relaxed">
          Build the part that's your competitive advantage. Buy the part that's
          commoditized. The 80% onboarding pre-fill is the same instinct — don't
          rebuild what exists, just make the existing flow smarter with better data.
        </p>
      </div>
    </div>
  )
}
