import React from "react";
import { BsCode, BsFillBootstrapFill } from "react-icons/bs";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { FaGitAlt, FaReact } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { SiTailwindcss } from "react-icons/si";
import Skill from "../components/Skill";

function Skills() {
  return (
    <div id="skills" className="container px-5 py-24 mx-auto">
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium text-center text-white mb-4">
          Developer Skills
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus non
          neque sed harum veniam quae omnis quaerat, reprehenderit temporibus
          consequatur.
        </p>
      </div>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <Skill Icon={BsCode} Title="HTML & CSS" />
        <Skill Icon={IoLogoJavascript} Title="JavaScript" />
        <Skill Icon={FaReact} Title="React" />
        <Skill Icon={IoLogoNodejs} Title="Node.JS" />
        <Skill Icon={BsFillBootstrapFill} Title="Bootstrap" />
        <Skill Icon={SiTailwindcss} Title="Tailwind" />
        <Skill Icon={FiDatabase} Title="Databases" />
        <Skill Icon={FaGitAlt} Title="Git" />
      </div>
    </div>
  );
}

export default Skills;
