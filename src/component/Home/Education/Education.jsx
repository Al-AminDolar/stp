// Education.js

import { Timeline } from "antd";
import React from "react";
import "./education.css";

const Education = () => {
  return (
    <section className="mt-20 max-w-sm md:max-w-none px-5">
      <div className="container mx-auto">
        <h1 className="text-[45px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5ea] from-10% via-[#0bd1d1] via-20% to-[#0eea83] to-70%">
          Education And Experience
        </h1>
        <div className="flex flex-col md:flex-row px-5 md:px-0 md:gap-20 justify-center mt-10">
          <div className=" mt-10 space-y-20">
            <Timeline>
              <Timeline.Item color="green">
                {/* Education Section */}
                <div className="children ">
                  <div className="text-2xl font-bold text-[#0ea5ea]">
                    Daffodil International University
                  </div>
                  <div className="text-gray-600 text-base">
                    Bsc in Computer Science and Engineering
                  </div>
                  <div className="text-gray-600">CGP: 3.01</div>
                  <div className="text-[#34e71c]">2017 - 2021</div>
                </div>
              </Timeline.Item>
              <Timeline.Item color="green">
                {/* Example of another entry */}
                <div className=" children">
                  <div className="text-2xl font-bold text-[#0ea5ea]">
                    Government Mahtab Uddin Degree College
                  </div>
                  <div className="text-gray-600 text-base">
                    Higher Secondary School Certificate
                  </div>
                  <div className="text-gray-600">Department: Science</div>
                  <div className="text-gray-600">GPA: 4.50</div>
                  <div className="text-[#34e71c]">2016-2017</div>
                </div>
              </Timeline.Item>
              <Timeline.Item color="green">
                {/* Example of another entry */}
                <div className=" ">
                  <div className="text-2xl font-bold text-[#0ea5ea]">
                    Govt Naldanga Bhushan Pilot High School
                  </div>
                  <div className="text-gray-600 text-base">
                    Secondary School Certificate
                  </div>
                  <div className="text-gray-600">Department: Science</div>
                  <div className="text-gray-600">GPA: 5.00 (Golden A+)</div>
                  <div className="text-[#34e71c]">2014-2015</div>
                </div>
              </Timeline.Item>
            </Timeline>
          </div>

          <div className=" mt-10 space-y-10">
            <Timeline>
              <Timeline.Item color="green">
                <div className=" ">
                  <div className="text-2xl font-bold text-[#0ea5ea]">
                    Software Developer
                  </div>
                  <div className="text-gray-600 text-base">ABC Company</div>
                  <div className="text-[#34e71c]">June 2021 - Present</div>
                </div>
              </Timeline.Item>
              <Timeline.Item color="green">
                <div className=" ">
                  <div className="text-2xl font-bold text-[#0ea5ea]">
                    Software Developer
                  </div>
                  <div className="text-gray-600 text-base">ABC Company</div>
                  <div className="text-[#34e71c]">June 2021 - Present</div>
                </div>
              </Timeline.Item>
              <Timeline.Item color="green">
                <div className=" ">
                  <div className="text-2xl font-bold text-[#0ea5ea]">
                    Software Developer
                  </div>
                  <div className="text-gray-600 text-base">ABC Company</div>
                  <div className="text-[#34e71c]">June 2021 - Present</div>
                </div>
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
