import Link from "next/link";
import { Container } from "@/components/ui/container";
import { disclaimer } from "@/lib/utils";
import { Logo } from "./logo";

const links = [
  { href: "/concepts", label: "Concepts" },
  { href: "/learning-paths", label: "Learning Paths" },
  { href: "/strategies", label: "Strategies" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-black/20 py-10">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <Logo />
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              MSNRCore is a structured trading education platform for market structure, support and resistance, liquidity, and smart money concepts.
            </p>
            <p className="mt-4 text-xs leading-6 text-slate-500">{disclaimer}</p>
          </div>
          <nav className="grid grid-cols-2 gap-3 sm:grid-cols-4" aria-label="Footer navigation">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-slate-400 transition hover:text-cyan-100">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-slate-600">
          © {new Date().getFullYear()} MSNRCore. Educational content only. No signals, brokerage services, or profit promises.
        </div>
      </Container>
    </footer>
  );
}
