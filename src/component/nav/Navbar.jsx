import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container  mx-auto">
      <div className="bg-blueGray-900 h-20 flex items-center justify-between ">
        <div>
          <button className="text-white font-bold bg-gradient-to-r from-[#0ea5ea] to-[#0bd1d1] py-2 px-4 rounded-md   hover:from-[#0bd1d1]  hover:to-[#0ea5ea] transition duration-500 ease-in-out  ">
            Sof-Tech Programmer
          </button>
        </div>
        <div>
          <ui className="flex  gap-7 text-slate-300 text-xl font-mono font-medium ">
            <oi className="text-[#1cc2e7] cursor-pointer">
              <NavLink to="/home"> Home</NavLink>
            </oi>
            <ol className="hover:text-[#1cc2e7]  cursor-pointer">
              {" "}
              <NavLink to="/projects"> Project</NavLink>
            </ol>
            <ol className="hover:text-[#1cc2e7]  cursor-pointer">
              {" "}
              <NavLink to="/blogs"> Blog</NavLink>
            </ol>
            <ol className="hover:text-[#1cc2e7]  cursor-pointer">
              {" "}
              <NavLink to="/about"> About</NavLink>
            </ol>
            <ol className="hover:text-[#1cc2e7]  cursor-pointer">
              {" "}
              <NavLink to="/contact"> Contact</NavLink>
            </ol>
          </ui>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
