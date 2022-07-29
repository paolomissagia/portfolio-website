/* eslint-disable react/prop-types */
import React from "react";

function Skill({ Icon, Title }) {
  return (
    <div className="p-2 sm:w-1/2 w-full">
      <div className="bg-gray-800 rounded flex p-4 h-full items-center">
        <Icon size={25} className="mr-2 text-green-500" />
        <span className="title-font font-medium text-white">{Title}</span>
      </div>
    </div>
  );
}

export default Skill;
