import { ExternalLink, GitBranch } from "lucide-react";
import type { Project } from "@/data/projects";
import { MagneticButton } from "@/components/portfolio/magnetic-button";
import { ProjectMockup } from "@/components/portfolio/project-mockup";
import { TechBadge } from "@/components/portfolio/tech-badge";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article
      className="project-card sticky top-24 grid min-h-[720px] gap-8 rounded-[2rem] border border-white/10 bg-ink-900/88 p-5 shadow-card backdrop-blur-2xl sm:p-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch lg:p-8"
      style={{ top: `${96 + index * 12}px` }}
    >
      <div className="flex flex-col justify-between gap-8">
        <div>
          <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
            <span className="font-display text-5xl font-semibold tracking-[-0.08em] text-white/20">{project.number}</span>
            <span className={cn("rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em]", project.accent === "ember" ? "border-orange-300/25 bg-orange-300/10 text-orange-200" : "border-circuit-300/25 bg-circuit-300/10 text-circuit-300")}>{project.category}</span>
          </div>
          <h3 className="font-display text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">{project.title}</h3>
          <p className="mt-6 text-base leading-8 text-chrome-300 sm:text-lg">{project.summary}</p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-circuit-300/85">{project.impact}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <MagneticButton href={project.links.demo} variant="secondary" className="min-h-11 px-5 text-xs">
            <ExternalLink className="size-4" aria-hidden="true" /> Demo
          </MagneticButton>
          <MagneticButton href={project.links.github} variant="ghost" className="min-h-11 px-5 text-xs" target="_blank" rel="noreferrer">
            <GitBranch className="size-4" aria-hidden="true" /> GitHub
          </MagneticButton>
        </div>
      </div>

      <div className="project-image min-h-[360px] overflow-hidden rounded-[1.65rem]">
        <ProjectMockup project={project} />
      </div>
    </article>
  );
}
