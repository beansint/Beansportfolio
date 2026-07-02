"use client";

import { useEffect, useState } from "react";

// Highest-intent skim destinations for a recruiter / client, in scan order.
const SECTIONS = [
  { label: "About", href: "#personal" },
  { label: "Work", href: "#professional" },
  { label: "Awards", href: "#recognition" },
];

/**
 * Mobile-only sticky bottom navigation. Gives one-tap section jumps in the
 * thumb zone (vs the hidden, two-tap hamburger) and keeps the primary CTA
 * always visible. Appears once the hero scrolls out of view; highlights the
 * current section via scroll-spy.
 */
export default function MobileSectionNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("");

  // Reveal the bar once the hero is out of view.
  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  // Scroll-spy: mark whichever tracked section is most in view.
  useEffect(() => {
    const ids = [...SECTIONS.map((s) => s.href.slice(1)), "contact"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (top) setActive(`#${top.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      aria-hidden={!visible}
      inert={!visible}
      className="md:hidden fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pointer-events-none"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 0.75rem)" }}
    >
      {/* The animation + opacity live on THIS element (the backdrop-filter
          element) — never on an ancestor, or the blur is disabled. The visible
          state intentionally carries no transform so the glass renders. */}
      <ul
        className={`liquid-glass backdrop-blur-xl backdrop-saturate-150 flex w-full max-w-md items-center gap-1 rounded-full p-1.5 transition-[transform,opacity] duration-[350ms] ease-fluid motion-reduce:transition-none ${
          visible
            ? "opacity-100 pointer-events-auto"
            : "translate-y-[160%] opacity-0 pointer-events-none"
        }`}
      >
        {SECTIONS.map((s) => {
          const isActive = active === s.href;
          return (
            <li key={s.href} className="flex-1">
              <a
                href={s.href}
                aria-current={isActive ? "location" : undefined}
                className={`flex min-h-11 items-center justify-center rounded-full px-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-accent/15 text-accent"
                    : "text-foreground-muted hover:text-white"
                }`}
              >
                {s.label}
              </a>
            </li>
          );
        })}
        <li className="shrink-0">
          <a
            href="#contact"
            className="flex min-h-11 items-center justify-center rounded-full bg-accent px-4 text-sm font-semibold text-accent-foreground shadow-[0_2px_14px_-2px_var(--color-accent)]"
          >
            Let&apos;s talk
          </a>
        </li>
      </ul>
    </nav>
  );
}
