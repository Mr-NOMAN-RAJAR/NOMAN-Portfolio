import React from "react";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdArrowDown } from "react-icons/io";
import { VscGithub } from "react-icons/vsc";
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-bold">Noman Ali</h2>
              <p className="text-gray-400">Frontend Developer</p>
              <p className="text-gray-400">
                Creating innovative and efficient solutions for the web.
              </p>
            </div>

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

            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold">Follow Me</h3>
              <div className="flex space-x-2">
                <a
                  href="https://github.com/Mr-Noman-Rajar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <svg
                    className="w-12 h-12 text-gray-400 hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <VscGithub />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/Nomanrajar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <svg
                    className="w-12 h-12 text-gray-400 hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <CiLinkedin />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/noman_rajar10/?__pwa=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <svg
                    className="w-12 h-12 text-gray-400 hover:text-white "
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <CiInstagram />
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <svg
                    className="w-12 h-12 text-gray-400 hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <FaXTwitter />
                  </svg>
                </a>
              </div>
            </div>
          </div>

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
