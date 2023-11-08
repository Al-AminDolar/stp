import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container  mx-auto">
      <div className="bg-blueGray-900 h-20 flex items-center justify-between ">
        <div>
          <p className="text-white text-2xl font-bold">S-T-P</p>
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
