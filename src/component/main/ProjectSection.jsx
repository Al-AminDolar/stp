import React from "react";
import ArticleCart from "./ArticleCart";

const Projects = () => {
  return (
    <div className="mt-20">
      <h1 className="text-[45px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5ea] from-20% via-[#0bd1d1] via-51% to-[#41ea0e] to-29% ">
        My Latest Projects
      </h1>
      <p className="text-[#94a9c9] font-semibold text-center mb-7 text-lg">
        As a Software Developer I am always focus on my clinet Demand
      </p>

      <div className="space-y-10">
        <div className="grid grid-cols-2  items-center justify-center">
          {[1, 1].map((data) => {
            return <ArticleCart key={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
// #0ea5ea,#0bd1d1 51%,#0ea5ea
