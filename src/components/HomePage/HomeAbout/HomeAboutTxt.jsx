"use client"
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const HomeAboutTxt = () => {
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="homeAboutTxt">
      <h2>
        About <span>Prizma</span>
      </h2>
      <p>
        Prizma Academy is a well-renowned foreign language institute that
        provides online foreign language courses such as German, French,
        Japanese, Spanish, and many more. Whether you are learning languages
        online to study or work abroad or simply want to explore different
        cultures, you will find courses to assist you on your way.
      </p>
      <h3>
        Our <span>Mission</span>
      </h3>
      <p>
        Empowering individuals to communicate confidently in a globalized world
        through accessible, high-quality foreign language education that fosters
        cultural understanding and unlocks opportunities.
      </p>
      <h3>
        Our <span>Vision</span>
      </h3>
      <p>
        To become a premier foreign language institute known for innovative
        teaching, expert trainers, and shaping global citizens, fostering a
        world where language bridges cultures and builds a harmonious global
        community.
      </p>
      <div className="aboutTxtBtn">
        <button onClick={handlePopUp}>
          <FaArrowRight className="menuBtnIcon"/>
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default HomeAboutTxt;
