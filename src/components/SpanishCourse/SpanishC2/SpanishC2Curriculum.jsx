import React from "react";
import rightArrow from "./../../../Imgs/right-arrow.png";
import redDot from "./../../../Imgs/redDot.png";

import Image from "next/image";
const SpanishC2Curriculum = () => {
  return (
    <div className="nestedGermanCurriculum">
      <div className="nestedGermanCurriculum-Head">
        <h4>Online Spanish C2 Course Curriculum</h4>
      </div>
      <div className="nestedGermanCurriculum-Content">
        <p>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            Proficiency increases as you speak with native speaker
          </li>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            Able to discuss about political and scientific research
          </li>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            Will be able to understand at any pace if a native speaker speaks
          </li>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            Every point in this level is completely based from A1 to C1 Level of
            the language
          </li>
        </p>
        <br />
        <p>
          <h5>COURSE HIGHLIGHTS</h5>
          <li>
            <Image src={redDot} alt="" />
            Assignments at the end of every session.
          </li>
          <li>
            <Image src={redDot} alt="" />
            Qualified & experienced Spanish Teachers
          </li>
          <li>
            <Image src={redDot} alt="" />
            Advanced listening and conversation skills
          </li>
        </p>
      </div>
    </div>
  );
};

export default SpanishC2Curriculum;
