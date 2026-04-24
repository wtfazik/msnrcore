export type ConceptEnhancement = {
  pros: string[];
  cons: string[];
  whenToUse: string;
  whenToAvoid: string;
  practicalExample: string;
  misconceptions: string[];
  comparison?: {
    title: string;
    leftLabel: string;
    rightLabel: string;
    leftPoints: string[];
    rightPoints: string[];
  };
};

export const conceptEnhancements: Record<string, ConceptEnhancement> = {
  snr: {
    pros: ["Simple enough for beginners to map quickly.", "Works across intraday and higher-timeframe charts.", "Creates clear invalidation when drawn as a zone."],
    cons: ["Over-marking levels can make charts unusable.", "Exact-line thinking causes avoidable false breaks.", "Weak in isolation during strong momentum."],
    whenToUse: "Use SNR when a zone has a visible reaction history and current price is approaching it with room for a planned response.",
    whenToAvoid: "Avoid using SNR when the chart is crowded, the level is in the middle of chop, or price has already moved far away from the zone.",
    practicalExample: "If price returns to a four-hour demand zone after a clean departure, study whether lower-timeframe rejection appears before assuming the zone is active.",
    misconceptions: ["Support and resistance are not exact prices.", "More touches do not always mean a better level.", "A broken level is not automatically a reversal signal."],
    comparison: {
      title: "SNR vs MSNR",
      leftLabel: "SNR",
      rightLabel: "MSNR",
      leftPoints: ["Focuses on historical reaction zones.", "Best for foundational chart mapping.", "Can be used before advanced liquidity analysis."],
      rightPoints: ["Requires structure and liquidity context.", "Prioritizes pivots that define the active market narrative.", "Better for advanced confluence and trade planning."],
    },
  },
  msnr: {
    pros: ["Filters classic SNR through structure.", "Encourages higher-quality zones.", "Connects support/resistance with liquidity and swing state."],
    cons: ["Requires more context than basic SNR.", "Can become subjective without written rules.", "Not ideal for very new chart readers."],
    whenToUse: "Use MSNR after defining the current swing leg, the liquidity around it, and the structural point that would prove the read wrong.",
    whenToAvoid: "Avoid MSNR when you cannot clearly explain why a level matters to the current structure.",
    practicalExample: "A prior resistance zone becomes MSNR only if it aligns with a structural break, holds as support, and sits near a logical liquidity transition.",
    misconceptions: ["MSNR is not just a renamed support/resistance line.", "A zone is not stronger because it has more labels.", "MSNR still needs confirmation and risk definition."],
    comparison: {
      title: "SNR vs MSNR",
      leftLabel: "SNR",
      rightLabel: "MSNR",
      leftPoints: ["Marks visible reaction areas.", "Useful for early learning.", "May ignore active swing narrative."],
      rightPoints: ["Requires market structure agreement.", "Maps zones at decision pivots.", "Connects the level to liquidity and invalidation."],
    },
  },
  fvg: {
    pros: ["Highlights inefficient repricing after displacement.", "Works well as a retracement study zone.", "Pairs naturally with MSS, OTE, and liquidity sweeps."],
    cons: ["Many gaps are low quality inside chop.", "Mitigated gaps can lose usefulness.", "Blind entries can be dangerous during continuation momentum."],
    whenToUse: "Use FVGs after clear displacement, especially when the gap aligns with a structural shift or higher-timeframe objective.",
    whenToAvoid: "Avoid FVGs inside overlapping candles, news spikes without structure, or when price has already filled the zone repeatedly.",
    practicalExample: "After a sell-side sweep and bullish MSS, a discount FVG can become a zone to observe for controlled retracement and rejection.",
    misconceptions: ["Every three-candle gap is not high quality.", "An FVG is not a guaranteed fill target.", "The midpoint of the gap is not magic without context."],
    comparison: {
      title: "FVG vs Imbalance",
      leftLabel: "FVG",
      rightLabel: "Imbalance",
      leftPoints: ["Specific three-candle gap structure.", "Easy to mark visually.", "Often used as a refined retracement zone."],
      rightPoints: ["Broader idea of one-sided movement.", "Can include several candles or poor overlap.", "Describes the market condition behind the FVG."],
    },
  },
  imbalance: {
    pros: ["Explains why price may revisit inefficient areas.", "Helps distinguish impulsive from balanced movement.", "Useful for reading displacement quality."],
    cons: ["Broad term can become vague.", "Not every imbalance is worth trading.", "Requires structure to avoid hindsight labeling."],
    whenToUse: "Use imbalance to judge whether a move repriced quickly enough to create a meaningful retracement area.",
    whenToAvoid: "Avoid it when candles overlap heavily or the market is rotating without directional intent.",
    practicalExample: "A strong bearish displacement through support can leave an imbalance that later acts as a premium reaction zone.",
    misconceptions: ["Large candles alone are not enough.", "Imbalance is context, not an entry trigger.", "A filled imbalance does not guarantee reversal."],
    comparison: {
      title: "FVG vs Imbalance",
      leftLabel: "FVG",
      rightLabel: "Imbalance",
      leftPoints: ["Precise gap between candle wicks.", "A subset of imbalance.", "Often easier for beginners to mark."],
      rightPoints: ["A wider inefficiency concept.", "Can be visible without a textbook gap.", "Requires judgment about repricing strength."],
    },
  },
  "order-block": {
    pros: ["Refines supply or demand after displacement.", "Creates clear zones for retest study.", "Works well with liquidity and structure shifts."],
    cons: ["Easy to over-label every opposite candle.", "Oversized blocks reduce planning quality.", "Weak without displacement or structure break."],
    whenToUse: "Use order blocks after a move has created meaningful displacement and changed structure or liquidity expectations.",
    whenToAvoid: "Avoid order blocks inside sideways chop or when the candle did not cause a meaningful move away.",
    practicalExample: "If price sweeps a high, breaks down with displacement, and leaves a final bullish candle before the drop, that supply block can be studied on retest.",
    misconceptions: ["An order block is not proof of institutional orders.", "The last opposite candle is not always valid.", "A cleaner-looking block is not automatically stronger."],
    comparison: {
      title: "Order Block vs Rejection Block",
      leftLabel: "Order Block",
      rightLabel: "Rejection Block",
      leftPoints: ["Usually body or candle-zone based.", "Precedes displacement.", "Often tied to a structure break."],
      rightPoints: ["Often wick-rejection based.", "Shows failed price acceptance.", "Useful after sweeps or failed breakouts."],
    },
  },
  "rejection-block": {
    pros: ["Refines failed acceptance at extremes.", "Useful near swept highs or lows.", "Often offers tighter study zones than full candles."],
    cons: ["Wicks are common and easy to misuse.", "Needs strong move away to matter.", "Repeated retests can weaken the zone."],
    whenToUse: "Use rejection blocks when a wick forms at a meaningful liquidity or SNR area and price moves away with intent.",
    whenToAvoid: "Avoid them in random intraday noise or when the rejection wick appears without displacement.",
    practicalExample: "A failed push above equal highs followed by a strong bearish close can leave a rejection block for future supply study.",
    misconceptions: ["Every wick is not a rejection block.", "A rejection block still needs market context.", "Tight zones do not remove risk."],
    comparison: {
      title: "Order Block vs Rejection Block",
      leftLabel: "Order Block",
      rightLabel: "Rejection Block",
      leftPoints: ["Focuses on the candle before displacement.", "Often broader.", "Best after clear structure break."],
      rightPoints: ["Focuses on failed acceptance wick.", "Often more refined.", "Best near sweeps and failed breakouts."],
    },
  },
  "liquidity-sweep": {
    pros: ["Explains false break behavior around obvious highs/lows.", "Helps avoid chasing breakouts blindly.", "Pairs well with MSS and FVG confirmation."],
    cons: ["A wick alone is not enough.", "Strong trends can sweep and continue.", "Easy to force reversal bias."],
    whenToUse: "Use liquidity sweeps when price takes an obvious level and then reclaims or rejects with follow-through.",
    whenToAvoid: "Avoid treating a sweep as reversal when momentum accepts beyond the level.",
    practicalExample: "A sweep below equal lows followed by a bullish structure shift gives stronger evidence than the sweep wick alone.",
    misconceptions: ["Sweeps are not automatic reversals.", "Equal highs and lows are not the only liquidity pools.", "The reaction after the sweep matters more than the sweep itself."],
  },
  "trend-line": {
    pros: ["Quickly shows trend rhythm.", "Useful for beginners learning pullbacks.", "Can expose trend-line liquidity."],
    cons: ["Very subjective if constantly redrawn.", "Breaks can be noisy.", "Poor as a standalone entry trigger."],
    whenToUse: "Use trend lines to visualize rhythm after at least two meaningful swing points are clear.",
    whenToAvoid: "Avoid trend lines when the slope is extreme, swings are tiny, or you are redrawing to fit a bias.",
    practicalExample: "A third touch into rising support is more useful if it overlaps SNR and shows rejection rather than relying on the line alone.",
    misconceptions: ["A trend-line break is not always a reversal.", "More touches do not guarantee strength.", "A line should guide analysis, not replace structure."],
  },
  fibonacci: {
    pros: ["Provides consistent retracement measurement.", "Helps define discount and premium zones.", "Works well with OTE and structure concepts."],
    cons: ["Ratios are often treated as magic.", "Bad swing selection creates bad zones.", "Needs confluence to be useful."],
    whenToUse: "Use Fibonacci after a clear impulse leg, then compare retracement levels with structure, SNR, FVG, or order block context.",
    whenToAvoid: "Avoid drawing Fibonacci across random candles or using exact ratios without a reaction.",
    practicalExample: "After a bullish MSS, drawing from the impulse low to high can locate discount retracement zones for observation.",
    misconceptions: ["Fibonacci does not predict future price.", "Exact levels are less important than zone context.", "A 61.8% retracement is not automatically an entry."],
  },
  "day-trading": {
    pros: ["Focuses on active session opportunities.", "No overnight exposure by design.", "Fast feedback for journaling and execution practice."],
    cons: ["High decision pressure.", "Overtrading risk is significant.", "News and spreads can distort analysis."],
    whenToUse: "Use day trading only when you can follow a session plan, fixed risk, and stop time without chasing every move.",
    whenToAvoid: "Avoid it when distracted, emotional, undercapitalized, or unable to respect predefined risk limits.",
    practicalExample: "A day trader may wait for New York to sweep an Asian range high before studying a bearish intraday MSS.",
    misconceptions: ["More trades do not mean faster learning.", "Small timeframes are not easier.", "A good daily bias still matters intraday."],
    comparison: {
      title: "Day Trading vs Swing Trading",
      leftLabel: "Day Trading",
      rightLabel: "Swing Trading",
      leftPoints: ["Intraday execution.", "Higher screen time.", "Tighter but more frequent decisions."],
      rightPoints: ["Multi-day or multi-week planning.", "Lower screen time.", "Wider invalidation and overnight risk."],
    },
  },
  "swing-trading": {
    pros: ["More time for analysis.", "Better suited to higher-timeframe structure.", "Less pressure than intraday execution."],
    cons: ["Wider invalidation zones.", "Overnight and weekend risk.", "Requires patience during pullbacks."],
    whenToUse: "Use swing trading when higher-timeframe structure is clear and you can tolerate wider risk planning.",
    whenToAvoid: "Avoid it when upcoming events or personal risk limits make holding positions inappropriate.",
    practicalExample: "A swing trader may study a daily MSNR support retest and use the four-hour chart only for confirmation.",
    misconceptions: ["Swing trading is not passive guessing.", "Wider stops do not mean careless risk.", "Lower timeframes should not override the higher-timeframe plan."],
    comparison: {
      title: "Day Trading vs Swing Trading",
      leftLabel: "Day Trading",
      rightLabel: "Swing Trading",
      leftPoints: ["Session-based.", "Fast feedback.", "More execution stress."],
      rightPoints: ["Higher-timeframe based.", "Slower feedback.", "More patience and holding risk."],
    },
  },
  wyckoff: {
    pros: ["Turns ranges into structured behavior.", "Useful for studying absorption and tests.", "Pairs well with liquidity and AMD."],
    cons: ["Phase labels can become hindsight stories.", "Requires patience and context.", "Not every range is Wyckoff."],
    whenToUse: "Use Wyckoff when a clear range has formed and price is repeatedly testing boundaries with changing reaction quality.",
    whenToAvoid: "Avoid forcing Wyckoff labels onto fast trends or unclear consolidation.",
    practicalExample: "A spring below range support followed by a strong reclaim and higher low can support an accumulation study, not a guaranteed long idea.",
    misconceptions: ["Phase labels are not proof.", "A spring needs confirmation.", "Wyckoff is a study framework, not a signal system."],
  },
};
