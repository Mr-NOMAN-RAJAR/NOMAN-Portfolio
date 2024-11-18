import Image from "next/image";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaWhatsappSquare,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Contact = () => {
  return (
    <section
      id="Contect"
      className="relative py-16 bg-gradient-to-br from-orange-200 via-sky-800 to-pink-600 "
    >
      <h2 className="text-3xl font-bold  text-center ml-10 mb-6 text-white ">
        CONTECT ME
      </h2>
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src = "/bgcover.jpg"
          alt="Contact Background"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
        />
      </div>

      <div className="relative max-w-5xl mx-auto p-8  grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="justify-items-flex-center bg-opacity-90 shadow-lg rounded-lg p-6 space-y-6 transform hover:-translate-y-2 transition-transform duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Get In Touch
          </h2>
          <p className="text-gray-100 text-center mb-8">
            Reach out through any of the following methods:
          </p>
          <div className="space-y-4 align-bottom content-end">
            <div className="text-gray-100">
              <strong>Address:</strong> 1234 Street, Karachi, Pakistan
            </div>
            <div className="text-gray-100">
              <strong>Email:</strong> nomanrajar13@gmail.com
            </div>
            <div className="text-gray-100">
              <strong>Phone:</strong> +1 234 567 8900
            </div>
          </div>

          <div className="flex  sm:space-x-8 space-x-2 mt-16 ">
            <a
              href="https://www.linkedin.com/in/noman-rajar-5351bb2b4/?lipi=urn%3Ali%3Apage%3Afeed_index_index%3B5aa556d8-bf4e-4d57-b1cd-eee6cc1d81be"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaLinkedin size={34} />
            </a>
            <a
              href="https://github.com/Mr-NOMAN-RAJAR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="mailto:nomanrajar13@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-700 transition-colors"
            >
              <GrMail size={34} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-500 transition-colors"
            >
              <FaWhatsappSquare size={34} />
            </a>
            <a
              href="https://web.facebook.com/noman.rajar.54"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 transition-colors"
            >
              <FaFacebook size={34} />
            </a>
          </div>
        </div>

        <div className="bg-slate- bg-opacity-90 shadow-lg rounded-lg p-6 space-y-6 transform hover:-translate-y-2 transition-transform duration-300">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Send a Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32 "
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
