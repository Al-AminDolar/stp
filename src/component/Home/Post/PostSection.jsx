import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import Post from "../../Card/PostCard/PostCard";

const PostSection = () => {
  return (
    <div className="mt-20 max-w-sm md:max-w-none px-5">
      <h1 className="text-[45px]  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5ea] from-10% via-[#0bd1d1] via-20% to-[#0eea83] to-70% ">
        Recent Posts
      </h1>
      <p className="text-[#94a9c9] text-xl ">Don't miss the latest trends</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center mb-8">
        {[1, 2, 3, 4].map((data) => {
          return <Post key={data} />;
        })}
      </div>

      <button className="flex justify-center items-center gap-1 text-black font-semibold bg-gradient-to-r from-[#0ea5ea] to-[#0bd1d1] py-2 px-4 rounded-md   hover:from-[#0bd1d1]  hover:to-[#0ea5ea] transition duration-500 ease-in-out hover:shadow-xl hover:shadow-sky-800  ml-7 ">
        Show More <HiArrowSmRight />
      </button>
    </div>
  );
};

export default PostSection;
