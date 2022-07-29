import React from "react";

function Project() {
  return (
    <div className="sm:w-1/2 p-4">
      <div className="flex relative">
        <img
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="https://dummyimage.com/603x363"
        />
        <div className="px-8 py-14 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 text-center">
          <h1 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
            The 400 Blows
          </h1>
          <p className="leading-relaxed">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
          <div className="mt-4">
            <button
              type="button"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Live
            </button>
            <button
              type="button"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
