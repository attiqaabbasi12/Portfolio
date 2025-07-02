import React from "react";
import ProjectsCard from "../components/ProjectsCard";
import project1 from "../assets/project1.png";

const Projects = () => {
  return (
    <>
      <div id="projects" className="bg-gray-700 w-full h-full id='projects'">
        <section className="px-32 py-8 pb-16">
          <h1 className="text-4xl text-white font-bold text-center">
            Recent <span className="text-blue-300 ml-1"> Projects</span>
          </h1>
          <div className="flex justify-center items-center flex-wrap gap-8 mt-12">
            <ProjectsCard
              image={project1}
              description="This a Portfolio Website created with tailwindcss and react js."
              link="https://yourprojectlink.com"
            />
            <ProjectsCard
              image={project1}
              description="This a Portfolio Website created with tailwindcss and react js."
              link="https://anotherprojectlink.com"
            />
            <ProjectsCard
              image={project1}
              description="This a Portfolio Website created with tailwindcss and react js."
              link="https://anotherprojectlink.com"
            />
            <ProjectsCard
              image={project1}
              description="This a Portfolio Website created with tailwindcss and react js."
              link="https://anotherprojectlink.com"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
