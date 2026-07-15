import { RefObject, useEffect } from "react";
import { gsap } from "@/lib/gsap";

export function useMagnetic<T extends HTMLElement>(ref: RefObject<T | null>, strength = 0.34) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const xTo = gsap.quickTo(element, "x", { duration: 0.42, ease: "power3.out" });
    const yTo = gsap.quickTo(element, "y", { duration: 0.42, ease: "power3.out" });

    const onMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      xTo(x * strength);
      yTo(y * strength);
    };

    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener("pointermove", onMove, { passive: true });
    element.addEventListener("pointerleave", onLeave);

    return () => {
      element.removeEventListener("pointermove", onMove);
      element.removeEventListener("pointerleave", onLeave);
      xTo.tween?.kill();
      yTo.tween?.kill();
    };
  }, [ref, strength]);
}
