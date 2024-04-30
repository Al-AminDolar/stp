import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container mx-auto invisible md:visible">
      <div className="bg-blueGray-900 h-20 flex items-center justify-between">
        <div>
          <button className="text-white text-4xl font-bold">
            Al-<span className="text-sky-600">A</span>amin
          </button>
        </div>
        <div>
          <ul className="flex gap-7 text-slate-300 text-xl font-mono font-medium">
            <li className="text-[#1cc2e7] cursor-pointer">
              <NavLink to="/home">Home</NavLink>
            </li>
            <li className="hover:text-[#1cc2e7] cursor-pointer">
              <a href="/#projects">Project</a>
            </li>
            <li className="hover:text-[#1cc2e7] cursor-pointer">
              <a href="/#blogs">Blog</a>
            </li>
            <li className="hover:text-[#1cc2e7] cursor-pointer">
              <a href="/#about">About</a>
            </li>
            {/* <li className="hover:text-[#1cc2e7] cursor-pointer">
              <NavLink to="/contact">Contact</NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
