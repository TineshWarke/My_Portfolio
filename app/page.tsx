import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import MySkills from './components/skills/MySkills'
import Header from './components/header/Header'
import Services from './components/services/Services'
import Resume from './components/resume/Resume'
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider attribute='class'>
      <main className='font-Sofadi-One bg-gradient-to-b from-base-300 dark:from-green-500 to-black dark:to-black to-50% dark:to-50%' id='home'>
        <Navbar />
        <Header />
        <About />
        <Services />
        <Resume />
        <Projects />
        <MySkills />
      </main>
    </ThemeProvider>
  )
}
