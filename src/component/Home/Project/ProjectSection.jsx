import React from "react";
import data from "../../../component/dummy/dummyProducts.json";
import "./ProjectCard.css";
const { Projects } = data;
const ProjectSection = () => {
  return (
    <div className="mt-20">
      <h1 className="text-[45px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5ea] from-20% via-[#0bd1d1] via-51% to-[#41ea0e] to-29% ">
        My Latest Projects
      </h1>
      <p className="text-[#94a9c9] font-semibold text-center mb-7 text-lg">
        As a Software Developer I am always focus on my clinet Demand
      </p>

      <div className="space-y-10 mt-20">
        <div className="grid grid-cols-2   justify-center items-center">
          {Projects.slice(0, 2).map((data) => {
            return (
              <div className="project-card  w-[350px] h-[300px] border rounded-md border-cyan-500 shadow-lg shadow-cyan-500">
                <img
                  src={data?.img}
                  alt={data?.title}
                  className="project-image"
                />
                <div className="overlay">
                  <div className="project-text">
                    <h1 className="font-bold text-2xl"> {data?.title}</h1>
                    <button className="px-6 py-1 bg-orange-500 mt-2 text-xl font-semibold rounded-md text-black">
                      {" "}
                      <a target="_blank" href={data.Url} rel="noreferrer">
                        Live Site
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
// #0ea5ea,#0bd1d1 51%,#0ea5ea
