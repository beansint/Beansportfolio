import Image from "next/image";
import { ExternalLink, Award } from "lucide-react";
import { DATA } from "../data";

// Achievement-first: show recognitions/certifications that carry a proof badge.
// The "started my degree" milestone is intentionally excluded - it only signals
// education level/tenure, not capability. Education is kept as a single dateless
// credential line below (and still feeds alumniOf in the JSON-LD via DATA.education).
const ACHIEVEMENTS = DATA.timeline.filter((item) => item.image);
const DEGREE = DATA.education[0];

export default function Timeline() {
  return (
    <section
      id="recognition"
      aria-labelledby="recognition-title"
      className="py-14 md:py-16"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-4 h-4 text-accent" aria-hidden="true" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent/80">
              Proof of work
            </span>
          </div>
          <h2
            id="recognition-title"
            className="font-display text-2xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Recognition &amp; Certifications
          </h2>
          <p className="text-foreground-muted text-base md:text-lg leading-relaxed max-w-2xl mb-12">
            Competition wins, finalist placements, and cloud certifications -
            independently awarded and verifiable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ACHIEVEMENTS.map((item) => (
              <article
                key={item.title}
                className="flex flex-col bg-surface border border-surface-border rounded-card overflow-hidden hover:border-accent/40 transition-colors duration-300 ease-fluid group"
              >
                {item.image && (
                  <div className="relative h-44 md:h-52 w-full bg-black/40 border-b border-surface-border overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.title} - award badge`}
                      fill
                      className="object-contain p-3 motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-2 p-5 flex-grow">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base md:text-lg font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Verify ${item.title} (opens in new tab)`}
                        className="inline-flex items-center justify-center gap-1.5 min-h-[36px] px-3 py-1 rounded-full bg-accent/10 text-accent text-[11px] md:text-xs font-medium hover:bg-accent/20 transition-colors border border-accent/20 whitespace-nowrap self-start shrink-0"
                      >
                        Verify <ExternalLink className="w-3 h-3" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                  <p className="text-foreground-muted leading-relaxed text-sm flex-grow">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Dateless education credential - keeps alumniOf visible without
              foregrounding tenure/level. */}
          <p className="mt-10 text-sm text-foreground-subtle">
            <span className="text-foreground-muted font-medium">Education:</span>{" "}
            {DEGREE.degree} - {DEGREE.school}
          </p>
        </div>
      </div>
    </section>
  );
}
