import React from "react";
import About from "./About/About";
import BlogSection from "./Blogs/BlogSection";
import Education from "./Education/Education";
import HeroSection from "./Hero/HeroSection";
import PostSection from "./Post/PostSection";
import ProjectSection from "./Project/ProjectSection";
import Skills from "./Skill/Skills";
import SliderSection from "./Slider/SliderSection";
import TagSection from "./Tag/TagSection";

const Home = () => {
  return (
    <div className="container mx-auto w-[1000px]">
      <HeroSection />
      <SliderSection />
      <About />
      <Skills />
      <ProjectSection />
      <Education />
      <BlogSection />
      <TagSection />
      <PostSection />
    </div>
  );
};

export default Home;
