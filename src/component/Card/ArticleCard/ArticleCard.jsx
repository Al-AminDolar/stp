import React, { useState } from "react";
import { GiAlarmClock } from "react-icons/gi";
const ArticleCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={` w-[320px]  border border-gray-800   rounded-md shadow-md p-5 space-y-5  bg-[#131c31]  ${
        isHovered
          ? "transition    ease-in-out duration-500 -translate-y-1 "
          : "transition    ease-in-out duration-500 translate-y-1 "
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className=" overflow-hidden">
        <img
          src={data?.img}
          alt=""
          className=" rounded-md object-cover h-[150px] w-[300px]"
        />
      </div>

      <div className="flex justify-between text-[#94a9c9]">
        <p>#backend#node</p>
        <p>3 mins read</p>
      </div>

      <h1
        className={` text-${
          isHovered ? "[#1cc2e7]" : "[#b9e0f2]"
        }  text-[20px] font-semibold`}
        style={{
          transition: "color 0.3s ease-in-out",
        }}
      >
        {data?.title}
      </h1>

      <div className="flex justify-between items-center text-gray-500">
        <div>
          {" "}
          <p>Al-Amin</p> <p>6 April 2023</p>
        </div>

        <button className="flex items-center gap-1 text-[#1cc2e7]">
          {" "}
          <GiAlarmClock className="h-6 w-6" /> Read more
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
