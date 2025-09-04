import React from "react";
import AboutUsHeader from "../AboutUsPage/AboutUsHeader/AboutUsHeader";
import CourseMain from "./CourseMain/CourseMain";
import HomeWhy from "../HomePage/HomeWhy/HomeWhy";
import HomeSubscribe from "../HomePage/HomeSubscribe/HomeSubscribe";
import HomeTestimonial from "../HomePage/HomeTestimonial/HomeTestimonial";

const CoursePage = () => {
  return <div className="homePgContainer">
      <AboutUsHeader heading="Courses" bread="Courses" />
      <CourseMain/>
      <HomeWhy />
      <HomeSubscribe />
      <HomeTestimonial />
      </div>;
};

export default CoursePage;
