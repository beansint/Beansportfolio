"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type React from "react";
import { ArrowUpRight, Github, Link as LinkIcon, Maximize2, X } from "lucide-react";
import Image from "next/image";
import {
  SiCardano,
  SiCss3,
  SiDjango,
  SiFlask,
  SiHtml5,
  SiJavascript,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiStripe,
  SiVite,
} from "react-icons/si";

import { DATA } from "../data";

type Project = (typeof DATA.projects)[number] & { github?: string };

const TECH_ICON_MAP: Record<string, React.ElementType> = {
  react: SiReact,
  "spring boot": SiSpringboot,
  springboot: SiSpringboot,
  flask: SiFlask,
  postgresql: SiPostgresql,
  stripe: SiStripe,
  html: SiHtml5,
  html5: SiHtml5,
  javascript: SiJavascript,
  js: SiJavascript,
  css: SiCss3,
  css3: SiCss3,
  django: SiDjango,
  cardano: SiCardano,
  vite: SiVite,
  python: SiPython,
};

const normalizeTech = (label: string) => label.toLowerCase().replace(/\s+/g, " ").trim();

const FOCUSABLE =
  'a[href]:not([tabindex="-1"]), button:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])';

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState("50% 50%");

  const hasLiveLink = Boolean(project.link && project.link !== "#");
  const hasGithub = Boolean(project.github);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const previousActive = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement as HTMLElement;

        if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
        } else if (event.shiftKey && active === first) {
          event.preventDefault();
          last.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      previousActive?.focus();
    };
  }, [onClose]);

  const handleOverlayClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === overlayRef.current) {
        onClose();
      }
    },
    [onClose]
  );

  const toggleZoom = useCallback(() => {
    setIsZoomed((prev) => !prev);
  }, []);

  const handleImageActivate = useCallback(
    (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
      if ("key" in event) {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        setZoomOrigin("50% 50%");
        toggleZoom();
        return;
      }

      const target = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - target.left) / target.width) * 100;
      const y = ((event.clientY - target.top) / target.height) * 100;
      setZoomOrigin(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
      toggleZoom();
    },
    [toggleZoom]
  );

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md px-4 py-8 md:px-10 overflow-y-auto"
      role="presentation"
      onMouseDown={handleOverlayClick}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} details`}
        className="relative w-full max-w-6xl md:max-w-7xl bg-card-bg/92 border border-card-border rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl transition-transform duration-300 ease-out max-h-[96vh]"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Close project details"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-stretch">
          <div
            role="button"
            tabIndex={0}
            aria-pressed={isZoomed}
            onClick={handleImageActivate}
            onKeyDown={handleImageActivate}
            className={`relative w-full overflow-hidden bg-gray-900 min-h-[24rem] md:min-h-[30rem] ${
              isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
            }`}
          >
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setZoomOrigin("50% 50%");
                toggleZoom();
              }}
              className="absolute right-3 top-3 z-20 inline-flex items-center gap-1 rounded-full bg-black/40 px-3 py-1 text-xs text-white backdrop-blur border border-white/10 hover:bg-black/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Maximize2 className="h-4 w-4" />
              {isZoomed ? "Reset" : "Zoom"}
            </button>

            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(min-width: 1280px) 50vw, 100vw"
                style={{ transformOrigin: zoomOrigin }}
                className={`object-contain transition-transform duration-700 ease-out ${
                  isZoomed ? "scale-110 md:scale-[1.18]" : "scale-100"
                }`}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-400">
                No preview available
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          </div>

          <div className="p-6 md:p-8 flex flex-col gap-4 max-h-[96vh] overflow-y-auto">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-accent/80">Project</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">{project.title}</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">{project.description}</p>
            </div>

            {project.tech?.length ? (
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((item) => {
                  const Icon = TECH_ICON_MAP[normalizeTech(item)];
                  return (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200"
                    >
                      {Icon ? <Icon className="h-4 w-4" aria-hidden /> : null}
                      <span>{item}</span>
                    </span>
                  );
                })}
              </div>
            ) : null}

            <div className="mt-auto flex flex-wrap gap-3">
              {hasLiveLink ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-black transition hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-card-bg"
                >
                  <LinkIcon className="h-4 w-4" />
                  Live site
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : null}

              {hasGithub ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15 hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-card-bg"
                >
                  <Github className="h-4 w-4" />
                  View code
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const openProject = useCallback((project: Project) => {
    setActiveProject(project);
  }, []);

  const closeProject = useCallback(() => {
    setActiveProject(null);
  }, []);

  return (
    <section
      id="professional"
      aria-labelledby="projects-title"
      className="py-20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2
          id="projects-title"
          className="text-2xl font-bold tracking-wide text-center mb-16"
        >
          A small selection of <span className="text-accent">recent projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {DATA.projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              onClick={() => openProject(project)}
              aria-label={`Open ${project.title} details`}
              className="group text-left bg-card-bg border border-card-border rounded-3xl p-6 hover:border-accent/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card-bg cursor-pointer"
            >
              <div className="relative w-full mb-6 rounded-2xl overflow-hidden bg-gray-800 min-h-[220px]">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 540px, 100vw"
                    className="object-contain transition-transform duration-500"
                    priority={index < 2}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    Project preview
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2 max-w-sm">
                    {project.description}
                  </p>
                </div>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-accent border border-white/10 transition group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              {project.tech?.length ? (
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.slice(0, 4).map((item) => {
                    const Icon = TECH_ICON_MAP[normalizeTech(item)];
                    return (
                      <span
                        key={item}
                        className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wide text-gray-200"
                      >
                        {Icon ? <Icon className="h-4 w-4" aria-hidden /> : null}
                        <span>{item}</span>
                      </span>
                    );
                  })}
                </div>
              ) : null}

              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-accent/80">
                Click or press Enter to open
              </p>
            </button>
          ))}
        </div>
      </div>

      {activeProject ? (
        <ProjectModal project={activeProject} onClose={closeProject} />
      ) : null}
    </section>
  );
}

