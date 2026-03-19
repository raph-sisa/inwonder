import { asset } from '../../utils/assets'

export function SpyCopilotContent() {
  return (
    <div className="space-y-10">
      {/* What this illustrates */}
      <div className="bg-accent/5 rounded-lg p-5 border-l-4 border-accent">
        <p className="font-mono text-sm font-semibold text-accent mb-2">What this case study illustrates</p>
        <p className="text-sm text-warm-600 leading-relaxed">
          Building a real-time AI trading copilot from a personal frustration — too many tabs,
          too much data, too slow to act. Stitched together three broker APIs, live market
          streams, and an LLM analysis loop in about 6 hours using Perplexity Computer and
          Claude Code. Still V1. Still rough. But the data is real.
        </p>
      </div>

      {/* Summary */}
      <div className="space-y-4">
        <p className="text-warm-700 leading-relaxed">
          I've been teaching myself to day trade. SPY options, mostly — 0DTE and 1DTE
          contracts where everything moves fast and the information you need is scattered
          across five different browser tabs. Price charts in one. Options chain in another.
          VIX over here. Market exposure data over there. And then I'd take a screenshot of
          all of it, paste it into Claude, and say "what do you see?"
        </p>
        <p className="text-warm-700 leading-relaxed">
          That workflow{' '}
          <strong className="text-warm-800">worked</strong>, technically. But it was slow.
          By the time I'd gathered the data, consulted the AI, and looked up option prices,
          the trade had moved. I wanted the AI{' '}
          <strong className="text-warm-800">inside the data stream</strong> — not looking
          at pictures of it.
        </p>
        <p className="text-warm-700 leading-relaxed">
          So I built one. A real-time copilot that streams SPY data, runs AI analysis every
          60 seconds, generates signals with real option prices, and — when I approve — places
          the trade. About 6 hours, start to finish. Perplexity Computer for the research.
          Claude Code for the engineering.
        </p>
      </div>

      {/* Role & Team */}
      <div className="bg-warm-50 rounded-lg p-5 border border-warm-200">
        <p className="font-mono text-xs text-accent mb-2">My role</p>
        <p className="text-sm text-warm-600 leading-relaxed">
          Everything. Product direction, API decisions, UX, trust calls ("is this data real
          or fake?"). Perplexity helped me understand how broker APIs work and what market
          exposure data actually means. Claude Code did the full-stack implementation — I
          told it what to build and whether the output was right.
        </p>
      </div>

      {/* Problem */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">The Problem</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            Day trading SPY options is an information overload problem. You need price action,
            volume profiles, VIX (which tells you how volatile the market expects to be),
            the options chain (live prices on the contracts you'd actually buy), and — the
            big one — <strong className="text-warm-800">market exposure data</strong>. That's
            the data that shows where market makers structurally need to buy or sell. It tells
            you where the real support and resistance is. Not the lines people draw on charts.
            The actual forces moving price.
          </p>
          <p>
            All of that data exists. But it's in different places. Different formats. Different
            refresh rates. And you have to synthesize it in seconds, not minutes. Most retail
            traders either drown in it or ignore it and trade on feel. I was drowning.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3 font-mono text-center">
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

      {/* Hero screenshot */}
      <img
        src={asset('/images/spy-copilot/dashboard-zones.png')}
        alt="SPY Copilot command center showing live chart with confluence zones, VWAP reclaim pattern, and signal cards"
        className="w-full rounded-lg border border-warm-200"
      />

      {/* How it works */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">How It Works</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            Three layers, feeding into each other continuously.
          </p>
          <p>
            <strong className="text-warm-800">The data.</strong> Alpaca streams real-time SPY
            trades over WebSocket — every tick, every second. Historical candles backfill on
            startup so the chart isn't empty. The options chain refreshes every 60 seconds with
            live bid/ask on 1DTE contracts near the money. VIX comes from Yahoo Finance every
            5 seconds. (We tried Schwab's API first. It returned stale data — $18 when the
            real VIX was 24.82. That's a big deal. VIX drives position sizing.)
          </p>
          <p>
            <strong className="text-warm-800">The brain.</strong> Claude Sonnet gets a structured
            snapshot of the entire market state every 60 seconds — price, VWAP, VIX regime,
            chart patterns, confluence scores, zone proximity. All of it. It returns a
            directional bias, a confidence score, and its reasoning. When it has a view, the
            system generates a signal using{' '}
            <strong className="text-warm-800">actual option prices</strong> from the live chain.
            Not estimates. Not random numbers. The real bid and ask.
          </p>
          <p>
            <strong className="text-warm-800">The execution.</strong> I see a signal card. Entry,
            target, stop loss. If I approve, the system places a bracket order through Alpaca —
            limit buy to enter, limit sell at the target, stop sell at the stop. Alpaca doesn't
            actually support bracket orders for options, so the order manager watches for fills
            and places the exit orders automatically. The whole lifecycle is tracked.
          </p>
        </div>
      </div>

      {/* Screenshots grid */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <img
            src={asset('/images/spy-copilot/dashboard-signals.png')}
            alt="Command center with live candlestick chart, VWAP, EMA, RSI, and active trade signals"
            className="w-full rounded-lg border border-warm-200"
          />
          <p className="text-xs text-warm-400 mt-1.5 text-center">Live chart with signals panel</p>
        </div>
        <div>
          <img
            src={asset('/images/spy-copilot/research.png')}
            alt="AI research history showing Claude Sonnet market analysis with technical, macro, and sentiment notes"
            className="w-full rounded-lg border border-warm-200"
          />
          <p className="text-xs text-warm-400 mt-1.5 text-center">AI analysis every 60 seconds</p>
        </div>
        <div>
          <img
            src={asset('/images/spy-copilot/chain.png')}
            alt="1DTE options chain with real-time bid/ask prices for calls and puts"
            className="w-full rounded-lg border border-warm-200"
          />
          <p className="text-xs text-warm-400 mt-1.5 text-center">Live 1DTE options chain</p>
        </div>
        <div>
          <img
            src={asset('/images/spy-copilot/risk.png')}
            alt="Risk management panel with position sizing, loss limits, and conviction-based sizing rules"
            className="w-full rounded-lg border border-warm-200"
          />
          <p className="text-xs text-warm-400 mt-1.5 text-center">Risk management controls</p>
        </div>
      </div>

      {/* What Made It Hard */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">What Made It Hard</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            <strong className="text-warm-800">Fake data everywhere.</strong> The project
            started with demo generators — random prices, fake VIX, simulated candles. When
            we switched to live data, I kept catching lies. The zone monitor said support was
            at $564. SPY was at $657. The AI was analyzing a VIX of 18. The real VIX was
            24.82. Signals were using random entry prices. Every one of these was silently
            corrupting the AI's analysis. The fix wasn't clever — it was tedious. Check every
            data source. Replace every fake feed. Verify against another app I had open. One
            by one.
          </p>
          <p>
            <strong className="text-warm-800">Broker APIs are their own universe.</strong>{' '}
            Schwab's developer portal rendered lowercase 'l' and uppercase 'I' identically.
            Thirty minutes debugging "invalid client" because of a font. Alpaca showed $500
            equity but $0 options buying power — approval hadn't propagated yet. Auth codes
            expire in 30 seconds, so you can't be slow about copy-pasting. 0DTE options get
            rejected after a certain time of day. Each of these was a wall you hit at runtime.
            The docs don't warn you.
          </p>
          <p>
            <strong className="text-warm-800">The chart went completely blank.</strong>{' '}
            Candle timestamps came back out of order. Alpaca's historical data included
            the current incomplete bar, and our live tick logic created a duplicate at a
            different timestamp. The charting library threw an assertion error and the whole
            UI crashed. Took three layers of debugging to find the root cause. Deduplication,
            strict sorting, and using the library's update method instead of append.
          </p>
        </div>
      </div>

      {/* The learning loop */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">The Learning Loop</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            Here's the part I'm most interested in. Every signal the system generates —
            whether I approve it or not — gets recorded. Entry price, strike, VIX regime,
            confidence level. All of it. At end of day, the journal checks what actually
            happened. Did the target get hit? The stop? How long did it take?
          </p>
          <p>
            Those results get fed{' '}
            <strong className="text-warm-800">directly back into Sonnet's prompt</strong>{' '}
            on the next cycle. "Your bullish signals hit stops 70% of the time this week."
            The AI sees that and can recalibrate. It's not fine-tuning. It's just giving the
            model its own track record and letting it adjust.
          </p>
          <p>
            The goal isn't to be right every time. That's not how trading works.{' '}
            <strong className="text-warm-800">
              It's to win more than you lose.
            </strong>
          </p>
        </div>
      </div>

      {/* The build */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">The Build</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            Perplexity Computer for research — understanding how Alpaca's SIP feed works,
            how Schwab's OAuth flow works, what options symbology looks like. Claude Code
            for implementation. The whole thing took about 6 hours.
          </p>
          <p>
            The pattern that worked:{' '}
            <strong className="text-warm-800">I find a problem, I describe it, it gets fixed.</strong>{' '}
            "The VIX data is fake." Fixed across three files. "The chart is blank." Traced from the
            browser console through three layers of candle merging. "The approve button does nothing."
            Turned out Alpaca was rejecting the order — the client was swallowing the error silently.
            Problem, solution, verification. Repeat.
          </p>
          <p>
            When I decided options should target 1DTE instead of 0DTE, that change was live in under
            a minute — API client, data model, UI label, signal generator. That's the thing. The speed
            isn't typing speed. It's{' '}
            <strong className="text-warm-800">
              the gap between making a decision and seeing it implemented
            </strong>{' '}
            collapsing to almost nothing.
          </p>
        </div>
      </div>

      {/* Where it stands */}
      <div>
        <h3 className="font-mono text-xs text-accent mb-3">Where It Stands</h3>
        <div className="space-y-4 text-warm-600 leading-relaxed">
          <p>
            It works. Real data flows. AI analyzes. Signals generate with real prices.
            Orders go through. The system auto-connects on startup and remembers auth tokens.
          </p>
          <p>
            But it's V1 and it feels like V1. The interface shows too much at once. The
            signal cards don't give me enough to act on confidently. The layout doesn't
            match how I actually think about entries. During live market hours, it's still
            overwhelming — which is exactly the problem I was trying to solve.
          </p>
          <p>
            V2 needs to be{' '}
            <strong className="text-warm-800">opinionated about information hierarchy</strong>.
            What matters right now. What can wait. What should be hidden until it's relevant.
            That's the design problem. The engineering is mostly done.
          </p>
        </div>
      </div>

      {/* Earned Secret */}
      <div className="border-l-2 border-accent pl-5 py-1">
        <p className="font-mono text-xs text-accent mb-2">Earned secret</p>
        <p className="text-warm-800 leading-relaxed">
          The hardest part of building a real-time AI system isn't the AI. It's the data.
          An LLM analyzing fake VIX data produces confidently wrong analysis. A signal built
          on random prices generates trades you can't trust. The unsexy work — auditing every
          source, replacing every fake feed, verifying against reality — is what makes the
          system trustworthy. AI doesn't fix bad data. It amplifies it. And honestly, the UX
          problem is the same shape. Having all the right data doesn't help if you can't
          parse it fast enough to act.
        </p>
      </div>
    </div>
  )
}
