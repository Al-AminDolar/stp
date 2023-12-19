// Education.js

import React from "react";

const Education = () => {
  return (
    <section className="pt-20">
      <div className="container mx-auto">
        <h1 className="text-[45px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5ea] from-10% via-[#0bd1d1] via-20% to-[#0eea83] to-70%">
          Education And Experience
        </h1>
        <div className="grid grid-cols-2 justify-center ">
          <div className=" mt-10 space-y-10">
            {/* Education Section */}
            <div className=" ">
              <div className="text-lg font-bold text-[#0ea5ea]">
                Daffodil International University
              </div>
              <div className="text-gray-600">
                Bsc in Computer Science and Engineering
              </div>
              <div className="text-gray-600">CGP: 3.01</div>
              <div className="text-gray-600">2017 - 2021</div>
            </div>

            {/* Add more education entries as needed */}
            {/* Example of another entry */}
            <div className=" ">
              <div className="text-lg font-bold text-[#0ea5ea]">
                Government Mahtab Uddin Degree College
              </div>
              <div className="text-gray-600">
                Higher Secondary School Certificate
              </div>
              <div className="text-gray-600">Department: Science</div>
              <div className="text-gray-600">GPA: 4.50</div>
              <div className="text-gray-600">2016-2017</div>
            </div>

            {/* Example of another entry */}
            <div className=" ">
              <div className="text-lg font-bold text-[#0ea5ea]">
                Govt Naldanga Bhushan Pilot High School
              </div>
              <div className="text-gray-600">Secondary School Certificate</div>
              <div className="text-gray-600">Department: Science</div>
              <div className="text-gray-600">GPA: 5.00 (Golden A+)</div>
              <div className="text-gray-600">2014-2015</div>
            </div>
          </div>

          <div className=" mt-10 space-y-10">
            {/* Experience Section */}
            <div className=" ">
              <div className="text-lg font-bold text-[#0ea5ea]">
                Software Developer
              </div>
              <div className="text-gray-600">ABC Company</div>
              <div className="text-gray-600">June 2021 - Present</div>
            </div>

            <div className=" ">
              <div className="text-lg font-bold text-[#0ea5ea]">
                Software Developer
              </div>
              <div className="text-gray-600">ABC Company</div>
              <div className="text-gray-600">June 2021 - Present</div>
            </div>

            {/* Add more experience entries as needed */}
            {/* Example of another entry */}
            <div className=" ">
              <div className="text-lg font-bold text-[#0ea5ea]">
                Intern, Web Development
              </div>
              <div className="text-gray-600">XYZ Tech Solutions</div>
              <div className="text-gray-600">May 2020 - August 2020</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
