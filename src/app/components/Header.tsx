import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <nav className="fixed top-0 left-0 right-0 z-10 flex bg-slate-950 bg-opacity-60  justify-between p-5 items-center text-white  ">
          <h1 className="flex font-extrabold sm:text-3xl sm:font-semibold pl-2 sm:pl-16 underline  text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 ">
            NOMAN portfolio
          </h1>
          <ul className="flex gap-4 sm:gap-10">
            <li className=" relative sm:font-bold text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-green-400 hover:bg-gradient-to-tr hover:from-green-500 hover:to-cyan-500">
              <a href="#Home">Home</a>
            </li>
            <li className="  sm:font-bold text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-green-400 hover:bg-gradient-to-tr hover:from-green-500 hover:to-cyan-500">
              <a href="#About">About</a>
            </li>
            <li className="  sm:font-bold text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-green-400 hover:bg-gradient-to-tr hover:from-green-500 hover:to-cyan-500">
              <a href="#project">Projact</a>
            </li>
            <li className="  sm:font-bold text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-green-400 hover:bg-gradient-to-tr hover:from-green-500 hover:to-cyan-500">
              <a href="#Contect">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
