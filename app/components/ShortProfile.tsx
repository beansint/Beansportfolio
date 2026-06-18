 "use client";

import { useState } from "react";
import { DATA } from "../data";
import { ArrowUpRight, Mail } from "lucide-react";

export default function ShortProfile() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(DATA.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
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
      className="py-20 bg-black/20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2
          id="short-profile-title"
          className="text-2xl font-bold tracking-wide text-center mb-12 font-mono"
        >
          Short Profile
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Short profile */}
          <div className="md:col-span-2 bg-card-bg border border-card-border rounded-3xl p-8 relative overflow-hidden min-h-[260px] group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 h-full flex flex-col justify-between gap-4">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent/80">
                Short profile
              </p>
              <p className="text-2xl font-medium leading-relaxed max-w-xl text-gray-100">
                Full-stack developer based in Cebu City building practical,
                production-ready systems that solve real business problems, from
                user-facing applications to backend and cloud infrastructure.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[80px] rounded-full -mr-20 -mt-20 pointer-events-none" />
          </div>

          {/* Collaboration + Core stack */}
          <div className="flex flex-col gap-6">
            {/* Collaboration */}
            <div className="bg-card-bg border border-card-border rounded-3xl p-6 flex-1 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent/80 mb-2">
                Collaboration
              </p>
              <p className="font-medium text-sm md:text-base text-gray-200">
                English and Filipino. Comfortable working with distributed and
                cross-functional teams.
              </p>
            </div>

            {/* Core stack */}
            <div className="bg-card-bg border border-card-border rounded-3xl p-6 flex-1 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent/80 mb-3">
                Core stack
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "Node.js",
                  "Spring Boot",
                  "Python (FastAPI, Django, Flask)",
                  "PostgreSQL",
                  "Stripe",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-1 rounded bg-white/10 text-gray-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* What I do */}
          <div className="bg-card-bg border border-card-border rounded-3xl p-6 flex flex-col justify-between hover:border-accent/30 transition-colors">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent/80 mb-2">
                What I do
              </p>
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                I design and build end-to-end applications, from system logic
                and APIs to deployment and maintenance.
              </p>
            </div>
            <div className="self-end p-2 bg-white/5 rounded-full text-gray-400 mt-4">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Call to action */}
          <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-indigo-500/20 rounded-3xl p-6 flex flex-col justify-center items-center text-center relative overflow-hidden group cursor-pointer hover:border-indigo-500/50 transition-colors">
            <h3 className="font-bold text-lg text-white mb-4 relative z-10">
              Let&apos;s work together.
            </h3>
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors relative z-10"
            >
              {copied ? "Copied!" : "Copy email"}{" "}
              <Mail className="w-3 h-3" />
            </button>
            <div className="absolute inset-0 bg-accent/10 blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
          </div>

          {/* Status */}
          <div className="bg-card-bg border border-card-border rounded-3xl p-6 flex flex-col justify-between hover:border-accent/30 transition-colors">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent/80 mb-2">
                Status
              </p>
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                Currently completing my degree while working on freelance and
                client-based projects.
              </p>
            </div>
            <div className="mt-4">
              <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-accent h-full w-3/4" />
              </div>
              <p className="text-xs text-right text-gray-500 mt-1 font-mono">
                In progress
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
