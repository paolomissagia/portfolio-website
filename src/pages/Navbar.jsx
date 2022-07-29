/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-scroll";
// eslint-disable-next-line no-unused-vars
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaTimes, FaBars } from "react-icons/fa";
import Logo from "../assets/Logo.png";

function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-row items-center sticky bg-black top-0 z-50 justify-between">
      <a className="flex font-medium items-center text-white mb-0">
        <img src={Logo} alt="logo" className="w-10 h-10" />
      </a>
      <nav className="hidden md:flex md:ml-auto flex-wrap items-center text-base justify-center">
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
      <div className="hidden md:flex flex-row">
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
      <div
        className="flex flex-row cursor-pointer pr-4 z-10 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black">
          <Link
            activeClass="active"
            className="px-4 cursor-pointer py-6 text-4xl hover:text-white hover:underline"
            onClick={() => {
              setNav(!nav);
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
            onClick={() => setNav(!nav)}
            className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white hover:underline"
            to="skills"
            smooth
            spy
            duration={500}
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            onClick={() => setNav(!nav)}
            className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white hover:underline"
            to="projects"
            smooth
            spy
            duration={500}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white hover:underline"
            onClick={() => setNav(!nav)}
            to="contact"
            smooth
            spy
            duration={500}
          >
            Contact
          </Link>
          <div className="flex flex-row">
            <a
              href="https://github.com/paolomissagia"
              onClick={() => setNav(!nav)}
              target="_blank"
              className="hover:text-white"
              rel="noreferrer"
            >
              <AiFillGithub className="w-8 h-8 mr-2" />
            </a>
            <a
              href="https://www.linkedin.com/in/paolomissagia/"
              onClick={() => setNav(!nav)}
              target="_blank"
              className="hover:text-white"
              rel="noreferrer"
            >
              <AiFillLinkedin className="w-8 h-8" />
            </a>
          </div>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
