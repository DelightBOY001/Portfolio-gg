import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/use-magnetic";

type MagneticButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
  showArrow?: boolean;
};

export function MagneticButton({ className, children, variant = "primary", showArrow = true, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  useMagnetic(ref, 0.24);

  return (
    <a
      ref={ref}
      className={cn(
        "group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] outline-none transition duration-300 focus-visible:ring-2 focus-visible:ring-circuit-300/75 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 sm:min-h-14 sm:px-7",
        variant === "primary" && "border border-circuit-300/40 bg-circuit-300 text-ink-950 shadow-[0_0_44px_rgba(54,200,255,0.22)] hover:bg-white",
        variant === "secondary" && "border border-white/12 bg-white/[0.055] text-white backdrop-blur-xl hover:border-circuit-300/35 hover:bg-circuit-300/10 hover:text-circuit-300",
        variant === "ghost" && "border border-transparent bg-transparent text-chrome-200 hover:text-white",
        className,
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow ? <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /> : null}
      </span>
      {variant === "primary" ? <span className="absolute inset-0 -translate-x-full bg-white/40 transition-transform duration-500 group-hover:translate-x-full" /> : null}
    </a>
  );
}
