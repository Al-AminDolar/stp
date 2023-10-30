import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-blueGray-900 h-20 flex items-center justify-between ">
        <div>
          <p className="text-white text-3xl font-sans">Soft-Tech-Programmer</p>
        </div>
        <div>
          <ui className="flex  gap-7 text-slate-300 text-xl font-mono font-medium ">
            <oi className="text-sky-500 cursor-pointer">Home</oi>

            <ol className="hover:text-sky-500  cursor-pointer">Project</ol>
            <ol className="hover:text-sky-500  cursor-pointer">Blog</ol>
            <ol className="hover:text-sky-500  cursor-pointer">About</ol>
            <ol className="hover:text-sky-500  cursor-pointer">Contact</ol>
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
