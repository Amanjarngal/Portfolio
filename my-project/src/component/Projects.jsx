import React from 'react';
import TourGuidImage from '../assets/tourGuid.png'; // Example path for Tour Guide image
import BankiizardImage from '../assets/bankiizard.png'; // Example path for Bankiizard image
import TextEditorImage from '../assets/textEditor.png'; // Example path for Text Editor image

const projects = [
  {
    title: 'Tour Guide Website',
    description:
      'A full-stack web application to explore top destinations, book trips, hotel check-in/check-out, and manage itineraries seamlessly.',
    liveLink: 'https://tourguide-1-ym1n.onrender.com/',
    repoLink: 'https://github.com/Amanjarngal/TourGuide',
    image: TourGuidImage,
    linkedinPost: 'https://www.linkedin.com/posts/aman-jarngal_explorewithusonline-bookyouradventure-guidedtourexperience-activity-7241144522896728065-bfCM?utm_source=share&utm_medium=member_desktop',
  },
  {
    title: 'Bankiizard',
    description:
      'At Bankiizard, we are dedicated to providing you with the tools and resources you need to manage your finances effectively. Whether you’re looking to exchange currencies, find bank details using IFSC codes, or stay updated with the latest financial news, we’ve got you covered.',
    liveLink: 'https://bankiizard.onrender.com/',
    repoLink: 'https://github.com/Amanjarngal/Bankiizard',
    image: BankiizardImage,
    linkedinPost: 'https://www.linkedin.com/posts/aman-jarngal_frontenddevelopment-currencyconverter-financialnews-activity-7208784757076226049-qv8e?utm_source=share&utm_medium=member_desktop',
  },
  {
    title: 'TextEditor',
    description:
      'This project implements a rich text editor using the TipTap library with various formatting options and a customizable toolbar.',
    liveLink: 'https://lustrous-salamander-7014ce.netlify.app/',
    repoLink: 'https://github.com/Amanjarngal/TextEditor',
    image: TextEditorImage,
    linkedinPost: 'https://www.linkedin.com/posts/aman-jarngal_this-project-is-a-fully-customizable-text-activity-7280168648114151424-4zhF?utm_source=share&utm_medium=member_desktop',
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="border-e-gray-500 py-16 ">
      <div className="container mx-auto px-6 lg:px-20 ">
        {/* Section Title */}
        <h2 className="text-center  text-4xl font-semibold text-gray-800 sm:text-5xl">
          My Projects
        </h2>
        <p className="mt-4 text-center text-lg  text-gray-600 text-pretty font-medium">
          A showcase of my recent projects, featuring live demos and source code.
        </p>

        {/* Project Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-600  text-gray-500 text-pretty font-medium"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600">{project.description}</p>

                {/* Links */}
                <div className="mt-4 flex justify-between items-center">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 font-medium hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="h-6 w-6"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.2 1.87.85 2.33.65.07-.52.28-.85.51-1.05-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82a7.65 7.65 0 012-.27c.68 0 1.36.09 2 .27 1.52-1.03 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </a>
                  <a
                    href={project.linkedinPost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    LinkedIn Post
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
