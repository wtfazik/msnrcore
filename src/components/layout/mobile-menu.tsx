"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/concepts", label: "Concepts" },
  { href: "/learning-paths", label: "Learning Paths" },
  { href: "/strategies", label: "Strategies" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full border border-white/10 bg-white/[0.06] p-2 text-white"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div className="fixed inset-0 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="absolute inset-0 bg-black/70" aria-label="Close menu" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="absolute right-0 top-0 h-full w-[min(88vw,360px)] border-l border-white/10 bg-[#080d15] p-5 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white">Navigation</span>
                <button type="button" onClick={() => setOpen(false)} className="rounded-full p-2 text-slate-300" aria-label="Close menu">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-8 grid gap-2">
                {navItems.map((item) => {
                  const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-2xl px-4 py-3 text-sm transition",
                        active ? "bg-cyan-300/12 text-cyan-100" : "text-slate-300 hover:bg-white/[0.05] hover:text-white",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <ButtonLink href="/learning-paths" className="mt-8 w-full" onClick={() => setOpen(false)}>
                Start Learning
              </ButtonLink>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
