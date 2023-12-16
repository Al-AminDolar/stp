import React from "react";
import BlogSection from "./Blogs/BlogSection";
import HeroSection from "./Hero/HeroSection";
import PostSection from "./Post/PostSection";
import ProjectSection from "./Project/ProjectSection";
import SliderSection from "./Slider/SliderSection";
import TagSection from "./Tag/TagSection";

const Home = () => {
  return (
    <div className="container mx-auto w-[1000px]">
      <HeroSection />
      <SliderSection />
      <ProjectSection />
      <BlogSection />
      <TagSection />
      <PostSection />
    </div>
  );
};

export default Home;
