import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="MSNRCore home">
      <svg width="38" height="38" viewBox="0 0 48 48" role="img" aria-label="MSNRCore logo" className="shrink-0">
        <defs>
          <linearGradient id="msnr-logo" x1="8" x2="40" y1="8" y2="40">
            <stop stopColor="#67e8f9" />
            <stop offset="0.55" stopColor="#60a5fa" />
            <stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        <rect width="47" height="47" x="0.5" y="0.5" rx="13" fill="#08111d" stroke="url(#msnr-logo)" strokeOpacity="0.55" />
        <path d="M10 32V16l7 9 7-9v16" fill="none" stroke="url(#msnr-logo)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M29 31h9M29 24h7M29 17h9" stroke="#e6faff" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M9 37h30" stroke="#67e8f9" strokeOpacity="0.35" strokeLinecap="round" />
      </svg>
      {!compact ? (
        <span className="text-base font-semibold tracking-tight text-white">
          MSNR<span className="text-cyan-200">Core</span>
        </span>
      ) : null}
    </Link>
  );
}
