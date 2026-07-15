import { useLayoutEffect, useRef } from "react";
import { MagneticButton } from "@/components/portfolio/magnetic-button";
import { SectionContainer } from "@/components/portfolio/section-container";
import { StatusBadge } from "@/components/portfolio/status-badge";
import { HeroVisual } from "@/components/portfolio/hero-visual";
import { gsap } from "@/lib/gsap";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const lightRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline
        .from(".hero-nav-spacer", { opacity: 0, duration: 0.1 })
        .from(".hero-kicker", { y: 22, opacity: 0, duration: 0.7 }, 0.08)
        .from(".hero-line", { yPercent: 110, opacity: 0, rotateX: 12, duration: 1.0, stagger: 0.09 }, 0.14)
        .from(".hero-copy", { y: 26, opacity: 0, duration: 0.8 }, 0.44)
        .from(".hero-actions", { y: 24, opacity: 0, duration: 0.75 }, 0.56)
        .from(".hero-visual-card", { y: 70, opacity: 0, scale: 0.95, rotate: -1, duration: 1.05 }, 0.25)
        .from(".hero-float", { y: 28, opacity: 0, scale: 0.9, duration: 0.85, stagger: 0.12 }, 0.76);

      gsap.to(".hero-visual-card", {
        y: -84,
        scale: 0.96,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-copy-wrap", {
        y: 42,
        opacity: 0.28,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "58% top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, section);

    const onMove = (event: PointerEvent) => {
      if (!lightRef.current) return;
      const rect = section.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      gsap.to(lightRef.current, { x: x - 260, y: y - 260, duration: 0.7, ease: "power3.out" });
    };

    section.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      section.removeEventListener("pointermove", onMove);
      ctx.revert();
    };
  }, []);

  return (
    <section id="home" ref={sectionRef} className="relative min-h-[100dvh] overflow-hidden pt-28 sm:pt-32">
      <div ref={lightRef} aria-hidden="true" className="pointer-events-none absolute left-0 top-0 z-0 size-[32rem] rounded-full bg-circuit-300/[0.075] blur-[92px]" />
      <SectionContainer className="relative z-10 grid min-h-[calc(100dvh-8rem)] items-center gap-12 pb-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        <div className="hero-copy-wrap max-w-4xl">
          <div className="hero-kicker mb-7">
            <StatusBadge>Open to web + gaming community projects</StatusBadge>
          </div>
          <h1 className="overflow-hidden font-display text-[clamp(3.65rem,9vw,8.8rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-white">
            <span className="hero-line block">Building</span>
            <span className="hero-line block text-chrome-300">bots, systems</span>
            <span className="hero-line block">
              <span className="text-circuit-300">&</span> digital worlds.
            </span>
          </h1>
          <p className="hero-copy mt-7 max-w-2xl text-base leading-8 text-chrome-300 sm:text-lg">
            Karan crafts Discord bots, Minecraft/community tooling, automation layers, and modern full-stack interfaces where backend reliability meets cinematic frontend polish.
          </p>
          <div className="hero-actions mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <MagneticButton href="#projects">View Projects</MagneticButton>
            <MagneticButton href="#contact" variant="secondary">Contact Me</MagneticButton>
          </div>
        </div>
        <HeroVisual />
      </SectionContainer>
    </section>
  );
}
