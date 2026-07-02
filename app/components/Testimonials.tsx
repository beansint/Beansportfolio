import Image from "next/image";
import { DATA } from "../data";

/**
 * Expected shape of each `DATA.testimonials` item once populated:
 *
 * {
 *   quote: string;      // the testimonial text
 *   name: string;       // person's name
 *   title: string;      // person's role/title
 *   company?: string;   // optional company/organization
 *   avatar?: string;    // optional path to an avatar image
 * }
 *
 * `DATA.testimonials` starts empty ([]) - real quotes are deferred until
 * the owner collects them. This component renders nothing until then.
 */
type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company?: string;
  avatar?: string;
};

export default function Testimonials() {
  const testimonials = DATA.testimonials as Testimonial[];

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="py-20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2
          id="testimonials-title"
          className="text-2xl md:text-3xl font-display font-bold tracking-wide text-center mb-12"
        >
          What people say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <figure
              key={index}
              className="bg-surface border border-surface-border rounded-card p-6 flex flex-col gap-4"
            >
              <blockquote className="text-sm md:text-base text-foreground leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3 mt-auto pt-2">
                {testimonial.avatar && (
                  <Image
                    src={testimonial.avatar}
                    alt=""
                    aria-hidden="true"
                    width={40}
                    height={40}
                    sizes="40px"
                    className="w-10 h-10 rounded-full object-cover border border-surface-border"
                  />
                )}
                <div>
                  <p className="text-sm font-bold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-foreground-muted">
                    {testimonial.title}
                    {testimonial.company ? ` · ${testimonial.company}` : ""}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
