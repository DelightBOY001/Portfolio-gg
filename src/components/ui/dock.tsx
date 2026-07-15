import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

type DockContextValue = {
  mouseX: MotionValue<number>;
  magnification: number;
  distance: number;
};

const DockContext = React.createContext<DockContextValue | null>(null);

function useDock() {
  const context = React.useContext(DockContext);
  if (!context) {
    throw new Error("Dock components must be used inside <Dock />");
  }
  return context;
}

export type DockProps = React.ComponentPropsWithoutRef<typeof motion.div> & {
  magnification?: number;
  distance?: number;
};

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ className, magnification = 76, distance = 145, children, ...props }, ref) => {
    const mouseX = useMotionValue(Number.POSITIVE_INFINITY);

    return (
      <DockContext.Provider value={{ mouseX, magnification, distance }}>
        <motion.div
          ref={ref}
          onMouseMove={(event) => mouseX.set(event.pageX)}
          onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
          className={cn(
            "mx-auto flex h-16 items-end gap-2 rounded-full border border-white/10 bg-ink-900/70 px-3 pb-3 pt-2 shadow-card backdrop-blur-2xl",
            "supports-[backdrop-filter]:bg-ink-900/55",
            className,
          )}
          {...props}
        >
          {children}
        </motion.div>
      </DockContext.Provider>
    );
  },
);
Dock.displayName = "Dock";

export type DockItemProps = React.ComponentPropsWithoutRef<typeof motion.button> & {
  asChild?: boolean;
};

const DockItem = React.forwardRef<HTMLButtonElement, DockItemProps>(
  ({ className, children, ...props }, ref) => {
    const itemRef = React.useRef<HTMLButtonElement | null>(null);
    const { mouseX, magnification, distance } = useDock();

    React.useImperativeHandle(ref, () => itemRef.current as HTMLButtonElement);

    const itemCenter = useTransform(mouseX, (value) => {
      const bounds = itemRef.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
      return value - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(itemCenter, [-distance, 0, distance], [44, magnification, 44]);
    const heightSync = useTransform(itemCenter, [-distance, 0, distance], [44, magnification, 44]);
    const width = useSpring(widthSync, { mass: 0.12, stiffness: 180, damping: 18 });
    const height = useSpring(heightSync, { mass: 0.12, stiffness: 180, damping: 18 });

    return (
      <motion.button
        ref={itemRef}
        type="button"
        style={{ width, height }}
        className={cn(
          "group relative inline-flex shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.055] text-chrome-200 outline-none transition-colors duration-200",
          "hover:border-circuit-300/35 hover:bg-circuit-300/10 hover:text-white focus-visible:ring-2 focus-visible:ring-circuit-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950",
          className,
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  },
);
DockItem.displayName = "DockItem";

export type DockLabelProps = React.HTMLAttributes<HTMLDivElement>;

const DockLabel = React.forwardRef<HTMLDivElement, DockLabelProps>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "pointer-events-none absolute -top-10 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-ink-800/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-chrome-100 opacity-0 shadow-card backdrop-blur-xl transition duration-200 group-hover:-translate-y-1 group-hover:opacity-100 group-focus-visible:-translate-y-1 group-focus-visible:opacity-100",
      className,
    )}
    {...props}
  >
    {children}
  </div>
));
DockLabel.displayName = "DockLabel";

export type DockIconProps = React.HTMLAttributes<HTMLDivElement>;

const DockIcon = React.forwardRef<HTMLDivElement, DockIconProps>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center justify-center [&_svg]:size-5 [&_svg]:stroke-[1.8]", className)} {...props}>
    {children}
  </div>
));
DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, DockItem, DockLabel };
