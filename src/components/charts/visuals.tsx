import { ChartShell, GridDefs } from "./chart-shell";

function Base({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <ChartShell title={title}>
      <svg viewBox="0 0 420 230" className="h-auto w-full" role="img" aria-label={title}>
        <GridDefs />
        <rect width="420" height="230" fill="url(#grid)" />
        {children}
      </svg>
    </ChartShell>
  );
}

export function MarketStructureDiagram() {
  return <Base title="market structure"><polyline points="34,172 84,132 125,152 176,92 222,114 275,62 335,84 382,44" fill="none" stroke="url(#lineGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M176 92h78" stroke="#67e8f9" strokeDasharray="5 5" /><path d="M222 114h82" stroke="#a78bfa" strokeDasharray="5 5" /><text x="260" y="90" fill="#a5f3fc" fontSize="12">BOS</text><text x="308" y="118" fill="#ddd6fe" fontSize="12">pullback</text></Base>;
}

export function LiquiditySweepVisual() {
  return <Base title="liquidity sweep"><path d="M48 128h300" stroke="#64748b" strokeDasharray="6 6" /><text x="52" y="118" fill="#94a3b8" fontSize="11">equal lows / sell-side liquidity</text><polyline points="42,72 92,96 140,78 188,112 232,132 270,158 300,102 358,66" fill="none" stroke="url(#lineGradient)" strokeWidth="4" strokeLinecap="round" /><circle cx="270" cy="158" r="9" fill="#fb7185" opacity=".3" stroke="#fb7185" /><text x="282" y="162" fill="#fecdd3" fontSize="12">sweep</text></Base>;
}

export function FVGZoneVisual() {
  return <Base title="fair value gap"><rect x="184" y="88" width="82" height="56" fill="#67e8f9" opacity=".13" stroke="#67e8f9" strokeOpacity=".5" /><text x="195" y="118" fill="#a5f3fc" fontSize="12">FVG</text><path d="M70 168 C118 152 140 132 168 126 C196 119 194 74 220 58 C252 38 298 48 360 32" fill="none" stroke="url(#lineGradient)" strokeWidth="4" strokeLinecap="round" /></Base>;
}

export function OrderBlockVisual() {
  return <Base title="order block"><rect x="90" y="126" width="78" height="46" fill="#a78bfa" opacity=".16" stroke="#a78bfa" strokeOpacity=".55" /><text x="100" y="153" fill="#ddd6fe" fontSize="12">OB</text><polyline points="52,152 92,146 128,136 164,132 198,82 252,58 334,42 374,32" fill="none" stroke="url(#lineGradient)" strokeWidth="4" strokeLinecap="round" /></Base>;
}

export function TrendLineVisual() {
  return <Base title="trend line"><path d="M54 174L364 58" stroke="#67e8f9" strokeWidth="2" strokeDasharray="7 7" /><polyline points="52,174 102,142 144,152 196,112 238,122 292,84 360,62" fill="none" stroke="url(#lineGradient)" strokeWidth="4" strokeLinecap="round" /><text x="250" y="105" fill="#a5f3fc" fontSize="12">trend rhythm</text></Base>;
}

export function FibonacciVisual() {
  const levels = [[44, "0%"], [78, "23.6%"], [112, "50%"], [139, "61.8%"], [162, "78.6%"]];
  return <Base title="fibonacci retracement"><path d="M74 178L336 42" stroke="url(#lineGradient)" strokeWidth="4" /><>{levels.map(([y, label]) => <g key={label}><line x1="68" x2="352" y1={y} y2={y} stroke="#64748b" strokeDasharray="5 5" /><text x="358" y={(y as number) + 4} fill="#94a3b8" fontSize="11">{label}</text></g>)}</><rect x="68" y="139" width="284" height="23" fill="#67e8f9" opacity=".11" /><text x="78" y="155" fill="#a5f3fc" fontSize="12">OTE study zone</text></Base>;
}

export function WyckoffPhaseDiagram() {
  return <Base title="wyckoff phase"><rect x="62" y="72" width="292" height="92" fill="#ffffff" opacity=".04" stroke="#64748b" strokeDasharray="6 6" /><path d="M54 132 C88 96 118 156 154 124 S218 112 238 148 286 160 300 96 342 92 370 54" fill="none" stroke="url(#lineGradient)" strokeWidth="4" /><text x="76" y="64" fill="#94a3b8" fontSize="12">accumulation range</text><text x="286" y="48" fill="#a5f3fc" fontSize="12">markup</text></Base>;
}

export function KillZonesTimeline() {
  return <Base title="kill zones timeline"><line x1="48" x2="372" y1="118" y2="118" stroke="#64748b" /><rect x="82" y="82" width="86" height="72" rx="12" fill="#67e8f9" opacity=".12" stroke="#67e8f9" strokeOpacity=".5" /><rect x="224" y="82" width="96" height="72" rx="12" fill="#a78bfa" opacity=".12" stroke="#a78bfa" strokeOpacity=".5" /><text x="104" y="123" fill="#a5f3fc" fontSize="13">London</text><text x="248" y="123" fill="#ddd6fe" fontSize="13">New York</text></Base>;
}

export function ImbalanceVisual() {
  return <Base title="imbalance"><rect x="174" y="74" width="88" height="82" fill="#60a5fa" opacity=".13" stroke="#60a5fa" strokeOpacity=".5" /><path d="M64 172 C112 164 132 154 158 146 C190 136 178 74 222 58 C254 44 306 48 362 34" fill="none" stroke="url(#lineGradient)" strokeWidth="4" strokeLinecap="round" /><text x="188" y="118" fill="#bfdbfe" fontSize="12">imbalance</text></Base>;
}

export function ChartVisual({ type }: { type: string }) {
  switch (type) {
    case "market-structure": return <MarketStructureDiagram />;
    case "liquidity-sweep": return <LiquiditySweepVisual />;
    case "fvg": return <FVGZoneVisual />;
    case "order-block": return <OrderBlockVisual />;
    case "trend-line": return <TrendLineVisual />;
    case "fibonacci": return <FibonacciVisual />;
    case "wyckoff": return <WyckoffPhaseDiagram />;
    case "kill-zones": return <KillZonesTimeline />;
    case "imbalance": return <ImbalanceVisual />;
    default: return <CandlestickFallback />;
  }
}

function CandlestickFallback() {
  return <Base title="candlestick study"><path d="M52 152 C98 112 132 132 164 94 S226 62 264 104 318 112 370 66" fill="none" stroke="url(#lineGradient)" strokeWidth="4" strokeLinecap="round" /><rect x="82" y="122" width="76" height="34" fill="#67e8f9" opacity=".12" stroke="#67e8f9" strokeOpacity=".45" /><text x="92" y="143" fill="#a5f3fc" fontSize="12">SNR zone</text></Base>;
}
