"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone, MdSend } from "react-icons/md";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MdLocationOn className="text-2xl" />,
      title: "Location",
      details: "Karachi, Pakistan"
    },
    {
      icon: <MdEmail className="text-2xl" />,
      title: "Email",
      details: "nomanrajar13@gmail.com"
    },
    {
      icon: <MdPhone className="text-2xl" />,
      title: "Phone",
      details: "+92 3151160244"
    }
  ];

  return (
    <section id="Contect" className="bg-slate-950 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-3 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 mb-4">
            Contact Me
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello. I'm always open to discussing new projects and ideas.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left Side - Info */}
          <div className="lg:w-2/5 lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Let&apos;s Talk
                </h2>
                <p className="text-gray-400 text-sm">
                  Feel free to reach out for collaborations or just a friendly hello
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800/50 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-xs">{info.title}</h4>
                      <p className="text-white text-sm">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 pt-2">
                {[
                  { icon: <FaLinkedin size={18} />, url: "https://www.linkedin.com/in/noman-rajar-5351bb2b4" },
                  { icon: <FaGithub size={18} />, url: "https://github.com/Mr-NOMAN-RAJAR" },
                  { icon: <MdEmail size={18} />, url: "mailto:nomanrajar13@gmail.com" },
                  { icon: <FaWhatsapp size={18} />, url: "https://wa.me/+923151160244" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800/50 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-3/5 w-full"
          >
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/50">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white text-xs mb-1.5 block">Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-800/50 rounded-lg text-white text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
                    />
                  </div>
                  <div>
                    <label className="text-white text-xs mb-1.5 block">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 bg-slate-800/50 rounded-lg text-white text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white text-xs mb-1.5 block">Subject</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-slate-800/50 rounded-lg text-white text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
                  />
                </div>

                <div>
                  <label className="text-white text-xs mb-1.5 block">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 bg-slate-800/50 rounded-lg text-white text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm rounded-lg hover:opacity-90 transition-all duration-300"
                >
                  Send Message
                  <MdSend className="text-lg" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

