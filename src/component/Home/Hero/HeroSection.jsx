import React from "react";
import profilePic from "../../../assets/Images/home/Mypic.png";
const HeroSection = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 justify-center">
        <div className="bg-blueGray-900 flex-col justify-center text-white self-end  space-y-5 mb-10   ">
          <p className="text-sm font-sans font-semibold text-[#94a9c9]">
            Hello Everyone!
          </p>
          <h1 className="text-[64px] text-[rgb(13,173,230)] font-mono font-bold">
            <span className="text-white">I'm</span> Al
            <spanc className="text-white"></spanc>Amin Dolar
          </h1>
          <span className="text-base font-semibold">
            A Software engineer & professional web developer
          </span>

          <div className=" text-base font-medium text-[#94a9c9]">
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that.
            Allah Hafez
          </div>

          <div className="text-start flex justify-between items-center bg-[#222f43]  rounded-2xl py-3 px-4 border border-cyan-400  hover:shadow-xl	 hover:shadow-sky-800 ">
            <input
              className="bg-[#222f43]  rounded-2xl outline-none p-1"
              type="text"
              placeholder="Type Your Email Address"
            />
            <button className="text-white font-medium bg-gradient-to-r from-[#0ea5ea] to-[#0bd1d1] py-2 px-4 rounded-md   hover:from-[#0bd1d1] hover:to-[#0ea5ea] transition-all  duration-2000 ease-in">
              subscribe
            </button>
          </div>
        </div>

        <div className=" flex justify-center">
          <img src={profilePic} alt="" className="w-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
