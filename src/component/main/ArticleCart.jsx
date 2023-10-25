import React, { useState } from "react";
import { GiAlarmClock } from "react-icons/gi";
import img from "../Images/node.png";
const ArticleCart = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={` w-[420px] border border-gray-800   rounded-md shadow-md p-5 space-y-5  bg-[#131c31]  ${
        isHovered
          ? "transition    ease-in-out duration-500 -translate-y-1 "
          : "transition    ease-in-out duration-500 translate-y-1 "
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <img src={img} alt="" className=" rounded-md" />
      </div>

      <div className="flex justify-between text-gray-500">
        <p>#backend#node</p>
        <p>3 mins read</p>
      </div>

      <h1
        className={` text-${
          isHovered ? "sky-500" : "white"
        }  text-4xl font-semibold`}
        style={{
          transition: "color 0.3s ease-in-out",
        }}
      >
        Node Js For Beginners
      </h1>

      <div className="flex justify-between items-center text-gray-500">
        <div>
          {" "}
          <p>Al-Amin</p> <p>6 April 2023</p>
        </div>

        <button className="flex items-center gap-1">
          {" "}
          <GiAlarmClock className="h-6 w-6" /> Read more
        </button>
      </div>
    </div>
  );
};

export default ArticleCart;
