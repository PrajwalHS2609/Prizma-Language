import React from "react";
import "./HomeAbout.css";
import { FaArrowRight } from "react-icons/fa6";

const HomeAboutImg = () => {
  return (
    <div className="homeAboutImg">
      <div className="homeAboutImgContent">
        <div className="homeAboutImgItem">
          <img
            src="https://demo.themeies.com/edugen-html/assets/images/about/about1.jpg"
            alt=""
          />
        </div>
        <div className="homeAboutImgItem">
          <img
            src="https://demo.themeies.com/edugen-html/assets/images/about/about2.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="homeAboutImgContent">
        <div className="homeAboutImgItem2">
          <img
            src="https://demo.themeies.com/edugen-html/assets/images/about/about3.jpg"
            alt=""
          />
        </div>
        <div className="homeAboutXp">
          <span>
            {" "}
            <h3>15 </h3> <p>years of experience</p>
          </span>
          <FaArrowRight  className="aboutImgIcon"/>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutImg;
