import React, { useEffect } from "react";
import { HiSparkles } from "react-icons/hi";
import { Link } from "react-router-dom";
import useThemeStore from "../store/themeStore";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useThemeStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <nav className="bg-white sticky top-0 z-50 pt-4 sm:mx-6 mx-4 dark:bg-dark">
      <div className="container shadow-lg dark:shadow-green-500 py-5 rounded-full mx-auto lg:px-14 sm:px-10 px-6 flex items-center justify-between max-w-3xl">
        {/* Logo Section */}
        <div className="relative z-50">
          <p className="font-semibold text-base dark:text-white text-black/80 uppercase flex gap-2">
            <span> Eshat</span> <span className="sm:block hidden">Jubayer</span>
          </p>

          {/* <img width={150} src={logo} alt="logo" /> */}
        </div>

        {/* Navbar Links for Desktop */}
        <div className="flex sm:space-x-8 space-x-5">
          <Link
            to="/projects"
            href="#"
            className="font-normal text-sm dark:text-white/50 text-black/60 uppercase"
          >
            Projects
          </Link>
          <Link
            to="/profile"
            href="#"
            className="font-normal text-sm dark:text-white/50 text-black/60 uppercase"
          >
            About
          </Link>
          <div className="flex items-center space-x-1">
            <HiSparkles color="gold" />

            <button
              onClick={toggleDarkMode}
              className="font-normal text-sm dark:text-white/50 text-black/60 uppercase"
            >
              Play
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
