import React from "react";
import "./CourseCategory.css";
import CourseCategoryCard from "./CourseCategoryCard";
const CourseCategoryMain = () => {
  return (
    <div className="courseCategoryMain">
      <CourseCategoryCard head="German" lvl="6 Levels"/>
      <CourseCategoryCard head="Spanish" id="courseCategoryCard1" lvl="6 Levels"/>
      <CourseCategoryCard head="French" lvl="6 Levels"/>
      {/* <CourseCategoryCard head="Japanese" id="courseCategoryCard1" lvl="5 Levels"/>
      <CourseCategoryCard head="Korean" lvl="6 Levels"/> */}
      <CourseCategoryCard head="Italian" id="courseCategoryCard1" lvl="6 Levels"/>
    </div>
  );
};

export default CourseCategoryMain;
