import React from "react";
import ProfileImage from "../assets/Images/me.jpg";
import { LuArrowUpRight } from "react-icons/lu";

const ProfileInfo = () => {
  return (
    <section className="mt-16">
      <div className="container mx-auto lg:px-14 sm:px-10 px-6 flex flex-col max-w-3xl gap-4">
        {/* <img
          className="w-14 h-14 object-cover rounded-full"
          src={ProfileImage}
          alt="avatar"
        /> */}
        <div className="flex justify-between items-center">
          <img
            className="w-14 h-14 object-cover rounded-full"
            src={ProfileImage}
            alt="avatar"
          />
          <span className="bg-green-500 text-white text-xs h-6 font-bold py-1 px-2 rounded-full">
            Available
          </span>
        </div>

        <h2 className="font-medium text-2xl text-black">I craft Websites</h2>
        <p className="font-normal text-base text-black/60">
          Full Stack developer with 6+ years of experience in HTML, CSS,
          JavaScript, jQuery, AJAX, React, Bootstrap, Tailwind, Python, Django,
          Django REST Framework, AWS, and Git. Skilled in responsive design, API
          integration, and writing clean, maintainable code.
        </p>
        <a
          target="_blank"
          href="https://www.instagram.com/eshatjubayer/"
          className="underline flex items-center font-medium text-16 text-black gap-1"
        >
          Explore My Works on Instagram
          <LuArrowUpRight />
        </a>
      </div>
    </section>
  );
};

export default ProfileInfo;
