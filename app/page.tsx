import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import ShortProfile from "./components/ShortProfile";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Experience from "./components/Experience";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import MobileSectionNav from "./components/MobileSectionNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent/30 pb-24 md:pb-0">
      <Navbar />
      <Hero />
      <Clients />
      <ShortProfile />
      <Projects />
      <Testimonials />
      <Experience />
      <Timeline />
      <Footer />
      <MobileSectionNav />
    </main>
  );
}
