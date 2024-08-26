"use client";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="relative w-16 h-9 flex items-center dark:bg-red bg-white border-2 border-red cursor-pointer rounded-full p-1"
      onClick={() => setDarkMode(!darkMode)}
    >
      <div
        className="absolute bg-red dark:bg-white 
        w-6 h-6 rounded-full shadow-md 
        transform transition-transform duration-300"
        style={darkMode ? { right: "2px" } : { left: "2px" }}
      ></div>
    </div>
  );
};

export default DarkMode;
