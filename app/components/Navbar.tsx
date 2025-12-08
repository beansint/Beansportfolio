import { DATA } from "../data";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight">
          Radnaabazar <span className="text-accent">.</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
           <a href="#" className="hover:text-white transition-colors">Professional</a>
           <a href="#" className="hover:text-white transition-colors">Personal</a>
           <a href="#" className="hover:text-white transition-colors">Contact</a>
           
           <button className="flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full hover:bg-accent/20 transition-colors">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available
           </button>
        </div>
      </div>
    </nav>
  );
}

