import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 flex-col items-center">
        <div className="lg:flex-grow md:w-1/2  flex flex-col md:items-center md:text-center sm:items-center sm:text-center mb-16 md:mb-0">
          <h1 className="title-font md:text-4xl text-3xl mb-4 font-medium text-white welcome">
            Welcome.
          </h1> 
          <p className="mb-8 leading-relaxed">
            My name is Miguel Castaneda. Primarily a back-end developer, I build interactive websites that deliver a unique and pleasant experience for the user. My interests lie in solving problems and figuring out how things work. Most recently I've been creating apps with React and Ruby on Rails.
          </p>
          <div className="flex text-center justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-red-500 border-0 py-2 px-5 focus:outline-none hover:bg-gray-700 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-50 bg-blue-300 border-0 py-2 px-5 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              View Past Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
