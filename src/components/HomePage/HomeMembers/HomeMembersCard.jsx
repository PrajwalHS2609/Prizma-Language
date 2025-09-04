import React from "react";
import "./HomeMembers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram,faLinkedin,faFacebook } from "@fortawesome/free-brands-svg-icons";
const HomeMembersCard = (props) => {
  return (
    <div className="homeMembersCard">
      <div className="homeMembersCardImg">
        <img
          src="https://demo.themeies.com/edugen-html/assets/images/team/team1.jpg"
          alt=""
        />
      </div>
      <div className="homeMembersCardTxt">
        {" "}
        <h5>{props.name}</h5>
        <h6>{props.designation}</h6>
        <span>
          {" "}
          <FontAwesomeIcon
            icon={faInstagram}
            className="memberSocialIcon"
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faLinkedin}
            className="memberSocialIcon"
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faFacebook}
            className="memberSocialIcon"
          ></FontAwesomeIcon>
        </span>
      </div>
    </div>
  );
};

export default HomeMembersCard;
