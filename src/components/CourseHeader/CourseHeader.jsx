import React from "react";
import "./CourseHeader.css";
import reading from "./../../Imgs/reading.png";
import listening from "./../../Imgs/listening.png";
import writing from "./../../Imgs/writing.png";
import speaking from "./../../Imgs/speaking.png";
import Link from "next/link";
import Image from "next/image";
const CourseHeader = (props) => {
  return (
    <div className="coursesHeader-container">
      <div className="coursesHeader-content">
        <h2>{props.country}</h2>
        <div className="bar"></div>
      </div>
      <div className="coursesHeader-content">
        <img src={props.img} alt={props.heading} />
        <div className="coursesHeader-cover">
          <div className="coursesHeader-title">
            <h2>{props.heading}</h2>
          </div>
          <div className="coursesHeader-desp" id="coursesHeader-desp1">
            <div className="coursesHeader-despContent">
              <li>
                <Image src={speaking} alt="speaking" /> Speaking
              </li>
              <li>
                <Image src={listening} alt="listening" />
                Listening
              </li>
              <li>
                <Image src={reading} alt="reading" />
                Reading
              </li>
              <li>
                <Image src={writing} alt="writing" />
                Writing
              </li>
            </div>
            <div className="coursesHeader-despContent">
              <p>{props.description}</p>
            </div>
            <div className="coursesHeader-despContent">
              <Link href={props.link}>View Course Details</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="coursesHeader-content">
        <div className="coursesHeader-desp" id="coursesHeader-desp2">
          <div className="coursesHeader-despContent">
            <li>
              <Image src={speaking} alt="speaking" /> Speaking
            </li>
            <li>
              <Image src={listening} alt="listening" />
              Listening
            </li>
            <li>
              <Image src={reading} alt="reading" />
              Reading
            </li>
            <li>
              <Image src={writing} alt="writing" />
              Writing
            </li>
          </div>
          <div className="coursesHeader-despContent">
            <p>
              If you have a basic knowledge of German , you are ready to move on
              to our Elementary courses where you’ll build upon the foundations
              and gain a more solid understanding of the language.
            </p>
          </div>
          <div className="coursesHeader-despContent">
            <Link href={"/"}>View Course Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
