import { motion } from "framer-motion";
import HeroImage from "../assets/hero-image2.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h2 className="text-4xl font-bold">Hi, I’m Chibuikem Emmanuel!</h2>
        <p className="mt-4">I’m a passionate developer and AI engineer specializing in building<br></br> 
        intelligent, scalable, and modern web and mobile applications.<br></br>My expertise spans Machine Learning, AI Engineering,<br></br> 
        and full-stack development 
        with React, React Native, Next.js,<br></br> 
        Django, Node.js, Express, and databases like MongoDB, MySQL, and <br></br>
        PostgreSQL.</p>
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