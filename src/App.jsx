import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Resume from "./sections/Resume";
import Vlog from "./sections/Vlog";
import { useTheme } from "./hooks/useTheme";
import Qualifications from "./sections/Qualifications";


function App() {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience /> 
      <Qualifications /> 
      <Contact />
      <Vlog />   
      <Resume />
      <Footer />
    </div>
  );
}

export default App;