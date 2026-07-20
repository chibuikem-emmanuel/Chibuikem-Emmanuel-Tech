import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Loader from "./components/Loader";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Qualifications from "./sections/Qualifications";
import Vlog from "./sections/Vlog";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <motion.div
          key="portfolio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
          }}
        >
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Qualifications />
          <Vlog />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}