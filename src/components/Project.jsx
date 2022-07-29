/* eslint-disable react/prop-types */
import React from "react";

function Project({ Title, Description, Live, Code, Empty }) {
  return (
    <div className="sm:w-1/2 p-4">
      <div className="px-8 py-14 w-full h-full border-4 border-gray-800 bg-gray-900 text-center">
        <h1 className="tracking-widest text-sm font-medium text-green-400 mb-1">
          {Title}
        </h1>
        <p className="leading-relaxed">{Description}</p>
        {Empty ? (
          <div />
        ) : (
          <div className="mt-4">
            <a
              href={Live}
              target="_blank"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              rel="noreferrer"
            >
              Live
            </a>
            <a
              href={Code}
              target="_blank"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              rel="noreferrer"
            >
              Code
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;
