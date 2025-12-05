"use client";
import React from "react";
import "./Loader.css";
import language from "@/Imgs/language.gif";
const Loader = () => {
  return (
    <div className="loader-wrapper">
      <img src={language.src} alt="language loader" />
    </div>
  );
};

export default Loader;
