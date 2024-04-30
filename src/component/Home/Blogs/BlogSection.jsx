import React from "react";
import ArticleCart from "../../Card/ArticleCard/ArticleCard";
import data from "../../dummy/dummyProducts.json";

const { blogs } = data;
const BlogSection = () => {
  return (
    <div id="blogs" className="mt-20 max-w-sm md:max-w-none px-5">
      <h1 className="text-[45px]  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5ea] from-10% via-[#0bd1d1] via-20% to-[#0eea83] to-70%  text-center">
        Recent Blogs
      </h1>
      <h4 className="text-[#8a9ebd] text-lg text-center">
        Featured and highly related articles
      </h4>
      <div className="flex justify-center mt-14 ">
        <div className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center md:gap-20 gap-5">
            {blogs.slice(0, 3).map((data) => {
              return <ArticleCart key={data} data={data} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
