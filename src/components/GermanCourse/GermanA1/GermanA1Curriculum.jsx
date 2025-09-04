import React from 'react'
import rightArrow from "./../../../Imgs/redDot.png";
import redDot from "./../../../Imgs/right-arrow.png";
import Image from 'next/image';
import "./GermanA1.css"
const GermanA1Curriculum = () => {
  return (
  <div className="nestedGermanCurriculum">
      <div className="nestedGermanCurriculum-Head">
        <h4>Online German A1 Course Curriculum</h4>
      </div>
      <div className="nestedGermanCurriculum-Content">
        <p>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            It is the Beginner’s Level course.
          </li>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            Learn the Alphabets, Numbers and Pronunciation
          </li>
          <li>
            {" "}
            <Image src={rightArrow} alt="" />
            Entire course covers Theme based Topics
          </li>
        </p>
        <br />
        <p>
          <h5>What to expect after completion of this course?</h5>
          <li>
            <Image src={redDot} alt="" />
            After completion of course, you can confidently introduce yourself
            in German.
          </li>
          <li>
            <Image src={redDot} alt="" />
            You can conduct the basic conversations in day-to-day life in
            Germany.
          </li>
          <li>
            <Image src={redDot} alt="" />
            Making an Appointment in German becomes easy.
          </li>
          <li>
            <Image src={redDot} alt="" />
            Ordering Food in Cafes and Restaurants.
          </li>
          <li>
            <Image src={redDot} alt="" />
            Conversations in a Supermarket or a shopping mall
          </li>
          <li>
            <Image src={redDot} alt="" />
            Understanding Announcements at Railway Stations or Airports
          </li>
          <li>
            <Image src={redDot} alt="" />
            You can plan different events like vacations, birthdays and
            organizing parties.
          </li>
          <li>
            <Image src={redDot} alt="" />
            You will be able to give commands, orders and instructions.
          </li>
          <li>
            <Image src={redDot} alt="" />
            Asking for and giving Information at different places like Railway
            Stations or Airports.
          </li>
          <li>
            <Image src={redDot} alt="" />
            Asking the Way and Giving Directions
          </li>
          <li>
            <Image src={redDot} alt="" />
            With A1 level, it becomes easier to spend a short period of time in
            Germany.
          </li>
        </p>
      </div>
    </div>
  )
}

export default GermanA1Curriculum
