import Image from "next/image";
import { DATA } from "../data";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-sm md:text-base font-mono text-accent tracking-wider uppercase">
              {DATA.profile.role}
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Hello I'm <br />
              <span className="text-accent">{DATA.profile.name.split(" ")[0]}</span>{" "}
              {DATA.profile.name.split(" ")[1]}
            </h1>
            <p className="text-gray-400 max-w-lg mx-auto md:mx-0 text-lg">
              {DATA.profile.bio}
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
              <button className="flex items-center gap-2 bg-accent text-black px-6 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors">
                Contact Me <ArrowRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 border border-gray-700 hover:border-accent text-white px-6 py-3 rounded-full font-semibold transition-colors group">
                Download CV <Download className="w-4 h-4 group-hover:text-accent transition-colors" />
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full border-2 border-accent/30 p-2">
               <div className="absolute inset-0 rounded-full border border-dashed border-accent/50 animate-[spin_10s_linear_infinite]" />
               <div className="w-full h-full rounded-full overflow-hidden relative bg-gray-800">
                 {/* Placeholder for profile image */}
                 <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    Profile Image
                 </div>
               </div>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-white/5 pt-12">
          {DATA.profile.stats.map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.value} <span className="text-accent text-xl">+</span>
              </div>
              <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

