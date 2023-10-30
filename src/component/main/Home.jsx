import React from "react";
import Blogs from "./Blogs";
import Caurosel from "./Caurosel";
import MainPage from "./MainPage";
import PopularTag from "./PopularTag";
import Posts from "./Posts";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="container mx-auto w-[870px]">
      <MainPage />
      <Caurosel />
      <Projects />
      <Blogs />
      <PopularTag />
      <Posts />
    </div>
  );
};

export default Home;
