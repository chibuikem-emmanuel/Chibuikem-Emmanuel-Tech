import { motion } from "framer-motion";

import ecommerce from "../assets/projects/apf2.PNG";
import portfolio from "../assets/projects/confy.PNG";
import ai from "../assets/projects/vendor.PNG";
import mobile from "../assets/projects/mobile.jpeg";
import api from "../assets/projects/api.jpeg";
import admin from "../assets/projects/admin.jpeg";

const projects = [
  {
    title: "Foundation school learning management system for churches and other organizations",
    desc: "React + Django full-stack platform, for digital learning and course management, live downloadable results of students",
    image: ecommerce,
    live: "https://lwcc-absu-apf-school.onrender.com/",
    github: "https://github.com/chibuikem-emmanuel/my_lovely_school",
  },
  {
    title: "Conference management system for churches and other organizations",
    desc: "React + Tailwind CSS + Django full-stack platform, to update attendees on conference details and manage conference events with sms and email notifications, registration with QR code and conference",
    image: portfolio,
    live: "https://church-conf.onrender.com/",
    github: "https://github.com/chibuikem-emmanuel/church__conf",
  },
  {
    title: "Vendorly for whatsapp vendors",
    desc: "A react + nestjs app built for whatsapp vendors to manage their products and sales",
    image: ai,
    live: "https://vendorly-client.vercel.app/",
    github: "https://github.com/yourusername/ai-dashboard",
  },
  {
    title: "Mobile App",
    desc: "React Native application",
    image: mobile,
    live: "https://your-mobile-preview.com",
    github: "https://github.com/yourusername/mobile-app",
  },
  {
    title: "API System",
    desc: "Django REST backend",
    image: api,
    live: "https://your-api-docs.com",
    github: "https://github.com/yourusername/api-system",
  },
  {
    title: "Admin Dashboard",
    desc: "Data visualization system",
    image: admin,
    live: "https://your-admin-dashboard.com",
    github: "https://github.com/yourusername/admin-dashboard",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
        Projects
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: {
                opacity: 0,
                y: 40,
              },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                  ease: "easeOut",
                },
              },
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: {
                duration: 0.25,
              },
            }}
            className="relative isolate group rounded-xl overflow-hidden glass"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-black/25 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
              <p className="text-white text-sm font-medium">
                View Project
              </p>
            </div>

            {/* Content */}
            <div className="p-4 relative z-10">
              <h3 className="text-lg font-bold">
                {project.title}
              </h3>

              <p className="text-sm mt-2 opacity-80">
                {project.desc}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 mt-4 flex-wrap">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm hover:scale-105 transition"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-white/20 text-sm hover:scale-105 transition"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-500"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}