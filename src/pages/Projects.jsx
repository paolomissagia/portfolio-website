/* eslint-disable no-unused-vars */
import React from "react";
import Project from "../components/Project";

function Projects() {
  return (
    <div id="projects" className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex w-full mb-12 flex-wrap">
        <h1 className="sm:text-3xl text-2xl font-medium text-white lg:w-1/3 lg:mb-0 mb-4">
          My Projects
        </h1>
        {/* <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
          Currently, in the process of reshaping my portfolio to reflect my
          areas of interest, a few projects are ongoing that will be posted
          soon!
        </p> */}
      </div>
      <div className="flex flex-col lg:flex-row w-full lg:w-3/4 flex-wrap mx-auto">
        <Project
          Title="CULTURAL ROADMAP"
          Description="A web application that allows users to create a art-related recommendation guide."
          Live="https://cultural-roadmap.herokuapp.com/"
          Code="https://github.com/paolomissagia/cultural-roadmap/"
        />
        <Project
          Title="PRIMA DONNA"
          Description="A web application that displays a catalogue of the most popular operas in history."
          Live="https://prima-donna.herokuapp.com/"
          Code="https://github.com/paolomissagia/prima-donna"
        />
      </div>
    </div>
  );
}

export default Projects;
