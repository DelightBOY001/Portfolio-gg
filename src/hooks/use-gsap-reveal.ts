import { RefObject, useLayoutEffect } from "react";
import { gsap } from "@/lib/gsap";

export function useGsapReveal<T extends HTMLElement>(ref: RefObject<T | null>, selector = "[data-reveal]") {
  useLayoutEffect(() => {
    const scope = ref.current;
    if (!scope) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.from(selector, {
        y: 34,
        opacity: 0,
        duration: 0.95,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: scope,
          start: "top 78%",
          once: true,
        },
      });
    }, scope);

    return () => ctx.revert();
  }, [ref, selector]);
}
