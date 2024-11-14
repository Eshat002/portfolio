import React from "react";
import { LuArrowUpRight } from "react-icons/lu";
import Headline from "./Headline";

const ProjectCard = ({ name, text, linkText, imgURL, type, linkURL }) => {
  return (
    <div className="grid sm:grid-cols-5 grid-cols-1 sm:gap-0 gap-4">
      <div className="col-span-3 flex flex-col gap-3 sm:order-1 order-2">
        <p className="font-normal sm text-black/60 capitalize dark:text-white/70">
          {type}
        </p>
        <Headline text={name} />
        <p className="font-normal text-base text-black/60 dark:text-white/70">
          {text}
        </p>
        <a
          className="underline flex items-center font-medium text-16 text-black gap-1 capitalize dark:text-white"
          href={linkURL}
          target="_blank"
        >
          {linkText} <LuArrowUpRight />
        </a>
      </div>

      <div className="col-span-2 flex justify-end items-center sm:order-2 order-1">
        <img
          className="sm:w-52 sm:h-52 w-full h-auto object-cover shadow rounded-lg"
          src={imgURL}
          alt={type}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
