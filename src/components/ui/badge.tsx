import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-100",
        className,
      )}
      {...props}
    />
  );
}
