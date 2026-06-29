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
            "rounded-lg px-4 py-0 text-md font-bold text-white transition-colors",
            "hover:bg-primary hover:text-white",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
            isActive(item.to) && "bg-primary text-white font-medium"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
