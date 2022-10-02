import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import "./styles.css"

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-600 body-font">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
