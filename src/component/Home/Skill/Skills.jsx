import { Progress } from "antd";
import "../../../styles.css";
const Skills = () => {
  const skills = [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 75 },
    { name: "TAILWIND CSS", level: 80 },
    { name: "BOOTSTRAP", level: 50 },
    { name: "JAVASCRIPT", level: 70 },
    { name: "REACT", level: 70 },
    { name: "NODE.JS", level: 50 },
    { name: "EXPRESS", level: 50 },
    { name: "MONGODB", level: 70 },
    { name: "FIREBASE", level: 70 },

    // Add more skills as needed
  ];

  return (
    <div className="md:mt-20 max-w-sm md:max-w-none  ">
      <h1 className="text-3xl md:text-[45px] lg:text-[45px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5ea] from-10% via-[#0bd1d1] via-20% to-[#0eea83] to-70%  text-center mb-10">
        My Skills
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-5  px-10 md:p-0 md:pt-10">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center">
            <span className="w-1/3 md:w-1/4 pr-4 font-medium text-[#42dd95]">
              {skill.name}
            </span>
            <Progress
              size="small"
              trailColor="#878e9b"
              percent={skill.level}
              status="active"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
