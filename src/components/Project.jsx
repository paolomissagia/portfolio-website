/* eslint-disable react/prop-types */
import React from "react";

function Project({ Title, Description, Live, Code }) {
  return (
    <div className="sm:w-1/2 p-4">
      <div className="flex relative">
        <div className="px-8 py-14 relative z-10 w-full border-4 border-gray-800 bg-gray-900 text-center">
          <h1 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
            {Title}
          </h1>
          <p className="leading-relaxed">{Description}</p>
          <div className="mt-4">
            <a
              href={Live}
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Live
            </a>
            <a
              href={Code}
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
