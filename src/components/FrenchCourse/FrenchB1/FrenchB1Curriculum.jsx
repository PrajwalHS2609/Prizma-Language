import React from 'react'
import rightArrow from "./../../../Imgs/right-arrow.png";
import Image from "next/image";
const FrenchB1Curriculum = () => {
  return (
 <div className="nestedGermanCurriculum">
      <div className="nestedGermanCurriculum-Head">
        <h4>Online French B1 Course Curriculum</h4>
      </div>
      <div className="nestedGermanCurriculum-Content">
        <p>
          <li>
            {" "}
            <Image src={rightArrow} alt="rightArrow" />
            One can understand commonly used expressions. One can communicate in
            simple manner, using simple sentences and common phrases.
          </li>
        </p>
      </div>
    </div>
  )
}

export default FrenchB1Curriculum
