import React from "react";
import "./HomeHeader.css";
import HomeHeaderTxt from "./HomeHeaderTxt";
import HomeHeaderImg from "./HomeHeaderImg";
const HomeHeader = () => {
  return (
    <div className="homeHeaderContainer">
      <img
        className="firstImg"
        src="https://demo.themeies.com/edugen-html/assets/images/banner/banner-shape8.png"
        alt=""
      />
      <div className="homeHeaderContent1">
        <HomeHeaderTxt />
      </div>
      <div className="homeHeaderContent2">
        <HomeHeaderImg/>
      </div>
    </div>
  );
};

export default HomeHeader;
