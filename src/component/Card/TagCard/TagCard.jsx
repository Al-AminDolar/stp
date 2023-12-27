import React, { useState } from "react";

const TagCard = ({ data }) => {
  const [ishovered, setIsHovered] = useState(false);
  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex items-center justify-center gap-2 px-7 py-3 border border-gray-700 rounded-2xl 
      ${
        ishovered
          ? "transition    ease-in-out duration-500 -translate-y-1  hover:border hover:border-sky-400  hover:shadow-xl hover:shadow-sky-800"
          : "transition    ease-in-out duration-500 translate-y-1"
      }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="text-red-500">{data.icon}</div>
        <div>
          <p className="text-base text-[#b9e0f2]">{data?.tagTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default TagCard;
