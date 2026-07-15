import { Bot, GitBranch, Home, Mail, MessageCircle, UserRound } from "lucide-react";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";

const demoItems = [
  { label: "Home", icon: Home },
  { label: "About", icon: UserRound },
  { label: "Bots", icon: Bot },
  { label: "GitHub", icon: GitBranch },
  { label: "Discord", icon: MessageCircle },
  { label: "Mail", icon: Mail },
];

export function AppleStyleDock() {
  return (
    <Dock aria-label="Apple style dock demo">
      {demoItems.map((item) => {
        const Icon = item.icon;
        return (
          <DockItem key={item.label} aria-label={item.label}>
            <DockLabel>{item.label}</DockLabel>
            <DockIcon>
              <Icon aria-hidden="true" />
            </DockIcon>
          </DockItem>
        );
      })}
    </Dock>
  );
}
