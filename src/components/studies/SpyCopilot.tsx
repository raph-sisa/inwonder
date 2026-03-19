import { asset } from '../../utils/assets'
import { Disclosure } from '../Disclosure'

export function SpyCopilotContent() {
  return (
    <div className="space-y-10">
      <div className="bg-accent/5 rounded-lg p-5 border-l-4 border-accent">
        <p className="text-sm text-warm-600 leading-relaxed">
          Building a real-time AI trading copilot from a personal frustration —
          too many tabs, too much data, too slow to act. Three broker APIs, live
          market streams, and an LLM analysis loop. About 6 hours, start to finish.
        </p>
      </div>

      <div className="space-y-4">
        <p className="text-warm-700 leading-relaxed">
          I've been teaching myself to day trade SPY options. The information I needed
          was scattered across five browser tabs. I'd screenshot everything, paste it
          into Claude, and say "what do you see?" That workflow worked — but by the time
          I'd gathered the data, the trade had moved. I wanted the AI{' '}
          <strong className="text-warm-800">inside the data stream</strong>, not
          looking at pictures of it.
        </p>
        <p className="text-warm-700 leading-relaxed">
          So I built one. A real-time copilot that streams SPY data, runs AI analysis
          every 60 seconds, generates signals with real option prices, and places the
          trade when I approve. Perplexity for the research. Claude Code for the engineering.
        </p>
      </div>

      <div className="bg-warm-50 rounded-lg p-5 border border-warm-200">
        <p className="text-xs text-accent font-semibold mb-2">My role</p>
        <p className="text-sm text-warm-600 leading-relaxed">
          Everything. Product direction, API decisions, UX, trust calls. Perplexity
          helped me understand broker APIs. Claude Code did the full-stack implementation.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-3 text-center">
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">~6h</p>
          <p className="text-xs text-warm-400">Build time</p>
        </div>
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">3</p>
          <p className="text-xs text-warm-400">Data sources</p>
        </div>
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">100ms</p>
          <p className="text-xs text-warm-400">Quote latency</p>
        </div>
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-3">
          <p className="text-xl font-bold text-warm-900">60s</p>
          <p className="text-xs text-warm-400">AI cycle</p>
        </div>
      </div>

      <img
        src={asset('/images/spy-copilot/dashboard-zones.png')}
        alt="SPY Copilot command center showing live chart with confluence zones and signal cards"
        className="w-full rounded-lg border border-warm-200"
      />

      <div>
        <h3 className="text-xs text-accent font-semibold mb-3">How It Works</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            <strong className="text-warm-800">The data.</strong> Alpaca streams real-time
            SPY trades over WebSocket. The options chain refreshes every 60 seconds with
            live bid/ask on 1DTE contracts. VIX comes from Yahoo Finance every 5 seconds.
          </p>
          <p>
            <strong className="text-warm-800">The brain.</strong> Claude Sonnet gets a
            structured snapshot of the entire market state every 60 seconds — price, VWAP,
            VIX regime, chart patterns, confluence scores. It returns a directional bias,
            confidence score, and reasoning. Signals use{' '}
            <strong className="text-warm-800">actual option prices</strong> from the live chain.
          </p>
          <p>
            <strong className="text-warm-800">The loop.</strong> Every signal gets recorded.
            At end of day, results feed{' '}
            <strong className="text-warm-800">directly back into Sonnet's prompt</strong>.
            The AI sees its own track record and recalibrates.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <img
            src={asset('/images/spy-copilot/dashboard-signals.png')}
            alt="Live candlestick chart with signals"
            className="w-full rounded-lg border border-warm-200"
          />
          <p className="text-xs text-warm-400 mt-1.5 text-center">Live chart with signals panel</p>
        </div>
        <div>
          <img
            src={asset('/images/spy-copilot/chain.png')}
            alt="1DTE options chain with real-time prices"
            className="w-full rounded-lg border border-warm-200"
          />
          <p className="text-xs text-warm-400 mt-1.5 text-center">Live 1DTE options chain</p>
        </div>
      </div>

      <div className="space-y-3">
        <Disclosure label="What made it hard">
          <div className="space-y-3 text-sm text-warm-600 leading-relaxed">
            <p>
              <strong className="text-warm-800">Fake data everywhere.</strong> The project
              started with demo generators. When we switched to live data, I kept catching
              lies — the zone monitor said support was at $564 when SPY was at $657. The AI
              was analyzing a VIX of 18 when the real VIX was 24.82. Every fake feed was
              silently corrupting the AI's analysis.
            </p>
            <p>
              <strong className="text-warm-800">Broker APIs are their own universe.</strong>{' '}
              Schwab's developer portal rendered lowercase 'l' and uppercase 'I' identically.
              Thirty minutes debugging "invalid client" because of a font. Alpaca showed $500
              equity but $0 options buying power — approval hadn't propagated.
            </p>
          </div>
        </Disclosure>

        <Disclosure label="Where it stands & what's next">
          <div className="space-y-3 text-sm text-warm-600 leading-relaxed">
            <p>
              It works. Real data flows. AI analyzes. Signals generate with real prices.
              Orders go through. But it's V1 and the interface shows too much at once.
            </p>
            <p>
              V2 needs to be{' '}
              <strong className="text-warm-800">opinionated about information hierarchy</strong>.
              What matters right now. What can wait. What should be hidden until it's relevant.
              That's the design problem. The engineering is mostly done.
            </p>
          </div>
        </Disclosure>
      </div>

      <div className="border-l-2 border-accent pl-5 py-1">
        <p className="text-xs text-accent font-semibold mb-2">Earned secret</p>
        <p className="text-warm-800 leading-relaxed">
          The hardest part of building a real-time AI system isn't the AI — it's
          the data. An LLM analyzing fake VIX produces confidently wrong analysis.
          AI doesn't fix bad data. It amplifies it.
        </p>
      </div>
    </div>
  )
}
