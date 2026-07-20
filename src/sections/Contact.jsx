import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC
      )
      .then(() => {
        form.current.reset();

        setSending(false);

        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
        }, 4000);
      })
    .catch((error) => {
  console.log("EMAILJS ERROR:", error);

  alert(JSON.stringify(error));

  setSending(false);
});
  };

  if (success) {
    return (
      <div className="fixed inset-0 z-[9999] bg-[#050816] flex items-center justify-center px-6">

        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .6 }}
          className="glass rounded-3xl p-10 text-center max-w-md"
        >
          <motion.div
            animate={{
              scale: [0.8, 1.2, 1],
            }}
            transition={{
              duration: .8,
            }}
          >
            <FaCheckCircle className="mx-auto text-7xl text-green-500" />
          </motion.div>

          <h2 className="text-4xl font-bold mt-6">
            Message Sent!
          </h2>

          <p className="mt-5 opacity-80 leading-7">
            Thank you for contacting me.

            <br />

            I'll get back to you as soon as possible.
          </p>

          <motion.div
            className="mt-8 h-2 rounded-full bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 4 }}
          />

        </motion.div>

      </div>
    );
  }

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto py-24 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-3xl overflow-hidden"
      >
        <div className="grid lg:grid-cols-2">

          {/* LEFT */}

          <div className="p-8 lg:p-14 flex flex-col justify-center">

            <span className="uppercase tracking-[4px] text-blue-400 font-semibold">
              Contact Me
            </span>

            <h2 className="text-4xl font-bold mt-3">
              Let's Build Something Amazing
            </h2>

            <p className="mt-6 leading-8 opacity-80">
              Whether you have a project,
              job opportunity or collaboration,
              feel free to reach out.

              I'm always open to discussing
              new ideas and exciting projects.
            </p>

            <div className="space-y-8 mt-10">

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 text-xl">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="opacity-60 text-sm">
                    Email
                  </p>

                  <h4 className="font-semibold">
                    chizaramchibuikem@gmail.com
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 text-xl">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="opacity-60 text-sm">
                    Phone
                  </p>

                  <h4 className="font-semibold">
                    +234 901 846 3343
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 text-xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="opacity-60 text-sm">
                    Location
                  </p>

                  <h4 className="font-semibold">
                    Nigeria
                  </h4>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="bg-white/5 p-8 lg:p-14">

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full rounded-xl border border-white/20 bg-transparent p-4 outline-none focus:border-blue-500"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
                className="w-full rounded-xl border border-white/20 bg-transparent p-4 outline-none focus:border-blue-500"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full rounded-xl border border-white/20 bg-transparent p-4 outline-none focus:border-blue-500"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                required
                className="w-full rounded-xl border border-white/20 bg-transparent p-4 outline-none resize-none focus:border-blue-500"
              />

              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: .95,
                }}
                disabled={sending}
                className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 py-4 flex items-center justify-center gap-3 font-semibold transition"
              >
                <FaPaperPlane />

                {sending ? "Sending..." : "Send Message"}
              </motion.button>

            </form>

          </div>

        </div>
      </motion.div>
    </section>
  );
}