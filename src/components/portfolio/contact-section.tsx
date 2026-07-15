import { useRef } from "react";
import { GitBranch, Mail, MessageCircle, Send } from "lucide-react";
import { MagneticButton } from "@/components/portfolio/magnetic-button";
import { SectionContainer } from "@/components/portfolio/section-container";
import { StatusBadge } from "@/components/portfolio/status-badge";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";

const socials = [
  { label: "GitHub", href: "https://github.com/karanjii190", icon: GitBranch },
  { label: "Discord", href: "https://discord.com/users/1322103615531253789", icon: MessageCircle },
  { label: "Email", href: "mailto:karanjii190@gmail.com", icon: Mail },
];

export function ContactSection() {
  const ref = useRef<HTMLElement | null>(null);
  useGsapReveal(ref);

  return (
    <SectionContainer id="contact" ref={ref} className="relative pb-24 pt-20 sm:pb-32 lg:pb-40">
      <div className="relative overflow-hidden rounded-[2.6rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.095),rgba(255,255,255,0.035))] p-6 shadow-card backdrop-blur-2xl sm:p-10 lg:p-14">
        <div aria-hidden="true" className="absolute right-[-8rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-circuit-300/[0.14] blur-[100px]" />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:54px_54px] opacity-25" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <div data-reveal className="mb-7"><StatusBadge>Ready when the idea is sharp</StatusBadge></div>
            <h2 data-reveal className="font-display text-[clamp(3rem,8vw,7.6rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-white">
              Let’s build the next command layer.
            </h2>
            <p data-reveal className="mt-7 max-w-2xl text-base leading-8 text-chrome-300 sm:text-lg">
              Need a Discord bot, a game/community dashboard, an automation tool, or a portfolio interface with real motion quality? Send the brief and I’ll help turn it into a system people want to use.
            </p>
            <div data-reveal className="mt-9 flex flex-col gap-3 sm:flex-row">
              <MagneticButton href="mailto:karanjii190@gmail.com">
                <Send className="size-4" aria-hidden="true" /> Email Karan
              </MagneticButton>
              <MagneticButton href="https://discord.com/users/1322103615531253789" variant="secondary" target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" aria-hidden="true" /> Discord CTA
              </MagneticButton>
            </div>
          </div>

          <div data-reveal className="rounded-[1.8rem] border border-white/10 bg-ink-950/70 p-5 backdrop-blur-xl sm:p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-circuit-300">Contact Links</p>
            <div className="mt-5 space-y-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-chrome-200 outline-none transition hover:border-circuit-300/25 hover:bg-circuit-300/[0.07] hover:text-white focus-visible:ring-2 focus-visible:ring-circuit-300/70">
                    <span className="flex items-center gap-3"><Icon className="size-5 text-circuit-300" aria-hidden="true" /> {social.label}</span>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-chrome-500 transition group-hover:text-circuit-300">Open</span>
                  </a>
                );
              })}
            </div>
            <div className="mt-6 rounded-2xl border border-circuit-300/15 bg-circuit-300/[0.055] p-4 text-sm leading-7 text-chrome-300">
              Replace <span className="font-semibold text-white">karanjii190@gmail.com</span>, GitHub, Discord, and resume links with Karan’s real contact details before publishing.
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
