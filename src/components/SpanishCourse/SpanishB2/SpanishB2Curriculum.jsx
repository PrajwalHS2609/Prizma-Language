import React from "react";
import rightArrow from "./../../../Imgs/right-arrow.png";
import Image from "next/image";
const SpanishB2Curriculum = () => {
  return (
    <div className="nestedGermanCurriculum">
      <div className="nestedGermanCurriculum-Head">
        <h4>Online Spanish A2 Course Curriculum</h4>
      </div>
      <div className="nestedGermanCurriculum-Content">
        <p>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            Assignments at the end of every session.
          </li>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            Qualified & experienced Spanish Teachers
          </li>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            Advanced listening and conversation skills
          </li>
        </p>
      </div>
    </div>
  );
};

export default SpanishB2Curriculum;
