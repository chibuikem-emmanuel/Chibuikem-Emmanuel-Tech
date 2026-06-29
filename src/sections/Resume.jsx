export default function Resume() {
  return (
    <section id="resume" className="py-16 px-4 flex justify-center">
      <div className="glass p-8 rounded-xl text-center max-w-xl w-full">
        
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          My Resume
        </h2>

        <p className="text-sm sm:text-base mb-6">
          Download my resume to learn more about my experience, skills, and projects.
        </p>

        <a
          href="/Chibuikem_Emmanuel_Victor.pdf"
          download
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition"
        >
          Download Resume
        </a>

      </div>
    </section>
  );
}