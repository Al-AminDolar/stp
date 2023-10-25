import React from "react";

const Posts = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-5">
        <div className="col-span-3">
          <h1 className="text-5xl text-[#0db3e2]">Recent Posts</h1>
          <p className="text-[#8a9ebd] text-xl pt-3">
            Don't miss the latest trends
          </p>
        </div>
        <div className="col-span-2 border"></div>
      </div>
    </div>
  );
};

export default Posts;
