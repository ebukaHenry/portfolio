import { useState, useEffect } from "react";
import {FiMenu, FiX} from "react-icons/fi";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center py-6 md:px-12 py-4">
        <h1 className="text-2xl font-bold text-blue-600 p-4">My Portfolio</h1>
        <ul className="hidden md:flex space-x-8 font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`${
                  activeSection === item.id
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600"
                } hover:text-blue-600 transition duration-300`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
            {isOpen ? (
                <FiX  className="text-3xl cursor-pointer"
                onClick={()=> setIsOpen(false)}/>
            ) : (
                <FiMenu className="text-3xl cursor-pointer" 
                onClick={()=> setIsOpen(true)}/>
            )}
        </div>
      </div>
      {isOpen && (
        <ul className="flex flex-col items-center bg-white tex-gray-800 font-medium space-y-6 py-8 md:hidden shadow-md">
            <li><a href="#about" onClick={()=> setIsOpen(false)}>About</a></li>
            <li><a href="#projects" onClick={()=> setIsOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={()=> setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
