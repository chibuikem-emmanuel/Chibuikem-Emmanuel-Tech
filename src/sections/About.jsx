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
              transition={{ duration: .8 }}
            >
              <span className="text-blue-400 uppercase tracking-[5px] font-semibold">
                About Me
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Full Stack Engineer
                <br />
                Building modern digital experiences.
              </h2>

              <p className="mt-8 text-base sm:text-lg leading-8 opacity-90">
                Software Developer with experience building web and mobile
                applications that solve real-world problems and improve how
                people interact with technology.
              </p>

              <p className="mt-6 text-base sm:text-lg leading-8 opacity-90">
                I work across the JavaScript ecosystem using React,
                React Native, Next.js, Node.js, Django, TypeScript,
                PostgreSQL and MySQL to build scalable software,
                administrative dashboards, payment systems, conference
                platforms and business applications.
              </p>

              <p className="mt-6 text-base sm:text-lg leading-8 opacity-90">
                Beyond development, I enjoy teaching, mentoring,
                project management and exploring AI Engineering,
                Machine Learning and emerging technologies.
              </p>

              {/* Small Info Cards */}

              <div className="grid grid-cols-2 gap-4 mt-10">

                <div className="glass rounded-xl p-5">
                  <h3 className="text-blue-400 text-2xl font-bold">
                    5+
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
                    Projects
                  </p>
                </div>

                <div className="glass rounded-xl p-5">
                  <h3 className="text-blue-400 text-2xl font-bold">
                    20+
                  </h3>

                  <p className="mt-2 text-sm">
                    Students Trained
                  </p>
                </div>

                <div className="glass rounded-xl p-5">
                  <h3 className="text-blue-400 text-2xl font-bold">
                    100%
                  </h3>

                  <p className="mt-2 text-sm">
                    Commitment
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