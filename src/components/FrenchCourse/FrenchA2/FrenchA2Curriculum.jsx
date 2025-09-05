import React from "react";
import rightArrow from "./../../../Imgs/right-arrow.png";
import Image from "next/image";

const FrenchA2Curriculum = () => {
  return (
    <div className="nestedGermanCurriculum">
      <div className="nestedGermanCurriculum-Head">
        <h4>Online French A2 Course Curriculum</h4>
      </div>
      <div className="nestedGermanCurriculum-Content">
        <p>
          <li>
            {" "}
            <Image src={rightArrow} alt="rightArrow" />
            One can understand and discuss about various topics encountered in
            daily life and give their opinion about such topics.
          </li>
        </p>
      </div>
    </div>
  );
};

export default FrenchA2Curriculum;
