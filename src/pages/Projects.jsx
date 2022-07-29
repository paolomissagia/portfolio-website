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
          Currently, in the process of reshaping my portfolio to reflect my
          areas of interest, a few projects are ongoing that will be posted
          soon!
        </p>
      </div>
      <div className="flex flex-wrap -m-4">
        <Project
          Title="CULTURAL ROADMAP"
          Description="A full-stack application built with MERN that generates guide to Literature, Cinema & Music"
          Live="https://cultural-roadmap.herokuapp.com/"
          Code="https://github.com/paolomissagia/cultural-roadmap"
        />
        <Project
          Title="PORTFOLIO"
          Description="A responsive portfolio website exclusive built on the front-end using the React.JS library"
          Live="https://paolomissagia.com/"
          Code="https://github.com/paolomissagia/portfolio-website"
        />
        <Project
          Title="COMING SOON"
          Description="An interactive opera guide for enthusiasts of all levels, the project is currently under development with an estimated release in early October."
          Empty
        />
        <Project
          Title="CONSTRUCTION"
          Description="The following project will be determined and announced after the release of the opera application."
          Empty
        />
      </div>
    </div>
  );
}

export default Projects;
