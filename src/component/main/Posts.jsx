import React from "react";
import Post from "./Post";

const Posts = () => {
  return (
    <div className="">
      <h1 className="text-5xl text-[#0db3e2]">Recent Posts</h1>
      <p className="text-[#8a9ebd] text-xl pt-3">
        Don't miss the latest trends
      </p>

      <div className="grid grid-cols-2 gap-5 items-center justify-center">
        {[1, 2, 3, 4].map((data) => {
          return <Post key={data} />;
        })}
      </div>
      <button className="bg-[#0db3e2] rounded-2xl px-4 py-2 mx-3 my-10 text-white font-semibold">
        Show more Posts
      </button>
    </div>
  );
};

export default Posts;
