"use client";

import { DATA } from "../data";
import { ArrowRight, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [formState, setFormState] = useState<{
    status: 'idle' | 'submitting' | 'success' | 'error';
    message: string;
  }>({ status: 'idle', message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: 'submitting', message: '' });
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormState({ status: 'success', message: 'Message sent successfully!' });
    (e.target as HTMLFormElement).reset();
    
    setTimeout(() => {
        setFormState({ status: 'idle', message: '' });
    }, 3000);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-24 relative overflow-hidden bg-black/20"
    >
      {/* subtle grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
            {/* Contact Info */}
            <div className="space-y-8">
                <div>
                    <h2
                        id="contact-title"
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
                    >
                        Let's Work Together
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                        Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and ideas.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-white/5 border border-white/10 text-accent">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-1">Email</h3>
                            <a href={`mailto:${DATA.contact.email}`} className="text-gray-400 hover:text-accent transition-colors">
                                {DATA.contact.email}
                            </a>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-white/5 border border-white/10 text-accent">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-1">Location</h3>
                            <p className="text-gray-400">
                                {DATA.profile.location}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="pt-8">
                    <h3 className="text-white font-semibold mb-4">Connect with me</h3>
                    <div className="flex gap-4">
                        {DATA.contact.socials.map((social, index) => (
                            <a 
                                key={index} 
                                href={social.link} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-3 bg-white/5 border border-white/10 rounded-full hover:bg-accent hover:border-accent hover:text-black transition-all duration-300"
                                aria-label={`Visit ${social.name}`}
                            >
                                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card-bg/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name"
                                required
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                required
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                        <input 
                            type="text" 
                            id="subject" 
                            name="subject"
                            required
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                            placeholder="Project inquiry..."
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                        <textarea 
                            id="message" 
                            name="message"
                            required
                            rows={4}
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <button 
                        type="submit"
                        disabled={formState.status === 'submitting' || formState.status === 'success'}
                        className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                            formState.status === 'success' 
                                ? 'bg-green-500 text-white cursor-default' 
                                : 'bg-accent text-black hover:bg-accent/90'
                        }`}
                    >
                        {formState.status === 'submitting' ? (
                            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        ) : formState.status === 'success' ? (
                            "Message Sent!"
                        ) : (
                            <>Send Message <Send className="w-4 h-4" /></>
                        )}
                    </button>
                    
                    {formState.message && formState.status === 'error' && (
                         <p className="text-red-400 text-sm text-center">{formState.message}</p>
                    )}
                </form>
            </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 text-sm text-gray-500">
          <p>© 2025 {DATA.profile.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
      
       {/* Decorative bottom glow */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
}