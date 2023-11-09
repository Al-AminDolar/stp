import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedinIn, FaUserAlt } from "react-icons/fa";
import { HiArrowSmRight } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="container mx-auto w-[1100px] pb-5 mt-10">
      <div className="border border-gray-800 rounded-[50px] p-20 bg-[#131c31]  ">
        <div className="grid grid-cols-3 gap-10 border-b pb-20">
          <div className="space-y-8">
            <h4 className="text-[#1cc2e7] text-[24px] font-bold">S.T.P</h4>
            <p className="text-[#94a9c9] text-justify text-sm">
              Thank you so much for visiting my site. I am always trying to give
              my best effort for any projet or product. If You want to convert
              your idea into a smart application then you most welcome
            </p>

            <div>
              <h6 className="text-[#b9e0f2] font-semibold mb-1">Address</h6>
              <p className="text-[#94a9c9] text-sm">Dhandmondi 27</p>
              <p className="text-[#94a9c9] text-sm">Tallbag Home: No: 93/1</p>
            </div>
          </div>

          {/*  */}
          <div className="space-y-8">
            <h6 className="text-[#b9e0f2] font-semibold text-xl">Categories</h6>
            <div className="text-sm grid grid-cols-2 gap-5 text-[#94a9c9]">
              <NavLink className="flex gap-2 items-center cursor-pointer hover:-translate-y-1 duration-300 hover:text-[#1cc2e7]">
                Frontend
              </NavLink>
              <p className="flex gap-2 items-center cursor-pointer hover:-translate-y-1 duration-300 hover:text-[#1cc2e7]">
                Backend
              </p>
              <p className="flex gap-2 items-center cursor-pointer hover:-translate-y-1 duration-300 hover:text-[#1cc2e7]">
                React
              </p>
              <p className="flex gap-2 items-center cursor-pointer hover:-translate-y-1 duration-300 hover:text-[#1cc2e7]">
                JavaScript
              </p>
              <p className="flex gap-2 items-center cursor-pointer hover:-translate-y-1 duration-300 hover:text-[#1cc2e7]">
                Node js
              </p>
              <p className="flex gap-2 items-center cursor-pointer hover:-translate-y-1 duration-300 hover:text-[#1cc2e7]">
                Mongose
              </p>
              <p className="flex gap-2 items-center cursor-pointer hover:-translate-y-1 duration-300 hover:text-[#1cc2e7]">
                Tailwind css
              </p>
              <p className="flex gap-2 items-center cursor-pointer hover:-translate-y-1 duration-300 hover:text-[#1cc2e7]">
                Redux
              </p>
              <p className="flex gap-2 items-center cursor-pointer hover:-translate-y-1 duration-300 hover:text-[#1cc2e7]">
                Ai Tool
              </p>
              <p className="flex gap-2 items-center cursor-pointer hover:-translate-y-1 duration-300 hover:text-[#1cc2e7]">
                Digital Marketing
              </p>
            </div>
          </div>

          {/*  */}
          <div className="space-y-8">
            <h6 className="text-[#b9e0f2] font-semibold text-xl">Newsletter</h6>
            <p className="text-[#94a9c9] text-justify text-sm">
              Sign up to be first to receive the latest stories inspiring us,
              case studies, and industry news.
            </p>
            <div className="pb-2 border-b flex items-center text-[#94a9c9] gap-3  ">
              <FaUserAlt />
              <input
                type="text"
                className="bg-[#131c31] focus:outline-none "
                placeholder="Your Name "
              />
            </div>
            <div className="pb-2 border-b flex items-center text-[#94a9c9] gap-3  ">
              <MdEmail />
              <input
                type="text"
                className="bg-[#131c31] focus:outline-none "
                placeholder="Email Address"
              />
            </div>

            <button className="flex justify-center items-center gap-1 text-white font-semibold bg-gradient-to-r from-[#0ea5ea] to-[#0bd1d1] py-2 px-4 rounded-md   hover:from-[#0bd1d1]  hover:to-[#0ea5ea] transition duration-500 ease-in-out  ">
              Subscribe <HiArrowSmRight />
            </button>
          </div>
        </div>

        <div className="pt-10 flex justify-between">
          <div className="flex gap-2">
            <p className="text-[#b9e0f2]">© Created by </p>{" "}
            <p className=" text-[#1cc2e7] hover:-translate-y-1   duration-300 ... cursor-pointer">
              Sof-Tech-Programmer
            </p>
          </div>
          <div className="flex gap-14 text-[#94a9c9]">
            <span className="flex gap-2 items-center cursor-pointer hover:-translate-y-1 duration-300 hover:text-[#1cc2e7]">
              <AiOutlineTwitter /> Twitter
            </span>
            <span className="flex gap-2 items-center cursor-pointer hover:-translate-y-1 duration-300 hover:text-[#1cc2e7]">
              <FaLinkedinIn /> LinkedIn
            </span>
            <span className="flex gap-2 items-center cursor-pointer hover:-translate-y-1 duration-300 hover:text-[#1cc2e7]">
              <BsYoutube /> YouTube
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
