import { useEffect, useMemo, useState } from "react";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { dockActions } from "@/data/nav";

function useCompactDock() {
  const [isCompact, setIsCompact] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 640px)").matches;
  });

  useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)");
    const update = () => setIsCompact(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isCompact;
}

function navigateDock(href: string, external?: boolean) {
  if (external) {
    window.open(href, "_blank", "noopener,noreferrer");
    return;
  }

  const target = document.querySelector(href);
  if (!target) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });

  window.history.replaceState(null, "", href);
}

export function DockNav() {
  const isCompact = useCompactDock();

  const actions = useMemo(() => {
    if (!isCompact) return dockActions;

    const compactItems = new Set(["Home", "About", "Skills", "Projects", "Contact"]);
    return dockActions.filter((item) => compactItems.has(item.label));
  }, [isCompact]);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-3 z-50 flex justify-center px-4 pb-[env(safe-area-inset-bottom)] sm:bottom-6">
      <Dock
        aria-label="Quick navigation dock"
        magnification={isCompact ? 54 : 70}
        distance={isCompact ? 82 : 130}
        className="pointer-events-auto h-14 max-w-[calc(100vw-2rem)] gap-1.5 overflow-visible px-2 pb-2 pt-1.5 sm:h-16 sm:gap-2 sm:px-3 sm:pb-3 sm:pt-2"
      >
        {actions.map((item) => {
          const Icon = item.icon;

          return (
            <DockItem
              key={item.label}
              aria-label={item.ariaLabel ?? item.label}
              onClick={() => navigateDock(item.href, item.external)}
            >
              <DockLabel>{item.label}</DockLabel>
              <DockIcon>
                <Icon aria-hidden="true" />
              </DockIcon>
            </DockItem>
          );
        })}
      </Dock>
    </div>
  );
}
