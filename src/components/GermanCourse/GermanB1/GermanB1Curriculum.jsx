import React from "react";
import rightArrow from "./../../../Imgs/redDot.png";
import redDot from "./../../../Imgs/right-arrow.png";
import Image from "next/image";
import "./../GermanA1/GermanA1.css";
const GermanB1Curriculum = () => {
  return (
    <div className="nestedGermanCurriculum">
      <div className="nestedGermanCurriculum-Head">
        <h4>Online German B1 Course Curriculum</h4>
      </div>
      <div className="nestedGermanCurriculum-Content">
        <p>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            It is the intermediate level after which one can fluently express
            him/herself in German.{" "}
          </li>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            It is the basic requirement for most of the Germany based
            organizations and Universities.{" "}
          </li>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            It is an extension of A1 and A2 Levels after which one can frame
            Sentences with Advanced Grammar Structure{" "}
          </li>
        </p>
        <br />
        <p>
          <h5>What to expect after completion of this course?</h5>
          <li>
            <Image src={redDot} alt="" />
            You will learn to frame complexly connected Texts
          </li>
          <li>
            <Image src={redDot} alt="" />
            This course offers Wider Range of Situations and Vocabulary.
          </li>
          <li>
            <Image src={redDot} alt="" />
            One learns to Use the Language in Everyday and Professional
            Situations{" "}
          </li>
          <li>
            <Image src={redDot} alt="" />
            The offers variety of interesting topics for Discussion
          </li>
          <li>
            <Image src={redDot} alt="" />
            One learns to Describe Experiences, Events, Dreams, Hopes and
            Ambitions{" "}
          </li>
          <li>
            <Image src={redDot} alt="" />
            Ability to briefly give Opinions
          </li>
          <li>
            <Image src={redDot} alt="" />
            Certificate is widely recognized by employers as sufficient evidence
            of Proficiency in German{" "}
          </li>
          <li>
            <Image src={redDot} alt="" />
            Improves the Chances of Success on Job Market
          </li>
        </p>
      </div>
    </div>
  );
};

export default GermanB1Curriculum;
