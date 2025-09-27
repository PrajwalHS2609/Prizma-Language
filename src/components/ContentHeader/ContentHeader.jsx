"use client"
import React from "react";
import reading from "./../../Imgs/reading.png";
import listening from "./../../Imgs/listening.png";
import writing from "./../../Imgs/writing.png";
import speaking from "./../../Imgs/speaking.png";
import Image from "next/image";
import "./ContentHeader.css";
const ContentHeader = (props) => {
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="contentHeader-container">
      <div className="contentHeader-content">
        <h2>{props.language}</h2>
      </div>
      <div className="contentHeader-content">
        <Image src={props.img} alt={props.heading} width={1300} height={800}/>
        <div className="contentHeader-cover">
          <div className="contentHeader-title">
            <h2>{props.heading}</h2>
          </div>
          <div className="contentHeader-desp" id="contentHeader-desp1">
            <div className="contentHeader-despContent">
              <li>
                <Image src={speaking} alt="speaking" /> Speaking
              </li>
              <li>
                <Image src={listening} alt="listening" />
                Listening
              </li>
              <li>
                <Image src={reading} alt="reading" />
                Reading
              </li>
              <li>
                <Image src={writing} alt="writing" />
                Writing
              </li>
            </div>
            <div className="contentHeader-despContent">
              <p>
                {` If you have a basic knowledge of ${props.language} , you are
                ready to move on to our Elementary courses where you’ll build
                upon the foundations and gain a more solid understanding of the
                language.`}
              </p>
            </div>
            <div className="contentHeader-despContent">
              <button onClick={handlePopUp}>Speak To Advisor</button>
            </div>
          </div>
        </div>
      </div>
      <div className="contentHeader-content">
        <div className="contentHeader-desp" id="contentHeader-desp2">
          <div className="contentHeader-despContent">
            <li>
              <Image src={speaking} alt="speaking" /> Speaking
            </li>
            <li>
              <Image src={listening} alt="listening" />
              Listening
            </li>
            <li>
              <Image src={reading} alt="reading" />
              Reading
            </li>
            <li>
              <Image src={writing} alt="writing" />
              Writing
            </li>
          </div>
          <div className="contentHeader-despContent">
              <p>
                {` If you have a basic knowledge of ${props.language} , you are
                ready to move on to our Elementary courses where you’ll build
                upon the foundations and gain a more solid understanding of the
                language.`}
              </p>
          </div>
          <div className="contentHeader-despContent">
            <button onClick={handlePopUp}>View Course Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
