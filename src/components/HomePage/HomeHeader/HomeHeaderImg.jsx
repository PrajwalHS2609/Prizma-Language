import React from "react";
import "./HomeHeader.css";
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import headerBanner from "./../../../Imgs/headerBanner.png"

import google from "./../../../Imgs/google.png";
import Image from "next/image";
const HomeHeaderImg = () => {
  return (
    <div className="homeHeaderImg">
      <Image
        src={headerBanner}
        alt="headerBanner"
      />
      <div className="homeHeaderStuCard">
        <div className="homeHeaderStuUser">
          <FaUser className="homeHeaderStuUserIco" />
        </div>
        <div className="homeHeaderStuTxt">
          {" "}
          <h5>STUDENTS</h5>
          <h3>10K+</h3>
        </div>
        <div className="homeHeaderStu">
          <div className="homeHeaderStuItem">
            <img
              src="https://demo.themeies.com/edugen-html/assets/images/banner/user1.jpg"
              alt=""
            />
          </div>
          <div className="homeHeaderStuItem">
            <img
              src="https://demo.themeies.com/edugen-html/assets/images/banner/user2.jpg"
              alt=""
            />
          </div>
          <div className="homeHeaderStuItem">
            <img
              src="https://demo.themeies.com/edugen-html/assets/images/banner/user3.jpg"
              alt=""
            />
          </div>
          <div className="homeHeaderStuItem">
            <img
              src="https://demo.themeies.com/edugen-html/assets/images/banner/user4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="homeHeaderFloatRate">
        <Image src={google} alt="" />
        <h5>Google</h5>
        <h5>
          4.9 <FaStar className="homeHeaderStarIco" />
        </h5>
      </div>
    </div>
  );
};

export default HomeHeaderImg;
