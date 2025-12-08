import { DATA } from "../data";

export default function Timeline() {
  return (
    <section
      id="timeline"
      aria-labelledby="timeline-title"
      className="py-20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2
          id="timeline-title"
          className="text-2xl font-bold tracking-wide text-left mb-12 max-w-5xl mx-auto"
        >
          My journey report
        </h2>
        
        <div className="max-w-5xl mx-auto pl-4 md:pl-8 border-l-2 border-indigo-900/50 relative space-y-24">
            {/* Gradient Line Overlay */}
            <div className="absolute left-[-2px] top-0 h-64 w-[2px] bg-gradient-to-b from-indigo-500 to-transparent" />

          {DATA.timeline.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-16">
              {/* Dot on the line */}
              <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-card-bg border-4 border-gray-800 ring-2 ring-indigo-500/50" />
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                  <div className="md:col-span-1">
                     <h3 className="text-4xl font-bold text-gray-700 dark:text-gray-600 mb-2">{item.year}</h3>
                  </div>
                  <div className="md:col-span-4">
                      <div className="prose prose-invert max-w-none">
                          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                            {item.description}
                          </p>
                          {/* Placeholder for timeline images if any */}
                          {index === 0 && (
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="h-32 bg-gray-800 rounded-lg animate-pulse" />
                                <div className="h-32 bg-gray-800 rounded-lg animate-pulse" />
                            </div>
                          )}
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

