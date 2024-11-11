import React from "react";
import { LuArrowUpRight } from "react-icons/lu";
import Headline from "./Headline";

const ProjectCard = ({ name, text, linkText, altText, imgURL, type }) => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-3 flex flex-col gap-3">
        <p className="font-normal sm text-black/60 capitalize">{type}</p>
        <Headline text={name} />
        <p className="font-normal text-base text-black/60">{text}</p>
        <a
          className="underline flex items-center font-medium text-16 text-black gap-1 capitalize"
          href=""
        >
          {linkText} <LuArrowUpRight />
        </a>
      </div>

      <div className="col-span-2 flex justify-end items-center">
        <img
          className="w-52 h-52 object-cover shadow rounded-lg"
          src={imgURL}
          alt={altText}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
