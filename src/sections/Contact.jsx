import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="flex justify-center items-center py-20 px-6">
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-full max-w-md flex flex-col gap-4 glass p-6"
      >
        <input placeholder="Name" className="p-2 rounded border bg-transparent" />
        <input placeholder="Email" className="p-2 rounded border bg-transparent" />
        <textarea placeholder="Message" className="p-2 rounded border bg-transparent" />

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-blue-500 p-2 rounded text-white"
        >
          Send
        </motion.button>
      </motion.form>
    </section>
  );
}