import React from "react";
import { IoMdArrowDown } from "react-icons/io";
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid for Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Branding Section */}
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-bold">Noman Ali</h2>
              <p className="text-gray-400">Frontend Developer</p>
              <p className="text-gray-400">
                Creating innovative and efficient solutions for the web.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold">Follow Me</h3>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/Mr-Noman-Rajar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <svg
                    className="w-6 h-6 text-gray-400 hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {/* GitHub Icon */}
                    <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.024c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.729.082-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.774.418-1.304.762-1.604-2.665-.305-5.466-1.334-5.466-5.933 0-1.312.468-2.382 1.235-3.222-.123-.304-.535-1.528.118-3.18 0 0 1.008-.323 3.3 1.23.957-.266 1.984-.398 3.006-.404 1.022.006 2.05.138 3.007.404 2.29-1.554 3.297-1.23 3.297-1.23.654 1.652.242 2.876.118 3.18.77.84 1.234 1.91 1.234 3.222 0 4.61-2.805 5.625-5.478 5.922.43.37.815 1.102.815 2.222v3.293c0 .32.22.694.824.576C20.565 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/Nomanrajar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <svg
                    className="w-6 h-6 text-gray-400 hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {/* LinkedIn Icon */}
                    <path d="M22.23 0H1.77C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.729V1.729C24 .774 23.208 0 22.23 0zM7.092 20.452H3.582V9.038h3.51v11.414zM5.337 7.631c-1.121 0-2.033-.916-2.033-2.044a2.035 2.035 0 012.033-2.043c1.121 0 2.034.916 2.034 2.043s-.914 2.044-2.034 2.044zM20.453 20.452h-3.51v-5.684c0-1.354-.027-3.097-1.886-3.097-1.888 0-2.176 1.474-2.176 2.998v5.783h-3.509V9.038h3.373v1.56h.048c.47-.892 1.617-1.832 3.329-1.832 3.558 0 4.213 2.34 4.213 5.38v6.307z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-10 pt-2 text-center">
            <p className="text-gray-400">
              © 2024 NomanPortfolio.com | All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
