import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="flex justify-center items-center px-6 py-20">
      <motion.div
        className="max-w-2xl glass p-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4">
         I see myself as a potter, and the world of technology is my clay. Every line of code, every algorithm, and every design I craft shapes something meaningful, transforming raw ideas into functional and beautiful experiences.<br></br> With Machine Learning and AI Engineering, I mold intelligent systems that learn, adapt, and solve real-world problems.

<br></br>On the web and mobile front, I shape responsive and interactive applications using React, React Native, Next.js, Node.js, Express, and databases like MongoDB, MySQL, and PostgreSQL. I add finesse to interfaces with Tailwind CSS, Material UI, Chadcn, and bring logic and interactivity alive with JavaScript, TypeScript, Python, HTML, and CSS.

<br></br>To me, technology is not just a tool—it’s the clay itself. I experiment, refine, and sculpt solutions that are both innovative and practical. Every project is a chance to mold the ordinary into the extraordinary, combining creativity, precision, and intelligence.

<br></br>I am constantly learning, exploring AI tools, and pushing the boundaries of what code can create—because the beauty of this craft lies in the endless possibilities of the clay in my hands.
        </p>
      </motion.div>
    </section>
  );
}