import React, { useState } from "react";

const Navbar = () => {
  return (
    <nav className="bg-white sticky top-0 z-50 py-5">
      <div className="container mx-auto px-8 lg:px-14 flex items-center justify-between max-w-3xl">
        {/* Logo Section */}
        <div className="relative z-50">
          Eshat Jubayer
          {/* <img width={150} src={logo} alt="logo" /> */}
        </div>

        {/* Navbar Links for Desktop */}
        <div className="flex space-x-8">
          <a
            href="#"
            className="text-primaryBlack text-base hover:text-sky-400 capitalize"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-primaryBlack text-base hover:text-sky-400 capitalize"
          >
            About
          </a>
          <a
            href="#"
            className="text-primaryBlack text-base hover:text-sky-400 capitalize"
          >
            Play
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
