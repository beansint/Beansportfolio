import { DATA } from "../data";
import { MessageCircle, ArrowUpRight } from "lucide-react";

export default function ShortProfile() {
  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold tracking-wide text-center mb-12 font-mono">
          Short Profile
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Main Large Card */}
          <div className="md:col-span-2 bg-card-bg border border-card-border rounded-3xl p-8 relative overflow-hidden min-h-[300px] group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 h-full flex flex-col justify-end">
              <p className="text-2xl font-medium leading-relaxed max-w-md">
                {DATA.profile.bio}
              </p>
            </div>
             {/* Decorative gradient orb */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[80px] rounded-full -mr-20 -mt-20 pointer-events-none" />
          </div>

          {/* Right Column Stack */}
          <div className="flex flex-col gap-6">
            {/* Fluent Card */}
            <div className="bg-card-bg border border-card-border rounded-3xl p-6 flex-1 flex flex-col justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="font-medium text-lg text-gray-200">
                {DATA.skills.languages}
              </p>
            </div>

             {/* Tech Stack Card */}
             <div className="bg-card-bg border border-card-border rounded-3xl p-6 flex-1 flex flex-col justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="flex flex-wrap gap-2">
                 {DATA.skills.techStack.map((tech, i) => (
                   <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-white/10 text-gray-300 border border-white/5">
                     {tech}
                   </span>
                 ))}
               </div>
            </div>
          </div>

          {/* Bottom Row */}
          
          {/* Card 1 */}
          <div className="bg-card-bg border border-card-border rounded-3xl p-6 flex flex-col justify-between hover:border-accent/30 transition-colors">
            <h3 className="font-bold text-lg text-white">Software Architect<br/>designer</h3>
             <div className="self-end p-2 bg-white/5 rounded-full text-gray-400">
                <ArrowUpRight className="w-4 h-4" />
             </div>
          </div>

           {/* Card 2 - CTA */}
           <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-indigo-500/20 rounded-3xl p-6 flex flex-col justify-center items-center text-center relative overflow-hidden group cursor-pointer hover:border-indigo-500/50 transition-colors">
            <h3 className="font-bold text-lg text-white mb-4 relative z-10">Do you want to ask a<br/>question?</h3>
            <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors relative z-10">
               Say, hey cool! <MessageCircle className="w-3 h-3" />
            </button>
             <div className="absolute inset-0 bg-accent/10 blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
          </div>

           {/* Card 3 */}
           <div className="bg-card-bg border border-card-border rounded-3xl p-6 flex flex-col justify-between hover:border-accent/30 transition-colors">
            <h3 className="font-bold text-lg text-white">Currently learning at<br/>university while<br/>working</h3>
            <div className="mt-4">
                 <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-accent h-full w-3/4" />
                 </div>
                 <p className="text-xs text-right text-gray-500 mt-1 font-mono">Loading...</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

