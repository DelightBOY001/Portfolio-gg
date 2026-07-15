import { useLayoutEffect, useRef } from "react";
import { SectionContainer } from "@/components/portfolio/section-container";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { services } from "@/data/skills";
import { gsap } from "@/lib/gsap";

export function ServicesSection() {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const section = ref.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-service]", {
        y: 36,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: section, start: "top 72%", once: true },
      });
      gsap.from("[data-reveal]", {
        y: 28,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: section, start: "top 78%", once: true },
      });
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={ref} className="relative overflow-hidden bg-chrome-50 py-24 text-ink-950 sm:py-32 lg:py-40">
      <div aria-hidden="true" className="absolute left-[-12rem] top-0 h-[32rem] w-[32rem] rounded-full bg-circuit-300/20 blur-[110px]" />
      <SectionContainer className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Skills / Services"
              title="From slash-command logic to interface choreography."
              description="The work sits at the intersection of full-stack engineering, community operations, gaming dashboards, and polished frontend interaction."
              className="[&_*]:text-ink-950 [&_p:first-child]:!text-circuit-600 [&_p:last-child]:!text-ink-700"
            />
          </div>

          <div className="divide-y divide-ink-950/10 border-y border-ink-950/10">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} data-service className="group grid gap-5 py-7 sm:grid-cols-[6rem_1fr_auto] sm:items-start sm:py-9">
                  <span className="font-display text-4xl font-semibold tracking-[-0.08em] text-ink-950/20 transition group-hover:text-circuit-600">{service.index}</span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.055em] text-ink-950 sm:text-3xl">{service.title}</h3>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-ink-700">{service.description}</p>
                  </div>
                  <div className="grid size-12 place-items-center rounded-2xl border border-ink-950/10 bg-ink-950 text-circuit-300 transition duration-300 group-hover:rotate-3 group-hover:scale-105 sm:size-14">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
