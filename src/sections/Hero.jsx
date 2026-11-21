import { motion } from "framer-motion";
import HeroImage from "../assets/hero-image3.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6"
    >
<motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold leading-tight">
          Hi, I’m Chibuikem Emmanuel!
        </h2>
        <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed opacity-90">
          I’m a Full-Stack Software Engineer and Systems Architect specializing
          in building intelligent, scalable web and mobile applications. My
          expertise spans full-stack architecture and applied AI engineering—working
          with React, React Native, Next.js, TypeScript, Django, Node.js, and
          Express, alongside PostgreSQL, MySQL, and MongoDB.
        </p>
      </motion.div>

      <motion.img
        src={HeroImage}
        alt="profile"
        className="w-64 h-64 rounded-full object-cover border-4 glow"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
      />
    </section>
  );
}