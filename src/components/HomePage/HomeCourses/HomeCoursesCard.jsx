"use client";
import React from "react";
import "./HomeCourses.css";
import rating from "./../../../Imgs/rating.png";
import { FaArrowRight } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const HomeCoursesCard = (props) => {
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="homeCoursesCard">
      <Image src={props.img} alt="" />
      <div className="homeCoursesCardContent">
        <div className="homeCoursesCardTxt">
          <div className="courseType">{props.courseType}</div>
        </div>
        <div className="homeCoursesCardTxt">
         <Link href={props.link}> <h4>{props.courseName}</h4></Link>
          <Image src={rating} alt="" /> <span>(4.9 ratings)</span>
        </div>
        <div className="homeCoursesCardTxt">
          <p>{props.courseDescription}</p>
        </div>
        <div className="homeCoursesCardTxt">
          <div className="enroll">
            <FaUserGroup className="studIcon" />
            {props.students}+ students
          </div>
          <div className="enroll" onClick={handlePopUp}>
            <Link href="">
              ENROLL NOW <FaArrowRight className="menuIcon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCoursesCard;
