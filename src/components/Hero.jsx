import { motion } from "framer-motion";
import Logo from "../assets/logo.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-4 sm:px-6"
    >
      <motion.div
        className="text-center md:text-left max-w-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
          Hi, I'm a Web Developer
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg">
          I build modern web apps
        </p>
      </motion.div>

      <motion.img
        src={Logo}
        alt="profile"
        className="w-32 sm:w-40 md:w-56 lg:w-64 rounded-full glow"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
      />
    </section>
  );
}