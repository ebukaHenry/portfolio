import profilePic from "../assets/profile.jpg.jpg";
export default function Hero() {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white px-4">
        <img
            src={profilePic}
            alt="Ebuka Henry"
            className="w-80 h-80 rounded-full border-4 border-blue-500 mx-4"
        />

    <div>
      <h1 className="text-4xl sm:text-6xl font-bold mb-4">
        Hi, I'm <span className="text-blue-400">Ebuka Henry</span>
      </h1>
      <h2 className="text-xl sm:text-2xl mb-6">A Passionate React Developer</h2>
      <p className="max-w-xl text-gray-300 mb-8">
        I build modern, responsive, and interactive web apps using React, Node.js, and Tailwind CSS. I love transforming ideas into functional and elegant digital experiences.
      </p>
      <div className="flex gap-6">
        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="border border-blue-400 hover:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Hire Me
        </a>
      </div>
      </div>
       
    </section>
  );
}
