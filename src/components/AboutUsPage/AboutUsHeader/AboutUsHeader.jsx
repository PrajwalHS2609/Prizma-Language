import React from "react";
import "./AboutUsHeader.css";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
const AboutUsHeader = (props) => {
  return (
    <div className="aboutUsHeader">
      <img
        src="https://demo.themeies.com/edugen-html/assets/images/shapes/pages2.png"
        alt=""
      />
      <img
        src="https://demo.themeies.com/edugen-html/assets/images/shapes/pages1.png"
        alt=""
      />
      <img
        src="https://demo.themeies.com/edugen-html/assets/images/shapes/pages3.png"
        alt=""
      />
      <div className="aboutUsHeaderCover">
        <h2>{props.heading}</h2>
        <BreadCrumb txt={props.bread} />
      </div>
    </div>
  );
};

export default AboutUsHeader;
