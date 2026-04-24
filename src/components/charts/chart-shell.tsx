import { cn } from "@/lib/utils";

export function ChartShell({ children, className, title }: { children: React.ReactNode; className?: string; title?: string }) {
  return (
    <div className={cn("rounded-3xl border border-white/10 bg-[#07101a] p-4 shadow-2xl shadow-black/30 ring-1 ring-cyan-300/5", className)}>
      <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/70" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">{title ?? "MSNR chart study"} · education only</span>
      </div>
      {children}
    </div>
  );
}

export function GridDefs() {
  return (
    <defs>
      <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
        <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(148,163,184,.12)" strokeWidth="1" />
      </pattern>
      <linearGradient id="lineGradient" x1="0" x2="1">
        <stop stopColor="#67e8f9" />
        <stop offset="1" stopColor="#a78bfa" />
      </linearGradient>
    </defs>
  );
}
