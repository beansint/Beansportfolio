import { FaGraduationCap } from "react-icons/fa";
import { DATA } from "../data";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="py-20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          id="education-title"
          className="flex items-center justify-center gap-2 mb-12"
        >
          <FaGraduationCap className="text-accent w-6 h-6" />
          <h2 className="text-2xl font-bold tracking-wide">Education</h2>
        </div>

        <div className="flex flex-row gap-6 max-w-6xl mx-auto overflow-x-auto pb-4 justify-center">
          {DATA.education.map((edu, index) => (
            <div
              key={index}
              className="bg-card-bg border border-card-border p-6 rounded-2xl hover:border-accent/50 transition-colors group flex-shrink-0 w-[280px] md:w-[300px] h-[160px] md:h-[180px] flex flex-col justify-between"
            >
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors break-words leading-tight">
                {edu.school}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{edu.degree}</p>
              <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs text-accent font-mono border border-white/10">
                {edu.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

