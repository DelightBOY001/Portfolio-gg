import { useEffect, useState } from "react";
import { Command } from "lucide-react";
import { navItems } from "@/data/nav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-8">
      <nav
        aria-label="Primary navigation"
        className={cn(
          "pointer-events-auto mx-auto flex max-w-[1280px] items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-5",
          scrolled
            ? "border-white/10 bg-ink-950/72 shadow-card backdrop-blur-2xl"
            : "border-white/[0.065] bg-ink-950/28 backdrop-blur-xl",
        )}
      >
        <a
          href="#home"
          className="group flex items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-circuit-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
          aria-label="Karan home"
        >
          <span className="relative grid size-11 place-items-center overflow-hidden rounded-full border border-white/10 bg-white/[0.055] shadow-[0_0_34px_rgba(255,255,255,0.16)] ring-1 ring-circuit-300/10">
            <img
              src="/karan-logo.png"
              alt=""
              aria-hidden="true"
              className="size-full scale-[1.42] object-cover object-center brightness-125 contrast-125 grayscale"
              draggable={false}
            />
            <span className="absolute inset-0 rounded-full bg-circuit-300/[0.04] mix-blend-screen" />
            <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-circuit-300 ring-4 ring-ink-950" />
          </span>
          <span className="hidden sm:block">
            <span className="block font-display text-base font-semibold tracking-[-0.04em] text-white">Karan</span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-chrome-400">bots / web / games</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-chrome-300 outline-none transition hover:text-white focus-visible:ring-2 focus-visible:ring-circuit-300/70"
            >
              {item.label}
              <span className="absolute bottom-1 left-4 right-4 h-px origin-left scale-x-0 bg-circuit-300 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-white outline-none transition hover:border-circuit-300/35 hover:bg-circuit-300/10 hover:text-circuit-300 focus-visible:ring-2 focus-visible:ring-circuit-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
        >
          <Command className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">Start Build</span>
          <span className="sm:hidden">Contact</span>
        </a>
      </nav>
    </header>
  );
}
