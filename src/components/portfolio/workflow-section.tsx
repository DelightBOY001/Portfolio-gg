import { useLayoutEffect, useRef } from "react";
import { CheckCircle2, Compass, Rocket, ScanSearch, Sparkles, Wrench } from "lucide-react";
import { SectionContainer } from "@/components/portfolio/section-container";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { gsap } from "@/lib/gsap";

const steps = [
  { label: "Discover", text: "Map community pain points, admin workflows, server rituals, and the technical surface that needs to disappear.", icon: Compass },
  { label: "Design", text: "Sketch the interaction model, hierarchy, edge states, command flows, and responsive UI before writing the heavy logic.", icon: ScanSearch },
  { label: "Build", text: "Implement full-stack foundations: auth, database, bot events, APIs, dashboards, queues, and safe deployment paths.", icon: Wrench },
  { label: "Test", text: "Pressure-test commands, permissions, moderation paths, mobile layouts, and performance under realistic community usage.", icon: CheckCircle2 },
  { label: "Deploy", text: "Ship with readable environments, logs, fallbacks, monitoring, and documentation that server teams can actually use.", icon: Rocket },
  { label: "Optimize", text: "Tune UX, motion, query performance, automation rules, and analytics after real users start shaping the product.", icon: Sparkles },
];

export function WorkflowSection() {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const section = ref.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-reveal]", {
        y: 30,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.07,
        scrollTrigger: { trigger: section, start: "top 78%", once: true },
      });
      gsap.from(".workflow-card", {
        y: 44,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: { trigger: ".workflow-grid", start: "top 80%", once: true },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <SectionContainer id="workflow" ref={ref} className="relative py-24 sm:py-32 lg:py-40">
      <div className="rounded-[2.4rem] border border-white/10 bg-white/[0.04] p-5 shadow-card backdrop-blur-2xl sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Workflow"
            title="Built like a system. Polished like a launch trailer."
            description="A clear process keeps the work grounded: technical reliability first, visual quality always, motion only when it helps the experience feel faster and more understandable."
          />
          <div className="workflow-grid grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.label} className="workflow-card rounded-[1.6rem] border border-white/10 bg-ink-950/54 p-5 transition duration-300 hover:-translate-y-1 hover:border-circuit-300/25 hover:bg-circuit-300/[0.055]">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-display text-3xl font-semibold tracking-[-0.06em] text-white/20">{String(index + 1).padStart(2, "0")}</span>
                    <div className="grid size-11 place-items-center rounded-2xl bg-circuit-300/10 text-circuit-300"><Icon className="size-5" aria-hidden="true" /></div>
                  </div>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.05em] text-white">{step.label}</h3>
                  <p className="mt-3 text-sm leading-7 text-chrome-400">{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
