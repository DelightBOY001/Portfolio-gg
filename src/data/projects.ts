export type Project = {
  number: string;
  title: string;
  category: string;
  summary: string;
  impact: string;
  stack: string[];
  accent: "cyan" | "steel" | "ember";
  links: {
    demo: string;
    github: string;
  };
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Syfex Bot",
    category: "Discord Automation",
    summary: "A modular Discord bot system for sending messages on discord, tickets, welcome flows, role menus, and community analytics.",
    impact: "Designed for 24/7 server operations with clean slash-command UX.",
    stack: ["Discord.js", "TypeScript", "Node", "MongoDB", "Redis"],
    accent: "cyan",
    links: { demo: "https://chatbot.syfex.in/", github: "https://github.com/karanjii190" },
  },
  {
    number: "02",
    title: "CraftCore Admin",
    category: "Minecraft Server Panel",
    summary: "A cinematic admin surface for player lookup, server health, permissions, punishments, and event controls.",
    impact: "Turns server management into a readable command-center experience.",
    stack: ["React", "Tailwind", "WebSocket", "Express", "MySQL"],
    accent: "steel",
    links: { demo: "#contact", github: "https://github.com/karanjii190" },
  },  
  {
    number: "03",
    title: "GuildFlow Dashboard",
    category: "Community Platform",
    summary: "A guild dashboard concept for role mapping, onboarding missions, channel health, and creator moderation queues.",
    impact: "Built around fast decisions for admins and welcoming journeys for members.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "GSAP", "Clerk"],
    accent: "cyan",
    links: { demo: "#contact", github: "https://github.com/karanjii190" },
  },
  {
    number: "04",
    title: "Pulse Moderation Suite",
    category: "Backend Tooling",
    summary: "A moderation workflow layer with incident history, smart filters, evidence bundles, and automated action templates.",
    impact: "Reduces repetitive moderation tasks without hiding human judgment.",
    stack: ["Node", "tRPC", "PostgreSQL", "Queues", "Webhooks"],
    accent: "ember",
    links: { demo: "#contact", github: "https://github.com/karanjii190" },
  },
  {
    number: "05",
    title: "Ember Portfolio Engine",
    category: "Interactive Web",
    summary: "A motion-rich portfolio framework with split-text reveals, section choreography, and component-driven project stories.",
    impact: "Built to make developer work feel premium without sacrificing performance.",
    stack: ["Vite", "React", "GSAP", "Framer Motion", "Tailwind"],
    accent: "steel",
    links: { demo: "#home", github: "https://github.com/karanjii190" },
  },
];
