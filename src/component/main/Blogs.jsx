import React from "react";
import ArticleCart from "./ArticleCart";

const Blogs = () => {
  return (
    <div className=" ">
      <div className="my-16">
        <h1 className="text-[45px]  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5ea] from-10% via-[#0bd1d1] via-20% to-[#0eea83] to-70% ">
          Editors Picked
        </h1>
        <h4 className="text-[#8a9ebd] text-lg ">
          Featured and highly related articles
        </h4>
      </div>

      <div className="space-y-10">
        <div className="flex gap-5 items-center justify-center">
          {[1, 2].map((data) => {
            return <ArticleCart key={data} />;
          })}
        </div>

        <div className="flex gap-5 items-center justify-center">
          {[1, 2, 3].map((item) => {
            return <ArticleCart key={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
