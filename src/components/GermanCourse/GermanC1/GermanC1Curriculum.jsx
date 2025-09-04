import React from "react";
import redDot from "./../../../Imgs/redDot.png";
import rightArrow from "./../../../Imgs/right-arrow.png";
import Image from "next/image";
import "./../GermanA1/GermanA1.css";
const GermanC1Curriculum = () => {
  return (
    <div className="nestedGermanCurriculum" id="details">
      <div className="nestedGermanCurriculum-Head">
        <h4>Online German C1 Course Curriculum</h4>
      </div>
      <div className="nestedGermanCurriculum-Content">
        <p>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            It is the advanced level and a higher Proficiency Language level.
            The course is sub divided into C1.1 and C1.2.
          </li>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            It helps to prepare to study at a University in Germany.
          </li>
        </p>
        <br />
        <p>
          <h5>What to expect after completion of this course?</h5>
          <li>
            <Image src={redDot} alt="" />
            Can understand a wide range of demanding, longer texts and also
            recognize implicit meaning.
          </li>
          <li>
            <Image src={redDot} alt="" />
            Can express ideas spontaneously and fluently without any searching
            of words.
          </li>
          <li>
            <Image src={redDot} alt="" />
            Can easily speak in social, professional and economic scenarios.
          </li>
          <li>
            <Image src={redDot} alt="" />
            Can summarize information from a variety of spoken and written
            sources.
          </li>
          <li>
            <Image src={redDot} alt="" />
            Can create detailed presentations and reports.
          </li>
        </p>
      </div>
    </div>
  );
};

export default GermanC1Curriculum;
