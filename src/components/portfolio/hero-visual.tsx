import { Bot, Cpu, Gamepad2, Server, ShieldCheck, TerminalSquare, Zap } from "lucide-react";
import { FloatingStatCard } from "@/components/portfolio/floating-stat-card";
import { TiltCard } from "@/components/portfolio/tilt-card";

const terminalLines = [
  { prompt: "karan@stack", text: "deploy guildflow --prod" },
  { prompt: "discord.js", text: "slash commands synced" },
  { prompt: "minecraft", text: "server heartbeat: 20 TPS" },
  { prompt: "worker", text: "automation queue clear" },
];

export function HeroVisual() {
  return (
    <div className="hero-visual-card relative mx-auto min-h-[560px] w-full max-w-[620px] lg:ml-auto" data-parallax>
      <div className="absolute inset-8 rounded-full border border-circuit-300/10 animate-pulseRing" />
      <div className="absolute inset-16 rounded-full border border-white/[0.055]" />
      <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-circuit-300/[0.10] blur-3xl" />

      <TiltCard className="absolute left-1/2 top-1/2 w-[86%] -translate-x-1/2 -translate-y-1/2 border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.11),rgba(255,255,255,0.035))] p-4 shadow-card backdrop-blur-2xl sm:p-5" strength={7}>
        <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_var(--pointer-x,50%)_var(--pointer-y,50%),rgba(119,228,255,0.22),transparent_34%)]" />
        <div className="relative overflow-hidden rounded-[1.45rem] border border-white/10 bg-ink-950/78">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-red-400/80" />
              <span className="size-2.5 rounded-full bg-amber-300/80" />
              <span className="size-2.5 rounded-full bg-circuit-300/90" />
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-chrome-500">
              <TerminalSquare className="size-3.5 text-circuit-300" aria-hidden="true" />
              Command Layer
            </div>
          </div>

          <div className="grid gap-4 p-4 sm:grid-cols-[1.1fr_0.9fr] sm:p-5">
            <div className="rounded-3xl border border-white/10 bg-black/30 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-circuit-300">Live Build</p>
                  <h3 className="mt-1 font-display text-2xl font-semibold tracking-[-0.05em] text-white">Guild Ops UI</h3>
                </div>
                <div className="grid size-10 place-items-center rounded-2xl bg-circuit-300 text-ink-950">
                  <Zap className="size-5" aria-hidden="true" />
                </div>
              </div>
              <div className="space-y-3 font-mono text-[11px] leading-5 text-chrome-300">
                {terminalLines.map((line) => (
                  <div key={line.text} className="rounded-2xl border border-white/[0.065] bg-white/[0.035] px-3 py-2">
                    <span className="text-circuit-300">{line.prompt}</span>
                    <span className="text-chrome-500"> $ </span>
                    {line.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-circuit-300/[0.065] p-4">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-chrome-400">Server Pulse</p>
                  <Server className="size-4 text-circuit-300" aria-hidden="true" />
                </div>
                <div className="mt-5 space-y-3">
                  {[
                    ["API", "99.9%", "w-[92%]"],
                    ["Bot", "Online", "w-[84%]"],
                    ["TPS", "20.0", "w-[96%]"],
                  ].map(([label, value, width]) => (
                    <div key={label}>
                      <div className="mb-1.5 flex justify-between text-xs font-semibold text-chrome-300"><span>{label}</span><span>{value}</span></div>
                      <div className="h-1.5 rounded-full bg-white/10"><div className={`${width} h-full rounded-full bg-circuit-300`} /></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                  <ShieldCheck className="mb-4 size-5 text-circuit-300" aria-hidden="true" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-chrome-500">Mod</p>
                  <p className="font-display text-xl font-semibold text-white">Clean</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                  <Cpu className="mb-4 size-5 text-circuit-300" aria-hidden="true" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-chrome-500">Jobs</p>
                  <p className="font-display text-xl font-semibold text-white">Auto</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 top-0 h-28 animate-scan bg-gradient-to-b from-transparent via-circuit-300/[0.055] to-transparent" aria-hidden="true" />
        </div>
      </TiltCard>

      <FloatingStatCard icon={Bot} label="Discord Modules" value="42+" className="hero-float absolute left-0 top-20 hidden w-44 animate-float sm:block" />
      <FloatingStatCard icon={Gamepad2} label="Game Servers" value="20 TPS" className="hero-float absolute bottom-16 right-0 hidden w-44 animate-float sm:block [animation-delay:1.2s]" />
    </div>
  );
}
