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
        <Project
          Title="CULTURAL ROADMAP"
          Description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum qui praesentium suscipit!"
          Live="https://cultural-roadmap.herokuapp.com/"
          Code="https://github.com/paolomissagia/cultural-roadmap"
        />
        <Project
          Title="PORTFOLIO"
          Description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum qui praesentium suscipit!"
          Live="https://paolomissagia.com/"
          Code="https://github.com/paolomissagia/portfolio-website"
        />
        <div className="sm:w-1/2 p-4">
          <div className="flex relative">
            <div className="px-8 py-14 relative z-10 w-full border-4 border-gray-800 bg-gray-900 text-center">
              <h1 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                CONSTRUCTION
              </h1>
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                voluptatem rerum corporis?
              </p>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 p-4">
          <div className="flex relative">
            <div className="px-8 py-14 relative z-10 w-full border-4 border-gray-800 bg-gray-900 text-center">
              <h1 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                CONSTRUCTION
              </h1>
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                voluptatem rerum corporis?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
