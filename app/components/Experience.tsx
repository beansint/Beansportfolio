import { DATA } from "../data";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="py-20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2
          id="experience-title"
          className="text-2xl font-bold tracking-wide text-center mb-16"
        >
          My <span className="text-accent">Experience</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {DATA.experience.map((exp, index) => (
            <div
              key={index}
              className="bg-card-bg border border-card-border rounded-3xl p-8 flex items-start gap-6 hover:border-accent/30 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="p-4 bg-gray-900 rounded-2xl border border-gray-800 group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors shrink-0">
                <exp.icon className="w-8 h-8 text-white group-hover:text-accent transition-colors" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

