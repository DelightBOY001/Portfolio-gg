import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-4xl", align === "center" && "mx-auto text-center", className)}>
      <p data-reveal className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-circuit-300/90">
        {eyebrow}
      </p>
      <h2 data-reveal className="font-display text-4xl font-semibold leading-[0.96] tracking-[-0.055em] text-white sm:text-5xl md:text-7xl">
        {title}
      </h2>
      {description ? (
        <p data-reveal className={cn("mt-6 text-base leading-8 text-chrome-300 sm:text-lg", align === "center" ? "mx-auto" : "", "max-w-2xl")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
