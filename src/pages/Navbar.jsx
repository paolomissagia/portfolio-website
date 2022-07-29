/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-scroll";
// eslint-disable-next-line no-unused-vars
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Logo from "../assets/Logo.png";

function Navbar() {
  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center sticky bg-black top-0 z-50">
      <a className="flex font-medium items-center text-white mb-4 md:mb-0">
        <img src={Logo} alt="logo" className="w-10 h-10" />
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link
          activeClass="active"
          className="mr-5 hover:text-white hover:underline"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          smooth
          spy
          duration={500}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          className="mr-5 hover:text-white hover:underline"
          to="skills"
          smooth
          spy
          duration={500}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          className="mr-5 hover:text-white hover:underline"
          to="projects"
          smooth
          spy
          duration={500}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          className="mr-5 hover:text-white hover:underline"
          to="contact"
          smooth
          spy
          duration={500}
        >
          Contact
        </Link>
      </nav>
      <div className="flex flex-row">
        <a href="https://github.com/paolomissagia" className="hover:text-white">
          <AiFillGithub className="w-8 h-8 mr-2" />
        </a>
        <a
          href="https://www.linkedin.com/in/paolomissagia/"
          className="hover:text-white"
        >
          <AiFillLinkedin className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
