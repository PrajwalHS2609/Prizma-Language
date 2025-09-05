import React from 'react'
import rightArrow from "./../../../Imgs/right-arrow.png";
import Image from "next/image";
const FrenchC1Curriculum = () => {
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
         Advanced
          </li>
        </p>
      </div>
    </div>
  )
}

export default FrenchC1Curriculum
