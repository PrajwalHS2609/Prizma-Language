import React from "react";
import "./HomeBenefits.css";
import Image from "next/image";

const HomeBenefitsCard = (props) => {
  return (
    <div className="homeBenefitsCard">
      <div className="homeBenefitsCard-img">
        <Image src={props.img} alt="" />
      </div>
      <div className="homeBenefitsCard-Head">
        <h3>{props.head}</h3>
      </div>

      <div className="homeBenefitsCard-Content">
        <p>{props.para}</p>
      </div>
    </div>
  );
};

export default HomeBenefitsCard;
