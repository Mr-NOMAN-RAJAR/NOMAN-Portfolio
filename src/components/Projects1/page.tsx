import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

function Project() {
  return (
    <div>
      <section id="projects" className="bg-slate-950  py-12 ">
        <h2 className=" text-3xl font-medium text-center mb-8 text-yellow-50">
          Projects
        </h2>
        <div className=" grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto px-4">
          <div className="  bg-gradient-to-br from-pink-400 via-sky-800 to-pink-400  p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-2 ">
              Dynamic Resume Builder
            </h3>
            <p className="text-gray-200 mb-4">
              A TypeScript-based app for dynamically generating and customizing
              resumes with real-time editing capabilities.
            </p>
            <ul className="flex flex-wrap gap-2 mb-4">
              <li className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                HTML5
              </li>
              <li className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                CSS
              </li>
              <li className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Tailwend CSS
              </li>
              <li className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Typescript
              </li>
              <li className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Next.js
              </li>
            </ul>
            <div className="flex justify-between items-center">
              <a
                href="https://resume-builder-tilv.vercel.app/"
                target="_blank"
                className="flex gap-1 items-center text-black hover:text-blue-100 font-bold"
              >
                Live Demo
                <BsBoxArrowUpRight />
              </a>
              <a
                href="https://github.com/username/resume-builder"
                target="_blank"
                className="text-gray-950 hover:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.798 8.205 11.387.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.727-4.043-1.61-4.043-1.61-.546-1.388-1.332-1.757-1.332-1.757-1.088-.744.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.832 2.807 1.303 3.492.997.108-.774.418-1.303.76-1.602-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.49 11.49 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.553 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.838 1.234 1.91 1.234 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.096.81 2.21 0 1.598-.014 2.887-.014 3.28 0 .32.215.694.825.576C20.565 21.794 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="   bg-gradient-to-bl from-pink-400 via-sky-800 to-pink-400  p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-2">
              Perfume-Brand-website
            </h3>
            <p className="text-gray-200 mb-4">
            Experience the art of fine fragrance with our perfume collection,
              crafted to evoke elegance, charm, and unforgettable memories,
              leaving a lasting impression wherever you go.
            </p>
            <ul className="flex flex-wrap gap-2 mb-4">
              <li className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                HTML5
              </li>
              <li className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                CSS
              </li>
              <li className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Tailwend CSS
              </li>
              <li className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Typescript
              </li>
              <li className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Next.js
              </li>
            </ul>
            <div className="flex justify-between items-center ">
              <a
                href="https://perfume-brand-website.vercel.app/"
                target="_blank"
                className="flex gap-1 items-center text-black font-semibold hover:text-blue-100 "
              >
                Live Demo
                <BsBoxArrowUpRight />
              </a>
              <a
                href="https://github.com/Mr-NOMAN-RAJAR/Perfume-Brand-Website"
                target="_blank"
                className="text-gray-950 hover:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.798 8.205 11.387.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.727-4.043-1.61-4.043-1.61-.546-1.388-1.332-1.757-1.332-1.757-1.088-.744.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.832 2.807 1.303 3.492.997.108-.774.418-1.303.76-1.602-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.49 11.49 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.553 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.838 1.234 1.91 1.234 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.096.81 2.21 0 1.598-.014 2.887-.014 3.28 0 .32.215.694.825.576C20.565 21.794 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>
          <div className=" bg-gradient-to-bl from-pink-400 via-sky-800 to-pink-400  p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-2">Todo List App</h3>
            <p className="text-gray-200 mb-4">
              An interactive to-do list application that helps users manage
              tasks, featuring smooth animations and persistent data.{" "}
            </p>
            <ul className="flex flex-wrap gap-2 mb-4">
              <li className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                HTML5
              </li>
              <li className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                CSS
              </li>
              <li className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Tailwend CSS
              </li>
              <li className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Typescript
              </li>
              <li className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Next.js
              </li>
            </ul>
            <div className="flex justify-between items-center ">
              <a
                href="https://todolist-app-kohl.vercel.app/"
                target="_blank"
                className="flex gap-1 items-center text-black font-semibold hover:text-blue-100 "
              >
                Live Demo
                <BsBoxArrowUpRight />
              </a>
              <a
                href="https://github.com/username/resume-builder"
                target="_blank"
                className="text-gray-950 hover:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.798 8.205 11.387.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.727-4.043-1.61-4.043-1.61-.546-1.388-1.332-1.757-1.332-1.757-1.088-.744.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.832 2.807 1.303 3.492.997.108-.774.418-1.303.76-1.602-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.49 11.49 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.553 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.838 1.234 1.91 1.234 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.096.81 2.21 0 1.598-.014 2.887-.014 3.28 0 .32.215.694.825.576C20.565 21.794 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="  bg-gradient-to-br from-pink-400 via-sky-800 to-pink-400  p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-200 mb-4">
              A responsive, visually appealing personal portfolio to showcase
              skills, projects, and achievements.{" "}
            </p>
            <ul className="flex flex-wrap gap-2 mb-4">
              <li className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                HTML5
              </li>
              <li className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                CSS
              </li>
              <li className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Tailwend CSS
              </li>
              <li className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Typescript
              </li>
              <li className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Next.js
              </li>
            </ul>
            <div className="flex justify-between items-center">
              <a
                href="https://noman-portfolioweb.vercel.app/"
                target="_blank"
                className="flex gap-1 items-center text-black font-bold hover:text-blue-100"
              >
                Live Demo
                <BsBoxArrowUpRight />
              </a>
              <a
                href="https://github.com/username/resume-builder"
                target="_blank"
                className="text-gray-950 hover:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.798 8.205 11.387.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.727-4.043-1.61-4.043-1.61-.546-1.388-1.332-1.757-1.332-1.757-1.088-.744.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.832 2.807 1.303 3.492.997.108-.774.418-1.303.76-1.602-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.49 11.49 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.553 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.838 1.234 1.91 1.234 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.096.81 2.21 0 1.598-.014 2.887-.014 3.28 0 .32.215.694.825.576C20.565 21.794 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
