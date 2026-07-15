import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type StatusBadgeProps = {
  children: ReactNode;
  className?: string;
};

export function StatusBadge({ children, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-circuit-300/20 bg-circuit-300/[0.065] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-circuit-300 shadow-glow backdrop-blur-xl",
        className,
      )}
    >
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-circuit-300 opacity-40" />
        <span className="relative inline-flex size-2 rounded-full bg-circuit-300" />
      </span>
      {children}
    </span>
  );
}
