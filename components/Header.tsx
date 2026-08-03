"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/lib/use-active-section";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

const NAV = [
  { id: "work", label: "Work" },
  { id: "path", label: "Path" },
  { id: "toolkit", label: "Toolkit" },
  { id: "contact", label: "Contact" },
];

const NAV_IDS = NAV.map((item) => item.id);

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(NAV_IDS);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the mobile menu.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const goTo = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
    });
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-line/70 bg-bg/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-6 md:px-10">
          <a
            href="#top"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
            }}
            className="font-mono text-xs uppercase tracking-[0.18em] text-ink transition-colors hover:text-gold"
          >
            Blaine Cowen
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => goTo(event, item.id)}
                className={cn(
                  "relative font-mono text-xs uppercase tracking-[0.14em] transition-colors",
                  active === item.id
                    ? "text-ink"
                    : "text-ink-faint hover:text-ink",
                )}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1.5 left-0 h-px w-full bg-gold"
                    transition={{ duration: 0.4, ease: EASE }}
                  />
                )}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="text-ink md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-bg px-8 md:hidden"
          >
            {NAV.map((item, i) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => goTo(event, item.id)}
                initial={reduced ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.06, duration: 0.4, ease: EASE }}
                className="border-b border-line py-5 text-4xl tracking-tight text-ink"
              >
                <span className="mr-4 font-mono text-xs text-ink-faint">
                  0{i + 1}
                </span>
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
