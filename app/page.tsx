import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import ShortProfile from "./components/ShortProfile";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      <Navbar />
      <Hero />
      <ShortProfile />
      <Projects />
      <Experience />
      <Education />
      <Timeline />
      <Footer />
    </main>
  );
}
