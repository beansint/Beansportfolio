"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Professional", href: "#professional" },
  { label: "Personal", href: "#personal" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, close]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5 h-20 flex items-center"
      aria-label="Primary"
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight">
          Vincent Pacaña<span className="text-accent">.</span>
        </div>

        {/* Desktop navigation — unchanged */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <li>
            <a href="#professional" className="hover:text-white transition-colors">
              Professional
            </a>
          </li>
          <li>
            <a href="#personal" className="hover:text-white transition-colors">
              Personal
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </li>
          <li>
            <button
              className="flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full hover:bg-accent/20 transition-colors"
              aria-label="Availability status"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available
            </button>
          </li>
        </ul>

        {/* Hamburger toggle — mobile only */}
        <button
          className="md:hidden w-11 h-11 flex items-center justify-center text-gray-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded-md"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-menu"
          className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-white/5 motion-safe:animate-[fadeSlideDown_0.15s_ease-out]"
        >
          <ul className="container mx-auto px-4 py-2 flex flex-col text-sm font-medium text-gray-400">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="min-h-11 flex items-center py-3 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded-sm transition-colors"
                  onClick={close}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <button
                className="flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full hover:bg-accent/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                aria-label="Availability status"
                onClick={close}
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Available
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
