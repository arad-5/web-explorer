import React, { useContext, useEffect } from "react";
import { MdModeNight } from "react-icons/md";
import { HiSun } from "react-icons/hi";

//theme
import {Theme_context} from "../context/Theme_provider"
const Theme_toggle = () => {
  const {isDark , setIsDark} = useContext(Theme_context)
  useEffect(() => {
    isDark
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [isDark]);
  
  return (
    <button
      onClick={() => setIsDark(curr => !curr)}
    >
        {isDark ? ( 
          <MdModeNight className="text-sky-400 text-[2rem]" />
        ) : (
          <HiSun className="text-orange-500 text-[2.2rem]" />
        )}
    </button>
  );
};

export default Theme_toggle;
