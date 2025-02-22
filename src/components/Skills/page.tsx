"use client";
import React from "react";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiFramer, SiGit } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaFigma, FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";
 
const Skills = () => {
  const skills = [
    { icon: <IoLogoHtml5 className="text-[#E34F26]" />, name: "HTML5" },
    { icon: <IoLogoCss3 className="text-[#1572B6]" />, name: "CSS3" },
    { icon: <IoLogoJavascript className="text-[#F7DF1E]" />, name: "JavaScript" },
    { icon: <BiLogoTypescript className="text-[#3178C6]" />, name: "TypeScript" },
    { icon: <FaReact className="text-[#61DAFB]" />, name: "React" },
    { icon: <TbBrandNextjs className="text-white" />, name: "Next.js" }, 
    { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind" },
    { icon: <SiFramer className="text-[#0055FF]" />, name: "Framer" },
    { icon: <FaFigma className="text-[#F24E1E]" />, name: "Figma" },
    { icon: <SiGit className="text-[#F05032]" />, name: "Git" }
  ];

  return (
    <section id="skills" className="bg-slate-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400"
        >
          My Skills
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3 bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-800/50 transition-all duration-300"
            >
              <span className="text-4xl">{skill.icon}</span>
              <span className="text-gray-300 font-medium text-sm md:text-base">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Bars for Skill Levels */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { name: "Frontend Development", level: 90 },
            { name: "UI/UX Design", level: 85 },
            { name: "Responsive Design", level: 95 },
            { name: "Clean Code", level: 88 }
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="flex justify-between text-sm text-gray-300">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-teal-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 