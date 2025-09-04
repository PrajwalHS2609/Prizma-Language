import React from "react";
import "./HomeMembers.css";
import HomeMembersMain from "./HomeMembersMain";
import HomeMembersHead from "./HomeMembersHead";

const HomeMembers = () => {
  return (
    <div className="homeMembers">
      <HomeMembersHead />
      <HomeMembersMain />
    </div>
  );
};

export default HomeMembers;
