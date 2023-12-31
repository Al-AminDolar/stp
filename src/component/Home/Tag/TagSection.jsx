import React from "react";
import { IoMdHeart } from "react-icons/io";
import TagCard from "../../Card/TagCard/TagCard";
const tagname = [
  {
    id: 1,
    tagTitle: "Tailwind ",
    icon: <IoMdHeart />,
  },
  {
    id: 2,
    tagTitle: "React Js",
    icon: <IoMdHeart />,
  },
  {
    id: 3,
    tagTitle: "Node Js",
    icon: <IoMdHeart />,
  },
  {
    id: 4,
    tagTitle: "Digital M",
    icon: <IoMdHeart />,
  },
  {
    id: 5,
    tagTitle: "Freelanching",
    icon: <IoMdHeart />,
  },
  {
    id: 6,
    tagTitle: "JavaScript",
    icon: <IoMdHeart />,
  },
  {
    id: 7,
    tagTitle: "TypeScript",
    icon: <IoMdHeart />,
  },
  {
    id: 8,
    tagTitle: "Data base",
    icon: <IoMdHeart />,
  },
];
const TagSection = () => {
  return (
    <div className=" mt-20 max-w-sm md:max-w-none px-5">
      <h1 className="text-[45px]  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5ea] from-10% via-[#0bd1d1] via-20% to-[#0eea83] to-70% ">
        Popular Tags
      </h1>
      <h4 className=" text-lg text-[#94a9c9]">Most searched keywords</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-5">
        {tagname.map((data) => {
          return <TagCard key={data} data={data} />;
        })}
      </div>
    </div>
  );
};

export default TagSection;
