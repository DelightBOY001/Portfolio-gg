import type { LucideIcon } from "lucide-react";
import { Bot, Code2, GitBranch, Home, Mail, MessageCircle, Sparkles, UserRound, Workflow } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type DockAction = NavItem & {
  icon: LucideIcon;
  external?: boolean;
  ariaLabel?: string;
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const dockActions: DockAction[] = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: UserRound },
  { label: "Skills", href: "#skills", icon: Bot },
  { label: "Projects", href: "#projects", icon: Code2 },
  { label: "Workflow", href: "#workflow", icon: Workflow },
  { label: "Contact", href: "#contact", icon: Mail },
  { label: "GitHub", href: "https://github.com/karanjii190", icon: GitBranch, external: true, ariaLabel: "Open GitHub placeholder" },
  { label: "Discord", href: "https://discord.com/users/1322103615531253789", icon: MessageCircle, external: true, ariaLabel: "Open Discord placeholder" },
  { label: "Resume", href: "#contact", icon: Sparkles },
];
