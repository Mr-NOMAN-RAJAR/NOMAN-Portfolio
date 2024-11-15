"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiOutlineDownload } from "react-icons/hi";


const HeroSection = () => {
  return (
    <>
      <main>
        <div className="bg-slate-950 sm:flex sm:px-32 px-10 py-10 sm:pt-44 sm:py-32 items-center">
        
          <motion.div
            initial={{ opacity: 0, x: -100 }} // Slide from left
            animate={{ opacity: 1, x: 0 }} // Fade in and slide to center
            transition={{ duration: 1 }}
            className="sm:hidden ml-48 mt-20 p-1 justify-end items-center sm:m-0 rounded-full shadow-lg shadow-green-400 border-green-400 border-2 "
          >
            <Image
              src="/image.png"
              alt="image"
              width={250}  
              height={250} 
              className="rounded-full"
            />
          </motion.div>

          
          <div className="text-white pr-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.3 }}
              className="sm:text-2xl text-purple-400 opacity-95"
            >
              hello its me,
            </motion.h3>
            
            <motion.h1
              initial={{ opacity: 0, x: -100 }} // Slide from left
              animate={{ opacity: 1, x: 0 }} // Fade in and slide to center
              transition={{ duration: 1, delay: 0.5 }}
              className="text-2xl sm:text-4xl font-semibold  text-transparent bg-clip-text bg-gradient-to-t from-slate-100 to-teal-500 opacity-75"
            >
              NOMAN RAJAR
            </motion.h1>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }} // Fade in with upward movement
              animate={{ opacity: 1, y: 0 }} // Final position
              transition={{ duration: 1, delay: 0.7 }}
              className="sm:text-2xl text-slate-900 "
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-tl from-white to-cyan-500 font-semibold font-serif  text-frontend text-2xl sm:text-3xl opacity-95">
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

            <div className="flex">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }} // Initially small
                animate={{ opacity: 1, scale: 1 }} // Fade in and scale to normal size
                transition={{ duration: 0.5, delay: 1.3 }}
                className="flex items-center border-green-500 hover:border-amber-500 bg-black border-y-2 text-xs sm:text-base p-2 px-4 rounded-full mt-5 mr-2 font-extralight "
              >
                 <span className="pr-1">Hair Me </span>

              </motion.button>
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }} // Initially small
                animate={{ opacity: 1, scale: 1 }} // Fade in and scale to normal size
                transition={{ duration: 0.5, delay: 1.5 }}
                className="flex items-center border-green-500 hover:border-amber-400 bg-black border-y-2 text-xs sm:text-base p-2  rounded-3xl mt-5 font-extralight "
              >
                <span className="pr-1">Downlod Cv   </span>     <HiOutlineDownload className="size-5 " />


              </motion.button>
            </div>
          </div>

          {/* Profile Image for Larger Screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.1  }} // Slide from right
            animate={{ opacity: 1, scale: 1 }} // Fade in and slide to center
            transition={{ duration: 0, delay: 0 }}
            className="hidden sm:block ml-36 sm:m-0 rounded-full shadow-lg p-1 shadow-green-400 border-green-400 border-4 transform hover:scale-105 transition duration-1000"
          >
            <Image
              src="/image.png"
              alt="image"
              width={800}  // Increase the size for larger screens
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
