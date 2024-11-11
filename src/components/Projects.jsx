import React from "react";
import ProjectCard from "./ProjectCard";
import Doc from "../assets/Images/hero.png";
import Blog from "../assets/Images/blog.png";
import CRM from "../assets/Images/crm.png";
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
      <div className="project-card-container space-y-14">
        <ProjectCard
          type="Healthcare website"
          name="MediClinic"
          text="An impressive, responsive website featuring appointment booking, testimonials, services, and a beautiful dashboard. Built with React, Tailwind CSS, Django REST Framework, and Framer Motion for smooth, dynamic animations."
          linkText="Demo"
          imgURL={Doc}
        />
        <ProjectCard
          type="Blogging Platform"
          name="SnapBlog"
          text="A dynamic blog website built with Django, JavaScript, and Bootstrap featuring featured/popular posts, pagination, newsletter signup, top authors, real-time analytics, Disqus comments, and more."
          linkText="Demo"
          imgURL={Blog}
        />
        <ProjectCard
          type="CRM"
          name="SwiftCRM"
          text="This CRM System manages products, orders, and customers, tracks expenses and profits, and provides visual reports with Chart.js. It helps set business goals, analyze income trends, and track best-sellers."
          linkText="Demo"
          imgURL={CRM}
        />
        <ProjectCard
          name="This is a project name! Name wisely!"
          text="Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline."
          linkText="Demo"
          imgURL={Image}
          type="type"
        />
      </div>
    </section>
  );
};

export default Projects;
