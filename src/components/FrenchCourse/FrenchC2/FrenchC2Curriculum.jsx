import React from "react";
import rightArrow from "./../../../Imgs/right-arrow.png";
import Image from "next/image";
const FrenchC2Curriculum = () => {
  return (
    <div className="nestedGermanCurriculum">
      <div className="nestedGermanCurriculum-Head">
        <h4>Online French C2 Course Curriculum</h4>
      </div>
      <div className="nestedGermanCurriculum-Content">
        <p>
          <h5>Mastery</h5>
          <li>
            {" "}
            <Image src={rightArrow} alt="rightArrow" />
            Proficiency increases as you speak with native speaker
          </li>
          <li>
            {" "}
            <Image src={rightArrow} alt="rightArrow" />
            Able to discuss about political and scientific research
          </li>
          <li>
            {" "}
            <Image src={rightArrow} alt="rightArrow" />
            Will be able to understand at any pace if a native speaker speaks
          </li>
          <li>
            {" "}
            <Image src={rightArrow} alt="rightArrow" />
            Every point in this level is completely based from A1 to C1 Level of
            the language
          </li>
        </p>
      </div>
    </div>
  );
};

export default FrenchC2Curriculum;
