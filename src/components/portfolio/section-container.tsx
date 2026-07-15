import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionContainerProps = HTMLAttributes<HTMLElement> & {
  as?: "section" | "div" | "footer";
  children?: ReactNode;
};

export const SectionContainer = forwardRef<HTMLElement, SectionContainerProps>(
  ({ as: Component = "section", className, children, ...props }, ref) => (
    <Component ref={ref as never} className={cn("mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12", className)} {...props}>
      {children}
    </Component>
  ),
);
SectionContainer.displayName = "SectionContainer";
