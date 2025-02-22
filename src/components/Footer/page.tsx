"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Frontend Development",
    "UI/UX Design",
    "Responsive Web Design",
    "Web Applications"
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#About" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { 
      icon: <FaLinkedin size={18} />, 
      href: "https://www.linkedin.com/in/noman-rajar-5351bb2b4"
    },
    { 
      icon: <FaGithub size={18} />, 
      href: "https://github.com/Mr-NOMAN-RAJAR"
    },
    { 
      icon: <FaInstagram size={18} />, 
      href: "https://www.instagram.com/noman_rajar10"
    },
    { 
      icon: <MdEmail size={18} />, 
      href: "mailto:nomanrajar13@gmail.com"
    },
    { 
      icon: <FaWhatsapp size={18} />, 
      href: "https://wa.me/+923151160244"
    }
  ];

  return (
    <footer className="bg-slate-900 pt-12 pb-6 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Noman Ali
            </h2>
            <p className="text-gray-400 text-sm">
              A passionate Frontend Developer specializing in creating modern and responsive web applications.
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800/50 text-gray-400 hover:text-cyan-400 hover:bg-slate-800 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-semibold">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 text-sm hover:text-cyan-400 transition-colors duration-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-semibold">Contact Info</h3>
            <div className="text-gray-400 text-sm space-y-2">
              <p>Email: nomanrajar13@gmail.com</p>
              <p>Phone: +92 3151160244</p>
              <p>Location: Karachi, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Noman Ali. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Designed & Built with ❤️ by Noman
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
