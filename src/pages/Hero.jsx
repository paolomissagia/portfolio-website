import React from "react";
import { Link } from "react-scroll";
import { BsArrowRightShort } from "react-icons/bs";
import BinaryCode from "../assets/BinaryCode";

function Hero() {
  return (
    <div
      id="hero"
      className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center h-[80vh]"
    >
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-white">
          Hello, I&apos;m Paolo.
        </h1>
        <p className="mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          deleniti, consectetur debitis repudiandae minus labore praesentium,
          at, consequuntur voluptate nam sit. Blanditiis nam corporis esse iste
          neque, a nobis aliquid.
        </p>
        <div className="flex justify-center">
          <Link
            to="skills"
            smooth
            spy
            duration={500}
            className="group inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg cursor-pointer"
          >
            See More
            <span className="group-hover:rotate-90 duration-300">
              <BsArrowRightShort size={25} className="ml-1" />
            </span>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 fill-green-500 animate-[pulse_4.5s_ease-in-out_infinite]">
        <BinaryCode className="object-cover object-center rounded" />
      </div>
    </div>
  );
}

export default Hero;
