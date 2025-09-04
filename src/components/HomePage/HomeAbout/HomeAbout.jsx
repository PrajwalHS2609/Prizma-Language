import React from "react";
import HomeAboutImg from "./HomeAboutImg";
import HomeAboutTxt from "./HomeAboutTxt";

const HomeAbout = () => {
  return (
    <div className="homeAbout">
      <div className="homeAboutContent1">
        <HomeAboutImg />
      </div>
      <div className="homeAboutContent2">
        <HomeAboutTxt />
      </div>
    </div>
  );
};

export default HomeAbout;
