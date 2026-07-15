import { useEffect, useState } from "react";
import { ShieldAlert } from "lucide-react";

const BLOCKED_KEYS = new Set(["F12"]);
const BLOCKED_COMBOS = new Set(["I", "J", "C", "U", "S"]);
const DEVTOOLS_SIZE_THRESHOLD = 170;

function looksLikeDevtoolsOpen() {
  const widthGap = Math.abs(window.outerWidth - window.innerWidth);
  const heightGap = Math.abs(window.outerHeight - window.innerHeight);

  return widthGap > DEVTOOLS_SIZE_THRESHOLD || heightGap > DEVTOOLS_SIZE_THRESHOLD;
}

export function DevtoolsGuard() {
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const block = () => setBlocked(true);

    const onContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      const isMacInspectCombo = event.metaKey && event.altKey && BLOCKED_COMBOS.has(key);
      const isWindowsInspectCombo = event.ctrlKey && event.shiftKey && BLOCKED_COMBOS.has(key);
      const isViewSource = event.ctrlKey && key === "U";
      const isSavePage = event.ctrlKey && key === "S";

      if (BLOCKED_KEYS.has(event.key) || isMacInspectCombo || isWindowsInspectCombo || isViewSource || isSavePage) {
        event.preventDefault();
        event.stopPropagation();
        block();
      }
    };

    const checkDevtoolsSize = () => {
      if (looksLikeDevtoolsOpen()) block();
    };

    document.addEventListener("contextmenu", onContextMenu);
    window.addEventListener("keydown", onKeyDown, true);

    checkDevtoolsSize();
    const interval = window.setInterval(checkDevtoolsSize, 700);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      window.removeEventListener("keydown", onKeyDown, true);
      window.clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.devtoolsBlocked = blocked ? "true" : "false";
  }, [blocked]);

  if (!blocked) return null;

  return (
    <div className="fixed inset-0 z-[2147483647] grid place-items-center bg-[#050608] px-6 text-center text-white">
      <div className="max-w-md rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-[0_0_80px_rgba(255,255,255,0.14)] backdrop-blur-2xl">
        <div className="mx-auto mb-6 grid size-16 place-items-center rounded-full border border-red-400/25 bg-red-400/10 text-red-300 shadow-[0_0_40px_rgba(248,113,113,0.18)]">
          <ShieldAlert className="size-8" aria-hidden="true" />
        </div>

        <h1 className="font-display text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
          Access Blocked
        </h1>

        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-red-200/90">
          Inspect mode is not allowed
        </p>

        <p className="mt-5 text-sm leading-7 text-chrome-300">
          Developer tools, view source, right click, or inspect shortcuts were detected. Please close inspect/devtools and refresh the page to continue.
        </p>
      </div>
    </div>
  );
}
