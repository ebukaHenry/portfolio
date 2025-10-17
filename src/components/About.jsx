export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-100 text-gray-800 py-20 px-6 sm:px-12"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
          About Me
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          I'm a passionate <span className="font-semibold text-blue-600">React Developer</span> who enjoys
          turning ideas into real, functional, and beautiful web experiences.
          I’m constantly learning new tools and best practices to make my work
          cleaner, faster, and more impactful.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            React
          </span>
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            Tailwind CSS
          </span>
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            Node.js
          </span>
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            PostgreSQL
          </span>
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            Express
          </span>
        </div>
        <a
              href="/web~dev.pdf"
              download
              className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-300"
            >
              Download CV
            </a>
      </div>
    </section>
  );
}
