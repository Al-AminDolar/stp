import React, { useState } from "react";
import travel from "../Images/Travel.jpg";

const TagCard = () => {
  const [ishovered, setIsHovered] = useState(false);
  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex items-center justify-center gap-2 p-5 border border-gray-700 rounded-2xl 
      ${
        ishovered
          ? "transition    ease-in-out duration-500 -translate-y-1  hover:border hover:border-sky-400  hover:shadow-xl hover:shadow-sky-800"
          : "transition    ease-in-out duration-500 translate-y-1"
      }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <img src={travel} alt="" className="border rounded-full h-8 w-8" />
        </div>
        <div>
          <p className="text-xl text-white">Travel</p>
        </div>
      </div>
    </div>
  );
};

export default TagCard;
