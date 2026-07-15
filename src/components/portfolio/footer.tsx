import { Gamepad2 } from "lucide-react";
import { SectionContainer } from "@/components/portfolio/section-container";

export function Footer() {
  return (
    <SectionContainer as="footer" className="pb-28 sm:pb-32">
      <div className="flex flex-col justify-between gap-5 border-t border-white/10 pt-8 text-sm text-chrome-500 sm:flex-row sm:items-center">
        <a href="#home" className="flex items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-circuit-300/70">
          <span className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.045] text-circuit-300"><Gamepad2 className="size-4" aria-hidden="true" /></span>
          <span className="font-semibold text-chrome-300">Karan — Developer Portfolio</span>
        </a>
        <p>Full stack systems, Discord bots, gaming communities, and polished web interfaces.</p>
      </div>
    </SectionContainer>
  );
}
