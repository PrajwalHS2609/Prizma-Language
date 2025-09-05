import Image from 'next/image'
import React from 'react'
import rightArrow from "./../../../Imgs/right-arrow.png";

const FrenchA1Curriculum = () => {
  return (
   <div className="nestedGermanCurriculum">
         <div className="nestedGermanCurriculum-Head">
           <h4>Online French A1 Course Curriculum</h4>
         </div>
         <div className="nestedGermanCurriculum-Content">
           <p>
             <li>
               {" "}
               <Image src={rightArrow} alt="" />
               One can understand commonly used expressions. One can communicate in
               simple manner, using simple sentences and common phrases.
             </li>
           </p>
         </div>
       </div>
  )
}

export default FrenchA1Curriculum
