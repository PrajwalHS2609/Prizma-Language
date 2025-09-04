import React from "react";
import "./HomeMembers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const HomeMembersHead = () => {
  return (
    <div className="homeMembersHead">
      <h6>Team Members</h6>
      <h2>Our Expert <span>Lecturer</span></h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has icon
      </p>
      <div className="homeHeaderBtn">
        <button>
          {" "}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="menuBtnIcon"
          ></FontAwesomeIcon>
          Join Our Team
        </button>
      </div>
    </div>
  );
};

export default HomeMembersHead;
