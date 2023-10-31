import React from "react";
import ArticleCart from "./ArticleCart";

const Projects = () => {
  return (
    <div className="mt-20">
      <h1 className="text-5xl text-[#0db3e2] font-medium text-center">
        My Latest Projects
      </h1>
      <p className="text-gray-400 font-semibold text-center my-7">
        As a Software Developer I am always focus on my clinet Demand
      </p>

      <div className="space-y-10">
        <div className="grid grid-cols-2 gap-5 items-center justify-center">
          {[1, 1].map((data) => {
            return <ArticleCart key={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
