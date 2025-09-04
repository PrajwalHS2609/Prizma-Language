import React from "react";
import "./HomeWhy.css";
import { FaUserGraduate } from "react-icons/fa";
import { BiSolidBookBookmark } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa6";
import { FaChalkboard } from "react-icons/fa";

const HomeWhy = () => {
  return (
    <div className="homeWhy">
      <div className="homeWhyCover">
        <div className="homeWhyContent">
          <div className="homeWhyItem">
            <FaUserGraduate className="whyIcon"/>
          </div>
          <span>
            {" "}
            <h3>8000+</h3>
            <p>Enrolled Students</p>
          </span>
        </div>
        <div className="homeWhyContent">
          <div className="homeWhyItem">
            <BiSolidBookBookmark className="whyIcon"/>

          </div>
          <span>
            {" "}
            <h3>6</h3>
            <p>Foreign Languages</p>
          </span>
        </div>
        <div className="homeWhyContent">
          <div className="homeWhyItem">
            <FaGraduationCap className="whyIcon"/>
          </div>
          <span>
            {" "}
            <h3>95%</h3>
            <p>A1 & A2</p>
          </span>
        </div>
        <div className="homeWhyContent">
          <div className="homeWhyItem">
            <FaChalkboard className="whyIcon"/>
          </div>
          <span>
            {" "}
            <h3>1600+</h3>
            <p>Reviews</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeWhy;
