import { DATA } from "../data";
import { ArrowUpRight, Github, Link as LinkIcon } from "lucide-react";
import Image from "next/image";

export default function Projects() {
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
            <div
              key={index}
              className="bg-card-bg border border-card-border rounded-3xl p-6 hover:border-accent/30 transition-all group"
            >
              <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden bg-gray-800">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 540px, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority={index < 2}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                    Project Preview
                  </div>
                )}
              </div>
              
              <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-4 max-w-sm">
                        {project.description}
                    </p>
                  </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                   {/* Icons for tech stack or links */}
                   <div className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
                        <Github className="w-4 h-4 text-gray-300" />
                   </div>
                   <div className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
                        <LinkIcon className="w-4 h-4 text-gray-300" />
                   </div>
                </div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-wider hover:underline"
                >
                  Check Live Site <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

