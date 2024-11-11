import React from "react";
import ProjectCard from "./ProjectCard";
import Image from "../assets/Images/Placeholder.png";
import Headline from "./Headline";

const Projects = () => {
  return (
    <section
      id="projects"
      className="container mx-auto lg:px-14 sm:px-10 px-6 flex flex-col gap-5 max-w-3xl mt-14"
    >
      <div className="headline-container">
        <Headline text="Selected projects" />
      </div>
      <div className="project-card-container">
        <ProjectCard
          name="This is a project name! Name wisely!"
          text="Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline."
          linkText="Try it out"
          imgURL={Image}
        />
      </div>
    </section>
  );
};

export default Projects;
