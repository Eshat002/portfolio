import React from "react";
import ProfileInfo from "../components/ProfileInfo";
import Follower from "../components/Follower";
import Projects from "../components/Projects";
import Skill from "../components/Skill";

const Home = () => {
  return (
    <div>
      <ProfileInfo />
      <Follower />
      <Projects />
      <Skill />
    </div>
  );
};

export default Home;
