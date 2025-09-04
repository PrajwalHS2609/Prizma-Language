import React from "react";
import "./HomeMembers.css";
import HomeMembersCard from "./HomeMembersCard";

const HomeMembersMain = () => {
  return (
    <div className="homeMembersMain">
      <HomeMembersCard img="" name="Tim R. Moyer" designation="Lecturer" />
      <HomeMembersCard img="" name="Harold J. Eakes" designation="Lecturer" />
      <HomeMembersCard img="" name="Ruth R. Scott" designation="Lecturer" />
    </div>
  );
};

export default HomeMembersMain;
