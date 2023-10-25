import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <div className="bg-blueGray-900 h-20 flex items-center justify-between px-32">
        <div>
          <p className="text-white text-3xl font-sans">Soft-Tech-Programmer</p>
        </div>
        <div>
          <ui className="flex  gap-7 text-slate-300 text-xl font-mono font-medium ">
            <oi className="text-sky-500 cursor-pointer">Home</oi>
            <ol className="hover:text-sky-500  cursor-pointer">Resume</ol>
            <ol className="hover:text-sky-500  cursor-pointer">Expert</ol>
            <ol className="hover:text-sky-500  cursor-pointer">Project</ol>
            <ol className="hover:text-sky-500  cursor-pointer">Blog</ol>
            <ol className="hover:text-sky-500  cursor-pointer">About</ol>
          </ui>
        </div>

        <div>
          <p className="text-white text-2xl font-mono">About Me</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
