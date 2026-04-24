"use client";

import { motion } from "framer-motion";
import { ChartShell, GridDefs } from "./chart-shell";

const candles: [number, number, number, number, boolean][] = [
  [30, 118, 42, 104, true], [52, 108, 38, 62, true], [74, 70, 50, 94, false], [96, 96, 58, 82, false],
  [118, 86, 44, 54, true], [140, 60, 32, 48, true], [162, 52, 36, 76, false], [184, 80, 54, 112, false],
  [206, 118, 76, 92, true], [228, 98, 64, 72, true], [250, 76, 46, 54, true], [272, 62, 38, 48, true],
];

export function CandlestickMockChart() {
  return (
    <ChartShell title="price action">
      <svg viewBox="0 0 320 170" className="h-auto w-full" role="img" aria-label="Animated candlestick chart">
        <GridDefs />
        <rect width="320" height="170" fill="url(#grid)" />
        <path d="M20 124 C54 84 74 102 102 72 S152 36 186 88 238 114 294 42" fill="none" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="4 5" opacity=".7" />
        {candles.map(([x, open, high, close, green], i) => {
          const top = Math.min(open, close);
          const height = Math.abs(open - close) || 4;
          return (
            <motion.g key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <line x1={x as number} x2={x as number} y1={high as number} y2={(close as number) + 22} stroke={green ? "#34d399" : "#fb7185"} strokeWidth="2" />
              <rect x={(x as number) - 5} y={top as number} width="10" height={height as number} rx="2" fill={green ? "#34d399" : "#fb7185"} opacity=".9" />
            </motion.g>
          );
        })}
        <rect x="38" y="92" width="82" height="22" fill="#67e8f9" opacity=".12" stroke="#67e8f9" strokeOpacity=".35" />
        <text x="42" y="108" fill="#a5f3fc" fontSize="9" fontFamily="monospace">SNR demand</text>
      </svg>
    </ChartShell>
  );
}
