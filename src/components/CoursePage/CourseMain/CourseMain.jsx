import React from "react";
import "./CourseMain.css";
import CourseMainHead from "./CourseMainHead";
import CourseMainCard from "./CourseMainCard";

const CourseMain = () => {
  return (
    <div className="courseMain">
      <CourseMainHead />
      <div className="courseCardContainer">
        <CourseMainCard
          img="https://scuola.vamtam.com/wp-content/uploads/2019/12/h-39-453x453.jpg"
          alt="german Course Img"
          head="German"
          para=" If you have a basic knowledge of German , you are ready to move on to our Elementary courses where you'll build upon the foundations."
          link="/online-german-course-in-bangalore"
        />
        <CourseMainCard
          img="https://scuola.vamtam.com/wp-content/uploads/2020/01/4French-3-453x453.jpg"
          alt="french course img"
          head="French"
          para="If you are looking to progress to a higher level of French, these courses are for you. Take your language skills to the next level and work on your fluency and confidence."
          link="/french-course"
        />
        {/* <CourseMainCard
          img="https://scuola.vamtam.com/wp-content/uploads/2020/04/cat-2-453x453.jpg"
          alt="japanese course img"
          head="Japanese"
          para="Work on your conversation skills as well as comprehension and cultural knowledge with our advanced level Japanese classes."
          link=""
        /> */}
        <CourseMainCard
          img="https://scuola.vamtam.com/wp-content/uploads/2020/04/cat-3-453x453.jpg"
          alt="spanish course img"
          head="Spanish"
          para="Spanish is the second most spoken language on earth, second only to Mandarin, and growing in use every day."
          link="/spanish-course"
        />
        <CourseMainCard
          img="https://images.pexels.com/photos/629142/pexels-photo-629142.jpeg"
          alt="Italian course img"
          head="Italian"
          para="If you have a solid grasp of elementary level vocabulary and grammar, and want to delve deeper into the language, our pre-intermediate courses are a great continuation."
          link="/italian-course"
        />
        {/* <CourseMainCard
          img="https://scuola.vamtam.com/wp-content/uploads/2020/04/cat-2-453x453.jpg"
          alt="korean course img"
          head="Korean"
          para="If you have a solid grasp of elementary level vocabulary and grammar, and want to delve deeper into the language, our pre-intermediate courses are a great continuation."
          link=""
        /> */}
        {/* <CourseMainCard
          img="https://scuola.vamtam.com/wp-content/uploads/2020/04/cat-2-453x453.jpg"
          alt="mandarin course img"
          head="Mandarin"
          para="If you have a solid grasp of elementary level vocabulary and grammar, our pre-intermediate courses are a great continuation."
          link=""
        /> */}
      </div>
    </div>
  );
};

export default CourseMain;
