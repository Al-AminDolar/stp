import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedinIn, FaUserAlt } from "react-icons/fa";
import { HiArrowSmRight } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div className="container mx-auto w-[1100px] pb-5 ">
      <div className="border border-gray-800 rounded-[50px] p-20 bg-[#131c31]  ">
        <div className="grid grid-cols-3 gap-10 border-b pb-20">
          <div className="space-y-8">
            <h4 className="text-[#d8e6fb] text-4xl font-bold">S.T.P</h4>
            <p className="text-[#94a9c9] text-justify">
              Thank you so much for visiting my site. I am always trying to give
              my best effort for any projet or product. If You want to convert
              your idea into a smart application then you most welcome
            </p>

            <div>
              <h6 className="text-[#b9e0f2] font-semibold mb-1">Address</h6>
              <p className="text-[#94a9c9] text-base">Dhandmondi 27</p>
              <p className="text-[#94a9c9] text-base">Tallbag Road 93No Home</p>
            </div>
          </div>
          <div className="space-y-8">
            <h6 className="text-[#b9e0f2] font-semibold text-xl">Categories</h6>
            <div className="space-y-4 text-base">
              <span className="flex justify-between text-[#94a9c9]">
                <p>Frontend</p>
                <p>Backend</p>
              </span>
              <span className="flex justify-between text-[#94a9c9]">
                <p>React</p>
                <p>JavaScript</p>
              </span>
              <span className="flex justify-between text-[#94a9c9]">
                <p>Node js</p>
                <p>Mongose</p>
              </span>
              <span className="flex justify-between text-[#94a9c9]">
                <p>Tailwind css</p>
                <p>Redux</p>
              </span>
              <span className="flex justify-between text-[#94a9c9]">
                <p>Technology</p>
                <p>Artifical Inteligence</p>
              </span>
              <span className="flex justify-between text-[#94a9c9]">
                <p>Travelling</p>
                <p>Digital Marketing</p>
              </span>
            </div>
          </div>
          <div className="space-y-8">
            <h6 className="text-[#b9e0f2] font-semibold text-xl">Newsletter</h6>
            <p className="text-[#94a9c9] text-justify text-base">
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

            <button
              className="flex items-center gap-1 text-white justify-center font-semibold py-2 px-4 
            bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-lg text-white hover:from-cyan-400 hover:via-blue-500 hover:to-cyan-400 transition ease-in-out duration-100
          "
            >
              Subscribe <HiArrowSmRight />
            </button>
          </div>
        </div>

        <div className="pt-10 flex justify-between">
          <p className="text-[#b9e0f2]">
            © Created by{" "}
            <span className="text-[#1cc2e7] cursor-pointer hover:font-semibold transition ease-in-out  duration-100">
              Soft-Tech-Programmer
            </span>
          </p>

          <div className="flex gap-14 text-[#94a9c9]">
            <span className="flex gap-2 items-center">
              <AiOutlineTwitter /> Twitter
            </span>
            <span className="flex gap-2 items-center">
              <FaLinkedinIn /> LinkedIn
            </span>
            <span className="flex gap-2 items-center">
              <BsYoutube /> YouTube
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
