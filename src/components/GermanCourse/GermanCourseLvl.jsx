import React from "react";
import CourseMainCard from "../CoursePage/CourseMain/CourseMainCard";
import "./GermanCourse.css";
const GermanCourseLvl = () => {
  return (
    <div className="germanCourseLvl" id="courseLvl">
      <CourseMainCard
        head="German A1 Level"
        para="Join our A1 German classes in Bangalore at Prizma Academy, where we cater to both online learners."
        link="/online-a1-german-course-in-bangalore"
        text="A1"
      />
      <CourseMainCard
        head="German A2 Level"
        para=" Learning a new language can open up a world of opportunities, both personally and professionally."
        link="/online-a2-german-course-in-bangalore"
        text="A2"
      />
      <CourseMainCard
        head="German B1 Level"
        para="If you have completed the A1 and A2 levels of German and are looking to further enhance your proficiency, Prizma Academy’s B1 German Classes in Bangalore are the perfect next step."
        link="/online-b1-german-course-in-bangalore"
        text="B1"
      />
      <CourseMainCard
        head="German B2 Level"
        para=" Mastering a new language opens up a world of opportunities, and if you are looking to elevate your proficiency in German, Prizma Academy offers the best B2 German Classes in Bangalore."
        link="/online-b2-german-course-in-bangalore"
        text="B2"
      />
      <CourseMainCard
        head="German C1 Level"
        para="Mastering the German language can open doors to numerous opportunities, whether in academia, business, or personal growth. "
        link="/online-c1-german-course-in-bangalore"
        text="C1"
      />
      <CourseMainCard
        head="German C2 Level"
        para="Are you ready to take your German language skills to the pinnacle of proficiency? Look no further! Prizma Academy offers C2 German classes in Bangalore"
        link="/online-c2-german-course-in-bangalore"
        text="C2"
      />
    </div>
  );
};

export default GermanCourseLvl;
