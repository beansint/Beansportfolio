"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Projects", href: "#professional" },
  { label: "About", href: "#personal" },
  { label: "Stack", href: "#experience" },
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
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        <a
          href="#"
          aria-label="Vincent Pacaña - home"
          className="flex items-center gap-3 group"
        >
          <Image
            src="/brand/vp-logo.png"
            alt="Vincent Pacaña logo"
            width={112}
            height={112}
            priority
            sizes="56px"
            className="h-11 md:h-14 w-auto transition-transform group-hover:scale-105"
          />
          <span className="hidden min-[380px]:inline font-bold text-base md:text-xl tracking-tight whitespace-nowrap">
            Vincent Pacaña<span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground-muted">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="hover:text-white transition-colors">
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold hover:bg-accent/90 transition-colors"
            >
              Let&apos;s talk
            </a>
          </li>
        </ul>

        {/* Mobile: persistent CTA + hamburger (CTA stays outside the menu) */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="#contact"
            className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold hover:bg-accent/90 transition-colors text-sm min-h-11 shrink-0 whitespace-nowrap"
          >
            Let&apos;s talk
          </a>
          <button
            className="w-11 h-11 shrink-0 flex items-center justify-center text-foreground-muted hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded-md"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-menu"
          className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-white/5 motion-safe:animate-[fadeSlideDown_0.15s_ease-out]"
        >
          <ul className="container mx-auto px-4 py-2 flex flex-col text-sm font-medium text-foreground-muted">
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
          </ul>
        </div>
      )}
    </nav>
  );
}
