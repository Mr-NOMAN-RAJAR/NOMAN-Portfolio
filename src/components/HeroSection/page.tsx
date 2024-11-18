"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiOutlineDownload } from "react-icons/hi";
import { VscGithub } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <>
      <main>
        <div className=" bg-slate-950 sm:flex sm:px-32 px-4 py-10 sm:pt-44 sm:py-32 items-center ">
          <motion.div
            initial={{ opacity: 0, x: -100 }} // Slide from left
            animate={{ opacity: 1, x: 0 }} // Fade in and slide to center
            transition={{ duration: 1 }}
            className="sm:hidden sm:ml-48  sm:mt-20 ml-48 mt-14 p-1 justify-end items-center sm:m-0  "
          >
            <Image
              src="/image.png"
              alt="image"
              width={200}
              height={200}
              className="rounded-full shadow-lg shadow-green-400 border-green-400 border-2 p-1 "
            />
          </motion.div>

          <div className="text-white pr-4 ">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="sm:text-2xl text-xs text-purple-400 opacity-95"
            >
              hello its me,
            </motion.h3>

            <motion.h1
              initial={{ opacity: 0, x: -100 }} // Slide from left
              animate={{ opacity: 1, x: 0 }} // Fade in and slide to center
              transition={{ duration: 1, delay: 0.5 }}
              className="text-2xl py-1 name-shadow sm:text-4xl font-semibold  text-cyan-300 "
            >
              NOMAN RAJAR
            </motion.h1>

            <motion.h3
              initial={{ opacity: 0, y: 20 }} // Fade in with upward movement
              animate={{ opacity: 1, y: 0 }} // Final position
              transition={{ duration: 1, delay: 0.7 }}
              className="sm:text-2xl text-slate-900 "
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-tl name-shadow from-cyan-300 to-cyan-200 font-light  text-frontend text-2xl sm:text-3xl opacity-95">
                I&apos;m a Frontend Developer & Web Designer
              </span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }} // Fade in with upward movement
              animate={{ opacity: 1, y: 0 }} // Final position
              transition={{ duration: 1, delay: 1 }}
              className="text-sm sm:text-base leading-relaxed text-justify  text-gray-400 mt-2"
            >
              a passionate front-end web developer. I have honed my skills in a
              variety of technologies, including TypeScript, JavaScript, HTML,
              CSS, and Node.js. I love creating clean, efficient, and responsive
              websites that provide a great user experience. Whether it is
              coding up a new feature or optimizing performance, I am always
              eager to take on new challenges and continue learning in this
              ever-evolving field.
            </motion.p>

            <div className="flex justify-between md:justify-normal md:gap-2 sm:gap-4 sm:mt-6 mt-4">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }} // Initially small
                animate={{ opacity: 1, scale: 1 }} // Fade in and scale to normal size
                transition={{ duration: 0.5, delay: 1.5 }}
                className="  hover:text-gray-500  "
              >
                <a
                  href="https://www.instagram.com/noman_rajar10/?__pwa=1"
                  target="_blank"
                >
                  <FaSquareInstagram className="size-8 sm:size-10 items-center text-teal-300 hover:text-green-500" />
                </a>
              </motion.button>

              <motion.button
                initial={{ opacity: 0, scale: 0.8 }} // Initially small
                animate={{ opacity: 1, scale: 1 }} // Fade in and scale to normal size
                transition={{ duration: 0.5, delay: 1.5 }}
                className=" "
              >
                <a href="https://linkedin.com/in/Nomanrajar" target="_blank">
                  <FaLinkedin className="size-8 sm:size-10  text-teal-300 hover:text-green-500" />{" "}
                </a>
              </motion.button>

              <motion.button
                initial={{ opacity: 0, scale: 0.8 }} // Initially small
                animate={{ opacity: 1, scale: 1 }} // Fade in and scale to normal size
                transition={{ duration: 0.5, delay: 1.5 }}
                className=" "
              >
                <a href="https://github.com/Mr-Noman-Rajar" target="_blank">
                  {" "}
                  <VscGithub className="size-8 sm:size-10 items-center text-teal-300 hover:text-green-500" />{" "}
                </a>
              </motion.button>

              <a
                href="https://resume-builder-ten-red.vercel.app/"
                target="_blank"
              >
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }} // Initially small
                  animate={{ opacity: 1, scale: 1 }} // Fade in and scale to normal size
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="flex items-center border-teal-300 hover:border-green-500 bg-black border-y-2 text-xs sm:text-base p-2 px-6 rounded-lg  font-light "
                >
                  <span className="pr-1 text-white ">Downlod Cv </span>{" "}
                  <HiOutlineDownload className="sm:size-6 " />
                </motion.button>
              </a>
            </div>
          </div>

          {/* Profile Image for Larger Screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.1 }} // Slide from right
            animate={{ opacity: 1, scale: 1 }} // Fade in and slide to center
            transition={{ duration: 0, delay: 0 }}
            className="hidden sm:block ml-36 sm:m-0 rounded-full shadow-lg p-1 shadow-green-400 border-green-400 border-4 transform hover:scale-105 transition duration-1000"
          >
            <Image
              src="/image.png"
              alt="image"
              width={800} // Increase the size for larger screens
              height={200} // Increase the size for larger screens
              className="rounded-full"
            />
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
