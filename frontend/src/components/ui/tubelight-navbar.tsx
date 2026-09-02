import React, { useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

export interface TubelightNavItem {
  name: string;
  url: string;
  icon: LucideIcon;
  testId?: string;
}

export interface TubelightNavbarProps {
  items: TubelightNavItem[];
  activeTab?: string;
  onTabChange?: (name: string, url: string) => void;
  className?: string;
}

export function TubelightNavbar({
  items,
  activeTab: controlledActiveTab,
  onTabChange,
  className,
}: TubelightNavbarProps) {
  const [internalActiveTab, setInternalActiveTab] = useState(items[0]?.name ?? "");
  const activeTab = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab;

  const handleClick = (_e: React.MouseEvent, item: TubelightNavItem) => {
    setInternalActiveTab(item.name);
    onTabChange?.(item.name, item.url);
  };

  return (
    <nav
      className={cn(
        "flex items-center gap-1 bg-white/85 border border-[#DEDEDB] backdrop-blur-md py-1 px-1.5 rounded-full shadow-xs",
        className
      )}
      aria-label="Main Navigation"
    >
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.name;

        return (
          <a
            key={item.name}
            href={item.url}
            data-testid={item.testId}
            onClick={(e) => handleClick(e, item)}
            className={cn(
              "relative cursor-pointer text-sm font-bold px-4 sm:px-5 py-2 rounded-full transition-colors duration-200 flex items-center gap-2",
              "text-[#262626] hover:text-[#C83A3A]",
              isActive && "text-[#C83A3A]"
            )}
          >
            <Icon size={16} strokeWidth={2.2} className={cn("shrink-0 transition-transform duration-200", isActive && "scale-110 text-[#C83A3A]")} />
            <span className="tracking-tight">{item.name}</span>

            {isActive && (
              <motion.div
                layoutId="lamp"
                className="absolute inset-0 w-full bg-[#C83A3A]/12 border border-[#C83A3A]/25 rounded-full -z-10 shadow-xs"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
            )}
          </a>
        );
      })}
    </nav>
  );
}
