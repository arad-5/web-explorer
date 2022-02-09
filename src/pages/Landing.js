import React from "react";
import Theme_toggle from "../components/Theme_toggle";
//icons
import { FiSearch } from "react-icons/fi";
const Landing = () => {
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="absolute top-6 right-14">
        <Theme_toggle />
      </div>
      <div className="w-[30rem]">
        <form className="relative flex items-center ">
          <input
            type="text"
            className="w-full dark:bg-gray-900 p-2 rounded-full transition-shadow focus:outline-none  focus:bg-transparent focus:shadow-sky-700 focus:shadow-md	hover:shadow-xl  duration-200  dark:text-slate-100 dark:text-gray-100 text-gray-800 shadow-sm  pl-10 pr-[5rem] border border-[2px] border-sky-500
          "
          />
          <button
            type="submit"
            className=" px-3 py-0.5 bg-sky-400 text-black font-semibold rounded-full absolute block  right-2"
            onFocus={() => {}}
          >
            Search
          </button>
          <FiSearch className="text-sky-400 absolute  group-focus:text-gray-500 left-3 " />
        </form>
      </div>
    </div>
  );
};

export default Landing;
