import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-200 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-center text-4xl font-bold text-gray-800 sm:text-4xl">
          About Me
        </h2>
        <p className="mt-4 text-center text-lg text-gray-600 text-pretty font-medium ">
          A passionate developer with a knack for creating engaging and user-friendly experiences.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-12 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-lg bg-white p-6 shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Who I Am</h3>
            <p className="mt-4  text-gray-500 text-pretty font-medium">
            I'm a Full-Stack Developer and UI/UX enthusiast with a deep appreciation for clean code and elegant design. Dedicated to building efficient, scalable, and visually appealing solutions, I enjoy tackling challenges and finding creative ways to solve problems.
            </p>
          </div>
          {/* Card 2 */}
          <div className="rounded-lg bg-white p-6 shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">What I Do</h3>
            <p className="mt-4  text-gray-500 text-pretty font-medium">
              I specialize in crafting responsive websites, intuitive designs, and seamless user experiences.
            </p>
          </div>
          {/* Card 3 */}
          <div className="rounded-lg bg-white p-6 shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">My Vision</h3>
            <p className="mt-4  text-gray-500 text-pretty font-medium">
            To continuously learn, innovate, and inspire by contributing to impactful projects that make a difference. My goal is to stay at the forefront of technology while creating solutions that are not only functional but also leave a lasting impression.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
