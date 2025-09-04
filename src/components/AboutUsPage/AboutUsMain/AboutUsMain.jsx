import React from "react";
import "./AboutUsMain.css";
import AboutUsMainImg from "./AboutUsMainImg";
import AboutUsMainTxt from "./AboutUsMainTxt";
const AboutUsMain = () => {
  return (
    <div className="aboutUsMain">
      <div className="aboutUsMainContainer1">
        <AboutUsMainImg />
      </div>
      <div className="aboutUsMainContainer2">
        <AboutUsMainTxt />
      </div>
    </div>
  );
};

export default AboutUsMain;
