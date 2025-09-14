import React from "react";
import "./CourseCategory.css";
import Link from "next/link";
const CourseCategoryCard = (props) => {
  return (
    <div className="courseCategoryCard" id={props.id}>
      <div className="hexagon">
        <img
          src="https://demo.themeies.com/edugen-html/assets/images/categories/categories1.svg"
          alt=""
        />
      </div>
      <div className="courseCategoryCardTxt">
        <Link href={props.link}><h3>{props.head}</h3></Link>
        <p>{props.lvl}</p>
      </div>
    </div>
  );
};

export default CourseCategoryCard;
