export function NoiseLayer() {
  return <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[1] opacity-[0.055] mix-blend-screen noise-layer" />;
}

export function GridOverlay() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_50%_0%,black,transparent_72%)]" />
  );
}

export function SpotlightBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute left-1/2 top-[-18rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-circuit-300/[0.13] blur-[120px]" />
      <div className="absolute right-[-14rem] top-[24rem] h-[32rem] w-[32rem] rounded-full bg-circuit-500/[0.08] blur-[110px]" />
      <div className="absolute bottom-[-20rem] left-[-14rem] h-[38rem] w-[38rem] rounded-full bg-white/[0.035] blur-[120px]" />
    </div>
  );
}
