"use client"
import React from "react";
import "./CourseHeader.css";
import reading from "./../../Imgs/reading.png";
import listening from "./../../Imgs/listening.png";
import writing from "./../../Imgs/writing.png";
import speaking from "./../../Imgs/speaking.png";
import Image from "next/image";
const CourseHeader = (props) => {
    const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
    }
  return (
    <div className="coursesHeader-container">
      <div className="coursesHeader-content">
        <h2>{props.country}</h2>
        <div className="bar"><Image src={props.bar} alt=""/></div>
      </div>
      <div className="coursesHeader-content">
        <Image src={props.img} alt={props.heading} />
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
              <button onClick={handlePopUp}>Speak To Advisor</button>
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
            <button onClick={handlePopUp}>View Course Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
