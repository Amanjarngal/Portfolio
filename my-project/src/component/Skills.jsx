import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-150 -50 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Title */}
        <h2 className="text-center text-4xl font-bold text-gray-800 sm:text-4xl">
          My Skills
        </h2>
        <p className="mt-4 text-center text-lg text-gray-500 text-pretty font-medium">
          A collection of tools and technologies I specialize in to build seamless user experiences.
        </p>

        {/* Skills Grid */}
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {/* HTML Skill */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
              alt="HTML"
              className="h-20 w-20 transform transition duration-300 hover:scale-110"
            />
            <h3 className="mt-4 text-lg font-medium  text-gray-500 text-pretty ">HTML</h3>
          </div>

          {/* CSS Skill */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
              alt="CSS"
              className="h-20 w-20 transform transition duration-300 hover:scale-110"
            />
            <h3 className="mt-4 text-lg  text-gray-500 text-pretty font-medium">CSS</h3>
          </div>
             
             {/* Skill 7 */}
      <div className="flex flex-col items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
          alt="Bootstrap"
          className="h-20 w-20 transform transition duration-300 hover:scale-110"
        />
        <h3 className="mt-4 text-lg  text-gray-500 text-pretty font-medium">Bootstrap</h3>
      </div>

          {/* JavaScript Skill */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
              alt="JavaScript"
              className="h-20 w-20 transform transition duration-300 hover:scale-110"
            />
            <h3 className="mt-4 text-lg  text-gray-500 text-pretty font-medium">JavaScript</h3>
          </div>

          {/* Tailwind CSS Skill */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
              alt="Tailwind CSS"
              className="h-20 w-20 transform transition duration-300 hover:scale-110"
            />
            <h3 className="mt-4 text-lg  text-gray-500 text-pretty font-medium">Tailwind CSS</h3>
          </div>

          {/* React Skill */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/919/919851.png"
              alt="React"
              className="h-20 w-20 transform transition duration-300 hover:scale-110"
            />
            <h3 className="mt-4 text-lg  text-gray-500 text-pretty font-medium">React</h3>
          </div>

          {/* Node.js Skill */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
              alt="Node.js"
              className="h-20 w-20 transform transition duration-300 hover:scale-110"
            />
            <h3 className="mt-4 text-lg  text-gray-500 text-pretty font-medium">Node.js</h3>
          </div>

          {/* MongoDB Skill */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/919/919836.png"
              alt="MongoDB"
              className="h-20 w-20 transform transition duration-300 hover:scale-110"
            />
            <h3 className="mt-4 text-lg  text-gray-500 text-pretty font-medium">MongoDB</h3>
          </div>

          {/* Git Skill */}
          <div className="flex flex-col items-center ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="Git"
              className="h-20 w-20 transform transition duration-300 hover:scale-110"
            />
            <h3 className="mt-4 text-lg  text-gray-500 text-pretty font-medium">Git</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
