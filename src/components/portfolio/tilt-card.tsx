import { useRef, type HTMLAttributes } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type TiltCardProps = HTMLAttributes<HTMLDivElement> & {
  strength?: number;
};

export function TiltCard({ className, children, strength = 10, ...props }: TiltCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * strength;
    const rotateX = ((0.5 - y / rect.height)) * strength;
    gsap.to(ref.current, { rotateX, rotateY, transformPerspective: 900, duration: 0.45, ease: "power3.out" });
    ref.current.style.setProperty("--pointer-x", `${(x / rect.width) * 100}%`);
    ref.current.style.setProperty("--pointer-y", `${(y / rect.height) * 100}%`);
  };

  const handleLeave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, { rotateX: 0, rotateY: 0, duration: 0.7, ease: "power3.out" });
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={cn("relative transform-gpu overflow-hidden rounded-[2rem]", className)}
      {...props}
    >
      {children}
    </div>
  );
}
