"use client";

import { useState } from "react";
import Image from "next/image";
import { DATA } from "../data";
import { Mail, Check, Globe, Layers, Send } from "lucide-react";

/** Subtle dot-grid texture, echoing the hero's grid background. Decorative. */
function DotGrid({ id }: { id: string }) {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full text-white/[0.06]"
    >
      <defs>
        <pattern id={id} width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/** Node/circuit motif ("systems / architecture"). Signal flows along the
    dashed traces on hover. Decorative. */
function CircuitMotif() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 160"
      fill="none"
      className="pointer-events-none absolute -bottom-6 -right-4 h-44 w-52 text-accent opacity-[0.3] transition-opacity duration-300 group-hover:opacity-60"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        className="motion-safe:group-hover:[animation:dashFlow_0.8s_linear_infinite]"
      >
        <path d="M28 132 C34 96 14 78 60 72 C96 66 94 34 140 30" />
        <path d="M60 72 C104 82 108 116 176 118" />
        <path d="M60 128 C86 126 96 132 122 126" />
      </g>
      <g fill="var(--background)" stroke="currentColor" strokeWidth="1.5">
        <circle cx="28" cy="132" r="5" />
        <circle cx="60" cy="72" r="5" />
        <circle cx="140" cy="30" r="5" />
        <circle cx="176" cy="118" r="5" />
        <circle cx="122" cy="126" r="5" />
      </g>
      <g fill="currentColor">
        <circle cx="34" cy="96" r="2.5" />
        <circle cx="94" cy="34" r="2.5" />
      </g>
    </svg>
  );
}

/** Two points linked by an arc — "collaborating across regions / time zones".
    The link streams on hover. Decorative. */
function ConnectionArc() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 70"
      fill="none"
      className="pointer-events-none absolute -bottom-2 right-1 w-28 text-accent opacity-30 transition-opacity duration-300 group-hover:opacity-60"
    >
      <path
        d="M12 52 Q60 4 108 52"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 4"
        className="motion-safe:group-hover:[animation:dashFlow_0.7s_linear_infinite]"
      />
      <circle cx="12" cy="52" r="4" fill="currentColor" />
      <circle
        cx="108"
        cy="52"
        r="4"
        fill="var(--background)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/** A tiny CI/CD pipeline — code → build → ship. Data streams through it on
    hover. Decorative. */
function PipelineMotif() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 180 32"
      fill="none"
      className="pointer-events-none mt-6 w-full max-w-[240px] text-accent opacity-40 transition-opacity duration-300 group-hover:opacity-80"
    >
      <path
        d="M16 16 Q53 5 90 16 T164 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 5"
        className="motion-safe:group-hover:[animation:dashFlow_0.6s_linear_infinite]"
      />
      {[16, 90, 164].map((cx) => (
        <g key={cx}>
          <circle
            cx={cx}
            cy="16"
            r="7"
            fill="var(--background)"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx={cx} cy="16" r="2.5" fill="currentColor" />
        </g>
      ))}
    </svg>
  );
}

/** GitHub-style contribution grid — a recognizable "I ship code" motif. */
const ACTIVITY = [
  1, 2, 4, 1, 3, 2, 0, 3, 4, 2, 1, 4, 3, 2, 0, 1, 3, 4, 4, 2, 1, 0, 2, 3, 1, 4,
  2, 3, 1, 2, 4, 3, 0, 1, 2,
];
const LEVEL_OPACITY = [
  "opacity-10",
  "opacity-25",
  "opacity-40",
  "opacity-70",
  "opacity-100",
];

function ActivityGrid() {
  return (
    <div
      aria-hidden="true"
      className="grid w-fit grid-flow-col grid-rows-5 gap-1"
    >
      {ACTIVITY.map((level, i) => (
        <span
          key={i}
          className={`h-2.5 w-2.5 rounded-[3px] bg-accent ${LEVEL_OPACITY[level]}`}
        />
      ))}
    </div>
  );
}

// Shared card chrome: rounded, bordered, lifts + accent-glows on hover.
const CARD =
  "group relative overflow-hidden rounded-3xl border border-card-border bg-card-bg transition-[transform,border-color] duration-300 ease-fluid hover:border-accent/40 motion-safe:hover:-translate-y-1";

