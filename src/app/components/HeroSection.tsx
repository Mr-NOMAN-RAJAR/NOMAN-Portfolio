import React from "react";
import Image from "next/image";
import profilimage from "../../public/image.png";
import bgcover from "../../public/blue-background.jpg";


const HeroSection = () => {
  return (
    <>
      <main>
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={bgcover}
          alt="Contact Background"
          layout="fill"
          objectFit="cover"
          // className="opacity-60"
        />
      </div>
        <div className=" sm:flex  sm:px-32 px-10 py-10 sm:pt-44 sm:py-32 items-center">
        
          <Image
            className=" sm:hiddden ml-48 mt-20 p-1 justify-end item:center sm:hidden  sm:m-0 rounded-full shadow-lg  shadow-green-400  border-green-400  border-2 transform hover:scale-105 transition duration-1000"
            src={profilimage}
            alt="image"
            width={200}
            height={200}
          />
          <div className=" text-white pr-4 ">
            <h3 className=" sm:text-2xl text-purple-400 opacity-95">hello it's me,</h3>
            <h1 className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-white to-cyan-500 opacity-95">
              NOMAN RAJAR
            </h1>
            <h3 className="sm:text-2xl text-slate-900 typing-container ">
              <span className="typing-text text-frontend text-2xl sm:text-3xl opacity-95 ">
                I'm a Frontend Developer{" "}
                <span className="typing-text text-designer text-2xl sm:text-3xl opacity-95">
                  {" "}
                  & Web Designer
                </span>{" "}
              </span>
            </h3>

            <p className="text-sm sm:text-base leading-relaxed text-justify opacity-80 text-white mt-2">
              a passionate front-end web developer. I have honed my skills in a
              variety of technologies, including TypeScript, JavaScript, HTML,
              CSS, and Node.js. I love creating clean, efficient, and responsive
              websites that provide a great user experience. Whether it is
              coding up a new feature or optimizing performance, I am always
              eager to take on new challenges and continue learning in this
              ever-evolving field.
            </p>
            <div className="flex">
              <button className=" border-green-500 hover:border-amber-500  bg-black   border-y-2 text-xs sm:text-base p-2 px-6 rounded-full mt-5   mr-5  transform hover:scale-x-105 transition duration-500">
                GitHub
              </button>
              <button className="  border-green-500 hover:border-amber-400  bg-black  border-y-2 text-xs sm:text-base p-2  px-5 rounded-3xl mt-5 transform hover:scale-x-105 transition duration-500 ">
                Linkedin
              </button>
            </div>
          </div>

          <Image
            className="hidden sm:block  ml-36 sm:m-0 rounded-full shadow-lg p-1 shadow-green-400  border-green-400  border-4 transform hover:scale-105 transition duration-1000"
            src={profilimage}
            alt="image"
            width={300}
            height={200}
          />
        </div>
      </main>
    </>
  );
};

export default HeroSection;
