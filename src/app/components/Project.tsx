import React from "react";
import Image from "next/image";
import todolist from "../../public/todo.webp";
import todolist2 from "../../public/Todolistapp.webp";
import countdowntaimer from "../../public/randa-marzouk-ilwI-AIAQr4-unsplash.jpg";

const Project = () => {
  return (
    <>
      {/* projects */}

      <p
        id="project"
        className="text-center text-3xl font-serif text-sky-300  bg-slate-950 py-2 border-y border-gray-500 "
      >
        Projects ShowCase
      </p>

      <main className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-slate-950 px-20 py-10 sm:px-60 ">
        <div className=" border border-emerald-500 hover:border-amber-600 bg-cyan-300 bg-gradient-to-r from-pink-500 to-blue-500 text-center rounded-lg shadow-lg  hover:shadow-2xl transform hover:scale-105 transition duration-300  ">
          <Image
            className="bg-cover bg-center rounded-lg"
            src={todolist}
            alt="image"
            width={600}
            height={200}
          /> <a href="https://todolist-app-kohl.vercel.app/">Todo list app</a>
         
        </div>
        <div className="border border-emerald-500 hover:border-amber-600 bg-gradient-to-r from-pink-500 to-blue-500  bg-cyan-300 text-center rounded-lg shadow-lg  hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <Image
            className=" bg-cover bg-center rounded-lg"
            src={todolist2}
            alt="image"
            width={600}
            height={200}
          />
          <h1 className="relative ">Todo list app </h1>
        </div>
        <div className="border border-emerald-500 hover:border-amber-600 bg-cyan-300 bg-gradient-to-r from-pink-500 to-blue-500  text-center rounded-lg shadow-lg  hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <Image
            className=" bg-cover bg-center rounded-lg "
            src={countdowntaimer}
            alt="image"
            width={600}
            height={100}
          />
          Currency Convator
        </div>
        <div className="border border-emerald-500 hover:border-amber-600 bg-cyan-300 bg-gradient-to-r from-pink-500 to-blue-500 text-center rounded-lg shadow-lg  hover:shadow-2xl transform hover:scale-105 transition duration-300  ">
          <Image
            className=" bg-cover bg-center rounded-lg "
            src={countdowntaimer}
            alt="image"
            width={600}
            height={200}
          />
          TodoList App
        </div>
        <div className="border border-emerald-500 hover:border-amber-600 bg-cyan-300 bg-gradient-to-r from-pink-500 to-blue-500 text-center rounded-lg shadow-lg  hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <Image
            className=" bg-cover bg-center rounded-lg "
            src={todolist}
            alt="image"
            width={600}
            height={200}
          />{" "}
          Project 5
        </div>
        <div className="border border-emerald-500 hover:border-amber-600 bg-cyan-300 bg-gradient-to-r from-pink-500 to-blue-500 text-center rounded-lg shadow-lg  hover:shadow-2xl transform hover:scale-105 transition duration-300 ">
          <Image
            className=" bg-cover bg-center  rounded-lg"
            src={todolist2}
            alt="image"
            width={600}
            height={200}
          />{" "}
          Project 6
        </div>
      </main>
    </>
  );
};

export default Project;
