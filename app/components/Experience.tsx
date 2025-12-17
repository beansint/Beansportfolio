import { 
  Code, 
  Terminal, 
  Cloud, 
  ShieldCheck, 
  Users, 
  Layers 
} from "lucide-react";
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
  SiAmazon, 
  SiLinux, 
  SiGithubactions, 
  SiOwasp, 
  SiBurpsuite,
  SiNodedotjs,
  SiNextdotjs,
  SiJavascript,
  SiNpm,
  SiPipx,
  SiDocker
} from "react-icons/si";

const TECH_ICONS: Record<string, React.ElementType> = {
  "React": SiReact,
  "Spring Boot": SiSpringboot,
  "Django": SiDjango,
  "PostgreSQL": SiPostgresql,
  "Stripe": SiStripe,
  "GCP": SiGooglecloud,
  "TypeScript": SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Vite": SiVite,
  "FastAPI": SiFastapi,
  "MySQL": SiMysql,
  "JWT": SiJsonwebtokens,
  "AWS": SiAmazon,
  "Linux": SiLinux,
  "GitHub Actions": SiGithubactions,
  "OWASP Top 10": SiOwasp,
  "Burp Suite": SiBurpsuite,
  "Node.js": SiNodedotjs,
  "Next.js": SiNextdotjs,
  "JavaScript": SiJavascript,
  "NPM": SiNpm,
  "PIP": SiPipx,
  "Docker": SiDocker
};

const BRAND_COLORS: Record<string, string> = {
  "React": "#61DAFB",
  "Spring Boot": "#6DB33F",
  "Django": "#44B78B",
  "PostgreSQL": "#4169E1",
  "Stripe": "#008CDD",
  "GCP": "#4285F4",
  "TypeScript": "#3178C6",
  "Tailwind CSS": "#06B6D4",
  "Vite": "#646CFF",
  "FastAPI": "#009688",
  "MySQL": "#4479A1",
  "JWT": "#D63AFF",
  "AWS": "#FF9900",
  "Linux": "#FCC624",
  "GitHub Actions": "#2088FF",
  "OWASP Top 10": "#FFFFFF",
  "Burp Suite": "#FF6633",
  "Node.js": "#339933",
  "Next.js": "#FFFFFF",
  "JavaScript": "#F7DF1E",
  "NPM": "#CB3837",
  "PIP": "#0072B1",
  "Docker": "#2496ED"
};

const EXPERIENCE_DATA = [
  {
    title: "Full Stack Product Engineering",
    description: "End to end ownership of real production systems.",
    icon: Layers,
    bullets: [
      "Built and shipped full stack apps using React, Spring Boot, Django, and PostgreSQL",
      "Converted client requirements into technical implementation plans",
      "Owned backend APIs, frontend flows, data models, and deployments",
      "Delivered monetized features like Stripe payments and affiliate workflows"
    ],
    tags: []
  },
  {
    title: "Frontend Engineering",
    description: "Responsive interfaces that stay maintainable.",
    icon: Code,
    bullets: [
      "Built component driven UIs with clean structure and reusable patterns",
      "Focused on performance, UX consistency, and predictable state handling",
      "Aligned frontend data flows with backend API contracts",
      "Shipped production UI, not just mockups"
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vite", "Client Routing", "NPM"]
  },
  {
    title: "Backend & API Systems",
    description: "Scalable server side systems with clean boundaries.",
    icon: Terminal,
    bullets: [
      "Designed and built REST APIs with Spring Boot, Django, and FastAPI",
      "Modeled relational schemas and optimized queries for real use",
      "Implemented authentication using JWT and OAuth style flows",
      "Integrated external services and async workflows when needed"
    ],
    tags: ["Node.js", "JavaScript", "Java", "Python", "Spring Boot", "Django", "FastAPI", "PostgreSQL", "MySQL", "JWT", "PIP"]
  },
  {
    title: "Cloud & Deployment",
    description: "Shipping is part of the job.",
    icon: Cloud,
    bullets: [
      "Deployed apps on AWS and Google Cloud with practical cost awareness",
      "Managed Linux servers, DNS, SSL, and basic ops workflows",
      "Set up CI CD pipelines using GitHub Actions",
      "Designed cloud storage workflows for documents and media"
    ],
    tags: ["AWS", "GCP", "Linux", "GitHub Actions", "Cloud Storage", "DNS", "SSL", "Docker"]
  },
  {
    title: "Security Aware Development",
    description: "Built with OWASP basics in mind.",
    icon: ShieldCheck,
    bullets: [
      "Applied OWASP Top 10 awareness to API and auth decisions",
      "Hands on testing experience using Burp Suite",
      "Hardened common risks like auth mistakes and unsafe inputs",
      "Practical security mindset without overclaiming expertise"
    ],
    tags: ["OWASP Top 10", "Burp Suite", "JWT", "Web Security"]
  },
  {
    title: "Team Leadership & Ownership",
    description: "Strong collaboration in small fast teams.",
    icon: Users,
    bullets: [
      "Led or co led small teams across full stack delivery",
      "Proactive in unblocking teammates and mentoring when needed",
      "Comfortable taking ownership of unclear problems",
      "Clear goals and fast-paced execution with shared responsibility"
    ],
    tags: ["Leadership", "Collaboration", "Ownership", "Documentation"]
  }
];

const HIGHLIGHTS = [
  { label: "Delivery", value: "4 person team delivery" },
  { label: "Payments", value: "Stripe payments shipped" },
  { label: "Data", value: "80% bulk data import completed" }
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              id="experience-title"
              className="text-3xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
            >
              What I Build & <span className="text-accent">How I Work</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              I design, build, and deploy production systems across frontend, backend, and cloud. I focus on reliability, scalability, and turning requirements into working software.
            </p>

            {/* Highlights Row */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-10">
              {HIGHLIGHTS.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-medium text-gray-300">{highlight.value}</span>
                </div>
              ))}
            </div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {EXPERIENCE_DATA.map((exp, index) => (
            <div
              key={index}
              className="bg-card-bg/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-accent/40 hover:bg-card-bg/80 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4">
                 <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {exp.description}
                    </p>
                 </div>
                 <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 text-gray-400 group-hover:text-accent group-hover:border-accent/30 transition-colors shrink-0">
                    <exp.icon className="w-5 h-5" />
                 </div>
              </div>

              <ul className="space-y-2 mb-6 flex-grow">
                 {exp.bullets.map((bullet, idx) => (
                   <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300 leading-snug">
                     <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/70 shrink-0" />
                     {bullet}
                   </li>
                 ))}
              </ul>

              {exp.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  {exp.tags.map((tag, idx) => {
                    const Icon = TECH_ICONS[tag];
                    const color = BRAND_COLORS[tag] || "#9ca3af"; // Default to gray-400 if no color found
                    return (
                      <span 
                        key={idx} 
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/5 hover:border-white/20 transition-colors inline-flex items-center gap-1.5"
                        style={{ color: "#e5e7eb" }} // Default text color
                      >
                        {Icon && (
                          <span style={{ color: color, display: "flex" }}>
                             <Icon className="w-3 h-3" />
                          </span>
                        )}
                        {tag}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
