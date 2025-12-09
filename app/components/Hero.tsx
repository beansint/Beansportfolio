import { DATA } from "../data";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden"
    >
      {/* subtle grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
        }}
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-sm md:text-base font-mono text-accent tracking-wider uppercase">
              {DATA.profile.role}
            </h2>
            <h1
              id="home-title"
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
            >
              Hello I'm <br />
              <span className="text-accent">{DATA.profile.name}</span>
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
            <div className="w-100 h-100 md:w-[24rem] md:h-[24rem] relative rounded-full border-2 border-accent/30 p-3">
               <div className="absolute inset-0 rounded-full border border-dashed border-accent/50 animate-[spin_18s_linear_infinite]" />
               <div className="absolute inset-3 rounded-full border border-accent/25 animate-[spin_26s_linear_infinite]" />
               <div className="w-full h-full rounded-full overflow-hidden relative bg-gray-800 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
                 <Image
                   src="/2x2.jpg"
                   alt={`${DATA.profile.name} profile picture`}
                   fill
                   className="object-cover"
                   priority
                 />
               </div>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] bg-accent/6 rounded-full blur-[140px]" />
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

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mt-12">
          {DATA.contact.socials
            .filter((social) => social.name === "GitHub" || social.name === "LinkedIn")
            .map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-700 hover:border-accent bg-white/5 hover:bg-white/10 transition-all group"
                aria-label={`Visit ${social.name} profile`}
              >
                {social.name === "GitHub" ? (
                  <Github className="w-5 h-5 text-gray-300 group-hover:text-accent transition-colors" />
                ) : (
                  <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-accent transition-colors" />
                )}
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}

