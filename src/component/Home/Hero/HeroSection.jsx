import React from "react";
import profilePic from "../../../assets/Images/home/Mypic.png";

const HeroSection = () => {
  return (
    <div className=" ">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center  items-center gap-4">
        <div className=" space-y-3 lg:space-y-5 mt-10 pl-5 ">
          <p className="text-sm font-sans font-semibold text-[#94a9c9]">
            Hello Everyone!
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-[rgb(13,173,230)] font-mono font-bold">
            <span className="text-white">I'm</span> Al Amin Dolar
          </h1>
          <span className="text-sm lg:text-base font-semibold text-white">
            A Software engineer & professional web developer
          </span>

          <div className="text-sm font-medium text-[#94a9c9]">
            Turning visions into interactive realities with code
          </div>

          <button className="text-black font-medium bg-gradient-to-r from-[#0ea5ea] to-[#0bd1d1] py-2 px-4 rounded-md hover:from-[#0bd1d1] hover:to-[#0ea5ea] transition-all duration-2000 ease-in md:w-auto hover:shadow-xl hover:shadow-sky-800">
            Hire Me
          </button>
        </div>

        <div className="overflow-hidden flex items-center justify-center max-w-sm h-[250px] md:max-w-sm md:h-auto">
          <img
            src={profilePic}
            alt="Profile"
            className="w-48 md:w-56 lg:w-72 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
