import { useLayoutEffect, useRef } from "react";
import { Bot, Boxes, Code2, Cpu, Gamepad2, Gauge, LayoutDashboard, MessageSquareText, ShieldCheck, Workflow } from "lucide-react";
import { SectionContainer } from "@/components/portfolio/section-container";
import { techStrip } from "@/data/skills";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

const cards = [
  { title: "Discord Bot", label: "Moderation / tickets / roles", icon: Bot },
  { title: "Guild Console", label: "Slash command analytics", icon: MessageSquareText },
  { title: "CraftCore", label: "Minecraft admin layer", icon: Gamepad2 },
  { title: "Deploy Flow", label: "CI hooks + webhooks", icon: Workflow },
  { title: "Pulse Suite", label: "Incident workflows", icon: ShieldCheck },
  { title: "Web UI", label: "Dashboards + landing pages", icon: LayoutDashboard },
  { title: "Automation", label: "Queues / jobs / cron", icon: Cpu },
  { title: "Game Tools", label: "Stats / leaderboards", icon: Gauge },
  { title: "API Stack", label: "Node / DB / cache", icon: Boxes },
  { title: "Frontend", label: "React / motion / UX", icon: Code2 },
];

function MarqueeCard({ title, label, icon: Icon, dense }: (typeof cards)[number] & { dense?: boolean }) {
  return (
    <article className={cn("group min-w-[17rem] rounded-[1.7rem] border border-white/10 bg-white/[0.045] p-4 shadow-card backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-circuit-300/25 hover:bg-circuit-300/[0.065] sm:min-w-[21rem]", dense && "min-w-[15rem] sm:min-w-[18rem]") }>
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-circuit-300/80">Karan System</p>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.05em] text-white">{title}</h3>
          <p className="mt-2 text-sm text-chrome-400">{label}</p>
        </div>
        <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-ink-950/70 text-circuit-300 transition group-hover:scale-105">
          <Icon className="size-5" aria-hidden="true" />
        </div>
      </div>
      <div className="mt-5 h-1.5 rounded-full bg-white/10">
        <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-circuit-300 to-circuit-500" />
      </div>
    </article>
  );
}

export function MarqueeSection() {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const section = ref.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.to(".marquee-row-a", {
        xPercent: -18,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 0.8 },
      });
      gsap.fromTo(".marquee-row-b", { xPercent: -16 }, {
        xPercent: 4,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 0.8 },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const firstRow = [...cards, ...cards.slice(0, 4)];
  const secondRow = [...cards.slice().reverse(), ...cards.slice(0, 3).reverse()];

  return (
    <section ref={ref} aria-labelledby="proof-heading" className="relative overflow-hidden border-y border-white/[0.07] bg-ink-900/42 py-12 sm:py-16">
      <SectionContainer className="mb-9 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-circuit-300/80">Build range</p>
          <h2 id="proof-heading" className="mt-3 font-display text-3xl font-semibold tracking-[-0.055em] text-white sm:text-5xl">Discord-native. Game-aware. Web-polished.</h2>
        </div>
        <div className="flex max-w-xl flex-wrap gap-2">
          {techStrip.slice(0, 8).map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-chrome-300">{tech}</span>
          ))}
        </div>
      </SectionContainer>

      <div className="relative space-y-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent sm:w-44" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent sm:w-44" />
        <div className="marquee-row-a flex w-max gap-4 pl-5 will-change-transform sm:pl-8">
          {firstRow.map((card, index) => <MarqueeCard key={`${card.title}-a-${index}`} {...card} />)}
        </div>
        <div className="marquee-row-b flex w-max gap-4 pl-5 will-change-transform sm:pl-8">
          {secondRow.map((card, index) => <MarqueeCard key={`${card.title}-b-${index}`} {...card} dense />)}
        </div>
      </div>
    </section>
  );
}
