import { useState, useRef, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import Logo from "../assets/logo mi.png";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const dropdownRef = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setMoreOpen(false);
  };

  /* close desktop dropdown if clicked outside */
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setMoreOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 glass backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">

        {/* Logo */}
        <a href="#home">
          <img
            src={Logo}
            alt="Logo"
            className="w-8 sm:w-10 object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-7 text-sm font-medium">

          <a href="#home" className="hover:text-blue-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-blue-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>

          {/* Better Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              More
              <FaChevronDown
                className={`text-xs transition ${
                  moreOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    scale: 0.95,
                  }}
                  transition={{ duration: 0.22 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 rounded-xl glass backdrop-blur-xl border border-white/10 shadow-2xl p-2 z-50"
                >
                  <a
                    href="#experience"
                    onClick={() => setMoreOpen(false)}
                    className="block px-4 py-2 rounded-lg hover:bg-white/10"
                  >
                    Experience
                  </a>

                  <a
                    href="#vlog"
                    onClick={() => setMoreOpen(false)}
                    className="block px-4 py-2 rounded-lg hover:bg-white/10"
                  >
                    Vlog
                  </a>

                  <a
                    href="#qualifications"
                    onClick={() => setMoreOpen(false)}
                    className="block px-4 py-2 rounded-lg hover:bg-white/10"
                  >
                    Qualifications
                  </a>

                  <a
                    href="/Chibuikem-Emmanuel-Victor-resume.pdf"
                    target="_blank"
                    onClick={() => setMoreOpen(false)}
                    className="block px-4 py-2 rounded-lg hover:bg-white/10"
                  >
                    Resume
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          <button
            className="md:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glass border-t border-white/10"
          >
            <div className="flex flex-col items-center gap-4 py-6 text-sm">

              <a href="#home" onClick={closeMenu}>
                Home
              </a>

              <a href="#about" onClick={closeMenu}>
                About
              </a>

              <a href="#skills" onClick={closeMenu}>
                Skills
              </a>

              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>

              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>

              <a href="#experience" onClick={closeMenu}>
                Experience
              </a>

              <a href="#vlog" onClick={closeMenu}>
                Vlog
              </a>

              <a href="#qualifications" onClick={closeMenu}>
                Qualifications
              </a>

              <a
                href="/Chibuikem-Emmanuel-Victor-resume.pdf"
                target="_blank"
                onClick={closeMenu}
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}