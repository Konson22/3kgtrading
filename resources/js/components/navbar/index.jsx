import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { nav, contact } from "@/data/site";
import { cn } from "@/lib/utils";
import Brand from "./Brand";
import DesktopNav from "./DesktopNav";

const mainNav = [
  { to: "/", label: nav.home },
  { to: "/about", label: nav.about },
  { to: "/services", label: nav.services },
  { to: "/projects", label: nav.projects },
  { to: "/contact", label: nav.contact },
];

const socialLinks = [
  { href: "#", label: "Facebook" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Twitter" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (to) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname === to || location.pathname.startsWith(to + "/");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top bar: Email & phone (left) + Social icons (right) */}
      <div className="border-b border-primary/20 bg-accent">
        <div className="container-px mx-auto flex h-9 max-w-6xl items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-4 text-white">
            <a href={`mailto:${contact.email}`} className="transition-colors hover:text-primary" title="Email">
              {contact.email}
            </a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-primary" title="Phone">
              {contact.phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            {socialLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-7 w-7 items-center justify-center rounded text-white transition-colors hover:text-primary"
                aria-label={label}
              >
                {label === "Facebook" && (
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                )}
                {label === "LinkedIn" && (
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                )}
                {label === "Twitter" && (
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between gap-6">
        <Brand />

        <DesktopNav mainNav={mainNav} isActive={isActive} />

        <div className="flex items-center gap-4">
          <Button asChild size="sm" className="hidden lg:inline-flex">
            <Link to="/contact">Request Quotation</Link>
          </Button>

          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-lg text-neutral-600",
              "hover:bg-neutral-100 hover:text-neutral-900",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              "lg:hidden"
            )}
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <svg className="size-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="size-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-neutral-200 bg-neutral-50 lg:hidden">
          <nav className="container-px mx-auto max-w-6xl py-4" aria-label="Mobile">
            <ul className="flex flex-col gap-1">
              {mainNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={cn(
                      "block rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                      isActive(item.to)
                        ? "bg-primary text-white"
                        : "text-neutral-700 hover:bg-neutral-200"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-2 border-t border-neutral-200 pt-4">
              <Button asChild size="sm" className="w-full justify-center" variant="outline">
                <a href="/company-profile.pdf" download onClick={() => setMobileOpen(false)}>
                  {nav.downloadProfile}
                </a>
              </Button>
              <Button asChild size="sm" className="w-full justify-center">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  Request Quotation
                </Link>
              </Button>
            </div>

            <div className="mt-4 flex flex-wrap gap-4 border-t border-neutral-200 pt-4 text-xs text-neutral-500">
              <a href={`mailto:${contact.email}`} className="hover:text-primary">
                {contact.email}
              </a>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                {contact.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
