import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import MySkills from "./components/skills/MySkills";

export default function Home() {
  return (
    <main
      id="home"
      className="min-h-screen w-full overflow-x-clip bg-gradient-to-b from-base-300 to-black to-50% font-Sofadi-One"
    >
      <Navbar />
      <Header />
      <About />
      <Education />
      <Experience />
      <Services />
      <Resume />
      <Projects />
      <MySkills />
      <SpeedInsights />
    </main>
  );
}
