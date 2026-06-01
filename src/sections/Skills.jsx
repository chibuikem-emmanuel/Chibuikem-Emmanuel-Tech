import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDocker,
  FaBrain,
  FaTasks,
  FaRobot,
} from "react-icons/fa";

import {
  SiDjango,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiNestjs,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "React Native", icon: <FaReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "NestJS", icon: <SiNestjs /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Postgres", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Machine Learning", icon: <FaRobot /> },
  { name: "AI Engineering", icon: <FaBrain /> },
  { name: "Project Management", icon: <FaTasks /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 overflow-hidden px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        Skills
      </h2>

      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...skills, ...skills].map((skill, i) => (
          <div
            key={i}
            className="min-w-[140px] p-4 glass flex flex-col items-center gap-2"
          >
            <div className="text-2xl">{skill.icon}</div>
            {skill.name}
          </div>
        ))}
      </motion.div>

      <motion.div
        className="flex gap-6 w-max mt-6"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...skills, ...skills].map((skill, i) => (
          <div
            key={i}
            className="min-w-[140px] p-4 glass flex flex-col items-center gap-2"
          >
            <div className="text-2xl">{skill.icon}</div>
            {skill.name}
          </div>
        ))}
      </motion.div>
    </section>
  );
}