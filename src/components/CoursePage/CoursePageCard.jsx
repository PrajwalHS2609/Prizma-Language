import React from "react";
import "./CourseMain/CourseMain.css";
import Link from "next/link";
import Image from "next/image";
const CoursePageCard = (props) => {
  return (
    <div className="courseMainCard">
      <div className="courseMainCardImg">
        <Image src={props.img} alt="LevelBg" />
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

export default CoursePageCard;
