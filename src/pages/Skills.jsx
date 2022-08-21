import React from "react";
import { BsCode, BsFillBootstrapFill } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { FaGitAlt, FaReact } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import Skill from "../components/Skill";

function Skills() {
  return (
    <div id="skills" className="container px-5 py-24 mx-auto">
      <div className="text-center mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium text-center text-white mb-4">
          Developer Skills
        </h1>
        {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Since beginning my journey, I have played around with different
          technologies but have recently focused more on the web development
          world.
        </p> */}
      </div>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <Skill Icon={BsCode} Title="HTML & CSS" />
        <Skill Icon={FaReact} Title="React" />
        <Skill Icon={SiTypescript} Title="TypeScript" />
        <Skill Icon={IoLogoJavascript} Title="JavaScript" />
        <Skill Icon={BsFillBootstrapFill} Title="Bootstrap" />
        <Skill Icon={SiTailwindcss} Title="Tailwind" />
        <Skill Icon={FiDatabase} Title="Databases" />
        <Skill Icon={FaGitAlt} Title="Git" />
      </div>
    </div>
  );
}

export default Skills;
