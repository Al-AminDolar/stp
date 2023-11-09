import React from "react";
import TagCard from "./TagCard";

const PopularTag = () => {
  return (
    <div className="  ">
      <h1 className="text-[45px] font-semibold text-[#1cc2e7] pt-16">
        Popular Tags
      </h1>
      <h4 className=" text-lg text-[#94a9c9]">Most searched keywords</h4>
      <div className=" py-16  flex gap-5">
        {[1, 2, 3, 4, 5, 6].map((data) => {
          return <TagCard key={data} />;
        })}
      </div>
    </div>
  );
};

export default PopularTag;
