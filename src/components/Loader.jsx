import { motion } from "framer-motion";
import Logo from "../assets/pre log.png";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 bg-[#050816] flex items-center justify-center z-[9999]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Glow */}

      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-blue-500/20 blur-[110px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
      />

      {/* Logo */}

      <motion.img
        src={Logo}
        alt="Logo"
        initial={{
          opacity: 0,
          scale: .7,
          rotate: -15,
        }}
        animate={{
          opacity: 1,
          scale: [1, 1.04, 1],
          rotate: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        className="relative w-36 md:w-44 lg:w-52 drop-shadow-[0_0_40px_rgba(59,130,246,.5)]"
      />
    </motion.div>
  );
}