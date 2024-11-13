import React from "react";
import SkillCard from "./SkillCard";
import Headline from "./Headline";
import { FaReact } from "react-icons/fa6";
import { BiLogoDjango } from "react-icons/bi";
// import { SiDjango } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws } from "react-icons/fa6";

const Skill = () => {
  return (
    <section
      id="Skill"
      className="container mx-auto lg:px-14 sm:px-10 px-6 flex flex-col gap-5 max-w-3xl mt-14"
    >
      <div className="headline-container">
        <Headline text="Technical Stack" />
      </div>
      <div
        id="Skill-card-container"
        className="grid lg:grid-cols-4 grid-cols-2 gap-6"
      >
        <SkillCard tech="React" icon={<FaReact size={34} />} />
        <SkillCard tech="Django" icon={<BiLogoDjango size={34} />} />
        <SkillCard tech="Tailwind CSS" icon={<RiTailwindCssFill size={34} />} />
        <SkillCard tech="PostgreSQL" icon={<BiLogoPostgresql size={34} />} />
      </div>
    </section>
  );
};

export default Skill;
