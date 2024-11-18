"use client"; 

import React, { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header id="Home">
        {/* Navbar */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 right-0 z-10 flex bg-slate-950 bg-opacity-60 justify-between p-5 items-center text-white"
        >
          {/* Logo */}
          <h1 className="flex font-extrabold text-3xl sm:font-semibold pl-2 sm:pl-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
            NOMAN portfolio
          </h1>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="md:hidden block"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-4 sm:gap-14">
            <li className="relative sm:font-bold text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-green-400 hover:bg-gradient-to-tr hover:from-green-500 hover:to-cyan-500">
              <a href="#Home">Home</a>
            </li>
            <li className="sm:font-bold text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-green-400 hover:bg-gradient-to-tr hover:from-green-500 hover:to-cyan-500">
              <a href="#About">About</a>
            </li>
            <li className="sm:font-bold text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-green-400 hover:bg-gradient-to-tr hover:from-green-500 hover:to-cyan-500">
              <a href="#services">Services</a>
            </li>
            <li className="sm:font-bold text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-green-400 hover:bg-gradient-to-tr hover:from-green-500 hover:to-cyan-500">
              <a href="#Contect">Contact</a>
            </li>
          </ul>
        </motion.nav>

        {/* Sidebar (Mobile) */}
        <div
          className={`fixed top-0 left-0 h-full w-40 bg-slate-950 bg-opacity-90 text-white z-20 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300`}
        >
          <div className="p-5">
            <h2 className="text-2xl font-bold">Menu</h2>
          </div>
          <ul className="space-y-4 mt-6">
            <li>
              <a
                href="#Home"
                className="block px-4 py-2 hover:bg-slate-700"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#About"
                className="block px-4 py-2 hover:bg-slate-700"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block px-4 py-2 hover:bg-slate-700"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#Contect"
                className="block px-4 py-2 hover:bg-slate-700"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Overlay (to close sidebar on outside click) */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </header>
    </>
  );
};

export default Header;
