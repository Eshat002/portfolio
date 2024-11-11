import React, { useState } from "react";
import { HiSparkles } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white sticky top-0 z-50 pt-4 sm:mx-6 mx-4">
      <div className="container shadow-lg py-5 rounded-full mx-auto lg:px-14 sm:px-10 px-6 flex items-center justify-between max-w-3xl">
        {/* Logo Section */}
        <div className="relative z-50">
          <p className="font-semibold text-base text-black/80 uppercase flex gap-2">
            <span> Eshat</span> <span className="sm:block hidden">Jubayer</span>
          </p>

          {/* <img width={150} src={logo} alt="logo" /> */}
        </div>

        {/* Navbar Links for Desktop */}
        <div className="flex sm:space-x-8 space-x-6">
          <Link
            to=""
            href="#"
            className="font-normal text-base text-black/60 capitalize"
          >
            Projects
          </Link>
          <Link
            to=""
            href="#"
            className="font-normal text-base text-black/60 capitalize"
          >
            About
          </Link>
          <div className="flex items-center space-x-1">
            <HiSparkles color="gold" />

            <Link
              to=""
              href="#"
              className="font-normal text-base text-black/60 capitalize"
            >
              Play
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
