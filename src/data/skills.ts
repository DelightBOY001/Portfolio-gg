import type { LucideIcon } from "lucide-react";
import { Blocks, Bot, Cpu, Gauge, Gamepad2, Layers3 } from "lucide-react";

export type Service = {
  index: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    index: "01",
    title: "Discord Bot Development",
    description: "Moderation, utility, economy, ticketing, role automation, logs, dashboards, and APIs that make servers feel effortless to manage.",
    icon: Bot,
  },
  {
    index: "02",
    title: "Frontend Web Interfaces",
    description: "Dark-mode dashboards, polished landing pages, admin surfaces, and responsive UI systems with motion that supports the product story.",
    icon: Layers3,
  },
  {
    index: "03",
    title: "Full Stack Systems",
    description: "Auth flows, databases, server logic, REST endpoints, integrations, and deployment pipelines built for real community usage.",
    icon: Blocks,
  },
  {
    index: "04",
    title: "Game / Community Tooling",
    description: "Minecraft panels, player stats, events, leaderboards, server control views, and community-first utilities for active gaming worlds.",
    icon: Gamepad2,
  },
  {
    index: "05",
    title: "UI Motion & Interaction",
    description: "GSAP timelines, scroll reveals, parallax layers, magnetic buttons, hover systems, and cinematic micro-interactions with restraint.",
    icon: Gauge,
  },
  {
    index: "06",
    title: "Automation / Backend Integrations",
    description: "Workflow bots, cron jobs, webhook pipelines, admin automations, and backend tools that remove repetitive work from teams.",
    icon: Cpu,
  },
];

export const techStrip = [
  "React", "TypeScript", "Node.js", "Discord.js", "MongoDB", "PostgreSQL", "Tailwind", "GSAP", "Prisma", "Redis", "Docker", "Minecraft APIs",
];
