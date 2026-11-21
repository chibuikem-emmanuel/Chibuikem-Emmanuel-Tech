import { motion } from "framer-motion";
import HeroImage from "../assets/hero-image2.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-20 px-5 sm:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="glass rounded-3xl overflow-hidden p-6 sm:p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* IMAGE */}

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-md">

                {/* Glow */}

                <div className="absolute -inset-4 bg-blue-500/15 blur-3xl rounded-3xl"></div>

                <img
                  src={HeroImage}
                  alt="Chibuikem Emmanuel Victor"
                  className="
                    relative
                    w-full
                    aspect-[4/5]
                    object-cover
                    rounded-3xl
                    shadow-2xl
                    border
                    border-white/10
                  "
                />
              </div>
            </motion.div>

            {/* CONTENT */}

<motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-blue-400 uppercase tracking-[5px] font-semibold">
                About Me
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Full-Stack Software Engineer
                <br />
                Architecting scalable web &amp; cloud systems.
              </h2>

              <p className="mt-8 text-base sm:text-lg leading-8 opacity-90">
                Full-Stack Engineer with 8+ years of experience designing and
                shipping production web and mobile applications that streamline
                business operations and scale reliably.
              </p>

              <p className="mt-6 text-base sm:text-lg leading-8 opacity-90">
                Working across the Python and JavaScript/TypeScript ecosystems
                using Django, Node.js, React, React Native, Next.js,
                PostgreSQL, and MySQL, I architect multi-tenant SaaS platforms,
                payment systems, administrative dashboards, conference
                platforms, and commerce applications.
              </p>

              <p className="mt-6 text-base sm:text-lg leading-8 opacity-90">
                Beyond shipping code, I lead engineering teams, mentor
                upcoming developers, manage technical projects, and explore
                applied AI Engineering and emerging cloud technologies.
              </p>

              {/* Small Info Cards */}
              <div className="grid grid-cols-2 gap-4 mt-10">
                <div className="glass rounded-xl p-5">
                  <h3 className="text-blue-400 text-2xl font-bold">
                    8+
                  </h3>
                  <p className="mt-2 text-sm">
                    Years Experience
                  </p>
                </div>

                <div className="glass rounded-xl p-5">
                  <h3 className="text-blue-400 text-2xl font-bold">
                    20+
                  </h3>
                  <p className="mt-2 text-sm">
                    Production Projects
                  </p>
                </div>

                <div className="glass rounded-xl p-5">
                  <h3 className="text-blue-400 text-2xl font-bold">
                    30+
                  </h3>
                  <p className="mt-2 text-sm">
                    Developers Mentored
                  </p>
                </div>

                <div className="glass rounded-xl p-5">
                  <h3 className="text-blue-400 text-2xl font-bold">
                    99.9%
                  </h3>
                  <p className="mt-2 text-sm">
                    System Uptime
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}