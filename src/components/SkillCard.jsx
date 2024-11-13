import React from "react";

const SkillCard = ({ tech, icon }) => {
  return (
    <div className="shadow-lg p-5 flex items-center justify-center flex-col gap-1 rounded-xl">
      <div className="font-normal text-base text-black/60">{icon}</div>
      <p className="font-medium text-base text-black/80 capitalize">{tech}</p>
    </div>
  );
};

export default SkillCard;
