import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { DATA } from "../data";

export default function Timeline() {
  return (
    <section
      id="timeline"
      aria-labelledby="timeline-title"
      className="py-24"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2
          id="timeline-title"
          className="text-3xl font-bold tracking-tight text-left mb-10 max-w-5xl mx-auto bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
        >
          My Journey
        </h2>
        
        <div className="max-w-5xl mx-auto pl-4 md:pl-8 border-l border-indigo-500/20 relative space-y-6">
            {/* Gradient Line Overlay */}
            <div className="absolute left-[-1px] top-0 h-48 w-[2px] bg-gradient-to-b from-indigo-500 to-transparent" />

          {DATA.timeline.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Dot on the line */}
              <div className="absolute left-[-7px] top-[1.25rem] w-3.5 h-3.5 rounded-full bg-gray-950 border-2 border-indigo-500/50 group-hover:border-indigo-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_-3px_rgba(99,102,241,0.5)]" />
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start">
                  <div className="md:col-span-2 pt-1">
                     <span className="text-xs font-mono text-indigo-400/80 mb-0.5 block uppercase tracking-wider">
                       {item.year.split(' ').length > 1 ? item.year.split(' ')[0] : ''}
                     </span>
                     <h3 className="text-lg md:text-xl font-bold text-gray-200 tracking-tight leading-none">
                        {item.year.split(' ').length > 1 ? item.year.split(' ').slice(1).join(' ') : item.year}
                     </h3>
                  </div>
                  
                  <div className="md:col-span-10 flex flex-col gap-3 items-start">
                      {/* Image Card - Separated */}
                      {item.image && (
                        <div className="relative h-48 md:h-64 w-full max-w-full md:max-w-xl bg-black/40 border border-white/10 rounded-xl overflow-hidden hover:border-indigo-500/30 transition-all duration-300 shadow-sm group/image">
                           <Image 
                             src={item.image} 
                             alt={`${item.title} preview`} 
                             fill 
                             className="object-contain p-2 transition-transform duration-500 group-hover/image:scale-[1.02]"
                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 600px, 600px"
                           />
                        </div>
                      )}

                      {/* Text Card - Separated */}
                      <div className="w-fit max-w-full md:max-w-xl bg-card-bg/40 backdrop-blur-sm border border-white/5 rounded-xl p-4 md:p-5 hover:border-indigo-500/20 hover:bg-card-bg/60 transition-all duration-300 shadow-sm">
                          {item.title && (
                             <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                                 <h3 className="text-base md:text-lg font-bold text-gray-100 leading-tight">{item.title}</h3>
                                 {item.link && (
                                    <a 
                                      href={item.link} 
                                      target="_blank" 
                                      rel="noopener noreferrer" 
                                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-[10px] md:text-xs font-medium hover:bg-indigo-500/20 hover:text-indigo-200 transition-colors border border-indigo-500/20 whitespace-nowrap self-start shrink-0"
                                    >
                                       View <ExternalLink className="w-3 h-3" />
                                    </a>
                                 )}
                             </div>
                          )}
                          
                          <div className="prose prose-invert max-w-none">
                              <p className="text-gray-400 leading-relaxed text-sm">
                                {item.description}
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
