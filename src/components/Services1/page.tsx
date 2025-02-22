"use client";
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaMobileAlt, FaChevronRight } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  skills: string[];
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Function to handle scroll and update active dot
  const handleScroll = () => {
    if (!scrollRef.current) return;
    
    const scrollPosition = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.offsetWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, [activeIndex]);

  const services = [
    {
      icon: <FaCode className="text-3xl text-cyan-400" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive web applications using modern technologies like React, Next.js, and TypeScript.",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: <FaPaintBrush className="text-3xl text-purple-400" />,
      title: "UI/UX Design",
      description: "Designing intuitive and visually appealing user interfaces with a focus on user experience and modern design principles.",
      skills: ["Figma", "Adobe XD", "Responsive Design", "Wireframing"]
    },
    {
      icon: <FaMobileAlt className="text-3xl text-pink-400" />,
      title: "Responsive Development",
      description: "Developing mobile-first websites that work flawlessly across all devices and screen sizes with optimal performance.",
      skills: ["Mobile-First", "Cross-Browser", "Performance", "PWA"]
    }
  ];

  return (
    <section id="services" className="bg-slate-950 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-3 block">Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What I Do Best
          </h2>
          {/* Mobile Scroll Indicator */}
          <div className="md:hidden flex items-center justify-center gap-2 text-gray-400 text-sm">
            <FaChevronRight className="animate-pulse" />
            <span>Scroll to see more</span>
            <FaChevronRight className="animate-pulse" />
          </div>
        </motion.div>

        {/* Services Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Services Horizontal Scroll - Mobile */}
        <div className="relative md:hidden">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory no-scrollbar"
          >
            {services.map((service, index) => (
              <div 
                key={index} 
                className="min-w-[280px] sm:min-w-[340px] flex-shrink-0 snap-center first:pl-4 last:pr-4"
              >
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
          {/* Scroll Indicators */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-1">
            {services.map((_, index) => (
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

      {/* Custom Scrollbar Styles */}
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
};

// ServiceCard Component
const ServiceCard = ({ service, index }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative group h-full"
  >
    {/* Card Background with Gradient Border */}
    <div className="absolute inset-0.5 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative bg-slate-900/90 rounded-2xl p-6 h-full border border-slate-800/60 group-hover:border-transparent transition-colors duration-300">
      {/* Service Icon */}
      <div className="inline-flex items-center justify-center p-3 mb-5 rounded-xl bg-slate-800/50 group-hover:bg-slate-800/80 transition-colors duration-300">
        {service.icon}
      </div>

      {/* Service Content */}
      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
        {service.title}
      </h3>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-5">
        {service.description}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {service.skills.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="px-2.5 py-1 text-xs font-medium bg-slate-800/80 text-cyan-400/90 rounded-md group-hover:bg-slate-800 group-hover:text-cyan-400 transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default Services;

