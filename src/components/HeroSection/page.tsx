"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiOutlineDownload } from "react-icons/hi";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin, FaSquareInstagram } from "react-icons/fa6";

const HeroSection = () => {
  const socialLinks = [
    {
      href: "https://www.instagram.com/noman_rajar10",
      icon: <FaSquareInstagram />,
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/in/noman-rajar-5351bb2b4/",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/Mr-Noman-Rajar",
      icon: <VscGithub />,
      label: "GitHub",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12">
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse sm:flex-row items-center justify-between gap-8 sm:gap-12">
        {" "}
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center sm:text-left"
        >
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-purple-400 text-base sm:text-lg lg:text-xl mb-2"
          >
            Hello, it&apos;s me
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-300 mb-3"
          >
            NOMAN RAJAR
          </motion.h1>

          <motion.h2
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Faster delay between each character
        repeat: Infinity, // Loop the animation
        repeatDelay: 0.5, // Shorter delay before repeating
      },
    },
  }}
  className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-cyan-300 to-cyan-200 bg-clip-text text-transparent mb-4"
>
  {`I'm a Frontend Developer & Web Designer`.split("").map((char, index) => (
    <motion.span
      key={index}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ))}
</motion.h2>

          {/* <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-cyan-300 to-cyan-200 bg-clip-text text-transparent mb-4"
          >
            I&apos;m a Frontend Developer & Web Designer
          </motion.h2> */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mb-8"
          >
            I specialize in creating clean, efficient, and responsive web
            applications using TypeScript, JavaScript, HTML, CSS, and Node.js.
            Passionate about UI/UX, I love bringing ideas to life through
            seamless web experiences.
          </motion.p>

          {/* Social Links & Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-teal-300 hover:text-green-500 text-3xl sm:text-2xl md:text-3xl transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            <motion.a
              href="https://resume-builder-ten-red.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2.5 bg-transparent border-2 border-teal-300 hover:border-green-500 rounded-lg text-white transition-all duration-300"
            >
              <span>Download CV</span>
              <HiOutlineDownload className="text-xl" />
            </motion.a>
          </motion.div>
        </motion.div>
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0 w-[200px] sm:w-[250px] lg:w-[300px]"
        >
          <div className="relative rounded-full overflow-hidden border-4 border-green-400 shadow-lg shadow-green-400/50 transition-transform duration-300 hover:scale-105">
            <Image
              src="/image.png"
              alt="Noman Rajar"
              width={300}
              height={300}
              className="w-full h-auto rounded-full"
              priority
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default HeroSection;
