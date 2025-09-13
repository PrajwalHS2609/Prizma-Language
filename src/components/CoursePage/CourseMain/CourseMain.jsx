import React from "react";
import "./CourseMain.css";
import CourseMainHead from "./CourseMainHead";
import CoursePageCard from "../CoursePageCard";
import German from"./../../../Imgs/CourseBanner/germany.png"
import French from"./../../../Imgs/CourseBanner/france.png"
import Spanish from"./../../../Imgs/CourseBanner/spain.png"
import Italian from"./../../../Imgs/CourseBanner/italy.png"

const CourseMain = () => {
  return (
    <div className="courseMain">
      <CourseMainHead />
      <div className="courseCardContainer">
        <CoursePageCard
          img={German}
          alt="german Course Img"
          head="German"
          para=" If you have a basic knowledge of German , you are ready to move on to our Elementary courses where you'll build upon the foundations."
          link="/online-german-course-in-bangalore"
        />
        <CoursePageCard
          img={French}
          alt="french course img"
          head="French"
          para="If you are looking to progress to a higher level of French, these courses are for you. Take your language skills to the next level and work on your fluency and confidence."
          link="/online-french-course-in-bangalore"
        />
        {/* <CourseMainCard
          img="https://scuola.vamtam.com/wp-content/uploads/2020/04/cat-2-453x453.jpg"
          alt="japanese course img"
          head="Japanese"
          para="Work on your conversation skills as well as comprehension and cultural knowledge with our advanced level Japanese classes."
          link=""
        /> */}
        <CoursePageCard
          img={Spanish}
          alt="spanish course img"
          head="Spanish"
          para="Spanish is the second most spoken language on earth, second only to Mandarin, and growing in use every day."
          link="/online-spanish-course-in-bangalore"
        />
        <CoursePageCard
          img={Italian}
          alt="Italian course img"
          head="Italian"
          para="If you have a solid grasp of elementary level vocabulary and grammar, and want to delve deeper into the language, our pre-intermediate courses are a great continuation."
          link="/online-italian-course-in-bangalore"
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
