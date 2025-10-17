function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Tailwind CSS",
    "Git & GitHub",
  ];

  return (
    <section id="skills" className="py-16 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 hover:bg-blue-100 text-center rounded-lg shadow-sm hover:shadow-md transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
