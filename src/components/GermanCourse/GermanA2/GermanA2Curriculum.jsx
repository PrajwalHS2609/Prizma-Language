import React from "react";
import redDot from "./../../../Imgs/redDot.png";
import rightArrow from "./../../../Imgs/right-arrow.png";
import Image from "next/image";
import "./../GermanA1/GermanA1.css";
const GermanA2Curriculum = () => {
  return (
    <div className="nestedGermanCurriculum">
      <div className="nestedGermanCurriculum-Head">
        <h4>Online German A2 Course Curriculum</h4>
      </div>
      <div className="nestedGermanCurriculum-Content">
        <p>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            It is the Elementary Level or The Upper Beginner Level
          </li>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            Duration of this course is 45-50 hours.
          </li>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            One can understand Sentences and Frequently used Expressions
          </li>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            This course offers an understanding on Common Topics which enables
            one to make him/ herself understood in simple, routine situations.{" "}
          </li>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            It includes core structure and grammar that will take your German to
            the next level.{" "}
          </li>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            Entire course focuses on Theme Based Topics
          </li>
        </p>
        <br />
        <p>
          <h5>What to expect after completion of this course?</h5>
          <li>
            <Image src={redDot} alt="" />
            One can easily conduct Conversations at Railway Stations or Offices
          </li>
          <li>
            <Image src={redDot} alt="" />
            Read and Understand Simple Texts
          </li>
          <li>
            <Image src={redDot} alt="" />
            Framing simply Connected Texts
          </li>
          <li>
            <Image src={redDot} alt="" />
            Answering “Why” Questions
          </li>
          <li>
            <Image src={redDot} alt="" />
            Talking about Cause and Effect (i.e when- then Sentences)
          </li>
          <li>
            <Image src={redDot} alt="" />
            Comparing different things
          </li>
          <li>
            <Image src={redDot} alt="" />
            Be able to Express Yourself Politely in Formal Situations
          </li>
        </p>
      </div>
    </div>
  );
};

export default GermanA2Curriculum;
