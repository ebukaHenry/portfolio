/**import hotelInventory from "../assets/hotel-inventory";
import weatherApp from "../assets/weather-app";
import eCommerce from "../assets/e-commerce";
**/

function Projects() {
  const projects = [
     {
      title: "Hotel Inventory App",
      description: "A full-stack e-commerce store built with React, Node.js, and PostgreSQL.",
      image: "/src/assets/hotel-inventory.png",
      demo: "https://maradis-inventory-client.vercel.app/",
      github: "https://github.com/ebukaHenry/maradis-inventory",
    },
    {
      title: "Weather App",
      description: "A React app that fetches word definitions from a public API and displays them cleanly.",
      image: "/src/assets/weather-app.png",
      demo: "https://timer-app-tau.vercel.app",
      github: "https://github.com/ebukaHenry/timer-app",
    },
    {
      title: "Mini E-Commerce Store",
      description: "A full-stack e-commerce store built with React, Node.js, and PostgreSQL.",
      image: "/src/assets/e-commerce.png",
      demo: "https://mini-store-blond.vercel.app",
      github: "https://github.com/ebukaHenry/mini-store",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
