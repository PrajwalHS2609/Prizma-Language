import React from "react";
import CoursesHeader from "../CourseHeader/CourseHeader";
import HomeWhy from "../HomePage/HomeWhy/HomeWhy";
import HomeTestimonial from "../HomePage/HomeTestimonial/HomeTestimonial";

const GermanCourse = () => {
  return (
    <div>
      <CourseHeader
        country="German"
        img="https://scuola.vamtam.com/wp-content/uploads/2019/12/h-39.jpg"
        heading="Online German Language Course"
        description="If you have a basic knowledge of German , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/"
      />
      {/* <GermanCourseHead /> */}
      {/* <GermanCourseLvl /> */}
      <HomeWhy />
      <HomeTestimonial />
    </div>
  );
};

export default GermanCourse;
