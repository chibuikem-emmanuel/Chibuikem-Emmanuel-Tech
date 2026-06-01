import { motion } from "framer-motion";

const videos = [
  { title: "Going back to the roots", src: "/videos/my-vlog1.mp4" },
  { title: "Vendorly collaboration", src: "/videos/my-vlog2.mp4" },
  { title: "React Tips", src: "/videos/vlog3.mp4" },
];

export default function Vlog() {
  return (
    <section id="vlog" className="py-16 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
        My Vlog
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {videos.map((video, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03 }}
            className="glass rounded-xl overflow-hidden"
          >
            <video
              src={video.src}
              controls
              className="w-full h-52 object-cover"
            />

            <div className="p-4">
              <h3 className="text-sm font-semibold">{video.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}