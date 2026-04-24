import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

const styles = {
  base: "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
  primary:
    "border border-cyan-300/30 bg-cyan-300 text-slate-950 shadow-[0_0_30px_rgba(103,232,249,0.18)] hover:bg-cyan-200",
  secondary:
    "border border-white/10 bg-white/[0.06] text-white hover:border-cyan-300/35 hover:bg-white/[0.09]",
  ghost: "text-slate-300 hover:bg-white/[0.06] hover:text-white",
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return <button className={cn(styles.base, styles[variant], className)} {...props} />;
}

export function ButtonLink({ className, variant = "primary", href, ...props }: ButtonLinkProps) {
  return <Link href={href} className={cn(styles.base, styles[variant], className)} {...props} />;
}
