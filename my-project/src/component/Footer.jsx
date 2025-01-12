import React from 'react';

export default function Footer() {
  // Function to scroll back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Footer Content */}
        <div className="flex flex-col items-center justify-between sm:flex-row sm:items-center">
          {/* Logo or Name */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-semibold">Aman Jarngal</h3>
            <p className="mt-2 text-sm">Full-Stack Developer | Designer</p>
          </div>

          {/* Social Links with Icons */}
          <div className="mt-6 sm:mt-0 sm:flex space-x-6">
            <a
              href="https://www.linkedin.com/in/aman-jarngal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400"
            >
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
            <a
              href="https://github.com/Amanjarngal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="mailto:Amanjarngal2004@gamil.com"
              className="text-gray-400 hover:text-indigo-400"
            >
              <i className="fas fa-envelope text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aman Jarngal. All rights reserved.</p>
        </div>

        {/* Back to Top Button */}
        <div className="mt-8 text-center">
          <button
            onClick={scrollToTop}
            className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition duration-300"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
