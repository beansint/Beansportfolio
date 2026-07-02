"use client";

import { DATA } from "../data";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendGAEvent } from "@next/third-parties/google";
import { submitContact, type ContactFormState } from "../actions/contact";

const initialState: ContactFormState = { status: "idle", message: "" };

function SubmitButton({ success }: { success: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending || success}
      className={`w-full min-h-[44px] py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
        success
          ? "bg-green-500 text-white cursor-default"
          : "bg-accent text-accent-foreground hover:bg-accent/90 disabled:opacity-70"
      }`}
    >
      {pending ? (
        <>
          <span
            aria-hidden
            className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full motion-safe:animate-spin"
          />
          Sending...
        </>
      ) : success ? (
        <>
          <CheckCircle2 className="w-5 h-5" aria-hidden />
          Message Sent!
        </>
      ) : (
        <>
          Send Message <Send className="w-4 h-4" aria-hidden />
        </>
      )}
    </button>
  );
}

export default function Footer() {
  const [state, formAction] = useActionState(submitContact, initialState);
  const isSuccess = state.status === "success";
  const isError = state.status === "error";

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-14 md:py-16 relative overflow-hidden bg-black/20"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-14">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2
                id="contact-title"
                className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-foreground-subtle"
              >
                Let&apos;s Work Together
              </h2>
              <p className="text-foreground-muted text-base md:text-lg leading-relaxed max-w-md">
                Have a project in mind or just want to say hi? I&apos;m always open to discussing new opportunities and ideas.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-accent">
                  <Mail className="w-6 h-6" aria-hidden />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <a
                    href={`mailto:${DATA.contact.email}`}
                    className="text-foreground-muted hover:text-accent transition-colors"
                  >
                    {DATA.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-accent">
                  <MapPin className="w-6 h-6" aria-hidden />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className="text-foreground-muted">{DATA.profile.location}</p>
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
                    className="group flex items-center justify-center min-w-[44px] min-h-[44px] p-3 bg-white/5 border border-white/10 rounded-full hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300"
                    aria-label={`Visit ${social.name}`}
                  >
                    <social.icon
                      className="w-5 h-5 text-foreground-muted group-hover:text-accent-foreground transition-colors"
                      aria-hidden
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface/50 backdrop-blur-sm border border-surface-border rounded-card p-6 md:p-8 shadow-2xl">
            <form action={formAction} className="space-y-6" onSubmit={() => sendGAEvent("event", "contact_submit")}>
              {/* Honeypot field - hidden from real users, bots may fill it */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground-muted">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full min-h-[44px] bg-black/40 border border-surface-border rounded-xl px-4 py-3 text-white placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground-muted">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full min-h-[44px] bg-black/40 border border-surface-border rounded-xl px-4 py-3 text-white placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground-muted">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full min-h-[44px] bg-black/40 border border-surface-border rounded-xl px-4 py-3 text-white placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                  placeholder="Project inquiry..."
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-black/40 border border-surface-border rounded-xl px-4 py-3 text-white placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <SubmitButton success={isSuccess} />

              {/* Screen-reader + visual live status region */}
              <div role="status" aria-live="polite" className="min-h-[1.25rem]">
                {isSuccess && (
                  <p className="flex items-center justify-center gap-2 text-sm text-center text-accent">
                    <CheckCircle2 className="w-4 h-4" aria-hidden />
                    {state.message}
                  </p>
                )}
                {isError && (
                  <p className="flex items-center justify-center gap-2 text-sm text-center text-red-400">
                    <AlertCircle className="w-4 h-4" aria-hidden />
                    {state.message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        <footer className="flex flex-col md:flex-row items-center justify-between border-t border-surface-border pt-8 text-sm text-foreground-muted">
          <p>© 2025 {DATA.profile.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with Next.js &amp; Tailwind CSS</p>
        </footer>
        <p className="mt-4 text-xs text-foreground-muted text-center">
          This site uses Google Analytics and Vercel Analytics to understand traffic.
        </p>
      </div>

      {/* Decorative bottom glow */}
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-accent/10 blur-[100px] rounded-full pointer-events-none"
      />
    </section>
  );
}
