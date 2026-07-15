import { RefObject, useLayoutEffect } from "react";
import { gsap } from "@/lib/gsap";

export function useParallax<T extends HTMLElement>(ref: RefObject<T | null>, selector = "[data-parallax]", amount = 80) {
  useLayoutEffect(() => {
    const scope = ref.current;
    if (!scope) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(selector).forEach((el, index) => {
        gsap.to(el, {
          y: (index % 2 === 0 ? -amount : amount) * 0.6,
          ease: "none",
          scrollTrigger: {
            trigger: scope,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, scope);

    return () => ctx.revert();
  }, [amount, ref, selector]);
}
