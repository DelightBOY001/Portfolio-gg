import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type FloatingStatCardProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  className?: string;
};

export function FloatingStatCard({ icon: Icon, label, value, className }: FloatingStatCardProps) {
  return (
    <div className={cn("rounded-3xl border border-white/10 bg-ink-900/72 p-4 shadow-card backdrop-blur-2xl", className)}>
      <div className="mb-3 flex items-center justify-between gap-4">
        <div className="grid size-9 place-items-center rounded-2xl bg-circuit-300/10 text-circuit-300">
          <Icon className="size-4" aria-hidden="true" />
        </div>
        <span className="h-1.5 w-10 rounded-full bg-circuit-300/40" />
      </div>
      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-chrome-500">{label}</p>
      <p className="mt-1 font-display text-2xl font-semibold tracking-[-0.045em] text-white">{value}</p>
    </div>
  );
}
