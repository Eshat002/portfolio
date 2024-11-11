import React from "react";
import ProfileInfo from "../components/ProfileInfo";
import Follower from "../components/Follower";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div>
      <ProfileInfo />
      <Follower />
      <Projects />
    </div>
  );
};

export default Home;
