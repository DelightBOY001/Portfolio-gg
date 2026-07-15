import { useEffect } from "react";
import { AboutSection } from "@/components/portfolio/about-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { DevtoolsGuard } from "@/components/portfolio/devtools-guard";
import { DockNav } from "@/components/portfolio/dock-nav";
import { Footer } from "@/components/portfolio/footer";
import { GridOverlay, NoiseLayer, SpotlightBackground } from "@/components/portfolio/background-layers";
import { HeroSection } from "@/components/portfolio/hero-section";
import { MarqueeSection } from "@/components/portfolio/marquee-section";
import { Navbar } from "@/components/portfolio/navbar";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { ServicesSection } from "@/components/portfolio/services-section";
import { WorkflowSection } from "@/components/portfolio/workflow-section";
import { ScrollTrigger } from "@/lib/gsap";

export default function App() {
  useEffect(() => {
    document.title = "Karan — Developer Portfolio";
    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 250);
    return () => window.clearTimeout(refresh);
  }, []);

  return (
    <>
      <SpotlightBackground />
      <GridOverlay />
      <NoiseLayer />
      <Navbar />
      <main className="relative z-10 overflow-clip bg-ink-950 text-chrome-100 selection:bg-circuit-300 selection:text-ink-950">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <WorkflowSection />
        <ContactSection />
      </main>
      <Footer />
      <DockNav />
      <DevtoolsGuard />
    </>
  );
}