export default function ShortProfile() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(DATA.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = DATA.contact.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="personal"
      aria-labelledby="short-profile-title"
      className="py-14 md:py-16 bg-black/20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2
          id="short-profile-title"
          className="text-2xl md:text-3xl font-bold tracking-wide text-center mb-12 font-display"
        >
          Short Profile
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Bio - the hero cell */}
          <div className={`${CARD} md:col-span-2 p-6 md:p-8 min-h-[280px]`}>
            <DotGrid id="bio-dots" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -right-16 h-72 w-72 bg-accent/12 blur-3xl motion-safe:animate-[blobMorph_16s_ease-in-out_infinite] transition-colors duration-500 group-hover:bg-accent/20"
              style={{ borderRadius: "42% 58% 63% 37% / 41% 44% 56% 59%" }}
            />
            <CircuitMotif />

            <div className="relative z-10 h-full flex flex-col justify-between gap-6">
              {/* Identity row with avatar */}
              <div className="flex items-center gap-3">
                <div className="relative shrink-0 rounded-full border border-accent/40 p-0.5 transition-transform duration-300 motion-safe:group-hover:scale-105">
                  <div className="relative h-11 w-11 rounded-full overflow-hidden bg-surface-2">
                    <Image
                      src="/images/personal/2x2.jpg"
                      alt={`${DATA.profile.name} portrait`}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-foreground">
                    {DATA.profile.name}
                  </p>
                  <p className="text-xs font-mono text-accent/80">
                    {DATA.profile.location}
                  </p>
                </div>
              </div>

              <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-xl text-foreground font-display">
                Vincent B. Pacaña is a full-stack developer based in Cebu City,
                building practical, production-ready systems that solve real
                business problems -{" "}
                <span className="text-foreground/80">
                  from user-facing applications to backend and cloud
                  infrastructure.
                </span>
              </p>
            </div>
          </div>

          {/* Collaboration + Core stack */}
          <div className="flex flex-col gap-6">
            {/* Collaboration */}
            <div className={`${CARD} flex-1 flex flex-col justify-center p-6`}>
              <ConnectionArc />
              <div className="relative z-10 flex items-center gap-2 mb-2">
                <Globe
                  className="w-3.5 h-3.5 text-accent transition-transform duration-500 motion-safe:group-hover:rotate-[20deg]"
                  aria-hidden="true"
                />
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent/80">
                  Collaboration
                </p>
              </div>
              <p className="relative z-10 font-medium text-sm md:text-base text-foreground-muted">
                English and Filipino. Experienced with US and international
                teams, and flexible across time zones.
              </p>
            </div>

            {/* Core stack */}
            <div className={`${CARD} flex-1 flex flex-col justify-center p-6`}>
              <DotGrid id="stack-dots" />
              <p className="relative z-10 text-xs font-mono uppercase tracking-[0.2em] text-accent/80 mb-3">
                Core stack
              </p>
              <div className="relative z-10 flex flex-wrap gap-2">
                {DATA.skills.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1.5 rounded-md bg-white/[0.06] text-foreground-muted border border-white/5 transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    {tech.startsWith("Python") ? "Python" : tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* What I do */}
          <div className={`${CARD} flex flex-col justify-between p-6`}>
            <DotGrid id="do-dots" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Layers
                  className="w-3.5 h-3.5 text-accent transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent/80">
                  What I do
                </p>
              </div>
              <p className="text-sm md:text-base text-foreground-muted leading-relaxed">
                I design and build end-to-end applications, from system logic
                and APIs to deployment and maintenance.
              </p>
            </div>
            <div className="relative z-10 self-center">
              <PipelineMotif />
            </div>
          </div>

          {/* Call to action - on-brand accent */}
          <div className="group relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/15 via-card-bg to-card-bg p-6 flex flex-col justify-center items-center text-center transition-[transform,border-color] duration-300 ease-fluid hover:border-accent/60 motion-safe:hover:-translate-y-1">
            <DotGrid id="cta-dots" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-12 -right-10 h-48 w-48 bg-accent/20 blur-3xl motion-safe:animate-[blobMorph_18s_ease-in-out_infinite] transition-colors duration-500 group-hover:bg-accent/30"
              style={{ borderRadius: "60% 40% 38% 62% / 58% 65% 35% 42%" }}
            />
            <div
              aria-hidden="true"
              className="relative z-10 mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 border border-accent/30 text-accent"
            >
              <Send className="w-4 h-4 transition-transform duration-300 ease-out motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1 motion-safe:group-hover:-rotate-12" />
            </div>
            <h3 className="font-bold text-lg text-white mb-4 relative z-10 font-display">
              Let&apos;s work together.
            </h3>
            <button
              onClick={copyEmail}
              className="relative z-10 flex cursor-pointer items-center gap-2 bg-accent text-accent-foreground px-4 py-2.5 min-h-11 rounded-full text-sm font-bold shadow-[0_6px_22px_-6px_var(--color-accent)] transition-[transform,box-shadow] duration-200 hover:bg-accent/90 hover:shadow-[0_10px_30px_-6px_var(--color-accent)] motion-safe:hover:scale-105 active:scale-95"
            >
              {copied ? (
                <>
                  Copied! <Check className="w-3.5 h-3.5" />
                </>
              ) : (
                <>
                  Copy email <Mail className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>

          {/* Status - with activity motif */}
          <div className={`${CARD} flex flex-col justify-between p-6`}>
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent/80 mb-2">
                Status
              </p>
              <p className="text-sm md:text-base text-foreground-muted leading-relaxed">
                Information Technology graduate, now shipping production systems
                full-time across freelance and client work.
              </p>
            </div>
            <div className="mt-4">
              <ActivityGrid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
