import { motion } from "framer-motion";

const qualifications = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "Abia State University, Nigeria",
    year: "2019 - 2024",
    desc: "Focused on software engineering, web development, and database systems.",
  },
  {
    title: "Web Development Certification",
    institution: "GlobalTech Computer Institute, Nigeria",
    year: "2019 - 2020",
    desc: "Hands-on training in HTML, CSS, JavaScript, Python and PHP with real-world projects.",
  },
  {
    title: "Project Management Professional (PMP) Training",
    institution: "Pinnacle Institute, Nigeria",
    year: "2024 - 2026",
    desc: "Training in project planning, risk management, execution, monitoring, and delivery methodologies.",
  },
];

export default function Qualifications() {
  return (
    <section id="qualifications" className="py-16 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
        Qualifications
      </h2>

      <motion.div
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {qualifications.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03 }}
            className="glass p-6 rounded-xl"
          >
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-sm opacity-70">
              {item.institution} • {item.year}
            </p>
            <p className="mt-2 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}