import React from "react";
import { HiArrowSmDown } from "react-icons/hi";
import aboutImg from "../../../assets/final-removebg-preview.png";
const About = () => {
  return (
    <div className=" md:mt-20 max-w-sm md:max-w-none lg:max-w-none">
      <h1 className="text-3xl  md:text-[45px]  lg:text-[45px]  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5ea] from-10% via-[#0bd1d1] via-20% to-[#0eea83] to-70%  text-center">
        About Me
      </h1>
      ;
      <div className="flex flex-col md:flex-row items-center md:items-start bg-[#131c31]  p-10 rounded-lg shadow-lg m-5 md:m-0 md:mt-5 ">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
          <img
            src={aboutImg}
            alt="Your Name"
            className="object-cover max-w-xs md:w-[400px] "
          />

          <button className="flex justify-center items-center gap-1 text-black font-semibold bg-gradient-to-r from-[#0ea5ea] to-[#0bd1d1] py-2 px-4 rounded-md   hover:from-[#0bd1d1]  hover:to-[#0ea5ea] transition duration-500 ease-in-out  ml-7 ">
            Download Ressume <HiArrowSmDown />
          </button>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2 text-[#0dade6]">
            Building the Future, Line by Line
          </h2>
          <div className="text-[#94a9c9] text-sm space-y-3 text-justify">
            <p>
              Hey, my name is Alamin. Originally from Jhenidah, I embarked on my
              technological journey by graduating in Computer Science and
              Engineering from Daffodil International University. Today, I stand
              proud as a full-stack web developer, weaving the fabric of
              tomorrow's digital landscape one line of code at a time.
            </p>
            <p>
              My toolkit is rich with skills in React.js, MongoDB, Express,
              Firebase, and Heroku. These tools have been my companions in
              turning ideas into reality, crafting projects that not only
              demonstrate my learning but also my dedication to the art of web
              development. Each project is a piece of a larger puzzle, a segment
              of the digital landscape I'm helping to shape.
            </p>
            <p>
              Beyond my technical endeavors, I'm a lifelong learner, constantly
              exploring the latest in tech trends and software development. My
              goal is to find an internship where I can shine, refine my skills,
              and contribute to a team as passionate about innovation as I am.
            </p>
            <p>
              Join me as we embark on a journey to innovate and inspire,
              building the future one line of code at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
