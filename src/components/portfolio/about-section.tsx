import { useRef } from "react";
import { Bot, Braces, RadioTower } from "lucide-react";
import { SectionContainer } from "@/components/portfolio/section-container";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";

const stats = [
  { label: "Focus", value: "Community systems" },
  { label: "Style", value: "Dark UI + motion" },
  { label: "Stack", value: "Full stack builds" },
];

export function AboutSection() {
  const ref = useRef<HTMLElement | null>(null);
  useGsapReveal(ref);

  return (
    <SectionContainer id="about" ref={ref} className="relative py-24 sm:py-32 lg:py-40">
      <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <SectionHeading
          eyebrow="About Karan"
          title="Systems with the mood of a game lobby and the clarity of a product team."
          description="Karan builds for people who live online: Discord communities, gaming servers, creators, admins, and teams that need tools to feel fast instead of fragile."
        />

        <div className="relative">
          <div data-reveal className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-card backdrop-blur-2xl sm:p-8 lg:p-10">
            <p className="text-xl leading-9 text-chrome-200 sm:text-2xl sm:leading-10">
              I focus on interactive web experiences, Discord bot systems, Minecraft/community tooling, and automation that actually survives real users. The goal is simple: ship practical backend logic wrapped in interfaces that feel sharp, readable, and memorable.
            </p>
            <p className="mt-7 text-base leading-8 text-chrome-400 sm:text-lg">
              Every build balances three things: reliable architecture, community-first UX, and a visual layer that does not feel copied from a template. If a server owner, moderator, player, or client can understand the system quickly — and enjoy using it — the design is doing its job.
            </p>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div data-reveal key={stat.label} className="rounded-[1.5rem] border border-white/10 bg-ink-900/60 p-5 backdrop-blur-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-circuit-300/80">{stat.label}</p>
                <p className="mt-3 font-display text-xl font-semibold tracking-[-0.04em] text-white">{stat.value}</p>
              </div>
            ))}
          </div>

          <div aria-hidden="true" className="absolute -right-5 -top-8 hidden rotate-3 rounded-3xl border border-circuit-300/20 bg-circuit-300/[0.06] p-4 text-circuit-300 shadow-glow lg:block">
            <Bot className="size-7" />
          </div>
          <div aria-hidden="true" className="absolute -bottom-10 left-8 hidden -rotate-6 rounded-3xl border border-white/10 bg-white/[0.045] p-4 text-chrome-300 lg:block">
            <Braces className="size-7" />
          </div>
          <div aria-hidden="true" className="absolute -bottom-5 right-12 hidden rotate-6 rounded-3xl border border-white/10 bg-white/[0.045] p-4 text-chrome-300 lg:block">
            <RadioTower className="size-7" />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
