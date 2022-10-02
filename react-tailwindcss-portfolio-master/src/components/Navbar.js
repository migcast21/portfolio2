import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center  sm:text-left">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Miguel Castaneda
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 md:items-start	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#contact" className="mr-5 hover:text-white">
            Contact
          </a>
          </nav>
          <nav className="flex flex-wrap items-center text-base justify-center">
          <a href="www.linkedin.com/in/migcastaneda" className="mr-5 hover:text-white">
            LinkedIn
          </a>
          <a href="https://github.com/migcast21/" className="mr-5 hover:text-white">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
