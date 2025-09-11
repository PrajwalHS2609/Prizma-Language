import React from "react";
import "./../Styles.css";
import CourseMainCard from "../CoursePage/CourseMain/CourseMainCard";

const SpanishCourseLvl = () => {
  return (
    <div className="courseLvl" id="courseLvl">
      <CourseMainCard
        img="https://scuola.vamtam.com/wp-content/uploads/2020/04/cat-3-453x453.jpg"
        alt="Spanish Course Img"
        head="Spanish A1 Level"
        para="Join our A1 Spanish classes in Bangalore at Prizma Academy, where we cater to both online learners."
        link="/online-a2-spanish-course-in-bangalore"
      />
      <CourseMainCard
        img="https://scuola.vamtam.com/wp-content/uploads/2020/04/cat-3-453x453.jpg"
        alt="Spanish Course Img"
        head="Spanish A2 Level"
        para=" Learning a new language can open up a world of opportunities, both personally and professionally."
        link="/online-a2-spanish-course-in-bangalore"
      />
      <CourseMainCard
        img="https://scuola.vamtam.com/wp-content/uploads/2020/04/cat-3-453x453.jpg"
        alt="Spanish Course Img"
        head="Spanish B1 Level"
        para="If you have completed the A1 and A2 levels of Spanish and are looking to further enhance your proficiency, Prizma Academy’s B1 Spanish Classes in Bangalore are the perfect next step."
        link="spanish-b1-course"
      />
      <CourseMainCard
        img="https://scuola.vamtam.com/wp-content/uploads/2020/04/cat-3-453x453.jpg"
        alt="Spanish Course Img"
        head="Spanish B2 Level"
        para=" Mastering a new language opens up a world of opportunities, and if you are looking to elevate your proficiency in Spanish, Prizma Academy offers the best B2 Spanish Classes in Bangalore."
        link="spanish-b2-course"
      />
      <CourseMainCard
        img="https://scuola.vamtam.com/wp-content/uploads/2020/04/cat-3-453x453.jpg"
        alt="Spanish Course Img"
        head="Spanish C1 Level"
        para="Mastering the Spanish language can open doors to numerous opportunities, whether in academia, business, or personal growth. "
        link="spanish-c1-course"
      />
      <CourseMainCard
        img="https://scuola.vamtam.com/wp-content/uploads/2020/04/cat-3-453x453.jpg"
        alt="Spanish Course Img"
        head="Spanish C2 Level"
        para="Are you ready to take your Spanish language skills to the pinnacle of proficiency? Look no further! Prizma Academy offers C2 Spanish classes in Bangalore"
        link="spanish-c2-course"
      />
    </div>
  );
};

export default SpanishCourseLvl;
