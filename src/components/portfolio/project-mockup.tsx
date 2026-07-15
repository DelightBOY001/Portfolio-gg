import { Bot, CircleDot, Code2, Gamepad2, ShieldAlert, TerminalSquare } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectMockupProps = {
  project: Project;
};

export function ProjectMockup({ project }: ProjectMockupProps) {
  const isMinecraft = project.title.includes("CraftCore");
  const isBot = project.title.includes("Nexus");
  const isModeration = project.title.includes("Pulse");

  return (
    <div className="relative h-full min-h-[320px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-ink-950/82 p-4 sm:min-h-[390px] sm:p-5">
      <div className={cn("absolute inset-0 opacity-70", project.accent === "ember" ? "bg-[radial-gradient(circle_at_70%_18%,rgba(255,126,68,0.18),transparent_34%)]" : "bg-[radial-gradient(circle_at_70%_18%,rgba(54,200,255,0.18),transparent_34%)]")} />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:34px_34px] opacity-30" />

      <div className="relative flex h-full flex-col rounded-[1.25rem] border border-white/10 bg-white/[0.035] shadow-card backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-circuit-300" />
          </div>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-chrome-300">{project.category}</span>
        </div>

        <div className="grid flex-1 gap-4 p-4 md:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-ink-950/70 p-4">
              <div className="mb-6 flex items-center justify-between">
                <div className="grid size-11 place-items-center rounded-2xl bg-circuit-300/10 text-circuit-300">
                  {isMinecraft ? <Gamepad2 className="size-5" /> : isBot ? <Bot className="size-5" /> : isModeration ? <ShieldAlert className="size-5" /> : <Code2 className="size-5" />}
                </div>
                <CircleDot className="size-5 text-circuit-300" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-chrome-500">Module Health</p>
              <p className="mt-1 font-display text-3xl font-semibold tracking-[-0.06em] text-white">98.7%</p>
              <div className="mt-5 h-2 rounded-full bg-white/10"><div className="h-full w-[88%] rounded-full bg-circuit-300" /></div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["Users", "Events"].map((label, i) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-chrome-500">{label}</p>
                  <p className="mt-3 font-display text-2xl font-semibold text-white">{i === 0 ? "12k" : "4.8m"}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-black/35 p-4">
              <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-circuit-300"><TerminalSquare className="size-4" /> Live Console</div>
              <div className="space-y-2 font-mono text-[11px] leading-5 text-chrome-300">
                {["sync roles --guild alpha", "queue moderation: clear", "emit analytics.snapshot", "deploy edge-worker"].map((line) => (
                  <p key={line} className="rounded-2xl bg-white/[0.045] px-3 py-2"><span className="text-circuit-300">$</span> {line}</p>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[72, 54, 88, 42, 64, 94].map((height, index) => (
                <div key={index} className="flex h-24 items-end rounded-2xl border border-white/10 bg-white/[0.035] p-2">
                  <div style={{ height: `${height}%` }} className="w-full rounded-xl bg-gradient-to-t from-circuit-500 to-circuit-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
