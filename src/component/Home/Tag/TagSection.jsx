import React from "react";
import TagCard from "../../Card/TagCard/TagCard";

const TagSection = () => {
  return (
    <div className=" mt-10 ">
      <h1 className="text-[45px]  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5ea] from-10% via-[#0bd1d1] via-20% to-[#0eea83] to-70% ">
        Popular Tags
      </h1>
      <h4 className=" text-lg text-[#94a9c9]">Most searched keywords</h4>
      <div className=" py-12  flex gap-5">
        {[1, 2, 3, 4, 5, 6].map((data) => {
          return <TagCard key={data} />;
        })}
      </div>
    </div>
  );
};

export default TagSection;
