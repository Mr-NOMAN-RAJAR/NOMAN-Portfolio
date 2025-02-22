'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="About"
      className="bg-slate-950 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
        >
          About Me
        </motion.h2>

        {/* Main Content */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* About Text */}
          <div className="flex-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-200">
                Frontend Developer & UI/UX Enthusiast
              </h3>
              
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                I'm a passionate Frontend Developer with expertise in creating responsive and intuitive web applications. With a strong foundation in modern web technologies and a keen eye for design, I transform ideas into seamless digital experiences.
              </p>
              
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                My approach combines clean code practices with creative problem-solving to build user-friendly interfaces that not only look great but also perform exceptionally well. I'm constantly learning and adapting to new technologies to stay at the forefront of web development.
              </p>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative w-64 h-64 lg:w-80 lg:h-80"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-2xl rotate-6"></div>
            <Image
              className="relative rounded-2xl object-cover w-full h-full"
              src="/image.png"
              alt="Noman Rajar - Frontend Developer"
              width={320}
              height={320}
              priority
            />
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#Contact"
            className="inline-block bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-1"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
