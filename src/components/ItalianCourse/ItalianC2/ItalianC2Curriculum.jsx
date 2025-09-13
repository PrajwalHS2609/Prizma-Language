import React from 'react'
import rightArrow from "./../../../Imgs/right-arrow.png";
import redDot from "./../../../Imgs/redDot.png";

import Image from "next/image";
const ItalianC2Curriculum = () => {
  return (
<div className="nestedGermanCurriculum" id="details">
      <div className="nestedGermanCurriculum-Head">
        <h4>Online Italian C2 Course Curriculum</h4>
      </div>
      <div className="nestedGermanCurriculum-Content">
        <p>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            Proficiency increases as you speak with native speaker
          </li>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            Able to discuss about political and scientific research
          </li>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            Will be able to understand at any pace if a native speaker speaks
          </li>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            Every point in this level is completely based from A1 to C1 Level of
            the language
          </li>
        </p>
        <br />
        <p>
          <li>
            In the C2 Italian courses in Bangalore you will understand
            practically everything you read or hear without any problems. You
            can summarize information from different sources and present
            justifications and explanations uniformly. You can express yourself
            promptly, very fluently and precisely and be able to clarify subtle
            nuances within complex topics.
          </li>
          <br />
          <h5>Main topics:</h5>
          <li>
            <Image src={redDot} alt="" />
            Communication and media
          </li>
          <li>
            <Image src={redDot} alt="" />
            History and memories
          </li>
          <li>
            <Image src={redDot} alt="" />
            Feelings, lies, strengths and weaknesses
          </li>
          <li>
            <Image src={redDot} alt="" />
            School time
          </li>
          <li>
            <Image src={redDot} alt="" />
            Career opportunities and professions
          </li>
          <br />
          <h5>Grammar:</h5>
          <li>
            <Image src={redDot} alt="" />
            Tenses of the verbs
          </li>
          <li>
            <Image src={redDot} alt="" />
            Verbs with prefixes, which may or may not be separable
          </li>
          <li>
            <Image src={redDot} alt="" />
            Subjunctive II
          </li>
          <li>
            <Image src={redDot} alt="" />
            Subjunctive I
          </li>
          <li>
            <Image src={redDot} alt="" />
            Adverbial clauses
          </li>
          <li>
            <Image src={redDot} alt="" />
            Verbs and their complements
          </li>
          <li>
            <Image src={redDot} alt="" />
            Noun connectors
          </li>
          <li>
            <Image src={redDot} alt="" />
            Word formation of the nouns
          </li>
          <li>
            <Image src={redDot} alt="" />
            Participles as adjectives
          </li>
          <li>
            <Image src={redDot} alt="" />
            Nominalized adjectives and participles
          </li>
          <li>
            <Image src={redDot} alt="" />
            Relative clauses
          </li>
        </p>
      </div>
    </div>
  )
}

export default ItalianC2Curriculum
