import Image from "next/image";
import React from "react";
import Cerflogo from "./../../../Imgs/Cerflogo.png";
import "./CefrShow.css"
const CefrShow = () => {
  return (
    <div className="cefrContainer">
      <Image src={Cerflogo} alt="Cerflogo" />
      <h2>Common European Framework of Reference for Languages (CEFR)</h2>{" "}
    </div>
  );
};

export default CefrShow;
