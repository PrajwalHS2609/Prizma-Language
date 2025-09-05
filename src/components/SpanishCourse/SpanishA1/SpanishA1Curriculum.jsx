import React from "react";
import redDot from "./../../../Imgs/redDot.png";
import rightArrow from "./../../../Imgs/right-arrow.png";
import Image from "next/image";
const SpanishA1Curriculum = () => {
  return (
    <div className="nestedGermanCurriculum">
      <div className="nestedGermanCurriculum-Head">
        <h4>Online Spanish A1 Course Curriculum</h4>
      </div>
      <div className="nestedGermanCurriculum-Content">
        <p>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            Qualified & experienced Spanish Teachers
          </li>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            Basic listening and conversation skills
          </li>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            Prepares students for SIELE and DELE A1 level
          </li>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            Assignments at the end of every session.
          </li>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            deal for those who need to travel to a Spanish speaking country
          </li>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            Makes students eligible for the next level
          </li>
        </p>
      </div>
    </div>
  );
};

export default SpanishA1Curriculum;
