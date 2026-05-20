import Navbar from "@/components/Navbar";
import MouseTracker from "@/components/MouseTracker";
import Hero from "@/components/sections/Hero";
import BackgroundShapes from "@/components/BackgroundShapes";
import Experience from "@/components/sections/Experience";
import Courses from "@/components/sections/Courses";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-200 overflow-hidden">

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] mix-blend-screen animate-blob" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-600/10 blur-[120px] mix-blend-screen animate-blob animation-delay-2000" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        <BackgroundShapes />
      </div>

      <MouseTracker />
      <Navbar />

      <div className="relative z-10 flex flex-col">

        <Hero />

        <About />

        <Skills />

        <Experience />

        <Education />

        <Courses />

        <Projects />

        <Contact />

      </div>
    </main>
  );
}
