import { useLayoutEffect, useRef } from "react";
import { SectionContainer } from "@/components/portfolio/section-container";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { ProjectCard } from "@/components/portfolio/project-card";
import { projects } from "@/data/projects";
import { gsap } from "@/lib/gsap";

export function ProjectsSection() {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const section = ref.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-reveal]", {
        y: 34,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: section, start: "top 78%", once: true },
      });

      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, index) => {
        gsap.from(card, {
          y: 70,
          opacity: 0,
          scale: 0.965,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 86%", once: true },
        });

        gsap.to(card.querySelector(".project-image"), {
          y: index % 2 ? -34 : 34,
          ease: "none",
          scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <SectionContainer id="projects" ref={ref} className="relative py-24 sm:py-32 lg:py-40">
      <div className="mb-14 flex flex-col justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Stacked builds for bots, servers, dashboards, and motion-led web."
          description="Sample portfolio entries shaped around Karan's identity. Replace the placeholder links with live demos or GitHub repositories when ready."
        />
        <p data-reveal className="max-w-sm text-sm leading-7 text-chrome-400 lg:text-right">
          Sticky project cards use restrained scroll choreography, layered mockups, and technical details without turning into a generic grid.
        </p>
      </div>

      <div className="space-y-8 lg:space-y-12">
        {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
      </div>
    </SectionContainer>
  );
}
