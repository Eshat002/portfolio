import React from "react";
import FollowerCard from "./FollowerCard";
import Headline from "./Headline";

const Follower = () => {
  return (
    <section
      id="follower"
      className="container mx-auto lg:px-14 sm:px-10 px-6 flex flex-col gap-5 max-w-3xl mt-14"
    >
      <div className="headline-container">
        <Headline text="My Network" />
      </div>
      <div
        id="follower-card-container"
        className="grid lg:grid-cols-3 grid-cols-2 gap-6"
      >
        <FollowerCard number={4500} platform="Linkedin" />
        <FollowerCard number={1250} platform="X" />
        <FollowerCard number={850} platform="Instagram" />
      </div>
    </section>
  );
};

export default Follower;
