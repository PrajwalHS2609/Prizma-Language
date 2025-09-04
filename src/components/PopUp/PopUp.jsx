"use client"
import React from "react";
import "./PopUp.css";
import PopUpForm from "./PopUpForm";
import { FaXmark } from "react-icons/fa6";



const PopUp = () => {
  let handleExit = (e) => {
  e.preventDefault();
  document.querySelector(".popup").style.display = "none";
};
  return (
    <div className="popup">
      <div className="popUpContainer">
        <div className="popUpContent">
          <FaXmark className="popupIcon" onClick={handleExit}/>
        </div>
        <div className="popUpContent">
          <PopUpForm />
        </div>{" "}
      </div>
    </div>
  );
};

export default PopUp;
