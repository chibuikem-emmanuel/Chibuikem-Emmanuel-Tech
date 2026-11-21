import { motion } from "framer-motion";
import Logo from "../assets/pre log.png";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";

export default function Footer() {
  const socials = [
    {
      icon: <FaGithub />,
      link: "https://github.com/chibuikem-emmanuel",
      name: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/chibuikem-emmanuel-8725052aa",
      name: "LinkedIn",
    },
    {
      icon: <FaEnvelope />,
      link: "mailto:chizaramchibuikem@gmail.com",
      name: "Email",
    },
    {
      icon: <FaWhatsapp />,
      link: "https://wa.me/2349018463343",
      name: "WhatsApp",
    },
  ];

  return (
    <footer className="relative overflow-hidden mt-24">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent"></div>

      <div className="relative glass border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="flex flex-col items-center text-center"
          >

            {/* Logo */}

            <div className="relative">

              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

              <img
                src={Logo}
                alt="Logo"
                className="relative w-16 md:w-20"
              />

            </div>

            {/* Name */}

            <h2 className="mt-6 text-3xl font-bold">
              Chibuikem Emmanuel Victor
            </h2>

            <p className="mt-2 text-blue-400 font-medium">
              FullStack Engineer • AI Engineer • Project Manager
            </p>

            <p className="mt-5 max-w-xl opacity-80 leading-8">
              I design and build scalable web and mobile
              applications that solve real-world problems
              and deliver meaningful user experiences.
            </p>

            {/* Resume */}

            <a
              href="/Chibuikem Emmanuel Victor - Software Engineer CV (2).pdf"
              download
              className="mt-8 flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition"
            >
              <FaDownload />

              Download Resume
            </a>

            {/* Social Icons */}

            <div className="flex gap-6 mt-10">

              {socials.map((social) => (

                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    y: -8,
                    scale: 1.15,
                  }}
                  whileTap={{
                    scale: .95,
                  }}
                  className="w-14 h-14 rounded-full glass flex items-center justify-center text-2xl hover:text-blue-400 transition"
                >
                  {social.icon}
                </motion.a>

              ))}

            </div>

          </motion.div>

          {/* Bottom */}

          <div className="mt-14 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="opacity-70 text-sm">
              © {new Date().getFullYear()} Chibuikem Emmanuel Victor.
              All Rights Reserved.
            </p>

            <p className="text-sm opacity-70">
              Designed & Developed with ❤️
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}