import React from "react";
import "./CourseMain.css";
import Link from "next/link";
const CourseMainCard = (props) => {
  return (
    <div className="courseMainCard">
      <div className="courseMainCardImg">
        <img src={props.img} alt="" />
      </div>
      <div className="courseMainCardTxt">
        <h3>{props.head}</h3>
        <p>{props.para}</p>
      </div>
      <div className="courseMainCardBtn">
        <Link href={props.link}>
          <h4>Read More</h4>
        </Link>
      </div>
    </div>
  );
};

export default CourseMainCard;
