import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.065),rgba(255,255,255,0.035))] shadow-2xl shadow-black/25 backdrop-blur-sm transition duration-200",
        className,
      )}
      {...props}
    />
  );
}
