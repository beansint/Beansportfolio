"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type React from "react";
import { ArrowUpRight, Github, Link as LinkIcon, Maximize2, X } from "lucide-react";
import Image from "next/image";
import {
  SiCardano,
  SiCss,
  SiDjango,
  SiFlask,
  SiHtml5,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";

import { DATA } from "../data";
import TextpourField from "./TextpourField";
import { sendGAEvent } from "@next/third-parties/google";

type Project = (typeof DATA.projects)[number] & {
  github?: string;
  interactive?: boolean;
  poster?: string;
};

const isVideo = (src?: string) => Boolean(src && src.endsWith(".mp4"));

const TECH_ICON_MAP: Record<string, React.ElementType> = {
  react: SiReact,
  "next.js": SiNextdotjs,
  nextjs: SiNextdotjs,
  nestjs: SiNestjs,
  "node.js": SiNodedotjs,
  nodejs: SiNodedotjs,
  node: SiNodedotjs,
  typescript: SiTypescript,
  ts: SiTypescript,
  supabase: SiSupabase,
  tailwind: SiTailwindcss,
  vercel: SiVercel,
  npm: SiNpm,
  "spring boot": SiSpringboot,
  springboot: SiSpringboot,
  flask: SiFlask,
  postgresql: SiPostgresql,
  stripe: SiStripe,
  html: SiHtml5,
  html5: SiHtml5,
  javascript: SiJavascript,
  js: SiJavascript,
  css: SiCss,
  css3: SiCss,
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
        className="relative w-full max-w-6xl md:max-w-7xl bg-card-bg/92 border border-card-border rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl transition-transform duration-300 ease-out max-h-[96dvh]"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 inline-flex items-center justify-center h-11 w-11 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Close project details"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-stretch">
          {project.interactive ? (
            <div className="relative w-full overflow-hidden bg-[#0d0d0f] min-h-[14rem] md:min-h-[30rem]">
              <TextpourField presence={0.85} />
              <span className="pointer-events-none absolute bottom-3 left-4 text-xs font-mono text-white/40">
                move your cursor - the text reflows live
              </span>
            </div>
          ) : isVideo(project.image) ? (
            <div className="relative flex w-full items-center justify-center overflow-hidden bg-black min-h-[14rem] md:min-h-[30rem]">
              <video
                src={project.image}
                poster={project.poster}
                aria-label={`${project.title} demo video`}
                autoPlay
                muted
                loop
                playsInline
                controls
                className="h-full w-full object-contain"
              />
            </div>
          ) : (
            <div
              role="button"
              tabIndex={0}
              aria-pressed={isZoomed}
              onClick={handleImageActivate}
              onKeyDown={handleImageActivate}
              className={`relative w-full overflow-hidden bg-gray-900 min-h-[14rem] md:min-h-[30rem] ${
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
                aria-label={isZoomed ? "Reset zoom" : "Zoom image"}
                className="absolute right-3 top-3 z-20 inline-flex items-center gap-1 rounded-full bg-black/40 px-3 py-1 text-xs text-white backdrop-blur border border-white/10 hover:bg-black/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Maximize2 className="h-4 w-4" aria-hidden="true" />
                {isZoomed ? "Reset" : "Zoom"}
              </button>

              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  sizes="(min-width: 1280px) 50vw, (min-width: 768px) 70vw, 100vw"
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
          )}

          <div className="p-6 md:p-8 flex flex-col gap-4 max-h-[96dvh] overflow-y-auto">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-accent/80">Project</p>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white leading-snug">
                {project.title}
              </h3>

              {project.problem ? (
                <div className="space-y-1">
                  <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground-subtle">
                    Problem
                  </p>
                  <p className="text-foreground-muted text-sm md:text-base leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              ) : null}

              {project.outcome ? (
                <div className="space-y-1">
                  <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-accent/80">
                    Outcome
                  </p>
                  <p className="text-white text-sm md:text-base leading-relaxed font-medium">
                    {project.outcome}
                  </p>
                </div>
              ) : null}

              <div className="space-y-1">
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground-subtle">
                  Details
                </p>
                <p className="text-foreground-muted text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>
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
                      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
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
                  onClick={() => sendGAEvent('event', 'project_click', { project_name: project.title })}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-black transition hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-card-bg"
                >
                  <LinkIcon className="h-4 w-4" aria-hidden="true" />
                  Live site
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              ) : null}

              {hasGithub ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sendGAEvent('event', 'project_click', { project_name: project.title })}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15 hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-card-bg"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
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

function CardLinks({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const hasLiveLink = Boolean(project.link && project.link !== "#");
  const hasGithub = Boolean(project.github);

  if (!hasLiveLink && !hasGithub) return null;

  const stop = (event: React.MouseEvent) => event.stopPropagation();
  const track = () => sendGAEvent("event", "project_click", { project_name: project.title });

  return (
    <div className={`relative z-10 flex flex-wrap items-center gap-2 ${className ?? ""}`}>
      {hasLiveLink ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => {
            stop(event);
            track();
          }}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-accent px-3.5 py-2 text-xs font-semibold text-accent-foreground transition hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          Live
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      ) : null}
      {hasGithub ? (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => {
            stop(event);
            track();
          }}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-white/10 hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          <Github className="h-3.5 w-3.5" aria-hidden="true" />
          Code
        </a>
      ) : null}
    </div>
  );
}

function ProjectMedia({
  project,
  featured,
  priority,
}: {
  project: Project;
  featured?: boolean;
  priority?: boolean;
}) {
  const sizes = featured
    ? "(min-width: 1024px) 1100px, 100vw"
    : "(min-width: 1280px) 380px, (min-width: 768px) 45vw, 92vw";

  if (project.interactive) {
    return (
      <div className="absolute inset-0 bg-[#0d0d0f]">
        <TextpourField presence={featured ? 0.85 : 0.72} />
      </div>
    );
  }

  if (isVideo(project.image)) {
    return (
      <video
        src={project.image}
        poster={project.poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={`${project.title} gameplay`}
        onMouseEnter={(e) => {
          e.currentTarget.play().catch(() => {});
        }}
        onMouseLeave={(e) => e.currentTarget.pause()}
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  }

  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes={sizes}
        className="object-contain transition-transform duration-500 ease-fluid motion-safe:group-hover:scale-[1.03]"
        priority={priority}
      />
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center text-foreground-subtle">
      Project preview
    </div>
  );
}

function FeaturedProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open ${project.title} details`}
      className="group relative col-span-1 md:col-span-2 text-left bg-surface-2 border border-surface-border rounded-card overflow-hidden hover:border-accent/40 transition-colors ease-fluid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface cursor-pointer"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative w-full min-h-[260px] lg:min-h-[420px] bg-surface overflow-hidden order-1 lg:order-2">
          <ProjectMedia project={project} featured priority />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-l" />
        </div>

        <div className="flex flex-col gap-4 p-6 md:p-10 order-2 lg:order-1">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-foreground-subtle">01</span>
            <span className="inline-flex items-center rounded-full bg-accent/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              Featured
            </span>
          </div>

          <h3 className="text-2xl md:text-4xl font-display font-bold text-white leading-tight">
            {project.title}
          </h3>

          {project.problem ? (
            <p className="text-foreground-muted text-sm md:text-base leading-relaxed">
              <span className="text-foreground-subtle">Problem: </span>
              {project.problem}
            </p>
          ) : null}

          {project.outcome ? (
            <p className="text-white text-sm md:text-base leading-relaxed font-medium">
              <span className="text-accent">Outcome: </span>
              {project.outcome}
            </p>
          ) : null}

          {project.tech?.length ? (
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 6).map((item) => {
                const Icon = TECH_ICON_MAP[normalizeTech(item)];
                return (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wide text-gray-200"
                  >
                    {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
                    <span>{item}</span>
                  </span>
                );
              })}
            </div>
          ) : null}

          <CardLinks project={project} className="mt-2" />
        </div>
      </div>
    </button>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const number = String(index).padStart(2, "0");

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open ${project.title} details`}
      className="group relative text-left bg-surface border border-surface-border rounded-card p-6 hover:border-accent/40 transition-colors ease-fluid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface cursor-pointer"
    >
      <div className="relative w-full mb-6 rounded-2xl overflow-hidden bg-surface-2 min-h-[220px]">
        <ProjectMedia project={project} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent motion-safe:opacity-0 motion-safe:group-hover:opacity-100 transition-opacity ease-fluid" />
      </div>

      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs text-foreground-subtle">{number}</span>
            <h3 className="text-lg md:text-xl font-display font-bold text-white">{project.title}</h3>
          </div>
          {project.outcome ? (
            <p className="text-foreground-muted text-sm leading-snug max-w-sm">
              {project.outcome}
            </p>
          ) : (
            <p className="text-foreground-muted text-sm line-clamp-2 max-w-sm">
              {project.description}
            </p>
          )}
        </div>
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-accent border border-white/10 transition ease-fluid motion-safe:group-hover:translate-x-1 motion-safe:group-hover:-translate-y-1">
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
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
                {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
                <span>{item}</span>
              </span>
            );
          })}
        </div>
      ) : null}

      <CardLinks project={project} className="mt-4" />
    </button>
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

  const featuredProject = DATA.projects.find((project) => project.featured);
  const restProjects = DATA.projects.filter((project) => project !== featuredProject);

  return (
    <section
      id="professional"
      aria-labelledby="projects-title"
      className="py-14 md:py-16"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2
          id="projects-title"
          className="text-2xl font-display font-bold tracking-wide text-center mb-10"
        >
          A small selection of <span className="text-accent">recent projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {featuredProject ? (
            <FeaturedProjectCard project={featuredProject} onOpen={() => openProject(featuredProject)} />
          ) : null}

          {restProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index + (featuredProject ? 2 : 1)}
              onOpen={() => openProject(project)}
            />
          ))}
        </div>
      </div>

      {activeProject ? (
        <ProjectModal project={activeProject} onClose={closeProject} />
      ) : null}
    </section>
  );
}

