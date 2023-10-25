import React from "react";
import { GiAlarmClock } from "react-icons/gi";
import image1 from "../Images/img2.png";

const Post = () => {
  return (
    <div className="grid grid-cols-2 justify-center my-14 ">
      <div className="p-3">
        <img src={image1} alt="" className="rounded-2xl " />
      </div>
      <div className="p-3 space-y-2">
        <h3 className="text-xl text-white">
          Helpful Tips for working from home as a freelancher
        </h3>
        <p className="text-gray-400 text-sm">
          Embrace remote work success with these invaluable tips and tricks for
          freelancers seeking productivity and work-life balance in their home
          offices
        </p>
        <div className="flex justify-between text-sm text-gray-500">
          <div className="flex gap-1">
            <a href="#">#Travel</a>
          </div>
          <div>
            <button className="flex items-center gap-1">
              {" "}
              <GiAlarmClock className="h-4 w-4" /> Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
