import React from "react";
import CourseMainCard from "../CoursePage/CourseMain/CourseMainCard";
import "./../Styles.css";

const ItalianCourseLvl = () => {
  return (
    <div className="courseLvl" id="courseLvl">
      <CourseMainCard
        head="Italian A1 Level"
        para="Join our A1 Italian classes in Bangalore at Prizma Academy, where we cater to both online learners."
        link="/online-a1-italian-course-in-bangalore"
        text="A1"
      />
      <CourseMainCard
        head="Italian A2 Level"
        para=" Learning a new language can open up a world of opportunities, both personally and professionally."
        link="/online-a2-italian-course-in-bangalore"
        text="A2"
      />
      <CourseMainCard
        head="Italian B1 Level"
        para="If you have completed the A1 and A2 levels of Italian and are looking to further enhance your proficiency, Prizma Academy’s B1 Italian Classes in Bangalore are the perfect next step."
        link="/online-b1-italian-course-in-bangalore"
        text="B1"
      />
      <CourseMainCard
        head="Italian B2 Level"
        para=" Mastering a new language opens up a world of opportunities, and if you are looking to elevate your proficiency in Italian, Prizma Academy offers the best B2 Italian Classes in Bangalore."
        link="/online-b2-italian-course-in-bangalore"
        text="B2"
      />
      <CourseMainCard
        head="Italian C1 Level"
        para="Mastering the Italian language can open doors to numerous opportunities, whether in academia, business, or personal growth. "
        link="/online-c1-italian-course-in-bangalore"
        text="C1"
      />
      <CourseMainCard
        head="Italian C2 Level"
        para="Are you ready to take your Italian language skills to the pinnacle of proficiency? Look no further! Prizma Academy offers C2 Italian classes in Bangalore"
        link="/online-c2-italian-course-in-bangalore"
        text="C2"
      />
    </div>
  );
};

export default ItalianCourseLvl;
