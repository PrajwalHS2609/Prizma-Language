import React from "react";
import redDot from "./../../../Imgs/redDot.png";
import Image from "next/image";
import "./../GermanA1/GermanA1.css";

const GermanB2Curriculum = () => {
  return (
    <div className="nestedGermanCurriculum">
      <div className="nestedGermanCurriculum-Head">
        <h4>Online German B2 Course Curriculum</h4>
      </div>
      <div className="nestedGermanCurriculum-Content">
        <p>
          <h5>
            {" "}
            It is the upper intermediate level. The course begins with an
            introduction to the easier part of German B2 Grammar.
          </h5>
          <li>
            {" "}
            <Image src={redDot} alt="" />
            This course Consists of B2.1 and B2.2
          </li>
          <li>
            {" "}
            <Image src={redDot} alt="" />
            It covers Large Variety of Topics
          </li>
          <li>
            {" "}
            <Image src={redDot} alt="" />
            One learns to Use the Language in Everyday and Professional
            Situations
          </li>
          <li>
            {" "}
            <Image src={redDot} alt="" />
            Discussing Difficult Topics and Work-Related Issues
          </li>
          <li>
            {" "}
            <Image src={redDot} alt="" />
            Understanding the Formal Texts in Journals and Newspapers
          </li>
          <li>
            <Image src={redDot} alt="" />
            Discussions on Themes like Politics, Economy, Technology, People and
            Relationships, Environment and several other Topics.
          </li>
          <li>
            <Image src={redDot} alt="" />
            You will Get the Command of Language after successfully completing
            it.
          </li>
          <li>
            <Image src={redDot} alt="" />
            Learn to state Personal Views and Opinions in both Formal and
            Informal environment.
          </li>
          <li>
            <Image src={redDot} alt="" />
            Learn to Discuss, Analyze and Interpret different Texts
          </li>
          <li>
            <Image src={redDot} alt="" />
            Explaining Yourself on a wide range of Topics in a detailed Manner
          </li>
          <li>
            <Image src={redDot} alt="" />
            After completion, you will be able to lead a fluent and spontaneous
            Conversation with a Native Speaker
          </li>
          <li>
            <Image src={redDot} alt="" />
            Understanding specialized Discussions
          </li>
          <li>
            <Image src={redDot} alt="" />
            Certificate serves as a proof in Public, Professional and
            Educational Situations
          </li>
        </p>
      </div>
    </div>
  );
};

export default GermanB2Curriculum;
