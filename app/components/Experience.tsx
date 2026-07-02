import {
  Code,
  Terminal,
  Cloud,
  ShieldCheck,
  Users,
  Layers,
  Sparkles,
} from "lucide-react";
import { FaAws, FaJava } from "react-icons/fa";
import {
  SiReact,
  SiSpringboot,
  SiDjango,
  SiPostgresql,
  SiStripe,
  SiGooglecloud,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiFastapi,
  SiMysql,
  SiJsonwebtokens,
  SiLinux,
  SiGithubactions,
  SiOwasp,
  SiBurpsuite,
  SiNodedotjs,
  SiNextdotjs,
  SiJavascript,
  SiNpm,
  SiPython,
  SiDocker,
  SiNestjs,
  SiFlutter,
  SiRedis,
  SiSocketdotio,
  SiCloudflare,
  SiVercel,
} from "react-icons/si";
import { DATA } from "../data";

// Brand-logo lookup for tech tags - recognizable icons are strong, scannable
// signal for technical recruiters pattern-matching against a job req.
const TECH_ICONS: Record<string, React.ElementType> = {
  React: SiReact,
  "Spring Boot": SiSpringboot,
  Django: SiDjango,
  PostgreSQL: SiPostgresql,
  Stripe: SiStripe,
  GCP: SiGooglecloud,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  Vite: SiVite,
  FastAPI: SiFastapi,
  MySQL: SiMysql,
  JWT: SiJsonwebtokens,
  AWS: FaAws,
  Java: FaJava,
  Python: SiPython,
  Linux: SiLinux,
  "GitHub Actions": SiGithubactions,
  "OWASP Top 10": SiOwasp,
  "Burp Suite": SiBurpsuite,
  "Node.js": SiNodedotjs,
  "Next.js": SiNextdotjs,
  JavaScript: SiJavascript,
  NPM: SiNpm,
  Docker: SiDocker,
  NestJS: SiNestjs,
  Flutter: SiFlutter,
  Redis: SiRedis,
  WebSockets: SiSocketdotio,
  Cloudflare: SiCloudflare,
  Vercel: SiVercel,
};

const BRAND_COLORS: Record<string, string> = {
  React: "#61DAFB",
  "Spring Boot": "#6DB33F",
  Django: "#44B78B",
  PostgreSQL: "#4169E1",
  Stripe: "#008CDD",
  GCP: "#4285F4",
  TypeScript: "#3178C6",
  "Tailwind CSS": "#06B6D4",
  Vite: "#646CFF",
  FastAPI: "#009688",
  MySQL: "#4479A1",
  JWT: "#D63AFF",
  AWS: "#FF9900",
  Java: "#ED8B00",
  Python: "#3776AB",
  Linux: "#FCC624",
  "GitHub Actions": "#2088FF",
  "OWASP Top 10": "#FFFFFF",
  "Burp Suite": "#FF6633",
  "Node.js": "#339933",
  "Next.js": "#FFFFFF",
  JavaScript: "#F7DF1E",
  NPM: "#CB3837",
  Docker: "#2496ED",
  NestJS: "#E0234E",
  Flutter: "#02569B",
  Redis: "#FF4438",
  WebSockets: "#FFFFFF",
  Cloudflare: "#F38020",
  Vercel: "#FFFFFF",
};

