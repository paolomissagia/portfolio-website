/* eslint-disable no-unused-vars */
import React from "react";
import Project from "../components/Project";

function Projects() {
  return (
    <div id="projects" className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex w-full mb-20 flex-wrap">
        <h1 className="sm:text-3xl text-2xl font-medium text-white lg:w-1/3 lg:mb-0 mb-4">
          My Projects
        </h1>
        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          repellendus iste tempore quod nesciunt error qui, rem reprehenderit
          autem culpa accusamus aperiam, porro nulla doloremque!
        </p>
      </div>
      <div className="flex flex-wrap -m-4">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default Projects;
