import { motion } from "framer-motion";

const experiences = [
    {
    role: "ICT Manager",
    company: "De Kash Empire, Nigeria",
    period: "2026 - Present",
    desc: [
      "Managed ICT operations across multiple departments, ensuring smooth daily technology usage.",
      "Diagnosed and resolved computer hardware and software issues for staff across the organization.",
      "Installed, configured, upgraded, and maintained desktop systems, peripherals, and office devices.",
      "Provided technical support and setup for various organizational units and workstations.",
      "Monitored and maintained CCTV surveillance systems for security operations.",
      "Implemented preventive maintenance practices to reduce downtime and improve efficiency.",
    ],
  },

    {
    role: "Software developer",
    company: "Vendorly",
    period: "2026 - Present",
    desc: [
      "Led the development of a web application for whatsapp vendors, utilizing React for the frontend and NestJS for the backend.",
      "Integrated third-party APIs for payment processing, inventory management, and customer communication.",
      "Directed junior developers, providing code reviews, mentorship, and guidance to ensure high-quality code and adherence to best practices.",
      "Worked closely with product managers and designers to translate business requirements into technical specifications and deliver a user-friendly application.",
    ],
  },

  {
    role: "Web Development Instructor",
    company: "LOCTECH, Nigeria",
    period: "2025",
    desc: [
      "Trained and mentored 20+ students in HTML, CSS, JavaScript, Tailwind CSS, Python, and Django.",
      "Designed structured, hands-on training programs guiding students from beginner level to building full-stack applications.",
      "Conducted code reviews, debugging sessions, and real-world project supervision to strengthen practical skills.",
    ],
  },
  {
    role: "Software Developer",
    company: "WYNK, Nigeria",
    period: "2024 - 2025",
    desc: [
      "Collaborated with cross-functional teams (backend engineers, designers, and product managers) to build scalable web applications.",
      "Contributed to the development of a financial product with focus on performance, scalability, and user experience.",
      "Partnered with UI/UX designers to deliver two NGO platforms with responsive and user-centered interfaces.",
    ],
  },
  {
    role: "Web Developer",
    company: "Fidelcom Innovation Limited, Nigeria",
    period: "2022 - 2023",
    desc: [
      "Developed web applications using HTML, CSS, JavaScript, and Django.",
      "Collaborated on an architectural platform, ensuring clean, maintainable, and scalable code.",
      "Implemented Git/GitHub workflows and contributed to CI/CD practices.",
      "Optimized frontend performance and improved application responsiveness.",
    ],
  },
  {
    role: "IT Support / Web Developer / Instructor Assistant",
    company: "GlobalTech Computer Institute, Nigeria",
    period: "2018 - 2020",
    desc: [
      "Assisted in training students in HTML, CSS, JavaScript, and Python.",
      "Provided technical support for hardware and software systems, reducing downtime.",
      "Installed, configured, and maintained computer systems and applications.",
      "Troubleshot network issues and ensured stable connectivity across systems.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
        Work Experience
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="glass p-6 rounded-xl"
          >
            <h3 className="font-bold text-lg">
              {exp.role} — {exp.company}
            </h3>

            <p className="text-sm opacity-70">{exp.period}</p>

            <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
              {exp.desc.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}