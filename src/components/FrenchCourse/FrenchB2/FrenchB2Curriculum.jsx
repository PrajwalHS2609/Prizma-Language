import React from "react";
import rightArrow from "./../../../Imgs/right-arrow.png";
import Image from "next/image";
const FrenchB2Curriculum = () => {
  return (
    <div className="nestedGermanCurriculum">
      <div className="nestedGermanCurriculum-Head">
        <h4>Online French B2 Course Curriculum</h4>
      </div>
      <div className="nestedGermanCurriculum-Content">
        <p>
          <li>
            {" "}
            <Image src={rightArrow} alt="rightArrow" />
            One can understand more advanced topics. One can also, speak about
            such topics more extensively and participate in such discussions.
          </li>
        </p>
      </div>
    </div>
  );
};

export default FrenchB2Curriculum;