const EXPERIENCE_DATA = [
  {
    title: "Full Stack Product Engineering",
    description: "End to end ownership of real production systems.",
    icon: Layers,
    bullets: [
      "Built and shipped full stack apps with Next.js, NestJS, React, and PostgreSQL",
      "Converted client requirements into technical implementation plans",
      "Owned backend APIs, frontend flows, data models, and deployments",
      "Shipped realtime, AI (RAG), and payment features in production",
    ],
    tags: ["Next.js", "NestJS", "Flutter", "PostgreSQL", "Microservices"],
  },
  {
    title: "Frontend Engineering",
    description: "Responsive interfaces that stay maintainable.",
    icon: Code,
    bullets: [
      "Built component driven UIs with clean structure and reusable patterns",
      "Focused on performance, UX consistency, and predictable state handling",
      "Aligned frontend data flows with backend API contracts",
      "Shipped production UI, not just mockups",
    ],
    tags: ["Next.js", "React", "Flutter", "TypeScript", "Tailwind CSS", "Vite", "NPM"],
  },
  {
    title: "Backend & API Systems",
    description: "Scalable server side systems with clean boundaries.",
    icon: Terminal,
    bullets: [
      "Designed and built REST APIs with NestJS, Spring Boot, Django, and FastAPI",
      "Modeled relational schemas and optimized queries for real use",
      "Implemented authentication using JWT and OAuth style flows",
      "Built realtime features over WebSockets and event-driven data sync with queues",
    ],
    tags: ["NestJS", "Node.js", "Java", "Python", "Spring Boot", "Django", "FastAPI", "PostgreSQL", "Redis", "WebSockets", "JWT"],
  },
  {
    title: "Cloud & Deployment",
    description: "Shipping is part of the job.",
    icon: Cloud,
    bullets: [
      "Deployed apps on AWS and Google Cloud with practical cost awareness",
      "Managed Linux servers, DNS, SSL, and basic ops workflows",
      "Set up CI CD pipelines using GitHub Actions",
      "Designed cloud storage workflows for documents and media",
    ],
    tags: ["AWS", "GCP", "Cloudflare", "Vercel", "Neon", "Linux", "GitHub Actions", "DNS", "SSL", "Docker"],
  },
  {
    title: "Security Aware Development",
    description: "Built with OWASP basics in mind.",
    icon: ShieldCheck,
    bullets: [
      "Applied OWASP Top 10 awareness to API and auth decisions",
      "Hands on testing experience using Burp Suite",
      "Hardened common risks like auth mistakes and unsafe inputs",
      "Practical security mindset without overclaiming expertise",
    ],
    tags: ["OWASP Top 10", "Burp Suite", "JWT", "Web Security"],
  },
  {
    title: "Team Leadership & Ownership",
    description: "Strong collaboration in small fast teams.",
    icon: Users,
    bullets: [
      "Led or co led small teams across full stack delivery",
      "Proactive in unblocking teammates and mentoring when needed",
      "Comfortable taking ownership of unclear problems",
      "Clear goals and fast-paced execution with shared responsibility",
    ],
    tags: ["Leadership", "Collaboration", "Ownership", "Documentation"],
  },
];

const HIGHLIGHTS = [
  "Production systems, web + mobile",
  "Realtime, AI (RAG) & Stripe payments shipped",
  "Published an npm library",
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="py-14 md:py-16 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2
            id="experience-title"
            className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-foreground-subtle"
          >
            What I Build &amp; <span className="text-accent">How I Work</span>
          </h2>
          <p className="text-foreground-muted text-lg md:text-xl leading-relaxed">
            I design, build, and deploy production systems across frontend,
            backend, and cloud - turning requirements into working software with
            an eye on reliability and scale.
          </p>

          {/* Highlights row */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-10">
            {HIGHLIGHTS.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-2 bg-surface border border-surface-border px-4 py-2 rounded-full"
              >
                <span className="w-2 h-2 rounded-full bg-accent motion-safe:animate-pulse" />
                <span className="text-sm font-medium text-foreground-muted">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed capability cards with brand-logo tech tags */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-12">
          {EXPERIENCE_DATA.map((exp) => (
            <div
              key={exp.title}
              className="bg-surface border border-surface-border rounded-card p-6 md:p-8 hover:border-accent/40 transition-colors duration-300 ease-fluid group flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-accent transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-foreground-muted text-sm mt-1">
                    {exp.description}
                  </p>
                </div>
                <div
                  className="p-2.5 bg-white/5 rounded-xl border border-surface-border text-foreground-muted group-hover:text-accent group-hover:border-accent/30 transition-colors shrink-0"
                  aria-hidden="true"
                >
                  <exp.icon className="w-5 h-5" />
                </div>
              </div>

              <ul className="space-y-2 mb-6 flex-grow">
                {exp.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 text-sm text-foreground-muted leading-snug"
                  >
                    <span
                      className="mt-1.5 w-1 h-1 rounded-full bg-accent/70 shrink-0"
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-surface-border">
                {exp.tags.map((tag) => {
                  const Icon = TECH_ICONS[tag];
                  const color = BRAND_COLORS[tag] || "#a1a1aa";
                  return (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/5 hover:border-white/20 transition-colors inline-flex items-center gap-1.5 text-gray-200"
                    >
                      {Icon && (
                        <span style={{ color, display: "flex" }} aria-hidden="true">
                          <Icon className="w-3 h-3" />
                        </span>
                      )}
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Services - client-facing offerings, sourced from DATA.services */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent/80 mb-3 inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              What I can build for you
            </p>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
              Services
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DATA.services.map((service) => (
              <div
                key={service.title}
                className="bg-surface border border-surface-border rounded-card p-6 flex flex-col gap-2 hover:border-accent/40 transition-colors ease-fluid"
              >
                <h4 className="font-bold text-white text-base">
                  {service.title}
                </h4>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
