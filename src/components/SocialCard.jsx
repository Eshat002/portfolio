import React from "react";

const SocialCard = ({ icon, platform, linkURL }) => {
  return (
    <div className="shadow-lg p-8 flex items-center justify-center flex-col gap-1 rounded-xl">
      <div className="font-normal text-base text-black/60">
        <a target="_blank" href={linkURL}>
          {icon}
        </a>
      </div>
      {/* <p className="font-medium text-base text-black/80 capitalize">
        {platform}
      </p> */}
    </div>
  );
};

export default SocialCard;
