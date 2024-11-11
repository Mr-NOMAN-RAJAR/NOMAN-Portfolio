import React from "react";
import Image from "next/image";
import profilimage from "../../public/image.png";

const About = () => {
  return (
    <>

      <section
      
        id="About"
        className="bg-gray-950 py-20 px-6 md:px-10 lg:px-20 text-white"
      >
        
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl  text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            About Me
          </h2>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Profile Image */}
            <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl border-4 border-indigo-500">
              <Image
                className="scale-x-[-1] w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl  border-gray-300"
                src={profilimage}
                alt="image"
                width={150}
                height={150}
              />
            </div>

            {/* About Text */}
            <div className="text-center md:text-left max-w-lg">
              <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-300">
                Hi, I’m{" "}
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
                  Noman
                </span>
                . As a dedicated web developer, I bring together skills in{" "}
                <span className="font-semibold">HTML, CSS, TypeScript</span>,
                and more. My goal is to design engaging, high-quality web
                experiences that meet modern standards.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-300">
                With a strong foundation in web technologies, I continually
                strive to learn and apply the latest trends in development. I
                believe in the power of clean code and thoughtful design to
                create intuitive user experiences.
              </p>

              {/* Skills */}
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Skills
              </h3>
              <ul className="flex flex-wrap gap-4 text-white font-medium">
                <li className="bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-2 rounded-full shadow-md">
                  HTML
                </li>
                <li className="bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-2 rounded-full shadow-md">
                  CSS
                </li>
                <li className="bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-2 rounded-full shadow-md">
                  Tailwend CSS
                </li>
                <li className="bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-2 rounded-full shadow-md">
                  JavaScript
                </li>
                <li className="bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-2 rounded-full shadow-md">
                  TypeScript
                </li>
                <li className="bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-2 rounded-full shadow-md">
                  React
                </li>
                <li className="bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-2 rounded-full shadow-md">
                  Next.js
                </li>
                <li className="bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-2 rounded-full shadow-md">
                  Figma
                </li>

                {/* Additional skills */}
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <a
              href="#Contact"
              className="inline-block bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-10 py-3 text-lg font-semibold rounded-full shadow-lg hover:from-pink-600 hover:to-indigo-600 transition-colors"
            >
              Connect with Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
