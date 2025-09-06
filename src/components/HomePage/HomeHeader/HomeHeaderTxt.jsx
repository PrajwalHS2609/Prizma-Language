"use client";
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
        Master <span>German</span>, <span>French</span>, <span>Spanish</span> &
        More – Anytime, Anywhere!
      </h2>
      <p>
        Learn from certified trainers. Flexible timings, interactive classes,
        and globally recognized training—build fluency and unlock
        worldwide opportunities.
      </p>
      <div className="homeHeaderBtn">
        <button onClick={handlePopUp}>
          <FaArrowRight className="menuBtnIcon" />
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default HomeHeaderTxt;
