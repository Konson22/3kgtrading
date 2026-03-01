import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function DesktopNav({ mainNav, isActive }) {
  return (
    <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
      {mainNav.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={cn(
            "rounded-lg px-4 py-2 text-sm font-medium text-neutral-600 transition-colors",
            "hover:bg-neutral-100 hover:text-neutral-900",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
            isActive(item.to) && "bg-primary/10 text-primary font-medium"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
