'use client';
import React, { useState, useRef, useEffect } from "react";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

const projects = [
  {
    title: "Dynamic Resume Builder",
    description: "A TypeScript-based app for dynamically generating and customizing resumes with real-time editing capabilities. Features include multiple templates, live preview, and PDF export.",
    tech: ["HTML5", "CSS", "Tailwind CSS", "TypeScript", "Next.js"],
    liveDemo: "https://resume-builder-tilv.vercel.app/",
    github: "https://github.com/username/resume-builder",
    image: "/resume-builder.png"
  },
  {
    title: "Perfume Brand Website",
    description: "Experience the art of fine fragrance with our perfume collection, crafted to evoke elegance, charm, and unforgettable memories, leaving a lasting impression wherever you go.",
    tech: ["HTML5", "CSS", "Tailwind CSS", "TypeScript", "Next.js"],
    liveDemo: "https://perfume-brand-website.vercel.app/",
    github: "https://github.com/Mr-NOMAN-RAJAR/Perfume-Brand-Website",
    image: "/perfume.png"
  },
  {
    title: "Todo List App",
    description: "An interactive to-do list application that helps users manage tasks, featuring smooth animations, persistent data storage, and intuitive task management.",
    tech: ["HTML5", "CSS", "Tailwind CSS", "TypeScript", "Next.js"],
    liveDemo: "https://todolist-app-kohl.vercel.app/",
    github: "https://github.com/username/resume-builder",
    image: "/todolist.png"
  },
  {
    title: "Portfolio Website",
    description: "A responsive, visually appealing personal portfolio showcasing skills, projects, and achievements with modern design and smooth animations.",
    tech: ["HTML5", "CSS", "Tailwind CSS", "TypeScript", "Next.js"],
    liveDemo: "https://noman-portfolioweb.vercel.app/",
    github: "https://github.com/username/resume-builder",
    image: "/portfolio.png"
  }
];

function Project() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollPosition = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.offsetWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, [activeIndex]);

  return (
    <section id="projects" className="bg-slate-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 mb-4">
            My Projects
          </h2>
          {/* Mobile Scroll Indicator */}
          <div className="lg:hidden flex items-center justify-center gap-2 text-gray-400 text-sm">
            <FaChevronRight className="animate-pulse" />
            <span>Scroll to explore projects</span>
            <FaChevronRight className="animate-pulse" />
          </div>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden lg:block space-y-20">
          {projects.map((project, index) => (
            <DesktopProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Mobile View with Horizontal Scroll */}
        <div className="lg:hidden relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-[300px] sm:min-w-[400px] flex-shrink-0 snap-center first:pl-4 last:pr-4"
              >
                <MobileProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
          {/* Scroll Indicators */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
            {projects.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-cyan-400 scale-110' 
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

const DesktopProjectCard = ({ project, index }: { project: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
    className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8 items-center`}
  >
    {/* Project Image */}
    <div className="w-full lg:w-3/5 relative group">
      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
      <div className="relative rounded-xl overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-cover rounded-xl shadow-2xl transform group-hover:scale-105 transition duration-500"
        />
      </div>
    </div>

    {/* Project Info */}
    <div className="w-full lg:w-2/5 space-y-4">
      <motion.h3 
        className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300"
        whileHover={{ scale: 1.02 }}
      >
        {project.title}
      </motion.h3>

      <p className="text-gray-300 text-base md:text-lg leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 pt-2">
        {project.tech.map((tech: string, techIndex: number) => (
          <span
            key={techIndex}
            className="px-3 py-1 text-sm font-medium rounded-full bg-slate-800/50 text-cyan-300 border border-cyan-800/50"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-6">
        <motion.a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
        >
          Live Demo
          <BsBoxArrowUpRight />
        </motion.a>

        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 rounded-lg border border-cyan-700 hover:border-cyan-500 text-gray-300 hover:text-cyan-300 font-medium transition-all duration-300"
        >
          Code
          <BsGithub size={21} />
        </motion.a>
      </div>
    </div>
  </motion.div>
);

const MobileProjectCard = ({ project, index }: { project: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-slate-900/50 rounded-xl overflow-hidden border border-slate-800/50"
  >
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-[200px] object-cover transform group-hover:scale-105 transition duration-500"
      />
    </div>

    <div className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300">
        {project.title}
      </h3>

      <p className="text-gray-300 text-sm line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech: string, techIndex: number) => (
          <span
            key={techIndex}
            className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-800/50 text-cyan-300 border border-cyan-800/50"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 pt-4">
        <motion.a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm font-medium hover:opacity-90 transition-all duration-300"
        >
          Live Demo
          <BsBoxArrowUpRight size={14} />
        </motion.a>
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-700 text-gray-300 hover:text-cyan-300 text-sm font-medium transition-all duration-300"
        >
          Code
          <BsGithub size={14} />
        </motion.a>
      </div>
    </div>
  </motion.div>
);

export default Project;
