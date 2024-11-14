import React from "react";

const FollowerCard = ({ number, platform }) => {
  return (
    <div className="shadow-md dark:shadow-white/10 dark:bg-white/70 p-4 flex items-start justify-center flex-col gap-1 rounded-xl">
      <h2 className="font-medium text-base text-black/80 capitalize">
        {number}+ Followers
      </h2>
      <p className="font-normal text-base text-black/60 ">{platform}</p>
    </div>
  );
};

export default FollowerCard;
