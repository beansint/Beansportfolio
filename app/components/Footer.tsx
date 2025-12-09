import { DATA } from "../data";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-20 relative overflow-hidden"
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
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2
            id="contact-title"
            className="text-4xl md:text-5xl font-bold tracking-tight mb-8"
          >
            Let's <span className="text-accent">Talk</span>
          </h2>
          <button className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors">
            Get in touch <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-12 text-sm text-gray-500">
          <p>© 2025 Vincent Pacaña. All rights reserved.</p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
             {DATA.contact.socials.map((social, index) => (
                 <a key={index} href={social.link} className="hover:text-accent transition-colors p-2 bg-white/5 rounded-full">
                     <social.icon className="w-4 h-4" />
                 </a>
             ))}
          </div>
        </div>
      </div>
      
       {/* Decorative bottom glow */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}

