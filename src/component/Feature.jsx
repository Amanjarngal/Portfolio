import Aman from '../assets/Aman.png';

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-0 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-3">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-20 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:ml-16">
          <div className="lg:pr-12 lg:pt-12">
            <div className="text-center">
              <h2 className="text-base/7 font-semibold text-indigo-600">
                Hi, I am
              </h2>
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                Aman Jarngal
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                Full-Stack Development, User-Friendly Design, and a passion for
                creating innovative solutions.
              </p>

              {/* Social Links */}
              <div className="mt-6 flex justify-center space-x-6">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/aman-jarngal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                  aria-label="LinkedIn Profile"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.5c0-1.108-.896-2-2-2s-2 .892-2 2v4.5h-3v-9h3v1.5c.842-1.259 2.426-2 4-2 2.481 0 4.5 2.019 4.5 4.5v5z" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Amanjarngal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-900"
                  aria-label="GitHub Profile"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.2 1.87.85 2.33.65.07-.52.28-.85.51-1.05-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82a7.65 7.65 0 012-.27c.68 0 1.36.09 2 .27 1.52-1.03 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:Amanjarngal2004@gamil.com"
                  className="text-red-600 hover:text-red-800"
                  aria-label="Email"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 13.5l-8-6.5h16l-8 6.5zm0 2.5l-8-6.5v11h16v-11l-8 6.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={Aman}
            width={460}
            height={500}
            className="w-35 h-35 rounded-full shadow-xl ring-1 ring-gray-400/10"
          />
        </div>
      </div>
    </div>
  );
}
