import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Chat from "./components/Chat";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useState } from "react";

export default function App() {

  return (
    <div>
    <>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    
    <Chat />
    </>
    </div>
    
  );
}
