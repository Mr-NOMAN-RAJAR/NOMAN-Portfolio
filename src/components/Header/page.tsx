"use client"; 

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#Home", label: "Home" },
    { href: "#About", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#Contect", label: "Contect" }
  ];

  return (
    <header id="Home">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-slate-950 shadow-lg' : 'bg-slate-950/60 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <motion.h1 
              whileHover={{ scale: 1.05 }}
              className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 cursor-pointer"
            >
              NOMAN portfolio
            </motion.h1>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <motion.li 
                  key={link.label}
                  whileHover={{ scale: 1.1 }}
                  className="relative group"
                >
                  <a
                    href={link.href}
                    className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-green-400 hover:from-green-500 hover:to-cyan-500 transition-all duration-300"
                  >
                    {link.label}
                  </a>
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-300 to-green-400 group-hover:w-full transition-all duration-300 -translate-x-1/2 group-hover:left-0 group-hover:translate-x-0"></span>
                </motion.li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden text-white p-2 rounded-lg hover:bg-slate-800/50"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ 
            opacity: isOpen ? 1 : 0,
            x: isOpen ? 0 : -100
          }}
          transition={{ duration: 0.3 }}
          className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-950/95 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-slate-800 hover:text-cyan-400 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </header>
  );
};

export default Header;
