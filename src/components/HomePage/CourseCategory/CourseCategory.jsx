import React from "react";
import "./CourseCategory.css";
import CourseCategoryHead from "./CourseCategoryHead";
import CourseCategoryMain from "./CourseCategoryMain";
const CourseCategory = () => {
  return (
    <div className="courseCategory">
      <CourseCategoryHead />
      <CourseCategoryMain />
    </div>
  );
};

export default CourseCategory;
