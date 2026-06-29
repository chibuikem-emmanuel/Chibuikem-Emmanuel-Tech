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
     Software Developer with experience building web and mobile applications that solve real-world problems and improve how people interact with technology.
 
I work across the JavaScript ecosystem, using technologies such as React, React Native, Next.js, Node.js, Django, TypeScript, and modern databases to develop scalable, user-focused solutions. My passion lies in transforming ideas into products that deliver value to businesses, organizations, and communities.
 
Some of the projects I've worked on include Confy, a conference registration and event management platform designed to help churches and organizations streamline attendee registration, communication, and event operations. The platform is already being adopted by multiple conferences, helping organizers reduce manual processes and improve event experiences.
 
I've also developed NGO management platforms featuring secure authentication, donation processing through Paystack, user onboarding, newsletter subscriptions, and engagement tools. In addition, I have experience building multi-step registration systems, administrative dashboards, and business-focused applications that improve operational efficiency.
 
Recently, I have been expanding into mobile application development with React Native, building cross-platform applications while strengthening my skills in software architecture, API integration, performance optimization, and user experience design.
 
Beyond development, I enjoy learning, teaching, and sharing knowledge. I'm constantly exploring new technologies, refining my problem-solving skills, and building products that can create meaningful impact at scale.
 
Core Technologies: React, React Native, Next.js, Node.js, Django, JavaScript, TypeScript, HTML, CSS, REST APIs, PostgreSQL, MySQL, Git, and modern web technologies.
 
I'm always open to connecting with developers, founders, organizations, and teams building innovative products and solutions.
        </p>
      </motion.div>
    </section>
  );
}