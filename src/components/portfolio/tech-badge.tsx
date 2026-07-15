import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TechBadgeProps = {
  children: ReactNode;
  className?: string;
};

export function TechBadge({ children, className }: TechBadgeProps) {
  return (
    <span className={cn("rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-semibold text-chrome-200", className)}>
      {children}
    </span>
  );
}
