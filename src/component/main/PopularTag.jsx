import React from "react";
import TagCard from "./TagCard";

const PopularTag = () => {
  return (
    <div className=" px-56  py-16  ">
      <h1 className="text-5xl text-white">Popular Tags</h1>
      <h4 className="pt-5 text-xl text-white">Most searched keywords</h4>
      <div className="pt-10 flex gap-5">
        {[1, 2, 3, 4, 5, 6].map((data) => {
          return <TagCard key={data} />;
        })}
      </div>
    </div>
  );
};

export default PopularTag;
