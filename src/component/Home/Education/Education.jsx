// Education.js

import React from "react";

const Education = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h1 className="text-[45px]  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5ea] from-10% via-[#0bd1d1] via-20% to-[#0eea83] to-70% ">
          Education
        </h1>

        <div className="flex mt-10">
          <div className="w-1/2">
            <div className="text-lg font-bold text-[#0ea5ea]">
              Daffodil International University
            </div>
            <div className="text-gray-600">
              Bsc in Computer Science and Engineering
            </div>
            <div className="text-gray-600">CGP : 3.01</div>
            <div className="text-gray-600">2017 - 2021</div>
          </div>

          {/* Add more education entries as needed */}

          {/* Example of another entry */}
          <div className="w-1/2 ml-8">
            <div className="text-lg font-bold text-[#0ea5ea]">
              Government Mahtab Uddin Degree College
            </div>
            <div className="text-gray-600">
              Higher Secondary School Certificate
            </div>
            <div className="text-gray-600">Department : Science</div>
            <div className="text-gray-600">GPA : 4.50</div>
            <div className="text-gray-600">2016-2017</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
