
"use client"
import React from "react";
import "./HomeHeader.css";
import { FaArrowRight } from "react-icons/fa6";

const HomeHeaderTxt = () => {
const handlePopUp = (e) => {
  e.preventDefault();
  const popup = document.querySelector(".popup");
  if (popup) {
    popup.style.display = "flex";
  } else {
    console.warn("No element with .popup found");
  }
};
  return (
    <div className="header1">
      <h6>Online Education </h6>
      <h2>
        Speak the Language of Success Learn Foreign Languages{" "}
        <span>Online</span>
      </h2>
      <p>
        Unlock global opportunities and elevate your career by mastering foreign
        languages from the comfort of your home!
      </p>
      <div className="homeHeaderBtn">
        <button onClick={handlePopUp}>
          <FaArrowRight className="menuBtnIcon"/>
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default HomeHeaderTxt;
